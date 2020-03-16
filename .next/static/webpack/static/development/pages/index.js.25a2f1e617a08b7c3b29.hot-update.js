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
      gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".pics", 1.5, {
        x: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".nav-bottom", 1.5, {
        x: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5__["default"].to(".contact-wrapper", 1, {
        x: 1500,
        display: "none"
      });
    });
  }, []);
  return __jsx("div", {
    className: "jsx-1917472398" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1917472398" + " " + "contact-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-1917472398" + " " + "contact-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "X"), __jsx("form", {
    action: "https://formspree.io/welidlabidi@gmail.com",
    method: "POST",
    className: "jsx-1917472398" + " " + "form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    required: true,
    className: "jsx-1917472398" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1917472398" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("input", {
    type: "text",
    name: "Number",
    placeholder: "Number",
    required: true,
    className: "jsx-1917472398" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1917472398" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("textarea", {
    type: "text",
    name: "Massege",
    rows: "4",
    cols: "23",
    placeholder: "Message",
    required: true,
    className: "jsx-1917472398" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1917472398" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-1917472398" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Send")), __jsx("div", {
    className: "jsx-1917472398" + " " + "contactnaam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1917472398",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Name:", __jsx("i", {
    className: "jsx-1917472398",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " Welid Labidi")), __jsx("p", {
    className: "jsx-1917472398",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Email:", __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    className: "jsx-1917472398",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Welidlabidi@gmail.com"))), __jsx("div", {
    className: "jsx-1917472398" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-1917472398" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_2__["GoMarkGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), __jsx("span", {
    className: "jsx-1917472398" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/welid-labidi-086041187/",
    className: "jsx-1917472398" + " " + "linkedin-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx("span", {
    className: "jsx-1917472398" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    style: {
      color: "red"
    },
    className: "jsx-1917472398",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosMail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1917472398",
    __self: this
  }, "a.jsx-1917472398,a.jsx-1917472398:link{-webkit-text-decoration:none;text-decoration:none;color:black;}.contact-wrapper.jsx-1917472398{width:800px;height:400px;position:absolute;background-color:rgb(145,139,139);-webkit-transform:translate(230%,-80%);-ms-transform:translate(230%,-80%);transform:translate(230%,-80%);border-radius:50px;display:none;}.contact-wrapper.jsx-1917472398 button.jsx-1917472398{margin-top:30px;margin-left:750px;background-color:transparent;border:none;}.form.jsx-1917472398{position:relative;width:40%;margin-left:20px;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn.jsx-1917472398{border-radius:10px;border:none;width:125px;height:35px;cursor:pointer;}.input.jsx-1917472398{border:none;border-radius:10px;padding:5px;background:rgb(199,196,196);}.contactnaam.jsx-1917472398{position:fixed;-webkit-transform:translate(190%,-245%);-ms-transform:translate(190%,-245%);transform:translate(190%,-245%);color:white;z-index:1000;width:auto;font-size:20px;font-style:italic;}.contactnaam.jsx-1917472398 i.jsx-1917472398{color:black;}.space.jsx-1917472398{padding:10px;}.space-icon.jsx-1917472398{padding:20px;}.icons.jsx-1917472398{position:fixed;-webkit-transform:translate(270%,-300%);-ms-transform:translate(270%,-300%);transform:translate(270%,-300%);font-size:35px;}.github-icon.jsx-1917472398{color:lightgreen;}.linkedin-icon.jsx-1917472398{color:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBSWdDLEFBSVQsQUFTSSxBQU1FLEFBUUMsQUFPUCxBQU1HLEFBU0gsQUFHQyxBQUdBLEFBR0UsQUFLRSxBQUdILFlBN0RELEFBOEJNLEFBZXJCLENBR0EsQUFHQSxDQVdBLENBMUJtQyxBQWtCQSxDQTdDZixDQWtEcEIsQ0E1Q1ksQ0FRRSxNQXRCTSxHQWVELEdBUUwsQUFPQSxHQXJCaUIsU0FSTyxBQXVCeEIsQUFPa0IsRUFmZCxLQXJCSixLQThCRyxNQVJGLENBckJmLENBY2MsT0FnQmQsQ0FNQSxJQXJCQSxFQVRrQyw4Q0FrQ3BCLEFBa0JHLFlBcENPLEFBbUJULEdBa0JmLFVBakJhLFdBQ0ksZUFDRyxRQXJDQyxVQXNDckIsU0FyQ2UsWUFlZixDQWRBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvTWFya0dpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBGYUxpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1YXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3NhcC50byhcIi5waWNzXCIsIDEuNSwgeyB4OiAwLCBkZWxheTogMC41IH0pO1xyXG4gICAgICBnc2FwLnRvKFwiLm5hdi1ib3R0b21cIiwgMS41LCB7IHg6IDAsIGRlbGF5OiAwLjUgfSk7XHJcbiAgICAgIGdzYXAudG8oXCIuY29udGFjdC13cmFwcGVyXCIsIDEsIHsgeDogMTUwMCwgZGlzcGxheTogXCJub25lXCIgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGFjdC1YXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby93ZWxpZGxhYmlkaUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJNYXNzZWdlXCJcclxuICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICBjb2xzPVwiMjNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0bmFhbVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgIDxpPiBXZWxpZCBMYWJpZGk8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCI+V2VsaWRsYWJpZGlAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2VsaWRsYWJpZGlcIiBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiPlxyXG4gICAgICAgICAgICA8R29NYXJrR2l0aHViIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZS1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93ZWxpZC1sYWJpZGktMDg2MDQxMTg3L1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluLWljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2UtaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCIgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgIDxJb0lvc01haWwgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhLFxyXG4gICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDEzOSwgMTM5KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMCUsIC04MCUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LXdyYXBwZXIgYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNzUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE5OSwgMTk2LCAxOTYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdG5hYW0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTkwJSwgLTI0NSUpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdG5hYW0gaSB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGFjZSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhY2UtaWNvbiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWNvbnMge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjcwJSwgLTMwMCUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2l0aHViLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rZWRpbi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBza3libHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.25a2f1e617a08b7c3b29.hot-update.js.map