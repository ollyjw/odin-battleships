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

.container,
.boards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;  
    font-family: sans-serif;    
    height: 100vh;
    gap: 30px;
}

.gameboard {
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 30px);
    grid-template-rows: repeat(10, 30px) 0.5fr;    
    gap: 3px;
    margin-top: 60px;
}

.square {
    /* padding: 20px; */
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

.start-pregame-btn-container {
    display: flex;
    justify-content: center;
}

.btn-container {
    background-color: rgba(255,255,255,0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    border: 1px solid rgba(0,0,0,.125);
    padding: 30px;
    margin-top: 15px;
    width: 286px;
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
    background-color: #23d323;
}

.hit {
    background-color: #ff0000;
}

.sunk {
    background-color: #ff6a6a;
}

.miss {
    background-color: #0a58ca;
}

.btn {    
    color: #fff;
    padding: 10px 20px;
    font-size: large;
    border-style: none;
    border-radius: 10px;
    margin-right: 15px;
    align-self: center;
    margin-bottom: 15px;    
}

.btn-group .btn {
    width: 100%;
}

.btn:hover {
    cursor: pointer;
}

.start-btn {
    background-color: #3b82f6;
}

.start-btn:hover {
    background-color: #0a58ca;
    border-color: #0a53be;
    cursor: pointer;
}

.place-ships-btn {
    background-color: #0dbc0d;
}

.reset-btn {
    background-color: #c9cd14;
}

.title {
    text-align: center;
}

.board-title {
    text-align: center;
    position: relative;
}

.board-title:before {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: -10px;
    background-color: #fff;
}

.board-title.player {
    color: #23d323;
}

.board-title.enemy {
    color: #ff0000;
}

.ship-counter {
    text-align: center;
    color: #fff;
}

.turn-tracker-container {
    display: flex;
    align-items: center;
}

.turntracker {
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    width: 200px;
    text-align: center;    
}

.game-over-modal {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
    padding: 45px;
    background-color: rgba(255,255,255,0.8);
    text-align: center;
}

.game-over-modal h2 {
    margin-top: 0;
}

.return-menu-btn {
    background-color: #3b82f6;
}
.return-menu-btn:hover {
    background-color: #0a58ca;
    border-color: #0a53be;
}

.play-again-btn {
    background-color: #0dbc0d;
}
.play-again-btn:hover {
    background-color: #0d8d0d;
}

.d-none {
    display: none;
}


@media only screen and (min-width:1063px) {
    .gameboard {
        display: grid;
        grid-template-columns: 0.5fr repeat(10, 60px);
        grid-template-rows: repeat(10, 60px) 0.5fr;    
        gap: 3px;
        margin-top: 60px;
    }
    .square {
        padding: 20px;
    }    
    .btn-container {
        width: auto;
    }
    .btn-group .btn {
        width: auto;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;IACV,UAAU;IACV,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI;QACI,aAAa;QACb,6CAA6C;QAC7C,0CAA0C;QAC1C,QAAQ;QACR,gBAAgB;IACpB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container,\r\n.boards-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;    \r\n    height: 100vh;\r\n    gap: 30px;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    /* padding: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    width: 40rem;\r\n    padding: 45px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.start-pregame-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-container {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    padding: 30px;\r\n    margin-top: 15px;\r\n    width: 286px;\r\n}\r\n\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: #23d323;\r\n}\r\n\r\n.hit {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.sunk {\r\n    background-color: #ff6a6a;\r\n}\r\n\r\n.miss {\r\n    background-color: #0a58ca;\r\n}\r\n\r\n.btn {    \r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n    margin-bottom: 15px;    \r\n}\r\n\r\n.btn-group .btn {\r\n    width: 100%;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n    background-color: #3b82f6;\r\n}\r\n\r\n.start-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-ships-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n\r\n.reset-btn {\r\n    background-color: #c9cd14;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.board-title {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.board-title:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.board-title.player {\r\n    color: #23d323;\r\n}\r\n\r\n.board-title.enemy {\r\n    color: #ff0000;\r\n}\r\n\r\n.ship-counter {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.turn-tracker-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.turntracker {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;    \r\n}\r\n\r\n.game-over-modal {\r\n    position: relative;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 45px;\r\n    background-color: rgba(255,255,255,0.8);\r\n    text-align: center;\r\n}\r\n\r\n.game-over-modal h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.return-menu-btn {\r\n    background-color: #3b82f6;\r\n}\r\n.return-menu-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n}\r\n\r\n.play-again-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n.play-again-btn:hover {\r\n    background-color: #0d8d0d;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n\r\n@media only screen and (min-width:1063px) {\r\n    .gameboard {\r\n        display: grid;\r\n        grid-template-columns: 0.5fr repeat(10, 60px);\r\n        grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .square {\r\n        padding: 20px;\r\n    }    \r\n    .btn-container {\r\n        width: auto;\r\n    }\r\n    .btn-group .btn {\r\n        width: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
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

    // takes pair of coords, determines whether the attack hit a ship and sends hit function to the correct ship or records coords of missed shot
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
                    // append S to represent Sunk to entire ship coords
                    if (shipObj.isSunk()) {
                        boardArr.forEach((row, r) => {
                            row.forEach((col, c) => {
                                if (boardArr[r][c].toString().includes(id)){
                                    boardArr[r][c] = `${id}S`;
                                }
                            })
                        })
                    } else {
                        // append an X to value to represent a hit
                        boardArr[row][col] += 'X';
                    }                    
                    if (allShipsSunk()) return 'Game Over'; // Game over has to return before final ship sunk
                    if (shipObj.isSunk()) return 'Sunk';
                    return 'Hit';
                }
            }
        } else {
            // board value to M for a miss
            boardArr[row][col] = 'M';
            return 'Miss';
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

    // generate 2 random numbers between 0-9 and return in array
    function genRandomCoords() {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        return [x, y];
    }

    // Recursive ship placement - pop new shiptype & shiplength until all ships placed
    function placeShipsRandomly() {
        const shipType = shipList.pop();
        if (shipType === undefined) return;
        const shipLength = shipLengthArray.pop();
        if (shipLength === undefined) return;

        let startPos, direction, endPos, validShipPlacement;

        // while theres no valid ship placement assign values to vars for use in functions until shipType & shipLength return undefined
        while (!validShipPlacement) {
            startPos = genRandomCoords();
            direction = Math.random() < 0.5 ? 'vertical' : 'horizontal';
            endPos = board.getEndCoord(startPos, direction, shipLength);

            validShipPlacement = board.canPlaceShipBetween(startPos, endPos);
        }
        
        board.placeShip(shipType, startPos, endPos);
        placeShipsRandomly();
    }

    return {
        attack,
        genRandomCoords,
        getBoardArray,
        getBoardObj,        
        getShipList,
        placeShipsRandomly,
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
/* harmony export */   renderBoardUpdates: () => (/* binding */ renderBoardUpdates),
/* harmony export */   renderEnemyBoard: () => (/* binding */ renderEnemyBoard),
/* harmony export */   renderGameLayout: () => (/* binding */ renderGameLayout),
/* harmony export */   renderMainMenu: () => (/* binding */ renderMainMenu),
/* harmony export */   renderOuterContainer: () => (/* binding */ renderOuterContainer),
/* harmony export */   renderPlayerBoard: () => (/* binding */ renderPlayerBoard),
/* harmony export */   renderTurnTracker: () => (/* binding */ renderTurnTracker),
/* harmony export */   renderVictoryScreen: () => (/* binding */ renderVictoryScreen)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");


const renderOuterContainer = () => {
    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);
    const boardsContainer = document.createElement('div');
    boardsContainer.classList.add('boards-container');
    container.appendChild(boardsContainer);
}

const renderMainMenu = () => {
    const outerContainer = document.querySelector('.container');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Battleships";
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add("start-pregame-btn-container");
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn', 'start-btn');
    startBtn.id = "start";
    startBtn.textContent = 'Start game';    
    outerContainer.appendChild(menuContainer);    
    menuContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
    startBtn.addEventListener('click', displayNameMenu);
}

const hideMenu = () => {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.add('d-none');
}

const getName = () => {
    let playerName = document.getElementById('name-input').value;
    if (playerName === "") {
        playerName = 'Admiral one';
    }
    return playerName;
}

const displayNameMenu = () => {
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
            getName();
            _game__WEBPACK_IMPORTED_MODULE_0__.startPreGame();
            hideMenu();
        }
    })
    document.getElementById('start').disabled = true;
}

