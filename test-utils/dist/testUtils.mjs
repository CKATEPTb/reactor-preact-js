import { options as t } from 'preact';
function n() {
	return (
		(t.t = t.debounceRendering),
		(t.debounceRendering = function (n) {
			return (t.o = n);
		}),
		function () {
			return t.o && t.o();
		}
	);
}
var r = function (t) {
		return null != t && 'function' == typeof t.then;
	},
	o = 0;
function u(u) {
	if (++o > 1) {
		try {
			var e = u();
			if (r(e))
				return e.then(
					function () {
						--o;
					},
					function (t) {
						throw (--o, t);
					}
				);
		} catch (t) {
			throw (--o, t);
		}
		return --o, Promise.resolve();
	}
	var f,
		c = t.requestAnimationFrame,
		a = n(),
		h = [];
	t.requestAnimationFrame = function (t) {
		return h.push(t);
	};
	var l,
		v,
		y = function () {
			try {
				for (a(); h.length; )
					(f = h),
						(h = []),
						f.forEach(function (t) {
							return t();
						}),
						a();
			} catch (t) {
				l || (l = t);
			} finally {
				i();
			}
			(t.requestAnimationFrame = c), --o;
		};
	try {
		v = u();
	} catch (t) {
		l = t;
	}
	if (r(v))
		return v.then(y, function (t) {
			throw (y(), t);
		});
	if ((y(), l)) throw l;
	return Promise.resolve();
}
function i() {
	t.o && (t.o(), delete t.o),
		void 0 !== t.t
			? ((t.debounceRendering = t.t), delete t.t)
			: (t.debounceRendering = void 0);
}
export { u as act, n as setupRerender, i as teardown };
//# sourceMappingURL=testUtils.module.js.map
