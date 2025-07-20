(() => {
  "use strict";
  var n = {
      426: (n, e, t) => {
        t.d(e, { Z: () => f });
        var r = t(537),
          o = t.n(r),
          i = t(645),
          a = t.n(i),
          c = t(667),
          d = t.n(c),
          A = new URL(t(354), t.b),
          s = new URL(t(327), t.b),
          l = a()(o()),
          p = d()(A),
          u = d()(s);
        l.push([
          n.id,
          `@font-face {\n    font-family: HeadlineFont;\n    src: url(${p}) format('woff'),\n        url(${u}) format('woff2');\n}\n\n* {\n    color: inherit;\n    justify-self: center;\n    text-decoration: none;\n}\n\n.activeMenu {\n    color: #CD9E50;\n    background-color: #a7c7ba42;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E50;\n    border-right: 1px solid #CD9E50;\n    border-top: 1px solid #CD9E50;\n}\n\nbody {\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n#contactGrid {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 90vw;\n}\n\n#contactGrid button {\n    background-color: #88a0962a;\n    border: 2px solid #CD9E50;\n    color:#CD9E50;\n    border-radius: 10px;\n    display: flex;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 18px;\n    padding: 6px 14px;\n    text-align: center;\n}\n\n#contactGrid button:hover {\n    border-color: #ecb45b;\n    color: #ecb45b;\n    background-color: #b7d6c92a;\n}\n\n#contactGrid > div:first-child {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 5vh\n}\n\n#contactGrid > div:last-child {\n    flex-grow: 3;\n}\n\n#content {\n    background-color: #F5F7F6;\n    display: grid;\n    width: 100%;\n}\n\nfooter {\n    color: #CD9E50;\n    background-color: #dfe1de;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    padding: 1vh 0;\n    text-align: center;\n    width: 100%;\n}\n\n#galleryGrid {\n    align-items: start;\n    display: grid;\n    gap: 2vmin;\n    grid-template-columns: repeat(auto-fit, clamp(300px, 32%, 33%));\n    justify-content: center;\n    justify-items: center;\n    margin: 5vh auto 5vh auto;\n    width: 90vw;\n}\n\n#galleryGrid > * {\n    aspect-ratio: 1 / 1;\n    border: 1px solid #CD9E50;\n    border-radius: 5%;\n    box-sizing: border-box;\n    object-fit: cover;\n    width: max(300px, 28vw);\n}\n\nh1 {\n    color: #88a096;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 48px;\n}\n\nhtml{\n    background-color: #dfe1de;\n}\n\niframe {\n    border: 1px solid #CD9E50;\n    border-radius: 2vmin;\n    aspect-ratio: 4 / 3;\n    display: block;\n    margin: 10vh auto;\n    width: min(600px, 90vw);\n}\n\n.imageLarge {\n    border-radius: 3vmin;\n    height: auto;\n    max-width: 95vw;\n    margin: 5vh 0;\n}\n\nli {\n    border: 1px solid #ffffff00;\n    box-sizing:border-box;\n    padding: 8px 8px 12px 8px;\n}\n\nli:not(.activeMenu):hover {\n    background-color: #a7c7ba25;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E5035;\n    border-right: 1px solid #CD9E5035;\n    border-top: 1px solid #CD9E5035;\n}\n\n#topBar {\n    align-items: center;\n    background-color: #dfe1de;\n    border-bottom: 2px solid #CD9E50;\n    color: #88a096;\n    display: flex;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    justify-content: center;\n    justify-self: unset;\n    position: sticky;\n}\n\n#topBar > ul {\n    align-content: center;\n    align-items: center;\n    display: flex;\n    font-size: 20px;\n    font-weight: bold;\n    gap: 2vw;\n    list-style-type: none;\n    margin: 0;\n    padding: 8px 0 0 0;\n    text-align: center;\n}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,yBAAyB;IACzB;+DAC0E;AAC9E;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;IAC9B,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,2BAA2B;IAC3B,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,aAAa;IACb,sEAAsE;IACtE,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,+FAA+F;IAC/F,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,+DAA+D;IAC/D,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,+FAA+F;IAC/F,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,gCAAgC;IAChC,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,cAAc;IACd,aAAa;IACb,+FAA+F;IAC/F,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,QAAQ;IACR,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,kBAAkB;AACtB",
            sourcesContent: [
              "@font-face {\n    font-family: HeadlineFont;\n    src: url('./dancingscript-variablefont_wght-webfont.woff') format('woff'),\n        url('./dancingscript-variablefont_wght-webfont.woff2') format('woff2');\n}\n\n* {\n    color: inherit;\n    justify-self: center;\n    text-decoration: none;\n}\n\n.activeMenu {\n    color: #CD9E50;\n    background-color: #a7c7ba42;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E50;\n    border-right: 1px solid #CD9E50;\n    border-top: 1px solid #CD9E50;\n}\n\nbody {\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n#contactGrid {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 90vw;\n}\n\n#contactGrid button {\n    background-color: #88a0962a;\n    border: 2px solid #CD9E50;\n    color:#CD9E50;\n    border-radius: 10px;\n    display: flex;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 18px;\n    padding: 6px 14px;\n    text-align: center;\n}\n\n#contactGrid button:hover {\n    border-color: #ecb45b;\n    color: #ecb45b;\n    background-color: #b7d6c92a;\n}\n\n#contactGrid > div:first-child {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 5vh\n}\n\n#contactGrid > div:last-child {\n    flex-grow: 3;\n}\n\n#content {\n    background-color: #F5F7F6;\n    display: grid;\n    width: 100%;\n}\n\nfooter {\n    color: #CD9E50;\n    background-color: #dfe1de;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    padding: 1vh 0;\n    text-align: center;\n    width: 100%;\n}\n\n#galleryGrid {\n    align-items: start;\n    display: grid;\n    gap: 2vmin;\n    grid-template-columns: repeat(auto-fit, clamp(300px, 32%, 33%));\n    justify-content: center;\n    justify-items: center;\n    margin: 5vh auto 5vh auto;\n    width: 90vw;\n}\n\n#galleryGrid > * {\n    aspect-ratio: 1 / 1;\n    border: 1px solid #CD9E50;\n    border-radius: 5%;\n    box-sizing: border-box;\n    object-fit: cover;\n    width: max(300px, 28vw);\n}\n\nh1 {\n    color: #88a096;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 48px;\n}\n\nhtml{\n    background-color: #dfe1de;\n}\n\niframe {\n    border: 1px solid #CD9E50;\n    border-radius: 2vmin;\n    aspect-ratio: 4 / 3;\n    display: block;\n    margin: 10vh auto;\n    width: min(600px, 90vw);\n}\n\n.imageLarge {\n    border-radius: 3vmin;\n    height: auto;\n    max-width: 95vw;\n    margin: 5vh 0;\n}\n\nli {\n    border: 1px solid #ffffff00;\n    box-sizing:border-box;\n    padding: 8px 8px 12px 8px;\n}\n\nli:not(.activeMenu):hover {\n    background-color: #a7c7ba25;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E5035;\n    border-right: 1px solid #CD9E5035;\n    border-top: 1px solid #CD9E5035;\n}\n\n#topBar {\n    align-items: center;\n    background-color: #dfe1de;\n    border-bottom: 2px solid #CD9E50;\n    color: #88a096;\n    display: flex;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    justify-content: center;\n    justify-self: unset;\n    position: sticky;\n}\n\n#topBar > ul {\n    align-content: center;\n    align-items: center;\n    display: flex;\n    font-size: 20px;\n    font-weight: bold;\n    gap: 2vw;\n    list-style-type: none;\n    margin: 0;\n    padding: 8px 0 0 0;\n    text-align: center;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const f = l;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (a[d] = !0);
                }
              for (var A = 0; A < n.length; A++) {
                var s = [].concat(n[A]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  t &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = t))
                      : (s[2] = t)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  e.push(s));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : n)
              : n
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              i = "/*# ".concat(o, " */");
            return [e].concat([i]).join("\n");
          }
          return [e].join("\n");
        };
      },
      379: (n) => {
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
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var d = n[c],
              A = r.base ? d[0] + r.base : d[0],
              s = i[A] || 0,
              l = "".concat(A, " ").concat(s);
            i[A] = s + 1;
            var p = t(l),
              u = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(u);
            else {
              var f = o(u, r);
              (r.byIndex = c),
                e.splice(c, 0, { identifier: l, updater: f, references: 1 });
            }
            a.push(l);
          }
          return a;
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
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = t(i[a]);
              e[c].references--;
            }
            for (var d = r(n, o), A = 0; A < i.length; A++) {
              var s = t(i[A]);
              0 === e[s].references && (e[s].updater(), e.splice(s, 1));
            }
            i = d;
          };
        };
      },
      569: (n) => {
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
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  e.styleTagTransform(r, n, e.options);
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
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      354: (n, e, t) => {
        n.exports = t.p + "5199059d34b6c086735c.woff";
      },
      327: (n, e, t) => {
        n.exports = t.p + "77388881975f61efb55b.woff2";
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var r = e.getElementsByTagName("script");
        if (r.length) for (var o = r.length - 1; o > -1 && !n; ) n = r[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        i = t(569),
        a = t.n(i),
        c = t(565),
        d = t.n(c),
        A = t(216),
        s = t.n(A),
        l = t(589),
        p = t.n(l),
        u = t(426),
        f = {};
      (f.styleTagTransform = p()),
        (f.setAttributes = d()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = s()),
        e()(u.Z, f),
        u.Z && u.Z.locals && u.Z.locals;
      const m = t.p + "479def494b41dd1af218.jpg";
      function C(n) {
        const e = document.createElement("li"),
          t = document.createElement("li"),
          r = document.createElement("li");
        e.setAttribute("id", "services"),
          t.setAttribute("id", "contactUs"),
          r.setAttribute("id", "gallery"),
          (e.innerHTML = "Nos Servicios"),
          (t.innerHTML = "Contactarnos"),
          (r.innerHTML = "Galería");
        const o = document.createElement("ul");
        o.appendChild(e), o.appendChild(t), o.appendChild(r);
        const i = document.createElement("div");
        i.setAttribute("id", "topBar"),
          i.appendChild(o),
          (n.innerHTML = ""),
          n.appendChild(i);
      }
      function b() {
        const n = document.querySelector("#content"),
          e = document.createElement("h1");
        e.innerHTML = "Punto de Calma";
        const t = new Image();
        t.classList.add("imageLarge"),
          (t.src = m),
          C(n),
          document.querySelector("#services").classList.add("activeMenu"),
          n.appendChild(e),
          n.appendChild(t);
      }
      const g = t.p + "207b226562514d82a271.png",
        B = t.p + "a993830408a8604bfac2.svg",
        h = t.p + "2799ad09328c0c64a61b.svg";
      function I() {
        const n = document.querySelector("#content"),
          e = new Image();
        (e.src = g), e.classList.add("imageLarge");
        const t = document.createElement("button");
        t.setAttribute("type", "button"),
          (t.innerHTML = "Nos WhatsApp"),
          t.setAttribute("id", "whatsappButton");
        const r = document.createElement("a");
        r.setAttribute("href", "https://wa.me/5215519360044"),
          r.setAttribute("rel", "noreferrer noopener"),
          r.setAttribute("target", "_blank"),
          r.appendChild(t);
        const o = document.createElement("button"),
          i = new Image();
        (i.src = B),
          o.setAttribute("type", "button"),
          o.appendChild(i),
          (o.innerHTML += " masajes.puntodecalma@gmail.com"),
          o.setAttribute("id", "emailButton");
        const a = document.createElement("a");
        a.setAttribute("href", "mailto:masajes.puntodecalma@gmail.com"),
          a.setAttribute("rel", "noreferrer noopener"),
          a.setAttribute("target", "_blank"),
          a.appendChild(o);
        const c = document.createElement("button"),
          d = new Image();
        (d.src = h),
          c.setAttribute("type", "button"),
          c.appendChild(d),
          (c.innerHTML += " Llamar Ahora"),
          c.setAttribute("id", "phoneButton");
        const A = document.createElement("a");
        A.setAttribute("href", "tel:+52-55-1936-0044"),
          A.setAttribute("rel", "noreferrer noopener"),
          A.setAttribute("target", "_blank"),
          A.appendChild(c);
        const s = document.createElement("div");
        s.setAttribute("id", "addressDiv"),
          (s.innerHTML =
            '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.415995426221!2d-99.16565900000002!3d19.407912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd99bdbd54b%3A0x120c7f5cac1a26a1!2sPunto%20de%20Calma!5e0!3m2!1sen!2smx!4v1696628761494!5m2!1sen!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
        const l = document.createElement("div");
        l.appendChild(r), l.appendChild(A), l.appendChild(a);
        const p = document.createElement("div");
        p.setAttribute("id", "contactGrid"),
          p.appendChild(l),
          p.appendChild(s),
          C(n),
          document.querySelector("#contactUs").classList.add("activeMenu"),
          n.appendChild(e),
          n.appendChild(p);
      }
      const v = t.p + "320aeaf6ca6c10dac1fb.jpg",
        y = t.p + "ba3e956f0b309dc47f64.jpg",
        x = t.p + "fdbe3e9376d9fc76d48c.jpg",
        w = t.p + "3631e5586c0bda7181b6.jpg",
        E = t.p + "a50d1bcd367c09e6dc86.jpg",
        j = t.p + "5bc3215b2e2221d88f61.jpg",
        T = t.p + "9035ad825d36fd0a599b.jpg",
        k = t.p + "7575fd887ebceec0d699.jpg",
        D = t.p + "0a412d528df64eb5ff9c.jpg",
        L = t.p + "9cbdca8bd29735f22835.jpg",
        M = t.p + "c0184744a7412ca53b63.jpg",
        S = t.p + "59c2a17501ce5202b9c4.jpg",
        F = t.p + "bee44d210f620d4046f0.jpg",
        G = t.p + "d92286f47729e6d55004.jpg",
        q = t.p + "d182a3ce3751866db6c7.jpg";
      function z() {
        const n = new Image();
        (n.src = g), n.classList.add("imageLarge");
        const e = document.createElement("div");
        e.setAttribute("id", "galleryGrid");
        const t = function (n) {
          const t = new Image();
          (t.src = n), e.appendChild(t);
        };
        t(v),
          t(y),
          t(x),
          t(w),
          t(E),
          t(j),
          t(T),
          t(k),
          t(D),
          t(L),
          t(M),
          t(S),
          t(F),
          t(G),
          t(q);
        const r = document.querySelector("#content");
        C(r),
          r.appendChild(n),
          document.querySelector("#gallery").classList.add("activeMenu"),
          r.appendChild(e);
      }
      const H = function () {
        const n = function (n, e) {
            n.addEventListener("click", () => {
              e(), H();
            });
          },
          e = document.querySelector("#services"),
          t = document.querySelector("#contactUs"),
          r = document.querySelector("#gallery");
        n(e, b),
          n(t, I),
          n(r, z),
          (function (n) {
            const e = document.createElement("footer");
            (e.innerHTML = "Copyright &copy 2023 Punto de Calma"),
              n.appendChild(e);
          })(document.querySelector("#content"));
      };
      window.addEventListener("DOMContentLoaded", () => {
        b(), H();
      });
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDVEEsRUFBUyxHQUNUQSxFQUFTLEdBQ1RBLEVBQVMsR0FDVEEsRUFBUyxHQUNUQSxFQUFTLEdBQ1RBLEVBQVMsR0FDVEEsRUFBUyxHQUNUQSxFQUFTLEdBQ1RBLEVBQVMsR0FDVEEsRUFBUyxHQUNUQSxFQUFTLEdBQ1RBLEVBQVMsR0FDVEEsRUFBUyxHQUVULE1BQU16QixFQUFrQmpFLFNBQVNDLGNBQWMsWUFDL0MsRUFBU2dFLEdBQ1RBLEVBQWdCeEQsWUFBWW9FLEdBQ043RSxTQUFTQyxjQUFjLFlBQy9CMEUsVUFBVUMsSUFBSSxjQUM1QlgsRUFBZ0J4RCxZQUFZZ0YsRUFDaEMsQ0NqREEsTUFBTUksRUFBZSxXQUNqQixNQUFNQyxFQUFpQixTQUFTQyxFQUFRQyxHQUNwQ0QsRUFBT0UsaUJBQWlCLFNBQVMsS0FDN0JELElBQ0FILEdBQWMsR0FFdEIsRUFDTUssRUFBb0JsRyxTQUFTQyxjQUFjLGFBQzNDa0csRUFBb0JuRyxTQUFTQyxjQUFjLGNBQzNDbUcsRUFBb0JwRyxTQUFTQyxjQUFjLFlBRWpENkYsRUFBZUksRUFBbUIsR0FDbENKLEVBQWVLLEVBQW1CLEdBQ2xDTCxFQUFlTSxFQUFtQixHQ25CdkIsU0FBU25DLEdBQ3hCLE1BQU1vQyxFQUFTckcsU0FBU1csY0FBYyxVQUV0QzBGLEVBQU9oQyxVQURRLHNDQUVmSixFQUFnQnhELFlBQVk0RixFQUM1QixDRGdCSSxDQUR3QnJHLFNBQVNDLGNBQWMsWUFFbkQsRUFFQUMsT0FBTytGLGlCQUFpQixvQkFBb0IsS0FDeEMsSUFDQUosR0FBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tZW51TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NlcnZpY2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29udGFjdExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9nYWxsZXJ5TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvZm9vdGVyTG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9kYW5jaW5nc2NyaXB0LXZhcmlhYmxlZm9udF93Z2h0LXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEhlYWRsaW5lRm9udDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cblxuKiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWN0aXZlTWVudSB7XG4gICAgY29sb3I6ICNDRDlFNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzdiYTQyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NEOUU1MDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0Q5RTUwO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGFjdEdyaWQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwdnc7XG59XG5cbiNjb250YWN0R3JpZCBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGEwOTYyYTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGNvbG9yOiNDRDlFNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3RHcmlkIGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWNiNDViO1xuICAgIGNvbG9yOiAjZWNiNDViO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2Q2YzkyYTtcbn1cblxuI2NvbnRhY3RHcmlkID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1dmhcbn1cblxuI2NvbnRhY3RHcmlkID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMztcbn1cblxuI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RjY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuZm9vdGVyIHtcbiAgICBjb2xvcjogI0NEOUU1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmVGb250JywgY3Vyc2l2ZSwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIHBhZGRpbmc6IDF2aCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2dhbGxlcnlHcmlkIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJ2bWluO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgzMDBweCwgMzIlLCAzMyUpKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1dmggYXV0byA1dmggYXV0bztcbiAgICB3aWR0aDogOTB2dztcbn1cblxuI2dhbGxlcnlHcmlkID4gKiB7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgMjh2dyk7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogIzg4YTA5NjtcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJ2bWluO1xuICAgIGFzcGVjdC1yYXRpbzogNCAvIDM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHZoIGF1dG87XG4gICAgd2lkdGg6IG1pbig2MDBweCwgOTB2dyk7XG59XG5cbi5pbWFnZUxhcmdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzdm1pbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgIG1hcmdpbjogNXZoIDA7XG59XG5cbmxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMDA7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDhweCA4cHggMTJweCA4cHg7XG59XG5cbmxpOm5vdCguYWN0aXZlTWVudSk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2M3YmEyNTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRDlFNTAzNTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwMzU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRDlFNTAzNTtcbn1cblxuI3RvcEJhciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGNvbG9yOiAjODhhMDk2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiB1bnNldDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4jdG9wQmFyID4gdWwge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMnZ3O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekI7K0RBQzBFO0FBQzlFOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLCtGQUErRjtJQUMvRixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLCtEQUErRDtJQUMvRCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwrRkFBK0Y7SUFDL0YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsYUFBYTtJQUNiLCtGQUErRjtJQUMvRix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IEhlYWRsaW5lRm9udDtcXG4gICAgc3JjOiB1cmwoJy4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgICAgIHVybCgnLi9kYW5jaW5nc2NyaXB0LXZhcmlhYmxlZm9udF93Z2h0LXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxufVxcblxcbioge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZU1lbnUge1xcbiAgICBjb2xvcjogI0NEOUU1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzdiYTQyO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NEOUU1MDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NEOUU1MDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRDlFNTA7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250YWN0R3JpZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4jY29udGFjdEdyaWQgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YTA5NjJhO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBjb2xvcjojQ0Q5RTUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250YWN0R3JpZCBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNlY2I0NWI7XFxuICAgIGNvbG9yOiAjZWNiNDViO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdkNmM5MmE7XFxufVxcblxcbiNjb250YWN0R3JpZCA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZ2FwOiA1dmhcXG59XFxuXFxuI2NvbnRhY3RHcmlkID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBmbGV4LWdyb3c6IDM7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGNjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGNvbG9yOiAjQ0Q5RTUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gICAgcGFkZGluZzogMXZoIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNnYWxsZXJ5R3JpZCB7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAydm1pbjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIGNsYW1wKDMwMHB4LCAzMiUsIDMzJSkpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDV2aCBhdXRvIDV2aCBhdXRvO1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuI2dhbGxlcnlHcmlkID4gKiB7XFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRDlFNTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IG1heCgzMDBweCwgMjh2dyk7XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6ICM4OGEwOTY7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmVGb250JywgY3Vyc2l2ZSwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbmh0bWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUxZGU7XFxufVxcblxcbmlmcmFtZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRDlFNTA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJ2bWluO1xcbiAgICBhc3BlY3QtcmF0aW86IDQgLyAzO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAxMHZoIGF1dG87XFxuICAgIHdpZHRoOiBtaW4oNjAwcHgsIDkwdncpO1xcbn1cXG5cXG4uaW1hZ2VMYXJnZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDN2bWluO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogOTV2dztcXG4gICAgbWFyZ2luOiA1dmggMDtcXG59XFxuXFxubGkge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMDA7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDhweDtcXG59XFxuXFxubGk6bm90KC5hY3RpdmVNZW51KTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2M3YmEyNTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRDlFNTAzNTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NEOUU1MDM1O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NEOUU1MDM1O1xcbn1cXG5cXG4jdG9wQmFyIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDRDlFNTA7XFxuICAgIGNvbG9yOiAjODhhMDk2O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogdW5zZXQ7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxufVxcblxcbiN0b3BCYXIgPiB1bCB7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZ2FwOiAydnc7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBzZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBzZXJ2aWNlcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlcnZpY2VzJyk7XG4gICAgY29udGFjdFVzLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdFVzJyk7XG4gICAgZ2FsbGVyeS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbGxlcnknKTtcbiAgICBzZXJ2aWNlcy5pbm5lckhUTUwgPSAnTm9zIFNlcnZpY2lvcyc7XG4gICAgY29udGFjdFVzLmlubmVySFRNTCA9ICdDb250YWN0YXJub3MnO1xuICAgIGdhbGxlcnkuaW5uZXJIVE1MID0gJ0dhbGVyw61hJztcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoc2VydmljZXMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3RVcyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoZ2FsbGVyeSk7XG4gICAgY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9wQmFyJyk7XG4gICAgdG9wQmFyLmFwcGVuZENoaWxkKHVsKTtcbiAgICBcbiAgICBwYXJlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvcEJhcik7XG59OyIsImltcG9ydCBwcmljZUxpc3QgZnJvbSAnLi9pbWFnZXMvc2VydmljZXMuanBnJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudUxvYWQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRpbmdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nTmFtZS5pbm5lckhUTUwgPSAnUHVudG8gZGUgQ2FsbWEnO1xuXG4gICAgY29uc3QgbXlQcmljZUxpc3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBteVByaWNlTGlzdC5jbGFzc0xpc3QuYWRkKCdpbWFnZUxhcmdlJyk7XG4gICAgbXlQcmljZUxpc3Quc3JjID0gcHJpY2VMaXN0O1xuXG4gICAgbG9hZE1lbnUocGFyZW50Q29udGFpbmVyKTtcbiAgICBjb25zdCBzZXJ2aWNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzJyk7XG4gICAgc2VydmljZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVNZW51Jyk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmdOYW1lKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobXlQcmljZUxpc3QpO1xufTsiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51TG9hZC5qcydcbmltcG9ydCBiYW5uZXJJbWcgZnJvbSAnLi9pbWFnZXMvYmFubmVyLnBuZyc7XG5pbXBvcnQgZW1haWxJY29uIGZyb20gJy4vaW1hZ2VzL2VtYWlsLnN2Zyc7XG5pbXBvcnQgcGhvbmVJY29uIGZyb20gJy4vaW1hZ2VzL3Bob25lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBiYW5uZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJhbm5lckltYWdlLnNyYyA9IGJhbm5lckltZztcbiAgICBiYW5uZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWFnZUxhcmdlJyk7XG5cbiAgICBjb25zdCB3aGF0c2FwcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHdoYXRzYXBwQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICB3aGF0c2FwcEJ1dHRvbi5pbm5lckhUTUwgPSAnTm9zIFdoYXRzQXBwJztcbiAgICB3aGF0c2FwcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3doYXRzYXBwQnV0dG9uJyk7XG4gICAgY29uc3Qgd2FMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHdhTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93YS5tZS81MjE1NTE5MzYwMDQ0Jyk7XG4gICAgd2FMaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vcmVmZXJyZXIgbm9vcGVuZXInKTtcbiAgICB3YUxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgd2FMaW5rLmFwcGVuZENoaWxkKHdoYXRzYXBwQnV0dG9uKTtcblxuICAgIGNvbnN0IGVtYWlsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZW1haWxJY28gPSBuZXcgSW1hZ2UoKTtcbiAgICBlbWFpbEljby5zcmMgPSBlbWFpbEljb247XG4gICAgZW1haWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGVtYWlsQnV0dG9uLmFwcGVuZENoaWxkKGVtYWlsSWNvKTtcbiAgICBlbWFpbEJ1dHRvbi5pbm5lckhUTUwgKz0gJyBtYXNhamVzLnB1bnRvZGVjYWxtYUBnbWFpbC5jb20nO1xuICAgIGVtYWlsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWxCdXR0b24nKTtcbiAgICBjb25zdCBlbWFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZW1haWxMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdtYWlsdG86bWFzYWplcy5wdW50b2RlY2FsbWFAZ21haWwuY29tJyk7XG4gICAgZW1haWxMaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vcmVmZXJyZXIgbm9vcGVuZXInKTtcbiAgICBlbWFpbExpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgZW1haWxMaW5rLmFwcGVuZENoaWxkKGVtYWlsQnV0dG9uKTtcblxuICAgIGNvbnN0IHBob25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcGhvbmVJY28gPSBuZXcgSW1hZ2UoKTtcbiAgICBwaG9uZUljby5zcmMgPSBwaG9uZUljb247XG4gICAgcGhvbmVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHBob25lQnV0dG9uLmFwcGVuZENoaWxkKHBob25lSWNvKTtcbiAgICBwaG9uZUJ1dHRvbi5pbm5lckhUTUwgKz0gJyBMbGFtYXIgQWhvcmEnO1xuICAgIHBob25lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmVCdXR0b24nKTtcbiAgICBjb25zdCBwaG9uZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcGhvbmVMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICd0ZWw6KzUyLTU1LTE5MzYtMDA0NCcpO1xuICAgIHBob25lTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub3JlZmVycmVyIG5vb3BlbmVyJyk7XG4gICAgcGhvbmVMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIHBob25lTGluay5hcHBlbmRDaGlsZChwaG9uZUJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJhZGRyZXNzRGl2XCIpO1xuICAgIGFkZHJlc3NEaXYuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQxNTA1Mi40MTU5OTU0MjYyMjEhMmQtOTkuMTY1NjU5MDAwMDAwMDIhM2QxOS40MDc5MTIhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODVkMWZmZDk5YmRiZDU0YiUzQTB4MTIwYzdmNWNhYzFhMjZhMSEyc1B1bnRvJTIwZGUlMjBDYWxtYSE1ZTAhM20yITFzZW4hMnNteCE0djE2OTY2Mjg3NjE0OTQhNW0yITFzZW4hMnNteFwiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPidcblxuXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQod2FMaW5rKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHBob25lTGluayk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlbWFpbExpbmspO1xuXG4gICAgY29uc3QgY29udGFjdEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RHcmlkJyk7XG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XG4gICAgY29udGFjdEdyaWQuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XG5cbiAgICBsb2FkTWVudShwYXJlbnRDb250YWluZXIpO1xuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdFVzJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVNZW51Jyk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lckltYWdlKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEdyaWQpO1xufTsiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51TG9hZC5qcyc7XG5pbXBvcnQgYmFubmVySW1nIGZyb20gJy4vaW1hZ2VzL2Jhbm5lci5wbmcnO1xuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxLmpwZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzIuanBnJztcbmltcG9ydCBpbWczIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMy5qcGcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM0LmpwZyc7XG5pbXBvcnQgaW1nNSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzUuanBnJztcbmltcG9ydCBpbWc2IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljNi5qcGcnO1xuaW1wb3J0IGltZzcgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM3LmpwZyc7XG5pbXBvcnQgaW1nOCBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzguanBnJztcbmltcG9ydCBpbWc5IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljOS5qcGcnO1xuaW1wb3J0IGltZzEwIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTAuanBnJztcbmltcG9ydCBpbWcxMSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzExLmpwZyc7XG5pbXBvcnQgaW1nMTIgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxMi5qcGcnO1xuaW1wb3J0IGltZzEzIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTMuanBnJztcbmltcG9ydCBpbWcxNCBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzE0LmpwZyc7XG5pbXBvcnQgaW1nMTUgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxNS5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgYmFubmVySW1hZ2Uuc3JjID0gYmFubmVySW1nO1xuICAgIGJhbm5lckltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlTGFyZ2UnKTtcblxuICAgIGNvbnN0IGdhbGxlcnlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FsbGVyeUdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdnYWxsZXJ5R3JpZCcpO1xuXG4gICAgY29uc3QgYWRkSW1hZ2UgPSBmdW5jdGlvbihpbWFnZVNvdXJjZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGhvdG8uc3JjID0gaW1hZ2VTb3VyY2VOYW1lO1xuICAgICAgICBnYWxsZXJ5R3JpZC5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgfTtcblxuICAgIGFkZEltYWdlKGltZzEpO1xuICAgIGFkZEltYWdlKGltZzIpO1xuICAgIGFkZEltYWdlKGltZzMpO1xuICAgIGFkZEltYWdlKGltZzQpO1xuICAgIGFkZEltYWdlKGltZzUpO1xuICAgIGFkZEltYWdlKGltZzYpO1xuICAgIGFkZEltYWdlKGltZzcpO1xuICAgIGFkZEltYWdlKGltZzgpO1xuICAgIGFkZEltYWdlKGltZzkpO1xuICAgIGFkZEltYWdlKGltZzEwKTtcbiAgICBhZGRJbWFnZShpbWcxMSk7XG4gICAgYWRkSW1hZ2UoaW1nMTIpO1xuICAgIGFkZEltYWdlKGltZzEzKTtcbiAgICBhZGRJbWFnZShpbWcxNCk7XG4gICAgYWRkSW1hZ2UoaW1nMTUpO1xuICAgIFxuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbG9hZE1lbnUocGFyZW50Q29udGFpbmVyKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xuICAgIGNvbnN0IGdhbGxlcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpO1xuICAgIGdhbGxlcnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlTWVudScpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5R3JpZCk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvYWRTZXJ2aWNlcyBmcm9tICcuL3NlcnZpY2VMb2FkLmpzJztcbmltcG9ydCBsb2FkQ29udGFjdEluZm8gZnJvbSAnLi9jb250YWN0TG9hZC5qcyc7XG5pbXBvcnQgbG9hZEdhbGxlcnkgZnJvbSAnLi9nYWxsZXJ5TG9hZC5qcyc7XG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tICcuL2Zvb3RlckxvYWQuanMnO1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25MaXN0ZW5lciA9IGZ1bmN0aW9uKGJ1dHRvbiwgYWN0aW9uKSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbigpO1xuICAgICAgICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgc2VydmljZUxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZXMnKTtcbiAgICBjb25zdCBjb250YWN0TG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0VXMnKTtcbiAgICBjb25zdCBnYWxsZXJ5TG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5Jyk7XG4gICAgXG4gICAgYnV0dG9uTGlzdGVuZXIoc2VydmljZUxvYWRCdXR0b24sIGxvYWRTZXJ2aWNlcyk7XG4gICAgYnV0dG9uTGlzdGVuZXIoY29udGFjdExvYWRCdXR0b24sIGxvYWRDb250YWN0SW5mbyk7XG4gICAgYnV0dG9uTGlzdGVuZXIoZ2FsbGVyeUxvYWRCdXR0b24sIGxvYWRHYWxsZXJ5KTtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGxvYWRGb290ZXIocGFyZW50Q29udGFpbmVyKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxvYWRTZXJ2aWNlcygpO1xuICAgIGFkZExpc3RlbmVycygpO1xufSk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmVudENvbnRhaW5lcikge1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5jb25zdCBzdHJpbmcgPSAnQ29weXJpZ2h0ICZjb3B5IDIwMjMgUHVudG8gZGUgQ2FsbWEnO1xuZm9vdGVyLmlubmVySFRNTCA9IHN0cmluZztcbnBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufTsiXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18iLCJVUkwiLCJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyIsIl9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiX2siLCJ1cmwiLCJvcHRpb25zIiwiU3RyaW5nIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic3R5bGVzSW5ET00iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleEJ5SWRlbnRpZmllciIsIm9iaiIsImNzcyIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkRWxlbWVudFN0eWxlIiwiYnlJbmRleCIsInNwbGljZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJpbmRleCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4IiwibWVtbyIsImluc2VydCIsInN0eWxlIiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwiZ2V0VGFyZ2V0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlcyIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlVGFnVHJhbnNmb3JtIiwiYXBwbHkiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImZpcnN0Q2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJtIiwibiIsImdldHRlciIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJnIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInNjcmlwdFVybCIsImltcG9ydFNjcmlwdHMiLCJsb2NhdGlvbiIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwIiwiYiIsImJhc2VVUkkiLCJzZWxmIiwiaHJlZiIsIm5jIiwibG9jYWxzIiwicGFyZW50Q29udGFpbmVyIiwic2VydmljZXMiLCJjb250YWN0VXMiLCJnYWxsZXJ5IiwiaW5uZXJIVE1MIiwidWwiLCJ0b3BCYXIiLCJoZWFkaW5nTmFtZSIsIm15UHJpY2VMaXN0IiwiSW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJiYW5uZXJJbWFnZSIsIndoYXRzYXBwQnV0dG9uIiwid2FMaW5rIiwiZW1haWxCdXR0b24iLCJlbWFpbEljbyIsImVtYWlsTGluayIsInBob25lQnV0dG9uIiwicGhvbmVJY28iLCJwaG9uZUxpbmsiLCJhZGRyZXNzRGl2IiwiY29udGFjdERpdiIsImNvbnRhY3RHcmlkIiwiZ2FsbGVyeUdyaWQiLCJhZGRJbWFnZSIsImltYWdlU291cmNlTmFtZSIsInBob3RvIiwiYWRkTGlzdGVuZXJzIiwiYnV0dG9uTGlzdGVuZXIiLCJidXR0b24iLCJhY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwic2VydmljZUxvYWRCdXR0b24iLCJjb250YWN0TG9hZEJ1dHRvbiIsImdhbGxlcnlMb2FkQnV0dG9uIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==
