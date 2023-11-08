/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #111827;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;  
    font-family: sans-serif;
    flex-direction: column;
    height: 100vh;
}

.gameboard {
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 60px);
    grid-template-rows: repeat(10, 60px) 0.5fr;    
    gap: 3px;
    margin-top: 60px;
}

.square {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    text-transform: capitalize;
    position: relative;
    background-color: #fdffcb;
}

.square:hover {
    filter: brightness(0.7);
}

.legend {
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;    
}

.menu-card {
    background-color: rgba(255,255,255,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    border: 1px solid rgba(0,0,0,.125);
    width: 40rem;
    padding: 45px;    
}

.ask-name-container {
    padding: 45px;
    text-align: center;
}

.ship-placement-title {
    text-align: center;
}

.valid-ship-placement {    
    background-color: rgba(22, 221, 224, 0.815);
}

.invalid-ship-placement {
    background-color: rgba(255, 0, 0, 0.9);
}

.ship {
    background-color: rgba(35, 211, 35, 0.7);
}

.btn-container {
    display: flex; 
    flex-direction: column;
}

.start-btn {
    background-color: rgb(59,130,246);
    color: #fff;
    padding: 10px 20px;
    font-size: large;
    border-style: none;
    border-radius: 10px;
    margin-right: 15px;
    align-self: center;
}

btn:hover {
    background-color: #0a58ca;
    border-color: #0a53be;
    cursor: pointer;
}

.title {
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 60px);\r\n    grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    width: 40rem;\r\n    padding: 45px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: rgba(35, 211, 35, 0.7);\r\n}\r\n\r\n.btn-container {\r\n    display: flex; \r\n    flex-direction: column;\r\n}\r\n\r\n.start-btn {\r\n    background-color: rgb(59,130,246);\r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n}\r\n\r\nbtn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/factories/ship.js");


// Gameboards should be able to place ships at specific coordinates by calling the ship factory function. DONE
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.
// SHIPS SHOULD NOT BE ABLE TO OVERLAP

const Gameboard = () => {

    const createBoardArray = () => {
        let board = [];
        for (let row = 0; row < 10; row++) { 
            // gen 10 row arrays
            board[row] = [];
            for (let col = 0; col < 10; col++) {
                // gen 10 cols (add 10 empty strings) inside each row array
                board[row][col] = '';
                // access coords by [rowIndex][colIndex] ie. [0][0] || [9][7]
            }
        }
        return board;
    }

    const boardArr = createBoardArray();
    const shipsArr = [];
    
    const ship = {
        carrier: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('carrier'),
        battleship: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('battleship'),
        submarine: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('submarine'),
        cruiser: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('cruiser'),
        patrolBoat: (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])('patrolBoat'),
    };

    const types = Object.keys(ship); // ['carrier', 'battleship', etc]

    function getShipTypes() {
        const types = Object.keys(ship);
        return types;
    }

    // place ship's id into the board array between input coords
    function placeShip(shipType, startPos, endPos) { //e.g 'battleship', [0,0], [4,0]
        
        // Store all coords between start coord & end coord
        const allCoords = getAllCoords(startPos, endPos);
        // amount of coords between the 2 given inputs
        const coordsAmount = allCoords.length;
        // Get shipLength & id props from Ship factory
        const { shipLength, id } = ship[shipType];
        
        for (let i = 0; types.length > i; i++) {           
            if (shipType === types[i] && shipLength === coordsAmount) {
                // push ship obj to ships array
                const shipObj = ship[shipType];
                shipsArr.push(shipObj);
                // add id to each coord (board array indeces)
                allCoords.forEach((coord) => {
                    const [row, col] = coord;
                    boardArr[row][col] = id;
                })
            }
        }     
    }
       
    // push shiplength of each ship into new array
    function createShipLengthArray() {
        const shipLengthArray = [];
        
        for (let i = 0; types.length > i; i++) {
            shipLengthArray.push(ship[types[i]].shipLength);
        }
        
        return shipLengthArray;
    }
    
    // return array of all coords between, & including, two input coords eg. [0,0], [0,3]
    function getAllCoords(startPos, endPos) {
        // formats each input into array with 2 items & assigns var names to items
        const [startRow, startCol] = startPos;
        const [endRow, endCol] = endPos;
        let allCoords = [];

        // if ship is placed vertically (same col values)
        if (startCol === endCol) {
            // get all row values between start & end coords
            const allRowNums = getAllNumsBetween(startRow, endRow);
            // create new array from all row values that returns row value + input col and store in all coords array
            allCoords = allRowNums.map((row) => {
                return [row, startCol];
            });

        } else { // if ship placed horizontally (same row vals)
            const allColNums = getAllNumsBetween(startCol, endCol);
            allCoords = allColNums.map((col) => {
                return [startRow, col];
            })
        }
        return allCoords;
    }

    // return array of nums between 2 input nums
    function getAllNumsBetween(x, y) {
        const nums = [];
        let high, low;

        // Check which num is higher or lower
        if (x > y) {
            high = x;
            low = y;
        } else {
            high = y;
            low = x;
        }
        // push nums from low to high to nums array
        for (let i = low; i <= high; i++) {
            nums.push(i);
        }
        return nums;
    }

    // Find end coord from start coord + shiplength & direction
    function getEndCoord (startPos, direction, shipLength) {
        const [startRow, startCol] = startPos;
        let endRow = startRow;
        let endCol = startCol;
        // vertical goes downwards in array index (upwards in DOM), horizontal goes rightwards
        if (direction === 'vertical') {
            endRow += shipLength - 1;            
        } else if (direction === 'horizontal') {
            endCol += shipLength - 1;
        }
        return [endRow, endCol];
    }

    // takes pair of coords, determines whether the attack hit a ship and sends hit function to correct ship or records coords of missed shot
    function receiveAttack(coords) {
        const [row, col] = coords;
        // Store value of the given board array indeces
        const boardValue = boardArr[row][col];
        // coords contain a ship if boardValue is a number...
        const coordsContainShip = typeof boardValue === 'number';

        if (coordsContainShip) {
            const types = Object.keys(ship); // ['carrier', 'battleship', etc]
            for (let i = 0; types.length > i; i++) { 
                // grab id from ship props
                const { id } = ship[types[i]];

                // if the board val is equal to id of ship obj
                if (boardValue === id) {

                    // send hit function to that ship obj
                    const shipObj = ship[types[i]];
                    shipObj.hit();
    
                    // append an X to value to represent a hit
                    boardArr[row][col] += 'X';
    
                    // append S to represent Sunk to entire ship coords
                    if (shipObj.isSunk()) {
                        boardArr.forEach((row, r) => {
                            row.forEach((col, c) => {
                                if (boardArr[r][c].toString().includes(id)){
                                    boardArr[r][c] += 'S';
                                }
                            })
                        })                
                        return 'Sunk';
                    } 
                    if (allShipsSunk()) return 'Game Over';
                }
            }

        } else {
            // board value to M for a miss
            boardArr[row][col] = 'M';
        }
        
    }
    // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    const allShipsSunk = () => shipsArr.every((ship) => ship.isSunk());

    // are coords empty, within board
    // returns true if ship can place between two given coords
    function canPlaceShipBetween(startPos, endPos) {
        const allCoords = getAllCoords(startPos, endPos);
        return allCoords.every((coord) => {
            if (areWithinBoard(coord) && areEmpty(coord)) {
                return true;
            }
        })
    }

    // Check if coords are within board boundaries
    function areWithinBoard(coords) {
        const [row, col] = coords;
        if (row >= 10 || row < 0 || col >= 10 || col <  0) {
            return false;
        } else {
            return true;
        }
    }

    // Check if coords are empty
    function areEmpty(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === '') {
            return true;
        } else {
            return false;
        }
    }

    function getArray() {
        return boardArr;
    }

    return { 
        allShipsSunk,
        areWithinBoard,
        canPlaceShipBetween,
        createBoardArray,
        createShipLengthArray,
        getAllCoords,
        getAllNumsBetween,
        getArray,
        getEndCoord,
        getShipTypes,
        placeShip,
        receiveAttack,        
        types,
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/factories/gameboard.js");


// Players can take turns playing the game by attacking the enemy Gameboard.
// The game is played against the computer, so make the ‘computer’ capable of making random plays. The AI does not have to be smart, but it should know whether or not a given move is legal (i.e. it shouldn’t shoot the same coordinate twice).

const Player = () => {
    let board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const shipLengthArray = getShipLengthArray();   
    const shipList = getShipList();

    function getBoardObj() {
        return board;
    }

    function getBoardArray() {
        return board.getArray();
    }

    // ['carrier', 'battleship', 'submarine', 'cruiser', 'patrolBoat']
    function getShipList() {
        return board.getShipTypes();
    }

    // [5, 4, 3, 3, 2] 
    function getShipLengthArray() {
        return board.createShipLengthArray();
    }

    function attack(coords, enemyBoard) {
        const repeatPlay = isRepeatPlay(coords, enemyBoard);
        if (repeatPlay) return 'repeat';

        return enemyBoard.receiveAttack(coords);
    }

    // Check if the coords have been targetted already
    function isRepeatPlay(coords, enemyBoard) {
        const [row, col] = coords;
        const boardArr = enemyBoard.getArray();
        const boardValue = boardArr[row][col];
        if (typeof boardValue === 'number') return false;
        if (boardValue === '') return false;
        return true;
    }

    function genRandomCoords() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return [x, y];
    }

    return {
        attack,
        genRandomCoords,
        getBoardArray,
        getBoardObj,        
        getShipList,
        shipLengthArray,
        shipList
    }
}

