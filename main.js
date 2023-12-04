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
    
    // on hit add the coord to array, on sunk clear arrays
    function handleAttackResults(attackResult, coords) {
        if (attackResult === 'hit') hitCoords.push(coords);
        if (attackResult === 'sunk') {
            clearArrVals(hitCoords);
            clearArrVals(adjacentTargets);
            clearArrVals(linearTargets);
        }
    }

    // TO FIX: when 2 separate ships are hit & no valid linear targets are around them we get a 'coords is not iterable' error. need to switch back to using adjacent targets/ other axis?
    function smartAttack(enemyBoard) {
        // if no valid targets attack random coord
        if (hitCoords.length === 0 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            return randomAttack(enemyBoard);
        }

        // if attack result is a hit, get the adjacent coords in x & y axis & add to new arr
        if (hitCoords.length === 1 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            const previousHit = hitCoords[0];
            const nextPossibleTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
            nextPossibleTargets.forEach((target) => adjacentTargets.push(target));
        }

        //if there are 2 hits, fire along same axis
        if (hitCoords.length > 1) {
            clearArrVals(adjacentTargets);

            const startPos = hitCoords[0];
            const endPos = hitCoords[hitCoords.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);
            nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));            
        }

        let nextTarget;

        if (adjacentTargets.length > 0) {
            nextTarget = adjacentTargets.pop();
        } else {
            nextTarget = linearTargets.pop();
        }

        // returns hit sunk or miss strings
        const attackResult = proto.attack(nextTarget, enemyBoard);
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
                    // console.log(resultString);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUss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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1VZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEWTtBQUN1QztBQUMxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlE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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0M7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLE9BQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixPQUFPLEVBQUUsT0FBTztBQUN0QztBQUNBO0FBQ0E7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDakI7QUFDdEI7QUFDQSxvREFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvdXRpbGl0eS9nZXROYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvdXRpbGl0eS9wYXJzZUNvb3Jkcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xyXG59XHJcblxyXG4uY29udGFpbmVyLFxyXG4uYm9hcmRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxyXG4gICAgZ2FwOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG4uc3F1YXJlIHtcclxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xyXG59XHJcblxyXG4uc3F1YXJlOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgcGFkZGluZzogNDVweDsgICAgXHJcbn1cclxuXHJcbi5hc2stbmFtZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHdpZHRoOiAyODZweDtcclxufVxyXG5cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxufVxyXG5cclxuLmJ0biB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIFxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuXHJcbi5zdGFydC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLXNoaXBzLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcclxuICAgIGNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zaGlwLWNvdW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnR1cm50cmFja2VyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG59XHJcblxyXG4uY29tbWVudC1jb250YWluZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIGJvdHRvbTogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAwMDM0NDtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmV0dXJuLW1lbnUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xyXG59XHJcblxyXG4ucGxheS1hZ2Fpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcclxufVxyXG5cclxuLmQtbm9uZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmx1ciB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDYzcHgpIHtcclxuICAgIC5nYW1lYm9hcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXHJcbiAgICAgICAgZ2FwOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5zcXVhcmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9ICAgIFxyXG4gICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cCAuYnRuIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDZDQUE2QztRQUM3QywwQ0FBMEM7UUFDMUMsUUFBUTtRQUNSLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lcixcXHJcXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDMwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7XFxyXFxuICAgIC8qIHBhZGRpbmc6IDIwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmY2I7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmU6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyODZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VtZW50LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtc2hpcC1wbGFjZW1lbnQgeyAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YTZhO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxufVxcclxcblxcclxcbi5idG4geyAgICBcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Utc2hpcHMtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZS5wbGF5ZXIge1xcclxcbiAgICBjb2xvcjogIzIzZDMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlLmVuZW15IHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvdW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udHVybi10cmFja2VyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50dXJudHJhY2tlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDYzcHgpIHtcXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcXHJcXG4gICAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3F1YXJlIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH0gICAgXFxyXFxuICAgIC5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBmdW5jdGlvbi4gRE9ORVxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXHJcbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHJlcG9ydCB3aGV0aGVyIG9yIG5vdCBhbGwgb2YgdGhlaXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmsuXHJcbi8vIFNISVBTIFNIT1VMRCBOT1QgQkUgQUJMRSBUTyBPVkVSTEFQXHJcblxyXG5jb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQm9hcmRBcnJheSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHsgXHJcbiAgICAgICAgICAgIC8vIGdlbiAxMCByb3cgYXJyYXlzXHJcbiAgICAgICAgICAgIGJvYXJkW3Jvd10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBnZW4gMTAgY29scyAoYWRkIDEwIGVtcHR5IHN0cmluZ3MpIGluc2lkZSBlYWNoIHJvdyBhcnJheVxyXG4gICAgICAgICAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBhY2Nlc3MgY29vcmRzIGJ5IFtyb3dJbmRleF1bY29sSW5kZXhdIGllLiBbMF1bMF0gfHwgWzldWzddXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJvYXJkQXJyID0gY3JlYXRlQm9hcmRBcnJheSgpO1xyXG4gICAgY29uc3Qgc2hpcHNBcnIgPSBbXTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcCA9IHtcclxuICAgICAgICBjYXJyaWVyOiBTaGlwKCdjYXJyaWVyJyksXHJcbiAgICAgICAgYmF0dGxlc2hpcDogU2hpcCgnYmF0dGxlc2hpcCcpLFxyXG4gICAgICAgIHN1Ym1hcmluZTogU2hpcCgnc3VibWFyaW5lJyksXHJcbiAgICAgICAgY3J1aXNlcjogU2hpcCgnY3J1aXNlcicpLFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IFNoaXAoJ3BhdHJvbEJvYXQnKSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdHlwZXMgPSBPYmplY3Qua2V5cyhzaGlwKTsgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCBldGNdXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcFR5cGVzKCkge1xyXG4gICAgICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHBsYWNlIHNoaXAncyBpZCBpbnRvIHRoZSBib2FyZCBhcnJheSBiZXR3ZWVuIGlucHV0IGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKSB7IC8vZS5nICdiYXR0bGVzaGlwJywgWzAsMF0sIFs0LDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU3RvcmUgYWxsIGNvb3JkcyBiZXR3ZWVuIHN0YXJ0IGNvb3JkICYgZW5kIGNvb3JkXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGFtb3VudCBvZiBjb29yZHMgYmV0d2VlbiB0aGUgMiBnaXZlbiBpbnB1dHNcclxuICAgICAgICBjb25zdCBjb29yZHNBbW91bnQgPSBhbGxDb29yZHMubGVuZ3RoO1xyXG4gICAgICAgIC8vIEdldCBzaGlwTGVuZ3RoICYgaWQgcHJvcHMgZnJvbSBTaGlwIGZhY3RvcnlcclxuICAgICAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNoaXBUeXBlID09PSB0eXBlc1tpXSAmJiBzaGlwTGVuZ3RoID09PSBjb29yZHNBbW91bnQpIHtcclxuICAgICAgICAgICAgICAgIC8vIHB1c2ggc2hpcCBvYmogdG8gc2hpcHMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBzaGlwW3NoaXBUeXBlXTtcclxuICAgICAgICAgICAgICAgIHNoaXBzQXJyLnB1c2goc2hpcE9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgaWQgdG8gZWFjaCBjb29yZCAoYm9hcmQgYXJyYXkgaW5kZWNlcylcclxuICAgICAgICAgICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZDtcclxuICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gPSBpZDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICBcclxuICAgIH1cclxuICAgICAgIFxyXG4gICAgLy8gcHVzaCBzaGlwbGVuZ3RoIG9mIGVhY2ggc2hpcCBpbnRvIG5ldyBhcnJheVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyB0eXBlcy5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aEFycmF5LnB1c2goc2hpcFt0eXBlc1tpXV0uc2hpcExlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBzaGlwTGVuZ3RoQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBhbGwgY29vcmRzIGJldHdlZW4sICYgaW5jbHVkaW5nLCB0d28gaW5wdXQgY29vcmRzIGVnLiBbMCwwXSwgWzAsM11cclxuICAgIGZ1bmN0aW9uIGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgLy8gZm9ybWF0cyBlYWNoIGlucHV0IGludG8gYXJyYXkgd2l0aCAyIGl0ZW1zICYgYXNzaWducyB2YXIgbmFtZXMgdG8gaXRlbXNcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGNvbnN0IFtlbmRSb3csIGVuZENvbF0gPSBlbmRQb3M7XHJcbiAgICAgICAgbGV0IGFsbENvb3JkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpZiBzaGlwIGlzIHBsYWNlZCB2ZXJ0aWNhbGx5IChzYW1lIGNvbCB2YWx1ZXMpXHJcbiAgICAgICAgaWYgKHN0YXJ0Q29sID09PSBlbmRDb2wpIHtcclxuICAgICAgICAgICAgLy8gZ2V0IGFsbCByb3cgdmFsdWVzIGJldHdlZW4gc3RhcnQgJiBlbmQgY29vcmRzXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbFJvd051bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydFJvdywgZW5kUm93KTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBhcnJheSBmcm9tIGFsbCByb3cgdmFsdWVzIHRoYXQgcmV0dXJucyByb3cgdmFsdWUgKyBpbnB1dCBjb2wgYW5kIHN0b3JlIGluIGFsbCBjb29yZHMgYXJyYXlcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsUm93TnVtcy5tYXAoKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtyb3csIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlmIHNoaXAgcGxhY2VkIGhvcml6b250YWxseSAoc2FtZSByb3cgdmFscylcclxuICAgICAgICAgICAgY29uc3QgYWxsQ29sTnVtcyA9IGdldEFsbE51bXNCZXR3ZWVuKHN0YXJ0Q29sLCBlbmRDb2wpO1xyXG4gICAgICAgICAgICBhbGxDb29yZHMgPSBhbGxDb2xOdW1zLm1hcCgoY29sKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW3N0YXJ0Um93LCBjb2xdO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhcnJheSBvZiBudW1zIGJldHdlZW4gMiBpbnB1dCBudW1zXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxOdW1zQmV0d2Vlbih4LCB5KSB7XHJcbiAgICAgICAgY29uc3QgbnVtcyA9IFtdO1xyXG4gICAgICAgIGxldCBoaWdoLCBsb3c7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIHdoaWNoIG51bSBpcyBoaWdoZXIgb3IgbG93ZXJcclxuICAgICAgICBpZiAoeCA+IHkpIHtcclxuICAgICAgICAgICAgaGlnaCA9IHg7XHJcbiAgICAgICAgICAgIGxvdyA9IHk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaGlnaCA9IHk7XHJcbiAgICAgICAgICAgIGxvdyA9IHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHB1c2ggbnVtcyBmcm9tIGxvdyB0byBoaWdoIHRvIG51bXMgYXJyYXlcclxuICAgICAgICBmb3IgKGxldCBpID0gbG93OyBpIDw9IGhpZ2g7IGkrKykge1xyXG4gICAgICAgICAgICBudW1zLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudW1zO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZpbmQgZW5kIGNvb3JkIGZyb20gc3RhcnQgY29vcmQgKyBzaGlwbGVuZ3RoICYgZGlyZWN0aW9uXHJcbiAgICBmdW5jdGlvbiBnZXRFbmRDb29yZCAoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IFtzdGFydFJvdywgc3RhcnRDb2xdID0gc3RhcnRQb3M7XHJcbiAgICAgICAgbGV0IGVuZFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgIGxldCBlbmRDb2wgPSBzdGFydENvbDtcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBnb2VzIGRvd253YXJkcyBpbiBhcnJheSBpbmRleCAodXB3YXJkcyBpbiBET00pLCBob3Jpem9udGFsIGdvZXMgcmlnaHR3YXJkc1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZW5kUm93ICs9IHNoaXBMZW5ndGggLSAxOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgICAgICAgZW5kQ29sICs9IHNoaXBMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW2VuZFJvdywgZW5kQ29sXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlcyBwYWlyIG9mIGNvb3JkcywgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgc2VuZHMgaGl0IGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAgb3IgcmVjb3JkcyBjb29yZHMgb2YgbWlzc2VkIHNob3RcclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICAvLyBTdG9yZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gYm9hcmQgYXJyYXkgaW5kZWNlc1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgLy8gY29vcmRzIGNvbnRhaW4gYSBzaGlwIGlmIGJvYXJkVmFsdWUgaXMgYSBudW1iZXIuLi5cclxuICAgICAgICBjb25zdCBjb29yZHNDb250YWluU2hpcCA9IHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJztcclxuXHJcbiAgICAgICAgaWYgKGNvb3Jkc0NvbnRhaW5TaGlwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyB0eXBlcy5sZW5ndGggPiBpOyBpKyspIHsgXHJcbiAgICAgICAgICAgICAgICAvLyBncmFiIGlkIGZyb20gc2hpcCBwcm9wc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gc2hpcFt0eXBlc1tpXV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGJvYXJkIHZhbCBpcyBlcXVhbCB0byBpZCBvZiBzaGlwIG9ialxyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VuZCBoaXQgZnVuY3Rpb24gdG8gdGhhdCBzaGlwIG9ialxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBzaGlwW3R5cGVzW2ldXTtcclxuICAgICAgICAgICAgICAgICAgICBzaGlwT2JqLmhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBTIHRvIHJlcHJlc2VudCBTdW5rIHRvIGVudGlyZSBzaGlwIGNvb3Jkc1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHJvdywgcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib2FyZEFycltyXVtjXS50b1N0cmluZygpLmluY2x1ZGVzKGlkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3JdW2NdID0gYCR7aWR9U2A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgYW4gWCB0byB2YWx1ZSB0byByZXByZXNlbnQgYSBoaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdICs9ICdYJztcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsU2hpcHNTdW5rKCkpIHJldHVybiAnR2FtZSBPdmVyJzsgLy8gR2FtZSBvdmVyIGhhcyB0byByZXR1cm4gYmVmb3JlIGZpbmFsIHNoaXAgc3Vua1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSByZXR1cm4gJ3N1bmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnaGl0JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGJvYXJkIHZhbHVlIHRvIE0gZm9yIGEgbWlzc1xyXG4gICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gPSAnTSc7XHJcbiAgICAgICAgICAgIHJldHVybiAnbWlzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gVGhlIGV2ZXJ5KCkgbWV0aG9kIG9mIEFycmF5IGluc3RhbmNlcyB0ZXN0cyB3aGV0aGVyIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIEl0IHJldHVybnMgYSBCb29sZWFuIHZhbHVlLlxyXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4gc2hpcHNBcnIuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xyXG5cclxuICAgIC8vIGFyZSBjb29yZHMgZW1wdHksIHdpdGhpbiBib2FyZFxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmIHNoaXAgY2FuIHBsYWNlIGJldHdlZW4gdHdvIGdpdmVuIGNvb3Jkc1xyXG4gICAgZnVuY3Rpb24gY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIHJldHVybiBhbGxDb29yZHMuZXZlcnkoKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkgJiYgYXJlQ29vcmRzRW1wdHkoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRzIGFyZSB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICBpZiAocm93ID49IDEwIHx8IHJvdyA8IDAgfHwgY29sID49IDEwIHx8IGNvbCA8ICAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgY29vcmRzIGFyZSBlbXB0eVxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzRW1wdHkoY29vcmRzKSB7XHJcbiAgICAgICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgICAgICBpZiAoYm9hcmRBcnJbcm93XVtjb2xdID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc1VucGxheWVkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycgfHwgdHlwZW9mIGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBjb29yZHMgYm90aCBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzIHJldHVybiB0cnVlXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNFbXB0eVdpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmRzKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghYXJlQ29vcmRzRW1wdHkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNNaXNzKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJ00nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmRBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGFrZSBhIGNvb3JkIGFuZCBnZXQgYWxsIGVtcHR5IGNvb3JkcyB3aXRoaW4gYm9hcmQgdGhhdCBhcmUgYWJvdmUsIGJlbG93LCBsZWZ0ICYgcmlnaHQgb2YgY29vcmRcclxuICAgIGZ1bmN0aW9uIGdldEFsbFZhbGlkQWRqYWNlbnRDb29yZHMoY29vcmRzLCBib2FyZE9iaikge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF09IGNvb3JkcztcclxuICAgICAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3cgKyAxLCBjb2xdKTtcclxuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3JvdyAtIDEsIGNvbF0pO1xyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93LCBjb2wgKyAxXSk7XHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3csIGNvbCAtIDFdKTtcclxuXHJcbiAgICAgICAgLy8gVGhlIGZpbHRlcigpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgY3JlYXRlcyBhIHNoYWxsb3cgY29weSBvZiBhIHBvcnRpb24gb2YgYSBnaXZlbiBhcnJheSwgZmlsdGVyZWQgZG93biB0byBqdXN0IHRoZSBlbGVtZW50cyBmcm9tIHRoZSBnaXZlbiBhcnJheSB0aGF0IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxyXG4gICAgICAgIC8vIGZpbHRlciBvdXQgY29vcmRzIHRoYXQgYXJlIGVtcHR5IG9yIG91dHNpZGUgYm9hcmRcclxuICAgICAgICBjb25zdCB2YWxpZE1vdmVzID0gcG9zc2libGVNb3Zlcy5maWx0ZXIoY29vcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIWJvYXJkT2JqID8gYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZChjb29yZCk6IGJvYXJkT2JqLmFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQoY29vcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0YWtlIDIgY29vcmRzIGFuZCByZXR1cm4gYWxsIHZhbGlkIGNvb3JkcyBhbG9uZyBzYW1lIGF4aXMgXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKSB7XHJcbiAgICAgICAgY29uc3QgbGluZWFyVGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IFtzdGFydFJvdywgc3RhcnRDb2xdID0gc3RhcnRQb3M7XHJcbiAgICAgICAgY29uc3QgW2VuZFJvdywgZW5kQ29sXSA9IGVuZFBvcztcclxuICAgICAgICBsZXQgY29vcmQ7XHJcblxyXG4gICAgICAgIGlmIChlbmRSb3cgPT09IHN0YXJ0Um93KSB7IC8vc2FtZSByb3dcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb2wgPSBzdGFydENvbDtcclxuICAgICAgICAgICAgLy8gTG9vcCBpbiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgZGlyZWN0aW9uIGFsb25nIHJvd3MsIGFkZCBlbXB0eSBjb29yZHMgdG8gdGFyZ2V0cyBhcnJheSBhbmQgYnJlYWsgb3V0IGlmIGNvb3JkcyBhcmUgb3V0c2lkZSBib2FyZCBib3VuZGFyaWVzIG9yIGEgbWlzc2VkIHNob3RcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gW3N0YXJ0Um93LCBjdXJyZW50Q29sKytdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkpIGJyZWFrOyAvLyBicmVhayBzdGF0ZW1lbnQgdGVybWluYXRlcyBjdXJyZW50IGxvb3BcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50Q29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtzdGFydFJvdywgY3VycmVudENvbC0tXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7IC8vIHNhbWUgY29sdW1uXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um93ID0gc3RhcnRSb3c7XHJcbiAgICAgICAgICAgIC8vIExvb3AgaW4gcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyBjb2x1bW5zXHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtjdXJyZW50Um93KyssIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50Um93ID0gc3RhcnRSb3c7XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtjdXJyZW50Um93LS0sIHN0YXJ0Q29sXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGlmIChhcmVDb29yZHNNaXNzKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzVW5wbGF5ZWQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZWFyVGFyZ2V0cy5wdXNoKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGluZWFyVGFyZ2V0cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBhbGxTaGlwc1N1bmssXHJcbiAgICAgICAgYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZCxcclxuICAgICAgICBhcmVDb29yZHNXaXRoaW5Cb2FyZCxcclxuICAgICAgICBjYW5QbGFjZVNoaXBCZXR3ZWVuLFxyXG4gICAgICAgIGNyZWF0ZUJvYXJkQXJyYXksXHJcbiAgICAgICAgY3JlYXRlU2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIGdldEFsbENvb3JkcyxcclxuICAgICAgICBnZXRBbGxOdW1zQmV0d2VlbixcclxuICAgICAgICBnZXRBcnJheSxcclxuICAgICAgICBnZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzLFxyXG4gICAgICAgIGdldEFsbFZhbGlkTGluZWFyQ29vcmRzLFxyXG4gICAgICAgIGdldEVuZENvb3JkLFxyXG4gICAgICAgIGdldFNoaXBUeXBlcyxcclxuICAgICAgICBwbGFjZVNoaXAsXHJcbiAgICAgICAgcmVjZWl2ZUF0dGFjaywgICAgICAgIFxyXG4gICAgICAgIHR5cGVzLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG4vLyBQbGF5ZXJzIGNhbiB0YWtlIHR1cm5zIHBsYXlpbmcgdGhlIGdhbWUgYnkgYXR0YWNraW5nIHRoZSBlbmVteSBHYW1lYm9hcmQuXHJcbi8vIFRoZSBnYW1lIGlzIHBsYXllZCBhZ2FpbnN0IHRoZSBjb21wdXRlciwgc28gbWFrZSB0aGUg4oCYY29tcHV0ZXLigJkgY2FwYWJsZSBvZiBtYWtpbmcgcmFuZG9tIHBsYXlzLiBUaGUgQUkgZG9lcyBub3QgaGF2ZSB0byBiZSBzbWFydCwgYnV0IGl0IHNob3VsZCBrbm93IHdoZXRoZXIgb3Igbm90IGEgZ2l2ZW4gbW92ZSBpcyBsZWdhbCAoaS5lLiBpdCBzaG91bGRu4oCZdCBzaG9vdCB0aGUgc2FtZSBjb29yZGluYXRlIHR3aWNlKS5cclxuXHJcbmNvbnN0IFBsYXllciA9ICgpID0+IHtcclxuICAgIGxldCBib2FyZCA9IEdhbWVib2FyZCgpO1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aEFycmF5ID0gZ2V0U2hpcExlbmd0aEFycmF5KCk7ICAgXHJcbiAgICBjb25zdCBzaGlwTGlzdCA9IGdldFNoaXBMaXN0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Qm9hcmRPYmooKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkQXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWydjYXJyaWVyJywgJ2JhdHRsZXNoaXAnLCAnc3VibWFyaW5lJywgJ2NydWlzZXInLCAncGF0cm9sQm9hdCddXHJcbiAgICBmdW5jdGlvbiBnZXRTaGlwTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuZ2V0U2hpcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gWzUsIDQsIDMsIDMsIDJdIFxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExlbmd0aEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5jcmVhdGVTaGlwTGVuZ3RoQXJyYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhdHRhY2soY29vcmRzLCBlbmVteUJvYXJkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwZWF0UGxheSA9IGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGlmIChyZXBlYXRQbGF5KSByZXR1cm4gJ3JlcGVhdCc7XHJcblxyXG4gICAgICAgIHJldHVybiBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB0aGUgY29vcmRzIGhhdmUgYmVlbiB0YXJnZXR0ZWQgYWxyZWFkeVxyXG4gICAgZnVuY3Rpb24gaXNSZXBlYXRQbGF5KGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgYm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWx1ZSA9IGJvYXJkQXJyW3Jvd11bY29sXTtcclxuICAgICAgICBpZiAodHlwZW9mIGJvYXJkVmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGJvYXJkVmFsdWUgPT09ICcnKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgMiByYW5kb20gbnVtYmVycyBiZXR3ZWVuIDAtOSBhbmQgcmV0dXJuIGluIGFycmF5XHJcbiAgICBmdW5jdGlvbiBnZW5SYW5kb21Db29yZHMoKSB7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICAgIHJldHVybiBbeCwgeV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVjdXJzaXZlIHNoaXAgcGxhY2VtZW50IC0gcG9wIG5ldyBzaGlwdHlwZSAmIHNoaXBsZW5ndGggdW50aWwgYWxsIHNoaXBzIHBsYWNlZFxyXG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xyXG4gICAgICAgIGNvbnN0IHNoaXBUeXBlID0gc2hpcExpc3QucG9wKCk7XHJcbiAgICAgICAgaWYgKHNoaXBUeXBlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zLCBkaXJlY3Rpb24sIGVuZFBvcywgdmFsaWRTaGlwUGxhY2VtZW50O1xyXG5cclxuICAgICAgICAvLyB3aGlsZSB0aGVyZXMgbm8gdmFsaWQgc2hpcCBwbGFjZW1lbnQgYXNzaWduIHZhbHVlcyB0byB2YXJzIGZvciB1c2UgaW4gZnVuY3Rpb25zIHVudGlsIHNoaXBUeXBlICYgc2hpcExlbmd0aCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgc3RhcnRQb3MgPSBnZW5SYW5kb21Db29yZHMoKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGJvYXJkLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmQuY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGF0dGFjayxcclxuICAgICAgICBnZW5SYW5kb21Db29yZHMsXHJcbiAgICAgICAgZ2V0Qm9hcmRBcnJheSxcclxuICAgICAgICBnZXRCb2FyZE9iaiwgICAgICAgIFxyXG4gICAgICAgIGdldFNoaXBMaXN0LFxyXG4gICAgICAgIHBsYWNlU2hpcHNSYW5kb21seSxcclxuICAgICAgICBzaGlwTGVuZ3RoQXJyYXksXHJcbiAgICAgICAgc2hpcExpc3RcclxuICAgIH1cclxufVxyXG5cclxuLy8gSW5oZXJpdCBmcm9tIFBsYXllciBmYWN0b3J5XHJcbmNvbnN0IENvbXB1dGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvdG8gPSBQbGF5ZXIoKTtcclxuICAgIGxldCByYW5kb21Db29yZHM7XHJcblxyXG4gICAgY29uc3QgaGl0Q29vcmRzID0gW107XHJcbiAgICBjb25zdCBhZGphY2VudFRhcmdldHMgPSBbXTtcclxuICAgIGNvbnN0IGxpbmVhclRhcmdldHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhckFyclZhbHMoYXJyKSB7XHJcbiAgICAgICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSBhcnIucG9wKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIG9uIGhpdCBhZGQgdGhlIGNvb3JkIHRvIGFycmF5LCBvbiBzdW5rIGNsZWFyIGFycmF5c1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIGNvb3Jkcykge1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSBoaXRDb29yZHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykge1xyXG4gICAgICAgICAgICBjbGVhckFyclZhbHMoaGl0Q29vcmRzKTtcclxuICAgICAgICAgICAgY2xlYXJBcnJWYWxzKGFkamFjZW50VGFyZ2V0cyk7XHJcbiAgICAgICAgICAgIGNsZWFyQXJyVmFscyhsaW5lYXJUYXJnZXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE8gRklYOiB3aGVuIDIgc2VwYXJhdGUgc2hpcHMgYXJlIGhpdCAmIG5vIHZhbGlkIGxpbmVhciB0YXJnZXRzIGFyZSBhcm91bmQgdGhlbSB3ZSBnZXQgYSAnY29vcmRzIGlzIG5vdCBpdGVyYWJsZScgZXJyb3IuIG5lZWQgdG8gc3dpdGNoIGJhY2sgdG8gdXNpbmcgYWRqYWNlbnQgdGFyZ2V0cy8gb3RoZXIgYXhpcz9cclxuICAgIGZ1bmN0aW9uIHNtYXJ0QXR0YWNrKGVuZW15Qm9hcmQpIHtcclxuICAgICAgICAvLyBpZiBubyB2YWxpZCB0YXJnZXRzIGF0dGFjayByYW5kb20gY29vcmRcclxuICAgICAgICBpZiAoaGl0Q29vcmRzLmxlbmd0aCA9PT0gMCAmJiBhZGphY2VudFRhcmdldHMubGVuZ3RoID09PSAwICYmIGxpbmVhclRhcmdldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBhdHRhY2sgcmVzdWx0IGlzIGEgaGl0LCBnZXQgdGhlIGFkamFjZW50IGNvb3JkcyBpbiB4ICYgeSBheGlzICYgYWRkIHRvIG5ldyBhcnJcclxuICAgICAgICBpZiAoaGl0Q29vcmRzLmxlbmd0aCA9PT0gMSAmJiBhZGphY2VudFRhcmdldHMubGVuZ3RoID09PSAwICYmIGxpbmVhclRhcmdldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0ID0gaGl0Q29vcmRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKHByZXZpb3VzSGl0LCBlbmVteUJvYXJkKTtcclxuICAgICAgICAgICAgbmV4dFBvc3NpYmxlVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGFkamFjZW50VGFyZ2V0cy5wdXNoKHRhcmdldCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiB0aGVyZSBhcmUgMiBoaXRzLCBmaXJlIGFsb25nIHNhbWUgYXhpc1xyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjbGVhckFyclZhbHMoYWRqYWNlbnRUYXJnZXRzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gaGl0Q29vcmRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBlbmRQb3MgPSBoaXRDb29yZHNbaGl0Q29vcmRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAgICAgbmV4dFBvc3NpYmxlTGluZWFyVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGxpbmVhclRhcmdldHMucHVzaCh0YXJnZXQpKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXh0VGFyZ2V0O1xyXG5cclxuICAgICAgICBpZiAoYWRqYWNlbnRUYXJnZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbmV4dFRhcmdldCA9IGFkamFjZW50VGFyZ2V0cy5wb3AoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXh0VGFyZ2V0ID0gbGluZWFyVGFyZ2V0cy5wb3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybnMgaGl0IHN1bmsgb3IgbWlzcyBzdHJpbmdzXHJcbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcHJvdG8uYXR0YWNrKG5leHRUYXJnZXQsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIGhhbmRsZUF0dGFja1Jlc3VsdHMoYXR0YWNrUmVzdWx0LCBuZXh0VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIHJhbmRvbUNvb3JkcyA9IHByb3RvLmdlblJhbmRvbUNvb3JkcygpOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2socmFuZG9tQ29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICBoYW5kbGVBdHRhY2tSZXN1bHRzKGF0dGFja1Jlc3VsdCwgcmFuZG9tQ29vcmRzKTtcclxuICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb3JkcygpIHtcclxuICAgICAgICByZXR1cm4gcmFuZG9tQ29vcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q29vcmRzLFxyXG4gICAgICAgIC4uLnByb3RvLFxyXG4gICAgICAgIHJhbmRvbUF0dGFjayxcclxuICAgICAgICBzbWFydEF0dGFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07IiwiLy8gbGVuZ3RoID0gbnVtYmVyXHJcbi8vIGhpdHMgPSBudW1iZXIgb3IgYXJyYXkgb2YgYm9vbGVhbiB2YWx1ZXMgcmVwcmVzZW50aW5nIGVhY2ggc2hpcCBwYXJ0P1xyXG4vLyBpc1N1bmsgPSBlaXRoZXIgY2hlY2sgaWYgZGFtYWdlID49IGxlbmd0aCBPUiBjaGVjayBpZiBldmVyeSBhcnJheSBlbGVtZW50IGlzIHRydWVcclxuXHJcbi8vIFwiUkVNRU1CRVIgeW91IG9ubHkgaGF2ZSB0byB0ZXN0IHlvdXIgb2JqZWN04oCZcyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5IG1ldGhvZHMgb3IgcHJvcGVydGllcyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgeW91ciDigJhzaGlw4oCZIG9iamVjdCBuZWVkIHVuaXQgdGVzdHMuXCJcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcFR5cGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0ge1xyXG4gICAgICAgIGNhcnJpZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNSxcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWFyaW5lOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3J1aXNlcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMixcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaGl0c0Ftb3VudCA9IDA7XHJcbiAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwQ2xhc3Nlc1tzaGlwVHlwZV07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZIHRvIHlvdXIgc2hpcC5cclxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdHNBbW91bnQrKztcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB3aGV0aGVyIGhhcyBzdW5rIGJhc2VkIG9uIHNoaXAncyBsZW5ndGggYW5kIHRoZSBudW1iZXIgb2Yg4oCYaGl0c+KAmS5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzQW1vdW50ID49IHNoaXBMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBDbGFzc2VzLFxyXG4gICAgICAgIHNoaXBMZW5ndGgsXHJcbiAgICAgICAgaGl0LFxyXG4gICAgICAgIGhpdHNBbW91bnQsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgaXNTdW5rLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29yZHMsIGNvbnZlcnRDb29yZFRvSWQgfSBmcm9tIFwiLi91dGlsaXR5L3BhcnNlQ29vcmRzXCI7XHJcbmltcG9ydCB7IGdldE5hbWUgfSBmcm9tIFwiLi91dGlsaXR5L2dldE5hbWVcIjtcclxuXHJcbmNvbnN0IHJlbmRlck91dGVyQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcclxuICAgIGNvbnN0IHN0YXJ0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0QnRuLmlkID0gXCJzdGFydFwiO1xyXG4gICAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSc7ICAgIFxyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7ICAgIFxyXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZCk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChzdGFydEJ0bkNvbnRhaW5lcik7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEJ0bik7XHJcbiAgICBzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlOYW1lTWVudSk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbn1cclxuXHJcbmNvbnN0IGJsdXJFbGVtZW50ID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xyXG59XHJcblxyXG5jb25zdCByZW1vdmVCbHVyID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5TmFtZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNhcmQnKTtcclxuICAgIGNvbnN0IGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fzay1uYW1lLWNvbnRhaW5lcicpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoYXNrTmFtZUNvbnRhaW5lcik7XHJcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCBvbmUgbmFtZTogYFxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgYXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xyXG4gICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICBnZXROYW1lKCk7XHJcbiAgICAgICAgICAgIEdBTUUuc3RhcnRQcmVHYW1lKCk7XHJcbiAgICAgICAgICAgIGhpZGVFbGVtZW50KG1lbnVDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5kaXNhYmxlZCA9IHRydWU7XHJcbn1cclxuXHJcbi8vIFJlbW92ZSBjaGlsZCBlbHMgZnJvbSBhIHBhcmVudCBlbCAmIHJldHVybnMgcmVtb3ZlZCBub2RlIC0gZS5nLiBvdXRlcmNvbnRhaW5lclxyXG5jb25zdCBjbGVhckNoaWxkRWxlbWVudHMgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5sYXN0Q2hpbGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U2hpcFBsYWNlbWVudCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkT2JqID0gcGxheWVyLmdldEJvYXJkT2JqKCk7XHJcbiAgICBjb25zdCBib2FyZEFyciA9IHBsYXllci5nZXRCb2FyZEFycmF5KCk7ICAgIFxyXG5cclxuICAgIC8vIC0gcG9wIHJlbW92ZXMgJiByZXR1cm5zIGxhc3QgZWxlbWVudCBvZiBhcnJheSAtIG9uY2UgdGhlIGFycmF5IGlzIGVtcHR5IGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBwbGF5ZXIuc2hpcExpc3QucG9wKCk7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGxheWVyLnNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgYSBzcXVhcmUgdG8gcGxhY2Ugc2hpcFxyXG4gICAgY29uc3QgcGxhY2VTaGlwQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNxdWFyZSBpZCBzdHJpbmdcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIC8vIG1ha2UgdGhlIGxlZ2VuZCAmIHRoZSBnYXBzIGJldHdlZW4gc3F1YXJlcyBub24gY2xpY2thYmxlKVxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBjb29yZHMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7XHJcbiAgICAgICAgLy8gZW5kIHBvcyBjb29yZCBjYWxjZCBmcm9tIHN0YXJ0IHBvc1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTsgLy9lLmcgJ2JhdHRsZXNoaXAnLCBbMCwwXSwgWzQsMF1cclxuICAgICAgICAgICAgLy8gcmVjdXJzaXZlIC0gcG9wIGEgbmV3IHNoaXAgdHlwZSBpbnRvIHBsYWNlU2hpcCBmdW5jdGlvbiB1bnRpbCBldmVyeSBzaGlwIGlzIHBsYWNlZFxyXG4gICAgICAgICAgICBkaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3VzZSBlbnRlciBldmVudCBoYW5kbGVyXHJcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNoaXBNb3VzZUVudGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXlIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgbGVhdmUgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VMZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3dpdGNoIHNoaXAgb3JpZW50YXRpb24gZHVyaW5nIHBsYWNlbWVudCB0byBwdXQgb24gcmlnaHQgY2xpY2tcclxuICAgIGNvbnN0IHJvdGF0ZURpcmVjdGlvbiA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gcHJldmVudCByaWdodCBjbGljayBtZW51IGFwcGVhcmluZ1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgeyAvL2UuZy4gaWYgbGVnZW5kXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFySG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgICAgIGRpc3BsYXlIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGhvdmVyIGVmZmVjdCB0byBkaXYgc3F1YXJlIGlkIFxyXG4gICAgY29uc3QgZGlzcGxheUhvdmVyRWZmZWN0ID0gKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7IC8vIGVnLiAxMEEgPSAnWzksMF0nXHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gYm9hcmRPYmouZ2V0RW5kQ29vcmQoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCk7IC8vZWcuIFs5LDBdLCAndmVydGljYWwnLCAyID0gWzEwLDBdXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsQ29vcmRzID0gYm9hcmRPYmouZ2V0QWxsQ29vcmRzKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIGFsbENvb3Jkcy5mb3JFYWNoKChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRPYmouYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRTdHJpbmcgPSBjb252ZXJ0Q29vcmRUb0lkKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZFN0cmluZ31gKS5jbGFzc0xpc3QuYWRkKCd2YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZFN0cmluZ31gKS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBob3ZlciBlZmZlY3RzIChlZyBvbiBtb3VzZWxlYXZlKVxyXG4gICAgY29uc3QgY2xlYXJIb3ZlckVmZmVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhbGxTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNxdWFyZScpO1xyXG4gICAgICAgIGFsbFNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCd2YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3RhcnRHYW1lcGxheSA9ICgpID0+IHtcclxuICAgICAgICAvLyBpZiBzaGlwcyBhcmVudCBhbGwgcGxhY2VkLCBkb24ndCBzdGFydFxyXG4gICAgICAgIGlmIChzaGlwTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBHQU1FLnN0YXJ0R2FtZVBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVSZXNldFNoaXBzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgICBHQU1FLnJlc2V0UGxheWVyT2JqcygpO1xyXG4gICAgICAgIEdBTUUuc3RhcnRQcmVHYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdGFydEdhbWVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywnc3RhcnQtYnRuJyk7XHJcbiAgICBzdGFydEdhbWVCdG4udGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XHJcbiAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTdGFydEdhbWVwbGF5KTtcclxuXHJcbiAgICBjb25zdCBhdXRvU2hpcFBsYWNlbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3BsYWNlLXNoaXBzLWJ0bicpO1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnRCdG4udGV4dENvbnRlbnQgPSAnQXV0byBwbGFjZSc7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdBTUUuYXV0b1NoaXBQbGFjZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHJlc2V0U2hpcHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc2V0U2hpcHNCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3Jlc2V0LWJ0bicpO1xyXG4gICAgcmVzZXRTaGlwc0J0bi50ZXh0Q29udGVudCA9ICdSZXNldCBTaGlwcyc7XHJcbiAgICByZXNldFNoaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmVzZXRTaGlwcyk7XHJcblxyXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICByZW1vdmVCbHVyKGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9hcmRzQ29udGFpbmVyKTsgXHJcblxyXG4gICAgbGV0IGdhbWVib2FyZDtcclxuXHJcbiAgICAvLyBpZiBzaGlwbGVuZ3RoIGNvbnRhaW5zIGEgbnVtYmVyIC8gaXNudCB1bmRlZmluZWQuIGkuZS4gaWYgc2hpcHMgc3RpbGwgbmVlZHMgdG8gYmUgcGxhY2VkIGFkZCBjbGljayBldmVudFxyXG4gICAgaWYgKHNoaXBMZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJywgcGxhY2VTaGlwQ2xpY2spO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBoYW5kbGVQbGFjZVNoaXBNb3VzZUVudGVyKTtcclxuICAgICAgICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBoYW5kbGVQbGFjZVNoaXBNb3VzZUxlYXZlKTtcclxuICAgICAgICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCByb3RhdGVEaXJlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHsgLy9yZW5kZXIgYm9hcmQgd2l0aG91dCBldmVudHNcclxuICAgICAgICBnYW1lYm9hcmQgPSBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsICdwcmUtZ2FtZScpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGluc3RydWN0aW9ucztcclxuXHJcbiAgICBpZiAoc2hpcExlbmd0aCkgeyAvLyBpZiBjb250YWlucyBhIG51bVxyXG4gICAgICAgIGluc3RydWN0aW9ucyA9IGBQbGFjZSB0aGUgJHtzaGlwVHlwZX0sICR7Z2V0TmFtZSgpfS4gUmlnaHQgY2xpY2sgdG8gcm90YXRlLmA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGluc3RydWN0aW9ucyA9IGBDbGljayBvbiBzdGFydCBnYW1lIHRvIGJlZ2luIWA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5zdHJ1Y3Rpb25zUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEuY2xhc3NMaXN0LmFkZCgnaW5zdHJ1Y3Rpb25zJyk7XHJcbiAgICBpbnN0cnVjdGlvbnNQYXJhLnRleHRDb250ZW50ID0gaW5zdHJ1Y3Rpb25zO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ByZS1nYW1lLWdhbWVib2FyZC1jb250YWluZXInKTtcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmQpOyAgIFxyXG5cclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uc1BhcmEpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkdyb3VwKTtcclxuXHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChhdXRvU2hpcFBsYWNlbWVudEJ0bik7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChyZXNldFNoaXBzQnRuKTsgICAgXHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChzdGFydEdhbWVCdG4pO1xyXG59XHJcblxyXG4vLyBtb2RlIHdpbGwgYmUgY2FsbGVkIGFzJ3ByZS1nYW1lJyBvciAncGxheWVyJy8nZW5lbXknIHN0cmluZ3NcclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCBtb2RlLCBjbGlja0NiKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKGAke21vZGV9YCwgJ2dhbWVib2FyZCcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBib2FyZEFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgeyAvLyBST1cgaS5lIG51bXNcclxuICAgICAgICBjb25zdCByb3cgPSBib2FyZEFycltpXTtcclxuICAgICAgICBsZXQgcm93Q29vcmQgPSBpICsgMTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykgeyAvLyBDT0xcclxuICAgICAgICAgICAgaWYgKGogPT09IDApIHsgLy8gUk9XIExFR0VORFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3dMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcInJvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChyb3dMZWdlbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbENvb3JkID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopOyAvLyBjb252ZXJ0IHRvIGxldHRlcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBgJHtyb3dDb29yZH0ke2NvbENvb3JkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzcXVhcmUuaWQgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdwcmUtZ2FtZScgfHwgbW9kZSA9PT0gJ3BsYXllcicpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRBcnJbaV1bal0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIjopXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYm9hcmRBcnJbaV1bal0udG9TdHJpbmcoKS5pbmNsdWRlcygnWCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdTJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXSA9PT0gJ00nKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDT0wgTEVHRU5EXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBib2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbExlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIiwgXCJjb2xcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NCArIGkpO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbExlZ2VuZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmQoY29sTGVnZW5kKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBpZiAoY2xpY2tDYikge1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2IpOyAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclR1cm5UcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybi10cmFja2VyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdHVyblRyYWNrZXIuY2xhc3NMaXN0LmFkZCgndHVybnRyYWNrZXInKTsgXHJcbiAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjb21tZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJveCcpO1xyXG5cclxuICAgIHR1cm5UcmFja2VyLnRleHRDb250ZW50ID0gYCR7R0FNRS5nZXRUdXJuKCl9J3MgdHVybmA7XHJcbiAgICBpZiAoR0FNRS5nZXRUdXJuKCkgPT09ICdQbGF5ZXInKSB7XHJcbiAgICAgICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtnZXROYW1lKCl9J3MgdHVybmA7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbW1lbnRCb3gudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFJlc3VsdCgpfWA7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHModHVyblRyYWNrZXJDb250YWluZXIpO1xyXG4gICAgdHVyblRyYWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHVyblRyYWNrZXIpO1xyXG4gICAgdHVyblRyYWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudENvbnRhaW5lcik7XHJcbiAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCb3gpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJHYW1lTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwbGF5ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW5lbXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVuZW15LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHR1cm5UcmFja2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0dXJuLXRyYWNrZXItY29udGFpbmVyJyk7ICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWNvbnRhaW5lcicpOyAgICBcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2FyZHNDb250YWluZXIpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodHVyblRyYWNrZXJDb250YWluZXIpO1xyXG4gICAgcmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckJvYXJkVXBkYXRlcyA9IChlbmVteUJvYXJkQXJyLCBwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgcmVuZGVyRW5lbXlCb2FyZChlbmVteUJvYXJkQXJyKTtcclxuICAgIHJlbmRlclBsYXllckJvYXJkKHBsYXllckJvYXJkQXJyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAocGxheWVyQm9hcmRBcnIpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMocGxheWVyQ29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRpc3BsYXlCb2FyZChwbGF5ZXJCb2FyZEFyciwgJ3BsYXllcicpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGxheWVySGVhZGluZy5jbGFzc0xpc3QuYWRkKCdib2FyZC10aXRsZScsICdwbGF5ZXInKTtcclxuICAgIHBsYXllckhlYWRpbmcudGV4dENvbnRlbnQgPSAnUGxheWVyIGJvYXJkJztcclxuICAgIGNvbnN0IHJlbWFpbmluZ1NoaXBDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci50ZXh0Q29udGVudCA9ICdYIFNoaXBzIHJlbWFpbmluZyc7XHJcblxyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJIZWFkaW5nKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1haW5pbmdTaGlwQ291bnRlcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckVuZW15Qm9hcmQgPSAoZW5lbXlCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktY29udGFpbmVyJyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoZW5lbXlDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBlbmVteUJvYXJkID0gZGlzcGxheUJvYXJkKGVuZW15Qm9hcmRBcnIsICdlbmVteScsIGhhbmRsZUF0dGFja0NsaWNrKTtcclxuXHJcbiAgICBjb25zdCBlbmVteUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZW5lbXlIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJywgJ2VuZW15Jyk7XHJcbiAgICBjb25zdCByZW1haW5pbmdTaGlwQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY291bnRlcicpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIudGV4dENvbnRlbnQgPSAnWCBTaGlwcyByZW1haW5pbmcnO1xyXG5cclxuICAgIGVuZW15SGVhZGluZy50ZXh0Q29udGVudCA9ICdFbmVteSBib2FyZCc7XHJcbiAgICBlbmVteUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUJvYXJkKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15SGVhZGluZyk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1haW5pbmdTaGlwQ291bnRlcik7ICAgIFxyXG59XHJcblxyXG5jb25zdCBoYW5kbGVBdHRhY2tDbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoR0FNRS5nZXRUdXJuKCkgPT09ICdFbmVteScpIHJldHVybjtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHJldHVybjtcclxuICAgIGNvbnN0IGNvb3JkcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTtcclxuICAgIEdBTUUucGxheWVyQXR0YWNrKGNvb3Jkcyk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclZpY3RvcnlTY3JlZW4gPSAod2lubmVyKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyLW1vZGFsJyk7XHJcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJyk7XHJcbiAgICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHBsYXlBZ2FpbkJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncGxheS1hZ2Fpbi1idG4nKTtcclxuICAgIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluJztcclxuICAgIGNvbnN0IHJldHVyblRvTWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyZXR1cm4tbWVudS1idG4nKTtcclxuICAgIHJldHVyblRvTWVudUJ0bi50ZXh0Q29udGVudCA9ICdSZXR1cm4gdG8gbWVudSc7XHJcbiAgICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQbGF5QWdhaW4pO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUmV0dXJuVG9NZW51KTtcclxuICAgIFxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpZiAod2lubmVyID09PSAnUGxheWVyJykge1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBZb3Ugd2luIWA7XHJcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGBDb25ncmF0dWxhdGlvbnMhIFdhbnQgdG8gcGxheSBhbm90aGVyIHJvdW5kP2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBZb3UgbG9zZWA7XHJcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IGBCZXR0ZXIgbHVjayBuZXh0IHRpbWUuIFdhbnQgdG8gdHJ5IGFnYWluP2A7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgYmx1ckVsZW1lbnQoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwYXJhKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGJ0bkdyb3VwKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJldHVyblRvTWVudUJ0bik7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pOyAgICBcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIG1vZGFsLnJlbW92ZSgpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVSZXR1cm5Ub01lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvZHkpO1xyXG4gICAgR0FNRS5zdGFydEdhbWUoKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlUGxheUFnYWluID0gKCkgPT4ge1xyXG4gICAgcmVtb3ZlTW9kYWwoKTtcclxuICAgIEdBTUUucGxheUFnYWluKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7ICAgIFxyXG4gICAgZGlzcGxheU5hbWVNZW51LFxyXG4gICAgcmVuZGVyT3V0ZXJDb250YWluZXIsXHJcbiAgICByZW5kZXJNYWluTWVudSxcclxuICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50LFxyXG4gICAgcmVuZGVyQm9hcmRVcGRhdGVzLFxyXG4gICAgcmVuZGVyRW5lbXlCb2FyZCxcclxuICAgIHJlbmRlckdhbWVMYXlvdXQsXHJcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCxcclxuICAgIHJlbmRlclR1cm5UcmFja2VyLFxyXG4gICAgcmVuZGVyVmljdG9yeVNjcmVlblxyXG59IiwiaW1wb3J0ICogYXMgUGxheWVyIGZyb20gJy4uL2ZhY3Rvcmllcy9wbGF5ZXInO1xyXG5pbXBvcnQgU2hpcCBmcm9tICcuLi9mYWN0b3JpZXMvc2hpcCc7XHJcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7IGNvbnZlcnRDb29yZFRvSWQgfSBmcm9tIFwiLi91dGlsaXR5L3BhcnNlQ29vcmRzXCI7XHJcblxyXG5sZXQgcGxheWVyO1xyXG5sZXQgY29tcHV0ZXI7XHJcbmxldCB0dXJuID0gJ1BsYXllcic7XHJcbmxldCByZXN1bHRTdHJpbmc7XHJcblxyXG5jb25zdCByZXNldFBsYXllck9ianMgPSAoKSA9PiB7XHJcbiAgICBwbGF5ZXIgPSBQbGF5ZXIuUGxheWVyKCk7XHJcbiAgICBjb21wdXRlciA9IFBsYXllci5Db21wdXRlcigpO1xyXG4gICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7ICAgIFxyXG59XHJcblxyXG4vLyBNYWluIG1lbnUgLSBzdGFydCBnYW1lIGJ0blxyXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XHJcbiAgICBET00ucmVuZGVyT3V0ZXJDb250YWluZXIoKTtcclxuICAgIERPTS5yZW5kZXJNYWluTWVudSgpO1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzKCk7XHJcbn1cclxuXHJcbi8vIFBSRS1HQU1FIC0gdGFrZSBwbGF5ZXIgbmFtZSwgc2hpcCBwbGFjZW1lbnRcclxuY29uc3Qgc3RhcnRQcmVHYW1lID0gKCkgPT4ge1xyXG4gICAgRE9NLmRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbn1cclxuXHJcbmNvbnN0IGF1dG9TaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzKCk7ICAgIFxyXG4gICAgcGxheWVyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgRE9NLmRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbn1cclxuXHJcbi8vIE9uY2Ugc2hpcHMgcGxhY2VkLCBzdGFydCBnYW1lIC0gcmVuZGVyIHBsYXllciBhbmQgZW5lbXkgYm9hcmRzICYgYWRkIHBsYXllciBuYW1lIHRvIHNjcmVlblxyXG5jb25zdCBzdGFydEdhbWVQbGF5ID0gKCkgPT4ge1xyXG4gICAgRE9NLnJlbmRlckdhbWVMYXlvdXQoKTtcclxuICAgIERPTS5yZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIERPTS5yZW5kZXJFbmVteUJvYXJkKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgY29uc29sZS5sb2cocGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbn1cclxuXHJcbi8vIC0gYXR0YWNrIGVuZW15IGJvYXJkIChnZXQgYW5vdGhlciB0dXJuIGlmIGhpdCksIHRvIGJlIHB1dCBvbiBjbGljayBldmVudCB0YXJnZXR0aW5nIGNvb3Jkc1xyXG5jb25zdCBwbGF5ZXJBdHRhY2sgPSAoY29vcmRzKSA9PiB7XHJcbiAgICAvLyByZXR1cm5zIHJlc3VsdHMgb2YgYXR0YWNrIG9uIGVuZW15IGJvYXJkIHdpdGggaW5wdXQgY29vcmRzIC0geCwgbSwgcywgZ2FtZSBvdmVyXHJcbiAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwbGF5ZXIuYXR0YWNrKGNvb3JkcywgY29tcHV0ZXIuZ2V0Qm9hcmRPYmooKSk7XHJcblxyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGNvb3JkcztcclxuICAgIGNvbnN0IGJvYXJkVmFsID0gY29tcHV0ZXIuZ2V0Qm9hcmRPYmooKS5nZXRBcnJheSgpW3Jvd11bY29sXTtcclxuXHJcbiAgICAvLyB1cGRhdGUgRE9NIGJvYXJkcyB3aXRoIGF0dGFjayByZXN1bHRzXHJcbiAgICBET00ucmVuZGVyQm9hcmRVcGRhdGVzKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSwgcGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcblxyXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ0dhbWUgT3ZlcicpIHtcclxuICAgICAgICBkZWNsYXJlV2lubmVyKCdQbGF5ZXInKTsgLy8gdmljdG9yeS9kZWZlYXQgc2NyZWVuXHJcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gYCR7Y29udmVydENvb3JkVG9JZChjb29yZHMpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgIHR1cm4gPSAnRW5lbXknO1xyXG4gICAgICAgIGVuZW15QXR0YWNrKCk7XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgPSBgJHtjb252ZXJ0Q29vcmRUb0lkKGNvb3Jkcyl9IHdhcyBhICR7YXR0YWNrUmVzdWx0fSEgVGFrZSBhbm90aGVyIHNob3RgO1xyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBjb21wdXRlci5nZXRTaGlwTGlzdCgpLmxlbmd0aCA+IGk7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgc2hpcFR5cGUgPSBjb21wdXRlci5nZXRTaGlwTGlzdCgpW2ldO1xyXG4gICAgICAgICAgICAvLyBib2FyZHZhbCBpbmNsdWRlcyBzaGlwIGNsYXNzIGlkXHJcbiAgICAgICAgICAgIGlmIChib2FyZFZhbC5pbmNsdWRlcyhTaGlwKHNoaXBUeXBlKS5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBZb3UgJHthdHRhY2tSZXN1bHR9IHRoZWlyICR7c2hpcFR5cGV9ISBUYWtlIGFub3RoZXIgc2hvdGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7ICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XHJcbn1cclxuXHJcbi8vIC0gcmVjZWl2ZSBlbmVteSBhdHRhY2sgXHJcbmNvbnN0IGVuZW15QXR0YWNrID0gKGF0dGFja1Jlc3VsdCkgPT4geyBcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ0dhbWUgT3ZlcicpIHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWNsYXJlV2lubmVyKCdDb21wdXRlcicpOyAvLyB2aWN0b3J5L2RlZmVhdCBzY3JlZW5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnbWlzcycpIHtcclxuICAgICAgICAgICAgdHVybiA9ICdQbGF5ZXInO1xyXG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgPSBgQ29tcHV0ZXIncyBzaG90IG9uICR7Y29udmVydENvb3JkVG9JZChjb21wdXRlci5nZXRDb29yZHMoKSl9IHdhcyBhICR7YXR0YWNrUmVzdWx0fWA7XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBDb21wdXRlcidzIHNob3Qgb24gJHtjb252ZXJ0Q29vcmRUb0lkKGNvbXB1dGVyLmdldENvb3JkcygpKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9YDtcclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICAvLyBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykge1xyXG4gICAgICAgIC8vICAgICByZXN1bHRTdHJpbmcgPSBgU2hpcCBoYXMgYmVlbiAke2F0dGFja1Jlc3VsdH0hYDtcclxuICAgICAgICAvLyAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBSZWN1cnNpdmVseSBjYWxsIGF0dGFjayAtIHJhbmRvbSBhdHRhY2sgcmV0dXJucyBhdHRhY2tSZXN1bHRcclxuICAgICAgICBlbmVteUF0dGFjayhjb21wdXRlci5zbWFydEF0dGFjayhwbGF5ZXIuZ2V0Qm9hcmRPYmooKSkpO1xyXG5cclxuICAgICAgICAvLyBOQjogZ2V0Q29vcmRzIGZ1bmN0aW9uIHdpbGwgb25seSB3b3JrIGFmdGVyIHJhbmRvbUF0dGFjayBpcyBjYWxsZWRcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29tcHV0ZXIuZ2V0Q29vcmRzKCk7XHJcbiAgICAgICAgY29uc3QgYm9hcmRWYWwgPSBwbGF5ZXIuZ2V0Qm9hcmRPYmooKS5nZXRBcnJheSgpW3Jvd11bY29sXTtcclxuICAgICAgICAgICBcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnc3VuaycpIHsgLy8gTm90IGN1cnJlbnRseSB3b3JraW5nXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBwbGF5ZXIuZ2V0U2hpcExpc3QoKS5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaGlwVHlwZSA9IHBsYXllci5nZXRTaGlwTGlzdCgpW2ldO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgYm9hcmR2YWwgaW5jbHVkZXMgc2hpcCBjbGFzcyBpZFxyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkVmFsLmluY2x1ZGVzKFNoaXAoc2hpcFR5cGUpLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBZb3VyICR7c2hpcFR5cGV9IGhhcyBiZWVuICR7YXR0YWNrUmVzdWx0fSFgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdFN0cmluZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzXHJcbiAgICAgICAgRE9NLnJlbmRlckJvYXJkVXBkYXRlcyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCksIHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xyXG4gICAgfSwgNzAwKTtcclxufVxyXG5cclxuY29uc3QgZ2V0VHVybiA9ICgpID0+IHtcclxuICAgIHJldHVybiB0dXJuO1xyXG59XHJcblxyXG5jb25zdCBnZXRSZXN1bHQgPSAoKSA9PiB7XHJcbiAgICBpZiAocmVzdWx0U3RyaW5nID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXN1bHRTdHJpbmcgPSAnRmlyZSB3aGVuIHJlYWR5ISc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0U3RyaW5nO1xyXG59XHJcblxyXG4vLyBWaWN0b3J5IHNjcmVlbiAvIHJlc3RhcnQgYnRuXHJcbmNvbnN0IGRlY2xhcmVXaW5uZXIgPSAod2lubmVyKSA9PiB7XHJcbiAgICBET00ucmVuZGVyVmljdG9yeVNjcmVlbih3aW5uZXIpO1xyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZXN1bHRTdHJpbmcgPSAnRmlyZSB3aGVuIHJlYWR5ISc7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxuICAgIHN0YXJ0UHJlR2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnQsXHJcbiAgICBnZXRSZXN1bHQsXHJcbiAgICBnZXRUdXJuLFxyXG4gICAgcGxheUFnYWluLFxyXG4gICAgcGxheWVyQXR0YWNrLFxyXG4gICAgcmVzZXRQbGF5ZXJPYmpzLFxyXG4gICAgc3RhcnRQcmVHYW1lLFxyXG4gICAgc3RhcnRHYW1lLFxyXG4gICAgc3RhcnRHYW1lUGxheVxyXG59XHJcblxyXG4vLyBUTyBETzogXHJcbi8vIC0gRml4IGVuZW15IGF0dGFjayBzdW5rIG1lc3NhZ2VcclxuLy8gRmlsbCBpbiBYIHNoaXBzIHJlbWFpbmluZ1xyXG4vLyBmaXggc21hcnQgYXR0YWNrIGxpbmVhciB0YXJnZXRzIGxvZ2ljIC0gMiBoaXRzIG5leHQgdG8gZWFjaCBvdGhlciBhcmVudCBuZWNlc3NhcmlseSB0aGUgc2FtZSBzaGlwIiwiY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgcGxheWVyTmFtZSA9ICdBZG1pcmFsIG9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0TmFtZSB9OyIsIi8vIHRha2VzIGlucHV0IHNxdWFyZSBpZCBzdHJpbmcgLSByZXR1cm5zIGJvYXJkIGFycmF5IGluZGVjZXMgZS5nLiAnMTBBJyA9IFs5LDBdXHJcbmZ1bmN0aW9uIHBhcnNlQ29vcmRzKHNxdWFyZUlkKSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuXHJcbiAgICBpZiAoc3F1YXJlSWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgLy8gZmlyc3QgY2hhcmFjdGVyIChyb3cgbnVtKSBvbiBzcXIgaWQgd2lsbCBiZSArMSBhaGVhZCBvZiBhcnJheSBpbmRleFxyXG4gICAgICAgIHJvdyA9IHBhcnNlSW50KHNxdWFyZUlkLmNoYXJBdCgwKSkgLTE7XHJcbiAgICAgICAgLy8gc2Vjb25kIGNoYXJhY3RlciAoY29sIGxldHRlcikgd2lsbCBiZSB0cmFuc2xhdGVkIGZyb20gQS1KIHRvIDAtOVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMSkgLSA2NTtcclxuICAgIH0gZWxzZSB7IC8vIHNxciBpZCBzdHJpbmcgaXMgMyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgY29uc3QgZmlyc3RUd29DaGFycyA9IHNxdWFyZUlkLnNsaWNlKDAsMik7XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoZmlyc3RUd29DaGFycykgLSAxO1xyXG4gICAgICAgIC8vIHRoaXJkIGNoYXJhY3RlciBjb252ZXJ0IHRvIG51bVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMikgLSA2NTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG59XHJcblxyXG4vLyB0YWtlIGFycmF5IGlucHV0IG51bXMgYW5kIGNvbnZlcnQgaXQgdG8gc3F1YXJlIGlkIHN0cmluZyAtIFs5LDBdID0gJzEwQSdcclxuZnVuY3Rpb24gY29udmVydENvb3JkVG9JZChhcnJheUl0ZW0pIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBhcnJheUl0ZW07XHJcbiAgICBsZXQgbmV3Um93ID0gcm93ICsgMTtcclxuICAgIGxldCBuZXdDb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcclxuICAgIGxldCBzdHJpbmdJZCA9IGAke25ld1Jvd30ke25ld0NvbH1gOyAgICBcclxuICAgIHJldHVybiBzdHJpbmdJZDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhcnNlQ29vcmRzLFxyXG4gICAgY29udmVydENvb3JkVG9JZFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgR0FNRSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbkdBTUUuc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9