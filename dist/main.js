/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\nconst contentDiv = document.getElementById('content');\r\nlet mainContentDiv = document.createElement('div');\r\ncontentDiv.appendChild(mainContentDiv)\r\nmainContentDiv.setAttribute('id','main-content');\r\ncreateHomePage();\r\n\r\n\r\nfunction createHomePage() {\r\n    createCompanyNameLogo();\r\n    createRestaurantInfo();\r\n}\r\n\r\n\r\nfunction createCompanyNameLogo() {\r\n    //for restaurant name\r\n    createRestaurantName();\r\n    createCompanyLogo();\r\n}\r\n\r\nfunction createRestaurantName() {\r\n    let restaurantName = document.createElement('h1');\r\n    let firsthalfName = document.createElement('span');\r\n    let secondhalfName = document.createElement('span');    \r\n\r\n    restaurantName.setAttribute('id','restaurant-name');\r\n    firsthalfName.classList.add('first-half-co-name');\r\n    secondhalfName.classList.add('second-half-co-name');\r\n\r\n    firsthalfName.innerText = 'Omu';\r\n    secondhalfName.innerText = 'Life';\r\n    restaurantName.appendChild(firsthalfName);\r\n    restaurantName.appendChild(secondhalfName);\r\n    mainContentDiv.appendChild(restaurantName);\r\n}\r\n\r\nfunction createCompanyLogo() {\r\n    let companyLogoDiv = document.createElement('div');\r\n    let companyLogoImg = document.createElement('img');\r\n    \r\n    companyLogoDiv.setAttribute('id','company-logo');\r\n    companyLogoImg.src = \"/src/images/omurice-clipart.png\"\r\n    companyLogoImg.alt = \"omurice clipart\";\r\n\r\n    companyLogoDiv.appendChild(companyLogoImg);\r\n    mainContentDiv.appendChild(companyLogoDiv);\r\n}\r\n\r\nfunction createRestaurantInfo() {\r\n    createMissionStatement();\r\n    createInterested();\r\n    createLocationInfo();\r\n    createHoursInfo();\r\n}\r\n\r\nfunction createMissionStatement () {\r\n    let companyMissionDiv = document.createElement('div')\r\n    let companyMissionHeader = document.createElement('h2');\r\n    let companyMissionParagraph = document.createElement('p');\r\n\r\n    companyMissionDiv.setAttribute('id','company-mission'); \r\n    companyMissionHeader.innerText = 'Company Mission';\r\n    companyMissionDiv.appendChild(companyMissionHeader);\r\n    \r\n    companyMissionParagraph.innerText = 'In Japan, omurice is a staple food, found anywhere from the local mom and pop store to high rise luxury Michellin star ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'restaurants. In America, omurice treated as something easy and fast -- something that anyone can ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'make, given the proper ingredients at home. In Los Angeles, the owner GoldBeaver witnessed his '; \r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'favorite omurice restaurants go bankrupt because of this preconception. At Omulife, we are trying to ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'change the perception of omurice in America. We offer irreplicable omurice experience.'\r\n    companyMissionDiv.appendChild(companyMissionParagraph);\r\n\r\n    mainContentDiv.appendChild(companyMissionDiv);\r\n\r\n}\r\n\r\nfunction createInterested() {\r\n    let interestedText = document.createElement('h2');\r\n    let menuBtnContainer = document.createElement('div');\r\n    let menuBtn = document.createElement('button');\r\n    interestedText.innerText = 'Interested? Let\\'s get started.'\r\n\r\n    mainContentDiv.appendChild(interestedText);\r\n    menuBtnContainer.appendChild(menuBtn);\r\n    menuBtn.setAttribute('id','menu-btn');\r\n    menuBtn.innerText = 'Check Out Our Menu';\r\n    \r\n    mainContentDiv.appendChild(interestedText);   \r\n    mainContentDiv.appendChild(menuBtnContainer);\r\n}\r\n\r\nfunction createLocationInfo() {\r\n    let locationInfoDiv = document.createElement('div');\r\n    let locationText = document.createElement('h2');\r\n    let addressText = document.createElement('p');\r\n    locationInfoDiv.setAttribute('id','location-info');\r\n    locationText.innerText = 'Location';\r\n    addressText.innerText = '1600 Pennsylvania Avenue NW, Washington, DC 20500';\r\n\r\n    locationInfoDiv.appendChild(locationText);\r\n    locationInfoDiv.appendChild(addressText);\r\n    \r\n    mainContentDiv.appendChild(locationInfoDiv);\r\n}\r\n\r\nfunction createHoursInfo() {\r\n    let hoursInfoDiv = document.createElement('div');\r\n    let hoursHeader = document.createElement('h2');\r\n    hoursHeader.innerText = 'Hours';\r\n    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n    const openTimesArray = ['Closed', '10am - 1am', '8am - 1am'];\r\n\r\n    hoursInfoDiv.setAttribute('id','hours-info');\r\n    hoursInfoDiv.appendChild(hoursHeader);\r\n\r\n    for(let i = 0; i < daysArray.length; i++)\r\n    {\r\n        let currHoursDiv = document.createElement('div');\r\n        if(i == 0)\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[0];\r\n        }\r\n        else if (i > 0 || i < daysArray.length - 1)\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[1];\r\n        }\r\n        else\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[2];\r\n        }\r\n        hoursInfoDiv.appendChild(currHoursDiv);\r\n    }\r\n    mainContentDiv.appendChild(hoursInfoDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;