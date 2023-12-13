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
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;    
    height: 100vh;
}

.boards-container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;  
    font-family: sans-serif;    
    gap: 30px;
}

.menu-container {
    display: flex;
}

.gameboard {
    display: grid;
    grid-template-columns: 0.5fr repeat(10, 25px);
    grid-template-rows: repeat(10, 25px) 0.5fr;    
    gap: 3px;
    margin-top: 60px;
}

.square {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
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
    width: 16rem;
    padding: 25px;    
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
    padding: 30px;
    margin-top: 15px;
    width: 238px;
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
    width: 100%;
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
    background-color: rgba(255,255,255,0.9);
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

svg {
    width: 100%;
    height: 100%;
    display: inline-block;
}


@media only screen and (min-width:500px) {
    .container {
        justify-content: center;
    }
    .menu-card {        
        width: 30rem;
    }
    .gameboard {        
        grid-template-columns: 0.5fr repeat(10, 35px);
        grid-template-rows: repeat(10, 35px) 0.5fr;    
        gap: 3px;
        margin-top: 60px;
    }
    .btn-container {
        width: 337px;
    }
}

@media only screen and (min-width:1124px) {
    .turn-tracker-container {
        width: auto;
    }
}

@media only screen and (min-width:1624px) {
    .container {
        align-content: center;
    }
    
    .menu-card {
        padding: 45px;
        width: 40rem;
    }
    .gameboard {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;    \r\n    height: 100vh;\r\n}\r\n\r\n.boards-container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;    \r\n    gap: 30px;\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 25px);\r\n    grid-template-rows: repeat(10, 25px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    width: 16rem;\r\n    padding: 25px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.start-pregame-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-container {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    padding: 30px;\r\n    margin-top: 15px;\r\n    width: 238px;\r\n}\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: #23d323;\r\n}\r\n\r\n.hit {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.sunk {\r\n    background-color: #ff6a6a;\r\n}\r\n\r\n.miss {\r\n    background-color: #0a58ca;\r\n}\r\n\r\n.btn {    \r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n    margin-bottom: 15px;    \r\n}\r\n\r\n.btn-group .btn {\r\n    width: 100%;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n    background-color: #3b82f6;\r\n}\r\n\r\n.start-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-ships-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n\r\n.reset-btn {\r\n    background-color: #c9cd14;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.board-title {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.board-title:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.board-title.player {\r\n    color: #23d323;\r\n}\r\n\r\n.board-title.enemy {\r\n    color: #ff0000;\r\n}\r\n\r\n.ship-counter {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.turn-tracker-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    width: 100%;\r\n}\r\n\r\n.turntracker {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;    \r\n}\r\n\r\n.comment-container {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.game-over-modal {\r\n    position: absolute;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 45px;\r\n    background-color: rgba(255,255,255,0.9);\r\n    text-align: center;\r\n    border: 4px solid #000344;\r\n}\r\n\r\n.game-over-modal h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.return-menu-btn {\r\n    background-color: #3b82f6;\r\n}\r\n.return-menu-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n}\r\n\r\n.play-again-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n.play-again-btn:hover {\r\n    background-color: #0d8d0d;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n.blur {\r\n    filter: blur(2px);\r\n}\r\n\r\nsvg {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n@media only screen and (min-width:500px) {\r\n    .container {\r\n        justify-content: center;\r\n    }\r\n    .menu-card {        \r\n        width: 30rem;\r\n    }\r\n    .gameboard {        \r\n        grid-template-columns: 0.5fr repeat(10, 35px);\r\n        grid-template-rows: repeat(10, 35px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .btn-container {\r\n        width: 337px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:1124px) {\r\n    .turn-tracker-container {\r\n        width: auto;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:1624px) {\r\n    .container {\r\n        align-content: center;\r\n    }\r\n    \r\n    .menu-card {\r\n        padding: 45px;\r\n        width: 40rem;\r\n    }\r\n    .gameboard {\r\n        grid-template-columns: 0.5fr repeat(10, 60px);\r\n        grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .square {\r\n        padding: 20px;\r\n    }    \r\n    .btn-container {\r\n        width: auto;\r\n    }\r\n    .btn-group .btn {\r\n        width: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/assets/battleship-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/battleship-icon.svg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\r\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg fill=\"#000000\" height=\"800px\" width=\"800px\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" \r\n\t viewBox=\"0 0 512 512\" xml:space=\"preserve\">\r\n<g>\r\n\t<g>\r\n\t\t<g>\r\n\t\t\t<path d=\"M460.486,272.363l-42.15-12.509V131.438c0-5.522-4.478-10-10-10H295.072V52.291c0-5.522-4.478-10-10-10h-57.09\r\n\t\t\t\tc-5.523,0-10,4.478-10,10v69.147H104.718c-5.523,0-10,4.478-10,10v128.416l-42.15,12.509c-4.244,1.26-7.155,5.16-7.155,9.587\r\n\t\t\t\tc0,41.282,25.371,97.668,75.427,167.759H79.526c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h60.983h36.869h79.148h116.018\r\n\t\t\t\tc3.158,0,6.132-1.492,8.019-4.024c57.781-77.543,87.078-139.36,87.078-183.734C467.642,277.523,464.73,273.623,460.486,272.363z\r\n\t\t\t\t M237.982,62.291h37.09V72H261c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h14.072v29.438h-37.09V62.291z M114.718,141.438\r\n\t\t\t\th113.264h57.09h113.264V253.06l-139.018-40.398c-1.855-0.536-3.829-0.512-5.679,0.028l-138.921,40.371V141.438z M367.51,449.709\r\n\t\t\t\tH266.527v-97.693c0-5.522-4.478-10-10-10c-5.523,0-10,4.478-10,10v97.693h-69.148h-31.834\r\n\t\t\t\tC96.333,382.96,68.92,327.827,65.728,289.32l190.799-56.625l190.8,56.625C444.135,327.826,416.722,382.959,367.51,449.709z\"/>\r\n\t\t\t<path d=\"M35.585,449.709H10c-5.523,0-10,4.478-10,10c0,5.522,4.477,10,10,10h25.585c5.523,0,10-4.478,10-10\r\n\t\t\t\tC45.585,454.187,41.108,449.709,35.585,449.709z\"/>\r\n\t\t\t<path d=\"M445.964,449.709h-19.463c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10h19.463c5.522,0,10-4.478,10-10\r\n\t\t\t\tC455.964,454.187,451.486,449.709,445.964,449.709z\"/>\r\n\t\t\t<path d=\"M502,449.709h-12.164c-5.522,0-10,4.478-10,10c0,5.522,4.478,10,10,10H502c5.522,0,10-4.478,10-10\r\n\t\t\t\tC512,454.187,507.522,449.709,502,449.709z\"/>\r\n\t\t\t<path d=\"M246.527,268.976v35.032c0,5.522,4.477,10,10,10c5.522,0,10-4.478,10-10v-35.032c0-5.523-4.477-10-10-10\r\n\t\t\t\tC251.004,258.976,246.527,263.454,246.527,268.976z\"/>\r\n\t\t\t<path d=\"M152.726,165.555c-6.587,0-11.946,5.359-11.946,11.946c0,6.587,5.359,11.946,11.946,11.946\r\n\t\t\t\tc6.587,0,11.946-5.359,11.946-11.946C164.672,170.914,159.313,165.555,152.726,165.555z\"/>\r\n\t\t\t<path d=\"M205.275,165.555c-6.587,0-11.946,5.359-11.946,11.946c0,6.587,5.359,11.946,11.946,11.946\r\n\t\t\t\tc6.587,0,11.946-5.359,11.946-11.946C217.221,170.914,211.863,165.555,205.275,165.555z\"/>\r\n\t\t\t<path d=\"M307.13,189.447c6.587,0,11.946-5.359,11.946-11.946c0-6.587-5.359-11.946-11.946-11.946\r\n\t\t\t\tc-6.587,0-11.946,5.359-11.946,11.946C295.184,184.088,300.543,189.447,307.13,189.447z\"/>\r\n\t\t\t<path d=\"M267.824,177.501c0-6.587-5.358-11.946-11.946-11.946c-6.588,0-11.946,5.359-11.946,11.946\r\n\t\t\t\tc0,6.587,5.359,11.946,11.946,11.946C262.465,189.447,267.824,184.088,267.824,177.501z\"/>\r\n\t\t\t<path d=\"M360.328,189.447c6.587,0,11.946-5.359,11.946-11.946c0-6.587-5.359-11.946-11.946-11.946\r\n\t\t\t\tc-6.587,0-11.946,5.359-11.946,11.946C348.382,184.088,353.741,189.447,360.328,189.447z\"/>\r\n\t\t\t<path d=\"M309.433,299.31l81.743,24.652c0.963,0.29,1.936,0.429,2.892,0.429c4.296,0,8.266-2.791,9.57-7.115\r\n\t\t\t\tc1.594-5.289-1.4-10.868-6.687-12.463l-81.743-24.652c-5.289-1.595-10.867,1.399-12.462,6.687\r\n\t\t\t\tC301.151,292.136,304.145,297.715,309.433,299.31z\"/>\r\n\t\t</g>\r\n\t</g>\r\n</g>\r\n</svg>");

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

    // Return number of ships remaining
    function getRemainingShips() {        
        // reduce method accumulates sum of numbers in arr
        return shipsArr.reduce((total, ship) => {
            // add one for every ship in array of 5 items thats not sunk
            if (!ship.isSunk()) {
                total += 1;
            }
            return total;
        }, 0); // 0 = initial value - i.e. count from 0 upwards
    }

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
        getRemainingShips,
        getShipTypes,
        placeShip,
        receiveAttack,        
        types
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

    function getRemainingShips() {
        return board.getRemainingShips();
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
        getRemainingShips,     
        getShipList,
        placeShipsRandomly,
        shipLengthArray,
        shipList
    }
}

// Inherit from Player factory
const Computer = () => {
    const proto = Player();
    let nextTarget;

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
        // console.log(`HIT COORDS is: ${hitCoords}`);
        // console.log(`Remaining hits is: ${remainingHitsArr}`);
        // console.log(`ADJACENT TARGETS is: ${adjacentTargets}`);
        // console.log(`LINEAR TARGETS is: ${linearTargets}`);        

        // 1. if no valid targets attack random coord
        if (hitCoords.length === 0 && adjacentTargets.length === 0 && linearTargets.length === 0 && remainingHitsArr.length === 0) {
            return randomAttack(enemyBoard);
        }

        // 2. if a hit exists, store it's adjacent coords in both axis in new arr
        if (hitCoords.length === 1 && adjacentTargets.length === 0 && linearTargets.length === 0) {
            const previousHit = hitCoords[0];
            const nextPossibleTargets = enemyBoard.getAllValidAdjacentCoords(previousHit, enemyBoard);
            nextPossibleTargets.forEach((target) => adjacentTargets.push(target));
            // console.log('condition 2 - PUSH TO ADJACENT');
        }

        // 3. if there are 2 hit coords, store the coords within same axis in new arr (linear)
        if (hitCoords.length > 1) {
            const startPos = hitCoords[0];
            const endPos = hitCoords[hitCoords.length - 1];
            const nextPossibleLinearTargets = enemyBoard.getAllValidLinearCoords(startPos, endPos);
            nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));              
            // console.log('condition 3 - PUSH TO LINEAR');
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
                //console.log("Condition 4 - PUSH REMAINING HITS TO ADJACENT");
            } else { //else target linear
                nextPossibleLinearTargets.forEach((target) => linearTargets.push(target));
                //console.log("Condition 4 - PUSH REMAINING HITS TO LINEAR");
            }
        }
       
        // if there is a linear target the last one from array will be nextTarget, 
        // else target the last adjacent targets
        if (linearTargets.length > 0) {
            nextTarget = linearTargets.pop();
        } else {
            nextTarget = adjacentTargets.pop();
        }
        
        // console.log(`next target is ${nextTarget}`);
        // console.log(`----------------------------`);
        
        const attackResult = proto.attack(nextTarget, enemyBoard); // returns hit sunk or miss strings
        handleAttackResults(attackResult, nextTarget);
       
        return attackResult;
    }

    function randomAttack(enemyBoard) {
        nextTarget = proto.genRandomCoords();         
        const attackResult = proto.attack(nextTarget, enemyBoard);
        handleAttackResults(attackResult, nextTarget);
        return attackResult;
    }

    function getCoords() {
        return nextTarget;
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
/* harmony export */   renderRemainingShips: () => (/* binding */ renderRemainingShips),
/* harmony export */   renderTurnTracker: () => (/* binding */ renderTurnTracker),
/* harmony export */   renderVictoryScreen: () => (/* binding */ renderVictoryScreen)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules/game.js");
/* harmony import */ var _utility_parseCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/parseCoords */ "./src/modules/utility/parseCoords.js");
/* harmony import */ var _utility_getName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/getName */ "./src/modules/utility/getName.js");
/* harmony import */ var _assets_battleship_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/battleship-icon.svg */ "./src/assets/battleship-icon.svg");





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
                    square.innerHTML = _assets_battleship_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
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
    remainingShipCounter.id = 'player-ship-counter';    
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
    remainingShipCounter.id = 'enemy-ship-counter';    
    enemyHeading.textContent = 'Enemy board';
    enemyContainer.appendChild(enemyBoard);
    enemyContainer.appendChild(enemyHeading);
    enemyContainer.appendChild(remainingShipCounter);    
}

