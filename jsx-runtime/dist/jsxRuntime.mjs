import { options as r, Fragment as t } from 'preact';
export { Fragment } from 'preact';
import { useState as n, useEffect as e } from 'preact/hooks';
import { Flux as o } from '@ckateptb/reactive-core-js';
var f = /["&<]/;
function u(r) {
	if (0 === r.length || !1 === f.test(r)) return r;
	for (var t = 0, n = 0, e = '', o = ''; n < r.length; n++) {
		switch (r.charCodeAt(n)) {
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
		n !== t && (e += r.slice(t, n)), (e += o), (t = n + 1);
	}
	return n !== t && (e += r.slice(t, n)), e;
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
			var t = n(),
				f = t[0],
				u = t[1];
			return (
				e(function () {
					var t = o
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
						return t.unsubscribe();
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
function l(t, n, e, o, f, u) {
	n || (n = {});
	var i,
		a,
		l = (n = p(n));
	if ('ref' in l)
		for (a in ((l = {}), n)) 'ref' == a ? (i = n[a]) : (l[a] = n[a]);
	var s = {
		type: t,
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
	if ('function' == typeof t && (i = t.defaultProps))
		for (a in i) void 0 === l[a] && (l[a] = i[a]);
	return r.vnode && r.vnode(s), s;
}
function s(r) {
	var n = l(t, { tpl: r, exprs: [].slice.call(arguments, 1) });
	return (n.key = n.__v), n;
}
var v = {},
	_ = /[A-Z]/g;
function y(t, n) {
	if (r.attr) {
		var e = r.attr(t, n);
		if ('string' == typeof e) return e;
	}
	if ('ref' === t || 'key' === t) return '';
	if ('style' === t && 'object' == typeof n) {
		var o = '';
		for (var f in n) {
			var c = n[f];
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
		return t + '="' + o + '"';
	}
	return null == n || !1 === n || 'function' == typeof n || 'object' == typeof n
		? ''
		: !0 === n
			? t
			: t + '="' + u(n) + '"';
}
function b(r) {
	if (null == r || 'boolean' == typeof r || 'function' == typeof r) return null;
	if ('object' == typeof r) {
		if (void 0 === r.constructor) return r;
		if (a(r)) {
			for (var t = 0; t < r.length; t++) r[t] = b(r[t]);
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
