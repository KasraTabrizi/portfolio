webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./comps/contact.js":
/*!**************************!*\
  !*** ./comps/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/go */ "../../../../node_modules/react-icons/go/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "../../../../node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "../../../../node_modules/react-icons/io/index.esm.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Contact() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.querySelector(".contact-X").addEventListener("click", function () {
      setAnimation(gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".pics", 2.5, {
        x: 0
      }));
      setAnimation(gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".nav-bottom", 2.5, {
        x: 0
      }));
      setAnimation(gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".contact-wrapper", 1, {
        x: 230,
        delay: 0.5,
        display: "block"
      }));
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1054633282" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1054633282" + " " + "contact-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-1054633282" + " " + "contact-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "X"), __jsx("form", {
    action: "https://formspree.io/welidlabidi@gmail.com",
    method: "POST",
    className: "jsx-1054633282" + " " + "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    required: true,
    className: "jsx-1054633282" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1054633282" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "Number",
    placeholder: "Number",
    required: true,
    className: "jsx-1054633282" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1054633282" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    name: "Massege",
    rows: "4",
    cols: "23",
    placeholder: "Message",
    required: true,
    className: "jsx-1054633282" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1054633282" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1054633282" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Send")), __jsx("div", {
    className: "jsx-1054633282" + " " + "contactnaam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1054633282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Name:", __jsx("i", {
    className: "jsx-1054633282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " Welid Labidi")), __jsx("p", {
    className: "jsx-1054633282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Email:", __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    className: "jsx-1054633282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Welidlabidi@gmail.com"))), __jsx("div", {
    className: "jsx-1054633282" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-1054633282" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoMarkGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), __jsx("span", {
    className: "jsx-1054633282" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/welid-labidi-086041187/",
    className: "jsx-1054633282" + " " + "linkedin-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), __jsx("span", {
    className: "jsx-1054633282" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    style: {
      color: "red"
    },
    className: "jsx-1054633282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1054633282",
    __self: this
  }, "a.jsx-1054633282,a.jsx-1054633282:link{-webkit-text-decoration:none;text-decoration:none;color:black;}.contact-wrapper.jsx-1054633282{width:800px;height:400px;position:absolute;background-color:rgb(145,139,139);-webkit-transform:translate(230%,-80%);-ms-transform:translate(230%,-80%);transform:translate(230%,-80%);border-radius:50px;display:none;}.contact-wrapper.jsx-1054633282 button.jsx-1054633282{margin-top:30px;margin-left:750px;background-color:transparent;border:none;}.form.jsx-1054633282{position:relative;width:40%;margin-left:20px;margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn.jsx-1054633282{border-radius:10px;border:none;width:125px;height:35px;cursor:pointer;}.input.jsx-1054633282{border:none;border-radius:10px;padding:5px;background:rgb(199,196,196);}.contactnaam.jsx-1054633282{position:fixed;-webkit-transform:translate(190%,-195%);-ms-transform:translate(190%,-195%);transform:translate(190%,-195%);color:white;z-index:1000;width:auto;font-size:20px;font-style:italic;}.contactnaam.jsx-1054633282 i.jsx-1054633282{color:black;}.space.jsx-1054633282{padding:10px;}.space-icon.jsx-1054633282{padding:20px;}.icons.jsx-1054633282{position:fixed;-webkit-transform:translate(270%,-140%);-ms-transform:translate(270%,-140%);transform:translate(270%,-140%);font-size:35px;}.github-icon.jsx-1054633282{color:lightgreen;}.linkedin-icon.jsx-1054633282{color:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmtCLEFBSWdDLEFBSVQsQUFTSSxBQU1FLEFBUUMsQUFPUCxBQU1HLEFBU0gsQUFHQyxBQUdBLEFBR0UsQUFLRSxBQUdILFlBN0RELEFBOEJNLEFBZXJCLENBR0EsQUFHQSxDQVdBLENBMUJtQyxBQWtCQSxDQTdDZixDQWtEcEIsQ0E1Q1ksQ0FRRSxNQXRCTSxHQWVELEdBUUwsQUFPQSxHQXJCaUIsU0FSTyxBQXVCeEIsQUFPa0IsRUFmYixLQXJCTCxLQThCRyxPQTdCakIsQUFxQmUsQ0FQRCxPQWdCZCxDQU1BLElBckJBLEVBVGtDLDhDQWtDcEIsQUFrQkcsWUFqQkYsQ0FuQlMsRUFxQ3hCLFVBakJhLFdBQ0ksZUFDRyxRQXJDQyxVQXNDckIsU0FyQ2UsYUFDZixBQWNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvTWFya0dpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBGYUxpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1YXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAyLjUsIHsgeDogMCB9KSk7XHJcbiAgICAgIHNldEFuaW1hdGlvbihnc2FwLnRvKFwiLm5hdi1ib3R0b21cIiwgMi41LCB7IHg6IDAgfSkpO1xyXG4gICAgICBzZXRBbmltYXRpb24oXHJcbiAgICAgICAgZ3NhcC50byhcIi5jb250YWN0LXdyYXBwZXJcIiwgMSwge1xyXG4gICAgICAgICAgeDogMjMwLFxyXG4gICAgICAgICAgZGVsYXk6IDAuNSxcclxuICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGFjdC1YXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby93ZWxpZGxhYmlkaUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJNYXNzZWdlXCJcclxuICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICBjb2xzPVwiMjNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0bmFhbVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgIDxpPiBXZWxpZCBMYWJpZGk8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCI+V2VsaWRsYWJpZGlAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2VsaWRsYWJpZGlcIiBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiPlxyXG4gICAgICAgICAgICA8R29NYXJrR2l0aHViIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZS1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93ZWxpZC1sYWJpZGktMDg2MDQxMTg3L1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluLWljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2UtaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCIgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgIDxJb0lvc01haWwgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhLFxyXG4gICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDEzOSwgMTM5KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMCUsIC04MCUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LXdyYXBwZXIgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNzUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTksIDE5NiwgMTk2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RuYWFtIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE5MCUsIC0xOTUlKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3RuYWFtIGkge1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhY2Uge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYWNlLWljb24ge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb25zIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDI3MCUsIC0xNDAlKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdpdGh1Yi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua2VkaW4taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogc2t5Ymx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.ddda7d40fd68ac707482.hot-update.js.map