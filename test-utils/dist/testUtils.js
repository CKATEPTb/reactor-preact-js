var r = require('preact');
function t() {
	return (
		(r.options.t = r.options.debounceRendering),
		(r.options.debounceRendering = function (t) {
			return (r.options.o = t);
		}),
		function () {
			return r.options.o && r.options.o();
		}
	);
}
var n = function (r) {
		return null != r && 'function' == typeof r.then;
	},
	o = 0;
function e() {
	r.options.o && (r.options.o(), delete r.options.o),
		void 0 !== r.options.t
			? ((r.options.debounceRendering = r.options.t), delete r.options.t)
			: (r.options.debounceRendering = void 0);
}
(exports.act = function (u) {
	if (++o > 1) {
		try {
			var i = u();
			if (n(i))
				return i.then(
					function () {
						--o;
					},
					function (r) {
						throw (--o, r);
					}
				);
		} catch (r) {
			throw (--o, r);
		}
		return --o, Promise.resolve();
	}
	var c,
		f = r.options.requestAnimationFrame,
		a = t(),
		h = [];
	r.options.requestAnimationFrame = function (r) {
		return h.push(r);
	};
	var v,
		l,
		p = function () {
			try {
				for (a(); h.length; )
					(c = h),
						(h = []),
						c.forEach(function (r) {
							return r();
						}),
						a();
			} catch (r) {
				v || (v = r);
			} finally {
				e();
			}
			(r.options.requestAnimationFrame = f), --o;
		};
	try {
		l = u();
	} catch (r) {
		v = r;
	}
	if (n(l))
		return l.then(p, function (r) {
			throw (p(), r);
		});
	if ((p(), v)) throw v;
	return Promise.resolve();
}),
	(exports.setupRerender = t),
	(exports.teardown = e);
//# sourceMappingURL=testUtils.js.map
