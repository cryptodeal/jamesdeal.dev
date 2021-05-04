import { s as e } from './typingInterval-31d5912d.js';
import { o as n } from './isInRange-ff48bfb6.js';
let t = [];
const r = (e) => t.find((n) => n.currentNode === e),
	s = (e) => {
		const t = ((e) => {
				const n = /(<([^>]+)>)/g,
					t = [];
				let r;
				for (; null !== (r = n.exec(e.innerHTML)); ) {
					const e = r.index,
						s = n.lastIndex;
					t.push([e, s - 1]);
				}
				return t;
			})(e),
			s = e.innerHTML
				.split('')
				.map((s, o) => {
					const { matchingLetters: a } = r(e),
						i = a.includes(o) || s.match(/\s+/g) || ((m = o), t.some(([e, t]) => n(m, [e, t]))),
						c = String.fromCharCode(65 + Math.round(50 * Math.random()));
					var m;
					return i ? s : c;
				})
				.join('');
		e.innerHTML = s;
	},
	o = (e, n) => {
		const t = e.innerHTML;
		for (let s = 0; s < n.length; s++) {
			const o = n[s],
				{ matchingLetters: a } = r(e);
			!a.includes(s) && o === t[s] && a.push(s);
		}
	},
	a = async ({ elements: n }, r) => {
		(t = [...n.map(({ currentNode: e }) => ({ currentNode: e, matchingLetters: [] }))]),
			await new Promise((t) => {
				n.forEach(async ({ currentNode: n, text: a }) => {
					const i = 'number' == typeof r.scramble ? r.scramble : 3e3,
						c = new Date().getTime();
					for (;;) {
						s(n), o(n, a), await e(r.interval);
						const m = n.innerHTML != a,
							d = new Date().getTime() - c < i;
						if (!m || !d) {
							t();
							break;
						}
					}
					n.innerHTML = a;
				});
			}),
			r.dispatch('done');
	};
export { a as mode };