// Remove child els from a parent el & returns removed node - e.g. outercontainer
const clearChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
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
            //console.log(boardArr);
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

    const handleStartGameplay = () => {
        // if ships arent all placed, don't start
        if (shipLength !== undefined) {
            return;
        }
        _game__WEBPACK_IMPORTED_MODULE_0__.startGamePlay();
    }

    //FIX LATER: NEED TO ADJUST GETNAME FUNCTION FOR THIS TO WORK
    const handleResetShips = () => {
        console.clear();
        _game__WEBPACK_IMPORTED_MODULE_0__.resetPlayerObjs();
        _game__WEBPACK_IMPORTED_MODULE_0__.startPreGame();
    }

    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('btn','start-btn');
    startGameBtn.textContent = 'Start Game';
    startGameBtn.addEventListener('click', handleStartGameplay);

    const autoShipPlacementBtn = document.createElement('button');
    autoShipPlacementBtn.classList.add('btn', 'place-ships-btn');
    autoShipPlacementBtn.textContent = 'Auto place';
    autoShipPlacementBtn.addEventListener('click', _game__WEBPACK_IMPORTED_MODULE_0__.autoShipPlacement);

    const resetShipsBtn = document.createElement('button');
    resetShipsBtn.classList.add('btn', 'reset-btn');
    resetShipsBtn.textContent = 'Reset Ships';
    resetShipsBtn.addEventListener('click', handleResetShips);

    const outerContainer = document.querySelector('.container');
    const boardsContainer = document.querySelector('.boards-container');
    
    clearChildElements(boardsContainer);    

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
    }

    let instructions;

    if (shipLength) { // if contains a num
        instructions = `Place the ${shipType}. Right click to rotate.`;
    } else {
        instructions = `Click on start game to begin!`;
    }

    const instructionsPara = document.createElement('p');
    instructionsPara.classList.add('instructions');
    instructionsPara.textContent = instructions;

    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('pre-game-gameboard-container');
    outerContainer.appendChild(boardsContainer);
    boardsContainer.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);   

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    gameboardContainer.appendChild(btnContainer);
    btnContainer.appendChild(instructionsPara);
    btnContainer.appendChild(btnGroup);

    btnGroup.appendChild(autoShipPlacementBtn);
    btnGroup.appendChild(resetShipsBtn);    
    btnGroup.appendChild(startGameBtn);
}

// mode will be called as'pre-game' or 'player'/'enemy' strings
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
            
            if (mode === 'pre-game' || mode === 'player') {
                if (typeof boardArr[i][j] === 'number') {
                    square.classList.add("ship");
                    square.innerHTML = ":)";
                };
            }
            
            if (boardArr[i][j].toString().includes('X')) {
                square.classList.add("hit");
                square.innerHTML = "X";
            } else if (boardArr[i][j].toString().includes('S')) {
                square.classList.add("sunk");
            } else if (boardArr[i][j] === 'M') {
                square.classList.add("miss");
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

const renderTurnTracker = () => {
    const turnTrackerContainer = document.querySelector('.turn-tracker-container');
    const turnTracker = document.createElement('h2');
    turnTracker.classList.add('turntracker');  

    turnTracker.textContent = `${_game__WEBPACK_IMPORTED_MODULE_0__.getTurn()}'s turn`;
    if (_game__WEBPACK_IMPORTED_MODULE_0__.getTurn() === 'Player') {
        turnTracker.textContent = `${getName()}'s turn`;
    } 
    
    clearChildElements(turnTrackerContainer);
    turnTrackerContainer.appendChild(turnTracker);
}

const renderGameLayout = () => {
    const playerContainer = document.createElement('div');
    playerContainer.classList.add("player-container");
    const enemyContainer = document.createElement('div');
    enemyContainer.classList.add("enemy-container");
    const turnTrackerContainer = document.createElement('div');
    turnTrackerContainer.classList.add('turn-tracker-container');

    
    const boardsContainer = document.querySelector('.boards-container');    
    clearChildElements(boardsContainer);
    boardsContainer.appendChild(playerContainer);
    boardsContainer.appendChild(turnTrackerContainer);
    renderTurnTracker();
    boardsContainer.appendChild(enemyContainer);
}

const renderBoardUpdates = (enemyBoardArr, playerBoardArr) => {
    renderEnemyBoard(enemyBoardArr);
    renderPlayerBoard(playerBoardArr);
}

const renderPlayerBoard = (playerBoardArr) => {
    const playerContainer = document.querySelector('.player-container');
    clearChildElements(playerContainer);

    const playerBoard = displayBoard(playerBoardArr, 'player');

    const playerHeading = document.createElement('h2');
    playerHeading.classList.add('board-title', 'player');
    playerHeading.textContent = 'Player board';
    const remainingShipCounter = document.createElement('p');
    remainingShipCounter.classList.add('ship-counter');
    remainingShipCounter.textContent = 'X Ships remaining';

    playerContainer.appendChild(playerBoard);
    playerContainer.appendChild(playerHeading);
    playerContainer.appendChild(remainingShipCounter);
}

const renderEnemyBoard = (enemyBoardArr) => {
    const enemyContainer = document.querySelector('.enemy-container');
    clearChildElements(enemyContainer);
    
    const enemyBoard = displayBoard(enemyBoardArr, 'enemy', handleAttackClick);

    const enemyHeading = document.createElement('h2');
    enemyHeading.classList.add('board-title', 'enemy');
    const remainingShipCounter = document.createElement('p');
    remainingShipCounter.classList.add('ship-counter');
    remainingShipCounter.textContent = 'X Ships remaining';

    enemyHeading.textContent = 'Enemy board';
    enemyContainer.appendChild(enemyBoard);
    enemyContainer.appendChild(enemyHeading);
    enemyContainer.appendChild(remainingShipCounter);    
}

const handleAttackClick = (e) => {
    if (_game__WEBPACK_IMPORTED_MODULE_0__.getTurn() === 'Enemy') return;
    const position = e.target.getAttribute("id");
    if (position === null) return;
    const coords = parseCoords(position);
    _game__WEBPACK_IMPORTED_MODULE_0__.playerAttack(coords);
}

const renderVictoryScreen = (winner) => {
    const modal = document.createElement('div');
    modal.classList.add('game-over-modal');
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    const playAgainBtn = document.createElement('button');
    playAgainBtn.classList.add('btn', 'play-again-btn');
    playAgainBtn.textContent = 'Play again';
    const returnToMenuBtn = document.createElement('button');
    returnToMenuBtn.classList.add('btn', 'return-menu-btn');
    returnToMenuBtn.textContent = 'Return to menu';
    playAgainBtn.addEventListener('click', _game__WEBPACK_IMPORTED_MODULE_0__.playAgain);
    returnToMenuBtn.addEventListener('click', handleReturnToMenu);
    
    const header = document.createElement('h2');
    const para = document.createElement('p');
    if (winner === 'Player') {
        header.textContent = `You win!`;
        para.textContent = `Congratulations! Want to play another round?`;
    } else {
        header.textContent = `You lose`;
        para.textContent = `Better luck next time. Want to try again?`;
    }

    const outerContainer = document.querySelector('.container');
    clearChildElements(outerContainer);
    outerContainer.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(para);
    modal.appendChild(btnGroup);
    btnGroup.appendChild(returnToMenuBtn);
    btnGroup.appendChild(playAgainBtn);
    
}

const handleReturnToMenu = () => {
    const body = document.querySelector('body');
    clearChildElements(body);
    _game__WEBPACK_IMPORTED_MODULE_0__.startGame();
}



/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoShipPlacement: () => (/* binding */ autoShipPlacement),
/* harmony export */   getTurn: () => (/* binding */ getTurn),
/* harmony export */   playAgain: () => (/* binding */ playAgain),
/* harmony export */   playerAttack: () => (/* binding */ playerAttack),
/* harmony export */   resetPlayerObjs: () => (/* binding */ resetPlayerObjs),
/* harmony export */   startGame: () => (/* binding */ startGame),
/* harmony export */   startGamePlay: () => (/* binding */ startGamePlay),
/* harmony export */   startPreGame: () => (/* binding */ startPreGame)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/factories/player.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");



let player;
let computer;
let turn = 'Player';

const resetPlayerObjs = () => {
    player = _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player();
    computer = _factories_player__WEBPACK_IMPORTED_MODULE_0__.Computer();
    computer.placeShipsRandomly();    
}

// Main menu - start game btn
const startGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderOuterContainer();
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderMainMenu();
    resetPlayerObjs();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacement(player);
}

