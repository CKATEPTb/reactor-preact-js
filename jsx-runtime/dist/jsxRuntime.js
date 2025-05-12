var r = require('preact'),
	e = require('preact/hooks'),
	t = require('@ckateptb/reactive-core-js'),
	n = /["&<]/;
function o(r) {
	if (0 === r.length || !1 === n.test(r)) return r;
	for (var e = 0, t = 0, o = '', u = ''; t < r.length; t++) {
		switch (r.charCodeAt(t)) {
			case 34:
				u = '&quot;';
				break;
			case 38:
				u = '&amp;';
				break;
			case 60:
				u = '&lt;';
				break;
			default:
				continue;
		}
		t !== e && (o += r.slice(e, t)), (o += u), (e = t + 1);
	}
	return t !== e && (o += r.slice(e, t)), o;
}
var u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	f = 0,
	i = Array.isArray,
	c = function (r) {
		if (i(r))
			return r.map(function (r) {
				return c(r);
			});
		if (
			'object' == typeof (f = r) &&
			'function' == typeof (null == f ? void 0 : f.subscribe)
		) {
			var n = e.useState(),
				o = n[0],
				u = n[1];
			return (
				e.useEffect(function () {
					var e = t.Flux.from(r)
						.doOnSubscribe(function (r) {
							return r.request(Number.MAX_SAFE_INTEGER);
						})
						.distinctUntilChanged()
						.subscribe({
							onNext: function (r) {
								return u(r);
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
		var f;
		if ('object' == typeof r)
			for (var a = 0, p = Object.keys(r); a < p.length; a++) {
				var l = p[a];
				'props' === l ||
					l.startsWith('_') ||
					(null != r[l] && (r[l] = c(r[l])));
			}
		return r;
	};
function a(e, t, n, o, u, i) {
	t || (t = {});
	var a,
		p,
		l = (t = c(t));
	if ('ref' in l)
		for (p in ((l = {}), t)) 'ref' == p ? (a = t[p]) : (l[p] = t[p]);
	var s = {
		type: e,
		props: l,
		key: n,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --f,
		__i: -1,
		__u: 0,
		__source: u,
		__self: i
	};
	if ('function' == typeof e && (a = e.defaultProps))
		for (p in a) void 0 === l[p] && (l[p] = a[p]);
	return r.options.vnode && r.options.vnode(s), s;
}
var p = {},
	l = /[A-Z]/g;
Object.defineProperty(exports, 'Fragment', {
	enumerable: !0,
	get: function () {
		return r.Fragment;
	}
}),
	(exports.jsx = a),
	(exports.jsxAttr = function (e, t) {
		if (r.options.attr) {
			var n = r.options.attr(e, t);
			if ('string' == typeof n) return n;
		}
		if ('ref' === e || 'key' === e) return '';
		if ('style' === e && 'object' == typeof t) {
			var f = '';
			for (var i in t) {
				var c = t[i];
				if (null != c && '' !== c) {
					var a =
							'-' == i[0]
								? i
								: p[i] || (p[i] = i.replace(l, '-$&').toLowerCase()),
						s = ';';
					'number' != typeof c ||
						a.startsWith('--') ||
						u.test(a) ||
						(s = 'px;'),
						(f = f + a + ':' + c + s);
				}
			}
			return e + '="' + f + '"';
		}
		return null == t ||
			!1 === t ||
			'function' == typeof t ||
			'object' == typeof t
			? ''
			: !0 === t
				? e
				: e + '="' + o(t) + '"';
	}),
	(exports.jsxDEV = a),
	(exports.jsxEscape = function r(e) {
		if (null == e || 'boolean' == typeof e || 'function' == typeof e)
			return null;
		if ('object' == typeof e) {
			if (void 0 === e.constructor) return e;
			if (i(e)) {
				for (var t = 0; t < e.length; t++) e[t] = r(e[t]);
				return e;
			}
		}
		return o('' + e);
	}),
	(exports.jsxTemplate = function (e) {
		var t = a(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
		return (t.key = t.__v), t;
	}),
	(exports.jsxs = a);
//# sourceMappingURL=jsxRuntime.js.map
