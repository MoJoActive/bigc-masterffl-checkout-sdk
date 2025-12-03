import type { CheckoutService } from "@bigcommerce/checkout-sdk";
import { CONFIG_APP_URL, CONFIG_BASE_URL, CONFIG_SDK_URL, DEFAULT_LANGUAGE } from "./config";
import type { MasterFFLBaseConfig, MasterFFLContextType } from "./types";

const fflProducts = new Map<number, boolean>();
const fflLineItems = new Map<number, any>();

const init = async () => {
  // get the mapping and cart
  const [mapping, cart, checkoutSettings] = await Promise.all([getMappingData(), getCart(), getCheckoutSettings()]);
  let isFFL = false;
  let isSuppressor = false;
  let isEntirelyFFL = false;

  window.masterFFLConfig = window.masterFFLConfig || ({} as MasterFFLBaseConfig);
  window.masterFFLConfig.hasMultiShippingEnabled = checkoutSettings.storeConfig.checkoutSettings.hasMultiShippingEnabled;

  // get the custom fields
  const ffAttr = mapping?.ffl_custom_attribute_name.trim().toLowerCase();
  const ffValue = mapping?.ffl_custom_attribute_value.trim().toLowerCase();
  const fflFirearmAttr = mapping?.ffl_firearm_custom_attribute_name.trim().toLowerCase();
  const fflFirearmValue = mapping?.ffl_firearm_custom_attribute_value;

  // get the products
  const productIds = cart?.lineItems.physicalItems.map((item: any) => item.productEntityId);
  const products = await SDK.getProducts(productIds);

  // Detect FFL and Suppressor from Products Custom Fields
  isFFL = products.some((product: any) => {
    return product.customFields.some((field: any) => field.name.trim().toLowerCase() === ffAttr && field.value.trim().toLowerCase() === ffValue);
  });
  isSuppressor = products.some((product: any) => {
    return product.customFields.some(
      (field: any) => field.name.trim().toLowerCase() === fflFirearmAttr && field.value.trim().toLowerCase() === fflFirearmValue?.[3]?.toLowerCase()
    );
  });

  // save the product to the maps
  products.forEach((product: any) => {
    if (product.customFields.some((field: any) => field.name.trim().toLowerCase() === ffAttr && field.value.trim().toLowerCase() === ffValue)) {
      fflProducts.set(product.entityId, product);
    }
    if (
      product.customFields.some(
        (field: any) => field.name.trim().toLowerCase() === fflFirearmAttr && field.value.trim().toLowerCase() === fflFirearmValue?.[3]?.toLowerCase()
      )
    ) {
      fflProducts.set(product.entityId, true);
    }
  });

  cart?.lineItems.physicalItems.forEach((item: any) => {
    if (fflProducts.get(item.productEntityId)) {
      fflLineItems.set(item.entityId, item);
    }
  });

  // Detect FFL and Suppressor from Category Mapping
  if (mapping && mapping?.category_mapping.length > 0) {
    interface CategoryMappingItem {
      categoryId: number;
      priority: string;
      fflMapping: string;
    }

    const productsWithCategoryMapping = products
      .map((product: any) => {
        let lowestPriority: CategoryMappingItem | null = null;
        const matchedFFLCategories = (mapping.category_mapping as CategoryMappingItem[]).filter((c: CategoryMappingItem) =>
          product.categoryIds.some((ci: { entityId: number }) => c.categoryId === ci.entityId)
        );

        if (matchedFFLCategories.length > 0) {
          const lowestPriorityFFl = matchedFFLCategories.reduce((min: CategoryMappingItem, fflCat: CategoryMappingItem) =>
            parseInt(fflCat.priority, 10) < parseInt(min.priority, 10) ? fflCat : min
          );

          lowestPriority = lowestPriorityFFl.fflMapping ? lowestPriorityFFl : null;
        }

        // if the product has a custom field that is "no", return null
        if (product.customFields.some((field: any) => field.name.trim().toLowerCase() === ffAttr && field.value.trim().toLowerCase() === "no")) {
          return null;
        }

        if (lowestPriority) {
          fflProducts.set(product.entityId, true);
          fflLineItems.set(product.entityId, product);
        }

        return { ...product, fflFirearmType: lowestPriority ? lowestPriority.fflMapping : null };
      })
      .filter((product: any) => product !== null);

    isFFL = isFFL || productsWithCategoryMapping.some((product: any) => product.fflFirearmType);
    isSuppressor =
      isSuppressor ||
      productsWithCategoryMapping.some(
        (product: any) => product.fflFirearmType && product.fflFirearmType.trim().toLowerCase() === fflFirearmValue?.[3]?.toLowerCase()
      );
  }

  isEntirelyFFL = products.length === fflProducts.size;

  return { isFFL, isSuppressor, isEntirelyFFL };
};

