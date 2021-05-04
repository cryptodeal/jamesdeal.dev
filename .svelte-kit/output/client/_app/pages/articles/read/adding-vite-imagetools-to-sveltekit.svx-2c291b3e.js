import {
	S as a,
	i as s,
	s as n,
	e as t,
	k as e,
	t as o,
	j as p,
	K as c,
	c as l,
	d as i,
	n as r,
	a as u,
	g as k,
	m as g,
	b as m,
	F as f,
	f as d,
	o as h,
	M as v,
	v as y,
	r as E,
	w
} from '../../../chunks/vendor-112f5557.js';
import { L as b, a as x, b as j, N as A } from '../../../chunks/test-7f96a728.js';
var $ = 300,
	I = 225,
	S = '/_app/assets/test-fa3a564e.jpeg';
function K(a) {
	let s,
		n,
		$,
		I,
		K,
		q,
		H,
		L,
		M,
		P,
		R,
		z,
		C,
		D,
		F,
		N,
		B,
		V,
		Y,
		J,
		O,
		W,
		_,
		G,
		Q,
		U,
		X,
		Z,
		aa,
		sa,
		na,
		ta,
		ea,
		oa,
		pa,
		ca,
		la,
		ia,
		ra,
		ua,
		ka,
		ga,
		ma,
		fa,
		da,
		ha,
		va,
		ya;
	return (
		(R = new b({
			props: {
				src: S,
				ratio: a[0],
				srcsetWebP: x,
				srcsetAvif: j,
				sizes: T,
				placeholder: A,
				alt: 'test'
			}
		})),
		{
			c() {
				(s = t('meta')),
					(n = t('meta')),
					($ = t('meta')),
					(I = t('meta')),
					(K = e()),
					(q = t('h1')),
					(H = o('Integrating vite-imagetools and SvelteKit')),
					(L = e()),
					(M = t('div')),
					(P = t('div')),
					p(R.$$.fragment),
					(z = e()),
					(C = t('h2')),
					(D = t('a')),
					(F = o('Installing vite-imagetools')),
					(N = e()),
					(B = t('p')),
					(V = o(
						'Install vite-imagetools@next as a devDependency in your SvelteKit application (use the package manager of your choice, npm is used for the sake of examples)'
					)),
					(Y = e()),
					(J = t('pre')),
					(O = e()),
					(W = t('h2')),
					(_ = t('a')),
					(G = o('Configure Your App’s svelte.config.cjs')),
					(Q = e()),
					(U = t('p')),
					(X = o('After installing ')),
					(Z = t('a')),
					(aa = o('vite-imagetools')),
					(sa = o(', edit your svelte.config.cjs to include the following:')),
					(na = e()),
					(ta = t('pre')),
					(ea = e()),
					(oa = t('p')),
					(pa = o(
						'N.B. the above creates the $static alias for the src/static folder; you can place static assets in this folder and import them using the $static alias'
					)),
					(ca = e()),
					(la = t('h2')),
					(ia = t('a')),
					(ra = o('Example 1: Import .png and Convert to .webp')),
					(ua = e()),
					(ka = t('pre')),
					(ga = e()),
					(ma = t('h2')),
					(fa = t('a')),
					(da = o(
						'Example 2: Import .png, Transforming to 3 Sizes, Formatted and Rendered as srcset'
					)),
					(ha = e()),
					(va = t('pre')),
					this.h();
			},
			l(a) {
				const t = c('[data-svelte="svelte-1eegvgc"]', document.head);
				(s = l(t, 'META', { name: !0, content: !0 })),
					(n = l(t, 'META', { name: !0, content: !0 })),
					($ = l(t, 'META', { property: !0, content: !0 })),
					(I = l(t, 'META', { property: !0, content: !0 })),
					t.forEach(i),
					(K = r(a)),
					(q = l(a, 'H1', { itemprop: !0 }));
				var e = u(q);
				(H = k(e, 'Integrating vite-imagetools and SvelteKit')),
					e.forEach(i),
					(L = r(a)),
					(M = l(a, 'DIV', { class: !0 }));
				var o = u(M);
				P = l(o, 'DIV', { class: !0 });
				var p = u(P);
				g(R.$$.fragment, p), p.forEach(i), o.forEach(i), (z = r(a)), (C = l(a, 'H2', { id: !0 }));
				var m = u(C);
				D = l(m, 'A', { href: !0 });
				var f = u(D);
				(F = k(f, 'Installing vite-imagetools')),
					f.forEach(i),
					m.forEach(i),
					(N = r(a)),
					(B = l(a, 'P', {}));
				var d = u(B);
				(V = k(
					d,
					'Install vite-imagetools@next as a devDependency in your SvelteKit application (use the package manager of your choice, npm is used for the sake of examples)'
				)),
					d.forEach(i),
					(Y = r(a)),
					(J = l(a, 'PRE', { class: !0 })),
					u(J).forEach(i),
					(O = r(a)),
					(W = l(a, 'H2', { id: !0 }));
				var h = u(W);
				_ = l(h, 'A', { href: !0 });
				var v = u(_);
				(G = k(v, 'Configure Your App’s svelte.config.cjs')),
					v.forEach(i),
					h.forEach(i),
					(Q = r(a)),
					(U = l(a, 'P', {}));
				var y = u(U);
				(X = k(y, 'After installing ')), (Z = l(y, 'A', { href: !0, rel: !0 }));
				var E = u(Z);
				(aa = k(E, 'vite-imagetools')),
					E.forEach(i),
					(sa = k(y, ', edit your svelte.config.cjs to include the following:')),
					y.forEach(i),
					(na = r(a)),
					(ta = l(a, 'PRE', { class: !0 })),
					u(ta).forEach(i),
					(ea = r(a)),
					(oa = l(a, 'P', {}));
				var w = u(oa);
				(pa = k(
					w,
					'N.B. the above creates the $static alias for the src/static folder; you can place static assets in this folder and import them using the $static alias'
				)),
					w.forEach(i),
					(ca = r(a)),
					(la = l(a, 'H2', { id: !0 }));
				var b = u(la);
				ia = l(b, 'A', { href: !0 });
				var x = u(ia);
				(ra = k(x, 'Example 1: Import .png and Convert to .webp')),
					x.forEach(i),
					b.forEach(i),
					(ua = r(a)),
					(ka = l(a, 'PRE', { class: !0 })),
					u(ka).forEach(i),
					(ga = r(a)),
					(ma = l(a, 'H2', { id: !0 }));
				var j = u(ma);
				fa = l(j, 'A', { href: !0 });
				var A = u(fa);
				(da = k(
					A,
					'Example 2: Import .png, Transforming to 3 Sizes, Formatted and Rendered as srcset'
				)),
					A.forEach(i),
					j.forEach(i),
					(ha = r(a)),
					(va = l(a, 'PRE', { class: !0 })),
					u(va).forEach(i),
					this.h();
			},
			h() {
				(document.title = 'Integrating vite-imagetools and SvelteKit'),
					m(s, 'name', 'description'),
					m(
						s,
						'content',
						'Article detailing how to successfully integrate vite-imagetools with SvelteKit.'
					),
					m(n, 'name', 'keywords'),
					m(n, 'content', 'vite, sveltekit, svelte, sharp, image-transformations, vite-imagetools'),
					m($, 'property', 'og:title'),
					m($, 'content', 'SvelteKit with vite-imagetools'),
					m(I, 'property', 'og:description'),
					m(I, 'content', 'Successfully integrate vite-imagetools library with SvelteKit'),
					m(q, 'itemprop', 'name'),
					m(P, 'class', 'w-1/2 inline-block'),
					m(M, 'class', 'flex flex-row justify-center'),
					m(D, 'href', '#installing-vite-imagetools'),
					m(C, 'id', 'installing-vite-imagetools'),
					m(J, 'class', 'language-bash'),
					m(_, 'href', '#configure-your-apps-svelteconfigcjs'),
					m(W, 'id', 'configure-your-apps-svelteconfigcjs'),
					m(Z, 'href', 'https://github.com/JonasKruckenberg/vite-imagetools'),
					m(Z, 'rel', 'nofollow'),
					m(ta, 'class', 'language-javascript'),
					m(ia, 'href', '#example-1-import-png-and-convert-to-webp'),
					m(la, 'id', 'example-1-import-png-and-convert-to-webp'),
					m(ka, 'class', 'language-html'),
					m(
						fa,
						'href',
						'#example-2-import-png-transforming-to-3-sizes-formatted-and-rendered-as-srcset'
					),
					m(
						ma,
						'id',
						'example-2-import-png-transforming-to-3-sizes-formatted-and-rendered-as-srcset'
					),
					m(va, 'class', 'language-html');
			},
			m(a, t) {
				f(document.head, s),
					f(document.head, n),
					f(document.head, $),
					f(document.head, I),
					d(a, K, t),
					d(a, q, t),
					f(q, H),
					d(a, L, t),
					d(a, M, t),
					f(M, P),
					h(R, P, null),
					d(a, z, t),
					d(a, C, t),
					f(C, D),
					f(D, F),
					d(a, N, t),
					d(a, B, t),
					f(B, V),
					d(a, Y, t),
					d(a, J, t),
					(J.innerHTML =
						'<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev vite-imagetools@next</code>'),
					d(a, O, t),
					d(a, W, t),
					f(W, _),
					f(_, G),
					d(a, Q, t),
					d(a, U, t),
					f(U, X),
					f(U, Z),
					f(Z, aa),
					f(U, sa),
					d(a, na, t),
					d(a, ta, t),
					(ta.innerHTML =
						'<code class="language-javascript"><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@sveltejs/adapter-node\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./package.json\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">&#123;</span>imagetools<span class="token punctuation">&#125;</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'vite-imagetools\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">/** @type &#123;import(\'@sveltejs/kit\').Config&#125; */</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>\n  kit<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n    files<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      assets<span class="token operator">:</span> <span class="token string">\'src/static\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n    vite<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n      resolve<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        alias<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n          $<span class="token keyword">static</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'src/static\'</span><span class="token punctuation">)</span>\n        <span class="token punctuation">&#125;</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      ssr<span class="token operator">:</span> <span class="token punctuation">&#123;</span>\n        noExternal<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>pkg<span class="token punctuation">.</span>dependencies <span class="token operator">||</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span>\n      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n      plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">imagetools</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span>force<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n    <span class="token punctuation">&#125;</span>\n  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>\n<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>'),
					d(a, ea, t),
					d(a, oa, t),
					f(oa, pa),
					d(a, ca, t),
					d(a, la, t),
					f(la, ia),
					f(ia, ra),
					d(a, ua, t),
					d(a, ka, t),
					(ka.innerHTML =
						'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Logo <span class="token keyword">from</span> <span class="token string">\'$static/title.png?webp&amp;meta\'</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;Logo.src&#125;</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your alt attribute here<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>'),
					d(a, ga, t),
					d(a, ma, t),
					f(ma, fa),
					f(fa, da),
					d(a, ha, t),
					d(a, va, t),
					(va.innerHTML =
						'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Logo <span class="token keyword">from</span> <span class="token string">\'$static/title.png?w=300;400;500&amp;format=webp&amp;srcset\'</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>&#123;Logo&#125;</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image/webp<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>your alt attribute here<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></code>'),
					(ya = !0);
			},
			p: v,
			i(a) {
				ya || (y(R.$$.fragment, a), (ya = !0));
			},
			o(a) {
				E(R.$$.fragment, a), (ya = !1);
			},
			d(a) {
				i(s),
					i(n),
					i($),
					i(I),
					a && i(K),
					a && i(q),
					a && i(L),
					a && i(M),
					w(R),
					a && i(z),
					a && i(C),
					a && i(N),
					a && i(B),
					a && i(Y),
					a && i(J),
					a && i(O),
					a && i(W),
					a && i(Q),
					a && i(U),
					a && i(na),
					a && i(ta),
					a && i(ea),
					a && i(oa),
					a && i(ca),
					a && i(la),
					a && i(ua),
					a && i(ka),
					a && i(ga),
					a && i(ma),
					a && i(ha),
					a && i(va);
			}
		}
	);
}
let T = '(min-width: 1500px) 2000px, 100vw';
function q(a) {
	return [(1 / ($ / I)) * 100 + '%'];
}
export default class extends a {
	constructor(a) {
		super(), s(this, a, q, K, n, {});
	}
}
