/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/site/js/theme.js":
/*!******************************!*\
  !*** ./src/site/js/theme.js ***!
  \******************************/
/***/ (() => {

/*--- THEME SWITCHER ---*/
var switcher = document.querySelector("#theme-switcher");
var doc = document.firstElementChild;
switcher.addEventListener("input", function (e) {
  return setTheme(e.target.value);
});

var setTheme = function setTheme(theme) {
  return doc.setAttribute("color-scheme", theme);
};

/***/ }),

/***/ "./src/site/scss/theme.scss":
/*!**********************************!*\
  !*** ./src/site/scss/theme.scss ***!
  \**********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @use 'dim';\n  │ ^^^^^^^^^^\n  ╵\n  src/site/scss/themes/_index.scss 3:1  @use\n  src/site/scss/theme.scss 5:1          root stylesheet\n    at tryRunOrWebpackError (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/HookWebpackError.js:88:9)\n    at __webpack_require_module__ (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at done (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/Hook.js:18:14)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4955:16\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4923:15\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at done (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3527:9)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4870:8\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3349:32\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/CacheFacade.js:137:15)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3349:11\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3319:9)\n    at codeGen (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4858:11)\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4888:14\n    at processQueue (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/util/processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n3 │ @use 'dim';\n  │ ^^^^^^^^^^\n  ╵\n  src/site/scss/themes/_index.scss 3:1  @use\n  src/site/scss/theme.scss 5:1          root stylesheet\n    at Object.<anonymous> (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/sass-loader/dist/cjs.js!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/src/site/scss/theme.scss:1:7)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/Hook.js:14:14)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5057:39\n    at tryRunOrWebpackError (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/HookWebpackError.js:83:7)\n    at __webpack_require_module__ (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5055:12)\n    at __webpack_require__ (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5012:18)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:5083:20\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at done (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/Hook.js:18:14)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4990:43\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4955:16\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4923:15\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3485:9)\n    at done (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3527:9)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4870:8\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3349:32\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/HookWebpackError.js:68:3\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:107:20)\n    at ItemCacheFacade.store (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/CacheFacade.js:137:15)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3349:11\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:93:5\n    at Hook.eval [as callAsync] (eval at create (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at Cache.get (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Cache.js:75:18)\n    at ItemCacheFacade.get (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/CacheFacade.js:111:15)\n    at Compilation._codeGenerationModule (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:3319:9)\n    at codeGen (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4858:11)\n    at symbolIterator (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/neo-async/async.js:3463:5)\n    at /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/Compilation.js:4888:14\n    at processQueue (/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/webpack/lib/util/processAsyncTree.js:55:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)\n\nGenerated code for /projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].use[1]!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].use[2]!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/node_modules/sass-loader/dist/cjs.js!/projects/QuickStart/qs-dc-lemp-mvc-webpack-base/development/src/site/scss/theme.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Can't find stylesheet to import.\\n  ╷\\n3 │ @use 'dim';\\n  │ ^^^^^^^^^^\\n  ╵\\n  src/site/scss/themes/_index.scss 3:1  @use\\n  src/site/scss/theme.scss 5:1          root stylesheet\");");

/***/ }),

/***/ "./src/site/views/theme.phtml":
/*!************************************!*\
  !*** ./src/site/views/theme.phtml ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "../../project/App/Views/Site/theme.phtml";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/site/js/theme.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_require__("./src/site/scss/theme.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/site/views/theme.phtml");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2l0ZS90aGVtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFqQjtBQUNBLElBQU1DLEdBQUcsR0FBR0YsUUFBUSxDQUFDRyxpQkFBckI7QUFDQUosUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFEO0VBQUEsT0FBT0MsUUFBUSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsQ0FBbkM7O0FBQ0EsSUFBTUYsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0csS0FBRDtFQUFBLE9BQVdQLEdBQUcsQ0FBQ1EsWUFBSixDQUFpQixjQUFqQixFQUFpQ0QsS0FBakMsQ0FBWDtBQUFBLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9zaXRlL2pzL3RoZW1lLmpzIiwid2VicGFjazovL2RldmVsb3BtZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RldmVsb3BtZW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qLS0tIFRIRU1FIFNXSVRDSEVSIC0tLSovXG5jb25zdCBzd2l0Y2hlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlbWUtc3dpdGNoZXJcIik7XG5jb25zdCBkb2MgPSBkb2N1bWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbnN3aXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4gc2V0VGhlbWUoZS50YXJnZXQudmFsdWUpKTtcbmNvbnN0IHNldFRoZW1lID0gKHRoZW1lKSA9PiBkb2Muc2V0QXR0cmlidXRlKFwiY29sb3Itc2NoZW1lXCIsIHRoZW1lKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uLy4uL1wiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NpdGUvanMvdGhlbWUuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkb2Vzbid0IHRlbGwgYWJvdXQgaXQncyB0b3AtbGV2ZWwgZGVjbGFyYXRpb25zIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaXRlL3Njc3MvdGhlbWUuc2Nzc1wiKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NpdGUvdmlld3MvdGhlbWUucGh0bWxcIik7XG4iLCIiXSwibmFtZXMiOlsic3dpdGNoZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkb2MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0VGhlbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRoZW1lIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==