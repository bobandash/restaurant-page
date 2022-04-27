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

/***/ "./src/jsFiles/contact.js":
/*!********************************!*\
  !*** ./src/jsFiles/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContactUsPage\": () => (/* binding */ createContactUsPage)\n/* harmony export */ });\n/* harmony import */ var _createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMainContentDiv */ \"./src/jsFiles/createMainContentDiv.js\");\n\r\n\r\nfunction createContactUsPage() {\r\n    let mainContentDiv = (0,_createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    changeStylesheet();\r\n    createContactText(mainContentDiv);\r\n    createForm(mainContentDiv);\r\n}\r\n\r\nfunction changeStylesheet() {\r\n    const currLinkRel = document.getElementById('current-stylesheet');\r\n    currLinkRel.href = '/src/cssFiles/contact.css';\r\n}\r\n\r\nfunction createContactText(mainContentDiv) {\r\n    let contactUsHeader = document.createElement('h1');\r\n    let alternativeContactText = document.createElement('h2');\r\n    contactUsHeader.innerText = 'Contact Us';\r\n    alternativeContactText.innerText = 'For To-Go and Delivery orders, please call 888-888-8888. If we do not pick up, please email us at goldbeaver@omulife.com or leave a message in the form.'\r\n\r\n    mainContentDiv.appendChild(contactUsHeader);\r\n    mainContentDiv.appendChild(alternativeContactText);\r\n}\r\n\r\nfunction createForm(mainContentDiv) {\r\n    let contactForm = document.createElement('form');\r\n    const labels = ['name','phoneNumber','email','message'];\r\n\r\n    contactForm.setAttribute('id','contact-form');\r\n\r\n    //for the appending fields\r\n    for(let i = 0; i < labels.length; i++){\r\n        let currLabelElem = document.createElement('label');\r\n        let currLabelText = labels[i];\r\n        \r\n        if(labels[i] == 'phoneNumber'){\r\n            currLabelElem.innerText = 'Phone Number';\r\n        }\r\n        else\r\n        {\r\n            currLabelElem.innerText = currLabelText.charAt(0).toUpperCase() + currLabelText.substring(1).toLowerCase();\r\n        }\r\n        currLabelElem.setAttribute('for', labels[i]);\r\n        currLabelElem.setAttribute('name', labels[i]);\r\n\r\n        let currInputElem = document.createElement('input');\r\n\r\n        //depending on the label, create the appropriate input\r\n        if(labels[i] == 'email'){\r\n            currInputElem.setAttribute('type','email');\r\n            currInputElem.setAttribute('name', labels[i]);\r\n        }\r\n        else if(labels[i] == 'message'){\r\n            currInputElem = document.createElement('textarea');\r\n            currInputElem.setAttribute('id','message');\r\n        }\r\n        else {\r\n            currInputElem.setAttribute('type','text');\r\n            currInputElem.setAttribute('name',labels[i]);\r\n        }\r\n        currInputElem.setAttribute('id',labels[i]);\r\n        contactForm.appendChild(currLabelElem);\r\n        contactForm.appendChild(currInputElem);\r\n    }\r\n\r\n    //for appending the submit button\r\n    let submitFormBtn = document.createElement('button');\r\n    submitFormBtn.setAttribute('type','submit');\r\n    submitFormBtn.setAttribute('id','submit-form-btn');\r\n    submitFormBtn.innerText = 'Submit';\r\n    contactForm.appendChild(submitFormBtn);\r\n\r\n    mainContentDiv.appendChild(contactForm);  \r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/jsFiles/contact.js?");

/***/ }),

/***/ "./src/jsFiles/createMainContentDiv.js":
/*!*********************************************!*\
  !*** ./src/jsFiles/createMainContentDiv.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMainContentDiv(){\r\n    const contentDiv = document.getElementById('content');\r\n    let mainContentDiv = document.createElement('div');\r\n    contentDiv.appendChild(mainContentDiv)\r\n    mainContentDiv.setAttribute('id','main-content');\r\n    return mainContentDiv;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMainContentDiv);\n\n//# sourceURL=webpack://restaurant-page/./src/jsFiles/createMainContentDiv.js?");

/***/ }),

