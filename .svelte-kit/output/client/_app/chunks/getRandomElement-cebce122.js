import { s as e, o as n } from './typingInterval-31d5912d.js';
const t = async (n, t) => {
	t.dispatch('done'), await e('number' == typeof t.loop ? t.loop : 1500);
	const r = n.innerHTML.replaceAll('&amp;', '&');
	for (let o = r.length - 1; o >= 0; o--)
		'>' === r[o] && (o = r.lastIndexOf('<', o)), (n.innerHTML = r.slice(0, o)), await e(t.interval);
};
let r = [];
const o = (e) => {
	for (;;) {
		const t = n(0, e.length),
			o = 'number' == typeof r && t !== r;
		if ((Array.isArray(r) && !r.includes(t)) || o) return o && (r = []), r.push(t), e[t];
		r.length === e.length && (r = r.pop());
	}
};
export { o as e, t as n };
