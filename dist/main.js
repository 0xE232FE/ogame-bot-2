/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/autobuilder.js":
/*!********************************!*\
  !*** ./src/app/autobuilder.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init() {\n    console.log('=== Autobuilder Running! ===');\n    const upgradeAvailable = document.querySelectorAll('button.upgrade').length > 0;\n    const builder = this;\n\n    function buildUp(i = 0) {\n      if (i < builder.levels.length) {\n        setTimeout(() => {\n          const res = window.state.resources[builder.levels[i].resource];\n\n          if (res.level < builder.levels[i].level) {\n            console.log(res);\n\n            if (res.upgrade_available) {\n              console.log('Upgrading ' + builder.levels[i].resource + ' to level: ' + (parseInt(res.level) + 1));\n              res.upgrade();\n              return;\n            }\n\n            console.log('Trying to upgrade ' + builder.levels[i].resource + ' to level: ' + (parseInt(res.level) + 1) + ' not resources available');\n            return;\n          }\n          /* // Only for Testing //\n          console.log({\n            res,\n          });\n          console.log('DONE => '+builder.levels[i].resource+' level: '+builder.levels[i].level);\n          console.log('=======================================');\n          */\n\n\n          buildUp(i + 1);\n        }, 100);\n      }\n    }\n\n    console.log(upgradeAvailable ? 'The resources are enough to upgrade a Mine.' : 'Not enough resources to make an upgrade.');\n\n    if (upgradeAvailable) {\n      buildUp();\n    }\n  },\n\n  levels: [{\n    resource: 'Metal',\n    level: 2\n  }, {\n    resource: 'Energy',\n    level: 2\n  }, {\n    resource: 'Crystal',\n    level: 1\n  }, {\n    resource: 'Energy',\n    level: 3\n  }, {\n    resource: 'Metal',\n    level: 4\n  }, {\n    resource: 'Crystal',\n    level: 2\n  }, {\n    resource: 'Energy',\n    level: 4\n  }, {\n    resource: 'Deuterium',\n    level: 2\n  }, {\n    resource: 'Metal',\n    level: 6\n  }, {\n    resource: 'Energy',\n    level: 6\n  }, {\n    resource: 'Crystal',\n    level: 4\n  }, {\n    resource: 'Metal',\n    level: 7\n  }, {\n    resource: 'Energy',\n    level: 7\n  }, {\n    resource: 'Crystal',\n    level: 5\n  }, {\n    resource: 'Deuterium',\n    level: 3\n  }, {\n    resource: 'Metal',\n    level: 8\n  }, {\n    resource: 'Energy',\n    level: 8\n  }, {\n    resource: 'Crystal',\n    level: 6\n  }, {\n    resource: 'Metal',\n    level: 9\n  }, {\n    resource: 'Energy',\n    level: 9\n  }, {\n    resource: 'Crystal',\n    level: 7\n  }, {\n    resource: 'Deuterium',\n    level: 4\n  }, {\n    resource: 'Metal',\n    level: 10\n  }, {\n    resource: 'Energy',\n    level: 10\n  }, {\n    resource: 'Crystal',\n    level: 8\n  }, {\n    resource: 'Metal',\n    level: 11\n  }, {\n    resource: 'Energy',\n    level: 11\n  }, {\n    resource: 'Crystal',\n    level: 9\n  }, {\n    resource: 'Deuterium',\n    level: 5\n  }, {\n    resource: 'Metal',\n    level: 12\n  }, {\n    resource: 'Energy',\n    level: 12\n  }, {\n    resource: 'Crystal',\n    level: 10\n  }, {\n    resource: 'Metal',\n    level: 13\n  }, {\n    resource: 'Energy',\n    level: 13\n  }, {\n    resource: 'Crystal',\n    level: 11\n  }, {\n    resource: 'Deuterium',\n    level: 6\n  }, {\n    resource: 'Metal',\n    level: 14\n  }, {\n    resource: 'Energy',\n    level: 14\n  }, {\n    resource: 'Crystal',\n    level: 12\n  }, {\n    resource: 'Metal',\n    level: 15\n  }, {\n    resource: 'Energy',\n    level: 15\n  }, {\n    resource: 'Crystal',\n    level: 13\n  }, {\n    resource: 'Deuterium',\n    level: 7\n  }, {\n    resource: 'Metal',\n    level: 16\n  }, {\n    resource: 'Energy',\n    level: 16\n  }, {\n    resource: 'Crystal',\n    level: 14\n  }, {\n    resource: 'Metal',\n    level: 17\n  }, {\n    resource: 'Energy',\n    level: 17\n  }, {\n    resource: 'Crystal',\n    level: 15\n  }, {\n    resource: 'Deuterium',\n    level: 8\n  }, {\n    resource: 'Metal',\n    level: 18\n  }, {\n    resource: 'Energy',\n    level: 18\n  }, {\n    resource: 'Crystal',\n    level: 16\n  }, {\n    resource: 'Metal',\n    level: 19\n  }, {\n    resource: 'Energy',\n    level: 19\n  }, {\n    resource: 'Crystal',\n    level: 17\n  }, {\n    resource: 'Deuterium',\n    level: 9\n  }, {\n    resource: 'Metal',\n    level: 20\n  }, {\n    resource: 'Energy',\n    level: 20\n  }, {\n    resource: 'Crystal',\n    level: 18\n  }, {\n    resource: 'Metal',\n    level: 21\n  }, {\n    resource: 'Energy',\n    level: 21\n  }, {\n    resource: 'Crystal',\n    level: 19\n  }, {\n    resource: 'Deuterium',\n    level: 17\n  }, {\n    resource: 'Metal',\n    level: 22\n  }, {\n    resource: 'Energy',\n    level: 22\n  }, {\n    resource: 'Crystal',\n    level: 20\n  }, {\n    resource: 'Deuterium',\n    level: 18\n  }, {\n    resource: 'Metal',\n    level: 23\n  }, {\n    resource: 'Energy',\n    level: 23\n  }, {\n    resource: 'Crystal',\n    level: 21\n  }, {\n    resource: 'Deuterium',\n    level: 19\n  }, {\n    resource: 'Metal',\n    level: 24\n  }, {\n    resource: 'Energy',\n    level: 24\n  }, {\n    resource: 'Crystal',\n    level: 22\n  }, {\n    resource: 'Deuterium',\n    level: 20\n  }, {\n    resource: 'Metal',\n    level: 25\n  }, {\n    resource: 'Energy',\n    level: 25\n  }, {\n    resource: 'Crystal',\n    level: 23\n  }, {\n    resource: 'Deuterium',\n    level: 21\n  }, {\n    resource: 'Metal',\n    level: 26\n  }, {\n    resource: 'Energy',\n    level: 26\n  }, {\n    resource: 'Crystal',\n    level: 24\n  }, {\n    resource: 'Deuterium',\n    level: 22\n  }, {\n    resource: 'Metal',\n    level: 27\n  }, {\n    resource: 'Energy',\n    level: 27\n  }, {\n    resource: 'Crystal',\n    level: 25\n  }, {\n    resource: 'Deuterium',\n    level: 23\n  }, {\n    resource: 'Metal',\n    level: 28\n  }, {\n    resource: 'Energy',\n    level: 28\n  }, {\n    resource: 'Crystal',\n    level: 26\n  }, {\n    resource: 'Deuterium',\n    level: 24\n  }]\n});\n\n//# sourceURL=webpack://ogame-bot/./src/app/autobuilder.js?");

