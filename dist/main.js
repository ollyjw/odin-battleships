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
    position: relative;
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
    flex-direction: column;
}

.turntracker {
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    width: 200px;
    text-align: center;    
}

.comment-container {
    color: #fff;
    border: 2px solid #fff;
    padding: 15px;
    width: 200px;
    text-align: center;
}

.game-over-modal {
    position: absolute;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    z-index: 1;
    display: block;
    padding: 45px;
    background-color: rgba(255,255,255,0.8);
    text-align: center;
    border: 4px solid #000344;
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

.blur {
    filter: blur(2px);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;;IAEI,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;IACvB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C,QAAQ;IACR,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,aAAa;IACb,gBAAgB;IAChB,YAAY;AAChB;;;AAGA;IACI,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;IACV,UAAU;IACV,cAAc;IACd,aAAa;IACb,uCAAuC;IACvC,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;;AAGA;IACI;QACI,aAAa;QACb,6CAA6C;QAC7C,0CAA0C;QAC1C,QAAQ;QACR,gBAAgB;IACpB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;IACA;QACI,WAAW;IACf;AACJ","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container,\r\n.boards-container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;    \r\n    height: 100vh;\r\n    gap: 30px;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    /* padding: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    width: 40rem;\r\n    padding: 45px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.start-pregame-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-container {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    padding: 30px;\r\n    margin-top: 15px;\r\n    width: 286px;\r\n}\r\n\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: #23d323;\r\n}\r\n\r\n.hit {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.sunk {\r\n    background-color: #ff6a6a;\r\n}\r\n\r\n.miss {\r\n    background-color: #0a58ca;\r\n}\r\n\r\n.btn {    \r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n    margin-bottom: 15px;    \r\n}\r\n\r\n.btn-group .btn {\r\n    width: 100%;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n    background-color: #3b82f6;\r\n}\r\n\r\n.start-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-ships-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n\r\n.reset-btn {\r\n    background-color: #c9cd14;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.board-title {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.board-title:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.board-title.player {\r\n    color: #23d323;\r\n}\r\n\r\n.board-title.enemy {\r\n    color: #ff0000;\r\n}\r\n\r\n.ship-counter {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.turn-tracker-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.turntracker {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;    \r\n}\r\n\r\n.comment-container {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.game-over-modal {\r\n    position: absolute;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 45px;\r\n    background-color: rgba(255,255,255,0.8);\r\n    text-align: center;\r\n    border: 4px solid #000344;\r\n}\r\n\r\n.game-over-modal h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.return-menu-btn {\r\n    background-color: #3b82f6;\r\n}\r\n.return-menu-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n}\r\n\r\n.play-again-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n.play-again-btn:hover {\r\n    background-color: #0d8d0d;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n.blur {\r\n    filter: blur(2px);\r\n}\r\n\r\n\r\n@media only screen and (min-width:1063px) {\r\n    .gameboard {\r\n        display: grid;\r\n        grid-template-columns: 0.5fr repeat(10, 60px);\r\n        grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .square {\r\n        padding: 20px;\r\n    }    \r\n    .btn-container {\r\n        width: auto;\r\n    }\r\n    .btn-group .btn {\r\n        width: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
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
                    if (shipObj.isSunk()) return 'sunk';
                    return 'hit';
                }
            }
        } else {
            // board value to M for a miss
            boardArr[row][col] = 'M';
            return 'miss';
        }
    }
    // The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    const allShipsSunk = () => shipsArr.every((ship) => ship.isSunk());

    // are coords empty, within board
    // returns true if ship can place between two given coords
    function canPlaceShipBetween(startPos, endPos) {
        const allCoords = getAllCoords(startPos, endPos);
        return allCoords.every((coord) => {
            if (areCoordsWithinBoard(coord) && areCoordsEmpty(coord)) {
                return true;
            }
        })
    }

    // Check if coords are within board boundaries
    function areCoordsWithinBoard(coords) {
        const [row, col] = coords;
        if (row >= 10 || row < 0 || col >= 10 || col <  0) {
            return false;
        } else {
            return true;
        }
    }

    // Check if coords are empty
    function areCoordsEmpty(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === '') {
            return true;
        } else {
            return false;
        }
    }

    function areCoordsUnplayed(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === '' || typeof boardArr[row][col] === 'number') {
            return true;
        } else {
            return false;
        }
    }

    // if coords both empty & within board boundaries return true
    function areCoordsEmptyWithinBoard(coords) {
        if (!areCoordsWithinBoard(coords)) return false;
        if (!areCoordsEmpty) return false;
        return true;
    }

    function areCoordsMiss(coords) {
        const [row, col] = coords;
        if (boardArr[row][col] === 'M') {
            return true;
        } else {
            return false;
        }
    }    
    
    function getArray() {
        return boardArr;
    }

    // Take a coord and get all empty coords within board that are above, below, left & right of coord
    function getAllValidAdjacentCoords(coords, boardObj) {
        const [row, col]= coords;
        const possibleMoves = [];
        
        possibleMoves.push([row + 1, col]);
        possibleMoves.push([row - 1, col]);
        possibleMoves.push([row, col + 1]);
        possibleMoves.push([row, col - 1]);

        // The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
        // filter out coords that are empty or outside board
        const validMoves = possibleMoves.filter(coord => {
            return !boardObj ? areCoordsEmptyWithinBoard(coord): boardObj.areCoordsEmptyWithinBoard(coord);
        });

        return validMoves;
    }

    // take 2 coords and return all valid coords along same axis 
    function getAllValidLinearCoords(startPos, endPos) {
        const linearTargets = [];
        const [startRow, startCol] = startPos;
        const [endRow, endCol] = endPos;
        let coord;

        if (endRow === startRow) { //same row
            let currentCol = startCol;
            // Loop in positive and negative direction along rows, add empty coords to targets array and break out if coords are outside board boundaries or a missed shot
            while (true) {
                coord = [startRow, currentCol++];
                if (!areCoordsWithinBoard(coord)) break; // break statement terminates current loop
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
            currentCol = startCol;
            while (true) {
                coord = [startRow, currentCol--];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
        } else { // same column
            let currentRow = startRow;
            // Loop in positive and negative direction along columns
            while (true) {
                coord = [currentRow++, startCol];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
            currentRow = startRow;
            while (true) {
                coord = [currentRow--, startCol];
                if (!areCoordsWithinBoard(coord)) break;
                if (areCoordsMiss(coord)) break;
                if (areCoordsUnplayed(coord)) {
                    linearTargets.push(coord);
                    break;
                }
            }
        }
        return linearTargets;
    }

    return { 
        allShipsSunk,
        areCoordsEmptyWithinBoard,
        areCoordsWithinBoard,
        canPlaceShipBetween,
        createBoardArray,
        createShipLengthArray,
        getAllCoords,
        getAllNumsBetween,
        getArray,
        getAllValidAdjacentCoords,
        getAllValidLinearCoords,
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
    let randomCoords;

    const hitCoords = [];
    const adjacentTargets = [];
    const linearTargets = [];

    function clearArrVals(arr) {
        while (arr.length > 0) arr.pop();
    }

    // Scan board array and find cells that contain target i.e 'X'
    const find2dCoordinates = (boardArr, target) => {
        const coordsArr = [];
        let coord = [];
        boardArr.forEach((row, i) => {
          row.forEach((item, j) => {
            if (item.toString().includes(target, 1)) {
              coord = [i,j];
              coordsArr.push(coord);
            }
          })
        });
        return coordsArr;
    };
    
    // on hit add the coord to array, on sunk clear arrays
    function handleAttackResults(attackResult, coords) {
        // if attack result is a hit, store in arr
        if (attackResult === 'hit') hitCoords.push(coords);
        if (attackResult === 'sunk') {
            clearArrVals(hitCoords);
            clearArrVals(adjacentTargets);
            clearArrVals(linearTargets);
        }
    }

    function smartAttack(enemyBoard) {
        const enemyBoardArr = enemyBoard.getArray(); // aka player board
        let remainingHitsArr = find2dCoordinates(enemyBoardArr, 'X');

        // console.clear();
        console.log(`HIT COORDS is: ${hitCoords}`);
        console.log(`Remaining hits is: ${remainingHitsArr}`);
        console.log(`ADJACENT TARGETS is: ${adjacentTargets}`);
        console.log(`LINEAR TARGETS is: ${linearTargets}`);
        

        // 1. if no valid targets attack random coord
        if (hitCoords.length === 0 && adjacentTargets.length === 0 && linearTargets.length === 0 && remainingHitsArr.length === 0) {
            return randomAttack(enemyBoard);
        }

        // 2. if a hit exists, store it's adjacent coords in both axis in new arr
        if (hitCoords.length === 1 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            const previousHit = hitCoords[0];
            const nextPossibleTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
            nextPossibleTargets.forEach((target) => adjacentTargets.push(target));
            console.log('condition 2 - PUSH TO ADJACENT');
        }

        // 3. if there are 2 hit coords, store the coords within same axis in new arr (linear)
        if (hitCoords.length > 1) {
            const startPos = hitCoords[0];
            const endPos = hitCoords[hitCoords.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);
            nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));              
            console.log('condition 3 - PUSH TO LINEAR');
        }

        // 4. if arrays have been cleared after ship sunk but board array still contain hits (x)
        if (remainingHitsArr.length > 0 && adjacentTargets.length === 0 && linearTargets.length === 0 ) {
            const startPos = remainingHitsArr[0];
            const endPos = remainingHitsArr[remainingHitsArr.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);

            // if there are no linear targets, find the adjacent targets for each remaining hit
            if (nextPossibleLinearTargets.length === 0) {
                const previousHit = remainingHitsArr.pop();
                const nextPossibleAdjacentTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
                nextPossibleAdjacentTargets.forEach((target) => adjacentTargets.push(target));
                console.log("Condition 4 - PUSH REMAINING HITS TO ADJACENT");
            } else { //else target linear
                nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));
                console.log("Condition 4 - PUSH REMAINING HITS TO LINEAR");
            }
        }
      
        let nextTarget;
        
        // if there is a linear target the last one from array will be nextTarget, 
        // else target the last adjacent targets
        if (linearTargets.length > 0) {
            nextTarget = linearTargets.pop();
        } else {
            nextTarget = adjacentTargets.pop();
        }
        
        console.log(`next target is ${nextTarget}`);
        console.log(`----------------------------`);
        
        const attackResult = proto.attack(nextTarget, enemyBoard); // returns hit sunk or miss strings
        handleAttackResults(attackResult, nextTarget);
       
        return attackResult;
    }

    function randomAttack(enemyBoard) {
        randomCoords = proto.genRandomCoords();         
        const attackResult = proto.attack(randomCoords, enemyBoard);
        handleAttackResults(attackResult, randomCoords);
        return attackResult;
    }

    function getCoords() {
        return randomCoords;
    }

    return {
        getCoords,
        ...proto,
        randomAttack,
        smartAttack
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
/* harmony import */ var _utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/parseCoords */ "./src/modules/utility/parseCoords.js");
/* harmony import */ var _utility_getName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/getName */ "./src/modules/utility/getName.js");




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

