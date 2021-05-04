function t() {}
function e(t) {
	return t();
}
function i() {
	return Object.create(null);
}
function o(t) {
	t.forEach(e);
}
function s(t) {
	return 'function' == typeof t;
}
function n(t, e) {
	return t != t ? e == e : t !== e || (t && 'object' == typeof t) || 'function' == typeof t;
}
function a(t) {
	t.parentNode.removeChild(t);
}
function r(t, e, i) {
	null == i ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
let l;
function c(t) {
	l = t;
}
function d() {
	if (!l) throw new Error('Function called outside component initialization');
	return l;
}
const h = [],
	u = [],
	v = [],
	p = [],
	y = Promise.resolve();
let f = !1;
function m(t) {
	v.push(t);
}
let g = !1;
const b = new Set();
function w() {
	if (!g) {
		g = !0;
		do {
			for (let t = 0; t < h.length; t += 1) {
				const e = h[t];
				c(e), x(e.$$);
			}
			for (c(null), h.length = 0; u.length; ) u.pop()();
			for (let t = 0; t < v.length; t += 1) {
				const e = v[t];
				b.has(e) || (b.add(e), e());
			}
			v.length = 0;
		} while (h.length);
		for (; p.length; ) p.pop()();
		(f = !1), (g = !1), b.clear();
	}
}
function x(t) {
	if (null !== t.fragment) {
		t.update(), o(t.before_update);
		const e = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(m);
	}
}
const k = new Set();
function P(n, r, d, u, v, p, g = [-1]) {
	const b = l;
	c(n);
	const x = (n.$$ = {
		fragment: null,
		ctx: null,
		props: p,
		update: t,
		not_equal: v,
		bound: i(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(b ? b.$$.context : []),
		callbacks: i(),
		dirty: g,
		skip_bound: !1
	});
	let P = !1;
	if (
		((x.ctx = d
			? d(n, r.props || {}, (t, e, ...i) => {
					const o = i.length ? i[0] : e;
					return (
						x.ctx &&
							v(x.ctx[t], (x.ctx[t] = o)) &&
							(!x.skip_bound && x.bound[t] && x.bound[t](o),
							P &&
								(function (t, e) {
									-1 === t.$$.dirty[0] &&
										(h.push(t), f || ((f = !0), y.then(w)), t.$$.dirty.fill(0)),
										(t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
								})(n, t)),
						e
					);
			  })
			: []),
		x.update(),
		(P = !0),
		o(x.before_update),
		(x.fragment = !!u && u(x.ctx)),
		r.target)
	) {
		if (r.hydrate) {
			const t = ((M = r.target), Array.from(M.childNodes));
			x.fragment && x.fragment.l(t), t.forEach(a);
		} else x.fragment && x.fragment.c();
		r.intro && (R = n.$$.fragment) && R.i && (k.delete(R), R.i(undefined)),
			(function (t, i, n, a) {
				const { fragment: r, on_mount: l, on_destroy: c, after_update: d } = t.$$;
				r && r.m(i, n),
					a ||
						m(() => {
							const i = l.map(e).filter(s);
							c ? c.push(...i) : o(i), (t.$$.on_mount = []);
						}),
					d.forEach(m);
			})(n, r.target, r.anchor, r.customElement),
			w();
	}
	var M, R;
	c(b);
}
class M {
	getSidesCount() {
		return 4;
	}
	draw(t, e, i) {
		t.rect(-i, -i, 2 * i, 2 * i);
	}
}
var R, S, C, z;
((z = R || (R = {})).bottom = 'bottom'),
	(z.left = 'left'),
	(z.right = 'right'),
	(z.top = 'top'),
	(function (t) {
		(t.bottom = 'bottom'),
			(t.bottomLeft = 'bottom-left'),
			(t.bottomRight = 'bottom-right'),
			(t.left = 'left'),
			(t.none = 'none'),
			(t.right = 'right'),
			(t.top = 'top'),
			(t.topLeft = 'top-left'),
			(t.topRight = 'top-right');
	})(S || (S = {})),
	(function (t) {
		(t.clockwise = 'clockwise'), (t.counterClockwise = 'counter-clockwise'), (t.random = 'random');
	})(C || (C = {}));
class A {
	constructor(t, e) {
		let i, o;
		if (void 0 === e) {
			if ('number' == typeof t) throw new Error('tsParticles - Vector not initialized correctly');
			const e = t;
			[i, o] = [e.x, e.y];
		} else [i, o] = [t, e];
		(this.x = i), (this.y = o);
	}
	static clone(t) {
		return A.create(t.x, t.y);
	}
	static create(t, e) {
		return new A(t, e);
	}
	get angle() {
		return Math.atan2(this.y, this.x);
	}
	set angle(t) {
		this.updateFromAngle(t, this.length);
	}
	get length() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}
	set length(t) {
		this.updateFromAngle(this.angle, t);
	}
	add(t) {
		return A.create(this.x + t.x, this.y + t.y);
	}
	addTo(t) {
		(this.x += t.x), (this.y += t.y);
	}
	sub(t) {
		return A.create(this.x - t.x, this.y - t.y);
	}
	subFrom(t) {
		(this.x -= t.x), (this.y -= t.y);
	}
	mult(t) {
		return A.create(this.x * t, this.y * t);
	}
	multTo(t) {
		(this.x *= t), (this.y *= t);
	}
	div(t) {
		return A.create(this.x / t, this.y / t);
	}
	divTo(t) {
		(this.x /= t), (this.y /= t);
	}
	distanceTo(t) {
		return this.sub(t).length;
	}
	getLengthSq() {
		return Math.pow(this.x, 2) + Math.pow(this.y, 2);
	}
	distanceToSq(t) {
		return this.sub(t).getLengthSq();
	}
	manhattanDistanceTo(t) {
		return Math.abs(t.x - this.x) + Math.abs(t.y - this.y);
	}
	copy() {
		return A.clone(this);
	}
	setTo(t) {
		(this.x = t.x), (this.y = t.y);
	}
	rotate(t) {
		return A.create(
			this.x * Math.cos(t) - this.y * Math.sin(t),
			this.x * Math.sin(t) + this.y * Math.cos(t)
		);
	}
	updateFromAngle(t, e) {
		(this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
	}
}
A.origin = A.create(0, 0);
class T {
	static clamp(t, e, i) {
		return Math.min(Math.max(t, e), i);
	}
	static mix(t, e, i, o) {
		return Math.floor((t * i + e * o) / (i + o));
	}
	static randomInRange(t) {
		const e = T.getRangeMax(t);
		let i = T.getRangeMin(t);
		return e === i && (i = 0), Math.random() * (e - i) + i;
	}
	static getRangeValue(t) {
		return 'number' == typeof t ? t : T.randomInRange(t);
	}
	static getRangeMin(t) {
		return 'number' == typeof t ? t : t.min;
	}
	static getRangeMax(t) {
		return 'number' == typeof t ? t : t.max;
	}
	static setRangeValue(t, e) {
		if (t === e || (void 0 === e && 'number' == typeof t)) return t;
		const i = T.getRangeMin(t),
			o = T.getRangeMax(t);
		return void 0 !== e ? { min: Math.min(i, e), max: Math.max(o, e) } : T.setRangeValue(i, o);
	}
	static getValue(t) {
		const e = t.random,
			{ enable: i, minimumValue: o } = 'boolean' == typeof e ? { enable: e, minimumValue: 0 } : e;
		return i ? T.getRangeValue(T.setRangeValue(t.value, o)) : T.getRangeValue(t.value);
	}
	static getDistances(t, e) {
		const i = t.x - e.x,
			o = t.y - e.y;
		return { dx: i, dy: o, distance: Math.sqrt(i * i + o * o) };
	}
	static getDistance(t, e) {
		return T.getDistances(t, e).distance;
	}
	static getParticleBaseVelocity(t) {
		const e = A.origin;
		switch (((e.length = 1), t)) {
			case S.top:
				e.angle = -Math.PI / 2;
				break;
			case S.topRight:
				e.angle = -Math.PI / 4;
				break;
			case S.right:
				e.angle = 0;
				break;
			case S.bottomRight:
				e.angle = Math.PI / 4;
				break;
			case S.bottom:
				e.angle = Math.PI / 2;
				break;
			case S.bottomLeft:
				e.angle = (3 * Math.PI) / 4;
				break;
			case S.left:
				e.angle = Math.PI;
				break;
			case S.topLeft:
				e.angle = (-3 * Math.PI) / 4;
				break;
			case S.none:
			default:
				e.angle = Math.random() * Math.PI * 2;
		}
		return e;
	}
	static rotateVelocity(t, e) {
		return {
			horizontal: t.horizontal * Math.cos(e) - t.vertical * Math.sin(e),
			vertical: t.horizontal * Math.sin(e) + t.vertical * Math.cos(e)
		};
	}
	static collisionVelocity(t, e, i, o) {
		return A.create((t.x * (i - o)) / (i + o) + (2 * e.x * o) / (i + o), t.y);
	}
}
var E,
	D,
	O,
	I,
	F,
	L,
	V,
	H,
	_,
	q,
	B,
	$,
	W,
	G,
	N,
	U = function (t, e, i, o) {
		return new (i || (i = Promise))(function (s, n) {
			function a(t) {
				try {
					l(o.next(t));
				} catch (e) {
					n(e);
				}
			}
			function r(t) {
				try {
					l(o.throw(t));
				} catch (e) {
					n(e);
				}
			}
			function l(t) {
				var e;
				t.done
					? s(t.value)
					: ((e = t.value),
					  e instanceof i
							? e
							: new i(function (t) {
									t(e);
							  })).then(a, r);
			}
			l((o = o.apply(t, e || [])).next());
		});
	};
function j(t, e, i, o, s, n) {
	const a = { bounced: !1 };
	return (
		e.min >= o.min &&
			e.min <= o.max &&
			e.max >= o.min &&
			e.max <= o.max &&
			((t.max >= i.min && t.max <= (i.max + i.min) / 2 && s > 0) ||
				(t.min <= i.max && t.min > (i.max + i.min) / 2 && s < 0)) &&
			((a.velocity = s * -n), (a.bounced = !0)),
		a
	);
}
function Y(t, e) {
	if (e instanceof Array) {
		for (const i of e) if (t.matches(i)) return !0;
		return !1;
	}
	return t.matches(e);
}
class X {
	static isSsr() {
		return 'undefined' == typeof window || !window;
	}
	static get animate() {
		return X.isSsr()
			? (t) => setTimeout(t)
			: (t) =>
					(
						window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame ||
						window.setTimeout
					)(t);
	}
	static get cancelAnimation() {
		return X.isSsr()
			? (t) => clearTimeout(t)
			: (t) =>
					(
						window.cancelAnimationFrame ||
						window.webkitCancelRequestAnimationFrame ||
						window.mozCancelRequestAnimationFrame ||
						window.oCancelRequestAnimationFrame ||
						window.msCancelRequestAnimationFrame ||
						window.clearTimeout
					)(t);
	}
	static isInArray(t, e) {
		return t === e || (e instanceof Array && e.indexOf(t) > -1);
	}
	static loadFont(t) {
		return U(this, void 0, void 0, function* () {
			try {
				yield document.fonts.load(`${t.weight} 36px '${t.font}'`);
			} catch (e) {}
		});
	}
	static arrayRandomIndex(t) {
		return Math.floor(Math.random() * t.length);
	}
	static itemFromArray(t, e, i = !0) {
		return t[void 0 !== e && i ? e % t.length : X.arrayRandomIndex(t)];
	}
	static isPointInside(t, e, i, o) {
		return X.areBoundsInside(X.calculateBounds(t, null != i ? i : 0), e, o);
	}
	static areBoundsInside(t, e, i) {
		let o = !0;
		return (
			(i && i !== R.bottom) || (o = t.top < e.height),
			!o || (i && i !== R.left) || (o = t.right > 0),
			!o || (i && i !== R.right) || (o = t.left < e.width),
			!o || (i && i !== R.top) || (o = t.bottom > 0),
			o
		);
	}
	static calculateBounds(t, e) {
		return { bottom: t.y + e, left: t.x - e, right: t.x + e, top: t.y - e };
	}
	static loadImage(t) {
		return new Promise((e, i) => {
			if (!t) return void i('Error tsParticles - No image.src');
			const o = { source: t, type: t.substr(t.length - 3) },
				s = new Image();
			s.addEventListener('load', () => {
				(o.element = s), e(o);
			}),
				s.addEventListener('error', () => {
					i(`Error tsParticles - loading image: ${t}`);
				}),
				(s.src = t);
		});
	}
	static downloadSvgImage(t) {
		return U(this, void 0, void 0, function* () {
			if (!t) throw new Error('Error tsParticles - No image.src');
			const e = { source: t, type: t.substr(t.length - 3) };
			if ('svg' !== e.type) return X.loadImage(t);
			const i = yield fetch(e.source);
			if (!i.ok) throw new Error('Error tsParticles - Image not found');
			return (e.svgData = yield i.text()), e;
		});
	}
	static deepExtend(t, ...e) {
		for (const i of e) {
			if (null == i) continue;
			if ('object' != typeof i) {
				t = i;
				continue;
			}
			const e = Array.isArray(i);
			!e || ('object' == typeof t && t && Array.isArray(t))
				? e || ('object' == typeof t && t && !Array.isArray(t)) || (t = {})
				: (t = []);
			for (const o in i) {
				if ('__proto__' === o) continue;
				const e = i[o],
					s = 'object' == typeof e,
					n = t;
				n[o] = s && Array.isArray(e) ? e.map((t) => X.deepExtend(n[o], t)) : X.deepExtend(n[o], e);
			}
		}
		return t;
	}
	static isDivModeEnabled(t, e) {
		return e instanceof Array
			? !!e.find((e) => e.enable && X.isInArray(t, e.mode))
			: X.isInArray(t, e.mode);
	}
	static divModeExecute(t, e, i) {
		if (e instanceof Array)
			for (const o of e) {
				const e = o.mode;
				o.enable && X.isInArray(t, e) && X.singleDivModeExecute(o, i);
			}
		else {
			const o = e.mode;
			e.enable && X.isInArray(t, o) && X.singleDivModeExecute(e, i);
		}
	}
	static singleDivModeExecute(t, e) {
		const i = t.selectors;
		if (i instanceof Array) for (const o of i) e(o, t);
		else e(i, t);
	}
	static divMode(t, e) {
		if (e && t)
			return t instanceof Array ? t.find((t) => Y(e, t.selectors)) : Y(e, t.selectors) ? t : void 0;
	}
	static circleBounceDataFromParticle(t) {
		return {
			position: t.getPosition(),
			radius: t.getRadius(),
			mass: t.getMass(),
			velocity: t.velocity,
			factor: {
				horizontal: T.getValue(t.options.bounce.horizontal),
				vertical: T.getValue(t.options.bounce.vertical)
			}
		};
	}
	static circleBounce(t, e) {
		const i = t.velocity.x,
			o = t.velocity.y,
			s = t.position,
			n = e.position;
		if (i * (n.x - s.x) + o * (n.y - s.y) >= 0) {
			const i = -Math.atan2(n.y - s.y, n.x - s.x),
				o = t.mass,
				a = e.mass,
				r = t.velocity.rotate(i),
				l = e.velocity.rotate(i),
				c = T.collisionVelocity(r, l, o, a),
				d = T.collisionVelocity(l, r, o, a),
				h = c.rotate(-i),
				u = d.rotate(-i);
			(t.velocity.x = h.x * t.factor.horizontal),
				(t.velocity.y = h.y * t.factor.vertical),
				(e.velocity.x = u.x * e.factor.horizontal),
				(e.velocity.y = u.y * e.factor.vertical);
		}
	}
	static rectBounce(t, e) {
		const i = t.getPosition(),
			o = t.getRadius(),
			s = X.calculateBounds(i, o),
			n = j(
				{ min: s.left, max: s.right },
				{ min: s.top, max: s.bottom },
				{ min: e.left, max: e.right },
				{ min: e.top, max: e.bottom },
				t.velocity.x,
				T.getValue(t.options.bounce.horizontal)
			);
		n.bounced && void 0 !== n.velocity && (t.velocity.x = n.velocity);
		const a = j(
			{ min: s.top, max: s.bottom },
			{ min: s.left, max: s.right },
			{ min: e.top, max: e.bottom },
			{ min: e.left, max: e.right },
			t.velocity.y,
			T.getValue(t.options.bounce.vertical)
		);
		a.bounced && void 0 !== a.velocity && (t.velocity.y = a.velocity);
	}
}
class Q {}
function J(t, e, i) {
	let o = i;
	return (
		o < 0 && (o += 1),
		o > 1 && (o -= 1),
		o < 1 / 6 ? t + 6 * (e - t) * o : o < 0.5 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t
	);
}
function Z(t) {
	if (t.startsWith('rgb')) {
		const e = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return e
			? {
					a: e.length > 4 ? parseFloat(e[5]) : 1,
					b: parseInt(e[3], 10),
					g: parseInt(e[2], 10),
					r: parseInt(e[1], 10)
			  }
			: void 0;
	}
	if (t.startsWith('hsl')) {
		const e = /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return e
			? K.hslaToRgba({
					a: e.length > 4 ? parseFloat(e[5]) : 1,
					h: parseInt(e[1], 10),
					l: parseInt(e[3], 10),
					s: parseInt(e[2], 10)
			  })
			: void 0;
	}
	if (t.startsWith('hsv')) {
		const e = /hsva?\(\s*(\d+)°\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.]+)\s*)?\)/i.exec(t);
		return e
			? K.hsvaToRgba({
					a: e.length > 4 ? parseFloat(e[5]) : 1,
					h: parseInt(e[1], 10),
					s: parseInt(e[2], 10),
					v: parseInt(e[3], 10)
			  })
			: void 0;
	}
	{
		const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
			i = t.replace(e, (t, e, i, o, s) => e + e + i + i + o + o + (void 0 !== s ? s + s : '')),
			o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
		return o
			? {
					a: void 0 !== o[4] ? parseInt(o[4], 16) / 255 : 1,
					b: parseInt(o[3], 16),
					g: parseInt(o[2], 16),
					r: parseInt(o[1], 16)
			  }
			: void 0;
	}
}
(Q.canvasClass = 'tsparticles-canvas-el'),
	(Q.randomColorValue = 'random'),
	(Q.midColorValue = 'mid'),
	(Q.touchEndEvent = 'touchend'),
	(Q.mouseDownEvent = 'mousedown'),
	(Q.mouseUpEvent = 'mouseup'),
	(Q.mouseMoveEvent = 'mousemove'),
	(Q.touchStartEvent = 'touchstart'),
	(Q.touchMoveEvent = 'touchmove'),
	(Q.mouseLeaveEvent = 'mouseleave'),
	(Q.mouseOutEvent = 'mouseout'),
	(Q.touchCancelEvent = 'touchcancel'),
	(Q.resizeEvent = 'resize'),
	(Q.visibilityChangeEvent = 'visibilitychange'),
	(Q.noPolygonDataLoaded = 'No polygon data loaded.'),
	(Q.noPolygonFound = 'No polygon found, you need to specify SVG url in config.');
