var t = Object.defineProperty,
	e = Object.prototype.hasOwnProperty,
	r = Object.getOwnPropertySymbols,
	s = Object.prototype.propertyIsEnumerable,
	a = (e, r, s) =>
		r in e ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[r] = s),
	n = (t, n) => {
		for (var o in n || (n = {})) e.call(n, o) && a(t, o, n[o]);
		if (r) for (var o of r(n)) s.call(n, o) && a(t, o, n[o]);
		return t;
	};
import {
	S as o,
	i,
	s as l,
	e as c,
	c as u,
	a as d,
	d as h,
	b as p,
	f,
	t as g,
	g as m,
	h as _,
	j as $,
	k as y,
	l as v,
	m as b,
	n as w,
	o as x,
	p as E,
	q,
	r as R,
	u as L,
	v as S,
	w as k,
	x as O,
	y as j,
	z as T,
	A as P,
	B as A,
	C as U
} from './chunks/vendor-112f5557.js';
import { _ as N } from './chunks/preload-helper-9f12a5fd.js';
function I(t) {
	let e, r, s;
	const a = [t[2] || {}];
	var n = t[0][1];
	function o(t) {
		let e = { $$slots: { default: [M] }, $$scope: { ctx: t } };
		for (let r = 0; r < a.length; r += 1) e = P(e, a[r]);
		return { props: e };
	}
	return (
		n && (e = new n(o(t))),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, a) {
				e && x(e, t, a), f(t, r, a), (s = !0);
			},
			p(t, s) {
				const i = 4 & s ? E(a, [q(t[2] || {})]) : {};
				if ((2105 & s && (i.$$scope = { dirty: s, ctx: t }), n !== (n = t[0][1]))) {
					if (e) {
						A();
						const t = e;
						R(t.$$.fragment, 1, 0, () => {
							k(t, 1);
						}),
							L();
					}
					n
						? ((e = new n(o(t))), $(e.$$.fragment), S(e.$$.fragment, 1), x(e, r.parentNode, r))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				s || (e && S(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && R(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && h(r), e && k(e, t);
			}
		}
	);
}
function V(t) {
	let e, r, s;
	const a = [t[3] || {}];
	var n = t[0][2];
	function o(t) {
		let e = { $$slots: { default: [K] }, $$scope: { ctx: t } };
		for (let r = 0; r < a.length; r += 1) e = P(e, a[r]);
		return { props: e };
	}
	return (
		n && (e = new n(o(t))),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, a) {
				e && x(e, t, a), f(t, r, a), (s = !0);
			},
			p(t, s) {
				const i = 8 & s ? E(a, [q(t[3] || {})]) : {};
				if ((2097 & s && (i.$$scope = { dirty: s, ctx: t }), n !== (n = t[0][2]))) {
					if (e) {
						A();
						const t = e;
						R(t.$$.fragment, 1, 0, () => {
							k(t, 1);
						}),
							L();
					}
					n
						? ((e = new n(o(t))), $(e.$$.fragment), S(e.$$.fragment, 1), x(e, r.parentNode, r))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				s || (e && S(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && R(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && h(r), e && k(e, t);
			}
		}
	);
}
function D(t) {
	let e, r, s;
	const a = [t[4] || {}];
	var n = t[0][3];
	function o(t) {
		let e = { $$slots: { default: [B] }, $$scope: { ctx: t } };
		for (let r = 0; r < a.length; r += 1) e = P(e, a[r]);
		return { props: e };
	}
	return (
		n && (e = new n(o(t))),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, a) {
				e && x(e, t, a), f(t, r, a), (s = !0);
			},
			p(t, s) {
				const i = 16 & s ? E(a, [q(t[4] || {})]) : {};
				if ((2081 & s && (i.$$scope = { dirty: s, ctx: t }), n !== (n = t[0][3]))) {
					if (e) {
						A();
						const t = e;
						R(t.$$.fragment, 1, 0, () => {
							k(t, 1);
						}),
							L();
					}
					n
						? ((e = new n(o(t))), $(e.$$.fragment), S(e.$$.fragment, 1), x(e, r.parentNode, r))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				s || (e && S(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && R(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && h(r), e && k(e, t);
			}
		}
	);
}
function C(t) {
	let e, r, s;
	const a = [t[5] || {}];
	var n = t[0][4];
	function o(t) {
		let e = {};
		for (let r = 0; r < a.length; r += 1) e = P(e, a[r]);
		return { props: e };
	}
	return (
		n && (e = new n(o())),
		{
			c() {
				e && $(e.$$.fragment), (r = v());
			},
			l(t) {
				e && b(e.$$.fragment, t), (r = v());
			},
			m(t, a) {
				e && x(e, t, a), f(t, r, a), (s = !0);
			},
			p(t, s) {
				const i = 32 & s ? E(a, [q(t[5] || {})]) : {};
				if (n !== (n = t[0][4])) {
					if (e) {
						A();
						const t = e;
						R(t.$$.fragment, 1, 0, () => {
							k(t, 1);
						}),
							L();
					}
					n
						? ((e = new n(o())), $(e.$$.fragment), S(e.$$.fragment, 1), x(e, r.parentNode, r))
						: (e = null);
				} else n && e.$set(i);
			},
			i(t) {
				s || (e && S(e.$$.fragment, t), (s = !0));
			},
			o(t) {
				e && R(e.$$.fragment, t), (s = !1);
			},
			d(t) {
				t && h(r), e && k(e, t);
			}
		}
	);
}
function B(t) {
	let e,
		r,
		s = t[0][4] && C(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, a) {
			s && s.m(t, a), f(t, e, a), (r = !0);
		},
		p(t, r) {
			t[0][4]
				? s
					? (s.p(t, r), 1 & r && S(s, 1))
					: ((s = C(t)), s.c(), S(s, 1), s.m(e.parentNode, e))
				: s &&
				  (A(),
				  R(s, 1, 1, () => {
						s = null;
				  }),
				  L());
		},
		i(t) {
			r || (S(s), (r = !0));
		},
		o(t) {
			R(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && h(e);
		}
	};
}
function K(t) {
	let e,
		r,
		s = t[0][3] && D(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, a) {
			s && s.m(t, a), f(t, e, a), (r = !0);
		},
		p(t, r) {
			t[0][3]
				? s
					? (s.p(t, r), 1 & r && S(s, 1))
					: ((s = D(t)), s.c(), S(s, 1), s.m(e.parentNode, e))
				: s &&
				  (A(),
				  R(s, 1, 1, () => {
						s = null;
				  }),
				  L());
		},
		i(t) {
			r || (S(s), (r = !0));
		},
		o(t) {
			R(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && h(e);
		}
	};
}
function M(t) {
	let e,
		r,
		s = t[0][2] && V(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, a) {
			s && s.m(t, a), f(t, e, a), (r = !0);
		},
		p(t, r) {
			t[0][2]
				? s
					? (s.p(t, r), 1 & r && S(s, 1))
					: ((s = V(t)), s.c(), S(s, 1), s.m(e.parentNode, e))
				: s &&
				  (A(),
				  R(s, 1, 1, () => {
						s = null;
				  }),
				  L());
		},
		i(t) {
			r || (S(s), (r = !0));
		},
		o(t) {
			R(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && h(e);
		}
	};
}
function W(t) {
	let e,
		r,
		s = t[0][1] && I(t);
	return {
		c() {
			s && s.c(), (e = v());
		},
		l(t) {
			s && s.l(t), (e = v());
		},
		m(t, a) {
			s && s.m(t, a), f(t, e, a), (r = !0);
		},
		p(t, r) {
			t[0][1]
				? s
					? (s.p(t, r), 1 & r && S(s, 1))
					: ((s = I(t)), s.c(), S(s, 1), s.m(e.parentNode, e))
				: s &&
				  (A(),
				  R(s, 1, 1, () => {
						s = null;
				  }),
				  L());
		},
		i(t) {
			r || (S(s), (r = !0));
		},
		o(t) {
			R(s), (r = !1);
		},
		d(t) {
			s && s.d(t), t && h(e);
		}
	};
}
function Y(t) {
	let e,
		r = t[7] && z(t);
	return {
		c() {
			(e = c('div')), r && r.c(), this.h();
		},
		l(t) {
			e = u(t, 'DIV', { id: !0, 'aria-live': !0, 'aria-atomic': !0, class: !0 });
			var s = d(e);
			r && r.l(s), s.forEach(h), this.h();
		},
		h() {
			p(e, 'id', 'svelte-announcer'),
				p(e, 'aria-live', 'assertive'),
				p(e, 'aria-atomic', 'true'),
				p(e, 'class', 'svelte-u7bl1d');
		},
		m(t, s) {
			f(t, e, s), r && r.m(e, null);
		},
		p(t, s) {
			t[7] ? (r ? r.p(t, s) : ((r = z(t)), r.c(), r.m(e, null))) : r && (r.d(1), (r = null));
		},
		d(t) {
			t && h(e), r && r.d();
		}
	};
}
function z(t) {
	let e;
	return {
		c() {
			e = g(t[8]);
		},
		l(r) {
			e = m(r, t[8]);
		},
		m(t, r) {
			f(t, e, r);
		},
		p(t, r) {
			256 & r && _(e, t[8]);
		},
		d(t) {
			t && h(e);
		}
	};
}
function G(t) {
	let e, r, s, a;
	const n = [t[1] || {}];
	var o = t[0][0];
	function i(t) {
		let e = { $$slots: { default: [W] }, $$scope: { ctx: t } };
		for (let r = 0; r < n.length; r += 1) e = P(e, n[r]);
		return { props: e };
	}
	o && (e = new o(i(t)));
	let l = t[6] && Y(t);
	return {
		c() {
			e && $(e.$$.fragment), (r = y()), l && l.c(), (s = v());
		},
		l(t) {
			e && b(e.$$.fragment, t), (r = w(t)), l && l.l(t), (s = v());
		},
		m(t, n) {
			e && x(e, t, n), f(t, r, n), l && l.m(t, n), f(t, s, n), (a = !0);
		},
		p(t, [a]) {
			const c = 2 & a ? E(n, [q(t[1] || {})]) : {};
			if ((2109 & a && (c.$$scope = { dirty: a, ctx: t }), o !== (o = t[0][0]))) {
				if (e) {
					A();
					const t = e;
					R(t.$$.fragment, 1, 0, () => {
						k(t, 1);
					}),
						L();
				}
				o
					? ((e = new o(i(t))), $(e.$$.fragment), S(e.$$.fragment, 1), x(e, r.parentNode, r))
					: (e = null);
			} else o && e.$set(c);
			t[6]
				? l
					? l.p(t, a)
					: ((l = Y(t)), l.c(), l.m(s.parentNode, s))
				: l && (l.d(1), (l = null));
		},
		i(t) {
			a || (e && S(e.$$.fragment, t), (a = !0));
		},
		o(t) {
			e && R(e.$$.fragment, t), (a = !1);
		},
		d(t) {
			e && k(e, t), t && h(r), l && l.d(t), t && h(s);
		}
	};
}
function J(t, e, r) {
	let { stores: s } = e,
		{ page: a } = e,
		{ components: n } = e,
		{ props_0: o = null } = e,
		{ props_1: i = null } = e,
		{ props_2: l = null } = e,
		{ props_3: c = null } = e,
		{ props_4: u = null } = e;
	O('__svelte__', s), j(s.page.notify);
	let d = !1,
		h = !1,
		p = null;
	return (
		T(() => {
			const t = s.page.subscribe(() => {
				d && (r(7, (h = !0)), r(8, (p = document.title || 'untitled page')));
			});
			return r(6, (d = !0)), t;
		}),
		(t.$$set = (t) => {
			'stores' in t && r(9, (s = t.stores)),
				'page' in t && r(10, (a = t.page)),
				'components' in t && r(0, (n = t.components)),
				'props_0' in t && r(1, (o = t.props_0)),
				'props_1' in t && r(2, (i = t.props_1)),
				'props_2' in t && r(3, (l = t.props_2)),
				'props_3' in t && r(4, (c = t.props_3)),
				'props_4' in t && r(5, (u = t.props_4));
		}),
		(t.$$.update = () => {
			1536 & t.$$.dirty && s.page.set(a);
		}),
		[n, o, i, l, c, u, d, h, p, s, a]
	);
}
class X extends o {
	constructor(t) {
		super(),
			i(this, t, J, G, l, {
				stores: 9,
				page: 10,
				components: 0,
				props_0: 1,
				props_1: 2,
				props_2: 3,
				props_3: 4,
				props_4: 5
			});
	}
}
const F = [
		() =>
			N(() => import('./pages/$layout.svelte-ad82bdbb.js'), [
				'/_app/pages/$layout.svelte-ad82bdbb.js',
				'/_app/assets/pages/$layout.svelte-af9e3b5d.css',
				'/_app/chunks/preload-helper-9f12a5fd.js',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			]),
		() =>
			N(() => import('./error.svelte-e8bcd22f.js'), [
				'/_app/error.svelte-e8bcd22f.js',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			]),
		() =>
			N(() => import('./pages/index.svelte-42c85b22.js'), [
				'/_app/pages/index.svelte-42c85b22.js',
				'/_app/assets/pages/index.svelte-f6733d84.css',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css',
				'/_app/chunks/test-7f96a728.js',
				'/_app/assets/test-d7099871.css'
			]),
		() =>
			N(() => import('./pages/articles/$layout.svelte-25574478.js'), [
				'/_app/pages/articles/$layout.svelte-25574478.js',
				'/_app/assets/pages/articles/$layout.svelte-305a5ad1.css',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			]),
		() =>
			N(() => import('./pages/articles/index.svelte-e7a84173.js'), [
				'/_app/pages/articles/index.svelte-e7a84173.js',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			]),
		() =>
			N(() => import('./pages/articles/read/$layout.svelte-8f090e86.js'), [
				'/_app/pages/articles/read/$layout.svelte-8f090e86.js',
				'/_app/assets/pages/articles/read/$layout.svelte-d4d89311.css',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			]),
		() =>
			N(() => import('./pages/articles/read/adding-vite-imagetools-to-sveltekit.svx-2c291b3e.js'), [
				'/_app/pages/articles/read/adding-vite-imagetools-to-sveltekit.svx-2c291b3e.js',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css',
				'/_app/chunks/test-7f96a728.js',
				'/_app/assets/test-d7099871.css'
			]),
		() =>
			N(() => import('./pages/about.svelte-4c6e4bd6.js'), [
				'/_app/pages/about.svelte-4c6e4bd6.js',
				'/_app/chunks/vendor-112f5557.js',
				'/_app/assets/vendor-c5979ca8.css'
			])
	],
	H = [
		[/^\/$/, [F[0], F[2]], [F[1]]],
		[/^\/articles\.json$/],
		[/^\/articles\/?$/, [F[0], F[3], F[4]], [F[1]]],
		[
			/^\/articles\/read\/adding-vite-imagetools-to-sveltekit\/?$/,
			[F[0], F[3], F[5], F[6]],
			[F[1]]
		],
		[/^\/about\/?$/, [F[0], F[7]], [F[1]]],
		[/^\/api\/github\/commits\.json$/]
	],
	Q = [F[0](), F[1]()];
function Z() {
	return { x: pageXOffset, y: pageYOffset };
}
function tt(t) {
	for (; t && 'A' !== t.nodeName.toUpperCase(); ) t = t.parentNode;
	return t;
}
class et {
	constructor({ base: t, routes: e }) {
		(this.base = t), (this.routes = e);
	}
	init(t) {
		let e;
		(this.renderer = t),
			(t.router = this),
			(this.enabled = !0),
			'scrollRestoration' in history && (history.scrollRestoration = 'manual'),
			addEventListener('beforeunload', () => {
				history.scrollRestoration = 'auto';
			}),
			addEventListener('load', () => {
				history.scrollRestoration = 'manual';
			}),
			addEventListener('scroll', () => {
				clearTimeout(e),
					(e = setTimeout(() => {
						const t = n(n({}, history.state || {}), { 'sveltekit:scroll': Z() });
						history.replaceState(t, document.title, window.location.href);
					}, 50));
			});
		const r = (t) => {
			const e = tt(t.target);
			e && e.href && e.hasAttribute('sveltekit:prefetch') && this.prefetch(new URL(e.href));
		};
		let s;
		addEventListener('touchstart', r),
			addEventListener('mousemove', (t) => {
				clearTimeout(s),
					(s = setTimeout(() => {
						r(t);
					}, 20));
			}),
			addEventListener('click', (t) => {
				var e;
				if (!this.enabled) return;
				if (t.button || 1 !== t.which) return;
				if (t.metaKey || t.ctrlKey || t.shiftKey || t.altKey) return;
				if (t.defaultPrevented) return;
				const r = tt(t.target);
				if (!r) return;
				if (!r.href) return;
				const s = 'object' == typeof r.href && 'SVGAnimatedString' === r.href.constructor.name,
					a = String(s ? r.href.baseVal : r.href);
				if (a === location.href) return void (location.hash || t.preventDefault());
				const n = null == (e = r.getAttribute('rel')) ? void 0 : e.split(/\s+/);
				if (r.hasAttribute('download') || (n && n.includes('external'))) return;
				if (s ? r.target.baseVal : r.target) return;
				const o = new URL(a);
				if (o.pathname === location.pathname && o.search === location.search) return;
				const i = r.hasAttribute('sveltekit:noscroll');
				history.pushState({}, '', o.href),
					this._navigate(o, i ? Z() : null, [], o.hash),
					t.preventDefault();
			}),
			addEventListener('popstate', (t) => {
				if (t.state && this.enabled) {
					const e = new URL(location.href);
					this._navigate(e, t.state['sveltekit:scroll'], []);
				}
			}),
			document.body.setAttribute('tabindex', '-1'),
			history.replaceState(history.state || {}, '', location.href);
	}
	parse(t) {
		if (t.origin !== location.origin) return null;
		if (!t.pathname.startsWith(this.base)) return null;
		const e = decodeURIComponent(t.pathname.slice(this.base.length) || '/'),
			r = this.routes.filter(([t]) => t.test(e)),
			s = new URLSearchParams(t.search);
		return { id: `${e}?${s}`, routes: r, path: e, query: s };
	}
	async goto(t, { noscroll: e = !1, replaceState: r = !1 } = {}, s) {
		if (this.enabled) {
			const a = new URL(
				t,
				(function (t) {
					let e = t.baseURI;
					if (!e) {
						const r = t.getElementsByTagName('base');
						e = r.length ? r[0].href : t.URL;
					}
					return e;
				})(document)
			);
			return (
				history[r ? 'replaceState' : 'pushState']({}, '', t),
				this._navigate(a, e ? Z() : null, s, a.hash)
			);
		}
		return (location.href = t), new Promise(() => {});
	}
	enable() {
		this.enabled = !0;
	}
	disable() {
		this.enabled = !1;
	}
	async prefetch(t) {
		return this.renderer.load(this.parse(t));
	}
	async _navigate(t, e, r, s) {
		const a = this.parse(t);
		this.renderer.notify({ path: a.path, query: a.query }),
			location.pathname.endsWith('/') &&
				'/' !== location.pathname &&
				history.replaceState({}, '', `${location.pathname.slice(0, -1)}${location.search}`),
			await this.renderer.update(a, r, !1),
			document.body.focus();
		const n = s && document.getElementById(s.slice(1));
		e
			? scrollTo(e.x, e.y)
			: n
			? scrollTo(0, n.getBoundingClientRect().top + scrollY)
			: scrollTo(0, 0);
	}
}
function rt(t) {
	const e = U(t);
	let r = !0;
	return {
		notify: function () {
			(r = !0), e.update((t) => t);
		},
		set: function (t) {
			(r = !1), e.set(t);
		},
		subscribe: function (t) {
			let s;
			return e.subscribe((e) => {
				(void 0 === s || (r && e !== s)) && t((s = e));
			});
		}
	};
}
function st(t, a) {
	const n = 'string' == typeof t ? t : t.url,
		o = document.querySelector(`script[type="svelte-data"][url="${n}"]`);
	if (o) {
		const t = JSON.parse(o.textContent),
			{ body: a } = t,
			n = ((t, a) => {
				var n = {};
				for (var o in t) e.call(t, o) && a.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && r) for (var o of r(t)) a.indexOf(o) < 0 && s.call(t, o) && (n[o] = t[o]);
				return n;
			})(t, ['body']);
		return Promise.resolve(new Response(a, n));
	}
	return fetch(t, a);
}
class at {
	constructor({ Root: t, fallback: e, target: r, session: s, host: a }) {
		(this.Root = t),
			(this.fallback = e),
			(this.host = a),
			(this.router = null),
			(this.target = r),
			(this.started = !1),
			(this.session_id = 1),
			(this.invalid = new Set()),
			(this.invalidating = null),
			(this.current = { page: null, session_id: null, branch: [] }),
			(this.cache = new Map()),
			(this.loading = { id: null, promise: null }),
			(this.stores = { page: rt({}), navigating: U(null), session: U(s) }),
			(this.$session = null),
			(this.root = null);
		let n = !1;
		this.stores.session.subscribe(async (t) => {
			if (((this.$session = t), !n)) return;
			this.session_id += 1;
			const e = this.router.parse(new URL(location.href));
			this.update(e, [], !0);
		}),
			(n = !0);
	}
	async start({ status: t, error: e, nodes: r, page: s }) {
		const a = [];
		let o,
			i,
			l,
			c = {};
		try {
			for (let o = 0; o < r.length; o += 1) {
				const u = o === r.length - 1,
					d = await this._load_node({
						module: await r[o],
						page: s,
						context: c,
						status: u && t,
						error: u && e
					});
				if ((a.push(d), d && d.loaded))
					if (d.loaded.error) {
						if (e) throw d.loaded.error;
						(i = d.loaded.status), (l = d.loaded.error);
					} else d.loaded.context && (c = n(n({}, c), d.loaded.context));
			}
			o = await this._get_navigation_result_from_branch({ page: s, branch: a });
		} catch (u) {
			if (e) throw u;
			(i = 500), (l = u);
		}
		l && (o = await this._load_error({ status: i, error: l, path: s.path, query: s.query })),
			o.redirect ? (location.href = new URL(o.redirect, location.href).href) : this._init(o);
	}
	notify({ path: t, query: e }) {
		dispatchEvent(new CustomEvent('sveltekit:navigation-start')),
			this.started &&
				this.stores.navigating.set({
					from: { path: this.current.page.path, query: this.current.page.query },
					to: { path: t, query: e }
				});
	}
	async update(t, e, r) {
		const s = (this.token = {});
		let a = await this._get_navigation_result(t, r);
		if (s !== this.token) return;
		if ((this.invalid.clear(), a.redirect)) {
			if (!(e.length > 10 || e.includes(t.path)))
				return void (this.router
					? this.router.goto(a.redirect, { replaceState: !0 }, [...e, t.path])
					: (location.href = new URL(a.redirect, location.href).href));
			a = await this._load_error({
				status: 500,
				error: new Error('Redirect loop'),
				path: t.path,
				query: t.query
			});
		}
		a.reload
			? location.reload()
			: this.started
			? ((this.current = a.state),
			  this.root.$set(a.props),
			  this.stores.navigating.set(null),
			  await 0)
			: this._init(a),
			dispatchEvent(new CustomEvent('sveltekit:navigation-end')),
			(this.loading.promise = null),
			(this.loading.id = null);
		const n = a.state.branch[a.state.branch.length - 1];
		n && !1 === n.module.router ? this.router.disable() : this.router.enable();
	}
	load(t) {
		return (
			(this.loading.promise = this._get_navigation_result(t, !1)),
			(this.loading.id = t.id),
			this.loading.promise
		);
	}
	invalidate(t) {
		return (
			this.invalid.add(t),
			this.invalidating ||
				(this.invalidating = Promise.resolve().then(async () => {
					const t = this.router.parse(new URL(location.href));
					await this.update(t, [], !0), (this.invalidating = null);
				})),
			this.invalidating
		);
	}
	_init(t) {
		this.current = t.state;
		const e = document.querySelector('style[data-svelte]');
		e && e.remove(),
			(this.root = new this.Root({
				target: this.target,
				props: n({ stores: this.stores }, t.props),
				hydrate: !0
			})),
			(this.started = !0);
	}
	async _get_navigation_result(t, e) {
		if (this.loading.id === t.id) return this.loading.promise;
		for (let r = 0; r < t.routes.length; r += 1) {
			const s = t.routes[r];
			if (1 === s.length) return { reload: !0 };
			let a = r + 1;
			for (; a < t.routes.length; ) {
				const e = t.routes[a];
				if (e[0].toString() !== s[0].toString()) break;
				1 !== e.length && e[1].forEach((t) => t()), (a += 1);
			}
			const n = await this._load({ route: s, path: t.path, query: t.query }, e);
			if (n) return n;
		}
		return await this._load_error({
			status: 404,
			error: new Error(`Not found: ${t.path}`),
			path: t.path,
			query: t.query
		});
	}
	async _get_navigation_result_from_branch({ page: t, branch: e }) {
		const r = e.filter(Boolean),
			s = {
				state: { page: t, branch: e, session_id: this.session_id },
				props: { components: r.map((t) => t.module.default) }
			};
		for (let o = 0; o < r.length; o += 1)
			r[o].loaded && (s.props[`props_${o}`] = await r[o].loaded.props);
		(this.current.page &&
			t.path === this.current.page.path &&
			t.query.toString() === this.current.page.query.toString()) ||
			(s.props.page = t);
		const a = r[r.length - 1],
			n = a.loaded && a.loaded.maxage;
		if (n) {
			const e = `${t.path}?${t.query}`;
			let r = !1;
			const a = () => {
					this.cache.get(e) === s && this.cache.delete(e), i(), clearTimeout(o);
				},
				o = setTimeout(a, 1e3 * n),
				i = this.stores.session.subscribe(() => {
					r && a();
				});
			(r = !0), this.cache.set(e, s);
		}
		return s;
	}
	async _load_node({ status: t, error: e, module: r, page: s, context: a }) {
		const o = {
				module: r,
				uses: {
					params: new Set(),
					path: !1,
					query: !1,
					session: !1,
					context: !1,
					dependencies: []
				},
				loaded: null,
				context: a
			},
			i = {};
		for (const n in s.params)
			Object.defineProperty(i, n, {
				get: () => (o.uses.params.add(n), s.params[n]),
				enumerable: !0
			});
		const l = this.$session;
		if (r.load) {
			const { started: c } = this,
				u = {
					page: {
						host: s.host,
						params: i,
						get path() {
							return (o.uses.path = !0), s.path;
						},
						get query() {
							return (o.uses.query = !0), s.query;
						}
					},
					get session() {
						return (o.uses.session = !0), l;
					},
					get context() {
						return (o.uses.context = !0), n({}, a);
					},
					fetch(t, e) {
						const r = 'string' == typeof t ? t : t.url,
							{ href: a } = new URL(r, new URL(s.path, document.baseURI));
						return o.uses.dependencies.push(a), c ? fetch(t, e) : st(t, e);
					}
				};
			e && ((u.status = t), (u.error = e));
			const d = await r.load.call(null, u);
			if (!d) return;
			(o.loaded = (function (t) {
				if (t.error) {
					const e = 'string' == typeof t.error ? new Error(t.error) : t.error,
						r = t.status;
					return e instanceof Error
						? !r || r < 400 || r > 599
							? (console.warn(
									'"error" returned from load() without a valid status code — defaulting to 500'
							  ),
							  { status: 500, error: e })
							: { status: r, error: e }
						: {
								status: 500,
								error: new Error(
									`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`
								)
						  };
				}
				if (t.redirect) {
					if (!t.status || 3 !== Math.floor(t.status / 100))
						return {
							status: 500,
							error: new Error(
								'"redirect" property returned from load() must be accompanied by a 3xx status code'
							)
						};
					if ('string' != typeof t.redirect)
						return {
							status: 500,
							error: new Error('"redirect" property returned from load() must be a string')
						};
				}
				return t;
			})(d)),
				o.loaded.context && (o.context = o.loaded.context);
		}
		return o;
	}
	async _load({ route: t, path: e, query: r }, s) {
		const a = `${e}?${r}`;
		if (!s && this.cache.has(a)) return this.cache.get(a);
		const [o, i, l, c] = t,
			u = c ? c(o.exec(e)) : {},
			d = this.current.page && {
				path: e !== this.current.page.path,
				params: Object.keys(u).filter((t) => this.current.page.params[t] !== u[t]),
				query: r.toString() !== this.current.page.query.toString(),
				session: this.session_id !== this.current.session_id
			},
			h = { host: this.host, path: e, query: r, params: u },
			p = [];
		let f = {},
			g = !1,
			m = 200,
			_ = null;
		i.forEach((t) => t());
		t: for (let y = 0; y < i.length; y += 1) {
			let t;
			try {
				if (!i[y]) continue;
				const e = await i[y](),
					r = this.current.branch[y];
				if (
					!r ||
					e !== r.module ||
					(d.path && r.uses.path) ||
					d.params.some((t) => r.uses.params.has(t)) ||
					(d.query && r.uses.query) ||
					(d.session && r.uses.session) ||
					r.uses.dependencies.some((t) => this.invalid.has(t)) ||
					(g && r.uses.context)
				) {
					t = await this._load_node({ module: e, page: h, context: f });
					const r = y === i.length - 1;
					if (t && t.loaded) {
						if (
							(t.loaded.error && ((m = t.loaded.status), (_ = t.loaded.error)), t.loaded.redirect)
						)
							return { redirect: t.loaded.redirect };
						t.loaded.context && (g = !0);
					} else if (r && e.load) return;
				} else t = r;
			} catch ($) {
				(m = 500), (_ = $);
			}
			if (_) {
				for (; y--; )
					if (l[y]) {
						let t,
							e,
							r = y;
						for (; !(e = p[r]); ) r -= 1;
						try {
							if (
								((t = await this._load_node({
									status: m,
									error: _,
									module: await l[y](),
									page: h,
									context: e.context
								})),
								t.loaded.error)
							)
								continue;
							p.push(t);
							break t;
						} catch ($) {
							continue;
						}
					}
				return await this._load_error({ status: m, error: _, path: e, query: r });
			}
			t && t.loaded && t.loaded.context && (f = n(n({}, f), t.loaded.context)), p.push(t);
		}
		return await this._get_navigation_result_from_branch({ page: h, branch: p });
	}
	async _load_error({ status: t, error: e, path: r, query: s }) {
		const a = { host: this.host, path: r, query: s, params: {} },
			n = await this._load_node({ module: await this.fallback[0], page: a, context: {} }),
			o = [
				n,
				await this._load_node({
					status: t,
					error: e,
					module: await this.fallback[1],
					page: a,
					context: n && n.loaded && n.loaded.context
				})
			];
		return await this._get_navigation_result_from_branch({ page: a, branch: o });
	}
}
async function nt({ paths: t, target: e, session: r, host: s, route: a, spa: n, hydrate: o }) {
	const i = a && new et({ base: t.base, routes: H }),
		l = new at({ Root: X, fallback: Q, target: e, session: r, host: s });
	o && (await l.start(o)),
		a && i.init(l),
		n && i.goto(location.href, { replaceState: !0 }, []),
		dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { nt as start };
