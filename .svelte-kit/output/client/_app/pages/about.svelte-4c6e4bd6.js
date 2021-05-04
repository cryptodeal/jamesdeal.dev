import {
	S as e,
	i as t,
	s as r,
	l as n,
	f as l,
	M as s,
	d as a,
	e as o,
	t as i,
	c as f,
	a as c,
	g as m,
	b as $,
	F as u,
	h as g,
	Y as h,
	k as p,
	n as d,
	j as x,
	m as b,
	o as w,
	v,
	r as y,
	w as k,
	K as E,
	u as S,
	B as I
} from '../chunks/vendor-112f5557.js';
function T(e) {
	let t, r;
	return {
		c() {
			(t = o('span')), (r = i(e[0])), this.h();
		},
		l(n) {
			t = f(n, 'SPAN', { class: !0 });
			var l = c(t);
			(r = m(l, e[0])), l.forEach(a), this.h();
		},
		h() {
			$(
				t,
				'class',
				'rounded-full cursor-pointer font-extralight bg-red-800 my-1 mx-1 text-white text-sm py-1 px-2 inline-block dark:bg-green-300 dark:text-gray-900 hover:transform-gpu hover:-translate-x-1 hover:-translate-y-1 hover:shadow-animate hover:transition hover:duration-300 hover:ease-in-out hover:'
			);
		},
		m(e, n) {
			l(e, t, n), u(t, r);
		},
		p(e, t) {
			1 & t && g(r, e[0]);
		},
		d(e) {
			e && a(t);
		}
	};
}
function C(e) {
	let t, r;
	return {
		c() {
			(t = o('a')), (r = i(e[0])), this.h();
		},
		l(n) {
			t = f(n, 'A', { class: !0, href: !0, target: !0, rel: !0 });
			var l = c(t);
			(r = m(l, e[0])), l.forEach(a), this.h();
		},
		h() {
			$(
				t,
				'class',
				'rounded-full cursor-pointer font-extralight bg-red-800 my-1 mx-1 text-white text-sm py-1 px-2 inline-block dark:bg-green-300 dark:text-gray-900 hover:transform-gpu hover:-translate-x-1 hover:-translate-y-1 hover:shadow-animate hover:transition hover:duration-300 hover:ease-in-out'
			),
				$(t, 'href', e[1]),
				$(t, 'target', '_blank'),
				$(t, 'rel', 'noopener noreferrer');
		},
		m(e, n) {
			l(e, t, n), u(t, r);
		},
		p(e, n) {
			1 & n && g(r, e[0]), 2 & n && $(t, 'href', e[1]);
		},
		d(e) {
			e && a(t);
		}
	};
}
function R(e) {
	let t;
	function r(e, t) {
		return '' !== e[1] ? C : T;
	}
	let o = r(e),
		i = o(e);
	return {
		c() {
			i.c(), (t = n());
		},
		l(e) {
			i.l(e), (t = n());
		},
		m(e, r) {
			i.m(e, r), l(e, t, r);
		},
		p(e, [n]) {
			o === (o = r(e)) && i ? i.p(e, n) : (i.d(1), (i = o(e)), i && (i.c(), i.m(t.parentNode, t)));
		},
		i: s,
		o: s,
		d(e) {
			i.d(e), e && a(t);
		}
	};
}
function A(e, t, r) {
	let { text: n = '' } = t,
		{ href: l = '' } = t;
	return (
		(e.$$set = (e) => {
			'text' in e && r(0, (n = e.text)), 'href' in e && r(1, (l = e.href));
		}),
		[n, l]
	);
}
class D extends e {
	constructor(e) {
		super(), t(this, e, A, R, r, { text: 0, href: 1 });
	}
}
function M(e) {
	let t, r;
	return {
		c() {
			(t = o('h3')), (r = i(e[0])), this.h();
		},
		l(n) {
			t = f(n, 'H3', { class: !0 });
			var l = c(t);
			(r = m(l, e[0])), l.forEach(a), this.h();
		},
		h() {
			$(
				t,
				'class',
				'font-extralight text-xl text-center text-red-800 w-1/2 inline-block items-center sm:text-2xl md:text-left md:w-3/4 dark:text-green-400'
			);
		},
		m(e, n) {
			l(e, t, n), u(t, r);
		},
		p(e, t) {
			1 & t && g(r, e[0]);
		},
		d(e) {
			e && a(t);
		}
	};
}
function j(e) {
	let t, r, n;
	return {
		c() {
			(t = o('h3')), (r = o('a')), (n = i(e[0])), this.h();
		},
		l(l) {
			t = f(l, 'H3', { class: !0 });
			var s = c(t);
			r = f(s, 'A', { href: !0, target: !0, rel: !0 });
			var o = c(r);
			(n = m(o, e[0])), o.forEach(a), s.forEach(a), this.h();
		},
		h() {
			$(r, 'href', e[1]),
				$(r, 'target', '_blank'),
				$(r, 'rel', 'noopener noreferrer'),
				$(
					t,
					'class',
					'font-extralight text-xl text-center text-red-800 w-3/4 inline-block items-center sm:w-1/2 sm:text-2xl md:text-left md:w-3/4 dark:text-green-400'
				);
		},
		m(e, s) {
			l(e, t, s), u(t, r), u(r, n);
		},
		p(e, t) {
			1 & t && g(n, e[0]), 2 & t && $(r, 'href', e[1]);
		},
		d(e) {
			e && a(t);
		}
	};
}
function P(e) {
	let t, r, n, s, h;
	return {
		c() {
			(t = o('h3')), (r = o('a')), (n = i(e[0])), (s = i(' / ')), (h = i(e[2])), this.h();
		},
		l(l) {
			t = f(l, 'H3', { class: !0 });
			var o = c(t);
			r = f(o, 'A', { href: !0, target: !0, rel: !0 });
			var i = c(r);
			(n = m(i, e[0])), i.forEach(a), (s = m(o, ' / ')), (h = m(o, e[2])), o.forEach(a), this.h();
		},
		h() {
			$(r, 'href', e[1]),
				$(r, 'target', '_blank'),
				$(r, 'rel', 'noopener noreferrer'),
				$(
					t,
					'class',
					'font-extralight text-xl text-center text-red-800 w-3/4 inline-block items-center sm:w-1/2 sm:text-2xl md:text-left md:w-3/4 dark:text-green-400'
				);
		},
		m(e, a) {
			l(e, t, a), u(t, r), u(r, n), u(t, s), u(t, h);
		},
		p(e, t) {
			1 & t && g(n, e[0]), 2 & t && $(r, 'href', e[1]), 4 & t && g(h, e[2]);
		},
		d(e) {
			e && a(t);
		}
	};
}
function N(e) {
	let t;
	function r(e, t) {
		return '' !== e[1] && '' != e[2] ? P : '' !== e[1] ? j : M;
	}
	let o = r(e),
		i = o(e);
	return {
		c() {
			i.c(), (t = n());
		},
		l(e) {
			i.l(e), (t = n());
		},
		m(e, r) {
			i.m(e, r), l(e, t, r);
		},
		p(e, [n]) {
			o === (o = r(e)) && i ? i.p(e, n) : (i.d(1), (i = o(e)), i && (i.c(), i.m(t.parentNode, t)));
		},
		i: s,
		o: s,
		d(e) {
			i.d(e), e && a(t);
		}
	};
}
function V(e, t, r) {
	let { title: n = '' } = t,
		{ href: l = '' } = t,
		{ role: s = '' } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && r(0, (n = e.title)),
				'href' in e && r(1, (l = e.href)),
				'role' in e && r(2, (s = e.role));
		}),
		[n, l, s]
	);
}
class W extends e {
	constructor(e) {
		super(), t(this, e, V, N, r, { title: 0, href: 1, role: 2 });
	}
}
function B(e) {
	let t, r, n;
	return {
		c() {
			(t = o('div')), (r = o('h2')), (n = i(e[0])), this.h();
		},
		l(l) {
			t = f(l, 'DIV', { class: !0 });
			var s = c(t);
			r = f(s, 'H2', { class: !0 });
			var o = c(r);
			(n = m(o, e[0])), o.forEach(a), s.forEach(a), this.h();
		},
		h() {
			$(
				r,
				'class',
				'font-extralight text-3xl text-red-800 uppercase sm:text-5xl dark:text-green-400'
			),
				$(t, 'class', 'flex px-5 justify-center items-top md:justify-end lg:px-15');
		},
		m(e, s) {
			l(e, t, s), u(t, r), u(r, n);
		},
		p(e, [t]) {
			1 & t && g(n, e[0]);
		},
		i: s,
		o: s,
		d(e) {
			e && a(t);
		}
	};
}
function U(e, t, r) {
	let { title: n } = t;
	return (
		(e.$$set = (e) => {
			'title' in e && r(0, (n = e.title));
		}),
		[n]
	);
}
class L extends e {
	constructor(e) {
		super(), t(this, e, U, B, r, { title: 0 });
	}
}
function O(e) {
	let t, r;
	return {
		c() {
			(t = o('p')), (r = i(e[0])), this.h();
		},
		l(n) {
			t = f(n, 'P', { class: !0 });
			var l = c(t);
			(r = m(l, e[0])), l.forEach(a), this.h();
		},
		h() {
			$(
				t,
				'class',
				'font-light text-xs text-center text-gray-900 w-3/4 inline-block items-center sm:w-1/2 md:text-left md:w-3/4 dark:text-gray-200'
			);
		},
		m(e, n) {
			l(e, t, n), u(t, r);
		},
		p(e, [t]) {
			1 & t && g(r, e[0]);
		},
		i: s,
		o: s,
		d(e) {
			e && a(t);
		}
	};
}
function H(e, t, r) {
	let { dates: n } = t;
	return (
		(e.$$set = (e) => {
			'dates' in e && r(0, (n = e.dates));
		}),
		[n]
	);
}
class J extends e {
	constructor(e) {
		super(), t(this, e, H, O, r, { dates: 0 });
	}
}
function X(e, t, r) {
	const n = e.slice();
	return (n[1] = t[r]), n;
}
function F(e) {
	let t,
		r,
		n = e[1] + '';
	return {
		c() {
			(t = o('li')), (r = i(n));
		},
		l(e) {
			t = f(e, 'LI', {});
			var l = c(t);
			(r = m(l, n)), l.forEach(a);
		},
		m(e, n) {
			l(e, t, n), u(t, r);
		},
		p(e, t) {
			1 & t && n !== (n = e[1] + '') && g(r, n);
		},
		d(e) {
			e && a(t);
		}
	};
}
function K(e) {
	let t,
		r,
		n,
		s,
		h,
		x,
		b = e[1][0] + '',
		w = e[1][1][0] + '';
	return {
		c() {
			(t = o('li')), (r = i(b)), (n = p()), (s = o('a')), (h = i(w)), this.h();
		},
		l(e) {
			t = f(e, 'LI', {});
			var l = c(t);
			(r = m(l, b)), (n = d(l)), (s = f(l, 'A', { href: !0, target: !0, rel: !0 }));
			var o = c(s);
			(h = m(o, w)), o.forEach(a), l.forEach(a), this.h();
		},
		h() {
			$(s, 'href', (x = e[1][1][1])), $(s, 'target', '_blank'), $(s, 'rel', 'noopener noreferrer');
		},
		m(e, a) {
			l(e, t, a), u(t, r), u(t, n), u(t, s), u(s, h);
		},
		p(e, t) {
			1 & t && b !== (b = e[1][0] + '') && g(r, b),
				1 & t && w !== (w = e[1][1][0] + '') && g(h, w),
				1 & t && x !== (x = e[1][1][1]) && $(s, 'href', x);
		},
		d(e) {
			e && a(t);
		}
	};
}
function _(e) {
	let t, r;
	function s(e, r) {
		return (null == t || 1 & r) && (t = !!Array.isArray(e[1])), t ? K : F;
	}
	let o = s(e, -1),
		i = o(e);
	return {
		c() {
			i.c(), (r = n());
		},
		l(e) {
			i.l(e), (r = n());
		},
		m(e, t) {
			i.m(e, t), l(e, r, t);
		},
		p(e, t) {
			o === (o = s(e, t)) && i
				? i.p(e, t)
				: (i.d(1), (i = o(e)), i && (i.c(), i.m(r.parentNode, r)));
		},
		d(e) {
			i.d(e), e && a(r);
		}
	};
}
function G(e) {
	let t,
		r = e[0],
		n = [];
	for (let l = 0; l < r.length; l += 1) n[l] = _(X(e, r, l));
	return {
		c() {
			t = o('ul');
			for (let e = 0; e < n.length; e += 1) n[e].c();
			this.h();
		},
		l(e) {
			t = f(e, 'UL', { class: !0 });
			var r = c(t);
			for (let t = 0; t < n.length; t += 1) n[t].l(r);
			r.forEach(a), this.h();
		},
		h() {
			$(
				t,
				'class',
				'font-extralight list-disc list-inside text-left text-sm text-gray-800 w-3/4 inline-block items-center sm:w-1/2 md:w-3/4 dark:text-gray-200'
			);
		},
		m(e, r) {
			l(e, t, r);
			for (let l = 0; l < n.length; l += 1) n[l].m(t, null);
		},
		p(e, [l]) {
			if (1 & l) {
				let s;
				for (r = e[0], s = 0; s < r.length; s += 1) {
					const a = X(e, r, s);
					n[s] ? n[s].p(a, l) : ((n[s] = _(a)), n[s].c(), n[s].m(t, null));
				}
				for (; s < n.length; s += 1) n[s].d(1);
				n.length = r.length;
			}
		},
		i: s,
		o: s,
		d(e) {
			e && a(t), h(n, e);
		}
	};
}
function q(e, t, r) {
	let { bulletItems: n } = t;
	return (
		(e.$$set = (e) => {
			'bulletItems' in e && r(0, (n = e.bulletItems));
		}),
		[n]
	);
}
class z extends e {
	constructor(e) {
		super(), t(this, e, q, G, r, { bulletItems: 0 });
	}
}
const Y = 'Education',
	Q = 'Skills',
	Z = 'My Stack',
	ee = 'Experience',
	te = {
		edu: {
			subtitle: 'Texas A&M University',
			dates: 'AUG 2015 - DEC 2018, TX',
			info: [
				'Bachelor of Arts in Philosophy',
				'Business Minor',
				'Undergraduate research into Nietzsche’s concept of ressentiment'
			]
		},
		skills: {
			lang: { subtitle: 'Languages', list: ['Javascript', 'Typescript', 'NoSQL', 'Bash'] },
			libs: {
				subtitle: 'Frameworks/Libraries',
				list: [
					['Node', 'https://nodejs.org/en/'],
					['Svelte', 'https://svelte.dev/'],
					['Sapper', 'https://sapper.svelte.dev/'],
					['SvelteKit', 'https://kit.svelte.dev/'],
					['TailwindCSS', 'https://tailwindcss.com/'],
					['WindiCSS', 'https://windicss.org/'],
					['Rollup', 'https://rollupjs.org'],
					['Vite', 'https://vitejs.dev/'],
					['Express', 'https://expressjs.com/'],
					['uWebsockets.js', 'https://github.com/uNetworking/uWebSockets.js']
				]
			},
			graphics: {
				subtitle: 'Graphics/Data Viz',
				list: ['SVG', ['D3.js', 'https://d3js.org/'], ['Layer Cake', 'https://layercake.graphics/']]
			}
		},
		stack: {
			frontend: {
				subtitle: 'Frontend',
				list: ['Current Stack: SvelteKit (Vite + Windi Css)', 'Previously: Sapper (Rollup)']
			},
			backend: {
				subtitle: 'Backend',
				list: [
					'Node.js',
					'uWebsockets.js (REST, Websockets, and Pub/Sub Support)',
					'MongoDb (Native & Mongoose)'
				]
			}
		},
		exp: {
			uw: {
				subtitle: {
					title: 'UnaliWear',
					href: 'https://www.unaliwear.com/',
					role: 'UX, Customer Success & Acquisition'
				},
				dates: 'May 2020 - PRESENT, AUSTIN, TX',
				info: [
					'Worked to train new customers',
					'Fleshed out data aggregation pipelines to gather accelerometer data for on the wrist fall detection (responsible for doubling our dataset)',
					'Oversaw 500% increase in month to month sales rate',
					'Helped automate our workflow',
					'Worked with developers to create tools enabling us to better support our user base'
				]
			},
			reyReyPSC: {
				subtitle: {
					title: 'Reynolds and Reynolds',
					href: 'https://www.reyrey.com/',
					role: 'Software Consultant'
				},
				dates: 'DEC 2018 - MAY 2019, TX',
				info: [
					'Managed ~15 accounts with major car dealerships',
					'Resolved customer issues with the software',
					'Submitted bug reports to development team'
				]
			},
			coss: {
				subtitle: {
					title: 'Cryptocurrency One Stop Solution ($COSS)',
					href: 'https://www.coss.io/',
					role: 'Contract Developer'
				},
				dates: 'OCT 2018 - DEC 2018, REMOTE',
				info: [
					[
						'Contracted to write official Node.Js',
						['API wrapper', 'https://github.com/coss-exchange/trading-api-wrapper-node-js']
					],
					"Worked with COSS's backend head dev to flesh API requirements",
					'Reported bugs/security vulnerabilities to dev team during beta testing under NDA'
				]
			},
			reyReyIT: {
				subtitle: {
					title: 'Reynolds and Reynolds',
					href: 'https://www.reyrey.com/',
					role: 'IT Consultant (Part Time)'
				},
				dates: 'OCT 2017 - DEC 2018, TX',
				info: [
					'Handled incoming calls and emails to provide IT support for contracted UK clients',
					'Dispatched an Engineer to manage the problem when appropriate'
				]
			}
		}
	};