class K {
	static colorToRgb(t, e, i = !0) {
		var o, s, n;
		if (void 0 === t) return;
		const a = 'string' == typeof t ? { value: t } : t;
		let r;
		if ('string' == typeof a.value)
			r = a.value === Q.randomColorValue ? K.getRandomRgbColor() : K.stringToRgb(a.value);
		else if (a.value instanceof Array) {
			const t = X.itemFromArray(a.value, e, i);
			r = K.colorToRgb({ value: t });
		} else {
			const t = a.value,
				e = null !== (o = t.rgb) && void 0 !== o ? o : a.value;
			if (void 0 !== e.r) r = e;
			else {
				const e = null !== (s = t.hsl) && void 0 !== s ? s : a.value;
				if (void 0 !== e.h && void 0 !== e.l) r = K.hslToRgb(e);
				else {
					const e = null !== (n = t.hsv) && void 0 !== n ? n : a.value;
					void 0 !== e.h && void 0 !== e.v && (r = K.hsvToRgb(e));
				}
			}
		}
		return r;
	}
	static colorToHsl(t, e, i = !0) {
		const o = K.colorToRgb(t, e, i);
		return void 0 !== o ? K.rgbToHsl(o) : void 0;
	}
	static rgbToHsl(t) {
		const e = t.r / 255,
			i = t.g / 255,
			o = t.b / 255,
			s = Math.max(e, i, o),
			n = Math.min(e, i, o),
			a = { h: 0, l: (s + n) / 2, s: 0 };
		return (
			s != n &&
				((a.s = a.l < 0.5 ? (s - n) / (s + n) : (s - n) / (2 - s - n)),
				(a.h =
					e === s
						? (i - o) / (s - n)
						: (a.h = i === s ? 2 + (o - e) / (s - n) : 4 + (e - i) / (s - n)))),
			(a.l *= 100),
			(a.s *= 100),
			(a.h *= 60),
			a.h < 0 && (a.h += 360),
			a
		);
	}
	static stringToAlpha(t) {
		var e;
		return null === (e = Z(t)) || void 0 === e ? void 0 : e.a;
	}
	static stringToRgb(t) {
		return Z(t);
	}
	static hslToRgb(t) {
		const e = { b: 0, g: 0, r: 0 },
			i = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
		if (0 === i.s) (e.b = i.l), (e.g = i.l), (e.r = i.l);
		else {
			const t = i.l < 0.5 ? i.l * (1 + i.s) : i.l + i.s - i.l * i.s,
				o = 2 * i.l - t;
			(e.r = J(o, t, i.h + 1 / 3)), (e.g = J(o, t, i.h)), (e.b = J(o, t, i.h - 1 / 3));
		}
		return (
			(e.r = Math.floor(255 * e.r)), (e.g = Math.floor(255 * e.g)), (e.b = Math.floor(255 * e.b)), e
		);
	}
	static hslaToRgba(t) {
		const e = K.hslToRgb(t);
		return { a: t.a, b: e.b, g: e.g, r: e.r };
	}
	static hslToHsv(t) {
		const e = t.l / 100,
			i = e + (t.s / 100) * Math.min(e, 1 - e),
			o = i ? 2 * (1 - e / i) : 0;
		return { h: t.h, s: 100 * o, v: 100 * i };
	}
	static hslaToHsva(t) {
		const e = K.hslToHsv(t);
		return { a: t.a, h: e.h, s: e.s, v: e.v };
	}
	static hsvToHsl(t) {
		const e = t.v / 100,
			i = e * (1 - t.s / 100 / 2),
			o = 0 === i || 1 === i ? 0 : (e - i) / Math.min(i, 1 - i);
		return { h: t.h, l: 100 * i, s: 100 * o };
	}
	static hsvaToHsla(t) {
		const e = K.hsvToHsl(t);
		return { a: t.a, h: e.h, l: e.l, s: e.s };
	}
	static hsvToRgb(t) {
		const e = { b: 0, g: 0, r: 0 },
			i = t.h / 60,
			o = t.s / 100,
			s = t.v / 100,
			n = s * o,
			a = n * (1 - Math.abs((i % 2) - 1));
		let r;
		if (
			(i >= 0 && i <= 1
				? (r = { r: n, g: a, b: 0 })
				: i > 1 && i <= 2
				? (r = { r: a, g: n, b: 0 })
				: i > 2 && i <= 3
				? (r = { r: 0, g: n, b: a })
				: i > 3 && i <= 4
				? (r = { r: 0, g: a, b: n })
				: i > 4 && i <= 5
				? (r = { r: a, g: 0, b: n })
				: i > 5 && i <= 6 && (r = { r: n, g: 0, b: a }),
			r)
		) {
			const t = s - n;
			(e.r = Math.floor(255 * (r.r + t))),
				(e.g = Math.floor(255 * (r.g + t))),
				(e.b = Math.floor(255 * (r.b + t)));
		}
		return e;
	}
	static hsvaToRgba(t) {
		const e = K.hsvToRgb(t);
		return { a: t.a, b: e.b, g: e.g, r: e.r };
	}
	static rgbToHsv(t) {
		const e = { r: t.r / 255, g: t.g / 255, b: t.b / 255 },
			i = Math.max(e.r, e.g, e.b),
			o = i - Math.min(e.r, e.g, e.b);
		let s = 0;
		return (
			i === e.r
				? (s = ((e.g - e.b) / o) * 60)
				: i === e.g
				? (s = 60 * (2 + (e.b - e.r) / o))
				: i === e.b && (s = 60 * (4 + (e.r - e.g) / o)),
			{ h: s, s: 100 * (i ? o / i : 0), v: 100 * i }
		);
	}
	static rgbaToHsva(t) {
		const e = K.rgbToHsv(t);
		return { a: t.a, h: e.h, s: e.s, v: e.v };
	}
	static getRandomRgbColor(t) {
		const e = null != t ? t : 0;
		return {
			b: Math.floor(T.randomInRange(T.setRangeValue(e, 256))),
			g: Math.floor(T.randomInRange(T.setRangeValue(e, 256))),
			r: Math.floor(T.randomInRange(T.setRangeValue(e, 256)))
		};
	}
	static getStyleFromRgb(t, e) {
		return `rgba(${t.r}, ${t.g}, ${t.b}, ${null != e ? e : 1})`;
	}
	static getStyleFromHsl(t, e) {
		return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null != e ? e : 1})`;
	}
	static getStyleFromHsv(t, e) {
		return K.getStyleFromHsl(K.hsvToHsl(t), e);
	}
	static mix(t, e, i, o) {
		let s = t,
			n = e;
		return (
			void 0 === s.r && (s = K.hslToRgb(t)),
			void 0 === n.r && (n = K.hslToRgb(e)),
			{ b: T.mix(s.b, n.b, i, o), g: T.mix(s.g, n.g, i, o), r: T.mix(s.r, n.r, i, o) }
		);
	}
	static replaceColorSvg(t, e, i) {
		return t.svgData ? t.svgData.replace(/#([0-9A-F]{3,6})/gi, () => K.getStyleFromHsl(e, i)) : '';
	}
	static getLinkColor(t, e, i) {
		var o, s;
		if (i === Q.randomColorValue) return K.getRandomRgbColor();
		if ('mid' !== i) return i;
		{
			const i = null !== (o = t.getFillColor()) && void 0 !== o ? o : t.getStrokeColor(),
				n =
					null !== (s = null == e ? void 0 : e.getFillColor()) && void 0 !== s
						? s
						: null == e
						? void 0
						: e.getStrokeColor();
			if (i && n && e) return K.mix(i, n, t.getRadius(), e.getRadius());
			{
				const t = null != i ? i : n;
				if (t) return K.hslToRgb(t);
			}
		}
	}
	static getLinkRandomColor(t, e, i) {
		const o = 'string' == typeof t ? t : t.value;
		return o === Q.randomColorValue
			? i
				? K.colorToRgb({ value: o })
				: e
				? Q.randomColorValue
				: Q.midColorValue
			: K.colorToRgb({ value: o });
	}
	static getHslFromAnimation(t) {
		return void 0 !== t ? { h: t.h.value, s: t.s.value, l: t.l.value } : void 0;
	}
}
function tt(t, e, i) {
	t.beginPath(), t.moveTo(e.x, e.y), t.lineTo(i.x, i.y), t.closePath();
}
class et {
	static paintBase(t, e, i) {
		t.save(),
			(t.fillStyle = null != i ? i : 'rgba(0,0,0,0)'),
			t.fillRect(0, 0, e.width, e.height),
			t.restore();
	}
	static clear(t, e) {
		t.clearRect(0, 0, e.width, e.height);
	}
	static drawLinkLine(t, e, i, o, s, n, a, r, l, c, d, h) {
		let u = !1;
		if (T.getDistance(i, o) <= s) tt(t, i, o), (u = !0);
		else if (a) {
			let e, a;
			const r = { x: o.x - n.width, y: o.y },
				l = T.getDistances(i, r);
			if (l.distance <= s) {
				const t = i.y - (l.dy / l.dx) * i.x;
				(e = { x: 0, y: t }), (a = { x: n.width, y: t });
			} else {
				const t = { x: o.x, y: o.y - n.height },
					r = T.getDistances(i, t);
				if (r.distance <= s) {
					const t = -(i.y - (r.dy / r.dx) * i.x) / (r.dy / r.dx);
					(e = { x: t, y: 0 }), (a = { x: t, y: n.height });
				} else {
					const t = { x: o.x - n.width, y: o.y - n.height },
						r = T.getDistances(i, t);
					if (r.distance <= s) {
						const t = i.y - (r.dy / r.dx) * i.x;
						(e = { x: -t / (r.dy / r.dx), y: t }), (a = { x: e.x + n.width, y: e.y + n.height });
					}
				}
			}
			e && a && (tt(t, i, e), tt(t, o, a), (u = !0));
		}
		if (u) {
			if (
				((t.lineWidth = e),
				r && (t.globalCompositeOperation = l),
				(t.strokeStyle = K.getStyleFromRgb(c, d)),
				h.enable)
			) {
				const e = K.colorToRgb(h.color);
				e && ((t.shadowBlur = h.blur), (t.shadowColor = K.getStyleFromRgb(e)));
			}
			t.stroke();
		}
	}
	static drawLinkTriangle(t, e, i, o, s, n, a, r) {
		var l, c, d, h;
		(c = e),
			(d = i),
			(h = o),
			(l = t).beginPath(),
			l.moveTo(c.x, c.y),
			l.lineTo(d.x, d.y),
			l.lineTo(h.x, h.y),
			l.closePath(),
			s && (t.globalCompositeOperation = n),
			(t.fillStyle = K.getStyleFromRgb(a, r)),
			t.fill();
	}
	static drawConnectLine(t, e, i, o, s) {
		t.save(), tt(t, o, s), (t.lineWidth = e), (t.strokeStyle = i), t.stroke(), t.restore();
	}
	static gradient(t, e, i, o) {
		const s = Math.floor(i.getRadius() / e.getRadius()),
			n = e.getFillColor(),
			a = i.getFillColor();
		if (!n || !a) return;
		const r = e.getPosition(),
			l = i.getPosition(),
			c = K.mix(n, a, e.getRadius(), i.getRadius()),
			d = t.createLinearGradient(r.x, r.y, l.x, l.y);
		return (
			d.addColorStop(0, K.getStyleFromHsl(n, o)),
			d.addColorStop(s > 1 ? 1 : s, K.getStyleFromRgb(c, o)),
			d.addColorStop(1, K.getStyleFromHsl(a, o)),
			d
		);
	}
	static drawGrabLine(t, e, i, o, s, n) {
		t.save(),
			tt(t, i, o),
			(t.strokeStyle = K.getStyleFromRgb(s, n)),
			(t.lineWidth = e),
			t.stroke(),
			t.restore();
	}
	static drawLight(t, e, i) {
		const o = t.actualOptions.interactivity.modes.light.area;
		e.beginPath(), e.arc(i.x, i.y, o.radius, 0, 2 * Math.PI);
		const s = e.createRadialGradient(i.x, i.y, 0, i.x, i.y, o.radius),
			n = o.gradient,
			a = { start: K.colorToRgb(n.start), stop: K.colorToRgb(n.stop) };
		a.start &&
			a.stop &&
			(s.addColorStop(0, K.getStyleFromRgb(a.start)),
			s.addColorStop(1, K.getStyleFromRgb(a.stop)),
			(e.fillStyle = s),
			e.fill());
	}
	static drawParticleShadow(t, e, i, o) {
		const s = i.getPosition(),
			n = t.actualOptions.interactivity.modes.light.shadow;
		e.save();
		const a = i.getRadius(),
			r = i.sides,
			l = (2 * Math.PI) / r,
			c = -i.rotate.value + Math.PI / 4,
			d = [];
		for (let y = 0; y < r; y++)
			d.push({ x: s.x + a * Math.sin(c + l * y) * 1, y: s.y + a * Math.cos(c + l * y) * 1 });
		const h = [],
			u = n.length;
		for (const y of d) {
			const t = Math.atan2(o.y - y.y, o.x - y.x),
				e = y.x + u * Math.sin(-t - Math.PI / 2),
				i = y.y + u * Math.cos(-t - Math.PI / 2);
			h.push({ endX: e, endY: i, startX: y.x, startY: y.y });
		}
		const v = K.colorToRgb(n.color);
		if (!v) return;
		const p = K.getStyleFromRgb(v);
		for (let y = h.length - 1; y >= 0; y--) {
			const t = y == h.length - 1 ? 0 : y + 1;
			e.beginPath(),
				e.moveTo(h[y].startX, h[y].startY),
				e.lineTo(h[t].startX, h[t].startY),
				e.lineTo(h[t].endX, h[t].endY),
				e.lineTo(h[y].endX, h[y].endY),
				(e.fillStyle = p),
				e.fill();
		}
		e.restore();
	}
	static drawParticle(t, e, i, o, s, n, a, r, l, c, d) {
		const h = i.getPosition();
		e.save(), e.translate(h.x, h.y), e.beginPath();
		const u = i.rotate.value + (i.options.rotate.path ? i.velocity.angle : 0);
		0 !== u && e.rotate(u), a && (e.globalCompositeOperation = r);
		const v = i.shadowColor;
		d.enable &&
			v &&
			((e.shadowBlur = d.blur),
			(e.shadowColor = K.getStyleFromRgb(v)),
			(e.shadowOffsetX = d.offset.x),
			(e.shadowOffsetY = d.offset.y)),
			s && (e.fillStyle = s);
		const p = i.stroke;
		(e.lineWidth = i.strokeWidth),
			n && (e.strokeStyle = n),
			et.drawShape(t, e, i, l, c, o),
			p.width > 0 && e.stroke(),
			i.close && e.closePath(),
			i.fill && e.fill(),
			e.restore(),
			e.save(),
			e.translate(h.x, h.y),
			0 !== u && e.rotate(u),
			a && (e.globalCompositeOperation = r),
			et.drawShapeAfterEffect(t, e, i, l, c, o),
			e.restore();
	}
	static drawShape(t, e, i, o, s, n) {
		if (!i.shape) return;
		const a = t.drawers.get(i.shape);
		a && a.draw(e, i, o, s, n, t.retina.pixelRatio);
	}
	static drawShapeAfterEffect(t, e, i, o, s, n) {
		if (!i.shape) return;
		const a = t.drawers.get(i.shape);
		(null == a ? void 0 : a.afterEffect) && a.afterEffect(e, i, o, s, n, t.retina.pixelRatio);
	}
	static drawPlugin(t, e, i) {
		void 0 !== e.draw && (t.save(), e.draw(t, i), t.restore());
	}
}
class it {
	constructor(t, e) {
		this.position = { x: t, y: e };
	}
}
class ot extends it {
	constructor(t, e, i) {
		super(t, e), (this.radius = i);
	}
	contains(t) {
		return (
			Math.pow(t.x - this.position.x, 2) + Math.pow(t.y - this.position.y, 2) <=
			this.radius * this.radius
		);
	}
	intersects(t) {
		const e = t,
			i = t,
			o = this.position,
			s = t.position,
			n = Math.abs(s.x - o.x),
			a = Math.abs(s.y - o.y),
			r = this.radius;
		if (void 0 !== i.radius) return r + i.radius > Math.sqrt(n * n + a + a);
		if (void 0 !== e.size) {
			const t = e.size.width,
				i = e.size.height,
				o = Math.pow(n - t, 2) + Math.pow(a - i, 2);
			return !(n > r + t || a > r + i) && (n <= t || a <= i || o <= r * r);
		}
		return !1;
	}
}
class st extends it {
	constructor(t, e, i, o) {
		super(t, e), (this.size = { height: o, width: i });
	}
	contains(t) {
		const e = this.size.width,
			i = this.size.height,
			o = this.position;
		return t.x >= o.x && t.x <= o.x + e && t.y >= o.y && t.y <= o.y + i;
	}
	intersects(t) {
		const e = t,
			i = t,
			o = this.size.width,
			s = this.size.height,
			n = this.position,
			a = t.position;
		if (void 0 !== i.radius) return i.intersects(this);
		if (void 0 !== e.size) {
			const t = e.size,
				i = t.width,
				r = t.height;
			return a.x < n.x + o && a.x + i > n.x && a.y < n.y + s && a.y + r > n.y;
		}
		return !1;
	}
}
class nt extends ot {
	constructor(t, e, i, o) {
		super(t, e, i), (this.canvasSize = o), (this.canvasSize = { height: o.height, width: o.width });
	}
	contains(t) {
		if (super.contains(t)) return !0;
		const e = { x: t.x - this.canvasSize.width, y: t.y };
		if (super.contains(e)) return !0;
		const i = { x: t.x - this.canvasSize.width, y: t.y - this.canvasSize.height };
		if (super.contains(i)) return !0;
		const o = { x: t.x, y: t.y - this.canvasSize.height };
		return super.contains(o);
	}
	intersects(t) {
		if (super.intersects(t)) return !0;
		const e = t,
			i = t,
			o = { x: t.position.x - this.canvasSize.width, y: t.position.y - this.canvasSize.height };
		if (void 0 !== i.radius) {
			const t = new ot(o.x, o.y, 2 * i.radius);
			return super.intersects(t);
		}
		if (void 0 !== e.size) {
			const t = new st(o.x, o.y, 2 * e.size.width, 2 * e.size.height);
			return super.intersects(t);
		}
		return !1;
	}
}
function at(t, e, i, o, s) {
	if (o) {
		let o = { passive: !0 };
		'boolean' == typeof s ? (o.capture = s) : void 0 !== s && (o = s), t.addEventListener(e, i, o);
	} else {
		const o = s;
		t.removeEventListener(e, i, o);
	}
}
!(function (t) {
	(t.attract = 'attract'),
		(t.bubble = 'bubble'),
		(t.push = 'push'),
		(t.remove = 'remove'),
		(t.repulse = 'repulse'),
		(t.pause = 'pause'),
		(t.trail = 'trail');
})(E || (E = {})),
	(function (t) {
		(t.none = 'none'), (t.split = 'split');
	})(D || (D = {})),
	(function (t) {
		(t.bounce = 'bounce'), (t.bubble = 'bubble'), (t.repulse = 'repulse');
	})(O || (O = {})),
	(function (t) {
		(t.attract = 'attract'),
			(t.bounce = 'bounce'),
			(t.bubble = 'bubble'),
			(t.connect = 'connect'),
			(t.grab = 'grab'),
			(t.light = 'light'),
			(t.repulse = 'repulse'),
			(t.slow = 'slow'),
			(t.trail = 'trail');
	})(I || (I = {})),
	(function (t) {
		(t.absorb = 'absorb'), (t.bounce = 'bounce'), (t.destroy = 'destroy');
	})(F || (F = {})),
	(function (t) {
		(t.bounce = 'bounce'),
			(t.bounceHorizontal = 'bounce-horizontal'),
			(t.bounceVertical = 'bounce-vertical'),
			(t.none = 'none'),
			(t.out = 'out'),
			(t.destroy = 'destroy'),
			(t.split = 'split');
	})(L || (L = {})),
	(function (t) {
		(t.precise = 'precise'), (t.percent = 'percent');
	})(V || (V = {})),
	(function (t) {
		(t.any = 'any'), (t.dark = 'dark'), (t.light = 'light');
	})(H || (H = {})),
	(function (t) {
		(t[(t.increasing = 0)] = 'increasing'), (t[(t.decreasing = 1)] = 'decreasing');
	})(_ || (_ = {})),
	(function (t) {
		(t.none = 'none'), (t.max = 'max'), (t.min = 'min');
	})(q || (q = {})),
	(function (t) {
		(t.color = 'color'), (t.opacity = 'opacity'), (t.size = 'size');
	})(B || (B = {})),
	(function (t) {
		(t.char = 'char'),
			(t.character = 'character'),
			(t.circle = 'circle'),
			(t.edge = 'edge'),
			(t.image = 'image'),
			(t.images = 'images'),
			(t.line = 'line'),
			(t.polygon = 'polygon'),
			(t.square = 'square'),
			(t.star = 'star'),
			(t.triangle = 'triangle');
	})($ || ($ = {})),
	(function (t) {
		(t.max = 'max'), (t.min = 'min'), (t.random = 'random');
	})(W || (W = {})),
	(function (t) {
		(t.circle = 'circle'), (t.rectangle = 'rectangle');
	})(G || (G = {})),
	(function (t) {
		(t.canvas = 'canvas'), (t.parent = 'parent'), (t.window = 'window');
	})(N || (N = {}));
class rt {
	constructor(t) {
		(this.container = t),
			(this.canPush = !0),
			(this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
			(this.touchStartHandler = (t) => this.mouseTouchMove(t)),
			(this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
			(this.touchEndHandler = () => this.mouseTouchFinish()),
			(this.mouseLeaveHandler = () => this.mouseTouchFinish()),
			(this.touchCancelHandler = () => this.mouseTouchFinish()),
			(this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
			(this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
			(this.mouseDownHandler = () => this.mouseDown()),
			(this.visibilityChangeHandler = () => this.handleVisibilityChange()),
			(this.resizeHandler = () => this.handleWindowResize());
	}
	addListeners() {
		this.manageListeners(!0);
	}
	removeListeners() {
		this.manageListeners(!1);
	}
	manageListeners(t) {
		var e;
		const i = this.container,
			o = i.actualOptions,
			s = o.interactivity.detectsOn;
		let n = Q.mouseLeaveEvent;
		if (s === N.window) (i.interactivity.element = window), (n = Q.mouseOutEvent);
		else if (s === N.parent && i.canvas.element) {
			const t = i.canvas.element;
			i.interactivity.element = null !== (e = t.parentElement) && void 0 !== e ? e : t.parentNode;
		} else i.interactivity.element = i.canvas.element;
		const a = i.interactivity.element;
		if (!a) return;
		const r = a;
		(o.interactivity.events.onHover.enable || o.interactivity.events.onClick.enable) &&
			(at(a, Q.mouseMoveEvent, this.mouseMoveHandler, t),
			at(a, Q.touchStartEvent, this.touchStartHandler, t),
			at(a, Q.touchMoveEvent, this.touchMoveHandler, t),
			o.interactivity.events.onClick.enable
				? (at(a, Q.touchEndEvent, this.touchEndClickHandler, t),
				  at(a, Q.mouseUpEvent, this.mouseUpHandler, t),
				  at(a, Q.mouseDownEvent, this.mouseDownHandler, t))
				: at(a, Q.touchEndEvent, this.touchEndHandler, t),
			at(a, n, this.mouseLeaveHandler, t),
			at(a, Q.touchCancelEvent, this.touchCancelHandler, t)),
			i.canvas.element &&
				(i.canvas.element.style.pointerEvents = r === i.canvas.element ? 'initial' : 'none'),
			o.interactivity.events.resize && at(window, Q.resizeEvent, this.resizeHandler, t),
			document && at(document, Q.visibilityChangeEvent, this.visibilityChangeHandler, t, !1);
	}
	handleWindowResize() {
		var t;
		null === (t = this.container.canvas) || void 0 === t || t.windowResize();
	}
	handleVisibilityChange() {
		const t = this.container,
			e = t.actualOptions;
		this.mouseTouchFinish(),
			e.pauseOnBlur &&
				((null === document || void 0 === document ? void 0 : document.hidden)
					? ((t.pageHidden = !0), t.pause())
					: ((t.pageHidden = !1), t.getAnimationStatus() ? t.play(!0) : t.draw()));
	}
	mouseDown() {
		const t = this.container.interactivity;
		if (t) {
			const e = t.mouse;
			(e.clicking = !0), (e.downPosition = e.position);
		}
	}
	mouseTouchMove(t) {
		var e, i, o, s, n, a, r;
		const l = this.container,
			c = l.actualOptions;
		if (void 0 === (null === (e = l.interactivity) || void 0 === e ? void 0 : e.element)) return;
		let d;
		l.interactivity.mouse.inside = !0;
		const h = l.canvas.element;
		if (t.type.startsWith('mouse')) {
			this.canPush = !0;
			const e = t;
			if (l.interactivity.element === window) {
				if (h) {
					const t = h.getBoundingClientRect();
					d = { x: e.clientX - t.left, y: e.clientY - t.top };
				}
			} else if (c.interactivity.detectsOn === N.parent) {
				const t = e.target,
					s = e.currentTarget,
					n = l.canvas.element;
				if (t && s && n) {
					const i = t.getBoundingClientRect(),
						o = s.getBoundingClientRect(),
						a = n.getBoundingClientRect();
					d = {
						x: e.offsetX + 2 * i.left - (o.left + a.left),
						y: e.offsetY + 2 * i.top - (o.top + a.top)
					};
				} else
					d = {
						x: null !== (i = e.offsetX) && void 0 !== i ? i : e.clientX,
						y: null !== (o = e.offsetY) && void 0 !== o ? o : e.clientY
					};
			} else
				e.target === l.canvas.element &&
					(d = {
						x: null !== (s = e.offsetX) && void 0 !== s ? s : e.clientX,
						y: null !== (n = e.offsetY) && void 0 !== n ? n : e.clientY
					});
		} else {
			this.canPush = 'touchmove' !== t.type;
			const e = t,
				i = e.touches[e.touches.length - 1],
				o = null == h ? void 0 : h.getBoundingClientRect();
			d = {
				x: i.clientX - (null !== (a = null == o ? void 0 : o.left) && void 0 !== a ? a : 0),
				y: i.clientY - (null !== (r = null == o ? void 0 : o.top) && void 0 !== r ? r : 0)
			};
		}
		const u = l.retina.pixelRatio;
		d && ((d.x *= u), (d.y *= u)),
			(l.interactivity.mouse.position = d),
			(l.interactivity.status = Q.mouseMoveEvent);
	}
	mouseTouchFinish() {
		const t = this.container.interactivity;
		if (void 0 === t) return;
		const e = t.mouse;
		delete e.position,
			delete e.clickPosition,
			delete e.downPosition,
			(t.status = Q.mouseLeaveEvent),
			(e.inside = !1),
			(e.clicking = !1);
	}
	mouseTouchClick(t) {
		const e = this.container,
			i = e.actualOptions,
			o = e.interactivity.mouse;
		o.inside = !0;
		let s = !1;
		const n = o.position;
		if (void 0 !== n && i.interactivity.events.onClick.enable) {
			for (const [, t] of e.plugins)
				if (void 0 !== t.clickPositionValid && ((s = t.clickPositionValid(n)), s)) break;
			s || this.doMouseTouchClick(t), (o.clicking = !1);
		}
	}
	doMouseTouchClick(t) {
		const e = this.container,
			i = e.actualOptions;
		if (this.canPush) {
			const t = e.interactivity.mouse.position;
			if (!t) return;
			(e.interactivity.mouse.clickPosition = { x: t.x, y: t.y }),
				(e.interactivity.mouse.clickTime = new Date().getTime());
			const o = i.interactivity.events.onClick;
			if (o.mode instanceof Array) for (const e of o.mode) this.handleClickMode(e);
			else this.handleClickMode(o.mode);
		}
		'touchend' === t.type && setTimeout(() => this.mouseTouchFinish(), 500);
	}
	handleClickMode(t) {
		const e = this.container,
			i = e.actualOptions,
			o = i.interactivity.modes.push.quantity,
			s = i.interactivity.modes.remove.quantity;
		switch (t) {
			case E.push:
				o > 0 && e.particles.push(o, e.interactivity.mouse);
				break;
			case E.remove:
				e.particles.removeQuantity(s);
				break;
			case E.bubble:
				e.bubble.clicking = !0;
				break;
			case E.repulse:
				(e.repulse.clicking = !0), (e.repulse.count = 0);
				for (const t of e.repulse.particles) t.velocity.setTo(t.initialVelocity);
				(e.repulse.particles = []),
					(e.repulse.finish = !1),
					setTimeout(() => {
						e.destroyed || (e.repulse.clicking = !1);
					}, 1e3 * i.interactivity.modes.repulse.duration);
				break;
			case E.attract:
				(e.attract.clicking = !0), (e.attract.count = 0);
				for (const t of e.attract.particles) t.velocity.setTo(t.initialVelocity);
				(e.attract.particles = []),
					(e.attract.finish = !1),
					setTimeout(() => {
						e.destroyed || (e.attract.clicking = !1);
					}, 1e3 * i.interactivity.modes.attract.duration);
				break;
			case E.pause:
				e.getAnimationStatus() ? e.pause() : e.play();
		}
		for (const [, n] of e.plugins) n.handleClickMode && n.handleClickMode(t);
	}
}
const lt = [],
	ct = new Map(),
	dt = new Map(),
	ht = new Map();
class ut {
	static getPlugin(t) {
		return lt.find((e) => e.id === t);
	}
	static addPlugin(t) {
		ut.getPlugin(t.id) || lt.push(t);
	}
	static getAvailablePlugins(t) {
		const e = new Map();
		for (const i of lt) i.needsPlugin(t.actualOptions) && e.set(i.id, i.getPlugin(t));
		return e;
	}
	static loadOptions(t, e) {
		for (const i of lt) i.loadOptions(t, e);
	}
	static getPreset(t) {
		return ct.get(t);
	}
	static addPreset(t, e) {
		ut.getPreset(t) || ct.set(t, e);
	}
	static addShapeDrawer(t, e) {
		ut.getShapeDrawer(t) || dt.set(t, e);
	}
	static getShapeDrawer(t) {
		return dt.get(t);
	}
	static getSupportedShapes() {
		return dt.keys();
	}
	static getPathGenerator(t) {
		return ht.get(t);
	}
	static addPathGenerator(t, e) {
		ut.getPathGenerator(t) || ht.set(t, e);
	}
}
class vt {
	constructor(t, e) {
		(this.position = t), (this.particle = e);
	}
}
class pt {
	constructor(t, e) {
		(this.rectangle = t), (this.capacity = e), (this.points = []), (this.divided = !1);
	}
	subdivide() {
		const t = this.rectangle.position.x,
			e = this.rectangle.position.y,
			i = this.rectangle.size.width,
			o = this.rectangle.size.height,
			s = this.capacity;
		(this.northEast = new pt(new st(t, e, i / 2, o / 2), s)),
			(this.northWest = new pt(new st(t + i / 2, e, i / 2, o / 2), s)),
			(this.southEast = new pt(new st(t, e + o / 2, i / 2, o / 2), s)),
			(this.southWest = new pt(new st(t + i / 2, e + o / 2, i / 2, o / 2), s)),
			(this.divided = !0);
	}
	insert(t) {
		var e, i, o, s, n;
		return (
			!!this.rectangle.contains(t.position) &&
			(this.points.length < this.capacity
				? (this.points.push(t), !0)
				: (this.divided || this.subdivide(),
				  null !==
						(n =
							(null === (e = this.northEast) || void 0 === e ? void 0 : e.insert(t)) ||
							(null === (i = this.northWest) || void 0 === i ? void 0 : i.insert(t)) ||
							(null === (o = this.southEast) || void 0 === o ? void 0 : o.insert(t)) ||
							(null === (s = this.southWest) || void 0 === s ? void 0 : s.insert(t))) &&
						void 0 !== n &&
						n))
		);
	}
	queryCircle(t, e) {
		return this.query(new ot(t.x, t.y, e));
	}
	queryCircleWarp(t, e, i) {
		const o = i,
			s = i;
		return this.query(new nt(t.x, t.y, e, void 0 !== o.canvas ? o.canvas.size : s));
	}
	queryRectangle(t, e) {
		return this.query(new st(t.x, t.y, e.width, e.height));
	}
	query(t, e) {
		var i, o, s, n;
		const a = null != e ? e : [];
		if (!t.intersects(this.rectangle)) return [];
		for (const r of this.points) t.contains(r.position) && a.push(r.particle);
		return (
			this.divided &&
				(null === (i = this.northEast) || void 0 === i || i.query(t, a),
				null === (o = this.northWest) || void 0 === o || o.query(t, a),
				null === (s = this.southEast) || void 0 === s || s.query(t, a),
				null === (n = this.southWest) || void 0 === n || n.query(t, a)),
			a
		);
	}
}
class yt {
	getSidesCount() {
		return 12;
	}
	init(t) {
		var e;
		return (function (t, e, i, o) {
			return new (i || (i = Promise))(function (s, n) {
				function a(t) {
					try {
						l(o.next(t));
					} catch (e) {
						n(e);
					}
				}
				function r(t) {
					try {
						l(o.throw(t));
					} catch (e) {
						n(e);
					}
				}
				function l(t) {
					var e;
					t.done
						? s(t.value)
						: ((e = t.value),
						  e instanceof i
								? e
								: new i(function (t) {
										t(e);
								  })).then(a, r);
				}
				l((o = o.apply(t, e || [])).next());
			});
		})(this, void 0, void 0, function* () {
			const i = t.actualOptions;
			if (
				X.isInArray($.char, i.particles.shape.type) ||
				X.isInArray($.character, i.particles.shape.type)
			) {
				const t =
					null !== (e = i.particles.shape.options[$.character]) && void 0 !== e
						? e
						: i.particles.shape.options[$.char];
				if (t instanceof Array) for (const e of t) yield X.loadFont(e);
				else void 0 !== t && (yield X.loadFont(t));
			}
		});
	}
	draw(t, e, i) {
		const o = e.shapeData;
		if (void 0 === o) return;
		const s = o.value;
		if (void 0 === s) return;
		const n = e;
		void 0 === n.text && (n.text = s instanceof Array ? X.itemFromArray(s, e.randomIndexData) : s);
		const a = n.text,
			r = o.style,
			l = o.weight,
			c = 2 * Math.round(i),
			d = o.font,
			h = e.fill,
			u = (a.length * i) / 2;
		t.font = `${r} ${l} ${c}px "${d}"`;
		const v = { x: -u, y: i / 2 };
		h ? t.fillText(a, v.x, v.y) : t.strokeText(a, v.x, v.y);
	}
}
var ft = function (t, e, i, o) {
	return new (i || (i = Promise))(function (s, n) {
		function a(t) {
			try {
				l(o.next(t));
			} catch (e) {
				n(e);
			}
		}
		function r(t) {
			try {
				l(o.throw(t));
			} catch (e) {
				n(e);
			}
		}
		function l(t) {
			var e;
			t.done
				? s(t.value)
				: ((e = t.value),
				  e instanceof i
						? e
						: new i(function (t) {
								t(e);
						  })).then(a, r);
		}
		l((o = o.apply(t, e || [])).next());
	});
};
class mt {
	constructor() {
		this.images = [];
	}
	getSidesCount() {
		return 12;
	}
	getImages(t) {
		const e = this.images.filter((e) => e.id === t.id);
		return e.length ? e[0] : (this.images.push({ id: t.id, images: [] }), this.getImages(t));
	}
	addImage(t, e) {
		const i = this.getImages(t);
		null == i || i.images.push(e);
	}
	init(t) {
		var e;
		return ft(this, void 0, void 0, function* () {
			const i = t.actualOptions.particles.shape;
			if (!X.isInArray($.image, i.type) && !X.isInArray($.images, i.type)) return;
			const o = null !== (e = i.options[$.images]) && void 0 !== e ? e : i.options[$.image];
			if (o instanceof Array) for (const e of o) yield this.loadImageShape(t, e);
			else yield this.loadImageShape(t, o);
		});
	}
	destroy() {
		this.images = [];
	}
	loadImageShape(t, e) {
		return ft(this, void 0, void 0, function* () {
			try {
				const i = e.replaceColor ? yield X.downloadSvgImage(e.src) : yield X.loadImage(e.src);
				i && this.addImage(t, i);
			} catch (i) {
				console.warn(`tsParticles error - ${e.src} not found`);
			}
		});
	}
	draw(t, e, i, o) {
		var s, n;
		if (!t) return;
		const a = e.image,
			r = null === (s = null == a ? void 0 : a.data) || void 0 === s ? void 0 : s.element;
		if (!r) return;
		const l = null !== (n = null == a ? void 0 : a.ratio) && void 0 !== n ? n : 1,
			c = { x: -i, y: -i };
		((null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor)) ||
			(t.globalAlpha = o),
			t.drawImage(r, c.x, c.y, 2 * i, (2 * i) / l),
			((null == a ? void 0 : a.data.svgData) && (null == a ? void 0 : a.replaceColor)) ||
				(t.globalAlpha = 1);
	}
}
class gt {
	getSidesCount() {
		return 1;
	}
	draw(t, e, i) {
		t.moveTo(0, -i / 2), t.lineTo(0, i / 2);
	}
}
class bt {
	getSidesCount() {
		return 12;
	}
	draw(t, e, i) {
		t.arc(0, 0, i, 0, 2 * Math.PI, !1);
	}
}
class wt {
	getSidesCount(t) {
		var e, i;
		const o = t.shapeData;
		return null !==
			(i =
				null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
					? e
					: null == o
					? void 0
					: o.nb_sides) && void 0 !== i
			? i
			: 5;
	}
	draw(t, e, i) {
		const o = this.getCenter(e, i),
			s = this.getSidesData(e, i),
			n = s.count.numerator * s.count.denominator,
			a = s.count.numerator / s.count.denominator,
			r = (180 * (a - 2)) / a,
			l = Math.PI - (Math.PI * r) / 180;
		if (t) {
			t.beginPath(), t.translate(o.x, o.y), t.moveTo(0, 0);
			for (let e = 0; e < n; e++) t.lineTo(s.length, 0), t.translate(s.length, 0), t.rotate(l);
		}
	}
}
class xt extends wt {
	getSidesCount() {
		return 3;
	}
	getSidesData(t, e) {
		return { count: { denominator: 2, numerator: 3 }, length: 2 * e };
	}
	getCenter(t, e) {
		return { x: -e, y: e / 1.66 };
	}
}
class kt {
	getSidesCount(t) {
		var e, i;
		const o = t.shapeData;
		return null !==
			(i =
				null !== (e = null == o ? void 0 : o.sides) && void 0 !== e
					? e
					: null == o
					? void 0
					: o.nb_sides) && void 0 !== i
			? i
			: 5;
	}
	draw(t, e, i) {
		var o;
		const s = e.shapeData,
			n = this.getSidesCount(e),
			a = null !== (o = null == s ? void 0 : s.inset) && void 0 !== o ? o : 2;
		t.moveTo(0, 0 - i);
		for (let r = 0; r < n; r++)
			t.rotate(Math.PI / n), t.lineTo(0, 0 - i * a), t.rotate(Math.PI / n), t.lineTo(0, 0 - i);
	}
}
class Pt extends wt {
	getSidesData(t, e) {
		var i, o;
		const s = t.shapeData,
			n =
				null !==
					(o =
						null !== (i = null == s ? void 0 : s.sides) && void 0 !== i
							? i
							: null == s
							? void 0
							: s.nb_sides) && void 0 !== o
					? o
					: 5;
		return { count: { denominator: 1, numerator: n }, length: (2.66 * e) / (n / 3) };
	}
	getCenter(t, e) {
		return { x: -e / (this.getSidesCount(t) / 3.5), y: -e / 0.76 };
	}
}
class Mt {
	constructor(t) {
		(this.container = t),
			(this.size = { height: 0, width: 0 }),
			(this.context = null),
			(this.generatedCanvas = !1);
	}
	init() {
		var t, e, i, o, s, n, a, r, l, c, d, h;
		this.resize();
		const u = this.container.actualOptions,
			v = this.element;
		v &&
			(u.fullScreen.enable
				? ((this.originalStyle = X.deepExtend({}, v.style)),
				  (v.style.position = 'fixed'),
				  (v.style.zIndex = u.fullScreen.zIndex.toString(10)),
				  (v.style.top = '0'),
				  (v.style.left = '0'),
				  (v.style.width = '100%'),
				  (v.style.height = '100%'))
				: ((v.style.position =
						null !==
							(e = null === (t = this.originalStyle) || void 0 === t ? void 0 : t.position) &&
						void 0 !== e
							? e
							: ''),
				  (v.style.zIndex =
						null !== (o = null === (i = this.originalStyle) || void 0 === i ? void 0 : i.zIndex) &&
						void 0 !== o
							? o
							: ''),
				  (v.style.top =
						null !== (n = null === (s = this.originalStyle) || void 0 === s ? void 0 : s.top) &&
						void 0 !== n
							? n
							: ''),
				  (v.style.left =
						null !== (r = null === (a = this.originalStyle) || void 0 === a ? void 0 : a.left) &&
						void 0 !== r
							? r
							: ''),
				  (v.style.width =
						null !== (c = null === (l = this.originalStyle) || void 0 === l ? void 0 : l.width) &&
						void 0 !== c
							? c
							: ''),
				  (v.style.height =
						null !== (h = null === (d = this.originalStyle) || void 0 === d ? void 0 : d.height) &&
						void 0 !== h
							? h
							: '')));
		const p = u.backgroundMask.cover,
			y = p.color,
			f = u.particles.move.trail,
			m = K.colorToRgb(y);
		(this.coverColor = void 0 !== m ? { r: m.r, g: m.g, b: m.b, a: p.opacity } : void 0),
			(this.trailFillColor = K.colorToRgb(f.fillColor)),
			this.initBackground(),
			this.paint();
	}
	loadCanvas(t, e) {
		var i;
		t.className || (t.className = Q.canvasClass),
			this.generatedCanvas && (null === (i = this.element) || void 0 === i || i.remove()),
			(this.generatedCanvas = null != e ? e : this.generatedCanvas),
			(this.element = t),
			(this.originalStyle = X.deepExtend({}, this.element.style)),
			(this.size.height = t.offsetHeight),
			(this.size.width = t.offsetWidth),
			(this.context = this.element.getContext('2d')),
			this.container.retina.init(),
			this.initBackground();
	}
	destroy() {
		var t;
		this.generatedCanvas && (null === (t = this.element) || void 0 === t || t.remove()),
			this.context && et.clear(this.context, this.size);
	}
	paint() {
		const t = this.container.actualOptions;
		this.context &&
			(t.backgroundMask.enable && t.backgroundMask.cover && this.coverColor
				? (et.clear(this.context, this.size),
				  this.paintBase(K.getStyleFromRgb(this.coverColor, this.coverColor.a)))
				: this.paintBase());
	}
	clear() {
		const t = this.container.actualOptions,
			e = t.particles.move.trail;
		t.backgroundMask.enable
			? this.paint()
			: e.enable && e.length > 0 && this.trailFillColor
			? this.paintBase(K.getStyleFromRgb(this.trailFillColor, 1 / e.length))
			: this.context && et.clear(this.context, this.size);
	}
	windowResize() {
		if (!this.element) return;
		const t = this.container;
		this.resize(),
			t.actualOptions.setResponsive(this.size.width, t.retina.pixelRatio, t.options),
			t.particles.setDensity();
		for (const [, e] of t.plugins) void 0 !== e.resize && e.resize();
	}
	resize() {
		if (!this.element) return;
		const t = this.container,
			e = t.retina.pixelRatio,
			i = t.canvas.size,
			o = i.width,
			s = i.height;
		(i.width = this.element.offsetWidth * e),
			(i.height = this.element.offsetHeight * e),
			(this.element.width = i.width),
			(this.element.height = i.height),
			this.container.started && (this.resizeFactor = { width: i.width / o, height: i.height / s });
	}
	drawConnectLine(t, e) {
		var i;
		const o = this.context;
		if (!o) return;
		const s = this.lineStyle(t, e);
		if (!s) return;
		const n = t.getPosition(),
			a = e.getPosition();
		et.drawConnectLine(
			o,
			null !== (i = t.linksWidth) && void 0 !== i ? i : this.container.retina.linksWidth,
			s,
			n,
			a
		);
	}
	drawGrabLine(t, e, i, o) {
		var s;
		const n = this.container,
			a = n.canvas.context;
		if (!a) return;
		const r = t.getPosition();
		et.drawGrabLine(
			a,
			null !== (s = t.linksWidth) && void 0 !== s ? s : n.retina.linksWidth,
			r,
			o,
			e,
			i
		);
	}
	drawParticleShadow(t, e) {
		this.context && et.drawParticleShadow(this.container, this.context, t, e);
	}
	drawLinkTriangle(t, e, i) {
		var o;
		const s = this.container,
			n = s.actualOptions,
			a = e.destination,
			r = i.destination,
			l = t.options.links.triangles,
			c = null !== (o = l.opacity) && void 0 !== o ? o : (e.opacity + i.opacity) / 2;
		if (c <= 0) return;
		const d = t.getPosition(),
			h = a.getPosition(),
			u = r.getPosition(),
			v = this.context;
		if (!v) return;
		if (
			T.getDistance(d, h) > s.retina.linksDistance ||
			T.getDistance(u, h) > s.retina.linksDistance ||
			T.getDistance(u, d) > s.retina.linksDistance
		)
			return;
		let p = K.colorToRgb(l.color);
		if (!p) {
			const e = t.options.links,
				i = void 0 !== e.id ? s.particles.linksColors.get(e.id) : s.particles.linksColor;
			p = K.getLinkColor(t, a, i);
		}
		p && et.drawLinkTriangle(v, d, h, u, n.backgroundMask.enable, n.backgroundMask.composite, p, c);
	}
	drawLinkLine(t, e) {
		var i, o;
		const s = this.container,
			n = s.actualOptions,
			a = e.destination;
		let r = e.opacity;
		const l = t.getPosition(),
			c = a.getPosition(),
			d = this.context;
		if (!d) return;
		let h;
		const u = t.options.twinkle.lines;
		if (u.enable) {
			const t = u.frequency,
				e = K.colorToRgb(u.color);
			Math.random() < t && void 0 !== e && ((h = e), (r = u.opacity));
		}
		if (!h) {
			const e = t.options.links,
				i = void 0 !== e.id ? s.particles.linksColors.get(e.id) : s.particles.linksColor;
			h = K.getLinkColor(t, a, i);
		}
		if (!h) return;
		const v = null !== (i = t.linksWidth) && void 0 !== i ? i : s.retina.linksWidth,
			p = null !== (o = t.linksDistance) && void 0 !== o ? o : s.retina.linksDistance;
		et.drawLinkLine(
			d,
			v,
			l,
			c,
			p,
			s.canvas.size,
			t.options.links.warp,
			n.backgroundMask.enable,
			n.backgroundMask.composite,
			h,
			r,
			t.options.links.shadow
		);
	}
	drawParticle(t, e) {
		var i, o, s, n;
		if (
			!1 === (null === (i = t.image) || void 0 === i ? void 0 : i.loaded) ||
			t.spawning ||
			t.destroyed
		)
			return;
		const a = t.getFillColor(),
			r = null !== (o = t.getStrokeColor()) && void 0 !== o ? o : a;
		if (!a && !r) return;
		const l = this.container.actualOptions,
			c = t.options.twinkle.particles,
			d = c.frequency,
			h = K.colorToRgb(c.color),
			u = c.enable && Math.random() < d,
			v = t.getRadius(),
			p = u ? c.opacity : null !== (s = t.bubble.opacity) && void 0 !== s ? s : t.opacity.value,
			y = t.infecter.infectionStage,
			f = l.infection.stages,
			m = void 0 !== y ? f[y].color : void 0,
			g = K.colorToRgb(m),
			b = u && void 0 !== h ? h : null != g ? g : a ? K.hslToRgb(a) : void 0,
			w = u && void 0 !== h ? h : null != g ? g : r ? K.hslToRgb(r) : void 0,
			x = void 0 !== b ? K.getStyleFromRgb(b, p) : void 0;
		if (!this.context || (!x && !w)) return;
		const k =
			void 0 !== w
				? K.getStyleFromRgb(w, null !== (n = t.stroke.opacity) && void 0 !== n ? n : p)
				: x;
		this.drawParticleLinks(t),
			v > 0 &&
				et.drawParticle(
					this.container,
					this.context,
					t,
					e,
					x,
					k,
					l.backgroundMask.enable,
					l.backgroundMask.composite,
					v,
					p,
					t.options.shadow
				);
	}
	drawParticleLinks(t) {
		if (!this.context) return;
		const e = this.container,
			i = e.particles,
			o = t.options;
		if (t.links.length > 0) {
			this.context.save();
			const s = t.links.filter(
				(i) => e.particles.getLinkFrequency(t, i.destination) <= o.links.frequency
			);
			for (const n of s) {
				const a = n.destination;
				if (o.links.triangles.enable) {
					const r = s.map((t) => t.destination),
						l = a.links.filter(
							(t) =>
								e.particles.getLinkFrequency(a, t.destination) <= a.options.links.frequency &&
								r.indexOf(t.destination) >= 0
						);
					if (l.length)
						for (const e of l) {
							const s = e.destination;
							i.getTriangleFrequency(t, a, s) > o.links.triangles.frequency ||
								this.drawLinkTriangle(t, n, e);
						}
				}
				n.opacity > 0 && e.retina.linksWidth > 0 && this.drawLinkLine(t, n);
			}
			this.context.restore();
		}
	}
	drawPlugin(t, e) {
		this.context && et.drawPlugin(this.context, t, e);
	}
	drawLight(t) {
		this.context && et.drawLight(this.container, this.context, t);
	}
	paintBase(t) {
		this.context && et.paintBase(this.context, this.size, t);
	}
	lineStyle(t, e) {
		if (!this.context) return;
		const i = this.container.actualOptions.interactivity.modes.connect;
		return et.gradient(this.context, t, e, i.links.opacity);
	}
	initBackground() {
		const t = this.container.actualOptions.background,
			e = this.element,
			i = null == e ? void 0 : e.style;
		if (i) {
			if (t.color) {
				const e = K.colorToRgb(t.color);
				i.backgroundColor = e ? K.getStyleFromRgb(e, t.opacity) : '';
			} else i.backgroundColor = '';
			(i.backgroundImage = t.image || ''),
				(i.backgroundPosition = t.position || ''),
				(i.backgroundRepeat = t.repeat || ''),
				(i.backgroundSize = t.size || '');
		}
	}
}
function Rt(t, e, i, o, s) {
	switch (e) {
		case q.max:
			i >= s && t.destroy();
			break;
		case q.min:
			i <= o && t.destroy();
	}
}
class St {
	constructor(t, e) {
		(this.container = t), (this.particle = e);
	}
	update(t) {
		this.particle.destroyed ||
			(this.updateLife(t),
			this.particle.destroyed ||
				this.particle.spawning ||
				(this.updateOpacity(t),
				this.updateSize(t),
				this.updateAngle(t),
				this.updateColor(t),
				this.updateStrokeColor(t),
				this.updateOutModes(t)));
	}
	updateLife(t) {
		const e = this.particle;
		let i = !1;
		if (
			(e.spawning &&
				((e.lifeDelayTime += t.value),
				e.lifeDelayTime >= e.lifeDelay &&
					((i = !0), (e.spawning = !1), (e.lifeDelayTime = 0), (e.lifeTime = 0))),
			-1 !== e.lifeDuration &&
				!e.spawning &&
				(i ? (e.lifeTime = 0) : (e.lifeTime += t.value), e.lifeTime >= e.lifeDuration))
		) {
			if (((e.lifeTime = 0), e.livesRemaining > 0 && e.livesRemaining--, 0 === e.livesRemaining))
				return void e.destroy();
			const t = this.container.canvas.size;
			(e.position.x = T.randomInRange(T.setRangeValue(0, t.width))),
				(e.position.y = T.randomInRange(T.setRangeValue(0, t.height))),
				(e.spawning = !0),
				(e.lifeDelayTime = 0),
				(e.lifeTime = 0),
				e.reset();
			const i = e.options.life;
			(e.lifeDelay = 1e3 * T.getValue(i.delay)), (e.lifeDuration = 1e3 * T.getValue(i.duration));
		}
	}
	updateOpacity(t) {
		var e, i;
		const o = this.particle,
			s = o.options.opacity,
			n = s.animation,
			a = T.getRangeMin(s.value),
			r = T.getRangeMax(s.value);
		if (!o.destroyed && n.enable && (n.count <= 0 || o.loops.size < n.count)) {
			switch (o.opacity.status) {
				case _.increasing:
					o.opacity.value >= r
						? ((o.opacity.status = _.decreasing), o.loops.opacity++)
						: (o.opacity.value +=
								(null !== (e = o.opacity.velocity) && void 0 !== e ? e : 0) * t.factor);
					break;
				case _.decreasing:
					o.opacity.value <= a
						? ((o.opacity.status = _.increasing), o.loops.opacity++)
						: (o.opacity.value -=
								(null !== (i = o.opacity.velocity) && void 0 !== i ? i : 0) * t.factor);
			}
			Rt(o, n.destroy, o.opacity.value, a, r),
				o.destroyed || (o.opacity.value = T.clamp(o.opacity.value, a, r));
		}
	}
	updateSize(t) {
		var e;
		const i = this.container,
			o = this.particle,
			s = o.options.size,
			n = s.animation,
			a = (null !== (e = o.size.velocity) && void 0 !== e ? e : 0) * t.factor,
			r = T.getRangeMin(s.value) * i.retina.pixelRatio,
			l = T.getRangeMax(s.value) * i.retina.pixelRatio;
		if (!o.destroyed && n.enable && (n.count <= 0 || o.loops.size < n.count)) {
			switch (o.size.status) {
				case _.increasing:
					o.size.value >= l
						? ((o.size.status = _.decreasing), o.loops.size++)
						: (o.size.value += a);
					break;
				case _.decreasing:
					o.size.value <= r
						? ((o.size.status = _.increasing), o.loops.size++)
						: (o.size.value -= a);
			}
			Rt(o, n.destroy, o.size.value, r, l),
				o.destroyed || (o.size.value = T.clamp(o.size.value, r, l));
		}
	}
	updateAngle(t) {
		var e;
		const i = this.particle,
			o = i.options.rotate.animation,
			s = (null !== (e = i.rotate.velocity) && void 0 !== e ? e : 0) * t.factor,
			n = 2 * Math.PI;
		if (o.enable)
			switch (i.rotate.status) {
				case _.increasing:
					(i.rotate.value += s), i.rotate.value > n && (i.rotate.value -= n);
					break;
				case _.decreasing:
				default:
					(i.rotate.value -= s), i.rotate.value < 0 && (i.rotate.value += n);
			}
	}
	updateColor(t) {
		var e, i, o;
		const s = this.particle,
			n = s.options.color.animation;
		void 0 !== (null === (e = s.color) || void 0 === e ? void 0 : e.h) &&
			this.updateColorValue(s, t, s.color.h, n.h, 360, !1),
			void 0 !== (null === (i = s.color) || void 0 === i ? void 0 : i.s) &&
				this.updateColorValue(s, t, s.color.s, n.s, 100, !0),
			void 0 !== (null === (o = s.color) || void 0 === o ? void 0 : o.l) &&
				this.updateColorValue(s, t, s.color.l, n.l, 100, !0);
	}
	updateStrokeColor(t) {
		var e, i, o, s, n, a, r, l, c, d, h, u;
		const v = this.particle;
		if (!v.stroke.color) return;
		const p = v.stroke.color.animation,
			y = p;
		if (void 0 !== y.enable) {
			const s =
				null !== (i = null === (e = v.strokeColor) || void 0 === e ? void 0 : e.h) && void 0 !== i
					? i
					: null === (o = v.color) || void 0 === o
					? void 0
					: o.h;
			s && this.updateColorValue(v, t, s, y, 360, !1);
		} else {
			const e = p,
				i =
					null !== (n = null === (s = v.strokeColor) || void 0 === s ? void 0 : s.h) && void 0 !== n
						? n
						: null === (a = v.color) || void 0 === a
						? void 0
						: a.h;
			i && this.updateColorValue(v, t, i, e.h, 360, !1);
			const o =
				null !== (l = null === (r = v.strokeColor) || void 0 === r ? void 0 : r.s) && void 0 !== l
					? l
					: null === (c = v.color) || void 0 === c
					? void 0
					: c.s;
			o && this.updateColorValue(v, t, o, e.s, 100, !0);
			const y =
				null !== (h = null === (d = v.strokeColor) || void 0 === d ? void 0 : d.l) && void 0 !== h
					? h
					: null === (u = v.color) || void 0 === u
					? void 0
					: u.l;
			y && this.updateColorValue(v, t, y, e.l, 100, !0);
		}
	}
	updateColorValue(t, e, i, o, s, n) {
		var a;
		const r = i;
		if (!r || !o.enable) return;
		const l = T.randomInRange(o.offset),
			c = (null !== (a = i.velocity) && void 0 !== a ? a : 0) * e.factor + 3.6 * l;
		n && r.status !== _.increasing
			? ((r.value -= c), r.value < 0 && ((r.status = _.increasing), (r.value += r.value)))
			: ((r.value += c), n && r.value > s && ((r.status = _.decreasing), (r.value -= r.value % s))),
			r.value > s && (r.value %= s);
	}
	updateOutModes(t) {
		var e, i, o, s;
		const n = this.particle.options.move.outModes;
		this.updateOutMode(t, null !== (e = n.bottom) && void 0 !== e ? e : n.default, R.bottom),
			this.updateOutMode(t, null !== (i = n.left) && void 0 !== i ? i : n.default, R.left),
			this.updateOutMode(t, null !== (o = n.right) && void 0 !== o ? o : n.default, R.right),
			this.updateOutMode(t, null !== (s = n.top) && void 0 !== s ? s : n.default, R.top);
	}
	updateOutMode(t, e, i) {
		const o = this.container,
			s = this.particle;
		switch (e) {
			case L.bounce:
			case L.bounceVertical:
			case L.bounceHorizontal:
			case 'bounceVertical':
			case 'bounceHorizontal':
			case L.split:
				this.updateBounce(t, i, e);
				break;
			case L.destroy:
				X.isPointInside(s.position, o.canvas.size, s.getRadius(), i) || o.particles.remove(s, !0);
				break;
			case L.out:
				X.isPointInside(s.position, o.canvas.size, s.getRadius(), i) ||
					this.fixOutOfCanvasPosition(i);
				break;
			case L.none:
				this.bounceNone(i);
		}
	}
	fixOutOfCanvasPosition(t) {
		const e = this.container,
			i = this.particle,
			o = i.options.move.warp,
			s = e.canvas.size,
			n = {
				bottom: s.height + i.getRadius() - i.offset.y,
				left: -i.getRadius() - i.offset.x,
				right: s.width + i.getRadius() + i.offset.x,
				top: -i.getRadius() - i.offset.y
			},
			a = i.getRadius(),
			r = X.calculateBounds(i.position, a);
		t === R.right && r.left > s.width - i.offset.x
			? ((i.position.x = n.left), o || (i.position.y = Math.random() * s.height))
			: t === R.left &&
			  r.right < -i.offset.x &&
			  ((i.position.x = n.right), o || (i.position.y = Math.random() * s.height)),
			t === R.bottom && r.top > s.height - i.offset.y
				? (o || (i.position.x = Math.random() * s.width), (i.position.y = n.top))
				: t === R.top &&
				  r.bottom < -i.offset.y &&
				  (o || (i.position.x = Math.random() * s.width), (i.position.y = n.bottom));
	}
	updateBounce(t, e, i) {
		const o = this.container,
			s = this.particle;
		let n = !1;
		for (const [, h] of o.plugins)
			if ((void 0 !== h.particleBounce && (n = h.particleBounce(s, t, e)), n)) break;
		if (n) return;
		const a = s.getPosition(),
			r = s.offset,
			l = s.getRadius(),
			c = X.calculateBounds(a, l),
			d = o.canvas.size;
		!(function (t) {
			if (
				t.outMode === L.bounce ||
				t.outMode === L.bounceHorizontal ||
				'bounceHorizontal' === t.outMode ||
				t.outMode === L.split
			) {
				const e = t.particle.velocity.x;
				let i = !1;
				if (
					(t.direction === R.right && t.bounds.right >= t.canvasSize.width && e > 0) ||
					(t.direction === R.left && t.bounds.left <= 0 && e < 0)
				) {
					const e = T.getValue(t.particle.options.bounce.horizontal);
					(t.particle.velocity.x *= -e), (i = !0);
				}
				if (!i) return;
				const o = t.offset.x + t.size;
				t.bounds.right >= t.canvasSize.width
					? (t.particle.position.x = t.canvasSize.width - o)
					: t.bounds.left <= 0 && (t.particle.position.x = o),
					t.outMode === L.split && t.particle.destroy();
			}
		})({ particle: s, outMode: i, direction: e, bounds: c, canvasSize: d, offset: r, size: l }),
			(function (t) {
				if (
					t.outMode === L.bounce ||
					t.outMode === L.bounceVertical ||
					'bounceVertical' === t.outMode ||
					t.outMode === L.split
				) {
					const e = t.particle.velocity.y;
					let i = !1;
					if (
						(t.direction === R.bottom && t.bounds.bottom >= t.canvasSize.height && e > 0) ||
						(t.direction === R.top && t.bounds.top <= 0 && e < 0)
					) {
						const e = T.getValue(t.particle.options.bounce.vertical);
						(t.particle.velocity.y *= -e), (i = !0);
					}
					if (!i) return;
					const o = t.offset.y + t.size;
					t.bounds.bottom >= t.canvasSize.height
						? (t.particle.position.y = t.canvasSize.height - o)
						: t.bounds.top <= 0 && (t.particle.position.y = o),
						t.outMode === L.split && t.particle.destroy();
				}
			})({ particle: s, outMode: i, direction: e, bounds: c, canvasSize: d, offset: r, size: l });
	}
	bounceNone(t) {
		const e = this.particle;
		if (e.options.move.distance) return;
		const i = e.options.move.gravity,
			o = this.container;
		if (i.enable) {
			const s = e.position;
			((i.acceleration >= 0 && s.y > o.canvas.size.height && t === R.bottom) ||
				(i.acceleration < 0 && s.y < 0 && t === R.top)) &&
				o.particles.remove(e);
		} else X.isPointInside(e.position, o.canvas.size, e.getRadius(), t) || o.particles.remove(e);
	}
}
class Ct {
	constructor() {
		this.value = '#fff';
	}
	static create(t, e) {
		const i = null != t ? t : new Ct();
		return void 0 !== e && i.load('string' == typeof e ? { value: e } : e), i;
	}
	load(t) {
		void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
	}
}
class zt {
	constructor() {
		(this.blur = 5), (this.color = new Ct()), (this.enable = !1), (this.color.value = '#00ff00');
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.blur && (this.blur = t.blur),
			(this.color = Ct.create(this.color, t.color)),
			void 0 !== t.enable && (this.enable = t.enable));
	}
}
class At {
	constructor() {
		(this.enable = !1), (this.frequency = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.frequency && (this.frequency = t.frequency),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class Tt {
	constructor() {
		(this.blink = !1),
			(this.color = new Ct()),
			(this.consent = !1),
			(this.distance = 100),
			(this.enable = !1),
			(this.frequency = 1),
			(this.opacity = 1),
			(this.shadow = new zt()),
			(this.triangles = new At()),
			(this.width = 1),
			(this.warp = !1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.id && (this.id = t.id),
			void 0 !== t.blink && (this.blink = t.blink),
			(this.color = Ct.create(this.color, t.color)),
			void 0 !== t.consent && (this.consent = t.consent),
			void 0 !== t.distance && (this.distance = t.distance),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.frequency && (this.frequency = t.frequency),
			void 0 !== t.opacity && (this.opacity = t.opacity),
			this.shadow.load(t.shadow),
			this.triangles.load(t.triangles),
			void 0 !== t.width && (this.width = t.width),
			void 0 !== t.warp && (this.warp = t.warp));
	}
}
class Et {
	constructor() {
		(this.enable = !1), (this.rotate = { x: 3e3, y: 3e3 });
	}
	get rotateX() {
		return this.rotate.x;
	}
	set rotateX(t) {
		this.rotate.x = t;
	}
	get rotateY() {
		return this.rotate.y;
	}
	set rotateY(t) {
		this.rotate.y = t;
	}
	load(t) {
		var e, i, o, s;
		if (void 0 === t) return;
		void 0 !== t.enable && (this.enable = t.enable);
		const n =
			null !== (i = null === (e = t.rotate) || void 0 === e ? void 0 : e.x) && void 0 !== i
				? i
				: t.rotateX;
		void 0 !== n && (this.rotate.x = n);
		const a =
			null !== (s = null === (o = t.rotate) || void 0 === o ? void 0 : o.y) && void 0 !== s
				? s
				: t.rotateY;
		void 0 !== a && (this.rotate.y = a);
	}
}
class Dt {
	constructor() {
		(this.enable = !1),
			(this.length = 10),
			(this.fillColor = new Ct()),
			(this.fillColor.value = '#000000');
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			(this.fillColor = Ct.create(this.fillColor, t.fillColor)),
			void 0 !== t.length && (this.length = t.length));
	}
}
class Ot {
	constructor() {
		(this.enable = !1), (this.minimumValue = 0);
	}
	load(t) {
		t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
	}
}
class It {
	constructor() {
		(this.random = new Ot()), (this.value = 0);
	}
	load(t) {
		t &&
			('boolean' == typeof t.random ? (this.random.enable = t.random) : this.random.load(t.random),
			void 0 !== t.value &&
				(this.value = T.setRangeValue(
					t.value,
					this.random.enable ? this.random.minimumValue : void 0
				)));
	}
}
class Ft extends It {
	constructor() {
		super();
	}
}
class Lt {
	constructor() {
		(this.clamp = !0), (this.delay = new Ft()), (this.enable = !1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.clamp && (this.clamp = t.clamp),
			this.delay.load(t.delay),
			void 0 !== t.enable && (this.enable = t.enable),
			(this.generator = t.generator));
	}
}
class Vt {
	constructor() {
		(this.offset = 45), (this.value = 90);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.offset && (this.offset = t.offset),
			void 0 !== t.value && (this.value = t.value));
	}
}
class Ht {
	constructor() {
		(this.acceleration = 9.81), (this.enable = !1), (this.maxSpeed = 50);
	}
	load(t) {
		t &&
			(void 0 !== t.acceleration && (this.acceleration = t.acceleration),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.maxSpeed && (this.maxSpeed = t.maxSpeed));
	}
}
class _t {
	constructor() {
		this.default = L.out;
	}
	load(t) {
		var e, i, o, s;
		t &&
			(void 0 !== t.default && (this.default = t.default),
			(this.bottom = null !== (e = t.bottom) && void 0 !== e ? e : t.default),
			(this.left = null !== (i = t.left) && void 0 !== i ? i : t.default),
			(this.right = null !== (o = t.right) && void 0 !== o ? o : t.default),
			(this.top = null !== (s = t.top) && void 0 !== s ? s : t.default));
	}
}
class qt {
	constructor() {
		(this.angle = new Vt()),
			(this.attract = new Et()),
			(this.decay = 0),
			(this.distance = 0),
			(this.direction = S.none),
			(this.drift = 0),
			(this.enable = !1),
			(this.gravity = new Ht()),
			(this.path = new Lt()),
			(this.outModes = new _t()),
			(this.random = !1),
			(this.size = !1),
			(this.speed = 2),
			(this.straight = !1),
			(this.trail = new Dt()),
			(this.vibrate = !1),
			(this.warp = !1);
	}
	get collisions() {
		return !1;
	}
	set collisions(t) {}
	get bounce() {
		return this.collisions;
	}
	set bounce(t) {
		this.collisions = t;
	}
	get out_mode() {
		return this.outMode;
	}
	set out_mode(t) {
		this.outMode = t;
	}
	get outMode() {
		return this.outModes.default;
	}
	set outMode(t) {
		this.outModes.default = t;
	}
	get noise() {
		return this.path;
	}
	set noise(t) {
		this.path = t;
	}
	load(t) {
		var e, i, o;
		if (void 0 === t) return;
		void 0 !== t.angle &&
			('number' == typeof t.angle ? (this.angle.value = t.angle) : this.angle.load(t.angle)),
			this.attract.load(t.attract),
			void 0 !== t.decay && (this.decay = t.decay),
			void 0 !== t.direction && (this.direction = t.direction),
			void 0 !== t.distance && (this.distance = t.distance),
			void 0 !== t.drift && (this.drift = T.setRangeValue(t.drift)),
			void 0 !== t.enable && (this.enable = t.enable),
			this.gravity.load(t.gravity);
		const s = null !== (e = t.outMode) && void 0 !== e ? e : t.out_mode;
		(void 0 === t.outModes && void 0 === s) ||
			('string' == typeof t.outModes || (void 0 === t.outModes && void 0 !== s)
				? this.outModes.load({ default: null !== (i = t.outModes) && void 0 !== i ? i : s })
				: this.outModes.load(t.outModes)),
			this.path.load(null !== (o = t.path) && void 0 !== o ? o : t.noise),
			void 0 !== t.random && (this.random = t.random),
			void 0 !== t.size && (this.size = t.size),
			void 0 !== t.speed && (this.speed = T.setRangeValue(t.speed)),
			void 0 !== t.straight && (this.straight = t.straight),
			this.trail.load(t.trail),
			void 0 !== t.vibrate && (this.vibrate = t.vibrate),
			void 0 !== t.warp && (this.warp = t.warp);
	}
}
class Bt {
	constructor() {
		(this.enable = !1), (this.area = 800), (this.factor = 1e3);
	}
	get value_area() {
		return this.area;
	}
	set value_area(t) {
		this.area = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		void 0 !== t.enable && (this.enable = t.enable);
		const i = null !== (e = t.area) && void 0 !== e ? e : t.value_area;
		void 0 !== i && (this.area = i), void 0 !== t.factor && (this.factor = t.factor);
	}
}
class $t {
	constructor() {
		(this.density = new Bt()), (this.limit = 0), (this.value = 100);
	}
	get max() {
		return this.limit;
	}
	set max(t) {
		this.limit = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		this.density.load(t.density);
		const i = null !== (e = t.limit) && void 0 !== e ? e : t.max;
		void 0 !== i && (this.limit = i), void 0 !== t.value && (this.value = t.value);
	}
}
class Wt {
	constructor() {
		(this.count = 0), (this.enable = !1), (this.speed = 1), (this.sync = !1);
	}
	load(t) {
		t &&
			(void 0 !== t.count && (this.count = t.count),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.speed && (this.speed = t.speed),
			void 0 !== t.sync && (this.sync = t.sync));
	}
}
class Gt extends Wt {
	constructor() {
		super(),
			(this.destroy = q.none),
			(this.enable = !1),
			(this.minimumValue = 0),
			(this.speed = 2),
			(this.startValue = W.random),
			(this.sync = !1);
	}
	get opacity_min() {
		return this.minimumValue;
	}
	set opacity_min(t) {
		this.minimumValue = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		super.load(t),
			void 0 !== t.destroy && (this.destroy = t.destroy),
			void 0 !== t.enable && (this.enable = t.enable);
		const i = null !== (e = t.minimumValue) && void 0 !== e ? e : t.opacity_min;
		void 0 !== i && (this.minimumValue = i),
			void 0 !== t.speed && (this.speed = t.speed),
			void 0 !== t.startValue && (this.startValue = t.startValue),
			void 0 !== t.sync && (this.sync = t.sync);
	}
}
class Nt extends It {
	constructor() {
		super(), (this.animation = new Gt()), (this.random.minimumValue = 0.1), (this.value = 1);
	}
	get anim() {
		return this.animation;
	}
	set anim(t) {
		this.animation = t;
	}
	load(t) {
		var e;
		if (!t) return;
		super.load(t);
		const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
		void 0 !== i &&
			(this.animation.load(i),
			(this.value = T.setRangeValue(
				this.value,
				this.animation.enable ? this.animation.minimumValue : void 0
			)));
	}
}
class Ut {
	constructor() {
		(this.options = {}), (this.type = $.circle);
	}
	get image() {
		var t;
		return null !== (t = this.options[$.image]) && void 0 !== t ? t : this.options[$.images];
	}
	set image(t) {
		(this.options[$.image] = t), (this.options[$.images] = t);
	}
	get custom() {
		return this.options;
	}
	set custom(t) {
		this.options = t;
	}
	get images() {
		return this.image instanceof Array ? this.image : [this.image];
	}
	set images(t) {
		this.image = t;
	}
	get stroke() {
		return [];
	}
	set stroke(t) {}
	get character() {
		var t;
		return null !== (t = this.options[$.character]) && void 0 !== t ? t : this.options[$.char];
	}
	set character(t) {
		(this.options[$.character] = t), (this.options[$.char] = t);
	}
	get polygon() {
		var t;
		return null !== (t = this.options[$.polygon]) && void 0 !== t ? t : this.options[$.star];
	}
	set polygon(t) {
		(this.options[$.polygon] = t), (this.options[$.star] = t);
	}
	load(t) {
		var e, i, o;
		if (void 0 === t) return;
		const s = null !== (e = t.options) && void 0 !== e ? e : t.custom;
		if (void 0 !== s)
			for (const n in s) {
				const t = s[n];
				void 0 !== t &&
					(this.options[n] = X.deepExtend(
						null !== (i = this.options[n]) && void 0 !== i ? i : {},
						t
					));
			}
		this.loadShape(t.character, $.character, $.char, !0),
			this.loadShape(t.polygon, $.polygon, $.star, !1),
			this.loadShape(null !== (o = t.image) && void 0 !== o ? o : t.images, $.image, $.images, !0),
			void 0 !== t.type && (this.type = t.type);
	}
	loadShape(t, e, i, o) {
		var s, n, a, r;
		void 0 !== t &&
			(t instanceof Array
				? (this.options[e] instanceof Array ||
						((this.options[e] = []), (this.options[i] && !o) || (this.options[i] = [])),
				  (this.options[e] = X.deepExtend(
						null !== (s = this.options[e]) && void 0 !== s ? s : [],
						t
				  )),
				  (this.options[i] && !o) ||
						(this.options[i] = X.deepExtend(
							null !== (n = this.options[i]) && void 0 !== n ? n : [],
							t
						)))
				: (this.options[e] instanceof Array &&
						((this.options[e] = {}), (this.options[i] && !o) || (this.options[i] = {})),
				  (this.options[e] = X.deepExtend(
						null !== (a = this.options[e]) && void 0 !== a ? a : {},
						t
				  )),
				  (this.options[i] && !o) ||
						(this.options[i] = X.deepExtend(
							null !== (r = this.options[i]) && void 0 !== r ? r : {},
							t
						))));
	}
}
class jt extends Wt {
	constructor() {
		super(),
			(this.destroy = q.none),
			(this.enable = !1),
			(this.minimumValue = 0),
			(this.speed = 5),
			(this.startValue = W.random),
			(this.sync = !1);
	}
	get size_min() {
		return this.minimumValue;
	}
	set size_min(t) {
		this.minimumValue = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		super.load(t),
			void 0 !== t.destroy && (this.destroy = t.destroy),
			void 0 !== t.enable && (this.enable = t.enable);
		const i = null !== (e = t.minimumValue) && void 0 !== e ? e : t.size_min;
		void 0 !== i && (this.minimumValue = i),
			void 0 !== t.speed && (this.speed = t.speed),
			void 0 !== t.startValue && (this.startValue = t.startValue),
			void 0 !== t.sync && (this.sync = t.sync);
	}
}
class Yt extends It {
	constructor() {
		super(), (this.animation = new jt()), (this.random.minimumValue = 1), (this.value = 3);
	}
	get anim() {
		return this.animation;
	}
	set anim(t) {
		this.animation = t;
	}
	load(t) {
		var e;
		if (!t) return;
		super.load(t);
		const i = null !== (e = t.animation) && void 0 !== e ? e : t.anim;
		void 0 !== i &&
			(this.animation.load(i),
			(this.value = T.setRangeValue(
				this.value,
				this.animation.enable ? this.animation.minimumValue : void 0
			)));
	}
}
class Xt {
	constructor() {
		(this.enable = !1), (this.speed = 0), (this.sync = !1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.speed && (this.speed = t.speed),
			void 0 !== t.sync && (this.sync = t.sync));
	}
}
class Qt extends It {
	constructor() {
		super(),
			(this.animation = new Xt()),
			(this.direction = C.clockwise),
			(this.path = !1),
			(this.value = 0);
	}
	load(t) {
		t &&
			(super.load(t),
			void 0 !== t.direction && (this.direction = t.direction),
			this.animation.load(t.animation),
			void 0 !== t.path && (this.path = t.path));
	}
}
class Jt {
	constructor() {
		(this.blur = 0),
			(this.color = new Ct()),
			(this.enable = !1),
			(this.offset = { x: 0, y: 0 }),
			(this.color.value = '#000000');
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.blur && (this.blur = t.blur),
			(this.color = Ct.create(this.color, t.color)),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.offset &&
				(void 0 !== t.offset.x && (this.offset.x = t.offset.x),
				void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
	}
}
class Zt {
	constructor() {
		(this.count = 0), (this.enable = !1), (this.offset = 0), (this.speed = 1), (this.sync = !0);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.count && (this.count = t.count),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.offset && (this.offset = T.setRangeValue(t.offset)),
			void 0 !== t.speed && (this.speed = t.speed),
			void 0 !== t.sync && (this.sync = t.sync));
	}
}
class Kt {
	constructor() {
		(this.h = new Zt()), (this.s = new Zt()), (this.l = new Zt());
	}
	load(t) {
		t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
	}
}
class te extends Ct {
	constructor() {
		super(), (this.animation = new Kt());
	}
	static create(t, e) {
		const i = null != t ? t : new te();
		return void 0 !== e && i.load('string' == typeof e ? { value: e } : e), i;
	}
	load(t) {
		if ((super.load(t), !t)) return;
		const e = t.animation;
		void 0 !== e &&
			(void 0 !== e.enable ? this.animation.h.load(e) : this.animation.load(t.animation));
	}
}
class ee {
	constructor() {
		this.width = 0;
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = te.create(this.color, t.color)),
			void 0 !== t.width && (this.width = t.width),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class ie extends It {
	constructor() {
		super(), (this.random.minimumValue = 0.1), (this.value = 1);
	}
}
class oe {
	constructor() {
		(this.horizontal = new ie()), (this.vertical = new ie());
	}
	load(t) {
		t && (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
	}
}
class se {
	constructor() {
		(this.enable = !0), (this.retries = 0);
	}
	load(t) {
		t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.retries && (this.retries = t.retries));
	}
}
class ne {
	constructor() {
		(this.bounce = new oe()), (this.enable = !1), (this.mode = F.bounce), (this.overlap = new se());
	}
	load(t) {
		void 0 !== t &&
			(this.bounce.load(t.bounce),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.mode && (this.mode = t.mode),
			this.overlap.load(t.overlap));
	}
}
class ae {
	constructor() {
		(this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.frequency && (this.frequency = t.frequency),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class re {
	constructor() {
		(this.lines = new ae()), (this.particles = new ae());
	}
	load(t) {
		void 0 !== t && (this.lines.load(t.lines), this.particles.load(t.particles));
	}
}
class le extends It {
	constructor() {
		super(), (this.sync = !1);
	}
	load(t) {
		t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
	}
}
class ce extends It {
	constructor() {
		super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
	}
	load(t) {
		void 0 !== t && (super.load(t), void 0 !== t.sync && (this.sync = t.sync));
	}
}
class de {
	constructor() {
		(this.count = 0), (this.delay = new le()), (this.duration = new ce());
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.count && (this.count = t.count),
			this.delay.load(t.delay),
			this.duration.load(t.duration));
	}
}
class he extends It {
	constructor() {
		super(), (this.value = 3);
	}
}
class ue extends It {
	constructor() {
		super(), (this.value = { min: 4, max: 9 });
	}
}
class ve {
	constructor() {
		(this.count = 1), (this.factor = new he()), (this.rate = new ue());
	}
	load(t) {
		t &&
			(void 0 !== t.count && (this.count = t.count),
			this.factor.load(t.factor),
			this.rate.load(t.rate),
			void 0 !== t.particles && (this.particles = X.deepExtend({}, t.particles)));
	}
}
class pe {
	constructor() {
		(this.mode = D.none), (this.split = new ve());
	}
	load(t) {
		t && (void 0 !== t.mode && (this.mode = t.mode), this.split.load(t.split));
	}
}
class ye {
	constructor() {
		(this.bounce = new oe()),
			(this.collisions = new ne()),
			(this.color = new te()),
			(this.destroy = new pe()),
			(this.life = new de()),
			(this.links = new Tt()),
			(this.move = new qt()),
			(this.number = new $t()),
			(this.opacity = new Nt()),
			(this.reduceDuplicates = !1),
			(this.rotate = new Qt()),
			(this.shadow = new Jt()),
			(this.shape = new Ut()),
			(this.size = new Yt()),
			(this.stroke = new ee()),
			(this.twinkle = new re());
	}
	get line_linked() {
		return this.links;
	}
	set line_linked(t) {
		this.links = t;
	}
	get lineLinked() {
		return this.links;
	}
	set lineLinked(t) {
		this.links = t;
	}
	load(t) {
		var e, i, o, s, n, a, r;
		if (void 0 === t) return;
		this.bounce.load(t.bounce),
			(this.color = te.create(this.color, t.color)),
			this.destroy.load(t.destroy),
			this.life.load(t.life);
		const l =
			null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i
				? i
				: t.line_linked;
		void 0 !== l && this.links.load(l),
			this.move.load(t.move),
			this.number.load(t.number),
			this.opacity.load(t.opacity),
			void 0 !== t.reduceDuplicates && (this.reduceDuplicates = t.reduceDuplicates),
			this.rotate.load(t.rotate),
			this.shape.load(t.shape),
			this.size.load(t.size),
			this.shadow.load(t.shadow),
			this.twinkle.load(t.twinkle);
		const c =
			null !== (s = null === (o = t.move) || void 0 === o ? void 0 : o.collisions) && void 0 !== s
				? s
				: null === (n = t.move) || void 0 === n
				? void 0
				: n.bounce;
		void 0 !== c && (this.collisions.enable = c), this.collisions.load(t.collisions);
		const d =
			null !== (a = t.stroke) && void 0 !== a
				? a
				: null === (r = t.shape) || void 0 === r
				? void 0
				: r.stroke;
		void 0 !== d &&
			(d instanceof Array
				? (this.stroke = d.map((t) => {
						const e = new ee();
						return e.load(t), e;
				  }))
				: (this.stroke instanceof Array && (this.stroke = new ee()), this.stroke.load(d)));
	}
}
class fe {
	constructor(t) {
		this.container = t;
	}
	startInfection(t) {
		t > this.container.actualOptions.infection.stages.length ||
			t < 0 ||
			((this.infectionDelay = 0), (this.infectionDelayStage = t));
	}
	updateInfectionStage(t) {
		t > this.container.actualOptions.infection.stages.length ||
			t < 0 ||
			(void 0 !== this.infectionStage && this.infectionStage > t) ||
			((this.infectionStage = t), (this.infectionTime = 0));
	}
	updateInfection(t) {
		const e = this.container.actualOptions,
			i = e.infection,
			o = e.infection.stages,
			s = o.length;
		if (void 0 !== this.infectionDelay && void 0 !== this.infectionDelayStage) {
			const e = this.infectionDelayStage;
			if (e > s || e < 0) return;
			this.infectionDelay > 1e3 * i.delay
				? ((this.infectionStage = e),
				  (this.infectionTime = 0),
				  delete this.infectionDelay,
				  delete this.infectionDelayStage)
				: (this.infectionDelay += t);
		} else delete this.infectionDelay, delete this.infectionDelayStage;
		if (void 0 !== this.infectionStage && void 0 !== this.infectionTime) {
			const e = o[this.infectionStage];
			void 0 !== e.duration && e.duration >= 0 && this.infectionTime > 1e3 * e.duration
				? this.nextInfectionStage()
				: (this.infectionTime += t);
		} else delete this.infectionStage, delete this.infectionTime;
	}
	nextInfectionStage() {
		const t = this.container.actualOptions,
			e = t.infection.stages.length;
		if (
			!(e <= 0 || void 0 === this.infectionStage) &&
			((this.infectionTime = 0), e <= ++this.infectionStage)
		) {
			if (t.infection.cure) return delete this.infectionStage, void delete this.infectionTime;
			(this.infectionStage = 0), (this.infectionTime = 0);
		}
	}
}
class me {
	constructor(t, e) {
		(this.container = t), (this.particle = e);
	}
	move(t) {
		const e = this.particle;
		(e.bubble.inRange = !1), (e.links = []);
		for (const [, i] of this.container.plugins) {
			if (e.destroyed) break;
			i.particleUpdate && i.particleUpdate(e, t);
		}
		e.destroyed || (this.moveParticle(t), this.moveParallax());
	}
	moveParticle(t) {
		var e, i;
		const o = this.particle,
			s = o.options;
		if (!s.move.enable) return;
		const n = this.container,
			a = this.getProximitySpeedFactor(),
			r =
				(null !== (e = o.moveSpeed) && void 0 !== e
					? e
					: T.getRangeValue(o.options.move.speed) * n.retina.pixelRatio) * n.retina.reduceFactor,
			l = T.getRangeMax(o.options.size.value) * n.retina.pixelRatio,
			c = (r / 2) * (s.move.size ? o.getRadius() / l : 1) * a * t.factor,
			d =
				null !== (i = o.moveDrift) && void 0 !== i
					? i
					: T.getRangeValue(o.options.move.drift) * n.retina.pixelRatio;
		this.applyPath(t);
		const h = s.move.gravity;
		h.enable && (o.velocity.y += (h.acceleration * t.factor) / (60 * c)),
			(o.velocity.x += (d * t.factor) / (60 * c));
		const u = 1 - o.options.move.decay;
		o.velocity.multTo(u);
		const v = o.velocity.mult(c);
		h.enable &&
			v.y >= h.maxSpeed &&
			h.maxSpeed > 0 &&
			((v.y = h.maxSpeed), (o.velocity.y = v.y / c)),
			o.position.addTo(v),
			s.move.vibrate &&
				((o.position.x += Math.sin(o.position.x * Math.cos(o.position.y))),
				(o.position.y += Math.cos(o.position.y * Math.sin(o.position.x))));
		const p = o.initialPosition,
			y = T.getDistance(p, o.position);
		o.maxDistance &&
			(y >= o.maxDistance && !o.misplaced
				? ((o.misplaced = y > o.maxDistance),
				  (o.velocity.x = o.velocity.y / 2 - o.velocity.x),
				  (o.velocity.y = o.velocity.x / 2 - o.velocity.y))
				: y < o.maxDistance && o.misplaced
				? (o.misplaced = !1)
				: o.misplaced &&
				  (((o.position.x < p.x && o.velocity.x < 0) || (o.position.x > p.x && o.velocity.x > 0)) &&
						(o.velocity.x *= -Math.random()),
				  ((o.position.y < p.y && o.velocity.y < 0) || (o.position.y > p.y && o.velocity.y > 0)) &&
						(o.velocity.y *= -Math.random())));
	}
	applyPath(t) {
		const e = this.particle,
			i = e.options.move.path;
		if (!i.enable) return;
		const o = this.container;
		if (e.lastPathTime <= e.pathDelay) return void (e.lastPathTime += t.value);
		let s = o.pathGenerator;
		if (i.generator) {
			const t = ut.getPathGenerator(i.generator);
			t && (s = t);
		}
		const n = s.generate(e);
		e.velocity.addTo(n),
			i.clamp &&
				((e.velocity.x = T.clamp(e.velocity.x, -1, 1)),
				(e.velocity.y = T.clamp(e.velocity.y, -1, 1))),
			(e.lastPathTime -= e.pathDelay);
	}
	moveParallax() {
		const t = this.container,
			e = t.actualOptions;
		if (X.isSsr() || !e.interactivity.events.onHover.parallax.enable) return;
		const i = this.particle,
			o = e.interactivity.events.onHover.parallax.force,
			s = t.interactivity.mouse.position;
		if (!s) return;
		const n = t.canvas.size.width / 2,
			a = t.canvas.size.height / 2,
			r = e.interactivity.events.onHover.parallax.smooth,
			l = i.getRadius() / o,
			c = (s.x - n) * l,
			d = (s.y - a) * l;
		(i.offset.x += (c - i.offset.x) / r), (i.offset.y += (d - i.offset.y) / r);
	}
	getProximitySpeedFactor() {
		const t = this.container,
			e = t.actualOptions;
		if (!X.isInArray(I.slow, e.interactivity.events.onHover.mode)) return 1;
		const i = this.container.interactivity.mouse.position;
		if (!i) return 1;
		const o = this.particle.getPosition(),
			s = T.getDistance(i, o),
			n = t.retina.slowModeRadius;
		return s > n ? 1 : (s / n || 0) / e.interactivity.modes.slow.factor;
	}
}
class ge {
	constructor(t, e, i, o) {
		var s, n, a, r, l, c, d, h, u;
		(this.id = t),
			(this.container = e),
			(this.links = []),
			(this.fill = !0),
			(this.close = !0),
			(this.lastPathTime = 0),
			(this.destroyed = !1),
			(this.unbreakable = !1),
			(this.splitCount = 0),
			(this.misplaced = !1),
			(this.loops = { opacity: 0, size: 0 });
		const v = e.retina.pixelRatio,
			p = e.actualOptions,
			y = new ye();
		y.load(p.particles);
		const f = y.shape.type,
			m = y.reduceDuplicates;
		if (
			((this.shape = f instanceof Array ? X.itemFromArray(f, this.id, m) : f),
			null == o ? void 0 : o.shape)
		) {
			if (o.shape.type) {
				const t = o.shape.type;
				this.shape = t instanceof Array ? X.itemFromArray(t, this.id, m) : t;
			}
			const t = new Ut();
			if ((t.load(o.shape), this.shape)) {
				const e = t.options[this.shape];
				e &&
					(this.shapeData = X.deepExtend(
						{},
						e instanceof Array ? X.itemFromArray(e, this.id, m) : e
					));
			}
		} else {
			const t = y.shape.options[this.shape];
			t &&
				(this.shapeData = X.deepExtend(
					{},
					t instanceof Array ? X.itemFromArray(t, this.id, m) : t
				));
		}
		void 0 !== o && y.load(o),
			void 0 !== (null === (s = this.shapeData) || void 0 === s ? void 0 : s.particles) &&
				y.load(null === (n = this.shapeData) || void 0 === n ? void 0 : n.particles),
			(this.fill =
				null !== (r = null === (a = this.shapeData) || void 0 === a ? void 0 : a.fill) &&
				void 0 !== r
					? r
					: this.fill),
			(this.close =
				null !== (c = null === (l = this.shapeData) || void 0 === l ? void 0 : l.close) &&
				void 0 !== c
					? c
					: this.close),
			(this.options = y),
			(this.pathDelay = 1e3 * T.getValue(this.options.move.path.delay)),
			e.retina.initParticle(this);
		const g = this.options.color,
			b = this.options.size,
			w = T.getValue(b) * e.retina.pixelRatio,
			x = 'boolean' == typeof b.random ? b.random : b.random.enable;
		(this.size = { value: w }),
			(this.direction = this.options.move.direction),
			(this.bubble = { inRange: !1 }),
			(this.initialVelocity = this.calculateVelocity()),
			(this.velocity = this.initialVelocity.copy());
		const k = this.options.rotate;
		this.rotate = { value: (T.getRangeValue(k.value) * Math.PI) / 180 };
		let P = k.direction;
		switch (
			(P === C.random && (P = Math.floor(2 * Math.random()) > 0 ? C.counterClockwise : C.clockwise),
			P)
		) {
			case C.counterClockwise:
			case 'counterClockwise':
				this.rotate.status = _.decreasing;
				break;
			case C.clockwise:
				this.rotate.status = _.increasing;
		}
		const M = this.options.rotate.animation;
		M.enable &&
			((this.rotate.velocity = (M.speed / 360) * e.retina.reduceFactor),
			M.sync || (this.rotate.velocity *= Math.random()));
		const R = this.options.size.animation;
		if (R.enable) {
			if (((this.size.status = _.increasing), !x))
				switch (R.startValue) {
					case W.min:
						this.size.value = R.minimumValue * v;
						break;
					case W.random:
						this.size.value = T.randomInRange(T.setRangeValue(R.minimumValue * v, this.size.value));
						break;
					case W.max:
					default:
						this.size.status = _.decreasing;
				}
			(this.size.velocity =
				((null !== (d = this.sizeAnimationSpeed) && void 0 !== d
					? d
					: e.retina.sizeAnimationSpeed) /
					100) *
				e.retina.reduceFactor),
				R.sync || (this.size.velocity *= Math.random());
		}
		const S = K.colorToHsl(g, this.id, m);
		if (S) {
			this.color = { h: { value: S.h }, s: { value: S.s }, l: { value: S.l } };
			const t = this.options.color.animation;
			this.setColorAnimation(t.h, this.color.h),
				this.setColorAnimation(t.s, this.color.s),
				this.setColorAnimation(t.l, this.color.l);
		}
		(this.position = this.calcPosition(this.container, i)),
			(this.initialPosition = this.position.copy()),
			(this.offset = A.create(0, 0));
		const z = this.options.opacity,
			E = 'boolean' == typeof z.random ? z.random : z.random.enable;
		this.opacity = { value: T.getValue(z) };
		const D = z.animation;
		if (D.enable) {
			if (((this.opacity.status = _.increasing), !E))
				switch (D.startValue) {
					case W.min:
						this.opacity.value = D.minimumValue;
						break;
					case W.random:
						this.opacity.value = T.randomInRange(
							T.setRangeValue(D.minimumValue, this.opacity.value)
						);
						break;
					case W.max:
					default:
						this.opacity.status = _.decreasing;
				}
			(this.opacity.velocity = (D.speed / 100) * e.retina.reduceFactor),
				D.sync || (this.opacity.velocity *= Math.random());
		}
		this.sides = 24;
		let O = e.drawers.get(this.shape);
		O || ((O = ut.getShapeDrawer(this.shape)), O && e.drawers.set(this.shape, O));
		const I = null == O ? void 0 : O.getSidesCount;
		I && (this.sides = I(this));
		const F = this.loadImageShape(e, O);
		F && ((this.image = F.image), (this.fill = F.fill), (this.close = F.close)),
			(this.stroke =
				this.options.stroke instanceof Array
					? X.itemFromArray(this.options.stroke, this.id, m)
					: this.options.stroke),
			(this.strokeWidth = this.stroke.width * e.retina.pixelRatio);
		const L =
			null !== (h = K.colorToHsl(this.stroke.color)) && void 0 !== h ? h : this.getFillColor();
		if (L) {
			this.strokeColor = { h: { value: L.h }, s: { value: L.s }, l: { value: L.l } };
			const t = null === (u = this.stroke.color) || void 0 === u ? void 0 : u.animation;
			t &&
				this.strokeColor &&
				(this.setColorAnimation(t.h, this.strokeColor.h),
				this.setColorAnimation(t.s, this.strokeColor.s),
				this.setColorAnimation(t.l, this.strokeColor.l));
		}
		const V = y.life;
		(this.lifeDelay = e.retina.reduceFactor
			? ((T.getValue(V.delay) * (V.delay.sync ? 1 : Math.random())) / e.retina.reduceFactor) * 1e3
			: 0),
			(this.lifeDelayTime = 0),
			(this.lifeDuration = e.retina.reduceFactor
				? ((T.getValue(V.duration) * (V.duration.sync ? 1 : Math.random())) /
						e.retina.reduceFactor) *
				  1e3
				: 0),
			(this.lifeTime = 0),
			(this.livesRemaining = y.life.count),
			(this.spawning = this.lifeDelay > 0),
			this.lifeDuration <= 0 && (this.lifeDuration = -1),
			this.livesRemaining <= 0 && (this.livesRemaining = -1),
			(this.shadowColor = K.colorToRgb(this.options.shadow.color)),
			(this.updater = new St(e, this)),
			(this.infecter = new fe(e)),
			(this.mover = new me(e, this)),
			O && O.particleInit && O.particleInit(e, this);
	}
	move(t) {
		this.mover.move(t);
	}
	update(t) {
		this.updater.update(t);
	}
	draw(t) {
		this.container.canvas.drawParticle(this, t);
	}
	getPosition() {
		return this.position.add(this.offset);
	}
	getRadius() {
		return this.bubble.radius || this.size.value;
	}
	getMass() {
		const t = this.getRadius();
		return (Math.pow(t, 2) * Math.PI) / 2;
	}
	getFillColor() {
		var t;
		return null !== (t = this.bubble.color) && void 0 !== t ? t : K.getHslFromAnimation(this.color);
	}
	getStrokeColor() {
		var t, e;
		return null !==
			(e =
				null !== (t = this.bubble.color) && void 0 !== t
					? t
					: K.getHslFromAnimation(this.strokeColor)) && void 0 !== e
			? e
			: this.getFillColor();
	}
	destroy(t) {
		if (((this.destroyed = !0), (this.bubble.inRange = !1), (this.links = []), !this.unbreakable)) {
			(this.destroyed = !0), (this.bubble.inRange = !1);
			for (const [, e] of this.container.plugins)
				e.particleDestroyed && e.particleDestroyed(this, t);
			t || (this.options.destroy.mode === D.split && this.split());
		}
	}
	reset() {
		(this.loops.opacity = 0), (this.loops.size = 0);
	}
	split() {
		const t = this.options.destroy.split;
		if (t.count >= 0 && this.splitCount++ > t.count) return;
		const e = T.getRangeValue(t.rate.value);
		for (let i = 0; i < e; i++) this.container.particles.addSplitParticle(this);
	}
	setColorAnimation(t, e) {
		if (t.enable) {
			if (((e.velocity = (t.speed / 100) * this.container.retina.reduceFactor), t.sync)) return;
			(e.status = _.increasing),
				(e.velocity *= Math.random()),
				e.value && (e.value *= Math.random());
		} else e.velocity = 0;
	}
	calcPosition(t, e, i = 0) {
		var o, s;
		for (const [, r] of t.plugins) {
			const t = void 0 !== r.particlePosition ? r.particlePosition(e, this) : void 0;
			if (void 0 !== t) return A.create(t.x, t.y);
		}
		const n = A.create(
				null !== (o = null == e ? void 0 : e.x) && void 0 !== o
					? o
					: Math.random() * t.canvas.size.width,
				null !== (s = null == e ? void 0 : e.y) && void 0 !== s
					? s
					: Math.random() * t.canvas.size.height
			),
			a = this.options.move.outMode;
		return (
			(X.isInArray(a, L.bounce) || X.isInArray(a, L.bounceHorizontal)) &&
				(n.x > t.canvas.size.width - 2 * this.size.value
					? (n.x -= this.size.value)
					: n.x < 2 * this.size.value && (n.x += this.size.value)),
			(X.isInArray(a, L.bounce) || X.isInArray(a, L.bounceVertical)) &&
				(n.y > t.canvas.size.height - 2 * this.size.value
					? (n.y -= this.size.value)
					: n.y < 2 * this.size.value && (n.y += this.size.value)),
			this.checkOverlap(n, i) ? this.calcPosition(t, void 0, i + 1) : n
		);
	}
	checkOverlap(t, e = 0) {
		const i = this.options.collisions.overlap;
		if (!i.enable) {
			const o = i.retries;
			if (o >= 0 && e > o) throw new Error("Particle is overlapping and can't be placed");
			let s = !1;
			for (const e of this.container.particles.array)
				if (T.getDistance(t, e.position) < this.size.value + e.size.value) {
					s = !0;
					break;
				}
			return s;
		}
		return !1;
	}
	calculateVelocity() {
		const t = T.getParticleBaseVelocity(this.direction).copy(),
			e = this.options.move;
		let i,
			o = Math.PI / 4;
		'number' == typeof e.angle
			? (i = (Math.PI / 180) * e.angle)
			: ((i = (Math.PI / 180) * e.angle.value), (o = (Math.PI / 180) * e.angle.offset));
		const s = {
			left: Math.sin(o + i / 2) - Math.sin(o - i / 2),
			right: Math.cos(o + i / 2) - Math.cos(o - i / 2)
		};
		return (
			(e.straight && !e.random) ||
				((t.x += T.randomInRange(T.setRangeValue(s.left, s.right)) / 2),
				(t.y += T.randomInRange(T.setRangeValue(s.left, s.right)) / 2)),
			t
		);
	}
	loadImageShape(t, e) {
		var i, o, s, n, a;
		if (this.shape !== $.image && this.shape !== $.images) return;
		const r = e.getImages(t).images,
			l = this.shapeData,
			c = null !== (i = r.find((t) => t.source === l.src)) && void 0 !== i ? i : r[0],
			d = this.getFillColor();
		let h;
		if (c) {
			if (void 0 !== c.svgData && l.replaceColor && d) {
				const t = K.replaceColorSvg(c, d, this.opacity.value),
					e = new Blob([t], { type: 'image/svg+xml' }),
					i = URL || window.URL || window.webkitURL || window,
					s = i.createObjectURL(e),
					n = new Image();
				(h = {
					data: c,
					loaded: !1,
					ratio: l.width / l.height,
					replaceColor: null !== (o = l.replaceColor) && void 0 !== o ? o : l.replace_color,
					source: l.src
				}),
					n.addEventListener('load', () => {
						this.image && ((this.image.loaded = !0), (c.element = n)), i.revokeObjectURL(s);
					}),
					n.addEventListener('error', () => {
						i.revokeObjectURL(s),
							X.loadImage(l.src).then((t) => {
								this.image && t && ((c.element = t.element), (this.image.loaded = !0));
							});
					}),
					(n.src = s);
			} else
				h = {
					data: c,
					loaded: !0,
					ratio: l.width / l.height,
					replaceColor: null !== (s = l.replaceColor) && void 0 !== s ? s : l.replace_color,
					source: l.src
				};
			return (
				h.ratio || (h.ratio = 1),
				{
					image: h,
					fill: null !== (n = l.fill) && void 0 !== n ? n : this.fill,
					close: null !== (a = l.close) && void 0 !== a ? a : this.close
				}
			);
		}
	}
}
class be {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.interactivity.mouse,
			i = t.actualOptions.interactivity.events;
		if (!i.onHover.enable || !e.position) return !1;
		const o = i.onHover.mode;
		return X.isInArray(I.grab, o);
	}
	reset() {}
	interact() {
		var t;
		const e = this.container,
			i = e.actualOptions.interactivity;
		if (i.events.onHover.enable && e.interactivity.status === Q.mouseMoveEvent) {
			const o = e.interactivity.mouse.position;
			if (void 0 === o) return;
			const s = e.retina.grabModeDistance,
				n = e.particles.quadTree.queryCircle(o, s);
			for (const a of n) {
				const n = a.getPosition(),
					r = T.getDistance(n, o);
				if (r <= s) {
					const n = i.modes.grab.links,
						l = n.opacity,
						c = l - (r * l) / s;
					if (c > 0) {
						const i = null !== (t = n.color) && void 0 !== t ? t : a.options.links.color;
						if (!e.particles.grabLineColor) {
							const t = e.actualOptions.interactivity.modes.grab.links;
							e.particles.grabLineColor = K.getLinkRandomColor(i, t.blink, t.consent);
						}
						const s = K.getLinkColor(a, void 0, e.particles.grabLineColor);
						if (void 0 === s) return;
						e.canvas.drawGrabLine(a, s, c, o);
					}
				}
			}
		}
	}
}
class we {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse,
			o = e.interactivity.events,
			s = o.onDiv,
			n = X.isDivModeEnabled(O.repulse, s);
		if (!(n || (o.onHover.enable && i.position) || (o.onClick.enable && i.clickPosition)))
			return !1;
		const a = o.onHover.mode,
			r = o.onClick.mode;
		return X.isInArray(I.repulse, a) || X.isInArray(E.repulse, r) || n;
	}
	reset() {}
	interact() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.status === Q.mouseMoveEvent,
			o = e.interactivity.events,
			s = o.onHover.enable,
			n = o.onHover.mode,
			a = o.onClick.enable,
			r = o.onClick.mode,
			l = o.onDiv;
		i && s && X.isInArray(I.repulse, n)
			? this.hoverRepulse()
			: a && X.isInArray(E.repulse, r)
			? this.clickRepulse()
			: X.divModeExecute(O.repulse, l, (t, e) => this.singleSelectorRepulse(t, e));
	}
	singleSelectorRepulse(t, e) {
		const i = this.container,
			o = document.querySelectorAll(t);
		o.length &&
			o.forEach((t) => {
				const o = t,
					s = i.retina.pixelRatio,
					n = {
						x: (o.offsetLeft + o.offsetWidth / 2) * s,
						y: (o.offsetTop + o.offsetHeight / 2) * s
					},
					a = (o.offsetWidth / 2) * s,
					r =
						e.type === G.circle
							? new ot(n.x, n.y, a)
							: new st(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
					l = i.actualOptions.interactivity.modes.repulse.divs,
					c = X.divMode(l, o);
				this.processRepulse(n, a, r, c);
			});
	}
	hoverRepulse() {
		const t = this.container,
			e = t.interactivity.mouse.position;
		if (!e) return;
		const i = t.retina.repulseModeDistance;
		this.processRepulse(e, i, new ot(e.x, e.y, i));
	}
	processRepulse(t, e, i, o) {
		var s;
		const n = this.container,
			a = n.particles.quadTree.query(i);
		for (const r of a) {
			const { dx: i, dy: a, distance: l } = T.getDistances(r.position, t),
				c = { x: i / l, y: a / l },
				d =
					100 *
					(null !== (s = null == o ? void 0 : o.speed) && void 0 !== s
						? s
						: n.actualOptions.interactivity.modes.repulse.speed),
				h = T.clamp((1 - Math.pow(l / e, 2)) * d, 0, 50);
			(r.position.x += c.x * h), (r.position.y += c.y * h);
		}
	}
	clickRepulse() {
		const t = this.container;
		if (
			(t.repulse.finish ||
				(t.repulse.count || (t.repulse.count = 0),
				t.repulse.count++,
				t.repulse.count === t.particles.count && (t.repulse.finish = !0)),
			t.repulse.clicking)
		) {
			const e = t.retina.repulseModeDistance,
				i = Math.pow(e / 6, 3),
				o = t.interactivity.mouse.clickPosition;
			if (void 0 === o) return;
			const s = new ot(o.x, o.y, i),
				n = t.particles.quadTree.query(s);
			for (const a of n) {
				const { dx: e, dy: s, distance: n } = T.getDistances(o, a.position),
					r = n * n;
				if (r <= i) {
					t.repulse.particles.push(a);
					const o = t.actualOptions.interactivity.modes.repulse.speed,
						n = A.create(e, s);
					(n.length = (-i * o) / r), a.velocity.setTo(n);
				}
			}
		} else if (!1 === t.repulse.clicking) {
			for (const e of t.repulse.particles) e.velocity.setTo(e.initialVelocity);
			t.repulse.particles = [];
		}
	}
}
function xe(t, e, i, o) {
	if (e > i) {
		const s = t + (e - i) * o;
		return T.clamp(s, t, e);
	}
	if (e < i) {
		const s = t - (i - e) * o;
		return T.clamp(s, e, t);
	}
}
class ke {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse,
			o = e.interactivity.events,
			s = o.onDiv,
			n = X.isDivModeEnabled(O.bubble, s);
		if (!(n || (o.onHover.enable && i.position) || (o.onClick.enable && i.clickPosition)))
			return !1;
		const a = o.onHover.mode,
			r = o.onClick.mode;
		return X.isInArray(I.bubble, a) || X.isInArray(E.bubble, r) || n;
	}
	reset(t, e) {
		(t.bubble.inRange && !e) ||
			(delete t.bubble.div, delete t.bubble.opacity, delete t.bubble.radius, delete t.bubble.color);
	}
	interact() {
		const t = this.container.actualOptions.interactivity.events,
			e = t.onHover,
			i = t.onClick,
			o = e.enable,
			s = e.mode,
			n = i.enable,
			a = i.mode,
			r = t.onDiv;
		o && X.isInArray(I.bubble, s)
			? this.hoverBubble()
			: n && X.isInArray(E.bubble, a)
			? this.clickBubble()
			: X.divModeExecute(O.bubble, r, (t, e) => this.singleSelectorHover(t, e));
	}
	singleSelectorHover(t, e) {
		const i = this.container,
			o = document.querySelectorAll(t);
		o.length &&
			o.forEach((t) => {
				const o = t,
					s = i.retina.pixelRatio,
					n = {
						x: (o.offsetLeft + o.offsetWidth / 2) * s,
						y: (o.offsetTop + o.offsetHeight / 2) * s
					},
					a = (o.offsetWidth / 2) * s,
					r =
						e.type === G.circle
							? new ot(n.x, n.y, a)
							: new st(o.offsetLeft * s, o.offsetTop * s, o.offsetWidth * s, o.offsetHeight * s),
					l = i.particles.quadTree.query(r);
				for (const e of l) {
					if (!r.contains(e.getPosition())) continue;
					e.bubble.inRange = !0;
					const t = i.actualOptions.interactivity.modes.bubble.divs,
						s = X.divMode(t, o);
					(e.bubble.div && e.bubble.div === o) || (this.reset(e, !0), (e.bubble.div = o)),
						this.hoverBubbleSize(e, 1, s),
						this.hoverBubbleOpacity(e, 1, s),
						this.hoverBubbleColor(e, s);
				}
			});
	}
	process(t, e, i, o) {
		const s = this.container,
			n = o.bubbleObj.optValue;
		if (void 0 === n) return;
		const a = s.actualOptions.interactivity.modes.bubble.duration,
			r = s.retina.bubbleModeDistance,
			l = o.particlesObj.optValue,
			c = o.bubbleObj.value,
			d = o.particlesObj.value || 0,
			h = o.type;
		if (n !== l)
			if (s.bubble.durationEnd)
				c && (h === B.size && delete t.bubble.radius, h === B.opacity && delete t.bubble.opacity);
			else if (e <= r) {
				if ((null != c ? c : d) !== n) {
					const e = d - (i * (d - n)) / a;
					h === B.size && (t.bubble.radius = e), h === B.opacity && (t.bubble.opacity = e);
				}
			} else h === B.size && delete t.bubble.radius, h === B.opacity && delete t.bubble.opacity;
	}
	clickBubble() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse.clickPosition;
		if (void 0 === i) return;
		const o = t.retina.bubbleModeDistance,
			s = t.particles.quadTree.queryCircle(i, o);
		for (const n of s) {
			if (!t.bubble.clicking) continue;
			n.bubble.inRange = !t.bubble.durationEnd;
			const o = n.getPosition(),
				s = T.getDistance(o, i),
				a = (new Date().getTime() - (t.interactivity.mouse.clickTime || 0)) / 1e3;
			a > e.interactivity.modes.bubble.duration && (t.bubble.durationEnd = !0),
				a > 2 * e.interactivity.modes.bubble.duration &&
					((t.bubble.clicking = !1), (t.bubble.durationEnd = !1));
			const r = {
				bubbleObj: { optValue: t.retina.bubbleModeSize, value: n.bubble.radius },
				particlesObj: {
					optValue: T.getRangeMax(n.options.size.value) * t.retina.pixelRatio,
					value: n.size.value
				},
				type: B.size
			};
			this.process(n, s, a, r);
			const l = {
				bubbleObj: { optValue: e.interactivity.modes.bubble.opacity, value: n.bubble.opacity },
				particlesObj: { optValue: T.getRangeMax(n.options.opacity.value), value: n.opacity.value },
				type: B.opacity
			};
			this.process(n, s, a, l),
				t.bubble.durationEnd
					? delete n.bubble.color
					: s <= t.retina.bubbleModeDistance
					? this.hoverBubbleColor(n)
					: delete n.bubble.color;
		}
	}
	hoverBubble() {
		const t = this.container,
			e = t.interactivity.mouse.position;
		if (void 0 === e) return;
		const i = t.retina.bubbleModeDistance,
			o = t.particles.quadTree.queryCircle(e, i);
		for (const s of o) {
			s.bubble.inRange = !0;
			const o = s.getPosition(),
				n = T.getDistance(o, e),
				a = 1 - n / i;
			n <= i
				? a >= 0 &&
				  t.interactivity.status === Q.mouseMoveEvent &&
				  (this.hoverBubbleSize(s, a), this.hoverBubbleOpacity(s, a), this.hoverBubbleColor(s))
				: this.reset(s),
				t.interactivity.status === Q.mouseLeaveEvent && this.reset(s);
		}
	}
	hoverBubbleSize(t, e, i) {
		const o = this.container,
			s = (null == i ? void 0 : i.size) ? i.size * o.retina.pixelRatio : o.retina.bubbleModeSize;
		if (void 0 === s) return;
		const n = T.getRangeMax(t.options.size.value) * o.retina.pixelRatio,
			a = xe(t.size.value, s, n, e);
		void 0 !== a && (t.bubble.radius = a);
	}
	hoverBubbleOpacity(t, e, i) {
		var o;
		const s = this.container.actualOptions,
			n =
				null !== (o = null == i ? void 0 : i.opacity) && void 0 !== o
					? o
					: s.interactivity.modes.bubble.opacity;
		if (void 0 === n) return;
		const a = t.options.opacity.value,
			r = xe(t.opacity.value, n, T.getRangeMax(a), e);
		void 0 !== r && (t.bubble.opacity = r);
	}
	hoverBubbleColor(t, e) {
		var i;
		const o = this.container.actualOptions;
		if (void 0 === t.bubble.color) {
			const s =
				null !== (i = null == e ? void 0 : e.color) && void 0 !== i
					? i
					: o.interactivity.modes.bubble.color;
			if (void 0 === s) return;
			const n = s instanceof Array ? X.itemFromArray(s) : s;
			t.bubble.color = K.colorToHsl(n);
		}
	}
}
class Pe {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.interactivity.mouse,
			i = t.actualOptions.interactivity.events;
		if (!i.onHover.enable || !e.position) return !1;
		const o = i.onHover.mode;
		return X.isInArray(I.connect, o);
	}
	reset() {}
	interact() {
		const t = this.container;
		if (
			t.actualOptions.interactivity.events.onHover.enable &&
			'mousemove' === t.interactivity.status
		) {
			const e = t.interactivity.mouse.position;
			if (!e) return;
			const i = Math.abs(t.retina.connectModeRadius),
				o = t.particles.quadTree.queryCircle(e, i);
			let s = 0;
			for (const n of o) {
				const e = n.getPosition();
				for (const i of o.slice(s + 1)) {
					const o = i.getPosition(),
						s = Math.abs(t.retina.connectModeDistance),
						a = Math.abs(e.x - o.x),
						r = Math.abs(e.y - o.y);
					a < s && r < s && t.canvas.drawConnectLine(n, i);
				}
				++s;
			}
		}
	}
}
class Me {
	constructor(t) {
		this.container = t;
	}
	isEnabled(t) {
		return t.options.links.enable;
	}
	reset() {}
	interact(t) {
		var e;
		const i = this.container,
			o = t.options.links,
			s = o.opacity,
			n = null !== (e = t.linksDistance) && void 0 !== e ? e : i.retina.linksDistance,
			a = i.canvas.size,
			r = o.warp,
			l = t.getPosition(),
			c = r ? new nt(l.x, l.y, n, a) : new ot(l.x, l.y, n),
			d = i.particles.quadTree.query(c);
		for (const h of d) {
			const e = h.options.links;
			if (t === h || !e.enable || o.id !== e.id || h.spawning || h.destroyed) continue;
			const c = h.getPosition();
			let d = T.getDistance(l, c);
			if (r && d > n) {
				const t = { x: c.x - a.width, y: c.y };
				if (((d = T.getDistance(l, t)), d > n)) {
					const t = { x: c.x - a.width, y: c.y - a.height };
					if (((d = T.getDistance(l, t)), d > n)) {
						const t = { x: c.x, y: c.y - a.height };
						d = T.getDistance(l, t);
					}
				}
			}
			if (d > n) return;
			const u = (1 - d / n) * s,
				v = t.options.links;
			let p = void 0 !== v.id ? i.particles.linksColors.get(v.id) : i.particles.linksColor;
			if (!p) {
				const t = v.color;
				(p = K.getLinkRandomColor(t, v.blink, v.consent)),
					void 0 !== v.id ? i.particles.linksColors.set(v.id, p) : (i.particles.linksColor = p);
			}
			-1 === h.links.map((t) => t.destination).indexOf(t) &&
				-1 === t.links.map((t) => t.destination).indexOf(h) &&
				t.links.push({ destination: h, opacity: u });
		}
	}
}
class Re {
	constructor(t) {
		this.container = t;
	}
	interact(t) {
		var e;
		const i = this.container,
			o = null !== (e = t.linksDistance) && void 0 !== e ? e : i.retina.linksDistance,
			s = t.getPosition(),
			n = i.particles.quadTree.queryCircle(s, o);
		for (const a of n) {
			if (t === a || !a.options.move.attract.enable || a.destroyed || a.spawning) continue;
			const e = a.getPosition(),
				{ dx: i, dy: o } = T.getDistances(s, e),
				n = t.options.move.attract.rotate,
				r = i / (1e3 * n.x),
				l = o / (1e3 * n.y);
			(t.velocity.x -= r), (t.velocity.y -= l), (a.velocity.x += r), (a.velocity.y += l);
		}
	}
	isEnabled(t) {
		return t.options.move.attract.enable;
	}
	reset() {}
}
class Se {
	constructor(t) {
		this.container = t;
	}
	isEnabled(t) {
		return t.options.collisions.enable;
	}
	reset() {}
	interact(t) {
		const e = this.container,
			i = t.getPosition(),
			o = e.particles.quadTree.queryCircle(i, 2 * t.getRadius());
		for (const s of o) {
			if (
				t === s ||
				!s.options.collisions.enable ||
				t.options.collisions.mode !== s.options.collisions.mode ||
				s.destroyed ||
				s.spawning
			)
				continue;
			const e = s.getPosition();
			T.getDistance(i, e) <= t.getRadius() + s.getRadius() && this.resolveCollision(t, s);
		}
	}
	resolveCollision(t, e) {
		switch (t.options.collisions.mode) {
			case F.absorb:
				this.absorb(t, e);
				break;
			case F.bounce:
				(i = t),
					(o = e),
					X.circleBounce(X.circleBounceDataFromParticle(i), X.circleBounceDataFromParticle(o));
				break;
			case F.destroy:
				!(function (t, e) {
					void 0 === t.getRadius() && void 0 !== e.getRadius()
						? t.destroy()
						: void 0 !== t.getRadius() && void 0 === e.getRadius()
						? e.destroy()
						: void 0 !== t.getRadius() &&
						  void 0 !== e.getRadius() &&
						  (t.getRadius() >= e.getRadius() ? e.destroy() : t.destroy());
				})(t, e);
		}
		var i, o;
	}
	absorb(t, e) {
		const i = this.container,
			o = i.actualOptions.fpsLimit / 1e3;
		if (void 0 === t.getRadius() && void 0 !== e.getRadius()) t.destroy();
		else if (void 0 !== t.getRadius() && void 0 === e.getRadius()) e.destroy();
		else if (void 0 !== t.getRadius() && void 0 !== e.getRadius())
			if (t.getRadius() >= e.getRadius()) {
				const s = T.clamp(t.getRadius() / e.getRadius(), 0, e.getRadius()) * o;
				(t.size.value += s),
					(e.size.value -= s),
					e.getRadius() <= i.retina.pixelRatio && ((e.size.value = 0), e.destroy());
			} else {
				const s = T.clamp(e.getRadius() / t.getRadius(), 0, t.getRadius()) * o;
				(t.size.value -= s),
					(e.size.value += s),
					t.getRadius() <= i.retina.pixelRatio && ((t.size.value = 0), t.destroy());
			}
	}
}
class Ce {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		return this.container.actualOptions.infection.enable;
	}
	reset() {}
	interact(t, e) {
		var i, o;
		const s = t.infecter;
		if ((s.updateInfection(e.value), void 0 === s.infectionStage)) return;
		const n = this.container,
			a = n.actualOptions.infection;
		if (!a.enable || a.stages.length < 1) return;
		const r = a.stages[s.infectionStage],
			l = n.retina.pixelRatio,
			c = 2 * t.getRadius() + r.radius * l,
			d = t.getPosition(),
			h = null !== (i = r.infectedStage) && void 0 !== i ? i : s.infectionStage,
			u = n.particles.quadTree.queryCircle(d, c),
			v = r.rate,
			p = u.length;
		for (const y of u) {
			if (
				y === t ||
				y.destroyed ||
				y.spawning ||
				(void 0 !== y.infecter.infectionStage && y.infecter.infectionStage === s.infectionStage)
			)
				continue;
			const e = y.infecter;
			if (Math.random() < v / p)
				if (void 0 === e.infectionStage) e.startInfection(h);
				else if (e.infectionStage < s.infectionStage) e.updateInfectionStage(h);
				else if (e.infectionStage > s.infectionStage) {
					const t = a.stages[e.infectionStage],
						i =
							null !== (o = null == t ? void 0 : t.infectedStage) && void 0 !== o
								? o
								: e.infectionStage;
					s.updateInfectionStage(i);
				}
		}
	}
}
class ze {
	constructor(t) {
		(this.container = t), (this.delay = 0);
	}
	interact(t) {
		if (!this.container.retina.reduceFactor) return;
		const e = this.container,
			i = e.actualOptions.interactivity.modes.trail,
			o = (1e3 * i.delay) / this.container.retina.reduceFactor;
		this.delay < o && (this.delay += t.value),
			this.delay >= o &&
				(e.particles.push(i.quantity, e.interactivity.mouse, i.particles), (this.delay -= o));
	}
	isEnabled() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse,
			o = e.interactivity.events;
		return (
			(i.clicking && i.inside && !!i.position && X.isInArray(E.trail, o.onClick.mode)) ||
			(i.inside && !!i.position && X.isInArray(I.trail, o.onHover.mode))
		);
	}
	reset() {}
}
class Ae {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse,
			o = e.interactivity.events;
		if (!((o.onHover.enable && i.position) || (o.onClick.enable && i.clickPosition))) return !1;
		const s = o.onHover.mode,
			n = o.onClick.mode;
		return X.isInArray(I.attract, s) || X.isInArray(E.attract, n);
	}
	reset() {}
	interact() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.status === Q.mouseMoveEvent,
			o = e.interactivity.events,
			s = o.onHover.enable,
			n = o.onHover.mode,
			a = o.onClick.enable,
			r = o.onClick.mode;
		i && s && X.isInArray(I.attract, n)
			? this.hoverAttract()
			: a && X.isInArray(E.attract, r) && this.clickAttract();
	}
	hoverAttract() {
		const t = this.container,
			e = t.interactivity.mouse.position;
		if (!e) return;
		const i = t.retina.attractModeDistance;
		this.processAttract(e, i, new ot(e.x, e.y, i));
	}
	processAttract(t, e, i) {
		const o = this.container,
			s = o.particles.quadTree.query(i);
		for (const n of s) {
			const { dx: i, dy: s, distance: a } = T.getDistances(n.position, t),
				r = { x: i / a, y: s / a },
				l = o.actualOptions.interactivity.modes.attract.speed,
				c = T.clamp((1 - Math.pow(a / e, 2)) * l, 0, 50);
			(n.position.x -= r.x * c), (n.position.y -= r.y * c);
		}
	}
	clickAttract() {
		const t = this.container;
		if (
			(t.attract.finish ||
				(t.attract.count || (t.attract.count = 0),
				t.attract.count++,
				t.attract.count === t.particles.count && (t.attract.finish = !0)),
			t.attract.clicking)
		) {
			const e = t.interactivity.mouse.clickPosition;
			if (!e) return;
			const i = t.retina.attractModeDistance;
			this.processAttract(e, i, new ot(e.x, e.y, i));
		} else !1 === t.attract.clicking && (t.attract.particles = []);
	}
}
class Te {
	constructor(t) {
		this.container = t;
	}
	interact(t) {
		const e = this.container;
		if (
			e.actualOptions.interactivity.events.onHover.enable &&
			'mousemove' === e.interactivity.status
		) {
			const i = this.container.interactivity.mouse.position;
			i && e.canvas.drawParticleShadow(t, i);
		}
	}
	isEnabled() {
		const t = this.container,
			e = t.interactivity.mouse,
			i = t.actualOptions.interactivity.events;
		if (!i.onHover.enable || !e.position) return !1;
		const o = i.onHover.mode;
		return X.isInArray(I.light, o);
	}
	reset() {}
}
class Ee {
	constructor(t) {
		this.container = t;
	}
	interact() {
		const t = this.container;
		if (
			t.actualOptions.interactivity.events.onHover.enable &&
			'mousemove' === t.interactivity.status
		) {
			const e = t.interactivity.mouse.position;
			if (!e) return;
			t.canvas.drawLight(e);
		}
	}
	isEnabled() {
		const t = this.container,
			e = t.interactivity.mouse,
			i = t.actualOptions.interactivity.events;
		if (!i.onHover.enable || !e.position) return !1;
		const o = i.onHover.mode;
		return X.isInArray(I.light, o);
	}
	reset() {}
}
class De {
	constructor(t) {
		this.container = t;
	}
	isEnabled() {
		const t = this.container,
			e = t.actualOptions,
			i = t.interactivity.mouse,
			o = e.interactivity.events,
			s = o.onDiv;
		return (
			(i.position && o.onHover.enable && X.isInArray(I.bounce, o.onHover.mode)) ||
			X.isDivModeEnabled(O.bounce, s)
		);
	}
	interact() {
		const t = this.container,
			e = t.actualOptions.interactivity.events,
			i = t.interactivity.status === Q.mouseMoveEvent,
			o = e.onHover.enable,
			s = e.onHover.mode,
			n = e.onDiv;
		i && o && X.isInArray(I.bounce, s)
			? this.processMouseBounce()
			: X.divModeExecute(O.bounce, n, (t, e) => this.singleSelectorBounce(t, e));
	}
	reset() {}
	processMouseBounce() {
		const t = this.container,
			e = 10 * t.retina.pixelRatio,
			i = t.interactivity.mouse.position,
			o = t.retina.bounceModeDistance;
		i && this.processBounce(i, o, new ot(i.x, i.y, o + e));
	}
	singleSelectorBounce(t, e) {
		const i = this.container,
			o = document.querySelectorAll(t);
		o.length &&
			o.forEach((t) => {
				const o = t,
					s = i.retina.pixelRatio,
					n = {
						x: (o.offsetLeft + o.offsetWidth / 2) * s,
						y: (o.offsetTop + o.offsetHeight / 2) * s
					},
					a = (o.offsetWidth / 2) * s,
					r = 10 * s,
					l =
						e.type === G.circle
							? new ot(n.x, n.y, a + r)
							: new st(
									o.offsetLeft * s - r,
									o.offsetTop * s - r,
									o.offsetWidth * s + 2 * r,
									o.offsetHeight * s + 2 * r
							  );
				this.processBounce(n, a, l);
			});
	}
	processBounce(t, e, i) {
		const o = this.container.particles.quadTree.query(i);
		for (const s of o)
			i instanceof ot
				? X.circleBounce(X.circleBounceDataFromParticle(s), {
						position: t,
						radius: e,
						mass: (Math.pow(e, 2) * Math.PI) / 2,
						velocity: A.create(0, 0),
						factor: { horizontal: 0, vertical: 0 }
				  })
				: i instanceof st && X.rectBounce(s, X.calculateBounds(t, e));
	}
}
class Oe {
	constructor(t) {
		(this.container = t),
			(this.externalInteractors = [
				new De(t),
				new ke(t),
				new Pe(t),
				new be(t),
				new Ee(t),
				new Ae(t),
				new we(t),
				new ze(t)
			]),
			(this.particleInteractors = [new Re(t), new Te(t), new Se(t), new Ce(t), new Me(t)]);
	}
	init() {}
	externalInteract(t) {
		for (const e of this.externalInteractors) e.isEnabled() && e.interact(t);
	}
	particlesInteract(t, e) {
		for (const i of this.externalInteractors) i.reset(t);
		for (const i of this.particleInteractors) i.isEnabled(t) && i.interact(t, e);
	}
}
class Ie {
	constructor(t) {
		(this.container = t),
			(this.nextId = 0),
			(this.array = []),
			(this.limit = 0),
			(this.linksFreq = new Map()),
			(this.trianglesFreq = new Map()),
			(this.interactionManager = new Oe(t));
		const e = this.container.canvas.size;
		(this.linksColors = new Map()),
			(this.quadTree = new pt(
				new st(-e.width / 4, -e.height / 4, (3 * e.width) / 2, (3 * e.height) / 2),
				4
			));
	}
	get count() {
		return this.array.length;
	}
	init() {
		const t = this.container,
			e = t.actualOptions;
		(this.linksFreq = new Map()), (this.trianglesFreq = new Map());
		let i = !1;
		for (const o of e.manualParticles) {
			const e = o.position
				? {
						x: (o.position.x * t.canvas.size.width) / 100,
						y: (o.position.y * t.canvas.size.height) / 100
				  }
				: void 0;
			this.addParticle(e, o.options);
		}
		for (const [, o] of t.plugins)
			if ((void 0 !== o.particlesInitialization && (i = o.particlesInitialization()), i)) break;
		if (!i) for (let o = this.count; o < e.particles.number.value; o++) this.addParticle();
		if (e.infection.enable)
			for (let o = 0; o < e.infection.infections; o++) {
				const t = this.array.filter((t) => void 0 === t.infecter.infectionStage);
				X.itemFromArray(t).infecter.startInfection(0);
			}
		this.interactionManager.init(), t.pathGenerator.init();
	}
	redraw() {
		this.clear(), this.init(), this.draw({ value: 0, factor: 0 });
	}
	removeAt(t, e, i) {
		if (t >= 0 && t <= this.count)
			for (const o of this.array.splice(t, null != e ? e : 1)) o.destroy(i);
	}
	remove(t, e) {
		this.removeAt(this.array.indexOf(t), void 0, e);
	}
	update(t) {
		const e = this.container,
			i = [];
		e.pathGenerator.update();
		for (const [, o] of e.plugins) void 0 !== o.update && o.update(t);
		for (const o of this.array) {
			const e = this.container.canvas.resizeFactor;
			e && ((o.position.x *= e.width), (o.position.y *= e.height)),
				o.move(t),
				o.destroyed ? i.push(o) : this.quadTree.insert(new vt(o.getPosition(), o));
		}
		for (const o of i) this.remove(o);
		this.interactionManager.externalInteract(t);
		for (const o of this.container.particles.array)
			o.update(t), o.destroyed || o.spawning || this.interactionManager.particlesInteract(o, t);
		delete e.canvas.resizeFactor;
	}
	draw(t) {
		const e = this.container;
		e.canvas.clear();
		const i = this.container.canvas.size;
		(this.quadTree = new pt(
			new st(-i.width / 4, -i.height / 4, (3 * i.width) / 2, (3 * i.height) / 2),
			4
		)),
			this.update(t);
		for (const [, o] of e.plugins) e.canvas.drawPlugin(o, t);
		for (const o of this.array) o.draw(t);
	}
	clear() {
		this.array = [];
	}
	push(t, e, i) {
		const o = this.container,
			s = o.actualOptions.particles.number.limit * o.density;
		if (((this.pushing = !0), s > 0)) {
			const e = this.count + t - s;
			e > 0 && this.removeQuantity(e);
		}
		for (let n = 0; n < t; n++) this.addParticle(null == e ? void 0 : e.position, i);
		this.pushing = !1;
	}
	addParticle(t, e) {
		return this.pushParticle(t, e);
	}
	addSplitParticle(t) {
		const e = t.options.destroy.split,
			i = new ye();
		i.load(t.options);
		const o = T.getRangeValue(e.factor.value);
		i.color.load({ value: { hsl: t.getFillColor() } }),
			'number' == typeof i.size.value
				? (i.size.value /= o)
				: ((i.size.value.min /= o), (i.size.value.max /= o)),
			i.load(e.particles);
		const s = T.setRangeValue(-t.size.value, t.size.value),
			n = { x: t.position.x + T.randomInRange(s), y: t.position.y + T.randomInRange(s) };
		return this.pushParticle(
			n,
			i,
			(e) =>
				!(
					e.size.value < 0.5 ||
					((e.velocity.length = T.randomInRange(
						T.setRangeValue(t.velocity.length, e.velocity.length)
					)),
					(e.splitCount = t.splitCount + 1),
					(e.unbreakable = !0),
					setTimeout(() => {
						e.unbreakable = !1;
					}, 500),
					0)
				)
		);
	}
	removeQuantity(t) {
		this.removeAt(0, t);
	}
	getLinkFrequency(t, e) {
		const i = `${Math.min(t.id, e.id)}_${Math.max(t.id, e.id)}`;
		let o = this.linksFreq.get(i);
		return void 0 === o && ((o = Math.random()), this.linksFreq.set(i, o)), o;
	}
	getTriangleFrequency(t, e, i) {
		let [o, s, n] = [t.id, e.id, i.id];
		o > s && ([s, o] = [o, s]), s > n && ([n, s] = [s, n]), o > n && ([n, o] = [o, n]);
		const a = `${o}_${s}_${n}`;
		let r = this.trianglesFreq.get(a);
		return void 0 === r && ((r = Math.random()), this.trianglesFreq.set(a, r)), r;
	}
	setDensity() {
		const t = this.container.actualOptions;
		this.applyDensity(t.particles);
	}
	applyDensity(t) {
		var e;
		if (!(null === (e = t.number.density) || void 0 === e ? void 0 : e.enable)) return;
		const i = t.number,
			o = this.initDensityFactor(i.density),
			s = i.value,
			n = i.limit > 0 ? i.limit : s,
			a = Math.min(s, n) * o,
			r = this.count;
		(this.limit = i.limit * o),
			r < a ? this.push(Math.abs(a - r), void 0, t) : r > a && this.removeQuantity(r - a);
	}
	initDensityFactor(t) {
		const e = this.container;
		if (!e.canvas.element || !t.enable) return 1;
		const i = e.canvas.element,
			o = e.retina.pixelRatio;
		return (i.width * i.height) / (t.factor * o * o * t.area);
	}
	pushParticle(t, e, i) {
		try {
			const o = new ge(this.nextId, this.container, t, e);
			let s = !0;
			if ((i && (s = i(o)), !s)) return;
			return this.array.push(o), this.nextId++, o;
		} catch (o) {
			return void console.warn(`error adding particle: ${o}`);
		}
	}
}
class Fe {
	constructor(t) {
		this.container = t;
	}
	init() {
		const t = this.container,
			e = t.actualOptions;
		this.pixelRatio = !e.detectRetina || X.isSsr() ? 1 : window.devicePixelRatio;
		const i = this.container.actualOptions.motion;
		if (i && (i.disable || i.reduce.value))
			if (X.isSsr() || 'undefined' == typeof matchMedia || !matchMedia) this.reduceFactor = 1;
			else {
				const e = matchMedia('(prefers-reduced-motion: reduce)');
				if (e) {
					this.handleMotionChange(e);
					const i = () => {
						this.handleMotionChange(e), t.refresh().catch(() => {});
					};
					void 0 !== e.addEventListener
						? e.addEventListener('change', i)
						: void 0 !== e.addListener && e.addListener(i);
				}
			}
		else this.reduceFactor = 1;
		const o = this.pixelRatio;
		if (t.canvas.element) {
			const e = t.canvas.element;
			(t.canvas.size.width = e.offsetWidth * o), (t.canvas.size.height = e.offsetHeight * o);
		}
		const s = e.particles;
		(this.linksDistance = s.links.distance * o),
			(this.linksWidth = s.links.width * o),
			(this.sizeAnimationSpeed = s.size.animation.speed * o);
		const n = e.interactivity.modes;
		(this.connectModeDistance = n.connect.distance * o),
			(this.connectModeRadius = n.connect.radius * o),
			(this.grabModeDistance = n.grab.distance * o),
			(this.repulseModeDistance = n.repulse.distance * o),
			(this.bounceModeDistance = n.bounce.distance * o),
			(this.attractModeDistance = n.attract.distance * o),
			(this.slowModeRadius = n.slow.radius * o),
			(this.bubbleModeDistance = n.bubble.distance * o),
			n.bubble.size && (this.bubbleModeSize = n.bubble.size * o);
	}
	initParticle(t) {
		const e = t.options,
			i = this.pixelRatio;
		(t.linksDistance = e.links.distance * i),
			(t.linksWidth = e.links.width * i),
			(t.moveDrift = T.getRangeValue(e.move.drift) * i),
			(t.moveSpeed = T.getRangeValue(e.move.speed) * i),
			(t.sizeAnimationSpeed = e.size.animation.speed * i),
			(t.maxDistance = e.move.distance * i);
	}
	handleMotionChange(t) {
		const e = this.container.actualOptions;
		if (t.matches) {
			const t = e.motion;
			this.reduceFactor = t.disable ? 0 : t.reduce.value ? 1 / t.reduce.factor : 1;
		} else this.reduceFactor = 1;
	}
}
class Le {
	constructor(t) {
		this.container = t;
	}
	nextFrame(t) {
		try {
			const e = this.container;
			if (void 0 !== e.lastFrameTime && t < e.lastFrameTime + 1e3 / e.fpsLimit)
				return void e.draw();
			const i = t - e.lastFrameTime,
				o = { value: i, factor: (60 * i) / 1e3 };
			(e.lastFrameTime = t), e.particles.draw(o), e.getAnimationStatus() && e.draw();
		} catch (e) {
			console.error('tsParticles error in animation loop', e);
		}
	}
}
class Ve {
	constructor() {
		(this.enable = !1), (this.mode = []);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.enable && (this.enable = t.enable), void 0 !== t.mode && (this.mode = t.mode));
	}
}
class He {
	constructor() {
		(this.selectors = []), (this.enable = !1), (this.mode = []), (this.type = G.circle);
	}
	get elementId() {
		return this.ids;
	}
	set elementId(t) {
		this.ids = t;
	}
	get el() {
		return this.elementId;
	}
	set el(t) {
		this.elementId = t;
	}
	get ids() {
		return this.selectors instanceof Array
			? this.selectors.map((t) => t.replace('#', ''))
			: this.selectors.replace('#', '');
	}
	set ids(t) {
		this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`;
	}
	load(t) {
		var e, i;
		if (void 0 === t) return;
		const o =
			null !== (i = null !== (e = t.ids) && void 0 !== e ? e : t.elementId) && void 0 !== i
				? i
				: t.el;
		void 0 !== o && (this.ids = o),
			void 0 !== t.selectors && (this.selectors = t.selectors),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.mode && (this.mode = t.mode),
			void 0 !== t.type && (this.type = t.type);
	}
}
class _e {
	constructor() {
		(this.enable = !1), (this.force = 2), (this.smooth = 10);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.force && (this.force = t.force),
			void 0 !== t.smooth && (this.smooth = t.smooth));
	}
}
class qe {
	constructor() {
		(this.enable = !1), (this.mode = []), (this.parallax = new _e());
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.mode && (this.mode = t.mode),
			this.parallax.load(t.parallax));
	}
}
class Be {
	constructor() {
		(this.onClick = new Ve()),
			(this.onDiv = new He()),
			(this.onHover = new qe()),
			(this.resize = !0);
	}
	get onclick() {
		return this.onClick;
	}
	set onclick(t) {
		this.onClick = t;
	}
	get ondiv() {
		return this.onDiv;
	}
	set ondiv(t) {
		this.onDiv = t;
	}
	get onhover() {
		return this.onHover;
	}
	set onhover(t) {
		this.onHover = t;
	}
	load(t) {
		var e, i, o;
		if (void 0 === t) return;
		this.onClick.load(null !== (e = t.onClick) && void 0 !== e ? e : t.onclick);
		const s = null !== (i = t.onDiv) && void 0 !== i ? i : t.ondiv;
		void 0 !== s &&
			(s instanceof Array
				? (this.onDiv = s.map((t) => {
						const e = new He();
						return e.load(t), e;
				  }))
				: ((this.onDiv = new He()), this.onDiv.load(s))),
			this.onHover.load(null !== (o = t.onHover) && void 0 !== o ? o : t.onhover),
			void 0 !== t.resize && (this.resize = t.resize);
	}
}
class $e {
	constructor() {
		(this.distance = 200), (this.duration = 0.4);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.distance && (this.distance = t.distance),
			void 0 !== t.duration && (this.duration = t.duration),
			void 0 !== t.opacity && (this.opacity = t.opacity),
			void 0 !== t.color &&
				(t.color instanceof Array
					? (this.color = t.color.map((t) => Ct.create(void 0, t)))
					: (this.color instanceof Array && (this.color = new Ct()),
					  (this.color = Ct.create(this.color, t.color)))),
			void 0 !== t.size && (this.size = t.size));
	}
}
class We extends $e {
	constructor() {
		super(), (this.selectors = []);
	}
	get ids() {
		return this.selectors instanceof Array
			? this.selectors.map((t) => t.replace('#', ''))
			: this.selectors.replace('#', '');
	}
	set ids(t) {
		this.selectors = t instanceof Array ? t.map((t) => `#${t}`) : `#${t}`;
	}
	load(t) {
		super.load(t),
			void 0 !== t &&
				(void 0 !== t.ids && (this.ids = t.ids),
				void 0 !== t.selectors && (this.selectors = t.selectors));
	}
}
class Ge extends $e {
	load(t) {
		super.load(t),
			void 0 !== t &&
				void 0 !== t.divs &&
				(t.divs instanceof Array
					? (this.divs = t.divs.map((t) => {
							const e = new We();
							return e.load(t), e;
					  }))
					: ((this.divs instanceof Array || !this.divs) && (this.divs = new We()),
					  this.divs.load(t.divs)));
	}
}
class Ne {
	constructor() {
		this.opacity = 0.5;
	}
	load(t) {
		void 0 !== t && void 0 !== t.opacity && (this.opacity = t.opacity);
	}
}
class Ue {
	constructor() {
		(this.distance = 80), (this.links = new Ne()), (this.radius = 60);
	}
	get line_linked() {
		return this.links;
	}
	set line_linked(t) {
		this.links = t;
	}
	get lineLinked() {
		return this.links;
	}
	set lineLinked(t) {
		this.links = t;
	}
	load(t) {
		var e, i;
		void 0 !== t &&
			(void 0 !== t.distance && (this.distance = t.distance),
			this.links.load(
				null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i
					? i
					: t.line_linked
			),
			void 0 !== t.radius && (this.radius = t.radius));
	}
}
class je {
	constructor() {
		(this.blink = !1), (this.consent = !1), (this.opacity = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.blink && (this.blink = t.blink),
			void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.consent && (this.consent = t.consent),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class Ye {
	constructor() {
		(this.distance = 100), (this.links = new je());
	}
	get line_linked() {
		return this.links;
	}
	set line_linked(t) {
		this.links = t;
	}
	get lineLinked() {
		return this.links;
	}
	set lineLinked(t) {
		this.links = t;
	}
	load(t) {
		var e, i;
		void 0 !== t &&
			(void 0 !== t.distance && (this.distance = t.distance),
			this.links.load(
				null !== (i = null !== (e = t.links) && void 0 !== e ? e : t.lineLinked) && void 0 !== i
					? i
					: t.line_linked
			));
	}
}
class Xe {
	constructor() {
		this.quantity = 2;
	}
	get particles_nb() {
		return this.quantity;
	}
	set particles_nb(t) {
		this.quantity = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
		void 0 !== i && (this.quantity = i);
	}
}
class Qe {
	constructor() {
		this.quantity = 4;
	}
	get particles_nb() {
		return this.quantity;
	}
	set particles_nb(t) {
		this.quantity = t;
	}
	load(t) {
		var e;
		if (void 0 === t) return;
		const i = null !== (e = t.quantity) && void 0 !== e ? e : t.particles_nb;
		void 0 !== i && (this.quantity = i);
	}
}
class Je {
	constructor() {
		(this.distance = 200), (this.duration = 0.4), (this.speed = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.distance && (this.distance = t.distance),
			void 0 !== t.duration && (this.duration = t.duration),
			void 0 !== t.speed && (this.speed = t.speed));
	}
}
class Ze extends Je {
	constructor() {
		super(), (this.selectors = []);
	}
	get ids() {
		return this.selectors instanceof Array
			? this.selectors.map((t) => t.replace('#', ''))
			: this.selectors.replace('#', '');
	}
	set ids(t) {
		this.selectors = t instanceof Array ? t.map(() => `#${t}`) : `#${t}`;
	}
	load(t) {
		super.load(t),
			void 0 !== t &&
				(void 0 !== t.ids && (this.ids = t.ids),
				void 0 !== t.selectors && (this.selectors = t.selectors));
	}
}
class Ke extends Je {
	load(t) {
		super.load(t),
			void 0 !== (null == t ? void 0 : t.divs) &&
				(t.divs instanceof Array
					? (this.divs = t.divs.map((t) => {
							const e = new Ze();
							return e.load(t), e;
					  }))
					: ((this.divs instanceof Array || !this.divs) && (this.divs = new Ze()),
					  this.divs.load(t.divs)));
	}
}
class ti {
	constructor() {
		(this.factor = 3), (this.radius = 200);
	}
	get active() {
		return !1;
	}
	set active(t) {}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.factor && (this.factor = t.factor),
			void 0 !== t.radius && (this.radius = t.radius));
	}
}
class ei {
	constructor() {
		(this.delay = 1), (this.quantity = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.delay && (this.delay = t.delay),
			void 0 !== t.quantity && (this.quantity = t.quantity),
			void 0 !== t.particles && (this.particles = X.deepExtend({}, t.particles)));
	}
}
class ii {
	constructor() {
		(this.distance = 200), (this.duration = 0.4), (this.speed = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.distance && (this.distance = t.distance),
			void 0 !== t.duration && (this.duration = t.duration),
			void 0 !== t.speed && (this.speed = t.speed));
	}
}
class oi {
	constructor() {
		(this.start = new Ct()),
			(this.stop = new Ct()),
			(this.start.value = '#ffffff'),
			(this.stop.value = '#000000');
	}
	load(t) {
		void 0 !== t &&
			((this.start = Ct.create(this.start, t.start)), (this.stop = Ct.create(this.stop, t.stop)));
	}
}
class si {
	constructor() {
		(this.gradient = new oi()), (this.radius = 1e3);
	}
	load(t) {
		void 0 !== t &&
			(this.gradient.load(t.gradient), void 0 !== t.radius && (this.radius = t.radius));
	}
}
class ni {
	constructor() {
		(this.color = new Ct()), (this.color.value = '#000000'), (this.length = 2e3);
	}
	load(t) {
		void 0 !== t &&
			((this.color = Ct.create(this.color, t.color)),
			void 0 !== t.length && (this.length = t.length));
	}
}
class ai {
	constructor() {
		(this.area = new si()), (this.shadow = new ni());
	}
	load(t) {
		void 0 !== t && (this.area.load(t.area), this.shadow.load(t.shadow));
	}
}
class ri {
	constructor() {
		this.distance = 200;
	}
	load(t) {
		t && void 0 !== t.distance && (this.distance = t.distance);
	}
}
class li {
	constructor() {
		(this.attract = new ii()),
			(this.bounce = new ri()),
			(this.bubble = new Ge()),
			(this.connect = new Ue()),
			(this.grab = new Ye()),
			(this.light = new ai()),
			(this.push = new Qe()),
			(this.remove = new Xe()),
			(this.repulse = new Ke()),
			(this.slow = new ti()),
			(this.trail = new ei());
	}
	load(t) {
		void 0 !== t &&
			(this.attract.load(t.attract),
			this.bubble.load(t.bubble),
			this.connect.load(t.connect),
			this.grab.load(t.grab),
			this.light.load(t.light),
			this.push.load(t.push),
			this.remove.load(t.remove),
			this.repulse.load(t.repulse),
			this.slow.load(t.slow),
			this.trail.load(t.trail));
	}
}
class ci {
	constructor() {
		(this.detectsOn = N.canvas), (this.events = new Be()), (this.modes = new li());
	}
	get detect_on() {
		return this.detectsOn;
	}
	set detect_on(t) {
		this.detectsOn = t;
	}
	load(t) {
		var e, i, o;
		if (void 0 === t) return;
		const s = null !== (e = t.detectsOn) && void 0 !== e ? e : t.detect_on;
		void 0 !== s && (this.detectsOn = s),
			this.events.load(t.events),
			this.modes.load(t.modes),
			!0 ===
				(null === (o = null === (i = t.modes) || void 0 === i ? void 0 : i.slow) || void 0 === o
					? void 0
					: o.active) &&
				(this.events.onHover.mode instanceof Array
					? this.events.onHover.mode.indexOf(I.slow) < 0 && this.events.onHover.mode.push(I.slow)
					: this.events.onHover.mode !== I.slow &&
					  (this.events.onHover.mode = [this.events.onHover.mode, I.slow]));
	}
}
class di {
	constructor() {
		(this.color = new Ct()), (this.opacity = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class hi {
	constructor() {
		(this.composite = 'destination-out'), (this.cover = new di()), (this.enable = !1);
	}
	load(t) {
		if (void 0 !== t) {
			if ((void 0 !== t.composite && (this.composite = t.composite), void 0 !== t.cover)) {
				const e = t.cover,
					i = 'string' == typeof t.cover ? { color: t.cover } : t.cover;
				this.cover.load(void 0 !== e.color ? e : { color: i });
			}
			void 0 !== t.enable && (this.enable = t.enable);
		}
	}
}
class ui {
	constructor() {
		(this.color = new Ct()),
			(this.color.value = ''),
			(this.image = ''),
			(this.position = ''),
			(this.repeat = ''),
			(this.size = ''),
			(this.opacity = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.image && (this.image = t.image),
			void 0 !== t.position && (this.position = t.position),
			void 0 !== t.repeat && (this.repeat = t.repeat),
			void 0 !== t.size && (this.size = t.size),
			void 0 !== t.opacity && (this.opacity = t.opacity));
	}
}
class vi {
	constructor() {
		(this.color = new Ct()), (this.color.value = '#ff0000'), (this.radius = 0), (this.rate = 1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			(this.duration = t.duration),
			(this.infectedStage = t.infectedStage),
			void 0 !== t.radius && (this.radius = t.radius),
			void 0 !== t.rate && (this.rate = t.rate));
	}
}
class pi {
	constructor() {
		(this.cure = !1),
			(this.delay = 0),
			(this.enable = !1),
			(this.infections = 0),
			(this.stages = []);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.cure && (this.cure = t.cure),
			void 0 !== t.delay && (this.delay = t.delay),
			void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.infections && (this.infections = t.infections),
			void 0 !== t.stages &&
				(this.stages = t.stages.map((t) => {
					const e = new vi();
					return e.load(t), e;
				})));
	}
}
class yi {
	constructor() {
		(this.mode = H.any), (this.value = !1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.mode && (this.mode = t.mode), void 0 !== t.value && (this.value = t.value));
	}
}
class fi {
	constructor() {
		(this.name = ''), (this.default = new yi());
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.name && (this.name = t.name),
			this.default.load(t.default),
			void 0 !== t.options && (this.options = X.deepExtend({}, t.options)));
	}
}
class mi {
	constructor() {
		(this.enable = !1), (this.zIndex = -1);
	}
	load(t) {
		t &&
			(void 0 !== t.enable && (this.enable = t.enable),
			void 0 !== t.zIndex && (this.zIndex = t.zIndex));
	}
}
class gi {
	constructor() {
		(this.factor = 4), (this.value = !0);
	}
	load(t) {
		t &&
			(void 0 !== t.factor && (this.factor = t.factor),
			void 0 !== t.value && (this.value = t.value));
	}
}
class bi {
	constructor() {
		(this.disable = !1), (this.reduce = new gi());
	}
	load(t) {
		t && (void 0 !== t.disable && (this.disable = t.disable), this.reduce.load(t.reduce));
	}
}
class wi {
	load(t) {
		var e, i;
		t &&
			(void 0 !== t.position &&
				(this.position = {
					x: null !== (e = t.position.x) && void 0 !== e ? e : 50,
					y: null !== (i = t.position.y) && void 0 !== i ? i : 50
				}),
			void 0 !== t.options && (this.options = X.deepExtend({}, t.options)));
	}
}
class xi {
	constructor() {
		(this.maxWidth = 1 / 0), (this.options = {});
	}
	load(t) {
		t &&
			(void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
			void 0 !== t.options && (this.options = X.deepExtend({}, t.options)));
	}
}
class ki {
	constructor() {
		(this.autoPlay = !0),
			(this.background = new ui()),
			(this.backgroundMask = new hi()),
			(this.fullScreen = new mi()),
			(this.detectRetina = !0),
			(this.fpsLimit = 60),
			(this.infection = new pi()),
			(this.interactivity = new ci()),
			(this.manualParticles = []),
			(this.motion = new bi()),
			(this.particles = new ye()),
			(this.pauseOnBlur = !0),
			(this.pauseOnOutsideViewport = !0),
			(this.responsive = []),
			(this.themes = []);
	}
	get fps_limit() {
		return this.fpsLimit;
	}
	set fps_limit(t) {
		this.fpsLimit = t;
	}
	get retina_detect() {
		return this.detectRetina;
	}
	set retina_detect(t) {
		this.detectRetina = t;
	}
	get backgroundMode() {
		return this.fullScreen;
	}
	set backgroundMode(t) {
		this.fullScreen.load(t);
	}
	load(t) {
		var e, i, o;
		if (void 0 === t) return;
		if (void 0 !== t.preset)
			if (t.preset instanceof Array) for (const a of t.preset) this.importPreset(a);
			else this.importPreset(t.preset);
		void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay);
		const s = null !== (e = t.detectRetina) && void 0 !== e ? e : t.retina_detect;
		void 0 !== s && (this.detectRetina = s);
		const n = null !== (i = t.fpsLimit) && void 0 !== i ? i : t.fps_limit;
		if (
			(void 0 !== n && (this.fpsLimit = n),
			void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
			void 0 !== t.pauseOnOutsideViewport &&
				(this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
			this.background.load(t.background),
			this.fullScreen.load(null !== (o = t.fullScreen) && void 0 !== o ? o : t.backgroundMode),
			this.backgroundMask.load(t.backgroundMask),
			this.infection.load(t.infection),
			this.interactivity.load(t.interactivity),
			void 0 !== t.manualParticles &&
				(this.manualParticles = t.manualParticles.map((t) => {
					const e = new wi();
					return e.load(t), e;
				})),
			this.motion.load(t.motion),
			this.particles.load(t.particles),
			ut.loadOptions(this, t),
			void 0 !== t.responsive)
		)
			for (const a of t.responsive) {
				const t = new xi();
				t.load(a), this.responsive.push(t);
			}
		if ((this.responsive.sort((t, e) => t.maxWidth - e.maxWidth), void 0 !== t.themes))
			for (const a of t.themes) {
				const t = new fi();
				t.load(a), this.themes.push(t);
			}
	}
	setTheme(t) {
		if (t) {
			const e = this.themes.find((e) => e.name === t);
			e && this.load(e.options);
		} else {
			const t =
				'undefined' != typeof matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
			let e = this.themes.find(
				(e) =>
					e.default.value &&
					((e.default.mode === H.dark && t) || (e.default.mode === H.light && !t))
			);
			e || (e = this.themes.find((t) => t.default.value && t.default.mode === H.any)),
				e && this.load(e.options);
		}
	}
	importPreset(t) {
		this.load(ut.getPreset(t));
	}
	setResponsive(t, e, i) {
		var o;
		this.load(i),
			this.load(
				null === (o = this.responsive.find((i) => i.maxWidth * e > t)) || void 0 === o
					? void 0
					: o.options
			);
	}
}
var Pi = function (t, e, i, o) {
	return new (i || (i = Promise))(function (s, n) {
		function a(t) {
			try {
				l(o.next(t));
			} catch (e) {
				n(e);
			}
		}
		function r(t) {
			try {
				l(o.throw(t));
			} catch (e) {
				n(e);
			}
		}
		function l(t) {
			var e;
			t.done
				? s(t.value)
				: ((e = t.value),
				  e instanceof i
						? e
						: new i(function (t) {
								t(e);
						  })).then(a, r);
		}
		l((o = o.apply(t, e || [])).next());
	});
};
class Mi {
	constructor(t, e, ...i) {
		(this.id = t),
			(this.fpsLimit = 60),
			(this.firstStart = !0),
			(this.started = !1),
			(this.destroyed = !1),
			(this.paused = !0),
			(this.lastFrameTime = 0),
			(this.pageHidden = !1),
			(this._sourceOptions = e),
			(this.retina = new Fe(this)),
			(this.canvas = new Mt(this)),
			(this.particles = new Ie(this)),
			(this.drawer = new Le(this)),
			(this.pathGenerator = {
				generate: () => {
					const t = A.create(0, 0);
					return (t.length = Math.random()), (t.angle = Math.random() * Math.PI * 2), t;
				},
				init: () => {},
				update: () => {}
			}),
			(this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
			(this.bubble = {}),
			(this.repulse = { particles: [] }),
			(this.attract = { particles: [] }),
			(this.plugins = new Map()),
			(this.drawers = new Map()),
			(this.density = 1),
			(this._options = new ki()),
			(this.actualOptions = new ki());
		for (const s of i) this._options.load(ut.getPreset(s));
		const o = ut.getSupportedShapes();
		for (const s of o) {
			const t = ut.getShapeDrawer(s);
			t && this.drawers.set(s, t);
		}
		this._options && this._options.load(this._sourceOptions),
			(this.eventListeners = new rt(this)),
			'undefined' != typeof IntersectionObserver &&
				IntersectionObserver &&
				(this.intersectionObserver = new IntersectionObserver((t) => this.intersectionManager(t)));
	}
	get options() {
		return this._options;
	}
	get sourceOptions() {
		return this._sourceOptions;
	}
	play(t) {
		const e = this.paused || t;
		if (!this.firstStart || this.actualOptions.autoPlay) {
			if ((this.paused && (this.paused = !1), e)) {
				for (const [, t] of this.plugins) t.play && t.play();
				this.lastFrameTime = performance.now();
			}
			this.draw();
		} else this.firstStart = !1;
	}
	pause() {
		if (
			(void 0 !== this.drawAnimationFrame &&
				(X.cancelAnimation(this.drawAnimationFrame), delete this.drawAnimationFrame),
			!this.paused)
		) {
			for (const [, t] of this.plugins) t.pause && t.pause();
			this.pageHidden || (this.paused = !0);
		}
	}
	draw() {
		this.drawAnimationFrame = X.animate((t) => this.drawer.nextFrame(t));
	}
	getAnimationStatus() {
		return !this.paused;
	}
	setNoise(t, e, i) {
		this.setPath(t, e, i);
	}
	setPath(t, e, i) {
		t &&
			('function' == typeof t
				? ((this.pathGenerator.generate = t),
				  e && (this.pathGenerator.init = e),
				  i && (this.pathGenerator.update = i))
				: (t.generate && (this.pathGenerator.generate = t.generate),
				  t.init && (this.pathGenerator.init = t.init),
				  t.update && (this.pathGenerator.update = t.update)));
	}
	destroy() {
		this.stop(), this.canvas.destroy();
		for (const [, t] of this.drawers) t.destroy && t.destroy(this);
		for (const t of this.drawers.keys()) this.drawers.delete(t);
		this.destroyed = !0;
	}
	exportImg(t) {
		this.exportImage(t);
	}
	exportImage(t, e, i) {
		var o;
		return null === (o = this.canvas.element) || void 0 === o
			? void 0
			: o.toBlob(t, null != e ? e : 'image/png', i);
	}
	exportConfiguration() {
		return JSON.stringify(this.actualOptions, void 0, 2);
	}
	refresh() {
		return this.stop(), this.start();
	}
	reset() {
		return (this._options = new ki()), this.refresh();
	}
	stop() {
		if (this.started) {
			(this.firstStart = !0),
				(this.started = !1),
				this.eventListeners.removeListeners(),
				this.pause(),
				this.particles.clear(),
				this.canvas.clear(),
				this.interactivity.element instanceof HTMLElement &&
					this.intersectionObserver &&
					this.intersectionObserver.observe(this.interactivity.element);
			for (const [, t] of this.plugins) t.stop && t.stop();
			for (const t of this.plugins.keys()) this.plugins.delete(t);
			(this.particles.linksColors = new Map()),
				delete this.particles.grabLineColor,
				delete this.particles.linksColor;
		}
	}
	loadTheme(t) {
		return Pi(this, void 0, void 0, function* () {
			this.actualOptions.setTheme(t), yield this.refresh();
		});
	}
	start() {
		return Pi(this, void 0, void 0, function* () {
			if (!this.started) {
				yield this.init(),
					(this.started = !0),
					this.eventListeners.addListeners(),
					this.interactivity.element instanceof HTMLElement &&
						this.intersectionObserver &&
						this.intersectionObserver.observe(this.interactivity.element);
				for (const [, t] of this.plugins)
					void 0 !== t.startAsync ? yield t.startAsync() : void 0 !== t.start && t.start();
				this.play();
			}
		});
	}
	init() {
		return Pi(this, void 0, void 0, function* () {
			(this.actualOptions = new ki()),
				this.actualOptions.load(this._options),
				this.retina.init(),
				this.canvas.init(),
				this.actualOptions.setResponsive(
					this.canvas.size.width,
					this.retina.pixelRatio,
					this._options
				),
				this.actualOptions.setTheme(void 0),
				(this.fpsLimit = this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 60);
			const t = ut.getAvailablePlugins(this);
			for (const [e, i] of t) this.plugins.set(e, i);
			for (const [, e] of this.drawers) e.init && (yield e.init(this));
			for (const [, e] of this.plugins)
				e.init
					? e.init(this.actualOptions)
					: void 0 !== e.initAsync && (yield e.initAsync(this.actualOptions));
			this.canvas.resize(), this.particles.init(), this.particles.setDensity();
		});
	}
	intersectionManager(t) {
		if (this.actualOptions.pauseOnOutsideViewport)
			for (const e of t)
				e.target === this.interactivity.element && (e.isIntersecting ? this.play() : this.pause());
	}
}
var Ri = function (t, e, i, o) {
	return new (i || (i = Promise))(function (s, n) {
		function a(t) {
			try {
				l(o.next(t));
			} catch (e) {
				n(e);
			}
		}
		function r(t) {
			try {
				l(o.throw(t));
			} catch (e) {
				n(e);
			}
		}
		function l(t) {
			var e;
			t.done
				? s(t.value)
				: ((e = t.value),
				  e instanceof i
						? e
						: new i(function (t) {
								t(e);
						  })).then(a, r);
		}
		l((o = o.apply(t, e || [])).next());
	});
};
const Si = [];
function Ci(t) {
	console.error(`Error tsParticles - fetch status: ${t}`),
		console.error('Error tsParticles - File config not found');
}
class zi {
	static dom() {
		return Si;
	}
	static domItem(t) {
		const e = zi.dom(),
			i = e[t];
		if (i && !i.destroyed) return i;
		e.splice(t, 1);
	}
	static load(t, e, i) {
		return Ri(this, void 0, void 0, function* () {
			const o = document.getElementById(t);
			if (o) return zi.set(t, o, e, i);
		});
	}
	static set(t, e, i, o) {
		return Ri(this, void 0, void 0, function* () {
			const s = i instanceof Array ? X.itemFromArray(i, o) : i,
				n = zi.dom(),
				a = n.findIndex((e) => e.id === t);
			if (a >= 0) {
				const t = zi.domItem(a);
				t && !t.destroyed && (t.destroy(), n.splice(a, 1));
			}
			let r, l;
			if ('canvas' === e.tagName.toLowerCase()) (r = e), (l = !1);
			else {
				const t = e.getElementsByTagName('canvas');
				t.length
					? ((r = t[0]), r.className || (r.className = Q.canvasClass), (l = !1))
					: ((l = !0),
					  (r = document.createElement('canvas')),
					  (r.className = Q.canvasClass),
					  (r.style.width = '100%'),
					  (r.style.height = '100%'),
					  e.appendChild(r));
			}
			const c = new Mi(t, s);
			return a >= 0 ? n.splice(a, 0, c) : n.push(c), c.canvas.loadCanvas(r, l), yield c.start(), c;
		});
	}
	static loadJSON(t, e, i) {
		return Ri(this, void 0, void 0, function* () {
			const o = e instanceof Array ? X.itemFromArray(e, i) : e,
				s = yield fetch(o);
			if (s.ok) return zi.load(t, yield s.json());
			Ci(s.status);
		});
	}
	static setJSON(t, e, i) {
		return Ri(this, void 0, void 0, function* () {
			const o = yield fetch(i);
			if (o.ok) {
				const i = yield o.json();
				return zi.set(t, e, i);
			}
			Ci(o.status);
		});
	}
	static setOnClickHandler(t) {
		const e = zi.dom();
		if (0 === e.length)
			throw new Error(
				'Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()'
			);
		for (const i of e) {
			const e = i.interactivity.element;
			if (!e) continue;
			const o = (e, o) => {
					if (i.destroyed) return;
					const s = i.retina.pixelRatio,
						n = { x: o.x * s, y: o.y * s },
						a = i.particles.quadTree.queryCircle(n, i.retina.sizeValue);
					t(e, a);
				},
				s = (t) => {
					if (i.destroyed) return;
					const e = t,
						s = { x: e.offsetX || e.clientX, y: e.offsetY || e.clientY };
					o(t, s);
				},
				n = () => {
					i.destroyed || ((c = !0), (d = !1));
				},
				a = () => {
					i.destroyed || (d = !0);
				},
				r = (t) => {
					var e, s, n;
					if (!i.destroyed) {
						if (c && !d) {
							const a = t,
								r = a.touches[a.touches.length - 1],
								l =
									null === (e = i.canvas.element) || void 0 === e
										? void 0
										: e.getBoundingClientRect(),
								c = {
									x:
										r.clientX -
										(null !== (s = null == l ? void 0 : l.left) && void 0 !== s ? s : 0),
									y: r.clientY - (null !== (n = null == l ? void 0 : l.top) && void 0 !== n ? n : 0)
								};
							o(t, c);
						}
						(c = !1), (d = !1);
					}
				},
				l = () => {
					i.destroyed || ((c = !1), (d = !1));
				};
			let c = !1,
				d = !1;
			e.addEventListener('click', s),
				e.addEventListener('touchstart', n),
				e.addEventListener('touchmove', a),
				e.addEventListener('touchend', r),
				e.addEventListener('touchcancel', l);
		}
	}
}
var Ai,
	Ti,
	Ei = function (t, e, i, o) {
		return new (i || (i = Promise))(function (s, n) {
			function a(t) {
				try {
					l(o.next(t));
				} catch (e) {
					n(e);
				}
			}
			function r(t) {
				try {
					l(o.throw(t));
				} catch (e) {
					n(e);
				}
			}
			function l(t) {
				var e;
				t.done
					? s(t.value)
					: ((e = t.value),
					  e instanceof i
							? e
							: new i(function (t) {
									t(e);
							  })).then(a, r);
			}
			l((o = o.apply(t, e || [])).next());
		});
	},
	Di = function (t, e, i) {
		if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance');
		return e.set(t, i), i;
	};
Ai = new WeakMap();
class Oi {
	constructor(t, e, i, o) {
		var s, n, a;
		(this.absorbers = t),
			(this.container = e),
			(this.initialPosition = o ? A.create(o.x, o.y) : void 0),
			(this.options = i),
			(this.dragging = !1),
			(this.name = this.options.name),
			(this.opacity = this.options.opacity),
			(this.size = T.getValue(i.size) * e.retina.pixelRatio),
			(this.mass = this.size * i.size.density * e.retina.reduceFactor);
		const r = i.size.limit;
		this.limit = void 0 !== r ? r * e.retina.pixelRatio * e.retina.reduceFactor : r;
		const l = 'string' == typeof i.color ? { value: i.color } : i.color;
		(this.color = null !== (s = K.colorToRgb(l)) && void 0 !== s ? s : { b: 0, g: 0, r: 0 }),
			(this.position =
				null !== (a = null === (n = this.initialPosition) || void 0 === n ? void 0 : n.copy()) &&
				void 0 !== a
					? a
					: this.calcPosition());
	}
	attract(t) {
		const e = this.options;
		if (e.draggable) {
			const t = this.container.interactivity.mouse;
			t.clicking && t.downPosition
				? T.getDistance(this.position, t.downPosition) <= this.size && (this.dragging = !0)
				: (this.dragging = !1),
				this.dragging &&
					t.position &&
					((this.position.x = t.position.x), (this.position.y = t.position.y));
		}
		const i = t.getPosition(),
			{ dx: o, dy: s, distance: n } = T.getDistances(this.position, i),
			a = A.create(o, s);
		if (
			((a.length = (this.mass / Math.pow(n, 2)) * this.container.retina.reduceFactor),
			n < this.size + t.getRadius())
		) {
			const i = 0.033 * t.getRadius() * this.container.retina.pixelRatio;
			this.size > t.getRadius() && n < this.size - t.getRadius()
				? e.destroy
					? t.destroy()
					: ((t.needsNewPosition = !0), this.updateParticlePosition(t, a))
				: (e.destroy && (t.size.value -= i), this.updateParticlePosition(t, a)),
				(void 0 === this.limit || this.size < this.limit) && (this.size += i),
				(this.mass += i * this.options.size.density * this.container.retina.reduceFactor);
		} else this.updateParticlePosition(t, a);
	}
	resize() {
		const t = this.initialPosition;
		this.position = t && X.isPointInside(t, this.container.canvas.size) ? t : this.calcPosition();
	}
	draw(t) {
		t.translate(this.position.x, this.position.y),
			t.beginPath(),
			t.arc(0, 0, this.size, 0, 2 * Math.PI, !1),
			t.closePath(),
			(t.fillStyle = K.getStyleFromRgb(this.color, this.opacity)),
			t.fill();
	}
	calcPosition() {
		var t, e;
		const i = this.container,
			o = this.options.position;
		return A.create(
			((null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) / 100) *
				i.canvas.size.width,
			((null !== (e = null == o ? void 0 : o.y) && void 0 !== e ? e : 100 * Math.random()) / 100) *
				i.canvas.size.height
		);
	}
	updateParticlePosition(t, e) {
		var i;
		if (t.destroyed) return;
		const o = this.container.canvas.size;
		if (t.needsNewPosition) {
			const e = t.getRadius();
			(t.position.x = Math.random() * (o.width - 2 * e) + e),
				(t.position.y = Math.random() * (o.height - 2 * e) + e),
				(t.needsNewPosition = !1);
		}
		this.options.orbits
			? (void 0 === t.orbit &&
					((t.orbit = A.create(0, 0)),
					(t.orbit.length = T.getDistance(t.getPosition(), this.position)),
					(t.orbit.angle = Math.random() * Math.PI * 2)),
			  t.orbit.length <= this.size &&
					!this.options.destroy &&
					(t.orbit.length = Math.random() * Math.max(o.width, o.height)),
			  (t.velocity.x = 0),
			  (t.velocity.y = 0),
			  t.position.setTo(t.orbit.add(this.position)),
			  (t.orbit.length -= e.length),
			  (t.orbit.angle +=
					((null !== (i = t.moveSpeed) && void 0 !== i
						? i
						: T.getRangeValue(t.options.move.speed) * this.container.retina.pixelRatio) /
						100) *
					this.container.retina.reduceFactor))
			: t.velocity.addTo(e);
	}
}
class Ii extends It {
	constructor() {
		super(), (this.density = 5), (this.random.minimumValue = 1), (this.value = 50);
	}
	load(t) {
		t &&
			(super.load(t),
			void 0 !== t.density && (this.density = t.density),
			void 0 !== t.limit && (this.limit = t.limit),
			void 0 !== t.limit && (this.limit = t.limit));
	}
}
class Fi {
	constructor() {
		(this.color = new Ct()),
			(this.color.value = '#000000'),
			(this.draggable = !1),
			(this.opacity = 1),
			(this.destroy = !0),
			(this.orbits = !1),
			(this.size = new Ii());
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.color && (this.color = Ct.create(this.color, t.color)),
			void 0 !== t.draggable && (this.draggable = t.draggable),
			(this.name = t.name),
			void 0 !== t.opacity && (this.opacity = t.opacity),
			void 0 !== t.position && (this.position = { x: t.position.x, y: t.position.y }),
			void 0 !== t.size && this.size.load(t.size),
			void 0 !== t.destroy && (this.destroy = t.destroy),
			void 0 !== t.orbits && (this.orbits = t.orbits));
	}
}
(Ti || (Ti = {})).absorber = 'absorber';
class Li {
	constructor(t) {
		(this.container = t),
			(this.array = []),
			(this.absorbers = []),
			(this.interactivityAbsorbers = []),
			(t.addAbsorber = (t, e) => this.addAbsorber(t, e));
	}
	init(t) {
		var e, i;
		if (!t) return;
		t.absorbers &&
			(t.absorbers instanceof Array
				? (this.absorbers = t.absorbers.map((t) => {
						const e = new Fi();
						return e.load(t), e;
				  }))
				: (this.absorbers instanceof Array && (this.absorbers = new Fi()),
				  this.absorbers.load(t.absorbers)));
		const o =
			null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) ||
			void 0 === i
				? void 0
				: i.absorbers;
		if (
			(o &&
				(o instanceof Array
					? (this.interactivityAbsorbers = o.map((t) => {
							const e = new Fi();
							return e.load(t), e;
					  }))
					: (this.interactivityAbsorbers instanceof Array &&
							(this.interactivityAbsorbers = new Fi()),
					  this.interactivityAbsorbers.load(o))),
			this.absorbers instanceof Array)
		)
			for (const s of this.absorbers) this.addAbsorber(s);
		else this.addAbsorber(this.absorbers);
	}
	particleUpdate(t) {
		for (const e of this.array) if ((e.attract(t), t.destroyed)) break;
	}
	draw(t) {
		for (const e of this.array) t.save(), e.draw(t), t.restore();
	}
	stop() {
		this.array = [];
	}
	resize() {
		for (const t of this.array) t.resize();
	}
	handleClickMode(t) {
		const e = this.container,
			i = this.absorbers,
			o = this.interactivityAbsorbers;
		if (t === Ti.absorber) {
			let t;
			o instanceof Array ? o.length > 0 && (t = X.itemFromArray(o)) : (t = o);
			const s = null != t ? t : i instanceof Array ? X.itemFromArray(i) : i,
				n = e.interactivity.mouse.clickPosition;
			this.addAbsorber(s, n);
		}
	}
	addAbsorber(t, e) {
		const i = new Oi(this, this.container, t, e);
		return this.array.push(i), i;
	}
	removeAbsorber(t) {
		const e = this.array.indexOf(t);
		e >= 0 && this.array.splice(e, 1);
	}
}
const Vi = new (class {
	constructor() {
		this.id = 'absorbers';
	}
	getPlugin(t) {
		return new Li(t);
	}
	needsPlugin(t) {
		var e, i, o;
		if (void 0 === t) return !1;
		const s = t.absorbers;
		let n = !1;
		return (
			s instanceof Array
				? s.length && (n = !0)
				: (void 0 !== s ||
						((null ===
							(o =
								null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) ||
								void 0 === i
									? void 0
									: i.onClick) || void 0 === o
							? void 0
							: o.mode) &&
							X.isInArray(Ti.absorber, t.interactivity.events.onClick.mode))) &&
				  (n = !0),
			n
		);
	}
	loadOptions(t, e) {
		var i, o;
		if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
		const s = t;
		if (null == e ? void 0 : e.absorbers)
			if ((null == e ? void 0 : e.absorbers) instanceof Array)
				s.absorbers =
					null == e
						? void 0
						: e.absorbers.map((t) => {
								const e = new Fi();
								return e.load(t), e;
						  });
			else {
				let t = s.absorbers;
				void 0 === (null == t ? void 0 : t.load) && (s.absorbers = t = new Fi()),
					t.load(null == e ? void 0 : e.absorbers);
			}
		const n =
			null ===
				(o =
					null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) ||
			void 0 === o
				? void 0
				: o.absorbers;
		if (n)
			if (n instanceof Array)
				s.interactivity.modes.absorbers = n.map((t) => {
					const e = new Fi();
					return e.load(t), e;
				});
			else {
				let t = s.interactivity.modes.absorbers;
				void 0 === (null == t ? void 0 : t.load) &&
					(s.interactivity.modes.absorbers = t = new Fi()),
					t.load(n);
			}
	}
})();
class Hi {
	constructor() {
		(this.mode = V.percent), (this.height = 0), (this.width = 0);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.mode && (this.mode = t.mode),
			void 0 !== t.height && (this.height = t.height),
			void 0 !== t.width && (this.width = t.width));
	}
}
function _i(t, e) {
	return t + e * (Math.random() - 0.5);
}
function qi(t, e) {
	return { x: _i(t.x, e.x), y: _i(t.y, e.y) };
}
class Bi {
	constructor(t, e, i, o) {
		var s, n, a, r;
		(this.emitters = t),
			(this.container = e),
			(this.firstSpawn = !0),
			(this.currentDuration = 0),
			(this.currentEmitDelay = 0),
			(this.currentSpawnDelay = 0),
			(this.initialPosition = o),
			(this.emitterOptions = X.deepExtend({}, i)),
			(this.spawnDelay =
				(1e3 * (null !== (s = this.emitterOptions.life.delay) && void 0 !== s ? s : 0)) /
				this.container.retina.reduceFactor),
			(this.position =
				null !== (n = this.initialPosition) && void 0 !== n ? n : this.calcPosition()),
			(this.name = i.name);
		let l = X.deepExtend({}, this.emitterOptions.particles);
		void 0 === l && (l = {}),
			void 0 === l.move && (l.move = {}),
			void 0 === l.move.direction && (l.move.direction = this.emitterOptions.direction),
			void 0 !== this.emitterOptions.spawnColor &&
				(this.spawnColor = K.colorToHsl(this.emitterOptions.spawnColor)),
			(this.paused = !this.emitterOptions.autoPlay),
			(this.particlesOptions = l),
			(this.size =
				null !== (a = this.emitterOptions.size) && void 0 !== a
					? a
					: (() => {
							const t = new Hi();
							return t.load({ height: 0, mode: V.percent, width: 0 }), t;
					  })()),
			(this.lifeCount = null !== (r = this.emitterOptions.life.count) && void 0 !== r ? r : -1),
			(this.immortal = this.lifeCount <= 0),
			this.play();
	}
	externalPlay() {
		(this.paused = !1), this.play();
	}
	externalPause() {
		(this.paused = !0), this.pause();
	}
	play() {
		this.paused ||
			(this.container.retina.reduceFactor &&
				(this.lifeCount > 0 || this.immortal || !this.emitterOptions.life.count) &&
				(void 0 === this.emitDelay &&
					(this.emitDelay =
						(1e3 * this.emitterOptions.rate.delay) / this.container.retina.reduceFactor),
				(this.lifeCount > 0 || this.immortal) && this.prepareToDie()));
	}
	pause() {
		this.paused || delete this.emitDelay;
	}
	resize() {
		const t = this.initialPosition;
		this.position = t && X.isPointInside(t, this.container.canvas.size) ? t : this.calcPosition();
	}
	update(t) {
		var e, i, o;
		this.paused ||
			(this.firstSpawn &&
				((this.firstSpawn = !1),
				(this.currentSpawnDelay = null !== (e = this.spawnDelay) && void 0 !== e ? e : 0),
				(this.currentEmitDelay = null !== (i = this.emitDelay) && void 0 !== i ? i : 0),
				(t.value = 0)),
			void 0 !== this.duration &&
				((this.currentDuration += t.value),
				this.currentDuration >= this.duration &&
					(this.pause(),
					void 0 !== this.spawnDelay && delete this.spawnDelay,
					this.immortal || this.lifeCount--,
					this.lifeCount > 0 || this.immortal
						? ((this.position = this.calcPosition()),
						  (this.spawnDelay =
								(1e3 * (null !== (o = this.emitterOptions.life.delay) && void 0 !== o ? o : 0)) /
								this.container.retina.reduceFactor))
						: this.destroy(),
					(this.currentDuration -= this.duration),
					delete this.duration)),
			void 0 !== this.spawnDelay &&
				((this.currentSpawnDelay += t.value),
				this.currentSpawnDelay >= this.spawnDelay &&
					(this.play(),
					(this.currentSpawnDelay -= this.currentSpawnDelay),
					delete this.spawnDelay)),
			void 0 !== this.emitDelay &&
				((this.currentEmitDelay += t.value),
				this.currentEmitDelay >= this.emitDelay &&
					(this.emit(), (this.currentEmitDelay -= this.emitDelay))));
	}
	prepareToDie() {
		var t;
		if (this.paused) return;
		const e = null === (t = this.emitterOptions.life) || void 0 === t ? void 0 : t.duration;
		this.container.retina.reduceFactor &&
			(this.lifeCount > 0 || this.immortal) &&
			void 0 !== e &&
			e > 0 &&
			(this.duration = 1e3 * e);
	}
	destroy() {
		this.emitters.removeEmitter(this);
	}
	calcPosition() {
		var t, e;
		const i = this.container,
			o = this.emitterOptions.position;
		return {
			x:
				((null !== (t = null == o ? void 0 : o.x) && void 0 !== t ? t : 100 * Math.random()) /
					100) *
				i.canvas.size.width,
			y:
				((null !== (e = null == o ? void 0 : o.y) && void 0 !== e ? e : 100 * Math.random()) /
					100) *
				i.canvas.size.height
		};
	}
	emit() {
		var t;
		if (this.paused) return;
		const e = this.container,
			i = this.position,
			o = {
				x:
					this.size.mode === V.percent
						? (e.canvas.size.width * this.size.width) / 100
						: this.size.width,
				y:
					this.size.mode === V.percent
						? (e.canvas.size.height * this.size.height) / 100
						: this.size.height
			};
		for (let s = 0; s < this.emitterOptions.rate.quantity; s++) {
			const s = X.deepExtend({}, this.particlesOptions);
			if (void 0 !== this.spawnColor) {
				const e =
					null === (t = this.emitterOptions.spawnColor) || void 0 === t ? void 0 : t.animation;
				if (e) {
					const t = e;
					if (t.enable) this.spawnColor.h = this.setColorAnimation(t, this.spawnColor.h, 360);
					else {
						const t = e;
						(this.spawnColor.h = this.setColorAnimation(t.h, this.spawnColor.h, 360)),
							(this.spawnColor.s = this.setColorAnimation(t.s, this.spawnColor.s, 100)),
							(this.spawnColor.l = this.setColorAnimation(t.l, this.spawnColor.l, 100));
					}
				}
				s.color ? (s.color.value = this.spawnColor) : (s.color = { value: this.spawnColor });
			}
			e.particles.addParticle(qi(i, o), s);
		}
	}
	setColorAnimation(t, e, i) {
		var o;
		const s = this.container;
		if (!t.enable) return e;
		const n = T.randomInRange(t.offset),
			a = (1e3 * this.emitterOptions.rate.delay) / s.retina.reduceFactor;
		return (e + ((null !== (o = t.speed) && void 0 !== o ? o : 0) * s.fpsLimit) / a + 3.6 * n) % i;
	}
}
class $i {
	constructor() {
		(this.quantity = 1), (this.delay = 0.1);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.quantity && (this.quantity = t.quantity),
			void 0 !== t.delay && (this.delay = t.delay));
	}
}
class Wi {
	load(t) {
		void 0 !== t &&
			(void 0 !== t.count && (this.count = t.count),
			void 0 !== t.delay && (this.delay = t.delay),
			void 0 !== t.duration && (this.duration = t.duration));
	}
}
class Gi {
	constructor() {
		(this.autoPlay = !0), (this.direction = S.none), (this.life = new Wi()), (this.rate = new $i());
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
			void 0 !== t.size && (void 0 === this.size && (this.size = new Hi()), this.size.load(t.size)),
			void 0 !== t.direction && (this.direction = t.direction),
			this.life.load(t.life),
			(this.name = t.name),
			void 0 !== t.particles && (this.particles = X.deepExtend({}, t.particles)),
			this.rate.load(t.rate),
			void 0 !== t.position && (this.position = { x: t.position.x, y: t.position.y }),
			void 0 !== t.spawnColor &&
				(void 0 === this.spawnColor && (this.spawnColor = new te()),
				this.spawnColor.load(t.spawnColor)));
	}
}
var Ni;
(Ni || (Ni = {})).emitter = 'emitter';
class Ui {
	constructor(t) {
		(this.container = t),
			(this.array = []),
			(this.emitters = []),
			(this.interactivityEmitters = []);
		const e = t;
		(e.addEmitter = (t, e) => this.addEmitter(t, e)),
			(e.playEmitter = (t) => {
				const e =
					void 0 === t || 'number' == typeof t
						? this.array[t || 0]
						: this.array.find((e) => e.name === t);
				e && e.externalPlay();
			}),
			(e.pauseEmitter = (t) => {
				const e =
					void 0 === t || 'number' == typeof t
						? this.array[t || 0]
						: this.array.find((e) => e.name === t);
				e && e.externalPause();
			});
	}
	init(t) {
		var e, i;
		if (!t) return;
		t.emitters &&
			(t.emitters instanceof Array
				? (this.emitters = t.emitters.map((t) => {
						const e = new Gi();
						return e.load(t), e;
				  }))
				: (this.emitters instanceof Array && (this.emitters = new Gi()),
				  this.emitters.load(t.emitters)));
		const o =
			null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.modes) ||
			void 0 === i
				? void 0
				: i.emitters;
		if (
			(o &&
				(o instanceof Array
					? (this.interactivityEmitters = o.map((t) => {
							const e = new Gi();
							return e.load(t), e;
					  }))
					: (this.interactivityEmitters instanceof Array && (this.interactivityEmitters = new Gi()),
					  this.interactivityEmitters.load(o))),
			this.emitters instanceof Array)
		)
			for (const s of this.emitters) this.addEmitter(s);
		else this.addEmitter(this.emitters);
	}
	play() {
		for (const t of this.array) t.play();
	}
	pause() {
		for (const t of this.array) t.pause();
	}
	stop() {
		this.array = [];
	}
	update(t) {
		for (const e of this.array) e.update(t);
	}
	handleClickMode(t) {
		const e = this.container,
			i = this.emitters,
			o = this.interactivityEmitters;
		if (t === Ni.emitter) {
			let t;
			o instanceof Array ? o.length > 0 && (t = X.itemFromArray(o)) : (t = o);
			const s = null != t ? t : i instanceof Array ? X.itemFromArray(i) : i,
				n = e.interactivity.mouse.clickPosition;
			this.addEmitter(X.deepExtend({}, s), n);
		}
	}
	resize() {
		for (const t of this.array) t.resize();
	}
	addEmitter(t, e) {
		const i = new Bi(this, this.container, t, e);
		return this.array.push(i), i;
	}
	removeEmitter(t) {
		const e = this.array.indexOf(t);
		e >= 0 && this.array.splice(e, 1);
	}
}
const ji = new (class {
	constructor() {
		this.id = 'emitters';
	}
	getPlugin(t) {
		return new Ui(t);
	}
	needsPlugin(t) {
		var e, i, o;
		if (void 0 === t) return !1;
		const s = t.emitters;
		let n = !1;
		return (
			s instanceof Array
				? s.length && (n = !0)
				: (void 0 !== s ||
						((null ===
							(o =
								null === (i = null === (e = t.interactivity) || void 0 === e ? void 0 : e.events) ||
								void 0 === i
									? void 0
									: i.onClick) || void 0 === o
							? void 0
							: o.mode) &&
							X.isInArray(Ni.emitter, t.interactivity.events.onClick.mode))) &&
				  (n = !0),
			n
		);
	}
	loadOptions(t, e) {
		var i, o;
		if (!this.needsPlugin(t) && !this.needsPlugin(e)) return;
		const s = t;
		if (null == e ? void 0 : e.emitters)
			if ((null == e ? void 0 : e.emitters) instanceof Array)
				s.emitters =
					null == e
						? void 0
						: e.emitters.map((t) => {
								const e = new Gi();
								return e.load(t), e;
						  });
			else {
				let t = s.emitters;
				void 0 === (null == t ? void 0 : t.load) && (s.emitters = t = new Gi()),
					t.load(null == e ? void 0 : e.emitters);
			}
		const n =
			null ===
				(o =
					null === (i = null == e ? void 0 : e.interactivity) || void 0 === i ? void 0 : i.modes) ||
			void 0 === o
				? void 0
				: o.emitters;
		if (n)
			if (n instanceof Array)
				s.interactivity.modes.emitters = n.map((t) => {
					const e = new Gi();
					return e.load(t), e;
				});
			else {
				let t = s.interactivity.modes.emitters;
				void 0 === (null == t ? void 0 : t.load) && (s.interactivity.modes.emitters = t = new Gi()),
					t.load(n);
			}
	}
})();
var Yi, Xi, Qi;
!(function (t) {
	(t.equidistant = 'equidistant'),
		(t.onePerPoint = 'one-per-point'),
		(t.perPoint = 'per-point'),
		(t.randomLength = 'random-length'),
		(t.randomPoint = 'random-point');
})(Yi || (Yi = {})),
	(function (t) {
		(t.path = 'path'), (t.radius = 'radius');
	})(Xi || (Xi = {})),
	(function (t) {
		(t.inline = 'inline'), (t.inside = 'inside'), (t.outside = 'outside'), (t.none = 'none');
	})(Qi || (Qi = {}));
