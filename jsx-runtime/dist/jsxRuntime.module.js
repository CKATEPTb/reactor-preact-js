import { options as r, Fragment as t } from 'preact';
export { Fragment } from 'preact';
import { useState as e, useEffect as n } from 'preact/hooks';
import { Flux as o } from '@ckateptb/reactive-core-js';
var f = /["&<]/;
function u(r) {
	if (0 === r.length || !1 === f.test(r)) return r;
	for (var t = 0, e = 0, n = '', o = ''; e < r.length; e++) {
		switch (r.charCodeAt(e)) {
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
		e !== t && (n += r.slice(t, e)), (n += o), (t = e + 1);
	}
	return e !== t && (n += r.slice(t, e)), n;
}
var i = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	a = 0,
	c = Array.isArray,
	p = function (r) {
		if (c(r))
			return r.map(function (r) {
				return p(r);
			});
		if (
			'object' == typeof (i = r) &&
			'function' == typeof (null == i ? void 0 : i.subscribe)
		) {
			var t = e(),
				f = t[0],
				u = t[1];
			return (
				n(function () {
					var t = o
						.from(r)
						.doOnSubscribe(function (r) {
							return r.request(Number.MAX_SAFE_INTEGER);
						})
						.distinctUntilChanged()
						.doOnNext(u)
						.subscribe();
					return function () {
						return t.unsubscribe();
					};
				}, []),
				f
			);
		}
		var i;
		if ('object' == typeof r)
			for (var a = 0, l = Object.keys(r); a < l.length; a++) {
				var v = l[a];
				'props' === v ||
					v.startsWith('_') ||
					(null != r[v] && (r[v] = p(r[v])));
			}
		return r;
	};
function l(t, e, n, o, f, u) {
	e || (e = {});
	var i,
		c,
		l = (e = p(e));
	if ('ref' in l)
		for (c in ((l = {}), e)) 'ref' == c ? (i = e[c]) : (l[c] = e[c]);
	var v = {
		type: t,
		props: l,
		key: n,
		ref: i,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --a,
		__i: -1,
		__u: 0,
		__source: f,
		__self: u
	};
	if ('function' == typeof t && (i = t.defaultProps))
		for (c in i) void 0 === l[c] && (l[c] = i[c]);
	return r.vnode && r.vnode(v), v;
}
function v(r) {
	var e = l(t, { tpl: r, exprs: [].slice.call(arguments, 1) });
	return (e.key = e.__v), e;
}
var s = {},
	_ = /[A-Z]/g;
function y(t, e) {
	if (r.attr) {
		var n = r.attr(t, e);
		if ('string' == typeof n) return n;
	}
	if ('ref' === t || 'key' === t) return '';
	if ('style' === t && 'object' == typeof e) {
		var o = '';
		for (var f in e) {
			var a = e[f];
			if (null != a && '' !== a) {
				var c =
						'-' == f[0]
							? f
							: s[f] || (s[f] = f.replace(_, '-$&').toLowerCase()),
					p = ';';
				'number' != typeof a || c.startsWith('--') || i.test(c) || (p = 'px;'),
					(o = o + c + ':' + a + p);
			}
		}
		return t + '="' + o + '"';
	}
	return null == e || !1 === e || 'function' == typeof e || 'object' == typeof e
		? ''
		: !0 === e
			? t
			: t + '="' + u(e) + '"';
}
function b(r) {
	if (null == r || 'boolean' == typeof r || 'function' == typeof r) return null;
	if ('object' == typeof r) {
		if (void 0 === r.constructor) return r;
		if (c(r)) {
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
	v as jsxTemplate,
	l as jsxs
};
//# sourceMappingURL=jsxRuntime.module.js.map
