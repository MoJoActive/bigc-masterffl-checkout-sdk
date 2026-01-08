import Ge, { createContext as Ot, useContext as Xe, useMemo as ge, useState as se, useEffect as K, useCallback as de, useRef as re } from "react";
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
function jt() {
  if (Je) return be;
  Je = 1;
  var r = Ge, s = Symbol.for("react.element"), p = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(j, E, F) {
    var O, I = {}, h = null, f = null;
    F !== void 0 && (h = "" + F), E.key !== void 0 && (h = "" + E.key), E.ref !== void 0 && (f = E.ref);
    for (O in E) n.call(E, O) && !i.hasOwnProperty(O) && (I[O] = E[O]);
    if (j && j.defaultProps) for (O in E = j.defaultProps, E) I[O] === void 0 && (I[O] = E[O]);
    return { $$typeof: s, type: j, key: h, ref: f, props: I, _owner: a.current };
  }
  return be.Fragment = p, be.jsx = k, be.jsxs = k, be;
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
    var r = Ge, s = Symbol.for("react.element"), p = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), j = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), T = Symbol.iterator, D = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = T && e[T] || e[D];
      return typeof t == "function" ? t : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          o[u - 1] = arguments[u];
        ce("error", e, o);
      }
    }
    function ce(e, t, o) {
      {
        var u = R.ReactDebugCurrentFrame, S = u.getStackAddendum();
        S !== "" && (t += "%s", o = o.concat([S]));
        var _ = o.map(function(b) {
          return String(b);
        });
        _.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var H = !1, ee = !1, te = !1, G = !1, Z = !1, oe;
    oe = Symbol.for("react.module.reference");
    function le(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === i || Z || e === a || e === F || e === O || G || e === f || H || ee || te || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === I || e.$$typeof === k || e.$$typeof === j || e.$$typeof === E || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ae(e, t, o) {
      var u = e.displayName;
      if (u)
        return u;
      var S = t.displayName || t.name || "";
      return S !== "" ? o + "(" + S + ")" : o;
    }
    function c(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case p:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case F:
          return "Suspense";
        case O:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case j:
            var t = e;
            return c(t) + ".Consumer";
          case k:
            var o = e;
            return c(o._context) + ".Provider";
          case E:
            return ae(e, e.render, "ForwardRef");
          case I:
            var u = e.displayName || null;
            return u !== null ? u : w(e.type) || "Memo";
          case h: {
            var S = e, _ = S._payload, b = S._init;
            try {
              return w(b(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var m = Object.assign, x = 0, l, A, W, v, g, L, $;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function Q() {
      {
        if (x === 0) {
          l = console.log, A = console.info, W = console.warn, v = console.error, g = console.group, L = console.groupCollapsed, $ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        x++;
      }
    }
    function B() {
      {
        if (x--, x === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: m({}, e, {
              value: l
            }),
            info: m({}, e, {
              value: A
            }),
            warn: m({}, e, {
              value: W
            }),
            error: m({}, e, {
              value: v
            }),
            group: m({}, e, {
              value: g
            }),
            groupCollapsed: m({}, e, {
              value: L
            }),
            groupEnd: m({}, e, {
              value: $
            })
          });
        }
        x < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = R.ReactCurrentDispatcher, ne;
    function fe(e, t, o) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (S) {
            var u = S.stack.trim().match(/\n( *(at )?)/);
            ne = u && u[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var ye = !1, we;
    {
      var at = typeof WeakMap == "function" ? WeakMap : Map;
      we = new at();
    }
    function je(e, t) {
      if (!e || ye)
        return "";
      {
        var o = we.get(e);
        if (o !== void 0)
          return o;
      }
      var u;
      ye = !0;
      var S = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Y.current, Y.current = null, Q();
      try {
        if (t) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (z) {
              u = z;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (z) {
              u = z;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            u = z;
          }
          e();
        }
      } catch (z) {
        if (z && u && typeof z.stack == "string") {
          for (var y = z.stack.split(`
`), V = u.stack.split(`
`), N = y.length - 1, q = V.length - 1; N >= 1 && q >= 0 && y[N] !== V[q]; )
            q--;
          for (; N >= 1 && q >= 0; N--, q--)
            if (y[N] !== V[q]) {
              if (N !== 1 || q !== 1)
                do
                  if (N--, q--, q < 0 || y[N] !== V[q]) {
                    var X = `
` + y[N].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && we.set(e, X), X;
                  }
                while (N >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        ye = !1, Y.current = _, B(), Error.prepareStackTrace = S;
      }
      var pe = e ? e.displayName || e.name : "", ue = pe ? fe(pe) : "";
      return typeof e == "function" && we.set(e, ue), ue;
    }
    function it(e, t, o) {
      return je(e, !1);
    }
    function ct(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Se(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, ct(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case F:
          return fe("Suspense");
        case O:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            return it(e.render);
          case I:
            return Se(e.type, t, o);
          case h: {
            var u = e, S = u._payload, _ = u._init;
            try {
              return Se(_(S), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, De = {}, Pe = R.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function lt(e, t, o, u, S) {
      {
        var _ = Function.call.bind(ve);
        for (var b in e)
          if (_(e, b)) {
            var y = void 0;
            try {
              if (typeof e[b] != "function") {
                var V = Error((u || "React class") + ": " + o + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              y = e[b](t, b, u, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              y = N;
            }
            y && !(y instanceof Error) && (Ee(S), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", o, b, typeof y), Ee(null)), y instanceof Error && !(y.message in De) && (De[y.message] = !0, Ee(S), P("Failed %s type: %s", o, y.message), Ee(null));
          }
      }
    }
    var ut = Array.isArray;
    function Ie(e) {
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
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(e)), Ae(e);
    }
    var Ne = R.ReactCurrentOwner, mt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, qe;
    function pt(e) {
      if (ve.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gt(e) {
      if (ve.call(e, "key")) {
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
          $e || ($e = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          qe || (qe = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var bt = function(e, t, o, u, S, _, b) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: b,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function Ct(e, t, o, u, S) {
      {
        var _, b = {}, y = null, V = null;
        o !== void 0 && (Me(o), y = "" + o), gt(t) && (Me(t.key), y = "" + t.key), pt(t) && (V = t.ref, ht(t, S));
        for (_ in t)
          ve.call(t, _) && !mt.hasOwnProperty(_) && (b[_] = t[_]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (_ in N)
            b[_] === void 0 && (b[_] = N[_]);
        }
        if (y || V) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && yt(b, q), V && vt(b, q);
        }
        return bt(e, y, V, S, u, Ne.current, b);
      }
    }
    var Te = R.ReactCurrentOwner, Ue = R.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        Ue.setExtraStackFrame(o);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function We() {
      {
        if (Te.current) {
          var e = w(Te.current.type);
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
    var Be = {};
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
    function Ve(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = wt(t);
        if (Be[o])
          return;
        Be[o] = !0;
        var u = "";
        e && e._owner && e._owner !== Te.current && (u = " It was passed a child from " + w(e._owner.type) + "."), me(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, u), me(null);
      }
    }
    function He(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var o = 0; o < e.length; o++) {
            var u = e[o];
            xe(u) && Ve(u, t);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var S = U(e);
          if (typeof S == "function" && S !== e.entries)
            for (var _ = S.call(e), b; !(b = _.next()).done; )
              xe(b.value) && Ve(b.value, t);
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
        else if (typeof t == "object" && (t.$$typeof === E || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === I))
          o = t.propTypes;
        else
          return;
        if (o) {
          var u = w(t);
          lt(o, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !Le) {
          Le = !0;
          var S = w(t);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", S || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Et(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var u = t[o];
          if (u !== "children" && u !== "key") {
            me(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), me(null);
            break;
          }
        }
        e.ref !== null && (me(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    var Ye = {};
    function ze(e, t, o, u, S, _) {
      {
        var b = le(e);
        if (!b) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = Ft();
          V ? y += V : y += We();
          var N;
          e === null ? N = "null" : Ie(e) ? N = "array" : e !== void 0 && e.$$typeof === s ? (N = "<" + (w(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, y);
        }
        var q = Ct(e, t, o, S, _);
        if (q == null)
          return q;
        if (b) {
          var X = t.children;
          if (X !== void 0)
            if (u)
              if (Ie(X)) {
                for (var pe = 0; pe < X.length; pe++)
                  He(X[pe], e);
                Object.freeze && Object.freeze(X);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(X, e);
        }
        if (ve.call(t, "key")) {
          var ue = w(e), z = Object.keys(t).filter(function(kt) {
            return kt !== "key";
          }), _e = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[ue + _e]) {
            var _t = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _e, ue, _t, ue), Ye[ue + _e] = !0;
          }
        }
        return e === n ? Et(q) : St(q), q;
      }
    }
    function It(e, t, o) {
      return ze(e, t, o, !0);
    }
    function Tt(e, t, o) {
      return ze(e, t, o, !1);
    }
    var Lt = Tt, xt = It;
    Ce.Fragment = n, Ce.jsx = Lt, Ce.jsxs = xt;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? ke.exports = jt() : ke.exports = Dt();
var d = ke.exports;
const Pt = {
  qa: "https://fflselect-qa.masterffl.com",
  production: "https://fflselect.masterffl.com"
}, At = {
  qa: "https://api-qa.masterffl.com/ffl/bigcommerce/app",
  production: "https://ffl-api.masterffl.com/ffl/bigcommerce/app"
}, Mt = {
  qa: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js",
  production: "https://libs.masterffl.com/ffl-select/select-sdk/9.0.0/ffl-select-sdk.js"
}, he = {
  heading: "Select an FFL Dealer",
  subheading: "Your purchase requires the choice of an FFL Dealer where you will pickup the items. Please enter your postal code to find a Dealer near you.",
  postalCodeLabel: "Postal Code",
  buttonText: "Choose Dealer",
  termsLabel: "I understand that this item will be shipped to the FFL dealer I have selected above. I agree that it is my sole responsibility to coordinate with the FFL dealer for the fulfillment of this item.",
  selectedDealerLabel: "Selected Dealer"
}, ie = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Nt = async () => {
  const [r, s, p] = await Promise.all([Ze(), Qe(), $t()]);
  let n = !1, a = !1, i = !1;
  window.masterFFLConfig = window.masterFFLConfig || {}, window.masterFFLConfig.hasMultiShippingEnabled = p.storeConfig.checkoutSettings.hasMultiShippingEnabled;
  const k = r?.ffl_custom_attribute_name.trim().toLowerCase(), j = r?.ffl_custom_attribute_value.trim().toLowerCase(), E = r?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), F = r?.ffl_firearm_custom_attribute_value, O = s?.lineItems.physicalItems.map((h) => h.productEntityId), I = await C.getProducts(O);
  if (n = I.some((h) => h.customFields.some((f) => f.name.trim().toLowerCase() === k && f.value.trim().toLowerCase() === j)), a = I.some((h) => {
    const f = h.customFields.some(
      (D) => D.name.trim().toLowerCase() === E && D.value.trim().toLowerCase() === F?.[3]?.toLowerCase()
    ), T = h.customFields.some((D) => D.name.trim().toLowerCase() === k && D.value.trim().toLowerCase() === "no");
    return f && !T;
  }), I.forEach((h) => {
    h.customFields.some((f) => f.name.trim().toLowerCase() === k && f.value.trim().toLowerCase() === j) && ie.set(h.entityId, h), h.customFields.some(
      (f) => f.name.trim().toLowerCase() === E && f.value.trim().toLowerCase() === F?.[3]?.toLowerCase() && !h.customFields.some((T) => T.name.trim().toLowerCase() === k && T.value.trim().toLowerCase() === "no")
    ) && ie.set(h.entityId, !0);
  }), s?.lineItems.physicalItems.forEach((h) => {
    ie.get(h.productEntityId) && Oe.set(h.entityId, h);
  }), r && r?.category_mapping.length > 0) {
    const h = I.map((f) => {
      let T = null;
      const D = r.category_mapping.filter(
        (U) => f.categoryIds.some((R) => U.categoryId === R.entityId)
      );
      if (D.length > 0) {
        const U = D.reduce(
          (R, P) => parseInt(P.priority, 10) < parseInt(R.priority, 10) ? P : R
        );
        T = U.fflMapping ? U : null;
      }
      return f.customFields.some((U) => U.name.trim().toLowerCase() === k && U.value.trim().toLowerCase() === "no") ? (T = null, null) : (T && (ie.set(f.entityId, !0), Oe.set(f.entityId, f)), { ...f, fflFirearmType: T ? T.fflMapping : null });
    }).filter((f) => f !== null);
    n = n || h.some((f) => f.fflFirearmType), a = a || h.some(
      (f) => f.fflFirearmType && f.fflFirearmType.trim().toLowerCase() === F?.[3]?.toLowerCase()
    );
  }
  return i = I.length === ie.size, { isFFL: n, isSuppressor: a, isEntirelyFFL: i };
}, M = () => ({
  ...window.masterFFLConfig || {},
  env: window.masterFFLConfig?.env || "production",
  baseUrl: Pt[window.masterFFLConfig?.env || "production"],
  appUrl: At[window.masterFFLConfig?.env || "production"],
  sdkUrl: Mt[window.masterFFLConfig?.env || "production"],
  storeDomain: window.location.hostname.replace("www.", ""),
  storefrontApiToken: window.masterFFLConfig?.storefrontApiToken || window.storefrontAPIToken,
  lang: {
    heading: window.masterFFLConfig?.lang?.heading || he.heading,
    subheading: window.masterFFLConfig?.lang?.subheading || he.subheading,
    postalCodeLabel: window.masterFFLConfig?.lang?.postalCodeLabel || he.postalCodeLabel,
    buttonText: window.masterFFLConfig?.lang?.buttonText || he.buttonText,
    termsLabel: window.masterFFLConfig?.lang?.termsLabel || he.termsLabel,
    selectedDealerLabel: window.masterFFLConfig?.lang?.selectedDealerLabel || he.selectedDealerLabel
  }
}), Ze = async () => {
  const r = `mapping-${M().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[r];
  if (s)
    return s;
  const a = await (await fetch(`${M().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: M().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[r] = a, a;
}, $t = async () => {
  const r = `checkout-settings-${M().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[r];
  if (s)
    return s;
  const a = await (await fetch(`/api/storefront/checkout-settings?checkoutId=${M().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" }
  })).json();
  return window.masterFFLCache[r] = a, a;
}, qt = async (r, s) => {
  tt(r, "selectedDealer");
  let n = (await Qe())?.lineItems.physicalItems.map((F) => ({
    itemId: F.entityId,
    productId: F.productEntityId,
    quantity: F.quantity
  }));
  const a = M().hasMultiShippingEnabled, i = M().nonFFLItemStrategy;
  a && (i === "FORCE_TO_FFL" || (i === "FORCE_TO_NON_FFL" || i === "ALLOW_CHOICE") && (n = n.filter((F) => ie.get(Number(F.productId)))));
  const k = {
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
    lineItems: n
  };
  if ((await (await fetch(`${M().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: s.id.match(/\d+/g)?.join("") || "",
      cartId: r ?? "",
      storeHash: M().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return await fetch(
    `/api/storefront/checkouts/${M().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: k.address, lineItems: k.lineItems }])
    }
  ), et(r, { selectedDealer: JSON.stringify(s) }), M().hasMultiShippingEnabled && window.location.reload(), {
    dealer: s,
    shippingData: k
  };
}, Qe = async () => {
  const r = `cart-${M().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const s = window.masterFFLCache[r];
  if (s)
    return s;
  const n = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${M().storefrontApiToken}` },
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
  return window.masterFFLCache[r] = n.data.site.cart, n.data.site.cart;
}, Ut = async (r) => r ? (await (await fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${M().storefrontApiToken}`
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
})).json()).data.site.products.edges.map((a) => ({
  entityId: a.node.entityId,
  customFields: a.node.customFields.edges.map((i) => i.node),
  categoryIds: a.node.categories.edges.map((i) => i.node)
})) : [], Fe = (r) => ({
  postalCode: sessionStorage.getItem(`${r}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${r}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${r}-acceptTerms`) !== "false",
  // default to true if not set
  selectedDealer: sessionStorage.getItem(`${r}-selectedDealer`)
}), et = (r, s) => {
  const { postalCode: p, acceptTerms: n, selectedDealer: a } = s;
  sessionStorage.setItem(`${r}-postalCode`, p || sessionStorage.getItem(`${r}-postalCode`) || ""), sessionStorage.setItem(`${r}-acceptTerms`, n || sessionStorage.getItem(`${r}-acceptTerms`) || ""), sessionStorage.setItem(`${r}-selectedDealer`, a || sessionStorage.getItem(`${r}-selectedDealer`) || "");
}, tt = (r, s) => {
  sessionStorage.removeItem(`${r}-${s}`);
}, Wt = async () => {
  try {
    const r = M().checkoutId;
    if (!r) return null;
    const s = await nt();
    if (!s) {
      if (M().hasMultiShippingEnabled) {
        const n = Fe(r).selectedDealer;
        if (n && n !== "null")
          return 0;
      }
      return null;
    }
    const p = s?.consignments || s?.data?.consignments || [];
    if (p.length === 0) {
      if (M().hasMultiShippingEnabled) {
        const n = Fe(r).selectedDealer;
        if (n && n !== "null")
          return 0;
      }
      return null;
    }
    for (let n = 0; n < p.length; n++)
      if ((p[n]?.lineItems?.physicalItems || []).some((j) => {
        const E = j.productEntityId || j.productId;
        return ie.get(Number(E));
      }))
        return n;
    if (M().hasMultiShippingEnabled) {
      const n = Fe(r).selectedDealer;
      if (n && n !== "null")
        return 0;
    }
    return null;
  } catch (r) {
    console.error("Error getting FFL consignment index:", r);
    const s = M().checkoutId;
    if (s && M().hasMultiShippingEnabled) {
      const p = Fe(s).selectedDealer;
      if (p && p !== "null")
        return 0;
    }
    return null;
  }
}, Bt = async (r, s) => {
  await fetch(`/api/storefront/checkouts/${r}/consignments/${s}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
}, nt = async () => await (await fetch(
  `/api/storefront/checkouts/${M().checkoutId}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
  {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }
)).json(), C = {
  init: Nt,
  getConfig: M,
  getSession: Fe,
  setSession: et,
  removeSession: tt,
  saveDealer: qt,
  removeConsignment: Bt,
  getMappingData: Ze,
  getProducts: Ut,
  getCheckout: nt,
  getFFLConsignmentIndex: Wt,
  fflProducts: ie,
  fflLineItems: Oe,
  checkoutService: null
};
var rt = /* @__PURE__ */ ((r) => (r.Billing = "billing", r.Customer = "customer", r.Payment = "payment", r.Shipping = "shipping", r))(rt || {});
function st(r, s) {
  const p = r.tagName;
  if (p === "INPUT") {
    const n = r;
    if (n.type === "checkbox" || n.type === "radio") {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set, i = s === "true" || s === "on" || s === "1";
      a ? a.call(n, i) : n.checked = i;
    } else {
      const a = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      a ? a.call(n, s) : n.value = s;
    }
  } else if (p === "TEXTAREA") {
    const n = r, a = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    a ? a.call(n, s) : n.value = s;
  } else if (p === "SELECT") {
    const n = r, a = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    a ? a.call(n, s) : n.value = s;
  }
  r.dispatchEvent(new Event("input", { bubbles: !0 })), r.dispatchEvent(new Event("change", { bubbles: !0 }));
}
const ot = Ot({}), Re = () => {
  const r = Xe(ot);
  if (!r)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return r;
}, Kt = ({ checkoutContext: r, getCheckoutStepStatuses: s }) => {
  const { checkoutService: p, checkoutState: n } = Xe(r), a = ge(() => n.data.getConfig()?.storeProfile, [n]), i = ge(() => n.data.getCheckout()?.id, [n]), k = ge(() => a?.storeHash, [a]), [j, E] = se(!1), [F, O] = se({
    postalCode: "",
    acceptTerms: !0
  }), [I, h] = se(null), [f, T] = se(null), [D, U] = se(!1), [R, P] = se(!1), [ce, H] = se(!1), [ee, te] = se(null);
  K(() => {
    if (!i) return;
    const { postalCode: m, acceptTerms: x, selectedDealer: l } = C.getSession(i);
    m && O((A) => ({ ...A, postalCode: m })), x && O((A) => ({ ...A, acceptTerms: x })), l && l !== "null" && T(JSON.parse(l));
  }, [i]);
  const G = ge(
    () => ({
      ...C.getConfig(),
      storeHash: k,
      checkoutId: n.data.getCheckout()?.id
    }),
    [k, n]
  ), Z = de(
    async (m) => {
      T(null), h(null);
      try {
        await C.saveDealer(i, m), T(m);
      } catch {
        h("An error occurred while saving the dealer. Please try again.");
      }
    },
    [i, p]
  ), oe = ge(() => s(n), [n]);
  K(() => {
    if (C.fflLineItems.size === 0)
      return;
    const m = oe.find((l) => l.isActive), x = R && f && !f?.isSotDealer;
    if (x && i && (C.removeSession(i, "selectedDealer"), T(null)), m?.type !== rt.Shipping && (!f || !F.acceptTerms || x)) {
      const l = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      l && l.click();
    }
  }, [oe, f, F.acceptTerms, R, i]);
  const le = de(() => {
    if (!i) return;
    sessionStorage.getItem(`${i}-selectedDealer`) && (C.removeSession(i, "postalCode"), C.removeSession(i, "acceptTerms"), C.removeSession(i, "selectedDealer"), document.querySelectorAll('[name^="shippingAddress."]').forEach((l) => {
      (l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement || l instanceof HTMLSelectElement) && st(l, "");
    }));
  }, [i]), ae = de(async (m) => {
    try {
      if (!m || !i) return;
      const x = (v) => `${v.shippingAddress?.address1 || ""}::${v.shippingAddress?.postalCode || ""}`, l = /* @__PURE__ */ new Map();
      for (const v of m.consignments || []) {
        if (!v.shippingAddress) continue;
        const g = x(v);
        l.has(g) || l.set(g, []), l.get(g).push(v);
      }
      const A = Array.from(l.values()).filter((v) => v.length > 1).flat(), W = m.consignments || [];
      if (W.length === 0)
        return;
      for (const v of W) {
        const g = v.lineItemIds || [];
        if (g.length === 0)
          continue;
        const L = g.some((B) => {
          const Y = m.cart.lineItems.physicalItems.find((ne) => ne.id === B);
          return C.fflProducts.get(Y.productId);
        }), $ = g.some((B) => {
          const Y = m.cart.lineItems.physicalItems.find((ne) => ne.id === B);
          return !C.fflProducts.get(Y.productId);
        }), J = JSON.parse(C.getSession(i)?.selectedDealer || "{}"), Q = v.shippingAddress.address1 === J?.contact?.address?.street1 && v.shippingAddress.postalCode === J?.contact?.address?.zip;
        if (L && Q && A.length > 0) {
          for (const B of m.consignments.filter((Y) => Y.id !== v.id))
            await C.removeConsignment(i, B.id);
          return window.location.reload();
        }
        L && !Q && (await C.removeConsignment(i, v.id), await C.saveDealer(i, J)), Q && C.getConfig().nonFFLItemStrategy === "FORCE_TO_NON_FFL" && $ && (await C.removeConsignment(i, v.id), await C.saveDealer(i, J));
      }
    } catch (x) {
      console.error(x);
    }
  }, [i]), c = de(async () => {
    if (!G.storeHash || !n.data.getCart()) return;
    const m = await C.getCheckout();
    te(m);
    const { isFFL: x, isSuppressor: l, isEntirelyFFL: A } = await C.init();
    U(x), P(l), H(A);
    const { selectedDealer: W } = C.getSession(i || "");
    W && (m?.consignments?.length === 0 ? await C.saveDealer(i || "", JSON.parse(W)) : await ae(m)), !x && !l && le();
  }, [G.storeHash, n.data.getCart(), le, i, ae]);
  K(() => {
    c();
  }, [c]);
  const w = ge(
    () => ({
      checkoutService: p,
      checkoutState: n,
      config: G,
      isModalOpen: j,
      setIsModalOpen: E,
      values: F,
      setValues: O,
      handleSaveDealer: Z,
      selectedDealer: f,
      setSelectedDealer: T,
      error: I,
      isFFL: D,
      isSuppressor: R,
      isEntirelyFFL: ce,
      checkout: ee,
      setCheckout: te,
      fixInvalidConsignments: ae
    }),
    [
      p,
      n,
      G,
      j,
      E,
      F,
      O,
      Z,
      f,
      T,
      I,
      D,
      R,
      ce,
      ee,
      te,
      ae
    ]
  );
  return /* @__PURE__ */ d.jsx(ot.Provider, { value: w, children: (D || R) && /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(Vt, {}),
    /* @__PURE__ */ d.jsx(Ht, {}),
    /* @__PURE__ */ d.jsx(Yt, {})
  ] }) });
}, Vt = () => {
  const { setIsModalOpen: r, values: s, setValues: p, selectedDealer: n, config: a, error: i, isFFL: k, isSuppressor: j, isEntirelyFFL: E, checkout: F, fixInvalidConsignments: O } = Re(), [I, h] = se({ postalCode: "", acceptTerms: "" }), f = re(null), T = re(null), D = re(null), U = re(null), R = re(null), P = re(!1), ce = re(!1), H = re(!1), ee = re(!1);
  K(() => {
    P.current = s.acceptTerms;
  }, [s.acceptTerms]), K(() => {
    ce.current = !!n;
  }, [n]);
  const te = de(() => {
    const c = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]');
    c && c && c.checked && c.click();
  }, []);
  K(() => {
    const c = () => te();
    return D.current = new MutationObserver(c), D.current.observe(document.body, { childList: !0, subtree: !0 }), te(), () => {
      D.current && (D.current.disconnect(), D.current = null);
    };
  }, [te]);
  const G = de(() => {
    const c = document.getElementById("checkout-shipping-continue");
    if (!c || (T.current = c, C.fflLineItems.size === 0))
      return;
    let w = !P.current || !ce.current;
    if (a.hasMultiShippingEnabled) {
      const m = document.querySelector(".checkout-step--shipping .alertBox--info"), x = document.querySelectorAll(".consignment-container").length, l = document.querySelectorAll('.consignment-container input[type="radio"]:checked').length === x;
      w = w || !!m || !l;
    }
    c.disabled !== w && (c.disabled = w);
  }, [a.hasMultiShippingEnabled]);
  K(() => {
    const c = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!c) return;
    const w = () => G();
    return f.current = new MutationObserver(w), f.current.observe(c, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), G(), () => {
      f.current && (f.current.disconnect(), f.current = null);
    };
  }, [G]), K(() => {
    G();
  }, [G, s.acceptTerms, n]);
  const Z = de(async () => {
    if (!H.current) {
      H.current = !0;
      try {
        const c = document.querySelectorAll(".consignment-container");
        if (c.length === 0) {
          H.current = !1;
          return;
        }
        const w = a.checkoutId;
        if (!w) {
          H.current = !1;
          return;
        }
        let m = F;
        if (!m) {
          const g = await fetch(
            `/api/storefront/checkouts/${w}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" }
            }
          );
          if (!g.ok) {
            H.current = !1;
            return;
          }
          m = await g.json();
        }
        const x = m?.consignments || m?.data?.consignments || [];
        let l = null, A = null;
        if (n) {
          const g = n?.contact?.address?.zip, L = n?.contact?.address?.street1, $ = n?.contact?.address?.city, J = n?.contact?.address?.state;
          for (const Q of x) {
            const B = Q?.address;
            if (B) {
              const Y = B.postalCode === g, ne = B.address1 === L, fe = B.city === $, ye = B.stateOrProvinceCode === J;
              if (Y && ne || Y && fe && ye) {
                l = Q, A = Q.id;
                break;
              }
            }
          }
        }
        for (const g of x) {
          const L = g?.lineItemIds || [];
          if (L.length === 0) continue;
          if (L.some((J) => C.fflLineItems.has(J))) {
            l = g, A = g.id;
            break;
          }
        }
        if (!l) {
          H.current = !1;
          return;
        }
        c.forEach((g) => {
          g.classList.remove("consignment-container--ffl");
        });
        const W = (g) => {
          const L = g.querySelector("#addressToggle");
          if (L) {
            const $ = L.parentElement;
            $ && ($.style.display = "none", g.querySelector(".consignment-header h3").textContent = "FFL Destination");
          }
        };
        if (A)
          for (let g = 0; g < c.length; g++) {
            const L = c[g], $ = L.getAttribute("data-consignment-id") || L.getAttribute("data-id") || L.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
            if ($ && $ === String(A)) {
              L.classList.add("consignment-container--ffl"), L.setAttribute("data-index", String(g)), H.current = !1, W(L);
              return;
            }
          }
        const v = l.address;
        if (v)
          for (let g = 0; g < c.length; g++) {
            const L = c[g], $ = L.textContent || "", J = v.postalCode && $.includes(v.postalCode), Q = v.address1 && $.includes(v.address1), B = v.city && $.includes(v.city), Y = v.stateOrProvinceCode && $.includes(v.stateOrProvinceCode);
            if (J && (Q || B && Y)) {
              L.classList.add("consignment-container--ffl"), L.setAttribute("data-index", String(g)), H.current = !1, W(L);
              return;
            }
          }
      } finally {
        H.current = !1;
      }
    }
  }, [n, F]);
  K(() => {
    if (!k && !j) return;
    const c = (l) => {
      l.target.id === "checkout-save-address" && setTimeout(() => {
        const W = document.querySelector('[data-test="allocate-items-button"]');
        W && (W.click(), setTimeout(() => {
          const v = document.querySelector('[data-test="allocate-all-items-button"]');
          v && v.click();
        }, 200));
      }, 700);
    };
    ee.current = !1;
    let w = null;
    if (a.hasMultiShippingEnabled) {
      if (a.nonFFLItemStrategy !== "FORCE_TO_FFL")
        setTimeout(() => {
          const l = document.querySelector('[data-test="shipping-mode-toggle"]');
          l && l.innerText.trim().toLowerCase() === "ship to a single address" && (l.style.display = "none"), E && l && l.innerText.trim().toLowerCase() === "ship to multiple addresses" && (l.style.display = "none");
          const A = document.querySelector('[data-test="shipping-mode-toggle"]');
          A && A.addEventListener("click", () => {
            Z();
          });
        }, 0);
      else {
        const l = document.querySelector('[data-test="shipping-mode-toggle"]');
        l && l.innerText.trim().toLowerCase() === "ship to multiple addresses" && (l.style.display = "none");
      }
      w = setTimeout(async () => {
        if (a.hasMultiShippingEnabled && a.nonFFLItemStrategy === "FORCE_TO_NON_FFL") {
          const l = document.querySelectorAll(".consignment-container");
          for (const v of l)
            if (!v.querySelector('input[type="radio"]:checked')) {
              const L = v.querySelector('input[type="radio"]');
              L && (L.click(), await new Promise(($) => setTimeout($, 1500)));
            }
          const A = document.querySelector(".alertBox-column.alertBox-message"), W = document.querySelectorAll(".consignment-container").length === 1;
          if (A && W && (A.textContent || "").includes("left to allocate")) {
            const g = document.querySelector("button.add-consignment-button");
            g && (g.click(), document.addEventListener("click", c), ee.current = !0);
          }
        }
      }, 1e3);
    }
    const m = setTimeout(() => {
      Z();
    }, 100), x = () => {
      H.current || (R.current && clearTimeout(R.current), R.current = setTimeout(() => {
        Z(), R.current = null;
      }, 300));
    };
    return U.current = new MutationObserver(x), U.current.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      clearTimeout(m), w && clearTimeout(w), R.current && (clearTimeout(R.current), R.current = null), U.current && (U.current.disconnect(), U.current = null), ee.current && (document.removeEventListener("click", c), ee.current = !1);
    };
  }, [k, j, E, a.hasMultiShippingEnabled, a.nonFFLItemStrategy, Z]), K(() => {
    if (!n) return;
    document.querySelectorAll(".consignment-container--ffl").forEach((m) => {
      m.classList.remove("consignment-container--ffl");
    });
    const w = setTimeout(() => {
      Z();
    }, 500);
    return () => clearTimeout(w);
  }, [n, Z]);
  const oe = (c) => {
    h({ postalCode: "", acceptTerms: "" }), c.target.name === "postalCode" ? (p({ ...s, postalCode: c.target.value }), sessionStorage.setItem(`${a.checkoutId}-postalCode`, c.target.value)) : (p({ ...s, acceptTerms: c.target.checked }), sessionStorage.setItem(`${a.checkoutId}-acceptTerms`, c.target.checked.toString()));
  }, le = (c) => {
    if (c.preventDefault(), h({ postalCode: "", acceptTerms: "" }), !s.postalCode) {
      h({ ...I, postalCode: `${a.lang.postalCodeLabel} is required` });
      return;
    }
    r(!0);
  }, ae = (c) => {
    c.key === "Enter" && le(c);
  };
  return K(() => {
    const c = async (w) => {
      if (w.target.tagName === "A" && w.target.getAttribute("data-test") === "shipping-mode-toggle") {
        const m = JSON.parse(C.getSession(a.checkoutId || "").selectedDealer || "{}");
        m && await C.saveDealer(a.checkoutId || "", m);
      }
      if (w.target.id === "checkout-shipping-continue") {
        const m = await C.getCheckout();
        await O(m);
      }
    };
    return document.addEventListener("click", c), () => {
      document.removeEventListener("click", c);
    };
  }, [a.checkoutId, O]), /* @__PURE__ */ d.jsxs(
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
        /* @__PURE__ */ d.jsx(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "15px"
            },
            children: /* @__PURE__ */ d.jsxs("div", { className: `form-field ${I.postalCode ? "form-field--error" : ""}`, style: { flex: 1, marginBottom: 0 }, children: [
              /* @__PURE__ */ d.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: a.lang.heading }),
              /* @__PURE__ */ d.jsx("p", { style: { fontWeight: 600 }, children: a.lang.subheading }),
              /* @__PURE__ */ d.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                a.lang.postalCodeLabel,
                " ",
                /* @__PURE__ */ d.jsx("span", { style: { color: "red" }, children: "*" })
              ] }),
              /* @__PURE__ */ d.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ d.jsx(
                  "input",
                  {
                    className: "form-input optimizedCheckout-form-input",
                    id: "postalCode",
                    name: "postalCode",
                    onChange: oe,
                    onKeyDown: ae,
                    placeholder: "",
                    type: "text",
                    value: s.postalCode
                  }
                ),
                /* @__PURE__ */ d.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ d.jsx("button", { onClick: le, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: a.lang.buttonText }) })
              ] }),
              I.postalCode && /* @__PURE__ */ d.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ d.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ d.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "postalCode", role: "alert", children: I.postalCode }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ d.jsxs("div", { className: `form-field-agreement form-field ${I.acceptTerms ? "form-field--error" : ""}`, style: { marginTop: 15 }, children: [
          /* @__PURE__ */ d.jsx(
            "input",
            {
              checked: s.acceptTerms,
              className: "form-checkbox optimizedCheckout-form-checkbox",
              id: "accept-agreement",
              name: "acceptTerms",
              onChange: oe,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ d.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: a.lang.termsLabel }),
          I.acceptTerms && /* @__PURE__ */ d.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ d.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ d.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: I.acceptTerms }) }) })
        ] }),
        i && /* @__PURE__ */ d.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ d.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ d.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ d.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: i }) }) }) }),
        n && /* @__PURE__ */ d.jsx("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ d.jsxs("div", { className: "form-body", children: [
          /* @__PURE__ */ d.jsx("strong", { children: a.lang.selectedDealerLabel }),
          /* @__PURE__ */ d.jsx("div", { className: "text-pretty", children: n?.name }),
          /* @__PURE__ */ d.jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ d.jsxs("span", { className: "block", children: [
              n?.contact.address.street1,
              " "
            ] }),
            /* @__PURE__ */ d.jsxs("span", { children: [
              n?.contact.address.city,
              ", ",
              /* @__PURE__ */ d.jsx("span", { children: n?.contact.address.state })
            ] }),
            /* @__PURE__ */ d.jsxs("span", { children: [
              " ",
              n?.contact.address.zip
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ d.jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
            #checkoutShippingAddress, #sameAsBilling, #sameAsBilling + label { display: none; }
            .consignment-container--ffl [data-test="edit-shipping-address"] { display: none; }
            .consignment-container--ffl [data-test="delete-consignment-button"] { display: none; }
            .new-consignment-line-item-header, .consignment-line-item-header, .guest-consignment-line-item-header { align-items: center !important; }
            .new-consignment-line-item-header h3, .consignment-line-item-header h3, .guest-consignment-line-item-header h3{ margin-bottom: 0px !important; }
            [data-test="enter-shipping-address"], [data-test="allocate-items-button"] { font-weight: bold !important; border: 1px solid; padding: 6px 10px; }
            ${a.hasMultiShippingEnabled && `
              ${// if the user can choose which consignment to put the items on, hide the remove buttons for the ffl line items
              // they cannot move these items to a non-ffl address
              a.nonFFLItemStrategy === "ALLOW_CHOICE" && [...C.fflLineItems].length > 0 ? [...C.fflLineItems].map((c) => `[data-test="remove-${c[0]}-button"] { display: none; }`).join(`
`) : ""}
              ${// hide the reallocate items button if the user cannot choose which consignment to put the items on
              a.nonFFLItemStrategy !== "ALLOW_CHOICE" ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }' : ""}
              ${// hide the enter shipping address button if the user has not selected a dealer
              !C.getSession(a.checkoutId).selectedDealer && '.consignment-container [data-test="enter-shipping-address"] { display: none; }'}`}

            `
            }
          }
        )
      ]
    }
  );
}, Ht = () => {
  const { config: r } = Re();
  return K(() => {
    if (document.querySelector(`script[src^="${r.sdkUrl}"]`))
      return;
    const p = document.createElement("script");
    p.src = r.sdkUrl, document.body.appendChild(p);
  }, [r.sdkUrl]), null;
}, Yt = () => {
  const { isModalOpen: r, setIsModalOpen: s, config: p, values: n, setSelectedDealer: a, isSuppressor: i } = Re(), k = "ffSelectFrame", j = async (F) => {
    if (!F) return;
    const O = await C.getCheckout();
    for (const T of O.consignments)
      T.id && await C.removeConsignment(p.checkoutId || "", T.id);
    const { shippingData: I, dealer: h } = await C.saveDealer(p.checkoutId || "", F), f = I.address;
    Object.keys(f).forEach((T) => {
      const D = document.querySelector(`[name="shippingAddress.${T}"]`);
      if (D) {
        const U = String(f[T] ?? "");
        st(D, U);
      }
    }), a(h), s(!1);
  };
  if (K(() => {
    r && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        n.postalCode,
        k,
        { url: p.baseUrl },
        {
          storeDomain: p.storeDomain,
          envMode: p.env,
          filters: i ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: j
        }
      ).show();
    }, 200);
  }, [
    r,
    n.postalCode,
    p.baseUrl,
    p.storeDomain,
    p.env,
    j,
    i
  ]), !r)
    return null;
  const E = /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: ".ffl-modal-body { height: 100%; overflow: auto !important; padding: 0 !important; }"
        }
      }
    ),
    /* @__PURE__ */ d.jsx(
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
        children: /* @__PURE__ */ d.jsx(
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
            onClick: (F) => F.stopPropagation(),
            children: /* @__PURE__ */ d.jsx("div", { id: k, className: "ffl-modal-body", style: { height: "100%", flex: 1 } })
          }
        )
      }
    )
  ] });
  return Rt(E, document.body);
};
export {
  Kt as MasterFFL,
  Re as useMasterFFL
};
//# sourceMappingURL=bigc-masterffl-sdk.checkout.es.js.map