// Inherit from Player factory
const Computer = () => {
    const proto = Player();

    function randomAttack(enemyBoard) {
        let randomCoords = proto.genRandomCoords();
        const attackedCoord = proto.attack(randomCoords, enemyBoard);
        return attackedCoord;
    }

    return {
        ...proto,
        randomAttack
    }
}



/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// length = number
// hits = number or array of boolean values representing each ship part?
// isSunk = either check if damage >= length OR check if every array element is true

// "REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests."

const Ship = (shipType) => {
    const shipClasses = {
        carrier: {
            shipLength: 5,
            id: 1,
        },
        battleship: {
            shipLength: 4,
            id: 2,
        },
        submarine: {
            shipLength: 3,
            id: 3,
        },
        cruiser: {
            shipLength: 3,
            id: 4,
        },
        patrolBoat: {
            shipLength: 2,
            id: 5,
        }
    };

    let hitsAmount = 0;
    const { shipLength, id } = shipClasses[shipType];

    // function that increases the number of ‘hits’ to your ship.
    function hit() {
        this.hitsAmount++;
    };

    // calculates whether has sunk based on ship's length and the number of ‘hits’.
    function isSunk() {
        if (this.hitsAmount >= shipLength) {
            return true;
        } else {
            return false;
        }
    }

    return {
        shipClasses,
        shipLength,
        hit,
        hitsAmount,
        id,
        isSunk,
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayNameMenu: () => (/* binding */ displayNameMenu),
/* harmony export */   displayShipPlacement: () => (/* binding */ displayShipPlacement),
/* harmony export */   displayShipPlacementMenu: () => (/* binding */ displayShipPlacementMenu),
/* harmony export */   renderMainMenu: () => (/* binding */ renderMainMenu),
/* harmony export */   renderOuterContainer: () => (/* binding */ renderOuterContainer)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


// display both the player’s boards and render them using information from the Gameboard class/factory.
// You need methods to render the gameboards and to take user input for attacking. For attacks, let the user click on a coordinate in the enemy Gameboard.

const renderOuterContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
}

const renderMainMenu = () => {
    const outerContainer = document.querySelector('.container');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Battleships";
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add("btn-container");
    const startBtn = document.createElement('btn');
    startBtn.classList.add('start-btn');
    startBtn.textContent = 'Start game';
    outerContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
    startBtn.addEventListener('click', displayNameMenu);
}

// const clearMenu = () => {
//     const menuCard = document.querySelector('.menu-card');
//     menuCard.innerHTML = '';
// }

// Remove child els from a parent el
const clearChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const displayNameMenu = (playerName) => {
    const menuCard = document.querySelector('.menu-card');    
    const askNameContainer = document.createElement('div');    
    askNameContainer.classList.add('ask-name-container');
    menuCard.appendChild(askNameContainer);
    const nameForm = document.createElement('form');
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name-input');
    nameLabel.textContent = `Admiral one name: `
    const nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    const nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    askNameContainer.appendChild(nameForm);
    nameForm.appendChild(nameLabel);
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    nameSubmit.addEventListener('click',(e) => {
        e.preventDefault();
        if (nameInput.value != '') {
            getName(playerName);
            //clearMenu();
            _game__WEBPACK_IMPORTED_MODULE_0__.resetPlayerObjs();
            _game__WEBPACK_IMPORTED_MODULE_0__.startPreGame();
        }
    })
}

const getName = (playerName) => {
    const nameInputValue = document.getElementById('name-input').value;
    playerName = nameInputValue;
    return playerName;
}

// takes input square id string - returns board array indeces e.g. '10A' = [9,0]
function parseCoords(squareId) {
    let row;
    let col;

    if (squareId.length === 2) {
        // first character (row num) on sqr id will be +1 ahead of array index
        row = parseInt(squareId.charAt(0)) -1;
        // second character (col letter) will be translated from A-J to 0-9
        col = squareId.charCodeAt(1) - 65;
    } else { // sqr id string is 3 characters
        const firstTwoChars = squareId.slice(0,2);
        row = parseInt(firstTwoChars) - 1;
        // third character convert to num
        col = squareId.charCodeAt(2) - 65;
    }
    return [row, col];
}

// take array input nums and convert it to square id string - [9,0] = '10A'
function convertCoordToId(arrayItem) {
    const [row, col] = arrayItem;
    let newRow = row + 1;
    let newCol = String.fromCharCode(65 + col);
    let stringId = `${newRow}${newCol}`;    
    return stringId;
}

// need to separate render ship placement from display menu...?
const displayShipPlacementMenu = (playerName) => {
    const menuCard = document.querySelector('.menu-card');
    const title = document.createElement('h2');
    title.textContent = `${getName(playerName)} place your ships`;
    title.classList.add('ship-placement-title');
    menuCard.appendChild(title);
}

const displayShipPlacement = (player) => {
    const boardObj = player.getBoardObj();
    const boardArr = player.getBoardArray();    

    // - pop removes & returns last element of array - once the array is empty it will return undefined
    const shipType = player.shipList.pop();
    const shipLength = player.shipLengthArray.pop();

    let direction = 'vertical';
    
    // Click a square to place ship
    const placeShipClick = (e) => {
        // square id string
        const position = e.target.getAttribute("id");
        // make the legend & the gaps between squares non clickable)
        if (position === null) {
            return;
        }

        // store coords in array format
        const startPos = parseCoords(position);
        // end pos coord calcd from start pos
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength);
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        // if coords are empty & within board boundaries
        if (validShipPlacement) {
            // console.log(`Current ship is: ${shipType} length is ${shipLength} squares`);
            // console.log(`clicked ${e.target.id}`);

            boardObj.placeShip(shipType, startPos, endPos); //e.g 'battleship', [0,0], [4,0]
            console.log(boardArr);
            // recursive - pop a new ship type into placeShip function until every ship is placed
            displayShipPlacement(player);
        }
    }

    // Mouse enter event handler
    const handlePlaceShipMouseEnter = (e) => {
        const position = e.target.getAttribute("id");
        if (position === null) {
            return;
        }
        displayHoverEffect(position);
    }

    // Mouse leave event handler
    const handlePlaceShipMouseLeave = () => {
        clearHoverEffect();
    }

    // switch ship orientation during placement to put on right click
    const rotateDirection = (e) => {
        // prevent right click menu appearing
        e.preventDefault();
        const position = e.target.getAttribute("id");
        if (position === null) { //e.g. if legend
            return;
        }
        if (direction === 'vertical') {
            direction = 'horizontal';
        } else {
            direction = 'vertical';
        }

        clearHoverEffect(position);
        displayHoverEffect(position);
    }

    // add hover effect to div square id 
    const displayHoverEffect = (position) => {
        const startPos = parseCoords(position); // eg. 10A = '[9,0]'
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength); //eg. [9,0], 'vertical', 2 = [10,0]
        
        const allCoords = boardObj.getAllCoords(startPos, endPos);
        // if coords are empty & within board boundaries
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        //console.log(`${shipType} (${shipLength} squares): Start pos:${startPos} End pos: ${endPos}`);
        // console.clear();

        allCoords.forEach((coord) => {
            //console.log(coord);
            if (boardObj.areWithinBoard(coord)) {
                let idString = convertCoordToId(coord);
                //console.log(`id string is: ${idString}, coord is ${coord}`);   
                if (validShipPlacement) {
                    document.getElementById(`${idString}`).classList.add('valid-ship-placement');
                } else {
                    document.getElementById(`${idString}`).classList.add('invalid-ship-placement');
                }
            }
        })
    }

    // Remove hover effects (eg on mouseleave)
    const clearHoverEffect = () => {
        const allSquares = document.querySelectorAll('.square');
        allSquares.forEach((square) => {
            square.classList.remove('valid-ship-placement');
            square.classList.remove('invalid-ship-placement');
        })
    }

    const outerContainer = document.querySelector('.container');
    clearChildElements(outerContainer);

    let gameboard;

    // if shiplength contains a number / isnt undefined
    // i.e. if ships still needs to be placed add click event
    if (shipLength !== undefined) {
        gameboard = displayBoard(boardArr, 'pre-game', placeShipClick);
        gameboard.addEventListener('mouseover', handlePlaceShipMouseEnter);
        gameboard.addEventListener('mouseout', handlePlaceShipMouseLeave);
        gameboard.addEventListener('contextmenu', rotateDirection);
    } else { //render board without events
        gameboard = displayBoard(boardArr, 'pre-game');
        console.log(boardArr);
    }

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('pre-game-gameboard-container');
    outerContainer.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);    
}

