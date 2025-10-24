## BigCommerce MasterFFL Checkout SDK

React-based components and a standalone script to add FFL dealer selection to BigCommerce checkouts. Supports both:

- Custom Checkout (React component, externalizes React)
- Script Manager (standalone UMD, bundles React)

---

### Builds and output

This repo produces two artifacts in `dist/`:
- ES module and UMD for Custom Checkout:
  - `dist/bigc-masterffl-sdk.checkout.es.js`
  - `dist/bigc-masterffl-sdk.checkout.umd.cjs`
- UMD for Script Manager (bundles React):
  - `dist/bigc-masterffl-sdk.standalone.js`

Types are emitted to `dist/types/`:
- `dist/types/bigcommerce/custom-checkout/index.d.ts`
- `dist/types/bigcommerce/standalone/index.d.ts`

Package export map:
- Import path `bigc-masterffl-checkout-sdk/checkout` resolves to the Custom Checkout build.

---

### Development scripts

From `package.json`:

```bash
# Build both targets
npm run build

# Build each target
npm run build:checkout
npm run build:standalone

# Develop: watch-rebuild and serve dist/
npm run dev

# Push new build to yalc-linked consumers
npm run watch
npm run push
```

Build configs:
- `vite.checkout.config.ts` (externalizes `react`, `react-dom`, `@bigcommerce/checkout-sdk`)
- `vite.standalone.config.ts` (bundles React, produces `bigc-masterffl-sdk.standalone.js`)

Output goes to `dist/` with sourcemaps enabled.

---

### Publishing with yalc (for local integration)

```bash
# Build and publish to your local yalc store
npm run publish

# In a consuming project
yalc add bigc-masterffl-checkout-sdk

# When this repo changes
yalc push
```


---

### Contributing

See the contribution guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md) for commit conventions and release process.

