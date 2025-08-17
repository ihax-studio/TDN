/* esm.sh - ios-haptics@1.0.1 */
var A = Object.create;
var h = Object.defineProperty;
var F = Object.getOwnPropertyDescriptor;
var I = Object.getOwnPropertyNames;
var N = Object.getPrototypeOf,
  O = Object.prototype.hasOwnProperty;
var T = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);
var U = (t, e, n, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of I(e))
      !O.call(t, o) && o !== n && h(t, o, {
        get: () => e[o],
        enumerable: !(r = F(e, o)) || r.enumerable
      });
  return t;
};
var w = (t, e, n) => (n = t != null ? A(N(t)) : {}, U(e || !t || !t.__esModule ? h(n, "default", {
  value: t,
  enumerable: !0
}) : n, t));
var d = T((D, a) => {
  (function(t, e) {
    typeof define == "function" && define.amd ? define(e) : typeof D == "object" ? a.exports = e() : t.Haptic = e();
  })(this, function() {
    "use strict";

    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : {
        default: i
      };
    }
    var e = {
        light: "light",
        medium: "medium",
        heavy: "heavy",
        rigid: "rigid",
        soft: "soft"
      },
      n = {
        success: "success",
        warning: "warning",
        error: "error"
      },
      r = {
        confirm: "confirm",
        error: "error"
      },
      o = function() {
        var i;
        return (i = window == null ? void 0 : window.webkit) === null || i === void 0 ? void 0 : i.messageHandlers;
      },
      s = function(i) {
        var c;
        if (o()) {
          var u = {
            type: i.type,
            payload: i.payload
          };
          return (c = o().haptic) === null || c === void 0 ? void 0 : c.postMessage(u);
        }
      },
      l = function(i) {
        return s({
          type: "impact",
          payload: {
            style: i
          }
        });
      },
      f = function(i) {
        return s({
          type: "notification",
          payload: {
            type: i
          }
        });
      },
      p = function() {
        return s({
          type: "selection"
        });
      },
      m = function() {
        return l(e.light);
      },
      g = function() {
        return l(e.medium);
      },
      y = function() {
        return l(e.heavy);
      },
      b = function() {
        return l(e.rigid);
      },
      E = function() {
        return l(e.soft);
      },
      v = function() {
        return f(n.success);
      },
      S = function() {
        return f(n.warning);
      },
      k = function() {
        return f(n.error);
      },
      C = function() {
        return p();
      },
      H = function() {
        return k();
      },
      P = function() {
        return m();
      };
    t(e);
    var x = t(n);
    t(r);
    var j = {
      impact: l,
      notification: f,
      selection: p,
      impactLight: m,
      impactMedium: g,
      impactHeavy: y,
      impactRigid: b,
      impactSoft: E,
      notificationSuccess: v,
      notificationWarning: S,
      notificationError: k,
      selectionChanged: C,
      error: H,
      confirm: P
    };
    return j;
  });
});
var M = w(d()),
  {
    confirm: B,
    error: L,
    impact: q,
    impactHeavy: R,
    impactLight: V,
    impactMedium: W,
    impactRigid: X,
    impactSoft: Y,
    notification: z,
    notificationError: G,
    notificationSuccess: J,
    notificationWarning: K,
    selection: Q,
    selectionChanged: Z
  } = M,
  {
    default: $,
    ...ee
  } = M,
  te = $ != null ? $ : ee;
export {
  te as haptic,
  B as confirm,
  L as error,
  q as impact,
  R as impactHeavy,
  V as impactLight,
  W as impactMedium,
  X as impactRigid,
  Y as impactSoft,
  z as notification,
  G as notificationError,
  J as notificationSuccess,
  K as notificationWarning,
  Q as selection,
  Z as selectionChanged
};