const autoShipPlacement = () => {
    resetPlayerObjs();    
    player.placeShipsRandomly();
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacement(player);
}

// Once ships placed, start game - render player and enemy boards & add player name to screen
const startGamePlay = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderGameLayout();
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoard(player.getBoardArray());
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderEnemyBoard(computer.getBoardArray());
    console.log(computer.getBoardArray());
    console.log(player.getBoardArray());
}

// - attack enemy board (get another turn if hit), to be put on click event targetting coords
const playerAttack = (coords) => {
    // returns results of attack on enemy board with input coords - x, m, s, game over
    const attackResult = player.attack(coords, computer.getBoardObj());

    // update DOM boards with attack results
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    if (attackResult === 'Game Over') {
        // victory/defeat screen
        declareWinner('Player');
    } else if (attackResult === 'Miss') {
        turn = 'Enemy';
        enemyAttack();
        _dom__WEBPACK_IMPORTED_MODULE_1__.renderTurnTracker();
    }

    console.log(`Player's shot is a ${attackResult}`);
    // console.log(computer.getBoardObj().allShipsSunk());
    //console.log(player.getBoardObj().allShipsSunk());
    //console.log(computer.getBoardArray())
}

// - receive enemy attack 
const enemyAttack = (attackResult) => {
    setTimeout(() => {

        if (attackResult === 'Game Over') {
            // victory/defeat screen
            declareWinner('Computer');
            return;
        } else if (attackResult === 'Miss') {
            turn = 'Player';
            _dom__WEBPACK_IMPORTED_MODULE_1__.renderTurnTracker();
            return;
        }

        // Recursively call attack
        enemyAttack(computer.randomAttack(player.getBoardObj()));  
        // console.log(`Computer's shot is a ${attackResult}`);
        
        // update DOM boards
        _dom__WEBPACK_IMPORTED_MODULE_1__.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    }, 700);
}

const getTurn = () => {
    return turn;
}

// TO DO: 
// - smart attack - once enemy gets a hit it fires at surrounding coords 
// commentary message box eg "E1 was a miss", "sunk your battleship" etc

// Victory screen / restart btn
const declareWinner = (winner) => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderVictoryScreen(winner);
}