// mode will be called as'pre-game' or 'game' strings
function displayBoard(boardArr, mode, clickCb) {
    const gameboard = document.createElement('div');
    gameboard.classList.add(`${mode}`, 'gameboard');

    for (let i = boardArr.length - 1; i >= 0; i--) { // ROW i.e nums
        const row = boardArr[i];
        let rowCoord = i + 1;
        for (let j = 0; j < row.length; j++) { // COL
            if (j === 0) { // ROW LEGEND
                const rowLegend = document.createElement("div");                
                rowLegend.classList.add("legend", "row");
                rowLegend.textContent = i + 1;
                gameboard.append(rowLegend);
            }
            const colCoord = String.fromCharCode(65 + j); // convert to letters;
            const coordinate = `${rowCoord}${colCoord}`;
            const square = document.createElement('div');
            square.id = coordinate;
            square.classList.add('square');
            gameboard.appendChild(square);
            
            if (mode === 'pre-game' || mode === 'game') {
                if (typeof boardArr[i][j] === 'number') {
                    square.classList.add("ship");
                    square.innerHTML = ":)"
                };
            }
        }
    }
    // COL LEGEND
    for (let i = 0; i <= boardArr.length; i++) {
        const colLegend = document.createElement("div");
        colLegend.classList.add("legend", "col");
        colLegend.textContent = String.fromCharCode(64 + i);
        if (i === 0) {
            colLegend.textContent = "";
        }
        gameboard.append(colLegend);
    }
   
    if (clickCb) {
        gameboard.addEventListener('click', clickCb);       
    }    
    
    return gameboard;
}




