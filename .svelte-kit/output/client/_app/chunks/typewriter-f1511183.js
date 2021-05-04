import { e as t } from './writeEffect-4b552387.js';
import { t as e } from './onAnimationEnd-6b7b8f84.js';
import './typingInterval-31d5912d.js';
const o = async ({ elements: o }, n) => {
	if (n.cascade) o.forEach((t) => (t.currentNode.textContent = ''));
	else {
		const { getLongestTextElement: t } = await import('./index-8cf516d1.js'),
			a = t(o);
		e(a, () => n.dispatch('done'));
	}
	for (const e of o) n.cascade ? await t(e, n) : t(e, n);
	n.cascade && n.dispatch('done');
};
export { o as mode };
