import Xe, { createContext as jt, useContext as Ze, useMemo as ve, useState as te, useEffect as J, useCallback as fe, useRef as oe } from "react";
import { createPortal as Ot } from "react-dom";
var Oe = { exports: {} }, Fe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Rt() {
  if (Ke) return Fe;
  Ke = 1;
  var n = Xe, s = Symbol.for("react.element"), f = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(k, w, C) {
    var _, S = {}, m = null, d = null;
    C !== void 0 && (m = "" + C), w.key !== void 0 && (m = "" + w.key), w.ref !== void 0 && (d = w.ref);
    for (_ in w) r.call(w, _) && !u.hasOwnProperty(_) && (S[_] = w[_]);
    if (k && k.defaultProps) for (_ in w = k.defaultProps, w) S[_] === void 0 && (S[_] = w[_]);
    return { $$typeof: s, type: k, key: m, ref: d, props: S, _owner: a.current };
  }
  return Fe.Fragment = f, Fe.jsx = T, Fe.jsxs = T, Fe;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Dt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, s = Symbol.for("react.element"), f = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), k = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), E = Symbol.iterator, j = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = E && e[E] || e[j];
      return typeof t == "function" ? t : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          o[c - 1] = arguments[c];
        ie("error", e, o);
      }
    }
    function ie(e, t, o) {
      {
        var c = O.ReactDebugCurrentFrame, F = c.getStackAddendum();
        F !== "" && (t += "%s", o = o.concat([F]));
        var I = o.map(function(h) {
          return String(h);
        });
        I.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, I);
      }
    }
    var H = !1, re = !1, X = !1, z = !1, ce = !1, ne;
    ne = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === u || ce || e === a || e === C || e === _ || z || e === d || H || re || X || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === S || e.$$typeof === T || e.$$typeof === k || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function i(e, t, o) {
      var c = e.displayName;
      if (c)
        return c;
      var F = t.displayName || t.name || "";
      return F !== "" ? o + "(" + F + ")" : o;
    }
    function D(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case f:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case C:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var t = e;
            return D(t) + ".Consumer";
          case T:
            var o = e;
            return D(o._context) + ".Provider";
          case w:
            return i(e, e.render, "ForwardRef");
          case S:
            var c = e.displayName || null;
            return c !== null ? c : g(e.type) || "Memo";
          case m: {
            var F = e, I = F._payload, h = F._init;
            try {
              return g(h(I));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var y = Object.assign, v = 0, x, V, U, b, P, q, Z;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function B() {
      {
        if (v === 0) {
          x = console.log, V = console.info, U = console.warn, b = console.error, P = console.group, q = console.groupCollapsed, Z = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: K,
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
        v++;
      }
    }
    function Q() {
      {
        if (v--, v === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: y({}, e, {
              value: x
            }),
            info: y({}, e, {
              value: V
            }),
            warn: y({}, e, {
              value: U
            }),
            error: y({}, e, {
              value: b
            }),
            group: y({}, e, {
              value: P
            }),
            groupCollapsed: y({}, e, {
              value: q
            }),
            groupEnd: y({}, e, {
              value: Z
            })
          });
        }
        v < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = O.ReactCurrentDispatcher, pe;
    function ue(e, t, o) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (F) {
            var c = F.stack.trim().match(/\n( *(at )?)/);
            pe = c && c[1] || "";
          }
        return `
` + pe + e;
      }
    }
    var ee = !1, ge;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new Le();
    }
    function se(e, t) {
      if (!e || ee)
        return "";
      {
        var o = ge.get(e);
        if (o !== void 0)
          return o;
      }
      var c;
      ee = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var I;
      I = le.current, le.current = null, B();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (Y) {
              c = Y;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (Y) {
              c = Y;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            c = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && c && typeof Y.stack == "string") {
          for (var p = Y.stack.split(`
`), W = c.stack.split(`
`), M = p.length - 1, $ = W.length - 1; M >= 1 && $ >= 0 && p[M] !== W[$]; )
            $--;
          for (; M >= 1 && $ >= 0; M--, $--)
            if (p[M] !== W[$]) {
              if (M !== 1 || $ !== 1)
                do
                  if (M--, $--, $ < 0 || p[M] !== W[$]) {
                    var G = `
` + p[M].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, G), G;
                  }
                while (M >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        ee = !1, le.current = I, Q(), Error.prepareStackTrace = F;
      }
      var ye = e ? e.displayName || e.name : "", de = ye ? ue(ye) : "";
      return typeof e == "function" && ge.set(e, de), de;
    }
    function it(e, t, o) {
      return se(e, !1);
    }
    function ct(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ee(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return se(e, ct(e));
      if (typeof e == "string")
        return ue(e);
      switch (e) {
        case C:
          return ue("Suspense");
        case _:
          return ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return it(e.render);
          case S:
            return Ee(e.type, t, o);
          case m: {
            var c = e, F = c._payload, I = c._init;
            try {
              return Ee(I(F), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Pe = {}, Ae = O.ReactDebugCurrentFrame;
    function Ie(e) {
      if (e) {
        var t = e._owner, o = Ee(e.type, e._source, t ? t.type : null);
        Ae.setExtraStackFrame(o);
      } else
        Ae.setExtraStackFrame(null);
    }
    function lt(e, t, o, c, F) {
      {
        var I = Function.call.bind(Ce);
        for (var h in e)
          if (I(e, h)) {
            var p = void 0;
            try {
              if (typeof e[h] != "function") {
                var W = Error((c || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              p = e[h](t, h, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              p = M;
            }
            p && !(p instanceof Error) && (Ie(F), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, h, typeof p), Ie(null)), p instanceof Error && !(p.message in Pe) && (Pe[p.message] = !0, Ie(F), R("Failed %s type: %s", o, p.message), Ie(null));
          }
      }
    }
    var ut = Array.isArray;
    function Te(e) {
      return ut(e);
    }
    function dt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ft(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function $e(e) {
      if (ft(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), Me(e);
    }
    var Ne = O.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Ue;
    function pt(e) {
      if (Ce.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gt(e) {
      if (Ce.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ht(e, t) {
      typeof e.ref == "string" && Ne.current;
    }
    function yt(e, t) {
      {
        var o = function() {
          qe || (qe = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function vt(e, t) {
      {
        var o = function() {
          Ue || (Ue = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var bt = function(e, t, o, c, F, I, h) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: h,
        // Record the component responsible for creating this element.
        _owner: I
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Ct(e, t, o, c, F) {
      {
        var I, h = {}, p = null, W = null;
        o !== void 0 && ($e(o), p = "" + o), gt(t) && ($e(t.key), p = "" + t.key), pt(t) && (W = t.ref, ht(t, F));
        for (I in t)
          Ce.call(t, I) && !mt.hasOwnProperty(I) && (h[I] = t[I]);
        if (e && e.defaultProps) {
          var M = e.defaultProps;
          for (I in M)
            h[I] === void 0 && (h[I] = M[I]);
        }
        if (p || W) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && yt(h, $), W && vt(h, $);
        }
        return bt(e, p, W, F, c, Ne.current, h);
      }
    }
    var _e = O.ReactCurrentOwner, Ve = O.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var t = e._owner, o = Ee(e.type, e._source, t ? t.type : null);
        Ve.setExtraStackFrame(o);
      } else
        Ve.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function ke(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function We() {
      {
        if (_e.current) {
          var e = g(_e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ft(e) {
      return "";
    }
    var He = {};
    function wt(e) {
      {
        var t = We();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Ye(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = wt(t);
        if (He[o])
          return;
        He[o] = !0;
        var c = "";
        e && e._owner && e._owner !== _e.current && (c = " It was passed a child from " + g(e._owner.type) + "."), he(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), he(null);
      }
    }
    function ze(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var o = 0; o < e.length; o++) {
            var c = e[o];
            ke(c) && Ye(c, t);
          }
        else if (ke(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var F = N(e);
          if (typeof F == "function" && F !== e.entries)
            for (var I = F.call(e), h; !(h = I.next()).done; )
              ke(h.value) && Ye(h.value, t);
        }
      }
    }
    function St(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === S))
          o = t.propTypes;
        else
          return;
        if (o) {
          var c = g(t);
          lt(o, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !xe) {
          xe = !0;
          var F = g(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var c = t[o];
          if (c !== "children" && c !== "key") {
            he(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), he(null);
            break;
          }
        }
        e.ref !== null && (he(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Be = {};
    function Je(e, t, o, c, F, I) {
      {
        var h = me(e);
        if (!h) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = Ft();
          W ? p += W : p += We();
          var M;
          e === null ? M = "null" : Te(e) ? M = "array" : e !== void 0 && e.$$typeof === s ? (M = "<" + (g(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : M = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, p);
        }
        var $ = Ct(e, t, o, F, I);
        if ($ == null)
          return $;
        if (h) {
          var G = t.children;
          if (G !== void 0)
            if (c)
              if (Te(G)) {
                for (var ye = 0; ye < G.length; ye++)
                  ze(G[ye], e);
                Object.freeze && Object.freeze(G);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(G, e);
        }
        if (Ce.call(t, "key")) {
          var de = g(e), Y = Object.keys(t).filter(function(kt) {
            return kt !== "key";
          }), je = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[de + je]) {
            var xt = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, de, xt, de), Be[de + je] = !0;
          }
        }
        return e === r ? Et($) : St($), $;
      }
    }
    function It(e, t, o) {
      return Je(e, t, o, !0);
    }
    function Lt(e, t, o) {
      return Je(e, t, o, !1);
    }
    var Tt = Lt, _t = It;
    we.Fragment = r, we.jsx = Tt, we.jsxs = _t;
  }()), we;
}
process.env.NODE_ENV === "production" ? Oe.exports = Rt() : Oe.exports = Dt();
var l = Oe.exports;
const Pt = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
}, At = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
}, Mt = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
}, be = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
}, ae = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), $t = async () => {
  const [n, s, f] = await Promise.all([Qe(), et(), Nt()]);
  let r = !1, a = !1, u = !1;
  window.masterFFLConfig = window.masterFFLConfig || {}, window.masterFFLConfig.hasMultiShippingEnabled = f.storeConfig.checkoutSettings.hasMultiShippingEnabled;
  const T = n?.ffl_custom_attribute_name.trim().toLowerCase(), k = n?.ffl_custom_attribute_value.trim().toLowerCase(), w = n?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), C = n?.ffl_firearm_custom_attribute_value, _ = s?.lineItems.physicalItems.map((m) => m.productEntityId), S = await L.getProducts(_);
  if (r = S.some((m) => m.customFields.some((d) => d.name.trim().toLowerCase() === T && d.value.trim().toLowerCase() === k)), a = S.some((m) => {
    const d = m.customFields.some(
      (j) => j.name.trim().toLowerCase() === w && j.value.trim().toLowerCase() === C?.[3]?.toLowerCase()
    ), E = m.customFields.some((j) => j.name.trim().toLowerCase() === T && j.value.trim().toLowerCase() === "no");
    return d && !E;
  }), S.forEach((m) => {
    m.customFields.some((d) => d.name.trim().toLowerCase() === T && d.value.trim().toLowerCase() === k) && ae.set(m.entityId, m), m.customFields.some(
      (d) => d.name.trim().toLowerCase() === w && d.value.trim().toLowerCase() === C?.[3]?.toLowerCase() && !m.customFields.some((E) => E.name.trim().toLowerCase() === T && E.value.trim().toLowerCase() === "no")
    ) && ae.set(m.entityId, !0);
  }), s?.lineItems.physicalItems.forEach((m) => {
    ae.get(m.productEntityId) && Re.set(m.entityId, m);
  }), n && n?.category_mapping.length > 0) {
    const m = S.map((d) => {
      let E = null;
      const j = n.category_mapping.filter(
        (N) => d.categoryIds.some((O) => N.categoryId === O.entityId)
      );
      if (j.length > 0) {
        const N = j.reduce(
          (O, R) => parseInt(R.priority, 10) < parseInt(O.priority, 10) ? R : O
        );
        E = N.fflMapping ? N : null;
      }
      return d.customFields.some((N) => N.name.trim().toLowerCase() === T && N.value.trim().toLowerCase() === "no") ? (E = null, null) : (E && (ae.set(d.entityId, !0), Re.set(d.entityId, d)), { ...d, fflFirearmType: E ? E.fflMapping : null });
    }).filter((d) => d !== null);
    r = r || m.some((d) => d.fflFirearmType), a = a || m.some(
      (d) => d.fflFirearmType && d.fflFirearmType.trim().toLowerCase() === C?.[3]?.toLowerCase()
    );
  }
  return u = S.length === ae.size, { isFFL: r, isSuppressor: a, isEntirelyFFL: u };
}, A = () => ({
  ...window.masterFFLConfig || {},
  env: window.masterFFLConfig?.env || "production",
  baseUrl: Pt[window.masterFFLConfig?.env || "production"],
  appUrl: At[window.masterFFLConfig?.env || "production"],
  sdkUrl: Mt[window.masterFFLConfig?.env || "production"],
  storeDomain: window.location.hostname.replace("www.", ""),
  storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
  lang: {
    heading: window.masterFFLConfig?.lang?.heading || be.heading,
    subheading: window.masterFFLConfig?.lang?.subheading || be.subheading,
    postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || be.postalCodeLabel,
    buttonText: window.masterFFLConfig?.lang?.buttonText || be.buttonText,
    termsLabel: window.masterFFLConfig?.lang?.termsLabel || be.termsLabel,
    selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || be.selectedDealerLabel
  }
}), Qe = async () => {
  const n = `mapping-${A().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const a = await (await fetch(`${A().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: A().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[n] = a, a;
}, Nt = async () => {
  const n = `checkout-settings-${A().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const a = await (await fetch(`/api/storefront/checkout-settings?checkoutId=${A().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" }
  })).json();
  return window.masterFFLCache[n] = a, a;
}, qt = async (n, s) => {
  rt(n, "selectedDealer");
  let r = (await et())?.lineItems.physicalItems.map((C) => ({
    itemId: C.entityId,
    productId: C.productEntityId,
    quantity: C.quantity
  }));
  const a = A().hasMultiShippingEnabled, u = A().nonFFLItemStrategy;
  a && (u === "FORCE_TO_FFL" || (u === "FORCE_TO_NON_FFL" || u === "ALLOW_CHOICE") && (r = r.filter((C) => ae.get(Number(C.productId)))));
  const T = {
    address: {
      firstName: s.name,
      lastName: "n/a",
      phone: s.contact.primaryPhone ? s.contact.primaryPhone : "0000000000",
      company: s.name,
      address1: s.contact.address.street1,
      address2: "",
      city: s.contact.address.city,
      stateOrProvinceCode: s.contact.address.state,
      stateOrProvince: "",
      shouldSaveAddress: !1,
      postalCode: s.contact.address.zip,
      localizedCountry: "United States",
      countryCode: "US",
      customFields: []
    },
    lineItems: r
  };
  if ((await (await fetch(`${A().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: s.id.match(/\d+/g)?.join("") || "",
      cartId: n ?? "",
      storeHash: A().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return await fetch(
    `/api/storefront/checkouts/${A().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: T.address, lineItems: T.lineItems }])
    }
  ), tt(n, { selectedDealer: JSON.stringify(s) }), A().hasMultiShippingEnabled && window.location.reload(), {
    dealer: s,
    shippingData: T
  };
}, et = async () => {
  const n = `cart-${A().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const r = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${A().storefrontApiToken}` },
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
  return window.masterFFLCache[n] = r.data.site.cart, r.data.site.cart;
}, Ut = async (n) => n ? (await (await fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${A().storefrontApiToken}`
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
    variables: { ids: n }
  })
})).json()).data.site.products.edges.map((a) => ({
  entityId: a.node.entityId,
  customFields: a.node.customFields.edges.map((u) => u.node),
  categoryIds: a.node.categories.edges.map((u) => u.node)
})) : [], Se = (n) => ({
  postalCode: sessionStorage.getItem(`${n}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${n}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${n}-acceptTerms`) !== "false",
  // default to true if not set
  selectedDealer: sessionStorage.getItem(`${n}-selectedDealer`)
}), tt = (n, s) => {
  const { postalCode: f, acceptTerms: r, selectedDealer: a } = s;
  sessionStorage.setItem(`${n}-postalCode`, f || sessionStorage.getItem(`${n}-postalCode`) || ""), sessionStorage.setItem(`${n}-acceptTerms`, r || sessionStorage.getItem(`${n}-acceptTerms`) || ""), sessionStorage.setItem(`${n}-selectedDealer`, a || sessionStorage.getItem(`${n}-selectedDealer`) || "");
}, rt = (n, s) => {
  sessionStorage.removeItem(`${n}-${s}`);
}, Vt = async () => {
  try {
    const n = A().checkoutId;
    if (!n) return null;
    const s = await nt();
    if (!s) {
      if (A().hasMultiShippingEnabled) {
        const r = Se(n).selectedDealer;
        if (r && r !== "null")
          return 0;
      }
      return null;
    }
    const f = s?.consignments || s?.data?.consignments || [];
    if (f.length === 0) {
      if (A().hasMultiShippingEnabled) {
        const r = Se(n).selectedDealer;
        if (r && r !== "null")
          return 0;
      }
      return null;
    }
    for (let r = 0; r < f.length; r++)
      if ((f[r]?.lineItems?.physicalItems || []).some((k) => {
        const w = k.productEntityId || k.productId;
        return ae.get(Number(w));
      }))
        return r;
    if (A().hasMultiShippingEnabled) {
      const r = Se(n).selectedDealer;
      if (r && r !== "null")
        return 0;
    }
    return null;
  } catch (n) {
    console.error("Error getting FFL consignment index:", n);
    const s = A().checkoutId;
    if (s && A().hasMultiShippingEnabled) {
      const f = Se(s).selectedDealer;
      if (f && f !== "null")
        return 0;
    }
    return null;
  }
}, Wt = async (n, s) => {
  await fetch(`/api/storefront/checkouts/${n}/consignments/${s}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
}, nt = async () => await (await fetch(
  `/api/storefront/checkouts/${A().checkoutId}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
  {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
)).json(), L = {
  init: $t,
  getConfig: A,
  getSession: Se,
  setSession: tt,
  removeSession: rt,
  saveDealer: qt,
  removeConsignment: Wt,
  getMappingData: Qe,
  getProducts: Ut,
  getCheckout: nt,
  getFFLConsignmentIndex: Vt,
  fflProducts: ae,
  fflLineItems: Re,
  checkoutService: null
};
var st = /* @__PURE__ */ ((n) => (n.Billing = "billing", n.Customer = "customer", n.Payment = "payment", n.Shipping = "shipping", n))(st || {});
function ot(n, s) {
  const f = n.tagName;
  if (f === "INPUT") {
    const r = n;
    if (r.type === "checkbox" || r.type === "radio") {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set, u = s === "true" || s === "on" || s === "1";
      a ? a.call(r, u) : r.checked = u;
    } else {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      a ? a.call(r, s) : r.value = s;
    }
  } else if (f === "TEXTAREA") {
    const r = n, a = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    a ? a.call(r, s) : r.value = s;
  } else if (f === "SELECT") {
    const r = n, a = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    a ? a.call(r, s) : r.value = s;
  }
  n.dispatchEvent(new Event("input", { bubbles: !0 })), n.dispatchEvent(new Event("change", { bubbles: !0 }));
}
const at = jt({}), De = () => {
  const n = Ze(at);
  if (!n)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return n;
}, Kt = ({ checkoutContext: n, getCheckoutStepStatuses: s }) => {
  const { checkoutService: f, checkoutState: r } = Ze(n), a = ve(() => r.data.getConfig()?.storeProfile, [r]), u = ve(() => r.data.getCheckout()?.id, [r]), T = ve(() => a?.storeHash, [a]), [k, w] = te(!1), [C, _] = te({
    postalCode: "",
    acceptTerms: !1
  }), [S, m] = te(null), [d, E] = te(null), [j, N] = te(!1), [O, R] = te(!1), [ie, H] = te(!1), [re, X] = te(null);
  J(() => {
    if (!u) return;
    const { postalCode: y, acceptTerms: v, selectedDealer: x } = L.getSession(u);
    y && _((V) => ({ ...V, postalCode: y })), v && _((V) => ({ ...V, acceptTerms: v })), x && x !== "null" && E(JSON.parse(x));
  }, [u]);
  const z = ve(
    () => ({
      ...L.getConfig(),
      storeHash: T,
      checkoutId: r.data.getCheckout()?.id
    }),
    [T, r]
  ), ce = fe(
    async (y) => {
      E(null), m(null);
      try {
        await L.saveDealer(u, y), E(y);
      } catch {
        m("An error occurred while saving the dealer. Please try again.");
      }
    },
    [u, f]
  ), ne = ve(() => s(r), [r]);
  J(() => {
    if (ne.find((v) => v.isActive)?.type !== st.Shipping && (!d || !C.acceptTerms)) {
      const v = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      v && v.click();
    }
  }, [ne, d, C.acceptTerms]);
  const me = fe(() => {
    if (!u) return;
    sessionStorage.getItem(`${u}-selectedDealer`) && (L.removeSession(u, "postalCode"), L.removeSession(u, "acceptTerms"), L.removeSession(u, "selectedDealer"), document.querySelectorAll('[name^="shippingAddress."]').forEach((x) => {
      (x instanceof HTMLInputElement || x instanceof HTMLTextAreaElement || x instanceof HTMLSelectElement) && ot(x, "");
    }));
  }, [u]), i = fe(async (y) => {
    try {
      if (!y || !u) return;
      const v = y.consignments || [];
      if (v.length === 0)
        return;
      for (const x of v) {
        const V = x.lineItemIds || [];
        if (V.length === 0)
          return;
        const U = V.some((q) => {
          const Z = y.cart.lineItems.physicalItems.find((K) => K.id === q);
          return L.fflProducts.get(Z.productId);
        }), b = JSON.parse(L.getSession(u)?.selectedDealer || "{}"), P = x.shippingAddress.address1 === b?.contact?.address?.street1 && x.shippingAddress.postalCode === b?.contact?.address?.zip;
        U && !P && (await L.removeConsignment(u, x.id), await L.saveDealer(u, b));
      }
    } catch (v) {
      console.error(v);
    }
  }, [u]), D = fe(async () => {
    if (!z.storeHash || !r.data.getCart()) return;
    const y = await L.getCheckout();
    X(y);
    const { isFFL: v, isSuppressor: x, isEntirelyFFL: V } = await L.init();
    N(v), R(x), H(V);
    const { selectedDealer: U } = L.getSession(u || "");
    U && (y?.consignments?.length === 0 ? await L.saveDealer(u || "", JSON.parse(U)) : await i(y)), !v && !x && me();
  }, [z.storeHash, r.data.getCart(), me, u, i]);
  J(() => {
    D();
  }, [D]);
  const g = ve(
    () => ({
      checkoutService: f,
      checkoutState: r,
      config: z,
      isModalOpen: k,
      setIsModalOpen: w,
      values: C,
      setValues: _,
      handleSaveDealer: ce,
      selectedDealer: d,
      setSelectedDealer: E,
      error: S,
      isFFL: j,
      isSuppressor: O,
      isEntirelyFFL: ie,
      checkout: re,
      setCheckout: X,
      fixInvalidConsignments: i
    }),
    [
      f,
      r,
      z,
      k,
      w,
      C,
      _,
      ce,
      d,
      E,
      S,
      j,
      O,
      ie,
      re,
      X,
      i
    ]
  );
  return /* @__PURE__ */ l.jsx(at.Provider, { value: g, children: (j || O) && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(Ht, {}),
    /* @__PURE__ */ l.jsx(Yt, {}),
    /* @__PURE__ */ l.jsx(zt, {})
  ] }) });
}, Ht = () => {
  const { setIsModalOpen: n, values: s, setValues: f, selectedDealer: r, config: a, error: u, isFFL: T, isSuppressor: k, isEntirelyFFL: w, checkout: C, fixInvalidConsignments: _ } = De(), [S, m] = te({ postalCode: "", acceptTerms: "" }), d = oe(null), E = oe(null), j = oe(null), N = oe(null), O = oe(null), R = oe(!1), ie = oe(!1), H = oe(!1);
  J(() => {
    R.current = s.acceptTerms;
  }, [s.acceptTerms]), J(() => {
    ie.current = !!r;
  }, [r]);
  const re = fe(() => {
    const i = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]');
    i && i && i.checked && i.click();
  }, []);
  J(() => {
    const i = () => re();
    return j.current = new MutationObserver(i), j.current.observe(document.body, { childList: !0, subtree: !0 }), re(), () => {
      j.current && (j.current.disconnect(), j.current = null);
    };
  }, [re]);
  const X = fe(() => {
    const i = document.getElementById("checkout-shipping-continue");
    if (!i || (E.current = i, L.fflLineItems.size === 0))
      return;
    let D = !R.current || !ie.current;
    if (a.hasMultiShippingEnabled) {
      const g = document.querySelector(".checkout-step--shipping .alertBox--info"), y = document.querySelectorAll(".consignment-container").length, v = document.querySelectorAll('.consignment-container input[type="radio"]:checked').length === y;
      D = D || !!g || !v;
    }
    i.disabled !== D && (i.disabled = D);
  }, [a.hasMultiShippingEnabled]);
  J(() => {
    const i = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!i) return;
    const D = () => X();
    return d.current = new MutationObserver(D), d.current.observe(i, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), X(), () => {
      d.current && (d.current.disconnect(), d.current = null);
    };
  }, [X]), J(() => {
    X();
  }, [X, s.acceptTerms, r]);
  const z = fe(async () => {
    if (!H.current) {
      H.current = !0;
      try {
        const i = document.querySelectorAll(".consignment-container");
        if (i.length === 0) {
          H.current = !1;
          return;
        }
        const D = a.checkoutId;
        if (!D) {
          H.current = !1;
          return;
        }
        let g = C;
        if (!g) {
          const b = await fetch(
            `/api/storefront/checkouts/${D}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" }
            }
          );
          if (!b.ok) {
            H.current = !1;
            return;
          }
          g = await b.json();
        }
        const y = g?.consignments || g?.data?.consignments || [];
        let v = null, x = null;
        if (r) {
          const b = r?.contact?.address?.zip, P = r?.contact?.address?.street1, q = r?.contact?.address?.city, Z = r?.contact?.address?.state;
          for (const K of y) {
            const B = K?.address;
            if (B) {
              const Q = B.postalCode === b, le = B.address1 === P, pe = B.city === q, ue = B.stateOrProvinceCode === Z;
              if (Q && le || Q && pe && ue) {
                v = K, x = K.id;
                break;
              }
            }
          }
        }
        if (!v) {
          const b = await L.getMappingData(), P = b?.ffl_custom_attribute_name?.trim().toLowerCase(), q = b?.ffl_custom_attribute_value?.trim().toLowerCase(), Z = b?.ffl_firearm_custom_attribute_name?.trim().toLowerCase(), K = b?.ffl_firearm_custom_attribute_value;
          for (const B of y) {
            const Q = B?.lineItems?.physicalItems || [];
            if (Q.length === 0) continue;
            const le = Q.map((ee) => ee.productEntityId || ee.productId);
            if ((await L.getProducts(le)).some((ee) => {
              const ge = ee.customFields?.some(
                (se) => se.name.trim().toLowerCase() === P && se.value.trim().toLowerCase() === q
              ), Le = ee.customFields?.some(
                (se) => se.name.trim().toLowerCase() === Z && se.value.trim().toLowerCase() === K?.[3]?.toLowerCase()
              );
              return ge || Le;
            })) {
              v = B, x = B.id;
              break;
            }
          }
        }
        if (!v) {
          console.warn("Could not find FFL consignment in API data"), H.current = !1;
          return;
        }
        i.forEach((b) => {
          b.classList.remove("consignment-container--ffl");
        });
        const V = (b) => {
          const P = b.querySelector("#addressToggle");
          if (P) {
            const q = P.parentElement;
            q && (q.style.display = "none", b.querySelector(".consignment-header h3").textContent = "FFL Destination");
          }
        };
        if (x)
          for (let b = 0; b < i.length; b++) {
            const P = i[b], q = P.getAttribute("data-consignment-id") || P.getAttribute("data-id") || P.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
            if (q && q === String(x)) {
              P.classList.add("consignment-container--ffl"), P.setAttribute("data-index", String(b)), H.current = !1, V(P);
              return;
            }
          }
        const U = v.address;
        if (U)
          for (let b = 0; b < i.length; b++) {
            const P = i[b], q = P.textContent || "", Z = U.postalCode && q.includes(U.postalCode), K = U.address1 && q.includes(U.address1), B = U.city && q.includes(U.city), Q = U.stateOrProvinceCode && q.includes(U.stateOrProvinceCode);
            if (Z && (K || B && Q)) {
              P.classList.add("consignment-container--ffl"), P.setAttribute("data-index", String(b)), H.current = !1, V(P);
              return;
            }
          }
      } finally {
        H.current = !1;
      }
    }
  }, [r, C]);
  J(() => {
    if (!T && !k) return;
    if (a.hasMultiShippingEnabled)
      if (a.nonFFLItemStrategy !== "FORCE_TO_FFL")
        setTimeout(() => {
          const g = document.querySelector('[data-test="shipping-mode-toggle"]');
          g && g.innerText.trim().toLowerCase() === "ship to a single address" && (g.style.display = "none"), w && g && g.innerText.trim().toLowerCase() === "ship to multiple addresses" && (g.style.display = "none");
          const y = document.querySelector('[data-test="shipping-mode-toggle"]');
          y && y.addEventListener("click", () => {
            z();
          });
        }, 0);
      else {
        const g = document.querySelector('[data-test="shipping-mode-toggle"]');
        g && g.innerText.trim().toLowerCase() === "ship to multiple addresses" && (g.style.display = "none");
      }
    const i = setTimeout(() => {
      z();
    }, 100), D = () => {
      H.current || (O.current && clearTimeout(O.current), O.current = setTimeout(() => {
        z(), O.current = null;
      }, 300));
    };
    return N.current = new MutationObserver(D), N.current.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      clearTimeout(i), O.current && (clearTimeout(O.current), O.current = null), N.current && (N.current.disconnect(), N.current = null);
    };
  }, [T, k, w, a.hasMultiShippingEnabled, z]), J(() => {
    if (!r) return;
    document.querySelectorAll(".consignment-container--ffl").forEach((g) => {
      g.classList.remove("consignment-container--ffl");
    });
    const D = setTimeout(() => {
      z();
    }, 500);
    return () => clearTimeout(D);
  }, [r, z]);
  const ce = (i) => {
    m({ postalCode: "", acceptTerms: "" }), i.target.name === "postalCode" ? (f({ ...s, postalCode: i.target.value }), sessionStorage.setItem(`${a.checkoutId}-postalCode`, i.target.value)) : (f({ ...s, acceptTerms: i.target.checked }), sessionStorage.setItem(`${a.checkoutId}-acceptTerms`, i.target.checked.toString()));
  }, ne = (i) => {
    if (i.preventDefault(), m({ postalCode: "", acceptTerms: "" }), !s.postalCode) {
      m({ ...S, postalCode: `${a.lang.postalCodeLabel} is required` });
      return;
    }
    n(!0);
  }, me = (i) => {
    i.key === "Enter" && ne(i);
  };
  return J(() => {
    const i = async (D) => {
      if (D.target.tagName === "A" && D.target.getAttribute("data-test") === "shipping-mode-toggle") {
        const g = JSON.parse(L.getSession(a.checkoutId || "").selectedDealer || "{}");
        g && await L.saveDealer(a.checkoutId || "", g);
      }
      if (D.target.id === "checkout-shipping-continue") {
        const g = await L.getCheckout();
        await _(g);
      }
    };
    return document.addEventListener("click", i), () => {
      document.removeEventListener("click", i);
    };
  }, [a.checkoutId, _]), /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "15px"
            },
            children: /* @__PURE__ */ l.jsxs("div", { className: `form-field ${S.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ l.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: a.lang.heading }),
              /* @__PURE__ */ l.jsx("p", { style: { fontWeight: 600 }, children: a.lang.subheading }),
              /* @__PURE__ */ l.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                a.lang.postalCodeLabel,
                " ",
                /* @__PURE__ */ l.jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ l.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    className: "form-input optimizedCheckout-form-input",
                    id: "postalCode",
                    name: "postalCode",
                    onChange: ce,
                    onKeyDown: me,
                    placeholder: "",
                    type: "text",
                    value: s.postalCode
                  }
                ),
                /* @__PURE__ */ l.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ l.jsx("button", { onClick: ne, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: a.lang.buttonText }) })
              ] }),
              S.postalCode && /* @__PURE__ */ l.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ l.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ l.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: S.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ l.jsxs("div", { className: `form-field-agreement form-field ${S.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ l.jsx(
            "input",
            {
              checked: s.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: ce,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ l.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: a.lang.termsLabel }),
          S.acceptTerms && /* @__PURE__ */ l.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ l.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ l.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: S.acceptTerms }) }) })
        ] }),
        u && /* @__PURE__ */ l.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ l.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ l.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ l.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: u }) }) }) }),
        r && /* @__PURE__ */ l.jsx("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ l.jsxs("div", { className: "form-body", children: [
          /* @__PURE__ */ l.jsx("strong", { children: a.lang.selectedDealerLabel }),
          /* @__PURE__ */ l.jsx("div", { className: "text-pretty", children: r?.name }),
          /* @__PURE__ */ l.jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ l.jsxs("span", { className: "block", children: [
              r?.contact.address.street1,
              " "
            ] }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              r?.contact.address.city,
              ", ",
              /* @__PURE__ */ l.jsx("span", { children: r?.contact.address.state })
            ] }),
            /* @__PURE__ */ l.jsxs("span", { children: [
              " ",
              r?.contact.address.zip
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ l.jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
            #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
            .consignment-container--ffl [data-test="edit-shipping-address"] { display: none; }
            .consignment-container--ffl [data-test="delete-consignment-button"] { display: none; }
            ${a.hasMultiShippingEnabled && `           
              ${// if the user can choose which consignment to put the items on, hide the remove buttons for the ffl line items
              // they cannot move these items to a non-ffl address
              a.nonFFLItemStrategy === "ALLOW_CHOICE" && [...L.fflLineItems].length > 0 ? [...L.fflLineItems].map((i) => `[data-test="remove-${i[0]}-button"] { display: none; }`).join(`
`) : ""}
              ${// hide the reallocate items button if the user cannot choose which consignment to put the items on
              a.nonFFLItemStrategy !== "ALLOW_CHOICE" ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }' : ""}
              ${// hide the enter shipping address button if the user has not selected a dealer
              !L.getSession(a.checkoutId).selectedDealer && '.consignment-container [data-test="enter-shipping-address"] { display: none; }'}`}
            
            `
            }
          }
        )
      ]
    }
  );
}, Yt = () => {
  const { config: n } = De();
  return J(() => {
    if (document.querySelector(`script[src^="${n.sdkUrl}"]`))
      return;
    const f = document.createElement("script");
    f.src = n.sdkUrl, document.body.appendChild(f);
  }, [n.sdkUrl]), null;
}, zt = () => {
  const { isModalOpen: n, setIsModalOpen: s, config: f, values: r, setSelectedDealer: a, isSuppressor: u } = De(), T = "ffSelectFrame", k = async (C) => {
    if (!C) return;
    const _ = await L.getCheckout();
    for (const E of _.consignments)
      E.id && await L.removeConsignment(f.checkoutId || "", E.id);
    const { shippingData: S, dealer: m } = await L.saveDealer(f.checkoutId || "", C), d = S.address;
    Object.keys(d).forEach((E) => {
      const j = document.querySelector(`[name="shippingAddress.${E}"]`);
      if (j) {
        const N = String(d[E] ?? "");
        ot(j, N);
      }
    }), a(m), s(!1);
  };
  if (J(() => {
    n && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        r.postalCode,
        T,
        { url: f.baseUrl },
        {
          storeDomain: f.storeDomain,
          envMode: f.env,
          filters: u ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: k
        }
      ).show();
    }, 200);
  }, [
    n,
    r.postalCode,
    f.baseUrl,
    f.storeDomain,
    f.env,
    k,
    u
  ]), !n)
    return null;
  const w = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: ".ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }"
        }
      }
    ),
    /* @__PURE__ */ l.jsx(
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
        onClick: () => s(!1),
        children: /* @__PURE__ */ l.jsx(
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
            onClick: (C) => C.stopPropagation(),
            children: /* @__PURE__ */ l.jsx("div", { id: T, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
          }
        )
      }
    )
  ] });
  return Ot(w, document.body);
};
export {
  Kt as MasterFFL,
  De as useMasterFFL
};
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map