/***/ "./src/jsFiles/homepage.js":
/*!*********************************!*\
  !*** ./src/jsFiles/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHomePage\": () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMainContentDiv */ \"./src/jsFiles/createMainContentDiv.js\");\n\r\n\r\nfunction createHomePage() {\r\n    let mainContentDiv = (0,_createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    changeStylesheet();\r\n    createCompanyNameLogo(mainContentDiv);\r\n    createRestaurantInfo(mainContentDiv);\r\n}\r\n\r\nfunction changeStylesheet() {\r\n    const currLinkRel = document.getElementById('current-stylesheet');\r\n    currLinkRel.href = '/src/cssFiles/homepage.css';\r\n}\r\n\r\n\r\nfunction createCompanyNameLogo(mainContentDiv) {\r\n    //for restaurant name\r\n    createRestaurantName(mainContentDiv);\r\n    createCompanyLogo(mainContentDiv);\r\n}\r\n\r\nfunction createRestaurantName(mainContentDiv) {\r\n    let restaurantName = document.createElement('h1');\r\n    let firsthalfName = document.createElement('span');\r\n    let secondhalfName = document.createElement('span');    \r\n\r\n    restaurantName.setAttribute('id','restaurant-name');\r\n    firsthalfName.classList.add('first-half-co-name');\r\n    secondhalfName.classList.add('second-half-co-name');\r\n\r\n    firsthalfName.innerText = 'Omu';\r\n    secondhalfName.innerText = 'Life';\r\n    restaurantName.appendChild(firsthalfName);\r\n    restaurantName.appendChild(secondhalfName);\r\n    mainContentDiv.appendChild(restaurantName);\r\n}\r\n\r\nfunction createCompanyLogo(mainContentDiv) {\r\n    let companyLogoDiv = document.createElement('div');\r\n    let companyLogoImg = document.createElement('img');\r\n    \r\n    companyLogoDiv.setAttribute('id','company-logo');\r\n    companyLogoImg.src = \"/src/images/omurice-clipart.png\"\r\n    companyLogoImg.alt = \"omurice clipart\";\r\n\r\n    companyLogoDiv.appendChild(companyLogoImg);\r\n    mainContentDiv.appendChild(companyLogoDiv);\r\n}\r\n\r\nfunction createRestaurantInfo(mainContentDiv) {\r\n    createMissionStatement(mainContentDiv);\r\n    createInterested(mainContentDiv);\r\n    createLocationInfo(mainContentDiv);\r\n    createHoursInfo(mainContentDiv);\r\n}\r\n\r\nfunction createMissionStatement (mainContentDiv) {\r\n    let companyMissionDiv = document.createElement('div')\r\n    let companyMissionHeader = document.createElement('h2');\r\n    let companyMissionParagraph = document.createElement('p');\r\n\r\n    companyMissionDiv.setAttribute('id','company-mission'); \r\n    companyMissionHeader.innerText = 'Company Mission';\r\n    companyMissionDiv.appendChild(companyMissionHeader);\r\n    \r\n    companyMissionParagraph.innerText = 'In Japan, omurice is a staple food, found anywhere from the local mom and pop store to high rise luxury Michellin star ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'restaurants. In America, omurice treated as something easy and fast -- something that anyone can ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'make, given the proper ingredients at home. In Los Angeles, the owner GoldBeaver witnessed his '; \r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'favorite omurice restaurants go bankrupt because of this preconception. At Omulife, we are trying to ';\r\n    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'change the perception of omurice in America. We offer irreplicable omurice experience.'\r\n    companyMissionDiv.appendChild(companyMissionParagraph);\r\n\r\n    mainContentDiv.appendChild(companyMissionDiv);\r\n\r\n}\r\n\r\nfunction createInterested(mainContentDiv) {\r\n    let interestedText = document.createElement('h2');\r\n    let menuBtnContainer = document.createElement('div');\r\n    let menuBtn = document.createElement('button');\r\n    interestedText.innerText = 'Interested? Let\\'s get started.'\r\n\r\n    mainContentDiv.appendChild(interestedText);\r\n    menuBtnContainer.appendChild(menuBtn);\r\n    menuBtn.setAttribute('id','menu-btn');\r\n    menuBtn.innerText = 'Check Out Our Menu';\r\n    \r\n    mainContentDiv.appendChild(interestedText);   \r\n    mainContentDiv.appendChild(menuBtnContainer);\r\n}\r\n\r\nfunction createLocationInfo(mainContentDiv) {\r\n    let locationInfoDiv = document.createElement('div');\r\n    let locationText = document.createElement('h2');\r\n    let addressText = document.createElement('p');\r\n    locationInfoDiv.setAttribute('id','location-info');\r\n    locationText.innerText = 'Location';\r\n    addressText.innerText = '1600 Pennsylvania Avenue NW, Washington, DC 20500';\r\n\r\n    locationInfoDiv.appendChild(locationText);\r\n    locationInfoDiv.appendChild(addressText);\r\n    \r\n    mainContentDiv.appendChild(locationInfoDiv);\r\n}\r\n\r\nfunction createHoursInfo(mainContentDiv) {\r\n    let hoursInfoDiv = document.createElement('div');\r\n    let hoursHeader = document.createElement('h2');\r\n    hoursHeader.innerText = 'Hours';\r\n    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n    const openTimesArray = ['Closed', '10am - 1am', '8am - 1am'];\r\n\r\n    hoursInfoDiv.setAttribute('id','hours-info');\r\n    hoursInfoDiv.appendChild(hoursHeader);\r\n\r\n    for(let i = 0; i < daysArray.length; i++)\r\n    {\r\n        let currHoursDiv = document.createElement('div');\r\n        if(i == 0)\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[0];\r\n        }\r\n        else if (i > 0 || i < daysArray.length - 1)\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[1];\r\n        }\r\n        else\r\n        {\r\n            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[2];\r\n        }\r\n        hoursInfoDiv.appendChild(currHoursDiv);\r\n    }\r\n    mainContentDiv.appendChild(hoursInfoDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/jsFiles/homepage.js?");

