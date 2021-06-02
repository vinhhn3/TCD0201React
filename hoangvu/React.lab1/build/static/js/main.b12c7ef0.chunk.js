(this.webpackJsonpworkshop = this.webpackJsonpworkshop || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(1),
        s = n.n(c),
        r = n(3),
        i = n.n(r),
        l = (n(12), n(13), n(14), n(15), n(0));
      var a = function (e) {
        var t = e.children,
          n = e.url;
        return Object(l.jsx)("li", {
          className: "listItem",
          children: Object(l.jsx)("a", { href: n, children: t }),
        });
      };
      var o = function () {
        return Object(l.jsx)("nav", {
          className: "Navigation",
          children: Object(l.jsxs)("ul", {
            children: [
              Object(l.jsx)(a, {
                url: "#",
                children: Object(l.jsx)("img", {
                  id: "logo",
                  src: "/logo192.png",
                  alt: "my-app-logo",
                }),
              }),
              Object(l.jsx)(a, { url: "#", children: "Link 1" }),
              Object(l.jsx)(a, { url: "#", children: "Link 2" }),
            ],
          }),
        });
      };
      n(17);
      var j = function (e) {
        var t = e.children,
          n = e.title;
        return Object(l.jsxs)("div", {
          className: "Main",
          children: [Object(l.jsx)("h1", { children: n }), t],
        });
      };
      n(18);
      var u = function () {
          return Object(l.jsx)("aside", {
            className: "Aside",
            children: Object(l.jsxs)("ul", {
              children: [
                Object(l.jsx)(a, { url: "#", children: "Aside Link 1" }),
                Object(l.jsx)(a, { url: "#", children: "Asdie Link 2" }),
              ],
            }),
          });
        },
        d = n(4),
        h = n(5),
        b = n(7),
        x = n(6);
      n(19), n(20);
      var O = function (e) {
          var t = e.imageUrl,
            n = e.imageAlt,
            c = e.children,
            s = e.author;
          return Object(l.jsxs)("div", {
            className: "Post",
            children: [
              Object(l.jsx)("img", { src: t, alt: n }),
              Object(l.jsx)("p", { className: "description", children: c }),
              Object(l.jsx)("div", {
                children: Object(l.jsxs)("span", {
                  children: [
                    Object(l.jsx)("small", { children: "Author:" }),
                    s,
                  ],
                }),
              }),
            ],
          });
        },
        p = {
          load: function (e) {
            return fetch(
              "https://jsonplaceholder.typicode.com/posts".concat(
                e ? "/".concat(e) : ""
              )
            ).then(function (e) {
              return e.json();
            });
          },
        },
        f = (function (e) {
          Object(b.a)(n, e);
          var t = Object(x.a)(n);
          function n() {
            var e;
            Object(d.a)(this, n);
            for (var c = arguments.length, s = new Array(c), r = 0; r < c; r++)
              s[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = { posts: null }),
              (e.textInput = null),
              (e.setTextInputRef = function (t) {
                e.textInput = t;
              }),
              (e.inputChangeHandler = function (e) {
                console.log(e.target.value);
              }),
              e
            );
          }
          return (
            Object(h.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  p.load().then(function (t) {
                    e.setState({ posts: t });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.posts;
                  return Object(l.jsxs)("div", {
                    children: [
                      Object(l.jsx)("input", {
                        type: "text",
                        ref: this.setTextInputRef,
                        onChange: this.inputChangeHandler,
                      }),
                      e
                        ? Object(l.jsx)("div", {
                            className: "Posts",
                            children: e.map(function (e) {
                              return Object(l.jsx)(
                                O,
                                {
                                  imageUrl: "/logo192.png",
                                  imageAlt: "alt",
                                  author: e.userId,
                                  children: e.body,
                                },
                                e.id
                              );
                            }),
                          })
                        : Object(l.jsx)("div", { children: "Loading..." }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(s.a.Component);
      n(21);
      var v = function () {
        return Object(l.jsx)("nav", {
          className: "Footer",
          children: Object(l.jsxs)("ul", {
            children: [
              Object(l.jsx)(a, { url: "#", children: "Link 1" }),
              Object(l.jsx)(a, { url: "#", children: "Link 2" }),
              Object(l.jsx)(a, {
                url: "#",
                children: Object(l.jsx)("img", {
                  id: "logo",
                  src: "/logo192.png",
                  alt: "my-app-logo",
                }),
              }),
            ],
          }),
        });
      };
      var m = function () {
        return Object(l.jsxs)("div", {
          className: "App",
          children: [
            Object(l.jsx)(o, {}),
            Object(l.jsxs)("div", {
              className: "Container",
              children: [
                Object(l.jsx)(u, {}),
                Object(l.jsx)(j, {
                  title: "Hello!",
                  children: Object(l.jsx)(f, {}),
                }),
              ],
            }),
            Object(l.jsx)(v, {}),
          ],
        });
      };
      i.a.render(Object(l.jsx)(m, {}), document.getElementById("root"));
    },
  ],
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.b12c7ef0.chunk.js.map
