import ze, { createContext as Tt, useContext as Be, useMemo as V, useState as q, useEffect as A, useCallback as ie, useRef as oe } from "react";
import { createPortal as Et } from "react-dom";
var ve = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Rt() {
  if (Ye) return G;
  Ye = 1;
  var a = ze, n = Symbol.for("react.element"), c = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(w, d, y) {
    var p, h = {}, F = null, T = null;
    y !== void 0 && (F = "" + y), d.key !== void 0 && (F = "" + d.key), d.ref !== void 0 && (T = d.ref);
    for (p in d) s.call(d, p) && !g.hasOwnProperty(p) && (h[p] = d[p]);
    if (w && w.defaultProps) for (p in d = w.defaultProps, d) h[p] === void 0 && (h[p] = d[p]);
    return { $$typeof: n, type: w, key: F, ref: T, props: h, _owner: f.current };
  }
  return G.Fragment = c, G.jsx = b, G.jsxs = b, G;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function jt() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ze, n = Symbol.for("react.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), w = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), E = Symbol.iterator, P = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = E && e[E] || e[P];
      return typeof t == "function" ? t : null;
    }
    var R = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        N("error", e, r);
      }
    }
    function N(e, t, r) {
      {
        var i = R.ReactDebugCurrentFrame, m = i.getStackAddendum();
        m !== "" && (t += "%s", r = r.concat([m]));
        var v = r.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Q = !1, ee = !1, te = !1, le = !1, k = !1, O;
    O = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === g || k || e === f || e === y || e === p || le || e === T || Q || ee || te || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === h || e.$$typeof === b || e.$$typeof === w || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === O || e.getModuleId !== void 0));
    }
    function J(e, t, r) {
      var i = e.displayName;
      if (i)
        return i;
      var m = t.displayName || t.name || "";
      return m !== "" ? r + "(" + m + ")" : r;
    }
    function be(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case c:
          return "Portal";
        case g:
          return "Profiler";
        case f:
          return "StrictMode";
        case y:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var t = e;
            return be(t) + ".Consumer";
          case b:
            var r = e;
            return be(r._context) + ".Provider";
          case d:
            return J(e, e.render, "ForwardRef");
          case h:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case F: {
            var m = e, v = m._payload, u = m._init;
            try {
              return $(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, K = 0, Ce, we, Fe, _e, xe, Se, Te;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Qe() {
      {
        if (K === 0) {
          Ce = console.log, we = console.info, Fe = console.warn, _e = console.error, xe = console.group, Se = console.groupCollapsed, Te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        K++;
      }
    }
    function et() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, e, {
              value: Ce
            }),
            info: M({}, e, {
              value: we
            }),
            warn: M({}, e, {
              value: Fe
            }),
            error: M({}, e, {
              value: _e
            }),
            group: M({}, e, {
              value: xe
            }),
            groupCollapsed: M({}, e, {
              value: Se
            }),
            groupEnd: M({}, e, {
              value: Te
            })
          });
        }
        K < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = R.ReactCurrentDispatcher, ue;
    function re(e, t, r) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (m) {
            var i = m.stack.trim().match(/\n( *(at )?)/);
            ue = i && i[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var fe = !1, ae;
    {
      var tt = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new tt();
    }
    function Re(e, t) {
      if (!e || fe)
        return "";
      {
        var r = ae.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      fe = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ce.current, ce.current = null, Qe();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (I) {
              i = I;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var l = I.stack.split(`
`), j = i.stack.split(`
`), _ = l.length - 1, x = j.length - 1; _ >= 1 && x >= 0 && l[_] !== j[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (l[_] !== j[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || l[_] !== j[x]) {
                    var L = `
` + l[_].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && ae.set(e, L), L;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        fe = !1, ce.current = v, et(), Error.prepareStackTrace = m;
      }
      var Y = e ? e.displayName || e.name : "", U = Y ? re(Y) : "";
      return typeof e == "function" && ae.set(e, U), U;
    }
    function rt(e, t, r) {
      return Re(e, !1);
    }
    function at(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ne(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, at(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case y:
          return re("Suspense");
        case p:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return rt(e.render);
          case h:
            return ne(e.type, t, r);
          case F: {
            var i = e, m = i._payload, v = i._init;
            try {
              return ne(v(m), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, je = {}, Ie = R.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var t = e._owner, r = ne(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(r);
      } else
        Ie.setExtraStackFrame(null);
    }
    function nt(e, t, r, i, m) {
      {
        var v = Function.call.bind(H);
        for (var u in e)
          if (v(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((i || "React class") + ": " + r + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              l = e[u](t, u, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              l = _;
            }
            l && !(l instanceof Error) && (se(m), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, u, typeof l), se(null)), l instanceof Error && !(l.message in je) && (je[l.message] = !0, se(m), S("Failed %s type: %s", r, l.message), se(null));
          }
      }
    }
    var st = Array.isArray;
    function de(e) {
      return st(e);
    }
    function ot(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, r = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r;
      }
    }
    function it(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Pe(e) {
      if (it(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ot(e)), Oe(e);
    }
    var Le = R.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ke, De;
    function ct(e) {
      if (H.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (H.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ft(e, t) {
      typeof e.ref == "string" && Le.current;
    }
    function dt(e, t) {
      {
        var r = function() {
          ke || (ke = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: r,
          configurable: !0
        });
      }
    }
    function pt(e, t) {
      {
        var r = function() {
          De || (De = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        r.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: r,
          configurable: !0
        });
      }
    }
    var mt = function(e, t, r, i, m, v, u) {
      var l = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: r,
        props: u,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function ht(e, t, r, i, m) {
      {
        var v, u = {}, l = null, j = null;
        r !== void 0 && (Pe(r), l = "" + r), ut(t) && (Pe(t.key), l = "" + t.key), ct(t) && (j = t.ref, ft(t, m));
        for (v in t)
          H.call(t, v) && !lt.hasOwnProperty(v) && (u[v] = t[v]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (v in _)
            u[v] === void 0 && (u[v] = _[v]);
        }
        if (l || j) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          l && dt(u, x), j && pt(u, x);
        }
        return mt(e, l, j, m, i, Le.current, u);
      }
    }
    var pe = R.ReactCurrentOwner, Ae = R.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var t = e._owner, r = ne(e.type, e._source, t ? t.type : null);
        Ae.setExtraStackFrame(r);
      } else
        Ae.setExtraStackFrame(null);
    }
    var me;
    me = !1;
    function he(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function $e() {
      {
        if (pe.current) {
          var e = $(pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gt(e) {
      return "";
    }
    var Ne = {};
    function vt(e) {
      {
        var t = $e();
        if (!t) {
          var r = typeof e == "string" ? e : e.displayName || e.name;
          r && (t = `

Check the top-level render call using <` + r + ">.");
        }
        return t;
      }
    }
    function Me(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var r = vt(t);
        if (Ne[r])
          return;
        Ne[r] = !0;
        var i = "";
        e && e._owner && e._owner !== pe.current && (i = " It was passed a child from " + $(e._owner.type) + "."), W(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', r, i), W(null);
      }
    }
    function Ue(e, t) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            he(i) && Me(i, t);
          }
        else if (he(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = C(e);
          if (typeof m == "function" && m !== e.entries)
            for (var v = m.call(e), u; !(u = v.next()).done; )
              he(u.value) && Me(u.value, t);
        }
      }
    }
    function yt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var r;
        if (typeof t == "function")
          r = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === h))
          r = t.propTypes;
        else
          return;
        if (r) {
          var i = $(t);
          nt(r, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !me) {
          me = !0;
          var m = $(t);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bt(e) {
      {
        for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
          var i = t[r];
          if (i !== "children" && i !== "key") {
            W(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var qe = {};
    function We(e, t, r, i, m, v) {
      {
        var u = B(e);
        if (!u) {
          var l = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = gt();
          j ? l += j : l += $e();
          var _;
          e === null ? _ = "null" : de(e) ? _ = "array" : e !== void 0 && e.$$typeof === n ? (_ = "<" + ($(e.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, l);
        }
        var x = ht(e, t, r, m, v);
        if (x == null)
          return x;
        if (u) {
          var L = t.children;
          if (L !== void 0)
            if (i)
              if (de(L)) {
                for (var Y = 0; Y < L.length; Y++)
                  Ue(L[Y], e);
                Object.freeze && Object.freeze(L);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(L, e);
        }
        if (H.call(t, "key")) {
          var U = $(e), I = Object.keys(t).filter(function(St) {
            return St !== "key";
          }), ge = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!qe[U + ge]) {
            var xt = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, U, xt, U), qe[U + ge] = !0;
          }
        }
        return e === s ? bt(x) : yt(x), x;
      }
    }
    function Ct(e, t, r) {
      return We(e, t, r, !0);
    }
    function wt(e, t, r) {
      return We(e, t, r, !1);
    }
    var Ft = wt, _t = Ct;
    X.Fragment = s, X.jsx = Ft, X.jsxs = _t;
  }()), X;
}
process.env.NODE_ENV === "production" ? ve.exports = Rt() : ve.exports = jt();
var o = ve.exports;
const It = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
}, Ot = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
}, Pt = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
}, z = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
}, Lt = async () => {
  const [a, n] = await Promise.all([Je(), Ke()]);
  let c = !1, s = !1;
  const f = a?.ffl_custom_attribute_name.trim().toLowerCase(), g = a?.ffl_custom_attribute_value.trim().toLowerCase(), b = a?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), w = a?.ffl_firearm_custom_attribute_value, d = n?.lineItems.physicalItems.map((p) => p.productEntityId), y = await Z.getProducts(d);
  if (c = y.some((p) => p.customFields.some((h) => h.name.trim().toLowerCase() === f && h.value.trim().toLowerCase() === g)), s = y.some((p) => p.customFields.some(
    (h) => h.name.trim().toLowerCase() === b && h.value.trim().toLowerCase() === w?.[3]?.toLowerCase()
  )), c || s)
    return {
      isFFL: c,
      isSuppressor: s
    };
  if (a && a?.category_mapping.length > 0) {
    const p = y.map((h) => {
      let F = null;
      const T = a.category_mapping.filter(
        (E) => h.categoryIds.some((P) => E.categoryId === P.entityId)
      );
      if (T.length > 0) {
        const E = T.reduce(
          (P, C) => parseInt(C.priority, 10) < parseInt(P.priority, 10) ? C : P
        );
        F = E.fflMapping ? E : null;
      }
      return { ...h, fflFirearmType: F ? F.fflMapping : null };
    });
    c = p.some((h) => h.fflFirearmType), s = p.some(
      (h) => h.fflFirearmType && h.fflFirearmType.trim().toLowerCase() === w?.[3]
    );
  }
  return {
    isFFL: c,
    isSuppressor: s
  };
}, D = () => ({
  ...window.masterFFLConfig || {},
  env: window.masterFFLConfig?.env || "production",
  baseUrl: It[window.masterFFLConfig?.env || "production"],
  appUrl: Ot[window.masterFFLConfig?.env || "production"],
  sdkUrl: Pt[window.masterFFLConfig?.env || "production"],
  storeDomain: window.location.hostname.replace("www.", ""),
  storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
  lang: {
    heading: window.masterFFLConfig?.lang?.heading || z.heading,
    subheading: window.masterFFLConfig?.lang?.subheading || z.subheading,
    postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || z.postalCodeLabel,
    buttonText: window.masterFFLConfig?.lang?.buttonText || z.buttonText,
    termsLabel: window.masterFFLConfig?.lang?.termsLabel || z.termsLabel,
    selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || z.selectedDealerLabel
  }
}), Je = async () => {
  const a = `mapping-${D().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const n = window.masterFFLCache[a];
  if (n)
    return n;
  const f = await (await fetch(`${D().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: D().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[a] = f, f;
}, kt = async (a, n, c = !1) => {
  Ge(a, "selectedDealer");
  const f = (await Ke())?.lineItems.physicalItems.map((d) => ({
    itemId: d.entityId,
    quantity: d.quantity
  })), g = {
    address: {
      firstName: n.name,
      lastName: "n/a",
      phone: n.contact.primaryPhone ? n.contact.primaryPhone : "0000000000",
      company: n.name,
      address1: n.contact.address.street1,
      address2: "",
      city: n.contact.address.city,
      stateOrProvinceCode: n.contact.address.state,
      stateOrProvince: "",
      shouldSaveAddress: !1,
      postalCode: n.contact.address.zip,
      localizedCountry: "United States",
      countryCode: "US",
      customFields: []
    },
    lineItems: f
  };
  if ((await (await fetch(`${D().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: n.id.match(/\d+/g)?.join("") || "",
      cartId: a ?? "",
      storeHash: D().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return c && await fetch(
    `/api/storefront/checkouts/${D().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: g.address, lineItems: g.lineItems }])
    }
  ), He(a, { selectedDealer: JSON.stringify(n) }), {
    dealer: n,
    shippingData: g
  };
}, Ke = async () => {
  const a = `cart-${D().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const n = window.masterFFLCache[a];
  if (n)
    return n;
  const s = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${D().storefrontApiToken}` },
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
      `
    })
  })).json();
  return window.masterFFLCache[a] = s.data.site.cart, s.data.site.cart;
}, Dt = async (a) => a ? (await (await fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${D().storefrontApiToken}`
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
    variables: { ids: a }
  })
})).json()).data.site.products.edges.map((f) => ({
  entityId: f.node.entityId,
  customFields: f.node.customFields.edges.map((g) => g.node),
  categoryIds: f.node.categories.edges.map((g) => g.node)
})) : [], At = (a) => ({
  postalCode: sessionStorage.getItem(`${a}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${a}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${a}-acceptTerms`) === "false" ? !1 : void 0,
  selectedDealer: sessionStorage.getItem(`${a}-selectedDealer`)
}), He = (a, n) => {
  const { postalCode: c, acceptTerms: s, selectedDealer: f } = n;
  sessionStorage.setItem(`${a}-postalCode`, c || sessionStorage.getItem(`${a}-postalCode`) || ""), sessionStorage.setItem(`${a}-acceptTerms`, s || sessionStorage.getItem(`${a}-acceptTerms`) || ""), sessionStorage.setItem(`${a}-selectedDealer`, f || sessionStorage.getItem(`${a}-selectedDealer`) || "");
}, Ge = (a, n) => {
  sessionStorage.removeItem(`${a}-${n}`);
}, Z = {
  init: Lt,
  getConfig: D,
  getSession: At,
  setSession: He,
  removeSession: Ge,
  saveDealer: kt,
  getMappingData: Je,
  getProducts: Dt
};
var Xe = /* @__PURE__ */ ((a) => (a.Billing = "billing", a.Customer = "customer", a.Payment = "payment", a.Shipping = "shipping", a))(Xe || {});
const Ze = Tt({}), ye = () => {
  const a = Be(Ze);
  if (!a)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return a;
}, Wt = ({ checkoutContext: a, getCheckoutStepStatuses: n }) => {
  const { checkoutService: c, checkoutState: s } = Be(a), f = V(() => s.data.getConfig()?.storeProfile, [s]), g = V(() => s.data.getCheckout()?.id, [s]), b = V(() => f?.storeHash, [f]), [w, d] = q(!1), [y, p] = q({
    postalCode: "",
    acceptTerms: !1
  }), [h, F] = q(null), [T, E] = q(null), [P, C] = q(!1), [R, S] = q(!1);
  A(() => {
    if (!g) return;
    const { postalCode: k, acceptTerms: O, selectedDealer: B } = Z.getSession(g);
    k && p((J) => ({ ...J, postalCode: k })), O && p((J) => ({ ...J, acceptTerms: O })), B && B !== "null" && E(JSON.parse(B));
  }, [g]);
  const N = V(
    () => ({
      ...Z.getConfig(),
      storeHash: b,
      checkoutId: s.data.getCheckout()?.id
    }),
    [b, s]
  ), Q = ie(
    async (k) => {
      E(null), F(null);
      try {
        await Z.saveDealer(g, k, !0), await c.loadCheckout(g), E(k);
      } catch {
        F("An error occurred while saving the dealer. Please try again.");
      }
    },
    [s, N, g, E, F, c]
  ), ee = V(() => n(s), [s]);
  A(() => {
    if (ee.find((O) => O.isActive)?.type !== Xe.Shipping && (!T || !y.acceptTerms)) {
      const O = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      O && O.click();
    }
  }, [ee, T, y.acceptTerms]);
  const te = ie(async () => {
    if (!N.storeHash || !s.data.getCart()) return;
    const { isFFL: k, isSuppressor: O } = await Z.init();
    C(k), S(O);
  }, [N.storeHash, s.data.getCart()]);
  A(() => {
    te();
  }, [te]);
  const le = V(
    () => ({
      checkoutService: c,
      checkoutState: s,
      config: N,
      isModalOpen: w,
      setIsModalOpen: d,
      values: y,
      setValues: p,
      handleSaveDealer: Q,
      selectedDealer: T,
      error: h,
      isFFL: P,
      isSuppressor: R
    }),
    [
      c,
      s,
      N,
      w,
      d,
      y,
      p,
      Q,
      T,
      h,
      P,
      R
    ]
  );
  return /* @__PURE__ */ o.jsx(Ze.Provider, { value: le, children: (P || R) && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx($t, {}),
    /* @__PURE__ */ o.jsx(Nt, {}),
    /* @__PURE__ */ o.jsx(Mt, {})
  ] }) });
}, $t = () => {
  const { setIsModalOpen: a, values: n, setValues: c, selectedDealer: s, config: f, error: g } = ye(), [b, w] = q({ postalCode: "", acceptTerms: "" }), d = oe(null), y = oe(null), p = oe(!1), h = oe(!1);
  A(() => {
    p.current = n.acceptTerms;
  }, [n.acceptTerms]), A(() => {
    h.current = !!s;
  }, [s]);
  const F = ie(() => {
    const C = document.getElementById("checkout-shipping-continue");
    if (!C) return;
    y.current = C;
    const R = !p.current || !h.current;
    C.disabled !== R && (C.disabled = R);
  }, []);
  A(() => {
    const C = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!C) return;
    const R = () => F();
    return d.current = new MutationObserver(R), d.current.observe(C, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), F(), () => {
      d.current && (d.current.disconnect(), d.current = null);
    };
  }, [F]), A(() => {
    F();
  }, [F, n.acceptTerms, s]);
  const T = (C) => {
    w({ postalCode: "", acceptTerms: "" }), C.target.name === "postalCode" ? (c({ ...n, postalCode: C.target.value }), sessionStorage.setItem(`${f.checkoutId}-postalCode`, C.target.value)) : (c({ ...n, acceptTerms: C.target.checked }), sessionStorage.setItem(`${f.checkoutId}-acceptTerms`, C.target.checked.toString()));
  }, E = () => {
    if (w({ postalCode: "", acceptTerms: "" }), !n.postalCode) {
      w({ ...b, postalCode: `${f.lang.postalCodeLabel} is required` });
      return;
    }
    a(!0);
  }, P = (C) => {
    C.key === "Enter" && E();
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "form-body",
      style: {
        border: "1px solid #ebebeb",
        padding: "1.5rem",
        marginBottom: "15px",
        borderRadius: "4px"
      },
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "15px"
            },
            children: /* @__PURE__ */ o.jsxs("div", { className: `form-field ${b.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ o.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: f.lang.heading }),
              /* @__PURE__ */ o.jsx("p", { style: { fontWeight: 600 }, children: f.lang.subheading }),
              /* @__PURE__ */ o.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                f.lang.postalCodeLabel,
                " ",
                /* @__PURE__ */ o.jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ o.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    className: "form-input optimizedCheckout-form-input",
                    id: "postalCode",
                    name: "postalCode",
                    onChange: T,
                    onKeyDown: P,
                    placeholder: "",
                    type: "text",
                    value: n.postalCode
                  }
                ),
                /* @__PURE__ */ o.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ o.jsx("button", { onClick: E, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: f.lang.buttonText }) })
              ] }),
              b.postalCode && /* @__PURE__ */ o.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ o.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ o.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: b.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: `form-field-agreement form-field ${b.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              checked: n.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: T,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ o.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: f.lang.termsLabel }),
          b.acceptTerms && /* @__PURE__ */ o.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ o.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ o.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: b.acceptTerms }) }) })
        ] }),
        g && /* @__PURE__ */ o.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ o.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ o.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ o.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: g }) }) }) }),
        s && /* @__PURE__ */ o.jsxs("div", { style: { marginTop: 15 }, children: [
          /* @__PURE__ */ o.jsxs("div", { className: "form-body", children: [
            /* @__PURE__ */ o.jsx("strong", { children: f.lang.selectedDealerLabel }),
            /* @__PURE__ */ o.jsx("div", { className: "text-pretty", children: s?.name }),
            /* @__PURE__ */ o.jsxs("div", { className: "text-pretty", children: [
              /* @__PURE__ */ o.jsxs("span", { className: "block", children: [
                s?.contact.address.street1,
                " "
              ] }),
              /* @__PURE__ */ o.jsxs("span", { children: [
                s?.contact.address.city,
                ", ",
                /* @__PURE__ */ o.jsx("span", { children: s?.contact.address.state })
              ] }),
              /* @__PURE__ */ o.jsxs("span", { children: [
                " ",
                s?.contact.address.zip
              ] })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx(
            "style",
            {
              dangerouslySetInnerHTML: {
                __html: `
                #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
                `
              }
            }
          )
        ] })
      ]
    }
  );
}, Nt = () => {
  const { config: a } = ye();
  return A(() => {
    if (document.querySelector(`script[src^="${a.sdkUrl}"]`))
      return;
    const c = document.createElement("script");
    c.src = a.sdkUrl, document.body.appendChild(c);
  }, [a.sdkUrl]), null;
}, Mt = () => {
  const { isModalOpen: a, setIsModalOpen: n, config: c, values: s, handleSaveDealer: f, isSuppressor: g } = ye(), b = "ffSelectFrame", w = ie(
    async (y) => {
      y && (await f(y), n(!1));
    },
    [f, n]
  );
  if (A(() => {
    a && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        s.postalCode,
        b,
        { url: c.baseUrl },
        {
          storeDomain: c.storeDomain,
          envMode: c.env,
          filters: g ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: w
        }
      ).show();
    }, 200);
  }, [a, s.postalCode, c.baseUrl, c.storeDomain, c.env, w, g]), !a)
    return null;
  const d = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: ".ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }"
        }
      }
    ),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1e3
        },
        onClick: () => n(!1),
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            style: {
              maxWidth: "95%",
              width: "100%",
              height: "80dvh",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              position: "relative"
            },
            onClick: (y) => y.stopPropagation(),
            children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  onClick: () => n(!1),
                  style: {
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "24px",
                    cursor: "pointer",
                    zIndex: 1001
                  },
                  children: "×"
                }
              ),
              /* @__PURE__ */ o.jsx("div", { id: b, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
            ]
          }
        )
      }
    )
  ] });
  return Et(d, document.body);
};
export {
  Wt as MasterFFL,
  ye as useMasterFFL
};
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map
