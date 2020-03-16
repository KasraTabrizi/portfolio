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
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ "../../../../node_modules/react-icons/go/index.esm.js");
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
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "pics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("img", {
    src: "/skills.png",
    alt: "Skills",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("img", {
    src: "/ali.png",
    alt: "About",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoTools"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4069619743",
    __self: this
  }, "img.jsx-4069619743{margin-top:60px;width:250px;height:250px;-webkit-filter:grayscale(100%);filter:grayscale(100%);}.pics.jsx-4069619743{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:70px;}.overlay.jsx-4069619743{width:100%;height:100%;position:absolute;background-color:rgb(128,125,125);top:100%;}.image-wrapper.jsx-4069619743{position:relative;margin:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q2tCLEFBRzJCLEFBTUgsQUFNRixBQU9PLFdBTk4sS0FaQSxFQW1CQSxLQU5NLEtBWkwsRUFtQkcsV0FsQk8sQUFZYSxLQU90Qyw0QkFmYSxDQVNGLFNBQ1gsQ0FUK0IsVUFKL0IsaUhBS2tCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXFBpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHsgR29Ub29scyB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5cclxuY29uc3QgUGljcyA9ICgpID0+IHtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoXCJDbGljayBNZVwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1ib3R0b21cIik7XHJcbiAgICB3cmFwcGVyLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgIGRhdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBvdmVybGF5ID0gYC4ke2UuY3VycmVudFRhcmdldC5pbm5lclRleHR9YDtcclxuICAgICAgICBnc2FwLnRvKG92ZXJsYXksIDEsIHsgeTogXCItMTAwJVwiIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBvdmVybGF5ID0gYC4ke2UuY3VycmVudFRhcmdldC5pbm5lclRleHR9YDtcclxuICAgICAgICBnc2FwLnRvKG92ZXJsYXksIDEsIHsgeTogXCIxMDAlXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSBTa2lsbHNcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3NraWxscy5wbmdcIiBhbHQ9XCJTa2lsbHNcIj48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSBBYm91dFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYWxpLnBuZ1wiIGFsdD1cIkFib3V0XCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgQ29udGFjdFwiPjwvZGl2PlxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2NvbnRhY3QucG5nXCIgYWx0PVwiQ29udGFjdFwiPjwvaW1nPiAqL31cclxuICAgICAgICAgIDxHb1Rvb2xzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWNzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjUsIDEyNSk7XHJcbiAgICAgICAgICB0b3A6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS13cmFwcGVyIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljcztcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\Pics.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pics);

/***/ })

})
//# sourceMappingURL=index.js.1db3d915c2505ec66bf9.hot-update.js.map