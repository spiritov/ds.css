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
		reject: t
	};
}
var g = 1024,
	_ = 2048,
	v = 4096,
	y = 8192,
	ee = 16384,
	b = 32768,
	x = 1 << 25,
	te = 65536,
	S = 1 << 19,
	ne = 1 << 20,
	re = 1 << 25,
	ie = 65536,
	ae = 1 << 21,
	oe = 1 << 22,
	se = 1 << 23,
	ce = Symbol('$state'),
	le = Symbol('legacy props'),
	ue = Symbol('attributes'),
	de = Symbol('class'),
	fe = Symbol('style'),
	pe = Symbol('text'),
	me = new (class extends Error {
		name = 'StaleReactionError';
		message = 'The reaction that called `getAbortSignal()` was re-run or destroyed';
	})();
globalThis.document?.contentType;
//#endregion
//#region node_modules/svelte/src/internal/client/errors.js
function he() {
	throw Error('https://svelte.dev/e/async_derived_orphan');
}
function ge(e, t, n) {
	throw Error('https://svelte.dev/e/each_key_duplicate');
}
function _e(e) {
	throw Error('https://svelte.dev/e/effect_in_teardown');
}
function ve() {
	throw Error('https://svelte.dev/e/effect_in_unowned_derived');
}
function ye(e) {
	throw Error('https://svelte.dev/e/effect_orphan');
}
function be() {
	throw Error('https://svelte.dev/e/effect_update_depth_exceeded');
}
function xe() {
	throw Error('https://svelte.dev/e/hydration_failed');
}
function Se() {
	throw Error('https://svelte.dev/e/state_descriptors_fixed');
}
function Ce() {
	throw Error('https://svelte.dev/e/state_prototype_fixed');
}
function we() {
	throw Error('https://svelte.dev/e/state_unsafe_mutation');
}
function Te() {
	throw Error('https://svelte.dev/e/svelte_boundary_reset_onerror');
}
function Ee() {
	console.warn('https://svelte.dev/e/derived_inert');
}
function De(e) {
	console.warn('https://svelte.dev/e/hydration_mismatch');
}
function Oe() {
	console.warn('https://svelte.dev/e/svelte_boundary_reset_noop');
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/hydration.js
var C = !1;
function w(e) {
	C = e;
}
var T;
function E(t) {
	if (t === null) throw (De(), e);
	return (T = t);
}
function ke() {
	return E(/* @__PURE__ */ R(T));
}
function D(t) {
	if (C) {
		if (/* @__PURE__ */ R(T) !== null) throw (De(), e);
		T = t;
	}
}
function Ae(e = 1) {
	if (C) {
		for (var t = e, n = T; t--;) n = /* @__PURE__ */ R(n);
		T = n;
	}
}
function je(e = !0) {
	for (var t = 0, n = T; ;) {
		if (n.nodeType === 8) {
			var r = n.data;
			if (r === ']') {
				if (t === 0) return n;
				--t;
			} else (r === '[' || r === '[!' || (r[0] === '[' && !isNaN(Number(r.slice(1))))) && (t += 1);
		}
		var i = /* @__PURE__ */ R(n);
		(e && n.remove(), (n = i));
	}
}
function Me(t) {
	if (!t || t.nodeType !== 8) throw (De(), e);
	return t.data;
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/equality.js
function Ne(e) {
	return e === this.v;
}
function Pe(e, t) {
	return e == e ? e !== t || (typeof e == 'object' && !!e) || typeof e == 'function' : t == t;
}
function Fe(e) {
	return !Pe(e, this.v);
}
//#endregion
//#region node_modules/svelte/src/internal/flags/index.js
var O = !1,
	Ie = !1,
	k = null;
function Le(e) {
	k = e;
}
function Re(e, t = !1, n) {
	k = {
		p: k,
		i: !1,
		c: null,
		e: null,
		s: e,
		x: null,
		r: q,
		l:
			Ie && !t
				? {
						s: null,
						u: null,
						$: []
					}
				: null
	};
}
function ze(e) {
	var t = k,
		n = t.e;
	if (n !== null) {
		t.e = null;
		for (var r of n) sn(r);
	}
	return (e !== void 0 && (t.x = e), (t.i = !0), (k = t.p), e ?? {});
}
function Be() {
	return !Ie || (k !== null && k.l === null);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/task.js
var Ve = [];
function He() {
	var e = Ve;
	((Ve = []), m(e));
}
function Ue(e) {
	if (Ve.length === 0 && !yt) {
		var t = Ve;
		queueMicrotask(() => {
			t === Ve && He();
		});
	}
	Ve.push(e);
}
function We() {
	for (; Ve.length > 0;) He();
}
function Ge(e) {
	var t = q;
	if (t === null) return ((W.f |= se), e);
	if (!(t.f & 32768) && !(t.f & 4)) throw e;
	A(e, t);
}
function A(e, t) {
	if (!(t !== null && t.f & 16384)) {
		for (; t !== null;) {
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
var Ke = ~(_ | v | g);
function j(e, t) {
	e.f = (e.f & Ke) | t;
}
function qe(e) {
	e.f & 512 || e.deps === null ? j(e, g) : j(e, v);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/utils.js
function Je(e) {
	if (e !== null) for (let t of e) !(t.f & 2) || !(t.f & 65536) || ((t.f ^= ie), Je(t.deps));
}
function Ye(e, t, n) {
	(e.f & 2048 ? t.add(e) : e.f & 4096 && n.add(e), Je(e.deps), j(e, g));
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/store.js
var Xe = !1;
//#endregion
//#region node_modules/svelte/src/reactivity/create-subscriber.js
function Ze(e) {
	let t = 0,
		n = Lt(0),
		r;
	return () => {
		rn() &&
			($(n),
			fn(
				() => (
					t === 0 && (r = Wn(() => e(() => Vt(n)))),
					(t += 1),
					() => {
						Ue(() => {
							(--t, t === 0 && (r?.(), (r = void 0), Vt(n)));
						});
					}
				)
			));
	};
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var Qe = te | S;
function $e(e, t, n, r) {
	new et(e, t, n, r);
}
var et = class {
	parent;
	is_pending = !1;
	transform_error;
	#e;
	#t = C ? T : null;
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
	#h = Ze(
		() => (
			(this.#m = Lt(this.#l)),
			() => {
				this.#m = null;
			}
		)
	);
	constructor(e, t, n, r) {
		((this.#e = e),
			(this.#n = t),
			(this.#r = (e) => {
				var t = q;
				((t.b = this), (t.f |= 128), n(e));
			}),
			(this.parent = q.b),
			(this.transform_error = r ?? this.parent?.transform_error ?? ((e) => e)),
			(this.#i = mn(() => {
				if (C) {
					let e = this.#t;
					ke();
					let t = e.data === '[!';
					if (e.data.startsWith('[?')) {
						let t = JSON.parse(e.data.slice(2));
						this.#_(t);
					} else t ? this.#v() : this.#g();
				} else this.#y();
			}, Qe)),
			C && (this.#e = T));
	}
	#g() {
		try {
			this.#a = H(() => this.#r(this.#e));
		} catch (e) {
			this.error(e);
		}
	}
	#_(e) {
		let t = this.#n.failed;
		t &&
			(this.#s = H(() => {
				t(
					this.#e,
					() => e,
					() => () => {}
				);
			}));
	}
	#v() {
		let e = this.#n.pending;
		e &&
			((this.is_pending = !0),
			(this.#o = H(() => e(this.#e))),
			Ue(() => {
				var e = (this.#c = document.createDocumentFragment()),
					t = L();
				(e.append(t),
					(this.#a = this.#x(() => H(() => this.#r(t)))),
					this.#u === 0 &&
						(this.#e.before(e),
						(this.#c = null),
						bn(this.#o, () => {
							this.#o = null;
						}),
						this.#b(M)));
			}));
	}
	#y() {
		try {
			if (
				((this.is_pending = this.has_pending_snippet()),
				(this.#u = 0),
				(this.#l = 0),
				(this.#a = H(() => {
					this.#r(this.#e);
				})),
				this.#u > 0)
			) {
				var e = (this.#c = document.createDocumentFragment());
				wn(this.#a, e);
				let t = this.#n.pending;
				this.#o = H(() => t(this.#e));
			} else this.#b(M);
		} catch (e) {
			this.error(e);
		}
	}
	#b(e) {
		((this.is_pending = !1), e.transfer_effects(this.#f, this.#p));
	}
	defer_effect(e) {
		Ye(e, this.#f, this.#p);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#n.pending;
	}
	#x(e) {
		var t = q,
			n = W,
			r = k;
		(J(this.#i), K(this.#i), Le(this.#i.ctx));
		try {
			return (Tt.ensure(), e());
		} catch (e) {
			return (Ge(e), null);
		} finally {
			(J(t), K(n), Le(r));
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
					bn(this.#o, () => {
						this.#o = null;
					}),
				(this.#c &&= (this.#e.before(this.#c), null))));
	}
	update_pending_count(e, t) {
		(this.#S(e, t),
			(this.#l += e),
			!(!this.#m || this.#d) &&
				((this.#d = !0),
				Ue(() => {
					((this.#d = !1), this.#m && zt(this.#m, this.#l));
				})));
	}
	get_effect_pending() {
		return (this.#h(), $(this.#m));
	}
	error(e) {
		if (!this.#n.onerror && !this.#n.failed) throw e;
		M?.is_fork
			? (this.#a && M.skip_effect(this.#a),
				this.#o && M.skip_effect(this.#o),
				this.#s && M.skip_effect(this.#s),
				M.oncommit(() => {
					this.#C(e);
				}))
			: this.#C(e);
	}
	#C(e) {
		((this.#a &&= (U(this.#a), null)),
			(this.#o &&= (U(this.#o), null)),
			(this.#s &&= (U(this.#s), null)),
			C && (E(this.#t), Ae(), E(je())));
		var t = this.#n.onerror;
		let n = this.#n.failed;
		var r = !1,
			i = !1;
		let a = () => {
				if (r) {
					Oe();
					return;
				}
				((r = !0),
					i && Te(),
					this.#s !== null &&
						bn(this.#s, () => {
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
					A(e, this.#i && this.#i.parent);
				}
				n &&
					(this.#s = this.#x(() => {
						try {
							return H(() => {
								var t = q;
								((t.b = this),
									(t.f |= 128),
									n(
										this.#e,
										() => e,
										() => a
									));
							});
						} catch (e) {
							return (A(e, this.#i.parent), null);
						}
					}));
			};
		Ue(() => {
			var t;
			try {
				t = this.transform_error(e);
			} catch (e) {
				A(e, this.#i && this.#i.parent);
				return;
			}
			typeof t == 'object' && t && typeof t.then == 'function'
				? t.then(o, (e) => A(e, this.#i && this.#i.parent))
				: o(t);
		});
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/async.js
function tt(e, t, n, r) {
	let i = Be() ? at : lt;
	var a = e.filter((e) => !e.settled),
		o = t.map(i);
	if (n.length === 0 && a.length === 0) {
		r(o);
		return;
	}
	var s = q,
		c = nt(),
		l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((e) => e.promise)) : null;
	function u(e) {
		if (!(s.f & 16384)) {
			c();
			try {
				r([...o, ...e]);
			} catch (e) {
				A(e, s);
			}
			rt();
		}
	}
	var d = it();
	if (n.length === 0) {
		l.then(() => u([])).finally(d);
		return;
	}
	function f() {
		Promise.all(n.map((e) => /* @__PURE__ */ st(e)))
			.then(u)
			.catch((e) => A(e, s))
			.finally(d);
	}
	l
		? l.then(() => {
				(c(), f(), rt());
			})
		: f();
}
function nt() {
	var e = q,
		t = W,
		n = k,
		r = M;
	return function (i = !0) {
		(J(e), K(t), Le(n), i && !(e.f & 16384) && (r?.activate(), r?.apply()));
	};
}
function rt(e = !0) {
	(J(null), K(null), Le(null), e && M?.deactivate());
}
function it() {
	var e = q,
		t = e.b,
		n = M,
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
function at(e) {
	var n = 2 | _;
	return (
		q !== null && (q.f |= S),
		{
			ctx: k,
			deps: null,
			effects: null,
			equals: Ne,
			f: n,
			fn: e,
			reactions: null,
			rv: 0,
			v: t,
			wv: 0,
			parent: q,
			ac: null
		}
	);
}
var ot = Symbol('obsolete');
/*#__NO_SIDE_EFFECTS__*/
function st(e, n, r) {
	let i = q;
	i === null && he();
	var a = void 0,
		o = Lt(t),
		s = !W,
		c = /* @__PURE__ */ new Set();
	return (
		dn(() => {
			var t = q,
				n = h();
			a = n.promise;
			try {
				Promise.resolve(e())
					.then(n.resolve, (e) => {
						e !== me && n.reject(e);
					})
					.finally(rt);
			} catch (e) {
				(n.reject(e), rt());
			}
			var r = M;
			if (s) {
				if (t.f & 32768) var l = it();
				if (i.b?.is_rendered()) r.async_deriveds.get(t)?.reject(ot);
				else for (let e of c.values()) e.reject(ot);
				(c.add(n), r.async_deriveds.set(t, n));
			}
			let u = (e, t = void 0) => {
				(l?.(),
					c.delete(n),
					t !== ot &&
						(r.activate(),
						t ? ((o.f |= se), zt(o, t)) : (o.f & 8388608 && (o.f ^= se), zt(o, e)),
						r.deactivate()));
			};
			n.promise.then(u, (e) => u(null, e || 'unknown'));
		}),
		an(() => {
			for (let e of c) e.reject(ot);
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
function ct(e) {
	let t = /* @__PURE__ */ at(e);
	return (O || kn(t), t);
}
/*#__NO_SIDE_EFFECTS__*/
function lt(e) {
	let t = /* @__PURE__ */ at(e);
	return ((t.equals = Fe), t);
}
function ut(e) {
	var t = e.effects;
	if (t !== null) {
		e.effects = null;
		for (var n = 0; n < t.length; n += 1) U(t[n]);
	}
}
function dt(e) {
	var n,
		r = q,
		i = e.parent;
	if (!Dn && i !== null && e.v !== t && i.f & 24576) return (Ee(), e.v);
	J(i);
	try {
		((e.f &= ~ie), ut(e), (n = Rn(e)));
	} finally {
		J(r);
	}
	return n;
}
function ft(e) {
	var t = dt(e);
	if (
		!e.equals(t) &&
		((e.wv = Fn()),
		(!M?.is_fork || e.deps === null) &&
			(M === null ? (e.v = t) : (M.capture(e, t, !0), _t?.capture(e, t, !0)), e.deps === null))
	) {
		j(e, g);
		return;
	}
	Dn || (N === null ? qe(e) : (rn() || M?.is_fork) && N.set(e, t));
}
function pt(e) {
	if (e.effects !== null)
		for (let t of e.effects)
			(t.teardown || t.ac) &&
				(t.teardown?.(),
				t.ac?.abort(me),
				t.fn !== null && (t.teardown = p),
				(t.ac = null),
				Bn(t, 0),
				gn(t));
}
function mt(e) {
	if (e.effects !== null) for (let t of e.effects) t.teardown && t.fn !== null && Vn(t);
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/batch.js
var ht = null,
	gt = null,
	M = null,
	_t = null,
	N = null,
	vt = null,
	yt = !1,
	bt = !1,
	xt = null,
	St = null,
	Ct = 0,
	wt = 1,
	Tt = class e {
		id = wt++;
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
			(gt === null ? (ht = gt = this) : ((gt.#n = this), (this.#t = gt)), (gt = this));
		}
		#h() {
			if (this.is_fork) return !0;
			for (let n of this.#o.keys()) {
				for (var e = n, t = !1; e.parent !== null;) {
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
					m: []
				}),
				this.#p.delete(e));
		}
		unskip_effect(e, t = (e) => this.schedule(e)) {
			var n = this.#f.get(e);
			if (n) {
				this.#f.delete(e);
				for (var r of n.d) (j(r, _), t(r));
				for (r of n.m) (j(r, v), t(r));
			}
			this.#p.add(e);
		}
		#g() {
			((this.#e = !0), Ct++ > 1e3 && (this.#S(), Dt()));
			for (let e of this.#u) (this.#d.delete(e), j(e, _), this.schedule(e));
			for (let e of this.#d) (j(e, v), this.schedule(e));
			let t = this.#c;
			((this.#c = []), this.apply());
			var n = (xt = []),
				r = [],
				i = (St = []);
			for (let e of t)
				try {
					this.#_(e, n, r);
				} catch (t) {
					throw (Nt(e), this.#h() || this.discard(), t);
				}
			if (((M = null), i.length > 0)) {
				var a = e.ensure();
				for (let e of i) a.schedule(e);
			}
			if (((xt = null), (St = null), this.#h())) {
				(this.#b(r), this.#b(n));
				for (let [e, t] of this.#f) Mt(e, t);
				i.length > 0 && M.#g();
				return;
			}
			let o = this.#v();
			if (o) {
				(this.#b(r), this.#b(n), o.#y(this));
				return;
			}
			(this.#u.clear(), this.#d.clear());
			for (let e of this.#r) e(this);
			(this.#r.clear(), (_t = this), Ot(r), Ot(n), (_t = null), this.#s?.resolve());
			var s = M;
			if (
				(this.#a === 0 &&
					(this.#c.length === 0 || s !== null) &&
					(this.#S(), O && (this.#x(), (M = s))),
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
			for (var r = e.first; r !== null;) {
				var i = r.f,
					a = (i & 96) != 0;
				if (!((a && i & 1024) || i & 8192 || this.#f.has(r)) && r.fn !== null) {
					a
						? (r.f ^= g)
						: i & 4
							? t.push(r)
							: O && i & 16777224
								? n.push(r)
								: In(r) && (i & 16 && this.#d.add(r), Vn(r));
					var o = r.first;
					if (o !== null) {
						r = o;
						continue;
					}
				}
				for (; r !== null;) {
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
			for (var e = this.#t; e !== null;) {
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
								(this.#d.delete(i), j(i, _), this.schedule(i));
						}
					}
			};
			for (let e of this.current.keys()) t(e);
			(this.oncommit(() => e.discard()), e.#S(), (M = this), this.#g());
		}
		#b(e) {
			for (var t = 0; t < e.length; t += 1) Ye(e[t], this.#u, this.#d);
		}
		capture(e, n, r = !1) {
			(e.v !== t && !this.previous.has(e) && this.previous.set(e, e.v),
				e.f & 8388608 || (this.current.set(e, [n, r]), N?.set(e, n)),
				this.is_fork || (e.v = n));
		}
		activate() {
			M = this;
		}
		deactivate() {
			((M = null), (N = null));
		}
		flush() {
			try {
				((bt = !0), (M = this), this.#g());
			} finally {
				((Ct = 0),
					(vt = null),
					(xt = null),
					(St = null),
					(bt = !1),
					(M = null),
					(N = null),
					Ft.clear());
			}
		}
		discard() {
			for (let e of this.#i) e(this);
			this.#i.clear();
			for (let e of this.async_deriveds.values()) e.reject(ot);
			(this.#S(), this.#s?.resolve());
		}
		register_created_effect(e) {
			this.#l.push(e);
		}
		#x() {
			for (let u = ht; u !== null; u = u.#n) {
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
						for (var s of t) kt(s, i, a, o);
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
									At(e, c, o) &&
									(e.f & 4194320 ? (j(e, _), u.schedule(e)) : u.#u.add(e));
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
				Ue(() => {
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
			if (M === null) {
				let t = (M = new e());
				!bt &&
					!yt &&
					Ue(() => {
						t.#e || t.flush();
					});
			}
			return M;
		}
		apply() {
			if (!O || (!this.is_fork && this.#t === null && this.#n === null)) {
				N = null;
				return;
			}
			N = /* @__PURE__ */ new Map();
			for (let [e, [t]] of this.current) N.set(e, t);
			for (let t = ht; t !== null; t = t.#n)
				if (!(t === this || t.is_fork)) {
					var e = !1;
					if (t.id < this.id) {
						for (let [n, [, r]] of t.current)
							if (!r && this.current.has(n)) {
								e = !0;
								break;
							}
					}
					if (!e) for (let [e, n] of t.previous) N.has(e) || N.set(e, n);
				}
		}
		schedule(e) {
			if (((vt = e), e.b?.is_pending && e.f & 16777228 && !(e.f & 32768))) {
				e.b.defer_effect(e);
				return;
			}
			for (var t = e; t.parent !== null;) {
				t = t.parent;
				var n = t.f;
				if (xt !== null && t === q && (O || ((W === null || !(W.f & 2)) && !Xe))) return;
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
				(e === null ? (ht = t) : (e.#n = t),
					t === null ? (gt = e) : (t.#t = e),
					(this.linked = !1));
			}
		}
	};
function Et(e) {
	var t = yt;
	yt = !0;
	try {
		var n;
		for (e && (M !== null && !M.is_fork && M.flush(), (n = e())); ;) {
			if ((We(), M === null)) return n;
			M.flush();
		}
	} finally {
		yt = t;
	}
}
function Dt() {
	try {
		be();
	} catch (e) {
		A(e, vt);
	}
}
var P = null;
function Ot(e) {
	var t = e.length;
	if (t !== 0) {
		for (var n = 0; n < t;) {
			var r = e[n++];
			if (
				!(r.f & 24576) &&
				In(r) &&
				((P = /* @__PURE__ */ new Set()),
				Vn(r),
				r.deps === null &&
					r.first === null &&
					r.nodes === null &&
					r.teardown === null &&
					r.ac === null &&
					yn(r),
				P?.size > 0)
			) {
				Ft.clear();
				for (let e of P) {
					if (e.f & 24576) continue;
					let t = [e],
						n = e.parent;
					for (; n !== null;) (P.has(n) && (P.delete(n), t.push(n)), (n = n.parent));
					for (let e = t.length - 1; e >= 0; e--) {
						let n = t[e];
						n.f & 24576 || Vn(n);
					}
				}
				P.clear();
			}
		}
		P = null;
	}
}
function kt(e, t, n, r) {
	if (!n.has(e) && (n.add(e), e.reactions !== null))
		for (let i of e.reactions) {
			let e = i.f;
			e & 2 ? kt(i, t, n, r) : e & 4194320 && !(e & 2048) && At(i, t, r) && (j(i, _), jt(i));
		}
}
function At(e, t, n) {
	let r = n.get(e);
	if (r !== void 0) return r;
	if (e.deps !== null)
		for (let r of e.deps) {
			if (i.call(t, r)) return !0;
			if (r.f & 2 && At(r, t, n)) return (n.set(r, !0), !0);
		}
	return (n.set(e, !1), !1);
}
function jt(e) {
	M.schedule(e);
}
function Mt(e, t) {
	if (!(e.f & 32 && e.f & 1024)) {
		(e.f & 2048 ? t.d.push(e) : e.f & 4096 && t.m.push(e), j(e, g));
		for (var n = e.first; n !== null;) (Mt(n, t), (n = n.next));
	}
}
function Nt(e) {
	j(e, g);
	for (var t = e.first; t !== null;) (Nt(t), (t = t.next));
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/sources.js
var Pt = /* @__PURE__ */ new Set(),
	Ft = /* @__PURE__ */ new Map(),
	It = !1;
function Lt(e, t) {
	return {
		f: 0,
		v: e,
		reactions: null,
		equals: Ne,
		rv: 0,
		wv: 0
	};
}
/*#__NO_SIDE_EFFECTS__*/
function F(e, t) {
	let n = Lt(e, t);
	return (kn(n), n);
}
/*#__NO_SIDE_EFFECTS__*/
function Rt(e, t = !1, n = !0) {
	let r = Lt(e);
	return (t || (r.equals = Fe), Ie && n && k !== null && k.l !== null && (k.l.s ??= []).push(r), r);
}
function I(e, t, n = !1) {
	return (
		W !== null &&
			(!G || W.f & 131072) &&
			Be() &&
			W.f & 4325394 &&
			(Y === null || !Y.has(e)) &&
			we(),
		zt(e, n ? Ut(t) : t, St)
	);
}
function zt(e, t, n = null) {
	if (!e.equals(t)) {
		Ft.set(e, Dn ? t : e.v);
		var r = Tt.ensure();
		if ((r.capture(e, t), e.f & 2)) {
			let t = e;
			(e.f & 2048 && dt(t), N === null && qe(t));
		}
		((e.wv = Fn()),
			Ht(e, _, n),
			Be() && q !== null && q.f & 1024 && !(q.f & 96) && (Q === null ? An([e]) : Q.push(e)),
			!r.is_fork && Pt.size > 0 && !It && Bt());
	}
	return t;
}
function Bt() {
	It = !1;
	for (let e of Pt) {
		e.f & 1024 && j(e, v);
		let t;
		try {
			t = In(e);
		} catch {
			t = !0;
		}
		t && Vn(e);
	}
	Pt.clear();
}
function Vt(e) {
	I(e, e.v + 1);
}
function Ht(e, t, n) {
	var r = e.reactions;
	if (r !== null)
		for (var i = Be(), a = r.length, o = 0; o < a; o++) {
			var s = r[o],
				c = s.f;
			if (!(!i && s === q)) {
				var l = (c & _) === 0;
				if ((l && j(s, t), c & 131072)) Pt.add(s);
				else if (c & 2) {
					var u = s;
					(N?.delete(u),
						c & 65536 || (c & 512 && (q === null || !(q.f & 2097152)) && (s.f |= ie), Ht(u, v, n)));
				} else if (l) {
					var d = s;
					(c & 16 && P !== null && P.add(d), n === null ? jt(d) : n.push(d));
				}
			}
		}
}
function Ut(e) {
	if (typeof e != 'object' || !e || ce in e) return e;
	let r = d(e);
	if (r !== l && r !== u) return e;
	var i = /* @__PURE__ */ new Map(),
		a = n(e),
		o = /* @__PURE__ */ F(0),
		s = null,
		f = Nn,
		p = (e) => {
			if (Nn === f) return e();
			var t = W,
				n = Nn;
			(K(null), Pn(f));
			var r = e();
			return (K(t), Pn(n), r);
		};
	return (
		a && i.set('length', /* @__PURE__ */ F(e.length, s)),
		new Proxy(e, {
			defineProperty(e, t, n) {
				(!('value' in n) || n.configurable === !1 || n.enumerable === !1 || n.writable === !1) &&
					Se();
				var r = i.get(t);
				return (
					r === void 0
						? p(() => {
								var e = /* @__PURE__ */ F(n.value, s);
								return (i.set(t, e), e);
							})
						: I(r, n.value, !0),
					!0
				);
			},
			deleteProperty(e, n) {
				var r = i.get(n);
				if (r === void 0) {
					if (n in e) {
						let e = p(() => /* @__PURE__ */ F(t, s));
						(i.set(n, e), Vt(o));
					}
				} else (I(r, t), Vt(o));
				return !0;
			},
			get(n, r, a) {
				if (r === ce) return e;
				var o = i.get(r),
					l = r in n;
				if (
					(o === void 0 &&
						(!l || c(n, r)?.writable) &&
						((o = p(() => /* @__PURE__ */ F(Ut(l ? n[r] : t), s))), i.set(r, o)),
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
							writable: !0
						};
				}
				return r;
			},
			has(e, n) {
				if (n === ce) return !0;
				var r = i.get(n),
					a = (r !== void 0 && r.v !== t) || Reflect.has(e, n);
				return (r !== void 0 || (q !== null && (!a || c(e, n)?.writable))) &&
					(r === void 0 && ((r = p(() => /* @__PURE__ */ F(a ? Ut(e[n]) : t, s))), i.set(n, r)),
					$(r) === t)
					? !1
					: a;
			},
			set(e, n, r, l) {
				var u = i.get(n),
					d = n in e;
				if (a && n === 'length')
					for (var f = r; f < u.v; f += 1) {
						var m = i.get(f + '');
						m === void 0
							? f in e && ((m = p(() => /* @__PURE__ */ F(t, s))), i.set(f + '', m))
							: I(m, t);
					}
				if (u === void 0)
					(!d || c(e, n)?.writable) &&
						((u = p(() => /* @__PURE__ */ F(void 0, s))), I(u, Ut(r)), i.set(n, u));
				else {
					d = u.v !== t;
					var h = p(() => Ut(r));
					I(u, h);
				}
				var g = Reflect.getOwnPropertyDescriptor(e, n);
				if ((g?.set && g.set.call(l, r), !d)) {
					if (a && typeof n == 'string') {
						var _ = i.get('length'),
							v = Number(n);
						Number.isInteger(v) && v >= _.v && I(_, v + 1);
					}
					Vt(o);
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
				Ce();
			}
		})
	);
}
var Wt, Gt, Kt, qt;
function Jt() {
	if (Wt === void 0) {
		((Wt = window), (Gt = /Firefox/.test(navigator.userAgent)));
		var e = Element.prototype,
			t = Node.prototype,
			n = Text.prototype;
		((Kt = c(t, 'firstChild').get),
			(qt = c(t, 'nextSibling').get),
			f(e) && ((e[de] = void 0), (e[ue] = null), (e[fe] = void 0), (e.__e = void 0)),
			f(n) && (n[pe] = void 0));
	}
}
function L(e = '') {
	return document.createTextNode(e);
}
/*@__NO_SIDE_EFFECTS__*/
function Yt(e) {
	return Kt.call(e);
}
/*@__NO_SIDE_EFFECTS__*/
function R(e) {
	return qt.call(e);
}
function z(e, t) {
	if (!C) return /* @__PURE__ */ Yt(e);
	var n = /* @__PURE__ */ Yt(T);
	if (n === null) n = T.appendChild(L());
	else if (t && n.nodeType !== 3) {
		var r = L();
		return (n?.before(r), E(r), r);
	}
	return (t && $t(n), E(n), n);
}
function B(e, t = 1, n = !1) {
	let r = C ? T : e;
	for (var i; t--;) ((i = r), (r = /* @__PURE__ */ R(r)));
	if (!C) return r;
	if (n) {
		if (r?.nodeType !== 3) {
			var a = L();
			return (r === null ? i?.after(a) : r.before(a), E(a), a);
		}
		$t(r);
	}
	return (E(r), r);
}
function Xt(e) {
	e.textContent = '';
}
function Zt() {
	return !O || P !== null ? !1 : (q.f & b) !== 0;
}
function Qt(e, t, n) {
	return t == null || t === 'http://www.w3.org/1999/xhtml'
		? n
			? document.createElement(e, { is: n })
			: document.createElement(e)
		: n
			? document.createElementNS(t, e, { is: n })
			: document.createElementNS(t, e);
}
function $t(e) {
	if (e.nodeValue.length < 65536) return;
	let t = e.nextSibling;
	for (; t !== null && t.nodeType === 3;)
		(t.remove(), (e.nodeValue += t.nodeValue), (t = e.nextSibling));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function en(e) {
	var t = W,
		n = q;
	(K(null), J(null));
	try {
		return e();
	} finally {
		(K(t), J(n));
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/reactivity/effects.js
function tn(e) {
	(q === null && (W === null && ye(e), ve()), Dn && _e(e));
}
function nn(e, t) {
	var n = t.last;
	n === null ? (t.last = t.first = e) : ((n.next = e), (e.prev = n), (t.last = e));
}
function V(e, t) {
	var n = q;
	n !== null && n.f & 8192 && (e |= y);
	var r = {
		ctx: k,
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
		ac: null
	};
	M?.register_created_effect(r);
	var i = r;
	if (e & 4) xt === null ? Tt.ensure().schedule(r) : xt.push(r);
	else if (t !== null) {
		try {
			Vn(r);
		} catch (e) {
			throw (U(r), e);
		}
		i.deps === null &&
			i.teardown === null &&
			i.nodes === null &&
			i.first === i.last &&
			!(i.f & 524288) &&
			((i = i.first), e & 16 && e & 65536 && i !== null && (i.f |= te));
	}
	if (i !== null && ((i.parent = n), n !== null && nn(i, n), W !== null && W.f & 2 && !(e & 64))) {
		var a = W;
		(a.effects ??= []).push(i);
	}
	return r;
}
function rn() {
	return W !== null && !G;
}
function an(e) {
	let t = V(8, null);
	return (j(t, g), (t.teardown = e), t);
}
function on(e) {
	tn('$effect');
	var t = q.f;
	if (!W && t & 32 && k !== null && !k.i) {
		var n = k;
		(n.e ??= []).push(e);
	} else return sn(e);
}
function sn(e) {
	return V(4 | ne, e);
}
function cn(e) {
	Tt.ensure();
	let t = V(64 | S, e);
	return () => {
		U(t);
	};
}
function ln(e) {
	Tt.ensure();
	let t = V(64 | S, e);
	return (e = {}) =>
		new Promise((n) => {
			e.outro
				? bn(t, () => {
						(U(t), n(void 0));
					})
				: (U(t), n(void 0));
		});
}
function un(e) {
	return V(4, e);
}
function dn(e) {
	return V(oe | S, e);
}
function fn(e, t = 0) {
	return V(8 | t, e);
}
function pn(e, t = [], n = [], r = []) {
	tt(r, t, n, (t) => {
		V(8, () => {
			e(...t.map($));
		});
	});
}
function mn(e, t = 0) {
	return V(16 | t, e);
}
function H(e) {
	return V(32 | S, e);
}
function hn(e) {
	var t = e.teardown;
	if (t !== null) {
		let e = Dn,
			n = W;
		(On(!0), K(null));
		try {
			t.call(null);
		} finally {
			(On(e), K(n));
		}
	}
}
function gn(e, t = !1) {
	var n = e.first;
	for (e.first = e.last = null; n !== null;) {
		let e = n.ac;
		e !== null &&
			en(() => {
				e.abort(me);
			});
		var r = n.next;
		(n.f & 64 ? (n.parent = null) : U(n, t), (n = r));
	}
}
function _n(e) {
	for (var t = e.first; t !== null;) {
		var n = t.next;
		(t.f & 32 || U(t), (t = n));
	}
}
function U(e, t = !0) {
	var n = !1;
	((t || e.f & 262144) &&
		e.nodes !== null &&
		e.nodes.end !== null &&
		(vn(e.nodes.start, e.nodes.end), (n = !0)),
		(e.f |= x),
		gn(e, t && !n),
		Bn(e, 0));
	var r = e.nodes && e.nodes.t;
	if (r !== null) for (let e of r) e.stop();
	(hn(e), (e.f ^= x), (e.f |= ee));
	var i = e.parent;
	(i !== null && i.first !== null && yn(e),
		(e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null));
}
function vn(e, t) {
	for (; e !== null;) {
		var n = e === t ? null : /* @__PURE__ */ R(e);
		(e.remove(), (e = n));
	}
}
function yn(e) {
	var t = e.parent,
		n = e.prev,
		r = e.next;
	(n !== null && (n.next = r),
		r !== null && (r.prev = n),
		t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n)));
}
function bn(e, t, n = !0) {
	var r = [];
	xn(e, r, !0);
	var i = () => {
			(n && U(e), t && t());
		},
		a = r.length;
	if (a > 0) {
		var o = () => --a || i();
		for (var s of r) s.out(o);
	} else i();
}
function xn(e, t, n) {
	if (!(e.f & 8192)) {
		e.f ^= y;
		var r = e.nodes && e.nodes.t;
		if (r !== null) for (let e of r) (e.is_global || n) && t.push(e);
		for (var i = e.first; i !== null;) {
			var a = i.next;
			if (!(i.f & 64)) {
				var o = (i.f & 65536) != 0 || ((i.f & 32) != 0 && (e.f & 16) != 0);
				xn(i, t, o ? n : !1);
			}
			i = a;
		}
	}
}
function Sn(e) {
	Cn(e, !0);
}
function Cn(e, t) {
	if (e.f & 8192) {
		((e.f ^= y), e.f & 1024 || (j(e, _), Tt.ensure().schedule(e)));
		for (var n = e.first; n !== null;) {
			var r = n.next,
				i = (n.f & 65536) != 0 || (n.f & 32) != 0;
			(Cn(n, i ? t : !1), (n = r));
		}
		var a = e.nodes && e.nodes.t;
		if (a !== null) for (let e of a) (e.is_global || t) && e.in();
	}
}
function wn(e, t) {
	if (e.nodes)
		for (var n = e.nodes.start, r = e.nodes.end; n !== null;) {
			var i = n === r ? null : /* @__PURE__ */ R(n);
			(t.append(n), (n = i));
		}
}
//#endregion
//#region node_modules/svelte/src/internal/client/legacy.js
var Tn = null,
	En = !1,
	Dn = !1;
function On(e) {
	Dn = e;
}
var W = null,
	G = !1;
function K(e) {
	W = e;
}
var q = null;
function J(e) {
	q = e;
}
var Y = null;
function kn(e) {
	W !== null && (!O || W.f & 2) && (Y ??= /* @__PURE__ */ new Set()).add(e);
}
var X = null,
	Z = 0,
	Q = null;
function An(e) {
	Q = e;
}
var jn = 1,
	Mn = 0,
	Nn = Mn;
function Pn(e) {
	Nn = e;
}
function Fn() {
	return ++jn;
}
function In(e) {
	var t = e.f;
	if (t & 2048) return !0;
	if ((t & 2 && (e.f &= ~ie), t & 4096)) {
		for (var n = e.deps, r = n.length, i = 0; i < r; i++) {
			var a = n[i];
			if ((In(a) && ft(a), a.wv > e.wv)) return !0;
		}
		t & 512 && N === null && j(e, g);
	}
	return !1;
}
function Ln(e, t, n = !0) {
	var r = e.reactions;
	if (r !== null && !(!O && Y !== null && Y.has(e)))
		for (var i = 0; i < r.length; i++) {
			var a = r[i];
			a.f & 2 ? Ln(a, t, !1) : t === a && (n ? j(a, _) : a.f & 1024 && j(a, v), jt(a));
		}
}
function Rn(e) {
	var t = X,
		n = Z,
		r = Q,
		i = W,
		a = Y,
		o = k,
		s = G,
		c = Nn,
		l = e.f;
	((X = null),
		(Z = 0),
		(Q = null),
		(W = l & 96 ? null : e),
		(Y = null),
		Le(e.ctx),
		(G = !1),
		(Nn = ++Mn),
		e.ac !== null &&
			(en(() => {
				e.ac.abort(me);
			}),
			(e.ac = null)));
	try {
		e.f |= ae;
		var u = e.fn,
			d = u();
		e.f |= b;
		var f = e.deps,
			p = M?.is_fork;
		if (X !== null) {
			var m;
			if ((p || Bn(e, Z), f !== null && Z > 0))
				for (f.length = Z + X.length, m = 0; m < X.length; m++) f[Z + m] = X[m];
			else e.deps = f = X;
			if (rn() && e.f & 512) for (m = Z; m < f.length; m++) (f[m].reactions ??= []).push(e);
		} else !p && f !== null && Z < f.length && (Bn(e, Z), (f.length = Z));
		if (Be() && Q !== null && !G && f !== null && !(e.f & 6146))
			for (m = 0; m < Q.length; m++) Ln(Q[m], e);
		if (i !== null && i !== e) {
			if ((Mn++, i.deps !== null)) for (let e = 0; e < n; e += 1) i.deps[e].rv = Mn;
			if (t !== null) for (let e of t) e.rv = Mn;
			Q !== null && (r === null ? (r = Q) : r.push(...Q));
		}
		return (e.f & 8388608 && (e.f ^= se), d);
	} catch (e) {
		return Ge(e);
	} finally {
		((e.f ^= ae), (X = t), (Z = n), (Q = r), (W = i), (Y = a), Le(o), (G = s), (Nn = c));
	}
}
function zn(e, n) {
	let a = n.reactions;
	if (a !== null) {
		var o = r.call(a, e);
		if (o !== -1) {
			var s = a.length - 1;
			s === 0 ? (a = n.reactions = null) : ((a[o] = a[s]), a.pop());
		}
	}
	if (a === null && n.f & 2 && (X === null || !i.call(X, n))) {
		var c = n;
		(c.f & 512 && ((c.f ^= 512), (c.f &= ~ie)), c.v !== t && qe(c), pt(c), Bn(c, 0));
	}
}
function Bn(e, t) {
	var n = e.deps;
	if (n !== null) for (var r = t; r < n.length; r++) zn(e, n[r]);
}
function Vn(e) {
	var t = e.f;
	if (!(t & 16384)) {
		j(e, g);
		var n = q,
			r = En;
		((q = e), (En = !0));
		try {
			(t & 16777232 ? _n(e) : gn(e), hn(e));
			var i = Rn(e);
			((e.teardown = typeof i == 'function' ? i : null), (e.wv = jn));
		} finally {
			((En = r), (q = n));
		}
	}
}
function $(e) {
	var t = (e.f & 2) != 0;
	if ((Tn?.add(e), W !== null && !G && !(q !== null && q.f & 16384) && (Y === null || !Y.has(e)))) {
		var n = W.deps;
		if (W.f & 2097152)
			e.rv < Mn &&
				((e.rv = Mn),
				X === null && n !== null && n[Z] === e ? Z++ : X === null ? (X = [e]) : X.push(e));
		else {
			((W.deps ??= []), i.call(W.deps, e) || W.deps.push(e));
			var r = e.reactions;
			r === null ? (e.reactions = [W]) : i.call(r, W) || r.push(W);
		}
	}
	if (Dn && Ft.has(e)) return Ft.get(e);
	if (t) {
		var a = e;
		if (Dn) {
			var o = a.v;
			return (((!(a.f & 1024) && a.reactions !== null) || Un(a)) && (o = dt(a)), Ft.set(a, o), o);
		}
		var s = (a.f & 512) == 0 && !G && W !== null && (En || (W.f & 512) != 0),
			c = (a.f & b) === 0;
		(In(a) && (s && (a.f |= 512), ft(a)), s && !c && (mt(a), Hn(a)));
	}
	if (N?.has(e)) return N.get(e);
	if (e.f & 8388608) throw e.v;
	return e.v;
}
function Hn(e) {
	if (((e.f |= 512), e.deps !== null))
		for (let t of e.deps) ((t.reactions ??= []).push(e), t.f & 2 && !(t.f & 512) && (mt(t), Hn(t)));
}
function Un(e) {
	if (e.v === t) return !0;
	if (e.deps === null) return !1;
	for (let t of e.deps) if (Ft.has(t) || (t.f & 2 && Un(t))) return !0;
	return !1;
}
function Wn(e) {
	var t = G;
	try {
		return ((G = !0), e());
	} finally {
		G = t;
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/events.js
var Gn = Symbol('events'),
	Kn = /* @__PURE__ */ new Set(),
	qn = /* @__PURE__ */ new Set(),
	Jn = null;
function Yn(e) {
	var t = this,
		n = t.ownerDocument,
		r = e.type,
		i = e.composedPath?.() || [],
		a = i[0] || e.target;
	Jn = e;
	var o = 0,
		c = Jn === e && e[Gn];
	if (c) {
		var l = i.indexOf(c);
		if (l !== -1 && (t === document || t === window)) {
			e[Gn] = t;
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
			}
		});
		var d = W,
			f = q;
		(K(null), J(null));
		try {
			for (var p, m = []; a !== null && a !== t;) {
				try {
					var h = a[Gn]?.[r];
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
			((e[Gn] = t), delete e.currentTarget, K(d), J(f));
		}
	}
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/reconciler.js
var Xn =
	globalThis?.window?.trustedTypes &&
	/* @__PURE__ */ globalThis.window.trustedTypes.createPolicy('svelte-trusted-html', {
		createHTML: (e) => e
	});
function Zn(e) {
	return Xn?.createHTML(e) ?? e;
}
function Qn(e) {
	var t = Qt('template');
	return ((t.innerHTML = Zn(e.replaceAll('<!>', '<!---->'))), t.content);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/template.js
function $n(e, t) {
	var n = q;
	n.nodes === null &&
		(n.nodes = {
			start: e,
			end: t,
			a: null,
			t: null
		});
}
/*#__NO_SIDE_EFFECTS__*/
function er(e, t) {
	var n = (t & 1) != 0,
		r = (t & 2) != 0,
		i,
		a = !e.startsWith('<!>');
	return () => {
		if (C) return ($n(T, null), T);
		i === void 0 && ((i = Qn(a ? e : '<!>' + e)), n || (i = /* @__PURE__ */ Yt(i)));
		var t = r || Gt ? document.importNode(i, !0) : i.cloneNode(!0);
		if (n) {
			var o = /* @__PURE__ */ Yt(t),
				s = t.lastChild;
			$n(o, s);
		} else $n(t, t);
		return t;
	};
}
function tr(e, t) {
	if (C) {
		var n = q;
		((!(n.f & 32768) || n.nodes.end === null) && (n.nodes.end = T), ke());
		return;
	}
	e !== null && e.before(t);
}
[
	.../* @__PURE__ */ 'allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback'.split(
		'.'
	)
];
var nr = ['touchstart', 'touchmove'];
function rr(e) {
	return nr.includes(e);
}
function ir(e, t) {
	var n = t == null ? '' : typeof t == 'object' ? `${t}` : t;
	n !== (e[pe] ??= e.nodeValue) && ((e[pe] = n), (e.nodeValue = `${n}`));
}
function ar(e, t) {
	return cr(e, t);
}
function or(t, n) {
	(Jt(), (n.intro = n.intro ?? !1));
	let r = n.target,
		i = C,
		a = T;
	try {
		for (var o = /* @__PURE__ */ Yt(r); o && (o.nodeType !== 8 || o.data !== '[');)
			o = /* @__PURE__ */ R(o);
		if (!o) throw e;
		(w(!0), E(o));
		let i = cr(t, {
			...n,
			anchor: o
		});
		return (w(!1), i);
	} catch (i) {
		if (
			i instanceof Error &&
			i.message.split('\n').some((e) => e.startsWith('https://svelte.dev/e/'))
		)
			throw i;
		return (
			i !== e && console.warn('Failed to hydrate: ', i),
			n.recover === !1 && xe(),
			Jt(),
			Xt(r),
			w(!1),
			ar(t, n)
		);
	} finally {
		(w(i), E(a));
	}
}
var sr = /* @__PURE__ */ new Map();
function cr(
	t,
	{ target: n, anchor: r, props: i = {}, events: o, context: s, intro: c = !0, transformError: l }
) {
	Jt();
	var u = void 0,
		d = ln(() => {
			var c = r ?? n.appendChild(L());
			$e(
				c,
				{ pending: () => {} },
				(n) => {
					Re({});
					var r = k;
					if (
						(s && (r.c = s),
						o && (i.$$events = o),
						C && $n(n, null),
						(u = t(n, i) || {}),
						C && ((q.nodes.end = T), T === null || T.nodeType !== 8 || T.data !== ']'))
					)
						throw (De(), e);
					ze();
				},
				l
			);
			var d = /* @__PURE__ */ new Set(),
				f = (e) => {
					for (var t = 0; t < e.length; t++) {
						var r = e[t];
						if (!d.has(r)) {
							d.add(r);
							var i = rr(r);
							for (let e of [n, document]) {
								var a = sr.get(e);
								a === void 0 && ((a = /* @__PURE__ */ new Map()), sr.set(e, a));
								var o = a.get(r);
								o === void 0
									? (e.addEventListener(r, Yn, { passive: i }), a.set(r, 1))
									: a.set(r, o + 1);
							}
						}
					}
				};
			return (
				f(a(Kn)),
				qn.add(f),
				() => {
					for (var e of d)
						for (let r of [n, document]) {
							var t = sr.get(r),
								i = t.get(e);
							--i == 0
								? (r.removeEventListener(e, Yn), t.delete(e), t.size === 0 && sr.delete(r))
								: t.set(e, i);
						}
					(qn.delete(f), c !== r && c.parentNode?.removeChild(c));
				}
			);
		});
	return (lr.set(u, d), u);
}
var lr = /* @__PURE__ */ new WeakMap();
function ur(e, t) {
	let n = lr.get(e);
	return n ? (lr.delete(e), n(t)) : Promise.resolve();
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/branches.js
var dr = class {
	anchor;
	#e = /* @__PURE__ */ new Map();
	#t = /* @__PURE__ */ new Map();
	#n = /* @__PURE__ */ new Map();
	#r = /* @__PURE__ */ new Set();
	#i = !0;
	constructor(e, t = !0) {
		((this.anchor = e), (this.#i = t));
	}
	#a = (e) => {
		if (this.#e.has(e)) {
			var t = this.#e.get(e),
				n = this.#t.get(t);
			if (n) (Sn(n), this.#r.delete(t));
			else {
				var r = this.#n.get(t);
				r &&
					(Sn(r.effect),
					this.#t.set(t, r.effect),
					this.#n.delete(t),
					r.fragment.lastChild.remove(),
					this.anchor.before(r.fragment),
					(n = r.effect));
			}
			for (let [t, n] of this.#e) {
				if ((this.#e.delete(t), t === e)) break;
				let r = this.#n.get(n);
				r && (U(r.effect), this.#n.delete(n));
			}
			for (let [e, r] of this.#t) {
				if (e === t || this.#r.has(e)) continue;
				let i = () => {
					if (Array.from(this.#e.values()).includes(e)) {
						var t = document.createDocumentFragment();
						(wn(r, t),
							t.append(L()),
							this.#n.set(e, {
								effect: r,
								fragment: t
							}));
					} else U(r);
					(this.#r.delete(e), this.#t.delete(e));
				};
				this.#i || !n ? (this.#r.add(e), bn(r, i, !1)) : i();
			}
		}
	};
	#o = (e) => {
		this.#e.delete(e);
		let t = Array.from(this.#e.values());
		for (let [e, n] of this.#n) t.includes(e) || (U(n.effect), this.#n.delete(e));
	};
	ensure(e, t) {
		var n = M,
			r = Zt();
		if (t && !this.#t.has(e) && !this.#n.has(e))
			if (r) {
				var i = document.createDocumentFragment(),
					a = L();
				(i.append(a),
					this.#n.set(e, {
						effect: H(() => t(a)),
						fragment: i
					}));
			} else
				this.#t.set(
					e,
					H(() => t(this.anchor))
				);
		if ((this.#e.set(n, e), r)) {
			for (let [t, r] of this.#t) t === e ? n.unskip_effect(r) : n.skip_effect(r);
			for (let [t, r] of this.#n) t === e ? n.unskip_effect(r.effect) : n.skip_effect(r.effect);
			(n.oncommit(this.#a), n.ondiscard(this.#o));
		} else (C && (this.anchor = T), this.#a(n));
	}
};
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/if.js
function fr(e, t, n = !1) {
	var r;
	C && ((r = T), ke());
	var i = new dr(e),
		a = n ? te : 0;
	function o(e, t) {
		if (C) {
			var n = Me(r);
			if (e !== parseInt(n.substring(1))) {
				var a = je();
				(E(a), (i.anchor = a), w(!1), i.ensure(e, t), w(!0));
				return;
			}
		}
		i.ensure(e, t);
	}
	mn(() => {
		var e = !1;
		(t((t, n = 0) => {
			((e = !0), o(n, t));
		}),
			e || o(-1, null));
	}, a);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/blocks/each.js
function pr(e, t) {
	return t;
}
function mr(e, t, n) {
	for (var r = [], i = t.length, o, s = t.length, c = 0; c < i; c++) {
		let n = t[c];
		bn(
			n,
			() => {
				if (o) {
					if ((o.pending.delete(n), o.done.add(n), o.pending.size === 0)) {
						var t = e.outrogroups;
						(hr(e, a(o.done)), t.delete(o), t.size === 0 && (e.outrogroups = null));
					}
				} else --s;
			},
			!1
		);
	}
	if (s === 0) {
		var l = r.length === 0 && n !== null;
		if (l) {
			var u = n,
				d = u.parentNode;
			(Xt(d), d.append(u), e.items.clear());
		}
		hr(e, t, !l);
	} else
		((o = {
			pending: new Set(t),
			done: /* @__PURE__ */ new Set()
		}),
			(e.outrogroups ??= /* @__PURE__ */ new Set()).add(o));
}
function hr(e, t, n = !0) {
	var r;
	if (e.pending.size > 0) {
		r = /* @__PURE__ */ new Set();
		for (let t of e.pending.values()) for (let n of t) r.add(e.items.get(n).e);
	}
	for (var i = 0; i < t.length; i++) {
		var a = t[i];
		r?.has(a) ? ((a.f |= re), wn(a, document.createDocumentFragment())) : U(t[i], n);
	}
}
var gr;
function _r(e, t, r, i, o, s = null) {
	var c = e,
		l = /* @__PURE__ */ new Map();
	if (t & 4) {
		var u = e;
		c = C ? E(/* @__PURE__ */ Yt(u)) : u.appendChild(L());
	}
	C && ke();
	var d = null,
		f = /* @__PURE__ */ lt(() => {
			var e = r();
			return n(e) ? e : e == null ? [] : a(e);
		}),
		p,
		m = /* @__PURE__ */ new Map(),
		h = !0;
	function g(e) {
		v.effect.f & 16384 ||
			(v.pending.delete(e),
			(v.fallback = d),
			yr(v, p, c, t, i),
			d !== null &&
				(p.length === 0
					? d.f & 33554432
						? ((d.f ^= re), xr(d, null, c))
						: Sn(d)
					: bn(d, () => {
							d = null;
						})));
	}
	function _(e) {
		v.pending.delete(e);
	}
	var v = {
		effect: mn(() => {
			p = $(f);
			var e = p.length;
			let n = !1;
			C && (Me(c) === '[!') != (e === 0) && ((c = je()), E(c), w(!1), (n = !0));
			for (var a = /* @__PURE__ */ new Set(), u = M, v = Zt(), y = 0; y < e; y += 1) {
				C && T.nodeType === 8 && T.data === ']' && ((c = T), (n = !0), w(!1));
				var ee = p[y],
					b = i(ee, y),
					x = h ? null : l.get(b);
				(x
					? (x.v && zt(x.v, ee), x.i && zt(x.i, y), v && u.unskip_effect(x.e))
					: ((x = br(l, h ? c : (gr ??= L()), ee, b, y, o, t, r)), h || (x.e.f |= re), l.set(b, x)),
					a.add(b));
			}
			if (
				(e === 0 &&
					s &&
					!d &&
					(h ? (d = H(() => s(c))) : ((d = H(() => s((gr ??= L())))), (d.f |= re))),
				e > a.size && ge('', '', ''),
				C && e > 0 && E(je()),
				!h)
			)
				if ((m.set(u, a), v)) {
					for (let [e, t] of l) a.has(e) || u.skip_effect(t.e);
					(u.oncommit(g), u.ondiscard(_));
				} else g(u);
			(n && w(!0), $(f));
		}),
		flags: t,
		items: l,
		pending: m,
		outrogroups: null,
		fallback: d
	};
	((h = !1), C && (c = T));
}
function vr(e) {
	for (; e !== null && !(e.f & 32);) e = e.next;
	return e;
}
function yr(e, t, n, r, i) {
	var o = (r & 8) != 0,
		s = t.length,
		c = e.items,
		l = vr(e.effect.first),
		u,
		d = null,
		f,
		p = [],
		m = [],
		h,
		g,
		_,
		v;
	if (o)
		for (v = 0; v < s; v += 1)
			((h = t[v]),
				(g = i(h, v)),
				(_ = c.get(g).e),
				_.f & 33554432 || (_.nodes?.a?.measure(), (f ??= /* @__PURE__ */ new Set()).add(_)));
	for (v = 0; v < s; v += 1) {
		if (((h = t[v]), (g = i(h, v)), (_ = c.get(g).e), e.outrogroups !== null))
			for (let t of e.outrogroups) (t.pending.delete(_), t.done.delete(_));
		if (
			(_.f & 8192 &&
				(Sn(_), o && (_.nodes?.a?.unfix(), (f ??= /* @__PURE__ */ new Set()).delete(_))),
			_.f & 33554432)
		)
			if (((_.f ^= re), _ === l)) xr(_, null, n);
			else {
				var y = d ? d.next : l;
				(_ === e.effect.last && (e.effect.last = _.prev),
					_.prev && (_.prev.next = _.next),
					_.next && (_.next.prev = _.prev),
					Sr(e, d, _),
					Sr(e, _, y),
					xr(_, y, n),
					(d = _),
					(p = []),
					(m = []),
					(l = vr(d.next)));
				continue;
			}
		if (_ !== l) {
			if (u !== void 0 && u.has(_)) {
				if (p.length < m.length) {
					var ee = m[0],
						b;
					d = ee.prev;
					var x = p[0],
						te = p[p.length - 1];
					for (b = 0; b < p.length; b += 1) xr(p[b], ee, n);
					for (b = 0; b < m.length; b += 1) u.delete(m[b]);
					(Sr(e, x.prev, te.next),
						Sr(e, d, x),
						Sr(e, te, ee),
						(l = ee),
						(d = te),
						--v,
						(p = []),
						(m = []));
				} else
					(u.delete(_),
						xr(_, l, n),
						Sr(e, _.prev, _.next),
						Sr(e, _, d === null ? e.effect.first : d.next),
						Sr(e, d, _),
						(d = _));
				continue;
			}
			for (p = [], m = []; l !== null && l !== _;)
				((u ??= /* @__PURE__ */ new Set()).add(l), m.push(l), (l = vr(l.next)));
			if (l === null) continue;
		}
		(_.f & 33554432 || p.push(_), (d = _), (l = vr(_.next)));
	}
	if (e.outrogroups !== null) {
		for (let t of e.outrogroups)
			t.pending.size === 0 && (hr(e, a(t.done)), e.outrogroups?.delete(t));
		e.outrogroups.size === 0 && (e.outrogroups = null);
	}
	if (l !== null || u !== void 0) {
		var S = [];
		if (u !== void 0) for (_ of u) _.f & 8192 || S.push(_);
		for (; l !== null;) (!(l.f & 8192) && l !== e.fallback && S.push(l), (l = vr(l.next)));
		var ne = S.length;
		if (ne > 0) {
			var ie = r & 4 && s === 0 ? n : null;
			if (o) {
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.measure();
				for (v = 0; v < ne; v += 1) S[v].nodes?.a?.fix();
			}
			mr(e, S, ie);
		}
	}
	o &&
		Ue(() => {
			if (f !== void 0) for (_ of f) _.nodes?.a?.apply();
		});
}
function br(e, t, n, r, i, a, o, s) {
	var c = o & 1 ? (o & 16 ? Lt(n) : /* @__PURE__ */ Rt(n, !1, !1)) : null,
		l = o & 2 ? Lt(i) : null;
	return {
		v: c,
		i: l,
		e: H(
			() => (
				a(t, c ?? n, l ?? i, s),
				() => {
					e.delete(r);
				}
			)
		)
	};
}
function xr(e, t, n) {
	if (e.nodes)
		for (
			var r = e.nodes.start, i = e.nodes.end, a = t && !(t.f & 33554432) ? t.nodes.start : n;
			r !== null;
		) {
			var o = /* @__PURE__ */ R(r);
			if ((a.before(r), r === i)) return;
			r = o;
		}
}
function Sr(e, t, n) {
	(t === null ? (e.effect.first = n) : (t.next = n),
		n === null ? (e.effect.last = t) : (n.prev = t));
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/css.js
function Cr(e, t) {
	un(() => {
		var n = e.getRootNode(),
			r = n.host ? n : (n.head ?? n.ownerDocument.head);
		if (!r.querySelector('#' + t.hash)) {
			let e = Qt('style');
			((e.id = t.hash), (e.textContent = t.code), r.appendChild(e));
		}
	});
}
//#endregion
//#region node_modules/svelte/src/internal/shared/attributes.js
var wr = [...' 	\n\r\f\xA0\v﻿'];
function Tr(e, t, n) {
	var r = e == null ? '' : '' + e;
	if ((t && (r = r ? r + ' ' + t : t), n)) {
		for (var i of Object.keys(n))
			if (n[i]) r = r ? r + ' ' + i : i;
			else if (r.length)
				for (var a = i.length, o = 0; (o = r.indexOf(i, o)) >= 0;) {
					var s = o + a;
					(o === 0 || wr.includes(r[o - 1])) && (s === r.length || wr.includes(r[s]))
						? (r = (o === 0 ? '' : r.substring(0, o)) + r.substring(s + 1))
						: (o = s);
				}
	}
	return r === '' ? null : r;
}
function Er(e, t = !1) {
	var n = t ? ' !important;' : ';',
		r = '';
	for (var i of Object.keys(e)) {
		var a = e[i];
		a != null && a !== '' && (r += ' ' + i + ': ' + a + n);
	}
	return r;
}
function Dr(e) {
	return e[0] !== '-' || e[1] !== '-' ? e.toLowerCase() : e;
}
function Or(e, t) {
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
			(r && c.push(...Object.keys(r).map(Dr)), i && c.push(...Object.keys(i).map(Dr)));
			var l = 0,
				u = -1;
			let t = e.length;
			for (var d = 0; d < t; d++) {
				var f = e[d];
				if (
					(s
						? f === '/' && e[d - 1] === '*' && (s = !1)
						: a
							? a === f && (a = !1)
							: f === '/' && e[d + 1] === '*'
								? (s = !0)
								: f === '"' || f === "'"
									? (a = f)
									: f === '('
										? o++
										: f === ')' && o--,
					!s && a === !1 && o === 0)
				) {
					if (f === ':' && u === -1) u = d;
					else if (f === ';' || d === t - 1) {
						if (u !== -1) {
							var p = Dr(e.substring(l, u).trim());
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
		return (r && (n += Er(r)), i && (n += Er(i, !0)), (n = n.trim()), n === '' ? null : n);
	}
	return e == null ? null : String(e);
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/class.js
function kr(e, t, n, r, i, a) {
	var o = e[de];
	if (C || o !== n || o === void 0) {
		var s = Tr(n, r, a);
		((!C || s !== e.getAttribute('class')) &&
			(s == null ? e.removeAttribute('class') : t ? (e.className = s) : e.setAttribute('class', s)),
			(e[de] = n));
	} else if (a && i !== a)
		for (var c in a) {
			var l = !!a[c];
			(i == null || l !== !!i[c]) && e.classList.toggle(c, l);
		}
	return a;
}
//#endregion
//#region node_modules/svelte/src/internal/client/dom/elements/style.js
function Ar(e, t = {}, n, r) {
	for (var i in n) {
		var a = n[i];
		t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
	}
}
function jr(e, t, n, r) {
	var i = e[fe];
	if (C || i !== t) {
		var a = Or(t, r);
		((!C || a !== e.getAttribute('style')) &&
			(a == null ? e.removeAttribute('style') : (e.style.cssText = a)),
			(e[fe] = t));
	} else
		r && (Array.isArray(r) ? (Ar(e, n?.[0], r[0]), Ar(e, n?.[1], r[1], 'important')) : Ar(e, n, r));
	return r;
}
//#endregion
//#region node_modules/svelte/src/legacy/legacy-client.js
function Mr(e) {
	return new Nr(e);
}
var Nr = class {
		#e;
		#t;
		constructor(e) {
			var t = /* @__PURE__ */ new Map(),
				n = (e, n) => {
					var r = /* @__PURE__ */ Rt(n, !1, !1);
					return (t.set(e, r), r);
				};
			let r = new Proxy(
				{
					...(e.props || {}),
					$$events: {}
				},
				{
					get(e, r) {
						return $(t.get(r) ?? n(r, Reflect.get(e, r)));
					},
					has(e, r) {
						return r === le ? !0 : ($(t.get(r) ?? n(r, Reflect.get(e, r))), Reflect.has(e, r));
					},
					set(e, r, i) {
						return (I(t.get(r) ?? n(r, i), i), Reflect.set(e, r, i));
					}
				}
			);
			((this.#t = (e.hydrate ? or : ar)(e.component, {
				target: e.target,
				anchor: e.anchor,
				props: r,
				context: e.context,
				intro: e.intro ?? !1,
				recover: e.recover,
				transformError: e.transformError
			})),
				!O && (!e?.props?.$$host || e.sync === !1) && Et(),
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
						enumerable: !0
					});
			((this.#t.$set = (e) => {
				Object.assign(r, e);
			}),
				(this.#t.$destroy = () => {
					ur(this.#t);
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
	Pr;
typeof HTMLElement == 'function' &&
	(Pr = class extends HTMLElement {
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
						let n = Qt('slot');
						(e !== 'default' && (n.name = e), tr(t, n));
					};
				}
				let t = {},
					n = Ir(this);
				for (let r of this.$$s)
					r in n &&
						(r === 'default' && !this.$$d.children
							? ((this.$$d.children = e(r)), (t.default = !0))
							: (t[r] = e(r)));
				for (let e of this.attributes) {
					let t = this.$$g_p(e.name);
					t in this.$$d || (this.$$d[t] = Fr(t, e.value, this.$$p_d, 'toProp'));
				}
				for (let e in this.$$p_d)
					!(e in this.$$d) && this[e] !== void 0 && ((this.$$d[e] = this[e]), delete this[e]);
				((this.$$c = Mr({
					component: this.$$ctor,
					target: this.$$shadowRoot || this,
					props: {
						...this.$$d,
						$$slots: t,
						$$host: this
					}
				})),
					(this.$$me = cn(() => {
						fn(() => {
							this.$$r = !0;
							for (let e of o(this.$$c)) {
								if (!this.$$p_d[e]?.reflect) continue;
								this.$$d[e] = this.$$c[e];
								let t = Fr(e, this.$$d[e], this.$$p_d, 'toAttribute');
								t == null
									? this.removeAttribute(this.$$p_d[e].attribute || e)
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
				(this.$$d[e] = Fr(e, n, this.$$p_d, 'toProp')),
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
						this.$$p_d[t].attribute === e || (!this.$$p_d[t].attribute && t.toLowerCase() === e)
				) || e
			);
		}
	});
function Fr(e, t, n, r) {
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
function Ir(e) {
	let t = {};
	return (
		e.childNodes.forEach((e) => {
			t[e.slot || 'default'] = !0;
		}),
		t
	);
}
function Lr(e, t, n, r, i, a) {
	let l = class extends Pr {
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
					((n = Fr(e, n, t)), (this.$$d[e] = n));
					var r = this.$$c;
					r && (c(r, e)?.get ? (r[e] = n) : r.$set({ [e]: n }));
				}
			});
		}),
		r.forEach((e) => {
			s(l.prototype, e, {
				get() {
					return this.$$c?.[e];
				}
			});
		}),
		a && (l = a(l)),
		(e.element = l),
		l
	);
}
//#endregion
//#region node_modules/svelte/src/reactivity/date.js
var Rr = !1,
	zr = class e extends Date {
		#e = /* @__PURE__ */ F(super.getTime());
		#t = /* @__PURE__ */ new Map();
		#n = W;
		constructor(...e) {
			(super(...e), Rr || this.#r());
		}
		#r() {
			Rr = !0;
			var t = e.prototype,
				n = Date.prototype,
				r = Object.getOwnPropertyNames(n);
			for (let e of r)
				((e.startsWith('get') || e.startsWith('to') || e === 'valueOf') &&
					(t[e] = function (...t) {
						if (t.length > 0) return ($(this.#e), n[e].apply(this, t));
						var r = this.#t.get(e);
						if (r === void 0) {
							let i = W;
							(K(this.#n),
								(r = /* @__PURE__ */ ct(() => ($(this.#e), n[e].apply(this, t)))),
								this.#t.set(e, r),
								K(i));
						}
						return $(r);
					}),
					e.startsWith('set') &&
						(t[e] = function (...t) {
							var r = n[e].apply(this, t);
							return (I(this.#e, n.getTime.call(this)), r);
						}));
		}
	},
	Br = (e, t = p) => {
		var n = Vr(),
			r = z(n),
			i = z(r, !0);
		(D(r), D(n), pn(() => ir(i, t())), tr(e, n));
	},
	Vr = /* @__PURE__ */ er(
		'<div class="border-black h-[30px] text-white text-center align-middle text-[14.5px] tracking-[1px] bg-(--color-ds-calendar-bg-header) text-sm first:bg-(--color-ds-calendar-header-bg-sunday) last:bg-(--color-ds-calendar-header-bg-saturday)"><span class="relative top-[3px] left-0.5"> </span></div>'
	),
	Hr = /* @__PURE__ */ er(
		'<div class="absolute grid size-full place-items-center"><div class="relative size-[22px] z-10 bg-(--color-ds-darkpurple) bg-blend-hard-light"></div> <div class="absolute size-[26px] bg-(--color-ds-darkpurple) opacity-75 bg-blend-hard-light"></div></div>'
	),
	Ur = /* @__PURE__ */ er('<div><!> <span class="left-px top-px relative z-10"> </span></div>'),
	Wr = /* @__PURE__ */ er(
		'<div class="flex flex-col w-[234px] min-h-[198px] items-center"><div class="w-[226px] h-[32px] relative z-10 border-(--color-ds-grid-border) border-2 bg-white text-center tracking-[4px] text-[17.4px]"><span> </span></div> <div class="border-2"><div class="grid grid-cols-7 border-b-2 gap-0.5 bg-black"><!> <!> <!> <!> <!> <!> <!></div>  <div class="grid grid-cols-7 bg-(--color-ds-calendar-border-grey) gap-0.5 text-[14.5px] tracking-[1px]"></div></div></div>'
	),
	Gr = {
		hash: 'svelte-dm8er6',
		code: '\r\n  @import "./calendar.css?inline";:root {--color-ds-calendar-bg-header: #696969;--color-ds-calendar-header-bg-sunday: #d30000;--color-ds-calendar-header-bg-saturday: #0041c3;--color-ds-calendar-bg-sunday: #fba2eb;--color-ds-calendar-bg-saturday: #82aafb;--color-ds-calendar-text-sunday: #790000;--color-ds-calendar-text-saturday: #000082;--color-ds-calendar-border-grey: #929292;}'
	};
function Kr(e, t) {
	(Re(t, !0), Cr(e, Gr));
	let n = new zr(),
		r = /* @__PURE__ */ ct(() => new Date(new Date(n.getFullYear(), n.getMonth())).getDay()),
		i = /* @__PURE__ */ ct(() => new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate()),
		a = /* @__PURE__ */ ct(() => $(i) + $(r)),
		o = /* @__PURE__ */ ct(() => ($(a) > 35 ? 6 : $(a) > 28 ? 5 : 4));
	on(() => {
		let e = setInterval(() => {
			n.setTime(Date.now());
		}, 1e3);
		return () => {
			clearInterval(e);
		};
	});
	var s = Wr(),
		c = z(s),
		l = z(c),
		u = z(l);
	(D(l), D(c));
	var d = B(c, 2);
	jr(d, '', {}, { 'box-shadow': '0px 0px 0px 2px #d3d3d3,0px 0px 0px 4px #e3e3e3' });
	var f = z(d),
		p = z(f);
	Br(p, () => 'Su');
	var m = B(p, 2);
	Br(m, () => 'Mo');
	var h = B(m, 2);
	Br(h, () => 'Tu');
	var g = B(h, 2);
	Br(g, () => 'We');
	var _ = B(g, 2);
	Br(_, () => 'Th');
	var v = B(_, 2);
	(Br(v, () => 'Fr'), Br(B(v, 2), () => 'Sa'), D(f));
	var y = B(f, 2);
	(_r(
		y,
		21,
		() => ({ length: $(o) * 7 }),
		pr,
		(e, t, a) => {
			let o = /* @__PURE__ */ ct(() => a - $(r));
			var s = Ur();
			kr(
				s,
				1,
				`relative size-[30px] text-center ${a % 7 == 0 ? 'bg-(--color-ds-calendar-bg-sunday) text-(--color-ds-calendar-text-sunday)' : a % 7 == 6 ? 'bg-(--color-ds-calendar-bg-saturday) text-(--color-ds-calendar-text-saturday)' : 'bg-white text-black'}`
			);
			var c = z(s),
				l = (e) => {
					var t = Hr(),
						n = z(t);
					let r;
					var i = B(n, 2);
					let a;
					(D(t),
						pn(() => {
							((r = jr(n, '', r, {
								'background-image':
									'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWBAMAAAA2mnEIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAADUExURdnZ2YrXJ0MAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuMTITAUd0AAAAuGVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABEAAABaAAAAaYcEAAEAAABsAAAAAAAAAPZ2AQDoAwAA9nYBAOgDAABQYWludC5ORVQgNS4xLjEyAAADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlgAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAADquHT8XxiVaAAAAA1JREFUKM9jYBgFIAAAAQgAAcCGtJAAAAAASUVORK5CYII=)',
								'image-rendering': 'pixelated'
							})),
								(a = jr(i, '', a, {
									'background-image':
										'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJUExURVpaWoqKigAAAOHFsg0AAAADdFJOU///ANfKDUEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuMTITAUd0AAAAuGVYSWZJSSoACAAAAAUAGgEFAAEAAABKAAAAGwEFAAEAAABSAAAAKAEDAAEAAAACAAAAMQECABEAAABaAAAAaYcEAAEAAABsAAAAAAAAAPZ2AQDoAwAA9nYBAOgDAABQYWludC5ORVQgNS4xLjEyAAADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlgAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAADquHT8XxiVaAAAADdJREFUKFNjYGBgZMSOGTCF4FKMjExYASMjPikGBnRBCADbhS4IAaN2IYNhbRd6IoMnNkwhGAYAteEEKZi5pnoAAAAASUVORK5CYII=)',
									'image-rendering': 'pixelated'
								})));
						}),
						tr(e, t));
				},
				u = /* @__PURE__ */ ct(() => n.getDate() === $(o) + 1);
			fr(c, (e) => {
				$(u) && e(l);
			});
			var d = B(c, 2),
				f = z(d, !0);
			(D(d), D(s), pn(() => ir(f, $(o) >= 0 && $(o) < $(i) ? $(o) + 1 : '')), tr(e, s));
		}
	),
		D(y),
		D(d),
		D(s),
		pn(
			(e, t) => ir(u, `${e ?? ''}/${t ?? ''}`),
			[() => (n.getMonth() + 1).toString().padStart(2, '0'), () => n.getFullYear()]
		),
		tr(e, s),
		ze());
}
customElements.define('ds-calendar', Lr(Kr, {}, [], []));
//#endregion
export { Kr as DSCalendar };