const getConfig = () => {
  return {
    ...((window.masterFFLConfig || {}) as MasterFFLBaseConfig),
    env: window.masterFFLConfig?.env || "production",
    baseUrl: CONFIG_BASE_URL[window.masterFFLConfig?.env || "production"],
    appUrl: CONFIG_APP_URL[window.masterFFLConfig?.env || "production"],
    sdkUrl: CONFIG_SDK_URL[window.masterFFLConfig?.env || "production"],
    storeDomain: window.location.hostname.replace("www.", ""),
    storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || (window as any).storefrontAPIToken,
    lang: {
      heading: window.masterFFLConfig?.lang?.heading || DEFAULT_LANGUAGE.heading,
      subheading: window.masterFFLConfig?.lang?.subheading || DEFAULT_LANGUAGE.subheading,
      postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || DEFAULT_LANGUAGE.postalCodeLabel,
      buttonText: window.masterFFLConfig?.lang?.buttonText || DEFAULT_LANGUAGE.buttonText,
      termsLabel: window.masterFFLConfig?.lang?.termsLabel || DEFAULT_LANGUAGE.termsLabel,
      selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || DEFAULT_LANGUAGE.selectedDealerLabel,
    },
  };
};

const getMappingData = async () => {
  // return cached mapping if it exists
  const cacheKey = `mapping-${getConfig().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const cachedMapping = window.masterFFLCache[cacheKey];
  if (cachedMapping) {
    return cachedMapping;
  }

  // get the mapping from the API
  const response = await fetch(`${getConfig().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: getConfig().storeHash ?? "",
    }),
  });

  const data = await response.json();
  const mapping = data as MasterFFLContextType["mappingData"];

  // cache the mapping
  window.masterFFLCache[cacheKey] = mapping;

  // return the mapping
  return mapping;
};

const getCheckoutSettings = async () => {
  // return cached cart if it exists
  const cacheKey = `checkout-settings-${getConfig().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const cachedCart = window.masterFFLCache[cacheKey];
  if (cachedCart) {
    return cachedCart;
  }

  const response = await fetch(`/api/storefront/checkout-settings?checkoutId=${getConfig().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" },
  });
  const data = await response.json();
  const checkoutSettings = data as any;

  // cache the checkout settings
  window.masterFFLCache[cacheKey] = checkoutSettings;

  return checkoutSettings;
};