/***/ }),

/***/ "./src/app/core.js":
/*!*************************!*\
  !*** ./src/app/core.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/app/utils.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  smartRefresh() {\n    const randomRefresh = _utils_js__WEBPACK_IMPORTED_MODULE_0___default().randomIntFromInterval(1, 10);\n    setTimeout(function () {\n      window.location.reload();\n    }, randomRefresh * 1000 * 60);\n  }\n\n});\n\n//# sourceURL=webpack://ogame-bot/./src/app/core.js?");

/***/ }),

/***/ "./src/app/state.js":
/*!**************************!*\
  !*** ./src/app/state.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// State\nconst stateDefault = {\n  resources: {},\n  facilities: {},\n  development: {}\n};\nwindow.state = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  saveState() {\n    localStorage.setItem('state', JSON.stringify(state));\n  },\n\n  getState() {\n    state = JSON.parse(localStorage.getItem('state'));\n\n    if (!state) {\n      state = stateDefault;\n      this.saveState();\n    }\n  },\n\n  setResources() {\n    state.resources = {\n      Metal: {\n        button: document.querySelector('li.metalMine .upgrade'),\n        level: parseInt(document.querySelector('li.metalMine .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      Crystal: {\n        button: document.querySelector('li.crystalMine .upgrade'),\n        level: parseInt(document.querySelector('li.crystalMine .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      Deuterium: {\n        button: document.querySelector('li.deuteriumSynthesizer .upgrade'),\n        level: parseInt(document.querySelector('li.deuteriumSynthesizer .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      Energy: {\n        button: document.querySelector('li.solarPlant .upgrade'),\n        level: parseInt(document.querySelector('li.solarPlant .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      Satellites: {\n        button: document.querySelector('li.solarSatellite .upgrade'),\n        amount: parseInt(document.querySelector('li.solarSatellite .amount').dataset.value)\n      },\n      metalStorage: {\n        button: document.querySelector('li.metalStorage .upgrade'),\n        level: parseInt(document.querySelector('li.metalStorage .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      crystalStorage: {\n        button: document.querySelector('li.crystalStorage .upgrade'),\n        level: parseInt(document.querySelector('li.crystalStorage .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      deuteriumStorage: {\n        button: document.querySelector('li.deuteriumStorage .upgrade'),\n        level: parseInt(document.querySelector('li.deuteriumStorage .level').dataset.value),\n        upgrade_available: this.button !== null,\n\n        upgrade() {\n          this.button.click();\n        }\n\n      },\n      last_update: Date.now()\n    };\n    this.saveState();\n  },\n\n  setFacilities() {\n    state.facilities = {\n      roboticsFactory: {\n        button: document.querySelector('li.roboticsFactory .upgrade'),\n        level: parseInt(document.querySelector('li.roboticsFactory .level').dataset.value)\n      },\n      shipyard: {\n        button: document.querySelector('li.shipyard .upgrade'),\n        level: parseInt(document.querySelector('li.shipyard .level').dataset.value)\n      },\n      researchLaboratory: {\n        button: document.querySelector('li.researchLaboratory .upgrade'),\n        level: parseInt(document.querySelector('li.researchLaboratory .level').dataset.value)\n      },\n      last_update: Date.now()\n    };\n    this.saveState();\n  }\n\n});\n\n//# sourceURL=webpack://ogame-bot/./src/app/state.js?");

/***/ }),

