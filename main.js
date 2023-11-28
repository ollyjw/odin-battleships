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
    let randomCoords;

    function randomAttack(enemyBoard) {
        randomCoords = proto.genRandomCoords();
        const attackedCoord = proto.attack(randomCoords, enemyBoard);
        return attackedCoord;
    }

    function getCoords() {
        return randomCoords;
    }

    return {
        getCoords,
        ...proto,
        randomAttack,
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
            //console.log(coord);
            if (boardObj.areWithinBoard(coord)) {
                let idString = (0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__.convertCoordToId)(coord);
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
        enemyAttack(computer.randomAttack(player.getBoardObj()));

        // NB: getCoords function will only work after randomAttack is called
        console.log(computer.getCoords());
        const [row, col] = computer.getCoords();
        const boardVal = player.getBoardObj().getArray()[row][col];

        console.log(boardVal);
            
        if (attackResult === 'sunk') { // Not currently working
            for (let i = 0; player.getShipList().length > i; i++) {
                let shipType = player.getShipList()[i];
                // if boardval includes ship class id
                if (boardVal.includes((0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipType).id)) {
                    resultString = `Your ${shipType} has been ${attackResult}!`;
                    console.log(resultString);
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
    resetPlayerObjs();
    startPreGame();
}



// TO DO: 
// - Fix enemy attack sunk message
// - smart attack - once enemy gets a hit it fires at surrounding coords 
// Fill in X ships remaining

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFk7QUFDdUM7QUFDMUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q2pDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQXNCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTyxFQUFFLE9BQU87QUFDdEM7QUFDQTtBQUNBOzs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2pCO0FBQ3RCO0FBQ0Esb0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvZ2V0TmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvcGFyc2VDb29yZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLmNvbnRhaW5lcixcclxuLmJvYXJkcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDMwcHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpIDAuNWZyOyAgICBcclxuICAgIGdhcDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcclxufVxyXG5cclxuLnNxdWFyZTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcclxufVxyXG5cclxuLmxlZ2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxyXG59XHJcblxyXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMjg2cHg7XHJcbn1cclxuXHJcblxyXG4uc2hpcC1wbGFjZW1lbnQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmFsaWQtc2hpcC1wbGFjZW1lbnQgeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyMSwgMjI0LCAwLjgxNSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXNoaXAtcGxhY2VtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkpO1xyXG59XHJcblxyXG4uc2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uaGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zdW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZhNmE7XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XHJcbn1cclxuXHJcbi5idG4geyAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgICBcclxufVxyXG5cclxuLmJ0bi1ncm91cCAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4uc3RhcnQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTUzYmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wbGFjZS1zaGlwcy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG5cclxuLnJlc2V0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljZDE0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJvYXJkLXRpdGxlLnBsYXllciB7XHJcbiAgICBjb2xvcjogIzIzZDMyMztcclxufVxyXG5cclxuLmJvYXJkLXRpdGxlLmVuZW15IHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4uc2hpcC1jb3VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udHVybi10cmFja2VyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50dXJudHJhY2tlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnJldHVybi1tZW51LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xyXG59XHJcbi5yZXR1cm4tbWVudS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxufVxyXG5cclxuLnBsYXktYWdhaW4tYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJjMGQ7XHJcbn1cclxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDhkMGQ7XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJsdXIge1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA2M3B4KSB7XHJcbiAgICAuZ2FtZWJvYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCA2MHB4KTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNjBweCkgMC41ZnI7ICAgIFxyXG4gICAgICAgIGdhcDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc3F1YXJlIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfSAgICBcclxuICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5idG4tZ3JvdXAgLmJ0biB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZDQUE2QztJQUM3QywwQ0FBMEM7SUFDMUMsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0MsMENBQTBDO1FBQzFDLFFBQVE7UUFDUixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIsXFxyXFxuLmJvYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgICAgXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCAzMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpIDAuNWZyOyAgICBcXHJcXG4gICAgZ2FwOiAzcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XFxyXFxufVxcclxcblxcclxcbi5sZWdlbmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICBwYWRkaW5nOiA0NXB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmFzay1uYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjg2cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLXNoaXAtcGxhY2VtZW50IHsgICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyMSwgMjI0LCAwLjgxNSk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkLXNoaXAtcGxhY2VtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHsgICAgXFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyb3VwIC5idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwYTUzYmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYWNlLXNoaXBzLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJjMGQ7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljZDE0O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGU6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IC0xMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcXHJcXG4gICAgY29sb3I6ICMyM2QzMjM7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZS5lbmVteSB7XFxyXFxuICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb3VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4tdHJhY2tlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udHVybnRyYWNrZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1jb250YWluZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogYXV0bztcXHJcXG4gICAgcmlnaHQ6IGF1dG87XFxyXFxuICAgIGJvdHRvbTogYXV0bztcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDAwMzQ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLW1vZGFsIGgyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnJldHVybi1tZW51LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XFxyXFxufVxcclxcbi5yZXR1cm4tbWVudS1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMwYTUzYmU7XFxyXFxufVxcclxcblxcclxcbi5wbGF5LWFnYWluLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJjMGQ7XFxyXFxufVxcclxcbi5wbGF5LWFnYWluLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDhkMGQ7XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYmx1ciB7XFxyXFxuICAgIGZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA2M3B4KSB7XFxyXFxuICAgIC5nYW1lYm9hcmQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCA2MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXFxyXFxuICAgICAgICBnYXA6IDNweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNxdWFyZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB9ICAgIFxcclxcbiAgICAuYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuYnRuLWdyb3VwIC5idG4ge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uIERPTkVcclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxyXG4vLyBTSElQUyBTSE9VTEQgTk9UIEJFIEFCTEUgVE8gT1ZFUkxBUFxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNoaXBUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApO1xyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZSBzaGlwJ3MgaWQgaW50byB0aGUgYm9hcmQgYXJyYXkgYmV0d2VlbiBpbnB1dCBjb29yZHNcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcykgeyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBjb29yZHMgYmV0d2VlbiBzdGFydCBjb29yZCAmIGVuZCBjb29yZFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBhbW91bnQgb2YgY29vcmRzIGJldHdlZW4gdGhlIDIgZ2l2ZW4gaW5wdXRzXHJcbiAgICAgICAgY29uc3QgY29vcmRzQW1vdW50ID0gYWxsQ29vcmRzLmxlbmd0aDtcclxuICAgICAgICAvLyBHZXQgc2hpcExlbmd0aCAmIGlkIHByb3BzIGZyb20gU2hpcCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIC8vIHB1c2ggc2hpcGxlbmd0aCBvZiBlYWNoIHNoaXAgaW50byBuZXcgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoQXJyYXkgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGhBcnJheS5wdXNoKHNoaXBbdHlwZXNbaV1dLnNoaXBMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2hpcExlbmd0aEFycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGNvb3JkcyBiZXR3ZWVuLCAmIGluY2x1ZGluZywgdHdvIGlucHV0IGNvb3JkcyBlZy4gWzAsMF0sIFswLDNdXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIC8vIGZvcm1hdHMgZWFjaCBpbnB1dCBpbnRvIGFycmF5IHdpdGggMiBpdGVtcyAmIGFzc2lnbnMgdmFyIG5hbWVzIHRvIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIGVuZCBjb29yZCBmcm9tIHN0YXJ0IGNvb3JkICsgc2hpcGxlbmd0aCAmIGRpcmVjdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0RW5kQ29vcmQgKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdztcclxuICAgICAgICBsZXQgZW5kQ29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgLy8gdmVydGljYWwgZ29lcyBkb3dud2FyZHMgaW4gYXJyYXkgaW5kZXggKHVwd2FyZHMgaW4gRE9NKSwgaG9yaXpvbnRhbCBnb2VzIHJpZ2h0d2FyZHNcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGVuZFJvdyArPSBzaGlwTGVuZ3RoIC0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGVuZENvbCArPSBzaGlwTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtlbmRSb3csIGVuZENvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZXMgcGFpciBvZiBjb29yZHMsIGRldGVybWluZXMgd2hldGhlciB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHNlbmRzIGhpdCBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwIG9yIHJlY29yZHMgY29vcmRzIG9mIG1pc3NlZCBzaG90XHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgLy8gU3RvcmUgdmFsdWUgb2YgdGhlIGdpdmVuIGJvYXJkIGFycmF5IGluZGVjZXNcclxuICAgICAgICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmRBcnJbcm93XVtjb2xdO1xyXG4gICAgICAgIC8vIGNvb3JkcyBjb250YWluIGEgc2hpcCBpZiBib2FyZFZhbHVlIGlzIGEgbnVtYmVyLi4uXHJcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpblNoaXAgPSB0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ251bWJlcic7XHJcblxyXG4gICAgICAgIGlmIChjb29yZHNDb250YWluU2hpcCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHRoYXQgc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFt0eXBlc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcE9iai5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgUyB0byByZXByZXNlbnQgU3VuayB0byBlbnRpcmUgc2hpcCBjb29yZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFyci5mb3JFYWNoKChyb3csIHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJbcl1bY10udG9TdHJpbmcoKS5pbmNsdWRlcyhpZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyXVtjXSA9IGAke2lkfVNgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGFuIFggdG8gdmFsdWUgdG8gcmVwcmVzZW50IGEgaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSArPSAnWCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7IC8vIEdhbWUgb3ZlciBoYXMgdG8gcmV0dXJuIGJlZm9yZSBmaW5hbCBzaGlwIHN1bmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkgcmV0dXJuICdzdW5rJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBib2FyZCB2YWx1ZSB0byBNIGZvciBhIG1pc3NcclxuICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gJ00nO1xyXG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRoZSBldmVyeSgpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgdGVzdHMgd2hldGhlciBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBJdCByZXR1cm5zIGEgQm9vbGVhbiB2YWx1ZS5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzQXJyLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuXHJcbiAgICAvLyBhcmUgY29vcmRzIGVtcHR5LCB3aXRoaW4gYm9hcmRcclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzaGlwIGNhbiBwbGFjZSBiZXR3ZWVuIHR3byBnaXZlbiBjb29yZHNcclxuICAgIGZ1bmN0aW9uIGNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzLmV2ZXJ5KChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXJlV2l0aGluQm9hcmQoY29vcmQpICYmIGFyZUVtcHR5KGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgIGZ1bmN0aW9uIGFyZVdpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKHJvdyA+PSAxMCB8fCByb3cgPCAwIHx8IGNvbCA+PSAxMCB8fCBjb2wgPCAgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgZW1wdHlcclxuICAgIGZ1bmN0aW9uIGFyZUVtcHR5KGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgICAgIGFyZVdpdGhpbkJvYXJkLFxyXG4gICAgICAgIGNhblBsYWNlU2hpcEJldHdlZW4sXHJcbiAgICAgICAgY3JlYXRlQm9hcmRBcnJheSxcclxuICAgICAgICBjcmVhdGVTaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgZ2V0QWxsQ29vcmRzLFxyXG4gICAgICAgIGdldEFsbE51bXNCZXR3ZWVuLFxyXG4gICAgICAgIGdldEFycmF5LFxyXG4gICAgICAgIGdldEVuZENvb3JkLFxyXG4gICAgICAgIGdldFNoaXBUeXBlcyxcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjaywgICAgICAgIFxyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG4vLyBQbGF5ZXJzIGNhbiB0YWtlIHR1cm5zIHBsYXlpbmcgdGhlIGdhbWUgYnkgYXR0YWNraW5nIHRoZSBlbmVteSBHYW1lYm9hcmQuXHJcbi8vIFRoZSBnYW1lIGlzIHBsYXllZCBhZ2FpbnN0IHRoZSBjb21wdXRlciwgc28gbWFrZSB0aGUg4oCYY29tcHV0ZXLigJkgY2FwYWJsZSBvZiBtYWtpbmcgcmFuZG9tIHBsYXlzLiBUaGUgQUkgZG9lcyBub3QgaGF2ZSB0byBiZSBzbWFydCwgYnV0IGl0IHNob3VsZCBrbm93IHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gbW92ZSBpcyBsZWdhbCAoaS5lLiBpdCBzaG91bGRu4oCZdCBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlKS5cclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aEFycmF5ID0gZ2V0U2hpcExlbmd0aEFycmF5KCk7ICAgXHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IGdldFNoaXBMaXN0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmRPYmooKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnc3VibWFyaW5lJywgJ2NydWlzZXInLCAncGF0cm9sQm9hdCddXHJcbiAgICBmdW5jdGlvbiBnZXRTaGlwTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuZ2V0U2hpcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWzUsIDQsIDMsIDMsIDJdIFxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5jcmVhdGVTaGlwTGVuZ3RoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRzLCBlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwZWF0UGxheSA9IGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGlmIChyZXBlYXRQbGF5KSByZXR1cm4gJ3JlcGVhdCc7XHJcblxyXG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRzIGhhdmUgYmVlbiB0YXJnZXR0ZWQgYWxyZWFkeVxyXG4gICAgZnVuY3Rpb24gaXNSZXBlYXRQbGF5KGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgYm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkQXJyW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09ICcnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgMiByYW5kb20gbnVtYmVycyBiZXR3ZWVuIDAtOSBhbmQgcmV0dXJuIGluIGFycmF5XHJcbiAgICBmdW5jdGlvbiBnZW5SYW5kb21Db29yZHMoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjdXJzaXZlIHNoaXAgcGxhY2VtZW50IC0gcG9wIG5ldyBzaGlwdHlwZSAmIHNoaXBsZW5ndGggdW50aWwgYWxsIHNoaXBzIHBsYWNlZFxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcExpc3QucG9wKCk7XHJcbiAgICAgICAgaWYgKHNoaXBUeXBlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zLCBkaXJlY3Rpb24sIGVuZFBvcywgdmFsaWRTaGlwUGxhY2VtZW50O1xyXG5cclxuICAgICAgICAvLyB3aGlsZSB0aGVyZXMgbm8gdmFsaWQgc2hpcCBwbGFjZW1lbnQgYXNzaWduIHZhbHVlcyB0byB2YXJzIGZvciB1c2UgaW4gZnVuY3Rpb25zIHVudGlsIHNoaXBUeXBlICYgc2hpcExlbmd0aCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhcnRQb3MgPSBnZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGJvYXJkLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmQuY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjayxcclxuICAgICAgICBnZW5SYW5kb21Db29yZHMsXHJcbiAgICAgICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgICAgICBnZXRCb2FyZE9iaiwgICAgICAgIFxyXG4gICAgICAgIGdldFNoaXBMaXN0LFxyXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgICAgICBzaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgc2hpcExpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFBsYXllciBmYWN0b3J5XHJcbmNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSBQbGF5ZXIoKTtcclxuICAgIGxldCByYW5kb21Db29yZHM7XHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpIHtcclxuICAgICAgICByYW5kb21Db29yZHMgPSBwcm90by5nZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICBjb25zdCBhdHRhY2tlZENvb3JkID0gcHJvdG8uYXR0YWNrKHJhbmRvbUNvb3JkcywgZW5lbXlCb2FyZCk7XHJcbiAgICAgICAgcmV0dXJuIGF0dGFja2VkQ29vcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xyXG4gICAgICAgIHJldHVybiByYW5kb21Db29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDb29yZHMsXHJcbiAgICAgICAgLi4ucHJvdG8sXHJcbiAgICAgICAgcmFuZG9tQXR0YWNrLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07IiwiLy8gbGVuZ3RoID0gbnVtYmVyXHJcbi8vIGhpdHMgPSBudW1iZXIgb3IgYXJyYXkgb2YgYm9vbGVhbiB2YWx1ZXMgcmVwcmVzZW50aW5nIGVhY2ggc2hpcCBwYXJ0P1xyXG4vLyBpc1N1bmsgPSBlaXRoZXIgY2hlY2sgaWYgZGFtYWdlID49IGxlbmd0aCBPUiBjaGVjayBpZiBldmVyeSBhcnJheSBlbGVtZW50IGlzIHRydWVcclxuXHJcbi8vIFwiUkVNRU1CRVIgeW91IG9ubHkgaGF2ZSB0byB0ZXN0IHlvdXIgb2JqZWN04oCZcyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5IG1ldGhvZHMgb3IgcHJvcGVydGllcyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgeW91ciDigJhzaGlw4oCZIG9iamVjdCBuZWVkIHVuaXQgdGVzdHMuXCJcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcFR5cGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0ge1xyXG4gICAgICAgIGNhcnJpZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNSxcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWFyaW5lOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3J1aXNlcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMixcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaGl0c0Ftb3VudCA9IDA7XHJcbiAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwQ2xhc3Nlc1tzaGlwVHlwZV07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZIHRvIHlvdXIgc2hpcC5cclxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdHNBbW91bnQrKztcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB3aGV0aGVyIGhhcyBzdW5rIGJhc2VkIG9uIHNoaXAncyBsZW5ndGggYW5kIHRoZSBudW1iZXIgb2Yg4oCYaGl0c+KAmS5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzQW1vdW50ID49IHNoaXBMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBDbGFzc2VzLFxyXG4gICAgICAgIHNoaXBMZW5ndGgsXHJcbiAgICAgICAgaGl0LFxyXG4gICAgICAgIGhpdHNBbW91bnQsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgaXNTdW5rLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29yZHMsIGNvbnZlcnRDb29yZFRvSWQgfSBmcm9tIFwiLi91dGlsaXR5L3BhcnNlQ29vcmRzXCI7XHJcbmltcG9ydCB7IGdldE5hbWUgfSBmcm9tIFwiLi91dGlsaXR5L2dldE5hbWVcIjtcclxuXHJcbmNvbnN0IHJlbmRlck91dGVyQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcclxuICAgIGNvbnN0IHN0YXJ0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0QnRuLmlkID0gXCJzdGFydFwiO1xyXG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7ICAgIFxyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7ICAgIFxyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChzdGFydEJ0bkNvbnRhaW5lcik7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ0bik7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOYW1lTWVudSk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbn1cclxuXHJcbmNvbnN0IGJsdXJFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xyXG59XHJcblxyXG5jb25zdCByZW1vdmVCbHVyID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TmFtZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhcmQnKTtcclxuICAgIGNvbnN0IGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fzay1uYW1lLWNvbnRhaW5lcicpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoYXNrTmFtZUNvbnRhaW5lcik7XHJcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCBvbmUgbmFtZTogYFxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgYXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xyXG4gICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICBnZXROYW1lKCk7XHJcbiAgICAgICAgICAgIEdBTUUuc3RhcnRQcmVHYW1lKCk7XHJcbiAgICAgICAgICAgIGhpZGVFbGVtZW50KG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8vIFJlbW92ZSBjaGlsZCBlbHMgZnJvbSBhIHBhcmVudCBlbCAmIHJldHVybnMgcmVtb3ZlZCBub2RlIC0gZS5nLiBvdXRlcmNvbnRhaW5lclxyXG5jb25zdCBjbGVhckNoaWxkRWxlbWVudHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U2hpcFBsYWNlbWVudCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkT2JqID0gcGxheWVyLmdldEJvYXJkT2JqKCk7XHJcbiAgICBjb25zdCBib2FyZEFyciA9IHBsYXllci5nZXRCb2FyZEFycmF5KCk7ICAgIFxyXG5cclxuICAgIC8vIC0gcG9wIHJlbW92ZXMgJiByZXR1cm5zIGxhc3QgZWxlbWVudCBvZiBhcnJheSAtIG9uY2UgdGhlIGFycmF5IGlzIGVtcHR5IGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBwbGF5ZXIuc2hpcExpc3QucG9wKCk7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGxheWVyLnNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgYSBzcXVhcmUgdG8gcGxhY2Ugc2hpcFxyXG4gICAgY29uc3QgcGxhY2VTaGlwQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNxdWFyZSBpZCBzdHJpbmdcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIC8vIG1ha2UgdGhlIGxlZ2VuZCAmIHRoZSBnYXBzIGJldHdlZW4gc3F1YXJlcyBub24gY2xpY2thYmxlKVxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBjb29yZHMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7XHJcbiAgICAgICAgLy8gZW5kIHBvcyBjb29yZCBjYWxjZCBmcm9tIHN0YXJ0IHBvc1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTsgLy9lLmcgJ2JhdHRsZXNoaXAnLCBbMCwwXSwgWzQsMF1cclxuICAgICAgICAgICAgLy8gcmVjdXJzaXZlIC0gcG9wIGEgbmV3IHNoaXAgdHlwZSBpbnRvIHBsYWNlU2hpcCBmdW5jdGlvbiB1bnRpbCBldmVyeSBzaGlwIGlzIHBsYWNlZFxyXG4gICAgICAgICAgICBkaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3VzZSBlbnRlciBldmVudCBoYW5kbGVyXHJcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNoaXBNb3VzZUVudGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXlIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgbGVhdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3dpdGNoIHNoaXAgb3JpZW50YXRpb24gZHVyaW5nIHBsYWNlbWVudCB0byBwdXQgb24gcmlnaHQgY2xpY2tcclxuICAgIGNvbnN0IHJvdGF0ZURpcmVjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gcHJldmVudCByaWdodCBjbGljayBtZW51IGFwcGVhcmluZ1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgeyAvL2UuZy4gaWYgbGVnZW5kXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFySG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgICAgIGRpc3BsYXlIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGhvdmVyIGVmZmVjdCB0byBkaXYgc3F1YXJlIGlkIFxyXG4gICAgY29uc3QgZGlzcGxheUhvdmVyRWZmZWN0ID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7IC8vIGVnLiAxMEEgPSAnWzksMF0nXHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gYm9hcmRPYmouZ2V0RW5kQ29vcmQoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCk7IC8vZWcuIFs5LDBdLCAndmVydGljYWwnLCAyID0gWzEwLDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gYm9hcmRPYmouZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNvb3JkKTtcclxuICAgICAgICAgICAgaWYgKGJvYXJkT2JqLmFyZVdpdGhpbkJvYXJkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkU3RyaW5nID0gY29udmVydENvb3JkVG9JZChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGBpZCBzdHJpbmcgaXM6ICR7aWRTdHJpbmd9LCBjb29yZCBpcyAke2Nvb3JkfWApOyAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGhvdmVyIGVmZmVjdHMgKGVnIG9uIG1vdXNlbGVhdmUpXHJcbiAgICBjb25zdCBjbGVhckhvdmVyRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XHJcbiAgICAgICAgYWxsU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydEdhbWVwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHNoaXBzIGFyZW50IGFsbCBwbGFjZWQsIGRvbid0IHN0YXJ0XHJcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdBTUUuc3RhcnRHYW1lUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0U2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgIEdBTUUucmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcclxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXJ0R2FtZXBsYXkpO1xyXG5cclxuICAgIGNvbnN0IGF1dG9TaGlwUGxhY2VtZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncGxhY2Utc2hpcHMtYnRuJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi50ZXh0Q29udGVudCA9ICdBdXRvIHBsYWNlJztcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR0FNRS5hdXRvU2hpcFBsYWNlbWVudCk7XHJcblxyXG4gICAgY29uc3QgcmVzZXRTaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXRTaGlwc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVzZXQtYnRuJyk7XHJcbiAgICByZXNldFNoaXBzQnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IFNoaXBzJztcclxuICAgIHJlc2V0U2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXNldFNoaXBzKTtcclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgIHJlbW92ZUJsdXIoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2FyZHNDb250YWluZXIpOyBcclxuXHJcbiAgICBsZXQgZ2FtZWJvYXJkO1xyXG5cclxuICAgIC8vIGlmIHNoaXBsZW5ndGggY29udGFpbnMgYSBudW1iZXIgLyBpc250IHVuZGVmaW5lZC4gaS5lLiBpZiBzaGlwcyBzdGlsbCBuZWVkcyB0byBiZSBwbGFjZWQgYWRkIGNsaWNrIGV2ZW50XHJcbiAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnLCBwbGFjZVNoaXBDbGljayk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJvdGF0ZURpcmVjdGlvbik7XHJcbiAgICB9IGVsc2UgeyAvL3JlbmRlciBib2FyZCB3aXRob3V0IGV2ZW50c1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJyk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zO1xyXG5cclxuICAgIGlmIChzaGlwTGVuZ3RoKSB7IC8vIGlmIGNvbnRhaW5zIGEgbnVtXHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYFBsYWNlIHRoZSAke3NoaXBUeXBlfSwgJHtnZXROYW1lKCl9LiBSaWdodCBjbGljayB0byByb3RhdGUuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYENsaWNrIG9uIHN0YXJ0IGdhbWUgdG8gYmVnaW4hYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7ICAgXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zUGFyYSk7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG5cclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGF1dG9TaGlwUGxhY2VtZW50QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJlc2V0U2hpcHNCdG4pOyAgICBcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XHJcbn1cclxuXHJcbi8vIG1vZGUgd2lsbCBiZSBjYWxsZWQgYXMncHJlLWdhbWUnIG9yICdwbGF5ZXInLydlbmVteScgc3RyaW5nc1xyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsIG1vZGUsIGNsaWNrQ2IpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7bW9kZX1gLCAnZ2FtZWJvYXJkJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGJvYXJkQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIFJPVyBpLmUgbnVtc1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGJvYXJkQXJyW2ldO1xyXG4gICAgICAgIGxldCByb3dDb29yZCA9IGkgKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7IC8vIENPTFxyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkgeyAvLyBST1cgTEVHRU5EXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwicm93XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHJvd0xlZ2VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29sQ29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaik7IC8vIGNvbnZlcnQgdG8gbGV0dGVycztcclxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGAke3Jvd0Nvb3JkfSR7Y29sQ29vcmR9YDtcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3ByZS1nYW1lJyB8fCBtb2RlID09PSAncGxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEFycltpXVtqXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiOilcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdYJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IFwiWFwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1MnKSkge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzdW5rXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW2ldW2pdID09PSAnTScpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIENPTCBMRUdFTkRcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGJvYXJkQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sTGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjb2xMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcImNvbFwiKTtcclxuICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY0ICsgaSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChjb2xMZWdlbmQpO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlmIChjbGlja0NiKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tDYik7ICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIGdhbWVib2FyZDtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVHVyblRyYWNrZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50dXJuLXRyYWNrZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0dXJuVHJhY2tlci5jbGFzc0xpc3QuYWRkKCd0dXJudHJhY2tlcicpOyBcclxuICAgIGNvbnN0IGNvbW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb21tZW50Qm94LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYm94Jyk7XHJcblxyXG4gICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFR1cm4oKX0ncyB0dXJuYDtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICB0dXJuVHJhY2tlci50ZXh0Q29udGVudCA9IGAke2dldE5hbWUoKX0ncyB0dXJuYDtcclxuICAgIH0gXHJcblxyXG4gICAgY29tbWVudEJveC50ZXh0Q29udGVudCA9IGAke0dBTUUuZ2V0UmVzdWx0KCl9YDtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Q29udGFpbmVyKTtcclxuICAgIGNvbW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudEJveCk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckdhbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW5lbXktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R1cm4tdHJhY2tlci1jb250YWluZXInKTsgICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7ICAgIFxyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Q29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQm9hcmRVcGRhdGVzID0gKGVuZW15Qm9hcmRBcnIsIHBsYXllckJvYXJkQXJyKSA9PiB7XHJcbiAgICByZW5kZXJFbmVteUJvYXJkKGVuZW15Qm9hcmRBcnIpO1xyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmRBcnIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhwbGF5ZXJDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZGlzcGxheUJvYXJkKHBsYXllckJvYXJkQXJyLCAncGxheWVyJyk7XHJcblxyXG4gICAgY29uc3QgcGxheWVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJywgJ3BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9ICdQbGF5ZXIgYm9hcmQnO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLnRleHRDb250ZW50ID0gJ1ggU2hpcHMgcmVtYWluaW5nJztcclxuXHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckhlYWRpbmcpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyRW5lbXlCb2FyZCA9IChlbmVteUJvYXJkQXJyKSA9PiB7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhlbmVteUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZEFyciwgJ2VuZW15JywgaGFuZGxlQXR0YWNrQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGVuZW15SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbmVteUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAnZW5lbXknKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1NoaXBDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci50ZXh0Q29udGVudCA9ICdYIFNoaXBzIHJlbWFpbmluZyc7XHJcblxyXG4gICAgZW5lbXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VuZW15IGJvYXJkJztcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlIZWFkaW5nKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ0VuZW15JykgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgR0FNRS5wbGF5ZXJBdHRhY2soY29vcmRzKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVmljdG9yeVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGF5LWFnYWluLWJ0bicpO1xyXG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xyXG4gICAgY29uc3QgcmV0dXJuVG9NZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JldHVybi1tZW51LWJ0bicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBtZW51JztcclxuICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXlBZ2Fpbik7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXR1cm5Ub01lbnUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlmICh3aW5uZXIgPT09ICdQbGF5ZXInKSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSB3aW4hYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYENvbmdyYXR1bGF0aW9ucyEgV2FudCB0byBwbGF5IGFub3RoZXIgcm91bmQ/YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSBsb3NlYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYEJldHRlciBsdWNrIG5leHQgdGltZS4gV2FudCB0byB0cnkgYWdhaW4/YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBibHVyRWxlbWVudChib2FyZHNDb250YWluZXIpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmV0dXJuVG9NZW51QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7ICAgIFxyXG59XHJcblxyXG5jb25zdCByZW1vdmVNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1tb2RhbCcpO1xyXG4gICAgbW9kYWwucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVJldHVyblRvTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9keSk7XHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgR0FNRS5wbGF5QWdhaW4oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgICAgXHJcbiAgICBkaXNwbGF5TmFtZU1lbnUsXHJcbiAgICByZW5kZXJPdXRlckNvbnRhaW5lcixcclxuICAgIHJlbmRlck1haW5NZW51LFxyXG4gICAgZGlzcGxheVNoaXBQbGFjZW1lbnQsXHJcbiAgICByZW5kZXJCb2FyZFVwZGF0ZXMsXHJcbiAgICByZW5kZXJFbmVteUJvYXJkLFxyXG4gICAgcmVuZGVyR2FtZUxheW91dCxcclxuICAgIHJlbmRlclBsYXllckJvYXJkLFxyXG4gICAgcmVuZGVyVHVyblRyYWNrZXIsXHJcbiAgICByZW5kZXJWaWN0b3J5U2NyZWVuXHJcbn0iLCJpbXBvcnQgKiBhcyBQbGF5ZXIgZnJvbSAnLi4vZmFjdG9yaWVzL3BsYXllcic7XHJcbmltcG9ydCBTaGlwIGZyb20gJy4uL2ZhY3Rvcmllcy9zaGlwJztcclxuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcclxuaW1wb3J0IHsgY29udmVydENvb3JkVG9JZCB9IGZyb20gXCIuL3V0aWxpdHkvcGFyc2VDb29yZHNcIjtcclxuXHJcbmxldCBwbGF5ZXI7XHJcbmxldCBjb21wdXRlcjtcclxubGV0IHR1cm4gPSAnUGxheWVyJztcclxubGV0IHJlc3VsdFN0cmluZztcclxuXHJcbmNvbnN0IHJlc2V0UGxheWVyT2JqcyA9ICgpID0+IHtcclxuICAgIHBsYXllciA9IFBsYXllci5QbGF5ZXIoKTtcclxuICAgIGNvbXB1dGVyID0gUGxheWVyLkNvbXB1dGVyKCk7XHJcbiAgICBjb21wdXRlci5wbGFjZVNoaXBzUmFuZG9tbHkoKTsgICAgXHJcbn1cclxuXHJcbi8vIE1haW4gbWVudSAtIHN0YXJ0IGdhbWUgYnRuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJPdXRlckNvbnRhaW5lcigpO1xyXG4gICAgRE9NLnJlbmRlck1haW5NZW51KCk7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxufVxyXG5cclxuLy8gUFJFLUdBTUUgLSB0YWtlIHBsYXllciBuYW1lLCBzaGlwIHBsYWNlbWVudFxyXG5jb25zdCBzdGFydFByZUdhbWUgPSAoKSA9PiB7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuY29uc3QgYXV0b1NoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XHJcbiAgICByZXNldFBsYXllck9ianMoKTsgICAgXHJcbiAgICBwbGF5ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICBET00uZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxufVxyXG5cclxuLy8gT25jZSBzaGlwcyBwbGFjZWQsIHN0YXJ0IGdhbWUgLSByZW5kZXIgcGxheWVyIGFuZCBlbmVteSBib2FyZHMgJiBhZGQgcGxheWVyIG5hbWUgdG8gc2NyZWVuXHJcbmNvbnN0IHN0YXJ0R2FtZVBsYXkgPSAoKSA9PiB7XHJcbiAgICBET00ucmVuZGVyR2FtZUxheW91dCgpO1xyXG4gICAgRE9NLnJlbmRlclBsYXllckJvYXJkKHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgRE9NLnJlbmRlckVuZW15Qm9hcmQoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxufVxyXG5cclxuLy8gLSBhdHRhY2sgZW5lbXkgYm9hcmQgKGdldCBhbm90aGVyIHR1cm4gaWYgaGl0KSwgdG8gYmUgcHV0IG9uIGNsaWNrIGV2ZW50IHRhcmdldHRpbmcgY29vcmRzXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgIC8vIHJldHVybnMgcmVzdWx0cyBvZiBhdHRhY2sgb24gZW5lbXkgYm9hcmQgd2l0aCBpbnB1dCBjb29yZHMgLSB4LCBtLCBzLCBnYW1lIG92ZXJcclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29vcmRzLCBjb21wdXRlci5nZXRCb2FyZE9iaigpKTtcclxuXHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgY29uc3QgYm9hcmRWYWwgPSBjb21wdXRlci5nZXRCb2FyZE9iaigpLmdldEFycmF5KClbcm93XVtjb2xdO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzIHdpdGggYXR0YWNrIHJlc3VsdHNcclxuICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuXHJcbiAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnR2FtZSBPdmVyJykge1xyXG4gICAgICAgIGRlY2xhcmVXaW5uZXIoJ1BsYXllcicpOyAvLyB2aWN0b3J5L2RlZmVhdCBzY3JlZW5cclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnbWlzcycpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgPSBgJHtjb252ZXJ0Q29vcmRUb0lkKGNvb3Jkcyl9IHdhcyBhICR7YXR0YWNrUmVzdWx0fWA7XHJcbiAgICAgICAgdHVybiA9ICdFbmVteSc7XHJcbiAgICAgICAgZW5lbXlBdHRhY2soKTtcclxuICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnaGl0Jykge1xyXG4gICAgICAgIHJlc3VsdFN0cmluZyA9IGAke2NvbnZlcnRDb29yZFRvSWQoY29vcmRzKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9ISBUYWtlIGFub3RoZXIgc2hvdGA7XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGNvbXB1dGVyLmdldFNoaXBMaXN0KCkubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzaGlwVHlwZSA9IGNvbXB1dGVyLmdldFNoaXBMaXN0KClbaV07XHJcbiAgICAgICAgICAgIC8vIGJvYXJkdmFsIGluY2x1ZGVzIHNoaXAgY2xhc3MgaWRcclxuICAgICAgICAgICAgaWYgKGJvYXJkVmFsLmluY2x1ZGVzKFNoaXAoc2hpcFR5cGUpLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYFlvdSAke2F0dGFja1Jlc3VsdH0gdGhlaXIgJHtzaGlwVHlwZX0hIFRha2UgYW5vdGhlciBzaG90YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxufVxyXG5cclxuLy8gLSByZWNlaXZlIGVuZW15IGF0dGFjayBcclxuY29uc3QgZW5lbXlBdHRhY2sgPSAoYXR0YWNrUmVzdWx0KSA9PiB7IFxyXG4gICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnR2FtZSBPdmVyJykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlY2xhcmVXaW5uZXIoJ0NvbXB1dGVyJyk7IC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdtaXNzJykge1xyXG4gICAgICAgICAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBDb21wdXRlcidzIHNob3Qgb24gJHtjb252ZXJ0Q29vcmRUb0lkKGNvbXB1dGVyLmdldENvb3JkcygpKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9YDtcclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYENvbXB1dGVyJ3Mgc2hvdCBvbiAke2NvbnZlcnRDb29yZFRvSWQoY29tcHV0ZXIuZ2V0Q29vcmRzKCkpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7XHJcbiAgICAgICAgLy8gICAgIHJlc3VsdFN0cmluZyA9IGBTaGlwIGhhcyBiZWVuICR7YXR0YWNrUmVzdWx0fSFgO1xyXG4gICAgICAgIC8vICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgYXR0YWNrIC0gcmFuZG9tIGF0dGFjayByZXR1cm5zIGF0dGFja1Jlc3VsdFxyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIuZ2V0Qm9hcmRPYmooKSkpO1xyXG5cclxuICAgICAgICAvLyBOQjogZ2V0Q29vcmRzIGZ1bmN0aW9uIHdpbGwgb25seSB3b3JrIGFmdGVyIHJhbmRvbUF0dGFjayBpcyBjYWxsZWRcclxuICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5nZXRDb29yZHMoKSk7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvbXB1dGVyLmdldENvb3JkcygpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsID0gcGxheWVyLmdldEJvYXJkT2JqKCkuZ2V0QXJyYXkoKVtyb3ddW2NvbF07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvYXJkVmFsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7IC8vIE5vdCBjdXJyZW50bHkgd29ya2luZ1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgcGxheWVyLmdldFNoaXBMaXN0KCkubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hpcFR5cGUgPSBwbGF5ZXIuZ2V0U2hpcExpc3QoKVtpXTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGJvYXJkdmFsIGluY2x1ZGVzIHNoaXAgY2xhc3MgaWRcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbC5pbmNsdWRlcyhTaGlwKHNoaXBUeXBlKS5pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgPSBgWW91ciAke3NoaXBUeXBlfSBoYXMgYmVlbiAke2F0dGFja1Jlc3VsdH0hYDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyB1cGRhdGUgRE9NIGJvYXJkc1xyXG4gICAgICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH0sIDcwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdHVybjtcclxufVxyXG5cclxuY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdFN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gJ0ZpcmUgd2hlbiByZWFkeSEnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFN0cmluZztcclxufVxyXG5cclxuLy8gVmljdG9yeSBzY3JlZW4gLyByZXN0YXJ0IGJ0blxyXG5jb25zdCBkZWNsYXJlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gICAgRE9NLnJlbmRlclZpY3RvcnlTY3JlZW4od2lubmVyKTtcclxufVxyXG5cclxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xyXG4gICAgcmVzdWx0U3RyaW5nID0gJ0ZpcmUgd2hlbiByZWFkeSEnO1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICBzdGFydFByZUdhbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50LFxyXG4gICAgZ2V0UmVzdWx0LFxyXG4gICAgZ2V0VHVybixcclxuICAgIHBsYXlBZ2FpbixcclxuICAgIHBsYXllckF0dGFjayxcclxuICAgIHJlc2V0UGxheWVyT2JqcyxcclxuICAgIHN0YXJ0UHJlR2FtZSxcclxuICAgIHN0YXJ0R2FtZSxcclxuICAgIHN0YXJ0R2FtZVBsYXlcclxufVxyXG5cclxuLy8gVE8gRE86IFxyXG4vLyAtIEZpeCBlbmVteSBhdHRhY2sgc3VuayBtZXNzYWdlXHJcbi8vIC0gc21hcnQgYXR0YWNrIC0gb25jZSBlbmVteSBnZXRzIGEgaGl0IGl0IGZpcmVzIGF0IHN1cnJvdW5kaW5nIGNvb3JkcyBcclxuLy8gRmlsbCBpbiBYIHNoaXBzIHJlbWFpbmluZyIsImNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGxheWVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0JykudmFsdWU7XHJcbiAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHBsYXllck5hbWUgPSAnQWRtaXJhbCBvbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBsYXllck5hbWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldE5hbWUgfTsiLCIvLyB0YWtlcyBpbnB1dCBzcXVhcmUgaWQgc3RyaW5nIC0gcmV0dXJucyBib2FyZCBhcnJheSBpbmRlY2VzIGUuZy4gJzEwQScgPSBbOSwwXVxyXG5mdW5jdGlvbiBwYXJzZUNvb3JkcyhzcXVhcmVJZCkge1xyXG4gICAgbGV0IHJvdztcclxuICAgIGxldCBjb2w7XHJcblxyXG4gICAgaWYgKHNxdWFyZUlkLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIC8vIGZpcnN0IGNoYXJhY3RlciAocm93IG51bSkgb24gc3FyIGlkIHdpbGwgYmUgKzEgYWhlYWQgb2YgYXJyYXkgaW5kZXhcclxuICAgICAgICByb3cgPSBwYXJzZUludChzcXVhcmVJZC5jaGFyQXQoMCkpIC0xO1xyXG4gICAgICAgIC8vIHNlY29uZCBjaGFyYWN0ZXIgKGNvbCBsZXR0ZXIpIHdpbGwgYmUgdHJhbnNsYXRlZCBmcm9tIEEtSiB0byAwLTlcclxuICAgICAgICBjb2wgPSBzcXVhcmVJZC5jaGFyQ29kZUF0KDEpIC0gNjU7XHJcbiAgICB9IGVsc2UgeyAvLyBzcXIgaWQgc3RyaW5nIGlzIDMgY2hhcmFjdGVyc1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VHdvQ2hhcnMgPSBzcXVhcmVJZC5zbGljZSgwLDIpO1xyXG4gICAgICAgIHJvdyA9IHBhcnNlSW50KGZpcnN0VHdvQ2hhcnMpIC0gMTtcclxuICAgICAgICAvLyB0aGlyZCBjaGFyYWN0ZXIgY29udmVydCB0byBudW1cclxuICAgICAgICBjb2wgPSBzcXVhcmVJZC5jaGFyQ29kZUF0KDIpIC0gNjU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3JvdywgY29sXTtcclxufVxyXG5cclxuLy8gdGFrZSBhcnJheSBpbnB1dCBudW1zIGFuZCBjb252ZXJ0IGl0IHRvIHNxdWFyZSBpZCBzdHJpbmcgLSBbOSwwXSA9ICcxMEEnXHJcbmZ1bmN0aW9uIGNvbnZlcnRDb29yZFRvSWQoYXJyYXlJdGVtKSB7XHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gYXJyYXlJdGVtO1xyXG4gICAgbGV0IG5ld1JvdyA9IHJvdyArIDE7XHJcbiAgICBsZXQgbmV3Q29sID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNvbCk7XHJcbiAgICBsZXQgc3RyaW5nSWQgPSBgJHtuZXdSb3d9JHtuZXdDb2x9YDsgICAgXHJcbiAgICByZXR1cm4gc3RyaW5nSWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBwYXJzZUNvb3JkcyxcclxuICAgIGNvbnZlcnRDb29yZFRvSWRcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIEdBTUUgZnJvbSAnLi9tb2R1bGVzL2dhbWUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcblxyXG5HQU1FLnN0YXJ0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==