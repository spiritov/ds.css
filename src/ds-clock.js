//#region node_modules/svelte/src/internal/disclose-version.js
typeof window < 'u' && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add('5');
//#endregion
//#region node_modules/svelte/src/constants.js
var e = {},
  t = Symbol('uninitialized'),
  n = Array.isArray,
  r = Array.prototype.indexOf,
  i = Array.prototype.includes,
  a = Array.from,
  o = Object.keys,
  s = Object.defineProperty,
  c = Object.getOwnPropertyDescriptor,
  l = Object.prototype,
  u = Array.prototype,
  d = Object.getPrototypeOf,
  f = Object.isExtensible,
  p = () => {};
function m(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function h() {
  var e, t;
  return {
    promise: new Promise((n, r) => {
      ((e = n), (t = r));
    }),
    resolve: e,
    reject: t,
  };
}
var g = 1024,
  _ = 2048,
  v = 4096,
  ee = 8192,
  te = 16384,
  ne = 32768,
  re = 1 << 25,
  ie = 65536,
  ae = 1 << 19,
  oe = 1 << 20,
  se = 65536,
  ce = 1 << 21,
  le = 1 << 22,
  ue = 1 << 23,
  de = Symbol('$state'),
  fe = Symbol('legacy props'),
  pe = Symbol('attributes'),
  me = Symbol('class'),
  he = Symbol('style'),
  ge = Symbol('text'),
  _e = new (class extends Error {
    name = 'StaleReactionError';
    message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
  })();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function ve() {
  throw Error('https://svelte.dev/e/async_derived_orphan');
}
function ye(e) {
  throw Error('https://svelte.dev/e/effect_in_teardown');
}
function be() {
  throw Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function xe(e) {
  throw Error('https://svelte.dev/e/effect_orphan');
}
function Se() {
  throw Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function Ce() {
  throw Error('https://svelte.dev/e/hydration_failed');
}
function we() {
  throw Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Te() {
  throw Error('https://svelte.dev/e/state_prototype_fixed');
}
function Ee() {
  throw Error('https://svelte.dev/e/state_unsafe_mutation');
}
function De() {
  throw Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
function Oe() {
  console.warn('https://svelte.dev/e/derived_inert');
}
function ke(e) {
  console.warn('https://svelte.dev/e/hydration_mismatch');
}
function Ae() {
  console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var y = !1;
function je(e) {
  y = e;
}
var b;
function x(t) {
  if (t === null) throw (ke(), e);
  return (b = t);
}
function Me() {
  return x(/* @__PURE__ */ I(b));
}
function S(t) {
  if (y) {
    if (/* @__PURE__ */ I(b) !== null) throw (ke(), e);
    b = t;
  }
}
function Ne(e = 1) {
  if (y) {
    for (var t = e, n = b; t--; ) n = /* @__PURE__ */ I(n);
    b = n;
  }
}
function Pe(e = !0) {
  for (var t = 0, n = b; ; ) {
    if (n.nodeType === 8) {
      var r = n.data;
      if (r === ']') {
        if (t === 0) return n;
        --t;
      } else (r === '[' || r === '[!' || (r[0] === '[' && !isNaN(Number(r.slice(1))))) && (t += 1);
    }
    var i = /* @__PURE__ */ I(n);
    (e && n.remove(), (n = i));
  }
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Fe(e) {
  return e === this.v;
}
function Ie(e, t) {
  return e == e ? e !== t || (typeof e == 'object' && !!e) || typeof e == 'function' : t == t;
}
function Le(e) {
  return !Ie(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var C = !1,
  Re = !1,
  w = null;
function ze(e) {
  w = e;
}
function Be(e, t = !1, n) {
  w = {
    p: w,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: G,
    l:
      Re && !t ?
        {
          s: null,
          u: null,
          $: [],
        }
      : null,
  };
}
function Ve(e) {
  var t = w,
    n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) on(r);
  }
  return (e !== void 0 && (t.x = e), (t.i = !0), (w = t.p), e ?? {});
}
function He() {
  return !Re || (w !== null && w.l === null);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var T = [];
function Ue() {
  var e = T;
  ((T = []), m(e));
}
function We(e) {
  if (T.length === 0 && !yt) {
    var t = T;
    queueMicrotask(() => {
      t === T && Ue();
    });
  }
  T.push(e);
}
function Ge() {
  for (; T.length > 0; ) Ue();
}
function Ke(e) {
  var t = G;
  if (t === null) return ((H.f |= ue), e);
  if (!(t.f & 32768) && !(t.f & 4)) throw e;
  E(e, t);
}
function E(e, t) {
  if (!(t !== null && t.f & 16384)) {
    for (; t !== null; ) {
      if (t.f & 128) {
        if (!(t.f & 32768)) throw e;
        try {
          t.b.error(e);
          return;
        } catch (t) {
          e = t;
        }
      }
      t = t.parent;
    }
    throw e;
  }
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/status.js
var qe = ~(_ | v | g);
function D(e, t) {
  e.f = (e.f & qe) | t;
}
function Je(e) {
  e.f & 512 || e.deps === null ? D(e, g) : D(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Ye(e) {
  if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || ((t.f ^= se), Ye(t.deps));
}
function Xe(e, t, n) {
  (e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Ye(e.deps), D(e, g));
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Ze = !1;
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Qe(e) {
  let t = 0,
    n = Ft(0),
    r;
  return () => {
    nn() &&
      ($(n),
      dn(
        () => (
          t === 0 && (r = Rn(() => e(() => zt(n)))),
          (t += 1),
          () => {
            We(() => {
              (--t, t === 0 && (r?.(), (r = void 0), zt(n)));
            });
          }
        ),
      ));
  };
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var $e = ie | ae;
function et(e, t, n, r) {
  new tt(e, t, n, r);
}
var tt = class {
  parent;
  is_pending = !1;
  transform_error;
  #e;
  #t = y ? b : null;
  #n;
  #r;
  #i;
  #a = null;
  #o = null;
  #s = null;
  #c = null;
  #l = 0;
  #u = 0;
  #d = !1;
  #f = /* @__PURE__ */ new Set();
  #p = /* @__PURE__ */ new Set();
  #m = null;
  #h = Qe(
    () => (
      (this.#m = Ft(this.#l)),
      () => {
        this.#m = null;
      }
    ),
  );
  constructor(e, t, n, r) {
    ((this.#e = e),
      (this.#n = t),
      (this.#r = (e) => {
        var t = G;
        ((t.b = this), (t.f |= 128), n(e));
      }),
      (this.parent = G.b),
      (this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e)),
      (this.#i = pn(() => {
        if (y) {
          let e = this.#t;
          Me();
          let t = e.data === '[!';
          if (e.data.startsWith('[?')) {
            let t = JSON.parse(e.data.slice(2));
            this.#_(t);
          } else t ? this.#v() : this.#g();
        } else this.#y();
      }, $e)),
      y && (this.#e = b));
  }
  #g() {
    try {
      this.#a = z(() => this.#r(this.#e));
    } catch (e) {
      this.error(e);
    }
  }
  #_(e) {
    let t = this.#n.failed;
    t &&
      (this.#s = z(() => {
        t(
          this.#e,
          () => e,
          () => () => {},
        );
      }));
  }
  #v() {
    let e = this.#n.pending;
    e &&
      ((this.is_pending = !0),
      (this.#o = z(() => e(this.#e))),
      We(() => {
        var e = (this.#c = document.createDocumentFragment()),
          t = qt();
        (e.append(t),
          (this.#a = this.#x(() => z(() => this.#r(t)))),
          this.#u === 0 &&
            (this.#e.before(e),
            (this.#c = null),
            yn(this.#o, () => {
              this.#o = null;
            }),
            this.#b(k)));
      }));
  }
  #y() {
    try {
      if (
        ((this.is_pending = this.has_pending_snippet()),
        (this.#u = 0),
        (this.#l = 0),
        (this.#a = z(() => {
          this.#r(this.#e);
        })),
        this.#u > 0)
      ) {
        var e = (this.#c = document.createDocumentFragment());
        xn(this.#a, e);
        let t = this.#n.pending;
        this.#o = z(() => t(this.#e));
      } else this.#b(k);
    } catch (e) {
      this.error(e);
    }
  }
  #b(e) {
    ((this.is_pending = !1), e.transfer_effects(this.#f, this.#p));
  }
  defer_effect(e) {
    Xe(e, this.#f, this.#p);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#n.pending;
  }
  #x(e) {
    var t = G,
      n = H,
      r = w;
    (K(this.#i), W(this.#i), ze(this.#i.ctx));
    try {
      return (wt.ensure(), e());
    } catch (e) {
      return (Ke(e), null);
    } finally {
      (K(t), W(n), ze(r));
    }
  }
  #S(e, t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#S(e, t);
      return;
    }
    ((this.#u += e),
      this.#u === 0 &&
        (this.#b(t),
        this.#o &&
          yn(this.#o, () => {
            this.#o = null;
          }),
        (this.#c &&= (this.#e.before(this.#c), null))));
  }
  update_pending_count(e, t) {
    (this.#S(e, t),
      (this.#l += e),
      !(!this.#m || this.#d) &&
        ((this.#d = !0),
        We(() => {
          ((this.#d = !1), this.#m && Lt(this.#m, this.#l));
        })));
  }
  get_effect_pending() {
    return (this.#h(), $(this.#m));
  }
  error(e) {
    if (!this.#n.onerror && !this.#n.failed) throw e;
    k?.is_fork ?
      (this.#a && k.skip_effect(this.#a),
      this.#o && k.skip_effect(this.#o),
      this.#s && k.skip_effect(this.#s),
      k.oncommit(() => {
        this.#C(e);
      }))
    : this.#C(e);
  }
  #C(e) {
    ((this.#a &&= (B(this.#a), null)),
      (this.#o &&= (B(this.#o), null)),
      (this.#s &&= (B(this.#s), null)),
      y && (x(this.#t), Ne(), x(Pe())));
    var t = this.#n.onerror;
    let n = this.#n.failed;
    var r = !1,
      i = !1;
    let a = () => {
        if (r) {
          Ae();
          return;
        }
        ((r = !0),
          i && De(),
          this.#s !== null &&
            yn(this.#s, () => {
              this.#s = null;
            }),
          this.#x(() => {
            this.#y();
          }));
      },
      o = (e) => {
        try {
          ((i = !0), t?.(e, a), (i = !1));
        } catch (e) {
          E(e, this.#i && this.#i.parent);
        }
        n &&
          (this.#s = this.#x(() => {
            try {
              return z(() => {
                var t = G;
                ((t.b = this),
                  (t.f |= 128),
                  n(
                    this.#e,
                    () => e,
                    () => a,
                  ));
              });
            } catch (e) {
              return (E(e, this.#i.parent), null);
            }
          }));
      };
    We(() => {
      var t;
      try {
        t = this.transform_error(e);
      } catch (e) {
        E(e, this.#i && this.#i.parent);
        return;
      }
      typeof t == 'object' && t && typeof t.then == 'function' ?
        t.then(o, (e) => E(e, this.#i && this.#i.parent))
      : o(t);
    });
  }
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function nt(e, t, n, r) {
  let i = He() ? ot : ut;
  var a = e.filter((e) => !e.settled),
    o = t.map(i);
  if (n.length === 0 && a.length === 0) {
    r(o);
    return;
  }
  var s = G,
    c = rt(),
    l =
      a.length === 1 ? a[0].promise
      : a.length > 1 ? Promise.all(a.map((e) => e.promise))
      : null;
  function u(e) {
    if (!(s.f & 16384)) {
      c();
      try {
        r([...o, ...e]);
      } catch (e) {
        E(e, s);
      }
      it();
    }
  }
  var d = at();
  if (n.length === 0) {
    l.then(() => u([])).finally(d);
    return;
  }
  function f() {
    Promise.all(n.map((e) => /* @__PURE__ */ ct(e)))
      .then(u)
      .catch((e) => E(e, s))
      .finally(d);
  }
  l ?
    l.then(() => {
      (c(), f(), it());
    })
  : f();
}
function rt() {
  var e = G,
    t = H,
    n = w,
    r = k;
  return function (i = !0) {
    (K(e), W(t), ze(n), i && !(e.f & 16384) && (r?.activate(), r?.apply()));
  };
}
function it(e = !0) {
  (K(null), W(null), ze(null), e && k?.deactivate());
}
function at() {
  var e = G,
    t = e.b,
    n = k,
    r = !!t?.is_rendered();
  return (
    t?.update_pending_count(1, n),
    n.increment(r, e),
    () => {
      (t?.update_pending_count(-1, n), n.decrement(r, e));
    }
  );
}
/*#__NO_SIDE_EFFECTS__*/
function ot(e) {
  var n = 2 | _;
  return (
    G !== null && (G.f |= ae),
    {
      ctx: w,
      deps: null,
      effects: null,
      equals: Fe,
      f: n,
      fn: e,
      reactions: null,
      rv: 0,
      v: t,
      wv: 0,
      parent: G,
      ac: null,
    }
  );
}
var st = Symbol('obsolete');
/*#__NO_SIDE_EFFECTS__*/
function ct(e, n, r) {
  let i = G;
  i === null && ve();
  var a = void 0,
    o = Ft(t),
    s = !H,
    c = /* @__PURE__ */ new Set();
  return (
    un(() => {
      var t = G,
        n = h();
      a = n.promise;
      try {
        Promise.resolve(e())
          .then(n.resolve, (e) => {
            e !== _e && n.reject(e);
          })
          .finally(it);
      } catch (e) {
        (n.reject(e), it());
      }
      var r = k;
      if (s) {
        if (t.f & 32768) var l = at();
        if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(st);
        else for (let e of c.values()) e.reject(st);
        (c.add(n), r.async_deriveds.set(t, n));
      }
      let u = (e, t = void 0) => {
        (l?.(),
          c.delete(n),
          t !== st &&
            (r.activate(),
            t ? ((o.f |= ue), Lt(o, t)) : (o.f & 8388608 && (o.f ^= ue), Lt(o, e)),
            r.deactivate()));
      };
      n.promise.then(u, (e) => u(null, e || 'unknown'));
    }),
    rn(() => {
      for (let e of c) e.reject(st);
    }),
    new Promise((e) => {
      function t(n) {
        function r() {
          n === a ? e(o) : t(a);
        }
        n.then(r, r);
      }
      t(a);
    })
  );
}
/*#__NO_SIDE_EFFECTS__*/
function lt(e) {
  let t = /* @__PURE__ */ ot(e);
  return (C || Tn(t), t);
}
/*#__NO_SIDE_EFFECTS__*/
function ut(e) {
  let t = /* @__PURE__ */ ot(e);
  return ((t.equals = Le), t);
}
function dt(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) B(t[n]);
  }
}
function ft(e) {
  var n,
    r = G,
    i = e.parent;
  if (!V && i !== null && e.v !== t && i.f & 24576) return (Oe(), e.v);
  K(i);
  try {
    ((e.f &= ~se), dt(e), (n = Mn(e)));
  } finally {
    K(r);
  }
  return n;
}
function pt(e) {
  var t = ft(e);
  if (
    !e.equals(t) &&
    ((e.wv = kn()),
    (!k?.is_fork || e.deps === null) &&
      (k === null ? (e.v = t) : (k.capture(e, t, !0), _t?.capture(e, t, !0)), e.deps === null))
  ) {
    D(e, g);
    return;
  }
  V || (A === null ? Je(e) : (nn() || k?.is_fork) && A.set(e, t));
}
function mt(e) {
  if (e.effects !== null)
    for (let t of e.effects)
      (t.teardown || t.ac) &&
        (t.teardown?.(),
        t.ac?.abort(_e),
        t.fn !== null && (t.teardown = p),
        (t.ac = null),
        Pn(t, 0),
        hn(t));
}
function ht(e) {
  if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Fn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var gt = null,
  O = null,
  k = null,
  _t = null,
  A = null,
  vt = null,
  yt = !1,
  bt = !1,
  j = null,
  xt = null,
  St = 0,
  Ct = 1,
  wt = class e {
    id = Ct++;
    #e = !1;
    linked = !0;
    #t = null;
    #n = null;
    async_deriveds = /* @__PURE__ */ new Map();
    current = /* @__PURE__ */ new Map();
    previous = /* @__PURE__ */ new Map();
    #r = /* @__PURE__ */ new Set();
    #i = /* @__PURE__ */ new Set();
    #a = 0;
    #o = /* @__PURE__ */ new Map();
    #s = null;
    #c = [];
    #l = [];
    #u = /* @__PURE__ */ new Set();
    #d = /* @__PURE__ */ new Set();
    #f = /* @__PURE__ */ new Map();
    #p = /* @__PURE__ */ new Set();
    is_fork = !1;
    #m = !1;
    constructor() {
      (O === null ? (gt = O = this) : ((O.#n = this), (this.#t = O)), (O = this));
    }
    #h() {
      if (this.is_fork) return !0;
      for (let n of this.#o.keys()) {
        for (var e = n, t = !1; e.parent !== null; ) {
          if (this.#f.has(e)) {
            t = !0;
            break;
          }
          e = e.parent;
        }
        if (!t) return !0;
      }
      return !1;
    }
    skip_effect(e) {
      (this.#f.has(e) ||
        this.#f.set(e, {
          d: [],
          m: [],
        }),
        this.#p.delete(e));
    }
    unskip_effect(e, t = (e) => this.schedule(e)) {
      var n = this.#f.get(e);
      if (n) {
        this.#f.delete(e);
        for (var r of n.d) (D(r, _), t(r));
        for (r of n.m) (D(r, v), t(r));
      }
      this.#p.add(e);
    }
    #g() {
      ((this.#e = !0), St++ > 1e3 && (this.#S(), Et()));
      for (let e of this.#u) (this.#d.delete(e), D(e, _), this.schedule(e));
      for (let e of this.#d) (D(e, v), this.schedule(e));
      let t = this.#c;
      ((this.#c = []), this.apply());
      var n = (j = []),
        r = [],
        i = (xt = []);
      for (let e of t)
        try {
          this.#_(e, n, r);
        } catch (t) {
          throw (Mt(e), this.#h() || this.discard(), t);
        }
      if (((k = null), i.length > 0)) {
        var a = e.ensure();
        for (let e of i) a.schedule(e);
      }
      if (((j = null), (xt = null), this.#h())) {
        (this.#b(r), this.#b(n));
        for (let [e, t] of this.#f) jt(e, t);
        i.length > 0 && k.#g();
        return;
      }
      let o = this.#v();
      if (o) {
        (this.#b(r), this.#b(n), o.#y(this));
        return;
      }
      (this.#u.clear(), this.#d.clear());
      for (let e of this.#r) e(this);
      (this.#r.clear(), (_t = this), Dt(r), Dt(n), (_t = null), this.#s?.resolve());
      var s = k;
      if (
        (this.#a === 0 &&
          (this.#c.length === 0 || s !== null) &&
          (this.#S(), C && (this.#x(), (k = s))),
        this.#c.length > 0)
      )
        if (s !== null) {
          let e = s;
          e.#c.push(...this.#c.filter((t) => !e.#c.includes(t)));
        } else s = this;
      s !== null && s.#g();
    }
    #_(e, t, n) {
      e.f ^= g;
      for (var r = e.first; r !== null; ) {
        var i = r.f,
          a = (i & 96) != 0;
        if (!((a && i & 1024) || i & 8192 || this.#f.has(r)) && r.fn !== null) {
          a ? (r.f ^= g)
          : i & 4 ? t.push(r)
          : C && i & 16777224 ? n.push(r)
          : An(r) && (i & 16 && this.#d.add(r), Fn(r));
          var o = r.first;
          if (o !== null) {
            r = o;
            continue;
          }
        }
        for (; r !== null; ) {
          var s = r.next;
          if (s !== null) {
            r = s;
            break;
          }
          r = r.parent;
        }
      }
    }
    #v() {
      for (var e = this.#t; e !== null; ) {
        if (!e.is_fork) {
          for (let [t, [, n]] of this.current) if (e.current.has(t) && !n) return e;
        }
        e = e.#t;
      }
      return null;
    }
    #y(e) {
      for (let [t, n] of e.current)
        (!this.previous.has(t) && e.previous.has(t) && this.previous.set(t, e.previous.get(t)),
          this.current.set(t, n));
      for (let [t, n] of e.async_deriveds) {
        let e = this.async_deriveds.get(t);
        e && n.promise.then(e.resolve).catch(e.reject);
      }
      (e.async_deriveds.clear(), this.transfer_effects(e.#u, e.#d));
      let t = (e) => {
        var n = e.reactions;
        if (n !== null)
          for (let e of n) {
            var r = e.f;
            if (r & 2) t(e);
            else {
              var i = e;
              r & 4194320 &&
                !this.async_deriveds.has(i) &&
                (this.#d.delete(i), D(i, _), this.schedule(i));
            }
          }
      };
      for (let e of this.current.keys()) t(e);
      (this.oncommit(() => e.discard()), e.#S(), (k = this), this.#g());
    }
    #b(e) {
      for (var t = 0; t < e.length; t += 1) Xe(e[t], this.#u, this.#d);
    }
    capture(e, n, r = !1) {
      (e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v),
        e.f & 8388608 || (this.current.set(e, [n, r]), A?.set(e, n)),
        this.is_fork || (e.v = n));
    }
    activate() {
      k = this;
    }
    deactivate() {
      ((k = null), (A = null));
    }
    flush() {
      try {
        ((bt = !0), (k = this), this.#g());
      } finally {
        ((St = 0),
          (vt = null),
          (j = null),
          (xt = null),
          (bt = !1),
          (k = null),
          (A = null),
          N.clear());
      }
    }
    discard() {
      for (let e of this.#i) e(this);
      this.#i.clear();
      for (let e of this.async_deriveds.values()) e.reject(st);
      (this.#S(), this.#s?.resolve());
    }
    register_created_effect(e) {
      this.#l.push(e);
    }
    #x() {
      for (let u = gt; u !== null; u = u.#n) {
        var e = u.id < this.id,
          t = [];
        for (let [r, [i, a]] of this.current) {
          if (u.current.has(r)) {
            var n = u.current.get(r)[0];
            if (e && i !== n) u.current.set(r, [i, a]);
            else continue;
          }
          t.push(r);
        }
        if (e)
          for (let [e, t] of this.async_deriveds) {
            let n = u.async_deriveds.get(e);
            n && t.promise.then(n.resolve).catch(n.reject);
          }
        var r = [...u.current.keys()].filter((e) => !u.current.get(e)[1]);
        if (!(!u.#e || r.length === 0)) {
          var i = r.filter((e) => !this.current.has(e));
          if (i.length === 0) e && u.discard();
          else if (t.length > 0) {
            if (e)
              for (let e of this.#p)
                u.unskip_effect(e, (e) => {
                  e.f & 4194320 ? u.schedule(e) : u.#b([e]);
                });
            u.activate();
            var a = /* @__PURE__ */ new Set(),
              o = /* @__PURE__ */ new Map();
            for (var s of t) Ot(s, i, a, o);
            o = /* @__PURE__ */ new Map();
            var c = [...u.current]
              .filter(([e, t]) => {
                let n = this.current.get(e);
                return n ? n[0] !== t[0] || n[1] !== t[1] : !0;
              })
              .map(([e]) => e);
            if (c.length > 0)
              for (let e of this.#l)
                !(e.f & 155648) &&
                  kt(e, c, o) &&
                  (e.f & 4194320 ? (D(e, _), u.schedule(e)) : u.#u.add(e));
            if (u.#c.length > 0 && !u.#m) {
              u.apply();
              for (var l of u.#c) u.#_(l, [], []);
              u.#c = [];
            }
            u.deactivate();
          }
        }
      }
    }
    increment(e, t) {
      if (((this.#a += 1), e)) {
        let e = this.#o.get(t) ?? 0;
        this.#o.set(t, e + 1);
      }
    }
    decrement(e, t) {
      if ((--this.#a, e)) {
        let e = this.#o.get(t) ?? 0;
        e === 1 ? this.#o.delete(t) : this.#o.set(t, e - 1);
      }
      this.#m ||
        ((this.#m = !0),
        We(() => {
          ((this.#m = !1), this.linked && this.flush());
        }));
    }
    transfer_effects(e, t) {
      for (let t of e) this.#u.add(t);
      for (let e of t) this.#d.add(e);
      (e.clear(), t.clear());
    }
    oncommit(e) {
      this.#r.add(e);
    }
    ondiscard(e) {
      this.#i.add(e);
    }
    settled() {
      return (this.#s ??= h()).promise;
    }
    static ensure() {
      if (k === null) {
        let t = (k = new e());
        !bt &&
          !yt &&
          We(() => {
            t.#e || t.flush();
          });
      }
      return k;
    }
    apply() {
      if (!C || (!this.is_fork && this.#t === null && this.#n === null)) {
        A = null;
        return;
      }
      A = /* @__PURE__ */ new Map();
      for (let [e, [t]] of this.current) A.set(e, t);
      for (let t = gt; t !== null; t = t.#n)
        if (!(t === this || t.is_fork)) {
          var e = !1;
          if (t.id < this.id) {
            for (let [n, [, r]] of t.current)
              if (!r && this.current.has(n)) {
                e = !0;
                break;
              }
          }
          if (!e) for (let [e, n] of t.previous) A.has(e) || A.set(e, n);
        }
    }
    schedule(e) {
      if (((vt = e), e.b?.is_pending && e.f & 16777228 && !(e.f & 32768))) {
        e.b.defer_effect(e);
        return;
      }
      for (var t = e; t.parent !== null; ) {
        t = t.parent;
        var n = t.f;
        if (j !== null && t === G && (C || ((H === null || !(H.f & 2)) && !Ze))) return;
        if (n & 96) {
          if (!(n & 1024)) return;
          t.f ^= g;
        }
      }
      this.#c.push(t);
    }
    #S() {
      if (this.linked) {
        var e = this.#t,
          t = this.#n;
        (e === null ? (gt = t) : (e.#n = t), t === null ? (O = e) : (t.#t = e), (this.linked = !1));
      }
    }
  };
function Tt(e) {
  var t = yt;
  yt = !0;
  try {
    var n;
    for (e && (k !== null && !k.is_fork && k.flush(), (n = e())); ; ) {
      if ((Ge(), k === null)) return n;
      k.flush();
    }
  } finally {
    yt = t;
  }
}
function Et() {
  try {
    Se();
  } catch (e) {
    E(e, vt);
  }
}
var M = null;
function Dt(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (
        !(r.f & 24576) &&
        An(r) &&
        ((M = /* @__PURE__ */ new Set()),
        Fn(r),
        r.deps === null &&
          r.first === null &&
          r.nodes === null &&
          r.teardown === null &&
          r.ac === null &&
          vn(r),
        M?.size > 0)
      ) {
        N.clear();
        for (let e of M) {
          if (e.f & 24576) continue;
          let t = [e],
            n = e.parent;
          for (; n !== null; ) (M.has(n) && (M.delete(n), t.push(n)), (n = n.parent));
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            n.f & 24576 || Fn(n);
          }
        }
        M.clear();
      }
    }
    M = null;
  }
}
function Ot(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (let i of e.reactions) {
      let e = i.f;
      e & 2 ? Ot(i, t, n, r) : e & 4194320 && !(e & 2048) && kt(i, t, r) && (D(i, _), At(i));
    }
}
function kt(e, t, n) {
  let r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (let r of e.deps) {
      if (i.call(t, r)) return !0;
      if (r.f & 2 && kt(r, t, n)) return (n.set(r, !0), !0);
    }
  return (n.set(e, !1), !1);
}
function At(e) {
  k.schedule(e);
}
function jt(e, t) {
  if (!(e.f & 32 && e.f & 1024)) {
    (e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), D(e, g));
    for (var n = e.first; n !== null; ) (jt(n, t), (n = n.next));
  }
}
function Mt(e) {
  D(e, g);
  for (var t = e.first; t !== null; ) (Mt(t), (t = t.next));
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Nt = /* @__PURE__ */ new Set(),
  N = /* @__PURE__ */ new Map(),
  Pt = !1;
function Ft(e, t) {
  return {
    f: 0,
    v: e,
    reactions: null,
    equals: Fe,
    rv: 0,
    wv: 0,
  };
}
/*#__NO_SIDE_EFFECTS__*/
function P(e, t) {
  let n = Ft(e, t);
  return (Tn(n), n);
}
/*#__NO_SIDE_EFFECTS__*/
function It(e, t = !1, n = !0) {
  let r = Ft(e);
  return (t || (r.equals = Le), Re && n && w !== null && w.l !== null && (w.l.s ??= []).push(r), r);
}
function F(e, t, n = !1) {
  return (
    H !== null &&
      (!U || H.f & 131072) &&
      He() &&
      H.f & 4325394 &&
      (q === null || !q.has(e)) &&
      Ee(),
    Lt(e, n ? Vt(t) : t, xt)
  );
}
function Lt(e, t, n = null) {
  if (!e.equals(t)) {
    N.set(e, V ? t : e.v);
    var r = wt.ensure();
    if ((r.capture(e, t), e.f & 2)) {
      let t = e;
      (e.f & 2048 && ft(t), A === null && Je(t));
    }
    ((e.wv = kn()),
      Bt(e, _, n),
      He() && G !== null && G.f & 1024 && !(G.f & 96) && (X === null ? En([e]) : X.push(e)),
      !r.is_fork && Nt.size > 0 && !Pt && Rt());
  }
  return t;
}
function Rt() {
  Pt = !1;
  for (let e of Nt) {
    e.f & 1024 && D(e, v);
    let t;
    try {
      t = An(e);
    } catch {
      t = !0;
    }
    t && Fn(e);
  }
  Nt.clear();
}
function zt(e) {
  F(e, e.v + 1);
}
function Bt(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var i = He(), a = r.length, o = 0; o < a; o++) {
      var s = r[o],
        c = s.f;
      if (!(!i && s === G)) {
        var l = (c & _) === 0;
        if ((l && D(s, t), c & 131072)) Nt.add(s);
        else if (c & 2) {
          var u = s;
          (A?.delete(u),
            c & 65536 || (c & 512 && (G === null || !(G.f & 2097152)) && (s.f |= se), Bt(u, v, n)));
        } else if (l) {
          var d = s;
          (c & 16 && M !== null && M.add(d), n === null ? At(d) : n.push(d));
        }
      }
    }
}
function Vt(e) {
  if (typeof e != 'object' || !e || de in e) return e;
  let r = d(e);
  if (r !== l && r !== u) return e;
  var i = /* @__PURE__ */ new Map(),
    a = n(e),
    o = /* @__PURE__ */ P(0),
    s = null,
    f = Q,
    p = (e) => {
      if (Q === f) return e();
      var t = H,
        n = Q;
      (W(null), On(f));
      var r = e();
      return (W(t), On(n), r);
    };
  return (
    a && i.set('length', /* @__PURE__ */ P(e.length, s)),
    new Proxy(e, {
      defineProperty(e, t, n) {
        (!('value' in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) &&
          we();
        var r = i.get(t);
        return (
          r === void 0 ?
            p(() => {
              var e = /* @__PURE__ */ P(n.value, s);
              return (i.set(t, e), e);
            })
          : F(r, n.value, !0),
          !0
        );
      },
      deleteProperty(e, n) {
        var r = i.get(n);
        if (r === void 0) {
          if (n in e) {
            let e = p(() => /* @__PURE__ */ P(t, s));
            (i.set(n, e), zt(o));
          }
        } else (F(r, t), zt(o));
        return !0;
      },
      get(n, r, a) {
        if (r === de) return e;
        var o = i.get(r),
          l = r in n;
        if (
          (o === void 0 &&
            (!l || c(n, r)?.writable) &&
            ((o = p(() => /* @__PURE__ */ P(Vt(l ? n[r] : t), s))), i.set(r, o)),
          o !== void 0)
        ) {
          var u = $(o);
          return u === t ? void 0 : u;
        }
        return Reflect.get(n, r, a);
      },
      getOwnPropertyDescriptor(e, n) {
        var r = Reflect.getOwnPropertyDescriptor(e, n);
        if (r && 'value' in r) {
          var a = i.get(n);
          a && (r.value = $(a));
        } else if (r === void 0) {
          var o = i.get(n),
            s = o?.v;
          if (o !== void 0 && s !== t)
            return {
              enumerable: !0,
              configurable: !0,
              value: s,
              writable: !0,
            };
        }
        return r;
      },
      has(e, n) {
        if (n === de) return !0;
        var r = i.get(n),
          a = (r !== void 0 && r.v !== t) || Reflect.has(e, n);
        return (
            (r !== void 0 || (G !== null && (!a || c(e, n)?.writable))) &&
              (r === void 0 && ((r = p(() => /* @__PURE__ */ P(a ? Vt(e[n]) : t, s))), i.set(n, r)),
              $(r) === t)
          ) ?
            !1
          : a;
      },
      set(e, n, r, l) {
        var u = i.get(n),
          d = n in e;
        if (a && n === 'length')
          for (var f = r; f < u.v; f += 1) {
            var m = i.get(f + '');
            m === void 0 ?
              f in e && ((m = p(() => /* @__PURE__ */ P(t, s))), i.set(f + '', m))
            : F(m, t);
          }
        if (u === void 0)
          (!d || c(e, n)?.writable) &&
            ((u = p(() => /* @__PURE__ */ P(void 0, s))), F(u, Vt(r)), i.set(n, u));
        else {
          d = u.v !== t;
          var h = p(() => Vt(r));
          F(u, h);
        }
        var g = Reflect.getOwnPropertyDescriptor(e, n);
        if ((g?.set && g.set.call(l, r), !d)) {
          if (a && typeof n == 'string') {
            var _ = i.get('length'),
              v = Number(n);
            Number.isInteger(v) && v >= _.v && F(_, v + 1);
          }
          zt(o);
        }
        return !0;
      },
      ownKeys(e) {
        $(o);
        var n = Reflect.ownKeys(e).filter((e) => {
          var n = i.get(e);
          return n === void 0 || n.v !== t;
        });
        for (var [r, a] of i) a.v !== t && !(r in e) && n.push(r);
        return n;
      },
      setPrototypeOf() {
        Te();
      },
    })
  );
}
var Ht, Ut, Wt, Gt;
function Kt() {
  if (Ht === void 0) {
    ((Ht = window), (Ut = /Firefox/.test(navigator.userAgent)));
    var e = Element.prototype,
      t = Node.prototype,
      n = Text.prototype;
    ((Wt = c(t, 'firstChild').get),
      (Gt = c(t, 'nextSibling').get),
      f(e) && ((e[me] = void 0), (e[pe] = null), (e[he] = void 0), (e.__e = void 0)),
      f(n) && (n[ge] = void 0));
  }
}
function qt(e = '') {
  return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Jt(e) {
  return Wt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function I(e) {
  return Gt.call(e);
}
function L(e, t) {
  if (!y) return /* @__PURE__ */ Jt(e);
  var n = /* @__PURE__ */ Jt(b);
  if (n === null) n = b.appendChild(qt());
  else if (t && n.nodeType !== 3) {
    var r = qt();
    return (n?.before(r), x(r), r);
  }
  return (t && Qt(n), x(n), n);
}
function Yt(e, t = 1, n = !1) {
  let r = y ? b : e;
  for (var i; t--; ) ((i = r), (r = /* @__PURE__ */ I(r)));
  if (!y) return r;
  if (n) {
    if (r?.nodeType !== 3) {
      var a = qt();
      return (r === null ? i?.after(a) : r.before(a), x(a), a);
    }
    Qt(r);
  }
  return (x(r), r);
}
function Xt(e) {
  e.textContent = '';
}
function Zt(e, t, n) {
  return (
    t == null || t === 'http://www.w3.org/1999/xhtml' ?
      n ? document.createElement(e, { is: n })
      : document.createElement(e)
    : n ? document.createElementNS(t, e, { is: n })
    : document.createElementNS(t, e)
  );
}
function Qt(e) {
  if (e.nodeValue.length < 65536) return;
  let t = e.nextSibling;
  for (; t !== null && t.nodeType === 3; )
    (t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function $t(e) {
  var t = H,
    n = G;
  (W(null), K(null));
  try {
    return e();
  } finally {
    (W(t), K(n));
  }
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function en(e) {
  (G === null && (H === null && xe(e), be()), V && ye(e));
}
function tn(e, t) {
  var n = t.last;
  n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function R(e, t) {
  var n = G;
  n !== null && n.f & 8192 && (e |= ee);
  var r = {
    ctx: w,
    deps: null,
    nodes: null,
    f: e | _ | 512,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: n,
    b: n && n.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null,
  };
  k?.register_created_effect(r);
  var i = r;
  if (e & 4) j === null ? wt.ensure().schedule(r) : j.push(r);
  else if (t !== null) {
    try {
      Fn(r);
    } catch (e) {
      throw (B(r), e);
    }
    i.deps === null &&
      i.teardown === null &&
      i.nodes === null &&
      i.first === i.last &&
      !(i.f & 524288) &&
      ((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= ie));
  }
  if (i !== null && ((i.parent = n), n !== null && tn(i, n), H !== null && H.f & 2 && !(e & 64))) {
    var a = H;
    (a.effects ??= []).push(i);
  }
  return r;
}
function nn() {
  return H !== null && !U;
}
function rn(e) {
  let t = R(8, null);
  return (D(t, g), (t.teardown = e), t);
}
function an(e) {
  en('$effect');
  var t = G.f;
  if (!H && t & 32 && w !== null && !w.i) {
    var n = w;
    (n.e ??= []).push(e);
  } else return on(e);
}
function on(e) {
  return R(4 | oe, e);
}
function sn(e) {
  wt.ensure();
  let t = R(64 | ae, e);
  return () => {
    B(t);
  };
}
function cn(e) {
  wt.ensure();
  let t = R(64 | ae, e);
  return (e = {}) =>
    new Promise((n) => {
      e.outro ?
        yn(t, () => {
          (B(t), n(void 0));
        })
      : (B(t), n(void 0));
    });
}
function ln(e) {
  return R(4, e);
}
function un(e) {
  return R(le | ae, e);
}
function dn(e, t = 0) {
  return R(8 | t, e);
}
function fn(e, t = [], n = [], r = []) {
  nt(r, t, n, (t) => {
    R(8, () => {
      e(...t.map($));
    });
  });
}
function pn(e, t = 0) {
  return R(16 | t, e);
}
function z(e) {
  return R(32 | ae, e);
}
function mn(e) {
  var t = e.teardown;
  if (t !== null) {
    let e = V,
      n = H;
    (wn(!0), W(null));
    try {
      t.call(null);
    } finally {
      (wn(e), W(n));
    }
  }
}
function hn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    let e = n.ac;
    e !== null &&
      $t(() => {
        e.abort(_e);
      });
    var r = n.next;
    (n.f & 64 ? (n.parent = null) : B(n, t), (n = r));
  }
}
function gn(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & 32 || B(t), (t = n));
  }
}
function B(e, t = !0) {
  var n = !1;
  ((t || e.f & 262144) &&
    e.nodes !== null &&
    e.nodes.end !== null &&
    (_n(e.nodes.start, e.nodes.end), (n = !0)),
    (e.f |= re),
    hn(e, t && !n),
    Pn(e, 0));
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (let e of r) e.stop();
  (mn(e), (e.f ^= re), (e.f |= te));
  var i = e.parent;
  (i !== null && i.first !== null && vn(e),
    (e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function _n(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ I(e);
    (e.remove(), (e = n));
  }
}
function vn(e) {
  var t = e.parent,
    n = e.prev,
    r = e.next;
  (n !== null && (n.next = r),
    r !== null && (r.prev = n),
    t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function yn(e, t, n = !0) {
  var r = [];
  bn(e, r, !0);
  var i = () => {
      (n && B(e), t && t());
    },
    a = r.length;
  if (a > 0) {
    var o = () => --a || i();
    for (var s of r) s.out(o);
  } else i();
}
function bn(e, t, n) {
  if (!(e.f & 8192)) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if (!(i.f & 64)) {
        var o = (i.f & 65536) != 0 || ((i.f & 32) != 0 && (e.f & 16) != 0);
        bn(i, t, o ? n : !1);
      }
      i = a;
    }
  }
}
function xn(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ I(n);
      (t.append(n), (n = i));
    }
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Sn = null,
  Cn = !1,
  V = !1;
function wn(e) {
  V = e;
}
var H = null,
  U = !1;
function W(e) {
  H = e;
}
var G = null;
function K(e) {
  G = e;
}
var q = null;
function Tn(e) {
  H !== null && (!C || H.f & 2) && (q ??= /* @__PURE__ */ new Set()).add(e);
}
var J = null,
  Y = 0,
  X = null;
function En(e) {
  X = e;
}
var Dn = 1,
  Z = 0,
  Q = Z;
function On(e) {
  Q = e;
}
function kn() {
  return ++Dn;
}
function An(e) {
  var t = e.f;
  if (t & 2048) return !0;
  if ((t & 2 && (e.f &= ~se), t & 4096)) {
    for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
      var a = n[i];
      if ((An(a) && pt(a), a.wv > e.wv)) return !0;
    }
    t & 512 && A === null && D(e, g);
  }
  return !1;
}
function jn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(!C && q !== null && q.has(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & 2 ? jn(a, t, !1) : t === a && (n ? D(a, _) : a.f & 1024 && D(a, v), At(a));
    }
}
function Mn(e) {
  var t = J,
    n = Y,
    r = X,
    i = H,
    a = q,
    o = w,
    s = U,
    c = Q,
    l = e.f;
  ((J = null),
    (Y = 0),
    (X = null),
    (H = l & 96 ? null : e),
    (q = null),
    ze(e.ctx),
    (U = !1),
    (Q = ++Z),
    e.ac !== null &&
      ($t(() => {
        e.ac.abort(_e);
      }),
      (e.ac = null)));
  try {
    e.f |= ce;
    var u = e.fn,
      d = u();
    e.f |= ne;
    var f = e.deps,
      p = k?.is_fork;
    if (J !== null) {
      var m;
      if ((p || Pn(e, Y), f !== null && Y > 0))
        for (f.length = Y + J.length, m = 0; m < J.length; m++) f[Y + m] = J[m];
      else e.deps = f = J;
      if (nn() && e.f & 512) for (m = Y; m < f.length; m++) (f[m].reactions ??= []).push(e);
    } else !p && f !== null && Y < f.length && (Pn(e, Y), (f.length = Y));
    if (He() && X !== null && !U && f !== null && !(e.f & 6146))
      for (m = 0; m < X.length; m++) jn(X[m], e);
    if (i !== null && i !== e) {
      if ((Z++, i.deps !== null)) for (let e = 0; e < n; e += 1) i.deps[e].rv = Z;
      if (t !== null) for (let e of t) e.rv = Z;
      X !== null && (r === null ? (r = X) : r.push(...X));
    }
    return (e.f & 8388608 && (e.f ^= ue), d);
  } catch (e) {
    return Ke(e);
  } finally {
    ((e.f ^= ce), (J = t), (Y = n), (X = r), (H = i), (q = a), ze(o), (U = s), (Q = c));
  }
}
function Nn(e, n) {
  let a = n.reactions;
  if (a !== null) {
    var o = r.call(a, e);
    if (o !== -1) {
      var s = a.length - 1;
      s === 0 ? (a = n.reactions = null) : ((a[o] = a[s]), a.pop());
    }
  }
  if (a === null && n.f & 2 && (J === null || !i.call(J, n))) {
    var c = n;
    (c.f & 512 && ((c.f ^= 512), (c.f &= ~se)), c.v !== t && Je(c), mt(c), Pn(c, 0));
  }
}
function Pn(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Nn(e, n[r]);
}
function Fn(e) {
  var t = e.f;
  if (!(t & 16384)) {
    D(e, g);
    var n = G,
      r = Cn;
    ((G = e), (Cn = !0));
    try {
      (t & 16777232 ? gn(e) : hn(e), mn(e));
      var i = Mn(e);
      ((e.teardown = typeof i == 'function' ? i : null), (e.wv = Dn));
    } finally {
      ((Cn = r), (G = n));
    }
  }
}
function $(e) {
  var t = (e.f & 2) != 0;
  if ((Sn?.add(e), H !== null && !U && !(G !== null && G.f & 16384) && (q === null || !q.has(e)))) {
    var n = H.deps;
    if (H.f & 2097152)
      e.rv < Z &&
        ((e.rv = Z),
        J === null && n !== null && n[Y] === e ? Y++
        : J === null ? (J = [e])
        : J.push(e));
    else {
      ((H.deps ??= []), i.call(H.deps, e) || H.deps.push(e));
      var r = e.reactions;
      r === null ? (e.reactions = [H]) : i.call(r, H) || r.push(H);
    }
  }
  if (V && N.has(e)) return N.get(e);
  if (t) {
    var a = e;
    if (V) {
      var o = a.v;
      return (((!(a.f & 1024) && a.reactions !== null) || Ln(a)) && (o = ft(a)), N.set(a, o), o);
    }
    var s = (a.f & 512) == 0 && !U && H !== null && (Cn || (H.f & 512) != 0),
      c = (a.f & ne) === 0;
    (An(a) && (s && (a.f |= 512), pt(a)), s && !c && (ht(a), In(a)));
  }
  if (A?.has(e)) return A.get(e);
  if (e.f & 8388608) throw e.v;
  return e.v;
}
function In(e) {
  if (((e.f |= 512), e.deps !== null))
    for (let t of e.deps) ((t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (ht(t), In(t)));
}
function Ln(e) {
  if (e.v === t) return !0;
  if (e.deps === null) return !1;
  for (let t of e.deps) if (N.has(t) || (t.f & 2 && Ln(t))) return !0;
  return !1;
}
function Rn(e) {
  var t = U;
  try {
    return ((U = !0), e());
  } finally {
    U = t;
  }
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var zn = Symbol('events'),
  Bn = /* @__PURE__ */ new Set(),
  Vn = /* @__PURE__ */ new Set(),
  Hn = null;
function Un(e) {
  var t = this,
    n = t.ownerDocument,
    r = e.type,
    i = e.composedPath?.() || [],
    a = i[0] || e.target;
  Hn = e;
  var o = 0,
    c = Hn === e && e[zn];
  if (c) {
    var l = i.indexOf(c);
    if (l !== -1 && (t === document || t === window)) {
      e[zn] = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1) return;
    l <= u && (o = l);
  }
  if (((a = i[o] || e.target), a !== t)) {
    s(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || n;
      },
    });
    var d = H,
      f = G;
    (W(null), K(null));
    try {
      for (var p, m = []; a !== null && a !== t; ) {
        try {
          var h = a[zn]?.[r];
          h != null && (!a.disabled || e.target === a) && h.call(a, e);
        } catch (e) {
          p ? m.push(e) : (p = e);
        }
        if (e.cancelBubble) break;
        (o++, (a = o < i.length ? i[o] : null));
      }
      if (p) {
        for (let e of m)
          queueMicrotask(() => {
            throw e;
          });
        throw p;
      }
    } finally {
      ((e[zn] = t), delete e.currentTarget, W(d), K(f));
    }
  }
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Wn =
  globalThis?.window?.trustedTypes &&
  /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy('svelte-trusted-html', {
    createHTML: (e) => e,
  });
function Gn(e) {
  return Wn?.createHTML(e) ?? e;
}
function Kn(e) {
  var t = Zt('template');
  return ((t.innerHTML = Gn(e.replaceAll('<!>', '<!---->'))), t.content);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function qn(e, t) {
  var n = G;
  n.nodes === null &&
    (n.nodes = {
      start: e,
      end: t,
      a: null,
      t: null,
    });
}
/*#__NO_SIDE_EFFECTS__*/
function Jn(e, t) {
  var n = (t & 1) != 0,
    r = (t & 2) != 0,
    i,
    a = !e.startsWith('<!>');
  return () => {
    if (y) return (qn(b, null), b);
    i === void 0 && ((i = Kn(a ? e : '<!>' + e)), n || (i = /* @__PURE__ */ Jt(i)));
    var t = r || Ut ? document.importNode(i, !0) : i.cloneNode(!0);
    if (n) {
      var o = /* @__PURE__ */ Jt(t),
        s = t.lastChild;
      qn(o, s);
    } else qn(t, t);
    return t;
  };
}
function Yn(e, t) {
  if (y) {
    var n = G;
    ((!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = b), Me());
    return;
  }
  e !== null && e.before(t);
}
[
  .../* @__PURE__ */ 'allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback'.split(
    '.',
  ),
];
var Xn = ['touchstart', 'touchmove'];
function Zn(e) {
  return Xn.includes(e);
}
function Qn(e, t) {
  return tr(e, t);
}
function $n(t, n) {
  (Kt(), (n.intro = n.intro ?? !1));
  let r = n.target,
    i = y,
    a = b;
  try {
    for (var o = /* @__PURE__ */ Jt(r); o && (o.nodeType !== 8 || o.data !== '['); )
      o = /* @__PURE__ */ I(o);
    if (!o) throw e;
    (je(!0), x(o));
    let i = tr(t, {
      ...n,
      anchor: o,
    });
    return (je(!1), i);
  } catch (i) {
    if (
      i instanceof Error &&
      i.message.split('\n').some((e) => e.startsWith('https://svelte.dev/e/'))
    )
      throw i;
    return (
      i !== e && console.warn('Failed to hydrate: ', i),
      n.recover === !1 && Ce(),
      Kt(),
      Xt(r),
      je(!1),
      Qn(t, n)
    );
  } finally {
    (je(i), x(a));
  }
}
var er = /* @__PURE__ */ new Map();
function tr(
  t,
  { target: n, anchor: r, props: i = {}, events: o, context: s, intro: c = !0, transformError: l },
) {
  Kt();
  var u = void 0,
    d = cn(() => {
      var c = r ?? n.appendChild(qt());
      et(
        c,
        { pending: () => {} },
        (n) => {
          Be({});
          var r = w;
          if (
            (s && (r.c = s),
            o && (i.$$events = o),
            y && qn(n, null),
            (u = t(n, i) || {}),
            y && ((G.nodes.end = b), b === null || b.nodeType !== 8 || b.data !== ']'))
          )
            throw (ke(), e);
          Ve();
        },
        l,
      );
      var d = /* @__PURE__ */ new Set(),
        f = (e) => {
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if (!d.has(r)) {
              d.add(r);
              var i = Zn(r);
              for (let e of [n, document]) {
                var a = er.get(e);
                a === void 0 && ((a = /* @__PURE__ */ new Map()), er.set(e, a));
                var o = a.get(r);
                o === void 0 ?
                  (e.addEventListener(r, Un, { passive: i }), a.set(r, 1))
                : a.set(r, o + 1);
              }
            }
          }
        };
      return (
        f(a(Bn)),
        Vn.add(f),
        () => {
          for (var e of d)
            for (let r of [n, document]) {
              var t = er.get(r),
                i = t.get(e);
              --i == 0 ?
                (r.removeEventListener(e, Un), t.delete(e), t.size === 0 && er.delete(r))
              : t.set(e, i);
            }
          (Vn.delete(f), c !== r && c.parentNode?.removeChild(c));
        }
      );
    });
  return (nr.set(u, d), u);
}
var nr = /* @__PURE__ */ new WeakMap();
function rr(e, t) {
  let n = nr.get(e);
  return n ? (nr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function ir(e, t) {
  ln(() => {
    var n = e.getRootNode(),
      r = n.host ? n : (n.head ?? n.ownerDocument.head);
    if (!r.querySelector('#' + t.hash)) {
      let e = Zt('style');
      ((e.id = t.hash), (e.textContent = t.code), r.appendChild(e));
    }
  });
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
function ar(e, t = !1) {
  var n = t ? ' !important;' : ';',
    r = '';
  for (var i of Object.keys(e)) {
    var a = e[i];
    a != null && a !== '' && (r += ' ' + i + ': ' + a + n);
  }
  return r;
}
function or(e) {
  return e[0] !== '-' || e[1] !== '-' ? e.toLowerCase() : e;
}
function sr(e, t) {
  if (t) {
    var n = '',
      r,
      i;
    if ((Array.isArray(t) ? ((r = t[0]), (i = t[1])) : (r = t), e)) {
      e = String(e)
        .replaceAll(/\s*\/\*.*?\*\/\s*/g, '')
        .trim();
      var a = !1,
        o = 0,
        s = !1,
        c = [];
      (r && c.push(...Object.keys(r).map(or)), i && c.push(...Object.keys(i).map(or)));
      var l = 0,
        u = -1;
      let t = e.length;
      for (var d = 0; d < t; d++) {
        var f = e[d];
        if (
          (s ? f === '/' && e[d - 1] === '*' && (s = !1)
          : a ? a === f && (a = !1)
          : f === '/' && e[d + 1] === '*' ? (s = !0)
          : f === '"' || f === "'" ? (a = f)
          : f === '(' ? o++
          : f === ')' && o--,
          !s && a === !1 && o === 0)
        ) {
          if (f === ':' && u === -1) u = d;
          else if (f === ';' || d === t - 1) {
            if (u !== -1) {
              var p = or(e.substring(l, u).trim());
              if (!c.includes(p)) {
                f !== ';' && d++;
                var m = e.substring(l, d).trim();
                n += ' ' + m + ';';
              }
            }
            ((l = d + 1), (u = -1));
          }
        }
      }
    }
    return (r && (n += ar(r)), i && (n += ar(i, !0)), (n = n.trim()), n === '' ? null : n);
  }
  return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function cr(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function lr(e, t, n, r) {
  var i = e[he];
  if (y || i !== t) {
    var a = sr(t, r);
    ((!y || a !== e.getAttribute('style')) &&
      (a == null ? e.removeAttribute('style') : (e.style.cssText = a)),
      (e[he] = t));
  } else
    r && (Array.isArray(r) ? (cr(e, n?.[0], r[0]), cr(e, n?.[1], r[1], 'important')) : cr(e, n, r));
  return r;
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function ur(e) {
  return new dr(e);
}
var dr = class {
    #e;
    #t;
    constructor(e) {
      var t = /* @__PURE__ */ new Map(),
        n = (e, n) => {
          var r = /* @__PURE__ */ It(n, !1, !1);
          return (t.set(e, r), r);
        };
      let r = new Proxy(
        {
          ...(e.props || {}),
          $$events: {},
        },
        {
          get(e, r) {
            return $(t.get(r) ?? n(r, Reflect.get(e, r)));
          },
          has(e, r) {
            return r === fe ? !0 : ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
          },
          set(e, r, i) {
            return (F(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i));
          },
        },
      );
      ((this.#t = (e.hydrate ? $n : Qn)(e.component, {
        target: e.target,
        anchor: e.anchor,
        props: r,
        context: e.context,
        intro: e.intro ?? !1,
        recover: e.recover,
        transformError: e.transformError,
      })),
        !C && (!e?.props?.$$host || e.sync === !1) && Tt(),
        (this.#e = r.$$events));
      for (let e of Object.keys(this.#t))
        e === '$set' ||
          e === '$destroy' ||
          e === '$on' ||
          s(this, e, {
            get() {
              return this.#t[e];
            },
            set(t) {
              this.#t[e] = t;
            },
            enumerable: !0,
          });
      ((this.#t.$set = (e) => {
        Object.assign(r, e);
      }),
        (this.#t.$destroy = () => {
          rr(this.#t);
        }));
    }
    $set(e) {
      this.#t.$set(e);
    }
    $on(e, t) {
      this.#e[e] = this.#e[e] || [];
      let n = (...e) => t.call(this, ...e);
      return (
        this.#e[e].push(n),
        () => {
          this.#e[e] = this.#e[e].filter((e) => e !== n);
        }
      );
    }
    $destroy() {
      this.#t.$destroy();
    }
  },
  fr;
typeof HTMLElement == 'function' &&
  (fr = class extends HTMLElement {
    $$ctor;
    $$s;
    $$c;
    $$cn = !1;
    $$d = {};
    $$r = !1;
    $$p_d = {};
    $$l = {};
    $$l_u = /* @__PURE__ */ new Map();
    $$me;
    $$shadowRoot = null;
    constructor(e, t, n) {
      (super(), (this.$$ctor = e), (this.$$s = t), n && (this.$$shadowRoot = this.attachShadow(n)));
    }
    addEventListener(e, t, n) {
      if (((this.$$l[e] = this.$$l[e] || []), this.$$l[e].push(t), this.$$c)) {
        let n = this.$$c.$on(e, t);
        this.$$l_u.set(t, n);
      }
      super.addEventListener(e, t, n);
    }
    removeEventListener(e, t, n) {
      if ((super.removeEventListener(e, t, n), this.$$c)) {
        let e = this.$$l_u.get(t);
        e && (e(), this.$$l_u.delete(t));
      }
    }
    async connectedCallback() {
      if (((this.$$cn = !0), !this.$$c)) {
        if ((await Promise.resolve(), !this.$$cn || this.$$c)) return;
        function e(e) {
          return (t) => {
            let n = Zt('slot');
            (e !== 'default' && (n.name = e), Yn(t, n));
          };
        }
        let t = {},
          n = mr(this);
        for (let r of this.$$s)
          r in n &&
            (r === 'default' && !this.$$d.children ?
              ((this.$$d.children = e(r)), (t.default = !0))
            : (t[r] = e(r)));
        for (let e of this.attributes) {
          let t = this.$$g_p(e.name);
          t in this.$$d || (this.$$d[t] = pr(t, e.value, this.$$p_d, 'toProp'));
        }
        for (let e in this.$$p_d)
          !(e in this.$$d) && this[e] !== void 0 && ((this.$$d[e] = this[e]), delete this[e]);
        ((this.$$c = ur({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots: t,
            $$host: this,
          },
        })),
          (this.$$me = sn(() => {
            dn(() => {
              this.$$r = !0;
              for (let e of o(this.$$c)) {
                if (!this.$$p_d[e]?.reflect) continue;
                this.$$d[e] = this.$$c[e];
                let t = pr(e, this.$$d[e], this.$$p_d, 'toAttribute');
                t == null ?
                  this.removeAttribute(this.$$p_d[e].attribute || e)
                : this.setAttribute(this.$$p_d[e].attribute || e, t);
              }
              this.$$r = !1;
            });
          })));
        for (let e in this.$$l)
          for (let t of this.$$l[e]) {
            let n = this.$$c.$on(e, t);
            this.$$l_u.set(t, n);
          }
        this.$$l = {};
      }
    }
    attributeChangedCallback(e, t, n) {
      this.$$r ||
        ((e = this.$$g_p(e)),
        (this.$$d[e] = pr(e, n, this.$$p_d, 'toProp')),
        this.$$c?.$set({ [e]: this.$$d[e] }));
    }
    disconnectedCallback() {
      ((this.$$cn = !1),
        Promise.resolve().then(() => {
          !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), (this.$$c = void 0));
        }));
    }
    $$g_p(e) {
      return (
        o(this.$$p_d).find(
          (t) =>
            this.$$p_d[t].attribute === e || (!this.$$p_d[t].attribute && t.toLowerCase() === e),
        ) || e
      );
    }
  });
function pr(e, t, n, r) {
  let i = n[e]?.type;
  if (((t = i === 'Boolean' && typeof t != 'boolean' ? t != null : t), !r || !n[e])) return t;
  if (r === 'toAttribute')
    switch (i) {
      case 'Object':
      case 'Array':
        return t == null ? null : JSON.stringify(t);
      case 'Boolean':
        return t ? '' : null;
      case 'Number':
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case 'Object':
      case 'Array':
        return t && JSON.parse(t);
      case 'Boolean':
        return t;
      case 'Number':
        return t == null ? t : +t;
      default:
        return t;
    }
}
function mr(e) {
  let t = {};
  return (
    e.childNodes.forEach((e) => {
      t[e.slot || 'default'] = !0;
    }),
    t
  );
}
function hr(e, t, n, r, i, a) {
  let l = class extends fr {
    constructor() {
      (super(e, n, i), (this.$$p_d = t));
    }
    static get observedAttributes() {
      return o(t).map((e) => (t[e].attribute || e).toLowerCase());
    }
  };
  return (
    o(t).forEach((e) => {
      s(l.prototype, e, {
        get() {
          return this.$$c && e in this.$$c ? this.$$c[e] : this.$$d[e];
        },
        set(n) {
          ((n = pr(e, n, t)), (this.$$d[e] = n));
          var r = this.$$c;
          r && (c(r, e)?.get ? (r[e] = n) : r.$set({ [e]: n }));
        },
      });
    }),
    r.forEach((e) => {
      s(l.prototype, e, {
        get() {
          return this.$$c?.[e];
        },
      });
    }),
    a && (l = a(l)),
    (e.element = l),
    l
  );
}
//#endregion
//#region node_modules/svelte/src/reactivity/date.js
var gr = !1,
  _r = class e extends Date {
    #e = /* @__PURE__ */ P(super.getTime());
    #t = /* @__PURE__ */ new Map();
    #n = H;
    constructor(...e) {
      (super(...e), gr || this.#r());
    }
    #r() {
      gr = !0;
      var t = e.prototype,
        n = Date.prototype,
        r = Object.getOwnPropertyNames(n);
      for (let e of r)
        ((e.startsWith('get') || e.startsWith('to') || e === 'valueOf') &&
          (t[e] = function (...t) {
            if (t.length > 0) return ($(this.#e), n[e].apply(this, t));
            var r = this.#t.get(e);
            if (r === void 0) {
              let i = H;
              (W(this.#n),
                (r = /* @__PURE__ */ lt(() => ($(this.#e), n[e].apply(this, t)))),
                this.#t.set(e, r),
                W(i));
            }
            return $(r);
          }),
          e.startsWith('set') &&
            (t[e] = function (...t) {
              var r = n[e].apply(this, t);
              return (F(this.#e, n.getTime.call(this)), r);
            }));
    }
  },
  vr = (e) => {
    var t = yr();
    (Ne(2), Yn(e, t));
  },
  yr = /* @__PURE__ */ Jn(
    '<span class="size-2 bg-(--color-ds-clock-dot)"></span> <span class="size-2 bg-(--color-ds-clock-dot)"></span>',
    1,
  ),
  br = /* @__PURE__ */ Jn(
    '<div class="relative size-[194px] border-2 border-black bg-white/50"><div class="absolute top-0 left-0 z-10 grid size-full place-content-center"><div class="relative flex size-[10px] items-end justify-center bg-(--color-ds-clock-center)"><div class="absolute bottom-0.5 -z-10 ml-[6px] h-12 w-1 origin-bottom bg-(--color-ds-clock-dot)"></div> <div class="absolute bottom-0.5 -z-10 ml-1.5 h-16 w-1 origin-bottom bg-(--color-ds-clock-dot)"></div> <div class="absolute bottom-0.5 -z-10 ml-1.5 h-18 w-1 origin-bottom bg-(--color)"></div></div></div> <div class="absolute top-0 left-1 flex size-full flex-col items-center justify-between font-(--font-clock) text-xl leading-none tracking-tighter text-(--color-ds-clock-text)"><span class="pt-[10px]">12</span> <div class="flex w-full justify-between px-0.5"><span>9</span> <span class="pr-1">3</span></div> <span class="pb-0.5">6</span></div> <div class="absolute flex size-full flex-col items-center"><div class="flex h-1/5 w-1/2 items-center justify-between"><!></div> <div class="flex h-1/5 w-5/6 items-center justify-between"><!></div> <hr class="h-1/4"/> <div class="flex h-1/5 w-5/6 items-center justify-between"><!></div> <div class="flex h-1/5 w-1/2 items-center justify-between"><!></div></div></div>',
  ),
  xr = {
    hash: 'svelte-1sqqx46',
    code: ':host {\r\n		/* slate default */--color: #61829a;}:root {--color: #61829a;--color-ds-clock-center: #494949;--color-ds-clock-dot: #797979;--color-ds-clock-text: #b2b2b2;}',
  };
function Sr(e, t) {
  (Be(t, !0), ir(e, xr));
  let n = new _r(),
    r = /* @__PURE__ */ P(Vt(n.getSeconds()));
  an(() => {
    let e = setInterval(() => {
      (F(r, $(r) + 1), $(r) >= 60 && (n.setTime(Date.now()), F(r, n.getSeconds(), !0)));
    }, 1e3);
    return () => {
      clearInterval(e);
    };
  });
  var i = br();
  lr(i, '', {}, { 'box-shadow': '0px 0px 0px 2px #d3d3d3,0px 0px 0px 4px #e3e3e3' });
  var a = L(i),
    o = L(a),
    s = L(o);
  let c;
  var l = Yt(s, 2);
  let u;
  var d = Yt(l, 2);
  let f;
  (S(o), S(a));
  var p = Yt(a, 4),
    m = L(p);
  (vr(L(m)), S(m));
  var h = Yt(m, 2);
  (vr(L(h)), S(h));
  var g = Yt(h, 4);
  (vr(L(g)), S(g));
  var _ = Yt(g, 2);
  (vr(L(_)),
    S(_),
    S(p),
    S(i),
    fn(
      (e, t) => {
        ((c = lr(s, '', c, e)),
          (u = lr(l, '', u, t)),
          (f = lr(d, '', f, { rotate: `${$(r) / 60}turn` })));
      },
      [
        () => ({ rotate: `${(n.getHours() % 12) / 12 + (1 / 12) * (n.getMinutes() / 60)}turn` }),
        () => ({ rotate: `${n.getMinutes() / 60}turn` }),
      ],
    ),
    Yn(e, i),
    Ve());
}
customElements.define(
  'ds-clock',
  hr(
    Sr,
    {
      hideBorder: {
        attribute: 'hide-border',
        reflect: !0,
        type: 'String',
      },
    },
    [],
    [],
  ),
);
//#endregion
export { Sr as DSClock };
