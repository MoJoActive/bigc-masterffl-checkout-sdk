import Ke, { createContext as kt, useContext as Ge, useMemo as fe, useState as ae, useEffect as B, useCallback as me, useRef as re } from "react";
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
function Rt() {
  if (ze) return be;
  ze = 1;
  var r = Ke, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(L, p, y) {
    var v, g = {}, d = null, T = null;
    y !== void 0 && (d = "" + y), p.key !== void 0 && (d = "" + p.key), p.ref !== void 0 && (T = p.ref);
    for (v in p) n.call(p, v) && !f.hasOwnProperty(v) && (g[v] = p[v]);
    if (L && L.defaultProps) for (v in p = L.defaultProps, p) g[v] === void 0 && (g[v] = p[v]);
    return { $$typeof: a, type: L, key: d, ref: T, props: g, _owner: s.current };
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
function Ot() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ke, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), L = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator, D = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = I && e[I] || e[D];
      return typeof t == "function" ? t : null;
    }
    var S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
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
        var F = o.map(function(h) {
          return String(h);
        });
        F.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, F);
      }
    }
    var J = !1, ne = !1, se = !1, ie = !1, l = !1, w;
    w = Symbol.for("react.module.reference");
    function C(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === f || l || e === s || e === y || e === v || ie || e === T || J || ne || se || typeof e == "object" && e !== null && (e.$$typeof === d || e.$$typeof === g || e.$$typeof === E || e.$$typeof === L || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === w || e.getModuleId !== void 0));
    }
    function O(e, t, o) {
      var i = e.displayName;
      if (i)
        return i;
      var b = t.displayName || t.name || "";
      return b !== "" ? o + "(" + b + ")" : o;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case u:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case y:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case L:
            var t = e;
            return K(t) + ".Consumer";
          case E:
            var o = e;
            return K(o._context) + ".Provider";
          case p:
            return O(e, e.render, "ForwardRef");
          case g:
            var i = e.displayName || null;
            return i !== null ? i : $(e.type) || "Memo";
          case d: {
            var b = e, F = b._payload, h = b._init;
            try {
              return $(h(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, P = 0, ee, x, N, q, te, G, U;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function he() {
      {
        if (P === 0) {
          ee = console.log, x = console.info, N = console.warn, q = console.error, te = console.group, G = console.groupCollapsed, U = console.groupEnd;
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
            log: Y({}, e, {
              value: ee
            }),
            info: Y({}, e, {
              value: x
            }),
            warn: Y({}, e, {
              value: N
            }),
            error: Y({}, e, {
              value: q
            }),
            group: Y({}, e, {
              value: te
            }),
            groupCollapsed: Y({}, e, {
              value: G
            }),
            groupEnd: Y({}, e, {
              value: U
            })
          });
        }
        P < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    function Re(e, t) {
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
      var F;
      F = ce.current, ce.current = null, he();
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
            } catch (V) {
              i = V;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (V) {
              i = V;
            }
            e.call(h.prototype);
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
`), k = m.length - 1, R = M.length - 1; k >= 1 && R >= 0 && m[k] !== M[R]; )
            R--;
          for (; k >= 1 && R >= 0; k--, R--)
            if (m[k] !== M[R]) {
              if (k !== 1 || R !== 1)
                do
                  if (k--, R--, R < 0 || m[k] !== M[R]) {
                    var H = `
` + m[k].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, H), H;
                  }
                while (k >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        ye = !1, ce.current = F, we(), Error.prepareStackTrace = b;
      }
      var de = e ? e.displayName || e.name : "", oe = de ? le(de) : "";
      return typeof e == "function" && Z.set(e, oe), oe;
    }
    function at(e, t, o) {
      return Re(e, !1);
    }
    function it(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Se(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, it(e));
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
          case g:
            return Se(e.type, t, o);
          case d: {
            var i = e, b = i._payload, F = i._init;
            try {
              return Se(F(b), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, Oe = {}, De = S.ReactDebugCurrentFrame;
    function Ee(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        De.setExtraStackFrame(o);
      } else
        De.setExtraStackFrame(null);
    }
    function ct(e, t, o, i, b) {
      {
        var F = Function.call.bind(ve);
        for (var h in e)
          if (F(e, h)) {
            var m = void 0;
            try {
              if (typeof e[h] != "function") {
                var M = Error((i || "React class") + ": " + o + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              m = e[h](t, h, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (Ee(b), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, h, typeof m), Ee(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Ee(b), _("Failed %s type: %s", o, m.message), Ee(null));
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(e)), Pe(e);
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
    function gt(e, t) {
      typeof e.ref == "string" && Ae.current;
    }
    function ht(e, t) {
      {
        var o = function() {
          $e || ($e = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
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
          Ne || (Ne = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var vt = function(e, t, o, i, b, F, h) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: h,
        // Record the component responsible for creating this element.
        _owner: F
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
        var F, h = {}, m = null, M = null;
        o !== void 0 && (Me(o), m = "" + o), mt(t) && (Me(t.key), m = "" + t.key), pt(t) && (M = t.ref, gt(t, b));
        for (F in t)
          ve.call(t, F) && !ft.hasOwnProperty(F) && (h[F] = t[F]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (F in k)
            h[F] === void 0 && (h[F] = k[F]);
        }
        if (m || M) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ht(h, R), M && yt(h, R);
        }
        return vt(e, m, M, b, i, Ae.current, h);
      }
    }
    var Ie = S.ReactCurrentOwner, qe = S.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var t = e._owner, o = Se(e.type, e._source, t ? t.type : null);
        qe.setExtraStackFrame(o);
      } else
        qe.setExtraStackFrame(null);
    }
    var Le;
    Le = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ue() {
      {
        if (Ie.current) {
          var e = $(Ie.current.type);
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
        e && e._owner && e._owner !== Ie.current && (i = " It was passed a child from " + $(e._owner.type) + "."), ue(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), ue(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            _e(i) && We(i, t);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = z(e);
          if (typeof b == "function" && b !== e.entries)
            for (var F = b.call(e), h; !(h = F.next()).done; )
              _e(h.value) && We(h.value, t);
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
        t.$$typeof === g))
          o = t.propTypes;
        else
          return;
        if (o) {
          var i = $(t);
          ct(o, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !Le) {
          Le = !0;
          var b = $(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function St(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var i = t[o];
          if (i !== "children" && i !== "key") {
            ue(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), ue(null);
            break;
          }
        }
        e.ref !== null && (ue(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), ue(null));
      }
    }
    var He = {};
    function Be(e, t, o, i, b, F) {
      {
        var h = C(e);
        if (!h) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = Ct();
          M ? m += M : m += Ue();
          var k;
          e === null ? k = "null" : Te(e) ? k = "array" : e !== void 0 && e.$$typeof === a ? (k = "<" + ($(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var R = bt(e, t, o, b, F);
        if (R == null)
          return R;
        if (h) {
          var H = t.children;
          if (H !== void 0)
            if (i)
              if (Te(H)) {
                for (var de = 0; de < H.length; de++)
                  Ye(H[de], e);
                Object.freeze && Object.freeze(H);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(H, e);
        }
        if (ve.call(t, "key")) {
          var oe = $(e), V = Object.keys(t).filter(function(xt) {
            return xt !== "key";
          }), xe = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[oe + xe]) {
            var _t = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, oe, _t, oe), He[oe + xe] = !0;
          }
        }
        return e === n ? St(R) : wt(R), R;
      }
    }
    function Et(e, t, o) {
      return Be(e, t, o, !0);
    }
    function Tt(e, t, o) {
      return Be(e, t, o, !1);
    }
    var It = Tt, Lt = Et;
    Ce.Fragment = n, Ce.jsx = It, Ce.jsxs = Lt;
  }()), Ce;
}
process.env.NODE_ENV === "production" ? ke.exports = Rt() : ke.exports = Ot();
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
}, ge = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), At = async () => {
  const [r, a, u] = await Promise.all([Ze(), Qe(), $t()]);
  let n = !1, s = !1;
  console.log(u), window.masterFFLConfig = window.masterFFLConfig || {}, window.masterFFLConfig.hasMultiShippingEnabled = u.storeConfig.checkoutSettings.hasMultiShippingEnabled;
  const f = r?.ffl_custom_attribute_name.trim().toLowerCase(), E = r?.ffl_custom_attribute_value.trim().toLowerCase(), L = r?.ffl_firearm_custom_attribute_name.trim().toLowerCase(), p = r?.ffl_firearm_custom_attribute_value, y = a?.lineItems.physicalItems.map((g) => g.productEntityId), v = await A.getProducts(y);
  if (n = v.some((g) => g.customFields.some((d) => d.name.trim().toLowerCase() === f && d.value.trim().toLowerCase() === E)), s = v.some((g) => g.customFields.some(
    (d) => d.name.trim().toLowerCase() === L && d.value.trim().toLowerCase() === p?.[3]?.toLowerCase()
  )), v.forEach((g) => {
    g.customFields.some((d) => d.name.trim().toLowerCase() === f && d.value.trim().toLowerCase() === E) && ge.set(g.entityId, g), g.customFields.some(
      (d) => d.name.trim().toLowerCase() === L && d.value.trim().toLowerCase() === p?.[3]?.toLowerCase()
    ) && ge.set(g.entityId, !0);
  }), a?.lineItems.physicalItems.forEach((g) => {
    ge.get(g.productEntityId) && Xe.set(g.entityId, g);
  }), n || s)
    return { isFFL: n, isSuppressor: s };
  if (r && r?.category_mapping.length > 0) {
    const g = v.map((d) => {
      let T = null;
      const I = r.category_mapping.filter(
        (D) => d.categoryIds.some((z) => D.categoryId === z.entityId)
      );
      if (I.length > 0) {
        const D = I.reduce(
          (z, S) => parseInt(S.priority, 10) < parseInt(z.priority, 10) ? S : z
        );
        T = D.fflMapping ? D : null;
      }
      return { ...d, fflFirearmType: T ? T.fflMapping : null };
    });
    n = g.some((d) => d.fflFirearmType), s = g.some(
      (d) => d.fflFirearmType && d.fflFirearmType.trim().toLowerCase() === p?.[3]
    );
  }
  return { isFFL: n, isSuppressor: s };
}, j = () => ({
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
  const r = `mapping-${j().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const s = await (await fetch(`${j().appUrl}/api/internal/mappingdata`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      storeHash: j().storeHash ?? ""
    })
  })).json();
  return window.masterFFLCache[r] = s, s;
}, $t = async () => {
  const r = `checkout-settings-${j().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const s = await (await fetch(`/api/storefront/checkout-settings?checkoutId=${j().checkoutId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", "x-api-internal": "This API endpoint is for internal use only and may change in the future" }
  })).json();
  return window.masterFFLCache[r] = s, s;
}, Nt = async (r, a) => {
  tt(r, "selectedDealer");
  let n = (await Qe())?.lineItems.physicalItems.map((y) => ({
    itemId: y.entityId,
    productId: y.productEntityId,
    quantity: y.quantity
  }));
  const s = j().hasMultiShippingEnabled, f = j().nonFFLItemStrategy;
  s && (f === "FORCE_TO_FFL" || (f === "FORCE_TO_NON_FFL" || f === "ALLOW_CHOICE") && (n = n.filter((y) => ge.get(Number(y.productId)))));
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
    lineItems: n
  };
  if ((await (await fetch(`${j().appUrl}/api/internal/dealer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: a.id.match(/\d+/g)?.join("") || "",
      cartId: r ?? "",
      storeHash: j().storeHash ?? ""
    })
  })).json()).status === !1)
    throw new Error("An error occurred while saving the dealer. Please try again.");
  return await fetch(
    `/api/storefront/checkouts/${j().checkoutId}/consignments?include=consignments.availableShippingOptions%2Ccart.lineItems.physicalItems.options%2Ccart.lineItems.digitalItems.options%2Ccustomer%2Cpromotions.banners`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([{ address: E.address, lineItems: E.lineItems }])
    }
  ), j().hasMultiShippingEnabled && window.location.reload(), et(r, { selectedDealer: JSON.stringify(a) }), {
    dealer: a,
    shippingData: E
  };
}, Qe = async () => {
  const r = `cart-${j().storefrontApiToken}`;
  window.masterFFLCache = window.masterFFLCache || {};
  const a = window.masterFFLCache[r];
  if (a)
    return a;
  const n = await (await fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${j().storefrontApiToken}` },
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
}, qt = async (r) => r ? (await (await fetch("/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${j().storefrontApiToken}`
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
})).json()).data.site.products.edges.map((s) => ({
  entityId: s.node.entityId,
  customFields: s.node.customFields.edges.map((f) => f.node),
  categoryIds: s.node.categories.edges.map((f) => f.node)
})) : [], Fe = (r) => ({
  postalCode: sessionStorage.getItem(`${r}-postalCode`),
  acceptTerms: sessionStorage.getItem(`${r}-acceptTerms`) === "true" ? !0 : sessionStorage.getItem(`${r}-acceptTerms`) === "false" ? !1 : void 0,
  selectedDealer: sessionStorage.getItem(`${r}-selectedDealer`)
}), et = (r, a) => {
  const { postalCode: u, acceptTerms: n, selectedDealer: s } = a;
  sessionStorage.setItem(`${r}-postalCode`, u || sessionStorage.getItem(`${r}-postalCode`) || ""), sessionStorage.setItem(`${r}-acceptTerms`, n || sessionStorage.getItem(`${r}-acceptTerms`) || ""), sessionStorage.setItem(`${r}-selectedDealer`, s || sessionStorage.getItem(`${r}-selectedDealer`) || "");
}, tt = (r, a) => {
  sessionStorage.removeItem(`${r}-${a}`);
}, Ut = async () => {
  try {
    const r = j().checkoutId;
    if (!r) return null;
    const a = await fetch(`/api/storefront/checkouts/${r}?include=consignments.lineItems.physicalItems%2Cconsignments.address`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!a.ok) {
      if (j().hasMultiShippingEnabled) {
        const s = Fe(r).selectedDealer;
        if (s && s !== "null")
          return 0;
      }
      return null;
    }
    const u = await a.json(), n = u?.consignments || u?.data?.consignments || [];
    if (n.length === 0) {
      if (j().hasMultiShippingEnabled) {
        const s = Fe(r).selectedDealer;
        if (s && s !== "null")
          return 0;
      }
      return null;
    }
    for (let s = 0; s < n.length; s++)
      if ((n[s]?.lineItems?.physicalItems || []).some((p) => {
        const y = p.productEntityId || p.productId;
        return ge.get(Number(y));
      }))
        return s;
    if (j().hasMultiShippingEnabled) {
      const s = Fe(r).selectedDealer;
      if (s && s !== "null")
        return 0;
    }
    return null;
  } catch (r) {
    console.error("Error getting FFL consignment index:", r);
    const a = j().checkoutId;
    if (a && j().hasMultiShippingEnabled) {
      const u = Fe(a).selectedDealer;
      if (u && u !== "null")
        return 0;
    }
    return null;
  }
}, A = {
  init: At,
  getConfig: j,
  getSession: Fe,
  setSession: et,
  removeSession: tt,
  saveDealer: Nt,
  getMappingData: Ze,
  getProducts: qt,
  getFFLConsignmentIndex: Ut,
  fflProducts: ge,
  fflLineItems: Xe,
  checkoutService: null
};
var rt = /* @__PURE__ */ ((r) => (r.Billing = "billing", r.Customer = "customer", r.Payment = "payment", r.Shipping = "shipping", r))(rt || {});
function nt(r, a) {
  const u = r.tagName;
  if (u === "INPUT") {
    const n = r;
    if (n.type === "checkbox" || n.type === "radio") {
      const s = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "checked")?.set, f = a === "true" || a === "on" || a === "1";
      s ? s.call(n, f) : n.checked = f;
    } else {
      const s = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
      s ? s.call(n, a) : n.value = a;
    }
  } else if (u === "TEXTAREA") {
    const n = r, s = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value")?.set;
    s ? s.call(n, a) : n.value = a;
  } else if (u === "SELECT") {
    const n = r, s = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, "value")?.set;
    s ? s.call(n, a) : n.value = a;
  }
  r.dispatchEvent(new Event("input", { bubbles: !0 })), r.dispatchEvent(new Event("change", { bubbles: !0 }));
}
const st = kt({}), je = () => {
  const r = Ge(st);
  if (!r)
    throw new Error("useMasterFFL must be used within a MasterFFLProvider");
  return r;
}, zt = ({ checkoutContext: r, getCheckoutStepStatuses: a }) => {
  const { checkoutService: u, checkoutState: n } = Ge(r), s = fe(() => n.data.getConfig()?.storeProfile, [n]), f = fe(() => n.data.getCheckout()?.id, [n]), E = fe(() => s?.storeHash, [s]), [L, p] = ae(!1), [y, v] = ae({
    postalCode: "",
    acceptTerms: !1
  }), [g, d] = ae(null), [T, I] = ae(null), [D, z] = ae(!1), [S, _] = ae(!1);
  B(() => {
    if (!f) return;
    const { postalCode: w, acceptTerms: C, selectedDealer: O } = A.getSession(f);
    w && v((K) => ({ ...K, postalCode: w })), C && v((K) => ({ ...K, acceptTerms: C })), O && O !== "null" && I(JSON.parse(O));
  }, [f]);
  const W = fe(
    () => ({
      ...A.getConfig(),
      storeHash: E,
      checkoutId: n.data.getCheckout()?.id
    }),
    [E, n]
  ), J = me(
    async (w) => {
      I(null), d(null);
      try {
        await A.saveDealer(f, w), I(w);
      } catch {
        d("An error occurred while saving the dealer. Please try again.");
      }
    },
    [f, u]
  ), ne = fe(() => a(n), [n]);
  B(() => {
    if (ne.find((C) => C.isActive)?.type !== rt.Shipping && (!T || !y.acceptTerms)) {
      const C = document.querySelector('.checkout-step--shipping [data-test="step-edit-button"]');
      C && C.click();
    }
  }, [ne, T, y.acceptTerms]);
  const se = me(() => {
    if (!f) return;
    sessionStorage.getItem(`${f}-selectedDealer`) && (A.removeSession(f, "postalCode"), A.removeSession(f, "acceptTerms"), A.removeSession(f, "selectedDealer"), document.querySelectorAll('[name^="shippingAddress."]').forEach((O) => {
      (O instanceof HTMLInputElement || O instanceof HTMLTextAreaElement || O instanceof HTMLSelectElement) && nt(O, "");
    }));
  }, [f]), ie = me(async () => {
    if (!W.storeHash || !n.data.getCart()) return;
    const { isFFL: w, isSuppressor: C } = await A.init();
    z(w), _(C), !w && !C && se();
  }, [W.storeHash, n.data.getCart(), se]);
  B(() => {
    ie();
  }, [ie]);
  const l = fe(
    () => ({
      checkoutService: u,
      checkoutState: n,
      config: W,
      isModalOpen: L,
      setIsModalOpen: p,
      values: y,
      setValues: v,
      handleSaveDealer: J,
      selectedDealer: T,
      setSelectedDealer: I,
      error: g,
      isFFL: D,
      isSuppressor: S
    }),
    [
      u,
      n,
      W,
      L,
      p,
      y,
      v,
      J,
      T,
      I,
      g,
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
  const { setIsModalOpen: r, values: a, setValues: u, selectedDealer: n, config: s, error: f, isFFL: E, isSuppressor: L } = je(), [p, y] = ae({ postalCode: "", acceptTerms: "" }), v = re(null), g = re(null), d = re(null), T = re(null), I = re(null), D = re(!1), z = re(!1), S = re(!1);
  B(() => {
    D.current = a.acceptTerms;
  }, [a.acceptTerms]), B(() => {
    z.current = !!n;
  }, [n]);
  const _ = me(() => {
    const l = document.querySelector('input[type="checkbox"][name="billingSameAsShipping"]');
    l && l && l.checked && l.click();
  }, []);
  B(() => {
    const l = () => _();
    return d.current = new MutationObserver(l), d.current.observe(document.body, { childList: !0, subtree: !0 }), _(), () => {
      d.current && (d.current.disconnect(), d.current = null);
    };
  }, [_]);
  const W = me(() => {
    const l = document.getElementById("checkout-shipping-continue");
    if (!l) return;
    g.current = l;
    const w = !D.current || !z.current;
    l.disabled !== w && (l.disabled = w);
  }, []);
  B(() => {
    const l = document.getElementById("checkout-shipping-continue")?.parentElement;
    if (!l) return;
    const w = () => W();
    return v.current = new MutationObserver(w), v.current.observe(l, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: ["disabled", "class"]
    }), W(), () => {
      v.current && (v.current.disconnect(), v.current = null);
    };
  }, [W]), B(() => {
    W();
  }, [W, a.acceptTerms, n]);
  const J = me(async () => {
    if (!S.current) {
      S.current = !0;
      try {
        const l = document.querySelectorAll(".consignment-container");
        if (l.length === 0) {
          S.current = !1;
          return;
        }
        const w = s.checkoutId;
        if (!w) {
          S.current = !1;
          return;
        }
        const C = await fetch(
          `/api/storefront/checkouts/${w}?include=consignments.lineItems.physicalItems%2Cconsignments.address`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          }
        );
        if (!C.ok) {
          S.current = !1;
          return;
        }
        const O = await C.json(), K = O?.consignments || O?.data?.consignments || [];
        let $ = null, Y = null;
        if (n) {
          const x = n?.contact?.address?.zip, N = n?.contact?.address?.street1, q = n?.contact?.address?.city, te = n?.contact?.address?.state;
          for (const G of K) {
            const U = G?.address;
            if (U) {
              const X = U.postalCode === x, he = U.address1 === N, we = U.city === q, ce = U.stateOrProvinceCode === te;
              if (X && he || X && we && ce) {
                $ = G, Y = G.id;
                break;
              }
            }
          }
        }
        if (!$) {
          const x = await A.getMappingData(), N = x?.ffl_custom_attribute_name?.trim().toLowerCase(), q = x?.ffl_custom_attribute_value?.trim().toLowerCase(), te = x?.ffl_firearm_custom_attribute_name?.trim().toLowerCase(), G = x?.ffl_firearm_custom_attribute_value;
          for (const U of K) {
            const X = U?.lineItems?.physicalItems || [];
            if (X.length === 0) continue;
            const he = X.map((Q) => Q.productEntityId || Q.productId);
            if ((await A.getProducts(he)).some((Q) => {
              const le = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === N && Z.value.trim().toLowerCase() === q
              ), ye = Q.customFields?.some(
                (Z) => Z.name.trim().toLowerCase() === te && Z.value.trim().toLowerCase() === G?.[3]?.toLowerCase()
              );
              return le || ye;
            })) {
              $ = U, Y = U.id;
              break;
            }
          }
        }
        if (!$) {
          console.warn("Could not find FFL consignment in API data"), S.current = !1;
          return;
        }
        if (l.forEach((x) => {
          x.classList.remove("consignment-container--ffl");
        }), Y)
          for (let x = 0; x < l.length; x++) {
            const N = l[x], q = N.getAttribute("data-consignment-id") || N.getAttribute("data-id") || N.querySelector("[data-consignment-id]")?.getAttribute("data-consignment-id");
            if (q && q === String(Y)) {
              N.classList.add("consignment-container--ffl"), console.log(`Marked consignment container at index ${x} as FFL (matched by consignment ID)`), S.current = !1;
              return;
            }
          }
        const P = $.address;
        if (P)
          for (let x = 0; x < l.length; x++) {
            const N = l[x], q = N.textContent || "", te = P.postalCode && q.includes(P.postalCode), G = P.address1 && q.includes(P.address1), U = P.city && q.includes(P.city), X = P.stateOrProvinceCode && q.includes(P.stateOrProvinceCode);
            if (te && (G || U && X)) {
              N.classList.add("consignment-container--ffl"), console.log(`Marked consignment container at index ${x} as FFL (matched by address)`), S.current = !1;
              return;
            }
          }
        const ee = await A.getFFLConsignmentIndex();
        ee !== null && ee >= 0 && ee < l.length ? (l[ee].classList.add("consignment-container--ffl"), console.log(`Marked consignment container at index ${ee} as FFL (fallback to API index)`)) : console.warn("Could not match FFL consignment to DOM container");
      } finally {
        S.current = !1;
      }
    }
  }, [s.checkoutId, n]);
  B(() => {
    if (!E && !L) return;
    if (s.hasMultiShippingEnabled)
      if (s.nonFFLItemStrategy !== "FORCE_TO_FFL") {
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
      J();
    }, 100), w = () => {
      S.current || (I.current && clearTimeout(I.current), I.current = setTimeout(() => {
        J(), I.current = null;
      }, 300));
    };
    return T.current = new MutationObserver(w), T.current.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => {
      clearTimeout(l), I.current && (clearTimeout(I.current), I.current = null), T.current && (T.current.disconnect(), T.current = null);
    };
  }, [E, L, s.hasMultiShippingEnabled, J]), B(() => {
    if (!n) return;
    document.querySelectorAll(".consignment-container--ffl").forEach((C) => {
      C.classList.remove("consignment-container--ffl");
    });
    const w = setTimeout(() => {
      J();
    }, 500);
    return () => clearTimeout(w);
  }, [n, J]);
  const ne = (l) => {
    y({ postalCode: "", acceptTerms: "" }), l.target.name === "postalCode" ? (u({ ...a, postalCode: l.target.value }), sessionStorage.setItem(`${s.checkoutId}-postalCode`, l.target.value)) : (u({ ...a, acceptTerms: l.target.checked }), sessionStorage.setItem(`${s.checkoutId}-acceptTerms`, l.target.checked.toString()));
  }, se = (l) => {
    if (l.preventDefault(), y({ postalCode: "", acceptTerms: "" }), !a.postalCode) {
      y({ ...p, postalCode: `${s.lang.postalCodeLabel} is required` });
      return;
    }
    r(!0);
  }, ie = (l) => {
    l.key === "Enter" && se(l);
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
              /* @__PURE__ */ c.jsx("h3", { style: { fontSize: 18, margin: "0 0 15px 0" }, children: s.lang.heading }),
              /* @__PURE__ */ c.jsx("p", { style: { fontWeight: 600 }, children: s.lang.subheading }),
              /* @__PURE__ */ c.jsxs("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "postalCode", children: [
                s.lang.postalCodeLabel,
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
                    onKeyDown: ie,
                    placeholder: "",
                    type: "text",
                    value: a.postalCode
                  }
                ),
                /* @__PURE__ */ c.jsx("div", { style: { flexShrink: 0 }, children: /* @__PURE__ */ c.jsx("button", { onClick: se, style: { margin: 0 }, className: "button button--primary optimizedCheckout-buttonPrimary", children: s.lang.buttonText }) })
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
              onChange: ne,
              type: "checkbox"
            }
          ),
          /* @__PURE__ */ c.jsx("label", { className: "form-label optimizedCheckout-form-label", htmlFor: "accept-agreement", children: s.lang.termsLabel }),
          p.acceptTerms && /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "acceptTerms", role: "alert", children: p.acceptTerms }) }) })
        ] }),
        f && /* @__PURE__ */ c.jsx("div", { className: "form-field form-field--error", children: /* @__PURE__ */ c.jsx("ul", { className: "form-field-errors", children: /* @__PURE__ */ c.jsx("li", { className: "form-field-error", children: /* @__PURE__ */ c.jsx("label", { "aria-live": "polite", className: "form-inlineMessage", htmlFor: "error", role: "alert", children: f }) }) }) }),
        n && /* @__PURE__ */ c.jsx("div", { style: { marginTop: 15 }, children: /* @__PURE__ */ c.jsxs("div", { className: "form-body", children: [
          /* @__PURE__ */ c.jsx("strong", { children: s.lang.selectedDealerLabel }),
          /* @__PURE__ */ c.jsx("div", { className: "text-pretty", children: n?.name }),
          /* @__PURE__ */ c.jsxs("div", { className: "text-pretty", children: [
            /* @__PURE__ */ c.jsxs("span", { className: "block", children: [
              n?.contact.address.street1,
              " "
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              n?.contact.address.city,
              ", ",
              /* @__PURE__ */ c.jsx("span", { children: n?.contact.address.state })
            ] }),
            /* @__PURE__ */ c.jsxs("span", { children: [
              " ",
              n?.contact.address.zip
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
            ${s.hasMultiShippingEnabled && `           
              ${// if the user can choose which consignment to put the items on, hide the remove buttons for the ffl line items
              // they cannot move these items to a non-ffl address
              s.nonFFLItemStrategy === "ALLOW_CHOICE" && [...A.fflLineItems].length > 0 ? [...A.fflLineItems].map((l) => `[data-test="remove-${l[0]}-button"] { display: none; }`).join(`
`) : ""}
              ${// hide the reallocate items button if the user cannot choose which consignment to put the items on
              s.nonFFLItemStrategy !== "ALLOW_CHOICE" ? '.consignment-container--ffl [data-test="reallocate-items-button"] { display: none; }' : ""}
              ${// hide the enter shipping address button if the user has not selected a dealer
              !A.getSession(s.checkoutId).selectedDealer && '.consignment-container [data-test="enter-shipping-address"] { display: none; }'}`}
            
            `
            }
          }
        )
      ]
    }
  );
}, Wt = () => {
  const { config: r } = je();
  return B(() => {
    if (document.querySelector(`script[src^="${r.sdkUrl}"]`))
      return;
    const u = document.createElement("script");
    u.src = r.sdkUrl, document.body.appendChild(u);
  }, [r.sdkUrl]), null;
}, Yt = () => {
  const { isModalOpen: r, setIsModalOpen: a, config: u, values: n, setSelectedDealer: s, isSuppressor: f } = je(), E = "ffSelectFrame", L = async (y) => {
    if (!y) return;
    const { shippingData: v, dealer: g } = await A.saveDealer(u.checkoutId, y), d = v.address;
    Object.keys(d).forEach((T) => {
      const I = document.querySelector(`[name="shippingAddress.${T}"]`);
      if (I) {
        const D = String(d[T] ?? "");
        nt(I, D);
      }
    }), s(g), a(!1);
  };
  if (B(() => {
    r && setTimeout(() => {
      new window.FFLSelectSDK.FFLDealerSelector(
        n.postalCode,
        E,
        { url: u.baseUrl },
        {
          storeDomain: u.storeDomain,
          envMode: u.env,
          filters: f ? "exclude_non_sot_dealer=true" : "",
          dealerSelectionCallback: L
        }
      ).show();
    }, 200);
  }, [
    r,
    n.postalCode,
    u.baseUrl,
    u.storeDomain,
    u.env,
    L,
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