const hideElement = (element) => {
    element.classList.add('d-none');
}

const blurElement = (element) => {
    element.classList.add('blur');
}

const removeBlur = (element) => {
    element.classList.remove('blur');
}

const displayNameMenu = () => {
    const menuContainer = document.querySelector('.menu-container');
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
            (0,_utility_getName__WEBPACK_IMPORTED_MODULE_2__.getName)();
            _game__WEBPACK_IMPORTED_MODULE_0__.startPreGame();
            hideElement(menuContainer);
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
        const startPos = (0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__.parseCoords)(position);
        // end pos coord calcd from start pos
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength);
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        // if coords are empty & within board boundaries
        if (validShipPlacement) {
            boardObj.placeShip(shipType, startPos, endPos); //e.g 'battleship', [0,0], [4,0]
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
        const startPos = (0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__.parseCoords)(position); // eg. 10A = '[9,0]'
        const endPos = boardObj.getEndCoord(startPos, direction, shipLength); //eg. [9,0], 'vertical', 2 = [10,0]
        
        const allCoords = boardObj.getAllCoords(startPos, endPos);
        // if coords are empty & within board boundaries
        const validShipPlacement = boardObj.canPlaceShipBetween(startPos, endPos);

        allCoords.forEach((coord) => {
            if (boardObj.areCoordsWithinBoard(coord)) {
                let idString = (0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__.convertCoordToId)(coord);
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
    
    removeBlur(boardsContainer);
    clearChildElements(boardsContainer); 

    let gameboard;

    // if shiplength contains a number / isnt undefined. i.e. if ships still needs to be placed add click event
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
        instructions = `Place the ${shipType}, ${(0,_utility_getName__WEBPACK_IMPORTED_MODULE_2__.getName)()}. Right click to rotate.`;
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
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment-container');
    const commentBox = document.createElement('p');
    commentBox.classList.add('comment-box');

    turnTracker.textContent = `${_game__WEBPACK_IMPORTED_MODULE_0__.getTurn()}'s turn`;
    if (_game__WEBPACK_IMPORTED_MODULE_0__.getTurn() === 'Player') {
        turnTracker.textContent = `${(0,_utility_getName__WEBPACK_IMPORTED_MODULE_2__.getName)()}'s turn`;
    } 

    commentBox.textContent = `${_game__WEBPACK_IMPORTED_MODULE_0__.getResult()}`;
    clearChildElements(turnTrackerContainer);
    turnTrackerContainer.appendChild(turnTracker);
    turnTrackerContainer.appendChild(commentContainer);
    commentContainer.appendChild(commentBox);
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
    const coords = (0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__.parseCoords)(position);
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
    playAgainBtn.addEventListener('click', handlePlayAgain);
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
    const boardsContainer = document.querySelector('.boards-container');
    blurElement(boardsContainer);
    outerContainer.appendChild(modal);
    modal.appendChild(header);
    modal.appendChild(para);
    modal.appendChild(btnGroup);
    btnGroup.appendChild(returnToMenuBtn);
    btnGroup.appendChild(playAgainBtn);    
}

const removeModal = () => {
    const modal = document.querySelector('.game-over-modal');
    modal.remove();
}

const handleReturnToMenu = () => {
    const body = document.querySelector('body');
    clearChildElements(body);
    _game__WEBPACK_IMPORTED_MODULE_0__.startGame();
}

const handlePlayAgain = () => {
    removeModal();
    _game__WEBPACK_IMPORTED_MODULE_0__.playAgain();
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
/* harmony export */   getResult: () => (/* binding */ getResult),
/* harmony export */   getTurn: () => (/* binding */ getTurn),
/* harmony export */   playAgain: () => (/* binding */ playAgain),
/* harmony export */   playerAttack: () => (/* binding */ playerAttack),
/* harmony export */   resetPlayerObjs: () => (/* binding */ resetPlayerObjs),
/* harmony export */   startGame: () => (/* binding */ startGame),
/* harmony export */   startGamePlay: () => (/* binding */ startGamePlay),
/* harmony export */   startPreGame: () => (/* binding */ startPreGame)
/* harmony export */ });
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/player */ "./src/factories/player.js");
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/ship */ "./src/factories/ship.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
/* harmony import */ var _utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/parseCoords */ "./src/modules/utility/parseCoords.js");





let player;
let computer;
let turn = 'Player';
let resultString;

const resetPlayerObjs = () => {
    player = _factories_player__WEBPACK_IMPORTED_MODULE_0__.Player();
    computer = _factories_player__WEBPACK_IMPORTED_MODULE_0__.Computer();
    computer.placeShipsRandomly();    
}

// Main menu - start game btn
const startGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderOuterContainer();
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderMainMenu();
    resetPlayerObjs();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_2__.displayShipPlacement(player);
}

const autoShipPlacement = () => {
    resetPlayerObjs();    
    player.placeShipsRandomly();
    _dom__WEBPACK_IMPORTED_MODULE_2__.displayShipPlacement(player);
}

// Once ships placed, start game - render player and enemy boards & add player name to screen
const startGamePlay = () => {
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderGameLayout();
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderPlayerBoard(player.getBoardArray());
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderEnemyBoard(computer.getBoardArray());
    console.log(computer.getBoardArray());
    console.log(player.getBoardArray());
}

// - attack enemy board (get another turn if hit), to be put on click event targetting coords
const playerAttack = (coords) => {
    // returns results of attack on enemy board with input coords - x, m, s, game over
    const attackResult = player.attack(coords, computer.getBoardObj());

    const [row, col] = coords;
    const boardVal = computer.getBoardObj().getArray()[row][col];

    // update DOM boards with attack results
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

    if (attackResult === 'Game Over') {
        declareWinner('Player'); // victory/defeat screen
    } else if (attackResult === 'miss') {
        resultString = `${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(coords)} was a ${attackResult}`;
        turn = 'Enemy';
        enemyAttack();
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
    } else if (attackResult === 'hit') {
        resultString = `${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(coords)} was a ${attackResult}! Take another shot`;
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
    } else if (attackResult === 'sunk') {
        for (let i = 0; computer.getShipList().length > i; i++) {
            let shipType = computer.getShipList()[i];
            // boardval includes ship class id
            if (boardVal.includes((0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipType).id)) {
                resultString = `You ${attackResult} their ${shipType}! Take another shot`;
            }
        }
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();        
    }
    return attackResult;
}

// - receive enemy attack 
const enemyAttack = (attackResult) => { 
    
    setTimeout(() => {
        if (attackResult === 'Game Over') {           
            declareWinner('Computer'); // victory/defeat screen
            return;
        } else if (attackResult === 'miss') {
            turn = 'Player';
            resultString = `Computer's shot on ${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(computer.getCoords())} was a ${attackResult}`;
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
            return;
        } else if (attackResult === 'hit') {
            resultString = `Computer's shot on ${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(computer.getCoords())} was a ${attackResult}`;
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
        } 
        // else if (attackResult === 'sunk') {
        //     resultString = `Ship has been ${attackResult}!`;
        //     DOM.renderTurnTracker();
        // }

        // Recursively call attack - random attack returns attackResult
        enemyAttack(computer.smartAttack(player.getBoardObj()));

        // NB: getCoords function will only work after randomAttack is called
        const [row, col] = computer.getCoords();
        const boardVal = player.getBoardObj().getArray()[row][col];
           
        if (attackResult === 'sunk') { // Not currently working
            for (let i = 0; player.getShipList().length > i; i++) {
                let shipType = player.getShipList()[i];
                // if boardval includes ship class id
                if (boardVal.includes((0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipType).id)) {
                    resultString = `Your ${shipType} has been ${attackResult}!`;
                }
            }
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
        }
        
        // update DOM boards
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());

        return attackResult;
    }, 700);
}

const getTurn = () => {
    return turn;
}

const getResult = () => {
    if (resultString === undefined) {
        resultString = 'Fire when ready!';
    }
    return resultString;
}

// Victory screen / restart btn
const declareWinner = (winner) => {
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderVictoryScreen(winner);
}

