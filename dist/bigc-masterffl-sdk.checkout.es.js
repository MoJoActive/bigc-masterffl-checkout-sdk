import Ge, { createContext as jt, useContext as Xe, useMemo as pe, useState as ie, useEffect as J, useCallback as he, useRef as te } from "react";
import { createPortal as Rt } from "react-dom";
var ke = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Ot() {
  if (Je) return be;
  Je = 1;
  var n = Ge, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(I, h, y) {
    var C, _ = {}, f = null, l = null;
    y !== void 0 && (f = "" + y), h.key !== void 0 && (f = "" + h.key), h.ref !== void 0 && (l = h.ref);
    for (C in h) r.call(h, C) && !p.hasOwnProperty(C) && (_[C] = h[C]);
    if (I && I.defaultProps) for (C in h = I.defaultProps, h) _[C] === void 0 && (_[C] = h[C]);
    return { $$typeof: s, type: I, key: f, ref: l, props: _, _owner: a.current };
  }
  return be.Fragment = d, be.jsx = T, be.jsxs = T, be;
}
var Ce = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Dt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ge, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), I = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), l = Symbol.for("react.offscreen"), w = Symbol.iterator, R = "@@iterator";
    function $(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = w && e[w] || e[R];
      return typeof t == "function" ? t : null;
    }
    var E = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          o[i - 1] = arguments[i];
        Y("error", e, o);
      }
    }
    function Y(e, t, o) {
      {
        var i = E.ReactDebugCurrentFrame, v = i.getStackAddendum();
        v !== "" && (t += "%s", o = o.concat([v]));
        var S = o.map(function(g) {
          return String(g);
        });
        S.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var K = !1, ne = !1, se = !1, ce = !1, u = !1, F;
    F = Symbol.for("react.module.reference");
    function b(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === r || e === p || u || e === a || e === y || e === C || ce || e === l || K || ne || se || typeof e == "object" && e !== null && (e.$$typeof === f || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === I || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function O(e, t, o) {
      var i = e.displayName;
      if (i)
        return i;
      var v = t.displayName || t.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function H(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case r:
          return "Fragment";
        case d:
          return "Portal";
        case p:
          return "Profiler";
        case a:
          return "StrictMode";
        case y:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return H(t) + ".Consumer";
          case T:
            var o = e;
            return H(o._context) + ".Provider";
          case h:
            return O(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : N(e.type) || "Memo";
          case f: {
            var v = e, S = v._payload, g = v._init;
            try {
              return N(g(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, P = 0, oe, D, q, U, ee, G, V;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function ge() {
      {
        if (P === 0) {
          oe = console.log, D = console.info, q = console.warn, U = console.error, ee = console.group, G = console.groupCollapsed, V = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: X,
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
        P++;
      }
    }
    function Fe() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: oe
            }),
            info: B({}, e, {
              value: D
            }),
            warn: B({}, e, {
              value: q
            }),
            error: B({}, e, {
              value: U
            }),
            group: B({}, e, {
              value: ee
            }),
            groupCollapsed: B({}, e, {
              value: G
            }),
            groupEnd: B({}, e, {
              value: V
            })
          });
        }
        P < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = E.ReactCurrentDispatcher, Q;
    function ue(e, t, o) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (v) {
            var i = v.stack.trim().match(/\n( *(at )?)/);
            Q = i && i[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ye = !1, Z;
    {
      var at = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new at();
    }
    function Oe(e, t) {
      if (!e || ye)
        return "";
      {
        var o = Z.get(e);
        if (o !== void 0)
          return o;
      }
      var i;
      ye = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = le.current, le.current = null, ge();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (W) {
              i = W;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (W) {
              i = W;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            i = W;
          }
          e();
        }
      } catch (W) {
        if (W && i && typeof W.stack == "string") {
          for (var m = W.stack.split(`
`), A = i.stack.split(`
`), k = m.length - 1, j = A.length - 1; k >= 1 && j >= 0 && m[k] !== A[j]; )
            j--;
          for (; k >= 1 && j >= 0; k--, j--)
            if (m[k] !== A[j]) {
              if (k !== 1 || j !== 1)
                do
                  if (k--, j--, j < 0 || m[k] !== A[j]) {
                    var z = `
` + m[k].replace(" at new ", " at ");
                    return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, z), z;
                  }
                while (k >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ye = !1, le.current = S, Fe(), Error.prepareStackTrace = v;
      }
      var fe = e ? e.displayName || e.name : "", ae = fe ? ue(fe) : "";
      return typeof e == "function" && Z.set(e, ae), ae;
    }
    function it(e, t, o) {
      return Oe(e, !1);
    }
    function ct(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Se(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, ct(e));
      if (typeof e == "string")
        return ue(e);
      switch (e) {
        case y:
          return ue("Suspense");
        case C:
          return ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return it(e.render);
          case _:
            return Se(e.type, t, o);
          case f: {
            var i = e, v = i._payload, S = i._init;
            try {
              return Se(S(v), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, De = {}, Pe = E.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function lt(e, t, o, i, v) {
      {
        var S = Function.call.bind(ve);
        for (var g in e)
          if (S(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var A = Error((i || "React class") + ": " + o + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              m = e[g](t, g, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Ee(v), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, g, typeof m), Ee(null)), m instanceof Error && !(m.message in De) && (De[m.message] = !0, Ee(v), L("Failed %s type: %s", o, m.message), Ee(null));
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
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Me(e) {
      if (ft(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), Ae(e);
    }
    var $e = E.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, qe;
    function mt(e) {
      if (ve.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ht(e) {
      if (ve.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gt(e, t) {
      typeof e.ref == "string" && $e.current;
    }
    function yt(e, t) {
      {
        var o = function() {
          Ne || (Ne = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          qe || (qe = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var bt = function(e, t, o, i, v, S, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: g,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Ct(e, t, o, i, v) {
      {
        var S, g = {}, m = null, A = null;
        o !== void 0 && (Me(o), m = "" + o), ht(t) && (Me(t.key), m = "" + t.key), mt(t) && (A = t.ref, gt(t, v));
        for (S in t)
          ve.call(t, S) && !pt.hasOwnProperty(S) && (g[S] = t[S]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (S in k)
            g[S] === void 0 && (g[S] = k[S]);
        }
        if (m || A) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && yt(g, j), A && vt(g, j);
        }
        return bt(e, m, A, v, i, $e.current, g);
      }
    }
    var Le = E.ReactCurrentOwner, Ue = E.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        Ue.setExtraStackFrame(o);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Ve() {
      {
        if (Le.current) {
          var e = N(Le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function wt(e) {
      return "";
    }
    var We = {};
    function Ft(e) {
      {
        var t = Ve();
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
        var o = Ft(t);
        if (We[o])
          return;
        We[o] = !0;
        var i = "";
        e && e._owner && e._owner !== Le.current && (i = " It was passed a child from " + N(e._owner.type) + "."), de(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), de(null);
      }
    }
    function He(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            _e(i) && Ye(i, t);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = $(e);
          if (typeof v == "function" && v !== e.entries)
            for (var S = v.call(e), g; !(g = S.next()).done; )
              _e(g.value) && Ye(g.value, t);
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
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          o = t.propTypes;
        else
          return;
        if (o) {
          var i = N(t);
          lt(o, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var v = N(t);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var i = t[o];
          if (i !== "children" && i !== "key") {
            de(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), de(null);
            break;
          }
        }
        e.ref !== null && (de(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), de(null));
      }
    }
    var Be = {};
    function ze(e, t, o, i, v, S) {
      {
        var g = b(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = wt();
          A ? m += A : m += Ve();
          var k;
          e === null ? k = "null" : Te(e) ? k = "array" : e !== void 0 && e.$$typeof === s ? (k = "<" + (N(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var j = Ct(e, t, o, v, S);
        if (j == null)
          return j;
        if (g) {
          var z = t.children;
          if (z !== void 0)
            if (i)
              if (Te(z)) {
                for (var fe = 0; fe < z.length; fe++)
                  He(z[fe], e);
                Object.freeze && Object.freeze(z);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(z, e);
        }
        if (ve.call(t, "key")) {
          var ae = N(e), W = Object.keys(t).filter(function(kt) {
            return kt !== "key";
          }), xe = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[ae + xe]) {
            var xt = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, ae, xt, ae), Be[ae + xe] = !0;
          }
        }
        return e === r ? Et(j) : St(j), j;
      }
    }
    function Tt(e, t, o) {
      return ze(e, t, o, !0);
    }
    function Lt(e, t, o) {
      return ze(e, t, o, !1);
    }
    var It = Lt, _t = Tt;
    Ce.Fragment = r, Ce.jsx = It, Ce.jsxs = _t;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? ke.exports = Ot() : ke.exports = Dt();
var c = ke.exports;
const Pt = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
}, At = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
}, Mt = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
}, me = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
}, re = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), $t = async () => {
  const [n, s, d] = await Promise.all([Ze(), Qe(), Nt()]);
  let r = !1, a = !1, p = !1;
  window.masterFFLConfig = window.masterFFLConfig || {}, window.masterFFLConfig.hasMultiShippingEnabled = d.storeConfig.checkoutSettings.hasMultiShippingEnabled;
  const T = n?.ffl_custom_attribute_name.trim().toLowerCase(), I = n?.ffl_custom_attribute_value.trim().toLowerCase(), h = n?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), y = n?.ffl_firearm_custom_attribute_value, C = s?.lineItems.physicalItems.map((f) => f.productEntityId), _ = await M.getProducts(C);
  if (r = _.some((f) => f.customFields.some((l) => l.name.trim().toLowerCase() === T && l.value.trim().toLowerCase() === I)), a = _.some((f) => {
    const l = f.customFields.some(
      (R) => R.name.trim().toLowerCase() === h && R.value.trim().toLowerCase() === y?.[3]?.toLowerCase()
    ), w = f.customFields.some((R) => R.name.trim().toLowerCase() === T && R.value.trim().toLowerCase() === "no");
    return l && !w;
  }), _.forEach((f) => {
    f.customFields.some((l) => l.name.trim().toLowerCase() === T && l.value.trim().toLowerCase() === I) && re.set(f.entityId, f), f.customFields.some(
      (l) => l.name.trim().toLowerCase() === h && l.value.trim().toLowerCase() === y?.[3]?.toLowerCase()
    ) && re.set(f.entityId, !0);
  }), s?.lineItems.physicalItems.forEach((f) => {
    re.get(f.productEntityId) && je.set(f.entityId, f);
  }), n && n?.category_mapping.length > 0) {
    const f = _.map((l) => {
      let w = null;
      const R = n.category_mapping.filter(
        ($) => l.categoryIds.some((E) => $.categoryId === E.entityId)
      );
      if (R.length > 0) {
        const $ = R.reduce(
          (E, L) => parseInt(L.priority, 10) < parseInt(E.priority, 10) ? L : E
        );
        w = $.fflMapping ? $ : null;
      }
      return l.customFields.some(($) => $.name.trim().toLowerCase() === T && $.value.trim().toLowerCase() === "no") ? (w = null, null) : (w && (re.set(l.entityId, !0), je.set(l.entityId, l)), { ...l, fflFirearmType: w ? w.fflMapping : null });
    }).filter((l) => l !== null);
    r = r || f.some((l) => l.fflFirearmType), a = a || f.some(
      (l) => l.fflFirearmType && l.fflFirearmType.trim().toLowerCase() === y?.[3]?.toLowerCase()
    );
  }
  return p = _.length === re.size, { isFFL: r, isSuppressor: a, isEntirelyFFL: p };
}, x = () => ({
  ...window.masterFFLConfig || {},
  env: window.masterFFLConfig?.env || "production",
  baseUrl: Pt[window.masterFFLConfig?.env || "production"],
  appUrl: At[window.masterFFLConfig?.env || "production"],
  sdkUrl: Mt[window.masterFFLConfig?.env || "production"],
  storeDomain: window.location.hostname.replace("www.", ""),
  storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
  lang: {
    heading: window.masterFFLConfig?.lang?.heading || me.heading,
    subheading: window.masterFFLConfig?.lang?.subheading || me.subheading,
    postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || me.postalCodeLabel,
    buttonText: window.masterFFLConfig?.lang?.buttonText || me.buttonText,
    termsLabel: window.masterFFLConfig?.lang?.termsLabel || me.termsLabel,
    selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || me.selectedDealerLabel
  }
}), Ze = async () => {
  const n = `mapping-${x().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const a = await (await fetch(`${x().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: x().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[n] = a, a;
}, Nt = async () => {
  const n = `checkout-settings-${x().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const a = await (await fetch(`/api/storefront/checkout-settings?checkoutId=${x().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" }
  })).json();
  return window.masterFFLCache[n] = a, a;
}, qt = async (n, s) => {
  tt(n, "selectedDealer");
  let r = (await Qe())?.lineItems.physicalItems.map((y) => ({
    itemId: y.entityId,
    productId: y.productEntityId,
    quantity: y.quantity
  }));
  const a = x().hasMultiShippingEnabled, p = x().nonFFLItemStrategy;
  a && (p === "FORCE_TO_FFL" || (p === "FORCE_TO_NON_FFL" || p === "ALLOW_CHOICE") && (r = r.filter((y) => re.get(Number(y.productId)))));
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
  if ((await (await fetch(`${x().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: s.id.match(/\d+/g)?.join("") || "",
      cartId: n ?? "",
      storeHash: x().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return await fetch(
    `/api/storefront/checkouts/${x().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: T.address, lineItems: T.lineItems }])
    }
  ), et(n, { selectedDealer: JSON.stringify(s) }), x().hasMultiShippingEnabled && window.location.reload(), {
    dealer: s,
    shippingData: T
  };
}, Qe = async () => {
  const n = `cart-${x().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[n];
  if (s)
    return s;
  const r = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${x().storefrontApiToken}` },
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
    Authorization: `Bearer ${x().storefrontApiToken}`
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
  customFields: a.node.customFields.edges.map((p) => p.node),
  categoryIds: a.node.categories.edges.map((p) => p.node)
})) : [], we = (n) => ({
  postalCode: sessionStorage.getItem(`${n}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${n}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${n}-acceptTerms`) === "false" ? !1 : void 0,
  selectedDealer: sessionStorage.getItem(`${n}-selectedDealer`)
}), et = (n, s) => {
  const { postalCode: d, acceptTerms: r, selectedDealer: a } = s;
  sessionStorage.setItem(`${n}-postalCode`, d || sessionStorage.getItem(`${n}-postalCode`) || ""), sessionStorage.setItem(`${n}-acceptTerms`, r || sessionStorage.getItem(`${n}-acceptTerms`) || ""), sessionStorage.setItem(`${n}-selectedDealer`, a || sessionStorage.getItem(`${n}-selectedDealer`) || "");
}, tt = (n, s) => {
  sessionStorage.removeItem(`${n}-${s}`);
}, Vt = async () => {
  try {
    const n = x().checkoutId;
    if (!n) return null;
    const s = await rt();
    if (!s) {
      if (x().hasMultiShippingEnabled) {
        const r = we(n).selectedDealer;
        if (r && r !== "null")
          return 0;
      }
      return null;
    }
    const d = s?.consignments || s?.data?.consignments || [];
    if (d.length === 0) {
      if (x().hasMultiShippingEnabled) {
        const r = we(n).selectedDealer;
        if (r && r !== "null")
          return 0;
      }
      return null;
    }
    for (let r = 0; r < d.length; r++)
      if ((d[r]?.lineItems?.physicalItems || []).some((I) => {
        const h = I.productEntityId || I.productId;
        return re.get(Number(h));
      }))
        return r;
    if (x().hasMultiShippingEnabled) {
      const r = we(n).selectedDealer;
      if (r && r !== "null")
        return 0;
    }
    return null;
  } catch (n) {
    console.error("Error getting FFL consignment index:", n);
    const s = x().checkoutId;
    if (s && x().hasMultiShippingEnabled) {
      const d = we(s).selectedDealer;
      if (d && d !== "null")
        return 0;
    }
    return null;
  }
}, Wt = async (n, s) => {
  await fetch(`/api/storefront/checkouts/${n}/consignments/${s}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
}, rt = async () => await (await fetch(
  `/api/storefront/checkouts/${x().checkoutId}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
  {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
)).json(), M = {
  init: $t,
  getConfig: x,
  getSession: we,
  setSession: et,
  removeSession: tt,
  saveDealer: qt,
  removeConsignment: Wt,
  getMappingData: Ze,
  getProducts: Ut,
  getCheckout: rt,
  getFFLConsignmentIndex: Vt,
  fflProducts: re,
  fflLineItems: je,
  checkoutService: null
};
var nt = /* @__PURE__ */ ((n) => (n.Billing = "billing", n.Customer = "customer", n.Payment = "payment", n.Shipping = "shipping", n))(nt || {});
function st(n, s) {
  const d = n.tagName;
  if (d === "INPUT") {
    const r = n;
    if (r.type === "checkbox" || r.type === "radio") {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set, p = s === "true" || s === "on" || s === "1";
      a ? a.call(r, p) : r.checked = p;
    } else {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      a ? a.call(r, s) : r.value = s;
    }
  } else if (d === "TEXTAREA") {
    const r = n, a = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    a ? a.call(r, s) : r.value = s;
  } else if (d === "SELECT") {
    const r = n, a = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    a ? a.call(r, s) : r.value = s;
  }
  n.dispatchEvent(new Event("input", { bubbles: !0 })), n.dispatchEvent(new Event("change", { bubbles: !0 }));
}
const ot = jt({}), Re = () => {
  const n = Xe(ot);
  if (!n)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return n;
}, Kt = ({ checkoutContext: n, getCheckoutStepStatuses: s }) => {
  const { checkoutService: d, checkoutState: r } = Xe(n), a = pe(() => r.data.getConfig()?.storeProfile, [r]), p = pe(() => r.data.getCheckout()?.id, [r]), T = pe(() => a?.storeHash, [a]), [I, h] = ie(!1), [y, C] = ie({
    postalCode: "",
    acceptTerms: !1
  }), [_, f] = ie(null), [l, w] = ie(null), [R, $] = ie(!1), [E, L] = ie(!1);
  J(() => {
    if (!p) return;
    const { postalCode: F, acceptTerms: b, selectedDealer: O } = M.getSession(p);
    F && C((H) => ({ ...H, postalCode: F })), b && C((H) => ({ ...H, acceptTerms: b })), O && O !== "null" && w(JSON.parse(O));
  }, [p]);
  const Y = pe(
    () => ({
      ...M.getConfig(),
      storeHash: T,
      checkoutId: r.data.getCheckout()?.id
    }),
    [T, r]
  ), K = he(
    async (F) => {
      w(null), f(null);
      try {
        await M.saveDealer(p, F), w(F);
      } catch {
        f("An error occurred while saving the dealer. Please try again.");
      }
    },
    [p, d]
  ), ne = pe(() => s(r), [r]);
  J(() => {
    if (ne.find((b) => b.isActive)?.type !== nt.Shipping && (!l || !y.acceptTerms)) {
      const b = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      b && b.click();
    }
  }, [ne, l, y.acceptTerms]);
  const se = he(() => {
    if (!p) return;
    sessionStorage.getItem(`${p}-selectedDealer`) && (M.removeSession(p, "postalCode"), M.removeSession(p, "acceptTerms"), M.removeSession(p, "selectedDealer"), document.querySelectorAll('[name^="shippingAddress."]').forEach((O) => {
      (O instanceof HTMLInputElement || O instanceof HTMLTextAreaElement || O instanceof HTMLSelectElement) && st(O, "");
    }));
  }, [p]), ce = he(async () => {
    if (!Y.storeHash || !r.data.getCart()) return;
    const { isFFL: F, isSuppressor: b } = await M.init();
    $(F), L(b), !F && !b && se();
  }, [Y.storeHash, r.data.getCart(), se]);
  J(() => {
    ce();
  }, [ce]);
  const u = pe(
    () => ({
      checkoutService: d,
      checkoutState: r,
      config: Y,
      isModalOpen: I,
      setIsModalOpen: h,
      values: y,
      setValues: C,
      handleSaveDealer: K,
      selectedDealer: l,
      setSelectedDealer: w,
      error: _,
      isFFL: R,
      isSuppressor: E
    }),
    [
      d,
      r,
      Y,
      I,
      h,
      y,
      C,
      K,
      l,
      w,
      _,
      R,
      E
    ]
  );
  return /* @__PURE__ */ c.jsx(ot.Provider, { value: u, children: (R || E) && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(Yt, {}),
    /* @__PURE__ */ c.jsx(Ht, {}),
    /* @__PURE__ */ c.jsx(Bt, {})
  ] }) });
}, Yt = () => {
  const { setIsModalOpen: n, values: s, setValues: d, selectedDealer: r, config: a, error: p, isFFL: T, isSuppressor: I } = Re(), [h, y] = ie({ postalCode: "", acceptTerms: "" }), C = te(null), _ = te(null), f = te(null), l = te(null), w = te(null), R = te(!1), $ = te(!1), E = te(!1);
  J(() => {
    R.current = s.acceptTerms;
  }, [s.acceptTerms]), J(() => {
    $.current = !!r;
  }, [r]);
  const L = he(() => {
    const u = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]');
    u && u && u.checked && u.click();
  }, []);
  J(() => {
    const u = () => L();
    return f.current = new MutationObserver(u), f.current.observe(document.body, { childList: !0, subtree: !0 }), L(), () => {
      f.current && (f.current.disconnect(), f.current = null);
    };
  }, [L]);
  const Y = he(() => {
    const u = document.getElementById("checkout-shipping-continue");
    if (!u) return;
    _.current = u;
    let F = !R.current || !$.current;
    if (a.hasMultiShippingEnabled) {
      const b = document.querySelector(".checkout-step--shipping .alertBox--info"), O = document.querySelectorAll(".consignment-container").length, H = document.querySelectorAll('.consignment-container input[type="radio"]:checked').length === O;
      F = F || !!b || !H;
    }
    u.disabled !== F && (u.disabled = F);
  }, [a.hasMultiShippingEnabled]);
  J(() => {
    const u = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!u) return;
    const F = () => Y();
    return C.current = new MutationObserver(F), C.current.observe(u, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), Y(), () => {
      C.current && (C.current.disconnect(), C.current = null);
    };
  }, [Y]), J(() => {
    Y();
  }, [Y, s.acceptTerms, r]);
  const K = he(async () => {
    if (!E.current) {
      E.current = !0;
      try {
        const u = document.querySelectorAll(".consignment-container");
        if (u.length === 0) {
          E.current = !1;
          return;
        }
        const F = a.checkoutId;
        if (!F) {
          E.current = !1;
          return;
        }
        const b = await fetch(
          `/api/storefront/checkouts/${F}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }
        );
        if (!b.ok) {
          E.current = !1;
          return;
        }
        const O = await b.json(), H = O?.consignments || O?.data?.consignments || [];
        let N = null, B = null;
        if (r) {
          const D = r?.contact?.address?.zip, q = r?.contact?.address?.street1, U = r?.contact?.address?.city, ee = r?.contact?.address?.state;
          for (const G of H) {
            const V = G?.address;
            if (V) {
              const X = V.postalCode === D, ge = V.address1 === q, Fe = V.city === U, le = V.stateOrProvinceCode === ee;
              if (X && ge || X && Fe && le) {
                N = G, B = G.id;
                break;
              }
            }
          }
        }
        if (!N) {
          const D = await M.getMappingData(), q = D?.ffl_custom_attribute_name?.trim().toLowerCase(), U = D?.ffl_custom_attribute_value?.trim().toLowerCase(), ee = D?.ffl_firearm_custom_attribute_name?.trim().toLowerCase(), G = D?.ffl_firearm_custom_attribute_value;
          for (const V of H) {
            const X = V?.lineItems?.physicalItems || [];
            if (X.length === 0) continue;
            const ge = X.map((Q) => Q.productEntityId || Q.productId);
            if ((await M.getProducts(ge)).some((Q) => {
              const ue = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === q && Z.value.trim().toLowerCase() === U
              ), ye = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === ee && Z.value.trim().toLowerCase() === G?.[3]?.toLowerCase()
              );
              return ue || ye;
            })) {
              N = V, B = V.id;
              break;
            }
          }
        }
        if (!N) {
          console.warn("Could not find FFL consignment in API data"), E.current = !1;
          return;
        }
        if (u.forEach((D) => {
          D.classList.remove("consignment-container--ffl");
        }), B)
          for (let D = 0; D < u.length; D++) {
            const q = u[D], U = q.getAttribute("data-consignment-id") || q.getAttribute("data-id") || q.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
            if (U && U === String(B)) {
              q.classList.add("consignment-container--ffl"), E.current = !1;
              return;
            }
          }
        const P = N.address;
        if (P)
          for (let D = 0; D < u.length; D++) {
            const q = u[D], U = q.textContent || "", ee = P.postalCode && U.includes(P.postalCode), G = P.address1 && U.includes(P.address1), V = P.city && U.includes(P.city), X = P.stateOrProvinceCode && U.includes(P.stateOrProvinceCode);
            if (ee && (G || V && X)) {
              q.classList.add("consignment-container--ffl"), E.current = !1;
              return;
            }
          }
        const oe = await M.getFFLConsignmentIndex();
        oe !== null && oe >= 0 && oe < u.length ? u[oe].classList.add("consignment-container--ffl") : console.warn("Could not match FFL consignment to DOM container");
      } finally {
        E.current = !1;
      }
    }
  }, [a.checkoutId, r]);
  J(() => {
    if (!T && !I) return;
    if (a.hasMultiShippingEnabled)
      if (a.nonFFLItemStrategy !== "FORCE_TO_FFL") {
        const b = document.querySelector('[data-test="shipping-mode-toggle"]');
        b && b.innerText.trim().toLowerCase() === "ship to multiple addresses" && b.click(), setTimeout(() => {
          const O = document.querySelector('[data-test="shipping-mode-toggle"]');
          O && O.innerText.trim().toLowerCase() === "ship to a single address" && (O.style.display = "none");
        }, 0);
      } else {
        const b = document.querySelector('[data-test="shipping-mode-toggle"]');
        b && b.innerText.trim().toLowerCase() === "ship to multiple addresses" && (b.style.display = "none");
      }
    const u = setTimeout(() => {
      K();
    }, 100), F = () => {
      E.current || (w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        K(), w.current = null;
      }, 300));
    };
    return l.current = new MutationObserver(F), l.current.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      clearTimeout(u), w.current && (clearTimeout(w.current), w.current = null), l.current && (l.current.disconnect(), l.current = null);
    };
  }, [T, I, a.hasMultiShippingEnabled, K]), J(() => {
    if (!r) return;
    document.querySelectorAll(".consignment-container--ffl").forEach((b) => {
      b.classList.remove("consignment-container--ffl");
    });
    const F = setTimeout(() => {
      K();
    }, 500);
    return () => clearTimeout(F);
  }, [r, K]);
  const ne = (u) => {
    y({ postalCode: "", acceptTerms: "" }), u.target.name === "postalCode" ? (d({ ...s, postalCode: u.target.value }), sessionStorage.setItem(`${a.checkoutId}-postalCode`, u.target.value)) : (d({ ...s, acceptTerms: u.target.checked }), sessionStorage.setItem(`${a.checkoutId}-acceptTerms`, u.target.checked.toString()));
  }, se = (u) => {
    if (u.preventDefault(), y({ postalCode: "", acceptTerms: "" }), !s.postalCode) {
      y({ ...h, postalCode: `${a.lang.postalCodeLabel} is required` });
      return;
    }
    n(!0);
  }, ce = (u) => {
    u.key === "Enter" && se(u);
  };
  return /* @__PURE__ */ c.jsxs(
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
        /* @__PURE__ */ c.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "15px"
            },
            children: /* @__PURE__ */ c.jsxs("div", { className: `form-field ${h.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ c.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: a.lang.heading }),
              /* @__PURE__ */ c.jsx("p", { style: { fontWeight: 600 }, children: a.lang.subheading }),
              /* @__PURE__ */ c.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                a.lang.postalCodeLabel,
                " ",
                /* @__PURE__ */ c.jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ c.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    className: "form-input optimizedCheckout-form-input",
                    id: "postalCode",
                    name: "postalCode",
                    onChange: ne,
                    onKeyDown: ce,
                    placeholder: "",
                    type: "text",
                    value: s.postalCode
                  }
                ),
                /* @__PURE__ */ c.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ c.jsx("button", { onClick: se, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: a.lang.buttonText }) })
              ] }),
              h.postalCode && /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: h.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: `form-field-agreement form-field ${h.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              checked: s.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: ne,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ c.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: a.lang.termsLabel }),
          h.acceptTerms && /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: h.acceptTerms }) }) })
        ] }),
        p && /* @__PURE__ */ c.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: p }) }) }) }),
        r && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ c.jsxs("div", { className: "form-body", children: [
          /* @__PURE__ */ c.jsx("strong", { children: a.lang.selectedDealerLabel }),
          /* @__PURE__ */ c.jsx("div", { className: "text-pretty", children: r?.name }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ c.jsxs("span", { className: "block", children: [
              r?.contact.address.street1,
              " "
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              r?.contact.address.city,
              ", ",
              /* @__PURE__ */ c.jsx("span", { children: r?.contact.address.state })
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              " ",
              r?.contact.address.zip
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ c.jsx(
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
              a.nonFFLItemStrategy === "ALLOW_CHOICE" && [...M.fflLineItems].length > 0 ? [...M.fflLineItems].map((u) => `[data-test="remove-${u[0]}-button"] { display: none; }`).join(`
`) : ""}
              ${// hide the reallocate items button if the user cannot choose which consignment to put the items on
              a.nonFFLItemStrategy !== "ALLOW_CHOICE" ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }' : ""}
              ${// hide the enter shipping address button if the user has not selected a dealer
              !M.getSession(a.checkoutId).selectedDealer && '.consignment-container [data-test="enter-shipping-address"] { display: none; }'}`}
            
            `
            }
          }
        )
      ]
    }
  );
}, Ht = () => {
  const { config: n } = Re();
  return J(() => {
    if (document.querySelector(`script[src^="${n.sdkUrl}"]`))
      return;
    const d = document.createElement("script");
    d.src = n.sdkUrl, document.body.appendChild(d);
  }, [n.sdkUrl]), null;
}, Bt = () => {
  const { isModalOpen: n, setIsModalOpen: s, config: d, values: r, setSelectedDealer: a, isSuppressor: p } = Re(), T = "ffSelectFrame", I = async (y) => {
    if (!y) return;
    const { shippingData: C, dealer: _ } = await M.saveDealer(d.checkoutId, y), f = C.address;
    Object.keys(f).forEach((l) => {
      const w = document.querySelector(`[name="shippingAddress.${l}"]`);
      if (w) {
        const R = String(f[l] ?? "");
        st(w, R);
      }
    }), a(_), s(!1);
  };
  if (J(() => {
    n && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        r.postalCode,
        T,
        { url: d.baseUrl },
        {
          storeDomain: d.storeDomain,
          envMode: d.env,
          filters: p ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: I
        }
      ).show();
    }, 200);
  }, [
    n,
    r.postalCode,
    d.baseUrl,
    d.storeDomain,
    d.env,
    I,
    p
  ]), !n)
    return null;
  const h = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: ".ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }"
        }
      }
    ),
    /* @__PURE__ */ c.jsx(
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
        children: /* @__PURE__ */ c.jsx(
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
            children: /* @__PURE__ */ c.jsx("div", { id: T, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
          }
        )
      }
    )
  ] });
  return Rt(h, document.body);
};
export {
  Kt as MasterFFL,
  Re as useMasterFFL
};
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map
