(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/auth.js"],{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/mnt/d/code/react/basic-next-app/components/User.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var user = function user(props) {
  return __jsx("dib", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, props.name), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Age ", props.age));
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2Fmnt%2Fd%2Fcode%2Freact%2Fbasic-next-app%2Fpages%2Fauth%2Findex.js!./":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2Fmnt%2Fd%2Fcode%2Freact%2Fbasic-next-app%2Fpages%2Fauth%2Findex.js ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/auth", function() {
      var mod = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/auth/index.js */ "./pages/auth/index.js", function() {
          if(!next.router.components["/auth"]) return
          var updatedPage = __webpack_require__(/*! ./pages/auth/index.js */ "./pages/auth/index.js")
          next.router.update("/auth", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");
var _this = undefined,
    _jsxFileName = "/mnt/d/code/react/basic-next-app/pages/auth/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var authPage = function authPage() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "The Auth Index Page"), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "John",
    age: "22",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (authPage);

/***/ }),

/***/ 2:
/*!*****************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fauth&absolutePagePath=%2Fmnt%2Fd%2Fcode%2Freact%2Fbasic-next-app%2Fpages%2Fauth%2Findex.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fauth&absolutePagePath=%2Fmnt%2Fd%2Fcode%2Freact%2Fbasic-next-app%2Fpages%2Fauth%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fauth&absolutePagePath=%2Fmnt%2Fd%2Fcode%2Freact%2Fbasic-next-app%2Fpages%2Fauth%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=auth.js.map