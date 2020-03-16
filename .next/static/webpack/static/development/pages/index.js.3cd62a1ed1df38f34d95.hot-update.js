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
    className: "jsx-3971127961" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3971127961" + " " + "contact-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3971127961" + " " + "contact-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "X"), __jsx("form", {
    action: "https://formspree.io/welidlabidi@gmail.com",
    method: "POST",
    className: "jsx-3971127961" + " " + "form",
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
    className: "jsx-3971127961" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3971127961" + " " + "space",
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
    className: "jsx-3971127961" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3971127961" + " " + "space",
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
    className: "jsx-3971127961" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-3971127961" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-3971127961" + " " + "btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Send")), __jsx("div", {
    className: "jsx-3971127961" + " " + "contactnaam",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3971127961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Name:", __jsx("i", {
    className: "jsx-3971127961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " Welid Labidi")), __jsx("p", {
    className: "jsx-3971127961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Email:", __jsx("a", {
    href: "mailto:welidlabidi@gmail.com",
    className: "jsx-3971127961",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Welidlabidi@gmail.com"))), __jsx("div", {
    className: "jsx-3971127961" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-3971127961" + " " + "github-icon",
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
    className: "jsx-3971127961" + " " + "space-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/welid-labidi-086041187/",
    className: "jsx-3971127961" + " " + "linkedin-icon",
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
    className: "jsx-3971127961" + " " + "space-icon",
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
    className: "jsx-3971127961",
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
    id: "3971127961",
    __self: this
  }, "a.jsx-3971127961,a.jsx-3971127961:link{-webkit-text-decoration:none;text-decoration:none;color:black;}.contact-wrapper.jsx-3971127961{width:800px;height:400px;position:absolute;background-color:rgb(145,139,139);-webkit-transform:translate(230%,-80%);-ms-transform:translate(230%,-80%);transform:translate(230%,-80%);border-radius:50px;}.contact-wrapper.jsx-3971127961 button.jsx-3971127961{margin-top:30px;margin-left:750px;background-color:transparent;border:none;}.form.jsx-3971127961{position:relative;width:40%;margin-left:20px;margin-top:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.btn.jsx-3971127961{border-radius:10px;border:none;width:125px;height:35px;cursor:pointer;}.input.jsx-3971127961{border:none;border-radius:10px;padding:5px;background:rgb(199,196,196);}.contactnaam.jsx-3971127961{position:fixed;-webkit-transform:translate(190%,-245%);-ms-transform:translate(190%,-245%);transform:translate(190%,-245%);color:white;z-index:1000;width:auto;font-size:20px;font-style:italic;}.contactnaam.jsx-3971127961 i.jsx-3971127961{color:black;}.space.jsx-3971127961{padding:10px;}.space-icon.jsx-3971127961{padding:20px;}.icons.jsx-3971127961{position:fixed;-webkit-transform:translate(270%,-300%);-ms-transform:translate(270%,-300%);transform:translate(270%,-300%);font-size:35px;}.github-icon.jsx-3971127961{color:lightgreen;}.linkedin-icon.jsx-3971127961{color:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRWtCLEFBSWdDLEFBSVQsQUFTSSxBQU1FLEFBUUMsQUFPUCxBQU1HLEFBU0gsQUFHQyxBQUdBLEFBR0UsQUFLRSxBQUdILFlBN0RELEFBOEJNLEFBZXJCLENBR0EsQUFHQSxDQVdBLENBMUJtQyxBQWtCQSxDQTdDZixDQWtEcEIsQ0E1Q1ksQ0FRRSxNQXRCTSxHQWVELEdBUUwsQUFPQSxHQXJCaUIsU0FSTyxBQXVCeEIsQUFPa0IsRUFmZCxLQXJCSixLQThCRyxNQVJGLENBckJmLENBY2MsT0FnQmQsQ0FNQSxJQXJCQSxFQVRrQyw4Q0FrQ3BCLEFBa0JHLFlBcENPLEFBbUJULEdBa0JmLFVBakJhLFdBQ0ksZUFDRyxRQXJDQyxVQXNDckIsU0FwQ0EsWUFjQSIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXGNvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb01hcmtHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuaW1wb3J0IHsgRmFMaW5rZWRpbiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBJb0lvc01haWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3QtWFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGdzYXAudG8oXCIucGljc1wiLCAxLjUsIHsgeDogMCwgZGVsYXk6IDAuNSB9KTtcclxuICAgICAgZ3NhcC50byhcIi5uYXYtYm90dG9tXCIsIDEuNSwgeyB4OiAwLCBkZWxheTogMC41IH0pO1xyXG4gICAgICBnc2FwLnRvKFwiLmNvbnRhY3Qtd3JhcHBlclwiLCAxLCB7IHg6IDE1MDAsIGRpc3BsYXk6IFwibm9uZVwiIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LXdyYXBwZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbnRhY3QtWFwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vd2VsaWRsYWJpZGlAZ21haWwuY29tXCJcclxuICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJOdW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk51bWJlclwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiTWFzc2VnZVwiXHJcbiAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgY29scz1cIjIzXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj5cclxuICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdG5hYW1cIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICA8aT4gV2VsaWQgTGFiaWRpPC9pPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOndlbGlkbGFiaWRpQGdtYWlsLmNvbVwiPldlbGlkbGFiaWRpQGdtYWlsLmNvbTwvYT5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dlbGlkbGFiaWRpXCIgY2xhc3NOYW1lPVwiZ2l0aHViLWljb25cIj5cclxuICAgICAgICAgICAgPEdvTWFya0dpdGh1YiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3BhY2UtaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2VsaWQtbGFiaWRpLTA4NjA0MTE4Ny9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rZWRpbi1pY29uXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOndlbGlkbGFiaWRpQGdtYWlsLmNvbVwiIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxyXG4gICAgICAgICAgICA8SW9Jb3NNYWlsIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSxcclxuICAgICAgICBhOmxpbmsge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdC13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxMzksIDEzOSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMzAlLCAtODAlKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAvKiAgZGlzcGxheTogbm9uZTsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3Qtd3JhcHBlciBidXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3NTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTk5LCAxOTYsIDE5Nik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0bmFhbSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOTAlLCAtMjQ1JSk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0bmFhbSBpIHtcclxuICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYWNlIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGFjZS1pY29uIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNzAlLCAtMzAwJSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXRodWItaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmtlZGluLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHNreWJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\contact.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3cd62a1ed1df38f34d95.hot-update.js.map