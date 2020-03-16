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
    className: "jsx-4069619743" + " " + "swipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "pics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("img", {
    src: "/skills.png",
    alt: "Skills",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("img", {
    src: "/ali.png",
    alt: "About",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/contact-chat",
    alt: "Contact",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4069619743",
    __self: this
  }, "img.jsx-4069619743{margin-top:60px;width:250px;height:250px;-webkit-filter:grayscale(100%);filter:grayscale(100%);}.pics.jsx-4069619743{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:70px;}.overlay.jsx-4069619743{width:100%;height:100%;position:absolute;background-color:rgb(128,125,125);top:100%;}.image-wrapper.jsx-4069619743{position:relative;margin:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBRzJCLEFBTUgsQUFNRixBQU9PLFdBTk4sS0FaQSxFQW1CQSxLQU5NLEtBWkwsRUFtQkcsV0FsQk8sQUFZYSxLQU90Qyw0QkFmYSxDQVNGLFNBQ1gsQ0FUK0IsVUFKL0IsaUhBS2tCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXFBpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IFBpY3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKFwiQ2xpY2sgTWVcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYm90dG9tXCIpO1xyXG4gICAgd3JhcHBlci5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiLTEwMCVcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiMTAwJVwiIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgU2tpbGxzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9za2lsbHMucG5nXCIgYWx0PVwiU2tpbGxzXCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgQWJvdXRcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2FsaS5wbmdcIiBhbHQ9XCJBYm91dFwiPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5IENvbnRhY3RcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnRhY3QtY2hhdFwiIGFsdD1cIkNvbnRhY3RcIj48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpY3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyNSwgMTI1KTtcclxuICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWNzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\Pics.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pics);

/***/ })

})
//# sourceMappingURL=index.js.8dfaf03fff52533393fa.hot-update.js.map