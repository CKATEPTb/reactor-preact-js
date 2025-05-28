import { options as r, Fragment as n } from 'preact';
export { Fragment } from 'preact';
import { useState as t, useEffect as e } from 'preact/hooks';
import { Flux as o } from 'reactor-core-ts';
var f = /["&<]/;
function u(r) {
	if (0 === r.length || !1 === f.test(r)) return r;
	for (var n = 0, t = 0, e = '', o = ''; t < r.length; t++) {
		switch (r.charCodeAt(t)) {
			case 34:
				o = '&quot;';
				break;
			case 38:
				o = '&amp;';
				break;
			case 60:
				o = '&lt;';
				break;
			default:
				continue;
		}
		t !== n && (e += r.slice(n, t)), (e += o), (n = t + 1);
	}
	return t !== n && (e += r.slice(n, t)), e;
}
var i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	c = 0,
	a = Array.isArray,
	p = function (r) {
		if (a(r))
			return r.map(function (r) {
				return p(r);
			});
		if (
			'object' == typeof (i = r) &&
			'function' == typeof (null == i ? void 0 : i.subscribe)
		) {
			var n = t(),
				f = n[0],
				u = n[1];
			return (
				e(function () {
					var n = o
						.from(r)
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
						return n.unsubscribe();
					};
				}, []),
				f
			);
		}
		var i;
		if ('object' == typeof r)
			for (var c = 0, l = Object.keys(r); c < l.length; c++) {
				var s = l[c];
				'props' === s ||
					s.startsWith('_') ||
					(null != r[s] && (r[s] = p(r[s])));
			}
		return r;
	};
function l(n, t, e, o, f, u) {
	t || (t = {});
	var i,
		a,
		l = (t = p(t));
	if ('ref' in l)
		for (a in ((l = {}), t)) 'ref' == a ? (i = t[a]) : (l[a] = t[a]);
	var s = {
		type: n,
		props: l,
		key: e,
		ref: i,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --c,
		__i: -1,
		__u: 0,
		__source: f,
		__self: u
	};
	if ('function' == typeof n && (i = n.defaultProps))
		for (a in i) void 0 === l[a] && (l[a] = i[a]);
	return r.vnode && r.vnode(s), s;
}
function s(r) {
	var t = l(n, { tpl: r, exprs: [].slice.call(arguments, 1) });
	return (t.key = t.__v), t;
}
var v = {},
	_ = /[A-Z]/g;
function y(n, t) {
	if (r.attr) {
		var e = r.attr(n, t);
		if ('string' == typeof e) return e;
	}
	if ('ref' === n || 'key' === n) return '';
	if ('style' === n && 'object' == typeof t) {
		var o = '';
		for (var f in t) {
			var c = t[f];
			if (null != c && '' !== c) {
				var a =
						'-' == f[0]
							? f
							: v[f] || (v[f] = f.replace(_, '-$&').toLowerCase()),
					p = ';';
				'number' != typeof c || a.startsWith('--') || i.test(a) || (p = 'px;'),
					(o = o + a + ':' + c + p);
			}
		}
		return n + '="' + o + '"';
	}
	return null == t || !1 === t || 'function' == typeof t || 'object' == typeof t
		? ''
		: !0 === t
			? n
			: n + '="' + u(t) + '"';
}
function b(r) {
	if (null == r || 'boolean' == typeof r || 'function' == typeof r) return null;
	if ('object' == typeof r) {
		if (void 0 === r.constructor) return r;
		if (a(r)) {
			for (var n = 0; n < r.length; n++) r[n] = b(r[n]);
			return r;
		}
	}
	return u('' + r);
}
export {
	l as jsx,
	y as jsxAttr,
	l as jsxDEV,
	b as jsxEscape,
	s as jsxTemplate,
	l as jsxs
};
//# sourceMappingURL=jsxRuntime.module.js.map
