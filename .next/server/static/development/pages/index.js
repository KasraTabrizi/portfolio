module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/Pics.js":
/*!***********************!*\
  !*** ./comps/Pics.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\Pics.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Pics = () => {
  const tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();
  const {
    0: test,
    1: setTest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("Click Me");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const wrapper = document.querySelectorAll(".nav-bottom");
    wrapper.forEach(data => {
      data.addEventListener("mouseenter", function (e) {
        let overlay = `.${e.currentTarget.innerText}`;
        gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(overlay, 1, {
          y: "-100%"
        });
      });
      data.addEventListener("mouseleave", function (e) {
        let overlay = `.${e.currentTarget.innerText}`;
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
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "pics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("img", {
    src: "/skills.png",
    alt: "Skills",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("img", {
    src: "/ali.png",
    alt: "About",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-4069619743" + " " + "image-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-4069619743" + " " + "overlay Contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("img", {
    src: "/contact.png",
    alt: "Contact",
    className: "jsx-4069619743",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4069619743",
    __self: undefined
  }, "img.jsx-4069619743{margin-top:60px;width:250px;height:250px;-webkit-filter:grayscale(100%);filter:grayscale(100%);}.pics.jsx-4069619743{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:70px;}.overlay.jsx-4069619743{width:100%;height:100%;position:absolute;background-color:rgb(128,125,125);top:100%;}.image-wrapper.jsx-4069619743{position:relative;margin:10px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcUGljcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBRzJCLEFBTUgsQUFNRixBQU9PLFdBTk4sS0FaQSxFQW1CQSxLQU5NLEtBWkwsRUFtQkcsV0FsQk8sQUFZYSxLQU90Qyw0QkFmYSxDQVNGLFNBQ1gsQ0FUK0IsVUFKL0IsaUhBS2tCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXFBpY3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnN0IFBpY3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcblxyXG4gIGNvbnN0IFt0ZXN0LCBzZXRUZXN0XSA9IHVzZVN0YXRlKFwiQ2xpY2sgTWVcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYm90dG9tXCIpO1xyXG4gICAgd3JhcHBlci5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiLTEwMCVcIiB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBsZXQgb3ZlcmxheSA9IGAuJHtlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0fWA7XHJcbiAgICAgICAgZ3NhcC50byhvdmVybGF5LCAxLCB7IHk6IFwiMTAwJVwiIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgU2tpbGxzXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9za2lsbHMucG5nXCIgYWx0PVwiU2tpbGxzXCI+PC9pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXkgQWJvdXRcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2FsaS5wbmdcIiBhbHQ9XCJBYm91dFwiPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5IENvbnRhY3RcIj48L2Rpdj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2NvbnRhY3QucG5nXCIgYWx0PVwiQ29udGFjdFwiPjwvaW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGljcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI1LCAxMjUpO1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3M7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\Pics.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pics);

/***/ }),

/***/ "./comps/about.js":
/*!************************!*\
  !*** ./comps/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_typing_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-typing-animation */ "react-typing-animation");
