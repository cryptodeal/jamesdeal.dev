import { _ as e } from '../chunks/preload-helper-9f12a5fd.js';
import {
	D as t,
	C as a,
	S as s,
	i as r,
	s as n,
	j as o,
	m as l,
	o as c,
	E as i,
	v as u,
	r as d,
	w as m,
	e as f,
	t as g,
	k as p,
	c as h,
	a as $,
	g as v,
	d as b,
	n as k,
	b as E,
	f as L,
	F as y,
	B as S,
	u as j,
	G as w,
	T as _,
	H as F,
	I,
	l as x,
	z,
	J as B,
	K as A,
	L as C
} from '../chunks/vendor-112f5557.js';
const D = {
	subscribe: (e) =>
		(() => {
			const e = t('__svelte__');
			return {
				page: { subscribe: e.page.subscribe },
				navigating: { subscribe: e.navigating.subscribe },
				get preloading() {
					return (
						console.error('stores.preloading is deprecated; use stores.navigating instead'),
						{ subscribe: e.navigating.subscribe }
					);
				},
				session: e.session
			};
		})().page.subscribe(e)
};
const T = ((e) => {
	const { subscribe: t, set: s, update: r } = a();
	return {
		subscribe: t,
		set: s,
		update: r,
		useLocalStorage: () => {
			const a = localStorage.getItem(e);
			a && s(a),
				t((t) => {
					localStorage.setItem(e, t);
				});
		}
	};
})('theme');
function R(e) {
	let t, a, s;
	function r(t) {
		e[3](t);
	}
	let n = {
		hideLabel: !0,
		label: 'Toggle Theme',
		switchColor: e[1] ? '#111827' : '#FFFBEB',
		toggledColor: '#34D399',
		untoggledColor: '#991B1B',
		on: 'Dark',
		off: 'Light'
	};
	return (
		void 0 !== e[1] && (n.toggled = e[1]),
		(t = new _({ props: n })),
		F.push(() => I(t, 'toggled', r)),
		t.$on('click', e[2]),
		{
			c() {
				o(t.$$.fragment);
			},
			l(e) {
				l(t.$$.fragment, e);
			},
			m(e, a) {
				c(t, e, a), (s = !0);
			},
			p(e, s) {
				const r = {};
				2 & s && (r.switchColor = e[1] ? '#111827' : '#FFFBEB'),
					!a && 2 & s && ((a = !0), (r.toggled = e[1]), i(() => (a = !1))),
					t.$set(r);
			},
			i(e) {
				s || (u(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				d(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				m(t, e);
			}
		}
	);
}
function V(e) {
	let t,
		a,
		s,
		r,
		n,
		o,
		l,
		c,
		i,
		m,
		w,
		_,
		F,
		I,
		x,
		z,
		B,
		A,
		C,
		D = null !== e[1] && R(e);
	return {
		c() {
			(t = f('nav')),
				(a = f('ul')),
				(s = f('li')),
				(r = f('a')),
				(n = g('home')),
				(l = p()),
				(c = f('li')),
				(i = f('a')),
				(m = g('articles')),
				(_ = p()),
				(F = f('li')),
				(I = f('a')),
				(x = g('about')),
				(B = p()),
				(A = f('ul')),
				D && D.c(),
				this.h();
		},
		l(e) {
			t = h(e, 'NAV', { class: !0 });
			var o = $(t);
			a = h(o, 'UL', { class: !0 });
			var u = $(a);
			s = h(u, 'LI', { class: !0 });
			var d = $(s);
			r = h(d, 'A', { class: !0, 'aria-current': !0, 'sveltekit:prefetch': !0, href: !0 });
			var f = $(r);
			(n = v(f, 'home')), f.forEach(b), d.forEach(b), (l = k(u)), (c = h(u, 'LI', { class: !0 }));
			var g = $(c);
			i = h(g, 'A', { class: !0, 'aria-current': !0, 'sveltekit:prefetch': !0, href: !0 });
			var p = $(i);
			(m = v(p, 'articles')),
				p.forEach(b),
				g.forEach(b),
				(_ = k(u)),
				(F = h(u, 'LI', { class: !0 }));
			var E = $(F);
			I = h(E, 'A', { class: !0, 'aria-current': !0, 'sveltekit:prefetch': !0, href: !0 });
			var L = $(I);
			(x = v(L, 'about')),
				L.forEach(b),
				E.forEach(b),
				u.forEach(b),
				(B = k(o)),
				(A = h(o, 'UL', { class: !0 }));
			var y = $(A);
			D && D.l(y), y.forEach(b), o.forEach(b), this.h();
		},
		h() {
			E(r, 'class', 'py-4 px-2 no-underline block svelte-4mj48z'),
				E(r, 'aria-current', (o = '' === e[0] ? 'page' : void 0)),
				E(r, 'sveltekit:prefetch', ''),
				E(r, 'href', '/'),
				E(s, 'class', 'block float-left svelte-4mj48z'),
				E(i, 'class', 'py-4 px-2 no-underline block svelte-4mj48z'),
				E(i, 'aria-current', (w = 'articles' === e[0] ? 'page' : void 0)),
				E(i, 'sveltekit:prefetch', ''),
				E(i, 'href', '/articles'),
				E(c, 'class', 'block float-left svelte-4mj48z'),
				E(I, 'class', 'py-4 px-2 no-underline block svelte-4mj48z'),
				E(I, 'aria-current', (z = 'about' === e[0] ? 'page' : void 0)),
				E(I, 'sveltekit:prefetch', ''),
				E(I, 'href', '/about'),
				E(F, 'class', 'block float-left svelte-4mj48z'),
				E(a, 'class', 'm-0 p-0 svelte-4mj48z'),
				E(A, 'class', 'svelte-4mj48z'),
				E(
					t,
					'class',
					'border-b flex font-light bg-opacity-80 bg-blue-300 border-yellow-50 py-0 px-4 text-red-800 items-center justify-between dark:text-green-400 dark:bg-purple-900 dark:bg-opacity-30 dark:border-gray-900 svelte-4mj48z'
				);
		},
		m(e, o) {
			L(e, t, o),
				y(t, a),
				y(a, s),
				y(s, r),
				y(r, n),
				y(a, l),
				y(a, c),
				y(c, i),
				y(i, m),
				y(a, _),
				y(a, F),
				y(F, I),
				y(I, x),
				y(t, B),
				y(t, A),
				D && D.m(A, null),
				(C = !0);
		},
		p(e, [t]) {
			(!C || (1 & t && o !== (o = '' === e[0] ? 'page' : void 0))) && E(r, 'aria-current', o),
				(!C || (1 & t && w !== (w = 'articles' === e[0] ? 'page' : void 0))) &&
					E(i, 'aria-current', w),
				(!C || (1 & t && z !== (z = 'about' === e[0] ? 'page' : void 0))) &&
					E(I, 'aria-current', z),
				null !== e[1]
					? D
						? (D.p(e, t), 2 & t && u(D, 1))
						: ((D = R(e)), D.c(), u(D, 1), D.m(A, null))
					: D &&
					  (S(),
					  d(D, 1, 1, () => {
							D = null;
					  }),
					  j());
		},
		i(e) {
			C || (u(D), (C = !0));
		},
		o(e) {
			d(D), (C = !1);
		},
		d(e) {
			e && b(t), D && D.d();
		}
	};
}
function M(e, t, a) {
	let s;
	w(e, T, (e) => a(4, (s = e)));
	let { segment: r } = t,
		n = null;
	n = 'dark' === localStorage.getItem('theme');
	const o = (e, t) => {
		T.set(e);
	};
	return (
		(e.$$set = (e) => {
			'segment' in e && a(0, (r = e.segment));
		}),
		[
			r,
			n,
			() => {
				'dark' === s
					? (document.documentElement.classList.remove('dark'), o('light'))
					: (document.documentElement.classList.add('dark'), o('dark'));
			},
			function (e) {
				(n = e), a(1, n);
			}
		]
	);
}
class P extends s {
	constructor(e) {
		super(), r(this, e, M, V, n, { segment: 0 });
	}
}
function N(e) {
	let t, a, s;
	var r = e[0];
	function n(e) {
		return { props: { id: 'tsparticles', options: e[1] } };
	}
	return (
		r && (t = new r(n(e))),
		{
			c() {
				t && o(t.$$.fragment), (a = x());
			},
			l(e) {
				t && l(t.$$.fragment, e), (a = x());
			},
			m(e, r) {
				t && c(t, e, r), L(e, a, r), (s = !0);
			},
			p(e, [s]) {
				const l = {};
				if ((2 & s && (l.options = e[1]), r !== (r = e[0]))) {
					if (t) {
						S();
						const e = t;
						d(e.$$.fragment, 1, 0, () => {
							m(e, 1);
						}),
							j();
					}
					r
						? ((t = new r(n(e))), o(t.$$.fragment), u(t.$$.fragment, 1), c(t, a.parentNode, a))
						: (t = null);
				} else r && t.$set(l);
			},
			i(e) {
				s || (t && u(t.$$.fragment, e), (s = !0));
			},
			o(e) {
				t && d(t.$$.fragment, e), (s = !1);
			},
			d(e) {
				e && b(a), t && m(t, e);
			}
		}
	);
}
function O(t, a, s) {
	let r, n, o;
	return (
		w(t, T, (e) => s(2, (n = e))),
		z(async () => {
			const t = await e(() => import('../chunks/svelte-particles-7ad5391d.js'), void 0);
			s(0, (o = t.default));
		}),
		(t.$$.update = () => {
			4 & t.$$.dirty &&
				s(
					1,
					(r = {
						fpsLimit: 60,
						particles: {
							color: { value: 'dark' === n ? '#FFF' : '#000' },
							links: { color: 'dark' === n ? '#FFF' : '#000', enable: !0, distance: 50 },
							move: { enable: !0, speed: 1, outModes: { default: 'bounce' } },
							size: { value: 1 }
						}
					})
				);
		}),
		[o, r, n]
	);
}
class U extends s {
	constructor(e) {
		super(), r(this, e, O, N, n, {});
	}
}
function G(e) {
	let t, a, s, r, n, i, S, j, w;
	(n = new U({})), (S = new P({ props: { segment: e[0] } }));
	const _ = e[3].default,
		F = B(_, e, e[2], null);
	return {
		c() {
			(t = f('script')),
				(a = g(
					"(function () {\n\t\t\tif (typeof document === 'undefined') return; // SSR\n\t\t\tif (\n\t\t\t\tlocalStorage.theme === 'dark' ||\n\t\t\t\t(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n\t\t\t) {\n\t\t\t\tdocument.documentElement.classList.add('dark');\n\t\t\t\tlocalStorage.setItem('theme', 'dark');\n\t\t\t} else {\n\t\t\t\tdocument.documentElement.classList.remove('dark');\n\t\t\t}\n\t\t})();"
				)),
				(s = p()),
				(r = f('div')),
				o(n.$$.fragment),
				(i = p()),
				o(S.$$.fragment),
				(j = p()),
				F && F.c(),
				this.h();
		},
		l(e) {
			const o = A('[data-svelte="svelte-5soyh6"]', document.head);
			t = h(o, 'SCRIPT', {});
			var c = $(t);
			(a = v(
				c,
				"(function () {\n\t\t\tif (typeof document === 'undefined') return; // SSR\n\t\t\tif (\n\t\t\t\tlocalStorage.theme === 'dark' ||\n\t\t\t\t(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n\t\t\t) {\n\t\t\t\tdocument.documentElement.classList.add('dark');\n\t\t\t\tlocalStorage.setItem('theme', 'dark');\n\t\t\t} else {\n\t\t\t\tdocument.documentElement.classList.remove('dark');\n\t\t\t}\n\t\t})();"
			)),
				c.forEach(b),
				o.forEach(b),
				(s = k(e)),
				(r = h(e, 'DIV', { class: !0 }));
			var u = $(r);
			l(n.$$.fragment, u),
				u.forEach(b),
				(i = k(e)),
				l(S.$$.fragment, e),
				(j = k(e)),
				F && F.l(e),
				this.h();
		},
		h() {
			E(r, 'class', 'flex bg-opacity-80 bg-blue-300 h-40 dark:bg-purple-900 dark:bg-opacity-30');
		},
		m(e, o) {
			y(document.head, t),
				y(t, a),
				L(e, s, o),
				L(e, r, o),
				c(n, r, null),
				L(e, i, o),
				c(S, e, o),
				L(e, j, o),
				F && F.m(e, o),
				(w = !0);
		},
		p(e, [t]) {
			const a = {};
			1 & t && (a.segment = e[0]),
				S.$set(a),
				F && F.p && (!w || 4 & t) && C(F, _, e, e[2], t, null, null);
		},
		i(e) {
			w || (u(n.$$.fragment, e), u(S.$$.fragment, e), u(F, e), (w = !0));
		},
		o(e) {
			d(n.$$.fragment, e), d(S.$$.fragment, e), d(F, e), (w = !1);
		},
		d(e) {
			b(t), e && b(s), e && b(r), m(n), e && b(i), m(S, e), e && b(j), F && F.d(e);
		}
	};
}
function H(t, a, s) {
	let r, n;
	w(t, D, (e) => s(1, (n = e)));
	let { $$slots: o = {}, $$scope: l } = a;
	return (
		e(() => import('../chunks/devtools-170179ae.js'), void 0),
		T.useLocalStorage(),
		(t.$$set = (e) => {
			'$$scope' in e && s(2, (l = e.$$scope));
		}),
		(t.$$.update = () => {
			2 & t.$$.dirty && s(0, (r = n.path.split('/')[1]));
		}),
		[r, n, l, o]
	);
}
export default class extends s {
	constructor(e) {
		super(), r(this, e, H, G, n, {});
	}
}
