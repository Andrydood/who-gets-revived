webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/andreacasino/Documents/Projects/who-gets-revived/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index() {
  var names = ['andrydood', 'jadamog', 'rukoo', 'fattytuna'];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      name = _useState[0],
      setName = _useState[1];

  var rollTheDice = function rollTheDice() {
    var randomNumber = Math.ceil(Math.random() * 4);
    var selectedName = names[randomNumber];
    console.log({
      randomNumber: randomNumber,
      selectedName: selectedName
    });
    setName(selectedName);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Who Gets Revived?"), __jsx("button", {
    onClick: rollTheDice,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, "Click here to find out!"), name ? __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "It's ", name, "!") : null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.912835c5aa9daf12d6f8.hot-update.js.map