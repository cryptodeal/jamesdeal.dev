import { e, n as t } from './getRandomElement-cebce122.js';
import { e as o } from './writeEffect-4b552387.js';
import './typingInterval-31d5912d.js';
const a = async (e, { currentNode: a, text: n }, r) => {
		await o({ currentNode: a, text: n }, r);
		const s = n.replaceAll('&', '&amp;');
		a.innerHTML === s && (await t(a, r));
	},
	n = async ({ node: t, elements: o }, n) => {
		for (;;)
			if (n.loop) for (const e of o) await a(0, e, n);
			else if (n.loopRandom) {
				const t = e(o);
				await a(0, t, n);
			}
	};
export { n as mode };
