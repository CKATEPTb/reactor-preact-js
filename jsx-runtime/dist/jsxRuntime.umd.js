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
})(this, function (e, r, n, t) {
	var o = /["&<]/;
	function f(e) {
		if (0 === e.length || !1 === o.test(e)) return e;
		for (var r = 0, n = 0, t = '', f = ''; n < e.length; n++) {
			switch (e.charCodeAt(n)) {
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
			n !== r && (t += e.slice(r, n)), (t += f), (r = n + 1);
		}
		return n !== r && (t += e.slice(r, n)), t;
	}
	var u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		i = 0,
		c = Array.isArray,
		a = function (e) {
			if (c(e))
				return e.map(function (e) {
					return a(e);
				});
			if (
				'object' == typeof (u = e) &&
				'function' == typeof (null == u ? void 0 : u.subscribe)
			) {
				var r = n.useState(),
					o = r[0],
					f = r[1];
				return (
					n.useEffect(function () {
						var r = t.Flux.from(e)
							.doOnSubscribe(function (e) {
								return e.request(Number.MAX_SAFE_INTEGER);
							})
							.distinctUntilChanged()
							.subscribe({
								onNext: function (e) {
									return f(e);
								},
								onError: function (e) {
									return console.error(e);
								}
							});
						return function () {
							return r.unsubscribe();
						};
					}, []),
					o
				);
			}
			var u;
			if ('object' == typeof e)
				for (var i = 0, p = Object.keys(e); i < p.length; i++) {
					var l = p[i];
					'props' === l ||
						l.startsWith('_') ||
						(null != e[l] && (e[l] = a(e[l])));
				}
			return e;
		};
	function p(e, n, t, o, f, u) {
		n || (n = {});
		var c,
			p,
			l = (n = a(n));
		if ('ref' in l)
			for (p in ((l = {}), n)) 'ref' == p ? (c = n[p]) : (l[p] = n[p]);
		var s = {
			type: e,
			props: l,
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
		(e.jsxAttr = function (e, n) {
			if (r.options.attr) {
				var t = r.options.attr(e, n);
				if ('string' == typeof t) return t;
			}
			if ('ref' === e || 'key' === e) return '';
			if ('style' === e && 'object' == typeof n) {
				var o = '';
				for (var i in n) {
					var c = n[i];
					if (null != c && '' !== c) {
						var a =
								'-' == i[0]
									? i
									: l[i] || (l[i] = i.replace(s, '-$&').toLowerCase()),
							p = ';';
						'number' != typeof c ||
							a.startsWith('--') ||
							u.test(a) ||
							(p = 'px;'),
							(o = o + a + ':' + c + p);
					}
				}
				return e + '="' + o + '"';
			}
			return null == n ||
				!1 === n ||
				'function' == typeof n ||
				'object' == typeof n
				? ''
				: !0 === n
					? e
					: e + '="' + f(n) + '"';
		}),
		(e.jsxDEV = p),
		(e.jsxEscape = function e(r) {
			if (null == r || 'boolean' == typeof r || 'function' == typeof r)
				return null;
			if ('object' == typeof r) {
				if (void 0 === r.constructor) return r;
				if (c(r)) {
					for (var n = 0; n < r.length; n++) r[n] = e(r[n]);
					return r;
				}
			}
			return f('' + r);
		}),
		(e.jsxTemplate = function (e) {
			var n = p(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
			return (n.key = n.__v), n;
		}),
		(e.jsxs = p);
});
//# sourceMappingURL=jsxRuntime.umd.js.map