class Ji {
	constructor() {
		(this.color = new Ct()), (this.width = 0.5), (this.opacity = 1);
	}
	load(t) {
		var e;
		void 0 !== t &&
			((this.color = Ct.create(this.color, t.color)),
			'string' == typeof this.color.value &&
				(this.opacity =
					null !== (e = K.stringToAlpha(this.color.value)) && void 0 !== e ? e : this.opacity),
			void 0 !== t.opacity && (this.opacity = t.opacity),
			void 0 !== t.width && (this.width = t.width));
	}
}
class Zi {
	constructor() {
		(this.enable = !1), (this.stroke = new Ji());
	}
	get lineWidth() {
		return this.stroke.width;
	}
	set lineWidth(t) {
		this.stroke.width = t;
	}
	get lineColor() {
		return this.stroke.color;
	}
	set lineColor(t) {
		this.stroke.color = Ct.create(this.stroke.color, t);
	}
	load(t) {
		var e;
		if (void 0 !== t) {
			void 0 !== t.enable && (this.enable = t.enable);
			const i =
				null !== (e = t.stroke) && void 0 !== e ? e : { color: t.lineColor, width: t.lineWidth };
			this.stroke.load(i);
		}
	}
}
class Ki {
	constructor() {
		(this.radius = 10), (this.type = Xi.path);
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.radius && (this.radius = t.radius), void 0 !== t.type && (this.type = t.type));
	}
}
class to {
	constructor() {
		this.arrangement = Yi.onePerPoint;
	}
	load(t) {
		void 0 !== t && void 0 !== t.arrangement && (this.arrangement = t.arrangement);
	}
}
class eo {
	constructor() {
		(this.path = []), (this.size = { height: 0, width: 0 });
	}
	load(t) {
		void 0 !== t &&
			(void 0 !== t.path && (this.path = t.path),
			void 0 !== t.size &&
				(void 0 !== t.size.width && (this.size.width = t.size.width),
				void 0 !== t.size.height && (this.size.height = t.size.height)));
	}
}
class io {
	constructor() {
		(this.draw = new Zi()),
			(this.enable = !1),
			(this.inline = new to()),
			(this.move = new Ki()),
			(this.scale = 1),
			(this.type = Qi.none);
	}
	get inlineArrangement() {
		return this.inline.arrangement;
	}
	set inlineArrangement(t) {
		this.inline.arrangement = t;
	}
	load(t) {
		var e;
		if (void 0 !== t) {
			this.draw.load(t.draw);
			const i = null !== (e = t.inline) && void 0 !== e ? e : { arrangement: t.inlineArrangement };
			void 0 !== i && this.inline.load(i),
				this.move.load(t.move),
				void 0 !== t.scale && (this.scale = t.scale),
				void 0 !== t.type && (this.type = t.type),
				void 0 !== t.enable ? (this.enable = t.enable) : (this.enable = this.type !== Qi.none),
				void 0 !== t.url && (this.url = t.url),
				void 0 !== t.data &&
					('string' == typeof t.data
						? (this.data = t.data)
						: ((this.data = new eo()), this.data.load(t.data))),
				void 0 !== t.position && (this.position = X.deepExtend({}, t.position));
		}
	}
}
var oo = function (t, e, i, o) {
	return new (i || (i = Promise))(function (s, n) {
		function a(t) {
			try {
				l(o.next(t));
			} catch (e) {
				n(e);
			}
		}
		function r(t) {
			try {
				l(o.throw(t));
			} catch (e) {
				n(e);
			}
		}
		function l(t) {
			var e;
			t.done
				? s(t.value)
				: ((e = t.value),
				  e instanceof i
						? e
						: new i(function (t) {
								t(e);
						  })).then(a, r);
		}
		l((o = o.apply(t, e || [])).next());
	});
};
function so(t) {
	(t.velocity.x = t.velocity.y / 2 - t.velocity.x),
		(t.velocity.y = t.velocity.x / 2 - t.velocity.y);
}
function no(t, e, i) {
	const o = K.colorToRgb(i.color);
	if (o) {
		t.beginPath(), t.moveTo(e[0].x, e[0].y);
		for (const i of e) t.lineTo(i.x, i.y);
		t.closePath(), (t.strokeStyle = K.getStyleFromRgb(o)), (t.lineWidth = i.width), t.stroke();
	}
}
function ao(t, e, i, o) {
	t.translate(o.x, o.y);
	const s = K.colorToRgb(i.color);
	s && ((t.strokeStyle = K.getStyleFromRgb(s, i.opacity)), (t.lineWidth = i.width), t.stroke(e));
}
class ro {
	constructor(t) {
		(this.container = t),
			(this.dimension = { height: 0, width: 0 }),
			(this.path2DSupported = !!window.Path2D),
			(this.options = new io()),
			(this.polygonMaskMoveRadius = this.options.move.radius * t.retina.pixelRatio);
	}
	initAsync(t) {
		return oo(this, void 0, void 0, function* () {
			this.options.load(null == t ? void 0 : t.polygon);
			const e = this.options;
			(this.polygonMaskMoveRadius = e.move.radius * this.container.retina.pixelRatio),
				e.enable && (yield this.initRawData());
		});
	}
	resize() {
		const t = this.container,
			e = this.options;
		e.enable &&
			e.type !== Qi.none &&
			(this.redrawTimeout && clearTimeout(this.redrawTimeout),
			(this.redrawTimeout = window.setTimeout(
				() =>
					oo(this, void 0, void 0, function* () {
						yield this.initRawData(!0), t.particles.redraw();
					}),
				250
			)));
	}
	stop() {
		delete this.raw, delete this.paths;
	}
	particlesInitialization() {
		const t = this.options;
		return !(
			!t.enable ||
			t.type !== Qi.inline ||
			(t.inline.arrangement !== Yi.onePerPoint && t.inline.arrangement !== Yi.perPoint) ||
			(this.drawPoints(), 0)
		);
	}
	particlePosition(t) {
		var e, i;
		if (
			this.options.enable &&
			(null !== (i = null === (e = this.raw) || void 0 === e ? void 0 : e.length) && void 0 !== i
				? i
				: 0) > 0
		)
			return X.deepExtend({}, t || this.randomPoint());
	}
	particleBounce(t) {
		const e = this.options;
		if (e.enable && e.type !== Qi.none && e.type !== Qi.inline) {
			if (!this.checkInsidePolygon(t.getPosition())) return so(t), !0;
		} else if (
			e.enable &&
			e.type === Qi.inline &&
			t.initialPosition &&
			T.getDistance(t.initialPosition, t.getPosition()) > this.polygonMaskMoveRadius
		)
			return so(t), !0;
		return !1;
	}
	clickPositionValid(t) {
		const e = this.options;
		return e.enable && e.type !== Qi.none && e.type !== Qi.inline && this.checkInsidePolygon(t);
	}
	draw(t) {
		var e;
		if (!(null === (e = this.paths) || void 0 === e ? void 0 : e.length)) return;
		const i = this.options,
			o = i.draw;
		if (!i.enable || !o.enable) return;
		const s = this.raw;
		for (const n of this.paths) {
			const e = n.path2d,
				i = this.path2DSupported;
			t && (i && e && this.offset ? ao(t, e, o.stroke, this.offset) : s && no(t, s, o.stroke));
		}
	}
	checkInsidePolygon(t) {
		var e, i;
		const o = this.container,
			s = this.options;
		if (!s.enable || s.type === Qi.none || s.type === Qi.inline) return !0;
		if (!this.raw) throw new Error(Q.noPolygonFound);
		const n = o.canvas.size,
			a = null !== (e = null == t ? void 0 : t.x) && void 0 !== e ? e : Math.random() * n.width,
			r = null !== (i = null == t ? void 0 : t.y) && void 0 !== i ? i : Math.random() * n.height;
		let l = !1;
		for (let c = 0, d = this.raw.length - 1; c < this.raw.length; d = c++) {
			const t = this.raw[c],
				e = this.raw[d];
			t.y > r != e.y > r && a < ((e.x - t.x) * (r - t.y)) / (e.y - t.y) + t.x && (l = !l);
		}
		return s.type === Qi.inside ? l : s.type === Qi.outside && !l;
	}
	parseSvgPath(t, e) {
		var i, o, s;
		const n = null != e && e;
		if (void 0 !== this.paths && !n) return this.raw;
		const a = this.container,
			r = this.options,
			l = new DOMParser().parseFromString(t, 'image/svg+xml'),
			c = l.getElementsByTagName('svg')[0];
		let d = c.getElementsByTagName('path');
		d.length || (d = l.getElementsByTagName('path')), (this.paths = []);
		for (let p = 0; p < d.length; p++) {
			const t = d.item(p);
			t && this.paths.push({ element: t, length: t.getTotalLength() });
		}
		const h = a.retina.pixelRatio,
			u = r.scale / h;
		(this.dimension.width =
			parseFloat(null !== (i = c.getAttribute('width')) && void 0 !== i ? i : '0') * u),
			(this.dimension.height =
				parseFloat(null !== (o = c.getAttribute('height')) && void 0 !== o ? o : '0') * u);
		const v = null !== (s = r.position) && void 0 !== s ? s : { x: 50, y: 50 };
		return (
			(this.offset = {
				x: (a.canvas.size.width * v.x) / (100 * h) - this.dimension.width / 2,
				y: (a.canvas.size.height * v.y) / (100 * h) - this.dimension.height / 2
			}),
			(function (t, e, i) {
				const o = [];
				for (const s of t) {
					const t = s.element.pathSegList,
						n = t.numberOfItems,
						a = { x: 0, y: 0 };
					for (let s = 0; s < n; s++) {
						const n = t.getItem(s),
							r = window.SVGPathSeg;
						switch (n.pathSegType) {
							case r.PATHSEG_MOVETO_ABS:
							case r.PATHSEG_LINETO_ABS:
							case r.PATHSEG_CURVETO_CUBIC_ABS:
							case r.PATHSEG_CURVETO_QUADRATIC_ABS:
							case r.PATHSEG_ARC_ABS:
							case r.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
							case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: {
								const t = n;
								(a.x = t.x), (a.y = t.y);
								break;
							}
							case r.PATHSEG_LINETO_HORIZONTAL_ABS:
								a.x = n.x;
								break;
							case r.PATHSEG_LINETO_VERTICAL_ABS:
								a.y = n.y;
								break;
							case r.PATHSEG_LINETO_REL:
							case r.PATHSEG_MOVETO_REL:
							case r.PATHSEG_CURVETO_CUBIC_REL:
							case r.PATHSEG_CURVETO_QUADRATIC_REL:
							case r.PATHSEG_ARC_REL:
							case r.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
							case r.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: {
								const t = n;
								(a.x += t.x), (a.y += t.y);
								break;
							}
							case r.PATHSEG_LINETO_HORIZONTAL_REL:
								a.x += n.x;
								break;
							case r.PATHSEG_LINETO_VERTICAL_REL:
								a.y += n.y;
								break;
							case r.PATHSEG_UNKNOWN:
							case r.PATHSEG_CLOSEPATH:
								continue;
						}
						o.push({ x: a.x * e + i.x, y: a.y * e + i.y });
					}
				}
				return o;
			})(this.paths, u, this.offset)
		);
	}
	downloadSvgPath(t, e) {
		return oo(this, void 0, void 0, function* () {
			const i = this.options,
				o = t || i.url,
				s = null != e && e;
			if (!o || (void 0 !== this.paths && !s)) return this.raw;
			const n = yield fetch(o);
			if (!n.ok) throw new Error('tsParticles Error - Error occurred during polygon mask download');
			return this.parseSvgPath(yield n.text(), e);
		});
	}
	drawPoints() {
		if (this.raw)
			for (const t of this.raw) this.container.particles.addParticle({ x: t.x, y: t.y });
	}
	randomPoint() {
		const t = this.container,
			e = this.options;
		let i;
		if (e.type === Qi.inline)
			switch (e.inline.arrangement) {
				case Yi.randomPoint:
					i = this.getRandomPoint();
					break;
				case Yi.randomLength:
					i = this.getRandomPointByLength();
					break;
				case Yi.equidistant:
					i = this.getEquidistantPointByIndex(t.particles.count);
					break;
				case Yi.onePerPoint:
				case Yi.perPoint:
				default:
					i = this.getPointByIndex(t.particles.count);
			}
		else i = { x: Math.random() * t.canvas.size.width, y: Math.random() * t.canvas.size.height };
		return this.checkInsidePolygon(i) ? i : this.randomPoint();
	}
	getRandomPoint() {
		if (!this.raw || !this.raw.length) throw new Error(Q.noPolygonDataLoaded);
		const t = X.itemFromArray(this.raw);
		return { x: t.x, y: t.y };
	}
	getRandomPointByLength() {
		var t, e, i;
		const o = this.options;
		if (
			!this.raw ||
			!this.raw.length ||
			!(null === (t = this.paths) || void 0 === t ? void 0 : t.length)
		)
			throw new Error(Q.noPolygonDataLoaded);
		const s = X.itemFromArray(this.paths),
			n = Math.floor(Math.random() * s.length) + 1,
			a = s.element.getPointAtLength(n);
		return {
			x: a.x * o.scale + ((null === (e = this.offset) || void 0 === e ? void 0 : e.x) || 0),
			y: a.y * o.scale + ((null === (i = this.offset) || void 0 === i ? void 0 : i.y) || 0)
		};
	}
	getEquidistantPointByIndex(t) {
		var e, i, o, s, n, a, r;
		const l = this.container.actualOptions,
			c = this.options;
		if (
			!this.raw ||
			!this.raw.length ||
			!(null === (e = this.paths) || void 0 === e ? void 0 : e.length)
		)
			throw new Error(Q.noPolygonDataLoaded);
		let d,
			h = 0;
		const u = this.paths.reduce((t, e) => t + e.length, 0) / l.particles.number.value;
		for (const v of this.paths) {
			const e = u * t - h;
			if (e <= v.length) {
				d = v.element.getPointAtLength(e);
				break;
			}
			h += v.length;
		}
		return {
			x:
				(null !== (i = null == d ? void 0 : d.x) && void 0 !== i ? i : 0) * c.scale +
				(null !== (s = null === (o = this.offset) || void 0 === o ? void 0 : o.x) && void 0 !== s
					? s
					: 0),
			y:
				(null !== (n = null == d ? void 0 : d.y) && void 0 !== n ? n : 0) * c.scale +
				(null !== (r = null === (a = this.offset) || void 0 === a ? void 0 : a.y) && void 0 !== r
					? r
					: 0)
		};
	}
	getPointByIndex(t) {
		if (!this.raw || !this.raw.length) throw new Error(Q.noPolygonDataLoaded);
		const e = this.raw[t % this.raw.length];
		return { x: e.x, y: e.y };
	}
	createPath2D() {
		var t, e;
		const i = this.options;
		if (this.path2DSupported && (null === (t = this.paths) || void 0 === t ? void 0 : t.length))
			for (const o of this.paths) {
				const t = null === (e = o.element) || void 0 === e ? void 0 : e.getAttribute('d');
				if (t) {
					const e = new Path2D(t),
						s = document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGMatrix(),
						n = new Path2D(),
						a = s.scale(i.scale);
					n.addPath ? (n.addPath(e, a), (o.path2d = n)) : delete o.path2d;
				} else delete o.path2d;
				!o.path2d &&
					this.raw &&
					((o.path2d = new Path2D()),
					o.path2d.moveTo(this.raw[0].x, this.raw[0].y),
					this.raw.forEach((t, e) => {
						var i;
						e > 0 && (null === (i = o.path2d) || void 0 === i || i.lineTo(t.x, t.y));
					}),
					o.path2d.closePath());
			}
	}
	initRawData(t) {
		return oo(this, void 0, void 0, function* () {
			const e = this.options;
			if (e.url) this.raw = yield this.downloadSvgPath(e.url, t);
			else if (e.data) {
				const i = e.data;
				let o;
				if ('string' != typeof i) {
					const t =
						i.path instanceof Array
							? i.path.map((t) => `<path d="${t}" />`).join('')
							: `<path d="${i.path}" />`;
					o = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${i.size.width}" height="${i.size.height}">${t}</svg>`;
				} else o = i;
				this.raw = this.parseSvgPath(o, t);
			}
			this.createPath2D();
		});
	}
}
const lo = new (class {
		constructor() {
			this.id = 'polygonMask';
		}
		getPlugin(t) {
			return new ro(t);
		}
		needsPlugin(t) {
			var e, i, o;
			return null !==
				(i = null === (e = null == t ? void 0 : t.polygon) || void 0 === e ? void 0 : e.enable) &&
				void 0 !== i
				? i
				: void 0 !==
						(null === (o = null == t ? void 0 : t.polygon) || void 0 === o ? void 0 : o.type) &&
						t.polygon.type !== Qi.none;
		}
		loadOptions(t, e) {
			if (!this.needsPlugin(e)) return;
			const i = t;
			let o = i.polygon;
			void 0 === (null == o ? void 0 : o.load) && (i.polygon = o = new io()),
				o.load(null == e ? void 0 : e.polygon);
		}
	})(),
	co = new (class extends class {
		constructor() {
			Ai.set(this, void 0), Di(this, Ai, !1);
			const t = new M(),
				e = new yt(),
				i = new mt();
			ut.addShapeDrawer($.line, new gt()),
				ut.addShapeDrawer($.circle, new bt()),
				ut.addShapeDrawer($.edge, t),
				ut.addShapeDrawer($.square, t),
				ut.addShapeDrawer($.triangle, new xt()),
				ut.addShapeDrawer($.star, new kt()),
				ut.addShapeDrawer($.polygon, new Pt()),
				ut.addShapeDrawer($.char, e),
				ut.addShapeDrawer($.character, e),
				ut.addShapeDrawer($.image, i),
				ut.addShapeDrawer($.images, i);
		}
		init() {
			(function (t, e) {
				if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance');
				return e.get(t);
			})(this, Ai) || Di(this, Ai, !0);
		}
		loadFromArray(t, e, i) {
			return Ei(this, void 0, void 0, function* () {
				return zi.load(t, e, i);
			});
		}
		load(t, e) {
			return Ei(this, void 0, void 0, function* () {
				return zi.load(t, e);
			});
		}
		set(t, e, i) {
			return Ei(this, void 0, void 0, function* () {
				return zi.set(t, e, i);
			});
		}
		loadJSON(t, e, i) {
			return zi.loadJSON(t, e, i);
		}
		setOnClickHandler(t) {
			zi.setOnClickHandler(t);
		}
		dom() {
			return zi.dom();
		}
		domItem(t) {
			return zi.domItem(t);
		}
		addShape(t, e, i, o, s) {
			let n;
			(n = 'function' == typeof e ? { afterEffect: o, destroy: s, draw: e, init: i } : e),
				ut.addShapeDrawer(t, n);
		}
		addPreset(t, e) {
			ut.addPreset(t, e);
		}
		addPlugin(t) {
			ut.addPlugin(t);
		}
		addPathGenerator(t, e) {
			ut.addPathGenerator(t, e);
		}
	} {
		constructor() {
			super(), this.addPlugin(Vi), this.addPlugin(ji), this.addPlugin(lo);
		}
	})();