/* harmony import */ var react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_typing_animation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function About() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelector(".about-X").addEventListener("click", function () {
      gsap__WEBPACK_IMPORTED_MODULE_4___default.a.to(".pics", 1, {
        y: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_4___default.a.to(".nav-bottom", 1, {
        y: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_4___default.a.to(".about-wrapper", 3, {
        y: 1000,
        display: "none"
      });
    });
  }, []);
  return __jsx("div", {
    className: "jsx-2995793228" + " " + "About me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2995793228" + " " + "about-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-2995793228" + " " + "about-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "X"), __jsx("div", {
    className: "jsx-2995793228" + " " + "about-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2995793228" + " " + "intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2995793228" + " " + "intro-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default.a.Speed, {
    ms: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("strong", {
    className: "jsx-2995793228",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Welcome to my portfolio."))), __jsx(react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default.a.Delay, {
    ms: 2000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(react_typing_animation__WEBPACK_IMPORTED_MODULE_2___default.a.Speed, {
    ms: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("p", {
    className: "jsx-2995793228",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sed rem esse illo vel earum, natus nihil molestias doloremque ea porro praesentium, voluptatum fuga minus excepturi obcaecati consequatur autem sunt.")), __jsx("a", {
    href: "/welid cv.pdf ",
    download: true,
    className: "jsx-2995793228",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegFilePdf"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2995793228",
    __self: this
  }, "a.jsx-2995793228,a.jsx-2995793228:link{-webkit-text-decoration:none;text-decoration:none;color:red;font-size:35px;-webkit-transform:translate(80%,80%);-ms-transform:translate(80%,80%);transform:translate(80%,80%);}.about-wrapper.jsx-2995793228{width:800px;height:400px;position:absolute;background-color:rgb(145,139,139);-webkit-transform:translate(30%,100%);-ms-transform:translate(30%,100%);transform:translate(30%,100%);border-radius:50px;display:none;}.about-wrapper.jsx-2995793228 button.jsx-2995793228{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;justify-self:center;width:10px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-left:750px;background-color:transparent;margin-top:30px;border:none;}.intro.jsx-2995793228{color:rgb(36,34,34);margin-right:200px;margin-top:10%;margin-left:5%;}.intro-header.jsx-2995793228{font-size:40px;font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUlnQyxBQU1ULEFBV0MsQUFXUyxBQU1QLFlBM0JGLEdBNEJLLEtBTkMsS0FyQkQsUUE0QnBCLE1BTmlCLElBckJxQixPQVIxQixJQThCSyxNQTdCQSxTQThCakIsS0Fkc0IsQ0FmVSxFQU9DLGlCQVNwQixXQUNZLHFFQWhCekIsS0FPcUIsbUJBQ04sTUFTTyxPQU50QixpRUFPb0Isa0JBQ1csNkJBQ2IsZ0JBQ0osWUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXHdlbGlkXFxEb2N1bWVudHNcXGNvZGVmb2xkZXJcXHJlYWN0IG5leHQuanNcXHBvcnRmb2xpb1xcY29tcHNcXGFib3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGluZyBmcm9tIFwicmVhY3QtdHlwaW5nLWFuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBGYVJlZ0ZpbGVQZGYgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1YXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3NhcC50byhcIi5waWNzXCIsIDEsIHsgeTogMCwgZGVsYXk6IDAuNSB9KTtcclxuICAgICAgZ3NhcC50byhcIi5uYXYtYm90dG9tXCIsIDEsIHsgeTogMCwgZGVsYXk6IDAuNSB9KTtcclxuICAgICAgZ3NhcC50byhcIi5hYm91dC13cmFwcGVyXCIsIDMsIHtcclxuICAgICAgICB5OiAxMDAwLFxyXG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFib3V0IG1lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtd3JhcHBlclwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJvdXQtWFwiPlg8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8VHlwaW5nPlxyXG4gICAgICAgICAgICAgIDxUeXBpbmcuU3BlZWQgbXM9ezUwfSAvPlxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+V2VsY29tZSB0byBteSBwb3J0Zm9saW8uPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvVHlwaW5nPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VHlwaW5nPlxyXG4gICAgICAgICAgICA8VHlwaW5nLkRlbGF5IG1zPXsyMDAwfSAvPlxyXG4gICAgICAgICAgICA8VHlwaW5nLlNwZWVkIG1zPXsxMH0gLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgRG9sb3JpYnVzIHNlZCByZW0gZXNzZSBpbGxvIHZlbCBlYXJ1bSwgbmF0dXMgbmloaWwgbW9sZXN0aWFzXHJcbiAgICAgICAgICAgICAgZG9sb3JlbXF1ZSBlYSBwb3JybyBwcmFlc2VudGl1bSwgdm9sdXB0YXR1bSBmdWdhIG1pbnVzIGV4Y2VwdHVyaVxyXG4gICAgICAgICAgICAgIG9iY2FlY2F0aSBjb25zZXF1YXR1ciBhdXRlbSBzdW50LlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L1R5cGluZz5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvd2VsaWQgY3YucGRmIFwiIGRvd25sb2FkPlxyXG4gICAgICAgICAgICA8RmFSZWdGaWxlUGRmIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSxcclxuICAgICAgICBhOmxpbmsge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDgwJSwgODAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFib3V0LXdyYXBwZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDUsIDEzOSwgMTM5KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgMTAwJSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWJvdXQtd3JhcHBlciBidXR0b24ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDc1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW50cm8ge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigzNiwgMzQsIDM0KTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnRyby1oZWFkZXIge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\about.js */"));
}

/***/ }),

/***/ "./comps/contact.js":
/*!**************************!*\
  !*** ./comps/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Contact() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelector(".contact-X").addEventListener("click", function () {
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".pics", 1.5, {
        x: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".nav-bottom", 1.5, {
        x: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".contact-wrapper", 1, {
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

/***/ }),

/***/ "./comps/footer.js":
/*!*************************!*\
  !*** ./comps/footer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Footer() {
  return __jsx("div", {
    className: "jsx-2781843521",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2781843521" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Created By Welid Labidi"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2781843521",
    __self: this
  }, ".footer.jsx-2781843521{text-align:center;margin-top:60px;color:rgb(155,152,152);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQixBQUc2QixrQkFDRixnQkFDUyx1QkFDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFx3ZWxpZFxcRG9jdW1lbnRzXFxjb2RlZm9sZGVyXFxyZWFjdCBuZXh0LmpzXFxwb3J0Zm9saW9cXGNvbXBzXFxmb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+Q3JlYXRlZCBCeSBXZWxpZCBMYWJpZGk8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTU1LCAxNTIsIDE1Mik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\footer.js */"));
}

/***/ }),