const saveDealer = async (checkoutId: string | undefined, dealer: any) => {
  // remove the selected dealer from the session storage
  removeSession(checkoutId, "selectedDealer");

  // get the line items
  const cart = await getCart();
  let lineItems = cart?.lineItems.physicalItems.map((item: any) => ({
    itemId: item.entityId,
    productId: item.productEntityId,
    quantity: item.quantity,
  }));

  const hasMultiShippingEnabled = getConfig().hasMultiShippingEnabled;
  const nonFFLItemStrategy = getConfig().nonFFLItemStrategy;

  if (hasMultiShippingEnabled) {
    if (nonFFLItemStrategy === "FORCE_TO_FFL") {
      // force all items to the ffl dealer
    } else if (nonFFLItemStrategy === "FORCE_TO_NON_FFL" || nonFFLItemStrategy === "ALLOW_CHOICE") {
      // only allow ffl items to be on the first consignment, the rest will be consigned to a user-entered address
      lineItems = lineItems.filter((item: any) => fflProducts.get(Number(item.productId)));
    }
  }

  // create the shipping data
  const shippingData = {
    address: {
      firstName: dealer.name,
      lastName: "n/a",
      phone: dealer.contact.primaryPhone ? dealer.contact.primaryPhone : "0000000000",
      company: dealer.name,
      address1: dealer.contact.address.street1,
      address2: "",
      city: dealer.contact.address.city,
      stateOrProvinceCode: dealer.contact.address.state,
      stateOrProvince: "",
      shouldSaveAddress: false,
      postalCode: dealer.contact.address.zip,
      localizedCountry: "United States",
      countryCode: "US",
      customFields: [],
    },
    lineItems: lineItems as any[],
  };

  // save the dealer
  const response = await fetch(`${getConfig().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: dealer.id.match(/\d+/g)?.join("") || "",
      cartId: checkoutId ?? "",
      storeHash: getConfig().storeHash ?? "",
    }),
  });
  const dealerData = await response.json();

  // throw an error if the dealer was not saved
  if (dealerData.status === false) {
    throw new Error("An error occurred while saving the dealer. Please try again.");
  }

  // assign the items to the ffl dealer address in custom checkout
  // in the script manager we don't have access to reload the checkout-sdk, so we manually
  // assign the shipping address fields which triggers a new consignment for us.
  //
  // custom checkout has access to reload the checkout-sdk which will bring in
  // the new consignments with the ffl dealer address assigned to it
  // if (isCustomCheckout) {
  await fetch(
    `/api/storefront/checkouts/${
      getConfig().checkoutId
    }/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: shippingData.address, lineItems: shippingData.lineItems }]),
    }
  );

  // save the selected dealer to session storage
  setSession(checkoutId, { selectedDealer: JSON.stringify(dealer) });

  if (getConfig().hasMultiShippingEnabled) {
    window.location.reload();
  }

  return {
    dealer,
    shippingData,
  };
};