const renderRemainingShips = (playerAmount, enemyAmount) => {
    const remainingPlayerShipsCounter = document.querySelector('#player-ship-counter');
    remainingPlayerShipsCounter.textContent = `${playerAmount} ships remaining`;
    const remainingEnemyShipsCounter = document.querySelector('#enemy-ship-counter');
    remainingEnemyShipsCounter.textContent = `${enemyAmount} ships remaining`;
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
    console.clear();
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
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
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
    _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());

    if (attackResult === 'Game Over') {
        declareWinner('Player'); // victory/defeat screen
    } else if (attackResult === 'miss') {
        resultString = `${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(coords)} was a ${attackResult}`;
        turn = 'Enemy';
        enemyAttack();
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
    } else if (attackResult === 'hit') {
        resultString = `${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(coords)} was a ${attackResult}! Take another shot`;
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
    } else if (attackResult === 'sunk') {
        for (let i = 0; computer.getShipList().length > i; i++) {
            let shipType = computer.getShipList()[i];
            // boardval includes ship class id
            if (boardVal.includes((0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipType).id)) {
                resultString = `You ${attackResult} their ${shipType}! Take another shot`;
            }
        }
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();   
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());     
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
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
            return;
        } else if (attackResult === 'hit') {
            resultString = `Computer's shot on ${(0,_utility_parseCoords__WEBPACK_IMPORTED_MODULE_3__.convertCoordToId)(computer.getCoords())} was a ${attackResult}`;
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
        } else if (attackResult === 'sunk') {
            for (let i = 0; player.getShipList().length > i; i++) {
                let shipType = player.getShipList()[i];
                // if boardval includes ship class id
                const [row, col] = computer.getCoords();
                const boardVal = player.getBoardArray()[row][col];
                if (boardVal.toString().includes((0,_factories_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipType).id)) {
                    resultString = `Your ${shipType} has been ${attackResult}!`;
                }
            }
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderTurnTracker();
            _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());
        }
        
        // Recursively call attack - random attack returns attackResult
        enemyAttack(computer.smartAttack(player.getBoardObj()));
                
        // update DOM boards
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderBoardUpdates(computer.getBoardArray(), player.getBoardArray());
        _dom__WEBPACK_IMPORTED_MODULE_2__.renderRemainingShips(player.getRemainingShips(), computer.getRemainingShips());       

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FB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LFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ2pCO0FBQ3RCO0FBQ0Esb0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvYXNzZXRzL2JhdHRsZXNoaXAtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvZ2V0TmFtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL3V0aWxpdHkvcGFyc2VDb29yZHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJvYXJkcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgIFxyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxyXG4gICAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdhbWVib2FyZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDI1cHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDI1cHgpIDAuNWZyOyAgICBcclxuICAgIGdhcDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZmNiO1xyXG59XHJcblxyXG4uc3F1YXJlOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xyXG59XHJcblxyXG4ubGVnZW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxufVxyXG5cclxuLm1lbnUtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTZyZW07XHJcbiAgICBwYWRkaW5nOiAyNXB4OyAgICBcclxufVxyXG5cclxuLmFzay1uYW1lLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA0NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMjM4cHg7XHJcbn1cclxuXHJcbi5zaGlwLXBsYWNlbWVudC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcclxufVxyXG5cclxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5zaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XHJcbn1cclxuXHJcbi5oaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnN1bmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmE2YTtcclxufVxyXG5cclxuLm1pc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxufVxyXG5cclxuLmJ0biB7ICAgIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7ICAgIFxyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3RhcnQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjgyZjY7XHJcbn1cclxuXHJcbi5zdGFydC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBsYWNlLXNoaXBzLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xyXG59XHJcblxyXG4ucmVzZXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUucGxheWVyIHtcclxuICAgIGNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zaGlwLWNvdW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udHVybnRyYWNrZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ2FtZS1vdmVyLW1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgYm90dG9tOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDAwMzQ0O1xyXG59XHJcblxyXG4uZ2FtZS1vdmVyLW1vZGFsIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5yZXR1cm4tbWVudS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcclxufVxyXG4ucmV0dXJuLW1lbnUtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTUzYmU7XHJcbn1cclxuXHJcbi5wbGF5LWFnYWluLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xyXG59XHJcbi5wbGF5LWFnYWluLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ4ZDBkO1xyXG59XHJcblxyXG4uZC1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ibHVyIHtcclxuICAgIGZpbHRlcjogYmx1cigycHgpO1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtY2FyZCB7ICAgICAgICBcclxuICAgICAgICB3aWR0aDogMzByZW07XHJcbiAgICB9XHJcbiAgICAuZ2FtZWJvYXJkIHsgICAgICAgIFxyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCAzNXB4KTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCkgMC41ZnI7ICAgIFxyXG4gICAgICAgIGdhcDogM3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDMzN3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTEyNHB4KSB7XHJcbiAgICAudHVybi10cmFja2VyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjI0cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1lbnUtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZzogNDVweDtcclxuICAgICAgICB3aWR0aDogNDByZW07XHJcbiAgICB9XHJcbiAgICAuZ2FtZWJvYXJkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpIDAuNWZyOyAgICBcclxuICAgICAgICBnYXA6IDNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnNxdWFyZSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH0gICAgXHJcbiAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3VwIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtC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ekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNkNBQTZDO1FBQzdDLDBDQUEwQztRQUMxQyxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNkNBQTZDO1FBQzdDLDBDQUEwQztRQUMxQyxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExODI3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgICAgXFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5nYW1lYm9hcmQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgMjVweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KSAwLjVmcjsgICAgXFxyXFxuICAgIGdhcDogM3B4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3F1YXJlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZTpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVnZW5kIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxNnJlbTtcXHJcXG4gICAgcGFkZGluZzogMjVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5hc2stbmFtZS1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiA0NXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgd2lkdGg6IDIzOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcC1wbGFjZW1lbnQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi52YWxpZC1zaGlwLXBsYWNlbWVudCB7ICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyLCAyMjEsIDIyNCwgMC44MTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW52YWxpZC1zaGlwLXBsYWNlbWVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QzMjM7XFxyXFxufVxcclxcblxcclxcbi5oaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VuayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZhNmE7XFxyXFxufVxcclxcblxcclxcbi5taXNzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7ICAgIFxcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncm91cCAuYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdGFydC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGE1M2JlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wbGFjZS1zaGlwcy1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiYzBkO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2QxNDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAtMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlLnBsYXllciB7XFxyXFxuICAgIGNvbG9yOiAjMjNkMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGUuZW5lbXkge1xcclxcbiAgICBjb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtY291bnRlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi50dXJuLXRyYWNrZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50dXJudHJhY2tlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtY2FyZCB7ICAgICAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZWJvYXJkIHsgICAgICAgIFxcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDM1cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpIDAuNWZyOyAgICBcXHJcXG4gICAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMzM3cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjExMjRweCkge1xcclxcbiAgICAudHVybi10cmFja2VyLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTYyNHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubWVudS1jYXJkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQ1cHg7XFxyXFxuICAgICAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNjBweCkgMC41ZnI7ICAgIFxcclxcbiAgICAgICAgZ2FwOiAzcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zcXVhcmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgfSAgICBcXHJcXG4gICAgLmJ0bi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ0bi1ncm91cCAuYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJpc28tODg1OS0xXFxcIj8+XFxyXFxuPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT5cXHJcXG48c3ZnIGZpbGw9XFxcIiMwMDAwMDBcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgXFxyXFxuXFx0IHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cXHJcXG48Zz5cXHJcXG5cXHQ8Zz5cXHJcXG5cXHRcXHQ8Zz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNNDYwLjQ4NiwyNzIuMzYzbC00Mi4xNS0xMi41MDlWMTMxLjQzOGMwLTUuNTIyLTQuNDc4LTEwLTEwLTEwSDI5NS4wNzJWNTIuMjkxYzAtNS41MjItNC40NzgtMTAtMTAtMTBoLTU3LjA5XFxyXFxuXFx0XFx0XFx0XFx0Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjY5LjE0N0gxMDQuNzE4Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjEyOC40MTZsLTQyLjE1LDEyLjUwOWMtNC4yNDQsMS4yNi03LjE1NSw1LjE2LTcuMTU1LDkuNTg3XFxyXFxuXFx0XFx0XFx0XFx0YzAsNDEuMjgyLDI1LjM3MSw5Ny42NjgsNzUuNDI3LDE2Ny43NTlINzkuNTI2Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoNjAuOTgzaDM2Ljg2OWg3OS4xNDhoMTE2LjAxOFxcclxcblxcdFxcdFxcdFxcdGMzLjE1OCwwLDYuMTMyLTEuNDkyLDguMDE5LTQuMDI0YzU3Ljc4MS03Ny41NDMsODcuMDc4LTEzOS4zNiw4Ny4wNzgtMTgzLjczNEM0NjcuNjQyLDI3Ny41MjMsNDY0LjczLDI3My42MjMsNDYwLjQ4NiwyNzIuMzYzelxcclxcblxcdFxcdFxcdFxcdCBNMjM3Ljk4Miw2Mi4yOTFoMzcuMDlWNzJIMjYxYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMTQuMDcydjI5LjQzOGgtMzcuMDlWNjIuMjkxeiBNMTE0LjcxOCwxNDEuNDM4XFxyXFxuXFx0XFx0XFx0XFx0aDExMy4yNjRoNTcuMDloMTEzLjI2NFYyNTMuMDZsLTEzOS4wMTgtNDAuMzk4Yy0xLjg1NS0wLjUzNi0zLjgyOS0wLjUxMi01LjY3OSwwLjAyOGwtMTM4LjkyMSw0MC4zNzFWMTQxLjQzOHogTTM2Ny41MSw0NDkuNzA5XFxyXFxuXFx0XFx0XFx0XFx0SDI2Ni41Mjd2LTk3LjY5M2MwLTUuNTIyLTQuNDc4LTEwLTEwLTEwYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjk3LjY5M2gtNjkuMTQ4aC0zMS44MzRcXHJcXG5cXHRcXHRcXHRcXHRDOTYuMzMzLDM4Mi45Niw2OC45MiwzMjcuODI3LDY1LjcyOCwyODkuMzJsMTkwLjc5OS01Ni42MjVsMTkwLjgsNTYuNjI1QzQ0NC4xMzUsMzI3LjgyNiw0MTYuNzIyLDM4Mi45NTksMzY3LjUxLDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTM1LjU4NSw0NDkuNzA5SDEwYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMjUuNTg1YzUuNTIzLDAsMTAtNC40NzgsMTAtMTBcXHJcXG5cXHRcXHRcXHRcXHRDNDUuNTg1LDQ1NC4xODcsNDEuMTA4LDQ0OS43MDksMzUuNTg1LDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTQ0NS45NjQsNDQ5LjcwOWgtMTkuNDYzYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzgsMTAsMTAsMTBoMTkuNDYzYzUuNTIyLDAsMTAtNC40NzgsMTAtMTBcXHJcXG5cXHRcXHRcXHRcXHRDNDU1Ljk2NCw0NTQuMTg3LDQ1MS40ODYsNDQ5LjcwOSw0NDUuOTY0LDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTUwMiw0NDkuNzA5aC0xMi4xNjRjLTUuNTIyLDAtMTAsNC40NzgtMTAsMTBjMCw1LjUyMiw0LjQ3OCwxMCwxMCwxMEg1MDJjNS41MjIsMCwxMC00LjQ3OCwxMC0xMFxcclxcblxcdFxcdFxcdFxcdEM1MTIsNDU0LjE4Nyw1MDcuNTIyLDQ0OS43MDksNTAyLDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTI0Ni41MjcsMjY4Ljk3NnYzNS4wMzJjMCw1LjUyMiw0LjQ3NywxMCwxMCwxMGM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwdi0zNS4wMzJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFxcclxcblxcdFxcdFxcdFxcdEMyNTEuMDA0LDI1OC45NzYsMjQ2LjUyNywyNjMuNDU0LDI0Ni41MjcsMjY4Ljk3NnpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMTUyLjcyNiwxNjUuNTU1Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NkMxNjQuNjcyLDE3MC45MTQsMTU5LjMxMywxNjUuNTU1LDE1Mi43MjYsMTY1LjU1NXpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMjA1LjI3NSwxNjUuNTU1Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NkMyMTcuMjIxLDE3MC45MTQsMjExLjg2MywxNjUuNTU1LDIwNS4yNzUsMTY1LjU1NXpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMzA3LjEzLDE4OS40NDdjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NmMwLTYuNTg3LTUuMzU5LTExLjk0Ni0xMS45NDYtMTEuOTQ2XFxyXFxuXFx0XFx0XFx0XFx0Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2QzI5NS4xODQsMTg0LjA4OCwzMDAuNTQzLDE4OS40NDcsMzA3LjEzLDE4OS40NDd6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTI2Ny44MjQsMTc3LjUwMWMwLTYuNTg3LTUuMzU4LTExLjk0Ni0xMS45NDYtMTEuOTQ2Yy02LjU4OCwwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2XFxyXFxuXFx0XFx0XFx0XFx0YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZDMjYyLjQ2NSwxODkuNDQ3LDI2Ny44MjQsMTg0LjA4OCwyNjcuODI0LDE3Ny41MDF6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTM2MC4zMjgsMTg5LjQ0N2M2LjU4NywwLDExLjk0Ni01LjM1OSwxMS45NDYtMTEuOTQ2YzAtNi41ODctNS4zNTktMTEuOTQ2LTExLjk0Ni0xMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjLTYuNTg3LDAtMTEuOTQ2LDUuMzU5LTExLjk0NiwxMS45NDZDMzQ4LjM4MiwxODQuMDg4LDM1My43NDEsMTg5LjQ0NywzNjAuMzI4LDE4OS40NDd6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTMwOS40MzMsMjk5LjMxbDgxLjc0MywyNC42NTJjMC45NjMsMC4yOSwxLjkzNiwwLjQyOSwyLjg5MiwwLjQyOWM0LjI5NiwwLDguMjY2LTIuNzkxLDkuNTctNy4xMTVcXHJcXG5cXHRcXHRcXHRcXHRjMS41OTQtNS4yODktMS40LTEwLjg2OC02LjY4Ny0xMi40NjNsLTgxLjc0My0yNC42NTJjLTUuMjg5LTEuNTk1LTEwLjg2NywxLjM5OS0xMi40NjIsNi42ODdcXHJcXG5cXHRcXHRcXHRcXHRDMzAxLjE1MSwyOTIuMTM2LDMwNC4xNDUsMjk3LjcxNSwzMDkuNDMzLDI5OS4zMXpcXFwiLz5cXHJcXG5cXHRcXHQ8L2c+XFxyXFxuXFx0PC9nPlxcclxcbjwvZz5cXHJcXG48L3N2Zz5cIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNoaXBUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApO1xyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZSBzaGlwJ3MgaWQgaW50byB0aGUgYm9hcmQgYXJyYXkgYmV0d2VlbiBpbnB1dCBjb29yZHNcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcykgeyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBjb29yZHMgYmV0d2VlbiBzdGFydCBjb29yZCAmIGVuZCBjb29yZFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBhbW91bnQgb2YgY29vcmRzIGJldHdlZW4gdGhlIDIgZ2l2ZW4gaW5wdXRzXHJcbiAgICAgICAgY29uc3QgY29vcmRzQW1vdW50ID0gYWxsQ29vcmRzLmxlbmd0aDtcclxuICAgICAgICAvLyBHZXQgc2hpcExlbmd0aCAmIGlkIHByb3BzIGZyb20gU2hpcCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIC8vIHB1c2ggc2hpcGxlbmd0aCBvZiBlYWNoIHNoaXAgaW50byBuZXcgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoQXJyYXkgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGhBcnJheS5wdXNoKHNoaXBbdHlwZXNbaV1dLnNoaXBMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2hpcExlbmd0aEFycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGNvb3JkcyBiZXR3ZWVuLCAmIGluY2x1ZGluZywgdHdvIGlucHV0IGNvb3JkcyBlZy4gWzAsMF0sIFswLDNdXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIC8vIGZvcm1hdHMgZWFjaCBpbnB1dCBpbnRvIGFycmF5IHdpdGggMiBpdGVtcyAmIGFzc2lnbnMgdmFyIG5hbWVzIHRvIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIGVuZCBjb29yZCBmcm9tIHN0YXJ0IGNvb3JkICsgc2hpcGxlbmd0aCAmIGRpcmVjdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0RW5kQ29vcmQgKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdztcclxuICAgICAgICBsZXQgZW5kQ29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgLy8gdmVydGljYWwgZ29lcyBkb3dud2FyZHMgaW4gYXJyYXkgaW5kZXggKHVwd2FyZHMgaW4gRE9NKSwgaG9yaXpvbnRhbCBnb2VzIHJpZ2h0d2FyZHNcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGVuZFJvdyArPSBzaGlwTGVuZ3RoIC0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGVuZENvbCArPSBzaGlwTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtlbmRSb3csIGVuZENvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZXMgcGFpciBvZiBjb29yZHMsIGRldGVybWluZXMgd2hldGhlciB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHNlbmRzIGhpdCBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwIG9yIHJlY29yZHMgY29vcmRzIG9mIG1pc3NlZCBzaG90XHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgLy8gU3RvcmUgdmFsdWUgb2YgdGhlIGdpdmVuIGJvYXJkIGFycmF5IGluZGVjZXNcclxuICAgICAgICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmRBcnJbcm93XVtjb2xdO1xyXG4gICAgICAgIC8vIGNvb3JkcyBjb250YWluIGEgc2hpcCBpZiBib2FyZFZhbHVlIGlzIGEgbnVtYmVyLi4uXHJcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpblNoaXAgPSB0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ251bWJlcic7XHJcblxyXG4gICAgICAgIGlmIChjb29yZHNDb250YWluU2hpcCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHRoYXQgc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFt0eXBlc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcE9iai5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgUyB0byByZXByZXNlbnQgU3VuayB0byBlbnRpcmUgc2hpcCBjb29yZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFyci5mb3JFYWNoKChyb3csIHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJbcl1bY10udG9TdHJpbmcoKS5pbmNsdWRlcyhpZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyXVtjXSA9IGAke2lkfVNgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGFuIFggdG8gdmFsdWUgdG8gcmVwcmVzZW50IGEgaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSArPSAnWCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7IC8vIEdhbWUgb3ZlciBoYXMgdG8gcmV0dXJuIGJlZm9yZSBmaW5hbCBzaGlwIHN1bmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkgcmV0dXJuICdzdW5rJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBib2FyZCB2YWx1ZSB0byBNIGZvciBhIG1pc3NcclxuICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gJ00nO1xyXG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRoZSBldmVyeSgpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgdGVzdHMgd2hldGhlciBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBJdCByZXR1cm5zIGEgQm9vbGVhbiB2YWx1ZS5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzQXJyLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIHNoaXBzIHJlbWFpbmluZ1xyXG4gICAgZnVuY3Rpb24gZ2V0UmVtYWluaW5nU2hpcHMoKSB7ICAgICAgICBcclxuICAgICAgICAvLyByZWR1Y2UgbWV0aG9kIGFjY3VtdWxhdGVzIHN1bSBvZiBudW1iZXJzIGluIGFyclxyXG4gICAgICAgIHJldHVybiBzaGlwc0Fyci5yZWR1Y2UoKHRvdGFsLCBzaGlwKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBvbmUgZm9yIGV2ZXJ5IHNoaXAgaW4gYXJyYXkgb2YgNSBpdGVtcyB0aGF0cyBub3Qgc3Vua1xyXG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgICAgIH0sIDApOyAvLyAwID0gaW5pdGlhbCB2YWx1ZSAtIGkuZS4gY291bnQgZnJvbSAwIHVwd2FyZHNcclxuICAgIH1cclxuXHJcbiAgICAvLyBhcmUgY29vcmRzIGVtcHR5LCB3aXRoaW4gYm9hcmRcclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzaGlwIGNhbiBwbGFjZSBiZXR3ZWVuIHR3byBnaXZlbiBjb29yZHNcclxuICAgIGZ1bmN0aW9uIGNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzLmV2ZXJ5KChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpICYmIGFyZUNvb3Jkc0VtcHR5KGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKHJvdyA+PSAxMCB8fCByb3cgPCAwIHx8IGNvbCA+PSAxMCB8fCBjb2wgPCAgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgZW1wdHlcclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc0VtcHR5KGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNVbnBsYXllZChjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICcnIHx8IHR5cGVvZiBib2FyZEFycltyb3ddW2NvbF0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgY29vcmRzIGJvdGggZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllcyByZXR1cm4gdHJ1ZVxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZChjb29yZHMpIHtcclxuICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkcykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIWFyZUNvb3Jkc0VtcHR5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzTWlzcyhjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICdNJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRha2UgYSBjb29yZCBhbmQgZ2V0IGFsbCBlbXB0eSBjb29yZHMgd2l0aGluIGJvYXJkIHRoYXQgYXJlIGFib3ZlLCBiZWxvdywgbGVmdCAmIHJpZ2h0IG9mIGNvb3JkXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKGNvb3JkcywgYm9hcmRPYmopIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93ICsgMSwgY29sXSk7XHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3cgLSAxLCBjb2xdKTtcclxuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3JvdywgY29sICsgMV0pO1xyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93LCBjb2wgLSAxXSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBmaWx0ZXIoKSBtZXRob2Qgb2YgQXJyYXkgaW5zdGFuY2VzIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIGEgZ2l2ZW4gYXJyYXksIGZpbHRlcmVkIGRvd24gdG8ganVzdCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cclxuICAgICAgICAvLyBmaWx0ZXIgb3V0IGNvb3JkcyB0aGF0IGFyZSBlbXB0eSBvciBvdXRzaWRlIGJvYXJkXHJcbiAgICAgICAgY29uc3QgdmFsaWRNb3ZlcyA9IHBvc3NpYmxlTW92ZXMuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFib2FyZE9iaiA/IGFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQoY29vcmQpOiBib2FyZE9iai5hcmVDb29yZHNFbXB0eVdpdGhpbkJvYXJkKGNvb3JkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkTW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSAyIGNvb3JkcyBhbmQgcmV0dXJuIGFsbCB2YWxpZCBjb29yZHMgYWxvbmcgc2FtZSBheGlzIFxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsVmFsaWRMaW5lYXJDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclRhcmdldHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGNvbnN0IFtlbmRSb3csIGVuZENvbF0gPSBlbmRQb3M7XHJcbiAgICAgICAgbGV0IGNvb3JkO1xyXG5cclxuICAgICAgICBpZiAoZW5kUm93ID09PSBzdGFydFJvdykgeyAvL3NhbWUgcm93XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgICAgIC8vIExvb3AgaW4gcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyByb3dzLCBhZGQgZW1wdHkgY29vcmRzIHRvIHRhcmdldHMgYXJyYXkgYW5kIGJyZWFrIG91dCBpZiBjb29yZHMgYXJlIG91dHNpZGUgYm9hcmQgYm91bmRhcmllcyBvciBhIG1pc3NlZCBzaG90XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtzdGFydFJvdywgY3VycmVudENvbCsrXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhazsgLy8gYnJlYWsgc3RhdGVtZW50IHRlcm1pbmF0ZXMgY3VycmVudCBsb29wXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudENvbCA9IHN0YXJ0Q29sO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbc3RhcnRSb3csIGN1cnJlbnRDb2wtLV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAvLyBzYW1lIGNvbHVtblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgICAgICAvLyBMb29wIGluIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSBkaXJlY3Rpb24gYWxvbmcgY29sdW1uc1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbY3VycmVudFJvdysrLCBzdGFydENvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbY3VycmVudFJvdy0tLCBzdGFydENvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVhclRhcmdldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgICAgIGFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQsXHJcbiAgICAgICAgYXJlQ29vcmRzV2l0aGluQm9hcmQsXHJcbiAgICAgICAgY2FuUGxhY2VTaGlwQmV0d2VlbixcclxuICAgICAgICBjcmVhdGVCb2FyZEFycmF5LFxyXG4gICAgICAgIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSxcclxuICAgICAgICBnZXRBbGxDb29yZHMsXHJcbiAgICAgICAgZ2V0QWxsTnVtc0JldHdlZW4sXHJcbiAgICAgICAgZ2V0QXJyYXksXHJcbiAgICAgICAgZ2V0QWxsVmFsaWRBZGphY2VudENvb3JkcyxcclxuICAgICAgICBnZXRBbGxWYWxpZExpbmVhckNvb3JkcyxcclxuICAgICAgICBnZXRFbmRDb29yZCxcclxuICAgICAgICBnZXRSZW1haW5pbmdTaGlwcyxcclxuICAgICAgICBnZXRTaGlwVHlwZXMsXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssICAgICAgICBcclxuICAgICAgICB0eXBlc1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IGdldFNoaXBMZW5ndGhBcnJheSgpOyAgIFxyXG4gICAgY29uc3Qgc2hpcExpc3QgPSBnZXRTaGlwTGlzdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkT2JqKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCb2FyZEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5nZXRBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJlbWFpbmluZ1NoaXBzKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5nZXRSZW1haW5pbmdTaGlwcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ3N1Ym1hcmluZScsICdjcnVpc2VyJywgJ3BhdHJvbEJvYXQnXVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldFNoaXBUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFs1LCA0LCAzLCAzLCAyXSBcclxuICAgIGZ1bmN0aW9uIGdldFNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuY3JlYXRlU2hpcExlbmd0aEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdFBsYXkgPSBpc1JlcGVhdFBsYXkoY29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICBpZiAocmVwZWF0UGxheSkgcmV0dXJuICdyZXBlYXQnO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkcyBoYXZlIGJlZW4gdGFyZ2V0dGVkIGFscmVhZHlcclxuICAgIGZ1bmN0aW9uIGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQXJyID0gZW5lbXlCb2FyZC5nZXRBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChib2FyZFZhbHVlID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIDIgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiAwLTkgYW5kIHJldHVybiBpbiBhcnJheVxyXG4gICAgZnVuY3Rpb24gZ2VuUmFuZG9tQ29vcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlY3Vyc2l2ZSBzaGlwIHBsYWNlbWVudCAtIHBvcCBuZXcgc2hpcHR5cGUgJiBzaGlwbGVuZ3RoIHVudGlsIGFsbCBzaGlwcyBwbGFjZWRcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwVHlwZSA9IHNoaXBMaXN0LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzdGFydFBvcywgZGlyZWN0aW9uLCBlbmRQb3MsIHZhbGlkU2hpcFBsYWNlbWVudDtcclxuXHJcbiAgICAgICAgLy8gd2hpbGUgdGhlcmVzIG5vIHZhbGlkIHNoaXAgcGxhY2VtZW50IGFzc2lnbiB2YWx1ZXMgdG8gdmFycyBmb3IgdXNlIGluIGZ1bmN0aW9ucyB1bnRpbCBzaGlwVHlwZSAmIHNoaXBMZW5ndGggcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIHdoaWxlICghdmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gZ2VuUmFuZG9tQ29vcmRzKCk7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBib2FyZC5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2ssXHJcbiAgICAgICAgZ2VuUmFuZG9tQ29vcmRzLFxyXG4gICAgICAgIGdldEJvYXJkQXJyYXksXHJcbiAgICAgICAgZ2V0Qm9hcmRPYmosICAgXHJcbiAgICAgICAgZ2V0UmVtYWluaW5nU2hpcHMsICAgICBcclxuICAgICAgICBnZXRTaGlwTGlzdCxcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHksXHJcbiAgICAgICAgc2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIHNoaXBMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaGVyaXQgZnJvbSBQbGF5ZXIgZmFjdG9yeVxyXG5jb25zdCBDb21wdXRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3RvID0gUGxheWVyKCk7XHJcbiAgICBsZXQgbmV4dFRhcmdldDtcclxuXHJcbiAgICBjb25zdCBoaXRDb29yZHMgPSBbXTtcclxuICAgIGNvbnN0IGFkamFjZW50VGFyZ2V0cyA9IFtdO1xyXG4gICAgY29uc3QgbGluZWFyVGFyZ2V0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyQXJyVmFscyhhcnIpIHtcclxuICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIGFyci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY2FuIGJvYXJkIGFycmF5IGFuZCBmaW5kIGNlbGxzIHRoYXQgY29udGFpbiB0YXJnZXQgaS5lICdYJ1xyXG4gICAgY29uc3QgZmluZDJkQ29vcmRpbmF0ZXMgPSAoYm9hcmRBcnIsIHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb3Jkc0FyciA9IFtdO1xyXG4gICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGopID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udG9TdHJpbmcoKS5pbmNsdWRlcyh0YXJnZXQsIDEpKSB7XHJcbiAgICAgICAgICAgICAgY29vcmQgPSBbaSxqXTtcclxuICAgICAgICAgICAgICBjb29yZHNBcnIucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvb3Jkc0FycjtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIG9uIGhpdCBhZGQgdGhlIGNvb3JkIHRvIGFycmF5LCBvbiBzdW5rIGNsZWFyIGFycmF5c1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIGNvb3Jkcykge1xyXG4gICAgICAgIC8vIGlmIGF0dGFjayByZXN1bHQgaXMgYSBoaXQsIHN0b3JlIGluIGFyclxyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSBoaXRDb29yZHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykge1xyXG4gICAgICAgICAgICBjbGVhckFyclZhbHMoaGl0Q29vcmRzKTtcclxuICAgICAgICAgICAgY2xlYXJBcnJWYWxzKGFkamFjZW50VGFyZ2V0cyk7XHJcbiAgICAgICAgICAgIGNsZWFyQXJyVmFscyhsaW5lYXJUYXJnZXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc21hcnRBdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IGVuZW15Qm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7IC8vIGFrYSBwbGF5ZXIgYm9hcmRcclxuICAgICAgICBsZXQgcmVtYWluaW5nSGl0c0FyciA9IGZpbmQyZENvb3JkaW5hdGVzKGVuZW15Qm9hcmRBcnIsICdYJyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSElUIENPT1JEUyBpczogJHtoaXRDb29yZHN9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFJlbWFpbmluZyBoaXRzIGlzOiAke3JlbWFpbmluZ0hpdHNBcnJ9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEFESkFDRU5UIFRBUkdFVFMgaXM6ICR7YWRqYWNlbnRUYXJnZXRzfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBMSU5FQVIgVEFSR0VUUyBpczogJHtsaW5lYXJUYXJnZXRzfWApOyAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIDEuIGlmIG5vIHZhbGlkIHRhcmdldHMgYXR0YWNrIHJhbmRvbSBjb29yZFxyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID09PSAwICYmIGFkamFjZW50VGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgbGluZWFyVGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgcmVtYWluaW5nSGl0c0Fyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIGlmIGEgaGl0IGV4aXN0cywgc3RvcmUgaXQncyBhZGphY2VudCBjb29yZHMgaW4gYm90aCBheGlzIGluIG5ldyBhcnJcclxuICAgICAgICBpZiAoaGl0Q29vcmRzLmxlbmd0aCA9PT0gMSAmJiBhZGphY2VudFRhcmdldHMubGVuZ3RoID09PSAwICYmIGxpbmVhclRhcmdldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0ID0gaGl0Q29vcmRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKHByZXZpb3VzSGl0LCBlbmVteUJvYXJkKTtcclxuICAgICAgICAgICAgbmV4dFBvc3NpYmxlVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGFkamFjZW50VGFyZ2V0cy5wdXNoKHRhcmdldCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29uZGl0aW9uIDIgLSBQVVNIIFRPIEFESkFDRU5UJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzLiBpZiB0aGVyZSBhcmUgMiBoaXQgY29vcmRzLCBzdG9yZSB0aGUgY29vcmRzIHdpdGhpbiBzYW1lIGF4aXMgaW4gbmV3IGFyciAobGluZWFyKVxyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGhpdENvb3Jkc1swXTtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gaGl0Q29vcmRzW2hpdENvb3Jkcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFBvc3NpYmxlTGluZWFyVGFyZ2V0cyA9IGVuZW15Qm9hcmQuZ2V0QWxsVmFsaWRMaW5lYXJDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBsaW5lYXJUYXJnZXRzLnB1c2godGFyZ2V0KSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzIC0gUFVTSCBUTyBMSU5FQVInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIGlmIGFycmF5cyBoYXZlIGJlZW4gY2xlYXJlZCBhZnRlciBzaGlwIHN1bmsgYnV0IGJvYXJkIGFycmF5IHN0aWxsIGNvbnRhaW4gaGl0cyAoeClcclxuICAgICAgICBpZiAocmVtYWluaW5nSGl0c0Fyci5sZW5ndGggPiAwICYmIGFkamFjZW50VGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgbGluZWFyVGFyZ2V0cy5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcmVtYWluaW5nSGl0c0FyclswXTtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gcmVtYWluaW5nSGl0c0FycltyZW1haW5pbmdIaXRzQXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBsaW5lYXIgdGFyZ2V0cywgZmluZCB0aGUgYWRqYWNlbnQgdGFyZ2V0cyBmb3IgZWFjaCByZW1haW5pbmcgaGl0XHJcbiAgICAgICAgICAgIGlmIChuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXQgPSByZW1haW5pbmdIaXRzQXJyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFBvc3NpYmxlQWRqYWNlbnRUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKHByZXZpb3VzSGl0LCBlbmVteUJvYXJkKTtcclxuICAgICAgICAgICAgICAgIG5leHRQb3NzaWJsZUFkamFjZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGFkamFjZW50VGFyZ2V0cy5wdXNoKHRhcmdldCkpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmRpdGlvbiA0IC0gUFVTSCBSRU1BSU5JTkcgSElUUyBUTyBBREpBQ0VOVFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy9lbHNlIHRhcmdldCBsaW5lYXJcclxuICAgICAgICAgICAgICAgIG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBsaW5lYXJUYXJnZXRzLnB1c2godGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29uZGl0aW9uIDQgLSBQVVNIIFJFTUFJTklORyBISVRTIFRPIExJTkVBUlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGluZWFyIHRhcmdldCB0aGUgbGFzdCBvbmUgZnJvbSBhcnJheSB3aWxsIGJlIG5leHRUYXJnZXQsIFxyXG4gICAgICAgIC8vIGVsc2UgdGFyZ2V0IHRoZSBsYXN0IGFkamFjZW50IHRhcmdldHNcclxuICAgICAgICBpZiAobGluZWFyVGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBsaW5lYXJUYXJnZXRzLnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBhZGphY2VudFRhcmdldHMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXh0IHRhcmdldCBpcyAke25leHRUYXJnZXR9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2sobmV4dFRhcmdldCwgZW5lbXlCb2FyZCk7IC8vIHJldHVybnMgaGl0IHN1bmsgb3IgbWlzcyBzdHJpbmdzXHJcbiAgICAgICAgaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIG5leHRUYXJnZXQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIG5leHRUYXJnZXQgPSBwcm90by5nZW5SYW5kb21Db29yZHMoKTsgICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2sobmV4dFRhcmdldCwgZW5lbXlCb2FyZCk7XHJcbiAgICAgICAgaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIG5leHRUYXJnZXQpO1xyXG4gICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXh0VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q29vcmRzLFxyXG4gICAgICAgIC4uLnByb3RvLFxyXG4gICAgICAgIHJhbmRvbUF0dGFjayxcclxuICAgICAgICBzbWFydEF0dGFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07IiwiY29uc3QgU2hpcCA9IChzaGlwVHlwZSkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcENsYXNzZXMgPSB7XHJcbiAgICAgICAgY2Fycmllcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiA1LFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNCxcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtYXJpbmU6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMyxcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcnVpc2VyOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0cm9sQm9hdDoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAyLFxyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBoaXRzQW1vdW50ID0gMDtcclxuICAgIGNvbnN0IHsgc2hpcExlbmd0aCwgaWQgfSA9IHNoaXBDbGFzc2VzW3NoaXBUeXBlXTtcclxuXHJcbiAgICAvLyBmdW5jdGlvbiB0aGF0IGluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIOKAmGhpdHPigJkgdG8geW91ciBzaGlwLlxyXG4gICAgZnVuY3Rpb24gaGl0KCkge1xyXG4gICAgICAgIHRoaXMuaGl0c0Ftb3VudCsrO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjYWxjdWxhdGVzIHdoZXRoZXIgaGFzIHN1bmsgYmFzZWQgb24gc2hpcCdzIGxlbmd0aCBhbmQgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZLlxyXG4gICAgZnVuY3Rpb24gaXNTdW5rKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmhpdHNBbW91bnQgPj0gc2hpcExlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hpcENsYXNzZXMsXHJcbiAgICAgICAgc2hpcExlbmd0aCxcclxuICAgICAgICBoaXQsXHJcbiAgICAgICAgaGl0c0Ftb3VudCxcclxuICAgICAgICBpZCxcclxuICAgICAgICBpc1N1bmssXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGlwOyIsImltcG9ydCAqIGFzIEdBTUUgZnJvbSBcIi4vZ2FtZVwiO1xyXG5pbXBvcnQgeyBwYXJzZUNvb3JkcywgY29udmVydENvb3JkVG9JZCB9IGZyb20gXCIuL3V0aWxpdHkvcGFyc2VDb29yZHNcIjtcclxuaW1wb3J0IHsgZ2V0TmFtZSB9IGZyb20gXCIuL3V0aWxpdHkvZ2V0TmFtZVwiO1xyXG5pbXBvcnQgYmF0dGxlU2hpcEljb24gZnJvbSBcIi4uL2Fzc2V0cy9iYXR0bGVzaGlwLWljb24uc3ZnXCI7XHJcblxyXG5jb25zdCByZW5kZXJPdXRlckNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2FyZHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9hcmRzLWNvbnRhaW5lcicpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkc0NvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlck1haW5NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgb3V0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBzXCI7XHJcbiAgICBjb25zdCBzdGFydEJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RhcnRCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAnc3RhcnQtYnRuJyk7XHJcbiAgICBzdGFydEJ0bi5pZCA9IFwic3RhcnRcIjtcclxuICAgIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUnOyAgICBcclxuICAgIG91dGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpOyAgICBcclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoc3RhcnRCdG5Db250YWluZXIpO1xyXG4gICAgc3RhcnRCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xyXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TmFtZU1lbnUpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG59XHJcblxyXG5jb25zdCBibHVyRWxlbWVudCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlQmx1ciA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheU5hbWVNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jYXJkJyk7XHJcbiAgICBjb25zdCBhc2tOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgIFxyXG4gICAgYXNrTmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhc2stbmFtZS1jb250YWluZXInKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGFza05hbWVDb250YWluZXIpO1xyXG4gICAgY29uc3QgbmFtZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbmFtZS1pbnB1dCcpO1xyXG4gICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gYEFkbWlyYWwgb25lIG5hbWU6IGBcclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuaWQgPSAnbmFtZS1pbnB1dCc7XHJcbiAgICBjb25zdCBuYW1lU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBuYW1lU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcclxuICAgIGFza05hbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZvcm0pO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lU3VibWl0KTtcclxuICAgIG5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgZ2V0TmFtZSgpO1xyXG4gICAgICAgICAgICBHQU1FLnN0YXJ0UHJlR2FtZSgpO1xyXG4gICAgICAgICAgICBoaWRlRWxlbWVudChtZW51Q29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykuZGlzYWJsZWQgPSB0cnVlO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgY2hpbGQgZWxzIGZyb20gYSBwYXJlbnQgZWwgJiByZXR1cm5zIHJlbW92ZWQgbm9kZSAtIGUuZy4gb3V0ZXJjb250YWluZXJcclxuY29uc3QgY2xlYXJDaGlsZEVsZW1lbnRzID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGlzcGxheVNoaXBQbGFjZW1lbnQgPSAocGxheWVyKSA9PiB7XHJcbiAgICBjb25zdCBib2FyZE9iaiA9IHBsYXllci5nZXRCb2FyZE9iaigpO1xyXG4gICAgY29uc3QgYm9hcmRBcnIgPSBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpOyAgICBcclxuXHJcbiAgICAvLyAtIHBvcCByZW1vdmVzICYgcmV0dXJucyBsYXN0IGVsZW1lbnQgb2YgYXJyYXkgLSBvbmNlIHRoZSBhcnJheSBpcyBlbXB0eSBpdCB3aWxsIHJldHVybiB1bmRlZmluZWRcclxuICAgIGNvbnN0IHNoaXBUeXBlID0gcGxheWVyLnNoaXBMaXN0LnBvcCgpO1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHBsYXllci5zaGlwTGVuZ3RoQXJyYXkucG9wKCk7XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICBcclxuICAgIC8vIENsaWNrIGEgc3F1YXJlIHRvIHBsYWNlIHNoaXBcclxuICAgIGNvbnN0IHBsYWNlU2hpcENsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAvLyBzcXVhcmUgaWQgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICAvLyBtYWtlIHRoZSBsZWdlbmQgJiB0aGUgZ2FwcyBiZXR3ZWVuIHNxdWFyZXMgbm9uIGNsaWNrYWJsZSlcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgY29vcmRzIGluIGFycmF5IGZvcm1hdFxyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgICAgIC8vIGVuZCBwb3MgY29vcmQgY2FsY2QgZnJvbSBzdGFydCBwb3NcclxuICAgICAgICBjb25zdCBlbmRQb3MgPSBib2FyZE9iai5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTtcclxuICAgICAgICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSBib2FyZE9iai5jYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICAvLyBpZiBjb29yZHMgYXJlIGVtcHR5ICYgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgICAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIGJvYXJkT2JqLnBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcyk7IC8vZS5nICdiYXR0bGVzaGlwJywgWzAsMF0sIFs0LDBdXHJcbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZSAtIHBvcCBhIG5ldyBzaGlwIHR5cGUgaW50byBwbGFjZVNoaXAgZnVuY3Rpb24gdW50aWwgZXZlcnkgc2hpcCBpcyBwbGFjZWRcclxuICAgICAgICAgICAgZGlzcGxheVNoaXBQbGFjZW1lbnQocGxheWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTW91c2UgZW50ZXIgZXZlbnQgaGFuZGxlclxyXG4gICAgY29uc3QgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGxlYXZlIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3aXRjaCBzaGlwIG9yaWVudGF0aW9uIGR1cmluZyBwbGFjZW1lbnQgdG8gcHV0IG9uIHJpZ2h0IGNsaWNrXHJcbiAgICBjb25zdCByb3RhdGVEaXJlY3Rpb24gPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vIHByZXZlbnQgcmlnaHQgY2xpY2sgbWVudSBhcHBlYXJpbmdcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT09IG51bGwpIHsgLy9lLmcuIGlmIGxlZ2VuZFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gJ2hvcml6b250YWwnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbGVhckhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgICAgICBkaXNwbGF5SG92ZXJFZmZlY3QocG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBob3ZlciBlZmZlY3QgdG8gZGl2IHNxdWFyZSBpZCBcclxuICAgIGNvbnN0IGRpc3BsYXlIb3ZlckVmZmVjdCA9IChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcGFyc2VDb29yZHMocG9zaXRpb24pOyAvLyBlZy4gMTBBID0gJ1s5LDBdJ1xyXG4gICAgICAgIGNvbnN0IGVuZFBvcyA9IGJvYXJkT2JqLmdldEVuZENvb3JkKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpOyAvL2VnLiBbOSwwXSwgJ3ZlcnRpY2FsJywgMiA9IFsxMCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGJvYXJkT2JqLmdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBpZiBjb29yZHMgYXJlIGVtcHR5ICYgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgICAgICBjb25zdCB2YWxpZFNoaXBQbGFjZW1lbnQgPSBib2FyZE9iai5jYW5QbGFjZVNoaXBCZXR3ZWVuKHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG5cclxuICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJvYXJkT2JqLmFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkU3RyaW5nID0gY29udmVydENvb3JkVG9JZChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWRTdHJpbmd9YCkuY2xhc3NMaXN0LmFkZCgnaW52YWxpZC1zaGlwLXBsYWNlbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgaG92ZXIgZWZmZWN0cyAoZWcgb24gbW91c2VsZWF2ZSlcclxuICAgIGNvbnN0IGNsZWFySG92ZXJFZmZlY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWxsU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcXVhcmUnKTtcclxuICAgICAgICBhbGxTcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgndmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN0YXJ0R2FtZXBsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgc2hpcHMgYXJlbnQgYWxsIHBsYWNlZCwgZG9uJ3Qgc3RhcnRcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR0FNRS5zdGFydEdhbWVQbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUmVzZXRTaGlwcyA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmNsZWFyKCk7XHJcbiAgICAgICAgR0FNRS5yZXNldFBsYXllck9ianMoKTtcclxuICAgICAgICBHQU1FLnN0YXJ0UHJlR2FtZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRHYW1lQnRuLnRleHRDb250ZW50ID0gJ1N0YXJ0IEdhbWUnO1xyXG4gICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU3RhcnRHYW1lcGxheSk7XHJcblxyXG4gICAgY29uc3QgYXV0b1NoaXBQbGFjZW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGFjZS1zaGlwcy1idG4nKTtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLnRleHRDb250ZW50ID0gJ0F1dG8gcGxhY2UnO1xyXG4gICAgYXV0b1NoaXBQbGFjZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBHQU1FLmF1dG9TaGlwUGxhY2VtZW50KTtcclxuXHJcbiAgICBjb25zdCByZXNldFNoaXBzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXNldFNoaXBzQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdyZXNldC1idG4nKTtcclxuICAgIHJlc2V0U2hpcHNCdG4udGV4dENvbnRlbnQgPSAnUmVzZXQgU2hpcHMnO1xyXG4gICAgcmVzZXRTaGlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJlc2V0U2hpcHMpO1xyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgcmVtb3ZlQmx1cihib2FyZHNDb250YWluZXIpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGJvYXJkc0NvbnRhaW5lcik7IFxyXG5cclxuICAgIGxldCBnYW1lYm9hcmQ7XHJcblxyXG4gICAgLy8gaWYgc2hpcGxlbmd0aCBjb250YWlucyBhIG51bWJlciAvIGlzbnQgdW5kZWZpbmVkLiBpLmUuIGlmIHNoaXBzIHN0aWxsIG5lZWRzIHRvIGJlIHBsYWNlZCBhZGQgY2xpY2sgZXZlbnRcclxuICAgIGlmIChzaGlwTGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBnYW1lYm9hcmQgPSBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsICdwcmUtZ2FtZScsIHBsYWNlU2hpcENsaWNrKTtcclxuICAgICAgICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgaGFuZGxlUGxhY2VTaGlwTW91c2VFbnRlcik7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGFuZGxlUGxhY2VTaGlwTW91c2VMZWF2ZSk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgcm90YXRlRGlyZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7IC8vcmVuZGVyIGJvYXJkIHdpdGhvdXQgZXZlbnRzXHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgaWYgKHNoaXBMZW5ndGgpIHsgLy8gaWYgY29udGFpbnMgYSBudW1cclxuICAgICAgICBpbnN0cnVjdGlvbnMgPSBgUGxhY2UgdGhlICR7c2hpcFR5cGV9LCAke2dldE5hbWUoKX0uIFJpZ2h0IGNsaWNrIHRvIHJvdGF0ZS5gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpbnN0cnVjdGlvbnMgPSBgQ2xpY2sgb24gc3RhcnQgZ2FtZSB0byBiZWdpbiFgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluc3RydWN0aW9uc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpbnN0cnVjdGlvbnNQYXJhLmNsYXNzTGlzdC5hZGQoJ2luc3RydWN0aW9ucycpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS50ZXh0Q29udGVudCA9IGluc3RydWN0aW9ucztcclxuXHJcbiAgICBjb25zdCBnYW1lYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdhbWVib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcmUtZ2FtZS1nYW1lYm9hcmQtY29udGFpbmVyJyk7XHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTsgICBcclxuXHJcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG4tY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBidG5Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuR3JvdXAuY2xhc3NMaXN0LmFkZCgnYnRuLWdyb3VwJyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnNQYXJhKTtcclxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Hcm91cCk7XHJcblxyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoYXV0b1NoaXBQbGFjZW1lbnRCdG4pO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmVzZXRTaGlwc0J0bik7ICAgIFxyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQnRuKTtcclxufVxyXG5cclxuLy8gbW9kZSB3aWxsIGJlIGNhbGxlZCBhcydwcmUtZ2FtZScgb3IgJ3BsYXllcicvJ2VuZW15JyBzdHJpbmdzXHJcbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChib2FyZEFyciwgbW9kZSwgY2xpY2tDYikge1xyXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChgJHttb2RlfWAsICdnYW1lYm9hcmQnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gYm9hcmRBcnIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHsgLy8gUk9XIGkuZSBudW1zXHJcbiAgICAgICAgY29uc3Qgcm93ID0gYm9hcmRBcnJbaV07XHJcbiAgICAgICAgbGV0IHJvd0Nvb3JkID0gaSArIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHsgLy8gQ09MXHJcbiAgICAgICAgICAgIGlmIChqID09PSAwKSB7IC8vIFJPVyBMRUdFTkRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvd0xlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIiwgXCJyb3dcIik7XHJcbiAgICAgICAgICAgICAgICByb3dMZWdlbmQudGV4dENvbnRlbnQgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIGdhbWVib2FyZC5hcHBlbmQocm93TGVnZW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjb2xDb29yZCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKTsgLy8gY29udmVydCB0byBsZXR0ZXJzO1xyXG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlID0gYCR7cm93Q29vcmR9JHtjb2xDb29yZH1gO1xyXG4gICAgICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc3F1YXJlLmlkID0gY29vcmRpbmF0ZTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3NxdWFyZScpO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAncHJlLWdhbWUnIHx8IG1vZGUgPT09ICdwbGF5ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGJvYXJkQXJyW2ldW2pdID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gYmF0dGxlU2hpcEljb247XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoYm9hcmRBcnJbaV1bal0udG9TdHJpbmcoKS5pbmNsdWRlcygnWCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIlhcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXS50b1N0cmluZygpLmluY2x1ZGVzKCdTJykpIHtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2FyZEFycltpXVtqXSA9PT0gJ00nKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDT0wgTEVHRU5EXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBib2FyZEFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbExlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmRcIiwgXCJjb2xcIik7XHJcbiAgICAgICAgY29sTGVnZW5kLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NCArIGkpO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbExlZ2VuZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdhbWVib2FyZC5hcHBlbmQoY29sTGVnZW5kKTtcclxuICAgIH1cclxuICAgXHJcbiAgICBpZiAoY2xpY2tDYikge1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrQ2IpOyAgICAgICBcclxuICAgIH0gICAgXHJcbiAgICBcclxuICAgIHJldHVybiBnYW1lYm9hcmQ7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclR1cm5UcmFja2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHVybi10cmFja2VyLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdHVyblRyYWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdHVyblRyYWNrZXIuY2xhc3NMaXN0LmFkZCgndHVybnRyYWNrZXInKTsgXHJcbiAgICBjb25zdCBjb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjb21tZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29tbWVudEJveC5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJveCcpO1xyXG5cclxuICAgIHR1cm5UcmFja2VyLnRleHRDb250ZW50ID0gYCR7R0FNRS5nZXRUdXJuKCl9J3MgdHVybmA7XHJcbiAgICBpZiAoR0FNRS5nZXRUdXJuKCkgPT09ICdQbGF5ZXInKSB7XHJcbiAgICAgICAgdHVyblRyYWNrZXIudGV4dENvbnRlbnQgPSBgJHtnZXROYW1lKCl9J3MgdHVybmA7XHJcbiAgICB9IFxyXG5cclxuICAgIGNvbW1lbnRCb3gudGV4dENvbnRlbnQgPSBgJHtHQU1FLmdldFJlc3VsdCgpfWA7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHModHVyblRyYWNrZXJDb250YWluZXIpO1xyXG4gICAgdHVyblRyYWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodHVyblRyYWNrZXIpO1xyXG4gICAgdHVyblRyYWNrZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tbWVudENvbnRhaW5lcik7XHJcbiAgICBjb21tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRCb3gpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJHYW1lTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwbGF5ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBlbmVteUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW5lbXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVuZW15LWNvbnRhaW5lclwiKTtcclxuICAgIGNvbnN0IHR1cm5UcmFja2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0dXJuVHJhY2tlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0dXJuLXRyYWNrZXItY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWNvbnRhaW5lcicpOyAgICBcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2FyZHNDb250YWluZXIpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckNvbnRhaW5lcik7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQodHVyblRyYWNrZXJDb250YWluZXIpO1xyXG4gICAgcmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUNvbnRhaW5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckJvYXJkVXBkYXRlcyA9IChlbmVteUJvYXJkQXJyLCBwbGF5ZXJCb2FyZEFycikgPT4ge1xyXG4gICAgcmVuZGVyRW5lbXlCb2FyZChlbmVteUJvYXJkQXJyKTtcclxuICAgIHJlbmRlclBsYXllckJvYXJkKHBsYXllckJvYXJkQXJyKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyUGxheWVyQm9hcmQgPSAocGxheWVyQm9hcmRBcnIpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItY29udGFpbmVyJyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMocGxheWVyQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZGlzcGxheUJvYXJkKHBsYXllckJvYXJkQXJyLCAncGxheWVyJyk7XHJcbiAgICBjb25zdCBwbGF5ZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHBsYXllckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAncGxheWVyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gJ1BsYXllciBib2FyZCc7XHJcbiAgICBjb25zdCByZW1haW5pbmdTaGlwQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY291bnRlcicpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIuaWQgPSAncGxheWVyLXNoaXAtY291bnRlcic7ICAgIFxyXG4gICAgcGxheWVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJIZWFkaW5nKTtcclxuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1haW5pbmdTaGlwQ291bnRlcik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlckVuZW15Qm9hcmQgPSAoZW5lbXlCb2FyZEFycikgPT4ge1xyXG4gICAgY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW5lbXktY29udGFpbmVyJyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoZW5lbXlDb250YWluZXIpOyAgICBcclxuICAgIGNvbnN0IGVuZW15Qm9hcmQgPSBkaXNwbGF5Qm9hcmQoZW5lbXlCb2FyZEFyciwgJ2VuZW15JywgaGFuZGxlQXR0YWNrQ2xpY2spO1xyXG4gICAgY29uc3QgZW5lbXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGVuZW15SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdib2FyZC10aXRsZScsICdlbmVteScpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLmlkID0gJ2VuZW15LXNoaXAtY291bnRlcic7ICAgIFxyXG4gICAgZW5lbXlIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VuZW15IGJvYXJkJztcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKGVuZW15Qm9hcmQpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlIZWFkaW5nKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbWFpbmluZ1NoaXBDb3VudGVyKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclJlbWFpbmluZ1NoaXBzID0gKHBsYXllckFtb3VudCwgZW5lbXlBbW91bnQpID0+IHtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1BsYXllclNoaXBzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItc2hpcC1jb3VudGVyJyk7XHJcbiAgICByZW1haW5pbmdQbGF5ZXJTaGlwc0NvdW50ZXIudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJBbW91bnR9IHNoaXBzIHJlbWFpbmluZ2A7XHJcbiAgICBjb25zdCByZW1haW5pbmdFbmVteVNoaXBzQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmVteS1zaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ0VuZW15U2hpcHNDb3VudGVyLnRleHRDb250ZW50ID0gYCR7ZW5lbXlBbW91bnR9IHNoaXBzIHJlbWFpbmluZ2A7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUF0dGFja0NsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChHQU1FLmdldFR1cm4oKSA9PT0gJ0VuZW15JykgcmV0dXJuO1xyXG4gICAgY29uc3QgcG9zaXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgY29uc3QgY29vcmRzID0gcGFyc2VDb29yZHMocG9zaXRpb24pO1xyXG4gICAgR0FNRS5wbGF5ZXJBdHRhY2soY29vcmRzKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyVmljdG9yeVNjcmVlbiA9ICh3aW5uZXIpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItbW9kYWwnKTtcclxuICAgIGNvbnN0IGJ0bkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Hcm91cC5jbGFzc0xpc3QuYWRkKCdidG4tZ3JvdXAnKTtcclxuICAgIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicsICdwbGF5LWFnYWluLWJ0bicpO1xyXG4gICAgcGxheUFnYWluQnRuLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xyXG4gICAgY29uc3QgcmV0dXJuVG9NZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3JldHVybi1tZW51LWJ0bicpO1xyXG4gICAgcmV0dXJuVG9NZW51QnRuLnRleHRDb250ZW50ID0gJ1JldHVybiB0byBtZW51JztcclxuICAgIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVBsYXlBZ2Fpbik7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXR1cm5Ub01lbnUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGlmICh3aW5uZXIgPT09ICdQbGF5ZXInKSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSB3aW4hYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYENvbmdyYXR1bGF0aW9ucyEgV2FudCB0byBwbGF5IGFub3RoZXIgcm91bmQ/YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYFlvdSBsb3NlYDtcclxuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gYEJldHRlciBsdWNrIG5leHQgdGltZS4gV2FudCB0byB0cnkgYWdhaW4/YDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBibHVyRWxlbWVudChib2FyZHNDb250YWluZXIpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKHBhcmEpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocmV0dXJuVG9NZW51QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHBsYXlBZ2FpbkJ0bik7ICAgIFxyXG59XHJcblxyXG5jb25zdCByZW1vdmVNb2RhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtb3Zlci1tb2RhbCcpO1xyXG4gICAgbW9kYWwucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVJldHVyblRvTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9keSk7XHJcbiAgICBHQU1FLnN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVQbGF5QWdhaW4gPSAoKSA9PiB7XHJcbiAgICByZW1vdmVNb2RhbCgpO1xyXG4gICAgR0FNRS5wbGF5QWdhaW4oKTtcclxufVxyXG5cclxuZXhwb3J0IHsgICAgXHJcbiAgICBkaXNwbGF5TmFtZU1lbnUsXHJcbiAgICByZW5kZXJPdXRlckNvbnRhaW5lcixcclxuICAgIHJlbmRlck1haW5NZW51LFxyXG4gICAgZGlzcGxheVNoaXBQbGFjZW1lbnQsXHJcbiAgICByZW5kZXJCb2FyZFVwZGF0ZXMsXHJcbiAgICByZW5kZXJFbmVteUJvYXJkLFxyXG4gICAgcmVuZGVyR2FtZUxheW91dCxcclxuICAgIHJlbmRlclBsYXllckJvYXJkLFxyXG4gICAgcmVuZGVyUmVtYWluaW5nU2hpcHMsXHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcixcclxuICAgIHJlbmRlclZpY3RvcnlTY3JlZW5cclxufSIsImltcG9ydCAqIGFzIFBsYXllciBmcm9tICcuLi9mYWN0b3JpZXMvcGxheWVyJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi4vZmFjdG9yaWVzL3NoaXAnO1xyXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xyXG5pbXBvcnQgeyBjb252ZXJ0Q29vcmRUb0lkIH0gZnJvbSBcIi4vdXRpbGl0eS9wYXJzZUNvb3Jkc1wiO1xyXG5cclxubGV0IHBsYXllcjtcclxubGV0IGNvbXB1dGVyO1xyXG5sZXQgdHVybiA9ICdQbGF5ZXInO1xyXG5sZXQgcmVzdWx0U3RyaW5nO1xyXG5cclxuY29uc3QgcmVzZXRQbGF5ZXJPYmpzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgcGxheWVyID0gUGxheWVyLlBsYXllcigpO1xyXG4gICAgY29tcHV0ZXIgPSBQbGF5ZXIuQ29tcHV0ZXIoKTtcclxuICAgIGNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seSgpOyAgICBcclxufVxyXG5cclxuLy8gTWFpbiBtZW51IC0gc3RhcnQgZ2FtZSBidG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgRE9NLnJlbmRlck91dGVyQ29udGFpbmVyKCk7XHJcbiAgICBET00ucmVuZGVyTWFpbk1lbnUoKTtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpO1xyXG59XHJcblxyXG4vLyBQUkUtR0FNRSAtIHRha2UgcGxheWVyIG5hbWUsIHNoaXAgcGxhY2VtZW50XHJcbmNvbnN0IHN0YXJ0UHJlR2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG59XHJcblxyXG5jb25zdCBhdXRvU2hpcFBsYWNlbWVudCA9ICgpID0+IHtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpOyAgICBcclxuICAgIHBsYXllci5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG59XHJcblxyXG4vLyBPbmNlIHNoaXBzIHBsYWNlZCwgc3RhcnQgZ2FtZSAtIHJlbmRlciBwbGF5ZXIgYW5kIGVuZW15IGJvYXJkcyAmIGFkZCBwbGF5ZXIgbmFtZSB0byBzY3JlZW5cclxuY29uc3Qgc3RhcnRHYW1lUGxheSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJHYW1lTGF5b3V0KCk7XHJcbiAgICBET00ucmVuZGVyUGxheWVyQm9hcmQocGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBET00ucmVuZGVyRW5lbXlCb2FyZChjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgRE9NLnJlbmRlclJlbWFpbmluZ1NoaXBzKHBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpLCBjb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxufVxyXG5cclxuLy8gLSBhdHRhY2sgZW5lbXkgYm9hcmQgKGdldCBhbm90aGVyIHR1cm4gaWYgaGl0KSwgdG8gYmUgcHV0IG9uIGNsaWNrIGV2ZW50IHRhcmdldHRpbmcgY29vcmRzXHJcbmNvbnN0IHBsYXllckF0dGFjayA9IChjb29yZHMpID0+IHtcclxuICAgIC8vIHJldHVybnMgcmVzdWx0cyBvZiBhdHRhY2sgb24gZW5lbXkgYm9hcmQgd2l0aCBpbnB1dCBjb29yZHMgLSB4LCBtLCBzLCBnYW1lIG92ZXJcclxuICAgIGNvbnN0IGF0dGFja1Jlc3VsdCA9IHBsYXllci5hdHRhY2soY29vcmRzLCBjb21wdXRlci5nZXRCb2FyZE9iaigpKTtcclxuXHJcbiAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgY29uc3QgYm9hcmRWYWwgPSBjb21wdXRlci5nZXRCb2FyZE9iaigpLmdldEFycmF5KClbcm93XVtjb2xdO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBET00gYm9hcmRzIHdpdGggYXR0YWNrIHJlc3VsdHNcclxuICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIERPTS5yZW5kZXJSZW1haW5pbmdTaGlwcyhwbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSwgY29tcHV0ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XHJcblxyXG4gICAgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ0dhbWUgT3ZlcicpIHtcclxuICAgICAgICBkZWNsYXJlV2lubmVyKCdQbGF5ZXInKTsgLy8gdmljdG9yeS9kZWZlYXQgc2NyZWVuXHJcbiAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gYCR7Y29udmVydENvb3JkVG9JZChjb29yZHMpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgIHR1cm4gPSAnRW5lbXknO1xyXG4gICAgICAgIGVuZW15QXR0YWNrKCk7XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgRE9NLnJlbmRlclJlbWFpbmluZ1NoaXBzKHBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpLCBjb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnaGl0Jykge1xyXG4gICAgICAgIHJlc3VsdFN0cmluZyA9IGAke2NvbnZlcnRDb29yZFRvSWQoY29vcmRzKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9ISBUYWtlIGFub3RoZXIgc2hvdGA7XHJcbiAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgRE9NLnJlbmRlclJlbWFpbmluZ1NoaXBzKHBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpLCBjb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnc3VuaycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgY29tcHV0ZXIuZ2V0U2hpcExpc3QoKS5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNoaXBUeXBlID0gY29tcHV0ZXIuZ2V0U2hpcExpc3QoKVtpXTtcclxuICAgICAgICAgICAgLy8gYm9hcmR2YWwgaW5jbHVkZXMgc2hpcCBjbGFzcyBpZFxyXG4gICAgICAgICAgICBpZiAoYm9hcmRWYWwuaW5jbHVkZXMoU2hpcChzaGlwVHlwZSkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgPSBgWW91ICR7YXR0YWNrUmVzdWx0fSB0aGVpciAke3NoaXBUeXBlfSEgVGFrZSBhbm90aGVyIHNob3RgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpOyAgIFxyXG4gICAgICAgIERPTS5yZW5kZXJSZW1haW5pbmdTaGlwcyhwbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSwgY29tcHV0ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSk7ICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XHJcbn1cclxuXHJcbi8vIC0gcmVjZWl2ZSBlbmVteSBhdHRhY2sgXHJcbmNvbnN0IGVuZW15QXR0YWNrID0gKGF0dGFja1Jlc3VsdCkgPT4geyBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdHYW1lIE92ZXInKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgZGVjbGFyZVdpbm5lcignQ29tcHV0ZXInKTsgLy8gdmljdG9yeS9kZWZlYXQgc2NyZWVuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ21pc3MnKSB7XHJcbiAgICAgICAgICAgIHR1cm4gPSAnUGxheWVyJztcclxuICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYENvbXB1dGVyJ3Mgc2hvdCBvbiAke2NvbnZlcnRDb29yZFRvSWQoY29tcHV0ZXIuZ2V0Q29vcmRzKCkpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICAgICAgRE9NLnJlbmRlclJlbWFpbmluZ1NoaXBzKHBsYXllci5nZXRSZW1haW5pbmdTaGlwcygpLCBjb21wdXRlci5nZXRSZW1haW5pbmdTaGlwcygpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnaGl0Jykge1xyXG4gICAgICAgICAgICByZXN1bHRTdHJpbmcgPSBgQ29tcHV0ZXIncyBzaG90IG9uICR7Y29udmVydENvb3JkVG9JZChjb21wdXRlci5nZXRDb29yZHMoKSl9IHdhcyBhICR7YXR0YWNrUmVzdWx0fWA7XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgICAgICAgICBET00ucmVuZGVyUmVtYWluaW5nU2hpcHMocGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCksIGNvbXB1dGVyLmdldFJlbWFpbmluZ1NoaXBzKCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnc3VuaycpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHBsYXllci5nZXRTaGlwTGlzdCgpLmxlbmd0aCA+IGk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBUeXBlID0gcGxheWVyLmdldFNoaXBMaXN0KClbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBib2FyZHZhbCBpbmNsdWRlcyBzaGlwIGNsYXNzIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29tcHV0ZXIuZ2V0Q29vcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFZhbCA9IHBsYXllci5nZXRCb2FyZEFycmF5KClbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkVmFsLnRvU3RyaW5nKCkuaW5jbHVkZXMoU2hpcChzaGlwVHlwZSkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYFlvdXIgJHtzaGlwVHlwZX0gaGFzIGJlZW4gJHthdHRhY2tSZXN1bHR9IWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgICAgIERPTS5yZW5kZXJSZW1haW5pbmdTaGlwcyhwbGF5ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSwgY29tcHV0ZXIuZ2V0UmVtYWluaW5nU2hpcHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgYXR0YWNrIC0gcmFuZG9tIGF0dGFjayByZXR1cm5zIGF0dGFja1Jlc3VsdFxyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnNtYXJ0QXR0YWNrKHBsYXllci5nZXRCb2FyZE9iaigpKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyB1cGRhdGUgRE9NIGJvYXJkc1xyXG4gICAgICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgICAgICBET00ucmVuZGVyUmVtYWluaW5nU2hpcHMocGxheWVyLmdldFJlbWFpbmluZ1NoaXBzKCksIGNvbXB1dGVyLmdldFJlbWFpbmluZ1NoaXBzKCkpOyAgICAgICBcclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH0sIDcwMCk7XHJcblxyXG59XHJcblxyXG5jb25zdCBnZXRUdXJuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHR1cm47XHJcbn1cclxuXHJcbmNvbnN0IGdldFJlc3VsdCA9ICgpID0+IHtcclxuICAgIGlmIChyZXN1bHRTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJlc3VsdFN0cmluZyA9ICdGaXJlIHdoZW4gcmVhZHkhJztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRTdHJpbmc7XHJcbn1cclxuXHJcbi8vIFZpY3Rvcnkgc2NyZWVuIC8gcmVzdGFydCBidG5cclxuY29uc3QgZGVjbGFyZVdpbm5lciA9ICh3aW5uZXIpID0+IHtcclxuICAgIERPTS5yZW5kZXJWaWN0b3J5U2NyZWVuKHdpbm5lcik7XHJcbn1cclxuXHJcbmNvbnN0IHBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICAgIHJlc3VsdFN0cmluZyA9ICdGaXJlIHdoZW4gcmVhZHkhJztcclxuICAgIHR1cm4gPSAnUGxheWVyJztcclxuICAgIHJlc2V0UGxheWVyT2JqcygpO1xyXG4gICAgc3RhcnRQcmVHYW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudCxcclxuICAgIGdldFJlc3VsdCxcclxuICAgIGdldFR1cm4sXHJcbiAgICBwbGF5QWdhaW4sXHJcbiAgICBwbGF5ZXJBdHRhY2ssXHJcbiAgICByZXNldFBsYXllck9ianMsXHJcbiAgICBzdGFydFByZUdhbWUsXHJcbiAgICBzdGFydEdhbWUsXHJcbiAgICBzdGFydEdhbWVQbGF5XHJcbn0iLCJjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IHBsYXllck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpLnZhbHVlO1xyXG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICBwbGF5ZXJOYW1lID0gJ0FkbWlyYWwgb25lJztcclxuICAgIH1cclxuICAgIHJldHVybiBwbGF5ZXJOYW1lO1xyXG59XHJcblxyXG5leHBvcnQgeyBnZXROYW1lIH07IiwiLy8gdGFrZXMgaW5wdXQgc3F1YXJlIGlkIHN0cmluZyAtIHJldHVybnMgYm9hcmQgYXJyYXkgaW5kZWNlcyBlLmcuICcxMEEnID0gWzksMF1cclxuZnVuY3Rpb24gcGFyc2VDb29yZHMoc3F1YXJlSWQpIHtcclxuICAgIGxldCByb3c7XHJcbiAgICBsZXQgY29sO1xyXG5cclxuICAgIGlmIChzcXVhcmVJZC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAvLyBmaXJzdCBjaGFyYWN0ZXIgKHJvdyBudW0pIG9uIHNxciBpZCB3aWxsIGJlICsxIGFoZWFkIG9mIGFycmF5IGluZGV4XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoc3F1YXJlSWQuY2hhckF0KDApKSAtMTtcclxuICAgICAgICAvLyBzZWNvbmQgY2hhcmFjdGVyIChjb2wgbGV0dGVyKSB3aWxsIGJlIHRyYW5zbGF0ZWQgZnJvbSBBLUogdG8gMC05XHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgxKSAtIDY1O1xyXG4gICAgfSBlbHNlIHsgLy8gc3FyIGlkIHN0cmluZyBpcyAzIGNoYXJhY3RlcnNcclxuICAgICAgICBjb25zdCBmaXJzdFR3b0NoYXJzID0gc3F1YXJlSWQuc2xpY2UoMCwyKTtcclxuICAgICAgICByb3cgPSBwYXJzZUludChmaXJzdFR3b0NoYXJzKSAtIDE7XHJcbiAgICAgICAgLy8gdGhpcmQgY2hhcmFjdGVyIGNvbnZlcnQgdG8gbnVtXHJcbiAgICAgICAgY29sID0gc3F1YXJlSWQuY2hhckNvZGVBdCgyKSAtIDY1O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyb3csIGNvbF07XHJcbn1cclxuXHJcbi8vIHRha2UgYXJyYXkgaW5wdXQgbnVtcyBhbmQgY29udmVydCBpdCB0byBzcXVhcmUgaWQgc3RyaW5nIC0gWzksMF0gPSAnMTBBJ1xyXG5mdW5jdGlvbiBjb252ZXJ0Q29vcmRUb0lkKGFycmF5SXRlbSkge1xyXG4gICAgY29uc3QgW3JvdywgY29sXSA9IGFycmF5SXRlbTtcclxuICAgIGxldCBuZXdSb3cgPSByb3cgKyAxO1xyXG4gICAgbGV0IG5ld0NvbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjb2wpO1xyXG4gICAgbGV0IHN0cmluZ0lkID0gYCR7bmV3Um93fSR7bmV3Q29sfWA7ICAgIFxyXG4gICAgcmV0dXJuIHN0cmluZ0lkO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgcGFyc2VDb29yZHMsXHJcbiAgICBjb252ZXJ0Q29vcmRUb0lkXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gJy4vbW9kdWxlcy9nYW1lJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5cclxuR0FNRS5zdGFydEdhbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=