/***/ "./comps/navBottom.js":
/*!****************************!*\
  !*** ./comps/navBottom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\navBottom.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const NavBottom = () => {
  const {
    0: animation,
    1: setAnimation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const tl = gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].timeline();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelectorAll(".nav-bottom").forEach(data => {
      data.addEventListener("click", function (e) {
        e.preventDefault();

        if (e.currentTarget.innerText === "Contact") {
          tl.play();
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".pics", 2.5, {
            x: -1800
          }));
          setAnimation(gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to(".nav-bottom", 2.5, {
            x: -1800
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
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Skills"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "About"), __jsx("a", {
    href: "#",
    className: "jsx-3965599631" + " " + "nav-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "Contact"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3965599631",
    __self: undefined
  }, "a.jsx-3965599631,a.jsx-3965599631:link{-webkit-text-decoration:none;text-decoration:none;color:gray;}.nav-links-bottom.jsx-3965599631{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:15px;font-size:20px;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631{color:rgb(155,152,152);opacity:0.5;position:relative;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:before{content:\"\";position:absolute;width:0;height:2px;bottom:0;right:0;background-color:#fff;visibility:hidden;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover.jsx-3965599631:before{visibility:visible;width:100%;}.nav-links-bottom.jsx-3965599631 a.jsx-3965599631:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbmF2Qm90dG9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREa0IsQUFJZ0MsQUFJUixBQU9ZLEFBS2QsQUFZUSxBQUtFLFdBaEJILFFBWVAsSUFqQkMsTUFNSixDQVlWLEtBakJvQixFQU1QLFdBQ0YsRUFuQkUsR0FhYixJQU9VLElBbkJWLElBb0J3QixTQWpCTyxDQTZCbkIsVUFDWixFQVpvQixrQkFDYyx3RUFDbEMsb0JBbkJrQixnQkFDRCxlQUNKLFdBQ2IiLCJmaWxlIjoiQzpcXFVzZXJzXFx3ZWxpZFxcRG9jdW1lbnRzXFxjb2RlZm9sZGVyXFxyZWFjdCBuZXh0LmpzXFxwb3J0Zm9saW9cXGNvbXBzXFxuYXZCb3R0b20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE5hdkJvdHRvbSA9ICgpID0+IHtcclxuICBjb25zdCBbYW5pbWF0aW9uLCBzZXRBbmltYXRpb25dID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWJvdHRvbVwiKS5mb3JFYWNoKGRhdGEgPT4ge1xyXG4gICAgICBkYXRhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQuaW5uZXJUZXh0ID09PSBcIkNvbnRhY3RcIikge1xyXG4gICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAyLjUsIHsgeDogLTE4MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAyLjUsIHsgeDogLTE4MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBnc2FwLnRvKFwiLmNvbnRhY3Qtd3JhcHBlclwiLCAxLCB7XHJcbiAgICAgICAgICAgICAgeDogMjMwLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJBYm91dFwiKSB7XHJcbiAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oZ3NhcC50byhcIi5waWNzXCIsIDMsIHsgeTogLTE5MDAgfSkpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIubmF2LWJvdHRvbVwiLCAzLCB7IHk6IC0xOTAwIH0pKTtcclxuICAgICAgICAgIHNldEFuaW1hdGlvbihcclxuICAgICAgICAgICAgZ3NhcC50byhcIi5hYm91dC13cmFwcGVyXCIsIDEsIHtcclxuICAgICAgICAgICAgICB5OiAtMzQwLFxyXG4gICAgICAgICAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LmlubmVyVGV4dCA9PT0gXCJTa2lsbHNcIikge1xyXG4gICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgICAgc2V0QW5pbWF0aW9uKGdzYXAudG8oXCIucGljc1wiLCAzLCB7IHk6IC0xOTAwIH0pKTtcclxuICAgICAgICAgIHNldEFuaW1hdGlvbihnc2FwLnRvKFwiLm5hdi1ib3R0b21cIiwgMywgeyB5OiAtMTkwMCB9KSk7XHJcbiAgICAgICAgICBzZXRBbmltYXRpb24oXHJcbiAgICAgICAgICAgIGdzYXAudG8oXCIuc2tpbGxzLXdyYXBwZXJcIiwgMSwge1xyXG4gICAgICAgICAgICAgIHg6IDIwMCxcclxuICAgICAgICAgICAgICBkZWxheTogMC41XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzLWJvdHRvbVwiPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtYm90dG9tXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICBTa2lsbHNcclxuICAgICAgPC9hPlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJuYXYtYm90dG9tXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICBBYm91dFxyXG4gICAgICA8L2E+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1ib3R0b21cIiBocmVmPVwiI1wiPlxyXG4gICAgICAgIENvbnRhY3RcclxuICAgICAgPC9hPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSxcclxuICAgICAgICBhOmxpbmsge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGlua3MtYm90dG9tIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDE1NSwgMTUyLCAxNTIpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLWJvdHRvbSBhOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYTpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hdi1saW5rcy1ib3R0b20gYTpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJvdHRvbTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\navBottom.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBottom);

/***/ }),

