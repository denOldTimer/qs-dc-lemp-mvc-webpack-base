/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/site/js/navigation.js":
/*!***********************************!*\
  !*** ./src/site/js/navigation.js ***!
  \***********************************/
/***/ (() => {

var navbarLinks = document.getElementsByClassName("navbar-links")[0];

document.getElementsByClassName("toggle-button")[0].onclick = function () {
  if (navbarLinks.style.display == "none" || navbarLinks.style.display == "") {
    navbarLinks.style.display = "flex";
  } else {
    navbarLinks.style.display = "none";
  }
};

var switcher = document.querySelector("#theme");
var doc = document.firstElementChild;
switcher.addEventListener("input", function (e) {
  return setTheme(e.target.value);
});

var setTheme = function setTheme(theme) {
  return doc.setAttribute("color-scheme", theme);
};

/***/ }),

/***/ "./src/site/views/footer.phtml":
/*!*************************************!*\
  !*** ./src/site/views/footer.phtml ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "../../project/App/Views/Site/footer.phtml";

/***/ }),

/***/ "./src/site/views/header.phtml":
/*!*************************************!*\
  !*** ./src/site/views/header.phtml ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "../../project/App/Views/Site/header.phtml";

/***/ }),

/***/ "./src/site/views/navigation.phtml":
/*!*****************************************!*\
  !*** ./src/site/views/navigation.phtml ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "../../project/App/Views/Site/navigation.phtml";

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
/******/ 	__webpack_require__("./src/site/js/navigation.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_require__("./src/site/views/navigation.phtml");
/******/ 	__webpack_require__("./src/site/views/header.phtml");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/site/views/footer.phtml");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2l0ZS9uYXZpZ2F0aW9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxjQUFoQyxFQUFnRCxDQUFoRCxDQUFwQjs7QUFDQUQsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRCxDQUFqRCxFQUFvREMsT0FBcEQsR0FBOEQsWUFBWTtFQUN4RSxJQUFJSCxXQUFXLENBQUNJLEtBQVosQ0FBa0JDLE9BQWxCLElBQTZCLE1BQTdCLElBQXVDTCxXQUFXLENBQUNJLEtBQVosQ0FBa0JDLE9BQWxCLElBQTZCLEVBQXhFLEVBQTRFO0lBQzFFTCxXQUFXLENBQUNJLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLE1BQTVCO0VBQ0QsQ0FGRCxNQUVPO0lBQ0xMLFdBQVcsQ0FBQ0ksS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsTUFBNUI7RUFDRDtBQUNGLENBTkQ7O0FBUUEsSUFBTUMsUUFBUSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBakI7QUFDQSxJQUFNQyxHQUFHLEdBQUdQLFFBQVEsQ0FBQ1EsaUJBQXJCO0FBQ0FILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRDtFQUFBLE9BQU9DLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLENBQW5DOztBQUNBLElBQU1GLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNHLEtBQUQ7RUFBQSxPQUFXUCxHQUFHLENBQUNRLFlBQUosQ0FBaUIsY0FBakIsRUFBaUNELEtBQWpDLENBQVg7QUFBQSxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZlbG9wbWVudC8uL3NyYy9zaXRlL2pzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGV2ZWxvcG1lbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2RldmVsb3BtZW50L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9kZXZlbG9wbWVudC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2YmFyTGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmF2YmFyLWxpbmtzXCIpWzBdO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZ2dsZS1idXR0b25cIilbMF0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKG5hdmJhckxpbmtzLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIgfHwgbmF2YmFyTGlua3Muc3R5bGUuZGlzcGxheSA9PSBcIlwiKSB7XG4gICAgbmF2YmFyTGlua3Muc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICB9IGVsc2Uge1xuICAgIG5hdmJhckxpbmtzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuY29uc3Qgc3dpdGNoZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lXCIpO1xuY29uc3QgZG9jID0gZG9jdW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5zd2l0Y2hlci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHNldFRoZW1lKGUudGFyZ2V0LnZhbHVlKSk7XG5jb25zdCBzZXRUaGVtZSA9ICh0aGVtZSkgPT4gZG9jLnNldEF0dHJpYnV0ZShcImNvbG9yLXNjaGVtZVwiLCB0aGVtZSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi8uLi9cIjsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaXRlL2pzL25hdmlnYXRpb24uanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkb2Vzbid0IHRlbGwgYWJvdXQgaXQncyB0b3AtbGV2ZWwgZGVjbGFyYXRpb25zIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaXRlL3ZpZXdzL25hdmlnYXRpb24ucGh0bWxcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2l0ZS92aWV3cy9oZWFkZXIucGh0bWxcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zaXRlL3ZpZXdzL2Zvb3Rlci5waHRtbFwiKTtcbiIsIiJdLCJuYW1lcyI6WyJuYXZiYXJMaW5rcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJzd2l0Y2hlciIsInF1ZXJ5U2VsZWN0b3IiLCJkb2MiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2V0VGhlbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRoZW1lIiwic2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==