/***/ }),

/***/ "./src/jsFiles/index.js":
/*!******************************!*\
  !*** ./src/jsFiles/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/jsFiles/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/jsFiles/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/jsFiles/contact.js\");\n\r\n\r\n\r\n\r\nconst homeNavBtn = document.getElementById('home-nav-btn');\r\nconst menuNavBtn = document.getElementById('menu-nav-btn');\r\nconst contactNavBtn = document.getElementById('contact-nav-btn');\r\nconst contentDiv = document.getElementById('content');\r\n\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\r\n\r\nconst menuBtn = document.getElementById('menu-btn');\r\nmenuBtn.addEventListener('click',function() {\r\n    changeDisplay(menuBtn);\r\n})\r\n\r\n\r\nfunction clearContents() {\r\n    contentDiv.removeChild(contentDiv.lastChild);\r\n}\r\n\r\n//for nav button functionality\r\nfunction changeDisplay(currBtn) {\r\n    if(!(currBtn.classList.contains('selected-nav'))){\r\n        let allOtherButtons = [homeNavBtn, menuNavBtn, contactNavBtn];\r\n        \r\n        //delete the button that isn't the curr button\r\n        for(let i = 0; i < allOtherButtons.length; i++)\r\n        {\r\n            if(currBtn == allOtherButtons[i]){\r\n                allOtherButtons.splice(i,1);\r\n                break;\r\n            }\r\n        }\r\n\r\n        if(allOtherButtons[0].classList.contains('selected-nav')){\r\n            allOtherButtons[0].classList.remove('selected-nav');\r\n        }\r\n        else if(allOtherButtons[1].classList.contains('selected-nav')){\r\n            allOtherButtons[1].classList.remove('selected-nav');\r\n        }\r\n        \r\n        currBtn.classList.add('selected-nav');\r\n        clearContents();\r\n\r\n        //display the appropriate screen\r\n        switch(currBtn){\r\n            case homeNavBtn:\r\n                (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\r\n                //home page has extra button that displays menu\r\n                const menuBtn = document.getElementById('menu-btn');\r\n                menuBtn.addEventListener('click',function() {\r\n                    changeDisplay(menuNavBtn);\r\n                })\r\n                break;\r\n            case menuNavBtn:\r\n                (0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\r\n                break;\r\n            case contactNavBtn:\r\n                (0,_contact__WEBPACK_IMPORTED_MODULE_2__.createContactUsPage)();\r\n                break;\r\n        }\r\n    }\r\n}\r\n\r\nhomeNavBtn.addEventListener('click', function () {\r\n    changeDisplay(homeNavBtn);\r\n})\r\n\r\nmenuNavBtn.addEventListener('click', function() {\r\n    changeDisplay(menuNavBtn);\r\n})\r\n\r\ncontactNavBtn.addEventListener('click', function() {\r\n    changeDisplay(contactNavBtn);\r\n})\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/jsFiles/index.js?");

/***/ }),

