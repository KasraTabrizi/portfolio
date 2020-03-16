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
            y: -1900
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".nav-bottom", 3, {
            y: -1900
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".about-wrapper", 1, {
            y: -340,
            delay: 0.5,
            display: "block"
          }));
        }

        if (e.currentTarget.innerText === "Skills") {
          tl.play();
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".pics", 3, {
            y: -1900
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".nav-bottom", 3, {
            y: -1900
          }));
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
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Skills"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "About"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Contact"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3965599631",
    __self: this
  }, "a.jsx-3965599631,a.jsx-3965599631:link{-webkit-text-decoration:none;text-decoration:none;color:gray;}.nav-links-bottom.jsx-3965599631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:15px;font-size:20px;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631{color:rgb(155,152,152);opacity:0.5;position:relative;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:before{content:\"\";position:absolute;width:0;height:2px;bottom:0;right:0;background-color:#fff;visibility:hidden;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover.jsx-3965599631:before{visibility:visible;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbmF2Qm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREa0IsQUFJZ0MsQUFJUixBQU9ZLEFBS2QsQUFZUSxBQUtFLFdBaEJILFFBWVAsSUFqQkMsTUFNSixDQVlWLEtBakJvQixFQU1QLFdBQ0YsRUFuQkUsR0FhYixJQU9VLElBbkJWLElBb0J3QixTQWpCTyxDQTZCbkIsVUFDWixFQVpvQixrQkFDYyx3RUFDbEMsb0JBbkJrQixnQkFDRCxlQUNKLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFx3ZWxpZFxcRG9jdW1lbnRzXFxjb2RlZm9sZGVyXFxyZWFjdCBuZXh0LmpzXFxwb3J0Zm9saW9cXGNvbXBzXFxuYXZCb3R0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdkJvdHRvbSA9ICgpID0+IHtcclxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJvdHRvbVwiKS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAyLjUsIHsgeDogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAyLjUsIHsgeDogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBnc2FwLnRvKFwiLmNvbnRhY3Qtd3JhcHBlclwiLCAxLCB7XHJcbiAgICAgICAgICAgICAgeDogMjMwLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJBYm91dFwiKSB7XHJcbiAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oZ3NhcC50byhcIi5waWNzXCIsIDMsIHsgeTogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAzLCB7IHk6IC0xOTAwIH0pKTtcclxuICAgICAgICAgIHNldEFuaW1hdGlvbihcclxuICAgICAgICAgICAgZ3NhcC50byhcIi5hYm91dC13cmFwcGVyXCIsIDEsIHtcclxuICAgICAgICAgICAgICB5OiAtMzQwLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJTa2lsbHNcIikge1xyXG4gICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAzLCB7IHk6IC0xOTAwIH0pKTtcclxuICAgICAgICAgIHNldEFuaW1hdGlvbihnc2FwLnRvKFwiLm5hdi1ib3R0b21cIiwgMywgeyB5OiAtMTkwMCB9KSk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oXHJcbiAgICAgICAgICAgIGdzYXAudG8oXCIuc2tpbGxzLXdyYXBwZXJcIiwgMSwge1xyXG4gICAgICAgICAgICAgIHg6IDIwMCxcclxuICAgICAgICAgICAgICBkZWxheTogMC41XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzLWJvdHRvbVwiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtYm90dG9tXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICBTa2lsbHNcclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtYm90dG9tXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICBBYm91dFxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1ib3R0b21cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgIENvbnRhY3RcclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSxcclxuICAgICAgICBhOmxpbmsge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGlua3MtYm90dG9tIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDE1NSwgMTUyLCAxNTIpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLWJvdHRvbSBhOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYTpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYTpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJvdHRvbTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\navBottom.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBottom);

/***/ })

})
//# sourceMappingURL=index.js.c28552d1164cab49a755.hot-update.js.map