import {
	S as t,
	i as e,
	s,
	a0 as a,
	e as r,
	t as l,
	k as n,
	c as o,
	a as c,
	g as h,
	d as f,
	n as i,
	b as u,
	f as d,
	F as g,
	h as p,
	j as x,
	K as m,
	m as $,
	o as v,
	v as E,
	r as k,
	w,
	Y as y
} from '../../chunks/vendor-112f5557.js';
function D(t, e, s) {
	const a = t.slice();
	return (a[1] = e[s]), a;
}
function j(t) {
	let e, s;
	return {
		c() {
			(e = r('h1')), (s = l('Recent Articles')), this.h();
		},
		l(t) {
			e = o(t, 'H1', { class: !0 });
			var a = c(e);
			(s = h(a, 'Recent Articles')), a.forEach(f), this.h();
		},
		h() {
			u(e, 'class', 'font-extralight text-7xl text-red-800 uppercase dark:text-green-400');
		},
		m(t, a) {
			d(t, e, a), g(e, s);
		},
		d(t) {
			t && f(e);
		}
	};
}
function A(t) {
	let e,
		s,
		a,
		x,
		m,
		$,
		v,
		E = t[1].title + '';
	return {
		c() {
			(e = r('h2')),
				(s = r('a')),
				(a = l(E)),
				(m = n()),
				($ = r('p')),
				(v = l('By: James Deal')),
				this.h();
		},
		l(t) {
			e = o(t, 'H2', { class: !0 });
			var r = c(e);
			s = o(r, 'A', { href: !0 });
			var l = c(s);
			(a = h(l, E)), l.forEach(f), r.forEach(f), (m = i(t)), ($ = o(t, 'P', { class: !0 }));
			var n = c($);
			(v = h(n, 'By: James Deal')), n.forEach(f), this.h();
		},
		h() {
			u(s, 'href', (x = 'articles/read/' + t[1].slug)),
				u(
					e,
					'class',
					'font-extralight text-2xl text-red-800 no-underline dark:text-green-400 dark:hover:text-green-600'
				),
				u($, 'class', 'font-extralight text-sm text-left text-gray-900 w-3/4 dark:text-gray-200');
		},
		m(t, r) {
			d(t, e, r), g(e, s), g(s, a), d(t, m, r), d(t, $, r), g($, v);
		},
		p(t, e) {
			1 & e && E !== (E = t[1].title + '') && p(a, E),
				1 & e && x !== (x = 'articles/read/' + t[1].slug) && u(s, 'href', x);
		},
		d(t) {
			t && f(e), t && f(m), t && f($);
		}
	};
}
function I(t) {
	let e, s, l, h, p, I, J, V;
	h = new a({ props: { cursor: !1, $$slots: { default: [j] }, $$scope: { ctx: t } } });
	let B = t[0],
		H = [];
	for (let a = 0; a < B.length; a += 1) H[a] = A(D(t, B, a));
	return {
		c() {
			(e = n()),
				(s = r('div')),
				(l = r('div')),
				x(h.$$.fragment),
				(p = n()),
				(I = r('div')),
				(J = r('ul'));
			for (let t = 0; t < H.length; t += 1) H[t].c();
			this.h();
		},
		l(t) {
			m('[data-svelte="svelte-upln5o"]', document.head).forEach(f),
				(e = i(t)),
				(s = o(t, 'DIV', { class: !0 }));
			var a = c(s);
			l = o(a, 'DIV', { class: !0 });
			var r = c(l);
			$(h.$$.fragment, r), r.forEach(f), (p = i(a)), (I = o(a, 'DIV', {}));
			var n = c(I);
			J = o(n, 'UL', {});
			var u = c(J);
			for (let e = 0; e < H.length; e += 1) H[e].l(u);
			u.forEach(f), n.forEach(f), a.forEach(f), this.h();
		},
		h() {
			(document.title = 'Articles'),
				u(l, 'class', 'h-40 sm:h-20'),
				u(s, 'class', 'flex flex-col items-center');
		},
		m(t, a) {
			d(t, e, a), d(t, s, a), g(s, l), v(h, l, null), g(s, p), g(s, I), g(I, J);
			for (let e = 0; e < H.length; e += 1) H[e].m(J, null);
			V = !0;
		},
		p(t, [e]) {
			const s = {};
			if ((16 & e && (s.$$scope = { dirty: e, ctx: t }), h.$set(s), 1 & e)) {
				let s;
				for (B = t[0], s = 0; s < B.length; s += 1) {
					const a = D(t, B, s);
					H[s] ? H[s].p(a, e) : ((H[s] = A(a)), H[s].c(), H[s].m(J, null));
				}
				for (; s < H.length; s += 1) H[s].d(1);
				H.length = B.length;
			}
		},
		i(t) {
			V || (E(h.$$.fragment, t), (V = !0));
		},
		o(t) {
			k(h.$$.fragment, t), (V = !1);
		},
		d(t) {
			t && f(e), t && f(s), w(h), y(H, t);
		}
	};
}
async function J({ fetch: t }) {
	const e = '/articles.json',
		s = await t(e),
		a = await s.json();
	return s.ok
		? { props: { posts: JSON.parse(a.articles) } }
		: { status: s.status, error: new Error(`Could not load ${e}`) };
}
function V(t, e, s) {
	let { posts: a } = e;
	return (
		(t.$$set = (t) => {
			'posts' in t && s(0, (a = t.posts));
		}),
		[a]
	);
}
export default class extends t {
	constructor(t) {
		super(), e(this, t, V, I, s, { posts: 0 });
	}
}
export { J as load };
