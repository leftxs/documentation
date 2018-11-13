/*! algoliasearch 3.27.1 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */
!(function(e) {
  var t;
  'undefined' != typeof window
    ? (t = window)
    : 'undefined' != typeof self && (t = self),
    (t.ALGOLIA_MIGRATION_LAYER = e());
})(function() {
  return (function e(t, r, n) {
    function o(s, a) {
      if (!r[s]) {
        if (!t[s]) {
          var c = 'function' == typeof require && require;
          if (!a && c) return c(s, !0);
          if (i) return i(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw ((u.code = 'MODULE_NOT_FOUND'), u);
        }
        var l = (r[s] = { exports: {} });
        t[s][0].call(
          l.exports,
          function(e) {
            var r = t[s][1][e];
            return o(r ? r : e);
          },
          l,
          l.exports,
          e,
          t,
          r,
          n
        );
      }
      return r[s].exports;
    }
    for (
      var i = 'function' == typeof require && require, s = 0;
      s < n.length;
      s++
    )
      o(n[s]);
    return o;
  })(
    {
      1: [
        function(e, t, r) {
          function n(e, t) {
            for (var r in t) e.setAttribute(r, t[r]);
          }
          function o(e, t) {
            (e.onload = function() {
              (this.onerror = this.onload = null), t(null, e);
            }),
              (e.onerror = function() {
                (this.onerror = this.onload = null),
                  t(new Error('Failed to load ' + this.src), e);
              });
          }
          function i(e, t) {
            e.onreadystatechange = function() {
              ('complete' != this.readyState && 'loaded' != this.readyState) ||
                ((this.onreadystatechange = null), t(null, e));
            };
          }
          t.exports = function(e, t, r) {
            var s = document.head || document.getElementsByTagName('head')[0],
              a = document.createElement('script');
            'function' == typeof t && ((r = t), (t = {})),
              (t = t || {}),
              (r = r || function() {}),
              (a.type = t.type || 'text/javascript'),
              (a.charset = t.charset || 'utf8'),
              (a.async = !('async' in t) || !!t.async),
              (a.src = e),
              t.attrs && n(a, t.attrs),
              t.text && (a.text = '' + t.text);
            var c = 'onload' in a ? o : i;
            c(a, r), a.onload || o(a, r), s.appendChild(a);
          };
        },
        {}
      ],
      2: [
        function(e, t, r) {
          'use strict';
          function n(e) {
            for (
              var t = new RegExp(
                  'cdn\\.jsdelivr\\.net/algoliasearch/latest/' +
                    e.replace('.', '\\.') +
                    '(?:\\.min)?\\.js$'
                ),
                r = document.getElementsByTagName('script'),
                n = !1,
                o = 0,
                i = r.length;
              o < i;
              o++
            )
              if (r[o].src && t.test(r[o].src)) {
                n = !0;
                break;
              }
            return n;
          }
          t.exports = n;
        },
        {}
      ],
      3: [
        function(e, t, r) {
          'use strict';
          function n(t) {
            var r = e(1),
              n = '//cdn.jsdelivr.net/algoliasearch/2/' + t + '.min.js',
              i =
                '-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --';
            window.console &&
              (window.console.warn
                ? window.console.warn(i)
                : window.console.log && window.console.log(i));
            try {
              document.write(
                '<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>'
              ),
                window.ALGOLIA_SUPPORTS_DOCWRITE === !0
                  ? (document.write('<script src="' + n + '"></script>'),
                    o('document.write')())
                  : r(n, o('DOMElement'));
            } catch (s) {
              r(n, o('DOMElement'));
            }
          }
          function o(e) {
            return function() {
              var t = 'AlgoliaSearch: loaded V2 script using ' + e;
              window.console && window.console.log && window.console.log(t);
            };
          }
          t.exports = n;
        },
        { 1: 1 }
      ],
      4: [
        function(e, t, r) {
          'use strict';
          function n() {
            var e =
              '-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --';
            (window.AlgoliaSearch = function() {
              throw new Error(e);
            }),
              (window.AlgoliaSearchHelper = function() {
                throw new Error(e);
              }),
              (window.AlgoliaExplainResults = function() {
                throw new Error(e);
              });
          }
          t.exports = n;
        },
        {}
      ],
      5: [
        function(e, t, r) {
          'use strict';
          function n(t) {
            var r = e(2),
              n = e(3),
              o = e(4);
            r(t) ? n(t) : o();
          }
          n('algoliasearch');
        },
        { 2: 2, 3: 3, 4: 4 }
      ]
    },
    {},
    [5]
  )(5);
}),
  (function(e) {
    if ('object' == typeof exports && 'undefined' != typeof module)
      module.exports = e();
    else if ('function' == typeof define && define.amd) define([], e);
    else {
      var t;
      (t =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : this),
        (t.algoliasearch = e());
    }
  })(function() {
    var e;
    return (function t(e, r, n) {
      function o(s, a) {
        if (!r[s]) {
          if (!e[s]) {
            var c = 'function' == typeof require && require;
            if (!a && c) return c(s, !0);
            if (i) return i(s, !0);
            var u = new Error("Cannot find module '" + s + "'");
            throw ((u.code = 'MODULE_NOT_FOUND'), u);
          }
          var l = (r[s] = { exports: {} });
          e[s][0].call(
            l.exports,
            function(t) {
              var r = e[s][1][t];
              return o(r ? r : t);
            },
            l,
            l.exports,
            t,
            e,
            r,
            n
          );
        }
        return r[s].exports;
      }
      for (
        var i = 'function' == typeof require && require, s = 0;
        s < n.length;
        s++
      )
        o(n[s]);
      return o;
    })(
      {
        1: [
          function(e, t, r) {
            (function(n) {
              function o() {
                return (
                  !(
                    'undefined' == typeof window ||
                    !window.process ||
                    'renderer' !== window.process.type
                  ) ||
                  (('undefined' != typeof document &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) ||
                    ('undefined' != typeof window &&
                      window.console &&
                      (window.console.firebug ||
                        (window.console.exception && window.console.table))) ||
                    ('undefined' != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent
                        .toLowerCase()
                        .match(/firefox\/(\d+)/) &&
                      parseInt(RegExp.$1, 10) >= 31) ||
                    ('undefined' != typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent
                        .toLowerCase()
                        .match(/applewebkit\/(\d+)/)))
                );
              }
              function i(e) {
                var t = this.useColors;
                if (
                  ((e[0] =
                    (t ? '%c' : '') +
                    this.namespace +
                    (t ? ' %c' : ' ') +
                    e[0] +
                    (t ? '%c ' : ' ') +
                    '+' +
                    r.humanize(this.diff)),
                  t)
                ) {
                  var n = 'color: ' + this.color;
                  e.splice(1, 0, n, 'color: inherit');
                  var o = 0,
                    i = 0;
                  e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    '%%' !== e && (o++, '%c' === e && (i = o));
                  }),
                    e.splice(i, 0, n);
                }
              }
              function s() {
                return (
                  'object' == typeof console &&
                  console.log &&
                  Function.prototype.apply.call(console.log, console, arguments)
                );
              }
              function a(e) {
                try {
                  null == e
                    ? r.storage.removeItem('debug')
                    : (r.storage.debug = e);
                } catch (t) {}
              }
              function c() {
                var e;
                try {
                  e = r.storage.debug;
                } catch (t) {}
                return (
                  !e &&
                    'undefined' != typeof n &&
                    'env' in n &&
                    (e = n.env.DEBUG),
                  e
                );
              }
              function u() {
                try {
                  return window.localStorage;
                } catch (e) {}
              }
              (r = t.exports = e(2)),
                (r.log = s),
                (r.formatArgs = i),
                (r.save = a),
                (r.load = c),
                (r.useColors = o),
                (r.storage =
                  'undefined' != typeof chrome &&
                  'undefined' != typeof chrome.storage
                    ? chrome.storage.local
                    : u()),
                (r.colors = [
                  'lightseagreen',
                  'forestgreen',
                  'goldenrod',
                  'dodgerblue',
                  'darkorchid',
                  'crimson'
                ]),
                (r.formatters.j = function(e) {
                  try {
                    return JSON.stringify(e);
                  } catch (t) {
                    return '[UnexpectedJSONParseError]: ' + t.message;
                  }
                }),
                r.enable(c());
            }.call(this, e(12)));
          },
          { 12: 12, 2: 2 }
        ],
        2: [
          function(e, t, r) {
            function n(e) {
              var t,
                n = 0;
              for (t in e) (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0);
              return r.colors[Math.abs(n) % r.colors.length];
            }
            function o(e) {
              function t() {
                if (t.enabled) {
                  var e = t,
                    n = +new Date(),
                    o = n - (u || n);
                  (e.diff = o), (e.prev = u), (e.curr = n), (u = n);
                  for (
                    var i = new Array(arguments.length), s = 0;
                    s < i.length;
                    s++
                  )
                    i[s] = arguments[s];
                  (i[0] = r.coerce(i[0])),
                    'string' != typeof i[0] && i.unshift('%O');
                  var a = 0;
                  (i[0] = i[0].replace(/%([a-zA-Z%])/g, function(t, n) {
                    if ('%%' === t) return t;
                    a++;
                    var o = r.formatters[n];
                    if ('function' == typeof o) {
                      var s = i[a];
                      (t = o.call(e, s)), i.splice(a, 1), a--;
                    }
                    return t;
                  })),
                    r.formatArgs.call(e, i);
                  var c = t.log || r.log || console.log.bind(console);
                  c.apply(e, i);
                }
              }
              return (
                (t.namespace = e),
                (t.enabled = r.enabled(e)),
                (t.useColors = r.useColors()),
                (t.color = n(e)),
                'function' == typeof r.init && r.init(t),
                t
              );
            }
            function i(e) {
              r.save(e), (r.names = []), (r.skips = []);
              for (
                var t = ('string' == typeof e ? e : '').split(/[\s,]+/),
                  n = t.length,
                  o = 0;
                o < n;
                o++
              )
                t[o] &&
                  ((e = t[o].replace(/\*/g, '.*?')),
                  '-' === e[0]
                    ? r.skips.push(new RegExp('^' + e.substr(1) + '$'))
                    : r.names.push(new RegExp('^' + e + '$')));
            }
            function s() {
              r.enable('');
            }
            function a(e) {
              var t, n;
              for (t = 0, n = r.skips.length; t < n; t++)
                if (r.skips[t].test(e)) return !1;
              for (t = 0, n = r.names.length; t < n; t++)
                if (r.names[t].test(e)) return !0;
              return !1;
            }
            function c(e) {
              return e instanceof Error ? e.stack || e.message : e;
            }
            (r = t.exports = o.debug = o['default'] = o),
              (r.coerce = c),
              (r.disable = s),
              (r.enable = i),
              (r.enabled = a),
              (r.humanize = e(9)),
              (r.names = []),
              (r.skips = []),
              (r.formatters = {});
            var u;
          },
          { 9: 9 }
        ],
        3: [
          function(t, r, n) {
            (function(o, i) {
              !(function(t, o) {
                'object' == typeof n && 'undefined' != typeof r
                  ? (r.exports = o())
                  : 'function' == typeof e && e.amd
                    ? e(o)
                    : (t.ES6Promise = o());
              })(this, function() {
                'use strict';
                function e(e) {
                  var t = typeof e;
                  return null !== e && ('object' === t || 'function' === t);
                }
                function r(e) {
                  return 'function' == typeof e;
                }
                function n(e) {
                  X = e;
                }
                function s(e) {
                  W = e;
                }
                function a() {
                  return function() {
                    return o.nextTick(d);
                  };
                }
                function c() {
                  return 'undefined' != typeof V
                    ? function() {
                        V(d);
                      }
                    : p();
                }
                function u() {
                  var e = 0,
                    t = new Z(d),
                    r = document.createTextNode('');
                  return (
                    t.observe(r, { characterData: !0 }),
                    function() {
                      r.data = e = ++e % 2;
                    }
                  );
                }
                function l() {
                  var e = new MessageChannel();
                  return (
                    (e.port1.onmessage = d),
                    function() {
                      return e.port2.postMessage(0);
                    }
                  );
                }
                function p() {
                  var e = setTimeout;
                  return function() {
                    return e(d, 1);
                  };
                }
                function d() {
                  for (var e = 0; e < G; e += 2) {
                    var t = re[e],
                      r = re[e + 1];
                    t(r), (re[e] = void 0), (re[e + 1] = void 0);
                  }
                  G = 0;
                }
                function h() {
                  try {
                    var e = t,
                      r = e('vertx');
                    return (V = r.runOnLoop || r.runOnContext), c();
                  } catch (n) {
                    return p();
                  }
                }
                function f(e, t) {
                  var r = arguments,
                    n = this,
                    o = new this.constructor(m);
                  void 0 === o[oe] && C(o);
                  var i = n._state;
                  return (
                    i
                      ? !(function() {
                          var e = r[i - 1];
                          W(function() {
                            return E(i, o, e, n._result);
                          });
                        })()
                      : I(n, o, e, t),
                    o
                  );
                }
                function y(e) {
                  var t = this;
                  if (e && 'object' == typeof e && e.constructor === t)
                    return e;
                  var r = new t(m);
                  return A(r, e), r;
                }
                function m() {}
                function v() {
                  return new TypeError(
                    'You cannot resolve a promise with itself'
                  );
                }
                function g() {
                  return new TypeError(
                    'A promises callback cannot return that same promise.'
                  );
                }
                function b(e) {
                  try {
                    return e.then;
                  } catch (t) {
                    return (ce.error = t), ce;
                  }
                }
                function w(e, t, r, n) {
                  try {
                    e.call(t, r, n);
                  } catch (o) {
                    return o;
                  }
                }
                function _(e, t, r) {
                  W(function(e) {
                    var n = !1,
                      o = w(
                        r,
                        t,
                        function(r) {
                          n || ((n = !0), t !== r ? A(e, r) : j(e, r));
                        },
                        function(t) {
                          n || ((n = !0), S(e, t));
                        },
                        'Settle: ' + (e._label || ' unknown promise')
                      );
                    !n && o && ((n = !0), S(e, o));
                  }, e);
                }
                function x(e, t) {
                  t._state === se
                    ? j(e, t._result)
                    : t._state === ae
                      ? S(e, t._result)
                      : I(
                          t,
                          void 0,
                          function(t) {
                            return A(e, t);
                          },
                          function(t) {
                            return S(e, t);
                          }
                        );
                }
                function T(e, t, n) {
                  t.constructor === e.constructor &&
                  n === f &&
                  t.constructor.resolve === y
                    ? x(e, t)
                    : n === ce
                      ? (S(e, ce.error), (ce.error = null))
                      : void 0 === n
                        ? j(e, t)
                        : r(n)
                          ? _(e, t, n)
                          : j(e, t);
                }
                function A(t, r) {
                  t === r ? S(t, v()) : e(r) ? T(t, r, b(r)) : j(t, r);
                }
                function R(e) {
                  e._onerror && e._onerror(e._result), k(e);
                }
                function j(e, t) {
                  e._state === ie &&
                    ((e._result = t),
                    (e._state = se),
                    0 !== e._subscribers.length && W(k, e));
                }
                function S(e, t) {
                  e._state === ie &&
                    ((e._state = ae), (e._result = t), W(R, e));
                }
                function I(e, t, r, n) {
                  var o = e._subscribers,
                    i = o.length;
                  (e._onerror = null),
                    (o[i] = t),
                    (o[i + se] = r),
                    (o[i + ae] = n),
                    0 === i && e._state && W(k, e);
                }
                function k(e) {
                  var t = e._subscribers,
                    r = e._state;
                  if (0 !== t.length) {
                    for (
                      var n = void 0, o = void 0, i = e._result, s = 0;
                      s < t.length;
                      s += 3
                    )
                      (n = t[s]), (o = t[s + r]), n ? E(r, n, o, i) : o(i);
                    e._subscribers.length = 0;
                  }
                }
                function O() {
                  this.error = null;
                }
                function U(e, t) {
                  try {
                    return e(t);
                  } catch (r) {
                    return (ue.error = r), ue;
                  }
                }
                function E(e, t, n, o) {
                  var i = r(n),
                    s = void 0,
                    a = void 0,
                    c = void 0,
                    u = void 0;
                  if (i) {
                    if (
                      ((s = U(n, o)),
                      s === ue
                        ? ((u = !0), (a = s.error), (s.error = null))
                        : (c = !0),
                      t === s)
                    )
                      return void S(t, g());
                  } else (s = o), (c = !0);
                  t._state !== ie ||
                    (i && c
                      ? A(t, s)
                      : u
                        ? S(t, a)
                        : e === se
                          ? j(t, s)
                          : e === ae && S(t, s));
                }
                function P(e, t) {
                  try {
                    t(
                      function(t) {
                        A(e, t);
                      },
                      function(t) {
                        S(e, t);
                      }
                    );
                  } catch (r) {
                    S(e, r);
                  }
                }
                function q() {
                  return le++;
                }
                function C(e) {
                  (e[oe] = le++),
                    (e._state = void 0),
                    (e._result = void 0),
                    (e._subscribers = []);
                }
                function N(e, t) {
                  (this._instanceConstructor = e),
                    (this.promise = new e(m)),
                    this.promise[oe] || C(this.promise),
                    $(t)
                      ? ((this.length = t.length),
                        (this._remaining = t.length),
                        (this._result = new Array(this.length)),
                        0 === this.length
                          ? j(this.promise, this._result)
                          : ((this.length = this.length || 0),
                            this._enumerate(t),
                            0 === this._remaining &&
                              j(this.promise, this._result)))
                      : S(this.promise, D());
                }
                function D() {
                  return new Error('Array Methods must be provided an Array');
                }
                function K(e) {
                  return new N(this, e).promise;
                }
                function L(e) {
                  var t = this;
                  return new t(
                    $(e)
                      ? function(r, n) {
                          for (var o = e.length, i = 0; i < o; i++)
                            t.resolve(e[i]).then(r, n);
                        }
                      : function(e, t) {
                          return t(
                            new TypeError('You must pass an array to race.')
                          );
                        }
                  );
                }
                function H(e) {
                  var t = this,
                    r = new t(m);
                  return S(r, e), r;
                }
                function M() {
                  throw new TypeError(
                    'You must pass a resolver function as the first argument to the promise constructor'
                  );
                }
                function F() {
                  throw new TypeError(
                    "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                  );
                }
                function J(e) {
                  (this[oe] = q()),
                    (this._result = this._state = void 0),
                    (this._subscribers = []),
                    m !== e &&
                      ('function' != typeof e && M(),
                      this instanceof J ? P(this, e) : F());
                }
                function B() {
                  var e = void 0;
                  if ('undefined' != typeof i) e = i;
                  else if ('undefined' != typeof self) e = self;
                  else
                    try {
                      e = Function('return this')();
                    } catch (t) {
                      throw new Error(
                        'polyfill failed because global object is unavailable in this environment'
                      );
                    }
                  var r = e.Promise;
                  if (r) {
                    var n = null;
                    try {
                      n = Object.prototype.toString.call(r.resolve());
                    } catch (t) {}
                    if ('[object Promise]' === n && !r.cast) return;
                  }
                  e.Promise = J;
                }
                var Q = void 0;
                Q = Array.isArray
                  ? Array.isArray
                  : function(e) {
                      return (
                        '[object Array]' === Object.prototype.toString.call(e)
                      );
                    };
                var $ = Q,
                  G = 0,
                  V = void 0,
                  X = void 0,
                  W = function(e, t) {
                    (re[G] = e),
                      (re[G + 1] = t),
                      (G += 2),
                      2 === G && (X ? X(d) : ne());
                  },
                  Y = 'undefined' != typeof window ? window : void 0,
                  z = Y || {},
                  Z = z.MutationObserver || z.WebKitMutationObserver,
                  ee =
                    'undefined' == typeof self &&
                    'undefined' != typeof o &&
                    '[object process]' === {}.toString.call(o),
                  te =
                    'undefined' != typeof Uint8ClampedArray &&
                    'undefined' != typeof importScripts &&
                    'undefined' != typeof MessageChannel,
                  re = new Array(1e3),
                  ne = void 0;
                ne = ee
                  ? a()
                  : Z
                    ? u()
                    : te
                      ? l()
                      : void 0 === Y && 'function' == typeof t
                        ? h()
                        : p();
                var oe = Math.random()
                    .toString(36)
                    .substring(16),
                  ie = void 0,
                  se = 1,
                  ae = 2,
                  ce = new O(),
                  ue = new O(),
                  le = 0;
                return (
                  (N.prototype._enumerate = function(e) {
                    for (var t = 0; this._state === ie && t < e.length; t++)
                      this._eachEntry(e[t], t);
                  }),
                  (N.prototype._eachEntry = function(e, t) {
                    var r = this._instanceConstructor,
                      n = r.resolve;
                    if (n === y) {
                      var o = b(e);
                      if (o === f && e._state !== ie)
                        this._settledAt(e._state, t, e._result);
                      else if ('function' != typeof o)
                        this._remaining--, (this._result[t] = e);
                      else if (r === J) {
                        var i = new r(m);
                        T(i, e, o), this._willSettleAt(i, t);
                      } else
                        this._willSettleAt(
                          new r(function(t) {
                            return t(e);
                          }),
                          t
                        );
                    } else this._willSettleAt(n(e), t);
                  }),
                  (N.prototype._settledAt = function(e, t, r) {
                    var n = this.promise;
                    n._state === ie &&
                      (this._remaining--,
                      e === ae ? S(n, r) : (this._result[t] = r)),
                      0 === this._remaining && j(n, this._result);
                  }),
                  (N.prototype._willSettleAt = function(e, t) {
                    var r = this;
                    I(
                      e,
                      void 0,
                      function(e) {
                        return r._settledAt(se, t, e);
                      },
                      function(e) {
                        return r._settledAt(ae, t, e);
                      }
                    );
                  }),
                  (J.all = K),
                  (J.race = L),
                  (J.resolve = y),
                  (J.reject = H),
                  (J._setScheduler = n),
                  (J._setAsap = s),
                  (J._asap = W),
                  (J.prototype = {
                    constructor: J,
                    then: f,
                    catch: function(e) {
                      return this.then(null, e);
                    }
                  }),
                  (J.polyfill = B),
                  (J.Promise = J),
                  J
                );
              });
            }.call(
              this,
              t(12),
              'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                    ? window
                    : {}
            ));
          },
          { 12: 12 }
        ],
        4: [
          function(e, t, r) {
            function n() {
              (this._events = this._events || {}),
                (this._maxListeners = this._maxListeners || void 0);
            }
            function o(e) {
              return 'function' == typeof e;
            }
            function i(e) {
              return 'number' == typeof e;
            }
            function s(e) {
              return 'object' == typeof e && null !== e;
            }
            function a(e) {
              return void 0 === e;
            }
            (t.exports = n),
              (n.EventEmitter = n),
              (n.prototype._events = void 0),
              (n.prototype._maxListeners = void 0),
              (n.defaultMaxListeners = 10),
              (n.prototype.setMaxListeners = function(e) {
                if (!i(e) || e < 0 || isNaN(e))
                  throw TypeError('n must be a positive number');
                return (this._maxListeners = e), this;
              }),
              (n.prototype.emit = function(e) {
                var t, r, n, i, c, u;
                if (
                  (this._events || (this._events = {}),
                  'error' === e &&
                    (!this._events.error ||
                      (s(this._events.error) && !this._events.error.length)))
                ) {
                  if (((t = arguments[1]), t instanceof Error)) throw t;
                  var l = new Error(
                    'Uncaught, unspecified "error" event. (' + t + ')'
                  );
                  throw ((l.context = t), l);
                }
                if (((r = this._events[e]), a(r))) return !1;
                if (o(r))
                  switch (arguments.length) {
                    case 1:
                      r.call(this);
                      break;
                    case 2:
                      r.call(this, arguments[1]);
                      break;
                    case 3:
                      r.call(this, arguments[1], arguments[2]);
                      break;
                    default:
                      (i = Array.prototype.slice.call(arguments, 1)),
                        r.apply(this, i);
                  }
                else if (s(r))
                  for (
                    i = Array.prototype.slice.call(arguments, 1),
                      u = r.slice(),
                      n = u.length,
                      c = 0;
                    c < n;
                    c++
                  )
                    u[c].apply(this, i);
                return !0;
              }),
              (n.prototype.addListener = function(e, t) {
                var r;
                if (!o(t)) throw TypeError('listener must be a function');
                return (
                  this._events || (this._events = {}),
                  this._events.newListener &&
                    this.emit('newListener', e, o(t.listener) ? t.listener : t),
                  this._events[e]
                    ? s(this._events[e])
                      ? this._events[e].push(t)
                      : (this._events[e] = [this._events[e], t])
                    : (this._events[e] = t),
                  s(this._events[e]) &&
                    !this._events[e].warned &&
                    ((r = a(this._maxListeners)
                      ? n.defaultMaxListeners
                      : this._maxListeners),
                    r &&
                      r > 0 &&
                      this._events[e].length > r &&
                      ((this._events[e].warned = !0),
                      console.error(
                        '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                        this._events[e].length
                      ),
                      'function' == typeof console.trace && console.trace())),
                  this
                );
              }),
              (n.prototype.on = n.prototype.addListener),
              (n.prototype.once = function(e, t) {
                function r() {
                  this.removeListener(e, r),
                    n || ((n = !0), t.apply(this, arguments));
                }
                if (!o(t)) throw TypeError('listener must be a function');
                var n = !1;
                return (r.listener = t), this.on(e, r), this;
              }),
              (n.prototype.removeListener = function(e, t) {
                var r, n, i, a;
                if (!o(t)) throw TypeError('listener must be a function');
                if (!this._events || !this._events[e]) return this;
                if (
                  ((r = this._events[e]),
                  (i = r.length),
                  (n = -1),
                  r === t || (o(r.listener) && r.listener === t))
                )
                  delete this._events[e],
                    this._events.removeListener &&
                      this.emit('removeListener', e, t);
                else if (s(r)) {
                  for (a = i; a-- > 0; )
                    if (r[a] === t || (r[a].listener && r[a].listener === t)) {
                      n = a;
                      break;
                    }
                  if (n < 0) return this;
                  1 === r.length
                    ? ((r.length = 0), delete this._events[e])
                    : r.splice(n, 1),
                    this._events.removeListener &&
                      this.emit('removeListener', e, t);
                }
                return this;
              }),
              (n.prototype.removeAllListeners = function(e) {
                var t, r;
                if (!this._events) return this;
                if (!this._events.removeListener)
                  return (
                    0 === arguments.length
                      ? (this._events = {})
                      : this._events[e] && delete this._events[e],
                    this
                  );
                if (0 === arguments.length) {
                  for (t in this._events)
                    'removeListener' !== t && this.removeAllListeners(t);
                  return (
                    this.removeAllListeners('removeListener'),
                    (this._events = {}),
                    this
                  );
                }
                if (((r = this._events[e]), o(r))) this.removeListener(e, r);
                else if (r)
                  for (; r.length; ) this.removeListener(e, r[r.length - 1]);
                return delete this._events[e], this;
              }),
              (n.prototype.listeners = function(e) {
                var t;
                return (t =
                  this._events && this._events[e]
                    ? o(this._events[e])
                      ? [this._events[e]]
                      : this._events[e].slice()
                    : []);
              }),
              (n.prototype.listenerCount = function(e) {
                if (this._events) {
                  var t = this._events[e];
                  if (o(t)) return 1;
                  if (t) return t.length;
                }
                return 0;
              }),
              (n.listenerCount = function(e, t) {
                return e.listenerCount(t);
              });
          },
          {}
        ],
        5: [
          function(e, t, r) {
            var n = Object.prototype.hasOwnProperty,
              o = Object.prototype.toString;
            t.exports = function(e, t, r) {
              if ('[object Function]' !== o.call(t))
                throw new TypeError('iterator must be a function');
              var i = e.length;
              if (i === +i) for (var s = 0; s < i; s++) t.call(r, e[s], s, e);
              else for (var a in e) n.call(e, a) && t.call(r, e[a], a, e);
            };
          },
          {}
        ],
        6: [
          function(e, t, r) {
            (function(e) {
              var r;
              (r =
                'undefined' != typeof window
                  ? window
                  : 'undefined' != typeof e
                    ? e
                    : 'undefined' != typeof self
                      ? self
                      : {}),
                (t.exports = r);
            }.call(
              this,
              'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                    ? window
                    : {}
            ));
          },
          {}
        ],
        7: [
          function(e, t, r) {
            'function' == typeof Object.create
              ? (t.exports = function(e, t) {
                  (e.super_ = t),
                    (e.prototype = Object.create(t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                      }
                    }));
                })
              : (t.exports = function(e, t) {
                  e.super_ = t;
                  var r = function() {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                });
          },
          {}
        ],
        8: [
          function(e, t, r) {
            var n = {}.toString;
            t.exports =
              Array.isArray ||
              function(e) {
                return '[object Array]' == n.call(e);
              };
          },
          {}
        ],
        9: [
          function(e, t, r) {
            function n(e) {
              if (((e = String(e)), !(e.length > 100))) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                  e
                );
                if (t) {
                  var r = parseFloat(t[1]),
                    n = (t[2] || 'ms').toLowerCase();
                  switch (n) {
                    case 'years':
                    case 'year':
                    case 'yrs':
                    case 'yr':
                    case 'y':
                      return r * p;
                    case 'days':
                    case 'day':
                    case 'd':
                      return r * l;
                    case 'hours':
                    case 'hour':
                    case 'hrs':
                    case 'hr':
                    case 'h':
                      return r * u;
                    case 'minutes':
                    case 'minute':
                    case 'mins':
                    case 'min':
                    case 'm':
                      return r * c;
                    case 'seconds':
                    case 'second':
                    case 'secs':
                    case 'sec':
                    case 's':
                      return r * a;
                    case 'milliseconds':
                    case 'millisecond':
                    case 'msecs':
                    case 'msec':
                    case 'ms':
                      return r;
                    default:
                      return;
                  }
                }
              }
            }
            function o(e) {
              return e >= l
                ? Math.round(e / l) + 'd'
                : e >= u
                  ? Math.round(e / u) + 'h'
                  : e >= c
                    ? Math.round(e / c) + 'm'
                    : e >= a
                      ? Math.round(e / a) + 's'
                      : e + 'ms';
            }
            function i(e) {
              return (
                s(e, l, 'day') ||
                s(e, u, 'hour') ||
                s(e, c, 'minute') ||
                s(e, a, 'second') ||
                e + ' ms'
              );
            }
            function s(e, t, r) {
              if (!(e < t))
                return e < 1.5 * t
                  ? Math.floor(e / t) + ' ' + r
                  : Math.ceil(e / t) + ' ' + r + 's';
            }
            var a = 1e3,
              c = 60 * a,
              u = 60 * c,
              l = 24 * u,
              p = 365.25 * l;
            t.exports = function(e, t) {
              t = t || {};
              var r = typeof e;
              if ('string' === r && e.length > 0) return n(e);
              if ('number' === r && isNaN(e) === !1)
                return t['long'] ? i(e) : o(e);
              throw new Error(
                'val is not a non-empty string or a valid number. val=' +
                  JSON.stringify(e)
              );
            };
          },
          {}
        ],
        10: [
          function(e, t, r) {
            'use strict';
            var n = Object.prototype.hasOwnProperty,
              o = Object.prototype.toString,
              i = Array.prototype.slice,
              s = e(11),
              a = Object.prototype.propertyIsEnumerable,
              c = !a.call({ toString: null }, 'toString'),
              u = a.call(function() {}, 'prototype'),
              l = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
              ],
              p = function(e) {
                var t = e.constructor;
                return t && t.prototype === e;
              },
              d = {
                $console: !0,
                $external: !0,
                $frame: !0,
                $frameElement: !0,
                $frames: !0,
                $innerHeight: !0,
                $innerWidth: !0,
                $outerHeight: !0,
                $outerWidth: !0,
                $pageXOffset: !0,
                $pageYOffset: !0,
                $parent: !0,
                $scrollLeft: !0,
                $scrollTop: !0,
                $scrollX: !0,
                $scrollY: !0,
                $self: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $window: !0
              },
              h = (function() {
                if ('undefined' == typeof window) return !1;
                for (var e in window)
                  try {
                    if (
                      !d['$' + e] &&
                      n.call(window, e) &&
                      null !== window[e] &&
                      'object' == typeof window[e]
                    )
                      try {
                        p(window[e]);
                      } catch (t) {
                        return !0;
                      }
                  } catch (t) {
                    return !0;
                  }
                return !1;
              })(),
              f = function(e) {
                if ('undefined' == typeof window || !h) return p(e);
                try {
                  return p(e);
                } catch (t) {
                  return !1;
                }
              },
              y = function(e) {
                var t = null !== e && 'object' == typeof e,
                  r = '[object Function]' === o.call(e),
                  i = s(e),
                  a = t && '[object String]' === o.call(e),
                  p = [];
                if (!t && !r && !i)
                  throw new TypeError('Object.keys called on a non-object');
                var d = u && r;
                if (a && e.length > 0 && !n.call(e, 0))
                  for (var h = 0; h < e.length; ++h) p.push(String(h));
                if (i && e.length > 0)
                  for (var y = 0; y < e.length; ++y) p.push(String(y));
                else
                  for (var m in e)
                    (d && 'prototype' === m) ||
                      !n.call(e, m) ||
                      p.push(String(m));
                if (c)
                  for (var v = f(e), g = 0; g < l.length; ++g)
                    (v && 'constructor' === l[g]) ||
                      !n.call(e, l[g]) ||
                      p.push(l[g]);
                return p;
              };
            (y.shim = function() {
              if (Object.keys) {
                var e = (function() {
                  return 2 === (Object.keys(arguments) || '').length;
                })(1, 2);
                if (!e) {
                  var t = Object.keys;
                  Object.keys = function(e) {
                    return t(s(e) ? i.call(e) : e);
                  };
                }
              } else Object.keys = y;
              return Object.keys || y;
            }),
              (t.exports = y);
          },
          { 11: 11 }
        ],
        11: [
          function(e, t, r) {
            'use strict';
            var n = Object.prototype.toString;
            t.exports = function(e) {
              var t = n.call(e),
                r = '[object Arguments]' === t;
              return (
                r ||
                  (r =
                    '[object Array]' !== t &&
                    null !== e &&
                    'object' == typeof e &&
                    'number' == typeof e.length &&
                    e.length >= 0 &&
                    '[object Function]' === n.call(e.callee)),
                r
              );
            };
          },
          {}
        ],
        12: [
          function(e, t, r) {
            function n() {
              throw new Error('setTimeout has not been defined');
            }
            function o() {
              throw new Error('clearTimeout has not been defined');
            }
            function i(e) {
              if (p === setTimeout) return setTimeout(e, 0);
              if ((p === n || !p) && setTimeout)
                return (p = setTimeout), setTimeout(e, 0);
              try {
                return p(e, 0);
              } catch (t) {
                try {
                  return p.call(null, e, 0);
                } catch (t) {
                  return p.call(this, e, 0);
                }
              }
            }
            function s(e) {
              if (d === clearTimeout) return clearTimeout(e);
              if ((d === o || !d) && clearTimeout)
                return (d = clearTimeout), clearTimeout(e);
              try {
                return d(e);
              } catch (t) {
                try {
                  return d.call(null, e);
                } catch (t) {
                  return d.call(this, e);
                }
              }
            }
            function a() {
              m &&
                f &&
                ((m = !1),
                f.length ? (y = f.concat(y)) : (v = -1),
                y.length && c());
            }
            function c() {
              if (!m) {
                var e = i(a);
                m = !0;
                for (var t = y.length; t; ) {
                  for (f = y, y = []; ++v < t; ) f && f[v].run();
                  (v = -1), (t = y.length);
                }
                (f = null), (m = !1), s(e);
              }
            }
            function u(e, t) {
              (this.fun = e), (this.array = t);
            }
            function l() {}
            var p,
              d,
              h = (t.exports = {});
            !(function() {
              try {
                p = 'function' == typeof setTimeout ? setTimeout : n;
              } catch (e) {
                p = n;
              }
              try {
                d = 'function' == typeof clearTimeout ? clearTimeout : o;
              } catch (e) {
                d = o;
              }
            })();
            var f,
              y = [],
              m = !1,
              v = -1;
            (h.nextTick = function(e) {
              var t = new Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              y.push(new u(e, t)), 1 !== y.length || m || i(c);
            }),
              (u.prototype.run = function() {
                this.fun.apply(null, this.array);
              }),
              (h.title = 'browser'),
              (h.browser = !0),
              (h.env = {}),
              (h.argv = []),
              (h.version = ''),
              (h.versions = {}),
              (h.on = l),
              (h.addListener = l),
              (h.once = l),
              (h.off = l),
              (h.removeListener = l),
              (h.removeAllListeners = l),
              (h.emit = l),
              (h.binding = function(e) {
                throw new Error('process.binding is not supported');
              }),
              (h.cwd = function() {
                return '/';
              }),
              (h.chdir = function(e) {
                throw new Error('process.chdir is not supported');
              }),
              (h.umask = function() {
                return 0;
              });
          },
          {}
        ],
        13: [
          function(e, t, r) {
            'use strict';
            function n(e, t) {
              if (e.map) return e.map(t);
              for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
              return r;
            }
            var o = function(e) {
              switch (typeof e) {
                case 'string':
                  return e;
                case 'boolean':
                  return e ? 'true' : 'false';
                case 'number':
                  return isFinite(e) ? e : '';
                default:
                  return '';
              }
            };
            t.exports = function(e, t, r, a) {
              return (
                (t = t || '&'),
                (r = r || '='),
                null === e && (e = void 0),
                'object' == typeof e
                  ? n(s(e), function(s) {
                      var a = encodeURIComponent(o(s)) + r;
                      return i(e[s])
                        ? n(e[s], function(e) {
                            return a + encodeURIComponent(o(e));
                          }).join(t)
                        : a + encodeURIComponent(o(e[s]));
                    }).join(t)
                  : a
                    ? encodeURIComponent(o(a)) + r + encodeURIComponent(o(e))
                    : ''
              );
            };
            var i =
                Array.isArray ||
                function(e) {
                  return '[object Array]' === Object.prototype.toString.call(e);
                },
              s =
                Object.keys ||
                function(e) {
                  var t = [];
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                  return t;
                };
          },
          {}
        ],
        14: [
          function(e, t, r) {
            function n() {
              c.apply(this, arguments);
            }
            function o() {
              var e =
                'Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com';
              throw new l.AlgoliaSearchError(e);
            }
            t.exports = n;
            var i = e(16),
              s = e(25),
              a = e(26),
              c = e(15),
              u = e(7),
              l = e(27);
            u(n, c),
              (n.prototype.deleteIndex = function(e, t) {
                return this._jsonRequest({
                  method: 'DELETE',
                  url: '/1/indexes/' + encodeURIComponent(e),
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.moveIndex = function(e, t, r) {
                var n = { operation: 'move', destination: t };
                return this._jsonRequest({
                  method: 'POST',
                  url: '/1/indexes/' + encodeURIComponent(e) + '/operation',
                  body: n,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.copyIndex = function(e, t, r, n) {
                var o = { operation: 'copy', destination: t },
                  i = n;
                if ('function' == typeof r) i = r;
                else if (Array.isArray(r) && r.length > 0) o.scope = r;
                else if ('undefined' != typeof r)
                  throw new Error(
                    'the scope given to `copyIndex` was not an array with settings, synonyms or rules'
                  );
                return this._jsonRequest({
                  method: 'POST',
                  url: '/1/indexes/' + encodeURIComponent(e) + '/operation',
                  body: o,
                  hostType: 'write',
                  callback: i
                });
              }),
              (n.prototype.getLogs = function(t, r, n) {
                var o = e(24),
                  i = {};
                return (
                  'object' == typeof t
                    ? ((i = o(t)), (n = r))
                    : 0 === arguments.length || 'function' == typeof t
                      ? (n = t)
                      : 1 === arguments.length || 'function' == typeof r
                        ? ((n = r), (i.offset = t))
                        : ((i.offset = t), (i.length = r)),
                  void 0 === i.offset && (i.offset = 0),
                  void 0 === i.length && (i.length = 10),
                  this._jsonRequest({
                    method: 'GET',
                    url: '/1/logs?' + this._getSearchParams(i, ''),
                    hostType: 'read',
                    callback: n
                  })
                );
              }),
              (n.prototype.listIndexes = function(e, t) {
                var r = '';
                return (
                  void 0 === e || 'function' == typeof e
                    ? (t = e)
                    : (r = '?page=' + e),
                  this._jsonRequest({
                    method: 'GET',
                    url: '/1/indexes' + r,
                    hostType: 'read',
                    callback: t
                  })
                );
              }),
              (n.prototype.initIndex = function(e) {
                return new i(this, e);
              }),
              (n.prototype.listUserKeys = s(function(e) {
                return this.listApiKeys(e);
              }, a('client.listUserKeys()', 'client.listApiKeys()'))),
              (n.prototype.listApiKeys = function(e) {
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/keys',
                  hostType: 'read',
                  callback: e
                });
              }),
              (n.prototype.getUserKeyACL = s(function(e, t) {
                return this.getApiKey(e, t);
              }, a('client.getUserKeyACL()', 'client.getApiKey()'))),
              (n.prototype.getApiKey = function(e, t) {
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/keys/' + e,
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.deleteUserKey = s(function(e, t) {
                return this.deleteApiKey(e, t);
              }, a('client.deleteUserKey()', 'client.deleteApiKey()'))),
              (n.prototype.deleteApiKey = function(e, t) {
                return this._jsonRequest({
                  method: 'DELETE',
                  url: '/1/keys/' + e,
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.addUserKey = s(function(e, t, r) {
                return this.addApiKey(e, t, r);
              }, a('client.addUserKey()', 'client.addApiKey()'))),
              (n.prototype.addApiKey = function(t, r, n) {
                var o = e(8),
                  i =
                    'Usage: client.addApiKey(arrayOfAcls[, params, callback])';
                if (!o(t)) throw new Error(i);
                (1 !== arguments.length && 'function' != typeof r) ||
                  ((n = r), (r = null));
                var s = { acl: t };
                return (
                  r &&
                    ((s.validity = r.validity),
                    (s.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour),
                    (s.maxHitsPerQuery = r.maxHitsPerQuery),
                    (s.indexes = r.indexes),
                    (s.description = r.description),
                    r.queryParameters &&
                      (s.queryParameters = this._getSearchParams(
                        r.queryParameters,
                        ''
                      )),
                    (s.referers = r.referers)),
                  this._jsonRequest({
                    method: 'POST',
                    url: '/1/keys',
                    body: s,
                    hostType: 'write',
                    callback: n
                  })
                );
              }),
              (n.prototype.addUserKeyWithValidity = s(function(e, t, r) {
                return this.addApiKey(e, t, r);
              }, a('client.addUserKeyWithValidity()', 'client.addApiKey()'))),
              (n.prototype.updateUserKey = s(function(e, t, r, n) {
                return this.updateApiKey(e, t, r, n);
              }, a('client.updateUserKey()', 'client.updateApiKey()'))),
              (n.prototype.updateApiKey = function(t, r, n, o) {
                var i = e(8),
                  s =
                    'Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])';
                if (!i(r)) throw new Error(s);
                (2 !== arguments.length && 'function' != typeof n) ||
                  ((o = n), (n = null));
                var a = { acl: r };
                return (
                  n &&
                    ((a.validity = n.validity),
                    (a.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour),
                    (a.maxHitsPerQuery = n.maxHitsPerQuery),
                    (a.indexes = n.indexes),
                    (a.description = n.description),
                    n.queryParameters &&
                      (a.queryParameters = this._getSearchParams(
                        n.queryParameters,
                        ''
                      )),
                    (a.referers = n.referers)),
                  this._jsonRequest({
                    method: 'PUT',
                    url: '/1/keys/' + t,
                    body: a,
                    hostType: 'write',
                    callback: o
                  })
                );
              }),
              (n.prototype.startQueriesBatch = s(function() {
                this._batch = [];
              }, a('client.startQueriesBatch()', 'client.search()'))),
              (n.prototype.addQueryInBatch = s(function(e, t, r) {
                this._batch.push({ indexName: e, query: t, params: r });
              }, a('client.addQueryInBatch()', 'client.search()'))),
              (n.prototype.sendQueriesBatch = s(function(e) {
                return this.search(this._batch, e);
              }, a('client.sendQueriesBatch()', 'client.search()'))),
              (n.prototype.batch = function(t, r) {
                var n = e(8),
                  o = 'Usage: client.batch(operations[, callback])';
                if (!n(t)) throw new Error(o);
                return this._jsonRequest({
                  method: 'POST',
                  url: '/1/indexes/*/batch',
                  body: { requests: t },
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.assignUserID = function(e, t) {
                if (!e.userID || !e.cluster)
                  throw new l.AlgoliaSearchError(
                    'You have to provide both a userID and cluster',
                    e
                  );
                return this._jsonRequest({
                  method: 'POST',
                  url: '/1/clusters/mapping',
                  hostType: 'write',
                  body: { cluster: e.cluster },
                  callback: t,
                  headers: { 'X-Algolia-User-ID': e.userID }
                });
              }),
              (n.prototype.getTopUserID = function(e) {
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/clusters/mapping/top',
                  hostType: 'read',
                  callback: e
                });
              }),
              (n.prototype.getUserID = function(e, t) {
                if (!e.userID)
                  throw new l.AlgoliaSearchError(
                    'You have to provide a userID',
                    { debugData: e }
                  );
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/clusters/mapping/' + e.userID,
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.listClusters = function(e) {
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/clusters',
                  hostType: 'read',
                  callback: e
                });
              }),
              (n.prototype.listUserIDs = function(e, t) {
                return this._jsonRequest({
                  method: 'GET',
                  url: '/1/clusters/mapping',
                  body: e,
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.removeUserID = function(e, t) {
                if (!e.userID)
                  throw new l.AlgoliaSearchError(
                    'You have to provide a userID',
                    { debugData: e }
                  );
                return this._jsonRequest({
                  method: 'DELETE',
                  url: '/1/clusters/mapping',
                  hostType: 'write',
                  callback: t,
                  headers: { 'X-Algolia-User-ID': e.userID }
                });
              }),
              (n.prototype.searchUserIDs = function(e, t) {
                return this._jsonRequest({
                  method: 'POST',
                  url: '/1/clusters/mapping/search',
                  body: e,
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.destroy = o),
              (n.prototype.enableRateLimitForward = o),
              (n.prototype.disableRateLimitForward = o),
              (n.prototype.useSecuredAPIKey = o),
              (n.prototype.disableSecuredAPIKey = o),
              (n.prototype.generateSecuredApiKey = o);
          },
          { 15: 15, 16: 16, 24: 24, 25: 25, 26: 26, 27: 27, 7: 7, 8: 8 }
        ],
        15: [
          function(e, t, r) {
            (function(r) {
              function n(t, r, n) {
                var i = e(1)('algoliasearch'),
                  s = e(24),
                  a = e(8),
                  u = e(29),
                  l = 'Usage: algoliasearch(applicationID, apiKey, opts)';
                if (n._allowEmptyCredentials !== !0 && !t)
                  throw new c.AlgoliaSearchError(
                    'Please provide an application ID. ' + l
                  );
                if (n._allowEmptyCredentials !== !0 && !r)
                  throw new c.AlgoliaSearchError(
                    'Please provide an API key. ' + l
                  );
                (this.applicationID = t),
                  (this.apiKey = r),
                  (this.hosts = { read: [], write: [] }),
                  (n = n || {}),
                  (this._timeouts = n.timeouts || {
                    connect: 1e3,
                    read: 2e3,
                    write: 3e4
                  }),
                  n.timeout &&
                    (this._timeouts.connect = this._timeouts.read = this._timeouts.write =
                      n.timeout);
                var p = n.protocol || 'https:';
                if (
                  (/:$/.test(p) || (p += ':'), 'http:' !== p && 'https:' !== p)
                )
                  throw new c.AlgoliaSearchError(
                    'protocol must be `http:` or `https:` (was `' +
                      n.protocol +
                      '`)'
                  );
                if ((this._checkAppIdData(), n.hosts))
                  a(n.hosts)
                    ? ((this.hosts.read = s(n.hosts)),
                      (this.hosts.write = s(n.hosts)))
                    : ((this.hosts.read = s(n.hosts.read)),
                      (this.hosts.write = s(n.hosts.write)));
                else {
                  var d = u(this._shuffleResult, function(e) {
                      return t + '-' + e + '.algolianet.com';
                    }),
                    h = (n.dsn === !1 ? '' : '-dsn') + '.algolia.net';
                  (this.hosts.read = [this.applicationID + h].concat(d)),
                    (this.hosts.write = [
                      this.applicationID + '.algolia.net'
                    ].concat(d));
                }
                (this.hosts.read = u(this.hosts.read, o(p))),
                  (this.hosts.write = u(this.hosts.write, o(p))),
                  (this.extraHeaders = {}),
                  (this.cache = n._cache || {}),
                  (this._ua = n._ua),
                  (this._useCache =
                    !(void 0 !== n._useCache && !n._cache) || n._useCache),
                  (this._useFallback =
                    void 0 === n.useFallback || n.useFallback),
                  (this._setTimeout = n._setTimeout),
                  i('init done, %j', this);
              }
              function o(e) {
                return function(t) {
                  return e + '//' + t.toLowerCase();
                };
              }
              function i(e) {
                if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
                var t = Array.prototype.toJSON;
                delete Array.prototype.toJSON;
                var r = JSON.stringify(e);
                return (Array.prototype.toJSON = t), r;
              }
              function s(e) {
                for (var t, r, n = e.length; 0 !== n; )
                  (r = Math.floor(Math.random() * n)),
                    (n -= 1),
                    (t = e[n]),
                    (e[n] = e[r]),
                    (e[r] = t);
                return e;
              }
              function a(e) {
                var t = {};
                for (var r in e)
                  if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var n;
                    (n =
                      'x-algolia-api-key' === r ||
                      'x-algolia-application-id' === r
                        ? '**hidden for security purposes**'
                        : e[r]),
                      (t[r] = n);
                  }
                return t;
              }
              t.exports = n;
              var c = e(27),
                u = e(28),
                l = e(18),
                p = e(33),
                d = 500,
                h =
                  (r.env.RESET_APP_DATA_TIMER &&
                    parseInt(r.env.RESET_APP_DATA_TIMER, 10)) ||
                  12e4;
              (n.prototype.initIndex = function(e) {
                return new l(this, e);
              }),
                (n.prototype.setExtraHeader = function(e, t) {
                  this.extraHeaders[e.toLowerCase()] = t;
                }),
                (n.prototype.getExtraHeader = function(e) {
                  return this.extraHeaders[e.toLowerCase()];
                }),
                (n.prototype.unsetExtraHeader = function(e) {
                  delete this.extraHeaders[e.toLowerCase()];
                }),
                (n.prototype.addAlgoliaAgent = function(e) {
                  this._ua.indexOf(';' + e) === -1 && (this._ua += ';' + e);
                }),
                (n.prototype._jsonRequest = function(t) {
                  function r(e, u) {
                    function d(e) {
                      var t =
                        (e && e.body && e.body.message && e.body.status) ||
                        e.statusCode ||
                        (e && e.body && 200);
                      s(
                        'received response: statusCode: %s, computed statusCode: %d, headers: %j',
                        e.statusCode,
                        t,
                        e.headers
                      );
                      var r = 2 === Math.floor(t / 100),
                        i = new Date();
                      if (
                        (v.push({
                          currentHost: T,
                          headers: a(o),
                          content: n || null,
                          contentLength: void 0 !== n ? n.length : null,
                          method: u.method,
                          timeouts: u.timeouts,
                          url: u.url,
                          startTime: x,
                          endTime: i,
                          duration: i - x,
                          statusCode: t
                        }),
                        r)
                      )
                        return (
                          h._useCache && p && (p[_] = e.responseText), e.body
                        );
                      var l = 4 !== Math.floor(t / 100);
                      if (l) return (f += 1), b();
                      s('unrecoverable error');
                      var d = new c.AlgoliaSearchError(
                        e.body && e.body.message,
                        { debugData: v, statusCode: t }
                      );
                      return h._promise.reject(d);
                    }
                    function g(e) {
                      s('error: %s, stack: %s', e.message, e.stack);
                      var r = new Date();
                      return (
                        v.push({
                          currentHost: T,
                          headers: a(o),
                          content: n || null,
                          contentLength: void 0 !== n ? n.length : null,
                          method: u.method,
                          timeouts: u.timeouts,
                          url: u.url,
                          startTime: x,
                          endTime: r,
                          duration: r - x
                        }),
                        e instanceof c.AlgoliaSearchError ||
                          (e = new c.Unknown(e && e.message, e)),
                        (f += 1),
                        e instanceof c.Unknown ||
                        e instanceof c.UnparsableJSON ||
                        (f >= h.hosts[t.hostType].length && (y || !m))
                          ? ((e.debugData = v), h._promise.reject(e))
                          : e instanceof c.RequestTimeout
                            ? w()
                            : b()
                      );
                    }
                    function b() {
                      return (
                        s('retrying request'),
                        h._incrementHostIndex(t.hostType),
                        r(e, u)
                      );
                    }
                    function w() {
                      return (
                        s('retrying request with higher timeout'),
                        h._incrementHostIndex(t.hostType),
                        h._incrementTimeoutMultipler(),
                        (u.timeouts = h._getTimeoutsForRequest(t.hostType)),
                        r(e, u)
                      );
                    }
                    h._checkAppIdData();
                    var _,
                      x = new Date();
                    if (
                      (h._useCache && (_ = t.url),
                      h._useCache && n && (_ += '_body_' + u.body),
                      h._useCache && p && void 0 !== p[_])
                    )
                      return (
                        s('serving response from cache'),
                        h._promise.resolve(JSON.parse(p[_]))
                      );
                    if (f >= h.hosts[t.hostType].length)
                      return !m || y
                        ? (s('could not get any response'),
                          h._promise.reject(
                            new c.AlgoliaSearchError(
                              'Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: ' +
                                h.applicationID,
                              { debugData: v }
                            )
                          ))
                        : (s('switching to fallback'),
                          (f = 0),
                          (u.method = t.fallback.method),
                          (u.url = t.fallback.url),
                          (u.jsonBody = t.fallback.body),
                          u.jsonBody && (u.body = i(u.jsonBody)),
                          (o = h._computeRequestHeaders({
                            additionalUA: l,
                            headers: t.headers
                          })),
                          (u.timeouts = h._getTimeoutsForRequest(t.hostType)),
                          h._setHostIndexByType(0, t.hostType),
                          (y = !0),
                          r(h._request.fallback, u));
                    var T = h._getHostByType(t.hostType),
                      A = T + u.url,
                      R = {
                        body: u.body,
                        jsonBody: u.jsonBody,
                        method: u.method,
                        headers: o,
                        timeouts: u.timeouts,
                        debug: s
                      };
                    return (
                      s(
                        'method: %s, url: %s, headers: %j, timeouts: %d',
                        R.method,
                        A,
                        R.headers,
                        R.timeouts
                      ),
                      e === h._request.fallback && s('using fallback'),
                      e.call(h, A, R).then(d, g)
                    );
                  }
                  this._checkAppIdData();
                  var n,
                    o,
                    s = e(1)('algoliasearch:' + t.url),
                    l = t.additionalUA || '',
                    p = t.cache,
                    h = this,
                    f = 0,
                    y = !1,
                    m = h._useFallback && h._request.fallback && t.fallback;
                  this.apiKey.length > d &&
                  void 0 !== t.body &&
                  (void 0 !== t.body.params || void 0 !== t.body.requests)
                    ? ((t.body.apiKey = this.apiKey),
                      (o = this._computeRequestHeaders({
                        additionalUA: l,
                        withApiKey: !1,
                        headers: t.headers
                      })))
                    : (o = this._computeRequestHeaders({
                        additionalUA: l,
                        headers: t.headers
                      })),
                    void 0 !== t.body && (n = i(t.body)),
                    s('request start');
                  var v = [],
                    g = r(h._request, {
                      url: t.url,
                      method: t.method,
                      body: n,
                      jsonBody: t.body,
                      timeouts: h._getTimeoutsForRequest(t.hostType)
                    });
                  return 'function' != typeof t.callback
                    ? g
                    : void g.then(
                        function(e) {
                          u(function() {
                            t.callback(null, e);
                          }, h._setTimeout || setTimeout);
                        },
                        function(e) {
                          u(function() {
                            t.callback(e);
                          }, h._setTimeout || setTimeout);
                        }
                      );
                }),
                (n.prototype._getSearchParams = function(e, t) {
                  if (void 0 === e || null === e) return t;
                  for (var r in e)
                    null !== r &&
                      void 0 !== e[r] &&
                      e.hasOwnProperty(r) &&
                      ((t += '' === t ? '' : '&'),
                      (t +=
                        r +
                        '=' +
                        encodeURIComponent(
                          '[object Array]' ===
                          Object.prototype.toString.call(e[r])
                            ? i(e[r])
                            : e[r]
                        )));
                  return t;
                }),
                (n.prototype._computeRequestHeaders = function(t) {
                  var r = e(5),
                    n = t.additionalUA
                      ? this._ua + ';' + t.additionalUA
                      : this._ua,
                    o = {
                      'x-algolia-agent': n,
                      'x-algolia-application-id': this.applicationID
                    };
                  return (
                    t.withApiKey !== !1 &&
                      (o['x-algolia-api-key'] = this.apiKey),
                    this.userToken &&
                      (o['x-algolia-usertoken'] = this.userToken),
                    this.securityTags &&
                      (o['x-algolia-tagfilters'] = this.securityTags),
                    r(this.extraHeaders, function(e, t) {
                      o[t] = e;
                    }),
                    t.headers &&
                      r(t.headers, function(e, t) {
                        o[t] = e;
                      }),
                    o
                  );
                }),
                (n.prototype.search = function(t, r, n) {
                  var o = e(8),
                    i = e(29),
                    s = 'Usage: client.search(arrayOfQueries[, callback])';
                  if (!o(t)) throw new Error(s);
                  'function' == typeof r
                    ? ((n = r), (r = {}))
                    : void 0 === r && (r = {});
                  var a = this,
                    c = {
                      requests: i(t, function(e) {
                        var t = '';
                        return (
                          void 0 !== e.query &&
                            (t += 'query=' + encodeURIComponent(e.query)),
                          {
                            indexName: e.indexName,
                            params: a._getSearchParams(e.params, t)
                          }
                        );
                      })
                    },
                    u = i(c.requests, function(e, t) {
                      return (
                        t +
                        '=' +
                        encodeURIComponent(
                          '/1/indexes/' +
                            encodeURIComponent(e.indexName) +
                            '?' +
                            e.params
                        )
                      );
                    }).join('&'),
                    l = '/1/indexes/*/queries';
                  return (
                    void 0 !== r.strategy && (l += '?strategy=' + r.strategy),
                    this._jsonRequest({
                      cache: this.cache,
                      method: 'POST',
                      url: l,
                      body: c,
                      hostType: 'read',
                      fallback: {
                        method: 'GET',
                        url: '/1/indexes/*',
                        body: { params: u }
                      },
                      callback: n
                    })
                  );
                }),
                (n.prototype.searchForFacetValues = function(t) {
                  var r = e(8),
                    n = e(29),
                    o =
                      'Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])';
                  if (!r(t)) throw new Error(o);
                  var i = this;
                  return i._promise.all(
                    n(t, function(t) {
                      if (
                        !t ||
                        void 0 === t.indexName ||
                        void 0 === t.params.facetName ||
                        void 0 === t.params.facetQuery
                      )
                        throw new Error(o);
                      var r = e(24),
                        n = e(31),
                        s = t.indexName,
                        a = t.params,
                        c = a.facetName,
                        u = n(r(a), function(e) {
                          return 'facetName' === e;
                        }),
                        l = i._getSearchParams(u, '');
                      return i._jsonRequest({
                        cache: i.cache,
                        method: 'POST',
                        url:
                          '/1/indexes/' +
                          encodeURIComponent(s) +
                          '/facets/' +
                          encodeURIComponent(c) +
                          '/query',
                        hostType: 'read',
                        body: { params: l }
                      });
                    })
                  );
                }),
                (n.prototype.setSecurityTags = function(e) {
                  if ('[object Array]' === Object.prototype.toString.call(e)) {
                    for (var t = [], r = 0; r < e.length; ++r)
                      if (
                        '[object Array]' ===
                        Object.prototype.toString.call(e[r])
                      ) {
                        for (var n = [], o = 0; o < e[r].length; ++o)
                          n.push(e[r][o]);
                        t.push('(' + n.join(',') + ')');
                      } else t.push(e[r]);
                    e = t.join(',');
                  }
                  this.securityTags = e;
                }),
                (n.prototype.setUserToken = function(e) {
                  this.userToken = e;
                }),
                (n.prototype.clearCache = function() {
                  this.cache = {};
                }),
                (n.prototype.setRequestTimeout = function(e) {
                  e &&
                    (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e);
                }),
                (n.prototype.setTimeouts = function(e) {
                  this._timeouts = e;
                }),
                (n.prototype.getTimeouts = function() {
                  return this._timeouts;
                }),
                (n.prototype._getAppIdData = function() {
                  var e = p.get(this.applicationID);
                  return null !== e && this._cacheAppIdData(e), e;
                }),
                (n.prototype._setAppIdData = function(e) {
                  return (
                    (e.lastChange = new Date().getTime()),
                    this._cacheAppIdData(e),
                    p.set(this.applicationID, e)
                  );
                }),
                (n.prototype._checkAppIdData = function() {
                  var e = this._getAppIdData(),
                    t = new Date().getTime();
                  return null === e || t - e.lastChange > h
                    ? this._resetInitialAppIdData(e)
                    : e;
                }),
                (n.prototype._resetInitialAppIdData = function(e) {
                  var t = e || {};
                  return (
                    (t.hostIndexes = { read: 0, write: 0 }),
                    (t.timeoutMultiplier = 1),
                    (t.shuffleResult = t.shuffleResult || s([1, 2, 3])),
                    this._setAppIdData(t)
                  );
                }),
                (n.prototype._cacheAppIdData = function(e) {
                  (this._hostIndexes = e.hostIndexes),
                    (this._timeoutMultiplier = e.timeoutMultiplier),
                    (this._shuffleResult = e.shuffleResult);
                }),
                (n.prototype._partialAppIdDataUpdate = function(t) {
                  var r = e(5),
                    n = this._getAppIdData();
                  return (
                    r(t, function(e, t) {
                      n[t] = e;
                    }),
                    this._setAppIdData(n)
                  );
                }),
                (n.prototype._getHostByType = function(e) {
                  return this.hosts[e][this._getHostIndexByType(e)];
                }),
                (n.prototype._getTimeoutMultiplier = function() {
                  return this._timeoutMultiplier;
                }),
                (n.prototype._getHostIndexByType = function(e) {
                  return this._hostIndexes[e];
                }),
                (n.prototype._setHostIndexByType = function(t, r) {
                  var n = e(24),
                    o = n(this._hostIndexes);
                  return (
                    (o[r] = t),
                    this._partialAppIdDataUpdate({ hostIndexes: o }),
                    t
                  );
                }),
                (n.prototype._incrementHostIndex = function(e) {
                  return this._setHostIndexByType(
                    (this._getHostIndexByType(e) + 1) % this.hosts[e].length,
                    e
                  );
                }),
                (n.prototype._incrementTimeoutMultipler = function() {
                  var e = Math.max(this._timeoutMultiplier + 1, 4);
                  return this._partialAppIdDataUpdate({ timeoutMultiplier: e });
                }),
                (n.prototype._getTimeoutsForRequest = function(e) {
                  return {
                    connect: this._timeouts.connect * this._timeoutMultiplier,
                    complete: this._timeouts[e] * this._timeoutMultiplier
                  };
                });
            }.call(this, e(12)));
          },
          {
            1: 1,
            12: 12,
            18: 18,
            24: 24,
            27: 27,
            28: 28,
            29: 29,
            31: 31,
            33: 33,
            5: 5,
            8: 8
          }
        ],
        16: [
          function(e, t, r) {
            function n() {
              s.apply(this, arguments);
            }
            function o(e, t, r) {
              function n(r, o) {
                var i = { page: r || 0, hitsPerPage: t || 100 },
                  s = o || [];
                return e(i).then(function(e) {
                  var t = e.hits,
                    r = e.nbHits,
                    o = t.map(function(e) {
                      return delete e._highlightResult, e;
                    }),
                    a = s.concat(o);
                  return a.length < r ? n(i.page + 1, a) : a;
                });
              }
              return n().then(function(e) {
                return 'function' == typeof r ? void r(e) : e;
              });
            }
            var i = e(7),
              s = e(18),
              a = e(25),
              c = e(26),
              u = e(28),
              l = e(27),
              p = a(function() {}, c('forwardToSlaves', 'forwardToReplicas'));
            (t.exports = n),
              i(n, s),
              (n.prototype.addObject = function(e, t, r) {
                var n = this;
                return (
                  (1 !== arguments.length && 'function' != typeof t) ||
                    ((r = t), (t = void 0)),
                  this.as._jsonRequest({
                    method: void 0 !== t ? 'PUT' : 'POST',
                    url:
                      '/1/indexes/' +
                      encodeURIComponent(n.indexName) +
                      (void 0 !== t ? '/' + encodeURIComponent(t) : ''),
                    body: e,
                    hostType: 'write',
                    callback: r
                  })
                );
              }),
              (n.prototype.addObjects = function(t, r) {
                var n = e(8),
                  o = 'Usage: index.addObjects(arrayOfObjects[, callback])';
                if (!n(t)) throw new Error(o);
                for (
                  var i = this, s = { requests: [] }, a = 0;
                  a < t.length;
                  ++a
                ) {
                  var c = { action: 'addObject', body: t[a] };
                  s.requests.push(c);
                }
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(i.indexName) + '/batch',
                  body: s,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.partialUpdateObject = function(e, t, r) {
                (1 !== arguments.length && 'function' != typeof t) ||
                  ((r = t), (t = void 0));
                var n = this,
                  o =
                    '/1/indexes/' +
                    encodeURIComponent(n.indexName) +
                    '/' +
                    encodeURIComponent(e.objectID) +
                    '/partial';
                return (
                  t === !1 && (o += '?createIfNotExists=false'),
                  this.as._jsonRequest({
                    method: 'POST',
                    url: o,
                    body: e,
                    hostType: 'write',
                    callback: r
                  })
                );
              }),
              (n.prototype.partialUpdateObjects = function(t, r, n) {
                (1 !== arguments.length && 'function' != typeof r) ||
                  ((n = r), (r = !0));
                var o = e(8),
                  i =
                    'Usage: index.partialUpdateObjects(arrayOfObjects[, callback])';
                if (!o(t)) throw new Error(i);
                for (
                  var s = this, a = { requests: [] }, c = 0;
                  c < t.length;
                  ++c
                ) {
                  var u = {
                    action:
                      r === !0
                        ? 'partialUpdateObject'
                        : 'partialUpdateObjectNoCreate',
                    objectID: t[c].objectID,
                    body: t[c]
                  };
                  a.requests.push(u);
                }
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(s.indexName) + '/batch',
                  body: a,
                  hostType: 'write',
                  callback: n
                });
              }),
              (n.prototype.saveObject = function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                  method: 'PUT',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(r.indexName) +
                    '/' +
                    encodeURIComponent(e.objectID),
                  body: e,
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.saveObjects = function(t, r) {
                var n = e(8),
                  o = 'Usage: index.saveObjects(arrayOfObjects[, callback])';
                if (!n(t)) throw new Error(o);
                for (
                  var i = this, s = { requests: [] }, a = 0;
                  a < t.length;
                  ++a
                ) {
                  var c = {
                    action: 'updateObject',
                    objectID: t[a].objectID,
                    body: t[a]
                  };
                  s.requests.push(c);
                }
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(i.indexName) + '/batch',
                  body: s,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.deleteObject = function(e, t) {
                if (
                  'function' == typeof e ||
                  ('string' != typeof e && 'number' != typeof e)
                ) {
                  var r = new l.AlgoliaSearchError(
                    'Cannot delete an object without an objectID'
                  );
                  return (
                    (t = e),
                    'function' == typeof t ? t(r) : this.as._promise.reject(r)
                  );
                }
                var n = this;
                return this.as._jsonRequest({
                  method: 'DELETE',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(n.indexName) +
                    '/' +
                    encodeURIComponent(e),
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.deleteObjects = function(t, r) {
                var n = e(8),
                  o = e(29),
                  i =
                    'Usage: index.deleteObjects(arrayOfObjectIDs[, callback])';
                if (!n(t)) throw new Error(i);
                var s = this,
                  a = {
                    requests: o(t, function(e) {
                      return {
                        action: 'deleteObject',
                        objectID: e,
                        body: { objectID: e }
                      };
                    })
                  };
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(s.indexName) + '/batch',
                  body: a,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.deleteByQuery = a(function(t, r, n) {
                function o(e) {
                  if (0 === e.nbHits) return e;
                  var t = p(e.hits, function(e) {
                    return e.objectID;
                  });
                  return d
                    .deleteObjects(t)
                    .then(i)
                    .then(s);
                }
                function i(e) {
                  return d.waitTask(e.taskID);
                }
                function s() {
                  return d.deleteByQuery(t, r);
                }
                function a() {
                  u(function() {
                    n(null);
                  }, h._setTimeout || setTimeout);
                }
                function c(e) {
                  u(function() {
                    n(e);
                  }, h._setTimeout || setTimeout);
                }
                var l = e(24),
                  p = e(29),
                  d = this,
                  h = d.as;
                1 === arguments.length || 'function' == typeof r
                  ? ((n = r), (r = {}))
                  : (r = l(r)),
                  (r.attributesToRetrieve = 'objectID'),
                  (r.hitsPerPage = 1e3),
                  (r.distinct = !1),
                  this.clearCache();
                var f = this.search(t, r).then(o);
                return n ? void f.then(a, c) : f;
              }, c('index.deleteByQuery()', 'index.deleteBy()'))),
              (n.prototype.deleteBy = function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(r.indexName) +
                    '/deleteByQuery',
                  body: { params: r.as._getSearchParams(e, '') },
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.browseAll = function(t, r) {
                function n(e) {
                  if (!a._stopped) {
                    var t;
                    (t = void 0 !== e ? { cursor: e } : { params: l }),
                      c._jsonRequest({
                        method: 'POST',
                        url:
                          '/1/indexes/' +
                          encodeURIComponent(u.indexName) +
                          '/browse',
                        hostType: 'read',
                        body: t,
                        callback: o
                      });
                  }
                }
                function o(e, t) {
                  if (!a._stopped)
                    return e
                      ? void a._error(e)
                      : (a._result(t),
                        void 0 === t.cursor ? void a._end() : void n(t.cursor));
                }
                'object' == typeof t && ((r = t), (t = void 0));
                var i = e(30),
                  s = e(17),
                  a = new s(),
                  c = this.as,
                  u = this,
                  l = c._getSearchParams(i({}, r || {}, { query: t }), '');
                return n(), a;
              }),
              (n.prototype.ttAdapter = a(function(e) {
                var t = this;
                return function(r, n, o) {
                  var i;
                  (i = 'function' == typeof o ? o : n),
                    t.search(r, e, function(e, t) {
                      return e ? void i(e) : void i(t.hits);
                    });
                };
              }, 'ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)')),
              (n.prototype.waitTask = function(e, t) {
                function r() {
                  return l
                    ._jsonRequest({
                      method: 'GET',
                      hostType: 'read',
                      url:
                        '/1/indexes/' +
                        encodeURIComponent(c.indexName) +
                        '/task/' +
                        e
                    })
                    .then(function(e) {
                      a++;
                      var t = i * a * a;
                      return (
                        t > s && (t = s),
                        'published' !== e.status
                          ? l._promise.delay(t).then(r)
                          : e
                      );
                    });
                }
                function n(e) {
                  u(function() {
                    t(null, e);
                  }, l._setTimeout || setTimeout);
                }
                function o(e) {
                  u(function() {
                    t(e);
                  }, l._setTimeout || setTimeout);
                }
                var i = 100,
                  s = 5e3,
                  a = 0,
                  c = this,
                  l = c.as,
                  p = r();
                return t ? void p.then(n, o) : p;
              }),
              (n.prototype.clearIndex = function(e) {
                var t = this;
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(t.indexName) + '/clear',
                  hostType: 'write',
                  callback: e
                });
              }),
              (n.prototype.getSettings = function(e, t) {
                1 === arguments.length &&
                  'function' == typeof e &&
                  ((t = e), (e = {})),
                  (e = e || {});
                var r = encodeURIComponent(this.indexName);
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' +
                    r +
                    '/settings?getVersion=2' +
                    (e.advanced ? '&advanced=' + e.advanced : ''),
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.searchSynonyms = function(e, t) {
                return (
                  'function' == typeof e
                    ? ((t = e), (e = {}))
                    : void 0 === e && (e = {}),
                  this.as._jsonRequest({
                    method: 'POST',
                    url:
                      '/1/indexes/' +
                      encodeURIComponent(this.indexName) +
                      '/synonyms/search',
                    body: e,
                    hostType: 'read',
                    callback: t
                  })
                );
              }),
              (n.prototype.exportSynonyms = function(e, t) {
                return o(this.searchSynonyms.bind(this), e, t);
              }),
              (n.prototype.saveSynonym = function(e, t, r) {
                'function' == typeof t
                  ? ((r = t), (t = {}))
                  : void 0 === t && (t = {}),
                  void 0 !== t.forwardToSlaves && p();
                var n =
                  t.forwardToSlaves || t.forwardToReplicas ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'PUT',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/synonyms/' +
                    encodeURIComponent(e.objectID) +
                    '?forwardToReplicas=' +
                    n,
                  body: e,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.getSynonym = function(e, t) {
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/synonyms/' +
                    encodeURIComponent(e),
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.deleteSynonym = function(e, t, r) {
                'function' == typeof t
                  ? ((r = t), (t = {}))
                  : void 0 === t && (t = {}),
                  void 0 !== t.forwardToSlaves && p();
                var n =
                  t.forwardToSlaves || t.forwardToReplicas ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'DELETE',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/synonyms/' +
                    encodeURIComponent(e) +
                    '?forwardToReplicas=' +
                    n,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.clearSynonyms = function(e, t) {
                'function' == typeof e
                  ? ((t = e), (e = {}))
                  : void 0 === e && (e = {}),
                  void 0 !== e.forwardToSlaves && p();
                var r =
                  e.forwardToSlaves || e.forwardToReplicas ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/synonyms/clear?forwardToReplicas=' +
                    r,
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.batchSynonyms = function(e, t, r) {
                'function' == typeof t
                  ? ((r = t), (t = {}))
                  : void 0 === t && (t = {}),
                  void 0 !== t.forwardToSlaves && p();
                var n =
                  t.forwardToSlaves || t.forwardToReplicas ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/synonyms/batch?forwardToReplicas=' +
                    n +
                    '&replaceExistingSynonyms=' +
                    (t.replaceExistingSynonyms ? 'true' : 'false'),
                  hostType: 'write',
                  body: e,
                  callback: r
                });
              }),
              (n.prototype.searchRules = function(e, t) {
                return (
                  'function' == typeof e
                    ? ((t = e), (e = {}))
                    : void 0 === e && (e = {}),
                  this.as._jsonRequest({
                    method: 'POST',
                    url:
                      '/1/indexes/' +
                      encodeURIComponent(this.indexName) +
                      '/rules/search',
                    body: e,
                    hostType: 'read',
                    callback: t
                  })
                );
              }),
              (n.prototype.exportRules = function(e, t) {
                return o(this.searchRules.bind(this), e, t);
              }),
              (n.prototype.saveRule = function(e, t, r) {
                if (
                  ('function' == typeof t
                    ? ((r = t), (t = {}))
                    : void 0 === t && (t = {}),
                  !e.objectID)
                )
                  throw new l.AlgoliaSearchError(
                    'Missing or empty objectID field for rule'
                  );
                var n = t.forwardToReplicas === !0 ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'PUT',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/rules/' +
                    encodeURIComponent(e.objectID) +
                    '?forwardToReplicas=' +
                    n,
                  body: e,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.getRule = function(e, t) {
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/rules/' +
                    encodeURIComponent(e),
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.deleteRule = function(e, t, r) {
                'function' == typeof t
                  ? ((r = t), (t = {}))
                  : void 0 === t && (t = {});
                var n = t.forwardToReplicas === !0 ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'DELETE',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/rules/' +
                    encodeURIComponent(e) +
                    '?forwardToReplicas=' +
                    n,
                  hostType: 'write',
                  callback: r
                });
              }),
              (n.prototype.clearRules = function(e, t) {
                'function' == typeof e
                  ? ((t = e), (e = {}))
                  : void 0 === e && (e = {});
                var r = e.forwardToReplicas === !0 ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/rules/clear?forwardToReplicas=' +
                    r,
                  hostType: 'write',
                  callback: t
                });
              }),
              (n.prototype.batchRules = function(e, t, r) {
                'function' == typeof t
                  ? ((r = t), (t = {}))
                  : void 0 === t && (t = {});
                var n = t.forwardToReplicas === !0 ? 'true' : 'false';
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/rules/batch?forwardToReplicas=' +
                    n +
                    '&clearExistingRules=' +
                    (t.clearExistingRules === !0 ? 'true' : 'false'),
                  hostType: 'write',
                  body: e,
                  callback: r
                });
              }),
              (n.prototype.setSettings = function(e, t, r) {
                (1 !== arguments.length && 'function' != typeof t) ||
                  ((r = t), (t = {})),
                  void 0 !== t.forwardToSlaves && p();
                var n =
                    t.forwardToSlaves || t.forwardToReplicas ? 'true' : 'false',
                  o = this;
                return this.as._jsonRequest({
                  method: 'PUT',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(o.indexName) +
                    '/settings?forwardToReplicas=' +
                    n,
                  hostType: 'write',
                  body: e,
                  callback: r
                });
              }),
              (n.prototype.listUserKeys = a(function(e) {
                return this.listApiKeys(e);
              }, c('index.listUserKeys()', 'client.listApiKeys()'))),
              (n.prototype.listApiKeys = a(function(e) {
                var t = this;
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' + encodeURIComponent(t.indexName) + '/keys',
                  hostType: 'read',
                  callback: e
                });
              }, c('index.listApiKeys()', 'client.listApiKeys()'))),
              (n.prototype.getUserKeyACL = a(function(e, t) {
                return this.getApiKey(e, t);
              }, c('index.getUserKeyACL()', 'client.getApiKey()'))),
              (n.prototype.getApiKey = a(function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(r.indexName) +
                    '/keys/' +
                    e,
                  hostType: 'read',
                  callback: t
                });
              }, c('index.getApiKey()', 'client.getApiKey()'))),
              (n.prototype.deleteUserKey = a(function(e, t) {
                return this.deleteApiKey(e, t);
              }, c('index.deleteUserKey()', 'client.deleteApiKey()'))),
              (n.prototype.deleteApiKey = a(function(e, t) {
                var r = this;
                return this.as._jsonRequest({
                  method: 'DELETE',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(r.indexName) +
                    '/keys/' +
                    e,
                  hostType: 'write',
                  callback: t
                });
              }, c('index.deleteApiKey()', 'client.deleteApiKey()'))),
              (n.prototype.addUserKey = a(function(e, t, r) {
                return this.addApiKey(e, t, r);
              }, c('index.addUserKey()', 'client.addApiKey()'))),
              (n.prototype.addApiKey = a(function(t, r, n) {
                var o = e(8),
                  i = 'Usage: index.addApiKey(arrayOfAcls[, params, callback])';
                if (!o(t)) throw new Error(i);
                (1 !== arguments.length && 'function' != typeof r) ||
                  ((n = r), (r = null));
                var s = { acl: t };
                return (
                  r &&
                    ((s.validity = r.validity),
                    (s.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour),
                    (s.maxHitsPerQuery = r.maxHitsPerQuery),
                    (s.description = r.description),
                    r.queryParameters &&
                      (s.queryParameters = this.as._getSearchParams(
                        r.queryParameters,
                        ''
                      )),
                    (s.referers = r.referers)),
                  this.as._jsonRequest({
                    method: 'POST',
                    url:
                      '/1/indexes/' +
                      encodeURIComponent(this.indexName) +
                      '/keys',
                    body: s,
                    hostType: 'write',
                    callback: n
                  })
                );
              }, c('index.addApiKey()', 'client.addApiKey()'))),
              (n.prototype.addUserKeyWithValidity = a(function(e, t, r) {
                return this.addApiKey(e, t, r);
              }, c('index.addUserKeyWithValidity()', 'client.addApiKey()'))),
              (n.prototype.updateUserKey = a(function(e, t, r, n) {
                return this.updateApiKey(e, t, r, n);
              }, c('index.updateUserKey()', 'client.updateApiKey()'))),
              (n.prototype.updateApiKey = a(function(t, r, n, o) {
                var i = e(8),
                  s =
                    'Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])';
                if (!i(r)) throw new Error(s);
                (2 !== arguments.length && 'function' != typeof n) ||
                  ((o = n), (n = null));
                var a = { acl: r };
                return (
                  n &&
                    ((a.validity = n.validity),
                    (a.maxQueriesPerIPPerHour = n.maxQueriesPerIPPerHour),
                    (a.maxHitsPerQuery = n.maxHitsPerQuery),
                    (a.description = n.description),
                    n.queryParameters &&
                      (a.queryParameters = this.as._getSearchParams(
                        n.queryParameters,
                        ''
                      )),
                    (a.referers = n.referers)),
                  this.as._jsonRequest({
                    method: 'PUT',
                    url:
                      '/1/indexes/' +
                      encodeURIComponent(this.indexName) +
                      '/keys/' +
                      t,
                    body: a,
                    hostType: 'write',
                    callback: o
                  })
                );
              }, c('index.updateApiKey()', 'client.updateApiKey()')));
          },
          {
            17: 17,
            18: 18,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            7: 7,
            8: 8
          }
        ],
        17: [
          function(e, t, r) {
            'use strict';
            function n() {}
            t.exports = n;
            var o = e(7),
              i = e(4).EventEmitter;
            o(n, i),
              (n.prototype.stop = function() {
                (this._stopped = !0), this._clean();
              }),
              (n.prototype._end = function() {
                this.emit('end'), this._clean();
              }),
              (n.prototype._error = function(e) {
                this.emit('error', e), this._clean();
              }),
              (n.prototype._result = function(e) {
                this.emit('result', e);
              }),
              (n.prototype._clean = function() {
                this.removeAllListeners('stop'),
                  this.removeAllListeners('end'),
                  this.removeAllListeners('error'),
                  this.removeAllListeners('result');
              });
          },
          { 4: 4, 7: 7 }
        ],
        18: [
          function(e, t, r) {
            function n(e, t) {
              (this.indexName = t),
                (this.as = e),
                (this.typeAheadArgs = null),
                (this.typeAheadValueOption = null),
                (this.cache = {});
            }
            var o = e(23),
              i = e(25),
              s = e(26);
            (t.exports = n),
              (n.prototype.clearCache = function() {
                this.cache = {};
              }),
              (n.prototype.search = o('query')),
              (n.prototype.similarSearch = o('similarQuery')),
              (n.prototype.browse = function(t, r, n) {
                var o,
                  i,
                  s = e(30),
                  a = this;
                0 === arguments.length ||
                (1 === arguments.length && 'function' == typeof arguments[0])
                  ? ((o = 0), (n = arguments[0]), (t = void 0))
                  : 'number' == typeof arguments[0]
                    ? ((o = arguments[0]),
                      'number' == typeof arguments[1]
                        ? (i = arguments[1])
                        : 'function' == typeof arguments[1] &&
                          ((n = arguments[1]), (i = void 0)),
                      (t = void 0),
                      (r = void 0))
                    : 'object' == typeof arguments[0]
                      ? ('function' == typeof arguments[1] &&
                          (n = arguments[1]),
                        (r = arguments[0]),
                        (t = void 0))
                      : 'string' == typeof arguments[0] &&
                        'function' == typeof arguments[1] &&
                        ((n = arguments[1]), (r = void 0)),
                  (r = s({}, r || {}, { page: o, hitsPerPage: i, query: t }));
                var c = this.as._getSearchParams(r, '');
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' + encodeURIComponent(a.indexName) + '/browse',
                  body: { params: c },
                  hostType: 'read',
                  callback: n
                });
              }),
              (n.prototype.browseFrom = function(e, t) {
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/browse',
                  body: { cursor: e },
                  hostType: 'read',
                  callback: t
                });
              }),
              (n.prototype.searchForFacetValues = function(t, r) {
                var n = e(24),
                  o = e(31),
                  i =
                    'Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])';
                if (void 0 === t.facetName || void 0 === t.facetQuery)
                  throw new Error(i);
                var s = t.facetName,
                  a = o(n(t), function(e) {
                    return 'facetName' === e;
                  }),
                  c = this.as._getSearchParams(a, '');
                return this.as._jsonRequest({
                  method: 'POST',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(this.indexName) +
                    '/facets/' +
                    encodeURIComponent(s) +
                    '/query',
                  hostType: 'read',
                  body: { params: c },
                  callback: r
                });
              }),
              (n.prototype.searchFacet = i(function(e, t) {
                return this.searchForFacetValues(e, t);
              }, s(
                'index.searchFacet(params[, callback])',
                'index.searchForFacetValues(params[, callback])'
              ))),
              (n.prototype._search = function(e, t, r, n) {
                return this.as._jsonRequest({
                  cache: this.cache,
                  method: 'POST',
                  url:
                    t ||
                    '/1/indexes/' +
                      encodeURIComponent(this.indexName) +
                      '/query',
                  body: { params: e },
                  hostType: 'read',
                  fallback: {
                    method: 'GET',
                    url: '/1/indexes/' + encodeURIComponent(this.indexName),
                    body: { params: e }
                  },
                  callback: r,
                  additionalUA: n
                });
              }),
              (n.prototype.getObject = function(e, t, r) {
                var n = this;
                (1 !== arguments.length && 'function' != typeof t) ||
                  ((r = t), (t = void 0));
                var o = '';
                if (void 0 !== t) {
                  o = '?attributes=';
                  for (var i = 0; i < t.length; ++i)
                    0 !== i && (o += ','), (o += t[i]);
                }
                return this.as._jsonRequest({
                  method: 'GET',
                  url:
                    '/1/indexes/' +
                    encodeURIComponent(n.indexName) +
                    '/' +
                    encodeURIComponent(e) +
                    o,
                  hostType: 'read',
                  callback: r
                });
              }),
              (n.prototype.getObjects = function(t, r, n) {
                var o = e(8),
                  i = e(29),
                  s = 'Usage: index.getObjects(arrayOfObjectIDs[, callback])';
                if (!o(t)) throw new Error(s);
                var a = this;
                (1 !== arguments.length && 'function' != typeof r) ||
                  ((n = r), (r = void 0));
                var c = {
                  requests: i(t, function(e) {
                    var t = { indexName: a.indexName, objectID: e };
                    return r && (t.attributesToRetrieve = r.join(',')), t;
                  })
                };
                return this.as._jsonRequest({
                  method: 'POST',
                  url: '/1/indexes/*/objects',
                  hostType: 'read',
                  body: c,
                  callback: n
                });
              }),
              (n.prototype.as = null),
              (n.prototype.indexName = null),
              (n.prototype.typeAheadArgs = null),
              (n.prototype.typeAheadValueOption = null);
          },
          { 23: 23, 24: 24, 25: 25, 26: 26, 29: 29, 30: 30, 31: 31, 8: 8 }
        ],
        19: [
          function(e, t, r) {
            'use strict';
            var n = e(14),
              o = e(20);
            t.exports = o(n);
          },
          { 14: 14, 20: 20 }
        ],
        20: [
          function(e, t, r) {
            (function(r) {
              'use strict';
              var n = e(6),
                o = n.Promise || e(3).Promise;
              t.exports = function(t, i) {
                function s(t, r, n) {
                  var o = e(24);
                  return (
                    (n = o(n || {})), (n._ua = n._ua || s.ua), new a(t, r, n)
                  );
                }
                function a() {
                  t.apply(this, arguments);
                }
                var c = e(7),
                  u = e(27),
                  l = e(21),
                  p = e(22),
                  d = e(32);
                (i = i || ''),
                  'debug' === r.env.NODE_ENV && e(1).enable('algoliasearch*'),
                  (s.version = e(34)),
                  (s.ua = 'Algolia for vanilla JavaScript ' + i + s.version),
                  (s.initPlaces = d(s)),
                  (n.__algolia = { debug: e(1), algoliasearch: s });
                var h = {
                  hasXMLHttpRequest: 'XMLHttpRequest' in n,
                  hasXDomainRequest: 'XDomainRequest' in n
                };
                return (
                  h.hasXMLHttpRequest &&
                    (h.cors = 'withCredentials' in new XMLHttpRequest()),
                  c(a, t),
                  (a.prototype._request = function(e, t) {
                    return new o(function(r, n) {
                      function o() {
                        if (!f) {
                          clearTimeout(d);
                          var e;
                          try {
                            e = {
                              body: JSON.parse(m.responseText),
                              responseText: m.responseText,
                              statusCode: m.status,
                              headers:
                                (m.getAllResponseHeaders &&
                                  m.getAllResponseHeaders()) ||
                                {}
                            };
                          } catch (t) {
                            e = new u.UnparsableJSON({ more: m.responseText });
                          }
                          e instanceof u.UnparsableJSON ? n(e) : r(e);
                        }
                      }
                      function i(e) {
                        f || (clearTimeout(d), n(new u.Network({ more: e })));
                      }
                      function s() {
                        (f = !0), m.abort(), n(new u.RequestTimeout());
                      }
                      function a() {
                        (v = !0),
                          clearTimeout(d),
                          (d = setTimeout(s, t.timeouts.complete));
                      }
                      function c() {
                        v || a();
                      }
                      function p() {
                        !v && m.readyState > 1 && a();
                      }
                      if (!h.cors && !h.hasXDomainRequest)
                        return void n(new u.Network('CORS not supported'));
                      e = l(e, t.headers);
                      var d,
                        f,
                        y = t.body,
                        m = h.cors
                          ? new XMLHttpRequest()
                          : new XDomainRequest(),
                        v = !1;
                      (d = setTimeout(s, t.timeouts.connect)),
                        (m.onprogress = c),
                        'onreadystatechange' in m && (m.onreadystatechange = p),
                        (m.onload = o),
                        (m.onerror = i),
                        m instanceof XMLHttpRequest
                          ? m.open(t.method, e, !0)
                          : m.open(t.method, e),
                        h.cors &&
                          (y &&
                            ('POST' === t.method
                              ? m.setRequestHeader(
                                  'content-type',
                                  'application/x-www-form-urlencoded'
                                )
                              : m.setRequestHeader(
                                  'content-type',
                                  'application/json'
                                )),
                          m.setRequestHeader('accept', 'application/json')),
                        m.send(y);
                    });
                  }),
                  (a.prototype._request.fallback = function(e, t) {
                    return (
                      (e = l(e, t.headers)),
                      new o(function(r, n) {
                        p(e, t, function(e, t) {
                          return e ? void n(e) : void r(t);
                        });
                      })
                    );
                  }),
                  (a.prototype._promise = {
                    reject: function(e) {
                      return o.reject(e);
                    },
                    resolve: function(e) {
                      return o.resolve(e);
                    },
                    delay: function(e) {
                      return new o(function(t) {
                        setTimeout(t, e);
                      });
                    },
                    all: function(e) {
                      return o.all(e);
                    }
                  }),
                  s
                );
              };
            }.call(this, e(12)));
          },
          {
            1: 1,
            12: 12,
            21: 21,
            22: 22,
            24: 24,
            27: 27,
            3: 3,
            32: 32,
            34: 34,
            6: 6,
            7: 7
          }
        ],
        21: [
          function(e, t, r) {
            'use strict';
            function n(e, t) {
              return (e += /\?/.test(e) ? '&' : '?'), e + o(t);
            }
            t.exports = n;
            var o = e(13);
          },
          { 13: 13 }
        ],
        22: [
          function(e, t, r) {
            'use strict';
            function n(e, t, r) {
              function n() {
                t.debug('JSONP: success'),
                  m ||
                    d ||
                    ((m = !0),
                    p ||
                      (t.debug(
                        'JSONP: Fail. Script loaded but did not call the callback'
                      ),
                      a(),
                      r(new o.JSONPScriptFail())));
              }
              function s() {
                ('loaded' !== this.readyState &&
                  'complete' !== this.readyState) ||
                  n();
              }
              function a() {
                clearTimeout(v),
                  (f.onload = null),
                  (f.onreadystatechange = null),
                  (f.onerror = null),
                  h.removeChild(f);
              }
              function c() {
                try {
                  delete window[y], delete window[y + '_loaded'];
                } catch (e) {
                  window[y] = window[y + '_loaded'] = void 0;
                }
              }
              function u() {
                t.debug('JSONP: Script timeout'),
                  (d = !0),
                  a(),
                  r(new o.RequestTimeout());
              }
              function l() {
                t.debug('JSONP: Script error'),
                  m || d || (a(), r(new o.JSONPScriptError()));
              }
              if ('GET' !== t.method)
                return void r(
                  new Error(
                    'Method ' +
                      t.method +
                      ' ' +
                      e +
                      ' is not supported by JSONP.'
                  )
                );
              t.debug('JSONP: start');
              var p = !1,
                d = !1;
              i += 1;
              var h = document.getElementsByTagName('head')[0],
                f = document.createElement('script'),
                y = 'algoliaJSONP_' + i,
                m = !1;
              (window[y] = function(e) {
                return (
                  c(),
                  d
                    ? void t.debug('JSONP: Late answer, ignoring')
                    : ((p = !0), a(), void r(null, { body: e }))
                );
              }),
                (e += '&callback=' + y),
                t.jsonBody &&
                  t.jsonBody.params &&
                  (e += '&' + t.jsonBody.params);
              var v = setTimeout(u, t.timeouts.complete);
              (f.onreadystatechange = s),
                (f.onload = n),
                (f.onerror = l),
                (f.async = !0),
                (f.defer = !0),
                (f.src = e),
                h.appendChild(f);
            }
            t.exports = n;
            var o = e(27),
              i = 0;
          },
          { 27: 27 }
        ],
        23: [
          function(e, t, r) {
            function n(e, t) {
              return function(r, n, i) {
                if (
                  ('function' == typeof r && 'object' == typeof n) ||
                  'object' == typeof i
                )
                  throw new o.AlgoliaSearchError(
                    'index.search usage is index.search(query, params, cb)'
                  );
                0 === arguments.length || 'function' == typeof r
                  ? ((i = r), (r = ''))
                  : (1 !== arguments.length && 'function' != typeof n) ||
                    ((i = n), (n = void 0)),
                  'object' == typeof r && null !== r
                    ? ((n = r), (r = void 0))
                    : (void 0 !== r && null !== r) || (r = '');
                var s = '';
                void 0 !== r && (s += e + '=' + encodeURIComponent(r));
                var a;
                return (
                  void 0 !== n &&
                    (n.additionalUA &&
                      ((a = n.additionalUA), delete n.additionalUA),
                    (s = this.as._getSearchParams(n, s))),
                  this._search(s, t, i, a)
                );
              };
            }
            t.exports = n;
            var o = e(27);
          },
          { 27: 27 }
        ],
        24: [
          function(e, t, r) {
            t.exports = function(e) {
              return JSON.parse(JSON.stringify(e));
            };
          },
          {}
        ],
        25: [
          function(e, t, r) {
            t.exports = function(e, t) {
              function r() {
                return (
                  n || (console.warn(t), (n = !0)), e.apply(this, arguments)
                );
              }
              var n = !1;
              return r;
            };
          },
          {}
        ],
        26: [
          function(e, t, r) {
            t.exports = function(e, t) {
              var r = e.toLowerCase().replace(/[\.\(\)]/g, '');
              return (
                'algoliasearch: `' +
                e +
                '` was replaced by `' +
                t +
                '`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#' +
                r
              );
            };
          },
          {}
        ],
        27: [
          function(e, t, r) {
            'use strict';
            function n(t, r) {
              var n = e(5),
                o = this;
              'function' == typeof Error.captureStackTrace
                ? Error.captureStackTrace(this, this.constructor)
                : (o.stack =
                    new Error().stack ||
                    'Cannot get a stacktrace, browser is too old'),
                (this.name = 'AlgoliaSearchError'),
                (this.message = t || 'Unknown error'),
                r &&
                  n(r, function(e, t) {
                    o[t] = e;
                  });
            }
            function o(e, t) {
              function r() {
                var r = Array.prototype.slice.call(arguments, 0);
                'string' != typeof r[0] && r.unshift(t),
                  n.apply(this, r),
                  (this.name = 'AlgoliaSearch' + e + 'Error');
              }
              return i(r, n), r;
            }
            var i = e(7);
            i(n, Error),
              (t.exports = {
                AlgoliaSearchError: n,
                UnparsableJSON: o(
                  'UnparsableJSON',
                  'Could not parse the incoming response as JSON, see err.more for details'
                ),
                RequestTimeout: o(
                  'RequestTimeout',
                  'Request timedout before getting a response'
                ),
                Network: o(
                  'Network',
                  'Network issue, see err.more for details'
                ),
                JSONPScriptFail: o(
                  'JSONPScriptFail',
                  '<script> was loaded but did not call our provided callback'
                ),
                JSONPScriptError: o(
                  'JSONPScriptError',
                  '<script> unable to load due to an `error` event on it'
                ),
                Unknown: o('Unknown', 'Unknown error occured')
              });
          },
          { 5: 5, 7: 7 }
        ],
        28: [
          function(e, t, r) {
            t.exports = function(e, t) {
              t(e, 0);
            };
          },
          {}
        ],
        29: [
          function(e, t, r) {
            var n = e(5);
            t.exports = function(e, t) {
              var r = [];
              return (
                n(e, function(n, o) {
                  r.push(t(n, o, e));
                }),
                r
              );
            };
          },
          { 5: 5 }
        ],
        30: [
          function(e, t, r) {
            var n = e(5);
            t.exports = function o(e) {
              var t = Array.prototype.slice.call(arguments);
              return (
                n(t, function(t) {
                  for (var r in t)
                    t.hasOwnProperty(r) &&
                      ('object' == typeof e[r] && 'object' == typeof t[r]
                        ? (e[r] = o({}, e[r], t[r]))
                        : void 0 !== t[r] && (e[r] = t[r]));
                }),
                e
              );
            };
          },
          { 5: 5 }
        ],
        31: [
          function(e, t, r) {
            t.exports = function(t, r) {
              var n = e(10),
                o = e(5),
                i = {};
              return (
                o(n(t), function(e) {
                  r(e) !== !0 && (i[e] = t[e]);
                }),
                i
              );
            };
          },
          { 10: 10, 5: 5 }
        ],
        32: [
          function(e, t, r) {
            function n(t) {
              return function(r, n, i) {
                var s = e(24);
                (i = (i && s(i)) || {}),
                  (i.hosts = i.hosts || [
                    'places-dsn.algolia.net',
                    'places-1.algolianet.com',
                    'places-2.algolianet.com',
                    'places-3.algolianet.com'
                  ]),
                  (0 !== arguments.length &&
                    'object' != typeof r &&
                    void 0 !== r) ||
                    ((r = ''), (n = ''), (i._allowEmptyCredentials = !0));
                var a = t(r, n, i),
                  c = a.initIndex('places');
                return (
                  (c.search = o('query', '/1/places/query')),
                  (c.getObject = function(e, t) {
                    return this.as._jsonRequest({
                      method: 'GET',
                      url: '/1/places/' + encodeURIComponent(e),
                      hostType: 'read',
                      callback: t
                    });
                  }),
                  c
                );
              };
            }
            t.exports = n;
            var o = e(23);
          },
          { 23: 23, 24: 24 }
        ],
        33: [
          function(e, t, r) {
            (function(r) {
              function n(e, t) {
                return c('localStorage failed with', t), s(), (a = l), a.get(e);
              }
              function o(e, t) {
                return 1 === arguments.length ? a.get(e) : a.set(e, t);
              }
              function i() {
                try {
                  return (
                    'localStorage' in r &&
                    null !== r.localStorage &&
                    (r.localStorage[u] ||
                      r.localStorage.setItem(u, JSON.stringify({})),
                    !0)
                  );
                } catch (e) {
                  return !1;
                }
              }
              function s() {
                try {
                  r.localStorage.removeItem(u);
                } catch (e) {}
              }
              var a,
                c = e(1)('algoliasearch:src/hostIndexState.js'),
                u = 'algoliasearch-client-js',
                l = {
                  state: {},
                  set: function(e, t) {
                    return (this.state[e] = t), this.state[e];
                  },
                  get: function(e) {
                    return this.state[e] || null;
                  }
                },
                p = {
                  set: function(e, t) {
                    l.set(e, t);
                    try {
                      var o = JSON.parse(r.localStorage[u]);
                      return (
                        (o[e] = t),
                        (r.localStorage[u] = JSON.stringify(o)),
                        o[e]
                      );
                    } catch (i) {
                      return n(e, i);
                    }
                  },
                  get: function(e) {
                    try {
                      return JSON.parse(r.localStorage[u])[e] || null;
                    } catch (t) {
                      return n(e, t);
                    }
                  }
                };
              (a = i() ? p : l),
                (t.exports = { get: o, set: o, supportsLocalStorage: i });
            }.call(
              this,
              'undefined' != typeof global
                ? global
                : 'undefined' != typeof self
                  ? self
                  : 'undefined' != typeof window
                    ? window
                    : {}
            ));
          },
          { 1: 1 }
        ],
        34: [
          function(e, t, r) {
            'use strict';
            t.exports = '3.27.1';
          },
          {}
        ]
      },
      {},
      [19]
    )(19);
  });