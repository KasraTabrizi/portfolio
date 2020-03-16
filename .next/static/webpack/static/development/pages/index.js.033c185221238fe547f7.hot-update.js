webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./comps/Pics.js":
/*!***********************!*\
  !*** ./comps/Pics.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\Pics.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Pics = function Pics() {
  var tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Click Me"),
      test = _useState[0],
      setTest = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var wrapper = document.querySelectorAll(".nav-bottom");
    wrapper.forEach(function (data) {
      data.addEventListener("mouseenter", function (e) {
        var overlay = ".".concat(e.currentTarget.innerText);
        gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(overlay, 1, {
          y: "-100%"
        });
      });
      data.addEventListener("mouseleave", function (e) {
        var overlay = ".".concat(e.currentTarget.innerText);
        gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(overlay, 1, {
          y: "100%"
        });
      });
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1399254850" + " " + "swipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1399254850" + " " + "pics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1399254850" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1399254850" + " " + "overlay Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("img", {
    src: "/skills.png",
    alt: "Skills",
    className: "jsx-1399254850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1399254850" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1399254850" + " " + "overlay About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("img", {
    src: "/ali.png",
    alt: "About",
    className: "jsx-1399254850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1399254850" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1399254850" + " " + "overlay Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/contact.png",
    alt: "Contact",
    className: "jsx-1399254850",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1399254850",
    __self: this
  }, "img.jsx-1399254850{margin-top:60px;width:250px;height:250px;-webkit-filter:grayscale(100%);filter:grayscale(100%);-webkit-filter:drop-shadow(8px 10px white);filter:drop-shadow(8px 10px white);}.pics.jsx-1399254850{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:70px;}.overlay.jsx-1399254850{width:100%;height:100%;position:absolute;background-color:rgb(128,125,125);top:100%;}.image-wrapper.jsx-1399254850{position:relative;margin:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBRzJCLEFBT0gsQUFNRixBQU9PLFdBTk4sS0FiQSxFQW9CQSxLQU5NLEtBYkwsRUFvQkcsV0FuQk8sQUFhYSxLQU90Qyw0QkFmYSxDQVNGLFNBQ1gsQ0FUK0IsVUFMTSw4RUFDckMsbUNBS2tCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXFBpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IFBpY3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKFwiQ2xpY2sgTWVcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYm90dG9tXCIpO1xyXG4gICAgd3JhcHBlci5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiLTEwMCVcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiMTAwJVwiIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgU2tpbGxzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9za2lsbHMucG5nXCIgYWx0PVwiU2tpbGxzXCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgQWJvdXRcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2FsaS5wbmdcIiBhbHQ9XCJBYm91dFwiPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5IENvbnRhY3RcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnRhY3QucG5nXCIgYWx0PVwiQ29udGFjdFwiPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyg4cHggMTBweCB3aGl0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWNzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjUsIDEyNSk7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\Pics.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pics);

/***/ })

})
//# sourceMappingURL=index.js.033c185221238fe547f7.hot-update.js.map