/***/ "./comps/navHeader.js":
/*!****************************!*\
  !*** ./comps/navHeader.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\navHeader.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const navHeader = () => {
  return __jsx("div", {
    className: "jsx-2979810157" + " " + "nav-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2979810157" + " " + "nav-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "Labidi."), __jsx("span", {
    className: "jsx-2979810157" + " " + "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2979810157" + " " + "nav-links-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2979810157",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "/landingpage",
    className: "jsx-2979810157" + " " + "nav-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Home"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2979810157",
    __self: undefined
  }, "a.jsx-2979810157,a.jsx-2979810157:link{-webkit-text-decoration:none;text-decoration:none;color:rgb(155,152,152);}.nav-header.jsx-2979810157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;font-size:20px;}.nav-name.jsx-2979810157{color:white;font-size:30px;}.nav-links-top.jsx-2979810157{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.nav-links-top.jsx-2979810157 a.jsx-2979810157{color:rgb(155,152,152);opacity:0.5;position:relative;padding:0;margin:0;}.nav-links-top.jsx-2979810157 a.jsx-2979810157:before{content:\"\";position:absolute;width:0;height:2px;bottom:0;right:0;background-color:#fff;visibility:hidden;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;}.nav-links-top.jsx-2979810157 a.jsx-2979810157:hover.jsx-2979810157:before{visibility:visible;width:100%;}.nav-links-top.jsx-2979810157 a.jsx-2979810157:hover{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);opacity:1;}.space-between.jsx-2979810157{width:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbmF2SGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVrQixBQUlnQyxBQUlSLEFBTUQsQUFJQyxBQUdZLEFBT2QsQUFXUSxBQUlFLEFBSVgsVUFDWixDQW5Cb0IsQ0FkSCxPQXlCSixJQWxCQyxJQU5kLEVBY1UsQ0FXVixLQWxCb0IsRUFRUCxXQUNGLEVBM0JnQixHQW1CZixJQVNGLE1BUkMsRUFTYSxPQVJ4QixDQXBCQSxDQUcrQixBQVUvQixDQXlCWSxVQUNaLEVBVm9CLGtCQUNjLHdFQUNsQyxvQkEzQnVCLHFHQUNOLGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbmF2SGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IHJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IG5hdkhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW5hbWVcIj5MYWJpZGkuPC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNwYWNlLWJldHdlZW5cIj48L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWxpbmtzLXRvcFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtdG9wXCIgaHJlZj1cIi9sYW5kaW5ncGFnZVwiPlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgYSxcclxuICAgICAgICBhOmxpbmsge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxNTUsIDE1MiwgMTUyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1oZWFkZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LW5hbWUge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLXRvcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLXRvcCBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTU1LCAxNTIsIDE1Mik7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLXRvcCBhOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2LWxpbmtzLXRvcCBhOmhvdmVyOmJlZm9yZSB7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYtbGlua3MtdG9wIGE6aG92ZXIge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNwYWNlLWJldHdlZW4ge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZIZWFkZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\navHeader.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (navHeader);

/***/ }),

