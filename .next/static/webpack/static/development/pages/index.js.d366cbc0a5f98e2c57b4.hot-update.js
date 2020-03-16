webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./comps/navBottom.js":
/*!****************************!*\
  !*** ./comps/navBottom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\navBottom.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var NavBottom = function NavBottom() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      animation = _useState[0],
      setAnimation = _useState[1];

  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelectorAll(".nav-bottom").forEach(function (data) {
      data.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.currentTarget.innerText === "Contact") {
          tl.play();
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".pics", 2.5, {
            x: -1900
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".nav-bottom", 2.5, {
            x: -1900
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".contact-wrapper", 1, {
            x: 230,
            delay: 0.5,
            display: "block"
          }));
        }

        if (e.currentTarget.innerText === "About") {
          tl.play();
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".pics", 3, {
            y: -1900,
            opacity: 0
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".nav-bottom", 3, {
            y: -1900,
            opacity: 0
          }));
          setAnimation(tl.to(".about-wrapper", 1, {
            y: -340,
            delay: 0.5,
            display: "block"
          }).to(".intro-header", 3, {
            x: 0,
            delay: -10
          }));
        }

        if (e.currentTarget.innerText === "Skills") {
          tl.play();
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".pics", 3, {
            y: -1900
          }));
          /*setAnimation(gsap.to(".nav-bottom", 3, { y: -1900 })); */

          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".skills-wrapper", 1, {
            x: 200,
            delay: 0.5
          }));
        }
      });
    });
  }, []);
  return __jsx("div", {
    className: "jsx-3965599631" + " " + "nav-links-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Skills"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "About"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Contact"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3965599631",
    __self: this
  }, "a.jsx-3965599631,a.jsx-3965599631:link{-webkit-text-decoration:none;text-decoration:none;color:gray;}.nav-links-bottom.jsx-3965599631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:15px;font-size:20px;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631{color:rgb(155,152,152);opacity:0.5;position:relative;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:before{content:\"\";position:absolute;width:0;height:2px;bottom:0;right:0;background-color:#fff;visibility:hidden;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover.jsx-3965599631:before{visibility:visible;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbmF2Qm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEa0IsQUFJZ0MsQUFJUixBQU9ZLEFBS2QsQUFZUSxBQUtFLFdBaEJILFFBWVAsSUFqQkMsTUFNSixDQVlWLEtBakJvQixFQU1QLFdBQ0YsRUFuQkUsR0FhYixJQU9VLElBbkJWLElBb0J3QixTQWpCTyxDQTZCbkIsVUFDWixFQVpvQixrQkFDYyx3RUFDbEMsb0JBbkJrQixnQkFDRCxlQUNKLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFx3ZWxpZFxcRG9jdW1lbnRzXFxjb2RlZm9sZGVyXFxyZWFjdCBuZXh0LmpzXFxwb3J0Zm9saW9cXGNvbXBzXFxuYXZCb3R0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdkJvdHRvbSA9ICgpID0+IHtcclxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJvdHRvbVwiKS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAyLjUsIHsgeDogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAyLjUsIHsgeDogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBnc2FwLnRvKFwiLmNvbnRhY3Qtd3JhcHBlclwiLCAxLCB7XHJcbiAgICAgICAgICAgICAgeDogMjMwLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJBYm91dFwiKSB7XHJcbiAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oZ3NhcC50byhcIi5waWNzXCIsIDMsIHsgeTogLTE5MDAsIG9wYWNpdHk6IDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAzLCB7IHk6IC0xOTAwLCBvcGFjaXR5OiAwIH0pKTtcclxuICAgICAgICAgIHNldEFuaW1hdGlvbihcclxuICAgICAgICAgICAgdGxcclxuICAgICAgICAgICAgICAudG8oXCIuYWJvdXQtd3JhcHBlclwiLCAxLCB7XHJcbiAgICAgICAgICAgICAgICB5OiAtMzQwLFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IDAuNSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLnRvKFwiLmludHJvLWhlYWRlclwiLCAzLCB7IHg6IDAsIGRlbGF5OiAtMTAgfSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0ID09PSBcIlNraWxsc1wiKSB7XHJcbiAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oZ3NhcC50byhcIi5waWNzXCIsIDMsIHsgeTogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgLypzZXRBbmltYXRpb24oZ3NhcC50byhcIi5uYXYtYm90dG9tXCIsIDMsIHsgeTogLTE5MDAgfSkpOyAqL1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBnc2FwLnRvKFwiLnNraWxscy13cmFwcGVyXCIsIDEsIHtcclxuICAgICAgICAgICAgICB4OiAyMDAsXHJcbiAgICAgICAgICAgICAgZGVsYXk6IDAuNVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1saW5rcy1ib3R0b21cIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWJvdHRvbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgU2tpbGxzXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWJvdHRvbVwiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgQWJvdXRcclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtYm90dG9tXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICBDb250YWN0XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGEsXHJcbiAgICAgICAgYTpsaW5rIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLWJvdHRvbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGlua3MtYm90dG9tIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxNTUsIDE1MiwgMTUyKTtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYTpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtbGlua3MtYm90dG9tIGE6aG92ZXI6YmVmb3JlIHtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtbGlua3MtYm90dG9tIGE6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCb3R0b207XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\navBottom.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBottom);

/***/ })

})
//# sourceMappingURL=index.js.d366cbc0a5f98e2c57b4.hot-update.js.map