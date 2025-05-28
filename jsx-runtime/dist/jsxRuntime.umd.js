!(function (r, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(
				exports,
				require('preact'),
				require('preact/hooks'),
				require('reactor-core-ts')
			)
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/hooks', 'reactor-core-ts'], e)
			: e(((r || self).jsxRuntime = {}), r.preact, r.hooks, r.reactorCoreTs);
})(this, function (r, e, n, t) {
	var o = /["&<]/;
	function f(r) {
		if (0 === r.length || !1 === o.test(r)) return r;
		for (var e = 0, n = 0, t = '', f = ''; n < r.length; n++) {
			switch (r.charCodeAt(n)) {
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
			n !== e && (t += r.slice(e, n)), (t += f), (e = n + 1);
		}
		return n !== e && (t += r.slice(e, n)), t;
	}
	var u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		i = 0,
		c = Array.isArray,
		a = function (r) {
			if (c(r))
				return r.map(function (r) {
					return a(r);
				});
			if (
				'object' == typeof (u = r) &&
				'function' == typeof (null == u ? void 0 : u.subscribe)
			) {
				var e = n.useState(),
					o = e[0],
					f = e[1];
				return (
					n.useEffect(function () {
						var e = t.Flux.from(r)
							.doOnSubscribe(function (r) {
								return r.request(Number.MAX_SAFE_INTEGER);
							})
							.distinctUntilChanged()
							.subscribe({
								onNext: function (r) {
									return f(r);
								},
								onError: function (r) {
									return console.error(r);
								}
							});
						return function () {
							return e.unsubscribe();
						};
					}, []),
					o
				);
			}
			var u;
			if ('object' == typeof r)
				for (var i = 0, l = Object.keys(r); i < l.length; i++) {
					var p = l[i];
					'props' === p ||
						p.startsWith('_') ||
						(null != r[p] && (r[p] = a(r[p])));
				}
			return r;
		};
	function l(r, n, t, o, f, u) {
		n || (n = {});
		var c,
			l,
			p = (n = a(n));
		if ('ref' in p)
			for (l in ((p = {}), n)) 'ref' == l ? (c = n[l]) : (p[l] = n[l]);
		var s = {
			type: r,
			props: p,
			key: t,
			ref: c,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: void 0,
			__v: --i,
			__i: -1,
			__u: 0,
			__source: f,
			__self: u
		};
		if ('function' == typeof r && (c = r.defaultProps))
			for (l in c) void 0 === p[l] && (p[l] = c[l]);
		return e.options.vnode && e.options.vnode(s), s;
	}
	var p = {},
		s = /[A-Z]/g;
	Object.defineProperty(r, 'Fragment', {
		enumerable: !0,
		get: function () {
			return e.Fragment;
		}
	}),
		(r.jsx = l),
		(r.jsxAttr = function (r, n) {
			if (e.options.attr) {
				var t = e.options.attr(r, n);
				if ('string' == typeof t) return t;
			}
			if ('ref' === r || 'key' === r) return '';
			if ('style' === r && 'object' == typeof n) {
				var o = '';
				for (var i in n) {
					var c = n[i];
					if (null != c && '' !== c) {
						var a =
								'-' == i[0]
									? i
									: p[i] || (p[i] = i.replace(s, '-$&').toLowerCase()),
							l = ';';
						'number' != typeof c ||
							a.startsWith('--') ||
							u.test(a) ||
							(l = 'px;'),
							(o = o + a + ':' + c + l);
					}
				}
				return r + '="' + o + '"';
			}
			return null == n ||
				!1 === n ||
				'function' == typeof n ||
				'object' == typeof n
				? ''
				: !0 === n
					? r
					: r + '="' + f(n) + '"';
		}),
		(r.jsxDEV = l),
		(r.jsxEscape = function r(e) {
			if (null == e || 'boolean' == typeof e || 'function' == typeof e)
				return null;
			if ('object' == typeof e) {
				if (void 0 === e.constructor) return e;
				if (c(e)) {
					for (var n = 0; n < e.length; n++) e[n] = r(e[n]);
					return e;
				}
			}
			return f('' + e);
		}),
		(r.jsxTemplate = function (r) {
			var n = l(e.Fragment, { tpl: r, exprs: [].slice.call(arguments, 1) });
			return (n.key = n.__v), n;
		}),
		(r.jsxs = l);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