/***/ "./comps/skills.js":
/*!*************************!*\
  !*** ./comps/skills.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/go */ "react-icons/go");
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\skills.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









function Skills() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelector(".skills-X").addEventListener("click", function () {
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".pics", 2, {
        y: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".nav-bottom", 2, {
        y: 0,
        delay: 0.5
      });
      gsap__WEBPACK_IMPORTED_MODULE_5___default.a.to(".skills-wrapper", 1, {
        x: -1000
      });
    });
  }, []);
  return __jsx("div", {
    className: "jsx-924212300" + " " + "skills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-924212300" + " " + "skills-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-924212300" + " " + "skills-X",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "X"), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-924212300" + " " + "cirkels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGit"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__["GoMarkGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaHtml5"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaCss3Alt"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoLogoJavascript"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaReact"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaNodeJs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-924212300" + " " + "project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "https://www.a-ztechnics.be",
    className: "jsx-924212300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Project")), __jsx("span", {
    className: "jsx-924212300" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-924212300" + " " + "skills-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-924212300",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Github ")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "924212300",
    __self: this
  }, "a.jsx-924212300,a.jsx-924212300:link{-webkit-text-decoration:none;text-decoration:none;color:rgb(221,209,209);}a.jsx-924212300:hover{color:skyblue;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}.skills-wrapper.jsx-924212300 button.jsx-924212300{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:30px;-webkit-transform:translate(0px,-60px);-ms-transform:translate(0px,-60px);transform:translate(0px,-60px);background-color:transparent;border:none;}.skills-wrapper.jsx-924212300{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:65%;height:70%;position:absolute;background-color:rgb(145,139,139);-webkit-transform:translate(-125%,-90%);-ms-transform:translate(-125%,-90%);transform:translate(-125%,-90%);border-radius:50px;}.skills-icon.jsx-924212300{position:relative;color:white;z-index:1000%;font-size:23px;border:1px solid rgb(250,246,246);background-color:rgb(17,17,17);width:100px;height:100px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.cirkels.jsx-924212300{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.project.jsx-924212300{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.space.jsx-924212300{margin:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcc2tpbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEa0IsQUFJZ0MsQUFJUCxBQUlELEFBVUEsQUFXSyxBQWNMLEFBV0EsQUFJRCxZQUNkLEVBdER1QixJQXlCVCxZQUNFLGNBQ0MsTUEvQlUsU0FnQ1csY0EvQnRDLENBT3lCLEFBVUQsQUF5Qk8sQUFXTixlQWpEekIsSUE0Qm1DLCtCQUNyQixZQUNDLGFBQ0ssR0FqQkssZUFrQlYsTUE1QkssQUE4Q3BCLHdCQVhBLDJDQWxDc0IsQ0E0QkcsVUFsQmIsVUFDQyxXQUNPLGtCQUNrQixzQkFabEIsWUFhZSxNQVpELFVBMkJiLDRGQWRBLENBZXJCLEVBM0IrQixnQkFhL0IsYUFaYyxZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcc2tpbGxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFDc3MzQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEdvTWFya0dpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xyXG5pbXBvcnQgeyBGYUdpdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYUh0bWw1IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvTG9nb0phdmFzY3JpcHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYU5vZGVKcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGdzYXAgZnJvbSBcImdzYXBcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKCkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNraWxscy1YXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgZ3NhcC50byhcIi5waWNzXCIsIDIsIHsgeTogMCwgZGVsYXk6IDAuNSB9KTtcclxuICAgICAgZ3NhcC50byhcIi5uYXYtYm90dG9tXCIsIDIsIHsgeTogMCwgZGVsYXk6IDAuNSB9KTtcclxuICAgICAgZ3NhcC50byhcIi5za2lsbHMtd3JhcHBlclwiLCAxLCB7XHJcbiAgICAgICAgeDogLTEwMDBcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLXdyYXBwZXJcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNraWxscy1YXCI+WDwvYnV0dG9uPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLW92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmtlbHNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWljb25cIj5cclxuICAgICAgICAgICAgPEZhR2l0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWljb25cIj5cclxuICAgICAgICAgICAgPEdvTWFya0dpdGh1YiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1pY29uXCI+XHJcbiAgICAgICAgICAgIDxGYUh0bWw1IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWljb25cIj5cclxuICAgICAgICAgICAgPEZhQ3NzM0FsdCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1pY29uXCI+XHJcbiAgICAgICAgICAgIDxJb0xvZ29KYXZhc2NyaXB0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWljb25cIj5cclxuICAgICAgICAgICAgPEZhUmVhY3QgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtaWNvblwiPlxyXG4gICAgICAgICAgICA8RmFOb2RlSnMgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtaWNvblwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYS16dGVjaG5pY3MuYmVcIj5Qcm9qZWN0PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWljb25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93ZWxpZGxhYmlkaVwiPkdpdGh1YiA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhLFxyXG4gICAgICAgIGE6bGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogcmdiKDIyMSwgMjA5LCAyMDkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiBza3libHVlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxzLXdyYXBwZXIgYnV0dG9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNjBweCk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxscy13cmFwcGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ1LCAxMzksIDEzOSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTI1JSwgLTkwJSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxzLWljb24ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjUwLCAyNDYsIDI0Nik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcsIDE3LCAxNyk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNpcmtlbHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdCB7XHJcbiAgICAgICAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCA4MCUpOyAqL1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhY2Uge1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\skills.js */"));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_navHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/navHeader */ "./comps/navHeader.js");
/* harmony import */ var _comps_navBottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/navBottom */ "./comps/navBottom.js");
/* harmony import */ var _comps_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../comps/footer */ "./comps/footer.js");
/* harmony import */ var _comps_Pics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/Pics */ "./comps/Pics.js");
/* harmony import */ var _comps_skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/skills */ "./comps/skills.js");
/* harmony import */ var _comps_about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/about */ "./comps/about.js");
/* harmony import */ var _comps_contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comps/contact */ "./comps/contact.js");
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_comps_navHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_comps_Pics__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_comps_skills__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_comps_about__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_comps_contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_comps_navBottom__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_comps_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\welid\Documents\codefolder\react next.js\portfolio\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/go":
/*!*********************************!*\
  !*** external "react-icons/go" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/go");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-typing-animation":
/*!*****************************************!*\
  !*** external "react-typing-animation" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typing-animation");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map