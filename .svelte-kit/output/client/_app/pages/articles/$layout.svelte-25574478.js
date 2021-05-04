import {
	S as e,
	i as t,
	s,
	J as n,
	e as a,
	k as c,
	K as o,
	c as l,
	d as r,
	n as d,
	a as i,
	b as p,
	F as u,
	f as m,
	L as h,
	v,
	r as f
} from '../../chunks/vendor-112f5557.js';
function $(e) {
	let t, s, $, A, E, T, y;
	const M = e[1].default,
		g = n(M, e, e[0], null);
	return {
		c() {
			(t = a('meta')),
				(s = a('meta')),
				($ = a('meta')),
				(A = a('meta')),
				(E = c()),
				(T = a('main')),
				g && g.c(),
				this.h();
		},
		l(e) {
			const n = o('[data-svelte="svelte-1xuucnw"]', document.head);
			(t = l(n, 'META', { name: !0, content: !0 })),
				(s = l(n, 'META', { name: !0, content: !0 })),
				($ = l(n, 'META', { property: !0, content: !0 })),
				(A = l(n, 'META', { property: !0, content: !0 })),
				n.forEach(r),
				(E = d(e)),
				(T = l(e, 'MAIN', { class: !0 }));
			var a = i(T);
			g && g.l(a), a.forEach(r), this.h();
		},
		h() {
			(document.title = 'Recent Articles'),
				p(t, 'name', 'description'),
				p(t, 'content', 'Recent Articles: The latest musings of a sleep deprived dev.'),
				p(s, 'name', 'keywords'),
				p(s, 'content', 'James Deal, Developer, Front End, Svelte, Back End'),
				p($, 'property', 'og:title'),
				p($, 'content', 'Recent Articles'),
				p(A, 'property', 'og:description'),
				p(A, 'content', 'Recent Articles: The latest musings of a sleep deprived dev.'),
				p(T, 'class', 'svelte-102ahcs');
		},
		m(e, n) {
			u(document.head, t),
				u(document.head, s),
				u(document.head, $),
				u(document.head, A),
				m(e, E, n),
				m(e, T, n),
				g && g.m(T, null),
				(y = !0);
		},
		p(e, [t]) {
			g && g.p && (!y || 1 & t) && h(g, M, e, e[0], t, null, null);
		},
		i(e) {
			y || (v(g, e), (y = !0));
		},
		o(e) {
			f(g, e), (y = !1);
		},
		d(e) {
			r(t), r(s), r($), r(A), e && r(E), e && r(T), g && g.d(e);
		}
	};
}
function A(e, t, s) {
	let { $$slots: n = {}, $$scope: a } = t;
	return (
		(e.$$set = (e) => {
			'$$scope' in e && s(0, (a = e.$$scope));
		}),
		[a, n]
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, A, $, s, {});
	}
}
