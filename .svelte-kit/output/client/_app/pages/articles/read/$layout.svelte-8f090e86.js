import {
	S as t,
	i as e,
	s,
	J as a,
	e as c,
	k as r,
	t as o,
	K as l,
	c as n,
	d as i,
	n as p,
	a as h,
	g as f,
	b as u,
	F as d,
	f as m,
	L as v,
	v as w,
	r as $
} from '../../../chunks/vendor-112f5557.js';
function E(t) {
	let e, s, E, g, x, y, T, j, A, I, b, k;
	const C = t[1].default,
		q = a(C, t, t[0], null);
	return {
		c() {
			(e = c('meta')),
				(s = r()),
				(E = c('div')),
				(g = c('article')),
				q && q.c(),
				(x = r()),
				(y = c('div')),
				(T = c('a')),
				(j = o('Tweet')),
				(A = r()),
				(I = c('script')),
				this.h();
		},
		l(t) {
			const a = l('[data-svelte="svelte-qjgqf4"]', document.head);
			(e = n(a, 'META', { property: !0, content: !0 })),
				a.forEach(i),
				(s = p(t)),
				(E = n(t, 'DIV', { class: !0 }));
			var c = h(E);
			g = n(c, 'ARTICLE', { class: !0, itemscope: !0, itemtype: !0 });
			var r = h(g);
			q && q.l(r), r.forEach(i), (x = p(c)), (y = n(c, 'DIV', { class: !0 }));
			var o = h(y);
			T = n(o, 'A', { class: !0, href: !0, rel: !0, 'data-size': !0 });
			var u = h(T);
			(j = f(u, 'Tweet')),
				u.forEach(i),
				(A = p(o)),
				(I = n(o, 'SCRIPT', { src: !0 })),
				h(I).forEach(i),
				o.forEach(i),
				c.forEach(i),
				this.h();
		},
		h() {
			u(e, 'property', 'og:type'),
				u(e, 'content', 'article'),
				u(g, 'class', 'text-left text-base content'),
				u(g, 'itemscope', ''),
				u(g, 'itemtype', 'http://schema.org/TechArticle'),
				u(T, 'class', 'twitter-share-button'),
				u(T, 'href', 'https://twitter.com/intent/tweet?text=Check%20this%20out:%20'),
				u(T, 'rel', 'noopener'),
				u(T, 'data-size', 'large'),
				I.src !== (b = 'https://platform.twitter.com/widgets.js') &&
					u(I, 'src', 'https://platform.twitter.com/widgets.js'),
				u(y, 'class', 'flex py-1 twitter justify-center'),
				u(E, 'class', 'container mx-auto p-10');
		},
		m(t, a) {
			d(document.head, e),
				m(t, s, a),
				m(t, E, a),
				d(E, g),
				q && q.m(g, null),
				d(E, x),
				d(E, y),
				d(y, T),
				d(T, j),
				d(y, A),
				d(y, I),
				(k = !0);
		},
		p(t, [e]) {
			q && q.p && (!k || 1 & e) && v(q, C, t, t[0], e, null, null);
		},
		i(t) {
			k || (w(q, t), (k = !0));
		},
		o(t) {
			$(q, t), (k = !1);
		},
		d(t) {
			i(e), t && i(s), t && i(E), q && q.d(t);
		}
	};
}
function g(t, e, s) {
	let { $$slots: a = {}, $$scope: c } = e;
	return (
		(t.$$set = (t) => {
			'$$scope' in t && s(0, (c = t.$$scope));
		}),
		[c, a]
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, g, E, s, {});
	}
}