/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetPlayerObjs: () => (/* binding */ resetPlayerObjs),
/* harmony export */   startGame: () => (/* binding */ startGame),
/* harmony export */   startPreGame: () => (/* binding */ startPreGame)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/factories/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");



// Main game loop
// The game loop should set up a new game by creating Players and Gameboards.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.

let player;
//let computer;

const resetPlayerObjs = () => {
    player = _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player();
    // console.log(player);
    //computer = Player.Computer();
}

// Main menu - start game btn
const startGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderOuterContainer();
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderMainMenu();
    resetPlayerObjs();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacementMenu(player);
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacement(player);
}


// Once ships placed, start game - render player and enemy boards & add player name to screen
// - click event on grid cell to attack enemy board (get another turn if hit)
// - receive enemy attack 
// - repeat until all ships sunks

// const startGame = () => {

// }


// Victory screen / restart btn




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



_modules_game__WEBPACK_IMPORTED_MODULE_0__.startGame();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxREFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUF3QjtBQUM1QixJQUFJLGdEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBNEI7QUFDaEMsSUFBSSxzREFBd0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMzQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDakI7QUFDdEI7QUFDQSxvREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcclxuICAgIGdhcDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcclxufVxyXG5cclxuLnNxdWFyZTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcclxufVxyXG5cclxuLmxlZ2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxyXG59XHJcblxyXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDIxMSwgMzUsIDAuNyk7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXJ0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTksMTMwLDI0Nik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsMENBQTBDO0lBQzFDLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXFxyXFxuICAgIGdhcDogM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgcGFkZGluZzogNDVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5hc2stbmFtZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLXNoaXAtcGxhY2VtZW50IHsgICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyMSwgMjI0LCAwLjgxNSk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkLXNoaXAtcGxhY2VtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNSwgMjExLCAzNSwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1OSwxMzAsMjQ2KTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uIERPTkVcclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxyXG4vLyBTSElQUyBTSE9VTEQgTk9UIEJFIEFCTEUgVE8gT1ZFUkxBUFxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNoaXBUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApO1xyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZSBzaGlwJ3MgaWQgaW50byB0aGUgYm9hcmQgYXJyYXkgYmV0d2VlbiBpbnB1dCBjb29yZHNcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcykgeyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBjb29yZHMgYmV0d2VlbiBzdGFydCBjb29yZCAmIGVuZCBjb29yZFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBhbW91bnQgb2YgY29vcmRzIGJldHdlZW4gdGhlIDIgZ2l2ZW4gaW5wdXRzXHJcbiAgICAgICAgY29uc3QgY29vcmRzQW1vdW50ID0gYWxsQ29vcmRzLmxlbmd0aDtcclxuICAgICAgICAvLyBHZXQgc2hpcExlbmd0aCAmIGlkIHByb3BzIGZyb20gU2hpcCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIC8vIHB1c2ggc2hpcGxlbmd0aCBvZiBlYWNoIHNoaXAgaW50byBuZXcgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoQXJyYXkgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGhBcnJheS5wdXNoKHNoaXBbdHlwZXNbaV1dLnNoaXBMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2hpcExlbmd0aEFycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGNvb3JkcyBiZXR3ZWVuLCAmIGluY2x1ZGluZywgdHdvIGlucHV0IGNvb3JkcyBlZy4gWzAsMF0sIFswLDNdXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIC8vIGZvcm1hdHMgZWFjaCBpbnB1dCBpbnRvIGFycmF5IHdpdGggMiBpdGVtcyAmIGFzc2lnbnMgdmFyIG5hbWVzIHRvIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIGVuZCBjb29yZCBmcm9tIHN0YXJ0IGNvb3JkICsgc2hpcGxlbmd0aCAmIGRpcmVjdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0RW5kQ29vcmQgKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdztcclxuICAgICAgICBsZXQgZW5kQ29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgLy8gdmVydGljYWwgZ29lcyBkb3dud2FyZHMgaW4gYXJyYXkgaW5kZXggKHVwd2FyZHMgaW4gRE9NKSwgaG9yaXpvbnRhbCBnb2VzIHJpZ2h0d2FyZHNcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGVuZFJvdyArPSBzaGlwTGVuZ3RoIC0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGVuZENvbCArPSBzaGlwTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtlbmRSb3csIGVuZENvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZXMgcGFpciBvZiBjb29yZHMsIGRldGVybWluZXMgd2hldGhlciB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHNlbmRzIGhpdCBmdW5jdGlvbiB0byBjb3JyZWN0IHNoaXAgb3IgcmVjb3JkcyBjb29yZHMgb2YgbWlzc2VkIHNob3RcclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICAvLyBTdG9yZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYm9hcmQgYXJyYXkgaW5kZWNlc1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgLy8gY29vcmRzIGNvbnRhaW4gYSBzaGlwIGlmIGJvYXJkVmFsdWUgaXMgYSBudW1iZXIuLi5cclxuICAgICAgICBjb25zdCBjb29yZHNDb250YWluU2hpcCA9IHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJztcclxuXHJcbiAgICAgICAgaWYgKGNvb3Jkc0NvbnRhaW5TaGlwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGhpdCBmdW5jdGlvbiB0byB0aGF0IHNoaXAgb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcE9iaiA9IHNoaXBbdHlwZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBPYmouaGl0KCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYW4gWCB0byB2YWx1ZSB0byByZXByZXNlbnQgYSBoaXRcclxuICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gKz0gJ1gnO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIFMgdG8gcmVwcmVzZW50IFN1bmsgdG8gZW50aXJlIHNoaXAgY29vcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPYmouaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnIuZm9yRWFjaCgocm93LCByKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQXJyW3JdW2NdLnRvU3RyaW5nKCkuaW5jbHVkZXMoaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcl1bY10gKz0gJ1MnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1N1bmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYm9hcmQgdmFsdWUgdG8gTSBmb3IgYSBtaXNzXHJcbiAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSA9ICdNJztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyBUaGUgZXZlcnkoKSBtZXRob2Qgb2YgQXJyYXkgaW5zdGFuY2VzIHRlc3RzIHdoZXRoZXIgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gSXQgcmV0dXJucyBhIEJvb2xlYW4gdmFsdWUuXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwc0Fyci5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcblxyXG4gICAgLy8gYXJlIGNvb3JkcyBlbXB0eSwgd2l0aGluIGJvYXJkXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgc2hpcCBjYW4gcGxhY2UgYmV0d2VlbiB0d28gZ2l2ZW4gY29vcmRzXHJcbiAgICBmdW5jdGlvbiBjYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpIHtcclxuICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3Jkcy5ldmVyeSgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFyZVdpdGhpbkJvYXJkKGNvb3JkKSAmJiBhcmVFbXB0eShjb29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBjb29yZHMgYXJlIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICBmdW5jdGlvbiBhcmVXaXRoaW5Cb2FyZChjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChyb3cgPj0gMTAgfHwgcm93IDwgMCB8fCBjb2wgPj0gMTAgfHwgY29sIDwgIDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBjb29yZHMgYXJlIGVtcHR5XHJcbiAgICBmdW5jdGlvbiBhcmVFbXB0eShjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGFsbFNoaXBzU3VuayxcclxuICAgICAgICBhcmVXaXRoaW5Cb2FyZCxcclxuICAgICAgICBjYW5QbGFjZVNoaXBCZXR3ZWVuLFxyXG4gICAgICAgIGNyZWF0ZUJvYXJkQXJyYXksXHJcbiAgICAgICAgY3JlYXRlU2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIGdldEFsbENvb3JkcyxcclxuICAgICAgICBnZXRBbGxOdW1zQmV0d2VlbixcclxuICAgICAgICBnZXRBcnJheSxcclxuICAgICAgICBnZXRFbmRDb29yZCxcclxuICAgICAgICBnZXRTaGlwVHlwZXMsXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssICAgICAgICBcclxuICAgICAgICB0eXBlcyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuLy8gUGxheWVycyBjYW4gdGFrZSB0dXJucyBwbGF5aW5nIHRoZSBnYW1lIGJ5IGF0dGFja2luZyB0aGUgZW5lbXkgR2FtZWJvYXJkLlxyXG4vLyBUaGUgZ2FtZSBpcyBwbGF5ZWQgYWdhaW5zdCB0aGUgY29tcHV0ZXIsIHNvIG1ha2UgdGhlIOKAmGNvbXB1dGVy4oCZIGNhcGFibGUgb2YgbWFraW5nIHJhbmRvbSBwbGF5cy4gVGhlIEFJIGRvZXMgbm90IGhhdmUgdG8gYmUgc21hcnQsIGJ1dCBpdCBzaG91bGQga25vdyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIG1vdmUgaXMgbGVnYWwgKGkuZS4gaXQgc2hvdWxkbuKAmXQgc2hvb3QgdGhlIHNhbWUgY29vcmRpbmF0ZSB0d2ljZSkuXHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IGdldFNoaXBMZW5ndGhBcnJheSgpOyAgIFxyXG4gICAgY29uc3Qgc2hpcExpc3QgPSBnZXRTaGlwTGlzdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkT2JqKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCb2FyZEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5nZXRBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ3N1Ym1hcmluZScsICdjcnVpc2VyJywgJ3BhdHJvbEJvYXQnXVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldFNoaXBUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFs1LCA0LCAzLCAzLCAyXSBcclxuICAgIGZ1bmN0aW9uIGdldFNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuY3JlYXRlU2hpcExlbmd0aEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdFBsYXkgPSBpc1JlcGVhdFBsYXkoY29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICBpZiAocmVwZWF0UGxheSkgcmV0dXJuICdyZXBlYXQnO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkcyBoYXZlIGJlZW4gdGFyZ2V0dGVkIGFscmVhZHlcclxuICAgIGZ1bmN0aW9uIGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQXJyID0gZW5lbXlCb2FyZC5nZXRBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChib2FyZFZhbHVlID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdlblJhbmRvbUNvb3JkcygpIHtcclxuICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjayxcclxuICAgICAgICBnZW5SYW5kb21Db29yZHMsXHJcbiAgICAgICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgICAgICBnZXRCb2FyZE9iaiwgICAgICAgIFxyXG4gICAgICAgIGdldFNoaXBMaXN0LFxyXG4gICAgICAgIHNoaXBMZW5ndGhBcnJheSxcclxuICAgICAgICBzaGlwTGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJbmhlcml0IGZyb20gUGxheWVyIGZhY3RvcnlcclxuY29uc3QgQ29tcHV0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm90byA9IFBsYXllcigpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmRvbUF0dGFjayhlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUNvb3JkcyA9IHByb3RvLmdlblJhbmRvbUNvb3JkcygpO1xyXG4gICAgICAgIGNvbnN0IGF0dGFja2VkQ29vcmQgPSBwcm90by5hdHRhY2socmFuZG9tQ29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICByZXR1cm4gYXR0YWNrZWRDb29yZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByb3RvLFxyXG4gICAgICAgIHJhbmRvbUF0dGFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07IiwiLy8gbGVuZ3RoID0gbnVtYmVyXHJcbi8vIGhpdHMgPSBudW1iZXIgb3IgYXJyYXkgb2YgYm9vbGVhbiB2YWx1ZXMgcmVwcmVzZW50aW5nIGVhY2ggc2hpcCBwYXJ0P1xyXG4vLyBpc1N1bmsgPSBlaXRoZXIgY2hlY2sgaWYgZGFtYWdlID49IGxlbmd0aCBPUiBjaGVjayBpZiBldmVyeSBhcnJheSBlbGVtZW50IGlzIHRydWVcclxuXHJcbi8vIFwiUkVNRU1CRVIgeW91IG9ubHkgaGF2ZSB0byB0ZXN0IHlvdXIgb2JqZWN04oCZcyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5IG1ldGhvZHMgb3IgcHJvcGVydGllcyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgeW91ciDigJhzaGlw4oCZIG9iamVjdCBuZWVkIHVuaXQgdGVzdHMuXCJcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcFR5cGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0ge1xyXG4gICAgICAgIGNhcnJpZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNSxcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWFyaW5lOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3J1aXNlcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMixcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaGl0c0Ftb3VudCA9IDA7XHJcbiAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwQ2xhc3Nlc1tzaGlwVHlwZV07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZIHRvIHlvdXIgc2hpcC5cclxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdHNBbW91bnQrKztcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB3aGV0aGVyIGhhcyBzdW5rIGJhc2VkIG9uIHNoaXAncyBsZW5ndGggYW5kIHRoZSBudW1iZXIgb2Yg4oCYaGl0c+KAmS5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzQW1vdW50ID49IHNoaXBMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBDbGFzc2VzLFxyXG4gICAgICAgIHNoaXBMZW5ndGgsXHJcbiAgICAgICAgaGl0LFxyXG4gICAgICAgIGhpdHNBbW91bnQsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgaXNTdW5rLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gXCIuL2dhbWVcIjtcclxuXHJcbi8vIGRpc3BsYXkgYm90aCB0aGUgcGxheWVy4oCZcyBib2FyZHMgYW5kIHJlbmRlciB0aGVtIHVzaW5nIGluZm9ybWF0aW9uIGZyb20gdGhlIEdhbWVib2FyZCBjbGFzcy9mYWN0b3J5LlxyXG4vLyBZb3UgbmVlZCBtZXRob2RzIHRvIHJlbmRlciB0aGUgZ2FtZWJvYXJkcyBhbmQgdG8gdGFrZSB1c2VyIGlucHV0IGZvciBhdHRhY2tpbmcuIEZvciBhdHRhY2tzLCBsZXQgdGhlIHVzZXIgY2xpY2sgb24gYSBjb29yZGluYXRlIGluIHRoZSBlbmVteSBHYW1lYm9hcmQuXHJcblxyXG5jb25zdCByZW5kZXJPdXRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwc1wiO1xyXG4gICAgY29uc3Qgc3RhcnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidG4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcclxuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7XHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChzdGFydEJ0bkNvbnRhaW5lcik7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ0bik7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOYW1lTWVudSk7XHJcbn1cclxuXHJcbi8vIGNvbnN0IGNsZWFyTWVudSA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpO1xyXG4vLyAgICAgbWVudUNhcmQuaW5uZXJIVE1MID0gJyc7XHJcbi8vIH1cclxuXHJcbi8vIFJlbW92ZSBjaGlsZCBlbHMgZnJvbSBhIHBhcmVudCBlbFxyXG5jb25zdCBjbGVhckNoaWxkRWxlbWVudHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TmFtZU1lbnUgPSAocGxheWVyTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXJkJyk7ICAgIFxyXG4gICAgY29uc3QgYXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcclxuICAgIGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXNrLW5hbWUtY29udGFpbmVyJyk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChhc2tOYW1lQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsIG9uZSBuYW1lOiBgXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xyXG4gICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XHJcbiAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGdldE5hbWUocGxheWVyTmFtZSk7XHJcbiAgICAgICAgICAgIC8vY2xlYXJNZW51KCk7XHJcbiAgICAgICAgICAgIEdBTUUucmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICAgICAgICAgIEdBTUUuc3RhcnRQcmVHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZ2V0TmFtZSA9IChwbGF5ZXJOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0JykudmFsdWU7XHJcbiAgICBwbGF5ZXJOYW1lID0gbmFtZUlucHV0VmFsdWU7XHJcbiAgICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuLy8gdGFrZXMgaW5wdXQgc3F1YXJlIGlkIHN0cmluZyAtIHJldHVybnMgYm9hcmQgYXJyYXkgaW5kZWNlcyBlLmcuICcxMEEnID0gWzksMF1cclxuZnVuY3Rpb24gcGFyc2VDb29yZHMoc3F1YXJlSWQpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sO1xyXG5cclxuICAgIGlmIChzcXVhcmVJZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAvLyBmaXJzdCBjaGFyYWN0ZXIgKHJvdyBudW0pIG9uIHNxciBpZCB3aWxsIGJlICsxIGFoZWFkIG9mIGFycmF5IGluZGV4XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoc3F1YXJlSWQuY2hhckF0KDApKSAtMTtcclxuICAgICAgICAvLyBzZWNvbmQgY2hhcmFjdGVyIChjb2wgbGV0dGVyKSB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSBBLUogdG8gMC05XHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgxKSAtIDY1O1xyXG4gICAgfSBlbHNlIHsgLy8gc3FyIGlkIHN0cmluZyBpcyAzIGNoYXJhY3RlcnNcclxuICAgICAgICBjb25zdCBmaXJzdFR3b0NoYXJzID0gc3F1YXJlSWQuc2xpY2UoMCwyKTtcclxuICAgICAgICByb3cgPSBwYXJzZUludChmaXJzdFR3b0NoYXJzKSAtIDE7XHJcbiAgICAgICAgLy8gdGhpcmQgY2hhcmFjdGVyIGNvbnZlcnQgdG8gbnVtXHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgyKSAtIDY1O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyb3csIGNvbF07XHJcbn1cclxuXHJcbi8vIHRha2UgYXJyYXkgaW5wdXQgbnVtcyBhbmQgY29udmVydCBpdCB0byBzcXVhcmUgaWQgc3RyaW5nIC0gWzksMF0gPSAnMTBBJ1xyXG5mdW5jdGlvbiBjb252ZXJ0Q29vcmRUb0lkKGFycmF5SXRlbSkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGFycmF5SXRlbTtcclxuICAgIGxldCBuZXdSb3cgPSByb3cgKyAxO1xyXG4gICAgbGV0IG5ld0NvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xyXG4gICAgbGV0IHN0cmluZ0lkID0gYCR7bmV3Um93fSR7bmV3Q29sfWA7ICAgIFxyXG4gICAgcmV0dXJuIHN0cmluZ0lkO1xyXG59XHJcblxyXG4vLyBuZWVkIHRvIHNlcGFyYXRlIHJlbmRlciBzaGlwIHBsYWNlbWVudCBmcm9tIGRpc3BsYXkgbWVudS4uLj9cclxuY29uc3QgZGlzcGxheVNoaXBQbGFjZW1lbnRNZW51ID0gKHBsYXllck5hbWUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtnZXROYW1lKHBsYXllck5hbWUpfSBwbGFjZSB5b3VyIHNoaXBzYDtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VtZW50LXRpdGxlJyk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTaGlwUGxhY2VtZW50ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmRPYmogPSBwbGF5ZXIuZ2V0Qm9hcmRPYmooKTtcclxuICAgIGNvbnN0IGJvYXJkQXJyID0gcGxheWVyLmdldEJvYXJkQXJyYXkoKTsgICAgXHJcblxyXG4gICAgLy8gLSBwb3AgcmVtb3ZlcyAmIHJldHVybnMgbGFzdCBlbGVtZW50IG9mIGFycmF5IC0gb25jZSB0aGUgYXJyYXkgaXMgZW1wdHkgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICBjb25zdCBzaGlwVHlwZSA9IHBsYXllci5zaGlwTGlzdC5wb3AoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBwbGF5ZXIuc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gICAgXHJcbiAgICAvLyBDbGljayBhIHNxdWFyZSB0byBwbGFjZSBzaGlwXHJcbiAgICBjb25zdCBwbGFjZVNoaXBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gc3F1YXJlIGlkIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbGVnZW5kICYgdGhlIGdhcHMgYmV0d2VlbiBzcXVhcmVzIG5vbiBjbGlja2FibGUpXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIGNvb3JkcyBpbiBhcnJheSBmb3JtYXRcclxuICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyBlbmQgcG9zIGNvb3JkIGNhbGNkIGZyb20gc3RhcnQgcG9zXHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gYm9hcmRPYmouZ2V0RW5kQ29vcmQoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmRPYmouY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGFyZSBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgQ3VycmVudCBzaGlwIGlzOiAke3NoaXBUeXBlfSBsZW5ndGggaXMgJHtzaGlwTGVuZ3RofSBzcXVhcmVzYCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkICR7ZS50YXJnZXQuaWR9YCk7XHJcblxyXG4gICAgICAgICAgICBib2FyZE9iai5wbGFjZVNoaXAoc2hpcFR5cGUsIHN0YXJ0UG9zLCBlbmRQb3MpOyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2FyZEFycik7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZSAtIHBvcCBhIG5ldyBzaGlwIHR5cGUgaW50byBwbGFjZVNoaXAgZnVuY3Rpb24gdW50aWwgZXZlcnkgc2hpcCBpcyBwbGFjZWRcclxuICAgICAgICAgICAgZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgZW50ZXIgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3aXRjaCBzaGlwIG9yaWVudGF0aW9uIGR1cmluZyBwbGFjZW1lbnQgdG8gcHV0IG9uIHJpZ2h0IGNsaWNrXHJcbiAgICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByZXZlbnQgcmlnaHQgY2xpY2sgbWVudSBhcHBlYXJpbmdcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHsgLy9lLmcuIGlmIGxlZ2VuZFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBob3ZlciBlZmZlY3QgdG8gZGl2IHNxdWFyZSBpZCBcclxuICAgIGNvbnN0IGRpc3BsYXlIb3ZlckVmZmVjdCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyc2VDb29yZHMocG9zaXRpb24pOyAvLyBlZy4gMTBBID0gJ1s5LDBdJ1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpOyAvL2VnLiBbOSwwXSwgJ3ZlcnRpY2FsJywgMiA9IFsxMCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGJvYXJkT2JqLmdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBpZiBjb29yZHMgYXJlIGVtcHR5ICYgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgICAgICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSBib2FyZE9iai5jYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGAke3NoaXBUeXBlfSAoJHtzaGlwTGVuZ3RofSBzcXVhcmVzKTogU3RhcnQgcG9zOiR7c3RhcnRQb3N9IEVuZCBwb3M6ICR7ZW5kUG9zfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29vcmQpO1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRPYmouYXJlV2l0aGluQm9hcmQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRTdHJpbmcgPSBjb252ZXJ0Q29vcmRUb0lkKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGlkIHN0cmluZyBpczogJHtpZFN0cmluZ30sIGNvb3JkIGlzICR7Y29vcmR9YCk7ICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgaG92ZXIgZWZmZWN0cyAoZWcgb24gbW91c2VsZWF2ZSlcclxuICAgIGNvbnN0IGNsZWFySG92ZXJFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICBhbGxTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKG91dGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgZ2FtZWJvYXJkO1xyXG5cclxuICAgIC8vIGlmIHNoaXBsZW5ndGggY29udGFpbnMgYSBudW1iZXIgLyBpc250IHVuZGVmaW5lZFxyXG4gICAgLy8gaS5lLiBpZiBzaGlwcyBzdGlsbCBuZWVkcyB0byBiZSBwbGFjZWQgYWRkIGNsaWNrIGV2ZW50XHJcbiAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnLCBwbGFjZVNoaXBDbGljayk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJvdGF0ZURpcmVjdGlvbik7XHJcbiAgICB9IGVsc2UgeyAvL3JlbmRlciBib2FyZCB3aXRob3V0IGV2ZW50c1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByZS1nYW1lLWdhbWVib2FyZC1jb250YWluZXInKTtcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTsgICAgXHJcbn1cclxuXHJcbi8vIG1vZGUgd2lsbCBiZSBjYWxsZWQgYXMncHJlLWdhbWUnIG9yICdnYW1lJyBzdHJpbmdzXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZEFyciwgbW9kZSwgY2xpY2tDYikge1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChgJHttb2RlfWAsICdnYW1lYm9hcmQnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gYm9hcmRBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgLy8gUk9XIGkuZSBudW1zXHJcbiAgICAgICAgY29uc3Qgcm93ID0gYm9hcmRBcnJbaV07XHJcbiAgICAgICAgbGV0IHJvd0Nvb3JkID0gaSArIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHsgLy8gQ09MXHJcbiAgICAgICAgICAgIGlmIChqID09PSAwKSB7IC8vIFJPVyBMRUdFTkRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIiwgXCJyb3dcIik7XHJcbiAgICAgICAgICAgICAgICByb3dMZWdlbmQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmQocm93TGVnZW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb2xDb29yZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKTsgLy8gY29udmVydCB0byBsZXR0ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYCR7cm93Q29vcmR9JHtjb2xDb29yZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmlkID0gY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAncHJlLWdhbWUnIHx8IG1vZGUgPT09ICdnYW1lJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEFycltpXVtqXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiOilcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENPTCBMRUdFTkRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2xMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcImNvbFwiKTtcclxuICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY0ICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChjb2xMZWdlbmQpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlmIChjbGlja0NiKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYik7ICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7ICAgIFxyXG4gICAgZGlzcGxheU5hbWVNZW51LFxyXG4gICAgcmVuZGVyT3V0ZXJDb250YWluZXIsXHJcbiAgICByZW5kZXJNYWluTWVudSxcclxuICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50TWVudSxcclxuICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50XHJcbn0iLCJpbXBvcnQgKiBhcyBQbGF5ZXIgZnJvbSAnLi4vZmFjdG9yaWVzL3BsYXllcic7XHJcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XHJcblxyXG4vLyBNYWluIGdhbWUgbG9vcFxyXG4vLyBUaGUgZ2FtZSBsb29wIHNob3VsZCBzZXQgdXAgYSBuZXcgZ2FtZSBieSBjcmVhdGluZyBQbGF5ZXJzIGFuZCBHYW1lYm9hcmRzLlxyXG4vLyBUaGUgZ2FtZSBsb29wIHNob3VsZCBzdGVwIHRocm91Z2ggdGhlIGdhbWUgdHVybiBieSB0dXJuIHVzaW5nIG9ubHkgbWV0aG9kcyBmcm9tIG90aGVyIG9iamVjdHMuIElmIGF0IGFueSBwb2ludCB5b3UgYXJlIHRlbXB0ZWQgdG8gd3JpdGUgYSBuZXcgZnVuY3Rpb24gaW5zaWRlIHRoZSBnYW1lIGxvb3AsIHN0ZXAgYmFjayBhbmQgZmlndXJlIG91dCB3aGljaCBjbGFzcyBvciBtb2R1bGUgdGhhdCBmdW5jdGlvbiBzaG91bGQgYmVsb25nIHRvLlxyXG4vLyBDcmVhdGUgY29uZGl0aW9ucyBzbyB0aGF0IHRoZSBnYW1lIGVuZHMgb25jZSBvbmUgcGxheWVy4oCZcyBzaGlwcyBoYXZlIGFsbCBiZWVuIHN1bmsuIFRoaXMgZnVuY3Rpb24gaXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBHYW1lIG1vZHVsZS5cclxuXHJcbmxldCBwbGF5ZXI7XHJcbi8vbGV0IGNvbXB1dGVyO1xyXG5cclxuY29uc3QgcmVzZXRQbGF5ZXJPYmpzID0gKCkgPT4ge1xyXG4gICAgcGxheWVyID0gUGxheWVyLlBsYXllcigpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGxheWVyKTtcclxuICAgIC8vY29tcHV0ZXIgPSBQbGF5ZXIuQ29tcHV0ZXIoKTtcclxufVxyXG5cclxuLy8gTWFpbiBtZW51IC0gc3RhcnQgZ2FtZSBidG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgRE9NLnJlbmRlck91dGVyQ29udGFpbmVyKCk7XHJcbiAgICBET00ucmVuZGVyTWFpbk1lbnUoKTtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpO1xyXG59XHJcblxyXG4vLyBQUkUtR0FNRSAtIHRha2UgcGxheWVyIG5hbWUsIHNoaXAgcGxhY2VtZW50XHJcbmNvbnN0IHN0YXJ0UHJlR2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudE1lbnUocGxheWVyKTtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG59XHJcblxyXG5cclxuLy8gT25jZSBzaGlwcyBwbGFjZWQsIHN0YXJ0IGdhbWUgLSByZW5kZXIgcGxheWVyIGFuZCBlbmVteSBib2FyZHMgJiBhZGQgcGxheWVyIG5hbWUgdG8gc2NyZWVuXHJcbi8vIC0gY2xpY2sgZXZlbnQgb24gZ3JpZCBjZWxsIHRvIGF0dGFjayBlbmVteSBib2FyZCAoZ2V0IGFub3RoZXIgdHVybiBpZiBoaXQpXHJcbi8vIC0gcmVjZWl2ZSBlbmVteSBhdHRhY2sgXHJcbi8vIC0gcmVwZWF0IHVudGlsIGFsbCBzaGlwcyBzdW5rc1xyXG5cclxuLy8gY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG5cclxuLy8gfVxyXG5cclxuXHJcbi8vIFZpY3Rvcnkgc2NyZWVuIC8gcmVzdGFydCBidG5cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzLFxyXG4gICAgc3RhcnRQcmVHYW1lLFxyXG4gICAgc3RhcnRHYW1lXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuR0FNRS5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=