const getCart = async () => {
  // return cached cart if it exists
  const cacheKey = `cart-${getConfig().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const cachedCart = window.masterFFLCache[cacheKey];
  if (cachedCart) {
    return cachedCart;
  }

  // get the cart from the API
  const response = await fetch(`/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${getConfig().storefrontApiToken}` },
    body: JSON.stringify({
      query: `
        query Cart {
        site {
          cart {
            entityId
            lineItems {
              physicalItems {
                entityId
                productEntityId
                quantity
              }
            }
          }
        }
        }
      `,
    }),
  });
  const data = await response.json();

  // cache the cart
  window.masterFFLCache[cacheKey] = data.data.site.cart;

  // return the cart
  return data.data.site.cart;
};

const getProducts = async (ids: number[] | undefined) => {
  if (!ids) return [];

  const productsResponse = await fetch(`/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getConfig().storefrontApiToken}`,
    },
    body: JSON.stringify({
      query: `
            query Products($ids: [Int!]) {
                site {
                    products(entityIds: $ids) {
                        edges {
                            node {
                                entityId
                                categories{
                                  edges{
                                    node{
                                      entityId
                                      name
                                    }
                                  }
                                }
                                customFields {
                                    edges {
                                        node {
                                            name
                                            value
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
      variables: { ids },
    }),
  });

  const result = await productsResponse.json();

  // map the products to the expected format
  const products = result.data.site.products.edges.map((edge: any) => ({
    entityId: edge.node.entityId,
    customFields: edge.node.customFields.edges.map((fieldEdge: any) => fieldEdge.node),
    categoryIds: edge.node.categories.edges.map((fieldEdge: any) => fieldEdge.node),
  }));

  return products;
};

const getSession = (checkoutId: string | undefined) => {
  return {
    postalCode: sessionStorage.getItem(`${checkoutId}-postalCode`),
    acceptTerms:
      sessionStorage.getItem(`${checkoutId}-acceptTerms`) === "true"
        ? true
        : sessionStorage.getItem(`${checkoutId}-acceptTerms`) === "false"
        ? false
        : undefined,
    selectedDealer: sessionStorage.getItem(`${checkoutId}-selectedDealer`),
  };
};

const setSession = (checkoutId: string | undefined, options: { postalCode?: string; acceptTerms?: string; selectedDealer: string }) => {
  const { postalCode, acceptTerms, selectedDealer } = options;
  sessionStorage.setItem(`${checkoutId}-postalCode`, postalCode || sessionStorage.getItem(`${checkoutId}-postalCode`) || "");
  sessionStorage.setItem(`${checkoutId}-acceptTerms`, acceptTerms || sessionStorage.getItem(`${checkoutId}-acceptTerms`) || "");
  sessionStorage.setItem(`${checkoutId}-selectedDealer`, selectedDealer || sessionStorage.getItem(`${checkoutId}-selectedDealer`) || "");
};

const removeSession = (checkoutId: string | undefined, key: string) => {
  sessionStorage.removeItem(`${checkoutId}-${key}`);
};

const getFFLConsignmentIndex = async (): Promise<number | null> => {
  try {
    const checkoutId = getConfig().checkoutId;
    if (!checkoutId) return null;

    // Get checkout with consignments
    const checkout = await getCheckout();

    if (!checkout) {
      // Fallback: if we have a selected dealer and split consignments is enabled,
      // the FFL consignment is typically the first one (index 0)
      if (getConfig().hasMultiShippingEnabled) {
        const selectedDealer = getSession(checkoutId).selectedDealer;
        if (selectedDealer && selectedDealer !== "null") {
          return 0;
        }
      }
      return null;
    }

    // Handle different response structures (checkout.consignments or checkout.data.consignments)
    const consignments = checkout?.consignments || checkout?.data?.consignments || [];

    if (consignments.length === 0) {
      // Fallback: if we have a selected dealer and split consignments is enabled,
      // the FFL consignment is typically the first one (index 0)
      if (getConfig().hasMultiShippingEnabled) {
        const selectedDealer = getSession(checkoutId).selectedDealer;
        if (selectedDealer && selectedDealer !== "null") {
          return 0;
        }
      }
      return null;
    }

    // Find the consignment that contains FFL items
    for (let i = 0; i < consignments.length; i++) {
      const consignment = consignments[i];
      const lineItems = consignment?.lineItems?.physicalItems || [];

      // Check if any line item in this consignment is an FFL product
      const hasFFLItems = lineItems.some((item: any) => {
        const productId = item.productEntityId || item.productId;
        return fflProducts.get(Number(productId));
      });

      if (hasFFLItems) {
        return i;
      }
    }

    // Fallback: if we have a selected dealer and split consignments is enabled,
    // the FFL consignment is typically the first one (index 0)
    if (getConfig().hasMultiShippingEnabled) {
      const selectedDealer = getSession(checkoutId).selectedDealer;
      if (selectedDealer && selectedDealer !== "null") {
        return 0;
      }
    }

    return null;
  } catch (error) {
    console.error("Error getting FFL consignment index:", error);
    // Fallback on error
    const checkoutId = getConfig().checkoutId;
    if (checkoutId && getConfig().hasMultiShippingEnabled) {
      const selectedDealer = getSession(checkoutId).selectedDealer;
      if (selectedDealer && selectedDealer !== "null") {
        return 0;
      }
    }
    return null;
  }
};

const getCheckout = async () => {
  const response = await fetch(
    `/api/storefront/checkouts/${getConfig().checkoutId}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await response.json();
  return data;
};

export const SDK = {
  init,
  getConfig,
  getSession,
  setSession,
  removeSession,
  saveDealer,
  getMappingData,
  getProducts,
  getCheckout,
  getFFLConsignmentIndex,
  fflProducts,
  fflLineItems,
  checkoutService: null as CheckoutService | null,
};
