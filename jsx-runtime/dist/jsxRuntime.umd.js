!(function (e, r) {
	'object' == typeof exports && 'undefined' != typeof module
		? r(
				exports,
				require('preact'),
				require('preact/hooks'),
				require('@ckateptb/reactive-core-js')
			)
		: 'function' == typeof define && define.amd
			? define(
					['exports', 'preact', 'preact/hooks', '@ckateptb/reactive-core-js'],
					r
				)
			: r(((e || self).jsxRuntime = {}), e.preact, e.hooks, e.reactiveCoreJs);
})(this, function (e, r, t, n) {
	var o = /["&<]/;
	function f(e) {
		if (0 === e.length || !1 === o.test(e)) return e;
		for (var r = 0, t = 0, n = '', f = ''; t < e.length; t++) {
			switch (e.charCodeAt(t)) {
				case 34:
					f = '&quot;';
					break;
				case 38:
					f = '&amp;';
					break;
				case 60:
					f = '&lt;';
					break;
				default:
					continue;
			}
			t !== r && (n += e.slice(r, t)), (n += f), (r = t + 1);
		}
		return t !== r && (n += e.slice(r, t)), n;
	}
	var i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		u = 0,
		c = Array.isArray,
		a = function (e) {
			if (c(e))
				return e.map(function (e) {
					return a(e);
				});
			if (
				'object' == typeof (i = e) &&
				'function' == typeof (null == i ? void 0 : i.subscribe)
			) {
				var r = t.useState(),
					o = r[0],
					f = r[1];
				return (
					t.useEffect(function () {
						var r = n.Flux.from(e)
							.doOnSubscribe(function (e) {
								return e.request(Number.MAX_SAFE_INTEGER);
							})
							.distinctUntilChanged()
							.doOnNext(f)
							.subscribe();
						return function () {
							return r.unsubscribe();
						};
					}, []),
					o
				);
			}
			var i;
			if ('object' == typeof e)
				for (var u = 0, p = Object.keys(e); u < p.length; u++) {
					var l = p[u];
					'props' === l ||
						l.startsWith('_') ||
						(null != e[l] && (e[l] = a(e[l])));
				}
			return e;
		};
	function p(e, t, n, o, f, i) {
		t || (t = {});
		var c,
			p,
			l = (t = a(t));
		if ('ref' in l)
			for (p in ((l = {}), t)) 'ref' == p ? (c = t[p]) : (l[p] = t[p]);
		var s = {
			type: e,
			props: l,
			key: n,
			ref: c,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --u,
			__i: -1,
			__u: 0,
			__source: f,
			__self: i
		};
		if ('function' == typeof e && (c = e.defaultProps))
			for (p in c) void 0 === l[p] && (l[p] = c[p]);
		return r.options.vnode && r.options.vnode(s), s;
	}
	var l = {},
		s = /[A-Z]/g;
	Object.defineProperty(e, 'Fragment', {
		enumerable: !0,
		get: function () {
			return r.Fragment;
		}
	}),
		(e.jsx = p),
		(e.jsxAttr = function (e, t) {
			if (r.options.attr) {
				var n = r.options.attr(e, t);
				if ('string' == typeof n) return n;
			}
			if ('ref' === e || 'key' === e) return '';
			if ('style' === e && 'object' == typeof t) {
				var o = '';
				for (var u in t) {
					var c = t[u];
					if (null != c && '' !== c) {
						var a =
								'-' == u[0]
									? u
									: l[u] || (l[u] = u.replace(s, '-$&').toLowerCase()),
							p = ';';
						'number' != typeof c ||
							a.startsWith('--') ||
							i.test(a) ||
							(p = 'px;'),
							(o = o + a + ':' + c + p);
					}
				}
				return e + '="' + o + '"';
			}
			return null == t ||
				!1 === t ||
				'function' == typeof t ||
				'object' == typeof t
				? ''
				: !0 === t
					? e
					: e + '="' + f(t) + '"';
		}),
		(e.jsxDEV = p),
		(e.jsxEscape = function e(r) {
			if (null == r || 'boolean' == typeof r || 'function' == typeof r)
				return null;
			if ('object' == typeof r) {
				if (void 0 === r.constructor) return r;
				if (c(r)) {
					for (var t = 0; t < r.length; t++) r[t] = e(r[t]);
					return r;
				}
			}
			return f('' + r);
		}),
		(e.jsxTemplate = function (e) {
			var t = p(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
			return (t.key = t.__v), t;
		}),
		(e.jsxs = p);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
