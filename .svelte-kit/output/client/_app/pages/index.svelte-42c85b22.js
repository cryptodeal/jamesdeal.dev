var e = Object.defineProperty,
	t = Object.prototype.hasOwnProperty,
	n = Object.getOwnPropertySymbols,
	a = Object.prototype.propertyIsEnumerable,
	r = (t, n, a) =>
		n in t ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[n] = a),
	s = (e, s) => {
		for (var i in s || (s = {})) t.call(s, i) && r(e, i, s[i]);
		if (n) for (var i of n(s)) a.call(s, i) && r(e, i, s[i]);
		return e;
	};
import {
	N as i,
	O as o,
	S as l,
	i as c,
	s as d,
	e as f,
	c as p,
	a as h,
	d as u,
	b as g,
	P as m,
	f as y,
	Q as $,
	L as v,
	v as x,
	r as b,
	l as w,
	B as T,
	u as z,
	G as S,
	R as Z,
	x as R,
	J as k,
	C as A,
	H as D,
	U as P,
	F as E,
	D as M,
	V as N,
	W as C,
	X as I,
	M as j,
	Y as W,
	Z as O,
	_ as V,
	$ as H,
	a0 as L,
	j as _,
	k as J,
	m as B,
	n as U,
	o as X,
	w as G,
	t as Y,
	K as F,
	g as q,
	a1 as K
} from '../chunks/vendor-112f5557.js';
import { L as Q, a as ee, b as te, N as ne } from '../chunks/test-7f96a728.js';
var ae = {
	format: 'jpeg',
	width: 600,
	height: 600,
	space: 'srgb',
	channels: 3,
	depth: 'uchar',
	density: 72,
	chromaSubsampling: '4:4:4',
	isProgressive: !1,
	hasProfile: !1,
	hasAlpha: !1,
	aspect: 1,
	src: '/_app/assets/headshot1-cddb4609.jpeg'
};
var re = {
	format: 'jpeg',
	width: 800,
	height: 600,
	space: 'srgb',
	channels: 3,
	depth: 'uchar',
	density: 72,
	chromaSubsampling: '4:4:4',
	isProgressive: !1,
	hasProfile: !1,
	hasAlpha: !1,
	aspect: 1.3333333333333333,
	src: '/_app/assets/test-905dce3f.jpeg'
};
function se(e) {
	return 0 === (t = e) || t
		? Array.isArray(e)
			? (t) => e.map((e) => ('function' != typeof e ? t[e] : e(t)))
			: 'function' != typeof e
			? (t) => t[e]
			: e
		: null;
	var t;
}
function ie(e) {
	return (function (e) {
		const t = {};
		for (const n of e) {
			if (Object(n) !== n) throw new TypeError('iterable for fromEntries should yield objects');
			const { 0: e, 1: a } = n;
			Object.defineProperty(t, e, { configurable: !0, enumerable: !0, writable: !0, value: a });
		}
		return t;
	})(Object.entries(e).filter(([e, t]) => void 0 !== t));
}
function oe(e = [], t) {
	return !0 === Array.isArray(t) ? t.map((t, n) => (null === t ? e[n] : t)) : e;
}
function le(e) {
	return function ([t, n]) {
		return t ? oe(t[e], n) : n;
	};
}
var ce = { x: i, y: i, z: i, r: o };
function de(e) {
	return e;
}
function fe(e) {
	return (t) => Math.log(e * t);
}
function pe(e) {
	return (t) => e * Math.exp(t);
}
function he(e) {
	return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function ue(e) {
	return function (t) {
		return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
	};
}
function ge(e, t) {
	if ('function' != typeof e.range) throw new Error('Scale method `range` must be a function');
	if ('function' != typeof e.domain) throw new Error('Scale method `domain` must be a function');
	if (!Array.isArray(t)) return e.domain();
	2 !== e.domain().length &&
		console.warn(
			"[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:",
			e.domain()
		),
		2 !== e.range().length &&
			console.warn(
				"[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:",
				e.range()
			);
	const { lift: n, ground: a } = (function (e) {
			const t = (function (e) {
				return e.constant
					? 'symlog'
					: e.base
					? 'log'
					: e.exponent
					? 0.5 === e.exponent()
						? 'sqrt'
						: 'pow'
					: 'other';
			})(e);
			if ('log' === t) {
				const n = Math.sign(e.domain()[0]);
				return { lift: fe(n), ground: pe(n), scaleType: t };
			}
			if ('pow' === t) {
				const e = 1;
				return { lift: ue(e), ground: ue(1 / e), scaleType: t };
			}
			if ('sqrt' === t) {
				const e = 0.5;
				return { lift: ue(e), ground: ue(1 / e), scaleType: t };
			}
			if ('symlog' === t) {
				const e = 1;
				return {
					lift: ((n = e), (e) => Math.sign(e) * Math.log1p(Math.abs(e / n))),
					ground: he(e),
					scaleType: t
				};
			}
			var n;
			return { lift: de, ground: de, scaleType: t };
		})(e),
		r = e.domain()[0],
		s = '[object Date]' === Object.prototype.toString.call(r),
		[i, o] = e.domain().map((e) => n(s ? e.getTime() : e)),
		[l, c] = e.range(),
		d = t[0] || 0,
		f = t[1] || 0,
		p = (o - i) / (Math.abs(c - l) - d - f);
	return [i - d * p, f * p + o].map((e) => a(s ? new Date(e) : e));
}
function me(e) {
	return function ([t, n, a, r, s, i, o, l, c, d]) {
		if (null === n) return null;
		const f = (function (e, t, n, a, r, s) {
				return r
					? 'function' == typeof r
						? r({ width: t, height: n })
						: r
					: (function (e, t, n, a, r) {
							let s, i;
							return (
								!0 === r
									? ((s = 0), (i = 100))
									: ((s = 'r' === e ? 1 : 0), (i = 'y' === e ? n : 'r' === e ? 25 : t)),
								!0 === a ? [i, s] : [s, i]
							);
					  })(e, t, n, a, s);
			})(e, o, l, i, c, d),
			p = t === ce[e] ? t() : t.copy();
		return (
			p.domain(oe(n[e], a)).range(f),
			r && p.domain(ge(p, r)),
			!0 === s &&
				('function' == typeof p.nice
					? p.nice()
					: console.error(
							`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`
					  )),
			p
		);
	};
}
function ye([e, t]) {
	return (n) => {
		const a = e(n);
		return Array.isArray(a) ? a.map((e) => t(e)) : t(a);
	};
}
function $e([e]) {
	if ('function' == typeof e) {
		if ('function' == typeof e.range) return e.range();
		console.error("[LayerCake] Your scale doesn't have a `.range` method?");
	}
	return null;
}
var ve = { x: !1, y: !0, z: !1, r: !1 };
const xe = (e) => ({
		element: 4 & e[0],
		width: 64 & e[0],
		height: 128 & e[0],
		aspectRatio: 256 & e[0],
		containerWidth: 512 & e[0],
		containerHeight: 1024 & e[0]
	}),
	be = (e) => ({
		element: e[2],
		width: e[6],
		height: e[7],
		aspectRatio: e[8],
		containerWidth: e[9],
		containerHeight: e[10]
	});
function we(e) {
	let t, n, a, r;
	const s = e[54].default,
		i = k(s, e, e[53], be);
	return {
		c() {
			(t = f('div')), i && i.c(), this.h();
		},
		l(e) {
			t = p(e, 'DIV', { class: !0, style: !0 });
			var n = h(t);
			i && i.l(n), n.forEach(u), this.h();
		},
		h() {
			g(t, 'class', 'layercake-container svelte-1eyuhc0'),
				g(
					t,
					'style',
					(n =
						'\n\t\t\tposition:' +
						e[5] +
						';\n\t\t\t' +
						('absolute' === e[5] ? 'top:0;right:0;bottom:0;left:0;' : '') +
						'\n\t\t\t' +
						(!1 === e[4] ? 'pointer-events:none;' : '') +
						'\n\t\t')
				),
				m(() => e[56].call(t));
		},
		m(n, s) {
			y(n, t, s), i && i.m(t, null), e[55](t), (a = $(t, e[56].bind(t))), (r = !0);
		},
		p(e, a) {
			i && i.p && (!r || (1988 & a[0]) | (4194304 & a[1])) && v(i, s, e, e[53], a, xe, be),
				(!r ||
					(48 & a[0] &&
						n !==
							(n =
								'\n\t\t\tposition:' +
								e[5] +
								';\n\t\t\t' +
								('absolute' === e[5] ? 'top:0;right:0;bottom:0;left:0;' : '') +
								'\n\t\t\t' +
								(!1 === e[4] ? 'pointer-events:none;' : '') +
								'\n\t\t'))) &&
					g(t, 'style', n);
		},
		i(e) {
			r || (x(i, e), (r = !0));
		},
		o(e) {
			b(i, e), (r = !1);
		},
		d(n) {
			n && u(t), i && i.d(n), e[55](null), a();
		}
	};
}
function Te(e) {
	let t,
		n,
		a = (!0 === e[3] || 'undefined' != typeof window) && we(e);
	return {
		c() {
			a && a.c(), (t = w());
		},
		l(e) {
			a && a.l(e), (t = w());
		},
		m(e, r) {
			a && a.m(e, r), y(e, t, r), (n = !0);
		},
		p(e, n) {
			!0 === e[3] || 'undefined' != typeof window
				? a
					? (a.p(e, n), 8 & n[0] && x(a, 1))
					: ((a = we(e)), a.c(), x(a, 1), a.m(t.parentNode, t))
				: a &&
				  (T(),
				  b(a, 1, 1, () => {
						a = null;
				  }),
				  z());
		},
		i(e) {
			n || (x(a), (n = !0));
		},
		o(e) {
			b(a), (n = !1);
		},
		d(e) {
			a && a.d(e), e && u(t);
		}
	};
}
function ze(e, t, n) {
	let a,
		r,
		i,
		o,
		l,
		c,
		{ $$slots: d = {}, $$scope: f } = t,
		{ ssr: p = !1 } = t,
		{ pointerEvents: h = !0 } = t,
		{ position: u = 'relative' } = t,
		{ percentRange: g = !1 } = t,
		{ width: m } = t,
		{ height: y } = t,
		{ containerWidth: $ = m || 100 } = t,
		{ containerHeight: v = y || 100 } = t,
		{ element: x } = t,
		{ x: b } = t,
		{ y: w } = t,
		{ z: T } = t,
		{ r: z } = t,
		{ custom: k = {} } = t,
		{ data: P = [] } = t,
		{ xDomain: E } = t,
		{ yDomain: M } = t,
		{ zDomain: N } = t,
		{ rDomain: C } = t,
		{ xNice: I = !1 } = t,
		{ yNice: j = !1 } = t,
		{ zNice: W = !1 } = t,
		{ rNice: O = !1 } = t,
		{ xReverse: V = ve.x } = t,
		{ yReverse: H = ve.y } = t,
		{ zReverse: L = ve.z } = t,
		{ rReverse: _ = ve.r } = t,
		{ xPadding: J } = t,
		{ yPadding: B } = t,
		{ zPadding: U } = t,
		{ rPadding: X } = t,
		{ xScale: G = ce.x } = t,
		{ yScale: Y = ce.y } = t,
		{ zScale: F = ce.y } = t,
		{ rScale: q = ce.r } = t,
		{ xRange: K } = t,
		{ yRange: Q } = t,
		{ zRange: ee } = t,
		{ rRange: te } = t,
		{ padding: ne = {} } = t,
		{ extents: ae = {} } = t,
		{ flatData: re } = t;
	const oe = {},
		de = A(),
		fe = A();
	S(e, fe, (e) => n(9, (l = e)));
	const pe = A();
	S(e, pe, (e) => n(10, (c = e)));
	const he = A(),
		ue = A(),
		ge = A(),
		xe = A(),
		be = A(),
		we = A(),
		Te = A(),
		ze = A(),
		Se = A(),
		Ze = A(),
		Re = A(),
		ke = A(),
		Ae = A(),
		De = A(),
		Pe = A(),
		Ee = A(),
		Me = A(),
		Ne = A(),
		Ce = A(),
		Ie = A(),
		je = A(),
		We = A(),
		Oe = A(),
		Ve = A(),
		He = A(),
		Le = A(),
		_e = A(),
		Je = A(),
		Be = A(),
		Ue = A(),
		Xe = A(),
		Ge = A(),
		Ye = A(),
		Fe = A(oe),
		qe = Z([he, ue, ge, xe], ([e, t, n, a]) =>
			[
				{ field: 'x', accessor: e },
				{ field: 'y', accessor: t },
				{ field: 'z', accessor: n },
				{ field: 'r', accessor: a }
			].filter((e) => e.accessor)
		),
		Ke = Z([Xe, fe, pe], ([e]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, e)),
		Qe = Z([fe, pe, Ke], ([e, t, n]) => {
			const a = {};
			return (
				(a.top = n.top),
				(a.right = e - n.right),
				(a.bottom = t - n.bottom),
				(a.left = n.left),
				(a.width = a.right - a.left),
				(a.height = a.bottom - a.top),
				a.width <= 0 &&
					console.error(
						'[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?'
					),
				a.height <= 0 &&
					console.error(
						'[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?'
					),
				a
			);
		}),
		et = Z([Qe], ([e]) => e.width);
	S(e, et, (e) => n(6, (r = e)));
	const tt = Z([Qe], ([e]) => e.height);
	S(e, tt, (e) => n(7, (i = e)));
	const nt = Z([Ge, qe, Ye], ([e, t, n]) =>
			s(
				s(
					{},
					(function (e, t) {
						if (!Array.isArray(e) || 0 === e.length) return null;
						const n = {},
							a = t.length;
						let r, s, i, o, l;
						if (!a) return null;
						{
							for (r = 0; r < a; r += 1) {
								const a = t[r].accessor(e[0]);
								null == a || !0 === Number.isNaN(a)
									? (n[t[r].field] = [1 / 0, -1 / 0])
									: (n[t[r].field] = Array.isArray(a) ? a : [a, a]);
							}
							const c = e.length;
							for (r = 0; r < c; r += 1)
								for (s = 0; s < a; s += 1)
									if (((i = t[s]), (o = i.accessor(e[r])), (l = i.field), Array.isArray(o))) {
										const e = o.length;
										for (let t = 0; t < e; t += 1)
											void 0 !== o[t] &&
												null !== o[t] &&
												!1 === Number.isNaN(o[t]) &&
												(o[t] < n[l][0] && (n[l][0] = o[t]), o[t] > n[l][1] && (n[l][1] = o[t]));
									} else
										null != o &&
											!1 === Number.isNaN(o) &&
											(o < n[l][0] && (n[l][0] = o), o > n[l][1] && (n[l][1] = o));
						}
						return n;
					})(
						e,
						t.filter((e) => !n[e.field])
					)
				),
				n
			)
		),
		at = Z([nt, Te], le('x')),
		rt = Z([nt, ze], le('y')),
		st = Z([nt, Se], le('z')),
		it = Z([nt, Ze], le('r')),
		ot = Z([Oe, nt, at, Ce, Re, Pe, et, tt, _e, de], me('x')),
		lt = Z([he, ot], ye),
		ct = Z([Ve, nt, rt, Ie, ke, Ee, et, tt, Je, de], me('y')),
		dt = Z([ue, ct], ye),
		ft = Z([He, nt, st, je, Ae, Me, et, tt, Be, de], me('z')),
		pt = Z([ge, ft], ye),
		ht = Z([Le, nt, it, We, De, Ne, et, tt, Ue, de], me('r')),
		ut = Z([xe, ht], ye),
		gt = Z([ot], $e),
		mt = Z([ct], $e),
		yt = Z([ft], $e),
		$t = Z([ht], $e),
		vt = Z([et, tt], ([e, t, n]) => t / n);
	return (
		S(e, vt, (e) => n(8, (o = e))),
		(e.$$set = (e) => {
			'ssr' in e && n(3, (p = e.ssr)),
				'pointerEvents' in e && n(4, (h = e.pointerEvents)),
				'position' in e && n(5, (u = e.position)),
				'percentRange' in e && n(16, (g = e.percentRange)),
				'width' in e && n(17, (m = e.width)),
				'height' in e && n(18, (y = e.height)),
				'containerWidth' in e && n(0, ($ = e.containerWidth)),
				'containerHeight' in e && n(1, (v = e.containerHeight)),
				'element' in e && n(2, (x = e.element)),
				'x' in e && n(19, (b = e.x)),
				'y' in e && n(20, (w = e.y)),
				'z' in e && n(21, (T = e.z)),
				'r' in e && n(22, (z = e.r)),
				'custom' in e && n(23, (k = e.custom)),
				'data' in e && n(24, (P = e.data)),
				'xDomain' in e && n(25, (E = e.xDomain)),
				'yDomain' in e && n(26, (M = e.yDomain)),
				'zDomain' in e && n(27, (N = e.zDomain)),
				'rDomain' in e && n(28, (C = e.rDomain)),
				'xNice' in e && n(29, (I = e.xNice)),
				'yNice' in e && n(30, (j = e.yNice)),
				'zNice' in e && n(31, (W = e.zNice)),
				'rNice' in e && n(32, (O = e.rNice)),
				'xReverse' in e && n(33, (V = e.xReverse)),
				'yReverse' in e && n(34, (H = e.yReverse)),
				'zReverse' in e && n(35, (L = e.zReverse)),
				'rReverse' in e && n(36, (_ = e.rReverse)),
				'xPadding' in e && n(37, (J = e.xPadding)),
				'yPadding' in e && n(38, (B = e.yPadding)),
				'zPadding' in e && n(39, (U = e.zPadding)),
				'rPadding' in e && n(40, (X = e.rPadding)),
				'xScale' in e && n(41, (G = e.xScale)),
				'yScale' in e && n(42, (Y = e.yScale)),
				'zScale' in e && n(43, (F = e.zScale)),
				'rScale' in e && n(44, (q = e.rScale)),
				'xRange' in e && n(45, (K = e.xRange)),
				'yRange' in e && n(46, (Q = e.yRange)),
				'zRange' in e && n(47, (ee = e.zRange)),
				'rRange' in e && n(48, (te = e.rRange)),
				'padding' in e && n(49, (ne = e.padding)),
				'extents' in e && n(50, (ae = e.extents)),
				'flatData' in e && n(51, (re = e.flatData)),
				'$$scope' in e && n(53, (f = e.$$scope));
		}),
		(e.$$.update = () => {
			524288 & e.$$.dirty[0] && b && (oe.x = b),
				1048576 & e.$$.dirty[0] && w && (oe.y = w),
				2097152 & e.$$.dirty[0] && T && (oe.z = T),
				4194304 & e.$$.dirty[0] && z && (oe.r = z),
				33554432 & e.$$.dirty[0] && E && (oe.xDomain = E),
				67108864 & e.$$.dirty[0] && M && (oe.yDomain = M),
				134217728 & e.$$.dirty[0] && N && (oe.zDomain = N),
				268435456 & e.$$.dirty[0] && C && (oe.rDomain = C),
				16384 & e.$$.dirty[1] && K && (oe.xRange = K),
				32768 & e.$$.dirty[1] && Q && (oe.yRange = Q),
				65536 & e.$$.dirty[1] && ee && (oe.zRange = ee),
				131072 & e.$$.dirty[1] && te && (oe.rRange = te),
				65536 & e.$$.dirty[0] && de.set(g),
				1 & e.$$.dirty[0] && fe.set($),
				2 & e.$$.dirty[0] && pe.set(v),
				524288 & e.$$.dirty[0] && he.set(se(b)),
				1048576 & e.$$.dirty[0] && ue.set(se(w)),
				2097152 & e.$$.dirty[0] && ge.set(se(T)),
				4194304 & e.$$.dirty[0] && xe.set(se(z)),
				33554432 & e.$$.dirty[0] && Te.set(E),
				67108864 & e.$$.dirty[0] && ze.set(M),
				134217728 & e.$$.dirty[0] && Se.set(N),
				268435456 & e.$$.dirty[0] && Ze.set(C),
				8388608 & e.$$.dirty[0] && be.set(k),
				16777216 & e.$$.dirty[0] && we.set(P),
				536870912 & e.$$.dirty[0] && Re.set(I),
				1073741824 & e.$$.dirty[0] && ke.set(j),
				1 & e.$$.dirty[1] && Ae.set(W),
				2 & e.$$.dirty[1] && De.set(O),
				4 & e.$$.dirty[1] && Pe.set(V),
				8 & e.$$.dirty[1] && Ee.set(H),
				16 & e.$$.dirty[1] && Me.set(L),
				32 & e.$$.dirty[1] && Ne.set(_),
				64 & e.$$.dirty[1] && Ce.set(J),
				128 & e.$$.dirty[1] && Ie.set(B),
				256 & e.$$.dirty[1] && je.set(U),
				512 & e.$$.dirty[1] && We.set(X),
				1024 & e.$$.dirty[1] && Oe.set(G),
				2048 & e.$$.dirty[1] && Ve.set(Y),
				4096 & e.$$.dirty[1] && He.set(F),
				8192 & e.$$.dirty[1] && Le.set(q),
				16384 & e.$$.dirty[1] && _e.set(K),
				32768 & e.$$.dirty[1] && Je.set(Q),
				65536 & e.$$.dirty[1] && Be.set(ee),
				131072 & e.$$.dirty[1] && Ue.set(te),
				262144 & e.$$.dirty[1] && Xe.set(ne),
				524288 & e.$$.dirty[1] && Ye.set(ie(ae)),
				(16777216 & e.$$.dirty[0]) | (1048576 & e.$$.dirty[1]) && Ge.set(re || P),
				2097152 & e.$$.dirty[1] && R('LayerCake', a);
		}),
		n(
			52,
			(a = {
				activeGetters: qe,
				width: et,
				height: tt,
				percentRange: de,
				aspectRatio: vt,
				containerWidth: fe,
				containerHeight: pe,
				x: he,
				y: ue,
				z: ge,
				r: xe,
				custom: be,
				data: we,
				xNice: Re,
				yNice: ke,
				zNice: Ae,
				rNice: De,
				xReverse: Pe,
				yReverse: Ee,
				zReverse: Me,
				rReverse: Ne,
				xPadding: Ce,
				yPadding: Ie,
				zPadding: je,
				rPadding: We,
				padding: Ke,
				flatData: Ge,
				extents: nt,
				xDomain: at,
				yDomain: rt,
				zDomain: st,
				rDomain: it,
				xRange: gt,
				yRange: mt,
				zRange: yt,
				rRange: $t,
				config: Fe,
				xScale: ot,
				xGet: lt,
				yScale: ct,
				yGet: dt,
				zScale: ft,
				zGet: pt,
				rScale: ht,
				rGet: ut
			})
		),
		[
			$,
			v,
			x,
			p,
			h,
			u,
			r,
			i,
			o,
			l,
			c,
			fe,
			pe,
			et,
			tt,
			vt,
			g,
			m,
			y,
			b,
			w,
			T,
			z,
			k,
			P,
			E,
			M,
			N,
			C,
			I,
			j,
			W,
			O,
			V,
			H,
			L,
			_,
			J,
			B,
			U,
			X,
			G,
			Y,
			F,
			q,
			K,
			Q,
			ee,
			te,
			ne,
			ae,
			re,
			a,
			f,
			d,
			function (e) {
				D[e ? 'unshift' : 'push'](() => {
					(x = e), n(2, x);
				});
			},
			function () {
				($ = this.clientWidth), (v = this.clientHeight), n(0, $), n(1, v);
			}
		]
	);
}
class Se extends l {
	constructor(e) {
		super(),
			c(
				this,
				e,
				ze,
				Te,
				d,
				{
					ssr: 3,
					pointerEvents: 4,
					position: 5,
					percentRange: 16,
					width: 17,
					height: 18,
					containerWidth: 0,
					containerHeight: 1,
					element: 2,
					x: 19,
					y: 20,
					z: 21,
					r: 22,
					custom: 23,
					data: 24,
					xDomain: 25,
					yDomain: 26,
					zDomain: 27,
					rDomain: 28,
					xNice: 29,
					yNice: 30,
					zNice: 31,
					rNice: 32,
					xReverse: 33,
					yReverse: 34,
					zReverse: 35,
					rReverse: 36,
					xPadding: 37,
					yPadding: 38,
					zPadding: 39,
					rPadding: 40,
					xScale: 41,
					yScale: 42,
					zScale: 43,
					rScale: 44,
					xRange: 45,
					yRange: 46,
					zRange: 47,
					rRange: 48,
					padding: 49,
					extents: 50,
					flatData: 51
				},
				[-1, -1, -1, -1]
			);
	}
}
const Ze = (e) => ({ element: 1 & e }),
	Re = (e) => ({ element: e[0] }),
	ke = (e) => ({ element: 1 & e }),
	Ae = (e) => ({ element: e[0] });
function De(e) {
	let t, n, a, r;
	const s = e[10].defs,
		i = k(s, e, e[9], Ae),
		o = e[10].default,
		l = k(o, e, e[9], Re);
	return {
		c() {
			(t = P('svg')), (n = P('defs')), i && i.c(), l && l.c(), this.h();
		},
		l(e) {
			t = p(e, 'svg', { viewBox: !0, preserveAspectRatio: !0, style: !0, class: !0 }, 1);
			var a = h(t);
			n = p(a, 'defs', {}, 1);
			var r = h(n);
			i && i.l(r), r.forEach(u), l && l.l(a), a.forEach(u), this.h();
		},
		h() {
			g(t, 'viewBox', e[1]),
				g(t, 'preserveAspectRatio', 'none'),
				g(
					t,
					'style',
					(a =
						'top: ' +
						e[4].top +
						'px; right:0px; bottom:0px; left:' +
						e[4].left +
						'px;width:calc(100% - ' +
						(e[4].left + e[4].right) +
						'px);height:calc(100% - ' +
						(e[4].top + e[4].bottom) +
						'px);' +
						e[2] +
						e[3])
				),
				g(t, 'class', 'svelte-4zpqg8');
		},
		m(a, s) {
			y(a, t, s), E(t, n), i && i.m(n, null), l && l.m(t, null), e[11](t), (r = !0);
		},
		p(e, [n]) {
			i && i.p && (!r || 513 & n) && v(i, s, e, e[9], n, ke, Ae),
				l && l.p && (!r || 513 & n) && v(l, o, e, e[9], n, Ze, Re),
				(!r || 2 & n) && g(t, 'viewBox', e[1]),
				(!r ||
					(28 & n &&
						a !==
							(a =
								'top: ' +
								e[4].top +
								'px; right:0px; bottom:0px; left:' +
								e[4].left +
								'px;width:calc(100% - ' +
								(e[4].left + e[4].right) +
								'px);height:calc(100% - ' +
								(e[4].top + e[4].bottom) +
								'px);' +
								e[2] +
								e[3]))) &&
					g(t, 'style', a);
		},
		i(e) {
			r || (x(i, e), x(l, e), (r = !0));
		},
		o(e) {
			b(i, e), b(l, e), (r = !1);
		},
		d(n) {
			n && u(t), i && i.d(n), l && l.d(n), e[11](null);
		}
	};
}
function Pe(e, t, n) {
	let a,
		{ $$slots: r = {}, $$scope: s } = t,
		{ element: i } = t,
		{ fixedAspectRatio: o = 1 } = t,
		{ viewBox: l = '0 0 100 ' + 100 / o } = t,
		{ zIndex: c } = t,
		{ pointerEvents: d } = t,
		f = '',
		p = '';
	const { padding: h } = M('LayerCake');
	return (
		S(e, h, (e) => n(4, (a = e))),
		(e.$$set = (e) => {
			'element' in e && n(0, (i = e.element)),
				'fixedAspectRatio' in e && n(6, (o = e.fixedAspectRatio)),
				'viewBox' in e && n(1, (l = e.viewBox)),
				'zIndex' in e && n(7, (c = e.zIndex)),
				'pointerEvents' in e && n(8, (d = e.pointerEvents)),
				'$$scope' in e && n(9, (s = e.$$scope));
		}),
		(e.$$.update = () => {
			128 & e.$$.dirty && n(2, (f = void 0 !== c ? `z-index:${c};` : '')),
				256 & e.$$.dirty && n(3, (p = !1 === d ? 'pointer-events:none;' : ''));
		}),
		[
			i,
			l,
			f,
			p,
			a,
			h,
			o,
			c,
			d,
			s,
			r,
			function (e) {
				D[e ? 'unshift' : 'push'](() => {
					(i = e), n(0, i);
				});
			}
		]
	);
}
class Ee extends l {
	constructor(e) {
		super(),
			c(this, e, Pe, De, d, {
				element: 0,
				fixedAspectRatio: 6,
				viewBox: 1,
				zIndex: 7,
				pointerEvents: 8
			});
	}
}
function Me(e, t, n) {
	const a = e.slice();
	return (a[24] = t[n]), a;
}
function Ne(e) {
	let t, n, a, r, s;
	return {
		c() {
			(t = P('rect')), this.h();
		},
		l(e) {
			(t = p(e, 'rect', { class: !0, width: !0, height: !0, x: !0, y: !0, style: !0 }, 1)),
				h(t).forEach(u),
				this.h();
		},
		h() {
			g(t, 'class', 'day svelte-dg32h5'),
				g(t, 'width', e[1]),
				g(t, 'height', e[1]),
				g(t, 'x', (n = e[3](e[24]))),
				g(t, 'y', (a = e[4](e[24]))),
				N(t, 'fill', e[2](e[24]));
		},
		m(n, a) {
			y(n, t, a),
				r ||
					((s = C(t, 'mouseenter', function () {
						I(e[11](e[24])) && e[11](e[24]).apply(this, arguments);
					})),
					(r = !0));
		},
		p(r, s) {
			(e = r),
				2 & s && g(t, 'width', e[1]),
				2 & s && g(t, 'height', e[1]),
				9 & s && n !== (n = e[3](e[24])) && g(t, 'x', n),
				17 & s && a !== (a = e[4](e[24])) && g(t, 'y', a),
				5 & s && N(t, 'fill', e[2](e[24]));
		},
		d(e) {
			e && u(t), (r = !1), s();
		}
	};
}
function Ce(e) {
	let t,
		n = e[0],
		a = [];
	for (let r = 0; r < n.length; r += 1) a[r] = Ne(Me(e, n, r));
	return {
		c() {
			for (let e = 0; e < a.length; e += 1) a[e].c();
			t = w();
		},
		l(e) {
			for (let t = 0; t < a.length; t += 1) a[t].l(e);
			t = w();
		},
		m(e, n) {
			for (let t = 0; t < a.length; t += 1) a[t].m(e, n);
			y(e, t, n);
		},
		p(e, [r]) {
			if (2079 & r) {
				let s;
				for (n = e[0], s = 0; s < n.length; s += 1) {
					const i = Me(e, n, s);
					a[s] ? a[s].p(i, r) : ((a[s] = Ne(i)), a[s].c(), a[s].m(t.parentNode, t));
				}
				for (; s < a.length; s += 1) a[s].d(1);
				a.length = n.length;
			}
		},
		i: j,
		o: j,
		d(e) {
			W(a, e), e && u(t);
		}
	};
}
function Ie(e, t, n) {
	let a,
		r,
		s,
		i,
		o,
		l,
		c,
		d,
		f,
		p,
		h,
		u,
		{ calcCellSize: g = (e) => e } = t,
		{ seriesColors: m = ['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'] } = t;
	const { width: y, height: $, data: v, x: x, r: b, extents: w } = M('LayerCake');
	S(e, y, (e) => n(20, (h = e))),
		S(e, $, (e) => n(21, (u = e))),
		S(e, v, (e) => n(15, (c = e))),
		S(e, x, (e) => n(16, (d = e))),
		S(e, b, (e) => n(17, (f = e))),
		S(e, w, (e) => n(19, (p = e)));
	const T = O('%w'),
		z = O('%U');
	let Z;
	return (
		(e.$$set = (e) => {
			'calcCellSize' in e && n(12, (g = e.calcCellSize)),
				'seriesColors' in e && n(13, (m = e.seriesColors));
		}),
		(e.$$.update = () => {
			if (
				(229376 & e.$$.dirty &&
					n(
						14,
						(a = (e) => {
							const t = e.toISOString().split('T')[0],
								n = c.filter((e) => d(e) === t)[0];
							return n ? f(n) : 0;
						})
					),
				532480 & e.$$.dirty && n(18, (r = V().domain(p.r).range(m))),
				278528 & e.$$.dirty &&
					n(
						2,
						(s = (e) => {
							const t = a(e);
							return t ? r(t) : '#fff';
						})
					),
				3149824 & e.$$.dirty && n(1, (i = g(h, u))),
				524288 & e.$$.dirty)
			) {
				const e = p.x[0].split('-').map((e) => +e);
				n(
					0,
					(Z = H.range(new Date(Date.UTC(e[0], e[1] - 1, 1)), new Date(Date.UTC(e[0], e[1], 1))))
				);
			}
			2 & e.$$.dirty && n(3, (o = (e) => T(e) * i)),
				2 & e.$$.dirty &&
					n(
						4,
						(l = (e) => {
							const t = z(new Date(e.getUTCFullYear(), e.getUTCMonth(), 1));
							return (z(e) - t) * i;
						})
					);
		}),
		[
			Z,
			i,
			s,
			o,
			l,
			y,
			$,
			v,
			x,
			b,
			w,
			function (e) {
				console.log(e, a(e));
			},
			g,
			m,
			a,
			c,
			d,
			f,
			r,
			p,
			h,
			u
		]
	);
}
class je extends l {
	constructor(e) {
		super(), c(this, e, Ie, Ce, d, { calcCellSize: 12, seriesColors: 13 });
	}
}
var We =
	'2018-07-22T22:25:55Z\n2018-07-22T19:35:29Z\n2018-07-22T18:54:42Z\n2018-07-22T02:05:59Z\n2018-07-21T00:55:02Z\n2018-07-21T00:53:00Z\n2018-07-20T23:32:37Z\n2018-07-20T17:52:55Z\n2018-07-20T17:52:01Z\n2018-07-20T17:32:21Z\n2018-07-20T16:38:22Z\n2018-07-20T16:38:20Z\n2018-07-19T21:07:28Z\n2018-07-19T01:36:47Z\n2018-07-19T01:00:04Z\n2018-07-18T20:15:35Z\n2018-07-18T03:05:05Z\n2018-07-18T02:56:18Z\n2018-07-18T02:11:53Z\n2018-07-18T02:08:49Z\n2018-07-18T02:02:14Z\n2018-07-17T04:13:29Z\n2018-07-16T03:24:58Z\n2018-07-16T03:23:55Z\n2018-07-16T03:22:02Z\n2018-07-15T18:37:05Z\n2018-07-15T01:34:48Z\n2018-07-15T01:11:38Z\n2018-07-15T01:02:25Z\n2018-07-14T23:32:07Z\n2018-07-14T18:26:04Z\n2018-07-14T18:25:35Z\n2018-07-14T02:56:28Z\n2018-07-13T16:33:57Z\n2018-07-13T15:52:16Z\n2018-07-12T20:31:12Z\n2018-07-12T20:27:11Z\n2018-07-12T14:17:18Z\n2018-07-12T03:49:28Z\n2018-07-12T03:42:33Z\n2018-07-12T03:20:45Z\n2018-07-12T01:47:25Z\n2018-07-12T01:26:16Z\n2018-07-12T01:16:55Z\n2018-07-12T00:50:15Z\n2018-07-11T19:16:21Z\n2018-07-11T02:38:15Z\n2018-07-11T01:03:55Z\n2018-07-11T01:00:55Z\n2018-07-11T00:59:31Z\n2018-07-10T19:06:36Z\n2018-07-10T19:03:18Z\n2018-07-10T01:05:50Z\n2018-07-09T23:43:32Z\n2018-07-09T17:39:53Z\n2018-07-09T17:37:15Z\n2018-07-09T15:50:12Z\n2018-07-09T03:47:16Z\n2018-07-09T03:06:21Z\n2018-07-09T02:59:34Z\n2018-07-08T20:53:53Z\n2018-07-07T01:37:58Z\n2018-07-07T01:32:23Z\n2018-07-07T01:30:09Z\n2018-07-06T17:03:39Z\n2018-07-06T16:00:39Z\n2018-07-06T15:59:44Z\n2018-07-04T22:29:55Z\n2018-07-03T02:59:41Z\n2018-07-03T02:58:36Z\n2018-07-03T02:56:41Z\n2018-07-01T02:21:56Z\n2018-07-01T02:20:27Z\n2018-07-01T02:15:25Z';
function Oe(e, t, n) {
	const a = e.slice();
	return (a[8] = t[n]), (a[10] = n), a;
}
function Ve(e) {
	let t, n;
	return {
		c() {
			(t = f('h1')), (n = Y('Meet James Deal')), this.h();
		},
		l(e) {
			t = p(e, 'H1', { class: !0 });
			var a = h(t);
			(n = q(a, 'Meet James Deal')), a.forEach(u), this.h();
		},
		h() {
			g(
				t,
				'class',
				'font-extralight text-7xl text-red-800 uppercase dark:text-green-400 svelte-zbu6m'
			);
		},
		m(e, a) {
			y(e, t, a), E(t, n);
		},
		d(e) {
			e && u(t);
		}
	};
}
function He(e) {
	let t, n;
	return (
		(t = new je({ props: { seriesColors: e[3], calcCellSize: qe } })),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				B(t.$$.fragment, e);
			},
			m(e, a) {
				X(t, e, a), (n = !0);
			},
			p: j,
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				b(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				G(t, e);
			}
		}
	);
}
function Le(e) {
	let t, n;
	return (
		(t = new Ee({ props: { $$slots: { default: [He] }, $$scope: { ctx: e } } })),
		{
			c() {
				_(t.$$.fragment);
			},
			l(e) {
				B(t.$$.fragment, e);
			},
			m(e, a) {
				X(t, e, a), (n = !0);
			},
			p(e, n) {
				const a = {};
				2048 & n && (a.$$scope = { dirty: n, ctx: e }), t.$set(a);
			},
			i(e) {
				n || (x(t.$$.fragment, e), (n = !0));
			},
			o(e) {
				b(t.$$.fragment, e), (n = !1);
			},
			d(e) {
				G(t, e);
			}
		}
	);
}
function _e(e) {
	let t, n, a, r;
	return (
		(n = new Se({
			props: {
				ssr: !0,
				percentRange: !0,
				padding: { top: 1, right: 1, bottom: 1, left: 1 },
				x: 'key',
				r: Ke,
				data: e[8].values,
				$$slots: { default: [Le] },
				$$scope: { ctx: e }
			}
		})),
		{
			c() {
				(t = f('div')), _(n.$$.fragment), (a = J()), this.h();
			},
			l(e) {
				t = p(e, 'DIV', { class: !0, style: !0, 'data-month': !0 });
				var r = h(t);
				B(n.$$.fragment, r), (a = U(r)), r.forEach(u), this.h();
			},
			h() {
				g(t, 'class', 'flex chart-container svelte-zbu6m'),
					g(
						t,
						'style',
						'width:calc(' +
							100 / e[4].length +
							'% - ' +
							Fe +
							'px);' +
							(0 === e[10] ? `margin-right:${2 * Fe}px` : '')
					),
					g(t, 'data-month', e[2][+e[8].key + 1]);
			},
			m(e, s) {
				y(e, t, s), X(n, t, null), E(t, a), (r = !0);
			},
			p(e, t) {
				const a = {};
				2048 & t && (a.$$scope = { dirty: t, ctx: e }), n.$set(a);
			},
			i(e) {
				r || (x(n.$$.fragment, e), (r = !0));
			},
			o(e) {
				b(n.$$.fragment, e), (r = !1);
			},
			d(e) {
				e && u(t), G(n);
			}
		}
	);
}
function Je(e) {
	let t,
		n,
		a,
		r,
		s,
		i,
		o,
		l,
		c,
		d,
		m,
		$,
		v,
		w,
		S,
		Z,
		R,
		k,
		A,
		D,
		P,
		M,
		N,
		C,
		I,
		j,
		O,
		V,
		H,
		K,
		se,
		ie,
		oe,
		le,
		ce,
		de,
		fe,
		pe,
		he,
		ue,
		ge,
		me;
	(l = new L({ props: { cursor: !1, $$slots: { default: [Ve] }, $$scope: { ctx: e } } })),
		(D = new Q({
			props: {
				src: ae,
				ratio: e[0],
				srcsetWebP:
					'/_app/assets/headshot1-94b2d3b3.webp 200w, /_app/assets/headshot1-3cc7018c.webp 400w, /_app/assets/headshot1-0376eb38.webp 600w, /_app/assets/headshot1-e64bbd50.webp 1000w',
				srcsetAvif:
					'/_app/assets/headshot1-40d6c78d.avif 200w, /_app/assets/headshot1-afca6c84.avif 400w, /_app/assets/headshot1-1a7f97af.avif 600w, /_app/assets/headshot1-873dd150.avif 1000w',
				sizes: Ge,
				style: Ye,
				placeholder: '/_app/assets/headshot1-19e47c8f.jpeg',
				alt: Ue
			}
		}));
	let ye = e[4],
		$e = [];
	for (let f = 0; f < ye.length; f += 1) $e[f] = _e(Oe(e, ye, f));
	const ve = (e) =>
		b($e[e], 1, 1, () => {
			$e[e] = null;
		});
	return (
		(ge = new Q({
			props: {
				src: re,
				ratio: e[1],
				srcsetWebP: ee,
				srcsetAvif: te,
				sizes: Xe,
				placeholder: ne,
				alt: Ue
			}
		})),
		{
			c() {
				(t = f('meta')),
					(n = f('meta')),
					(a = f('meta')),
					(r = f('meta')),
					(s = J()),
					(i = f('div')),
					(o = f('div')),
					_(l.$$.fragment),
					(c = J()),
					(d = f('section')),
					(m = f('div')),
					($ = f('div')),
					(v = f('h2')),
					(w = Y('About Me')),
					(S = J()),
					(Z = f('p')),
					(R = Y(
						"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
					)),
					(k = J()),
					(A = f('div')),
					_(D.$$.fragment),
					(P = J()),
					(M = f('div')),
					(N = f('div'));
				for (let e = 0; e < $e.length; e += 1) $e[e].c();
				(C = J()),
					(I = f('div')),
					(j = f('h2')),
					(O = Y('About Me')),
					(V = J()),
					(H = f('p')),
					(K = Y(
						"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
					)),
					(se = J()),
					(ie = f('div')),
					(oe = f('div')),
					(le = f('h2')),
					(ce = Y('About Me')),
					(de = J()),
					(fe = f('p')),
					(pe = Y(
						"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
					)),
					(he = J()),
					(ue = f('div')),
					_(ge.$$.fragment),
					this.h();
			},
			l(e) {
				const f = F('[data-svelte="svelte-6ogl7i"]', document.head);
				(t = p(f, 'META', { name: !0, content: !0, class: !0 })),
					(n = p(f, 'META', { name: !0, content: !0, class: !0 })),
					(a = p(f, 'META', { property: !0, content: !0, class: !0 })),
					(r = p(f, 'META', { property: !0, content: !0, class: !0 })),
					f.forEach(u),
					(s = U(e)),
					(i = p(e, 'DIV', { class: !0 }));
				var g = h(i);
				o = p(g, 'DIV', { class: !0 });
				var y = h(o);
				B(l.$$.fragment, y),
					y.forEach(u),
					g.forEach(u),
					(c = U(e)),
					(d = p(e, 'SECTION', { class: !0 }));
				var x = h(d);
				m = p(x, 'DIV', { class: !0 });
				var b = h(m);
				$ = p(b, 'DIV', { class: !0 });
				var T = h($);
				v = p(T, 'H2', { class: !0 });
				var z = h(v);
				(w = q(z, 'About Me')), z.forEach(u), (S = U(T)), (Z = p(T, 'P', { class: !0 }));
				var E = h(Z);
				(R = q(
					E,
					"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
				)),
					E.forEach(u),
					T.forEach(u),
					(k = U(b)),
					(A = p(b, 'DIV', { class: !0 }));
				var W = h(A);
				B(D.$$.fragment, W),
					W.forEach(u),
					b.forEach(u),
					(P = U(x)),
					(M = p(x, 'DIV', { class: !0 }));
				var L = h(M);
				N = p(L, 'DIV', { class: !0 });
				var _ = h(N);
				for (let t = 0; t < $e.length; t += 1) $e[t].l(_);
				_.forEach(u), (C = U(L)), (I = p(L, 'DIV', { class: !0 }));
				var J = h(I);
				j = p(J, 'H2', { class: !0 });
				var X = h(j);
				(O = q(X, 'About Me')), X.forEach(u), (V = U(J)), (H = p(J, 'P', { class: !0 }));
				var G = h(H);
				(K = q(
					G,
					"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
				)),
					G.forEach(u),
					J.forEach(u),
					L.forEach(u),
					(se = U(x)),
					(ie = p(x, 'DIV', { class: !0 }));
				var Y = h(ie);
				oe = p(Y, 'DIV', { class: !0 });
				var Q = h(oe);
				le = p(Q, 'H2', { class: !0 });
				var ee = h(le);
				(ce = q(ee, 'About Me')), ee.forEach(u), (de = U(Q)), (fe = p(Q, 'P', { class: !0 }));
				var te = h(fe);
				(pe = q(
					te,
					"I'm a 23 year old full-stack developer based out of Austin, TX. Specializing in full-stack\n\t\t\t\tdevelopment, with a focus on building light-weight front end applications (SPA/Static, PWA,\n\t\t\t\tSSR) using Svelte and backend frameworks that leverage a server written in C++ with node.js\n\t\t\t\tbindings for performance. My applications utilize both REST and Websocket API."
				)),
					te.forEach(u),
					Q.forEach(u),
					(he = U(Y)),
					(ue = p(Y, 'DIV', { class: !0 }));
				var ne = h(ue);
				B(ge.$$.fragment, ne), ne.forEach(u), Y.forEach(u), x.forEach(u), this.h();
			},
			h() {
				(document.title = 'The Musings of a Mad Dev'),
					g(t, 'name', 'description'),
					g(
						t,
						'content',
						'Latest articles, anecdotes, projects, and cool code snippets from James Deal.'
					),
					g(t, 'class', 'svelte-zbu6m'),
					g(n, 'name', 'keywords'),
					g(n, 'content', 'James Deal, Front End, Back End, Svelte, Javascript'),
					g(n, 'class', 'svelte-zbu6m'),
					g(a, 'property', 'og:title'),
					g(a, 'content', 'The Musings of a Mad Dev'),
					g(a, 'class', 'svelte-zbu6m'),
					g(r, 'property', 'og:description'),
					g(
						r,
						'content',
						'Latest articles, anecdotes, projects, and cool code snippets from James Deal.'
					),
					g(r, 'class', 'svelte-zbu6m'),
					g(o, 'class', 'py-1 relative svelte-zbu6m'),
					g(i, 'class', 'flex flex-col h-40 m-5 text-center mb-15 svelte-zbu6m'),
					g(
						v,
						'class',
						'font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400 svelte-zbu6m'
					),
					g(Z, 'class', 'font-extralight text-sm text-gray-800 dark:text-gray-200 svelte-zbu6m'),
					g(
						$,
						'class',
						'rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:w-4/9 lg:p-8 dark:bg-purple-900 dark:bg-opacity-30 svelte-zbu6m'
					),
					g(A, 'class', 'mx-auto my-5 w-98 svelte-zbu6m'),
					g(m, 'class', 'flex flex-wrap-reverse mb-40 items-center svelte-zbu6m'),
					g(N, 'class', 'h-98 my-5 w-98 svelte-zbu6m'),
					g(
						j,
						'class',
						'font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400 svelte-zbu6m'
					),
					g(H, 'class', 'font-extralight text-sm text-gray-800 dark:text-gray-200 svelte-zbu6m'),
					g(
						I,
						'class',
						'rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:w-4/9 lg:p-8 dark:bg-purple-900 dark:bg-opacity-30 svelte-zbu6m'
					),
					g(M, 'class', 'flex flex-wrap mb-40 items-center svelte-zbu6m'),
					g(
						le,
						'class',
						'font-extralight mb-3 text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400 svelte-zbu6m'
					),
					g(fe, 'class', 'font-extralight text-sm text-gray-800 dark:text-gray-200 svelte-zbu6m'),
					g(
						oe,
						'class',
						'rounded-lg mx-auto bg-opacity-80 bg-blue-300 p-5 lg:w-4/9 lg:p-8 dark:bg-purple-900 dark:bg-opacity-30 svelte-zbu6m'
					),
					g(ue, 'class', 'mx-auto my-5 w-98 svelte-zbu6m'),
					g(ie, 'class', 'flex flex-wrap-reverse mb-40 items-center svelte-zbu6m'),
					g(d, 'class', 'container mx-auto p-10 svelte-zbu6m');
			},
			m(e, f) {
				E(document.head, t),
					E(document.head, n),
					E(document.head, a),
					E(document.head, r),
					y(e, s, f),
					y(e, i, f),
					E(i, o),
					X(l, o, null),
					y(e, c, f),
					y(e, d, f),
					E(d, m),
					E(m, $),
					E($, v),
					E(v, w),
					E($, S),
					E($, Z),
					E(Z, R),
					E(m, k),
					E(m, A),
					X(D, A, null),
					E(d, P),
					E(d, M),
					E(M, N);
				for (let t = 0; t < $e.length; t += 1) $e[t].m(N, null);
				E(M, C),
					E(M, I),
					E(I, j),
					E(j, O),
					E(I, V),
					E(I, H),
					E(H, K),
					E(d, se),
					E(d, ie),
					E(ie, oe),
					E(oe, le),
					E(le, ce),
					E(oe, de),
					E(oe, fe),
					E(fe, pe),
					E(ie, he),
					E(ie, ue),
					X(ge, ue, null),
					(me = !0);
			},
			p(e, [t]) {
				const n = {};
				if ((2048 & t && (n.$$scope = { dirty: t, ctx: e }), l.$set(n), 28 & t)) {
					let n;
					for (ye = e[4], n = 0; n < ye.length; n += 1) {
						const a = Oe(e, ye, n);
						$e[n]
							? ($e[n].p(a, t), x($e[n], 1))
							: (($e[n] = _e(a)), $e[n].c(), x($e[n], 1), $e[n].m(N, null));
					}
					for (T(), n = ye.length; n < $e.length; n += 1) ve(n);
					z();
				}
			},
			i(e) {
				if (!me) {
					x(l.$$.fragment, e), x(D.$$.fragment, e);
					for (let e = 0; e < ye.length; e += 1) x($e[e]);
					x(ge.$$.fragment, e), (me = !0);
				}
			},
			o(e) {
				b(l.$$.fragment, e), b(D.$$.fragment, e), ($e = $e.filter(Boolean));
				for (let t = 0; t < $e.length; t += 1) b($e[t]);
				b(ge.$$.fragment, e), (me = !1);
			},
			d(e) {
				u(t),
					u(n),
					u(a),
					u(r),
					e && u(s),
					e && u(i),
					G(l),
					e && u(c),
					e && u(d),
					G(D),
					W($e, e),
					G(ge);
			}
		}
	);
}
async function Be({ fetch: e }) {
	const t = '/api/github/commits.json',
		n = await e(t);
	return n.ok
		? { props: { data: await n.json() } }
		: { status: n.status, error: new Error(`Could not load ${t}`) };
}
let Ue = 'Professional headshot of James Deal',
	Xe = '(min-width: 1500px) 2000px, 100vw',
	Ge = '(min-width: 1500px) 1000px, 100vw',
	Ye = 'border-radius:50%';
const Fe = 10,
	qe = () => 100 / 7,
	Ke = (e) => e.values.length;
function Qe(e, t, n) {
	let { data: a } = t,
		r = (1 / (ae.width / ae.height)) * 100 + '%',
		s = (1 / (re.width / re.height)) * 100 + '%';
	console.log(a);
	const i = We.split('\n').map((e) => ({ date: new Date(e), timestring: e })),
		o = K()
			.key((e) => e.date.getUTCMonth())
			.key((e) => e.timestring.split('T')[0])
			.entries(i)
			.sort((e, t) => e.key - t.key);
	return (
		(e.$$set = (e) => {
			'data' in e && n(5, (a = e.data));
		}),
		[
			r,
			s,
			[
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
			['#fff5cc', '#ffeba9', '#ffe182', '#ffd754', '#ffcc00'],
			o,
			a
		]
	);
}
export default class extends l {
	constructor(e) {
		super(), c(this, e, Qe, Je, d, { data: 5 });
	}
}
export { Be as load };
