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
    
    height: 100vh;
    gap: 30px;

}
/* @media only screen and (min-width: 930px) {
    .container {
        flex-direction: column;
    }
}
@media only screen and (min-width: 1400px) {
    .container {
        flex-direction: row;
    }
} */

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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;IACrB,uBAAuB;;IAEvB,aAAa;IACb,SAAS;;AAEb;AACA;;;;;;;;;GASG;;AAEH;IACI,aAAa;IACb,6CAA6C;IAC7C,0CAA0C;IAC1C,QAAQ;IACR,gBAAgB;AACpB;;;AAGA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI;QACI,aAAa;QACb,6CAA6C;QAC7C,0CAA0C;QAC1C,QAAQ;QACR,gBAAgB;IACpB;IACA;QACI,aAAa;IACjB;AACJ;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uCAAuC;IACvC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kCAAkC;IAClC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,OAAO;IACP,QAAQ;IACR,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,YAAY;IACZ,UAAU;IACV,UAAU;IACV,cAAc;IACd,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;\r\n    \r\n    height: 100vh;\r\n    gap: 30px;\r\n\r\n}\r\n/* @media only screen and (min-width: 930px) {\r\n    .container {\r\n        flex-direction: column;\r\n    }\r\n}\r\n@media only screen and (min-width: 1400px) {\r\n    .container {\r\n        flex-direction: row;\r\n    }\r\n} */\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 30px);\r\n    grid-template-rows: repeat(10, 30px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n\r\n.square {\r\n    /* padding: 20px; */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 34px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n@media only screen and (min-width:1063px) {\r\n    .gameboard {\r\n        display: grid;\r\n        grid-template-columns: 0.5fr repeat(10, 60px);\r\n        grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .square {\r\n        padding: 20px;\r\n    }\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    width: 40rem;\r\n    padding: 45px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.start-pregame-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-container {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    padding: 30px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: #23d323;\r\n}\r\n\r\n.hit {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.sunk {\r\n    background-color: #ff6a6a;\r\n}\r\n\r\n.miss {\r\n    background-color: #0a58ca;\r\n}\r\n\r\n.btn {    \r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n    background-color: #3b82f6;\r\n}\r\n\r\n.start-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-ships-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.board-title {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.board-title:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.board-title.player {\r\n    color: #23d323;\r\n}\r\n\r\n.board-title.enemy {\r\n    color: #ff0000;\r\n}\r\n\r\n.ship-counter {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.turn-tracker-container {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.turntracker {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;    \r\n}\r\n\r\n.game-over-modal {\r\n    position: relative;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 45px;\r\n    background-color: rgba(255,255,255,0.8);\r\n}\r\n\r\n.game-over-modal h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.return-menu-btn {\r\n    background-color: #3b82f6;\r\n}\r\n.return-menu-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n}\r\n\r\n.play-again-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n.play-again-btn:hover {\r\n    background-color: #0d8d0d;\r\n}"],"sourceRoot":""}]);
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
}

const renderMainMenu = () => {
    const outerContainer = document.querySelector('.container');
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');
    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = "Battleships";
    const startBtnContainer = document.createElement('div');
    startBtnContainer.classList.add("start-pregame-btn-container");
    const startBtn = document.createElement('btn');
    startBtn.classList.add('btn', 'start-btn');
    startBtn.textContent = 'Start game';
    outerContainer.appendChild(menuCard);
    menuCard.appendChild(title);
    menuCard.appendChild(startBtnContainer);
    startBtnContainer.appendChild(startBtn);
    startBtn.addEventListener('click', displayNameMenu);
}

// Remove child els from a parent el & returns removed node - e.g. outercontainer
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
            //GAME.resetPlayerObjs();
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

    // FIX LATER: NEED TO ADJUST GETNAME FUNCTION FOR THIS TO WORK
    // const handleResetShips = () => {
    //     GAME.resetPlayerObjs();
    //     GAME.startPreGame();
    // }

    const startGameBtn = document.createElement('button');
    startGameBtn.classList.add('btn','start-btn');
    startGameBtn.textContent = 'Start Game';
    startGameBtn.addEventListener('click', handleStartGameplay);

    const autoShipPlacementBtn = document.createElement('button');
    autoShipPlacementBtn.classList.add('btn', 'place-ships-btn');
    autoShipPlacementBtn.textContent = 'Auto place';
    autoShipPlacementBtn.addEventListener('click', _game__WEBPACK_IMPORTED_MODULE_0__.autoShipPlacement);


    // const resetShipsBtn = document.createElement('button');
    // resetShipsBtn.classList.add('btn');
    // resetShipsBtn.textContent = 'Reset Ships';
    // resetShipsBtn.addEventListener('click', handleResetShips);

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
    outerContainer.appendChild(gameboardContainer);
    gameboardContainer.appendChild(gameboard);   

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group');
    gameboardContainer.appendChild(btnContainer);
    btnContainer.appendChild(instructionsPara);
    btnContainer.appendChild(btnGroup);

    btnGroup.appendChild(startGameBtn);
    btnGroup.appendChild(autoShipPlacementBtn);
    // btnGroup.appendChild(resetShipsBtn);    
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

    // if (GAME.getTurn() === 'Player') {
    //     return `${getName(playerName)}`;
    // } 
    
    turnTracker.textContent = `${_game__WEBPACK_IMPORTED_MODULE_0__.getTurn()}'s turn`;
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

    
    const outerContainer = document.querySelector('.container');    
    clearChildElements(outerContainer);
    outerContainer.appendChild(playerContainer);
    outerContainer.appendChild(turnTrackerContainer);
    renderTurnTracker();
    outerContainer.appendChild(enemyContainer);
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



// Main game loop
// The game loop should set up a new game by creating Players and Gameboards.
// The game loop should step through the game turn by turn using only methods from other objects. If at any point you are tempted to write a new function inside the game loop, step back and figure out which class or module that function should belong to.
// Create conditions so that the game ends once one player’s ships have all been sunk. This function is appropriate for the Game module.

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
    //DOM.renderVictoryScreen();
}

// PRE-GAME - take player name, ship placement
const startPreGame = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacement(player);
}

const autoShipPlacement = () => {
    resetPlayerObjs();
    console.log(computer.getBoardArray());
    player.placeShipsRandomly();
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayShipPlacement(player);
}

// Once ships placed, start game - render player and enemy boards & add player name to screen
const startGamePlay = () => {
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderGameLayout();
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoard(player.getBoardArray());
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderEnemyBoard(computer.getBoardArray());
}

// - attack enemy board (get another turn if hit)
// to be put on click event targetting coords
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

// TO DO: smart attack - once enemy gets a hit it fires at surrounding coords // use getname function to print name in turntracker // reset ships button // first start game button should only gen name input once // commentary message box eg "E1 was a miss", "sunk your battleship" etc

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsV0FBVyxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVks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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDMU9ZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlCQUFpQjtBQUM3QjtBQUNBO0FBQ0E7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QUFzQjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2pCO0FBQ3RCO0FBQ0Esb0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG5cclxufVxyXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4uZ2FtZWJvYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMzBweCk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCkgMC41ZnI7ICAgIFxyXG4gICAgZ2FwOiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG59XHJcblxyXG5cclxuLnNxdWFyZSB7XHJcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwNjNweCkge1xyXG4gICAgLmdhbWVib2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcclxuICAgICAgICBnYXA6IDNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNxdWFyZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNxdWFyZTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcclxufVxyXG5cclxuLmxlZ2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxyXG59XHJcblxyXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxufVxyXG5cclxuLmJ0biB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGFydC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcclxufVxyXG5cclxuLnN0YXJ0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGxhY2Utc2hpcHMtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJjMGQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcclxuICAgIGNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zaGlwLWNvdW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udHVybnRyYWNrZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxufVxyXG5cclxuLmdhbWUtb3Zlci1tb2RhbCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4ucmV0dXJuLW1lbnUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xyXG59XHJcblxyXG4ucGxheS1hZ2Fpbi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG4ucGxheS1hZ2Fpbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1Qjs7SUFFdkIsYUFBYTtJQUNiLFNBQVM7O0FBRWI7QUFDQTs7Ozs7Ozs7O0dBU0c7O0FBRUg7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw2Q0FBNkM7UUFDN0MsMENBQTBDO1FBQzFDLFFBQVE7UUFDUixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcblxcclxcbn1cXHJcXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkzMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG59ICovXFxyXFxuXFxyXFxuLmdhbWVib2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCAzMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpIDAuNWZyOyAgICBcXHJcXG4gICAgZ2FwOiAzcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zcXVhcmUge1xcclxcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTA2M3B4KSB7XFxyXFxuICAgIC5nYW1lYm9hcmQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCA2MHB4KTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXFxyXFxuICAgICAgICBnYXA6IDNweDtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNxdWFyZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmU6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xcclxcbiAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIHBhZGRpbmc6IDQ1cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnZhbGlkLXNoaXAtcGxhY2VtZW50IHsgICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyMSwgMjI0LCAwLjgxNSk7XFxyXFxufVxcclxcblxcclxcbi5pbnZhbGlkLXNoaXAtcGxhY2VtZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XFxyXFxufVxcclxcblxcclxcbi5zaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmhpdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zdW5rIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pc3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHsgICAgXFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZS1zaGlwcy1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGU6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IC0xMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcXHJcXG4gICAgY29sb3I6ICMyM2QzMjM7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZS5lbmVteSB7XFxyXFxuICAgIGNvbG9yOiAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1jb3VudGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4tdHJhY2tlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udHVybnRyYWNrZXIge1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZS1vdmVyLW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IGF1dG87XFxyXFxuICAgIHJpZ2h0OiBhdXRvO1xcclxcbiAgICBib3R0b206IGF1dG87XFxyXFxuICAgIGxlZnQ6IGF1dG87XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA0NXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uIERPTkVcclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxyXG4vLyBTSElQUyBTSE9VTEQgTk9UIEJFIEFCTEUgVE8gT1ZFUkxBUFxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNoaXBUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApO1xyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZSBzaGlwJ3MgaWQgaW50byB0aGUgYm9hcmQgYXJyYXkgYmV0d2VlbiBpbnB1dCBjb29yZHNcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcykgeyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBjb29yZHMgYmV0d2VlbiBzdGFydCBjb29yZCAmIGVuZCBjb29yZFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBhbW91bnQgb2YgY29vcmRzIGJldHdlZW4gdGhlIDIgZ2l2ZW4gaW5wdXRzXHJcbiAgICAgICAgY29uc3QgY29vcmRzQW1vdW50ID0gYWxsQ29vcmRzLmxlbmd0aDtcclxuICAgICAgICAvLyBHZXQgc2hpcExlbmd0aCAmIGlkIHByb3BzIGZyb20gU2hpcCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIC8vIHB1c2ggc2hpcGxlbmd0aCBvZiBlYWNoIHNoaXAgaW50byBuZXcgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoQXJyYXkgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGhBcnJheS5wdXNoKHNoaXBbdHlwZXNbaV1dLnNoaXBMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2hpcExlbmd0aEFycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGNvb3JkcyBiZXR3ZWVuLCAmIGluY2x1ZGluZywgdHdvIGlucHV0IGNvb3JkcyBlZy4gWzAsMF0sIFswLDNdXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIC8vIGZvcm1hdHMgZWFjaCBpbnB1dCBpbnRvIGFycmF5IHdpdGggMiBpdGVtcyAmIGFzc2lnbnMgdmFyIG5hbWVzIHRvIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIGVuZCBjb29yZCBmcm9tIHN0YXJ0IGNvb3JkICsgc2hpcGxlbmd0aCAmIGRpcmVjdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0RW5kQ29vcmQgKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdztcclxuICAgICAgICBsZXQgZW5kQ29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgLy8gdmVydGljYWwgZ29lcyBkb3dud2FyZHMgaW4gYXJyYXkgaW5kZXggKHVwd2FyZHMgaW4gRE9NKSwgaG9yaXpvbnRhbCBnb2VzIHJpZ2h0d2FyZHNcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGVuZFJvdyArPSBzaGlwTGVuZ3RoIC0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGVuZENvbCArPSBzaGlwTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtlbmRSb3csIGVuZENvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZXMgcGFpciBvZiBjb29yZHMsIGRldGVybWluZXMgd2hldGhlciB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHNlbmRzIGhpdCBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwIG9yIHJlY29yZHMgY29vcmRzIG9mIG1pc3NlZCBzaG90XHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgLy8gU3RvcmUgdmFsdWUgb2YgdGhlIGdpdmVuIGJvYXJkIGFycmF5IGluZGVjZXNcclxuICAgICAgICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmRBcnJbcm93XVtjb2xdO1xyXG4gICAgICAgIC8vIGNvb3JkcyBjb250YWluIGEgc2hpcCBpZiBib2FyZFZhbHVlIGlzIGEgbnVtYmVyLi4uXHJcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpblNoaXAgPSB0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ251bWJlcic7XHJcblxyXG4gICAgICAgIGlmIChjb29yZHNDb250YWluU2hpcCkge1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApOyAvLyBbJ2NhcnJpZXInLCAnYmF0dGxlc2hpcCcsIGV0Y11cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyBcclxuICAgICAgICAgICAgICAgIC8vIGdyYWIgaWQgZnJvbSBzaGlwIHByb3BzXHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkIH0gPSBzaGlwW3R5cGVzW2ldXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgYm9hcmQgdmFsIGlzIGVxdWFsIHRvIGlkIG9mIHNoaXAgb2JqXHJcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRWYWx1ZSA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGhpdCBmdW5jdGlvbiB0byB0aGF0IHNoaXAgb2JqXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcE9iaiA9IHNoaXBbdHlwZXNbaV1dO1xyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBPYmouaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIFMgdG8gcmVwcmVzZW50IFN1bmsgdG8gZW50aXJlIHNoaXAgY29vcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPYmouaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnIuZm9yRWFjaCgocm93LCByKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkQXJyW3JdW2NdLnRvU3RyaW5nKCkuaW5jbHVkZXMoaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcl1bY10gPSBgJHtpZH1TYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBhbiBYIHRvIHZhbHVlIHRvIHJlcHJlc2VudCBhIGhpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyb3ddW2NvbF0gKz0gJ1gnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGxTaGlwc1N1bmsoKSkgcmV0dXJuICdHYW1lIE92ZXInOyAvLyBHYW1lIG92ZXIgaGFzIHRvIHJldHVybiBiZWZvcmUgZmluYWwgc2hpcCBzdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPYmouaXNTdW5rKCkpIHJldHVybiAnU3Vuayc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdIaXQnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gYm9hcmQgdmFsdWUgdG8gTSBmb3IgYSBtaXNzXHJcbiAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSA9ICdNJztcclxuICAgICAgICAgICAgcmV0dXJuICdNaXNzJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBUaGUgZXZlcnkoKSBtZXRob2Qgb2YgQXJyYXkgaW5zdGFuY2VzIHRlc3RzIHdoZXRoZXIgYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gSXQgcmV0dXJucyBhIEJvb2xlYW4gdmFsdWUuXHJcbiAgICBjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBzaGlwc0Fyci5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSk7XHJcblxyXG4gICAgLy8gYXJlIGNvb3JkcyBlbXB0eSwgd2l0aGluIGJvYXJkXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgc2hpcCBjYW4gcGxhY2UgYmV0d2VlbiB0d28gZ2l2ZW4gY29vcmRzXHJcbiAgICBmdW5jdGlvbiBjYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpIHtcclxuICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3Jkcy5ldmVyeSgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGFyZVdpdGhpbkJvYXJkKGNvb3JkKSAmJiBhcmVFbXB0eShjb29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBjb29yZHMgYXJlIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICBmdW5jdGlvbiBhcmVXaXRoaW5Cb2FyZChjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChyb3cgPj0gMTAgfHwgcm93IDwgMCB8fCBjb2wgPj0gMTAgfHwgY29sIDwgIDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiBjb29yZHMgYXJlIGVtcHR5XHJcbiAgICBmdW5jdGlvbiBhcmVFbXB0eShjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIGFsbFNoaXBzU3VuayxcclxuICAgICAgICBhcmVXaXRoaW5Cb2FyZCxcclxuICAgICAgICBjYW5QbGFjZVNoaXBCZXR3ZWVuLFxyXG4gICAgICAgIGNyZWF0ZUJvYXJkQXJyYXksXHJcbiAgICAgICAgY3JlYXRlU2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIGdldEFsbENvb3JkcyxcclxuICAgICAgICBnZXRBbGxOdW1zQmV0d2VlbixcclxuICAgICAgICBnZXRBcnJheSxcclxuICAgICAgICBnZXRFbmRDb29yZCxcclxuICAgICAgICBnZXRTaGlwVHlwZXMsXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssICAgICAgICBcclxuICAgICAgICB0eXBlcyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuLy8gUGxheWVycyBjYW4gdGFrZSB0dXJucyBwbGF5aW5nIHRoZSBnYW1lIGJ5IGF0dGFja2luZyB0aGUgZW5lbXkgR2FtZWJvYXJkLlxyXG4vLyBUaGUgZ2FtZSBpcyBwbGF5ZWQgYWdhaW5zdCB0aGUgY29tcHV0ZXIsIHNvIG1ha2UgdGhlIOKAmGNvbXB1dGVy4oCZIGNhcGFibGUgb2YgbWFraW5nIHJhbmRvbSBwbGF5cy4gVGhlIEFJIGRvZXMgbm90IGhhdmUgdG8gYmUgc21hcnQsIGJ1dCBpdCBzaG91bGQga25vdyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIG1vdmUgaXMgbGVnYWwgKGkuZS4gaXQgc2hvdWxkbuKAmXQgc2hvb3QgdGhlIHNhbWUgY29vcmRpbmF0ZSB0d2ljZSkuXHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IGdldFNoaXBMZW5ndGhBcnJheSgpOyAgIFxyXG4gICAgY29uc3Qgc2hpcExpc3QgPSBnZXRTaGlwTGlzdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkT2JqKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCb2FyZEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5nZXRBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ3N1Ym1hcmluZScsICdjcnVpc2VyJywgJ3BhdHJvbEJvYXQnXVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldFNoaXBUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFs1LCA0LCAzLCAzLCAyXSBcclxuICAgIGZ1bmN0aW9uIGdldFNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuY3JlYXRlU2hpcExlbmd0aEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdFBsYXkgPSBpc1JlcGVhdFBsYXkoY29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICBpZiAocmVwZWF0UGxheSkgcmV0dXJuICdyZXBlYXQnO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkcyBoYXZlIGJlZW4gdGFyZ2V0dGVkIGFscmVhZHlcclxuICAgIGZ1bmN0aW9uIGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQXJyID0gZW5lbXlCb2FyZC5nZXRBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChib2FyZFZhbHVlID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIDIgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiAwLTkgYW5kIHJldHVybiBpbiBhcnJheVxyXG4gICAgZnVuY3Rpb24gZ2VuUmFuZG9tQ29vcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlY3Vyc2l2ZSBzaGlwIHBsYWNlbWVudCAtIHBvcCBuZXcgc2hpcHR5cGUgJiBzaGlwbGVuZ3RoIHVudGlsIGFsbCBzaGlwcyBwbGFjZWRcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwVHlwZSA9IHNoaXBMaXN0LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzdGFydFBvcywgZGlyZWN0aW9uLCBlbmRQb3MsIHZhbGlkU2hpcFBsYWNlbWVudDtcclxuXHJcbiAgICAgICAgLy8gd2hpbGUgdGhlcmVzIG5vIHZhbGlkIHNoaXAgcGxhY2VtZW50IGFzc2lnbiB2YWx1ZXMgdG8gdmFycyBmb3IgdXNlIGluIGZ1bmN0aW9ucyB1bnRpbCBzaGlwVHlwZSAmIHNoaXBMZW5ndGggcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIHdoaWxlICghdmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gZ2VuUmFuZG9tQ29vcmRzKCk7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBib2FyZC5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2ssXHJcbiAgICAgICAgZ2VuUmFuZG9tQ29vcmRzLFxyXG4gICAgICAgIGdldEJvYXJkQXJyYXksXHJcbiAgICAgICAgZ2V0Qm9hcmRPYmosICAgICAgICBcclxuICAgICAgICBnZXRTaGlwTGlzdCxcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHksXHJcbiAgICAgICAgc2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIHNoaXBMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaGVyaXQgZnJvbSBQbGF5ZXIgZmFjdG9yeVxyXG5jb25zdCBDb21wdXRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3RvID0gUGxheWVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBsZXQgcmFuZG9tQ29vcmRzID0gcHJvdG8uZ2VuUmFuZG9tQ29vcmRzKCk7XHJcbiAgICAgICAgY29uc3QgYXR0YWNrZWRDb29yZCA9IHByb3RvLmF0dGFjayhyYW5kb21Db29yZHMsIGVuZW15Qm9hcmQpO1xyXG4gICAgICAgIHJldHVybiBhdHRhY2tlZENvb3JkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJvdG8sXHJcbiAgICAgICAgcmFuZG9tQXR0YWNrXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTsiLCIvLyBsZW5ndGggPSBudW1iZXJcclxuLy8gaGl0cyA9IG51bWJlciBvciBhcnJheSBvZiBib29sZWFuIHZhbHVlcyByZXByZXNlbnRpbmcgZWFjaCBzaGlwIHBhcnQ/XHJcbi8vIGlzU3VuayA9IGVpdGhlciBjaGVjayBpZiBkYW1hZ2UgPj0gbGVuZ3RoIE9SIGNoZWNrIGlmIGV2ZXJ5IGFycmF5IGVsZW1lbnQgaXMgdHJ1ZVxyXG5cclxuLy8gXCJSRU1FTUJFUiB5b3Ugb25seSBoYXZlIHRvIHRlc3QgeW91ciBvYmplY3TigJlzIHB1YmxpYyBpbnRlcmZhY2UuIE9ubHkgbWV0aG9kcyBvciBwcm9wZXJ0aWVzIHRoYXQgYXJlIHVzZWQgb3V0c2lkZSBvZiB5b3VyIOKAmHNoaXDigJkgb2JqZWN0IG5lZWQgdW5pdCB0ZXN0cy5cIlxyXG5cclxuY29uc3QgU2hpcCA9IChzaGlwVHlwZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcENsYXNzZXMgPSB7XHJcbiAgICAgICAgY2Fycmllcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNCxcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtYXJpbmU6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMyxcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcnVpc2VyOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0cm9sQm9hdDoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBoaXRzQW1vdW50ID0gMDtcclxuICAgIGNvbnN0IHsgc2hpcExlbmd0aCwgaWQgfSA9IHNoaXBDbGFzc2VzW3NoaXBUeXBlXTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkgdG8geW91ciBzaGlwLlxyXG4gICAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0c0Ftb3VudCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHdoZXRoZXIgaGFzIHN1bmsgYmFzZWQgb24gc2hpcCdzIGxlbmd0aCBhbmQgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZLlxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHNBbW91bnQgPj0gc2hpcExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcENsYXNzZXMsXHJcbiAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICBoaXQsXHJcbiAgICAgICAgaGl0c0Ftb3VudCxcclxuICAgICAgICBpZCxcclxuICAgICAgICBpc1N1bmssXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCAqIGFzIEdBTUUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxuY29uc3QgcmVuZGVyT3V0ZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyTWFpbk1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQmF0dGxlc2hpcHNcIjtcclxuICAgIGNvbnN0IHN0YXJ0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGFydEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidG4nKTtcclxuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoc3RhcnRCdG5Db250YWluZXIpO1xyXG4gICAgc3RhcnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TmFtZU1lbnUpO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgY2hpbGQgZWxzIGZyb20gYSBwYXJlbnQgZWwgJiByZXR1cm5zIHJlbW92ZWQgbm9kZSAtIGUuZy4gb3V0ZXJjb250YWluZXJcclxuY29uc3QgY2xlYXJDaGlsZEVsZW1lbnRzID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheU5hbWVNZW51ID0gKHBsYXllck5hbWUpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpOyAgICBcclxuICAgIGNvbnN0IGFza05hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fzay1uYW1lLWNvbnRhaW5lcicpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoYXNrTmFtZUNvbnRhaW5lcik7XHJcbiAgICBjb25zdCBuYW1lRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCduYW1lLWlucHV0Jyk7XHJcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBgQWRtaXJhbCBvbmUgbmFtZTogYFxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC5pZCA9ICduYW1lLWlucHV0JztcclxuICAgIGNvbnN0IG5hbWVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5hbWVTdWJtaXQudGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgYXNrTmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRm9ybSk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVTdWJtaXQpO1xyXG4gICAgbmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICBnZXROYW1lKHBsYXllck5hbWUpO1xyXG4gICAgICAgICAgICAvL2NsZWFyTWVudSgpO1xyXG4gICAgICAgICAgICAvL0dBTUUucmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICAgICAgICAgIEdBTUUuc3RhcnRQcmVHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZ2V0TmFtZSA9IChwbGF5ZXJOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBuYW1lSW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0JykudmFsdWU7XHJcbiAgICBwbGF5ZXJOYW1lID0gbmFtZUlucHV0VmFsdWU7XHJcbiAgICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuLy8gdGFrZXMgaW5wdXQgc3F1YXJlIGlkIHN0cmluZyAtIHJldHVybnMgYm9hcmQgYXJyYXkgaW5kZWNlcyBlLmcuICcxMEEnID0gWzksMF1cclxuZnVuY3Rpb24gcGFyc2VDb29yZHMoc3F1YXJlSWQpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sO1xyXG5cclxuICAgIGlmIChzcXVhcmVJZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAvLyBmaXJzdCBjaGFyYWN0ZXIgKHJvdyBudW0pIG9uIHNxciBpZCB3aWxsIGJlICsxIGFoZWFkIG9mIGFycmF5IGluZGV4XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoc3F1YXJlSWQuY2hhckF0KDApKSAtMTtcclxuICAgICAgICAvLyBzZWNvbmQgY2hhcmFjdGVyIChjb2wgbGV0dGVyKSB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSBBLUogdG8gMC05XHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgxKSAtIDY1O1xyXG4gICAgfSBlbHNlIHsgLy8gc3FyIGlkIHN0cmluZyBpcyAzIGNoYXJhY3RlcnNcclxuICAgICAgICBjb25zdCBmaXJzdFR3b0NoYXJzID0gc3F1YXJlSWQuc2xpY2UoMCwyKTtcclxuICAgICAgICByb3cgPSBwYXJzZUludChmaXJzdFR3b0NoYXJzKSAtIDE7XHJcbiAgICAgICAgLy8gdGhpcmQgY2hhcmFjdGVyIGNvbnZlcnQgdG8gbnVtXHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgyKSAtIDY1O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyb3csIGNvbF07XHJcbn1cclxuXHJcbi8vIHRha2UgYXJyYXkgaW5wdXQgbnVtcyBhbmQgY29udmVydCBpdCB0byBzcXVhcmUgaWQgc3RyaW5nIC0gWzksMF0gPSAnMTBBJ1xyXG5mdW5jdGlvbiBjb252ZXJ0Q29vcmRUb0lkKGFycmF5SXRlbSkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGFycmF5SXRlbTtcclxuICAgIGxldCBuZXdSb3cgPSByb3cgKyAxO1xyXG4gICAgbGV0IG5ld0NvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xyXG4gICAgbGV0IHN0cmluZ0lkID0gYCR7bmV3Um93fSR7bmV3Q29sfWA7ICAgIFxyXG4gICAgcmV0dXJuIHN0cmluZ0lkO1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5U2hpcFBsYWNlbWVudCA9IChwbGF5ZXIpID0+IHtcclxuICAgIGNvbnN0IGJvYXJkT2JqID0gcGxheWVyLmdldEJvYXJkT2JqKCk7XHJcbiAgICBjb25zdCBib2FyZEFyciA9IHBsYXllci5nZXRCb2FyZEFycmF5KCk7ICAgIFxyXG5cclxuICAgIC8vIC0gcG9wIHJlbW92ZXMgJiByZXR1cm5zIGxhc3QgZWxlbWVudCBvZiBhcnJheSAtIG9uY2UgdGhlIGFycmF5IGlzIGVtcHR5IGl0IHdpbGwgcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgY29uc3Qgc2hpcFR5cGUgPSBwbGF5ZXIuc2hpcExpc3QucG9wKCk7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gcGxheWVyLnNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcclxuICAgIFxyXG4gICAgLy8gQ2xpY2sgYSBzcXVhcmUgdG8gcGxhY2Ugc2hpcFxyXG4gICAgY29uc3QgcGxhY2VTaGlwQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHNxdWFyZSBpZCBzdHJpbmdcclxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIC8vIG1ha2UgdGhlIGxlZ2VuZCAmIHRoZSBnYXBzIGJldHdlZW4gc3F1YXJlcyBub24gY2xpY2thYmxlKVxyXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBjb29yZHMgaW4gYXJyYXkgZm9ybWF0XHJcbiAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7XHJcbiAgICAgICAgLy8gZW5kIHBvcyBjb29yZCBjYWxjZCBmcm9tIHN0YXJ0IHBvc1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIGNvbnN0IHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkT2JqLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcblxyXG4gICAgICAgIC8vIGlmIGNvb3JkcyBhcmUgZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllc1xyXG4gICAgICAgIGlmICh2YWxpZFNoaXBQbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEN1cnJlbnQgc2hpcCBpczogJHtzaGlwVHlwZX0gbGVuZ3RoIGlzICR7c2hpcExlbmd0aH0gc3F1YXJlc2ApO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCAke2UudGFyZ2V0LmlkfWApO1xyXG5cclxuICAgICAgICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBUeXBlLCBzdGFydFBvcywgZW5kUG9zKTsgLy9lLmcgJ2JhdHRsZXNoaXAnLCBbMCwwXSwgWzQsMF1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhib2FyZEFycik7XHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZSAtIHBvcCBhIG5ldyBzaGlwIHR5cGUgaW50byBwbGFjZVNoaXAgZnVuY3Rpb24gdW50aWwgZXZlcnkgc2hpcCBpcyBwbGFjZWRcclxuICAgICAgICAgICAgZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgZW50ZXIgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3aXRjaCBzaGlwIG9yaWVudGF0aW9uIGR1cmluZyBwbGFjZW1lbnQgdG8gcHV0IG9uIHJpZ2h0IGNsaWNrXHJcbiAgICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByZXZlbnQgcmlnaHQgY2xpY2sgbWVudSBhcHBlYXJpbmdcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHsgLy9lLmcuIGlmIGxlZ2VuZFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBob3ZlciBlZmZlY3QgdG8gZGl2IHNxdWFyZSBpZCBcclxuICAgIGNvbnN0IGRpc3BsYXlIb3ZlckVmZmVjdCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyc2VDb29yZHMocG9zaXRpb24pOyAvLyBlZy4gMTBBID0gJ1s5LDBdJ1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpOyAvL2VnLiBbOSwwXSwgJ3ZlcnRpY2FsJywgMiA9IFsxMCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGJvYXJkT2JqLmdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBpZiBjb29yZHMgYXJlIGVtcHR5ICYgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgICAgICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSBib2FyZE9iai5jYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGAke3NoaXBUeXBlfSAoJHtzaGlwTGVuZ3RofSBzcXVhcmVzKTogU3RhcnQgcG9zOiR7c3RhcnRQb3N9IEVuZCBwb3M6ICR7ZW5kUG9zfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coY29vcmQpO1xyXG4gICAgICAgICAgICBpZiAoYm9hcmRPYmouYXJlV2l0aGluQm9hcmQoY29vcmQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRTdHJpbmcgPSBjb252ZXJ0Q29vcmRUb0lkKGNvb3JkKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYGlkIHN0cmluZyBpczogJHtpZFN0cmluZ30sIGNvb3JkIGlzICR7Y29vcmR9YCk7ICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgaG92ZXIgZWZmZWN0cyAoZWcgb24gbW91c2VsZWF2ZSlcclxuICAgIGNvbnN0IGNsZWFySG92ZXJFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICBhbGxTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0R2FtZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgc2hpcHMgYXJlbnQgYWxsIHBsYWNlZCwgZG9uJ3Qgc3RhcnRcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR0FNRS5zdGFydEdhbWVQbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRklYIExBVEVSOiBORUVEIFRPIEFESlVTVCBHRVROQU1FIEZVTkNUSU9OIEZPUiBUSElTIFRPIFdPUktcclxuICAgIC8vIGNvbnN0IGhhbmRsZVJlc2V0U2hpcHMgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgR0FNRS5yZXNldFBsYXllck9ianMoKTtcclxuICAgIC8vICAgICBHQU1FLnN0YXJ0UHJlR2FtZSgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xyXG4gICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3RhcnRHYW1lcGxheSk7XHJcblxyXG4gICAgY29uc3QgYXV0b1NoaXBQbGFjZW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGFjZS1zaGlwcy1idG4nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLnRleHRDb250ZW50ID0gJ0F1dG8gcGxhY2UnO1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHQU1FLmF1dG9TaGlwUGxhY2VtZW50KTtcclxuXHJcblxyXG4gICAgLy8gY29uc3QgcmVzZXRTaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgLy8gcmVzZXRTaGlwc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuICAgIC8vIHJlc2V0U2hpcHNCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgU2hpcHMnO1xyXG4gICAgLy8gcmVzZXRTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlc2V0U2hpcHMpO1xyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKG91dGVyQ29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgZ2FtZWJvYXJkO1xyXG5cclxuICAgIC8vIGlmIHNoaXBsZW5ndGggY29udGFpbnMgYSBudW1iZXIgLyBpc250IHVuZGVmaW5lZFxyXG4gICAgLy8gaS5lLiBpZiBzaGlwcyBzdGlsbCBuZWVkcyB0byBiZSBwbGFjZWQgYWRkIGNsaWNrIGV2ZW50XHJcbiAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnLCBwbGFjZVNoaXBDbGljayk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJvdGF0ZURpcmVjdGlvbik7XHJcbiAgICB9IGVsc2UgeyAvL3JlbmRlciBib2FyZCB3aXRob3V0IGV2ZW50c1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9hcmRBcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgaWYgKHNoaXBMZW5ndGgpIHsgLy8gaWYgY29udGFpbnMgYSBudW1cclxuICAgICAgICBpbnN0cnVjdGlvbnMgPSBgUGxhY2UgdGhlICR7c2hpcFR5cGV9LiBSaWdodCBjbGljayB0byByb3RhdGUuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYENsaWNrIG9uIHN0YXJ0IGdhbWUgdG8gYmVnaW4hYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmQpOyAgIFxyXG5cclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bi1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGluc3RydWN0aW9uc1BhcmEpO1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkdyb3VwKTtcclxuXHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChzdGFydEdhbWVCdG4pO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYXV0b1NoaXBQbGFjZW1lbnRCdG4pO1xyXG4gICAgLy8gYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmVzZXRTaGlwc0J0bik7ICAgIFxyXG59XHJcblxyXG4vLyBtb2RlIHdpbGwgYmUgY2FsbGVkIGFzJ3ByZS1nYW1lJyBvciAncGxheWVyJy8nZW5lbXknIHN0cmluZ3NcclxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCBtb2RlLCBjbGlja0NiKSB7XHJcbiAgICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKGAke21vZGV9YCwgJ2dhbWVib2FyZCcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBib2FyZEFyci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgeyAvLyBST1cgaS5lIG51bXNcclxuICAgICAgICBjb25zdCByb3cgPSBib2FyZEFycltpXTtcclxuICAgICAgICBsZXQgcm93Q29vcmQgPSBpICsgMTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykgeyAvLyBDT0xcclxuICAgICAgICAgICAgaWYgKGogPT09IDApIHsgLy8gUk9XIExFR0VORFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3dMZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiLCBcInJvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC50ZXh0Q29udGVudCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZChyb3dMZWdlbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbENvb3JkID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopOyAvLyBjb252ZXJ0IHRvIGxldHRlcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBgJHtyb3dDb29yZH0ke2NvbENvb3JkfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBzcXVhcmUuaWQgPSBjb29yZGluYXRlO1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnc3F1YXJlJyk7XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdwcmUtZ2FtZScgfHwgbW9kZSA9PT0gJ3BsYXllcicpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYm9hcmRBcnJbaV1bal0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIjopXCI7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYm9hcmRBcnJbaV1bal0udG9TdHJpbmcoKS5pbmNsdWRlcygnWCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdTJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXSA9PT0gJ00nKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDT0wgTEVHRU5EXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBib2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbExlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIiwgXCJjb2xcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NCArIGkpO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbExlZ2VuZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmQoY29sTGVnZW5kKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBpZiAoY2xpY2tDYikge1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2IpOyAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclR1cm5UcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybi10cmFja2VyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdHVyblRyYWNrZXIuY2xhc3NMaXN0LmFkZCgndHVybnRyYWNrZXInKTsgIFxyXG5cclxuICAgIC8vIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ1BsYXllcicpIHtcclxuICAgIC8vICAgICByZXR1cm4gYCR7Z2V0TmFtZShwbGF5ZXJOYW1lKX1gO1xyXG4gICAgLy8gfSBcclxuICAgIFxyXG4gICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFR1cm4oKX0ncyB0dXJuYDtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyh0dXJuVHJhY2tlckNvbnRhaW5lcik7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuVHJhY2tlcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckdhbWVMYXlvdXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW5lbXktY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3R1cm4tdHJhY2tlci1jb250YWluZXInKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpOyAgICBcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhvdXRlckNvbnRhaW5lcik7XHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHVyblRyYWNrZXJDb250YWluZXIpO1xyXG4gICAgcmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Q29udGFpbmVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQm9hcmRVcGRhdGVzID0gKGVuZW15Qm9hcmRBcnIsIHBsYXllckJvYXJkQXJyKSA9PiB7XHJcbiAgICByZW5kZXJFbmVteUJvYXJkKGVuZW15Qm9hcmRBcnIpO1xyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQocGxheWVyQm9hcmRBcnIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJQbGF5ZXJCb2FyZCA9IChwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhwbGF5ZXJDb250YWluZXIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZGlzcGxheUJvYXJkKHBsYXllckJvYXJkQXJyLCAncGxheWVyJyk7XHJcblxyXG4gICAgY29uc3QgcGxheWVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJywgJ3BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGluZy50ZXh0Q29udGVudCA9ICdQbGF5ZXIgYm9hcmQnO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLnRleHRDb250ZW50ID0gJ1ggU2hpcHMgcmVtYWluaW5nJztcclxuXHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckhlYWRpbmcpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyRW5lbXlCb2FyZCA9IChlbmVteUJvYXJkQXJyKSA9PiB7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbmVteS1jb250YWluZXInKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhlbmVteUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZEFyciwgJ2VuZW15JywgaGFuZGxlQXR0YWNrQ2xpY2spO1xyXG5cclxuICAgIGNvbnN0IGVuZW15SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbmVteUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAnZW5lbXknKTtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1NoaXBDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuY2xhc3NMaXN0LmFkZCgnc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci50ZXh0Q29udGVudCA9ICdYIFNoaXBzIHJlbWFpbmluZyc7XHJcblxyXG4gICAgZW5lbXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VuZW15IGJvYXJkJztcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlIZWFkaW5nKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ0VuZW15JykgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgR0FNRS5wbGF5ZXJBdHRhY2soY29vcmRzKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVmljdG9yeVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGF5LWFnYWluLWJ0bicpO1xyXG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xyXG4gICAgY29uc3QgcmV0dXJuVG9NZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JldHVybi1tZW51LWJ0bicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBtZW51JztcclxuICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIEdBTUUucGxheUFnYWluKTtcclxuICAgIHJldHVyblRvTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJldHVyblRvTWVudSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaWYgKHdpbm5lciA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IHdpbiFgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zISBXYW50IHRvIHBsYXkgYW5vdGhlciByb3VuZD9gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IGxvc2VgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLiBXYW50IHRvIHRyeSBhZ2Fpbj9gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmV0dXJuVG9NZW51QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgaGFuZGxlUmV0dXJuVG9NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2R5KTtcclxuICAgIEdBTUUuc3RhcnRHYW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7ICAgIFxyXG4gICAgZGlzcGxheU5hbWVNZW51LFxyXG4gICAgcmVuZGVyT3V0ZXJDb250YWluZXIsXHJcbiAgICByZW5kZXJNYWluTWVudSxcclxuICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50LFxyXG4gICAgcmVuZGVyQm9hcmRVcGRhdGVzLFxyXG4gICAgcmVuZGVyRW5lbXlCb2FyZCxcclxuICAgIHJlbmRlckdhbWVMYXlvdXQsXHJcbiAgICByZW5kZXJQbGF5ZXJCb2FyZCxcclxuICAgIHJlbmRlclR1cm5UcmFja2VyLFxyXG4gICAgcmVuZGVyVmljdG9yeVNjcmVlblxyXG59IiwiaW1wb3J0ICogYXMgUGxheWVyIGZyb20gJy4uL2ZhY3Rvcmllcy9wbGF5ZXInO1xyXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xyXG5cclxuLy8gTWFpbiBnYW1lIGxvb3BcclxuLy8gVGhlIGdhbWUgbG9vcCBzaG91bGQgc2V0IHVwIGEgbmV3IGdhbWUgYnkgY3JlYXRpbmcgUGxheWVycyBhbmQgR2FtZWJvYXJkcy5cclxuLy8gVGhlIGdhbWUgbG9vcCBzaG91bGQgc3RlcCB0aHJvdWdoIHRoZSBnYW1lIHR1cm4gYnkgdHVybiB1c2luZyBvbmx5IG1ldGhvZHMgZnJvbSBvdGhlciBvYmplY3RzLiBJZiBhdCBhbnkgcG9pbnQgeW91IGFyZSB0ZW1wdGVkIHRvIHdyaXRlIGEgbmV3IGZ1bmN0aW9uIGluc2lkZSB0aGUgZ2FtZSBsb29wLCBzdGVwIGJhY2sgYW5kIGZpZ3VyZSBvdXQgd2hpY2ggY2xhc3Mgb3IgbW9kdWxlIHRoYXQgZnVuY3Rpb24gc2hvdWxkIGJlbG9uZyB0by5cclxuLy8gQ3JlYXRlIGNvbmRpdGlvbnMgc28gdGhhdCB0aGUgZ2FtZSBlbmRzIG9uY2Ugb25lIHBsYXllcuKAmXMgc2hpcHMgaGF2ZSBhbGwgYmVlbiBzdW5rLiBUaGlzIGZ1bmN0aW9uIGlzIGFwcHJvcHJpYXRlIGZvciB0aGUgR2FtZSBtb2R1bGUuXHJcblxyXG5sZXQgcGxheWVyO1xyXG5sZXQgY29tcHV0ZXI7XHJcbmxldCB0dXJuID0gJ1BsYXllcic7XHJcblxyXG5jb25zdCByZXNldFBsYXllck9ianMgPSAoKSA9PiB7XHJcbiAgICBwbGF5ZXIgPSBQbGF5ZXIuUGxheWVyKCk7XHJcbiAgICBjb21wdXRlciA9IFBsYXllci5Db21wdXRlcigpO1xyXG4gICAgY29tcHV0ZXIucGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbn1cclxuXHJcbi8vIE1haW4gbWVudSAtIHN0YXJ0IGdhbWUgYnRuXHJcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJPdXRlckNvbnRhaW5lcigpO1xyXG4gICAgRE9NLnJlbmRlck1haW5NZW51KCk7XHJcbiAgICByZXNldFBsYXllck9ianMoKTsgICAgXHJcbiAgICAvL0RPTS5yZW5kZXJWaWN0b3J5U2NyZWVuKCk7XHJcbn1cclxuXHJcbi8vIFBSRS1HQU1FIC0gdGFrZSBwbGF5ZXIgbmFtZSwgc2hpcCBwbGFjZW1lbnRcclxuY29uc3Qgc3RhcnRQcmVHYW1lID0gKCkgPT4ge1xyXG4gICAgRE9NLmRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbn1cclxuXHJcbmNvbnN0IGF1dG9TaGlwUGxhY2VtZW50ID0gKCkgPT4ge1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgcGxheWVyLnBsYWNlU2hpcHNSYW5kb21seSgpO1xyXG4gICAgRE9NLmRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbn1cclxuXHJcbi8vIE9uY2Ugc2hpcHMgcGxhY2VkLCBzdGFydCBnYW1lIC0gcmVuZGVyIHBsYXllciBhbmQgZW5lbXkgYm9hcmRzICYgYWRkIHBsYXllciBuYW1lIHRvIHNjcmVlblxyXG5jb25zdCBzdGFydEdhbWVQbGF5ID0gKCkgPT4ge1xyXG4gICAgRE9NLnJlbmRlckdhbWVMYXlvdXQoKTtcclxuICAgIERPTS5yZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIERPTS5yZW5kZXJFbmVteUJvYXJkKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbn1cclxuXHJcbi8vIC0gYXR0YWNrIGVuZW15IGJvYXJkIChnZXQgYW5vdGhlciB0dXJuIGlmIGhpdClcclxuLy8gdG8gYmUgcHV0IG9uIGNsaWNrIGV2ZW50IHRhcmdldHRpbmcgY29vcmRzXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgIC8vIHJldHVybnMgcmVzdWx0cyBvZiBhdHRhY2sgb24gZW5lbXkgYm9hcmQgd2l0aCBpbnB1dCBjb29yZHMgLSB4LCBtLCBzLCBnYW1lIG92ZXJcclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29vcmRzLCBjb21wdXRlci5nZXRCb2FyZE9iaigpKTtcclxuXHJcbiAgICAvLyB1cGRhdGUgRE9NIGJvYXJkcyB3aXRoIGF0dGFjayByZXN1bHRzXHJcbiAgICBET00ucmVuZGVyQm9hcmRVcGRhdGVzKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSwgcGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcblxyXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ0dhbWUgT3ZlcicpIHtcclxuICAgICAgICAvLyB2aWN0b3J5L2RlZmVhdCBzY3JlZW5cclxuICAgICAgICBkZWNsYXJlV2lubmVyKCdQbGF5ZXInKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnTWlzcycpIHtcclxuICAgICAgICB0dXJuID0gJ0VuZW15JztcclxuICAgICAgICBlbmVteUF0dGFjaygpO1xyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGBQbGF5ZXIncyBzaG90IGlzIGEgJHthdHRhY2tSZXN1bHR9YCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZE9iaigpLmFsbFNoaXBzU3VuaygpKTtcclxuICAgIC8vY29uc29sZS5sb2cocGxheWVyLmdldEJvYXJkT2JqKCkuYWxsU2hpcHNTdW5rKCkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpXHJcbn1cclxuXHJcbi8vIC0gcmVjZWl2ZSBlbmVteSBhdHRhY2sgXHJcbmNvbnN0IGVuZW15QXR0YWNrID0gKGF0dGFja1Jlc3VsdCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdHYW1lIE92ZXInKSB7XHJcbiAgICAgICAgICAgIC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgICAgICAgICBkZWNsYXJlV2lubmVyKCdDb21wdXRlcicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdNaXNzJykge1xyXG4gICAgICAgICAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZWN1cnNpdmVseSBjYWxsIGF0dGFja1xyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXIuZ2V0Qm9hcmRPYmooKSkpOyAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYENvbXB1dGVyJ3Mgc2hvdCBpcyBhICR7YXR0YWNrUmVzdWx0fWApOyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzXHJcbiAgICAgICAgRE9NLnJlbmRlckJvYXJkVXBkYXRlcyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCksIHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG5cclxuICAgIH0sIDcwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdHVybjtcclxufVxyXG5cclxuLy8gVE8gRE86IHNtYXJ0IGF0dGFjayAtIG9uY2UgZW5lbXkgZ2V0cyBhIGhpdCBpdCBmaXJlcyBhdCBzdXJyb3VuZGluZyBjb29yZHMgLy8gdXNlIGdldG5hbWUgZnVuY3Rpb24gdG8gcHJpbnQgbmFtZSBpbiB0dXJudHJhY2tlciAvLyByZXNldCBzaGlwcyBidXR0b24gLy8gZmlyc3Qgc3RhcnQgZ2FtZSBidXR0b24gc2hvdWxkIG9ubHkgZ2VuIG5hbWUgaW5wdXQgb25jZSAvLyBjb21tZW50YXJ5IG1lc3NhZ2UgYm94IGVnIFwiRTEgd2FzIGEgbWlzc1wiLCBcInN1bmsgeW91ciBiYXR0bGVzaGlwXCIgZXRjXHJcblxyXG4vLyBWaWN0b3J5IHNjcmVlbiAvIHJlc3RhcnQgYnRuXHJcbmNvbnN0IGRlY2xhcmVXaW5uZXIgPSAod2lubmVyKSA9PiB7XHJcbiAgICBET00ucmVuZGVyVmljdG9yeVNjcmVlbih3aW5uZXIpO1xyXG59XHJcblxyXG5jb25zdCBwbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZXNldFBsYXllck9ianMoKTtcclxuICAgIHN0YXJ0UHJlR2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnQsXHJcbiAgICBnZXRUdXJuLFxyXG4gICAgcGxheUFnYWluLFxyXG4gICAgcGxheWVyQXR0YWNrLFxyXG4gICAgcmVzZXRQbGF5ZXJPYmpzLFxyXG4gICAgc3RhcnRQcmVHYW1lLFxyXG4gICAgc3RhcnRHYW1lLFxyXG4gICAgc3RhcnRHYW1lUGxheVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgR0FNRSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbkdBTUUuc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9