/***/ "./src/jsFiles/menu.js":
/*!*****************************!*\
  !*** ./src/jsFiles/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMainContentDiv */ \"./src/jsFiles/createMainContentDiv.js\");\n\r\n\r\n//figure out how to create enums later\r\nconst foodTypes = [\"Main Dishes\",\"Appetizers\",\"Desserts\",\"Drinks\"];\r\nconst foodTypeHeaderId = ['main-dishes-header','appetizers-header', 'desserts-header', 'drinks-header'];\r\nconst foodTypeContainer = ['main-dishes-container', 'appetizers-container', 'desserts-container', 'drinks-container'];\r\n\r\nfunction createMenu(){\r\n    let mainContentDiv = (0,_createMainContentDiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    changeStylesheet();\r\n    createDOMMenuStructure(mainContentDiv);\r\n    addMenuItems();\r\n}\r\n\r\nfunction changeStylesheet() {\r\n    const currLinkRel = document.getElementById('current-stylesheet');\r\n    currLinkRel.href = '/src/cssFiles/menu.css';\r\n}\r\n\r\n\r\n//appends all the headers to the appropriate location\r\nfunction createDOMMenuStructure(mainContentDiv){\r\n    //do the first header menu separately\r\n    let menuHeader = document.createElement('h1');\r\n    menuHeader.innerText = 'Menu';\r\n    mainContentDiv.appendChild(menuHeader);\r\n\r\n    //append the header container to store the food items\r\n    for(let i = 0; i < foodTypes.length; i++){\r\n        let currHeader = document.createElement('h2');\r\n        let currContainer = document.createElement('div');\r\n\r\n        currHeader.innerText = foodTypes[i];\r\n        currHeader.setAttribute('id', foodTypeHeaderId[i]);\r\n        currContainer.setAttribute('id', foodTypeContainer[i]);\r\n        currContainer.setAttribute('class', 'menu-items-container');\r\n\r\n        mainContentDiv.appendChild(currHeader);\r\n        mainContentDiv.appendChild(currContainer);        \r\n    }\r\n}\r\n\r\nfunction addMenuItems() {\r\n    //for all the main dish menu items\r\n    const characterOmurice = new menuItem(\"Character Omurice\",\"24.99\",\"/src/images/menu/main-dish/character-omurice.webp\",foodTypes[0]);\r\n    const classicOmurice = new menuItem(\"Classic Omurice\",\"14.99\",\"/src/images/menu/main-dish/classic-omurice-set.webp\",foodTypes[0]);\r\n    const tornadoOmurice = new menuItem(\"Tornado Omurice\",\"18.99\", \"/src/images/menu/main-dish/tornado-omurice.webp\",foodTypes[0]);\r\n    const transformingOmurice = new menuItem(\"Transforming Omurice\",\"19.99\",\"/src/images/menu/main-dish/transforming-omurice.jpg\",foodTypes[0]);\r\n\r\n    //for all appetizer menu items\r\n    const dollarSalad = new menuItem(\"Dollar Salad\",\"1.00\",\"/src/images/menu/appetizers/dollar-salad.jpg\",foodTypes[1]);\r\n    const misoSoup = new menuItem(\"Miso Soup\",\"2.00\",\"/src/images/menu/appetizers/miso-soup.webp\",foodTypes[1]);\r\n\r\n    //for all dessert menu items\r\n    const cheeseCake = new menuItem(\"Cheese Cake\",\"4.00\",\"/src/images/menu/desserts/cheesecake.jpg\",foodTypes[2]);\r\n    const creamPuff = new menuItem(\"Cream Puffs\",\"4.99\",\"/src/images/menu/desserts/cream-puffs.webp\",foodTypes[2]);\r\n    const shortCakes = new menuItem(\"Strawberry Short Cakes\",\"4.99\",\"/src/images/menu/desserts/strawberry-shortcake.webp\",foodTypes[2]);\r\n\r\n    //for all drinks\r\n    const calpico = new menuItem(\"Calpico\",\"2.00\",\"/src/images/menu/drinks/calpico.jpg\",foodTypes[3]);\r\n    const cocaCola = new menuItem(\"Coca Cola\",\"2.00\",\"/src/images/menu/drinks/coca-cola.jpg\",foodTypes[3]);\r\n    const icedTea = new menuItem(\"Iced Tea\",\"3.99\",\"/src/images/menu/drinks/iced-tea.jpg\",foodTypes[3]);\r\n\r\n    const allItems = [characterOmurice, classicOmurice, tornadoOmurice, transformingOmurice, dollarSalad, misoSoup, cheeseCake, creamPuff, shortCakes, calpico, cocaCola, icedTea];\r\n\r\n    addItemsToDOM(allItems);\r\n}\r\n\r\nfunction addItemsToDOM(allItems)\r\n{\r\n    for(let i = 0; i < allItems.length; i++)\r\n    {\r\n        allItems[i].pushMenuItemToDOM();\r\n    }\r\n}\r\n\r\n\r\nclass menuItem {\r\n    constructor(foodName, foodPrice, foodImg, foodType){\r\n        this.foodName = foodName;\r\n        this.foodPrice = foodPrice;\r\n        this.foodImg = foodImg;\r\n        this.foodType = foodType;\r\n    }\r\n\r\n    pushMenuItemToDOM(){\r\n        let containerID = '';\r\n        //find out which container to append the item to\r\n        switch (this.foodType) {\r\n            case foodTypes[0]:\r\n                containerID = foodTypeContainer[0];\r\n                break;\r\n            case foodTypes[1]:\r\n                containerID = foodTypeContainer[1];\r\n                break;\r\n            case foodTypes[2]:\r\n                containerID = foodTypeContainer[2];\r\n                break;\r\n            case foodTypes[3]:\r\n                containerID = foodTypeContainer[3];\r\n                break;\r\n        }\r\n\r\n        let containerElemToAppend = document.getElementById(containerID);\r\n        let allInfoFigure = document.createElement('figure');\r\n        let imgDivContainer = document.createElement('div');\r\n        let foodImg = document.createElement('img');\r\n        let figcaptionNamePrice = document.createElement('figcaption');\r\n        let foodItemName = document.createElement('div');\r\n        let foodItemPrice = document.createElement('div')\r\n\r\n\r\n        let altText = this.foodName.toLowerCase();\r\n\r\n        imgDivContainer.setAttribute('class','menu-img-container');\r\n        foodImg.setAttribute('src',this.foodImg);\r\n        foodImg.setAttribute('alt',altText);\r\n\r\n        let imgNaturalHeight = foodImg.naturalHeight;\r\n        let imgNaturalWidth = foodImg.naturalWidth;\r\n\r\n        if(imgNaturalHeight > imgNaturalWidth) {\r\n            foodImg.style.height = '325px';\r\n        }\r\n        else{\r\n            foodImg.style.width = '340px';\r\n        }\r\n\r\n\r\n        foodItemName.setAttribute('class','menu-item-name');\r\n        foodItemPrice.setAttribute('class','menu-item-price');\r\n\r\n        foodItemName.innerText = this.foodName;\r\n        foodItemPrice.innerText = '$' + this.foodPrice;\r\n\r\n        containerElemToAppend.appendChild(allInfoFigure);\r\n        allInfoFigure.appendChild(imgDivContainer);\r\n        imgDivContainer.appendChild(foodImg);\r\n        \r\n        figcaptionNamePrice.appendChild(foodItemName);\r\n        figcaptionNamePrice.appendChild(foodItemPrice);\r\n        allInfoFigure.appendChild(figcaptionNamePrice);\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/jsFiles/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/jsFiles/index.js");
/******/ 	
/******/ })()
;