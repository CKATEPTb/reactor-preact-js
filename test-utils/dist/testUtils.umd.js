!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], t)
			: t(((n || self).preactTestUtils = {}), n.preact);
})(this, function (n, t) {
	function e() {
		return (
			(t.options.t = t.options.debounceRendering),
			(t.options.debounceRendering = function (n) {
				return (t.options.o = n);
			}),
			function () {
				return t.options.o && t.options.o();
			}
		);
	}
	var r = function (n) {
			return null != n && 'function' == typeof n.then;
		},
		o = 0;
	function i() {
		t.options.o && (t.options.o(), delete t.options.o),
			void 0 !== t.options.t
				? ((t.options.debounceRendering = t.options.t), delete t.options.t)
				: (t.options.debounceRendering = void 0);
	}
	(n.act = function (n) {
		if (++o > 1) {
			try {
				var f = n();
				if (r(f))
					return f.then(
						function () {
							--o;
						},
						function (n) {
							throw (--o, n);
						}
					);
			} catch (n) {
				throw (--o, n);
			}
			return --o, Promise.resolve();
		}
		var u,
			c = t.options.requestAnimationFrame,
			a = e(),
			d = [];
		t.options.requestAnimationFrame = function (n) {
			return d.push(n);
		};
		var l,
			h,
			p = function () {
				try {
					for (a(); d.length; )
						(u = d),
							(d = []),
							u.forEach(function (n) {
								return n();
							}),
							a();
				} catch (n) {
					l || (l = n);
				} finally {
					i();
				}
				(t.options.requestAnimationFrame = c), --o;
			};
		try {
			h = n();
		} catch (n) {
			l = n;
		}
		if (r(h))
			return h.then(p, function (n) {
				throw (p(), n);
			});
		if ((p(), l)) throw l;
		return Promise.resolve();
	}),
		(n.setupRerender = e),
		(n.teardown = i);
});
//# sourceMappingURL=testUtils.umd.js.map
