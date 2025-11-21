import Ke, { createContext as kt, useContext as Ge, useMemo as fe, useState as ae, useEffect as z, useCallback as me, useRef as te } from "react";
import { createPortal as jt } from "react-dom";
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
var ze;
function Ot() {
  if (ze) return be;
  ze = 1;
  var r = Ke, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(I, p, y) {
    var v, h = {}, d = null, T = null;
    y !== void 0 && (d = "" + y), p.key !== void 0 && (d = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (v in p) s.call(p, v) && !f.hasOwnProperty(v) && (h[v] = p[v]);
    if (I && I.defaultProps) for (v in p = I.defaultProps, p) h[v] === void 0 && (h[v] = p[v]);
    return { $$typeof: a, type: I, key: d, ref: T, props: h, _owner: n.current };
  }
  return be.Fragment = u, be.jsx = E, be.jsxs = E, be;
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
var Je;
function Rt() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ke, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), I = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), _ = Symbol.iterator, D = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _ && e[_] || e[D];
      return typeof t == "function" ? t : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          o[i - 1] = arguments[i];
        W("error", e, o);
      }
    }
    function W(e, t, o) {
      {
        var i = S.ReactDebugCurrentFrame, b = i.getStackAddendum();
        b !== "" && (t += "%s", o = o.concat([b]));
        var w = o.map(function(g) {
          return String(g);
        });
        w.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var K = !1, re = !1, ne = !1, ie = !1, l = !1, F;
    F = Symbol.for("react.module.reference");
    function C(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === f || l || e === n || e === y || e === v || ie || e === T || K || re || ne || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === h || e.$$typeof === E || e.$$typeof === I || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function O(e, t, o) {
      var i = e.displayName;
      if (i)
        return i;
      var b = t.displayName || t.name || "";
      return b !== "" ? o + "(" + b + ")" : o;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case u:
          return "Portal";
        case f:
          return "Profiler";
        case n:
          return "StrictMode";
        case y:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return Y(t) + ".Consumer";
          case E:
            var o = e;
            return Y(o._context) + ".Provider";
          case p:
            return O(e, e.render, "ForwardRef");
          case h:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case d: {
            var b = e, w = b._payload, g = b._init;
            try {
              return $(g(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, P = 0, se, R, N, q, ee, G, U;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function ge() {
      {
        if (P === 0) {
          se = console.log, R = console.info, N = console.warn, q = console.error, ee = console.group, G = console.groupCollapsed, U = console.groupEnd;
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
    function we() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: se
            }),
            info: H({}, e, {
              value: R
            }),
            warn: H({}, e, {
              value: N
            }),
            error: H({}, e, {
              value: q
            }),
            group: H({}, e, {
              value: ee
            }),
            groupCollapsed: H({}, e, {
              value: G
            }),
            groupEnd: H({}, e, {
              value: U
            })
          });
        }
        P < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = S.ReactCurrentDispatcher, Q;
    function le(e, t, o) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (b) {
            var i = b.stack.trim().match(/\n( *(at )?)/);
            Q = i && i[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ye = !1, Z;
    {
      var ot = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new ot();
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
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ce.current, ce.current = null, ge();
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
            } catch (V) {
              i = V;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (V) {
              i = V;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            i = V;
          }
          e();
        }
      } catch (V) {
        if (V && i && typeof V.stack == "string") {
          for (var m = V.stack.split(`
`), M = i.stack.split(`
`), x = m.length - 1, j = M.length - 1; x >= 1 && j >= 0 && m[x] !== M[j]; )
            j--;
          for (; x >= 1 && j >= 0; x--, j--)
            if (m[x] !== M[j]) {
              if (x !== 1 || j !== 1)
                do
                  if (x--, j--, j < 0 || m[x] !== M[j]) {
                    var B = `
` + m[x].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, B), B;
                  }
                while (x >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ye = !1, ce.current = w, we(), Error.prepareStackTrace = b;
      }
      var de = e ? e.displayName || e.name : "", oe = de ? le(de) : "";
      return typeof e == "function" && Z.set(e, oe), oe;
    }
    function at(e, t, o) {
      return Oe(e, !1);
    }
    function it(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Se(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, it(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case y:
          return le("Suspense");
        case v:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return at(e.render);
          case h:
            return Se(e.type, t, o);
          case d: {
            var i = e, b = i._payload, w = i._init;
            try {
              return Se(w(b), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Re = {}, De = S.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        De.setExtraStackFrame(o);
      } else
        De.setExtraStackFrame(null);
    }
    function ct(e, t, o, i, b) {
      {
        var w = Function.call.bind(ve);
        for (var g in e)
          if (w(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var M = Error((i || "React class") + ": " + o + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              m = e[g](t, g, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Ee(b), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, g, typeof m), Ee(null)), m instanceof Error && !(m.message in Re) && (Re[m.message] = !0, Ee(b), L("Failed %s type: %s", o, m.message), Ee(null));
          }
      }
    }
    var lt = Array.isArray;
    function Te(e) {
      return lt(e);
    }
    function ut(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function dt(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function Me(e) {
      if (dt(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(e)), Pe(e);
    }
    var Ae = S.ReactCurrentOwner, ft = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ne;
    function pt(e) {
      if (ve.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mt(e) {
      if (ve.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ht(e, t) {
      typeof e.ref == "string" && Ae.current;
    }
    function gt(e, t) {
      {
        var o = function() {
          $e || ($e = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function yt(e, t) {
      {
        var o = function() {
          Ne || (Ne = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var vt = function(e, t, o, i, b, w, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: g,
        // Record the component responsible for creating this element.
        _owner: w
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
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function bt(e, t, o, i, b) {
      {
        var w, g = {}, m = null, M = null;
        o !== void 0 && (Me(o), m = "" + o), mt(t) && (Me(t.key), m = "" + t.key), pt(t) && (M = t.ref, ht(t, b));
        for (w in t)
          ve.call(t, w) && !ft.hasOwnProperty(w) && (g[w] = t[w]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (w in x)
            g[w] === void 0 && (g[w] = x[w]);
        }
        if (m || M) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && gt(g, j), M && yt(g, j);
        }
        return vt(e, m, M, b, i, Ae.current, g);
      }
    }
    var _e = S.ReactCurrentOwner, qe = S.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        qe.setExtraStackFrame(o);
      } else
        qe.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ue() {
      {
        if (_e.current) {
          var e = $(_e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ct(e) {
      return "";
    }
    var Ve = {};
    function Ft(e) {
      {
        var t = Ue();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function We(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Ft(t);
        if (Ve[o])
          return;
        Ve[o] = !0;
        var i = "";
        e && e._owner && e._owner !== _e.current && (i = " It was passed a child from " + $(e._owner.type) + "."), ue(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), ue(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            Le(i) && We(i, t);
          }
        else if (Le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = J(e);
          if (typeof b == "function" && b !== e.entries)
            for (var w = b.call(e), g; !(g = w.next()).done; )
              Le(g.value) && We(g.value, t);
        }
      }
    }
    function wt(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === h))
          o = t.propTypes;
        else
          return;
        if (o) {
          var i = $(t);
          ct(o, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var b = $(t);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function St(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var i = t[o];
          if (i !== "children" && i !== "key") {
            ue(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var He = {};
    function Be(e, t, o, i, b, w) {
      {
        var g = C(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = Ct();
          M ? m += M : m += Ue();
          var x;
          e === null ? x = "null" : Te(e) ? x = "array" : e !== void 0 && e.$$typeof === a ? (x = "<" + ($(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var j = bt(e, t, o, b, w);
        if (j == null)
          return j;
        if (g) {
          var B = t.children;
          if (B !== void 0)
            if (i)
              if (Te(B)) {
                for (var de = 0; de < B.length; de++)
                  Ye(B[de], e);
                Object.freeze && Object.freeze(B);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(B, e);
        }
        if (ve.call(t, "key")) {
          var oe = $(e), V = Object.keys(t).filter(function(xt) {
            return xt !== "key";
          }), xe = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[oe + xe]) {
            var Lt = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, oe, Lt, oe), He[oe + xe] = !0;
          }
        }
        return e === s ? St(j) : wt(j), j;
      }
    }
    function Et(e, t, o) {
      return Be(e, t, o, !0);
    }
    function Tt(e, t, o) {
      return Be(e, t, o, !1);
    }
    var _t = Tt, It = Et;
    Ce.Fragment = s, Ce.jsx = _t, Ce.jsxs = It;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? ke.exports = Ot() : ke.exports = Rt();
var c = ke.exports;
const Dt = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
}, Pt = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
}, Mt = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
}, pe = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
}, he = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), At = async () => {
  const [r, a, u] = await Promise.all([Ze(), Qe(), $t()]);
  let s = !1, n = !1;
  window.masterFFLConfig = window.masterFFLConfig || {}, window.masterFFLConfig.hasMultiShippingEnabled = u.storeConfig.checkoutSettings.hasMultiShippingEnabled;
  const f = r?.ffl_custom_attribute_name.trim().toLowerCase(), E = r?.ffl_custom_attribute_value.trim().toLowerCase(), I = r?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), p = r?.ffl_firearm_custom_attribute_value, y = a?.lineItems.physicalItems.map((h) => h.productEntityId), v = await A.getProducts(y);
  if (s = v.some((h) => h.customFields.some((d) => d.name.trim().toLowerCase() === f && d.value.trim().toLowerCase() === E)), n = v.some((h) => h.customFields.some(
    (d) => d.name.trim().toLowerCase() === I && d.value.trim().toLowerCase() === p?.[3]?.toLowerCase()
  )), v.forEach((h) => {
    h.customFields.some((d) => d.name.trim().toLowerCase() === f && d.value.trim().toLowerCase() === E) && he.set(h.entityId, h), h.customFields.some(
      (d) => d.name.trim().toLowerCase() === I && d.value.trim().toLowerCase() === p?.[3]?.toLowerCase()
    ) && he.set(h.entityId, !0);
  }), a?.lineItems.physicalItems.forEach((h) => {
    he.get(h.productEntityId) && Xe.set(h.entityId, h);
  }), s || n)
    return { isFFL: s, isSuppressor: n };
  if (r && r?.category_mapping.length > 0) {
    const h = v.map((d) => {
      let T = null;
      const _ = r.category_mapping.filter(
        (D) => d.categoryIds.some((J) => D.categoryId === J.entityId)
      );
      if (_.length > 0) {
        const D = _.reduce(
          (J, S) => parseInt(S.priority, 10) < parseInt(J.priority, 10) ? S : J
        );
        T = D.fflMapping ? D : null;
      }
      return { ...d, fflFirearmType: T ? T.fflMapping : null };
    });
    s = h.some((d) => d.fflFirearmType), n = h.some(
      (d) => d.fflFirearmType && d.fflFirearmType.trim().toLowerCase() === p?.[3]
    );
  }
  return { isFFL: s, isSuppressor: n };
}, k = () => ({
  ...window.masterFFLConfig || {},
  env: window.masterFFLConfig?.env || "production",
  baseUrl: Dt[window.masterFFLConfig?.env || "production"],
  appUrl: Pt[window.masterFFLConfig?.env || "production"],
  sdkUrl: Mt[window.masterFFLConfig?.env || "production"],
  storeDomain: window.location.hostname.replace("www.", ""),
  storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
  lang: {
    heading: window.masterFFLConfig?.lang?.heading || pe.heading,
    subheading: window.masterFFLConfig?.lang?.subheading || pe.subheading,
    postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || pe.postalCodeLabel,
    buttonText: window.masterFFLConfig?.lang?.buttonText || pe.buttonText,
    termsLabel: window.masterFFLConfig?.lang?.termsLabel || pe.termsLabel,
    selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || pe.selectedDealerLabel
  }
}), Ze = async () => {
  const r = `mapping-${k().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const n = await (await fetch(`${k().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: k().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[r] = n, n;
}, $t = async () => {
  const r = `checkout-settings-${k().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const n = await (await fetch(`/api/storefront/checkout-settings?checkoutId=${k().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" }
  })).json();
  return window.masterFFLCache[r] = n, n;
}, Nt = async (r, a) => {
  tt(r, "selectedDealer");
  let s = (await Qe())?.lineItems.physicalItems.map((y) => ({
    itemId: y.entityId,
    productId: y.productEntityId,
    quantity: y.quantity
  }));
  const n = k().hasMultiShippingEnabled, f = k().nonFFLItemStrategy;
  n && (f === "FORCE_TO_FFL" || (f === "FORCE_TO_NON_FFL" || f === "ALLOW_CHOICE") && (s = s.filter((y) => he.get(Number(y.productId)))));
  const E = {
    address: {
      firstName: a.name,
      lastName: "n/a",
      phone: a.contact.primaryPhone ? a.contact.primaryPhone : "0000000000",
      company: a.name,
      address1: a.contact.address.street1,
      address2: "",
      city: a.contact.address.city,
      stateOrProvinceCode: a.contact.address.state,
      stateOrProvince: "",
      shouldSaveAddress: !1,
      postalCode: a.contact.address.zip,
      localizedCountry: "United States",
      countryCode: "US",
      customFields: []
    },
    lineItems: s
  };
  if ((await (await fetch(`${k().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: a.id.match(/\d+/g)?.join("") || "",
      cartId: r ?? "",
      storeHash: k().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return await fetch(
    `/api/storefront/checkouts/${k().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: E.address, lineItems: E.lineItems }])
    }
  ), k().hasMultiShippingEnabled && window.location.reload(), et(r, { selectedDealer: JSON.stringify(a) }), {
    dealer: a,
    shippingData: E
  };
}, Qe = async () => {
  const r = `cart-${k().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const s = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${k().storefrontApiToken}` },
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
  return window.masterFFLCache[r] = s.data.site.cart, s.data.site.cart;
}, qt = async (r) => r ? (await (await fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${k().storefrontApiToken}`
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
    variables: { ids: r }
  })
})).json()).data.site.products.edges.map((n) => ({
  entityId: n.node.entityId,
  customFields: n.node.customFields.edges.map((f) => f.node),
  categoryIds: n.node.categories.edges.map((f) => f.node)
})) : [], Fe = (r) => ({
  postalCode: sessionStorage.getItem(`${r}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${r}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${r}-acceptTerms`) === "false" ? !1 : void 0,
  selectedDealer: sessionStorage.getItem(`${r}-selectedDealer`)
}), et = (r, a) => {
  const { postalCode: u, acceptTerms: s, selectedDealer: n } = a;
  sessionStorage.setItem(`${r}-postalCode`, u || sessionStorage.getItem(`${r}-postalCode`) || ""), sessionStorage.setItem(`${r}-acceptTerms`, s || sessionStorage.getItem(`${r}-acceptTerms`) || ""), sessionStorage.setItem(`${r}-selectedDealer`, n || sessionStorage.getItem(`${r}-selectedDealer`) || "");
}, tt = (r, a) => {
  sessionStorage.removeItem(`${r}-${a}`);
}, Ut = async () => {
  try {
    const r = k().checkoutId;
    if (!r) return null;
    const a = await fetch(`/api/storefront/checkouts/${r}?include=consignments.lineItems.physicalItems%2Cconsignments.address`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!a.ok) {
      if (k().hasMultiShippingEnabled) {
        const n = Fe(r).selectedDealer;
        if (n && n !== "null")
          return 0;
      }
      return null;
    }
    const u = await a.json(), s = u?.consignments || u?.data?.consignments || [];
    if (s.length === 0) {
      if (k().hasMultiShippingEnabled) {
        const n = Fe(r).selectedDealer;
        if (n && n !== "null")
          return 0;
      }
      return null;
    }
    for (let n = 0; n < s.length; n++)
      if ((s[n]?.lineItems?.physicalItems || []).some((p) => {
        const y = p.productEntityId || p.productId;
        return he.get(Number(y));
      }))
        return n;
    if (k().hasMultiShippingEnabled) {
      const n = Fe(r).selectedDealer;
      if (n && n !== "null")
        return 0;
    }
    return null;
  } catch (r) {
    console.error("Error getting FFL consignment index:", r);
    const a = k().checkoutId;
    if (a && k().hasMultiShippingEnabled) {
      const u = Fe(a).selectedDealer;
      if (u && u !== "null")
        return 0;
    }
    return null;
  }
}, A = {
  init: At,
  getConfig: k,
  getSession: Fe,
  setSession: et,
  removeSession: tt,
  saveDealer: Nt,
  getMappingData: Ze,
  getProducts: qt,
  getFFLConsignmentIndex: Ut,
  fflProducts: he,
  fflLineItems: Xe,
  checkoutService: null
};
var rt = /* @__PURE__ */ ((r) => (r.Billing = "billing", r.Customer = "customer", r.Payment = "payment", r.Shipping = "shipping", r))(rt || {});
function nt(r, a) {
  const u = r.tagName;
  if (u === "INPUT") {
    const s = r;
    if (s.type === "checkbox" || s.type === "radio") {
      const n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set, f = a === "true" || a === "on" || a === "1";
      n ? n.call(s, f) : s.checked = f;
    } else {
      const n = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      n ? n.call(s, a) : s.value = a;
    }
  } else if (u === "TEXTAREA") {
    const s = r, n = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    n ? n.call(s, a) : s.value = a;
  } else if (u === "SELECT") {
    const s = r, n = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    n ? n.call(s, a) : s.value = a;
  }
  r.dispatchEvent(new Event("input", { bubbles: !0 })), r.dispatchEvent(new Event("change", { bubbles: !0 }));
}
const st = kt({}), je = () => {
  const r = Ge(st);
  if (!r)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return r;
}, zt = ({ checkoutContext: r, getCheckoutStepStatuses: a }) => {
  const { checkoutService: u, checkoutState: s } = Ge(r), n = fe(() => s.data.getConfig()?.storeProfile, [s]), f = fe(() => s.data.getCheckout()?.id, [s]), E = fe(() => n?.storeHash, [n]), [I, p] = ae(!1), [y, v] = ae({
    postalCode: "",
    acceptTerms: !1
  }), [h, d] = ae(null), [T, _] = ae(null), [D, J] = ae(!1), [S, L] = ae(!1);
  z(() => {
    if (!f) return;
    const { postalCode: F, acceptTerms: C, selectedDealer: O } = A.getSession(f);
    F && v((Y) => ({ ...Y, postalCode: F })), C && v((Y) => ({ ...Y, acceptTerms: C })), O && O !== "null" && _(JSON.parse(O));
  }, [f]);
  const W = fe(
    () => ({
      ...A.getConfig(),
      storeHash: E,
      checkoutId: s.data.getCheckout()?.id
    }),
    [E, s]
  ), K = me(
    async (F) => {
      _(null), d(null);
      try {
        await A.saveDealer(f, F), _(F);
      } catch {
        d("An error occurred while saving the dealer. Please try again.");
      }
    },
    [f, u]
  ), re = fe(() => a(s), [s]);
  z(() => {
    if (re.find((C) => C.isActive)?.type !== rt.Shipping && (!T || !y.acceptTerms)) {
      const C = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      C && C.click();
    }
  }, [re, T, y.acceptTerms]);
  const ne = me(() => {
    if (!f) return;
    sessionStorage.getItem(`${f}-selectedDealer`) && (A.removeSession(f, "postalCode"), A.removeSession(f, "acceptTerms"), A.removeSession(f, "selectedDealer"), document.querySelectorAll('[name^="shippingAddress."]').forEach((O) => {
      (O instanceof HTMLInputElement || O instanceof HTMLTextAreaElement || O instanceof HTMLSelectElement) && nt(O, "");
    }));
  }, [f]), ie = me(async () => {
    if (!W.storeHash || !s.data.getCart()) return;
    const { isFFL: F, isSuppressor: C } = await A.init();
    J(F), L(C), !F && !C && ne();
  }, [W.storeHash, s.data.getCart(), ne]);
  z(() => {
    ie();
  }, [ie]);
  const l = fe(
    () => ({
      checkoutService: u,
      checkoutState: s,
      config: W,
      isModalOpen: I,
      setIsModalOpen: p,
      values: y,
      setValues: v,
      handleSaveDealer: K,
      selectedDealer: T,
      setSelectedDealer: _,
      error: h,
      isFFL: D,
      isSuppressor: S
    }),
    [
      u,
      s,
      W,
      I,
      p,
      y,
      v,
      K,
      T,
      _,
      h,
      D,
      S
    ]
  );
  return /* @__PURE__ */ c.jsx(st.Provider, { value: l, children: (D || S) && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(Vt, {}),
    /* @__PURE__ */ c.jsx(Wt, {}),
    /* @__PURE__ */ c.jsx(Yt, {})
  ] }) });
}, Vt = () => {
  const { setIsModalOpen: r, values: a, setValues: u, selectedDealer: s, config: n, error: f, isFFL: E, isSuppressor: I } = je(), [p, y] = ae({ postalCode: "", acceptTerms: "" }), v = te(null), h = te(null), d = te(null), T = te(null), _ = te(null), D = te(!1), J = te(!1), S = te(!1);
  z(() => {
    D.current = a.acceptTerms;
  }, [a.acceptTerms]), z(() => {
    J.current = !!s;
  }, [s]);
  const L = me(() => {
    const l = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]');
    l && l && l.checked && l.click();
  }, []);
  z(() => {
    const l = () => L();
    return d.current = new MutationObserver(l), d.current.observe(document.body, { childList: !0, subtree: !0 }), L(), () => {
      d.current && (d.current.disconnect(), d.current = null);
    };
  }, [L]);
  const W = me(() => {
    const l = document.getElementById("checkout-shipping-continue");
    if (!l) return;
    h.current = l;
    let F = !D.current || !J.current;
    if (n.hasMultiShippingEnabled) {
      const C = document.querySelector(".checkout-step--shipping .alertBox--info"), O = document.querySelectorAll(".consignment-container").length, Y = document.querySelectorAll('.consignment-container input[type="radio"]:checked').length === O;
      F = F || !!C || !Y;
    }
    if (!F && l.disabled) {
      l.disabled = !0;
      return;
    }
    l.disabled !== F && (l.disabled = F);
  }, [n.hasMultiShippingEnabled]);
  z(() => {
    const l = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!l) return;
    const F = () => W();
    return v.current = new MutationObserver(F), v.current.observe(l, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), W(), () => {
      v.current && (v.current.disconnect(), v.current = null);
    };
  }, [W]), z(() => {
    W();
  }, [W, a.acceptTerms, s]);
  const K = me(async () => {
    if (!S.current) {
      S.current = !0;
      try {
        const l = document.querySelectorAll(".consignment-container");
        if (l.length === 0) {
          S.current = !1;
          return;
        }
        const F = n.checkoutId;
        if (!F) {
          S.current = !1;
          return;
        }
        const C = await fetch(
          `/api/storefront/checkouts/${F}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }
        );
        if (!C.ok) {
          S.current = !1;
          return;
        }
        const O = await C.json(), Y = O?.consignments || O?.data?.consignments || [];
        let $ = null, H = null;
        if (s) {
          const R = s?.contact?.address?.zip, N = s?.contact?.address?.street1, q = s?.contact?.address?.city, ee = s?.contact?.address?.state;
          for (const G of Y) {
            const U = G?.address;
            if (U) {
              const X = U.postalCode === R, ge = U.address1 === N, we = U.city === q, ce = U.stateOrProvinceCode === ee;
              if (X && ge || X && we && ce) {
                $ = G, H = G.id;
                break;
              }
            }
          }
        }
        if (!$) {
          const R = await A.getMappingData(), N = R?.ffl_custom_attribute_name?.trim().toLowerCase(), q = R?.ffl_custom_attribute_value?.trim().toLowerCase(), ee = R?.ffl_firearm_custom_attribute_name?.trim().toLowerCase(), G = R?.ffl_firearm_custom_attribute_value;
          for (const U of Y) {
            const X = U?.lineItems?.physicalItems || [];
            if (X.length === 0) continue;
            const ge = X.map((Q) => Q.productEntityId || Q.productId);
            if ((await A.getProducts(ge)).some((Q) => {
              const le = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === N && Z.value.trim().toLowerCase() === q
              ), ye = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === ee && Z.value.trim().toLowerCase() === G?.[3]?.toLowerCase()
              );
              return le || ye;
            })) {
              $ = U, H = U.id;
              break;
            }
          }
        }
        if (!$) {
          console.warn("Could not find FFL consignment in API data"), S.current = !1;
          return;
        }
        if (l.forEach((R) => {
          R.classList.remove("consignment-container--ffl");
        }), H)
          for (let R = 0; R < l.length; R++) {
            const N = l[R], q = N.getAttribute("data-consignment-id") || N.getAttribute("data-id") || N.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
            if (q && q === String(H)) {
              N.classList.add("consignment-container--ffl"), S.current = !1;
              return;
            }
          }
        const P = $.address;
        if (P)
          for (let R = 0; R < l.length; R++) {
            const N = l[R], q = N.textContent || "", ee = P.postalCode && q.includes(P.postalCode), G = P.address1 && q.includes(P.address1), U = P.city && q.includes(P.city), X = P.stateOrProvinceCode && q.includes(P.stateOrProvinceCode);
            if (ee && (G || U && X)) {
              N.classList.add("consignment-container--ffl"), S.current = !1;
              return;
            }
          }
        const se = await A.getFFLConsignmentIndex();
        se !== null && se >= 0 && se < l.length ? l[se].classList.add("consignment-container--ffl") : console.warn("Could not match FFL consignment to DOM container");
      } finally {
        S.current = !1;
      }
    }
  }, [n.checkoutId, s]);
  z(() => {
    if (!E && !I) return;
    if (n.hasMultiShippingEnabled)
      if (n.nonFFLItemStrategy !== "FORCE_TO_FFL") {
        const C = document.querySelector('[data-test="shipping-mode-toggle"]');
        C && C.innerText.trim().toLowerCase() === "ship to multiple addresses" && C.click(), setTimeout(() => {
          const O = document.querySelector('[data-test="shipping-mode-toggle"]');
          O && O.innerText.trim().toLowerCase() === "ship to a single address" && (O.style.display = "none");
        }, 0);
      } else {
        const C = document.querySelector('[data-test="shipping-mode-toggle"]');
        C && C.innerText.trim().toLowerCase() === "ship to multiple addresses" && (C.style.display = "none");
      }
    const l = setTimeout(() => {
      K();
    }, 100), F = () => {
      S.current || (_.current && clearTimeout(_.current), _.current = setTimeout(() => {
        K(), _.current = null;
      }, 300));
    };
    return T.current = new MutationObserver(F), T.current.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      clearTimeout(l), _.current && (clearTimeout(_.current), _.current = null), T.current && (T.current.disconnect(), T.current = null);
    };
  }, [E, I, n.hasMultiShippingEnabled, K]), z(() => {
    if (!s) return;
    document.querySelectorAll(".consignment-container--ffl").forEach((C) => {
      C.classList.remove("consignment-container--ffl");
    });
    const F = setTimeout(() => {
      K();
    }, 500);
    return () => clearTimeout(F);
  }, [s, K]);
  const re = (l) => {
    y({ postalCode: "", acceptTerms: "" }), l.target.name === "postalCode" ? (u({ ...a, postalCode: l.target.value }), sessionStorage.setItem(`${n.checkoutId}-postalCode`, l.target.value)) : (u({ ...a, acceptTerms: l.target.checked }), sessionStorage.setItem(`${n.checkoutId}-acceptTerms`, l.target.checked.toString()));
  }, ne = (l) => {
    if (l.preventDefault(), y({ postalCode: "", acceptTerms: "" }), !a.postalCode) {
      y({ ...p, postalCode: `${n.lang.postalCodeLabel} is required` });
      return;
    }
    r(!0);
  }, ie = (l) => {
    l.key === "Enter" && ne(l);
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
            children: /* @__PURE__ */ c.jsxs("div", { className: `form-field ${p.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ c.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: n.lang.heading }),
              /* @__PURE__ */ c.jsx("p", { style: { fontWeight: 600 }, children: n.lang.subheading }),
              /* @__PURE__ */ c.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                n.lang.postalCodeLabel,
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
                    onChange: re,
                    onKeyDown: ie,
                    placeholder: "",
                    type: "text",
                    value: a.postalCode
                  }
                ),
                /* @__PURE__ */ c.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ c.jsx("button", { onClick: ne, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: n.lang.buttonText }) })
              ] }),
              p.postalCode && /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: p.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: `form-field-agreement form-field ${p.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ c.jsx(
            "input",
            {
              checked: a.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: re,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ c.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: n.lang.termsLabel }),
          p.acceptTerms && /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: p.acceptTerms }) }) })
        ] }),
        f && /* @__PURE__ */ c.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: f }) }) }) }),
        s && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ c.jsxs("div", { className: "form-body", children: [
          /* @__PURE__ */ c.jsx("strong", { children: n.lang.selectedDealerLabel }),
          /* @__PURE__ */ c.jsx("div", { className: "text-pretty", children: s?.name }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ c.jsxs("span", { className: "block", children: [
              s?.contact.address.street1,
              " "
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              s?.contact.address.city,
              ", ",
              /* @__PURE__ */ c.jsx("span", { children: s?.contact.address.state })
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              " ",
              s?.contact.address.zip
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
            ${n.hasMultiShippingEnabled && `           
              ${// if the user can choose which consignment to put the items on, hide the remove buttons for the ffl line items
              // they cannot move these items to a non-ffl address
              n.nonFFLItemStrategy === "ALLOW_CHOICE" && [...A.fflLineItems].length > 0 ? [...A.fflLineItems].map((l) => `[data-test="remove-${l[0]}-button"] { display: none; }`).join(`
`) : ""}
              ${// hide the reallocate items button if the user cannot choose which consignment to put the items on
              n.nonFFLItemStrategy !== "ALLOW_CHOICE" ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }' : ""}
              ${// hide the enter shipping address button if the user has not selected a dealer
              !A.getSession(n.checkoutId).selectedDealer && '.consignment-container [data-test="enter-shipping-address"] { display: none; }'}`}
            
            `
            }
          }
        )
      ]
    }
  );
}, Wt = () => {
  const { config: r } = je();
  return z(() => {
    if (document.querySelector(`script[src^="${r.sdkUrl}"]`))
      return;
    const u = document.createElement("script");
    u.src = r.sdkUrl, document.body.appendChild(u);
  }, [r.sdkUrl]), null;
}, Yt = () => {
  const { isModalOpen: r, setIsModalOpen: a, config: u, values: s, setSelectedDealer: n, isSuppressor: f } = je(), E = "ffSelectFrame", I = async (y) => {
    if (!y) return;
    const { shippingData: v, dealer: h } = await A.saveDealer(u.checkoutId, y), d = v.address;
    Object.keys(d).forEach((T) => {
      const _ = document.querySelector(`[name="shippingAddress.${T}"]`);
      if (_) {
        const D = String(d[T] ?? "");
        nt(_, D);
      }
    }), n(h), a(!1);
  };
  if (z(() => {
    r && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        s.postalCode,
        E,
        { url: u.baseUrl },
        {
          storeDomain: u.storeDomain,
          envMode: u.env,
          filters: f ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: I
        }
      ).show();
    }, 200);
  }, [
    r,
    s.postalCode,
    u.baseUrl,
    u.storeDomain,
    u.env,
    I,
    f
  ]), !r)
    return null;
  const p = /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
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
        onClick: () => a(!1),
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
            children: /* @__PURE__ */ c.jsx("div", { id: E, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
          }
        )
      }
    )
  ] });
  return jt(p, document.body);
};
export {
  zt as MasterFFL,
  je as useMasterFFL
};
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map
