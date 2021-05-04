var t = Object.defineProperty,
	n = Object.prototype.hasOwnProperty,
	e = Object.getOwnPropertySymbols,
	r = Object.prototype.propertyIsEnumerable,
	o = (n, e, r) =>
		e in n ? t(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[e] = r),
	i = (t, i) => {
		for (var u in i || (i = {})) n.call(i, u) && o(t, u, i[u]);
		if (e) for (var u of e(i)) r.call(i, u) && o(t, u, i[u]);
		return t;
	};
function u() {}
function a(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function c(t) {
	return t();
}
function l() {
	return Object.create(null);
}
function s(t) {
	t.forEach(c);
}
function f(t) {
	return 'function' == typeof t;
}
function h(t, n) {
	return t != t ? n == n : t !== n || (t && 'object' == typeof t) || 'function' == typeof t;
}
function d(t, ...n) {
	if (null == t) return u;
	const e = t.subscribe(...n);
	return e.unsubscribe ? () => e.unsubscribe() : e;
}
function g(t, n, e) {
	t.$$.on_destroy.push(d(n, e));
}
function p(t, n, e, r) {
	if (t) {
		const o = m(t, n, e, r);
		return t[0](o);
	}
}
function m(t, n, e, r) {
	return t[1] && r ? a(e.ctx.slice(), t[1](r(n))) : e.ctx;
}
function y(t, n, e, r, o, i, u) {
	const a = (function (t, n, e, r) {
		if (t[2] && r) {
			const o = t[2](r(e));
			if (void 0 === n.dirty) return o;
			if ('object' == typeof o) {
				const t = [],
					e = Math.max(n.dirty.length, o.length);
				for (let r = 0; r < e; r += 1) t[r] = n.dirty[r] | o[r];
				return t;
			}
			return n.dirty | o;
		}
		return n.dirty;
	})(n, r, o, i);
	if (a) {
		const o = m(n, e, r, u);
		t.p(o, a);
	}
}
function v(t) {
	const n = {};
	for (const e in t) '$' !== e[0] && (n[e] = t[e]);
	return n;
}
function b(t, n) {
	const e = {};
	n = new Set(n);
	for (const r in t) n.has(r) || '$' === r[0] || (e[r] = t[r]);
	return e;
}
function w(t, n) {
	t.appendChild(n);
}
function M(t, n, e) {
	t.insertBefore(n, e || null);
}
function $(t) {
	t.parentNode.removeChild(t);
}
function x(t, n) {
	for (let e = 0; e < t.length; e += 1) t[e] && t[e].d(n);
}
function C(t) {
	return document.createElement(t);
}
function k(t) {
	return document.createElementNS('http://www.w3.org/2000/svg', t);
}
function T(t) {
	return document.createTextNode(t);
}
function N() {
	return T(' ');
}
function D() {
	return T('');
}
function U(t, n, e, r) {
	return t.addEventListener(n, e, r), () => t.removeEventListener(n, e, r);
}
function A(t, n, e) {
	null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function F(t, n) {
	const e = Object.getOwnPropertyDescriptors(t.__proto__);
	for (const r in n)
		null == n[r]
			? t.removeAttribute(r)
			: 'style' === r
			? (t.style.cssText = n[r])
			: '__value' === r
			? (t.value = t[r] = n[r])
			: e[r] && e[r].set
			? (t[r] = n[r])
			: A(t, r, n[r]);
}
function S(t) {
	return Array.from(t.childNodes);
}
function E(t, n, e, r) {
	for (let o = 0; o < t.length; o += 1) {
		const r = t[o];
		if (r.nodeName === n) {
			let n = 0;
			const i = [];
			for (; n < r.attributes.length; ) {
				const t = r.attributes[n++];
				e[t.name] || i.push(t.name);
			}
			for (let t = 0; t < i.length; t++) r.removeAttribute(i[t]);
			return t.splice(o, 1)[0];
		}
	}
	return r ? k(n) : C(n);
}
function j(t, n) {
	for (let e = 0; e < t.length; e += 1) {
		const r = t[e];
		if (3 === r.nodeType) return (r.data = '' + n), t.splice(e, 1)[0];
	}
	return T(n);
}
function L(t) {
	return j(t, ' ');
}
function Y(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function H(t, n, e, r) {
	t.style.setProperty(n, e, r ? 'important' : '');
}
let _, z;
function O(t, n) {
	'static' === getComputedStyle(t).position && (t.style.position = 'relative');
	const e = C('iframe');
	e.setAttribute(
		'style',
		'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;'
	),
		e.setAttribute('aria-hidden', 'true'),
		(e.tabIndex = -1);
	const r = (function () {
		if (void 0 === _) {
			_ = !1;
			try {
				'undefined' != typeof window && window.parent && window.parent.document;
			} catch (t) {
				_ = !0;
			}
		}
		return _;
	})();
	let o;
	return (
		r
			? ((e.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
			  (o = U(window, 'message', (t) => {
					t.source === e.contentWindow && n();
			  })))
			: ((e.src = 'about:blank'),
			  (e.onload = () => {
					o = U(e.contentWindow, 'resize', n);
			  })),
		w(t, e),
		() => {
			(r || (o && e.contentWindow)) && o(), $(e);
		}
	);
}
function q(t, n, e) {
	t.classList[e ? 'add' : 'remove'](n);
}
function R(t, n = document.body) {
	return Array.from(n.querySelectorAll(t));
}
function P(t) {
	z = t;
}
function V() {
	if (!z) throw new Error('Function called outside component initialization');
	return z;
}
function W(t) {
	V().$$.on_mount.push(t);
}
function Z(t) {
	V().$$.after_update.push(t);
}
function I() {
	const t = V();
	return (n, e) => {
		const r = t.$$.callbacks[n];
		if (r) {
			const o = (function (t, n) {
				const e = document.createEvent('CustomEvent');
				return e.initCustomEvent(t, !1, !1, n), e;
			})(n, e);
			r.slice().forEach((n) => {
				n.call(t, o);
			});
		}
	};
}
function X(t, n) {
	V().$$.context.set(t, n);
}
function B(t) {
	return V().$$.context.get(t);
}
function J(t, n) {
	const e = t.$$.callbacks[n.type];
	e && e.slice().forEach((t) => t(n));
}
const Q = [],
	G = [],
	K = [],
	tt = [],
	nt = Promise.resolve();
let et = !1;
function rt(t) {
	K.push(t);
}
function ot(t) {
	tt.push(t);
}
let it = !1;
const ut = new Set();
function at() {
	if (!it) {
		it = !0;
		do {
			for (let t = 0; t < Q.length; t += 1) {
				const n = Q[t];
				P(n), ct(n.$$);
			}
			for (P(null), Q.length = 0; G.length; ) G.pop()();
			for (let t = 0; t < K.length; t += 1) {
				const n = K[t];
				ut.has(n) || (ut.add(n), n());
			}
			K.length = 0;
		} while (Q.length);
		for (; tt.length; ) tt.pop()();
		(et = !1), (it = !1), ut.clear();
	}
}
function ct(t) {
	if (null !== t.fragment) {
		t.update(), s(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(rt);
	}
}
const lt = new Set();
let st;
function ft() {
	st = { r: 0, c: [], p: st };
}
function ht() {
	st.r || s(st.c), (st = st.p);
}
function dt(t, n) {
	t && t.i && (lt.delete(t), t.i(n));
}
function gt(t, n, e, r) {
	if (t && t.o) {
		if (lt.has(t)) return;
		lt.add(t),
			st.c.push(() => {
				lt.delete(t), r && (e && t.d(1), r());
			}),
			t.o(n);
	}
}
function pt(t, n) {
	const e = {},
		r = {},
		o = { $$scope: 1 };
	let i = t.length;
	for (; i--; ) {
		const u = t[i],
			a = n[i];
		if (a) {
			for (const t in u) t in a || (r[t] = 1);
			for (const t in a) o[t] || ((e[t] = a[t]), (o[t] = 1));
			t[i] = a;
		} else for (const t in u) o[t] = 1;
	}
	for (const u in r) u in e || (e[u] = void 0);
	return e;
}
function mt(t) {
	return 'object' == typeof t && null !== t ? t : {};
}
function yt(t, n, e) {
	const r = t.$$.props[n];
	void 0 !== r && ((t.$$.bound[r] = e), e(t.$$.ctx[r]));
}
function vt(t) {
	t && t.c();
}
function bt(t, n) {
	t && t.l(n);
}
function wt(t, n, e, r) {
	const { fragment: o, on_mount: i, on_destroy: u, after_update: a } = t.$$;
	o && o.m(n, e),
		r ||
			rt(() => {
				const n = i.map(c).filter(f);
				u ? u.push(...n) : s(n), (t.$$.on_mount = []);
			}),
		a.forEach(rt);
}
function Mt(t, n) {
	const e = t.$$;
	null !== e.fragment &&
		(s(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function $t(t, n) {
	-1 === t.$$.dirty[0] && (Q.push(t), et || ((et = !0), nt.then(at)), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function xt(t, n, e, r, o, i, a = [-1]) {
	const c = z;
	P(t);
	const f = (t.$$ = {
		fragment: null,
		ctx: null,
		props: i,
		update: u,
		not_equal: o,
		bound: l(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(c ? c.$$.context : n.context || []),
		callbacks: l(),
		dirty: a,
		skip_bound: !1
	});
	let h = !1;
	if (
		((f.ctx = e
			? e(t, n.props || {}, (n, e, ...r) => {
					const i = r.length ? r[0] : e;
					return (
						f.ctx &&
							o(f.ctx[n], (f.ctx[n] = i)) &&
							(!f.skip_bound && f.bound[n] && f.bound[n](i), h && $t(t, n)),
						e
					);
			  })
			: []),
		f.update(),
		(h = !0),
		s(f.before_update),
		(f.fragment = !!r && r(f.ctx)),
		n.target)
	) {
		if (n.hydrate) {
			const t = S(n.target);
			f.fragment && f.fragment.l(t), t.forEach($);
		} else f.fragment && f.fragment.c();
		n.intro && dt(t.$$.fragment), wt(t, n.target, n.anchor, n.customElement), at();
	}
	P(c);
}
class Ct {
	$destroy() {
		Mt(this, 1), (this.$destroy = u);
	}
	$on(t, n) {
		const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			e.push(n),
			() => {
				const t = e.indexOf(n);
				-1 !== t && e.splice(t, 1);
			}
		);
	}
	$set(t) {
		var n;
		this.$$set &&
			((n = t), 0 !== Object.keys(n).length) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
}
const kt = [];
function Tt(t, n = u) {
	let e;
	const r = [];
	function o(n) {
		if (h(t, n) && ((t = n), e)) {
			const n = !kt.length;
			for (let e = 0; e < r.length; e += 1) {
				const n = r[e];
				n[1](), kt.push(n, t);
			}
			if (n) {
				for (let t = 0; t < kt.length; t += 2) kt[t][0](kt[t + 1]);
				kt.length = 0;
			}
		}
	}
	return {
		set: o,
		update: function (n) {
			o(n(t));
		},
		subscribe: function (i, a = u) {
			const c = [i, a];
			return (
				r.push(c),
				1 === r.length && (e = n(o) || u),
				i(t),
				() => {
					const t = r.indexOf(c);
					-1 !== t && r.splice(t, 1), 0 === r.length && (e(), (e = null));
				}
			);
		}
	};
}
function Nt(t, n, e) {
	const r = !Array.isArray(t),
		o = r ? [t] : t,
		i = n.length < 2;
	return {
		subscribe: Tt(e, (t) => {
			let e = !1;
			const a = [];
			let c = 0,
				l = u;
			const h = () => {
					if (c) return;
					l();
					const e = n(r ? a[0] : a, t);
					i ? t(e) : (l = f(e) ? e : u);
				},
				g = o.map((t, n) =>
					d(
						t,
						(t) => {
							(a[n] = t), (c &= ~(1 << n)), e && h();
						},
						() => {
							c |= 1 << n;
						}
					)
				);
			return (
				(e = !0),
				h(),
				function () {
					s(g), l();
				}
			);
		}).subscribe
	};
}
const Dt = (t) => ({ label: 1 & t, button: 2 & t }),
	Ut = (t) => ({ label: t[0], button: t[1] });
function At(t) {
	let n;
	const e = t[6].default,
		r = p(e, t, t[5], Ut);
	return {
		c() {
			r && r.c();
		},
		l(t) {
			r && r.l(t);
		},
		m(t, e) {
			r && r.m(t, e), (n = !0);
		},
		p(t, [o]) {
			r && r.p && (!n || 35 & o) && y(r, e, t, t[5], o, Dt, Ut);
		},
		i(t) {
			n || (dt(r, t), (n = !0));
		},
		o(t) {
			gt(r, t), (n = !1);
		},
		d(t) {
			r && r.d(t);
		}
	};
}
function Ft(t, n, e) {
	let r, o;
	const u = ['id', 'toggled', 'disabled'];
	let c = b(n, u),
		{ $$slots: l = {}, $$scope: s } = n,
		{ id: f = 'toggle' + Math.random().toString(36) } = n,
		{ toggled: h = !0 } = n,
		{ disabled: d = !1 } = n;
	return (
		(t.$$set = (t) => {
			(n = a(a({}, n), v(t))),
				e(7, (c = b(n, u))),
				'id' in t && e(2, (f = t.id)),
				'toggled' in t && e(3, (h = t.toggled)),
				'disabled' in t && e(4, (d = t.disabled)),
				'$$scope' in t && e(5, (s = t.$$scope));
		}),
		(t.$$.update = () => {
			4 & t.$$.dirty && e(0, (r = { for: f })),
				e(
					1,
					(o = i(i({}, c), {
						id: f,
						disabled: d,
						'aria-checked': h,
						type: 'button',
						role: 'switch'
					}))
				);
		}),
		[r, o, f, h, d, s, l]
	);
}
class St extends Ct {
	constructor(t) {
		super(), xt(this, t, Ft, At, h, { id: 2, toggled: 3, disabled: 4 });
	}
}
const Et = (t) => ({ toggled: 1 & t }),
	jt = (t) => ({ toggled: t[0] });
function Lt(t) {
	let n,
		e,
		r = (t[0] ? t[5] : t[6]) + '';
	return {
		c() {
			(n = C('span')), (e = T(r)), this.h();
		},
		l(t) {
			n = E(t, 'SPAN', { class: !0 });
			var o = S(n);
			(e = j(o, r)), o.forEach($), this.h();
		},
		h() {
			A(n, 'class', 'svelte-z8fsdj');
		},
		m(t, r) {
			M(t, n, r), w(n, e);
		},
		p(t, n) {
			97 & n && r !== (r = (t[0] ? t[5] : t[6]) + '') && Y(e, r);
		},
		d(t) {
			t && $(n);
		}
	};
}
function Yt(t) {
	let n,
		e,
		r,
		o,
		i,
		u,
		c,
		l,
		f,
		h,
		d = [t[19]],
		g = {};
	for (let s = 0; s < d.length; s += 1) g = a(g, d[s]);
	let m = [
			t[10],
			t[20],
			{
				style: (u =
					'color: ' +
					t[7] +
					'; background-color: ' +
					(t[0] ? t[8] : t[9]) +
					';\n      ' +
					t[10].style)
			},
			{ disabled: t[4] }
		],
		v = {};
	for (let s = 0; s < m.length; s += 1) v = a(v, m[s]);
	const b = t[11].default,
		x = p(b, t, t[17], jt),
		k =
			x ||
			(function (t) {
				let n,
					e = t[5] && t[6] && Lt(t);
				return {
					c() {
						e && e.c(), (n = D());
					},
					l(t) {
						e && e.l(t), (n = D());
					},
					m(t, r) {
						e && e.m(t, r), M(t, n, r);
					},
					p(t, r) {
						t[5] && t[6]
							? e
								? e.p(t, r)
								: ((e = Lt(t)), e.c(), e.m(n.parentNode, n))
							: e && (e.d(1), (e = null));
					},
					d(t) {
						e && e.d(t), t && $(n);
					}
				};
			})(t);
	return {
		c() {
			(n = C('label')),
				(e = T(t[1])),
				(r = N()),
				(o = C('div')),
				(i = C('button')),
				(c = N()),
				k && k.c(),
				this.h();
		},
		l(u) {
			n = E(u, 'LABEL', {});
			var a = S(n);
			(e = j(a, t[1])), a.forEach($), (r = L(u)), (o = E(u, 'DIV', { class: !0 }));
			var l = S(o);
			(i = E(l, 'BUTTON', { style: !0, disabled: !0 })),
				S(i).forEach($),
				(c = L(l)),
				k && k.l(l),
				l.forEach($),
				this.h();
		},
		h() {
			F(n, g),
				q(n, 'hideLabel', t[2]),
				q(n, 'svelte-z8fsdj', !0),
				F(i, v),
				q(i, 'small', t[3]),
				q(i, 'svelte-z8fsdj', !0),
				A(o, 'class', 'svelte-z8fsdj');
		},
		m(u, a) {
			M(u, n, a),
				w(n, e),
				M(u, r, a),
				M(u, o, a),
				w(o, i),
				w(o, c),
				k && k.m(o, null),
				(l = !0),
				f ||
					((h = [
						U(i, 'click', t[12]),
						U(i, 'click', t[15]),
						U(i, 'focus', t[13]),
						U(i, 'blur', t[14])
					]),
					(f = !0));
		},
		p(t, r) {
			(!l || 2 & r) && Y(e, t[1]),
				F(n, (g = pt(d, [524288 & r && t[19]]))),
				q(n, 'hideLabel', t[2]),
				q(n, 'svelte-z8fsdj', !0),
				F(
					i,
					(v = pt(m, [
						1024 & r && t[10],
						1048576 & r && t[20],
						(!l ||
							(1921 & r &&
								u !==
									(u =
										'color: ' +
										t[7] +
										'; background-color: ' +
										(t[0] ? t[8] : t[9]) +
										';\n      ' +
										t[10].style))) && { style: u },
						(!l || 16 & r) && { disabled: t[4] }
					]))
				),
				q(i, 'small', t[3]),
				q(i, 'svelte-z8fsdj', !0),
				x
					? x.p && (!l || 131073 & r) && y(x, b, t, t[17], r, Et, jt)
					: k && k.p && 97 & r && k.p(t, r);
		},
		i(t) {
			l || (dt(k, t), (l = !0));
		},
		o(t) {
			gt(k, t), (l = !1);
		},
		d(t) {
			t && $(n), t && $(r), t && $(o), k && k.d(t), (f = !1), s(h);
		}
	};
}
function Ht(t) {
	let n, e, r;
	function o(n) {
		t[16](n);
	}
	let i = {
		$$slots: {
			default: [
				Yt,
				({ label: t, button: n }) => ({ 19: t, 20: n }),
				({ label: t, button: n }) => (t ? 524288 : 0) | (n ? 1048576 : 0)
			]
		},
		$$scope: { ctx: t }
	};
	return (
		void 0 !== t[0] && (i.toggled = t[0]),
		(n = new St({ props: i })),
		G.push(() => yt(n, 'toggled', o)),
		{
			c() {
				vt(n.$$.fragment);
			},
			l(t) {
				bt(n.$$.fragment, t);
			},
			m(t, e) {
				wt(n, t, e), (r = !0);
			},
			p(t, [r]) {
				const o = {};
				1705983 & r && (o.$$scope = { dirty: r, ctx: t }),
					!e && 1 & r && ((e = !0), (o.toggled = t[0]), ot(() => (e = !1))),
					n.$set(o);
			},
			i(t) {
				r || (dt(n.$$.fragment, t), (r = !0));
			},
			o(t) {
				gt(n.$$.fragment, t), (r = !1);
			},
			d(t) {
				Mt(n, t);
			}
		}
	);
}
function _t(t, n, e) {
	const r = [
		'label',
		'hideLabel',
		'small',
		'toggled',
		'disabled',
		'on',
		'off',
		'switchColor',
		'toggledColor',
		'untoggledColor'
	];
	let o = b(n, r),
		{ $$slots: i = {}, $$scope: u } = n,
		{ label: c = 'Label' } = n,
		{ hideLabel: l = !1 } = n,
		{ small: s = !1 } = n,
		{ toggled: f = !0 } = n,
		{ disabled: h = !1 } = n,
		{ on: d } = n,
		{ off: g } = n,
		{ switchColor: p = '#fff' } = n,
		{ toggledColor: m = '#0f62fe' } = n,
		{ untoggledColor: y = '#8d8d8d' } = n;
	const w = I();
	return (
		(t.$$set = (t) => {
			(n = a(a({}, n), v(t))),
				e(10, (o = b(n, r))),
				'label' in t && e(1, (c = t.label)),
				'hideLabel' in t && e(2, (l = t.hideLabel)),
				'small' in t && e(3, (s = t.small)),
				'toggled' in t && e(0, (f = t.toggled)),
				'disabled' in t && e(4, (h = t.disabled)),
				'on' in t && e(5, (d = t.on)),
				'off' in t && e(6, (g = t.off)),
				'switchColor' in t && e(7, (p = t.switchColor)),
				'toggledColor' in t && e(8, (m = t.toggledColor)),
				'untoggledColor' in t && e(9, (y = t.untoggledColor)),
				'$$scope' in t && e(17, (u = t.$$scope));
		}),
		(t.$$.update = () => {
			1 & t.$$.dirty && w('toggle', f);
		}),
		[
			f,
			c,
			l,
			s,
			h,
			d,
			g,
			p,
			m,
			y,
			o,
			i,
			function (n) {
				J(t, n);
			},
			function (n) {
				J(t, n);
			},
			function (n) {
				J(t, n);
			},
			() => e(0, (f = !f)),
			function (t) {
				(f = t), e(0, f);
			},
			u
		]
	);
}
class zt extends Ct {
	constructor(t) {
		super(),
			xt(this, t, _t, Ht, h, {
				label: 1,
				hideLabel: 2,
				small: 3,
				toggled: 0,
				disabled: 4,
				on: 5,
				off: 6,
				switchColor: 7,
				toggledColor: 8,
				untoggledColor: 9
			});
	}
}
const Ot = (t, n) => {
		const e = document.createElement(n);
		return (e.textContent = t), e;
	},
	qt = (t) => 1 === t.childNodes.length && 3 === t.childNodes[0].nodeType,
	Rt = (t) => {
		if (qt(t)) {
			const n = t.textContent,
				e = Ot(t.textContent, 'p');
			return (t.textContent = ''), t.appendChild(e), [{ currentNode: e, text: n }];
		}
		return [...t.children].map((t) => {
			const n = t.innerHTML.replaceAll('&amp;', '&');
			return { currentNode: t, text: n };
		});
	},
	Pt = async (t, n) => {
		const { mode: e } =
				((n.loop || n.loopRandom) && (await import('./loopTypewriter-ac3d9e55.js'))) ||
				(n.scramble && (await import('./scramble-44854141.js'))) ||
				(await import('./typewriter-f1511183.js')),
			r = Rt(t);
		if (n.delay > 0) {
			const { sleep: e } = await import('./index-8cf516d1.js');
			await e(n.delay), t.classList.remove('delay');
		}
		e({ node: t, elements: r }, n);
	};
function Vt(t) {
	let n, e, r, o, i;
	const a = t[10].default,
		c = p(a, t, t[9], null);
	return {
		c() {
			(n = C('div')), c && c.c(), this.h();
		},
		l(t) {
			n = E(t, 'DIV', { class: !0, style: !0 });
			var e = S(n);
			c && c.l(e), e.forEach($), this.h();
		},
		h() {
			A(n, 'class', 'typewriter-container svelte-kih1vp'),
				H(n, '--cursor-color', 'string' == typeof t[0] ? t[0] : 'black'),
				q(n, 'cursor', t[0]),
				q(n, 'delay', t[2].delay > 0);
		},
		m(a, l) {
			var s;
			M(a, n, l),
				c && c.m(n, null),
				(r = !0),
				o || ((s = e = Pt.call(null, n, t[2])), (i = s && f(s.destroy) ? s.destroy : u), (o = !0));
		},
		p(t, o) {
			c && c.p && (!r || 512 & o) && y(c, a, t, t[9], o, null, null),
				(!r || 1 & o) && H(n, '--cursor-color', 'string' == typeof t[0] ? t[0] : 'black'),
				e && f(e.update) && 4 & o && e.update.call(null, t[2]),
				1 & o && q(n, 'cursor', t[0]),
				4 & o && q(n, 'delay', t[2].delay > 0);
		},
		i(t) {
			r || (dt(c, t), (r = !0));
		},
		o(t) {
			gt(c, t), (r = !1);
		},
		d(t) {
			t && $(n), c && c.d(t), (o = !1), i();
		}
	};
}
function Wt(t) {
	let n,
		e,
		r = t[1],
		o = Vt(t);
	return {
		c() {
			o.c(), (n = D());
		},
		l(t) {
			o.l(t), (n = D());
		},
		m(t, r) {
			o.m(t, r), M(t, n, r), (e = !0);
		},
		p(t, [e]) {
			2 & e && h(r, (r = t[1]))
				? (ft(), gt(o, 1, 1, u), ht(), (o = Vt(t)), o.c(), dt(o), o.m(n.parentNode, n))
				: o.p(t, e);
		},
		i(t) {
			e || (dt(o), (e = !0));
		},
		o(t) {
			gt(o), (e = !1);
		},
		d(t) {
			t && $(n), o.d(t);
		}
	};
}
function Zt(t, n, e) {
	let r,
		{ $$slots: o = {}, $$scope: i } = n,
		{ interval: u = 30 } = n,
		{ cascade: a = !1 } = n,
		{ loop: c = !1 } = n,
		{ loopRandom: l = !1 } = n,
		{ scramble: s = !1 } = n,
		{ cursor: f = !0 } = n,
		{ delay: h = 0 } = n,
		d = !1,
		g = {};
	const p = I();
	var m;
	return (
		(m = () => d && e(1, (g = {}))),
		V().$$.before_update.push(m),
		W(() => (d = !0)),
		(t.$$set = (t) => {
			'interval' in t && e(3, (u = t.interval)),
				'cascade' in t && e(4, (a = t.cascade)),
				'loop' in t && e(5, (c = t.loop)),
				'loopRandom' in t && e(6, (l = t.loopRandom)),
				'scramble' in t && e(7, (s = t.scramble)),
				'cursor' in t && e(0, (f = t.cursor)),
				'delay' in t && e(8, (h = t.delay)),
				'$$scope' in t && e(9, (i = t.$$scope));
		}),
		(t.$$.update = () => {
			505 & t.$$.dirty &&
				e(
					2,
					(r = {
						interval: u,
						cascade: a,
						loop: c,
						loopRandom: l,
						scramble: s,
						cursor: f,
						delay: h,
						dispatch: p
					})
				);
		}),
		[f, g, r, u, a, c, l, s, h, i, o]
	);
}
class It extends Ct {
	constructor(t) {
		super(),
			xt(this, t, Zt, Wt, h, {
				interval: 3,
				cascade: 4,
				loop: 5,
				loopRandom: 6,
				scramble: 7,
				cursor: 0,
				delay: 8
			});
	}
}
function Xt(t, n) {
	return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Bt(t) {
	let n = t,
		e = t;
	function r(t, n, r, o) {
		for (null == r && (r = 0), null == o && (o = t.length); r < o; ) {
			const i = (r + o) >>> 1;
			e(t[i], n) < 0 ? (r = i + 1) : (o = i);
		}
		return r;
	}
	return (
		1 === t.length &&
			((n = (n, e) => t(n) - e),
			(e = (function (t) {
				return (n, e) => Xt(t(n), e);
			})(t))),
		{
			left: r,
			center: function (t, e, o, i) {
				null == o && (o = 0), null == i && (i = t.length);
				const u = r(t, e, o, i - 1);
				return u > o && n(t[u - 1], e) > -n(t[u], e) ? u - 1 : u;
			},
			right: function (t, n, r, o) {
				for (null == r && (r = 0), null == o && (o = t.length); r < o; ) {
					const i = (r + o) >>> 1;
					e(t[i], n) > 0 ? (o = i) : (r = i + 1);
				}
				return r;
			}
		}
	);
}
const Jt = Bt(Xt).right;
Bt(function (t) {
	return null === t ? NaN : +t;
}).center;
var Qt = Math.sqrt(50),
	Gt = Math.sqrt(10),
	Kt = Math.sqrt(2);
function tn(t, n, e) {
	var r = (n - t) / Math.max(0, e),
		o = Math.floor(Math.log(r) / Math.LN10),
		i = r / Math.pow(10, o);
	return o >= 0
		? (i >= Qt ? 10 : i >= Gt ? 5 : i >= Kt ? 2 : 1) * Math.pow(10, o)
		: -Math.pow(10, -o) / (i >= Qt ? 10 : i >= Gt ? 5 : i >= Kt ? 2 : 1);
}
function nn(t, n) {
	switch (arguments.length) {
		case 0:
			break;
		case 1:
			this.range(t);
			break;
		default:
			this.range(n).domain(t);
	}
	return this;
}
function en(t, n, e) {
	(t.prototype = n.prototype = e), (e.constructor = t);
}
function rn(t, n) {
	var e = Object.create(t.prototype);
	for (var r in n) e[r] = n[r];
	return e;
}
function on() {}
var un = 1 / 0.7,
	an = '\\s*([+-]?\\d+)\\s*',
	cn = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	ln = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	sn = /^#([0-9a-f]{3,8})$/,
	fn = new RegExp('^rgb\\(' + [an, an, an] + '\\)$'),
	hn = new RegExp('^rgb\\(' + [ln, ln, ln] + '\\)$'),
	dn = new RegExp('^rgba\\(' + [an, an, an, cn] + '\\)$'),
	gn = new RegExp('^rgba\\(' + [ln, ln, ln, cn] + '\\)$'),
	pn = new RegExp('^hsl\\(' + [cn, ln, ln] + '\\)$'),
	mn = new RegExp('^hsla\\(' + [cn, ln, ln, cn] + '\\)$'),
	yn = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
function vn() {
	return this.rgb().formatHex();
}
function bn() {
	return this.rgb().formatRgb();
}
function wn(t) {
	var n, e;
	return (
		(t = (t + '').trim().toLowerCase()),
		(n = sn.exec(t))
			? ((e = n[1].length),
			  (n = parseInt(n[1], 16)),
			  6 === e
					? Mn(n)
					: 3 === e
					? new kn(
							((n >> 8) & 15) | ((n >> 4) & 240),
							((n >> 4) & 15) | (240 & n),
							((15 & n) << 4) | (15 & n),
							1
					  )
					: 8 === e
					? $n((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
					: 4 === e
					? $n(
							((n >> 12) & 15) | ((n >> 8) & 240),
							((n >> 8) & 15) | ((n >> 4) & 240),
							((n >> 4) & 15) | (240 & n),
							(((15 & n) << 4) | (15 & n)) / 255
					  )
					: null)
			: (n = fn.exec(t))
			? new kn(n[1], n[2], n[3], 1)
			: (n = hn.exec(t))
			? new kn((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
			: (n = dn.exec(t))
			? $n(n[1], n[2], n[3], n[4])
			: (n = gn.exec(t))
			? $n((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
			: (n = pn.exec(t))
			? Un(n[1], n[2] / 100, n[3] / 100, 1)
			: (n = mn.exec(t))
			? Un(n[1], n[2] / 100, n[3] / 100, n[4])
			: yn.hasOwnProperty(t)
			? Mn(yn[t])
			: 'transparent' === t
			? new kn(NaN, NaN, NaN, 0)
			: null
	);
}
function Mn(t) {
	return new kn((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
}
function $n(t, n, e, r) {
	return r <= 0 && (t = n = e = NaN), new kn(t, n, e, r);
}
function xn(t) {
	return (
		t instanceof on || (t = wn(t)), t ? new kn((t = t.rgb()).r, t.g, t.b, t.opacity) : new kn()
	);
}
function Cn(t, n, e, r) {
	return 1 === arguments.length ? xn(t) : new kn(t, n, e, null == r ? 1 : r);
}
function kn(t, n, e, r) {
	(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
}
function Tn() {
	return '#' + Dn(this.r) + Dn(this.g) + Dn(this.b);
}
function Nn() {
	var t = this.opacity;
	return (
		(1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'rgb(' : 'rgba(') +
		Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
		', ' +
		Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
		', ' +
		Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
		(1 === t ? ')' : ', ' + t + ')')
	);
}
function Dn(t) {
	return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') + t.toString(16);
}
function Un(t, n, e, r) {
	return (
		r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
		new Fn(t, n, e, r)
	);
}
function An(t) {
	if (t instanceof Fn) return new Fn(t.h, t.s, t.l, t.opacity);
	if ((t instanceof on || (t = wn(t)), !t)) return new Fn();
	if (t instanceof Fn) return t;
	var n = (t = t.rgb()).r / 255,
		e = t.g / 255,
		r = t.b / 255,
		o = Math.min(n, e, r),
		i = Math.max(n, e, r),
		u = NaN,
		a = i - o,
		c = (i + o) / 2;
	return (
		a
			? ((u = n === i ? (e - r) / a + 6 * (e < r) : e === i ? (r - n) / a + 2 : (n - e) / a + 4),
			  (a /= c < 0.5 ? i + o : 2 - i - o),
			  (u *= 60))
			: (a = c > 0 && c < 1 ? 0 : u),
		new Fn(u, a, c, t.opacity)
	);
}
function Fn(t, n, e, r) {
	(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
}
function Sn(t, n, e) {
	return (
		255 *
		(t < 60 ? n + ((e - n) * t) / 60 : t < 180 ? e : t < 240 ? n + ((e - n) * (240 - t)) / 60 : n)
	);
}
en(on, wn, {
	copy: function (t) {
		return Object.assign(new this.constructor(), this, t);
	},
	displayable: function () {
		return this.rgb().displayable();
	},
	hex: vn,
	formatHex: vn,
	formatHsl: function () {
		return An(this).formatHsl();
	},
	formatRgb: bn,
	toString: bn
}),
	en(
		kn,
		Cn,
		rn(on, {
			brighter: function (t) {
				return (
					(t = null == t ? un : Math.pow(un, t)),
					new kn(this.r * t, this.g * t, this.b * t, this.opacity)
				);
			},
			darker: function (t) {
				return (
					(t = null == t ? 0.7 : Math.pow(0.7, t)),
					new kn(this.r * t, this.g * t, this.b * t, this.opacity)
				);
			},
			rgb: function () {
				return this;
			},
			displayable: function () {
				return (
					-0.5 <= this.r &&
					this.r < 255.5 &&
					-0.5 <= this.g &&
					this.g < 255.5 &&
					-0.5 <= this.b &&
					this.b < 255.5 &&
					0 <= this.opacity &&
					this.opacity <= 1
				);
			},
			hex: Tn,
			formatHex: Tn,
			formatRgb: Nn,
			toString: Nn
		})
	),
	en(
		Fn,
		function (t, n, e, r) {
			return 1 === arguments.length ? An(t) : new Fn(t, n, e, null == r ? 1 : r);
		},
		rn(on, {
			brighter: function (t) {
				return (
					(t = null == t ? un : Math.pow(un, t)), new Fn(this.h, this.s, this.l * t, this.opacity)
				);
			},
			darker: function (t) {
				return (
					(t = null == t ? 0.7 : Math.pow(0.7, t)), new Fn(this.h, this.s, this.l * t, this.opacity)
				);
			},
			rgb: function () {
				var t = (this.h % 360) + 360 * (this.h < 0),
					n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
					e = this.l,
					r = e + (e < 0.5 ? e : 1 - e) * n,
					o = 2 * e - r;
				return new kn(
					Sn(t >= 240 ? t - 240 : t + 120, o, r),
					Sn(t, o, r),
					Sn(t < 120 ? t + 240 : t - 120, o, r),
					this.opacity
				);
			},
			displayable: function () {
				return (
					((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
					0 <= this.l &&
					this.l <= 1 &&
					0 <= this.opacity &&
					this.opacity <= 1
				);
			},
			formatHsl: function () {
				var t = this.opacity;
				return (
					(1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'hsl(' : 'hsla(') +
					(this.h || 0) +
					', ' +
					100 * (this.s || 0) +
					'%, ' +
					100 * (this.l || 0) +
					'%' +
					(1 === t ? ')' : ', ' + t + ')')
				);
			}
		})
	);
var En = (t) => () => t;
function jn(t) {
	return 1 == (t = +t)
		? Ln
		: function (n, e) {
				return e - n
					? (function (t, n, e) {
							return (
								(t = Math.pow(t, e)),
								(n = Math.pow(n, e) - t),
								(e = 1 / e),
								function (r) {
									return Math.pow(t + r * n, e);
								}
							);
					  })(n, e, t)
					: En(isNaN(n) ? e : n);
		  };
}
function Ln(t, n) {
	var e = n - t;
	return e
		? (function (t, n) {
				return function (e) {
					return t + e * n;
				};
		  })(t, e)
		: En(isNaN(t) ? n : t);
}
var Yn = (function t(n) {
	var e = jn(n);
	function r(t, n) {
		var r = e((t = Cn(t)).r, (n = Cn(n)).r),
			o = e(t.g, n.g),
			i = e(t.b, n.b),
			u = Ln(t.opacity, n.opacity);
		return function (n) {
			return (t.r = r(n)), (t.g = o(n)), (t.b = i(n)), (t.opacity = u(n)), t + '';
		};
	}
	return (r.gamma = t), r;
})(1);
function Hn(t, n) {
	n || (n = []);
	var e,
		r = t ? Math.min(n.length, t.length) : 0,
		o = n.slice();
	return function (i) {
		for (e = 0; e < r; ++e) o[e] = t[e] * (1 - i) + n[e] * i;
		return o;
	};
}
function _n(t, n) {
	var e,
		r = n ? n.length : 0,
		o = t ? Math.min(r, t.length) : 0,
		i = new Array(o),
		u = new Array(r);
	for (e = 0; e < o; ++e) i[e] = Wn(t[e], n[e]);
	for (; e < r; ++e) u[e] = n[e];
	return function (t) {
		for (e = 0; e < o; ++e) u[e] = i[e](t);
		return u;
	};
}
function zn(t, n) {
	var e = new Date();
	return (
		(t = +t),
		(n = +n),
		function (r) {
			return e.setTime(t * (1 - r) + n * r), e;
		}
	);
}
function On(t, n) {
	return (
		(t = +t),
		(n = +n),
		function (e) {
			return t * (1 - e) + n * e;
		}
	);
}
function qn(t, n) {
	var e,
		r = {},
		o = {};
	for (e in ((null !== t && 'object' == typeof t) || (t = {}),
	(null !== n && 'object' == typeof n) || (n = {}),
	n))
		e in t ? (r[e] = Wn(t[e], n[e])) : (o[e] = n[e]);
	return function (t) {
		for (e in r) o[e] = r[e](t);
		return o;
	};
}
var Rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	Pn = new RegExp(Rn.source, 'g');
function Vn(t, n) {
	var e,
		r,
		o,
		i = (Rn.lastIndex = Pn.lastIndex = 0),
		u = -1,
		a = [],
		c = [];
	for (t += '', n += ''; (e = Rn.exec(t)) && (r = Pn.exec(n)); )
		(o = r.index) > i && ((o = n.slice(i, o)), a[u] ? (a[u] += o) : (a[++u] = o)),
			(e = e[0]) === (r = r[0])
				? a[u]
					? (a[u] += r)
					: (a[++u] = r)
				: ((a[++u] = null), c.push({ i: u, x: On(e, r) })),
			(i = Pn.lastIndex);
	return (
		i < n.length && ((o = n.slice(i)), a[u] ? (a[u] += o) : (a[++u] = o)),
		a.length < 2
			? c[0]
				? (function (t) {
						return function (n) {
							return t(n) + '';
						};
				  })(c[0].x)
				: (function (t) {
						return function () {
							return t;
						};
				  })(n)
			: ((n = c.length),
			  function (t) {
					for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
					return a.join('');
			  })
	);
}
function Wn(t, n) {
	var e,
		r,
		o = typeof n;
	return null == n || 'boolean' === o
		? En(n)
		: ('number' === o
				? On
				: 'string' === o
				? (e = wn(n))
					? ((n = e), Yn)
					: Vn
				: n instanceof wn
				? Yn
				: n instanceof Date
				? zn
				: ((r = n),
				  !ArrayBuffer.isView(r) || r instanceof DataView
						? Array.isArray(n)
							? _n
							: ('function' != typeof n.valueOf && 'function' != typeof n.toString) || isNaN(n)
							? qn
							: On
						: Hn))(t, n);
}
function Zn(t, n) {
	return (
		(t = +t),
		(n = +n),
		function (e) {
			return Math.round(t * (1 - e) + n * e);
		}
	);
}
function In(t) {
	return +t;
}
var Xn = [0, 1];
function Bn(t) {
	return t;
}
function Jn(t, n) {
	return (n -= t = +t)
		? function (e) {
				return (e - t) / n;
		  }
		: ((e = isNaN(n) ? NaN : 0.5),
		  function () {
				return e;
		  });
	var e;
}
function Qn(t, n, e) {
	var r = t[0],
		o = t[1],
		i = n[0],
		u = n[1];
	return (
		o < r ? ((r = Jn(o, r)), (i = e(u, i))) : ((r = Jn(r, o)), (i = e(i, u))),
		function (t) {
			return i(r(t));
		}
	);
}
function Gn(t, n, e) {
	var r = Math.min(t.length, n.length) - 1,
		o = new Array(r),
		i = new Array(r),
		u = -1;
	for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++u < r; )
		(o[u] = Jn(t[u], t[u + 1])), (i[u] = e(n[u], n[u + 1]));
	return function (n) {
		var e = Jt(t, n, 1, r) - 1;
		return i[e](o[e](n));
	};
}
function Kn(t, n) {
	return n
		.domain(t.domain())
		.range(t.range())
		.interpolate(t.interpolate())
		.clamp(t.clamp())
		.unknown(t.unknown());
}
function te() {
	var t,
		n,
		e,
		r,
		o,
		i,
		u = Xn,
		a = Xn,
		c = Wn,
		l = Bn;
	function s() {
		var t,
			n,
			e,
			c = Math.min(u.length, a.length);
		return (
			l !== Bn &&
				((t = u[0]),
				(n = u[c - 1]),
				t > n && ((e = t), (t = n), (n = e)),
				(l = function (e) {
					return Math.max(t, Math.min(n, e));
				})),
			(r = c > 2 ? Gn : Qn),
			(o = i = null),
			f
		);
	}
	function f(n) {
		return null == n || isNaN((n = +n)) ? e : (o || (o = r(u.map(t), a, c)))(t(l(n)));
	}
	return (
		(f.invert = function (e) {
			return l(n((i || (i = r(a, u.map(t), On)))(e)));
		}),
		(f.domain = function (t) {
			return arguments.length ? ((u = Array.from(t, In)), s()) : u.slice();
		}),
		(f.range = function (t) {
			return arguments.length ? ((a = Array.from(t)), s()) : a.slice();
		}),
		(f.rangeRound = function (t) {
			return (a = Array.from(t)), (c = Zn), s();
		}),
		(f.clamp = function (t) {
			return arguments.length ? ((l = !!t || Bn), s()) : l !== Bn;
		}),
		(f.interpolate = function (t) {
			return arguments.length ? ((c = t), s()) : c;
		}),
		(f.unknown = function (t) {
			return arguments.length ? ((e = t), f) : e;
		}),
		function (e, r) {
			return (t = e), (n = r), s();
		}
	);
}
function ne() {
	return te()(Bn, Bn);
}
function ee(t, n) {
	if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf('e')) < 0) return null;
	var e,
		r = t.slice(0, e);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
}
function re(t) {
	return (t = ee(Math.abs(t))) ? t[1] : NaN;
}
var oe,
	ie = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ue(t) {
	if (!(n = ie.exec(t))) throw new Error('invalid format: ' + t);
	var n;
	return new ae({
		fill: n[1],
		align: n[2],
		sign: n[3],
		symbol: n[4],
		zero: n[5],
		width: n[6],
		comma: n[7],
		precision: n[8] && n[8].slice(1),
		trim: n[9],
		type: n[10]
	});
}
function ae(t) {
	(this.fill = void 0 === t.fill ? ' ' : t.fill + ''),
		(this.align = void 0 === t.align ? '>' : t.align + ''),
		(this.sign = void 0 === t.sign ? '-' : t.sign + ''),
		(this.symbol = void 0 === t.symbol ? '' : t.symbol + ''),
		(this.zero = !!t.zero),
		(this.width = void 0 === t.width ? void 0 : +t.width),
		(this.comma = !!t.comma),
		(this.precision = void 0 === t.precision ? void 0 : +t.precision),
		(this.trim = !!t.trim),
		(this.type = void 0 === t.type ? '' : t.type + '');
}
function ce(t, n) {
	var e = ee(t, n);
	if (!e) return t + '';
	var r = e[0],
		o = e[1];
	return o < 0
		? '0.' + new Array(-o).join('0') + r
		: r.length > o + 1
		? r.slice(0, o + 1) + '.' + r.slice(o + 1)
		: r + new Array(o - r.length + 2).join('0');
}
(ue.prototype = ae.prototype),
	(ae.prototype.toString = function () {
		return (
			this.fill +
			this.align +
			this.sign +
			this.symbol +
			(this.zero ? '0' : '') +
			(void 0 === this.width ? '' : Math.max(1, 0 | this.width)) +
			(this.comma ? ',' : '') +
			(void 0 === this.precision ? '' : '.' + Math.max(0, 0 | this.precision)) +
			(this.trim ? '~' : '') +
			this.type
		);
	});
var le = {
	'%': (t, n) => (100 * t).toFixed(n),
	b: (t) => Math.round(t).toString(2),
	c: (t) => t + '',
	d: function (t) {
		return Math.abs((t = Math.round(t))) >= 1e21
			? t.toLocaleString('en').replace(/,/g, '')
			: t.toString(10);
	},
	e: (t, n) => t.toExponential(n),
	f: (t, n) => t.toFixed(n),
	g: (t, n) => t.toPrecision(n),
	o: (t) => Math.round(t).toString(8),
	p: (t, n) => ce(100 * t, n),
	r: ce,
	s: function (t, n) {
		var e = ee(t, n);
		if (!e) return t + '';
		var r = e[0],
			o = e[1],
			i = o - (oe = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
			u = r.length;
		return i === u
			? r
			: i > u
			? r + new Array(i - u + 1).join('0')
			: i > 0
			? r.slice(0, i) + '.' + r.slice(i)
			: '0.' + new Array(1 - i).join('0') + ee(t, Math.max(0, n + i - 1))[0];
	},
	X: (t) => Math.round(t).toString(16).toUpperCase(),
	x: (t) => Math.round(t).toString(16)
};
function se(t) {
	return t;
}
var fe,
	he,
	de,
	ge = Array.prototype.map,
	pe = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
function me(t) {
	var n,
		e,
		r =
			void 0 === t.grouping || void 0 === t.thousands
				? se
				: ((n = ge.call(t.grouping, Number)),
				  (e = t.thousands + ''),
				  function (t, r) {
						for (
							var o = t.length, i = [], u = 0, a = n[0], c = 0;
							o > 0 &&
							a > 0 &&
							(c + a + 1 > r && (a = Math.max(1, r - c)),
							i.push(t.substring((o -= a), o + a)),
							!((c += a + 1) > r));

						)
							a = n[(u = (u + 1) % n.length)];
						return i.reverse().join(e);
				  }),
		o = void 0 === t.currency ? '' : t.currency[0] + '',
		i = void 0 === t.currency ? '' : t.currency[1] + '',
		u = void 0 === t.decimal ? '.' : t.decimal + '',
		a =
			void 0 === t.numerals
				? se
				: (function (t) {
						return function (n) {
							return n.replace(/[0-9]/g, function (n) {
								return t[+n];
							});
						};
				  })(ge.call(t.numerals, String)),
		c = void 0 === t.percent ? '%' : t.percent + '',
		l = void 0 === t.minus ? '−' : t.minus + '',
		s = void 0 === t.nan ? 'NaN' : t.nan + '';
	function f(t) {
		var n = (t = ue(t)).fill,
			e = t.align,
			f = t.sign,
			h = t.symbol,
			d = t.zero,
			g = t.width,
			p = t.comma,
			m = t.precision,
			y = t.trim,
			v = t.type;
		'n' === v ? ((p = !0), (v = 'g')) : le[v] || (void 0 === m && (m = 12), (y = !0), (v = 'g')),
			(d || ('0' === n && '=' === e)) && ((d = !0), (n = '0'), (e = '='));
		var b = '$' === h ? o : '#' === h && /[boxX]/.test(v) ? '0' + v.toLowerCase() : '',
			w = '$' === h ? i : /[%p]/.test(v) ? c : '',
			M = le[v],
			$ = /[defgprs%]/.test(v);
		function x(t) {
			var o,
				i,
				c,
				h = b,
				x = w;
			if ('c' === v) (x = M(t) + x), (t = '');
			else {
				var C = (t = +t) < 0 || 1 / t < 0;
				if (
					((t = isNaN(t) ? s : M(Math.abs(t), m)),
					y &&
						(t = (function (t) {
							t: for (var n, e = t.length, r = 1, o = -1; r < e; ++r)
								switch (t[r]) {
									case '.':
										o = n = r;
										break;
									case '0':
										0 === o && (o = r), (n = r);
										break;
									default:
										if (!+t[r]) break t;
										o > 0 && (o = 0);
								}
							return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t;
						})(t)),
					C && 0 == +t && '+' !== f && (C = !1),
					(h = (C ? ('(' === f ? f : l) : '-' === f || '(' === f ? '' : f) + h),
					(x = ('s' === v ? pe[8 + oe / 3] : '') + x + (C && '(' === f ? ')' : '')),
					$)
				)
					for (o = -1, i = t.length; ++o < i; )
						if (48 > (c = t.charCodeAt(o)) || c > 57) {
							(x = (46 === c ? u + t.slice(o + 1) : t.slice(o)) + x), (t = t.slice(0, o));
							break;
						}
			}
			p && !d && (t = r(t, 1 / 0));
			var k = h.length + t.length + x.length,
				T = k < g ? new Array(g - k + 1).join(n) : '';
			switch ((p && d && ((t = r(T + t, T.length ? g - x.length : 1 / 0)), (T = '')), e)) {
				case '<':
					t = h + t + x + T;
					break;
				case '=':
					t = h + T + t + x;
					break;
				case '^':
					t = T.slice(0, (k = T.length >> 1)) + h + t + x + T.slice(k);
					break;
				default:
					t = T + h + t + x;
			}
			return a(t);
		}
		return (
			(m =
				void 0 === m
					? 6
					: /[gprs]/.test(v)
					? Math.max(1, Math.min(21, m))
					: Math.max(0, Math.min(20, m))),
			(x.toString = function () {
				return t + '';
			}),
			x
		);
	}
	return {
		format: f,
		formatPrefix: function (t, n) {
			var e = f((((t = ue(t)).type = 'f'), t)),
				r = 3 * Math.max(-8, Math.min(8, Math.floor(re(n) / 3))),
				o = Math.pow(10, -r),
				i = pe[8 + r / 3];
			return function (t) {
				return e(o * t) + i;
			};
		}
	};
}
function ye(t, n, e, r) {
	var o,
		i = (function (t, n, e) {
			var r = Math.abs(n - t) / Math.max(0, e),
				o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
				i = r / o;
			return i >= Qt ? (o *= 10) : i >= Gt ? (o *= 5) : i >= Kt && (o *= 2), n < t ? -o : o;
		})(t, n, e);
	switch ((r = ue(null == r ? ',f' : r)).type) {
		case 's':
			var u = Math.max(Math.abs(t), Math.abs(n));
			return (
				null != r.precision ||
					isNaN(
						(o = (function (t, n) {
							return Math.max(
								0,
								3 * Math.max(-8, Math.min(8, Math.floor(re(n) / 3))) - re(Math.abs(t))
							);
						})(i, u))
					) ||
					(r.precision = o),
				de(r, u)
			);
		case '':
		case 'e':
		case 'g':
		case 'p':
		case 'r':
			null != r.precision ||
				isNaN(
					(o = (function (t, n) {
						return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, re(n) - re(t)) + 1;
					})(i, Math.max(Math.abs(t), Math.abs(n))))
				) ||
				(r.precision = o - ('e' === r.type));
			break;
		case 'f':
		case '%':
			null != r.precision ||
				isNaN(
					(o = (function (t) {
						return Math.max(0, -re(Math.abs(t)));
					})(i))
				) ||
				(r.precision = o - 2 * ('%' === r.type));
	}
	return he(r);
}
function ve(t) {
	var n = t.domain;
	return (
		(t.ticks = function (t) {
			var e = n();
			return (function (t, n, e) {
				var r,
					o,
					i,
					u,
					a = -1;
				if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
				if (((r = n < t) && ((o = t), (t = n), (n = o)), 0 === (u = tn(t, n, e)) || !isFinite(u)))
					return [];
				if (u > 0) {
					let e = Math.round(t / u),
						r = Math.round(n / u);
					for (e * u < t && ++e, r * u > n && --r, i = new Array((o = r - e + 1)); ++a < o; )
						i[a] = (e + a) * u;
				} else {
					u = -u;
					let e = Math.round(t * u),
						r = Math.round(n * u);
					for (e / u < t && ++e, r / u > n && --r, i = new Array((o = r - e + 1)); ++a < o; )
						i[a] = (e + a) / u;
				}
				return r && i.reverse(), i;
			})(e[0], e[e.length - 1], null == t ? 10 : t);
		}),
		(t.tickFormat = function (t, e) {
			var r = n();
			return ye(r[0], r[r.length - 1], null == t ? 10 : t, e);
		}),
		(t.nice = function (e) {
			null == e && (e = 10);
			var r,
				o,
				i = n(),
				u = 0,
				a = i.length - 1,
				c = i[u],
				l = i[a],
				s = 10;
			for (l < c && ((o = c), (c = l), (l = o), (o = u), (u = a), (a = o)); s-- > 0; ) {
				if ((o = tn(c, l, e)) === r) return (i[u] = c), (i[a] = l), n(i);
				if (o > 0) (c = Math.floor(c / o) * o), (l = Math.ceil(l / o) * o);
				else {
					if (!(o < 0)) break;
					(c = Math.ceil(c * o) / o), (l = Math.floor(l * o) / o);
				}
				r = o;
			}
			return t;
		}),
		t
	);
}
function be() {
	var t = ne();
	return (
		(t.copy = function () {
			return Kn(t, be());
		}),
		nn.apply(t, arguments),
		ve(t)
	);
}
function we(t) {
	return function (n) {
		return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
	};
}
function Me(t) {
	return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function $e(t) {
	return t < 0 ? -t * t : t * t;
}
function xe(t) {
	var n = t(Bn, Bn),
		e = 1;
	function r() {
		return 1 === e ? t(Bn, Bn) : 0.5 === e ? t(Me, $e) : t(we(e), we(1 / e));
	}
	return (
		(n.exponent = function (t) {
			return arguments.length ? ((e = +t), r()) : e;
		}),
		ve(n)
	);
}
function Ce() {
	var t = xe(te());
	return (
		(t.copy = function () {
			return Kn(t, Ce()).exponent(t.exponent());
		}),
		nn.apply(t, arguments),
		t
	);
}
function ke() {
	return Ce.apply(null, arguments).exponent(0.5);
}
function Te() {
	var t,
		n = 0,
		e = 1,
		r = 1,
		o = [0.5],
		i = [0, 1];
	function u(n) {
		return null != n && n <= n ? i[Jt(o, n, 0, r)] : t;
	}
	function a() {
		var t = -1;
		for (o = new Array(r); ++t < r; ) o[t] = ((t + 1) * e - (t - r) * n) / (r + 1);
		return u;
	}
	return (
		(u.domain = function (t) {
			return arguments.length ? (([n, e] = t), (n = +n), (e = +e), a()) : [n, e];
		}),
		(u.range = function (t) {
			return arguments.length ? ((r = (i = Array.from(t)).length - 1), a()) : i.slice();
		}),
		(u.invertExtent = function (t) {
			var u = i.indexOf(t);
			return u < 0 ? [NaN, NaN] : u < 1 ? [n, o[0]] : u >= r ? [o[r - 1], e] : [o[u - 1], o[u]];
		}),
		(u.unknown = function (n) {
			return arguments.length ? ((t = n), u) : u;
		}),
		(u.thresholds = function () {
			return o.slice();
		}),
		(u.copy = function () {
			return Te().domain([n, e]).range(i).unknown(t);
		}),
		nn.apply(ve(u), arguments)
	);
}
(fe = me({ thousands: ',', grouping: [3], currency: ['$', ''] })),
	(he = fe.format),
	(de = fe.formatPrefix);
var Ne = new Date(),
	De = new Date();
function Ue(t, n, e, r) {
	function o(n) {
		return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
	}
	return (
		(o.floor = function (n) {
			return t((n = new Date(+n))), n;
		}),
		(o.ceil = function (e) {
			return t((e = new Date(e - 1))), n(e, 1), t(e), e;
		}),
		(o.round = function (t) {
			var n = o(t),
				e = o.ceil(t);
			return t - n < e - t ? n : e;
		}),
		(o.offset = function (t, e) {
			return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
		}),
		(o.range = function (e, r, i) {
			var u,
				a = [];
			if (((e = o.ceil(e)), (i = null == i ? 1 : Math.floor(i)), !(e < r && i > 0))) return a;
			do {
				a.push((u = new Date(+e))), n(e, i), t(e);
			} while (u < e && e < r);
			return a;
		}),
		(o.filter = function (e) {
			return Ue(
				function (n) {
					if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
				},
				function (t, r) {
					if (t >= t)
						if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
						else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
				}
			);
		}),
		e &&
			((o.count = function (n, r) {
				return Ne.setTime(+n), De.setTime(+r), t(Ne), t(De), Math.floor(e(Ne, De));
			}),
			(o.every = function (t) {
				return (
					(t = Math.floor(t)),
					isFinite(t) && t > 0
						? t > 1
							? o.filter(
									r
										? function (n) {
												return r(n) % t == 0;
										  }
										: function (n) {
												return o.count(0, n) % t == 0;
										  }
							  )
							: o
						: null
				);
			})),
		o
	);
}
var Ae = Ue(
	(t) => t.setHours(0, 0, 0, 0),
	(t, n) => t.setDate(t.getDate() + n),
	(t, n) => (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 864e5,
	(t) => t.getDate() - 1
);
function Fe(t) {
	return Ue(
		function (n) {
			n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)), n.setHours(0, 0, 0, 0);
		},
		function (t, n) {
			t.setDate(t.getDate() + 7 * n);
		},
		function (t, n) {
			return (n - t - 6e4 * (n.getTimezoneOffset() - t.getTimezoneOffset())) / 6048e5;
		}
	);
}
var Se = Fe(0),
	Ee = Fe(1);
Fe(2), Fe(3);
var je = Fe(4);
Fe(5), Fe(6);
var Le = Ue(
	function (t) {
		t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
	},
	function (t, n) {
		t.setFullYear(t.getFullYear() + n);
	},
	function (t, n) {
		return n.getFullYear() - t.getFullYear();
	},
	function (t) {
		return t.getFullYear();
	}
);
Le.every = function (t) {
	return isFinite((t = Math.floor(t))) && t > 0
		? Ue(
				function (n) {
					n.setFullYear(Math.floor(n.getFullYear() / t) * t),
						n.setMonth(0, 1),
						n.setHours(0, 0, 0, 0);
				},
				function (n, e) {
					n.setFullYear(n.getFullYear() + e * t);
				}
		  )
		: null;
};
var Ye = Ue(
	function (t) {
		t.setUTCHours(0, 0, 0, 0);
	},
	function (t, n) {
		t.setUTCDate(t.getUTCDate() + n);
	},
	function (t, n) {
		return (n - t) / 864e5;
	},
	function (t) {
		return t.getUTCDate() - 1;
	}
);
function He(t) {
	return Ue(
		function (n) {
			n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)), n.setUTCHours(0, 0, 0, 0);
		},
		function (t, n) {
			t.setUTCDate(t.getUTCDate() + 7 * n);
		},
		function (t, n) {
			return (n - t) / 6048e5;
		}
	);
}
var _e = He(0),
	ze = He(1);
He(2), He(3);
var Oe = He(4);
He(5), He(6);
var qe = Ue(
	function (t) {
		t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
	},
	function (t, n) {
		t.setUTCFullYear(t.getUTCFullYear() + n);
	},
	function (t, n) {
		return n.getUTCFullYear() - t.getUTCFullYear();
	},
	function (t) {
		return t.getUTCFullYear();
	}
);
function Re(t) {
	if (0 <= t.y && t.y < 100) {
		var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
		return n.setFullYear(t.y), n;
	}
	return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Pe(t) {
	if (0 <= t.y && t.y < 100) {
		var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
		return n.setUTCFullYear(t.y), n;
	}
	return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Ve(t, n, e) {
	return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
}
qe.every = function (t) {
	return isFinite((t = Math.floor(t))) && t > 0
		? Ue(
				function (n) {
					n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
						n.setUTCMonth(0, 1),
						n.setUTCHours(0, 0, 0, 0);
				},
				function (n, e) {
					n.setUTCFullYear(n.getUTCFullYear() + e * t);
				}
		  )
		: null;
};
var We,
	Ze,
	Ie = { '-': '', _: ' ', 0: '0' },
	Xe = /^\s*\d+/,
	Be = /^%/,
	Je = /[\\^$*+?|[\]().{}]/g;
function Qe(t, n, e) {
	var r = t < 0 ? '-' : '',
		o = (r ? -t : t) + '',
		i = o.length;
	return r + (i < e ? new Array(e - i + 1).join(n) + o : o);
}
function Ge(t) {
	return t.replace(Je, '\\$&');
}
function Ke(t) {
	return new RegExp('^(?:' + t.map(Ge).join('|') + ')', 'i');
}
function tr(t) {
	return new Map(t.map((t, n) => [t.toLowerCase(), n]));
}
function nr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 1));
	return r ? ((t.w = +r[0]), e + r[0].length) : -1;
}
function er(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 1));
	return r ? ((t.u = +r[0]), e + r[0].length) : -1;
}
function rr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.U = +r[0]), e + r[0].length) : -1;
}
function or(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.V = +r[0]), e + r[0].length) : -1;
}
function ir(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.W = +r[0]), e + r[0].length) : -1;
}
function ur(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 4));
	return r ? ((t.y = +r[0]), e + r[0].length) : -1;
}
function ar(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length) : -1;
}
function cr(t, n, e) {
	var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
	return r ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || '00'))), e + r[0].length) : -1;
}
function lr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 1));
	return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
}
function sr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
}
function fr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.d = +r[0]), e + r[0].length) : -1;
}
function hr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 3));
	return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
}
function dr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.H = +r[0]), e + r[0].length) : -1;
}
function gr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.M = +r[0]), e + r[0].length) : -1;
}
function pr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 2));
	return r ? ((t.S = +r[0]), e + r[0].length) : -1;
}
function mr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 3));
	return r ? ((t.L = +r[0]), e + r[0].length) : -1;
}
function yr(t, n, e) {
	var r = Xe.exec(n.slice(e, e + 6));
	return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
}
function vr(t, n, e) {
	var r = Be.exec(n.slice(e, e + 1));
	return r ? e + r[0].length : -1;
}
function br(t, n, e) {
	var r = Xe.exec(n.slice(e));
	return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
}
function wr(t, n, e) {
	var r = Xe.exec(n.slice(e));
	return r ? ((t.s = +r[0]), e + r[0].length) : -1;
}
function Mr(t, n) {
	return Qe(t.getDate(), n, 2);
}
function $r(t, n) {
	return Qe(t.getHours(), n, 2);
}
function xr(t, n) {
	return Qe(t.getHours() % 12 || 12, n, 2);
}
function Cr(t, n) {
	return Qe(1 + Ae.count(Le(t), t), n, 3);
}
function kr(t, n) {
	return Qe(t.getMilliseconds(), n, 3);
}
function Tr(t, n) {
	return kr(t, n) + '000';
}
function Nr(t, n) {
	return Qe(t.getMonth() + 1, n, 2);
}
function Dr(t, n) {
	return Qe(t.getMinutes(), n, 2);
}
function Ur(t, n) {
	return Qe(t.getSeconds(), n, 2);
}
function Ar(t) {
	var n = t.getDay();
	return 0 === n ? 7 : n;
}
function Fr(t, n) {
	return Qe(Se.count(Le(t) - 1, t), n, 2);
}
function Sr(t) {
	var n = t.getDay();
	return n >= 4 || 0 === n ? je(t) : je.ceil(t);
}
function Er(t, n) {
	return (t = Sr(t)), Qe(je.count(Le(t), t) + (4 === Le(t).getDay()), n, 2);
}
function jr(t) {
	return t.getDay();
}
function Lr(t, n) {
	return Qe(Ee.count(Le(t) - 1, t), n, 2);
}
function Yr(t, n) {
	return Qe(t.getFullYear() % 100, n, 2);
}
function Hr(t, n) {
	return Qe((t = Sr(t)).getFullYear() % 100, n, 2);
}
function _r(t, n) {
	return Qe(t.getFullYear() % 1e4, n, 4);
}
function zr(t, n) {
	var e = t.getDay();
	return Qe((t = e >= 4 || 0 === e ? je(t) : je.ceil(t)).getFullYear() % 1e4, n, 4);
}
function Or(t) {
	var n = t.getTimezoneOffset();
	return (n > 0 ? '-' : ((n *= -1), '+')) + Qe((n / 60) | 0, '0', 2) + Qe(n % 60, '0', 2);
}
function qr(t, n) {
	return Qe(t.getUTCDate(), n, 2);
}
function Rr(t, n) {
	return Qe(t.getUTCHours(), n, 2);
}
function Pr(t, n) {
	return Qe(t.getUTCHours() % 12 || 12, n, 2);
}
function Vr(t, n) {
	return Qe(1 + Ye.count(qe(t), t), n, 3);
}
function Wr(t, n) {
	return Qe(t.getUTCMilliseconds(), n, 3);
}
function Zr(t, n) {
	return Wr(t, n) + '000';
}
function Ir(t, n) {
	return Qe(t.getUTCMonth() + 1, n, 2);
}
function Xr(t, n) {
	return Qe(t.getUTCMinutes(), n, 2);
}
function Br(t, n) {
	return Qe(t.getUTCSeconds(), n, 2);
}
function Jr(t) {
	var n = t.getUTCDay();
	return 0 === n ? 7 : n;
}
function Qr(t, n) {
	return Qe(_e.count(qe(t) - 1, t), n, 2);
}
function Gr(t) {
	var n = t.getUTCDay();
	return n >= 4 || 0 === n ? Oe(t) : Oe.ceil(t);
}
function Kr(t, n) {
	return (t = Gr(t)), Qe(Oe.count(qe(t), t) + (4 === qe(t).getUTCDay()), n, 2);
}
function to(t) {
	return t.getUTCDay();
}
function no(t, n) {
	return Qe(ze.count(qe(t) - 1, t), n, 2);
}
function eo(t, n) {
	return Qe(t.getUTCFullYear() % 100, n, 2);
}
function ro(t, n) {
	return Qe((t = Gr(t)).getUTCFullYear() % 100, n, 2);
}
function oo(t, n) {
	return Qe(t.getUTCFullYear() % 1e4, n, 4);
}
function io(t, n) {
	var e = t.getUTCDay();
	return Qe((t = e >= 4 || 0 === e ? Oe(t) : Oe.ceil(t)).getUTCFullYear() % 1e4, n, 4);
}
function uo() {
	return '+0000';
}
function ao() {
	return '%';
}
function co(t) {
	return +t;
}
function lo(t) {
	return Math.floor(+t / 1e3);
}
!(function (t) {
	(We = (function (t) {
		var n = t.dateTime,
			e = t.date,
			r = t.time,
			o = t.periods,
			i = t.days,
			u = t.shortDays,
			a = t.months,
			c = t.shortMonths,
			l = Ke(o),
			s = tr(o),
			f = Ke(i),
			h = tr(i),
			d = Ke(u),
			g = tr(u),
			p = Ke(a),
			m = tr(a),
			y = Ke(c),
			v = tr(c),
			b = {
				a: function (t) {
					return u[t.getDay()];
				},
				A: function (t) {
					return i[t.getDay()];
				},
				b: function (t) {
					return c[t.getMonth()];
				},
				B: function (t) {
					return a[t.getMonth()];
				},
				c: null,
				d: Mr,
				e: Mr,
				f: Tr,
				g: Hr,
				G: zr,
				H: $r,
				I: xr,
				j: Cr,
				L: kr,
				m: Nr,
				M: Dr,
				p: function (t) {
					return o[+(t.getHours() >= 12)];
				},
				q: function (t) {
					return 1 + ~~(t.getMonth() / 3);
				},
				Q: co,
				s: lo,
				S: Ur,
				u: Ar,
				U: Fr,
				V: Er,
				w: jr,
				W: Lr,
				x: null,
				X: null,
				y: Yr,
				Y: _r,
				Z: Or,
				'%': ao
			},
			w = {
				a: function (t) {
					return u[t.getUTCDay()];
				},
				A: function (t) {
					return i[t.getUTCDay()];
				},
				b: function (t) {
					return c[t.getUTCMonth()];
				},
				B: function (t) {
					return a[t.getUTCMonth()];
				},
				c: null,
				d: qr,
				e: qr,
				f: Zr,
				g: ro,
				G: io,
				H: Rr,
				I: Pr,
				j: Vr,
				L: Wr,
				m: Ir,
				M: Xr,
				p: function (t) {
					return o[+(t.getUTCHours() >= 12)];
				},
				q: function (t) {
					return 1 + ~~(t.getUTCMonth() / 3);
				},
				Q: co,
				s: lo,
				S: Br,
				u: Jr,
				U: Qr,
				V: Kr,
				w: to,
				W: no,
				x: null,
				X: null,
				y: eo,
				Y: oo,
				Z: uo,
				'%': ao
			},
			M = {
				a: function (t, n, e) {
					var r = d.exec(n.slice(e));
					return r ? ((t.w = g.get(r[0].toLowerCase())), e + r[0].length) : -1;
				},
				A: function (t, n, e) {
					var r = f.exec(n.slice(e));
					return r ? ((t.w = h.get(r[0].toLowerCase())), e + r[0].length) : -1;
				},
				b: function (t, n, e) {
					var r = y.exec(n.slice(e));
					return r ? ((t.m = v.get(r[0].toLowerCase())), e + r[0].length) : -1;
				},
				B: function (t, n, e) {
					var r = p.exec(n.slice(e));
					return r ? ((t.m = m.get(r[0].toLowerCase())), e + r[0].length) : -1;
				},
				c: function (t, e, r) {
					return C(t, n, e, r);
				},
				d: fr,
				e: fr,
				f: yr,
				g: ar,
				G: ur,
				H: dr,
				I: dr,
				j: hr,
				L: mr,
				m: sr,
				M: gr,
				p: function (t, n, e) {
					var r = l.exec(n.slice(e));
					return r ? ((t.p = s.get(r[0].toLowerCase())), e + r[0].length) : -1;
				},
				q: lr,
				Q: br,
				s: wr,
				S: pr,
				u: er,
				U: rr,
				V: or,
				w: nr,
				W: ir,
				x: function (t, n, r) {
					return C(t, e, n, r);
				},
				X: function (t, n, e) {
					return C(t, r, n, e);
				},
				y: ar,
				Y: ur,
				Z: cr,
				'%': vr
			};
		function $(t, n) {
			return function (e) {
				var r,
					o,
					i,
					u = [],
					a = -1,
					c = 0,
					l = t.length;
				for (e instanceof Date || (e = new Date(+e)); ++a < l; )
					37 === t.charCodeAt(a) &&
						(u.push(t.slice(c, a)),
						null != (o = Ie[(r = t.charAt(++a))])
							? (r = t.charAt(++a))
							: (o = 'e' === r ? ' ' : '0'),
						(i = n[r]) && (r = i(e, o)),
						u.push(r),
						(c = a + 1));
				return u.push(t.slice(c, a)), u.join('');
			};
		}
		function x(t, n) {
			return function (e) {
				var r,
					o,
					i = Ve(1900, void 0, 1);
				if (C(i, t, (e += ''), 0) != e.length) return null;
				if ('Q' in i) return new Date(i.Q);
				if ('s' in i) return new Date(1e3 * i.s + ('L' in i ? i.L : 0));
				if (
					(n && !('Z' in i) && (i.Z = 0),
					'p' in i && (i.H = (i.H % 12) + 12 * i.p),
					void 0 === i.m && (i.m = 'q' in i ? i.q : 0),
					'V' in i)
				) {
					if (i.V < 1 || i.V > 53) return null;
					'w' in i || (i.w = 1),
						'Z' in i
							? ((o = (r = Pe(Ve(i.y, 0, 1))).getUTCDay()),
							  (r = o > 4 || 0 === o ? ze.ceil(r) : ze(r)),
							  (r = Ye.offset(r, 7 * (i.V - 1))),
							  (i.y = r.getUTCFullYear()),
							  (i.m = r.getUTCMonth()),
							  (i.d = r.getUTCDate() + ((i.w + 6) % 7)))
							: ((o = (r = Re(Ve(i.y, 0, 1))).getDay()),
							  (r = o > 4 || 0 === o ? Ee.ceil(r) : Ee(r)),
							  (r = Ae.offset(r, 7 * (i.V - 1))),
							  (i.y = r.getFullYear()),
							  (i.m = r.getMonth()),
							  (i.d = r.getDate() + ((i.w + 6) % 7)));
				} else
					('W' in i || 'U' in i) &&
						('w' in i || (i.w = 'u' in i ? i.u % 7 : 'W' in i ? 1 : 0),
						(o = 'Z' in i ? Pe(Ve(i.y, 0, 1)).getUTCDay() : Re(Ve(i.y, 0, 1)).getDay()),
						(i.m = 0),
						(i.d =
							'W' in i
								? ((i.w + 6) % 7) + 7 * i.W - ((o + 5) % 7)
								: i.w + 7 * i.U - ((o + 6) % 7)));
				return 'Z' in i ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Pe(i)) : Re(i);
			};
		}
		function C(t, n, e, r) {
			for (var o, i, u = 0, a = n.length, c = e.length; u < a; ) {
				if (r >= c) return -1;
				if (37 === (o = n.charCodeAt(u++))) {
					if (((o = n.charAt(u++)), !(i = M[o in Ie ? n.charAt(u++) : o]) || (r = i(t, e, r)) < 0))
						return -1;
				} else if (o != e.charCodeAt(r++)) return -1;
			}
			return r;
		}
		return (
			(b.x = $(e, b)),
			(b.X = $(r, b)),
			(b.c = $(n, b)),
			(w.x = $(e, w)),
			(w.X = $(r, w)),
			(w.c = $(n, w)),
			{
				format: function (t) {
					var n = $((t += ''), b);
					return (
						(n.toString = function () {
							return t;
						}),
						n
					);
				},
				parse: function (t) {
					var n = x((t += ''), !1);
					return (
						(n.toString = function () {
							return t;
						}),
						n
					);
				},
				utcFormat: function (t) {
					var n = $((t += ''), w);
					return (
						(n.toString = function () {
							return t;
						}),
						n
					);
				},
				utcParse: function (t) {
					var n = x((t += ''), !0);
					return (
						(n.toString = function () {
							return t;
						}),
						n
					);
				}
			}
		);
	})(t)),
		(Ze = We.format),
		We.parse,
		We.utcFormat,
		We.utcParse;
})({
	dateTime: '%x, %X',
	date: '%-m/%-d/%Y',
	time: '%-I:%M:%S %p',
	periods: ['AM', 'PM'],
	days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	months: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
});
function so() {}
function fo(t, n) {
	var e = new so();
	if (t instanceof so)
		t.each(function (t, n) {
			e.set(n, t);
		});
	else if (Array.isArray(t)) {
		var r,
			o = -1,
			i = t.length;
		if (null == n) for (; ++o < i; ) e.set(o, t[o]);
		else for (; ++o < i; ) e.set(n((r = t[o]), o, t), r);
	} else if (t) for (var u in t) e.set(u, t[u]);
	return e;
}
function ho() {
	var t,
		n,
		e,
		r = [],
		o = [];
	function i(e, o, u, a) {
		if (o >= r.length) return null != t && e.sort(t), null != n ? n(e) : e;
		for (var c, l, s, f = -1, h = e.length, d = r[o++], g = fo(), p = u(); ++f < h; )
			(s = g.get((c = d((l = e[f])) + ''))) ? s.push(l) : g.set(c, [l]);
		return (
			g.each(function (t, n) {
				a(p, n, i(t, o, u, a));
			}),
			p
		);
	}
	function u(t, e) {
		if (++e > r.length) return t;
		var i,
			a = o[e - 1];
		return (
			null != n && e >= r.length
				? (i = t.entries())
				: ((i = []),
				  t.each(function (t, n) {
						i.push({ key: n, values: u(t, e) });
				  })),
			null != a
				? i.sort(function (t, n) {
						return a(t.key, n.key);
				  })
				: i
		);
	}
	return (e = {
		object: function (t) {
			return i(t, 0, go, po);
		},
		map: function (t) {
			return i(t, 0, mo, yo);
		},
		entries: function (t) {
			return u(i(t, 0, mo, yo), 0);
		},
		key: function (t) {
			return r.push(t), e;
		},
		sortKeys: function (t) {
			return (o[r.length - 1] = t), e;
		},
		sortValues: function (n) {
			return (t = n), e;
		},
		rollup: function (t) {
			return (n = t), e;
		}
	});
}
function go() {
	return {};
}
function po(t, n, e) {
	t[n] = e;
}
function mo() {
	return fo();
}
function yo(t, n, e) {
	t.set(n, e);
}
function vo() {}
so.prototype = fo.prototype = {
	constructor: so,
	has: function (t) {
		return '$' + t in this;
	},
	get: function (t) {
		return this['$' + t];
	},
	set: function (t, n) {
		return (this['$' + t] = n), this;
	},
	remove: function (t) {
		var n = '$' + t;
		return n in this && delete this[n];
	},
	clear: function () {
		for (var t in this) '$' === t[0] && delete this[t];
	},
	keys: function () {
		var t = [];
		for (var n in this) '$' === n[0] && t.push(n.slice(1));
		return t;
	},
	values: function () {
		var t = [];
		for (var n in this) '$' === n[0] && t.push(this[n]);
		return t;
	},
	entries: function () {
		var t = [];
		for (var n in this) '$' === n[0] && t.push({ key: n.slice(1), value: this[n] });
		return t;
	},
	size: function () {
		var t = 0;
		for (var n in this) '$' === n[0] && ++t;
		return t;
	},
	empty: function () {
		for (var t in this) if ('$' === t[0]) return !1;
		return !0;
	},
	each: function (t) {
		for (var n in this) '$' === n[0] && t(this[n], n.slice(1), this);
	}
};
var bo = fo.prototype;
vo.prototype = {
	constructor: vo,
	has: bo.has,
	add: function (t) {
		return (this['$' + (t += '')] = t), this;
	},
	remove: bo.remove,
	clear: bo.clear,
	values: bo.keys,
	size: bo.size,
	empty: bo.empty,
	each: bo.each
};
export {
	Ae as $,
	a as A,
	ft as B,
	Tt as C,
	B as D,
	ot as E,
	w as F,
	g as G,
	G as H,
	yt as I,
	p as J,
	R as K,
	y as L,
	u as M,
	be as N,
	ke as O,
	rt as P,
	O as Q,
	Nt as R,
	Ct as S,
	zt as T,
	k as U,
	H as V,
	U as W,
	f as X,
	x as Y,
	Ze as Z,
	Te as _,
	S as a,
	It as a0,
	ho as a1,
	q as a2,
	Ot as a3,
	Rt as a4,
	qt as a5,
	A as b,
	E as c,
	$ as d,
	C as e,
	M as f,
	j as g,
	Y as h,
	xt as i,
	vt as j,
	N as k,
	D as l,
	bt as m,
	L as n,
	wt as o,
	pt as p,
	mt as q,
	gt as r,
	h as s,
	T as t,
	ht as u,
	dt as v,
	Mt as w,
	X as x,
	Z as y,
	W as z
};