const playAgain = () => {
    resetPlayerObjs();
    startPreGame();
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVks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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQzFPWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNEQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQWlCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLElBQUksb0RBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxRQUFRLG1EQUFxQjtBQUM3QjtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLG1EQUFxQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLGFBQWE7QUFDNUQ7QUFDQTtBQUNBLFFBQVEsb0RBQXNCO0FBQzlCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2pCO0FBQ3RCO0FBQ0Esb0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xyXG59XHJcblxyXG4uY29udGFpbmVyLFxyXG4uYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxyXG4gICAgZ2FwOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xyXG59XHJcblxyXG4uc3F1YXJlOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgcGFkZGluZzogNDVweDsgICAgXHJcbn1cclxuXHJcbi5hc2stbmFtZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAyODZweDtcclxufVxyXG5cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxufVxyXG5cclxuLmJ0biB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIFxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuXHJcbi5zdGFydC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLXNoaXBzLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcclxuICAgIGNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zaGlwLWNvdW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udHVybnRyYWNrZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmV0dXJuLW1lbnUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xyXG59XHJcblxyXG4ucGxheS1hZ2Fpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwNjNweCkge1xyXG4gICAgLmdhbWVib2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcclxuICAgICAgICBnYXA6IDNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNxdWFyZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH0gICAgXHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0MsMENBQTBDO1FBQzFDLFFBQVE7UUFDUixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIsXFxyXFxuLmJvYXJkcy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMzBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KSAwLjVmcjsgICAgXFxyXFxuICAgIGdhcDogM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgcGFkZGluZzogNDVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5hc2stbmFtZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDI4NnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZW1lbnQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMjEsIDIyNCwgMC44MTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52YWxpZC1zaGlwLXBsYWNlbWVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZhNmE7XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7ICAgIFxcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncm91cCAuYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZS1zaGlwcy1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2QxNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAtMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlLnBsYXllciB7XFxyXFxuICAgIGNvbG9yOiAjMjNkMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xcclxcbiAgICBjb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY291bnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm50cmFja2VyIHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDYzcHgpIHtcXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcXHJcXG4gICAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3F1YXJlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH0gICAgXFxyXFxuICAgIC5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gRE9ORVxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXHJcbi8vIFNISVBTIFNIT1VMRCBOT1QgQkUgQUJMRSBUTyBPVkVSTEFQXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHsgXHJcbiAgICAgICAgICAgIC8vIGdlbiAxMCByb3cgYXJyYXlzXHJcbiAgICAgICAgICAgIGJvYXJkW3Jvd10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZW4gMTAgY29scyAoYWRkIDEwIGVtcHR5IHN0cmluZ3MpIGluc2lkZSBlYWNoIHJvdyBhcnJheVxyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgY29vcmRzIGJ5IFtyb3dJbmRleF1bY29sSW5kZXhdIGllLiBbMF1bMF0gfHwgWzldWzddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJvYXJkQXJyID0gY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gICAgY29uc3Qgc2hpcHNBcnIgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcCA9IHtcclxuICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXHJcbiAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxyXG4gICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXHJcbiAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IFNoaXAoJ3BhdHJvbEJvYXQnKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzaGlwKTsgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCBldGNdXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcFR5cGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYWNlIHNoaXAncyBpZCBpbnRvIHRoZSBib2FyZCBhcnJheSBiZXR3ZWVuIGlucHV0IGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKSB7IC8vZS5nICdiYXR0bGVzaGlwJywgWzAsMF0sIFs0LDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RvcmUgYWxsIGNvb3JkcyBiZXR3ZWVuIHN0YXJ0IGNvb3JkICYgZW5kIGNvb3JkXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGFtb3VudCBvZiBjb29yZHMgYmV0d2VlbiB0aGUgMiBnaXZlbiBpbnB1dHNcclxuICAgICAgICBjb25zdCBjb29yZHNBbW91bnQgPSBhbGxDb29yZHMubGVuZ3RoO1xyXG4gICAgICAgIC8vIEdldCBzaGlwTGVuZ3RoICYgaWQgcHJvcHMgZnJvbSBTaGlwIGZhY3RvcnlcclxuICAgICAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNoaXBUeXBlID09PSB0eXBlc1tpXSAmJiBzaGlwTGVuZ3RoID09PSBjb29yZHNBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1c2ggc2hpcCBvYmogdG8gc2hpcHMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICAgICAgICAgIHNoaXBzQXJyLnB1c2goc2hpcE9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgaWQgdG8gZWFjaCBjb29yZCAoYm9hcmQgYXJyYXkgaW5kZWNlcylcclxuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZDtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gPSBpZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgLy8gcHVzaCBzaGlwbGVuZ3RoIG9mIGVhY2ggc2hpcCBpbnRvIG5ldyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyB0eXBlcy5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aEFycmF5LnB1c2goc2hpcFt0eXBlc1tpXV0uc2hpcExlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzaGlwTGVuZ3RoQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBhbGwgY29vcmRzIGJldHdlZW4sICYgaW5jbHVkaW5nLCB0d28gaW5wdXQgY29vcmRzIGVnLiBbMCwwXSwgWzAsM11cclxuICAgIGZ1bmN0aW9uIGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgLy8gZm9ybWF0cyBlYWNoIGlucHV0IGludG8gYXJyYXkgd2l0aCAyIGl0ZW1zICYgYXNzaWducyB2YXIgbmFtZXMgdG8gaXRlbXNcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGNvbnN0IFtlbmRSb3csIGVuZENvbF0gPSBlbmRQb3M7XHJcbiAgICAgICAgbGV0IGFsbENvb3JkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpZiBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5IChzYW1lIGNvbCB2YWx1ZXMpXHJcbiAgICAgICAgaWYgKHN0YXJ0Q29sID09PSBlbmRDb2wpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IGFsbCByb3cgdmFsdWVzIGJldHdlZW4gc3RhcnQgJiBlbmQgY29vcmRzXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFJvd051bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydFJvdywgZW5kUm93KTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBhcnJheSBmcm9tIGFsbCByb3cgdmFsdWVzIHRoYXQgcmV0dXJucyByb3cgdmFsdWUgKyBpbnB1dCBjb2wgYW5kIHN0b3JlIGluIGFsbCBjb29yZHMgYXJyYXlcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsUm93TnVtcy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlmIHNoaXAgcGxhY2VkIGhvcml6b250YWxseSAoc2FtZSByb3cgdmFscylcclxuICAgICAgICAgICAgY29uc3QgYWxsQ29sTnVtcyA9IGdldEFsbE51bXNCZXR3ZWVuKHN0YXJ0Q29sLCBlbmRDb2wpO1xyXG4gICAgICAgICAgICBhbGxDb29yZHMgPSBhbGxDb2xOdW1zLm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Um93LCBjb2xdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBudW1zIGJldHdlZW4gMiBpbnB1dCBudW1zXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxOdW1zQmV0d2Vlbih4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IFtdO1xyXG4gICAgICAgIGxldCBoaWdoLCBsb3c7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHdoaWNoIG51bSBpcyBoaWdoZXIgb3IgbG93ZXJcclxuICAgICAgICBpZiAoeCA+IHkpIHtcclxuICAgICAgICAgICAgaGlnaCA9IHg7XHJcbiAgICAgICAgICAgIGxvdyA9IHk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlnaCA9IHk7XHJcbiAgICAgICAgICAgIGxvdyA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHB1c2ggbnVtcyBmcm9tIGxvdyB0byBoaWdoIHRvIG51bXMgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xyXG4gICAgICAgICAgICBudW1zLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgZW5kIGNvb3JkIGZyb20gc3RhcnQgY29vcmQgKyBzaGlwbGVuZ3RoICYgZGlyZWN0aW9uXHJcbiAgICBmdW5jdGlvbiBnZXRFbmRDb29yZCAoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IFtzdGFydFJvdywgc3RhcnRDb2xdID0gc3RhcnRQb3M7XHJcbiAgICAgICAgbGV0IGVuZFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgIGxldCBlbmRDb2wgPSBzdGFydENvbDtcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBnb2VzIGRvd253YXJkcyBpbiBhcnJheSBpbmRleCAodXB3YXJkcyBpbiBET00pLCBob3Jpem9udGFsIGdvZXMgcmlnaHR3YXJkc1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZW5kUm93ICs9IHNoaXBMZW5ndGggLSAxOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZW5kQ29sICs9IHNoaXBMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2VuZFJvdywgZW5kQ29sXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlcyBwYWlyIG9mIGNvb3JkcywgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgc2VuZHMgaGl0IGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAgb3IgcmVjb3JkcyBjb29yZHMgb2YgbWlzc2VkIHNob3RcclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICAvLyBTdG9yZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYm9hcmQgYXJyYXkgaW5kZWNlc1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgLy8gY29vcmRzIGNvbnRhaW4gYSBzaGlwIGlmIGJvYXJkVmFsdWUgaXMgYSBudW1iZXIuLi5cclxuICAgICAgICBjb25zdCBjb29yZHNDb250YWluU2hpcCA9IHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJztcclxuXHJcbiAgICAgICAgaWYgKGNvb3Jkc0NvbnRhaW5TaGlwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHRoYXQgc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFt0eXBlc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcE9iai5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgUyB0byByZXByZXNlbnQgU3VuayB0byBlbnRpcmUgc2hpcCBjb29yZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFyci5mb3JFYWNoKChyb3csIHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJbcl1bY10udG9TdHJpbmcoKS5pbmNsdWRlcyhpZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyXVtjXSA9IGAke2lkfVNgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGFuIFggdG8gdmFsdWUgdG8gcmVwcmVzZW50IGEgaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSArPSAnWCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7IC8vIEdhbWUgb3ZlciBoYXMgdG8gcmV0dXJuIGJlZm9yZSBmaW5hbCBzaGlwIHN1bmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkgcmV0dXJuICdTdW5rJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ0hpdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBib2FyZCB2YWx1ZSB0byBNIGZvciBhIG1pc3NcclxuICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gJ00nO1xyXG4gICAgICAgICAgICByZXR1cm4gJ01pc3MnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRoZSBldmVyeSgpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgdGVzdHMgd2hldGhlciBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBJdCByZXR1cm5zIGEgQm9vbGVhbiB2YWx1ZS5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzQXJyLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuXHJcbiAgICAvLyBhcmUgY29vcmRzIGVtcHR5LCB3aXRoaW4gYm9hcmRcclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzaGlwIGNhbiBwbGFjZSBiZXR3ZWVuIHR3byBnaXZlbiBjb29yZHNcclxuICAgIGZ1bmN0aW9uIGNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzLmV2ZXJ5KChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXJlV2l0aGluQm9hcmQoY29vcmQpICYmIGFyZUVtcHR5KGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgIGZ1bmN0aW9uIGFyZVdpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKHJvdyA+PSAxMCB8fCByb3cgPCAwIHx8IGNvbCA+PSAxMCB8fCBjb2wgPCAgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgZW1wdHlcclxuICAgIGZ1bmN0aW9uIGFyZUVtcHR5KGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgICAgIGFyZVdpdGhpbkJvYXJkLFxyXG4gICAgICAgIGNhblBsYWNlU2hpcEJldHdlZW4sXHJcbiAgICAgICAgY3JlYXRlQm9hcmRBcnJheSxcclxuICAgICAgICBjcmVhdGVTaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgZ2V0QWxsQ29vcmRzLFxyXG4gICAgICAgIGdldEFsbE51bXNCZXR3ZWVuLFxyXG4gICAgICAgIGdldEFycmF5LFxyXG4gICAgICAgIGdldEVuZENvb3JkLFxyXG4gICAgICAgIGdldFNoaXBUeXBlcyxcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjaywgICAgICAgIFxyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG4vLyBQbGF5ZXJzIGNhbiB0YWtlIHR1cm5zIHBsYXlpbmcgdGhlIGdhbWUgYnkgYXR0YWNraW5nIHRoZSBlbmVteSBHYW1lYm9hcmQuXHJcbi8vIFRoZSBnYW1lIGlzIHBsYXllZCBhZ2FpbnN0IHRoZSBjb21wdXRlciwgc28gbWFrZSB0aGUg4oCYY29tcHV0ZXLigJkgY2FwYWJsZSBvZiBtYWtpbmcgcmFuZG9tIHBsYXlzLiBUaGUgQUkgZG9lcyBub3QgaGF2ZSB0byBiZSBzbWFydCwgYnV0IGl0IHNob3VsZCBrbm93IHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gbW92ZSBpcyBsZWdhbCAoaS5lLiBpdCBzaG91bGRu4oCZdCBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlKS5cclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aEFycmF5ID0gZ2V0U2hpcExlbmd0aEFycmF5KCk7ICAgXHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IGdldFNoaXBMaXN0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmRPYmooKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnc3VibWFyaW5lJywgJ2NydWlzZXInLCAncGF0cm9sQm9hdCddXHJcbiAgICBmdW5jdGlvbiBnZXRTaGlwTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuZ2V0U2hpcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWzUsIDQsIDMsIDMsIDJdIFxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5jcmVhdGVTaGlwTGVuZ3RoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRzLCBlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwZWF0UGxheSA9IGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGlmIChyZXBlYXRQbGF5KSByZXR1cm4gJ3JlcGVhdCc7XHJcblxyXG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRzIGhhdmUgYmVlbiB0YXJnZXR0ZWQgYWxyZWFkeVxyXG4gICAgZnVuY3Rpb24gaXNSZXBlYXRQbGF5KGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgYm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkQXJyW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09ICcnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgMiByYW5kb20gbnVtYmVycyBiZXR3ZWVuIDAtOSBhbmQgcmV0dXJuIGluIGFycmF5XHJcbiAgICBmdW5jdGlvbiBnZW5SYW5kb21Db29yZHMoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjdXJzaXZlIHNoaXAgcGxhY2VtZW50IC0gcG9wIG5ldyBzaGlwdHlwZSAmIHNoaXBsZW5ndGggdW50aWwgYWxsIHNoaXBzIHBsYWNlZFxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcExpc3QucG9wKCk7XHJcbiAgICAgICAgaWYgKHNoaXBUeXBlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zLCBkaXJlY3Rpb24sIGVuZFBvcywgdmFsaWRTaGlwUGxhY2VtZW50O1xyXG5cclxuICAgICAgICAvLyB3aGlsZSB0aGVyZXMgbm8gdmFsaWQgc2hpcCBwbGFjZW1lbnQgYXNzaWduIHZhbHVlcyB0byB2YXJzIGZvciB1c2UgaW4gZnVuY3Rpb25zIHVudGlsIHNoaXBUeXBlICYgc2hpcExlbmd0aCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhcnRQb3MgPSBnZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGJvYXJkLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmQuY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjayxcclxuICAgICAgICBnZW5SYW5kb21Db29yZHMsXHJcbiAgICAgICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgICAgICBnZXRCb2FyZE9iaiwgICAgICAgIFxyXG4gICAgICAgIGdldFNoaXBMaXN0LFxyXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgICAgICBzaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgc2hpcExpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFBsYXllciBmYWN0b3J5XHJcbmNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSBQbGF5ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGxldCByYW5kb21Db29yZHMgPSBwcm90by5nZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICBjb25zdCBhdHRhY2tlZENvb3JkID0gcHJvdG8uYXR0YWNrKHJhbmRvbUNvb3JkcywgZW5lbXlCb2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIGF0dGFja2VkQ29vcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcm90byxcclxuICAgICAgICByYW5kb21BdHRhY2tcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlciB9OyIsIi8vIGxlbmd0aCA9IG51bWJlclxyXG4vLyBoaXRzID0gbnVtYmVyIG9yIGFycmF5IG9mIGJvb2xlYW4gdmFsdWVzIHJlcHJlc2VudGluZyBlYWNoIHNoaXAgcGFydD9cclxuLy8gaXNTdW5rID0gZWl0aGVyIGNoZWNrIGlmIGRhbWFnZSA+PSBsZW5ndGggT1IgY2hlY2sgaWYgZXZlcnkgYXJyYXkgZWxlbWVudCBpcyB0cnVlXHJcblxyXG4vLyBcIlJFTUVNQkVSIHlvdSBvbmx5IGhhdmUgdG8gdGVzdCB5b3VyIG9iamVjdOKAmXMgcHVibGljIGludGVyZmFjZS4gT25seSBtZXRob2RzIG9yIHByb3BlcnRpZXMgdGhhdCBhcmUgdXNlZCBvdXRzaWRlIG9mIHlvdXIg4oCYc2hpcOKAmSBvYmplY3QgbmVlZCB1bml0IHRlc3RzLlwiXHJcblxyXG5jb25zdCBTaGlwID0gKHNoaXBUeXBlKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwQ2xhc3NlcyA9IHtcclxuICAgICAgICBjYXJyaWVyOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDUsXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmF0dGxlc2hpcDoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Ym1hcmluZToge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNydWlzZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMyxcclxuICAgICAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXRyb2xCb2F0OiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDIsXHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGhpdHNBbW91bnQgPSAwO1xyXG4gICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcENsYXNzZXNbc2hpcFR5cGVdO1xyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHRoYXQgaW5jcmVhc2VzIHRoZSBudW1iZXIgb2Yg4oCYaGl0c+KAmSB0byB5b3VyIHNoaXAuXHJcbiAgICBmdW5jdGlvbiBoaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaXRzQW1vdW50Kys7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZXMgd2hldGhlciBoYXMgc3VuayBiYXNlZCBvbiBzaGlwJ3MgbGVuZ3RoIGFuZCB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkuXHJcbiAgICBmdW5jdGlvbiBpc1N1bmsoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaGl0c0Ftb3VudCA+PSBzaGlwTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaGlwQ2xhc3NlcyxcclxuICAgICAgICBzaGlwTGVuZ3RoLFxyXG4gICAgICAgIGhpdCxcclxuICAgICAgICBoaXRzQW1vdW50LFxyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGlzU3VuayxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiaW1wb3J0ICogYXMgR0FNRSBmcm9tIFwiLi9nYW1lXCI7XHJcblxyXG5jb25zdCByZW5kZXJPdXRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlck1haW5NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XHJcbiAgICBjb25zdCBzdGFydEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RhcnRCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnc3RhcnQtYnRuJyk7XHJcbiAgICBzdGFydEJ0bi5pZCA9IFwic3RhcnRcIjtcclxuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnOyAgICBcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpOyAgICBcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoc3RhcnRCdG5Db250YWluZXIpO1xyXG4gICAgc3RhcnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TmFtZU1lbnUpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXInKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbn1cclxuXHJcbmNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0JykudmFsdWU7XHJcbiAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHBsYXllck5hbWUgPSAnQWRtaXJhbCBvbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBsYXllck5hbWU7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgYXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcclxuICAgIGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXNrLW5hbWUtY29udGFpbmVyJyk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChhc2tOYW1lQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsIG9uZSBuYW1lOiBgXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xyXG4gICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XHJcbiAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGdldE5hbWUoKTtcclxuICAgICAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgICAgICAgICAgaGlkZU1lbnUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgY2hpbGQgZWxzIGZyb20gYSBwYXJlbnQgZWwgJiByZXR1cm5zIHJlbW92ZWQgbm9kZSAtIGUuZy4gb3V0ZXJjb250YWluZXJcclxuY29uc3QgY2xlYXJDaGlsZEVsZW1lbnRzID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gdGFrZXMgaW5wdXQgc3F1YXJlIGlkIHN0cmluZyAtIHJldHVybnMgYm9hcmQgYXJyYXkgaW5kZWNlcyBlLmcuICcxMEEnID0gWzksMF1cclxuZnVuY3Rpb24gcGFyc2VDb29yZHMoc3F1YXJlSWQpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sO1xyXG5cclxuICAgIGlmIChzcXVhcmVJZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAvLyBmaXJzdCBjaGFyYWN0ZXIgKHJvdyBudW0pIG9uIHNxciBpZCB3aWxsIGJlICsxIGFoZWFkIG9mIGFycmF5IGluZGV4XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoc3F1YXJlSWQuY2hhckF0KDApKSAtMTtcclxuICAgICAgICAvLyBzZWNvbmQgY2hhcmFjdGVyIChjb2wgbGV0dGVyKSB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSBBLUogdG8gMC05XHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgxKSAtIDY1O1xyXG4gICAgfSBlbHNlIHsgLy8gc3FyIGlkIHN0cmluZyBpcyAzIGNoYXJhY3RlcnNcclxuICAgICAgICBjb25zdCBmaXJzdFR3b0NoYXJzID0gc3F1YXJlSWQuc2xpY2UoMCwyKTtcclxuICAgICAgICByb3cgPSBwYXJzZUludChmaXJzdFR3b0NoYXJzKSAtIDE7XHJcbiAgICAgICAgLy8gdGhpcmQgY2hhcmFjdGVyIGNvbnZlcnQgdG8gbnVtXHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgyKSAtIDY1O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyb3csIGNvbF07XHJcbn1cclxuXHJcbi8vIHRha2UgYXJyYXkgaW5wdXQgbnVtcyBhbmQgY29udmVydCBpdCB0byBzcXVhcmUgaWQgc3RyaW5nIC0gWzksMF0gPSAnMTBBJ1xyXG5mdW5jdGlvbiBjb252ZXJ0Q29vcmRUb0lkKGFycmF5SXRlbSkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGFycmF5SXRlbTtcclxuICAgIGxldCBuZXdSb3cgPSByb3cgKyAxO1xyXG4gICAgbGV0IG5ld0NvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xyXG4gICAgbGV0IHN0cmluZ0lkID0gYCR7bmV3Um93fSR7bmV3Q29sfWA7ICAgIFxyXG4gICAgcmV0dXJuIHN0cmluZ0lkO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U2hpcFBsYWNlbWVudCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkT2JqID0gcGxheWVyLmdldEJvYXJkT2JqKCk7XHJcbiAgICBjb25zdCBib2FyZEFyciA9IHBsYXllci5nZXRCb2FyZEFycmF5KCk7ICAgIFxyXG5cclxuICAgIC8vIC0gcG9wIHJlbW92ZXMgJiByZXR1cm5zIGxhc3QgZWxlbWVudCBvZiBhcnJheSAtIG9uY2UgdGhlIGFycmF5IGlzIGVtcHR5IGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBwbGF5ZXIuc2hpcExpc3QucG9wKCk7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGxheWVyLnNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgYSBzcXVhcmUgdG8gcGxhY2Ugc2hpcFxyXG4gICAgY29uc3QgcGxhY2VTaGlwQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNxdWFyZSBpZCBzdHJpbmdcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIC8vIG1ha2UgdGhlIGxlZ2VuZCAmIHRoZSBnYXBzIGJldHdlZW4gc3F1YXJlcyBub24gY2xpY2thYmxlKVxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBjb29yZHMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7XHJcbiAgICAgICAgLy8gZW5kIHBvcyBjb29yZCBjYWxjZCBmcm9tIHN0YXJ0IHBvc1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEN1cnJlbnQgc2hpcCBpczogJHtzaGlwVHlwZX0gbGVuZ3RoIGlzICR7c2hpcExlbmd0aH0gc3F1YXJlc2ApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCAke2UudGFyZ2V0LmlkfWApO1xyXG5cclxuICAgICAgICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTsgLy9lLmcgJ2JhdHRsZXNoaXAnLCBbMCwwXSwgWzQsMF1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhib2FyZEFycik7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZSAtIHBvcCBhIG5ldyBzaGlwIHR5cGUgaW50byBwbGFjZVNoaXAgZnVuY3Rpb24gdW50aWwgZXZlcnkgc2hpcCBpcyBwbGFjZWRcclxuICAgICAgICAgICAgZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgZW50ZXIgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3aXRjaCBzaGlwIG9yaWVudGF0aW9uIGR1cmluZyBwbGFjZW1lbnQgdG8gcHV0IG9uIHJpZ2h0IGNsaWNrXHJcbiAgICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByZXZlbnQgcmlnaHQgY2xpY2sgbWVudSBhcHBlYXJpbmdcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHsgLy9lLmcuIGlmIGxlZ2VuZFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBob3ZlciBlZmZlY3QgdG8gZGl2IHNxdWFyZSBpZCBcclxuICAgIGNvbnN0IGRpc3BsYXlIb3ZlckVmZmVjdCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyc2VDb29yZHMocG9zaXRpb24pOyAvLyBlZy4gMTBBID0gJ1s5LDBdJ1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpOyAvL2VnLiBbOSwwXSwgJ3ZlcnRpY2FsJywgMiA9IFsxMCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGJvYXJkT2JqLmdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBpZiBjb29yZHMgYXJlIGVtcHR5ICYgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgICAgICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSBib2FyZE9iai5jYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGAke3NoaXBUeXBlfSAoJHtzaGlwTGVuZ3RofSBzcXVhcmVzKTogU3RhcnQgcG9zOiR7c3RhcnRQb3N9IEVuZCBwb3M6ICR7ZW5kUG9zfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29vcmQpO1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRPYmouYXJlV2l0aGluQm9hcmQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRTdHJpbmcgPSBjb252ZXJ0Q29vcmRUb0lkKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGlkIHN0cmluZyBpczogJHtpZFN0cmluZ30sIGNvb3JkIGlzICR7Y29vcmR9YCk7ICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgaG92ZXIgZWZmZWN0cyAoZWcgb24gbW91c2VsZWF2ZSlcclxuICAgIGNvbnN0IGNsZWFySG92ZXJFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICBhbGxTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0R2FtZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgc2hpcHMgYXJlbnQgYWxsIHBsYWNlZCwgZG9uJ3Qgc3RhcnRcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR0FNRS5zdGFydEdhbWVQbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GSVggTEFURVI6IE5FRUQgVE8gQURKVVNUIEdFVE5BTUUgRlVOQ1RJT04gRk9SIFRISVMgVE8gV09SS1xyXG4gICAgY29uc3QgaGFuZGxlUmVzZXRTaGlwcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgR0FNRS5yZXNldFBsYXllck9ianMoKTtcclxuICAgICAgICBHQU1FLnN0YXJ0UHJlR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xyXG4gICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3RhcnRHYW1lcGxheSk7XHJcblxyXG4gICAgY29uc3QgYXV0b1NoaXBQbGFjZW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGFjZS1zaGlwcy1idG4nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLnRleHRDb250ZW50ID0gJ0F1dG8gcGxhY2UnO1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHQU1FLmF1dG9TaGlwUGxhY2VtZW50KTtcclxuXHJcbiAgICBjb25zdCByZXNldFNoaXBzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXNldFNoaXBzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyZXNldC1idG4nKTtcclxuICAgIHJlc2V0U2hpcHNCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgU2hpcHMnO1xyXG4gICAgcmVzZXRTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlc2V0U2hpcHMpO1xyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvYXJkc0NvbnRhaW5lcik7ICAgIFxyXG5cclxuICAgIGxldCBnYW1lYm9hcmQ7XHJcblxyXG4gICAgLy8gaWYgc2hpcGxlbmd0aCBjb250YWlucyBhIG51bWJlciAvIGlzbnQgdW5kZWZpbmVkXHJcbiAgICAvLyBpLmUuIGlmIHNoaXBzIHN0aWxsIG5lZWRzIHRvIGJlIHBsYWNlZCBhZGQgY2xpY2sgZXZlbnRcclxuICAgIGlmIChzaGlwTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBnYW1lYm9hcmQgPSBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsICdwcmUtZ2FtZScsIHBsYWNlU2hpcENsaWNrKTtcclxuICAgICAgICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlcik7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlUGxhY2VTaGlwTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgcm90YXRlRGlyZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7IC8vcmVuZGVyIGJvYXJkIHdpdGhvdXQgZXZlbnRzXHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgaWYgKHNoaXBMZW5ndGgpIHsgLy8gaWYgY29udGFpbnMgYSBudW1cclxuICAgICAgICBpbnN0cnVjdGlvbnMgPSBgUGxhY2UgdGhlICR7c2hpcFR5cGV9LiBSaWdodCBjbGljayB0byByb3RhdGUuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYENsaWNrIG9uIHN0YXJ0IGdhbWUgdG8gYmVnaW4hYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7ICAgXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zUGFyYSk7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG5cclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGF1dG9TaGlwUGxhY2VtZW50QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJlc2V0U2hpcHNCdG4pOyAgICBcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XHJcbn1cclxuXHJcbi8vIG1vZGUgd2lsbCBiZSBjYWxsZWQgYXMncHJlLWdhbWUnIG9yICdwbGF5ZXInLydlbmVteScgc3RyaW5nc1xyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsIG1vZGUsIGNsaWNrQ2IpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7bW9kZX1gLCAnZ2FtZWJvYXJkJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGJvYXJkQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIFJPVyBpLmUgbnVtc1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGJvYXJkQXJyW2ldO1xyXG4gICAgICAgIGxldCByb3dDb29yZCA9IGkgKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7IC8vIENPTFxyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkgeyAvLyBST1cgTEVHRU5EXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwicm93XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHJvd0xlZ2VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29sQ29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaik7IC8vIGNvbnZlcnQgdG8gbGV0dGVycztcclxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGAke3Jvd0Nvb3JkfSR7Y29sQ29vcmR9YDtcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3ByZS1nYW1lJyB8fCBtb2RlID09PSAncGxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEFycltpXVtqXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiOilcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdYJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiWFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1MnKSkge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdID09PSAnTScpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENPTCBMRUdFTkRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2xMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcImNvbFwiKTtcclxuICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY0ICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChjb2xMZWdlbmQpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlmIChjbGlja0NiKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYik7ICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVHVyblRyYWNrZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuLXRyYWNrZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0dXJuVHJhY2tlci5jbGFzc0xpc3QuYWRkKCd0dXJudHJhY2tlcicpOyAgXHJcblxyXG4gICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFR1cm4oKX0ncyB0dXJuYDtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICB0dXJuVHJhY2tlci50ZXh0Q29udGVudCA9IGAke2dldE5hbWUoKX0ncyB0dXJuYDtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckdhbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW5lbXktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R1cm4tdHJhY2tlci1jb250YWluZXInKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7ICAgIFxyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Q29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQm9hcmRVcGRhdGVzID0gKGVuZW15Qm9hcmRBcnIsIHBsYXllckJvYXJkQXJyKSA9PiB7XHJcbiAgICByZW5kZXJFbmVteUJvYXJkKGVuZW15Qm9hcmRBcnIpO1xyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmRBcnIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhwbGF5ZXJDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZGlzcGxheUJvYXJkKHBsYXllckJvYXJkQXJyLCAncGxheWVyJyk7XHJcblxyXG4gICAgY29uc3QgcGxheWVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJywgJ3BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9ICdQbGF5ZXIgYm9hcmQnO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLnRleHRDb250ZW50ID0gJ1ggU2hpcHMgcmVtYWluaW5nJztcclxuXHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckhlYWRpbmcpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyRW5lbXlCb2FyZCA9IChlbmVteUJvYXJkQXJyKSA9PiB7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhlbmVteUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZEFyciwgJ2VuZW15JywgaGFuZGxlQXR0YWNrQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGVuZW15SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbmVteUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAnZW5lbXknKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1NoaXBDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci50ZXh0Q29udGVudCA9ICdYIFNoaXBzIHJlbWFpbmluZyc7XHJcblxyXG4gICAgZW5lbXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VuZW15IGJvYXJkJztcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlIZWFkaW5nKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ0VuZW15JykgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgR0FNRS5wbGF5ZXJBdHRhY2soY29vcmRzKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVmljdG9yeVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGF5LWFnYWluLWJ0bicpO1xyXG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xyXG4gICAgY29uc3QgcmV0dXJuVG9NZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JldHVybi1tZW51LWJ0bicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBtZW51JztcclxuICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdBTUUucGxheUFnYWluKTtcclxuICAgIHJldHVyblRvTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJldHVyblRvTWVudSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaWYgKHdpbm5lciA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IHdpbiFgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zISBXYW50IHRvIHBsYXkgYW5vdGhlciByb3VuZD9gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IGxvc2VgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLiBXYW50IHRvIHRyeSBhZ2Fpbj9gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKG91dGVyQ29udGFpbmVyKTtcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ0bkdyb3VwKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJldHVyblRvTWVudUJ0bik7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pO1xyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVJldHVyblRvTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9keSk7XHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQgeyAgICBcclxuICAgIGRpc3BsYXlOYW1lTWVudSxcclxuICAgIHJlbmRlck91dGVyQ29udGFpbmVyLFxyXG4gICAgcmVuZGVyTWFpbk1lbnUsXHJcbiAgICBkaXNwbGF5U2hpcFBsYWNlbWVudCxcclxuICAgIHJlbmRlckJvYXJkVXBkYXRlcyxcclxuICAgIHJlbmRlckVuZW15Qm9hcmQsXHJcbiAgICByZW5kZXJHYW1lTGF5b3V0LFxyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQsXHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcixcclxuICAgIHJlbmRlclZpY3RvcnlTY3JlZW5cclxufSIsImltcG9ydCAqIGFzIFBsYXllciBmcm9tICcuLi9mYWN0b3JpZXMvcGxheWVyJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcclxuXHJcbmxldCBwbGF5ZXI7XHJcbmxldCBjb21wdXRlcjtcclxubGV0IHR1cm4gPSAnUGxheWVyJztcclxuXHJcbmNvbnN0IHJlc2V0UGxheWVyT2JqcyA9ICgpID0+IHtcclxuICAgIHBsYXllciA9IFBsYXllci5QbGF5ZXIoKTtcclxuICAgIGNvbXB1dGVyID0gUGxheWVyLkNvbXB1dGVyKCk7XHJcbiAgICBjb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkoKTsgICAgXHJcbn1cclxuXHJcbi8vIE1haW4gbWVudSAtIHN0YXJ0IGdhbWUgYnRuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJPdXRlckNvbnRhaW5lcigpO1xyXG4gICAgRE9NLnJlbmRlck1haW5NZW51KCk7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxufVxyXG5cclxuLy8gUFJFLUdBTUUgLSB0YWtlIHBsYXllciBuYW1lLCBzaGlwIHBsYWNlbWVudFxyXG5jb25zdCBzdGFydFByZUdhbWUgPSAoKSA9PiB7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuY29uc3QgYXV0b1NoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XHJcbiAgICByZXNldFBsYXllck9ianMoKTsgICAgXHJcbiAgICBwbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuLy8gT25jZSBzaGlwcyBwbGFjZWQsIHN0YXJ0IGdhbWUgLSByZW5kZXIgcGxheWVyIGFuZCBlbmVteSBib2FyZHMgJiBhZGQgcGxheWVyIG5hbWUgdG8gc2NyZWVuXHJcbmNvbnN0IHN0YXJ0R2FtZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBET00ucmVuZGVyR2FtZUxheW91dCgpO1xyXG4gICAgRE9NLnJlbmRlclBsYXllckJvYXJkKHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgRE9NLnJlbmRlckVuZW15Qm9hcmQoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxufVxyXG5cclxuLy8gLSBhdHRhY2sgZW5lbXkgYm9hcmQgKGdldCBhbm90aGVyIHR1cm4gaWYgaGl0KSwgdG8gYmUgcHV0IG9uIGNsaWNrIGV2ZW50IHRhcmdldHRpbmcgY29vcmRzXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgIC8vIHJldHVybnMgcmVzdWx0cyBvZiBhdHRhY2sgb24gZW5lbXkgYm9hcmQgd2l0aCBpbnB1dCBjb29yZHMgLSB4LCBtLCBzLCBnYW1lIG92ZXJcclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29vcmRzLCBjb21wdXRlci5nZXRCb2FyZE9iaigpKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgRE9NIGJvYXJkcyB3aXRoIGF0dGFjayByZXN1bHRzXHJcbiAgICBET00ucmVuZGVyQm9hcmRVcGRhdGVzKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSwgcGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcblxyXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ0dhbWUgT3ZlcicpIHtcclxuICAgICAgICAvLyB2aWN0b3J5L2RlZmVhdCBzY3JlZW5cclxuICAgICAgICBkZWNsYXJlV2lubmVyKCdQbGF5ZXInKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnTWlzcycpIHtcclxuICAgICAgICB0dXJuID0gJ0VuZW15JztcclxuICAgICAgICBlbmVteUF0dGFjaygpO1xyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIncyBzaG90IGlzIGEgJHthdHRhY2tSZXN1bHR9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZE9iaigpLmFsbFNoaXBzU3VuaygpKTtcclxuICAgIC8vY29uc29sZS5sb2cocGxheWVyLmdldEJvYXJkT2JqKCkuYWxsU2hpcHNTdW5rKCkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpXHJcbn1cclxuXHJcbi8vIC0gcmVjZWl2ZSBlbmVteSBhdHRhY2sgXHJcbmNvbnN0IGVuZW15QXR0YWNrID0gKGF0dGFja1Jlc3VsdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdHYW1lIE92ZXInKSB7XHJcbiAgICAgICAgICAgIC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgICAgICAgICBkZWNsYXJlV2lubmVyKCdDb21wdXRlcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdNaXNzJykge1xyXG4gICAgICAgICAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWN1cnNpdmVseSBjYWxsIGF0dGFja1xyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIuZ2V0Qm9hcmRPYmooKSkpOyAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENvbXB1dGVyJ3Mgc2hvdCBpcyBhICR7YXR0YWNrUmVzdWx0fWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzXHJcbiAgICAgICAgRE9NLnJlbmRlckJvYXJkVXBkYXRlcyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCksIHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG5cclxuICAgIH0sIDcwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdHVybjtcclxufVxyXG5cclxuLy8gVE8gRE86IFxyXG4vLyAtIHNtYXJ0IGF0dGFjayAtIG9uY2UgZW5lbXkgZ2V0cyBhIGhpdCBpdCBmaXJlcyBhdCBzdXJyb3VuZGluZyBjb29yZHMgXHJcbi8vIGNvbW1lbnRhcnkgbWVzc2FnZSBib3ggZWcgXCJFMSB3YXMgYSBtaXNzXCIsIFwic3VuayB5b3VyIGJhdHRsZXNoaXBcIiBldGNcclxuXHJcbi8vIFZpY3Rvcnkgc2NyZWVuIC8gcmVzdGFydCBidG5cclxuY29uc3QgZGVjbGFyZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcclxuICAgIERPTS5yZW5kZXJWaWN0b3J5U2NyZWVuKHdpbm5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpO1xyXG4gICAgc3RhcnRQcmVHYW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudCxcclxuICAgIGdldFR1cm4sXHJcbiAgICBwbGF5QWdhaW4sXHJcbiAgICBwbGF5ZXJBdHRhY2ssXHJcbiAgICByZXNldFBsYXllck9ianMsXHJcbiAgICBzdGFydFByZUdhbWUsXHJcbiAgICBzdGFydEdhbWUsXHJcbiAgICBzdGFydEdhbWVQbGF5XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuR0FNRS5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=