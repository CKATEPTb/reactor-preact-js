!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'), require('preact/hooks'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/hooks'], t)
			: t(((n || self).preactCompat = {}), n.preact, n.preactHooks);
})(this, function (n, t, e) {
	function r(n, t) {
		for (var e in t) n[e] = t[e];
		return n;
	}
	function u(n, t) {
		for (var e in n) if ('__source' !== e && !(e in t)) return !0;
		for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
		return !1;
	}
	function o(n, t) {
		var r = t(),
			u = e.useState({ t: { __: r, u: t } }),
			o = u[0].t,
			c = u[1];
		return (
			e.useLayoutEffect(
				function () {
					(o.__ = r), (o.u = t), i(o) && c({ t: o });
				},
				[n, r, t]
			),
			e.useEffect(
				function () {
					return (
						i(o) && c({ t: o }),
						n(function () {
							i(o) && c({ t: o });
						})
					);
				},
				[n]
			),
			r
		);
	}
	function i(n) {
		var t,
			e,
			r = n.u,
			u = n.__;
		try {
			var o = r();
			return !(
				((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e)) ||
				(t != t && e != e)
			);
		} catch (n) {
			return !0;
		}
	}
	function c(n) {
		n();
	}
	function f(n) {
		return n;
	}
	function l() {
		return [!1, c];
	}
	var a = e.useLayoutEffect;
	function s(n, t) {
		(this.props = n), (this.context = t);
	}
	function h(n, e) {
		function r(n) {
			var t = this.props.ref,
				r = t == n.ref;
			return (
				!r && t && (t.call ? t(null) : (t.current = null)),
				e ? !e(this.props, n) || !r : u(this.props, n)
			);
		}
		function o(e) {
			return (this.shouldComponentUpdate = r), t.createElement(n, e);
		}
		return (
			(o.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
			(o.prototype.isReactComponent = !0),
			(o.__f = !0),
			o
		);
	}
	((s.prototype = new t.Component()).isPureReactComponent = !0),
		(s.prototype.shouldComponentUpdate = function (n, t) {
			return u(this.props, n) || u(this.state, t);
		});
	var d = t.options.__b;
	t.options.__b = function (n) {
		n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
			d && d(n);
	};
	var v =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.forward_ref')) ||
		3911;
	function p(n) {
		function t(t) {
			var e = r({}, t);
			return delete e.ref, n(e, t.ref || null);
		}
		return (
			(t.$$typeof = v),
			(t.render = t),
			(t.prototype.isReactComponent = t.__f = !0),
			(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
			t
		);
	}
	var m = function (n, e) {
			return null == n ? null : t.toChildArray(t.toChildArray(n).map(e));
		},
		b = {
			map: m,
			forEach: m,
			count: function (n) {
				return n ? t.toChildArray(n).length : 0;
			},
			only: function (n) {
				var e = t.toChildArray(n);
				if (1 !== e.length) throw 'Children.only';
				return e[0];
			},
			toArray: t.toChildArray
		},
		y = t.options.__e;
	t.options.__e = function (n, t, e, r) {
		if (n.then)
			for (var u, o = t; (o = o.__); )
				if ((u = o.__c) && u.__c)
					return (
						null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t)
					);
		y(n, t, e, r);
	};
	var _ = t.options.unmount;
	function g(n, t, e) {
		return (
			n &&
				(n.__c &&
					n.__c.__H &&
					(n.__c.__H.__.forEach(function (n) {
						'function' == typeof n.__c && n.__c();
					}),
					(n.__c.__H = null)),
				null != (n = r({}, n)).__c &&
					(n.__c.__P === e && (n.__c.__P = t),
					(n.__c.__e = !0),
					(n.__c = null)),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return g(n, t, e);
					}))),
			n
		);
	}
	function S(n, t, e) {
		return (
			n &&
				e &&
				((n.__v = null),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return S(n, t, e);
					})),
				n.__c &&
					n.__c.__P === t &&
					(n.__e && e.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = e))),
			n
		);
	}
	function E() {
		(this.__u = 0), (this.o = null), (this.__b = null);
	}
	function C(n) {
		var t = n.__.__c;
		return t && t.__a && t.__a(n);
	}
	function x(n) {
		var e, r, u;
		function o(o) {
			if (
				(e ||
					(e = n()).then(
						function (n) {
							r = n.default || n;
						},
						function (n) {
							u = n;
						}
					),
				u)
			)
				throw u;
			if (!r) throw e;
			return t.createElement(r, o);
		}
		return (o.displayName = 'Lazy'), (o.__f = !0), o;
	}
	function O() {
		(this.i = null), (this.l = null);
	}
	(t.options.unmount = function (n) {
		var t = n.__c;
		t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), _ && _(n);
	}),
		((E.prototype = new t.Component()).__c = function (n, t) {
			var e = t.__c,
				r = this;
			null == r.o && (r.o = []), r.o.push(e);
			var u = C(r.__v),
				o = !1,
				i = function () {
					o || ((o = !0), (e.__R = null), u ? u(c) : c());
				};
			e.__R = i;
			var c = function () {
				if (!--r.__u) {
					if (r.state.__a) {
						var n = r.state.__a;
						r.__v.__k[0] = S(n, n.__c.__P, n.__c.__O);
					}
					var t;
					for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
						t.forceUpdate();
				}
			};
			r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
				n.then(i, i);
		}),
		(E.prototype.componentWillUnmount = function () {
			this.o = [];
		}),
		(E.prototype.render = function (n, e) {
			if (this.__b) {
				if (this.__v.__k) {
					var r = document.createElement('div'),
						u = this.__v.__k[0].__c;
					this.__v.__k[0] = g(this.__b, r, (u.__O = u.__P));
				}
				this.__b = null;
			}
			var o = e.__a && t.createElement(t.Fragment, null, n.fallback);
			return (
				o && (o.__u &= -33),
				[t.createElement(t.Fragment, null, e.__a ? null : n.children), o]
			);
		});
	var R = function (n, t, e) {
		if (
			(++e[1] === e[0] && n.l.delete(t),
			n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.l.size))
		)
			for (e = n.i; e; ) {
				for (; e.length > 3; ) e.pop()();
				if (e[1] < e[0]) break;
				n.i = e = e[2];
			}
	};
	function w(n) {
		return (
			(this.getChildContext = function () {
				return n.context;
			}),
			n.children
		);
	}
	function j(n) {
		var e = this,
			r = n.h;
		if (
			((e.componentWillUnmount = function () {
				t.render(null, e.v), (e.v = null), (e.h = null);
			}),
			e.h && e.h !== r && e.componentWillUnmount(),
			!e.v)
		) {
			for (var u = e.__v; null !== u && !u.__m && null !== u.__; ) u = u.__;
			(e.h = r),
				(e.v = {
					nodeType: 1,
					parentNode: r,
					childNodes: [],
					__k: { __m: u.__m },
					contains: function () {
						return !0;
					},
					appendChild: function (n) {
						this.childNodes.push(n), e.h.appendChild(n);
					},
					insertBefore: function (n, t) {
						this.childNodes.push(n), e.h.insertBefore(n, t);
					},
					removeChild: function (n) {
						this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
							e.h.removeChild(n);
					}
				});
		}
		t.render(t.createElement(w, { context: e.context }, n.__v), e.v);
	}
	function k(n, e) {
		var r = t.createElement(j, { __v: n, h: e });
		return (r.containerInfo = e), r;
	}
	((O.prototype = new t.Component()).__a = function (n) {
		var t = this,
			e = C(t.__v),
			r = t.l.get(n);
		return (
			r[0]++,
			function (u) {
				var o = function () {
					t.props.revealOrder ? (r.push(u), R(t, n, r)) : u();
				};
				e ? e(o) : o();
			}
		);
	}),
		(O.prototype.render = function (n) {
			(this.i = null), (this.l = new Map());
			var e = t.toChildArray(n.children);
			n.revealOrder && 'b' === n.revealOrder[0] && e.reverse();
			for (var r = e.length; r--; ) this.l.set(e[r], (this.i = [1, 0, this.i]));
			return n.children;
		}),
		(O.prototype.componentDidUpdate = O.prototype.componentDidMount =
			function () {
				var n = this;
				this.l.forEach(function (t, e) {
					R(n, e, t);
				});
			});
	var T =
			('undefined' != typeof Symbol &&
				Symbol.for &&
				Symbol.for('react.element')) ||
			60103,
		I =
			/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		N = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
		M = /[A-Z0-9]/g,
		A = 'undefined' != typeof document,
		D = function (n) {
			return (
				'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
					? /fil|che|rad/
					: /fil|che|ra/
			).test(n);
		};
	function L(n, e, r) {
		return (
			null == e.__k && (e.textContent = ''),
			t.render(n, e),
			'function' == typeof r && r(),
			n ? n.__c : null
		);
	}
	function F(n, e, r) {
		return t.hydrate(n, e), 'function' == typeof r && r(), n ? n.__c : null;
	}
	(t.Component.prototype.isReactComponent = {}),
		[
			'componentWillMount',
			'componentWillReceiveProps',
			'componentWillUpdate'
		].forEach(function (n) {
			Object.defineProperty(t.Component.prototype, n, {
				configurable: !0,
				get: function () {
					return this['UNSAFE_' + n];
				},
				set: function (t) {
					Object.defineProperty(this, n, {
						configurable: !0,
						writable: !0,
						value: t
					});
				}
			});
		});
	var U = t.options.event;
	function V() {}
	function W() {
		return this.cancelBubble;
	}
	function P() {
		return this.defaultPrevented;
	}
	t.options.event = function (n) {
		return (
			U && (n = U(n)),
			(n.persist = V),
			(n.isPropagationStopped = W),
			(n.isDefaultPrevented = P),
			(n.nativeEvent = n)
		);
	};
	var z,
		B = {
			enumerable: !1,
			configurable: !0,
			get: function () {
				return this.class;
			}
		},
		H = t.options.vnode;
	t.options.vnode = function (n) {
		'string' == typeof n.type &&
			(function (n) {
				var e = n.props,
					r = n.type,
					u = {},
					o = -1 === r.indexOf('-');
				for (var i in e) {
					var c = e[i];
					if (
						!(
							('value' === i && 'defaultValue' in e && null == c) ||
							(A && 'children' === i && 'noscript' === r) ||
							'class' === i ||
							'className' === i
						)
					) {
						var f = i.toLowerCase();
						'defaultValue' === i && 'value' in e && null == e.value
							? (i = 'value')
							: 'download' === i && !0 === c
								? (c = '')
								: 'translate' === f && 'no' === c
									? (c = !1)
									: 'o' === f[0] && 'n' === f[1]
										? 'ondoubleclick' === f
											? (i = 'ondblclick')
											: 'onchange' !== f ||
													('input' !== r && 'textarea' !== r) ||
													D(e.type)
												? 'onfocus' === f
													? (i = 'onfocusin')
													: 'onblur' === f
														? (i = 'onfocusout')
														: N.test(i) && (i = f)
												: (f = i = 'oninput')
										: o && I.test(i)
											? (i = i.replace(M, '-$&').toLowerCase())
											: null === c && (c = void 0),
							'oninput' === f && u[(i = f)] && (i = 'oninputCapture'),
							(u[i] = c);
					}
				}
				'select' == r &&
					u.multiple &&
					Array.isArray(u.value) &&
					(u.value = t.toChildArray(e.children).forEach(function (n) {
						n.props.selected = -1 != u.value.indexOf(n.props.value);
					})),
					'select' == r &&
						null != u.defaultValue &&
						(u.value = t.toChildArray(e.children).forEach(function (n) {
							n.props.selected = u.multiple
								? -1 != u.defaultValue.indexOf(n.props.value)
								: u.defaultValue == n.props.value;
						})),
					e.class && !e.className
						? ((u.class = e.class), Object.defineProperty(u, 'className', B))
						: ((e.className && !e.class) || (e.class && e.className)) &&
							(u.class = u.className = e.className),
					(n.props = u);
			})(n),
			(n.$$typeof = T),
			H && H(n);
	};
	var q = t.options.__r;
	t.options.__r = function (n) {
		q && q(n), (z = n.__c);
	};
	var Z = t.options.diffed;
	t.options.diffed = function (n) {
		Z && Z(n);
		var t = n.props,
			e = n.__e;
		null != e &&
			'textarea' === n.type &&
			'value' in t &&
			t.value !== e.value &&
			(e.value = null == t.value ? '' : t.value),
			(z = null);
	};
	var Y = {
			ReactCurrentDispatcher: {
				current: {
					readContext: function (n) {
						return z.__n[n.__c].props.value;
					},
					useCallback: e.useCallback,
					useContext: e.useContext,
					useDebugValue: e.useDebugValue,
					useDeferredValue: f,
					useEffect: e.useEffect,
					useId: e.useId,
					useImperativeHandle: e.useImperativeHandle,
					useInsertionEffect: a,
					useLayoutEffect: e.useLayoutEffect,
					useMemo: e.useMemo,
					useReducer: e.useReducer,
					useRef: e.useRef,
					useState: e.useState,
					useSyncExternalStore: o,
					useTransition: l
				}
			}
		},
		$ = '18.3.1';
	function G(n) {
		return t.createElement.bind(null, n);
	}
	function J(n) {
		return !!n && n.$$typeof === T;
	}
	function K(n) {
		return J(n) && n.type === t.Fragment;
	}
	function Q(n) {
		return (
			!!n &&
			!!n.displayName &&
			('string' == typeof n.displayName || n.displayName instanceof String) &&
			n.displayName.startsWith('Memo(')
		);
	}
	function X(n) {
		return J(n) ? t.cloneElement.apply(null, arguments) : n;
	}
	function nn(n) {
		return !!n.__k && (t.render(null, n), !0);
	}
	function tn(n) {
		return (n && (n.base || (1 === n.nodeType && n))) || null;
	}
	var en = function (n, t) {
			return n(t);
		},
		rn = function (n, t) {
			return n(t);
		},
		un = t.Fragment,
		on = J,
		cn = {
			useState: e.useState,
			useId: e.useId,
			useReducer: e.useReducer,
			useEffect: e.useEffect,
			useLayoutEffect: e.useLayoutEffect,
			useInsertionEffect: a,
			useTransition: l,
			useDeferredValue: f,
			useSyncExternalStore: o,
			startTransition: c,
			useRef: e.useRef,
			useImperativeHandle: e.useImperativeHandle,
			useMemo: e.useMemo,
			useCallback: e.useCallback,
			useContext: e.useContext,
			useDebugValue: e.useDebugValue,
			version: $,
			Children: b,
			render: L,
			hydrate: F,
			unmountComponentAtNode: nn,
			createPortal: k,
			createElement: t.createElement,
			createContext: t.createContext,
			createFactory: G,
			cloneElement: X,
			createRef: t.createRef,
			Fragment: t.Fragment,
			isValidElement: J,
			isElement: on,
			isFragment: K,
			isMemo: Q,
			findDOMNode: tn,
			Component: t.Component,
			PureComponent: s,
			memo: h,
			forwardRef: p,
			flushSync: rn,
			unstable_batchedUpdates: en,
			StrictMode: un,
			Suspense: E,
			SuspenseList: O,
			lazy: x,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Y
		};
	Object.defineProperty(n, 'Component', {
		enumerable: !0,
		get: function () {
			return t.Component;
		}
	}),
		Object.defineProperty(n, 'Fragment', {
			enumerable: !0,
			get: function () {
				return t.Fragment;
			}
		}),
		Object.defineProperty(n, 'createContext', {
			enumerable: !0,
			get: function () {
				return t.createContext;
			}
		}),
		Object.defineProperty(n, 'createElement', {
			enumerable: !0,
			get: function () {
				return t.createElement;
			}
		}),
		Object.defineProperty(n, 'createRef', {
			enumerable: !0,
			get: function () {
				return t.createRef;
			}
		}),
		(n.Children = b),
		(n.PureComponent = s),
		(n.StrictMode = un),
		(n.Suspense = E),
		(n.SuspenseList = O),
		(n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y),
		(n.cloneElement = X),
		(n.createFactory = G),
		(n.createPortal = k),
		(n.default = cn),
		(n.findDOMNode = tn),
		(n.flushSync = rn),
		(n.forwardRef = p),
		(n.hydrate = F),
		(n.isElement = on),
		(n.isFragment = K),
		(n.isMemo = Q),
		(n.isValidElement = J),
		(n.lazy = x),
		(n.memo = h),
		(n.render = L),
		(n.startTransition = c),
		(n.unmountComponentAtNode = nn),
		(n.unstable_batchedUpdates = en),
		(n.useDeferredValue = f),
		(n.useInsertionEffect = a),
		(n.useSyncExternalStore = o),
		(n.useTransition = l),
		(n.version = $),
		Object.keys(e).forEach(function (t) {
			'default' === t ||
				n.hasOwnProperty(t) ||
				Object.defineProperty(n, t, {
					enumerable: !0,
					get: function () {
						return e[t];
					}
				});
		});
});
//# sourceMappingURL=compat.umd.js.map
