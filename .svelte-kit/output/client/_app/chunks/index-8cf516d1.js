export {
	a3 as createElement,
	a4 as getElements,
	a5 as hasSingleTextNode
} from './vendor-112f5557.js';
export { o as rng, e as sleep, s as typingInterval } from './typingInterval-31d5912d.js';
export { e as getRandomElement, n as unwriteEffect } from './getRandomElement-cebce122.js';
export { o as isInRange } from './isInRange-ff48bfb6.js';
export { e as writeEffect } from './writeEffect-4b552387.js';
export { t as onAnimationEnd } from './onAnimationEnd-6b7b8f84.js';
const a = (e) => e.childNodes.forEach((e) => e.remove()),
	r = (e, t) => t.text.length - e.text.length,
	f = (e) => e.sort(r)[0].currentNode;
export { a as cleanChildNodes, f as getLongestTextElement };