const playAgain = () => {
    resultString = 'Fire when ready!';
    turn = 'Player';
    resetPlayerObjs();
    startPreGame();
}



// TO DO: 
// - Fix enemy attack sunk message
// Fill in X ships remaining
// fix smart attack linear targets logic - 2 hits next to each other arent necessarily the same ship

/***/ }),

/***/ "./src/modules/utility/getName.js":
/*!****************************************!*\
  !*** ./src/modules/utility/getName.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getName: () => (/* binding */ getName)
/* harmony export */ });
const getName = () => {
    let playerName = document.getElementById('name-input').value;
    if (playerName === "") {
        playerName = 'Admiral one';
    }
    return playerName;
}



/***/ }),

/***/ "./src/modules/utility/parseCoords.js":
/*!********************************************!*\
  !*** ./src/modules/utility/parseCoords.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertCoordToId: () => (/* binding */ convertCoordToId),
/* harmony export */   parseCoords: () => (/* binding */ parseCoords)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1VZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVU7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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDakI7QUFDdEI7QUFDQSxvREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvdXRpbGl0eS9nZXROYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvdXRpbGl0eS9wYXJzZUNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xyXG59XHJcblxyXG4uY29udGFpbmVyLFxyXG4uYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxyXG4gICAgZ2FwOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xyXG59XHJcblxyXG4uc3F1YXJlOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgcGFkZGluZzogNDVweDsgICAgXHJcbn1cclxuXHJcbi5hc2stbmFtZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAyODZweDtcclxufVxyXG5cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxufVxyXG5cclxuLmJ0biB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIFxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuXHJcbi5zdGFydC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLXNoaXBzLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcclxuICAgIGNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zaGlwLWNvdW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnR1cm50cmFja2VyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG4uY29tbWVudC1jb250YWluZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDM0NDtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmV0dXJuLW1lbnUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xyXG59XHJcblxyXG4ucGxheS1hZ2Fpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDYzcHgpIHtcclxuICAgIC5nYW1lYm9hcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXHJcbiAgICAgICAgZ2FwOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5zcXVhcmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9ICAgIFxyXG4gICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cCAuYnRuIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZC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QUNiLDZDQUE2QztRQUM3QywwQ0FBMEM7UUFDMUMsUUFBUTtRQUNSLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcixcXHJcXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmY2I7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmU6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyODZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VtZW50LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtc2hpcC1wbGFjZW1lbnQgeyAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YTZhO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxufVxcclxcblxcclxcbi5idG4geyAgICBcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Utc2hpcHMtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZS5wbGF5ZXIge1xcclxcbiAgICBjb2xvcjogIzIzZDMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlLmVuZW15IHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvdW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udHVybi10cmFja2VyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50dXJudHJhY2tlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDYzcHgpIHtcXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcXHJcXG4gICAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3F1YXJlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH0gICAgXFxyXFxuICAgIC5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gRE9ORVxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXHJcbi8vIFNISVBTIFNIT1VMRCBOT1QgQkUgQUJMRSBUTyBPVkVSTEFQXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHsgXHJcbiAgICAgICAgICAgIC8vIGdlbiAxMCByb3cgYXJyYXlzXHJcbiAgICAgICAgICAgIGJvYXJkW3Jvd10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZW4gMTAgY29scyAoYWRkIDEwIGVtcHR5IHN0cmluZ3MpIGluc2lkZSBlYWNoIHJvdyBhcnJheVxyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgY29vcmRzIGJ5IFtyb3dJbmRleF1bY29sSW5kZXhdIGllLiBbMF1bMF0gfHwgWzldWzddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJvYXJkQXJyID0gY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gICAgY29uc3Qgc2hpcHNBcnIgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcCA9IHtcclxuICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXHJcbiAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxyXG4gICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXHJcbiAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IFNoaXAoJ3BhdHJvbEJvYXQnKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzaGlwKTsgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCBldGNdXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcFR5cGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYWNlIHNoaXAncyBpZCBpbnRvIHRoZSBib2FyZCBhcnJheSBiZXR3ZWVuIGlucHV0IGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKSB7IC8vZS5nICdiYXR0bGVzaGlwJywgWzAsMF0sIFs0LDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RvcmUgYWxsIGNvb3JkcyBiZXR3ZWVuIHN0YXJ0IGNvb3JkICYgZW5kIGNvb3JkXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGFtb3VudCBvZiBjb29yZHMgYmV0d2VlbiB0aGUgMiBnaXZlbiBpbnB1dHNcclxuICAgICAgICBjb25zdCBjb29yZHNBbW91bnQgPSBhbGxDb29yZHMubGVuZ3RoO1xyXG4gICAgICAgIC8vIEdldCBzaGlwTGVuZ3RoICYgaWQgcHJvcHMgZnJvbSBTaGlwIGZhY3RvcnlcclxuICAgICAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNoaXBUeXBlID09PSB0eXBlc1tpXSAmJiBzaGlwTGVuZ3RoID09PSBjb29yZHNBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1c2ggc2hpcCBvYmogdG8gc2hpcHMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICAgICAgICAgIHNoaXBzQXJyLnB1c2goc2hpcE9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgaWQgdG8gZWFjaCBjb29yZCAoYm9hcmQgYXJyYXkgaW5kZWNlcylcclxuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZDtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gPSBpZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgLy8gcHVzaCBzaGlwbGVuZ3RoIG9mIGVhY2ggc2hpcCBpbnRvIG5ldyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyB0eXBlcy5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aEFycmF5LnB1c2goc2hpcFt0eXBlc1tpXV0uc2hpcExlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzaGlwTGVuZ3RoQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBhbGwgY29vcmRzIGJldHdlZW4sICYgaW5jbHVkaW5nLCB0d28gaW5wdXQgY29vcmRzIGVnLiBbMCwwXSwgWzAsM11cclxuICAgIGZ1bmN0aW9uIGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgLy8gZm9ybWF0cyBlYWNoIGlucHV0IGludG8gYXJyYXkgd2l0aCAyIGl0ZW1zICYgYXNzaWducyB2YXIgbmFtZXMgdG8gaXRlbXNcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGNvbnN0IFtlbmRSb3csIGVuZENvbF0gPSBlbmRQb3M7XHJcbiAgICAgICAgbGV0IGFsbENvb3JkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpZiBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5IChzYW1lIGNvbCB2YWx1ZXMpXHJcbiAgICAgICAgaWYgKHN0YXJ0Q29sID09PSBlbmRDb2wpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IGFsbCByb3cgdmFsdWVzIGJldHdlZW4gc3RhcnQgJiBlbmQgY29vcmRzXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFJvd051bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydFJvdywgZW5kUm93KTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBhcnJheSBmcm9tIGFsbCByb3cgdmFsdWVzIHRoYXQgcmV0dXJucyByb3cgdmFsdWUgKyBpbnB1dCBjb2wgYW5kIHN0b3JlIGluIGFsbCBjb29yZHMgYXJyYXlcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsUm93TnVtcy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlmIHNoaXAgcGxhY2VkIGhvcml6b250YWxseSAoc2FtZSByb3cgdmFscylcclxuICAgICAgICAgICAgY29uc3QgYWxsQ29sTnVtcyA9IGdldEFsbE51bXNCZXR3ZWVuKHN0YXJ0Q29sLCBlbmRDb2wpO1xyXG4gICAgICAgICAgICBhbGxDb29yZHMgPSBhbGxDb2xOdW1zLm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Um93LCBjb2xdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBudW1zIGJldHdlZW4gMiBpbnB1dCBudW1zXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxOdW1zQmV0d2Vlbih4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IFtdO1xyXG4gICAgICAgIGxldCBoaWdoLCBsb3c7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHdoaWNoIG51bSBpcyBoaWdoZXIgb3IgbG93ZXJcclxuICAgICAgICBpZiAoeCA+IHkpIHtcclxuICAgICAgICAgICAgaGlnaCA9IHg7XHJcbiAgICAgICAgICAgIGxvdyA9IHk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlnaCA9IHk7XHJcbiAgICAgICAgICAgIGxvdyA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHB1c2ggbnVtcyBmcm9tIGxvdyB0byBoaWdoIHRvIG51bXMgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xyXG4gICAgICAgICAgICBudW1zLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgZW5kIGNvb3JkIGZyb20gc3RhcnQgY29vcmQgKyBzaGlwbGVuZ3RoICYgZGlyZWN0aW9uXHJcbiAgICBmdW5jdGlvbiBnZXRFbmRDb29yZCAoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IFtzdGFydFJvdywgc3RhcnRDb2xdID0gc3RhcnRQb3M7XHJcbiAgICAgICAgbGV0IGVuZFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgIGxldCBlbmRDb2wgPSBzdGFydENvbDtcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBnb2VzIGRvd253YXJkcyBpbiBhcnJheSBpbmRleCAodXB3YXJkcyBpbiBET00pLCBob3Jpem9udGFsIGdvZXMgcmlnaHR3YXJkc1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZW5kUm93ICs9IHNoaXBMZW5ndGggLSAxOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZW5kQ29sICs9IHNoaXBMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2VuZFJvdywgZW5kQ29sXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlcyBwYWlyIG9mIGNvb3JkcywgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgc2VuZHMgaGl0IGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAgb3IgcmVjb3JkcyBjb29yZHMgb2YgbWlzc2VkIHNob3RcclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICAvLyBTdG9yZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYm9hcmQgYXJyYXkgaW5kZWNlc1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgLy8gY29vcmRzIGNvbnRhaW4gYSBzaGlwIGlmIGJvYXJkVmFsdWUgaXMgYSBudW1iZXIuLi5cclxuICAgICAgICBjb25zdCBjb29yZHNDb250YWluU2hpcCA9IHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJztcclxuXHJcbiAgICAgICAgaWYgKGNvb3Jkc0NvbnRhaW5TaGlwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyB0eXBlcy5sZW5ndGggPiBpOyBpKyspIHsgXHJcbiAgICAgICAgICAgICAgICAvLyBncmFiIGlkIGZyb20gc2hpcCBwcm9wc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gc2hpcFt0eXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGJvYXJkIHZhbCBpcyBlcXVhbCB0byBpZCBvZiBzaGlwIG9ialxyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBoaXQgZnVuY3Rpb24gdG8gdGhhdCBzaGlwIG9ialxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBzaGlwW3R5cGVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwT2JqLmhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBTIHRvIHJlcHJlc2VudCBTdW5rIHRvIGVudGlyZSBzaGlwIGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHJvdywgcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZEFycltyXVtjXS50b1N0cmluZygpLmluY2x1ZGVzKGlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3JdW2NdID0gYCR7aWR9U2A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYW4gWCB0byB2YWx1ZSB0byByZXByZXNlbnQgYSBoaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdICs9ICdYJztcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2hpcHNTdW5rKCkpIHJldHVybiAnR2FtZSBPdmVyJzsgLy8gR2FtZSBvdmVyIGhhcyB0byByZXR1cm4gYmVmb3JlIGZpbmFsIHNoaXAgc3Vua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSByZXR1cm4gJ3N1bmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGJvYXJkIHZhbHVlIHRvIE0gZm9yIGEgbWlzc1xyXG4gICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gPSAnTSc7XHJcbiAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVGhlIGV2ZXJ5KCkgbWV0aG9kIG9mIEFycmF5IGluc3RhbmNlcyB0ZXN0cyB3aGV0aGVyIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIEl0IHJldHVybnMgYSBCb29sZWFuIHZhbHVlLlxyXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4gc2hpcHNBcnIuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xyXG5cclxuICAgIC8vIGFyZSBjb29yZHMgZW1wdHksIHdpdGhpbiBib2FyZFxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHNoaXAgY2FuIHBsYWNlIGJldHdlZW4gdHdvIGdpdmVuIGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIHJldHVybiBhbGxDb29yZHMuZXZlcnkoKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkgJiYgYXJlQ29vcmRzRW1wdHkoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRzIGFyZSB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICBpZiAocm93ID49IDEwIHx8IHJvdyA8IDAgfHwgY29sID49IDEwIHx8IGNvbCA8ICAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRzIGFyZSBlbXB0eVxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzRW1wdHkoY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICBpZiAoYm9hcmRBcnJbcm93XVtjb2xdID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc1VucGxheWVkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycgfHwgdHlwZW9mIGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBjb29yZHMgYm90aCBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzIHJldHVybiB0cnVlXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNFbXB0eVdpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghYXJlQ29vcmRzRW1wdHkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNNaXNzKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJ00nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGFrZSBhIGNvb3JkIGFuZCBnZXQgYWxsIGVtcHR5IGNvb3JkcyB3aXRoaW4gYm9hcmQgdGhhdCBhcmUgYWJvdmUsIGJlbG93LCBsZWZ0ICYgcmlnaHQgb2YgY29vcmRcclxuICAgIGZ1bmN0aW9uIGdldEFsbFZhbGlkQWRqYWNlbnRDb29yZHMoY29vcmRzLCBib2FyZE9iaikge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF09IGNvb3JkcztcclxuICAgICAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3cgKyAxLCBjb2xdKTtcclxuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3JvdyAtIDEsIGNvbF0pO1xyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93LCBjb2wgKyAxXSk7XHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3csIGNvbCAtIDFdKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGZpbHRlcigpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgY3JlYXRlcyBhIHNoYWxsb3cgY29weSBvZiBhIHBvcnRpb24gb2YgYSBnaXZlbiBhcnJheSwgZmlsdGVyZWQgZG93biB0byBqdXN0IHRoZSBlbGVtZW50cyBmcm9tIHRoZSBnaXZlbiBhcnJheSB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxyXG4gICAgICAgIC8vIGZpbHRlciBvdXQgY29vcmRzIHRoYXQgYXJlIGVtcHR5IG9yIG91dHNpZGUgYm9hcmRcclxuICAgICAgICBjb25zdCB2YWxpZE1vdmVzID0gcG9zc2libGVNb3Zlcy5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIWJvYXJkT2JqID8gYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZChjb29yZCk6IGJvYXJkT2JqLmFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQoY29vcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlIDIgY29vcmRzIGFuZCByZXR1cm4gYWxsIHZhbGlkIGNvb3JkcyBhbG9uZyBzYW1lIGF4aXMgXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgY29uc3QgbGluZWFyVGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IFtzdGFydFJvdywgc3RhcnRDb2xdID0gc3RhcnRQb3M7XHJcbiAgICAgICAgY29uc3QgW2VuZFJvdywgZW5kQ29sXSA9IGVuZFBvcztcclxuICAgICAgICBsZXQgY29vcmQ7XHJcblxyXG4gICAgICAgIGlmIChlbmRSb3cgPT09IHN0YXJ0Um93KSB7IC8vc2FtZSByb3dcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb2wgPSBzdGFydENvbDtcclxuICAgICAgICAgICAgLy8gTG9vcCBpbiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgZGlyZWN0aW9uIGFsb25nIHJvd3MsIGFkZCBlbXB0eSBjb29yZHMgdG8gdGFyZ2V0cyBhcnJheSBhbmQgYnJlYWsgb3V0IGlmIGNvb3JkcyBhcmUgb3V0c2lkZSBib2FyZCBib3VuZGFyaWVzIG9yIGEgbWlzc2VkIHNob3RcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gW3N0YXJ0Um93LCBjdXJyZW50Q29sKytdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkpIGJyZWFrOyAvLyBicmVhayBzdGF0ZW1lbnQgdGVybWluYXRlcyBjdXJyZW50IGxvb3BcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50Q29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtzdGFydFJvdywgY3VycmVudENvbC0tXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIHNhbWUgY29sdW1uXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um93ID0gc3RhcnRSb3c7XHJcbiAgICAgICAgICAgIC8vIExvb3AgaW4gcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyBjb2x1bW5zXHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtjdXJyZW50Um93KyssIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50Um93ID0gc3RhcnRSb3c7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtjdXJyZW50Um93LS0sIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZWFyVGFyZ2V0cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBhbGxTaGlwc1N1bmssXHJcbiAgICAgICAgYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZCxcclxuICAgICAgICBhcmVDb29yZHNXaXRoaW5Cb2FyZCxcclxuICAgICAgICBjYW5QbGFjZVNoaXBCZXR3ZWVuLFxyXG4gICAgICAgIGNyZWF0ZUJvYXJkQXJyYXksXHJcbiAgICAgICAgY3JlYXRlU2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIGdldEFsbENvb3JkcyxcclxuICAgICAgICBnZXRBbGxOdW1zQmV0d2VlbixcclxuICAgICAgICBnZXRBcnJheSxcclxuICAgICAgICBnZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzLFxyXG4gICAgICAgIGdldEFsbFZhbGlkTGluZWFyQ29vcmRzLFxyXG4gICAgICAgIGdldEVuZENvb3JkLFxyXG4gICAgICAgIGdldFNoaXBUeXBlcyxcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjaywgICAgICAgIFxyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG4vLyBQbGF5ZXJzIGNhbiB0YWtlIHR1cm5zIHBsYXlpbmcgdGhlIGdhbWUgYnkgYXR0YWNraW5nIHRoZSBlbmVteSBHYW1lYm9hcmQuXHJcbi8vIFRoZSBnYW1lIGlzIHBsYXllZCBhZ2FpbnN0IHRoZSBjb21wdXRlciwgc28gbWFrZSB0aGUg4oCYY29tcHV0ZXLigJkgY2FwYWJsZSBvZiBtYWtpbmcgcmFuZG9tIHBsYXlzLiBUaGUgQUkgZG9lcyBub3QgaGF2ZSB0byBiZSBzbWFydCwgYnV0IGl0IHNob3VsZCBrbm93IHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gbW92ZSBpcyBsZWdhbCAoaS5lLiBpdCBzaG91bGRu4oCZdCBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlKS5cclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aEFycmF5ID0gZ2V0U2hpcExlbmd0aEFycmF5KCk7ICAgXHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IGdldFNoaXBMaXN0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmRPYmooKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnc3VibWFyaW5lJywgJ2NydWlzZXInLCAncGF0cm9sQm9hdCddXHJcbiAgICBmdW5jdGlvbiBnZXRTaGlwTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuZ2V0U2hpcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWzUsIDQsIDMsIDMsIDJdIFxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5jcmVhdGVTaGlwTGVuZ3RoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRzLCBlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwZWF0UGxheSA9IGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGlmIChyZXBlYXRQbGF5KSByZXR1cm4gJ3JlcGVhdCc7XHJcblxyXG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRzIGhhdmUgYmVlbiB0YXJnZXR0ZWQgYWxyZWFkeVxyXG4gICAgZnVuY3Rpb24gaXNSZXBlYXRQbGF5KGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgYm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkQXJyW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09ICcnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgMiByYW5kb20gbnVtYmVycyBiZXR3ZWVuIDAtOSBhbmQgcmV0dXJuIGluIGFycmF5XHJcbiAgICBmdW5jdGlvbiBnZW5SYW5kb21Db29yZHMoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjdXJzaXZlIHNoaXAgcGxhY2VtZW50IC0gcG9wIG5ldyBzaGlwdHlwZSAmIHNoaXBsZW5ndGggdW50aWwgYWxsIHNoaXBzIHBsYWNlZFxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcExpc3QucG9wKCk7XHJcbiAgICAgICAgaWYgKHNoaXBUeXBlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zLCBkaXJlY3Rpb24sIGVuZFBvcywgdmFsaWRTaGlwUGxhY2VtZW50O1xyXG5cclxuICAgICAgICAvLyB3aGlsZSB0aGVyZXMgbm8gdmFsaWQgc2hpcCBwbGFjZW1lbnQgYXNzaWduIHZhbHVlcyB0byB2YXJzIGZvciB1c2UgaW4gZnVuY3Rpb25zIHVudGlsIHNoaXBUeXBlICYgc2hpcExlbmd0aCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhcnRQb3MgPSBnZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGJvYXJkLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmQuY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjayxcclxuICAgICAgICBnZW5SYW5kb21Db29yZHMsXHJcbiAgICAgICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgICAgICBnZXRCb2FyZE9iaiwgICAgICAgIFxyXG4gICAgICAgIGdldFNoaXBMaXN0LFxyXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgICAgICBzaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgc2hpcExpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFBsYXllciBmYWN0b3J5XHJcbmNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSBQbGF5ZXIoKTtcclxuICAgIGxldCByYW5kb21Db29yZHM7XHJcblxyXG4gICAgY29uc3QgaGl0Q29vcmRzID0gW107XHJcbiAgICBjb25zdCBhZGphY2VudFRhcmdldHMgPSBbXTtcclxuICAgIGNvbnN0IGxpbmVhclRhcmdldHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckFyclZhbHMoYXJyKSB7XHJcbiAgICAgICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSBhcnIucG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2NhbiBib2FyZCBhcnJheSBhbmQgZmluZCBjZWxscyB0aGF0IGNvbnRhaW4gdGFyZ2V0IGkuZSAnWCdcclxuICAgIGNvbnN0IGZpbmQyZENvb3JkaW5hdGVzID0gKGJvYXJkQXJyLCB0YXJnZXQpID0+IHtcclxuICAgICAgICBjb25zdCBjb29yZHNBcnIgPSBbXTtcclxuICAgICAgICBsZXQgY29vcmQgPSBbXTtcclxuICAgICAgICBib2FyZEFyci5mb3JFYWNoKChyb3csIGkpID0+IHtcclxuICAgICAgICAgIHJvdy5mb3JFYWNoKChpdGVtLCBqKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnRvU3RyaW5nKCkuaW5jbHVkZXModGFyZ2V0LCAxKSkge1xyXG4gICAgICAgICAgICAgIGNvb3JkID0gW2ksal07XHJcbiAgICAgICAgICAgICAgY29vcmRzQXJyLnB1c2goY29vcmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjb29yZHNBcnI7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBvbiBoaXQgYWRkIHRoZSBjb29yZCB0byBhcnJheSwgb24gc3VuayBjbGVhciBhcnJheXNcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUF0dGFja1Jlc3VsdHMoYXR0YWNrUmVzdWx0LCBjb29yZHMpIHtcclxuICAgICAgICAvLyBpZiBhdHRhY2sgcmVzdWx0IGlzIGEgaGl0LCBzdG9yZSBpbiBhcnJcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnaGl0JykgaGl0Q29vcmRzLnB1c2goY29vcmRzKTtcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnc3VuaycpIHtcclxuICAgICAgICAgICAgY2xlYXJBcnJWYWxzKGhpdENvb3Jkcyk7XHJcbiAgICAgICAgICAgIGNsZWFyQXJyVmFscyhhZGphY2VudFRhcmdldHMpO1xyXG4gICAgICAgICAgICBjbGVhckFyclZhbHMobGluZWFyVGFyZ2V0cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNtYXJ0QXR0YWNrKGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBjb25zdCBlbmVteUJvYXJkQXJyID0gZW5lbXlCb2FyZC5nZXRBcnJheSgpOyAvLyBha2EgcGxheWVyIGJvYXJkXHJcbiAgICAgICAgbGV0IHJlbWFpbmluZ0hpdHNBcnIgPSBmaW5kMmRDb29yZGluYXRlcyhlbmVteUJvYXJkQXJyLCAnWCcpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEhJVCBDT09SRFMgaXM6ICR7aGl0Q29vcmRzfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZW1haW5pbmcgaGl0cyBpczogJHtyZW1haW5pbmdIaXRzQXJyfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBREpBQ0VOVCBUQVJHRVRTIGlzOiAke2FkamFjZW50VGFyZ2V0c31gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgTElORUFSIFRBUkdFVFMgaXM6ICR7bGluZWFyVGFyZ2V0c31gKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gMS4gaWYgbm8gdmFsaWQgdGFyZ2V0cyBhdHRhY2sgcmFuZG9tIGNvb3JkXHJcbiAgICAgICAgaWYgKGhpdENvb3Jkcy5sZW5ndGggPT09IDAgJiYgYWRqYWNlbnRUYXJnZXRzLmxlbmd0aCA9PT0gMCAmJiBsaW5lYXJUYXJnZXRzLmxlbmd0aCA9PT0gMCAmJiByZW1haW5pbmdIaXRzQXJyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMi4gaWYgYSBoaXQgZXhpc3RzLCBzdG9yZSBpdCdzIGFkamFjZW50IGNvb3JkcyBpbiBib3RoIGF4aXMgaW4gbmV3IGFyclxyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID09PSAxICYmIGFkamFjZW50VGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgbGluZWFyVGFyZ2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXQgPSBoaXRDb29yZHNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3NzaWJsZVRhcmdldHMgPSBlbmVteUJvYXJkLmdldEFsbFZhbGlkQWRqYWNlbnRDb29yZHMocHJldmlvdXNIaXQsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgICAgICBuZXh0UG9zc2libGVUYXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gYWRqYWNlbnRUYXJnZXRzLnB1c2godGFyZ2V0KSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gMiAtIFBVU0ggVE8gQURKQUNFTlQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIGlmIHRoZXJlIGFyZSAyIGhpdCBjb29yZHMsIHN0b3JlIHRoZSBjb29yZHMgd2l0aGluIHNhbWUgYXhpcyBpbiBuZXcgYXJyIChsaW5lYXIpXHJcbiAgICAgICAgaWYgKGhpdENvb3Jkcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gaGl0Q29vcmRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRQb3MgPSBoaXRDb29yZHNbaGl0Q29vcmRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgbmV4dFBvc3NpYmxlTGluZWFyVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGxpbmVhclRhcmdldHMucHVzaCh0YXJnZXQpKTsgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIDMgLSBQVVNIIFRPIExJTkVBUicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNC4gaWYgYXJyYXlzIGhhdmUgYmVlbiBjbGVhcmVkIGFmdGVyIHNoaXAgc3VuayBidXQgYm9hcmQgYXJyYXkgc3RpbGwgY29udGFpbiBoaXRzICh4KVxyXG4gICAgICAgIGlmIChyZW1haW5pbmdIaXRzQXJyLmxlbmd0aCA+IDAgJiYgYWRqYWNlbnRUYXJnZXRzLmxlbmd0aCA9PT0gMCAmJiBsaW5lYXJUYXJnZXRzLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSByZW1haW5pbmdIaXRzQXJyWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRQb3MgPSByZW1haW5pbmdIaXRzQXJyW3JlbWFpbmluZ0hpdHNBcnIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGNvbnN0IG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMgPSBlbmVteUJvYXJkLmdldEFsbFZhbGlkTGluZWFyQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgYXJlIG5vIGxpbmVhciB0YXJnZXRzLCBmaW5kIHRoZSBhZGphY2VudCB0YXJnZXRzIGZvciBlYWNoIHJlbWFpbmluZyBoaXRcclxuICAgICAgICAgICAgaWYgKG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2aW91c0hpdCA9IHJlbWFpbmluZ0hpdHNBcnIucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVBZGphY2VudFRhcmdldHMgPSBlbmVteUJvYXJkLmdldEFsbFZhbGlkQWRqYWNlbnRDb29yZHMocHJldmlvdXNIaXQsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgbmV4dFBvc3NpYmxlQWRqYWNlbnRUYXJnZXRzLmZvckVhY2goKHRhcmdldCkgPT4gYWRqYWNlbnRUYXJnZXRzLnB1c2godGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmRpdGlvbiA0IC0gUFVTSCBSRU1BSU5JTkcgSElUUyBUTyBBREpBQ0VOVFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy9lbHNlIHRhcmdldCBsaW5lYXJcclxuICAgICAgICAgICAgICAgIG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBsaW5lYXJUYXJnZXRzLnB1c2godGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmRpdGlvbiA0IC0gUFVTSCBSRU1BSU5JTkcgSElUUyBUTyBMSU5FQVJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGxldCBuZXh0VGFyZ2V0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGluZWFyIHRhcmdldCB0aGUgbGFzdCBvbmUgZnJvbSBhcnJheSB3aWxsIGJlIG5leHRUYXJnZXQsIFxyXG4gICAgICAgIC8vIGVsc2UgdGFyZ2V0IHRoZSBsYXN0IGFkamFjZW50IHRhcmdldHNcclxuICAgICAgICBpZiAobGluZWFyVGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBsaW5lYXJUYXJnZXRzLnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBhZGphY2VudFRhcmdldHMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBuZXh0IHRhcmdldCBpcyAke25leHRUYXJnZXR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2sobmV4dFRhcmdldCwgZW5lbXlCb2FyZCk7IC8vIHJldHVybnMgaGl0IHN1bmsgb3IgbWlzcyBzdHJpbmdzXHJcbiAgICAgICAgaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIG5leHRUYXJnZXQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkcyA9IHByb3RvLmdlblJhbmRvbUNvb3JkcygpOyAgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHByb3RvLmF0dGFjayhyYW5kb21Db29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGhhbmRsZUF0dGFja1Jlc3VsdHMoYXR0YWNrUmVzdWx0LCByYW5kb21Db29yZHMpO1xyXG4gICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xyXG4gICAgICAgIHJldHVybiByYW5kb21Db29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDb29yZHMsXHJcbiAgICAgICAgLi4ucHJvdG8sXHJcbiAgICAgICAgcmFuZG9tQXR0YWNrLFxyXG4gICAgICAgIHNtYXJ0QXR0YWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTsiLCIvLyBsZW5ndGggPSBudW1iZXJcclxuLy8gaGl0cyA9IG51bWJlciBvciBhcnJheSBvZiBib29sZWFuIHZhbHVlcyByZXByZXNlbnRpbmcgZWFjaCBzaGlwIHBhcnQ/XHJcbi8vIGlzU3VuayA9IGVpdGhlciBjaGVjayBpZiBkYW1hZ2UgPj0gbGVuZ3RoIE9SIGNoZWNrIGlmIGV2ZXJ5IGFycmF5IGVsZW1lbnQgaXMgdHJ1ZVxyXG5cclxuLy8gXCJSRU1FTUJFUiB5b3Ugb25seSBoYXZlIHRvIHRlc3QgeW91ciBvYmplY3TigJlzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgbWV0aG9kcyBvciBwcm9wZXJ0aWVzIHRoYXQgYXJlIHVzZWQgb3V0c2lkZSBvZiB5b3VyIOKAmHNoaXDigJkgb2JqZWN0IG5lZWQgdW5pdCB0ZXN0cy5cIlxyXG5cclxuY29uc3QgU2hpcCA9IChzaGlwVHlwZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcENsYXNzZXMgPSB7XHJcbiAgICAgICAgY2Fycmllcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNCxcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtYXJpbmU6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMyxcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcnVpc2VyOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0cm9sQm9hdDoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBoaXRzQW1vdW50ID0gMDtcclxuICAgIGNvbnN0IHsgc2hpcExlbmd0aCwgaWQgfSA9IHNoaXBDbGFzc2VzW3NoaXBUeXBlXTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkgdG8geW91ciBzaGlwLlxyXG4gICAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0c0Ftb3VudCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHdoZXRoZXIgaGFzIHN1bmsgYmFzZWQgb24gc2hpcCdzIGxlbmd0aCBhbmQgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZLlxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHNBbW91bnQgPj0gc2hpcExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcENsYXNzZXMsXHJcbiAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICBoaXQsXHJcbiAgICAgICAgaGl0c0Ftb3VudCxcclxuICAgICAgICBpZCxcclxuICAgICAgICBpc1N1bmssXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCAqIGFzIEdBTUUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb3JkcywgY29udmVydENvb3JkVG9JZCB9IGZyb20gXCIuL3V0aWxpdHkvcGFyc2VDb29yZHNcIjtcclxuaW1wb3J0IHsgZ2V0TmFtZSB9IGZyb20gXCIuL3V0aWxpdHkvZ2V0TmFtZVwiO1xyXG5cclxuY29uc3QgcmVuZGVyT3V0ZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcy1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwc1wiO1xyXG4gICAgY29uc3Qgc3RhcnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRCdG4uaWQgPSBcInN0YXJ0XCI7XHJcbiAgICBzdGFydEJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBnYW1lJzsgICAgXHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTsgICAgXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHN0YXJ0QnRuQ29udGFpbmVyKTtcclxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU5hbWVNZW51KTtcclxufVxyXG5cclxuY29uc3QgaGlkZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxufVxyXG5cclxuY29uc3QgYmx1ckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJsdXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgYXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcclxuICAgIGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXNrLW5hbWUtY29udGFpbmVyJyk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChhc2tOYW1lQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsIG9uZSBuYW1lOiBgXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xyXG4gICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XHJcbiAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGdldE5hbWUoKTtcclxuICAgICAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgICAgICAgICAgaGlkZUVsZW1lbnQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5cclxuLy8gUmVtb3ZlIGNoaWxkIGVscyBmcm9tIGEgcGFyZW50IGVsICYgcmV0dXJucyByZW1vdmVkIG5vZGUgLSBlLmcuIG91dGVyY29udGFpbmVyXHJcbmNvbnN0IGNsZWFyQ2hpbGRFbGVtZW50cyA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTaGlwUGxhY2VtZW50ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmRPYmogPSBwbGF5ZXIuZ2V0Qm9hcmRPYmooKTtcclxuICAgIGNvbnN0IGJvYXJkQXJyID0gcGxheWVyLmdldEJvYXJkQXJyYXkoKTsgICAgXHJcblxyXG4gICAgLy8gLSBwb3AgcmVtb3ZlcyAmIHJldHVybnMgbGFzdCBlbGVtZW50IG9mIGFycmF5IC0gb25jZSB0aGUgYXJyYXkgaXMgZW1wdHkgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICBjb25zdCBzaGlwVHlwZSA9IHBsYXllci5zaGlwTGlzdC5wb3AoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBwbGF5ZXIuc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gICAgXHJcbiAgICAvLyBDbGljayBhIHNxdWFyZSB0byBwbGFjZSBzaGlwXHJcbiAgICBjb25zdCBwbGFjZVNoaXBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gc3F1YXJlIGlkIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbGVnZW5kICYgdGhlIGdhcHMgYmV0d2VlbiBzcXVhcmVzIG5vbiBjbGlja2FibGUpXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIGNvb3JkcyBpbiBhcnJheSBmb3JtYXRcclxuICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyBlbmQgcG9zIGNvb3JkIGNhbGNkIGZyb20gc3RhcnQgcG9zXHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gYm9hcmRPYmouZ2V0RW5kQ29vcmQoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmRPYmouY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGFyZSBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICBib2FyZE9iai5wbGFjZVNoaXAoc2hpcFR5cGUsIHN0YXJ0UG9zLCBlbmRQb3MpOyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgICAgICAvLyByZWN1cnNpdmUgLSBwb3AgYSBuZXcgc2hpcCB0eXBlIGludG8gcGxhY2VTaGlwIGZ1bmN0aW9uIHVudGlsIGV2ZXJ5IHNoaXAgaXMgcGxhY2VkXHJcbiAgICAgICAgICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGVudGVyIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGxheUhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3VzZSBsZWF2ZSBldmVudCBoYW5kbGVyXHJcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNoaXBNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySG92ZXJFZmZlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzd2l0Y2ggc2hpcCBvcmllbnRhdGlvbiBkdXJpbmcgcGxhY2VtZW50IHRvIHB1dCBvbiByaWdodCBjbGlja1xyXG4gICAgY29uc3Qgcm90YXRlRGlyZWN0aW9uID0gKGUpID0+IHtcclxuICAgICAgICAvLyBwcmV2ZW50IHJpZ2h0IGNsaWNrIG1lbnUgYXBwZWFyaW5nXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7IC8vZS5nLiBpZiBsZWdlbmRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICAgICAgZGlzcGxheUhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgaG92ZXIgZWZmZWN0IHRvIGRpdiBzcXVhcmUgaWQgXHJcbiAgICBjb25zdCBkaXNwbGF5SG92ZXJFZmZlY3QgPSAocG9zaXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTsgLy8gZWcuIDEwQSA9ICdbOSwwXSdcclxuICAgICAgICBjb25zdCBlbmRQb3MgPSBib2FyZE9iai5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTsgLy9lZy4gWzksMF0sICd2ZXJ0aWNhbCcsIDIgPSBbMTAsMF1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBib2FyZE9iai5nZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGFyZSBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmRPYmouY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChib2FyZE9iai5hcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZFN0cmluZyA9IGNvbnZlcnRDb29yZFRvSWQoY29vcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGhvdmVyIGVmZmVjdHMgKGVnIG9uIG1vdXNlbGVhdmUpXHJcbiAgICBjb25zdCBjbGVhckhvdmVyRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XHJcbiAgICAgICAgYWxsU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydEdhbWVwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHNoaXBzIGFyZW50IGFsbCBwbGFjZWQsIGRvbid0IHN0YXJ0XHJcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdBTUUuc3RhcnRHYW1lUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0U2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgIEdBTUUucmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcclxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXJ0R2FtZXBsYXkpO1xyXG5cclxuICAgIGNvbnN0IGF1dG9TaGlwUGxhY2VtZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncGxhY2Utc2hpcHMtYnRuJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi50ZXh0Q29udGVudCA9ICdBdXRvIHBsYWNlJztcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR0FNRS5hdXRvU2hpcFBsYWNlbWVudCk7XHJcblxyXG4gICAgY29uc3QgcmVzZXRTaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXRTaGlwc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVzZXQtYnRuJyk7XHJcbiAgICByZXNldFNoaXBzQnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IFNoaXBzJztcclxuICAgIHJlc2V0U2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXNldFNoaXBzKTtcclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgIHJlbW92ZUJsdXIoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2FyZHNDb250YWluZXIpOyBcclxuXHJcbiAgICBsZXQgZ2FtZWJvYXJkO1xyXG5cclxuICAgIC8vIGlmIHNoaXBsZW5ndGggY29udGFpbnMgYSBudW1iZXIgLyBpc250IHVuZGVmaW5lZC4gaS5lLiBpZiBzaGlwcyBzdGlsbCBuZWVkcyB0byBiZSBwbGFjZWQgYWRkIGNsaWNrIGV2ZW50XHJcbiAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnLCBwbGFjZVNoaXBDbGljayk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJvdGF0ZURpcmVjdGlvbik7XHJcbiAgICB9IGVsc2UgeyAvL3JlbmRlciBib2FyZCB3aXRob3V0IGV2ZW50c1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJyk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zO1xyXG5cclxuICAgIGlmIChzaGlwTGVuZ3RoKSB7IC8vIGlmIGNvbnRhaW5zIGEgbnVtXHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYFBsYWNlIHRoZSAke3NoaXBUeXBlfSwgJHtnZXROYW1lKCl9LiBSaWdodCBjbGljayB0byByb3RhdGUuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYENsaWNrIG9uIHN0YXJ0IGdhbWUgdG8gYmVnaW4hYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7ICAgXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zUGFyYSk7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG5cclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGF1dG9TaGlwUGxhY2VtZW50QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJlc2V0U2hpcHNCdG4pOyAgICBcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XHJcbn1cclxuXHJcbi8vIG1vZGUgd2lsbCBiZSBjYWxsZWQgYXMncHJlLWdhbWUnIG9yICdwbGF5ZXInLydlbmVteScgc3RyaW5nc1xyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsIG1vZGUsIGNsaWNrQ2IpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7bW9kZX1gLCAnZ2FtZWJvYXJkJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGJvYXJkQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIFJPVyBpLmUgbnVtc1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGJvYXJkQXJyW2ldO1xyXG4gICAgICAgIGxldCByb3dDb29yZCA9IGkgKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7IC8vIENPTFxyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkgeyAvLyBST1cgTEVHRU5EXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwicm93XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHJvd0xlZ2VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29sQ29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaik7IC8vIGNvbnZlcnQgdG8gbGV0dGVycztcclxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGAke3Jvd0Nvb3JkfSR7Y29sQ29vcmR9YDtcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3ByZS1nYW1lJyB8fCBtb2RlID09PSAncGxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEFycltpXVtqXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiOilcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdYJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiWFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1MnKSkge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdID09PSAnTScpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENPTCBMRUdFTkRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2xMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcImNvbFwiKTtcclxuICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY0ICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChjb2xMZWdlbmQpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlmIChjbGlja0NiKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYik7ICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVHVyblRyYWNrZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuLXRyYWNrZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0dXJuVHJhY2tlci5jbGFzc0xpc3QuYWRkKCd0dXJudHJhY2tlcicpOyBcclxuICAgIGNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb21tZW50Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYm94Jyk7XHJcblxyXG4gICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFR1cm4oKX0ncyB0dXJuYDtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICB0dXJuVHJhY2tlci50ZXh0Q29udGVudCA9IGAke2dldE5hbWUoKX0ncyB0dXJuYDtcclxuICAgIH0gXHJcblxyXG4gICAgY29tbWVudEJveC50ZXh0Q29udGVudCA9IGAke0dBTUUuZ2V0UmVzdWx0KCl9YDtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Q29udGFpbmVyKTtcclxuICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJveCk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckdhbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW5lbXktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R1cm4tdHJhY2tlci1jb250YWluZXInKTsgICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7ICAgIFxyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Q29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQm9hcmRVcGRhdGVzID0gKGVuZW15Qm9hcmRBcnIsIHBsYXllckJvYXJkQXJyKSA9PiB7XHJcbiAgICByZW5kZXJFbmVteUJvYXJkKGVuZW15Qm9hcmRBcnIpO1xyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmRBcnIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhwbGF5ZXJDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZGlzcGxheUJvYXJkKHBsYXllckJvYXJkQXJyLCAncGxheWVyJyk7XHJcblxyXG4gICAgY29uc3QgcGxheWVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJywgJ3BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9ICdQbGF5ZXIgYm9hcmQnO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLnRleHRDb250ZW50ID0gJ1ggU2hpcHMgcmVtYWluaW5nJztcclxuXHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckhlYWRpbmcpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyRW5lbXlCb2FyZCA9IChlbmVteUJvYXJkQXJyKSA9PiB7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhlbmVteUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZEFyciwgJ2VuZW15JywgaGFuZGxlQXR0YWNrQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGVuZW15SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbmVteUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAnZW5lbXknKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1NoaXBDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci50ZXh0Q29udGVudCA9ICdYIFNoaXBzIHJlbWFpbmluZyc7XHJcblxyXG4gICAgZW5lbXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VuZW15IGJvYXJkJztcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlIZWFkaW5nKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ0VuZW15JykgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgR0FNRS5wbGF5ZXJBdHRhY2soY29vcmRzKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVmljdG9yeVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGF5LWFnYWluLWJ0bicpO1xyXG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xyXG4gICAgY29uc3QgcmV0dXJuVG9NZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JldHVybi1tZW51LWJ0bicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBtZW51JztcclxuICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXlBZ2Fpbik7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXR1cm5Ub01lbnUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlmICh3aW5uZXIgPT09ICdQbGF5ZXInKSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSB3aW4hYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYENvbmdyYXR1bGF0aW9ucyEgV2FudCB0byBwbGF5IGFub3RoZXIgcm91bmQ/YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSBsb3NlYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYEJldHRlciBsdWNrIG5leHQgdGltZS4gV2FudCB0byB0cnkgYWdhaW4/YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBibHVyRWxlbWVudChib2FyZHNDb250YWluZXIpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmV0dXJuVG9NZW51QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7ICAgIFxyXG59XHJcblxyXG5jb25zdCByZW1vdmVNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1tb2RhbCcpO1xyXG4gICAgbW9kYWwucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVJldHVyblRvTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9keSk7XHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgR0FNRS5wbGF5QWdhaW4oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgICAgXHJcbiAgICBkaXNwbGF5TmFtZU1lbnUsXHJcbiAgICByZW5kZXJPdXRlckNvbnRhaW5lcixcclxuICAgIHJlbmRlck1haW5NZW51LFxyXG4gICAgZGlzcGxheVNoaXBQbGFjZW1lbnQsXHJcbiAgICByZW5kZXJCb2FyZFVwZGF0ZXMsXHJcbiAgICByZW5kZXJFbmVteUJvYXJkLFxyXG4gICAgcmVuZGVyR2FtZUxheW91dCxcclxuICAgIHJlbmRlclBsYXllckJvYXJkLFxyXG4gICAgcmVuZGVyVHVyblRyYWNrZXIsXHJcbiAgICByZW5kZXJWaWN0b3J5U2NyZWVuXHJcbn0iLCJpbXBvcnQgKiBhcyBQbGF5ZXIgZnJvbSAnLi4vZmFjdG9yaWVzL3BsYXllcic7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4uL2ZhY3Rvcmllcy9zaGlwJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgY29udmVydENvb3JkVG9JZCB9IGZyb20gXCIuL3V0aWxpdHkvcGFyc2VDb29yZHNcIjtcclxuXHJcbmxldCBwbGF5ZXI7XHJcbmxldCBjb21wdXRlcjtcclxubGV0IHR1cm4gPSAnUGxheWVyJztcclxubGV0IHJlc3VsdFN0cmluZztcclxuXHJcbmNvbnN0IHJlc2V0UGxheWVyT2JqcyA9ICgpID0+IHtcclxuICAgIHBsYXllciA9IFBsYXllci5QbGF5ZXIoKTtcclxuICAgIGNvbXB1dGVyID0gUGxheWVyLkNvbXB1dGVyKCk7XHJcbiAgICBjb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkoKTsgICAgXHJcbn1cclxuXHJcbi8vIE1haW4gbWVudSAtIHN0YXJ0IGdhbWUgYnRuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJPdXRlckNvbnRhaW5lcigpO1xyXG4gICAgRE9NLnJlbmRlck1haW5NZW51KCk7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxufVxyXG5cclxuLy8gUFJFLUdBTUUgLSB0YWtlIHBsYXllciBuYW1lLCBzaGlwIHBsYWNlbWVudFxyXG5jb25zdCBzdGFydFByZUdhbWUgPSAoKSA9PiB7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuY29uc3QgYXV0b1NoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XHJcbiAgICByZXNldFBsYXllck9ianMoKTsgICAgXHJcbiAgICBwbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuLy8gT25jZSBzaGlwcyBwbGFjZWQsIHN0YXJ0IGdhbWUgLSByZW5kZXIgcGxheWVyIGFuZCBlbmVteSBib2FyZHMgJiBhZGQgcGxheWVyIG5hbWUgdG8gc2NyZWVuXHJcbmNvbnN0IHN0YXJ0R2FtZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBET00ucmVuZGVyR2FtZUxheW91dCgpO1xyXG4gICAgRE9NLnJlbmRlclBsYXllckJvYXJkKHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgRE9NLnJlbmRlckVuZW15Qm9hcmQoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxufVxyXG5cclxuLy8gLSBhdHRhY2sgZW5lbXkgYm9hcmQgKGdldCBhbm90aGVyIHR1cm4gaWYgaGl0KSwgdG8gYmUgcHV0IG9uIGNsaWNrIGV2ZW50IHRhcmdldHRpbmcgY29vcmRzXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgIC8vIHJldHVybnMgcmVzdWx0cyBvZiBhdHRhY2sgb24gZW5lbXkgYm9hcmQgd2l0aCBpbnB1dCBjb29yZHMgLSB4LCBtLCBzLCBnYW1lIG92ZXJcclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29vcmRzLCBjb21wdXRlci5nZXRCb2FyZE9iaigpKTtcclxuXHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgY29uc3QgYm9hcmRWYWwgPSBjb21wdXRlci5nZXRCb2FyZE9iaigpLmdldEFycmF5KClbcm93XVtjb2xdO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzIHdpdGggYXR0YWNrIHJlc3VsdHNcclxuICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuXHJcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnR2FtZSBPdmVyJykge1xyXG4gICAgICAgIGRlY2xhcmVXaW5uZXIoJ1BsYXllcicpOyAvLyB2aWN0b3J5L2RlZmVhdCBzY3JlZW5cclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnbWlzcycpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgPSBgJHtjb252ZXJ0Q29vcmRUb0lkKGNvb3Jkcyl9IHdhcyBhICR7YXR0YWNrUmVzdWx0fWA7XHJcbiAgICAgICAgdHVybiA9ICdFbmVteSc7XHJcbiAgICAgICAgZW5lbXlBdHRhY2soKTtcclxuICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnaGl0Jykge1xyXG4gICAgICAgIHJlc3VsdFN0cmluZyA9IGAke2NvbnZlcnRDb29yZFRvSWQoY29vcmRzKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9ISBUYWtlIGFub3RoZXIgc2hvdGA7XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGNvbXB1dGVyLmdldFNoaXBMaXN0KCkubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGlwVHlwZSA9IGNvbXB1dGVyLmdldFNoaXBMaXN0KClbaV07XHJcbiAgICAgICAgICAgIC8vIGJvYXJkdmFsIGluY2x1ZGVzIHNoaXAgY2xhc3MgaWRcclxuICAgICAgICAgICAgaWYgKGJvYXJkVmFsLmluY2x1ZGVzKFNoaXAoc2hpcFR5cGUpLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYFlvdSAke2F0dGFja1Jlc3VsdH0gdGhlaXIgJHtzaGlwVHlwZX0hIFRha2UgYW5vdGhlciBzaG90YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxufVxyXG5cclxuLy8gLSByZWNlaXZlIGVuZW15IGF0dGFjayBcclxuY29uc3QgZW5lbXlBdHRhY2sgPSAoYXR0YWNrUmVzdWx0KSA9PiB7IFxyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnR2FtZSBPdmVyJykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlY2xhcmVXaW5uZXIoJ0NvbXB1dGVyJyk7IC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdtaXNzJykge1xyXG4gICAgICAgICAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBDb21wdXRlcidzIHNob3Qgb24gJHtjb252ZXJ0Q29vcmRUb0lkKGNvbXB1dGVyLmdldENvb3JkcygpKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9YDtcclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYENvbXB1dGVyJ3Mgc2hvdCBvbiAke2NvbnZlcnRDb29yZFRvSWQoY29tcHV0ZXIuZ2V0Q29vcmRzKCkpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7XHJcbiAgICAgICAgLy8gICAgIHJlc3VsdFN0cmluZyA9IGBTaGlwIGhhcyBiZWVuICR7YXR0YWNrUmVzdWx0fSFgO1xyXG4gICAgICAgIC8vICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgYXR0YWNrIC0gcmFuZG9tIGF0dGFjayByZXR1cm5zIGF0dGFja1Jlc3VsdFxyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnNtYXJ0QXR0YWNrKHBsYXllci5nZXRCb2FyZE9iaigpKSk7XHJcblxyXG4gICAgICAgIC8vIE5COiBnZXRDb29yZHMgZnVuY3Rpb24gd2lsbCBvbmx5IHdvcmsgYWZ0ZXIgcmFuZG9tQXR0YWNrIGlzIGNhbGxlZFxyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb21wdXRlci5nZXRDb29yZHMoKTtcclxuICAgICAgICBjb25zdCBib2FyZFZhbCA9IHBsYXllci5nZXRCb2FyZE9iaigpLmdldEFycmF5KClbcm93XVtjb2xdO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykgeyAvLyBOb3QgY3VycmVudGx5IHdvcmtpbmdcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHBsYXllci5nZXRTaGlwTGlzdCgpLmxlbmd0aCA+IGk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBUeXBlID0gcGxheWVyLmdldFNoaXBMaXN0KClbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBib2FyZHZhbCBpbmNsdWRlcyBzaGlwIGNsYXNzIGlkXHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRWYWwuaW5jbHVkZXMoU2hpcChzaGlwVHlwZSkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYFlvdXIgJHtzaGlwVHlwZX0gaGFzIGJlZW4gJHthdHRhY2tSZXN1bHR9IWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzXHJcbiAgICAgICAgRE9NLnJlbmRlckJvYXJkVXBkYXRlcyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCksIHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xyXG4gICAgfSwgNzAwKTtcclxufVxyXG5cclxuY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiB0dXJuO1xyXG59XHJcblxyXG5jb25zdCBnZXRSZXN1bHQgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVzdWx0U3RyaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgPSAnRmlyZSB3aGVuIHJlYWR5ISc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG59XHJcblxyXG4vLyBWaWN0b3J5IHNjcmVlbiAvIHJlc3RhcnQgYnRuXHJcbmNvbnN0IGRlY2xhcmVXaW5uZXIgPSAod2lubmVyKSA9PiB7XHJcbiAgICBET00ucmVuZGVyVmljdG9yeVNjcmVlbih3aW5uZXIpO1xyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZXN1bHRTdHJpbmcgPSAnRmlyZSB3aGVuIHJlYWR5ISc7XHJcbiAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxuICAgIHN0YXJ0UHJlR2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnQsXHJcbiAgICBnZXRSZXN1bHQsXHJcbiAgICBnZXRUdXJuLFxyXG4gICAgcGxheUFnYWluLFxyXG4gICAgcGxheWVyQXR0YWNrLFxyXG4gICAgcmVzZXRQbGF5ZXJPYmpzLFxyXG4gICAgc3RhcnRQcmVHYW1lLFxyXG4gICAgc3RhcnRHYW1lLFxyXG4gICAgc3RhcnRHYW1lUGxheVxyXG59XHJcblxyXG4vLyBUTyBETzogXHJcbi8vIC0gRml4IGVuZW15IGF0dGFjayBzdW5rIG1lc3NhZ2VcclxuLy8gRmlsbCBpbiBYIHNoaXBzIHJlbWFpbmluZ1xyXG4vLyBmaXggc21hcnQgYXR0YWNrIGxpbmVhciB0YXJnZXRzIGxvZ2ljIC0gMiBoaXRzIG5leHQgdG8gZWFjaCBvdGhlciBhcmVudCBuZWNlc3NhcmlseSB0aGUgc2FtZSBzaGlwIiwiY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgcGxheWVyTmFtZSA9ICdBZG1pcmFsIG9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0TmFtZSB9OyIsIi8vIHRha2VzIGlucHV0IHNxdWFyZSBpZCBzdHJpbmcgLSByZXR1cm5zIGJvYXJkIGFycmF5IGluZGVjZXMgZS5nLiAnMTBBJyA9IFs5LDBdXHJcbmZ1bmN0aW9uIHBhcnNlQ29vcmRzKHNxdWFyZUlkKSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuXHJcbiAgICBpZiAoc3F1YXJlSWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgLy8gZmlyc3QgY2hhcmFjdGVyIChyb3cgbnVtKSBvbiBzcXIgaWQgd2lsbCBiZSArMSBhaGVhZCBvZiBhcnJheSBpbmRleFxyXG4gICAgICAgIHJvdyA9IHBhcnNlSW50KHNxdWFyZUlkLmNoYXJBdCgwKSkgLTE7XHJcbiAgICAgICAgLy8gc2Vjb25kIGNoYXJhY3RlciAoY29sIGxldHRlcikgd2lsbCBiZSB0cmFuc2xhdGVkIGZyb20gQS1KIHRvIDAtOVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMSkgLSA2NTtcclxuICAgIH0gZWxzZSB7IC8vIHNxciBpZCBzdHJpbmcgaXMgMyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgY29uc3QgZmlyc3RUd29DaGFycyA9IHNxdWFyZUlkLnNsaWNlKDAsMik7XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoZmlyc3RUd29DaGFycykgLSAxO1xyXG4gICAgICAgIC8vIHRoaXJkIGNoYXJhY3RlciBjb252ZXJ0IHRvIG51bVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMikgLSA2NTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG59XHJcblxyXG4vLyB0YWtlIGFycmF5IGlucHV0IG51bXMgYW5kIGNvbnZlcnQgaXQgdG8gc3F1YXJlIGlkIHN0cmluZyAtIFs5LDBdID0gJzEwQSdcclxuZnVuY3Rpb24gY29udmVydENvb3JkVG9JZChhcnJheUl0ZW0pIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBhcnJheUl0ZW07XHJcbiAgICBsZXQgbmV3Um93ID0gcm93ICsgMTtcclxuICAgIGxldCBuZXdDb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcclxuICAgIGxldCBzdHJpbmdJZCA9IGAke25ld1Jvd30ke25ld0NvbH1gOyAgICBcclxuICAgIHJldHVybiBzdHJpbmdJZDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhcnNlQ29vcmRzLFxyXG4gICAgY29udmVydENvb3JkVG9JZFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgR0FNRSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbkdBTUUuc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9