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
    className: "jsx-505255106" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-505255106" + " " + "contact-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-505255106" + " " + "contact-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "X"), __jsx("form", {
    action: "https://formspree.io/welidlabidi@gmail.com",
    method: "POST",
    className: "jsx-505255106" + " " + "form",
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
    className: "jsx-505255106" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-505255106" + " " + "space",
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
    className: "jsx-505255106" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-505255106" + " " + "space",
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
    className: "jsx-505255106" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-505255106" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-505255106" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Send")), __jsx("div", {
    className: "jsx-505255106" + " " + "contactnaam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-505255106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Name:", __jsx("i", {
    className: "jsx-505255106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " Welid Labidi")), __jsx("p", {
    className: "jsx-505255106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Email:", __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    className: "jsx-505255106",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Welidlabidi@gmail.com"))), __jsx("div", {
    className: "jsx-505255106" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-505255106" + " " + "github-icon",
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
    className: "jsx-505255106" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/welid-labidi-086041187/",
    className: "jsx-505255106" + " " + "linkedin-icon",
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
    className: "jsx-505255106" + " " + "space-icon",
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
    className: "jsx-505255106",
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
    id: "505255106",
    __self: this
  }, "a.jsx-505255106,a.jsx-505255106:link{-webkit-text-decoration:none;text-decoration:none;color:black;}.contact-wrapper.jsx-505255106{width:800px;height:400px;position:absolute;background-color:rgb(145,139,139);border-radius:50px;}.contact-wrapper.jsx-505255106 button.jsx-505255106{margin-top:30px;margin-left:750px;background-color:transparent;border:none;}.form.jsx-505255106{position:relative;width:40%;margin-left:20px;margin-top:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn.jsx-505255106{border-radius:10px;border:none;width:125px;height:35px;cursor:pointer;}.input.jsx-505255106{border:none;border-radius:10px;padding:5px;background:rgb(199,196,196);}.contactnaam.jsx-505255106{position:fixed;-webkit-transform:translate(190%,-195%);-ms-transform:translate(190%,-195%);transform:translate(190%,-195%);color:white;z-index:1000;width:auto;font-size:20px;font-style:italic;}.contactnaam.jsx-505255106 i.jsx-505255106{color:black;}.space.jsx-505255106{padding:10px;}.space-icon.jsx-505255106{padding:20px;}.icons.jsx-505255106{position:fixed;-webkit-transform:translate(270%,-140%);-ms-transform:translate(270%,-140%);transform:translate(270%,-140%);font-size:35px;}.github-icon.jsx-505255106{color:lightgreen;}.linkedin-icon.jsx-505255106{color:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBSWdDLEFBSVQsQUFTSSxBQU1FLEFBUUMsQUFPUCxBQU1HLEFBU0gsQUFHQyxBQUdBLEFBR0UsQUFLRSxBQUdILFlBN0RELEFBOEJNLEFBZXJCLENBR0EsQUFHQSxDQVdBLENBMUJtQyxBQWtCQSxDQTdDZixDQWtEcEIsQ0E1Q1ksQ0FRRSxNQXRCTSxHQWVELEdBUUwsQUFPQSxHQXJCaUIsU0FSTyxBQXVCeEIsQUFPa0IsRUFmYixLQXJCTCxLQThCRyxPQTdCakIsQUFxQmUsQ0FQRCxPQWdCZCxDQU1BLElBckJBLEVBUnFCLG1CQUVyQiwyQkErQmMsQUFrQkcsWUFqQkYsQ0FuQlMsRUFxQ3hCLFVBakJhLFdBQ0ksZUFDRyxrQkFDcEIsc0JBdEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvTWFya0dpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBGYUxpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zTWFpbCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1YXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3NhcC50byhcIi5waWNzXCIsIDEuNSwgeyB4OiAwLCBkZWxheTogMC41IH0pO1xyXG4gICAgICBnc2FwLnRvKFwiLm5hdi1ib3R0b21cIiwgMS41LCB7IHg6IDAsIGRlbGF5OiAwLjUgfSk7XHJcbiAgICAgIGdzYXAudG8oXCIuY29udGFjdC13cmFwcGVyXCIsIDEsIHsgeDogMTUwMCwgZGlzcGxheTogXCJub25lXCIgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtd3JhcHBlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29udGFjdC1YXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby93ZWxpZGxhYmlkaUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cIk51bWJlclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJNYXNzZWdlXCJcclxuICAgICAgICAgICAgcm93cz1cIjRcIlxyXG4gICAgICAgICAgICBjb2xzPVwiMjNcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0blwiPlxyXG4gICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0bmFhbVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIE5hbWU6XHJcbiAgICAgICAgICAgIDxpPiBXZWxpZCBMYWJpZGk8L2k+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCI+V2VsaWRsYWJpZGlAZ21haWwuY29tPC9hPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2VsaWRsYWJpZGlcIiBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiPlxyXG4gICAgICAgICAgICA8R29NYXJrR2l0aHViIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZS1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi93ZWxpZC1sYWJpZGktMDg2MDQxMTg3L1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluLWljb25cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFMaW5rZWRpbiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2UtaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86d2VsaWRsYWJpZGlAZ21haWwuY29tXCIgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+XHJcbiAgICAgICAgICAgIDxJb0lvc01haWwgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhLFxyXG4gICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDEzOSwgMTM5KTtcclxuICAgICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIzMCUsIC04MCUpOyAqL1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgIC8qICBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdC13cmFwcGVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDc1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JtIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCAxOTYsIDE5Nik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0bmFhbSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOTAlLCAtMTk1JSk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0bmFhbSBpIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYWNlIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGFjZS1pY29uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNzAlLCAtMTQwJSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXRodWItaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtlZGluLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHNreWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.20837cc37bd5c7ada035.hot-update.js.map