function re(e, t, r) {
	const n = e.slice();
	return (n[0] = t[r]), n;
}
function ne(e, t, r) {
	const n = e.slice();
	return (n[0] = t[r]), n;
}
function le(e, t, r) {
	const n = e.slice();
	return (n[5] = t[r]), n;
}
function se(e) {
	let t, r;
	return (
		(t = new D({ props: { text: e[5] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (r = !0);
			},
			p: s,
			i(e) {
				r || (v(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function ae(e) {
	let t, r;
	return (
		(t = new D({ props: { text: e[0][0], href: e[0][1] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (r = !0);
			},
			p: s,
			i(e) {
				r || (v(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function oe(e) {
	let t, r;
	return (
		(t = new D({ props: { text: e[0] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (r = !0);
			},
			p: s,
			i(e) {
				r || (v(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function ie(e) {
	let t, r;
	return (
		(t = new D({ props: { text: e[0][0], href: e[0][1] } })),
		{
			c() {
				x(t.$$.fragment);
			},
			l(e) {
				b(t.$$.fragment, e);
			},
			m(e, n) {
				w(t, e, n), (r = !0);
			},
			p: s,
			i(e) {
				r || (v(t.$$.fragment, e), (r = !0));
			},
			o(e) {
				y(t.$$.fragment, e), (r = !1);
			},
			d(e) {
				k(t, e);
			}
		}
	);
}
function fe(e) {
	let t, r, s, o;
	const i = [ie, oe],
		f = [];
	var c;
	return (
		(c = e),
		(t = Array.isArray(c[0]) ? 0 : 1),
		(r = f[t] = i[t](e)),
		{
			c() {
				r.c(), (s = n());
			},
			l(e) {
				r.l(e), (s = n());
			},
			m(e, r) {
				f[t].m(e, r), l(e, s, r), (o = !0);
			},
			p(e, t) {
				r.p(e, t);
			},
			i(e) {
				o || (v(r), (o = !0));
			},
			o(e) {
				y(r), (o = !1);
			},
			d(e) {
				f[t].d(e), e && a(s);
			}
		}
	);
}
function ce(e) {
	let t,
		r,
		n,
		s,
		i,
		m,
		g,
		T,
		C,
		R,
		A,
		D,
		M,
		j,
		P,
		N,
		V,
		B,
		U,
		O,
		H,
		X,
		F,
		K,
		_,
		G,
		q,
		oe,
		ie,
		ce,
		me,
		$e,
		ue,
		ge,
		he,
		pe,
		de,
		xe,
		be,
		we,
		ve,
		ye,
		ke,
		Ee,
		Se,
		Ie,
		Te,
		Ce,
		Re,
		Ae,
		De,
		Me,
		je,
		Pe,
		Ne,
		Ve,
		We,
		Be,
		Ue,
		Le,
		Oe,
		He,
		Je,
		Xe,
		Fe,
		Ke,
		_e,
		Ge;
	(g = new L({ props: { title: Y } })),
		(R = new W({ props: { title: te.edu.subtitle } })),
		(D = new J({ props: { dates: te.edu.dates } })),
		(j = new z({ props: { bulletItems: te.edu.info } })),
		(N = new L({ props: { title: Q } })),
		(U = new W({ props: { title: te.skills.lang.subtitle } }));
	let qe = te.skills.lang.list,
		ze = [];
	for (let l = 0; l < qe.length; l += 1) ze[l] = se(le(e, qe, l));
	const Ye = (e) =>
		y(ze[e], 1, 1, () => {
			ze[e] = null;
		});
	F = new W({ props: { title: te.skills.libs.subtitle } });
	let Qe = te.skills.libs.list,
		Ze = [];
	for (let l = 0; l < Qe.length; l += 1) Ze[l] = ae(ne(e, Qe, l));
	const et = (e) =>
		y(Ze[e], 1, 1, () => {
			Ze[e] = null;
		});
	q = new W({ props: { title: te.skills.graphics.subtitle } });
	let tt = te.skills.graphics.list,
		rt = [];
	for (let l = 0; l < tt.length; l += 1) rt[l] = fe(re(e, tt, l));
	const nt = (e) =>
		y(rt[e], 1, 1, () => {
			rt[e] = null;
		});
	return (
		(me = new L({ props: { title: Z } })),
		(ge = new W({ props: { title: te.stack.frontend.subtitle } })),
		(pe = new z({ props: { bulletItems: te.stack.frontend.list } })),
		(xe = new W({ props: { title: te.stack.backend.subtitle } })),
		(we = new z({ props: { bulletItems: te.stack.backend.list } })),
		(ye = new L({ props: { title: ee } })),
		(Se = new W({
			props: {
				title: te.exp.uw.subtitle.title,
				href: te.exp.uw.subtitle.href,
				role: te.exp.uw.subtitle.role
			}
		})),
		(Te = new J({ props: { dates: te.exp.uw.dates } })),
		(Re = new z({ props: { bulletItems: te.exp.uw.info } })),
		(De = new W({
			props: {
				title: te.exp.reyReyPSC.subtitle.title,
				href: te.exp.reyReyPSC.subtitle.href,
				role: te.exp.reyReyPSC.subtitle.role
			}
		})),
		(je = new J({ props: { dates: te.exp.reyReyPSC.dates } })),
		(Ne = new z({ props: { bulletItems: te.exp.reyReyPSC.info } })),
		(We = new W({
			props: {
				title: te.exp.coss.subtitle.title,
				href: te.exp.coss.subtitle.href,
				role: te.exp.coss.subtitle.role
			}
		})),
		(Ue = new J({ props: { dates: te.exp.coss.dates } })),
		(Oe = new z({ props: { bulletItems: te.exp.coss.info } })),
		(Je = new W({
			props: {
				title: te.exp.reyReyIT.subtitle.title,
				href: te.exp.reyReyIT.subtitle.href,
				role: te.exp.reyReyIT.subtitle.role
			}
		})),
		(Fe = new J({ props: { dates: te.exp.reyReyIT.dates } })),
		(_e = new z({ props: { bulletItems: te.exp.reyReyIT.info } })),
		{
			c() {
				(t = o('meta')),
					(r = o('meta')),
					(n = o('meta')),
					(s = o('meta')),
					(i = p()),
					(m = o('div')),
					x(g.$$.fragment),
					(T = p()),
					(C = o('div')),
					x(R.$$.fragment),
					(A = p()),
					x(D.$$.fragment),
					(M = p()),
					x(j.$$.fragment),
					(P = p()),
					x(N.$$.fragment),
					(V = p()),
					(B = o('div')),
					x(U.$$.fragment),
					(O = p()),
					(H = o('div'));
				for (let e = 0; e < ze.length; e += 1) ze[e].c();
				(X = p()), x(F.$$.fragment), (K = p()), (_ = o('div'));
				for (let e = 0; e < Ze.length; e += 1) Ze[e].c();
				(G = p()), x(q.$$.fragment), (oe = p()), (ie = o('div'));
				for (let e = 0; e < rt.length; e += 1) rt[e].c();
				(ce = p()),
					x(me.$$.fragment),
					($e = p()),
					(ue = o('div')),
					x(ge.$$.fragment),
					(he = p()),
					x(pe.$$.fragment),
					(de = p()),
					x(xe.$$.fragment),
					(be = p()),
					x(we.$$.fragment),
					(ve = p()),
					x(ye.$$.fragment),
					(ke = p()),
					(Ee = o('div')),
					x(Se.$$.fragment),
					(Ie = p()),
					x(Te.$$.fragment),
					(Ce = p()),
					x(Re.$$.fragment),
					(Ae = p()),
					x(De.$$.fragment),
					(Me = p()),
					x(je.$$.fragment),
					(Pe = p()),
					x(Ne.$$.fragment),
					(Ve = p()),
					x(We.$$.fragment),
					(Be = p()),
					x(Ue.$$.fragment),
					(Le = p()),
					x(Oe.$$.fragment),
					(He = p()),
					x(Je.$$.fragment),
					(Xe = p()),
					x(Fe.$$.fragment),
					(Ke = p()),
					x(_e.$$.fragment),
					this.h();
			},
			l(e) {
				const l = E('[data-svelte="svelte-1bs0b8b"]', document.head);
				(t = f(l, 'META', { name: !0, content: !0 })),
					(r = f(l, 'META', { name: !0, content: !0 })),
					(n = f(l, 'META', { property: !0, content: !0 })),
					(s = f(l, 'META', { property: !0, content: !0 })),
					l.forEach(a),
					(i = d(e)),
					(m = f(e, 'DIV', { class: !0 }));
				var o = c(m);
				b(g.$$.fragment, o), (T = d(o)), (C = f(o, 'DIV', { class: !0 }));
				var $ = c(C);
				b(R.$$.fragment, $),
					(A = d($)),
					b(D.$$.fragment, $),
					(M = d($)),
					b(j.$$.fragment, $),
					$.forEach(a),
					(P = d(o)),
					b(N.$$.fragment, o),
					(V = d(o)),
					(B = f(o, 'DIV', { class: !0 }));
				var u = c(B);
				b(U.$$.fragment, u), (O = d(u)), (H = f(u, 'DIV', { class: !0 }));
				var h = c(H);
				for (let t = 0; t < ze.length; t += 1) ze[t].l(h);
				h.forEach(a), (X = d(u)), b(F.$$.fragment, u), (K = d(u)), (_ = f(u, 'DIV', { class: !0 }));
				var p = c(_);
				for (let t = 0; t < Ze.length; t += 1) Ze[t].l(p);
				p.forEach(a),
					(G = d(u)),
					b(q.$$.fragment, u),
					(oe = d(u)),
					(ie = f(u, 'DIV', { class: !0 }));
				var x = c(ie);
				for (let t = 0; t < rt.length; t += 1) rt[t].l(x);
				x.forEach(a),
					u.forEach(a),
					(ce = d(o)),
					b(me.$$.fragment, o),
					($e = d(o)),
					(ue = f(o, 'DIV', { class: !0 }));
				var w = c(ue);
				b(ge.$$.fragment, w),
					(he = d(w)),
					b(pe.$$.fragment, w),
					(de = d(w)),
					b(xe.$$.fragment, w),
					(be = d(w)),
					b(we.$$.fragment, w),
					w.forEach(a),
					(ve = d(o)),
					b(ye.$$.fragment, o),
					(ke = d(o)),
					(Ee = f(o, 'DIV', { class: !0 }));
				var v = c(Ee);
				b(Se.$$.fragment, v),
					(Ie = d(v)),
					b(Te.$$.fragment, v),
					(Ce = d(v)),
					b(Re.$$.fragment, v),
					(Ae = d(v)),
					b(De.$$.fragment, v),
					(Me = d(v)),
					b(je.$$.fragment, v),
					(Pe = d(v)),
					b(Ne.$$.fragment, v),
					(Ve = d(v)),
					b(We.$$.fragment, v),
					(Be = d(v)),
					b(Ue.$$.fragment, v),
					(Le = d(v)),
					b(Oe.$$.fragment, v),
					(He = d(v)),
					b(Je.$$.fragment, v),
					(Xe = d(v)),
					b(Fe.$$.fragment, v),
					(Ke = d(v)),
					b(_e.$$.fragment, v),
					v.forEach(a),
					o.forEach(a),
					this.h();
			},
			h() {
				(document.title = 'My Resume - James Deal'),
					$(t, 'name', 'description'),
					$(t, 'content', 'Academic and professional experience, skills, and interests.'),
					$(r, 'name', 'keywords'),
					$(r, 'content', 'James Deal'),
					$(n, 'property', 'og:title'),
					$(n, 'content', 'My Resume - James Deal'),
					$(s, 'property', 'og:description'),
					$(s, 'content', 'My academic and professional experience, skills, and interests.'),
					$(C, 'class', 'text-center'),
					$(H, 'class', 'text-center w-3/4 inline-block md:text-left'),
					$(_, 'class', 'text-center w-3/4 inline-block md:text-left'),
					$(ie, 'class', 'text-center w-3/4 inline-block md:text-left'),
					$(B, 'class', 'text-center'),
					$(ue, 'class', 'text-center'),
					$(Ee, 'class', 'text-center'),
					$(
						m,
						'class',
						'rounded-lg h-full bg-opacity-80 bg-blue-300 my-5 mx-10 auto-rows-min grid py-5 gap-2 grid-cols-1 break-words md:gap-4 md:grid-cols-2 md:mx-20 lg:mx-30 xl:mx-40 2xl:mx-60 dark:bg-purple-900 dark:bg-opacity-30'
					);
			},
			m(e, a) {
				u(document.head, t),
					u(document.head, r),
					u(document.head, n),
					u(document.head, s),
					l(e, i, a),
					l(e, m, a),
					w(g, m, null),
					u(m, T),
					u(m, C),
					w(R, C, null),
					u(C, A),
					w(D, C, null),
					u(C, M),
					w(j, C, null),
					u(m, P),
					w(N, m, null),
					u(m, V),
					u(m, B),
					w(U, B, null),
					u(B, O),
					u(B, H);
				for (let t = 0; t < ze.length; t += 1) ze[t].m(H, null);
				u(B, X), w(F, B, null), u(B, K), u(B, _);
				for (let t = 0; t < Ze.length; t += 1) Ze[t].m(_, null);
				u(B, G), w(q, B, null), u(B, oe), u(B, ie);
				for (let t = 0; t < rt.length; t += 1) rt[t].m(ie, null);
				u(m, ce),
					w(me, m, null),
					u(m, $e),
					u(m, ue),
					w(ge, ue, null),
					u(ue, he),
					w(pe, ue, null),
					u(ue, de),
					w(xe, ue, null),
					u(ue, be),
					w(we, ue, null),
					u(m, ve),
					w(ye, m, null),
					u(m, ke),
					u(m, Ee),
					w(Se, Ee, null),
					u(Ee, Ie),
					w(Te, Ee, null),
					u(Ee, Ce),
					w(Re, Ee, null),
					u(Ee, Ae),
					w(De, Ee, null),
					u(Ee, Me),
					w(je, Ee, null),
					u(Ee, Pe),
					w(Ne, Ee, null),
					u(Ee, Ve),
					w(We, Ee, null),
					u(Ee, Be),
					w(Ue, Ee, null),
					u(Ee, Le),
					w(Oe, Ee, null),
					u(Ee, He),
					w(Je, Ee, null),
					u(Ee, Xe),
					w(Fe, Ee, null),
					u(Ee, Ke),
					w(_e, Ee, null),
					(Ge = !0);
			},
			p(e, [t]) {
				if (0 & t) {
					let r;
					for (qe = te.skills.lang.list, r = 0; r < qe.length; r += 1) {
						const n = le(e, qe, r);
						ze[r]
							? (ze[r].p(n, t), v(ze[r], 1))
							: ((ze[r] = se(n)), ze[r].c(), v(ze[r], 1), ze[r].m(H, null));
					}
					for (I(), r = qe.length; r < ze.length; r += 1) Ye(r);
					S();
				}
				if (0 & t) {
					let r;
					for (Qe = te.skills.libs.list, r = 0; r < Qe.length; r += 1) {
						const n = ne(e, Qe, r);
						Ze[r]
							? (Ze[r].p(n, t), v(Ze[r], 1))
							: ((Ze[r] = ae(n)), Ze[r].c(), v(Ze[r], 1), Ze[r].m(_, null));
					}
					for (I(), r = Qe.length; r < Ze.length; r += 1) et(r);
					S();
				}
				if (0 & t) {
					let r;
					for (tt = te.skills.graphics.list, r = 0; r < tt.length; r += 1) {
						const n = re(e, tt, r);
						rt[r]
							? (rt[r].p(n, t), v(rt[r], 1))
							: ((rt[r] = fe(n)), rt[r].c(), v(rt[r], 1), rt[r].m(ie, null));
					}
					for (I(), r = tt.length; r < rt.length; r += 1) nt(r);
					S();
				}
			},
			i(e) {
				if (!Ge) {
					v(g.$$.fragment, e),
						v(R.$$.fragment, e),
						v(D.$$.fragment, e),
						v(j.$$.fragment, e),
						v(N.$$.fragment, e),
						v(U.$$.fragment, e);
					for (let e = 0; e < qe.length; e += 1) v(ze[e]);
					v(F.$$.fragment, e);
					for (let e = 0; e < Qe.length; e += 1) v(Ze[e]);
					v(q.$$.fragment, e);
					for (let e = 0; e < tt.length; e += 1) v(rt[e]);
					v(me.$$.fragment, e),
						v(ge.$$.fragment, e),
						v(pe.$$.fragment, e),
						v(xe.$$.fragment, e),
						v(we.$$.fragment, e),
						v(ye.$$.fragment, e),
						v(Se.$$.fragment, e),
						v(Te.$$.fragment, e),
						v(Re.$$.fragment, e),
						v(De.$$.fragment, e),
						v(je.$$.fragment, e),
						v(Ne.$$.fragment, e),
						v(We.$$.fragment, e),
						v(Ue.$$.fragment, e),
						v(Oe.$$.fragment, e),
						v(Je.$$.fragment, e),
						v(Fe.$$.fragment, e),
						v(_e.$$.fragment, e),
						(Ge = !0);
				}
			},
			o(e) {
				y(g.$$.fragment, e),
					y(R.$$.fragment, e),
					y(D.$$.fragment, e),
					y(j.$$.fragment, e),
					y(N.$$.fragment, e),
					y(U.$$.fragment, e),
					(ze = ze.filter(Boolean));
				for (let t = 0; t < ze.length; t += 1) y(ze[t]);
				y(F.$$.fragment, e), (Ze = Ze.filter(Boolean));
				for (let t = 0; t < Ze.length; t += 1) y(Ze[t]);
				y(q.$$.fragment, e), (rt = rt.filter(Boolean));
				for (let t = 0; t < rt.length; t += 1) y(rt[t]);
				y(me.$$.fragment, e),
					y(ge.$$.fragment, e),
					y(pe.$$.fragment, e),
					y(xe.$$.fragment, e),
					y(we.$$.fragment, e),
					y(ye.$$.fragment, e),
					y(Se.$$.fragment, e),
					y(Te.$$.fragment, e),
					y(Re.$$.fragment, e),
					y(De.$$.fragment, e),
					y(je.$$.fragment, e),
					y(Ne.$$.fragment, e),
					y(We.$$.fragment, e),
					y(Ue.$$.fragment, e),
					y(Oe.$$.fragment, e),
					y(Je.$$.fragment, e),
					y(Fe.$$.fragment, e),
					y(_e.$$.fragment, e),
					(Ge = !1);
			},
			d(e) {
				a(t),
					a(r),
					a(n),
					a(s),
					e && a(i),
					e && a(m),
					k(g),
					k(R),
					k(D),
					k(j),
					k(N),
					k(U),
					h(ze, e),
					k(F),
					h(Ze, e),
					k(q),
					h(rt, e),
					k(me),
					k(ge),
					k(pe),
					k(xe),
					k(we),
					k(ye),
					k(Se),
					k(Te),
					k(Re),
					k(De),
					k(je),
					k(Ne),
					k(We),
					k(Ue),
					k(Oe),
					k(Je),
					k(Fe),
					k(_e);
			}
		}
	);
}
export default class extends e {
	constructor(e) {
		super(), t(this, e, null, ce, r, {});
	}
}