function ho(e) {
	let i;
	return {
		c() {
			(i = document.createElement('div')), r(i, 'id', e[0]);
		},
		m(t, e) {
			var o, s;
			(o = i), (s = e), t.insertBefore(o, s || null);
		},
		p(t, [e]) {
			1 & e && r(i, 'id', t[0]);
		},
		i: t,
		o: t,
		d(t) {
			t && a(i);
		}
	};
}
function uo(t, e, i) {
	let { options: o = {} } = e,
		{ url: s = '' } = e,
		{ id: n = 'tsparticles' } = e;
	const a = (function () {
		const t = d();
		return (e, i) => {
			const o = t.$$.callbacks[e];
			if (o) {
				const s = (function (t, e) {
					const i = document.createEvent('CustomEvent');
					return i.initCustomEvent(t, !1, !1, e), i;
				})(e, i);
				o.slice().forEach((e) => {
					e.call(t, s);
				});
			}
		};
	})();
	let r = n;
	var l;
	return (
		(l = () => {
			if ((co.init(), a('particlesInit', co), r)) {
				const t = co.dom().find((t) => t.id === r);
				t && t.destroy();
			}
			if (n) {
				const t = (t) => {
					a('particlesLoaded', { particles: t }), (r = n);
				};
				s
					? co.loadJSON(n, s).then(t)
					: o
					? co.load(n, o).then(t)
					: console.error('You must specify options or url to load tsParticles');
			} else a('particlesLoaded', { particles: void 0 });
		}),
		d().$$.after_update.push(l),
		(t.$$set = (t) => {
			'options' in t && i(1, (o = t.options)),
				'url' in t && i(2, (s = t.url)),
				'id' in t && i(0, (n = t.id));
		}),
		[n, o, s]
	);
}
co.init(), co.dom();
export default class extends class {
	$destroy() {
		!(function (t, e) {
			const i = t.$$;
			null !== i.fragment &&
				(o(i.on_destroy),
				i.fragment && i.fragment.d(1),
				(i.on_destroy = i.fragment = null),
				(i.ctx = []));
		})(this),
			(this.$destroy = t);
	}
	$on(t, e) {
		const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
		return (
			i.push(e),
			() => {
				const t = i.indexOf(e);
				-1 !== t && i.splice(t, 1);
			}
		);
	}
	$set(t) {
		var e;
		this.$$set &&
			((e = t), 0 !== Object.keys(e).length) &&
			((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
	}
} {
	constructor(t) {
		super(), P(this, t, uo, ho, n, { options: 1, url: 2, id: 0 });
	}
	get options() {
		return this.$$.ctx[1];
	}
	set options(t) {
		this.$set({ options: t }), w();
	}
	get url() {
		return this.$$.ctx[2];
	}
	set url(t) {
		this.$set({ url: t }), w();
	}
	get id() {
		return this.$$.ctx[0];
	}
	set id(t) {
		this.$set({ id: t }), w();
	}
}
