import {
	S as s,
	i as e,
	s as a,
	e as t,
	k as r,
	c as l,
	a as c,
	n as i,
	d as o,
	b as p,
	a2 as n,
	V as d,
	f as v,
	F as f,
	W as u,
	M as h,
	z as b,
	H as y
} from './vendor-112f5557.js';
function g(s) {
	let e, a, b, y, g, z, E, I, _, $, P, W, A, V, C;
	return {
		c() {
			(e = t('div')),
				(a = t('div')),
				(b = t('div')),
				(y = t('img')),
				(z = r()),
				(E = t('picture')),
				(I = t('source')),
				(_ = r()),
				($ = t('source')),
				(P = r()),
				(W = t('img')),
				this.h();
		},
		l(s) {
			e = l(s, 'DIV', { class: !0 });
			var t = c(e);
			a = l(t, 'DIV', { class: !0 });
			var r = c(a);
			b = l(r, 'DIV', { style: !0, class: !0 });
			var p = c(b);
			(y = l(p, 'IMG', { class: !0, src: !0, alt: !0, style: !0 })),
				(z = i(p)),
				(E = l(p, 'PICTURE', {}));
			var n = c(E);
			(I = l(n, 'SOURCE', { type: !0, srcset: !0, sizes: !0 })),
				(_ = i(n)),
				($ = l(n, 'SOURCE', { type: !0, srcset: !0, sizes: !0 })),
				(P = i(n)),
				(W = l(n, 'IMG', { src: !0, alt: !0, style: !0, class: !0 })),
				n.forEach(o),
				p.forEach(o),
				r.forEach(o),
				t.forEach(o),
				this.h();
		},
		h() {
			p(y, 'class', 'placeholder svelte-1gs6214'),
				y.src !== (g = s[5]) && p(y, 'src', g),
				p(y, 'alt', m),
				p(y, 'style', s[0]),
				n(y, 'blur', w),
				p(I, 'type', 'image/avif'),
				p(I, 'srcset', s[3]),
				p(I, 'sizes', s[4]),
				p($, 'type', 'image/webp'),
				p($, 'srcset', s[2]),
				p($, 'sizes', s[4]),
				W.src !== (A = s[8]) && p(W, 'src', A),
				p(W, 'alt', s[6]),
				p(W, 'style', s[0]),
				p(W, 'class', 'svelte-lazy-image main svelte-1gs6214'),
				n(W, 'svelte-lazy-image--loaded', s[9]),
				d(b, 'padding-bottom', s[1]),
				p(b, 'class', 'w-full'),
				p(a, 'class', 'w-full relative overflow-hidden'),
				p(e, 'class', 'w-full relative svelte-1gs6214'),
				n(e, 'loaded', s[9]);
		},
		m(t, r) {
			v(t, e, r),
				f(e, a),
				f(a, b),
				f(b, y),
				f(b, z),
				f(b, E),
				f(E, I),
				f(E, _),
				f(E, $),
				f(E, P),
				f(E, W),
				s[13](W),
				V || ((C = u(W, 'load', s[10])), (V = !0));
		},
		p(s, [a]) {
			32 & a && y.src !== (g = s[5]) && p(y, 'src', g),
				1 & a && p(y, 'style', s[0]),
				8 & a && p(I, 'srcset', s[3]),
				16 & a && p(I, 'sizes', s[4]),
				4 & a && p($, 'srcset', s[2]),
				16 & a && p($, 'sizes', s[4]),
				256 & a && W.src !== (A = s[8]) && p(W, 'src', A),
				64 & a && p(W, 'alt', s[6]),
				1 & a && p(W, 'style', s[0]),
				512 & a && n(W, 'svelte-lazy-image--loaded', s[9]),
				2 & a && d(b, 'padding-bottom', s[1]),
				512 & a && n(e, 'loaded', s[9]);
		},
		i: h,
		o: h,
		d(a) {
			a && o(e), s[13](null), (V = !1), C();
		}
	};
}
let w = !0,
	m = 'placeholder image';
function z(s, e, a) {
	let t,
		r,
		l,
		c = function (s, e) {
			s.forEach((s) => {
				s.isIntersecting && (a(12, (h = !0)), e.unobserve(t));
			});
		},
		{ style: i } = e,
		{ ratio: o } = e,
		{ srcsetWebP: p } = e,
		{ srcsetAvif: n } = e,
		{ sizes: d } = e,
		{ placeholder: v } = e,
		{ src: f } = e,
		{ alt: u } = e,
		h = !1,
		g = !1;
	return (
		b(
			() => (
				(l = new IntersectionObserver(c)),
				l.observe(t),
				() => {
					l.unobserve(t);
				}
			)
		),
		(s.$$set = (s) => {
			'style' in s && a(0, (i = s.style)),
				'ratio' in s && a(1, (o = s.ratio)),
				'srcsetWebP' in s && a(2, (p = s.srcsetWebP)),
				'srcsetAvif' in s && a(3, (n = s.srcsetAvif)),
				'sizes' in s && a(4, (d = s.sizes)),
				'placeholder' in s && a(5, (v = s.placeholder)),
				'src' in s && a(11, (f = s.src)),
				'alt' in s && a(6, (u = s.alt));
		}),
		(s.$$.update = () => {
			6176 & s.$$.dirty && a(8, (r = h ? f : v));
		}),
		[
			i,
			o,
			p,
			n,
			d,
			v,
			u,
			t,
			r,
			g,
			function () {
				g || r !== f || a(9, (g = !0));
			},
			f,
			h,
			function (s) {
				y[s ? 'unshift' : 'push'](() => {
					(t = s), a(7, t);
				});
			}
		]
	);
}
class E extends s {
	constructor(s) {
		super(),
			e(this, s, z, g, a, {
				style: 0,
				ratio: 1,
				srcsetWebP: 2,
				srcsetAvif: 3,
				sizes: 4,
				placeholder: 5,
				src: 11,
				alt: 6
			});
	}
}
var I =
		'/_app/assets/test-0fd9bf01.webp 500w, /_app/assets/test-c804ea69.webp 1000w, /_app/assets/test-5d8c5f59.webp 2000w',
	_ =
		'/_app/assets/test-0e832812.avif 500w, /_app/assets/test-182888c4.avif 1000w, /_app/assets/test-ccd20230.avif 2000w',
	$ = '/_app/assets/test-26ba6ed2.jpeg';
export { E as L, $ as N, I as a, _ as b };
