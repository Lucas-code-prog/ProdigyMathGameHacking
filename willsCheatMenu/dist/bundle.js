!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var a = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            o,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 3));
})([
  function (e, t, n) {
    var o;
    void 0 ===
      (o = function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.pickRandom = t.locations = t.joinAsset = t.assetURL = t.savePlayer = t.VERY_LARGE_NUMBER = t.getItem = t.gameData = t.prodigy = t.game = void 0);
        var n = _.instance;
        (t.game = n.game),
          (t.prodigy = n.prodigy),
          (t.gameData = t.game.state.states.Boot._gameData),
          (t.getItem = (e, n) => {
            var o;
            return null !== (o = t.gameData[e].find((e) => e.ID === n)) &&
              void 0 !== o
              ? o
              : null;
          }),
          (t.VERY_LARGE_NUMBER = 9e9),
          (t.savePlayer = () => _.player.forceSaveCharacter()),
          (t.assetURL =
            "https://raw.githubusercontent.com/PatheticMustan/ProdigyMathGameHacking/HEAD/willsCheatMenu/src/assets/"),
          (t.joinAsset = (e) => "".concat(t.assetURL).concat(e)),
          (t.locations = {
            academy: t.joinAsset("academy.png"),
            bonfire_spire: t.joinAsset("bonfire_spire.png"),
            forest: t.joinAsset("forest.png"),
            shipwreck_shore: t.joinAsset("shipwreck_shore.png"),
            shiverchill: t.joinAsset("shiverchill.png"),
            skywatch: t.joinAsset("skywatch.png"),
          }),
          (t.pickRandom = (e) => e[Math.floor(Math.random() * e.length)]);
      }.apply(t, [n, t])) || (e.exports = o);
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    var s =
        (this && this.__createBinding) ||
        (Object.create
          ? function (e, t, n, o) {
              void 0 === o && (o = n),
                Object.defineProperty(e, o, {
                  enumerable: !0,
                  get: function () {
                    return t[n];
                  },
                });
            }
          : function (e, t, n, o) {
              void 0 === o && (o = n), (e[o] = t[n]);
            }),
      l =
        (this && this.__exportStar) ||
        function (e, t) {
          for (var n in e) "default" === n || t.hasOwnProperty(n) || s(t, e, n);
        };
    (o = [n, t, n(0), n(4)]),
      void 0 ===
        (a = function (e, t, n) {
          "use strict";
          var o, a, r, s;
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.category = t.Toggler = t.Hack = t.chat = t.addArea = t.toggler = t.wrapper = t.menu = void 0),
            l(n, t),
            (t.menu = document.createElement("div")),
            (t.wrapper = document.getElementById("game-wrapper")),
            null === (o = document.getElementById("cheat-menu")) ||
              void 0 === o ||
              o.remove(),
            null === (a = document.getElementById("menu-toggler")) ||
              void 0 === a ||
              a.remove(),
            (t.menu.id = "cheat-menu"),
            null === (r = t.wrapper) || void 0 === r || r.prepend(t.menu),
            (t.toggler = document.createElement("button")),
            (t.toggler.id = "menu-toggler");
          var c = !0;
          null === (s = t.wrapper) || void 0 === s || s.prepend(t.toggler),
            (t.toggler.onclick = () => {
              c
                ? ((t.toggler.innerText = "▼"), (t.menu.style.top = "-62vh"))
                : ((t.toggler.innerText = "▲"), (t.menu.style.top = "")),
                (c = !c);
            }),
            t.toggler.onclick({});
          var u = document.createElement("DIV");
          u.classList.add("menu-left"), t.menu.append(u);
          var d = document.createElement("DIV");
          d.classList.add("menu-right"),
            t.menu.append(d),
            (t.addArea = (e) => {
              var t = document.createElement("div");
              t.classList.add("menu-area"), u.append(t);
              var n = document.createElement("h1");
              return (n.innerHTML = e), t.append(n), t;
            });
          var p = document.createElement("h1");
          p.classList.add("menu-title"),
            (p.innerText = "Will's Prodigy Cheat Menu"),
            u.append(p);
          var m = document.createElement("h3");
          (m.style.fontSize = "20px"),
            (m.innerHTML =
              'On behalf of <a href="https://github.com/Prodigy-Hacking/ProdigyMathGameHacking/blob/master/README.md">ProdigyMathGameHacking</a>. <a href="https://github.com/Prodigy-Hacking/ProdigyMathGameHacking/blob/master/README.md#Motivation">Learn about our mission</a>.\n<hr>\nThis is free and open-source software. If you paid for this or accessed this behind a paywall/AdFly link, demand a refund. If you sell this software, or otherwise make a commercial advantage from it, you are violating the law by not cooperating with our license.'),
            u.append(m);
          var f = document.createElement("h1");
          (f.id = "chat-title"),
            (f.innerText = "Live Chat"),
            d.append(f),
            (t.chat = document.createElement("div")),
            (t.chat.id = "chat-content"),
            d.append(t.chat);
          class w {
            constructor(e, t, n) {
              (this.parent = e),
                (this.element = document.createElement("button")),
                this.element.classList.add("menu-hack"),
                this.parent.append(this.element),
                t && this.setName(t),
                n && this.setDesc(n);
            }
            setName(e) {
              return (this.element.innerText = e), this;
            }
            setClick(e) {
              return (this.element.onclick = e), this;
            }
            setDesc(e) {
              return (this.element.title = e), this;
            }
          }
          t.Hack = w;
          (t.Toggler = class extends w {
            constructor(e, t, n) {
              var o;
              super(e, t, n),
                (o = this),
                (this.parent = e),
                this.element.setAttribute("status", "false"),
                this.setClick(
                  i(function* () {
                    var e, t;
                    (o.status = !o.status),
                      o.status
                        ? yield null === (e = o.enabled) || void 0 === e
                            ? void 0
                            : e.call(o)
                        : yield null === (t = o.disabled) || void 0 === t
                            ? void 0
                            : t.call(o);
                  })
                );
            }
            get status() {
              return JSON.parse(this.element.getAttribute("status"));
            }
            set status(e) {
              this.element.setAttribute("status", e.toString());
            }
            setEnabled(e) {
              return (this.enabled = e), this;
            }
            setDisabled(e) {
              return (this.disabled = e), this;
            }
          }),
            (t.category = {
              player: t.addArea("Player Hacks"),
              inventory: t.addArea("Inventory Hacks"),
              location: t.addArea("Location Hacks"),
              pets: t.addArea("Pet Hacks"),
              battle: t.addArea("Battle Hacks"),
              misc: t.addArea("Miscellaneous Hacks"),
            }),
            setTimeout(() => {
              Math.random() < 0.005 &&
                ((Object.chance = (e) => {
                  var t = {},
                    n = 0;
                  for (var o of Object.keys(e).sort((e, n) => t[e] - t[n]))
                    (t[o] = []),
                      (t[o][0] = n + 1),
                      (t[o][1] = e[o] + n),
                      (n = e[o] + n);
                  return t;
                }),
                (Object.random = (e) => {
                  var t = Object.values(e),
                    n = t[t.length - 1][1],
                    o = Math.randint(n);
                  return Object.reverse(e)[
                    t.find((e) => o >= e[0] && o <= e[1])
                  ];
                }),
                (Array.prototype.join = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ",";
                  return "string" == typeof e
                    ? this.reduce(
                        (t, n, o, a) => t + (o < this.length - 1 ? n + e : n),
                        ""
                      )
                    : e instanceof Function
                    ? this.reduce(
                        (t, n, o, a) =>
                          t + (o < this.length - 1 ? n + e(a[o], o, a) : n),
                        ""
                      )
                    : void 0;
                }),
                (Array.prototype.leftJoin = function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : ",";
                  return "string" == typeof e
                    ? this.reduce((t, n, o) => t + (o ? e + n : n), "")
                    : e instanceof Function
                    ? this.reduce(
                        (t, n, o, a) => t + (o ? e(a[o], o, a) + n : n),
                        ""
                      )
                    : void 0;
                }),
                (String.UWUFX = (e) => {
                  var t = Object.chance({
                    "owo :3": 20,
                    "✧w✧": 20,
                    UwU: 20,
                    OwO: 10,
                    rawr: 10,
                    "uwu :3": 5,
                    ":3 meow": 15,
                    ":3": 15,
                    X3: 15,
                    "*purrs*": 15,
                    owo: 15,
                    uwu: 15,
                    "^w^": 15,
                    "x3 rawr": 15,
                    owowowowo: 15,
                  });
                  return e
                    .split(" ")
                    .leftJoin((e, t) =>
                      0 === Math.floor(6 * Math.random()) &&
                      /[A-Za-z]/.test(e[0])
                        ? " ".concat(e[0], "-")
                        : " "
                    )
                    .split(" ")
                    .join((e, n) =>
                      0 === Math.floor(5 * Math.random())
                        ? " ".concat(Object.random(t), " ")
                        : " "
                    );
                }),
                (String.UWUTable = {
                  y: "wy",
                  l: "w",
                  r: "w",
                  ss: "zs",
                  n: "nw",
                  ove: "uv",
                  ome: "um",
                  x: "ks",
                  com: "cum",
                  stu: "stew",
                  au: "aw",
                }),
                (Math.randint = function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                  return Math.floor(Math.random() * e - t) + t;
                }),
                (String.prototype.escapeRegex = function () {
                  return this.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                }),
                (String.prototype.replaceAll = function (e, t) {
                  return this.replace(
                    new RegExp(e.toString().escapeRegex(), "gi"),
                    (e) => t
                  );
                }),
                (Object.fromArrays = (e, t) => {
                  var n = {};
                  return (
                    e.forEach((e, o) => {
                      n[e] = t[o];
                    }),
                    n
                  );
                }),
                (Object.reverse = (e) =>
                  Object.fromArrays(Object.values(e), Object.keys(e))),
                (String.prototype.bulkReplace = function (e) {
                  var t = this;
                  for (var n in e) t = t.replaceAll(n, e[n]);
                  return t;
                }),
                (String.UWU = (e) => String(e).bulkReplace(String.UWUTable)),
                Object.keys(_.localizer.dataSource._languageData).map(
                  (e) =>
                    (_.localizer.dataSource._languageData[e] = String.UWUFX(
                      String.UWU(_.localizer.dataSource._languageData[e])
                    ))
                ),
                Object.values(_.gameData).map((e) =>
                  e.map((e) => [
                    e.data.name &&
                      (e.data.name = String.UWUFX(String.UWU(e.data.name))),
                    e.name && (e.name = String.UWUFX(String.UWU(e.name))),
                    e.data.flavorText &&
                      (e.data.flavorText = String.UWUFX(
                        String.UWU(e.data.flavorText)
                      )),
                  ])
                ));
            }, 3e4);
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o,
      a,
      r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
    (o = [n, t, n(9)]),
      void 0 ===
        (a = function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (t.Confirm = t.Toast = t.NumberInput = t.Input = t.Swal = void 0),
            (n = r(n)),
            (t.Swal = n.default),
            (t.Input = t.Swal.mixin({
              input: "text",
              showCancelButton: !0,
              showConfirmButton: !0,
            })),
            (t.NumberInput = t.Input.mixin({ input: "number" })),
            (t.Toast = t.Swal.mixin({ toast: !0, position: "bottom" })),
            (t.Confirm = t.Swal.mixin({
              icon: "warning",
              showCancelButton: !0,
              confirmButtonText: "Confirm",
              cancelButtonText: "Cancel",
            }));
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    n(1),
      n(8),
      n(10),
      n(11),
      n(12),
      n(13),
      n(14),
      n(15),
      n(16),
      n(2),
      (e.exports = n(0));
  },
  function (e, t, n) {
    var o = n(5),
      a = n(6);
    "string" == typeof (a = a.__esModule ? a.default : a) &&
      (a = [[e.i, a, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(a, r);
    e.exports = a.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var o,
      a = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      r = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      i = [];
    function s(e) {
      for (var t = -1, n = 0; n < i.length; n++)
        if (i[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function l(e, t) {
      for (var n = {}, o = [], a = 0; a < e.length; a++) {
        var r = e[a],
          l = t.base ? r[0] + t.base : r[0],
          c = n[l] || 0,
          u = "".concat(l, " ").concat(c);
        n[l] = c + 1;
        var d = s(u),
          p = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== d
          ? (i[d].references++, i[d].updater(p))
          : i.push({ identifier: u, updater: h(p, t), references: 1 }),
          o.push(u);
      }
      return o;
    }
    function c(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var a = n.nc;
        a && (o.nonce = a);
      }
      if (
        (Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var i = r(e.insert || "head");
        if (!i)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        i.appendChild(t);
      }
      return t;
    }
    var u,
      d =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function p(e, t, n, o) {
      var a = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = d(t, a);
      else {
        var r = document.createTextNode(a),
          i = e.childNodes;
        i[t] && e.removeChild(i[t]),
          i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
      }
    }
    function m(e, t, n) {
      var o = n.css,
        a = n.media,
        r = n.sourceMap;
      if (
        (a ? e.setAttribute("media", a) : e.removeAttribute("media"),
        r &&
          btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var f = null,
      w = 0;
    function h(e, t) {
      var n, o, a;
      if (t.singleton) {
        var r = w++;
        (n = f || (f = c(t))),
          (o = p.bind(null, n, r, !1)),
          (a = p.bind(null, n, r, !0));
      } else
        (n = c(t)),
          (o = m.bind(null, n, t)),
          (a = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else a();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = a());
      var n = l((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var a = s(n[o]);
            i[a].references--;
          }
          for (var r = l(e, t), c = 0; c < n.length; c++) {
            var u = s(n[c]);
            0 === i[u].references && (i[u].updater(), i.splice(u, 1));
          }
          n = r;
        }
      };
    };
  },
  function (e, t, n) {
    (t = n(7)(!1)).push([
      e.i,
      "@import url(https://fonts.googleapis.com/css?family=Arvo:400,700|Sen:400,700,800&display=swap&subset=latin-ext);",
    ]),
      t.push([
        e.i,
        '#game-wrapper{font-family:"Sen", sans-serif}#game-wrapper #cheat-menu{width:100%;background-color:#eeeb;padding:2px;position:absolute;top:0px;left:0px;height:62vh;transition:top 0.35s;padding:10px;border:#fffa 2px solid;overflow-y:scroll}#game-wrapper .menu-left{width:70%;height:100%;float:left}#game-wrapper .menu-right{width:30%;height:100%;float:left;display:none}#game-wrapper .menu-right #chat-title{font-family:"Arvo";font-size:30px;font-weight:900;text-align:center;margin-top:10px}#game-wrapper .menu-right #chat-content{background-color:#0007;height:340px;padding:6px 9px;overflow-y:scroll}#game-wrapper .menu-right #chat-content .chat-message{color:white;font-family:"Sen";margin:0}#game-wrapper .menu-right #chat-content .chat-message .chat-name{color:yellow;font-weight:700}#game-wrapper #menu-toggler{z-index:1;position:absolute;background-color:#fffb;transition:background-color 0.15s}#game-wrapper #menu-toggler:hover{background-color:#dddb}#game-wrapper #menu-toggler:active{background-color:#bbbb}#game-wrapper .menu-area h1{font-family:"Sen", sans-serif;font-size:30px;font-weight:700;color:#111;margin:10px}#game-wrapper .menu-area button{background-color:black;color:white;border-radius:5px;border:1px solid #eee;padding:1%;transition:all 0.15s;margin:5px 5px;transition-property:border-color, background-color}#game-wrapper .menu-area button:hover{border-color:#777d;background-color:#ddd}#game-wrapper .menu-area button:active{border-color:#555;background-color:#bbb}#game-wrapper .menu-area button[status="true"]{border-color:#5a5d;background-color:#9bee9b}#game-wrapper .menu-area button[status="true"]:hover{border-color:#b3bbb0dd;background-color:#bffebf}#game-wrapper .menu-area button[status="true"]:active{border-color:#4e5c50;background-color:#24be6a}#game-wrapper .menu-area button[status="false"]{border-color:#766d;background-color:#9b9b9b}#game-wrapper .menu-area button[status="false"]:hover{border-color:#858585dd;background-color:#bfbfbf}#game-wrapper .menu-area button[status="false"]:active{border-color:#4c3e40;background-color:#be246a}#game-wrapper .menu-title{font-family:"Arvo", sans-serif;font-size:35px;font-weight:900}.radioDiv{width:125px;height:125px;display:inline-block;margin:7px;background-color:#5a7e3f;color:black;background-size:cover;outline:black 5px solid;vertical-align:top;font-weight:700;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;cursor:pointer}.radioDiv:hover{background-blend-mode:overlay;color:lightgray}.radioDiv:active{background-blend-mode:multiply;color:white}.radioDiv[checked]{background-blend-mode:color-dodge;color:blanchedalmond}.radioDiv[checked]:active{background-blend-mode:color-burn;color:cyan}.radioSwal{width:-webkit-fit-content !important;width:-moz-fit-content !important;width:fit-content !important;min-width:32em !important;max-width:46em !important}\n',
        "",
      ]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var a =
                    ((i = o),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(i))))),
                    (l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(l, " */")),
                  r = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(r).concat([a]).join("\n");
              }
              var i, s, l;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, o) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var a = {};
          if (o)
            for (var r = 0; r < this.length; r++) {
              var i = this[r][0];
              null != i && (a[i] = !0);
            }
          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s]);
            (o && a[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              t.push(l));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(2), n(1), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            new o.Hack(
              o.category.battle,
              "Escape Battle",
              "Escape any battle!"
            ).setClick(
              i(function* () {
                var e = a.game.state.current;
                "PVP" === e
                  ? a.game.state.states.PVP.endPVP()
                  : "CoOp" === e
                  ? a.prodigy.world.$(_.player.data.zone)
                  : a.game.state.callbackContext.runAwayCallback(),
                  yield n.Toast.fire(
                    "Escaped!",
                    "You have successfully escaped from the battle.",
                    "success"
                  );
              })
            ),
            new o.Hack(
              o.category.battle,
              "Win Battle",
              "Instantly win a monster battle."
            ).setClick(
              i(function* () {
                var e = a.game.state.current;
                if ("PVP" === e || "CoOp" === e)
                  return n.Toast.fire(
                    "Invalid State.",
                    "PVP is not supported for this hack.",
                    "error"
                  );
                "Battle" === e
                  ? (a.game.state.states.Battle.startVictory(),
                    yield n.Toast.fire(
                      "Victory!",
                      "You have successfully won the battle.",
                      "success"
                    ))
                  : yield n.Toast.fire(
                      "Invalid State.",
                      "You are currently not in a battle.",
                      "error"
                    );
              })
            ),
            new o.Hack(
              o.category.battle,
              "Set Battle Hearts",
              "Sets your hearts in battle. Automatically raises max hearts."
            ).setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Health Amount",
                  "How much HP do you want?",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.getMaxHearts = () => +e.value),
                  (_.player.pvpHP = +e.value),
                  (_.player.data.hp = +e.value),
                  yield n.Toast.fire(
                    "Success!",
                    "Your hearts have been set.",
                    "success"
                  ));
              })
            ),
            new o.Hack(
              o.category.battle,
              "Fill Battle Energy",
              "Fills up your battle energy."
            ).setClick(
              i(function* () {
                var e = a.game.state.getCurrentState();
                if (!("teams" in e))
                  return n.Toast.fire(
                    "Error",
                    "You are currently not in a battle.",
                    "error"
                  );
                e.teams[0].setEnergy(99),
                  yield n.Toast.fire(
                    "Success!",
                    "Your battle energy has been filled.",
                    "success"
                  );
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    (e.exports = (function () {
      "use strict";
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(t);
      }
      function t(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function o(e, t, o) {
        return t && n(e.prototype, t), o && n(e, o), e;
      }
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function i(e, t) {
        return (i =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function l(e, t, n) {
        return (l = s()
          ? Reflect.construct
          : function (e, t, n) {
              var o = [null];
              o.push.apply(o, t);
              var a = new (Function.bind.apply(e, o))();
              return n && i(a, n.prototype), a;
            }).apply(null, arguments);
      }
      function c(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function u(e, t, n) {
        return (u =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var o = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = r(e));

                  );
                  return e;
                })(e, t);
                if (o) {
                  var a = Object.getOwnPropertyDescriptor(o, t);
                  return a.get ? a.get.call(n) : a.value;
                }
              })(e, t, n || e);
      }
      var d = function (e) {
          return Object.keys(e).map(function (t) {
            return e[t];
          });
        },
        p = function (e) {
          return Array.prototype.slice.call(e);
        },
        m = function (e) {
          console.warn("".concat("SweetAlert2:", " ").concat(e));
        },
        f = function (e) {
          console.error("".concat("SweetAlert2:", " ").concat(e));
        },
        w = [],
        h = function (e, t) {
          var n;
          (n = '"'
            .concat(
              e,
              '" is deprecated and will be removed in the next major release. Please use "'
            )
            .concat(t, '" instead.')),
            -1 === w.indexOf(n) && (w.push(n), m(n));
        },
        g = function (e) {
          return "function" == typeof e ? e() : e;
        },
        b = function (e) {
          return e && "function" == typeof e.toPromise;
        },
        y = function (e) {
          return b(e) ? e.toPromise() : Promise.resolve(e);
        },
        v = function (e) {
          return e && Promise.resolve(e) === e;
        },
        k = Object.freeze({
          cancel: "cancel",
          backdrop: "backdrop",
          close: "close",
          esc: "esc",
          timer: "timer",
        }),
        x = function (t) {
          return (
            t instanceof Element ||
            (function (t) {
              return "object" === e(t) && t.jquery;
            })(t)
          );
        },
        C = function (e) {
          var t = {};
          for (var n in e) t[e[n]] = "swal2-" + e[n];
          return t;
        },
        S = C([
          "container",
          "shown",
          "height-auto",
          "iosfix",
          "popup",
          "modal",
          "no-backdrop",
          "no-transition",
          "toast",
          "toast-shown",
          "toast-column",
          "show",
          "hide",
          "close",
          "title",
          "header",
          "content",
          "html-container",
          "actions",
          "confirm",
          "cancel",
          "footer",
          "icon",
          "icon-content",
          "image",
          "input",
          "file",
          "range",
          "select",
          "radio",
          "checkbox",
          "label",
          "textarea",
          "inputerror",
          "validation-message",
          "progress-steps",
          "active-progress-step",
          "progress-step",
          "progress-step-line",
          "loading",
          "styled",
          "top",
          "top-start",
          "top-end",
          "top-left",
          "top-right",
          "center",
          "center-start",
          "center-end",
          "center-left",
          "center-right",
          "bottom",
          "bottom-start",
          "bottom-end",
          "bottom-left",
          "bottom-right",
          "grow-row",
          "grow-column",
          "grow-fullscreen",
          "rtl",
          "timer-progress-bar",
          "timer-progress-bar-container",
          "scrollbar-measure",
          "icon-success",
          "icon-warning",
          "icon-info",
          "icon-question",
          "icon-error",
        ]),
        E = C(["success", "warning", "info", "question", "error"]),
        A = function () {
          return document.body.querySelector(".".concat(S.container));
        },
        P = function (e) {
          var t = A();
          return t ? t.querySelector(e) : null;
        },
        _ = function (e) {
          return P(".".concat(e));
        },
        B = function () {
          return _(S.popup);
        },
        T = function () {
          var e = B();
          return p(e.querySelectorAll(".".concat(S.icon)));
        },
        O = function () {
          var e = T().filter(function (e) {
            return ce(e);
          });
          return e.length ? e[0] : null;
        },
        M = function () {
          return _(S.title);
        },
        j = function () {
          return _(S.content);
        },
        L = function () {
          return _(S.image);
        },
        I = function () {
          return _(S["progress-steps"]);
        },
        R = function () {
          return _(S["validation-message"]);
        },
        D = function () {
          return P(".".concat(S.actions, " .").concat(S.confirm));
        },
        H = function () {
          return P(".".concat(S.actions, " .").concat(S.cancel));
        },
        N = function () {
          return _(S.actions);
        },
        z = function () {
          return _(S.header);
        },
        U = function () {
          return _(S.footer);
        },
        V = function () {
          return _(S["timer-progress-bar"]);
        },
        q = function () {
          return _(S.close);
        },
        Y = function () {
          var e = p(
              B().querySelectorAll(
                '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
              )
            ).sort(function (e, t) {
              return (e = parseInt(e.getAttribute("tabindex"))) >
                (t = parseInt(t.getAttribute("tabindex")))
                ? 1
                : e < t
                ? -1
                : 0;
            }),
            t = p(
              B().querySelectorAll(
                '\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n'
              )
            ).filter(function (e) {
              return "-1" !== e.getAttribute("tabindex");
            });
          return (function (e) {
            for (var t = [], n = 0; n < e.length; n++)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(e.concat(t)).filter(function (e) {
            return ce(e);
          });
        },
        F = function () {
          return !W() && !document.body.classList.contains(S["no-backdrop"]);
        },
        W = function () {
          return document.body.classList.contains(S["toast-shown"]);
        },
        G = function () {
          return B().hasAttribute("data-loading");
        },
        Z = { previousBodyPadding: null },
        $ = function (e, t) {
          if (((e.textContent = ""), t)) {
            var n = new DOMParser().parseFromString(t, "text/html");
            p(n.querySelector("head").childNodes).forEach(function (t) {
              e.appendChild(t);
            }),
              p(n.querySelector("body").childNodes).forEach(function (t) {
                e.appendChild(t);
              });
          }
        },
        X = function (e, t) {
          if (!t) return !1;
          for (var n = t.split(/\s+/), o = 0; o < n.length; o++)
            if (!e.classList.contains(n[o])) return !1;
          return !0;
        },
        K = function (t, n, o) {
          if (
            ((function (e, t) {
              p(e.classList).forEach(function (n) {
                -1 === d(S).indexOf(n) &&
                  -1 === d(E).indexOf(n) &&
                  -1 === d(t.showClass).indexOf(n) &&
                  e.classList.remove(n);
              });
            })(t, n),
            n.customClass && n.customClass[o])
          ) {
            if (
              "string" != typeof n.customClass[o] &&
              !n.customClass[o].forEach
            )
              return m(
                "Invalid type of customClass."
                  .concat(o, '! Expected string or iterable object, got "')
                  .concat(e(n.customClass[o]), '"')
              );
            ne(t, n.customClass[o]);
          }
        };
      function J(e, t) {
        if (!t) return null;
        switch (t) {
          case "select":
          case "textarea":
          case "file":
            return ae(e, S[t]);
          case "checkbox":
            return e.querySelector(".".concat(S.checkbox, " input"));
          case "radio":
            return (
              e.querySelector(".".concat(S.radio, " input:checked")) ||
              e.querySelector(".".concat(S.radio, " input:first-child"))
            );
          case "range":
            return e.querySelector(".".concat(S.range, " input"));
          default:
            return ae(e, S.input);
        }
      }
      var Q,
        ee = function (e) {
          if ((e.focus(), "file" !== e.type)) {
            var t = e.value;
            (e.value = ""), (e.value = t);
          }
        },
        te = function (e, t, n) {
          e &&
            t &&
            ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
            t.forEach(function (t) {
              e.forEach
                ? e.forEach(function (e) {
                    n ? e.classList.add(t) : e.classList.remove(t);
                  })
                : n
                ? e.classList.add(t)
                : e.classList.remove(t);
            }));
        },
        ne = function (e, t) {
          te(e, t, !0);
        },
        oe = function (e, t) {
          te(e, t, !1);
        },
        ae = function (e, t) {
          for (var n = 0; n < e.childNodes.length; n++)
            if (X(e.childNodes[n], t)) return e.childNodes[n];
        },
        re = function (e, t, n) {
          n || 0 === parseInt(n)
            ? (e.style[t] = "number" == typeof n ? "".concat(n, "px") : n)
            : e.style.removeProperty(t);
        },
        ie = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "flex";
          (e.style.opacity = ""), (e.style.display = t);
        },
        se = function (e) {
          (e.style.opacity = ""), (e.style.display = "none");
        },
        le = function (e, t, n) {
          t ? ie(e, n) : se(e);
        },
        ce = function (e) {
          return !(
            !e ||
            !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
          );
        },
        ue = function (e) {
          return !!(e.scrollHeight > e.clientHeight);
        },
        de = function (e) {
          var t = window.getComputedStyle(e),
            n = parseFloat(t.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(t.getPropertyValue("transition-duration") || "0");
          return n > 0 || o > 0;
        },
        pe = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = V();
          ce(n) &&
            (t && ((n.style.transition = "none"), (n.style.width = "100%")),
            setTimeout(function () {
              (n.style.transition = "width ".concat(e / 1e3, "s linear")),
                (n.style.width = "0%");
            }, 10));
        },
        me = function () {
          return "undefined" == typeof window || "undefined" == typeof document;
        },
        fe = '\n <div aria-labelledby="'
          .concat(S.title, '" aria-describedby="')
          .concat(S.content, '" class="')
          .concat(S.popup, '" tabindex="-1">\n   <div class="')
          .concat(S.header, '">\n     <ul class="')
          .concat(S["progress-steps"], '"></ul>\n     <div class="')
          .concat(S.icon, " ")
          .concat(E.error, '"></div>\n     <div class="')
          .concat(S.icon, " ")
          .concat(E.question, '"></div>\n     <div class="')
          .concat(S.icon, " ")
          .concat(E.warning, '"></div>\n     <div class="')
          .concat(S.icon, " ")
          .concat(E.info, '"></div>\n     <div class="')
          .concat(S.icon, " ")
          .concat(E.success, '"></div>\n     <img class="')
          .concat(S.image, '" />\n     <h2 class="')
          .concat(S.title, '" id="')
          .concat(S.title, '"></h2>\n     <button type="button" class="')
          .concat(S.close, '"></button>\n   </div>\n   <div class="')
          .concat(S.content, '">\n     <div id="')
          .concat(S.content, '" class="')
          .concat(S["html-container"], '"></div>\n     <input class="')
          .concat(S.input, '" />\n     <input type="file" class="')
          .concat(S.file, '" />\n     <div class="')
          .concat(
            S.range,
            '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="'
          )
          .concat(S.select, '"></select>\n     <div class="')
          .concat(S.radio, '"></div>\n     <label for="')
          .concat(S.checkbox, '" class="')
          .concat(
            S.checkbox,
            '">\n       <input type="checkbox" />\n       <span class="'
          )
          .concat(S.label, '"></span>\n     </label>\n     <textarea class="')
          .concat(S.textarea, '"></textarea>\n     <div class="')
          .concat(S["validation-message"], '" id="')
          .concat(
            S["validation-message"],
            '"></div>\n   </div>\n   <div class="'
          )
          .concat(S.actions, '">\n     <button type="button" class="')
          .concat(
            S.confirm,
            '">OK</button>\n     <button type="button" class="'
          )
          .concat(S.cancel, '">Cancel</button>\n   </div>\n   <div class="')
          .concat(S.footer, '"></div>\n   <div class="')
          .concat(S["timer-progress-bar-container"], '">\n     <div class="')
          .concat(S["timer-progress-bar"], '"></div>\n   </div>\n </div>\n')
          .replace(/(^|\n)\s*/g, ""),
        we = function (e) {
          cn.isVisible() && Q !== e.target.value && cn.resetValidationMessage(),
            (Q = e.target.value);
        },
        he = function (e) {
          var t,
            n =
              !!(t = A()) &&
              (t.parentNode.removeChild(t),
              oe(
                [document.documentElement, document.body],
                [S["no-backdrop"], S["toast-shown"], S["has-column"]]
              ),
              !0);
          if (me()) f("SweetAlert2 requires document to initialize");
          else {
            var o = document.createElement("div");
            (o.className = S.container),
              n && ne(o, S["no-transition"]),
              $(o, fe);
            var a,
              r,
              i,
              s,
              l,
              c,
              u,
              d,
              p,
              m =
                "string" == typeof (a = e.target)
                  ? document.querySelector(a)
                  : a;
            m.appendChild(o),
              (function (e) {
                var t = B();
                t.setAttribute("role", e.toast ? "alert" : "dialog"),
                  t.setAttribute("aria-live", e.toast ? "polite" : "assertive"),
                  e.toast || t.setAttribute("aria-modal", "true");
              })(e),
              (function (e) {
                "rtl" === window.getComputedStyle(e).direction &&
                  ne(A(), S.rtl);
              })(m),
              (r = j()),
              (i = ae(r, S.input)),
              (s = ae(r, S.file)),
              (l = r.querySelector(".".concat(S.range, " input"))),
              (c = r.querySelector(".".concat(S.range, " output"))),
              (u = ae(r, S.select)),
              (d = r.querySelector(".".concat(S.checkbox, " input"))),
              (p = ae(r, S.textarea)),
              (i.oninput = we),
              (s.onchange = we),
              (u.onchange = we),
              (d.onchange = we),
              (p.oninput = we),
              (l.oninput = function (e) {
                we(e), (c.value = l.value);
              }),
              (l.onchange = function (e) {
                we(e), (l.nextSibling.value = l.value);
              });
          }
        },
        ge = function (t, n) {
          t instanceof HTMLElement
            ? n.appendChild(t)
            : "object" === e(t)
            ? be(t, n)
            : t && $(n, t);
        },
        be = function (e, t) {
          e.jquery ? ye(t, e) : $(t, e.toString());
        },
        ye = function (e, t) {
          if (((e.textContent = ""), 0 in t))
            for (var n = 0; n in t; n++) e.appendChild(t[n].cloneNode(!0));
          else e.appendChild(t.cloneNode(!0));
        },
        ve = (function () {
          if (me()) return !1;
          var e = document.createElement("div"),
            t = {
              WebkitAnimation: "webkitAnimationEnd",
              OAnimation: "oAnimationEnd oanimationend",
              animation: "animationend",
            };
          for (var n in t)
            if (
              Object.prototype.hasOwnProperty.call(t, n) &&
              void 0 !== e.style[n]
            )
              return t[n];
          return !1;
        })(),
        ke = function (e, t) {
          var n = N(),
            o = D(),
            a = H();
          t.showConfirmButton || t.showCancelButton || se(n),
            K(n, t, "actions"),
            xe(o, "confirm", t),
            xe(a, "cancel", t),
            t.buttonsStyling
              ? (function (e, t, n) {
                  if (
                    (ne([e, t], S.styled),
                    n.confirmButtonColor &&
                      (e.style.backgroundColor = n.confirmButtonColor),
                    n.cancelButtonColor &&
                      (t.style.backgroundColor = n.cancelButtonColor),
                    !G())
                  ) {
                    var o = window
                      .getComputedStyle(e)
                      .getPropertyValue("background-color");
                    (e.style.borderLeftColor = o),
                      (e.style.borderRightColor = o);
                  }
                })(o, a, t)
              : (oe([o, a], S.styled),
                (o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor =
                  ""),
                (a.style.backgroundColor = a.style.borderLeftColor = a.style.borderRightColor =
                  "")),
            t.reverseButtons && o.parentNode.insertBefore(a, o);
        };
      function xe(e, t, n) {
        var o;
        le(
          e,
          n[
            "show".concat(
              ((o = t), o.charAt(0).toUpperCase() + o.slice(1)),
              "Button"
            )
          ],
          "inline-block"
        ),
          $(e, n["".concat(t, "ButtonText")]),
          e.setAttribute("aria-label", n["".concat(t, "ButtonAriaLabel")]),
          (e.className = S[t]),
          K(e, n, "".concat(t, "Button")),
          ne(e, n["".concat(t, "ButtonClass")]);
      }
      var Ce = function (e, t) {
          var n = A();
          if (n) {
            !(function (e, t) {
              "string" == typeof t
                ? (e.style.background = t)
                : t ||
                  ne(
                    [document.documentElement, document.body],
                    S["no-backdrop"]
                  );
            })(n, t.backdrop),
              !t.backdrop &&
                t.allowOutsideClick &&
                m(
                  '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
                ),
              (function (e, t) {
                t in S
                  ? ne(e, S[t])
                  : (m(
                      'The "position" parameter is not valid, defaulting to "center"'
                    ),
                    ne(e, S.center));
              })(n, t.position),
              (function (e, t) {
                if (t && "string" == typeof t) {
                  var n = "grow-".concat(t);
                  n in S && ne(e, S[n]);
                }
              })(n, t.grow),
              K(n, t, "container");
            var o = document.body.getAttribute("data-swal2-queue-step");
            o &&
              (n.setAttribute("data-queue-step", o),
              document.body.removeAttribute("data-swal2-queue-step"));
          }
        },
        Se = {
          promise: new WeakMap(),
          innerParams: new WeakMap(),
          domCache: new WeakMap(),
        },
        Ee = [
          "input",
          "file",
          "range",
          "select",
          "radio",
          "checkbox",
          "textarea",
        ],
        Ae = function (e) {
          if (!Oe[e.input])
            return f(
              'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(
                e.input,
                '"'
              )
            );
          var t = Te(e.input),
            n = Oe[e.input](t, e);
          ie(n),
            setTimeout(function () {
              ee(n);
            });
        },
        Pe = function (e, t) {
          var n = J(j(), e);
          if (n)
            for (var o in ((function (e) {
              for (var t = 0; t < e.attributes.length; t++) {
                var n = e.attributes[t].name;
                -1 === ["type", "value", "style"].indexOf(n) &&
                  e.removeAttribute(n);
              }
            })(n),
            t))
              ("range" === e && "placeholder" === o) || n.setAttribute(o, t[o]);
        },
        _e = function (e) {
          var t = Te(e.input);
          e.customClass && ne(t, e.customClass.input);
        },
        Be = function (e, t) {
          (e.placeholder && !t.inputPlaceholder) ||
            (e.placeholder = t.inputPlaceholder);
        },
        Te = function (e) {
          var t = S[e] ? S[e] : S.input;
          return ae(j(), t);
        },
        Oe = {};
      (Oe.text = Oe.email = Oe.password = Oe.number = Oe.tel = Oe.url = function (
        t,
        n
      ) {
        return (
          "string" == typeof n.inputValue || "number" == typeof n.inputValue
            ? (t.value = n.inputValue)
            : v(n.inputValue) ||
              m(
                'Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(
                  e(n.inputValue),
                  '"'
                )
              ),
          Be(t, n),
          (t.type = n.input),
          t
        );
      }),
        (Oe.file = function (e, t) {
          return Be(e, t), e;
        }),
        (Oe.range = function (e, t) {
          var n = e.querySelector("input"),
            o = e.querySelector("output");
          return (
            (n.value = t.inputValue),
            (n.type = t.input),
            (o.value = t.inputValue),
            e
          );
        }),
        (Oe.select = function (e, t) {
          if (((e.textContent = ""), t.inputPlaceholder)) {
            var n = document.createElement("option");
            $(n, t.inputPlaceholder),
              (n.value = ""),
              (n.disabled = !0),
              (n.selected = !0),
              e.appendChild(n);
          }
          return e;
        }),
        (Oe.radio = function (e) {
          return (e.textContent = ""), e;
        }),
        (Oe.checkbox = function (e, t) {
          var n = J(j(), "checkbox");
          (n.value = 1),
            (n.id = S.checkbox),
            (n.checked = Boolean(t.inputValue));
          var o = e.querySelector("span");
          return $(o, t.inputPlaceholder), e;
        }),
        (Oe.textarea = function (e, t) {
          if (
            ((e.value = t.inputValue), Be(e, t), "MutationObserver" in window)
          ) {
            var n = parseInt(window.getComputedStyle(B()).width),
              o =
                parseInt(window.getComputedStyle(B()).paddingLeft) +
                parseInt(window.getComputedStyle(B()).paddingRight);
            new MutationObserver(function () {
              var t = e.offsetWidth + o;
              B().style.width = t > n ? "".concat(t, "px") : null;
            }).observe(e, { attributes: !0, attributeFilter: ["style"] });
          }
          return e;
        });
      var Me = function (e, t) {
          var n = j().querySelector("#".concat(S.content));
          t.html
            ? (ge(t.html, n), ie(n, "block"))
            : t.text
            ? ((n.textContent = t.text), ie(n, "block"))
            : se(n),
            (function (e, t) {
              var n = j(),
                o = Se.innerParams.get(e),
                a = !o || t.input !== o.input;
              Ee.forEach(function (e) {
                var o = S[e],
                  r = ae(n, o);
                Pe(e, t.inputAttributes), (r.className = o), a && se(r);
              }),
                t.input && (a && Ae(t), _e(t));
            })(e, t),
            K(j(), t, "content");
        },
        je = function () {
          for (var e = T(), t = 0; t < e.length; t++) se(e[t]);
        },
        Le = function () {
          for (
            var e = B(),
              t = window
                .getComputedStyle(e)
                .getPropertyValue("background-color"),
              n = e.querySelectorAll(
                "[class^=swal2-success-circular-line], .swal2-success-fix"
              ),
              o = 0;
            o < n.length;
            o++
          )
            n[o].style.backgroundColor = t;
        },
        Ie = function (e, t) {
          (e.textContent = ""),
            t.iconHtml
              ? $(e, Re(t.iconHtml))
              : "success" === t.icon
              ? $(
                  e,
                  '\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '
                )
              : "error" === t.icon
              ? $(
                  e,
                  '\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '
                )
              : $(e, Re({ question: "?", warning: "!", info: "i" }[t.icon]));
        },
        Re = function (e) {
          return '<div class="'
            .concat(S["icon-content"], '">')
            .concat(e, "</div>");
        },
        De = [],
        He = function () {
          return A() && A().getAttribute("data-queue-step");
        },
        Ne = function (e, t) {
          var n = I();
          if (!t.progressSteps || 0 === t.progressSteps.length) return se(n);
          ie(n), (n.textContent = "");
          var o = parseInt(
            void 0 === t.currentProgressStep ? He() : t.currentProgressStep
          );
          o >= t.progressSteps.length &&
            m(
              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
            ),
            t.progressSteps.forEach(function (e, a) {
              var r = (function (e) {
                var t = document.createElement("li");
                return ne(t, S["progress-step"]), $(t, e), t;
              })(e);
              if (
                (n.appendChild(r),
                a === o && ne(r, S["active-progress-step"]),
                a !== t.progressSteps.length - 1)
              ) {
                var i = (function (e) {
                  var t = document.createElement("li");
                  return (
                    ne(t, S["progress-step-line"]),
                    e.progressStepsDistance &&
                      (t.style.width = e.progressStepsDistance),
                    t
                  );
                })(t);
                n.appendChild(i);
              }
            });
        },
        ze = function (e, t) {
          var n = z();
          K(n, t, "header"),
            Ne(0, t),
            (function (e, t) {
              var n = Se.innerParams.get(e);
              if (n && t.icon === n.icon && O()) K(O(), t, "icon");
              else if ((je(), t.icon))
                if (-1 !== Object.keys(E).indexOf(t.icon)) {
                  var o = P(".".concat(S.icon, ".").concat(E[t.icon]));
                  ie(o),
                    Ie(o, t),
                    Le(),
                    K(o, t, "icon"),
                    ne(o, t.showClass.icon);
                } else
                  f(
                    'Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(
                      t.icon,
                      '"'
                    )
                  );
            })(e, t),
            (function (e, t) {
              var n = L();
              if (!t.imageUrl) return se(n);
              ie(n, ""),
                n.setAttribute("src", t.imageUrl),
                n.setAttribute("alt", t.imageAlt),
                re(n, "width", t.imageWidth),
                re(n, "height", t.imageHeight),
                (n.className = S.image),
                K(n, t, "image");
            })(0, t),
            (function (e, t) {
              var n = M();
              le(n, t.title || t.titleText),
                t.title && ge(t.title, n),
                t.titleText && (n.innerText = t.titleText),
                K(n, t, "title");
            })(0, t),
            (function (e, t) {
              var n = q();
              $(n, t.closeButtonHtml),
                K(n, t, "closeButton"),
                le(n, t.showCloseButton),
                n.setAttribute("aria-label", t.closeButtonAriaLabel);
            })(0, t);
        },
        Ue = function (e, t) {
          (e.className = ""
            .concat(S.popup, " ")
            .concat(ce(e) ? t.showClass.popup : "")),
            t.toast
              ? (ne(
                  [document.documentElement, document.body],
                  S["toast-shown"]
                ),
                ne(e, S.toast))
              : ne(e, S.modal),
            K(e, t, "popup"),
            "string" == typeof t.customClass && ne(e, t.customClass),
            t.icon && ne(e, S["icon-".concat(t.icon)]);
        },
        Ve = function (e, t) {
          !(function (e, t) {
            var n = B();
            re(n, "width", t.width),
              re(n, "padding", t.padding),
              t.background && (n.style.background = t.background),
              Ue(n, t);
          })(0, t),
            Ce(0, t),
            ze(e, t),
            Me(e, t),
            ke(0, t),
            (function (e, t) {
              var n = U();
              le(n, t.footer), t.footer && ge(t.footer, n), K(n, t, "footer");
            })(0, t),
            "function" == typeof t.onRender && t.onRender(B());
        },
        qe = function () {
          return D() && D().click();
        },
        Ye = function () {
          var e = B();
          e || cn.fire(), (e = B());
          var t = N(),
            n = D();
          ie(t),
            ie(n, "inline-block"),
            ne([e, t], S.loading),
            (n.disabled = !0),
            e.setAttribute("data-loading", !0),
            e.setAttribute("aria-busy", !0),
            e.focus();
        },
        Fe = {},
        We = function () {
          return new Promise(function (e) {
            var t = window.scrollX,
              n = window.scrollY;
            (Fe.restoreFocusTimeout = setTimeout(function () {
              Fe.previousActiveElement && Fe.previousActiveElement.focus
                ? (Fe.previousActiveElement.focus(),
                  (Fe.previousActiveElement = null))
                : document.body && document.body.focus(),
                e();
            }, 100)),
              void 0 !== t && void 0 !== n && window.scrollTo(t, n);
          });
        },
        Ge = function () {
          if (Fe.timeout)
            return (
              (function () {
                var e = V(),
                  t = parseInt(window.getComputedStyle(e).width);
                e.style.removeProperty("transition"), (e.style.width = "100%");
                var n = parseInt(window.getComputedStyle(e).width),
                  o = parseInt((t / n) * 100);
                e.style.removeProperty("transition"),
                  (e.style.width = "".concat(o, "%"));
              })(),
              Fe.timeout.stop()
            );
        },
        Ze = function () {
          if (Fe.timeout) {
            var e = Fe.timeout.start();
            return pe(e), e;
          }
        },
        $e = {
          title: "",
          titleText: "",
          text: "",
          html: "",
          footer: "",
          icon: void 0,
          iconHtml: void 0,
          toast: !1,
          animation: !0,
          showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show",
          },
          hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide",
          },
          customClass: void 0,
          target: "body",
          backdrop: !0,
          heightAuto: !0,
          allowOutsideClick: !0,
          allowEscapeKey: !0,
          allowEnterKey: !0,
          stopKeydownPropagation: !0,
          keydownListenerCapture: !1,
          showConfirmButton: !0,
          showCancelButton: !1,
          preConfirm: void 0,
          confirmButtonText: "OK",
          confirmButtonAriaLabel: "",
          confirmButtonColor: void 0,
          cancelButtonText: "Cancel",
          cancelButtonAriaLabel: "",
          cancelButtonColor: void 0,
          buttonsStyling: !0,
          reverseButtons: !1,
          focusConfirm: !0,
          focusCancel: !1,
          showCloseButton: !1,
          closeButtonHtml: "&times;",
          closeButtonAriaLabel: "Close this dialog",
          showLoaderOnConfirm: !1,
          imageUrl: void 0,
          imageWidth: void 0,
          imageHeight: void 0,
          imageAlt: "",
          timer: void 0,
          timerProgressBar: !1,
          width: void 0,
          padding: void 0,
          background: void 0,
          input: void 0,
          inputPlaceholder: "",
          inputValue: "",
          inputOptions: {},
          inputAutoTrim: !0,
          inputAttributes: {},
          inputValidator: void 0,
          validationMessage: void 0,
          grow: !1,
          position: "center",
          progressSteps: [],
          currentProgressStep: void 0,
          progressStepsDistance: void 0,
          onBeforeOpen: void 0,
          onOpen: void 0,
          onRender: void 0,
          onClose: void 0,
          onAfterClose: void 0,
          onDestroy: void 0,
          scrollbarPadding: !0,
        },
        Xe = [
          "title",
          "titleText",
          "text",
          "html",
          "footer",
          "icon",
          "hideClass",
          "customClass",
          "allowOutsideClick",
          "allowEscapeKey",
          "showConfirmButton",
          "showCancelButton",
          "confirmButtonText",
          "confirmButtonAriaLabel",
          "confirmButtonColor",
          "cancelButtonText",
          "cancelButtonAriaLabel",
          "cancelButtonColor",
          "buttonsStyling",
          "reverseButtons",
          "showCloseButton",
          "closeButtonHtml",
          "closeButtonAriaLabel",
          "imageUrl",
          "imageWidth",
          "imageHeight",
          "imageAlt",
          "progressSteps",
          "currentProgressStep",
          "onClose",
          "onAfterClose",
          "onDestroy",
        ],
        Ke = { animation: 'showClass" and "hideClass' },
        Je = [
          "allowOutsideClick",
          "allowEnterKey",
          "backdrop",
          "focusConfirm",
          "focusCancel",
          "heightAuto",
          "keydownListenerCapture",
        ],
        Qe = function (e) {
          return Object.prototype.hasOwnProperty.call($e, e);
        },
        et = function (e) {
          return Ke[e];
        },
        tt = function (e) {
          Qe(e) || m('Unknown parameter "'.concat(e, '"'));
        },
        nt = function (e) {
          -1 !== Je.indexOf(e) &&
            m('The parameter "'.concat(e, '" is incompatible with toasts'));
        },
        ot = function (e) {
          et(e) && h(e, et(e));
        },
        at = Object.freeze({
          isValidParameter: Qe,
          isUpdatableParameter: function (e) {
            return -1 !== Xe.indexOf(e);
          },
          isDeprecatedParameter: et,
          argsToParams: function (t) {
            var n = {};
            return (
              "object" !== e(t[0]) || x(t[0])
                ? ["title", "html", "icon"].forEach(function (o, a) {
                    var r = t[a];
                    "string" == typeof r || x(r)
                      ? (n[o] = r)
                      : void 0 !== r &&
                        f(
                          "Unexpected type of "
                            .concat(o, '! Expected "string" or "Element", got ')
                            .concat(e(r))
                        );
                  })
                : a(n, t[0]),
              n
            );
          },
          isVisible: function () {
            return ce(B());
          },
          clickConfirm: qe,
          clickCancel: function () {
            return H() && H().click();
          },
          getContainer: A,
          getPopup: B,
          getTitle: M,
          getContent: j,
          getHtmlContainer: function () {
            return _(S["html-container"]);
          },
          getImage: L,
          getIcon: O,
          getIcons: T,
          getCloseButton: q,
          getActions: N,
          getConfirmButton: D,
          getCancelButton: H,
          getHeader: z,
          getFooter: U,
          getTimerProgressBar: V,
          getFocusableElements: Y,
          getValidationMessage: R,
          isLoading: G,
          fire: function () {
            for (
              var e = this, t = arguments.length, n = new Array(t), o = 0;
              o < t;
              o++
            )
              n[o] = arguments[o];
            return l(e, n);
          },
          mixin: function (e) {
            return (function (n) {
              !(function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw new TypeError(
                    "Super expression must either be null or a function"
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && i(e, t);
              })(m, n);
              var l,
                d,
                p =
                  ((l = m),
                  (d = s()),
                  function () {
                    var e,
                      t = r(l);
                    if (d) {
                      var n = r(this).constructor;
                      e = Reflect.construct(t, arguments, n);
                    } else e = t.apply(this, arguments);
                    return c(this, e);
                  });
              function m() {
                return t(this, m), p.apply(this, arguments);
              }
              return (
                o(m, [
                  {
                    key: "_main",
                    value: function (t) {
                      return u(r(m.prototype), "_main", this).call(
                        this,
                        a({}, e, t)
                      );
                    },
                  },
                ]),
                m
              );
            })(this);
          },
          queue: function (e) {
            var t = this;
            De = e;
            var n = function (e, t) {
                (De = []), e(t);
              },
              o = [];
            return new Promise(function (e) {
              !(function a(r, i) {
                r < De.length
                  ? (document.body.setAttribute("data-swal2-queue-step", r),
                    t.fire(De[r]).then(function (t) {
                      void 0 !== t.value
                        ? (o.push(t.value), a(r + 1, i))
                        : n(e, { dismiss: t.dismiss });
                    }))
                  : n(e, { value: o });
              })(0);
            });
          },
          getQueueStep: He,
          insertQueueStep: function (e, t) {
            return t && t < De.length ? De.splice(t, 0, e) : De.push(e);
          },
          deleteQueueStep: function (e) {
            void 0 !== De[e] && De.splice(e, 1);
          },
          showLoading: Ye,
          enableLoading: Ye,
          getTimerLeft: function () {
            return Fe.timeout && Fe.timeout.getTimerLeft();
          },
          stopTimer: Ge,
          resumeTimer: Ze,
          toggleTimer: function () {
            var e = Fe.timeout;
            return e && (e.running ? Ge() : Ze());
          },
          increaseTimer: function (e) {
            if (Fe.timeout) {
              var t = Fe.timeout.increase(e);
              return pe(t, !0), t;
            }
          },
          isTimerRunning: function () {
            return Fe.timeout && Fe.timeout.isRunning();
          },
        });
      function rt() {
        var e = Se.innerParams.get(this);
        if (e) {
          var t = Se.domCache.get(this);
          e.showConfirmButton ||
            (se(t.confirmButton), e.showCancelButton || se(t.actions)),
            oe([t.popup, t.actions], S.loading),
            t.popup.removeAttribute("aria-busy"),
            t.popup.removeAttribute("data-loading"),
            (t.confirmButton.disabled = !1),
            (t.cancelButton.disabled = !1);
        }
      }
      var it = function () {
          null === Z.previousBodyPadding &&
            document.body.scrollHeight > window.innerHeight &&
            ((Z.previousBodyPadding = parseInt(
              window
                .getComputedStyle(document.body)
                .getPropertyValue("padding-right")
            )),
            (document.body.style.paddingRight = "".concat(
              Z.previousBodyPadding +
                (function () {
                  var e = document.createElement("div");
                  (e.className = S["scrollbar-measure"]),
                    document.body.appendChild(e);
                  var t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                })(),
              "px"
            )));
        },
        st = function () {
          navigator.userAgent.match(
            /(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i
          ) ||
            (B().scrollHeight > window.innerHeight - 44 &&
              (A().style.paddingBottom = "".concat(44, "px")));
        },
        lt = function () {
          var e,
            t = A();
          (t.ontouchstart = function (t) {
            e = ct(t.target);
          }),
            (t.ontouchmove = function (t) {
              e && (t.preventDefault(), t.stopPropagation());
            });
        },
        ct = function (e) {
          var t = A();
          return (
            e === t ||
            !(ue(t) || "INPUT" === e.tagName || (ue(j()) && j().contains(e)))
          );
        },
        ut = function () {
          return !!window.MSInputMethodContext && !!document.documentMode;
        },
        dt = function () {
          var e = A(),
            t = B();
          e.style.removeProperty("align-items"),
            t.offsetTop < 0 && (e.style.alignItems = "flex-start");
        },
        pt = { swalPromiseResolve: new WeakMap() };
      function mt(e, t, n, o) {
        n
          ? gt(e, o)
          : (We().then(function () {
              return gt(e, o);
            }),
            Fe.keydownTarget.removeEventListener("keydown", Fe.keydownHandler, {
              capture: Fe.keydownListenerCapture,
            }),
            (Fe.keydownHandlerAdded = !1)),
          t.parentNode &&
            !document.body.getAttribute("data-swal2-queue-step") &&
            t.parentNode.removeChild(t),
          F() &&
            (null !== Z.previousBodyPadding &&
              ((document.body.style.paddingRight = "".concat(
                Z.previousBodyPadding,
                "px"
              )),
              (Z.previousBodyPadding = null)),
            (function () {
              if (X(document.body, S.iosfix)) {
                var e = parseInt(document.body.style.top, 10);
                oe(document.body, S.iosfix),
                  (document.body.style.top = ""),
                  (document.body.scrollTop = -1 * e);
              }
            })(),
            "undefined" != typeof window &&
              ut() &&
              window.removeEventListener("resize", dt),
            p(document.body.children).forEach(function (e) {
              e.hasAttribute("data-previous-aria-hidden")
                ? (e.setAttribute(
                    "aria-hidden",
                    e.getAttribute("data-previous-aria-hidden")
                  ),
                  e.removeAttribute("data-previous-aria-hidden"))
                : e.removeAttribute("aria-hidden");
            })),
          oe(
            [document.documentElement, document.body],
            [
              S.shown,
              S["height-auto"],
              S["no-backdrop"],
              S["toast-shown"],
              S["toast-column"],
            ]
          );
      }
      function ft(e) {
        var t = B();
        if (t) {
          var n = Se.innerParams.get(this);
          if (n && !X(t, n.hideClass.popup)) {
            var o = pt.swalPromiseResolve.get(this);
            oe(t, n.showClass.popup), ne(t, n.hideClass.popup);
            var a = A();
            oe(a, n.showClass.backdrop),
              ne(a, n.hideClass.backdrop),
              wt(this, t, n),
              void 0 !== e
                ? ((e.isDismissed = void 0 !== e.dismiss),
                  (e.isConfirmed = void 0 === e.dismiss))
                : (e = { isDismissed: !0, isConfirmed: !1 }),
              o(e || {});
          }
        }
      }
      var wt = function (e, t, n) {
          var o = A(),
            a = ve && de(t),
            r = n.onClose,
            i = n.onAfterClose;
          null !== r && "function" == typeof r && r(t),
            a ? ht(e, t, o, i) : mt(e, o, W(), i);
        },
        ht = function (e, t, n, o) {
          (Fe.swalCloseEventFinishedCallback = mt.bind(null, e, n, W(), o)),
            t.addEventListener(ve, function (e) {
              e.target === t &&
                (Fe.swalCloseEventFinishedCallback(),
                delete Fe.swalCloseEventFinishedCallback);
            });
        },
        gt = function (e, t) {
          setTimeout(function () {
            "function" == typeof t && t(), e._destroy();
          });
        };
      function bt(e, t, n) {
        var o = Se.domCache.get(e);
        t.forEach(function (e) {
          o[e].disabled = n;
        });
      }
      function yt(e, t) {
        if (!e) return !1;
        if ("radio" === e.type)
          for (
            var n = e.parentNode.parentNode.querySelectorAll("input"), o = 0;
            o < n.length;
            o++
          )
            n[o].disabled = t;
        else e.disabled = t;
      }
      var vt = (function () {
          function e(n, o) {
            t(this, e),
              (this.callback = n),
              (this.remaining = o),
              (this.running = !1),
              this.start();
          }
          return (
            o(e, [
              {
                key: "start",
                value: function () {
                  return (
                    this.running ||
                      ((this.running = !0),
                      (this.started = new Date()),
                      (this.id = setTimeout(this.callback, this.remaining))),
                    this.remaining
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  return (
                    this.running &&
                      ((this.running = !1),
                      clearTimeout(this.id),
                      (this.remaining -= new Date() - this.started)),
                    this.remaining
                  );
                },
              },
              {
                key: "increase",
                value: function (e) {
                  var t = this.running;
                  return (
                    t && this.stop(),
                    (this.remaining += e),
                    t && this.start(),
                    this.remaining
                  );
                },
              },
              {
                key: "getTimerLeft",
                value: function () {
                  return (
                    this.running && (this.stop(), this.start()), this.remaining
                  );
                },
              },
              {
                key: "isRunning",
                value: function () {
                  return this.running;
                },
              },
            ]),
            e
          );
        })(),
        kt = {
          email: function (e, t) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
              e
            )
              ? Promise.resolve()
              : Promise.resolve(t || "Invalid email address");
          },
          url: function (e, t) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
              e
            )
              ? Promise.resolve()
              : Promise.resolve(t || "Invalid URL");
          },
        };
      function xt(e) {
        !(function (e) {
          e.inputValidator ||
            Object.keys(kt).forEach(function (t) {
              e.input === t && (e.inputValidator = kt[t]);
            });
        })(e),
          e.showLoaderOnConfirm &&
            !e.preConfirm &&
            m(
              "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
            ),
          (e.animation = g(e.animation)),
          (function (e) {
            (!e.target ||
              ("string" == typeof e.target &&
                !document.querySelector(e.target)) ||
              ("string" != typeof e.target && !e.target.appendChild)) &&
              (m('Target parameter is not valid, defaulting to "body"'),
              (e.target = "body"));
          })(e),
          "string" == typeof e.title &&
            (e.title = e.title.split("\n").join("<br />")),
          he(e);
      }
      var Ct = function (e) {
        var t = A(),
          n = B();
        "function" == typeof e.onBeforeOpen && e.onBeforeOpen(n);
        var o = window.getComputedStyle(document.body).overflowY;
        _t(t, n, e),
          At(t, n),
          F() &&
            (Pt(t, e.scrollbarPadding, o),
            p(document.body.children).forEach(function (e) {
              e === A() ||
                (function (e, t) {
                  if ("function" == typeof e.contains) return e.contains(t);
                })(e, A()) ||
                (e.hasAttribute("aria-hidden") &&
                  e.setAttribute(
                    "data-previous-aria-hidden",
                    e.getAttribute("aria-hidden")
                  ),
                e.setAttribute("aria-hidden", "true"));
            })),
          W() ||
            Fe.previousActiveElement ||
            (Fe.previousActiveElement = document.activeElement),
          "function" == typeof e.onOpen &&
            setTimeout(function () {
              return e.onOpen(n);
            }),
          oe(t, S["no-transition"]);
      };
      function St(e) {
        var t = B();
        if (e.target === t) {
          var n = A();
          t.removeEventListener(ve, St), (n.style.overflowY = "auto");
        }
      }
      var Et,
        At = function (e, t) {
          ve && de(t)
            ? ((e.style.overflowY = "hidden"), t.addEventListener(ve, St))
            : (e.style.overflowY = "auto");
        },
        Pt = function (e, t, n) {
          !(function () {
            if (
              ((/iPad|iPhone|iPod/.test(navigator.userAgent) &&
                !window.MSStream) ||
                ("MacIntel" === navigator.platform &&
                  navigator.maxTouchPoints > 1)) &&
              !X(document.body, S.iosfix)
            ) {
              var e = document.body.scrollTop;
              (document.body.style.top = "".concat(-1 * e, "px")),
                ne(document.body, S.iosfix),
                lt(),
                st();
            }
          })(),
            "undefined" != typeof window &&
              ut() &&
              (dt(), window.addEventListener("resize", dt)),
            t && "hidden" !== n && it(),
            setTimeout(function () {
              e.scrollTop = 0;
            });
        },
        _t = function (e, t, n) {
          ne(e, n.showClass.backdrop),
            ie(t),
            ne(t, n.showClass.popup),
            ne([document.documentElement, document.body], S.shown),
            n.heightAuto &&
              n.backdrop &&
              !n.toast &&
              ne([document.documentElement, document.body], S["height-auto"]);
        },
        Bt = function (e) {
          return e.checked ? 1 : 0;
        },
        Tt = function (e) {
          return e.checked ? e.value : null;
        },
        Ot = function (e) {
          return e.files.length
            ? null !== e.getAttribute("multiple")
              ? e.files
              : e.files[0]
            : null;
        },
        Mt = function (t, n) {
          var o = j(),
            a = function (e) {
              return Lt[n.input](o, It(e), n);
            };
          b(n.inputOptions) || v(n.inputOptions)
            ? (Ye(),
              y(n.inputOptions).then(function (e) {
                t.hideLoading(), a(e);
              }))
            : "object" === e(n.inputOptions)
            ? a(n.inputOptions)
            : f(
                "Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(
                  e(n.inputOptions)
                )
              );
        },
        jt = function (e, t) {
          var n = e.getInput();
          se(n),
            y(t.inputValue)
              .then(function (o) {
                (n.value =
                  "number" === t.input ? parseFloat(o) || 0 : "".concat(o)),
                  ie(n),
                  n.focus(),
                  e.hideLoading();
              })
              .catch(function (t) {
                f("Error in inputValue promise: ".concat(t)),
                  (n.value = ""),
                  ie(n),
                  n.focus(),
                  e.hideLoading();
              });
        },
        Lt = {
          select: function (e, t, n) {
            var o = ae(e, S.select),
              a = function (e, t, o) {
                var a = document.createElement("option");
                (a.value = o),
                  $(a, t),
                  n.inputValue.toString() === o.toString() && (a.selected = !0),
                  e.appendChild(a);
              };
            t.forEach(function (e) {
              var t = e[0],
                n = e[1];
              if (Array.isArray(n)) {
                var r = document.createElement("optgroup");
                (r.label = t),
                  (r.disabled = !1),
                  o.appendChild(r),
                  n.forEach(function (e) {
                    return a(r, e[1], e[0]);
                  });
              } else a(o, n, t);
            }),
              o.focus();
          },
          radio: function (e, t, n) {
            var o = ae(e, S.radio);
            t.forEach(function (e) {
              var t = e[0],
                a = e[1],
                r = document.createElement("input"),
                i = document.createElement("label");
              (r.type = "radio"),
                (r.name = S.radio),
                (r.value = t),
                n.inputValue.toString() === t.toString() && (r.checked = !0);
              var s = document.createElement("span");
              $(s, a),
                (s.className = S.label),
                i.appendChild(r),
                i.appendChild(s),
                o.appendChild(i);
            });
            var a = o.querySelectorAll("input");
            a.length && a[0].focus();
          },
        },
        It = function t(n) {
          var o = [];
          return (
            "undefined" != typeof Map && n instanceof Map
              ? n.forEach(function (n, a) {
                  var r = n;
                  "object" === e(r) && (r = t(r)), o.push([a, r]);
                })
              : Object.keys(n).forEach(function (a) {
                  var r = n[a];
                  "object" === e(r) && (r = t(r)), o.push([a, r]);
                }),
            o
          );
        },
        Rt = function (e, t) {
          var n = (function (e, t) {
            var n = e.getInput();
            if (!n) return null;
            switch (t.input) {
              case "checkbox":
                return Bt(n);
              case "radio":
                return Tt(n);
              case "file":
                return Ot(n);
              default:
                return t.inputAutoTrim ? n.value.trim() : n.value;
            }
          })(e, t);
          t.inputValidator
            ? (e.disableInput(),
              Promise.resolve()
                .then(function () {
                  return y(t.inputValidator(n, t.validationMessage));
                })
                .then(function (o) {
                  e.enableButtons(),
                    e.enableInput(),
                    o ? e.showValidationMessage(o) : Ht(e, t, n);
                }))
            : e.getInput().checkValidity()
            ? Ht(e, t, n)
            : (e.enableButtons(), e.showValidationMessage(t.validationMessage));
        },
        Dt = function (e, t) {
          e.closePopup({ value: t });
        },
        Ht = function (e, t, n) {
          t.showLoaderOnConfirm && Ye(),
            t.preConfirm
              ? (e.resetValidationMessage(),
                Promise.resolve()
                  .then(function () {
                    return y(t.preConfirm(n, t.validationMessage));
                  })
                  .then(function (t) {
                    ce(R()) || !1 === t
                      ? e.hideLoading()
                      : Dt(e, void 0 === t ? n : t);
                  }))
              : Dt(e, n);
        },
        Nt = function (e, t, n) {
          for (var o = Y(), a = 0; a < o.length; a++)
            return (
              (t += n) === o.length ? (t = 0) : -1 === t && (t = o.length - 1),
              o[t].focus()
            );
          B().focus();
        },
        zt = [
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Left",
          "Right",
          "Up",
          "Down",
        ],
        Ut = ["Escape", "Esc"],
        Vt = function (e, t, n) {
          var o = Se.innerParams.get(e);
          o.stopKeydownPropagation && t.stopPropagation(),
            "Enter" === t.key
              ? qt(e, t, o)
              : "Tab" === t.key
              ? Yt(t, o)
              : -1 !== zt.indexOf(t.key)
              ? Ft()
              : -1 !== Ut.indexOf(t.key) && Wt(t, o, n);
        },
        qt = function (e, t, n) {
          if (
            !t.isComposing &&
            t.target &&
            e.getInput() &&
            t.target.outerHTML === e.getInput().outerHTML
          ) {
            if (-1 !== ["textarea", "file"].indexOf(n.input)) return;
            qe(), t.preventDefault();
          }
        },
        Yt = function (e, t) {
          for (var n = e.target, o = Y(), a = -1, r = 0; r < o.length; r++)
            if (n === o[r]) {
              a = r;
              break;
            }
          e.shiftKey ? Nt(0, a, -1) : Nt(0, a, 1),
            e.stopPropagation(),
            e.preventDefault();
        },
        Ft = function () {
          var e = D(),
            t = H();
          document.activeElement === e && ce(t)
            ? t.focus()
            : document.activeElement === t && ce(e) && e.focus();
        },
        Wt = function (e, t, n) {
          g(t.allowEscapeKey) && (e.preventDefault(), n(k.esc));
        },
        Gt = function (e, t, n) {
          t.popup.onclick = function () {
            var t = Se.innerParams.get(e);
            t.showConfirmButton ||
              t.showCancelButton ||
              t.showCloseButton ||
              t.input ||
              n(k.close);
          };
        },
        Zt = !1,
        $t = function (e) {
          e.popup.onmousedown = function () {
            e.container.onmouseup = function (t) {
              (e.container.onmouseup = void 0),
                t.target === e.container && (Zt = !0);
            };
          };
        },
        Xt = function (e) {
          e.container.onmousedown = function () {
            e.popup.onmouseup = function (t) {
              (e.popup.onmouseup = void 0),
                (t.target === e.popup || e.popup.contains(t.target)) &&
                  (Zt = !0);
            };
          };
        },
        Kt = function (e, t, n) {
          t.container.onclick = function (o) {
            var a = Se.innerParams.get(e);
            Zt
              ? (Zt = !1)
              : o.target === t.container &&
                g(a.allowOutsideClick) &&
                n(k.backdrop);
          };
        },
        Jt = function (e) {
          var t = a({}, $e.showClass, e.showClass),
            n = a({}, $e.hideClass, e.hideClass),
            o = a({}, $e, e);
          return (
            (o.showClass = t),
            (o.hideClass = n),
            !1 === e.animation &&
              ((o.showClass = {
                popup: "swal2-noanimation",
                backdrop: "swal2-noanimation",
              }),
              (o.hideClass = {})),
            o
          );
        },
        Qt = function (e, t, n) {
          return new Promise(function (o) {
            var a = function (t) {
              e.closePopup({ dismiss: t });
            };
            pt.swalPromiseResolve.set(e, o),
              (t.confirmButton.onclick = function () {
                return (function (e, t) {
                  e.disableButtons(), t.input ? Rt(e, t) : Ht(e, t, !0);
                })(e, n);
              }),
              (t.cancelButton.onclick = function () {
                return (function (e, t) {
                  e.disableButtons(), t(k.cancel);
                })(e, a);
              }),
              (t.closeButton.onclick = function () {
                return a(k.close);
              }),
              (function (e, t, n) {
                Se.innerParams.get(e).toast
                  ? Gt(e, t, n)
                  : ($t(t), Xt(t), Kt(e, t, n));
              })(e, t, a),
              (function (e, t, n, o) {
                t.keydownTarget &&
                  t.keydownHandlerAdded &&
                  (t.keydownTarget.removeEventListener(
                    "keydown",
                    t.keydownHandler,
                    { capture: t.keydownListenerCapture }
                  ),
                  (t.keydownHandlerAdded = !1)),
                  n.toast ||
                    ((t.keydownHandler = function (t) {
                      return Vt(e, t, o);
                    }),
                    (t.keydownTarget = n.keydownListenerCapture ? window : B()),
                    (t.keydownListenerCapture = n.keydownListenerCapture),
                    t.keydownTarget.addEventListener(
                      "keydown",
                      t.keydownHandler,
                      { capture: t.keydownListenerCapture }
                    ),
                    (t.keydownHandlerAdded = !0));
              })(e, Fe, n, a),
              n.toast && (n.input || n.footer || n.showCloseButton)
                ? ne(document.body, S["toast-column"])
                : oe(document.body, S["toast-column"]),
              (function (e, t) {
                "select" === t.input || "radio" === t.input
                  ? Mt(e, t)
                  : -1 !==
                      ["text", "email", "number", "tel", "textarea"].indexOf(
                        t.input
                      ) &&
                    (b(t.inputValue) || v(t.inputValue)) &&
                    jt(e, t);
              })(e, n),
              Ct(n),
              tn(Fe, n, a),
              nn(t, n),
              setTimeout(function () {
                t.container.scrollTop = 0;
              });
          });
        },
        en = function (e) {
          var t = {
            popup: B(),
            container: A(),
            content: j(),
            actions: N(),
            confirmButton: D(),
            cancelButton: H(),
            closeButton: q(),
            validationMessage: R(),
            progressSteps: I(),
          };
          return Se.domCache.set(e, t), t;
        },
        tn = function (e, t, n) {
          var o = V();
          se(o),
            t.timer &&
              ((e.timeout = new vt(function () {
                n("timer"), delete e.timeout;
              }, t.timer)),
              t.timerProgressBar &&
                (ie(o),
                setTimeout(function () {
                  e.timeout.running && pe(t.timer);
                })));
        },
        nn = function (e, t) {
          if (!t.toast)
            return g(t.allowEnterKey)
              ? t.focusCancel && ce(e.cancelButton)
                ? e.cancelButton.focus()
                : t.focusConfirm && ce(e.confirmButton)
                ? e.confirmButton.focus()
                : void Nt(0, -1, 1)
              : on();
        },
        on = function () {
          document.activeElement &&
            "function" == typeof document.activeElement.blur &&
            document.activeElement.blur();
        },
        an = function (e) {
          delete e.params,
            delete Fe.keydownHandler,
            delete Fe.keydownTarget,
            rn(Se),
            rn(pt);
        },
        rn = function (e) {
          for (var t in e) e[t] = new WeakMap();
        },
        sn = Object.freeze({
          hideLoading: rt,
          disableLoading: rt,
          getInput: function (e) {
            var t = Se.innerParams.get(e || this),
              n = Se.domCache.get(e || this);
            return n ? J(n.content, t.input) : null;
          },
          close: ft,
          closePopup: ft,
          closeModal: ft,
          closeToast: ft,
          enableButtons: function () {
            bt(this, ["confirmButton", "cancelButton"], !1);
          },
          disableButtons: function () {
            bt(this, ["confirmButton", "cancelButton"], !0);
          },
          enableInput: function () {
            return yt(this.getInput(), !1);
          },
          disableInput: function () {
            return yt(this.getInput(), !0);
          },
          showValidationMessage: function (e) {
            var t = Se.domCache.get(this);
            $(t.validationMessage, e);
            var n = window.getComputedStyle(t.popup);
            (t.validationMessage.style.marginLeft = "-".concat(
              n.getPropertyValue("padding-left")
            )),
              (t.validationMessage.style.marginRight = "-".concat(
                n.getPropertyValue("padding-right")
              )),
              ie(t.validationMessage);
            var o = this.getInput();
            o &&
              (o.setAttribute("aria-invalid", !0),
              o.setAttribute("aria-describedBy", S["validation-message"]),
              ee(o),
              ne(o, S.inputerror));
          },
          resetValidationMessage: function () {
            var e = Se.domCache.get(this);
            e.validationMessage && se(e.validationMessage);
            var t = this.getInput();
            t &&
              (t.removeAttribute("aria-invalid"),
              t.removeAttribute("aria-describedBy"),
              oe(t, S.inputerror));
          },
          getProgressSteps: function () {
            return Se.domCache.get(this).progressSteps;
          },
          _main: function (e) {
            !(function (e) {
              for (var t in e) tt(t), e.toast && nt(t), ot(t);
            })(e),
              Fe.currentInstance && Fe.currentInstance._destroy(),
              (Fe.currentInstance = this);
            var t = Jt(e);
            xt(t),
              Object.freeze(t),
              Fe.timeout && (Fe.timeout.stop(), delete Fe.timeout),
              clearTimeout(Fe.restoreFocusTimeout);
            var n = en(this);
            return Ve(this, t), Se.innerParams.set(this, t), Qt(this, n, t);
          },
          update: function (e) {
            var t = B(),
              n = Se.innerParams.get(this);
            if (!t || X(t, n.hideClass.popup))
              return m(
                "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
              );
            var o = {};
            Object.keys(e).forEach(function (t) {
              cn.isUpdatableParameter(t)
                ? (o[t] = e[t])
                : m(
                    'Invalid parameter to update: "'.concat(
                      t,
                      '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'
                    )
                  );
            });
            var r = a({}, n, o);
            Ve(this, r),
              Se.innerParams.set(this, r),
              Object.defineProperties(this, {
                params: {
                  value: a({}, this.params, e),
                  writable: !1,
                  enumerable: !0,
                },
              });
          },
          _destroy: function () {
            var e = Se.domCache.get(this),
              t = Se.innerParams.get(this);
            t &&
              (e.popup &&
                Fe.swalCloseEventFinishedCallback &&
                (Fe.swalCloseEventFinishedCallback(),
                delete Fe.swalCloseEventFinishedCallback),
              Fe.deferDisposalTimer &&
                (clearTimeout(Fe.deferDisposalTimer),
                delete Fe.deferDisposalTimer),
              "function" == typeof t.onDestroy && t.onDestroy(),
              an(this));
          },
        }),
        ln = (function () {
          function e() {
            if ((t(this, e), "undefined" != typeof window)) {
              "undefined" == typeof Promise &&
                f(
                  "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
                ),
                (Et = this);
              for (
                var n = arguments.length, o = new Array(n), a = 0;
                a < n;
                a++
              )
                o[a] = arguments[a];
              var r = Object.freeze(this.constructor.argsToParams(o));
              Object.defineProperties(this, {
                params: {
                  value: r,
                  writable: !1,
                  enumerable: !0,
                  configurable: !0,
                },
              });
              var i = this._main(this.params);
              Se.promise.set(this, i);
            }
          }
          return (
            o(e, [
              {
                key: "then",
                value: function (e) {
                  return Se.promise.get(this).then(e);
                },
              },
              {
                key: "finally",
                value: function (e) {
                  return Se.promise.get(this).finally(e);
                },
              },
            ]),
            e
          );
        })();
      a(ln.prototype, sn),
        a(ln, at),
        Object.keys(sn).forEach(function (e) {
          ln[e] = function () {
            var t;
            if (Et) return (t = Et)[e].apply(t, arguments);
          };
        }),
        (ln.DismissReason = k),
        (ln.version = "9.17.1");
      var cn = ln;
      return (cn.default = cn), cn;
    })()),
      void 0 !== this &&
        this.Sweetalert2 &&
        (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2),
      "undefined" != typeof document &&
        (function (e, t) {
          var n = e.createElement("style");
          if ((e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet))
            n.styleSheet.disabled || (n.styleSheet.cssText = t);
          else
            try {
              n.innerHTML = t;
            } catch (e) {
              n.innerText = t;
            }
        })(
          document,
          '.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent!important;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:"";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}'
        );
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(1), n(2), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = (e, t) =>
              e.map((e) => ({ ID: e.ID, N: t })).filter((e) => void 0 !== e),
            s = function (e, t) {
              var s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1;
              new n.Hack(
                n.category.inventory,
                "Obtain All ".concat(e)
              ).setClick(
                i(function* () {
                  (_.player.backpack.data[t] = r(a.gameData[t], s)),
                    yield o.Toast.fire(
                      "".concat(e, " Added!"),
                      "All ".concat(
                        e.toLowerCase(),
                        " have been added to your inventory!"
                      ),
                      "success"
                    ),
                    a.savePlayer();
                })
              );
            };
          s("Boots", "boots"),
            s("Buddies", "follow"),
            s("Fossils", "fossil", a.VERY_LARGE_NUMBER),
            s("Hats", "hat"),
            s("Items", "item", a.VERY_LARGE_NUMBER),
            s("Key Items", "key", a.VERY_LARGE_NUMBER),
            s("Math Town Frames", "mathTownFrame", a.VERY_LARGE_NUMBER),
            s("Math Town Interiors", "mathTownInterior", a.VERY_LARGE_NUMBER),
            s("Mounts", "mount"),
            s("Outfits", "outfit"),
            s("Relics", "relic"),
            s("Spell Relics", "spellRelic"),
            s("Weapons", "weapon"),
            s("Currency", "currency", a.VERY_LARGE_NUMBER),
            new n.Hack(n.category.inventory, "Obtain All Furniture").setClick(
              i(function* () {
                a.gameData.dorm.forEach(
                  (e) =>
                    (_.player.house.data.items[e.ID] = {
                      A: [],
                      N: a.VERY_LARGE_NUMBER,
                    })
                ),
                  yield o.Toast.fire(
                    "Furniture Added!",
                    "All furniture have been added to your inventory!",
                    "success"
                  ),
                  a.savePlayer();
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(1), n(2), n(0), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a, r) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            new n.Hack(
              n.category.location,
              "Teleport To Map (interactive)"
            ).setClick(
              i(function* () {
                var e = o.Swal.mixin({
                    focusConfirm: !1,
                    showCancelButton: !0,
                    preConfirm: () => {
                      var e;
                      return null ===
                        (e = document.querySelector(".radioDiv[checked]")) ||
                        void 0 === e
                        ? void 0
                        : e.getAttribute("zone");
                    },
                  }),
                  t = document.createElement("div");
                t.classList.add("radioContainer");
                var n = function (e) {
                  var n = document.createElement("DIV");
                  n.classList.add("radioDiv"), n.setAttribute("zone", e);
                  var o = a.locations[e];
                  o
                    ? (n.style.backgroundImage = "url(".concat(o, ")"))
                    : (n.innerText = e),
                    (n.onclick = () => {
                      document
                        .querySelectorAll(".radioDiv[checked]")
                        .forEach((e) => e.removeAttribute("checked")),
                        n.setAttribute("checked", "");
                    }),
                    t.append(n);
                };
                for (var i of Object.keys(r.prodigy.world.zones)) n(i);
                var s = yield e.fire({
                  title: "Teleport Zone",
                  html: t,
                  customClass: { popup: "radioSwal" },
                });
                if (s.value) {
                  var l = Object.keys(r.prodigy.world.zones[s.value].maps),
                    c = yield o.Swal.fire({
                      input: "select",
                      inputOptions: new Map(l.map((e) => [e, e])),
                      title: "Map",
                      text: "Which map in the zone do you want to teleport to?",
                    });
                  c.value &&
                    (r.prodigy.world._("".concat(s.value, "-").concat(c.value)),
                    yield o.Toast.fire(
                      "Teleported",
                      "You have been teleported!",
                      "success"
                    ));
                }
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(2), n(1), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            new o.Hack(o.category.misc, "Skip Tutorial").setClick(
              i(function* () {
                var e = (e, t, n, o) => {
                  _.instance.prodigy.world.getZone(e).testQuest(t, n, o);
                  try {
                    _.instance.game.state.states.TileScreen.process();
                  } catch (e) {}
                };
                e("house", 2),
                  e("academy", 2),
                  _.player.state.set("tutorial-0", 4),
                  _.player.backpack.addKeyItem(13, 0),
                  (_.player.tutorial.data.menus[14] = [1]),
                  _.instance.prodigy.open.map(!0, []),
                  _.player.onTutorialComplete();
              })
            );
          var r = null;
          new o.Toggler(o.category.misc, "Clothing Vibe")
            .setEnabled(
              i(function* () {
                r = window.setInterval(() => {
                  var e = (e) => a.pickRandom(e).ID;
                  _.player.equipment.setOutfit(e(a.gameData.outfit)),
                    _.player.equipment.setBoots(e(a.gameData.boots)),
                    _.player.equipment.setHat(e(a.gameData.hat)),
                    (_.player.appearanceChanged = !0);
                }, 690);
              })
            )
            .setDisabled(() => {
              r && clearInterval(r);
            }),
            new o.Hack(
              o.category.misc,
              "Bobbify",
              "Converts your account into Bobby Fancywoman."
            ).setClick(
              i(function* () {
                (yield n.Confirm.fire(
                  "Are you sure you want your account to be turned into Bobby Fancywoman?",
                  "This action is not reversable."
                )).value &&
                  ((_.player.name.data.nickname = null),
                  (_.player.name.data.firstName = 44),
                  (_.player.name.data.middleName = 754),
                  (_.player.name.data.lastName = 882),
                  (_.player.data.stars = -1e22),
                  (_.player.data.level = 69),
                  _.player.appearance.setGender("male"),
                  _.player.appearance.setEyeColor(1),
                  _.player.appearance.setFace(4),
                  _.player.appearance.setHair(19, 1),
                  _.player.appearance.setSkinColor(1),
                  _.player.equipment.setFollow(19),
                  _.player.equipment.setHat(19),
                  _.player.equipment.setBoots(19),
                  _.player.equipment.setOutfit(19),
                  _.player.equipment.setWeapon(19),
                  _.player.forceSaveCharacter(),
                  yield n.Toast.fire(
                    "Bobbified!",
                    "You are now Bobby Fancywoman.",
                    "success"
                  ));
              })
            ),
            new o.Hack(
              o.category.misc,
              "Reset Account",
              "Completely resets your account."
            ).setClick(
              i(function* () {
                (yield n.Confirm.fire(
                  "Are you sure you want to reset your account?",
                  "This action is not reversable."
                )).value && _.player.resetAccount();
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(2), n(1), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var r = () => {
              var e = a.gameData.spell.filter((e) => 90 != +e.ID);
              return e[Math.floor(Math.random() * e.length)].ID;
            },
            s = (e) => ({
              ID: e,
              catchDate: Date.now(),
              foreignSpells: [r(), r()],
              level: a.VERY_LARGE_NUMBER,
              levelCaught: 1,
              stars: a.VERY_LARGE_NUMBER,
            });
          new o.Hack(o.category.pets, "Get All Pets").setClick(
            i(function* () {
              var e = a.gameData.pet.map((e) => s(e.ID));
              _.player.kennel.data.splice(-1, 0, ...e),
                (_.player.kennel._encounterInfo._data.pets = []),
                _.gameData.pet.map((e) => {
                  _.player.kennel._encounterInfo._data.pets.push({
                    firstSeenDate: Date.now(),
                    ID: e.ID,
                    timesBattled: a.VERY_LARGE_NUMBER,
                    timesRescued: a.VERY_LARGE_NUMBER,
                  });
                }),
                yield n.Toast.fire(
                  "Success!",
                  "All pets have been added!",
                  "success"
                );
            })
          ),
            new o.Hack(o.category.pets, "Get All Epics").setClick(
              i(function* () {
                _.player.kennel.data.splice(
                  -1,
                  0,
                  ...[125, 126, 127, 128, 129, 130, 131, 132, 133].map(s)
                ),
                  yield n.Toast.fire(
                    "Success!",
                    "All epics have been added!",
                    "success"
                  );
              })
            ),
            new o.Hack(o.category.pets, "Fix Battle Crash").setClick(
              i(function* () {
                _.player.kennel.petTeam.forEach((e) => {
                  e && e.assignRandomSpells && e.assignRandomSpells();
                }),
                  yield n.Toast.fire(
                    "Success!",
                    "Fixed kennel attack bug!",
                    "success"
                  );
              })
            ),
            new o.Hack(o.category.pets, "Clear Pets").setClick(
              i(function* () {
                (_.player.kennel.data.length = 0),
                  yield n.Toast.fire(
                    "Success!",
                    "Your pets have been cleared!",
                    "success"
                  );
              })
            ),
            new o.Hack(
              o.category.pets,
              "Add Pet",
              "Adds a pet from a list."
            ).setClick(
              i(function* () {
                var e = yield n.Swal.fire({
                  input: "select",
                  inputOptions: new Map(
                    a.gameData.pet.map((e) => [
                      e.ID.toString(),
                      "".concat(e.ID, ": ").concat(e.data.name),
                    ])
                  ),
                  title: "Choose Pet",
                  text: "Which pet do you want to obtain?",
                });
                void 0 !== e.value &&
                  (_.player.kennel.addPet(e.value),
                  yield n.Toast.fire(
                    "Success!",
                    "Your chosen pet has been added to your pets!",
                    "success"
                  ));
              })
            );
          var l = (function () {
            var e = i(function* (e) {
              return (yield n.Swal.fire({
                input: "select",
                inputOptions: new Map(
                  _.player.kennel.data.map((e, t) => {
                    var n, o, r;
                    return [
                      t.toString(),
                      "Level "
                        .concat(e.level, " - ")
                        .concat(
                          null !==
                            (n =
                              null !== (o = e.nickname) && void 0 !== o
                                ? o
                                : null ===
                                    (r = a.gameData.pet.find(
                                      (t) => +t.ID == +e.ID
                                    )) || void 0 === r
                                ? void 0
                                : r.data.name) && void 0 !== n
                            ? n
                            : "Unknown"
                        ),
                    ];
                  })
                ),
                title: "Choose Pet",
                text: e,
              })).value;
            });
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          new o.Hack(o.category.pets, "Edit Pet", "Edit a pet.").setClick(
            i(function* () {
              var e = yield l("Choose the pet to edit.");
              if (void 0 !== e) {
                var t = _.player.kennel.data[e],
                  o = yield n.Swal.fire({
                    input: "select",
                    inputOptions: {
                      level: "Level",
                      attacks: "Attacks",
                      name: "Name",
                    },
                    title: "Edit Property",
                    text: "What do you want to edit?",
                  });
                if (void 0 !== o.value)
                  if ("level" === o.value) {
                    var r = yield n.NumberInput.fire(
                      "Level Number",
                      "What level do you want to set your pet to?",
                      "question"
                    );
                    if (void 0 === r.value) return;
                    (t.level = +r.value),
                      yield n.Toast.fire(
                        "Success!",
                        "The pet's level has been set.",
                        "success"
                      );
                  } else if ("attacks" === o.value) {
                    var i = a.gameData.spell,
                      s = document.createElement("div"),
                      c = document.createElement("select");
                    for (var u of (c.classList.add("selectSpell"), i)) {
                      var d = document.createElement("option");
                      (d.value = u.ID.toString()),
                        (d.innerText = ""
                          .concat(u.ID, ": ")
                          .concat(u.name, " (")
                          .concat(u.data.element, ") - Damage: ")
                          .concat(u.data.damage)),
                        c.options.add(d);
                    }
                    s.append(c), s.append(c.cloneNode(!0));
                    var p = yield n.Swal.fire({
                      title: "Attack List",
                      focusConfirm: !1,
                      showCancelButton: !0,
                      html: s,
                      preConfirm: () =>
                        Array.prototype.slice
                          .call(document.querySelectorAll(".selectSpell"))
                          .map((e) => e.options[e.selectedIndex].value),
                    });
                    if (void 0 === p.value) return;
                    t.foreignSpells.splice(0, 2, ...p.value.map((e) => +e)),
                      yield n.Toast.fire(
                        "Attacks updated!",
                        "The attack list of the pet you selected has been edited.",
                        "success"
                      );
                  } else if ("name" === o.value) {
                    var m = yield n.Input.fire(
                      "Input Name",
                      "What do you want to name the pet?",
                      "question"
                    );
                    if (void 0 === m.value) return;
                    (t.nickname = m.value),
                      yield n.Swal.fire(
                        "Successfully renamed!",
                        "The name of the pet has been changed.",
                        "success"
                      );
                  }
              }
            })
          ),
            new o.Hack(o.category.pets, "Delete Pet", "Delete a pet.").setClick(
              i(function* () {
                var e = yield l("Which pet do you wish to delete?");
                void 0 !== e &&
                  (_.player.kennel.data.splice(e, 1),
                  yield n.Swal.fire(
                    "Successfully deleted!",
                    "The selected pet was deleted successfully.",
                    "success"
                  ));
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o, a;
    function r(e, t, n, o, a, r, i) {
      try {
        var s = e[r](i),
          l = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(o, a);
    }
    function i(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, n);
          function s(e) {
            r(i, o, a, s, l, "next", e);
          }
          function l(e) {
            r(i, o, a, s, l, "throw", e);
          }
          s(void 0);
        });
      };
    }
    (o = [n, t, n(2), n(1), n(0), n(0)]),
      void 0 ===
        (a = function (e, t, n, o, a, r) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
            new o.Hack(o.category.player, "Set Gold").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Gold Amount",
                  "What number do you want to set your gold to?",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.data.gold = +e.value),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "You now have ".concat(e.value, " gold."),
                    "success"
                  ));
              })
            ),
            new o.Hack(o.category.player, "Set Level").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Level",
                  "What number do you want to set your level to?",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.data.level = +e.value),
                  (_.player.getLevel = () => _.player.data.level),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "You are now level ".concat(e.value, "."),
                    "success"
                  ));
              })
            ),
            new o.Hack(o.category.player, "Set Bounty Points").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Bounty Points",
                  "What number do you want to set your bounty points to? (Max is 100)",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.data.bountyScore = Math.min(+e.value, 100)),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "You now have ".concat(
                      _.player.data.bountyScore,
                      " bounty points."
                    ),
                    "success"
                  ));
              })
            ),
            new o.Hack(o.category.player, "Obtain Conjure Cubes").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Conjure Cubes",
                  "How many conjure cubes do you want to get?",
                  "question"
                );
                if (void 0 !== e.value) {
                  for (var t = 0; t < Math.min(99, +e.value); t++)
                    r.prodigy.giftBoxController.receiveGiftBox(
                      null,
                      a.getItem("giftBox", 1)
                    );
                  a.savePlayer(),
                    yield n.Toast.fire(
                      "Success!",
                      "You now have ".concat(e.value, " clojure cubes."),
                      "success"
                    );
                }
              })
            ),
            new o.Hack(o.category.player, "Set Wins").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Wins",
                  "What number do you want to set your wins to?",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.data.win = +e.value),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "You now have ".concat(e.value, " wins."),
                    "success"
                  ));
              })
            ),
            new o.Hack(o.category.player, "Set Losses").setClick(
              i(function* () {
                var e = yield n.NumberInput.fire(
                  "Losses",
                  "What number do you want to set your losses to?",
                  "question"
                );
                void 0 !== e.value &&
                  ((_.player.data.loss = +e.value),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "You now have ".concat(e.value, " losses."),
                    "success"
                  ));
              })
            ),
            new o.Hack(o.category.player, "Instant Kill").setClick(
              i(function* () {
                (_.player.modifiers.damage = a.VERY_LARGE_NUMBER),
                  a.savePlayer(),
                  yield n.Toast.fire(
                    "Success!",
                    "Instant kill is now enabled!",
                    "success"
                  );
              })
            ),
            new o.Hack(o.category.player, "PVP Health").setClick(
              i(function* () {
                (_.player.pvpHP = a.VERY_LARGE_NUMBER),
                  (_.player.getMaxHearts = () => a.VERY_LARGE_NUMBER),
                  yield n.Toast.fire(
                    "Success!",
                    "You now have lots of health!",
                    "success"
                  );
              })
            ),
            new o.Hack(
              o.category.player,
              "Change Name",
              "Change the name of your wizard."
            ).setClick(
              i(function* () {
                var e = a.gameData.name,
                  t = document.createElement("div"),
                  o = (e, t) => {
                    var n = document.createElement("select");
                    for (var o of (n.classList.add("selectName"),
                    e.entries())) {
                      var a = document.createElement("option");
                      (a.value = o[0]),
                        (a.innerText = o[1]),
                        t(a.value) && (a.selected = !0),
                        n.options.add(a);
                    }
                    return n;
                  },
                  r = (t, n) =>
                    o(
                      new Map(
                        e
                          .filter((e) => e.data.type === t)
                          .map((e) => [e.ID.toString(), e.name])
                      ),
                      (e) => n(+e)
                    );
                t.append(r(0, (e) => e === _.player.name.data.firstName)),
                  t.append(r(1, (e) => e === _.player.name.data.middleName)),
                  t.append(r(2, (e) => e === _.player.name.data.lastName)),
                  t.append(
                    o(
                      new Map(
                        [["null", "[none]"]].concat(
                          a.gameData.nickname.map((e) => [
                            e.ID.toString(),
                            e.name,
                          ])
                        )
                      ),
                      (e) =>
                        +e === _.player.name.data.nickname ||
                        String(_.player.name.data.nickname) === e
                    )
                  );
                var i = yield n.Swal.fire({
                  title: "Set Player Name",
                  focusConfirm: !1,
                  showCancelButton: !0,
                  html: t,
                  preConfirm: () =>
                    Array.prototype.slice
                      .call(document.querySelectorAll(".selectName"))
                      .map((e) => e.options[e.selectedIndex].value),
                });
                void 0 !== i.value &&
                  ("null" === i.value[3] && (i.value[3] = null),
                  ([
                    _.player.name.data.firstName,
                    _.player.name.data.middleName,
                    _.player.name.data.lastName,
                    _.player.name.data.nickname,
                  ] = i.value.map((e) => e && +e)),
                  yield n.Toast.fire(
                    "Name Changed!",
                    "Your name was successfully changed.",
                    "success"
                  ));
              })
            );
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    var o, a;
    (o = [n, t, n(1)]),
      void 0 ===
        (a = function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
        }.apply(t, o)) || (e.exports = a);
  },
  function (e, t, n) {
    "use strict";
    window.addEventListener("keydown", (e) => {});
  },
]);
