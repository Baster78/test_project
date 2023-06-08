/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("$(function () {\r\n  let header = $(\"#header\"),\r\n    introH = $(\"#intro\").innerHeight(),\r\n    scrollOffset = $(window).scrollTop();\r\n\r\n  // fixed header\r\n\r\n  checkScroll(scrollOffset);\r\n\r\n  $(window).on(\"scroll\", function () {\r\n    scrollOffset = $(this).scrollTop();\r\n\r\n    checkScroll(scrollOffset);\r\n  });\r\n\r\n  function checkScroll(scrollOffset) {\r\n    scrollOffset = $(this).scrollTop();\r\n\r\n    if (scrollOffset >= introH) {\r\n      header.addClass(\"fixed\");\r\n    } else {\r\n      header.removeClass(\"fixed\");\r\n    }\r\n  }\r\n\r\n  // smooth scroll\r\n\r\n  $(\"[data-scroll\").on(\"click\", function (event) {\r\n    event.preventDefault();\r\n\r\n    let $this = $(this),\r\n      blockId = $this.data(\"scroll\"),\r\n      blockOffset = $(blockId).offset().top;\r\n\r\n    $(\"#nav a\").removeClass(\"active\");\r\n    $this.addClass(\"active\");\r\n\r\n    $(\"html,body\").animate({ scrollTop: blockOffset }, 500);\r\n  });\r\n\r\n  // menu nav toggle\r\n\r\n  $(\"#nav__toggle\").on(\"click\", function (event) {\r\n    event.preventDefault();\r\n    $(this).toggleClass(\"active\");\r\n    $(\"#nav\").toggleClass(\"active\");\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;