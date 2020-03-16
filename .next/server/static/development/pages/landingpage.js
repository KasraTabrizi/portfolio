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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./comps/landingbody.js":
/*!******************************!*\
  !*** ./comps/landingbody.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\comps\\landingbody.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Landing = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    document.querySelector(".wrapper").addEventListener("mousemove", function (e) {
      let box1 = document.getElementsByClassName("box1")[0];
      let Ycoord1 = e.clientY / 10;
      let Xcoord1 = e.clientX / 10;
      let box1_styles_top = 200;
      let box1_styles_left = 500;
      box1.style = `top: ${box1_styles_top - Ycoord1}px; left: ${box1_styles_left - Xcoord1}px;`;
    });
  });
  return __jsx("div", {
    className: "jsx-111786754" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-111786754" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-111786754" + " " + "box box1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("h1", {
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "I'M ", __jsx("br", {
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), "WELID ", __jsx("br", {
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), "LABIDI."), __jsx("h2", {
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Web Developer"), __jsx("button", {
    className: "jsx-111786754" + " " + "btn-enter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    href: "/index",
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "ENTER")), __jsx("br", {
    className: "jsx-111786754",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("a", {
    href: "https://github.com/welidlabidi",
    className: "jsx-111786754" + " " + "github-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  })), __jsx("span", {
    className: "jsx-111786754" + " " + "space",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("a", {
    href: "https://www.linkedin.com/in/welid-labidi-086041187/",
    className: "jsx-111786754" + " " + "linkedin-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "111786754",
    __self: undefined
  }, "a.jsx-111786754{color:rgb(162,177,194);-webkit-text-decoration:none;text-decoration:none;}body.jsx-111786754,html.jsx-111786754{height:100%;margin:0;background-image:url(/image/sea.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;}.container.jsx-111786754{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100% align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.wrapper.jsx-111786754{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}.box.jsx-111786754{display:block;position:absolute;border:gainsboro solid 3px;text-align:center;color:rgb(162,177,194);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.box1.jsx-111786754{width:300px;height:200px;background-color:transparent;top:200px;left:500px;}.btn-enter.jsx-111786754{margin-top:15%;width:300px;height:30px;background:transparent;color:rgb(162,177,194);margin-bottom:10%;}.btn-enter.jsx-111786754:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 50px #d1cecc;}.space.jsx-111786754{padding:10px;}.github-icon.jsx-111786754{color:lightgreen;font-size:25px;}.linkedin-icon.jsx-111786754{color:skyblue;font-size:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbGFuZGluZ2JvZHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENrQixBQUdvQyxBQUtiLEFBU0MsQUFPRCxBQU9FLEFBVUYsQUFPRyxBQVFNLEFBSVIsQUFHSSxBQUlILFlBMURMLEFBZ0JHLEFBaUJDLENBbUJmLENBN0JtQixBQW9DRixDQW5CSCxFQWVHLElBdERzQixFQU5oQixFQXVDUSxFQU9qQixFQW1CZCxHQXBDNkIsQUFnQzdCLE9BZHlCLGVBUGIsSUFqQ2lCLENBdUJULEdBa0JPLEVBUGQsU0F4Q2IsQ0FhcUIsQ0E0QnJCLEFBVzhCLEVBdEJILFFBdkJHLEFBeUNWLENBM0JLLGNBVUosR0FrQnJCLEFBSUEsVUE3Q3dCLHNCQUV4QixRQUtxQiw4QkFDSSxZQU1KLFFBVVAsWUFDZCxtRUFoQkEsTUFNbUIsa0JBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcd2VsaWRcXERvY3VtZW50c1xcY29kZWZvbGRlclxccmVhY3QgbmV4dC5qc1xccG9ydGZvbGlvXFxjb21wc1xcbGFuZGluZ2JvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYUdpdGh1YiB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYUxpbmtlZGluIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCByZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIilcclxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCBib3gxID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJveDFcIilbMF07XHJcbiAgICAgICAgbGV0IFljb29yZDEgPSBlLmNsaWVudFkgLyAxMDtcclxuICAgICAgICBsZXQgWGNvb3JkMSA9IGUuY2xpZW50WCAvIDEwO1xyXG4gICAgICAgIGxldCBib3gxX3N0eWxlc190b3AgPSAyMDA7XHJcbiAgICAgICAgbGV0IGJveDFfc3R5bGVzX2xlZnQgPSA1MDA7XHJcbiAgICAgICAgYm94MS5zdHlsZSA9IGB0b3A6ICR7Ym94MV9zdHlsZXNfdG9wIC1cclxuICAgICAgICAgIFljb29yZDF9cHg7IGxlZnQ6ICR7Ym94MV9zdHlsZXNfbGVmdCAtIFhjb29yZDF9cHg7YDtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IGJveDFcIj5cclxuICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgSSdNIDxiciAvPlxyXG4gICAgICAgICAgICBXRUxJRCA8YnIgLz5cclxuICAgICAgICAgICAgTEFCSURJLlxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDxoMj5XZWIgRGV2ZWxvcGVyPC9oMj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWVudGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvaW5kZXhcIj5FTlRFUjwvYT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJnaXRodWItaWNvblwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2VsaWRsYWJpZGlcIj5cclxuICAgICAgICAgICAgPEZhR2l0aHViIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFjZVwiPjwvc3Bhbj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtlZGluLWljb25cIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dlbGlkLWxhYmlkaS0wODYwNDExODcvXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTYyLCAxNzcsIDE5NCk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvZHksXHJcbiAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltYWdlL3NlYS5qcGcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgIHdpZHRoOjEwMCVcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICAgIGJvcmRlcjogZ2FpbnNib3JvIHNvbGlkIDNweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiByZ2IoMTYyLCAxNzcsIDE5NCk7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm94MSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgdG9wOiAyMDBweDtcclxuICAgICAgICAgIGxlZnQ6IDUwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWVudGVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxNjIsIDE3NywgMTk0KTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1lbnRlcjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNTBweCAjZDFjZWNjO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BhY2Uge1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdpdGh1Yi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlua2VkaW4taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogc2t5Ymx1ZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\welid\\\\Documents\\\\codefolder\\\\react next.js\\\\portfolio\\\\comps\\\\landingbody.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./pages/landingpage.js":
/*!******************************!*\
  !*** ./pages/landingpage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comps_landingbody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps/landingbody */ "./comps/landingbody.js");
var _jsxFileName = "C:\\Users\\welid\\Documents\\codefolder\\react next.js\\portfolio\\pages\\landingpage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Index() {
  return __jsx(_comps_landingbody__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
}

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/landingpage.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\welid\Documents\codefolder\react next.js\portfolio\pages\landingpage.js */"./pages/landingpage.js");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=landingpage.js.map