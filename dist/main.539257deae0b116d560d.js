(() => {
  'use strict';
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute('nonce', e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              l = r.base ? s[0] + r.base : s[0],
              d = a[l] || 0,
              u = ''.concat(l, ' ').concat(d);
            a[l] = d + 1;
            var p = t(u),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) (e[p].references++, e[p].updater(f));
            else {
              var g = o(f, r);
              ((r.byIndex = c),
                e.splice(c, 0, { identifier: u, updater: g, references: 1 }));
            }
            i.push(u);
          }
          return i;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var a = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = t(a[i]);
              e[c].references--;
            }
            for (var s = r(n, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = s;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = '',
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += '@supports ('.concat(e[4], ') {')),
                  e[2] && (t += '@media '.concat(e[2], ' {')),
                  r &&
                    (t += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (t += n(e)),
                  r && (t += '}'),
                  e[2] && (t += '}'),
                  e[4] && (t += '}'),
                  t
                );
              }).join('');
            }),
            (e.i = function (n, t, r, o, a) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = '@layer'
                        .concat(d[5].length > 0 ? ' '.concat(d[5]) : '', ' {')
                        .concat(d[1], '}')),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = '@media '
                          .concat(d[2], ' {')
                          .concat(d[1], '}')),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = '@supports ('
                          .concat(d[4], ') {')
                          .concat(d[1], '}')),
                        (d[4] = o))
                      : (d[4] = ''.concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement('style');
          return (n.setAttributes(e, n.attributes), n.insert(e, n.options), e);
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = '';
                (t.supports && (r += '@supports ('.concat(t.supports, ') {')),
                  t.media && (r += '@media '.concat(t.media, ' {')));
                var o = void 0 !== t.layer;
                (o &&
                  (r += '@layer'.concat(
                    t.layer.length > 0 ? ' '.concat(t.layer) : '',
                    ' {',
                  )),
                  (r += t.css),
                  o && (r += '}'),
                  t.media && (r += '}'),
                  t.supports && (r += '}'));
                var a = t.sourceMap;
                (a &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, n, e.options));
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      915: (n, e, t) => {
        t.d(e, { A: () => c });
        var r = t(601),
          o = t.n(r),
          a = t(314),
          i = t.n(a)()(o());
        i.push([
          n.id,
          "body,\n.calculator,\n.calculator-screen,\n.btn {\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease;\n}\n\n.calculator {\n  margin: 50px auto;\n  width: 300px;\n  height: auto;\n  border-radius: 10px;\n  background: #5b5a5a;\n  color: #fff;\n  padding-top: 10px;\n  box-shadow: 8px 12px 30px #010000c6;\n  font-family: Arial, Helvetica, sans-serif;\n  overflow: hidden;\n  border: 1px solid #505050;\n}\n\n.calculator-screen {\n  height: 60px;\n  padding: 10px;\n  padding-right: 20px;\n  padding-left: 20px;\n  display: flex;\n  justify-content: end;\n  align-content: center;\n  margin-bottom: 5px;\n\n  font-size: 4rem;\n}\n\n.calculator-screen p {\n  margin: 0;\n}\n\n.buttons {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1px;\n}\n\n.btn {\n  width: 100%;\n  background-color: #8e8989;\n  text-align: center;\n  line-height: 60px;\n  font-size: 1.5rem;\n  cursor: pointer;\n  user-select: none;\n\n  &:hover {\n    filter: brightness(120%);\n  }\n\n  &:active {\n    filter: brightness(90%);\n  }\n}\n\n.btn.dark-grey {\n  background-color: #6b6969;\n}\n\n.btn.orange {\n  background-color: rgb(255, 172, 17);\n}\n\n.btn.zero {\n  grid-column: span 2;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #aaa;\n  transition: 0.3s;\n  border-radius: 20px;\n}\n\n.slider:before {\n  content: '';\n  position: absolute;\n  height: 14px;\n  width: 14px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  transition: 0.3s;\n  border-radius: 50%;\n}\n\ninput:checked + .slider {\n  background-color: #333;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(20px);\n}\n\nbody.light {\n  background-color: #424141;\n  color: #000;\n}\n\nbody.light .calculator {\n  background: #ffffff;\n  color: #000;\n  box-shadow: 8px 12px 30px rgba(0, 0, 0, 0.1);\n  border: 1px solid #ccc;\n}\n\nbody.light .btn {\n  background-color: #e0e0e0;\n  color: #303030;\n}\n\nbody.light .btn.dark-grey {\n  background-color: #c0c0c0;\n}\n\nbody.light .btn.orange {\n  background-color: #ff9500;\n  color: #3f3f3f;\n}\n",
          '',
        ]);
        const c = i;
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return (n[r](a, a.exports, t), a.exports);
  }
  ((t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return (t.d(e, { a: e }), e);
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0));
  var r = t(72),
    o = t.n(r),
    a = t(825),
    i = t.n(a),
    c = t(659),
    s = t.n(c),
    l = t(56),
    d = t.n(l),
    u = t(540),
    p = t.n(u),
    f = t(113),
    g = t.n(f),
    b = t(915),
    h = {};
  ((h.styleTagTransform = g()),
    (h.setAttributes = d()),
    (h.insert = s().bind(null, 'head')),
    (h.domAPI = i()),
    (h.insertStyleElement = p()),
    o()(b.A, h),
    b.A && b.A.locals && b.A.locals);
  const m = { a: '', b: '', sign: '', finish: !1 },
    v = document.querySelector('.calculator-screen p');
  function y(n, e, t) {
    let r = n;
    (e && (r += ' ' + e),
      t && (r += ' ' + t),
      (r = r.replace(/\./g, ',')),
      (v.textContent = r || 0),
      (function () {
        const n = v.parentElement.clientWidth - 40;
        let e = 64;
        for (
          v.style.fontSize = e + 'px', v.style.whiteSpace = 'nowrap';
          v.scrollWidth > n && e > 16;

        )
          ((e -= 2), (v.style.fontSize = e + 'px'));
        e <= 16 && (v.style.whiteSpace = 'normal');
      })(),
      console.log(n, e, t));
  }
  const x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','],
    k = ['−', '+', '×', '÷'],
    S = ['AC', '+/-', '%'];
  function w() {
    switch (m.sign) {
      case '+':
        m.a = (+m.a + +m.b).toString();
        break;
      case '−':
        m.a = (+m.a - +m.b).toString();
        break;
      case '×':
        m.a = (+m.a * +m.b).toString();
        break;
      case '÷':
        if ('0' === m.b)
          return ((m.a = 'Error'), (m.b = ''), void (m.sign = ''));
        m.a = (+m.a / +m.b).toString();
    }
    ((m.finish = !0), (m.b = ''), (m.sign = ''));
  }
  (document.querySelector('.buttons').addEventListener('click', (n) => {
    const e = n.target.textContent;
    x.includes(e) &&
      ((function (n) {
        if ('Error' !== m.a)
          if (',' !== n)
            if (m.sign) {
              if (m.b.length >= 30) return;
              m.b += n;
            } else {
              if ((m.finish && ((m.a = ''), (m.finish = !1)), m.a.length >= 30))
                return;
              m.a += n;
            }
          else
            m.sign || m.a.includes('.')
              ? m.sign && !m.b.includes('.') && (m.b += '.')
              : (m.a += '.');
      })(e),
      y(m.a, m.sign, m.b));
  }),
    document.querySelector('.buttons').addEventListener('click', (n) => {
      const e = n.target.textContent;
      k.includes(e) &&
        ((function (n) {
          'Error' !== m.a &&
            (m.sign && m.b
              ? (w(), (m.sign = n), (m.finish = !1))
              : (m.sign = n));
        })(e),
        y(m.a, m.sign, m.b));
    }),
    document.querySelector('.equal').addEventListener('click', () => {
      (w(), y(m.a, '', ''));
    }),
    document.querySelector('.buttons').addEventListener('click', (n) => {
      const e = n.target.textContent;
      S.includes(e) &&
        ((function (n) {
          switch (n) {
            case 'AC':
              ((m.a = ''), (m.b = ''), (m.sign = ''), (m.finish = !1));
              break;
            case '+/-':
              if ('Error' === m.a) return;
              m.b
                ? (m.b = m.b.startsWith('-') ? m.b.slice(1) : '-' + m.b)
                : m.a && (m.a = m.a.startsWith('-') ? m.a.slice(1) : '-' + m.a);
              break;
            case '%':
              if ('Error' === m.a) return;
              m.b
                ? (m.b = (+m.b / 100).toString())
                : m.a && (m.a = (+m.a / 100).toString());
          }
        })(e),
        y(m.a, m.sign, m.b));
    }),
    (function () {
      const n = document.querySelector('.theme-toggle');
      ('light' === localStorage.getItem('theme') &&
        (document.body.classList.add('light'), (n.checked = !0)),
        n.addEventListener('change', () => {
          (document.body.classList.toggle('light'),
            document.body.classList.contains('light')
              ? localStorage.setItem('theme', 'light')
              : localStorage.setItem('theme', 'dark'));
        }));
    })());
})();
