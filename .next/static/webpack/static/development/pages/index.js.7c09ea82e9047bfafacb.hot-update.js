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
    className: "jsx-882972738" + " " + "swipe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-882972738" + " " + "pics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-882972738" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-882972738" + " " + "overlay Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("img", {
    src: "/skills.png",
    alt: "Skills",
    className: "jsx-882972738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-882972738" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-882972738" + " " + "overlay About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("img", {
    src: "/ali.png",
    alt: "About",
    className: "jsx-882972738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-882972738" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-882972738" + " " + "overlay Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("img", {
    src: "/contact.png",
    alt: "Contact",
    className: "jsx-882972738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "882972738",
    __self: this
  }, "img.jsx-882972738{margin-top:60px;width:250px;height:250px;-webkit-filter:grayscale(100%),drop-shadow(8px 8px 10px white);filter:grayscale(100%),drop-shadow(8px 8px 10px white);}.pics.jsx-882972738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:70px;}.overlay.jsx-882972738{width:100%;height:100%;position:absolute;background-color:rgb(128,125,125);top:100%;}.image-wrapper.jsx-882972738{position:relative;margin:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBRzJCLEFBT0gsQUFNRixBQU9PLFdBTk4sS0FiQSxFQW9CQSxLQU5NLEtBYkwsRUFvQkcsV0FuQndDLEFBYXBCLEtBT3RDLDRCQWZhLENBU0YsU0FDWCxDQVQrQiwwRUFMckIsQUFDVixpREFLa0IsZ0JBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc3QgUGljcyA9ICgpID0+IHtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgY29uc3QgW3Rlc3QsIHNldFRlc3RdID0gdXNlU3RhdGUoXCJDbGljayBNZVwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1ib3R0b21cIik7XHJcbiAgICB3cmFwcGVyLmZvckVhY2goZGF0YSA9PiB7XHJcbiAgICAgIGRhdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBvdmVybGF5ID0gYC4ke2UuY3VycmVudFRhcmdldC5pbm5lclRleHR9YDtcclxuICAgICAgICBnc2FwLnRvKG92ZXJsYXksIDEsIHsgeTogXCItMTAwJVwiIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRhdGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBvdmVybGF5ID0gYC4ke2UuY3VycmVudFRhcmdldC5pbm5lclRleHR9YDtcclxuICAgICAgICBnc2FwLnRvKG92ZXJsYXksIDEsIHsgeTogXCIxMDAlXCIgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzd2lwZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSBTa2lsbHNcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL3NraWxscy5wbmdcIiBhbHQ9XCJTa2lsbHNcIj48L2ltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheSBBYm91dFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvYWxpLnBuZ1wiIGFsdD1cIkFib3V0XCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgQ29udGFjdFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvY29udGFjdC5wbmdcIiBhbHQ9XCJDb250YWN0XCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSksIGRyb3Atc2hhZG93KDhweCA4cHggMTBweCB3aGl0ZSk7XHJcbiAgICAgICAgICBmaWx0ZXI6IDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpY3Mge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyNSwgMTI1KTtcclxuICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLXdyYXBwZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWNzO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\Pics.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pics);

/***/ })

})
//# sourceMappingURL=index.js.7c09ea82e9047bfafacb.hot-update.js.map