/***/ "./src/app/utils.js":
/*!**************************!*\
  !*** ./src/app/utils.js ***!
  \**************************/
/***/ ((module) => {

eval("// Utils\nmodule.exports = {\n  randomIntFromInterval(min, max) {\n    // min and max included \n    return Math.floor(Math.random() * (max - min + 1) + min);\n  }\n\n};\n\n//# sourceURL=webpack://ogame-bot/./src/app/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/utils.js */ \"./src/app/utils.js\");\n/* harmony import */ var _app_utils_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_utils_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/core.js */ \"./src/app/core.js\");\n/* harmony import */ var _app_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/state.js */ \"./src/app/state.js\");\n/* harmony import */ var _app_autobuilder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/autobuilder.js */ \"./src/app/autobuilder.js\");\n\n\n\n\n\nfunction initOgameBot() {\n  const urlParams = new URLSearchParams(window.location.search);\n  const component = urlParams.get('component');\n  _app_core_js__WEBPACK_IMPORTED_MODULE_1__.default.smartRefresh();\n  _app_state_js__WEBPACK_IMPORTED_MODULE_2__.default.getState();\n  setTimeout(function () {\n    console.log(window.state);\n\n    switch (component) {\n      case 'supplies':\n        _app_state_js__WEBPACK_IMPORTED_MODULE_2__.default.setResources();\n        _app_autobuilder_js__WEBPACK_IMPORTED_MODULE_3__.default.init();\n        break;\n\n      case 'facilities':\n        _app_state_js__WEBPACK_IMPORTED_MODULE_2__.default.setFacilities();\n        break;\n    }\n  }, 200);\n}\n\ninitOgameBot();\n\n//# sourceURL=webpack://ogame-bot/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;