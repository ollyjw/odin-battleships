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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    background-color: #111827;\r\n}\r\n\r\n.container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: sans-serif;    \r\n    height: 100vh;\r\n}\r\n\r\n.boards-container {\r\n    position: relative;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    align-content: center;  \r\n    font-family: sans-serif;    \r\n    gap: 30px;\r\n}\r\n\r\n.menu-container {\r\n    display: flex;\r\n}\r\n\r\n.gameboard {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr repeat(10, 25px);\r\n    grid-template-rows: repeat(10, 25px) 0.5fr;    \r\n    gap: 3px;\r\n    margin-top: 60px;\r\n}\r\n\r\n.square {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 30px;\r\n    text-transform: capitalize;\r\n    position: relative;\r\n    background-color: #fdffcb;\r\n}\r\n\r\n.square:hover {\r\n    filter: brightness(0.7);\r\n}\r\n\r\n.legend {\r\n    background-color: #eee;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;    \r\n}\r\n\r\n.menu-card {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    width: 16rem;\r\n    padding: 25px;    \r\n}\r\n\r\n.ask-name-container {\r\n    padding: 45px;\r\n    text-align: center;\r\n}\r\n\r\n.start-pregame-btn-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.btn-container {\r\n    background-color: rgba(255,255,255,0.8);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    position:relative;\r\n    padding: 30px;\r\n    margin-top: 15px;\r\n    width: 238px;\r\n}\r\n\r\n.ship-placement-title {\r\n    text-align: center;\r\n}\r\n\r\n.valid-ship-placement {    \r\n    background-color: rgba(22, 221, 224, 0.815);\r\n}\r\n\r\n.invalid-ship-placement {\r\n    background-color: rgba(255, 0, 0, 0.9);\r\n}\r\n\r\n.ship {\r\n    background-color: #23d323;\r\n}\r\n\r\n.hit {\r\n    background-color: #ff0000;\r\n}\r\n\r\n.sunk {\r\n    background-color: #ff6a6a;\r\n}\r\n\r\n.miss {\r\n    background-color: #0a58ca;\r\n}\r\n\r\n.btn {    \r\n    color: #fff;\r\n    padding: 10px 20px;\r\n    font-size: large;\r\n    border-style: none;\r\n    border-radius: 10px;\r\n    margin-right: 15px;\r\n    align-self: center;\r\n    margin-bottom: 15px;    \r\n}\r\n\r\n.btn-group .btn {\r\n    width: 100%;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.start-btn {\r\n    background-color: #3b82f6;\r\n}\r\n\r\n.start-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n    cursor: pointer;\r\n}\r\n\r\n.place-ships-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n\r\n.reset-btn {\r\n    background-color: #c9cd14;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n}\r\n\r\n.board-title {\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n\r\n.board-title:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 2px;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: -10px;\r\n    background-color: #fff;\r\n}\r\n\r\n.board-title.player {\r\n    color: #23d323;\r\n}\r\n\r\n.board-title.enemy {\r\n    color: #ff0000;\r\n}\r\n\r\n.ship-counter {\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n\r\n.turn-tracker-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.turntracker {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;    \r\n}\r\n\r\n.comment-container {\r\n    color: #fff;\r\n    border: 2px solid #fff;\r\n    padding: 15px;\r\n    width: 200px;\r\n    text-align: center;\r\n}\r\n\r\n.game-over-modal {\r\n    position: absolute;\r\n    top: auto;\r\n    right: auto;\r\n    bottom: auto;\r\n    left: auto;\r\n    z-index: 1;\r\n    display: block;\r\n    padding: 45px;\r\n    background-color: rgba(255,255,255,0.9);\r\n    text-align: center;\r\n    border: 4px solid #000344;\r\n}\r\n\r\n.game-over-modal h2 {\r\n    margin-top: 0;\r\n}\r\n\r\n.return-menu-btn {\r\n    background-color: #3b82f6;\r\n}\r\n.return-menu-btn:hover {\r\n    background-color: #0a58ca;\r\n    border-color: #0a53be;\r\n}\r\n\r\n.play-again-btn {\r\n    background-color: #0dbc0d;\r\n}\r\n.play-again-btn:hover {\r\n    background-color: #0d8d0d;\r\n}\r\n\r\n.d-none {\r\n    display: none;\r\n}\r\n\r\n.blur {\r\n    filter: blur(2px);\r\n}\r\n\r\nsvg {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n@media only screen and (min-width:500px) {\r\n    .container {\r\n        justify-content: center;\r\n    }\r\n    .menu-card {        \r\n        width: 30rem;\r\n    }\r\n    .gameboard {        \r\n        grid-template-columns: 0.5fr repeat(10, 35px);\r\n        grid-template-rows: repeat(10, 35px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .btn-container {\r\n        width: 337px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width:1624px) {\r\n    .container {\r\n        align-content: center;\r\n    }\r\n    .menu-card {\r\n        padding: 45px;\r\n        width: 40rem;\r\n    }\r\n    .gameboard {\r\n        grid-template-columns: 0.5fr repeat(10, 60px);\r\n        grid-template-rows: repeat(10, 60px) 0.5fr;    \r\n        gap: 3px;\r\n        margin-top: 60px;\r\n    }\r\n    .square {\r\n        padding: 20px;\r\n    }    \r\n    .btn-container {\r\n        width: auto;\r\n    }\r\n    .btn-group .btn {\r\n        width: auto;\r\n    }\r\n}"],"sourceRoot":""}]);
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
        else if (attackResult === 'sunk') { // Not currently working
            console.log('sunk!');
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
        }
        
        // Recursively call attack - random attack returns attackResult
        enemyAttack(computer.smartAttack(player.getBoardObj()));
                
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxLQUFLLFlBQVksTUFB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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDL1VZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQsNkNBQTZDLGlCQUFpQjtBQUM5RCwrQ0FBK0MsZ0JBQWdCO0FBQy9ELDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RFk7QUFDdUM7QUFDMUI7QUFDZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0M7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE9BQU8sRUFBRSxPQUFPO0FBQ3RDO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNqQjtBQUN0QjtBQUNBLG9EQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2Fzc2V0cy9iYXR0bGVzaGlwLWljb24uc3ZnIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9mYWN0b3JpZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy91dGlsaXR5L2dldE5hbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvbW9kdWxlcy91dGlsaXR5L3BhcnNlQ29vcmRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE4Mjc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAgICBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5ib2FyZHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICBcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAgICBcclxuICAgIGdhcDogMzBweDtcclxufVxyXG5cclxuLm1lbnUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5nYW1lYm9hcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgcmVwZWF0KDEwLCAyNXB4KTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAyNXB4KSAwLjVmcjsgICAgXHJcbiAgICBnYXA6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zcXVhcmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmZjYjtcclxufVxyXG5cclxuLnNxdWFyZTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcclxufVxyXG5cclxuLmxlZ2VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbn1cclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE2cmVtO1xyXG4gICAgcGFkZGluZzogMjVweDsgICAgXHJcbn1cclxuXHJcbi5hc2stbmFtZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LXByZWdhbWUtYnRuLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIzOHB4O1xyXG59XHJcblxyXG4uc2hpcC1wbGFjZW1lbnQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udmFsaWQtc2hpcC1wbGFjZW1lbnQgeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIsIDIyMSwgMjI0LCAwLjgxNSk7XHJcbn1cclxuXHJcbi5pbnZhbGlkLXNoaXAtcGxhY2VtZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjkpO1xyXG59XHJcblxyXG4uc2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMzIzO1xyXG59XHJcblxyXG4uaGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcbi5zdW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZhNmE7XHJcbn1cclxuXHJcbi5taXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XHJcbn1cclxuXHJcbi5idG4geyAgICBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyAgICBcclxufVxyXG5cclxuLmJ0bi1ncm91cCAuYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN0YXJ0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xyXG59XHJcblxyXG4uc3RhcnQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XHJcbiAgICBib3JkZXItY29sb3I6ICMwYTUzYmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wbGFjZS1zaGlwcy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcclxufVxyXG5cclxuLnJlc2V0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljZDE0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYm9hcmQtdGl0bGU6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJvYXJkLXRpdGxlLnBsYXllciB7XHJcbiAgICBjb2xvcjogIzIzZDMyMztcclxufVxyXG5cclxuLmJvYXJkLXRpdGxlLmVuZW15IHtcclxuICAgIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4uc2hpcC1jb3VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udHVybi10cmFja2VyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50dXJudHJhY2tlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBib3R0b206IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XHJcbn1cclxuXHJcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnJldHVybi1tZW51LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I4MmY2O1xyXG59XHJcbi5yZXR1cm4tbWVudS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhNThjYTtcclxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcclxufVxyXG5cclxuLnBsYXktYWdhaW4tYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZGJjMGQ7XHJcbn1cclxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDhkMGQ7XHJcbn1cclxuXHJcbi5kLW5vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJsdXIge1xyXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XHJcbn1cclxuXHJcbnN2ZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWVudS1jYXJkIHsgICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgIH1cclxuICAgIC5nYW1lYm9hcmQgeyAgICAgICAgXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDM1cHgpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KSAwLjVmcjsgICAgXHJcbiAgICAgICAgZ2FwOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5idG4tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMzM3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNjI0cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tZW51LWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgfVxyXG4gICAgLmdhbWVib2FyZCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDYwcHgpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KSAwLjVmcjsgICAgXHJcbiAgICAgICAgZ2FwOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIH1cclxuICAgIC5zcXVhcmUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9ICAgIFxyXG4gICAgLmJ0bi1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cCAuYnRuIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyxRQUFRO0lBQ1IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7O0FBR0E7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksNkNBQTZDO1FBQzdDLDBDQUEwQztRQUMxQyxRQUFRO1FBQ1IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7SUFDQTtRQUNJLDZDQUE2QztRQUM3QywwQ0FBMEM7UUFDMUMsUUFBUTtRQUNSLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTgyNztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7ICAgIFxcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgXFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAgICBcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZWJvYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDI1cHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMjVweCkgMC41ZnI7ICAgIFxcclxcbiAgICBnYXA6IDNweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNxdWFyZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGZmY2I7XFxyXFxufVxcclxcblxcclxcbi5zcXVhcmU6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZ2VuZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTZyZW07XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7ICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uYXNrLW5hbWUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtcHJlZ2FtZS1idG4tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idG4tY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIHdpZHRoOiAyMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAtcGxhY2VtZW50LXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udmFsaWQtc2hpcC1wbGFjZW1lbnQgeyAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMiwgMjIxLCAyMjQsIDAuODE1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmludmFsaWQtc2hpcC1wbGFjZW1lbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMzIzO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YTZhO1xcclxcbn1cXHJcXG5cXHJcXG4ubWlzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxufVxcclxcblxcclxcbi5idG4geyAgICBcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDsgICAgXFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JvdXAgLmJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhcnQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXJ0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxhY2Utc2hpcHMtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWNkMTQ7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogLTEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZS5wbGF5ZXIge1xcclxcbiAgICBjb2xvcjogIzIzZDMyMztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLXRpdGxlLmVuZW15IHtcXHJcXG4gICAgY29sb3I6ICNmZjAwMDA7XFxyXFxufVxcclxcblxcclxcbi5zaGlwLWNvdW50ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4udHVybi10cmFja2VyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50dXJudHJhY2tlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbWUtb3Zlci1tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiBhdXRvO1xcclxcbiAgICByaWdodDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbiAgICBsZWZ0OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMwMDAzNDQ7XFxyXFxufVxcclxcblxcclxcbi5nYW1lLW92ZXItbW9kYWwgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucmV0dXJuLW1lbnUtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiODJmNjtcXHJcXG59XFxyXFxuLnJldHVybi1tZW51LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTU4Y2E7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzBhNTNiZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXktYWdhaW4tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkYmMwZDtcXHJcXG59XFxyXFxuLnBsYXktYWdhaW4tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkOGQwZDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ibHVyIHtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDJweCk7XFxyXFxufVxcclxcblxcclxcbnN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIge1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtY2FyZCB7ICAgICAgICBcXHJcXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZ2FtZWJvYXJkIHsgICAgICAgIFxcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciByZXBlYXQoMTAsIDM1cHgpO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDM1cHgpIDAuNWZyOyAgICBcXHJcXG4gICAgICAgIGdhcDogM3B4O1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuYnRuLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICB3aWR0aDogMzM3cHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE2MjRweCkge1xcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubWVudS1jYXJkIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQ1cHg7XFxyXFxuICAgICAgICB3aWR0aDogNDByZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmdhbWVib2FyZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIHJlcGVhdCgxMCwgNjBweCk7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgNjBweCkgMC41ZnI7ICAgIFxcclxcbiAgICAgICAgZ2FwOiAzcHg7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5zcXVhcmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgfSAgICBcXHJcXG4gICAgLmJ0bi1jb250YWluZXIge1xcclxcbiAgICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgLmJ0bi1ncm91cCAuYnRuIHtcXHJcXG4gICAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCI8P3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJpc28tODg1OS0xXFxcIj8+XFxyXFxuPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT5cXHJcXG48c3ZnIGZpbGw9XFxcIiMwMDAwMDBcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHdpZHRoPVxcXCI4MDBweFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiTGF5ZXJfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgXFxyXFxuXFx0IHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj5cXHJcXG48Zz5cXHJcXG5cXHQ8Zz5cXHJcXG5cXHRcXHQ8Zz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNNDYwLjQ4NiwyNzIuMzYzbC00Mi4xNS0xMi41MDlWMTMxLjQzOGMwLTUuNTIyLTQuNDc4LTEwLTEwLTEwSDI5NS4wNzJWNTIuMjkxYzAtNS41MjItNC40NzgtMTAtMTAtMTBoLTU3LjA5XFxyXFxuXFx0XFx0XFx0XFx0Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjY5LjE0N0gxMDQuNzE4Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjEyOC40MTZsLTQyLjE1LDEyLjUwOWMtNC4yNDQsMS4yNi03LjE1NSw1LjE2LTcuMTU1LDkuNTg3XFxyXFxuXFx0XFx0XFx0XFx0YzAsNDEuMjgyLDI1LjM3MSw5Ny42NjgsNzUuNDI3LDE2Ny43NTlINzkuNTI2Yy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoNjAuOTgzaDM2Ljg2OWg3OS4xNDhoMTE2LjAxOFxcclxcblxcdFxcdFxcdFxcdGMzLjE1OCwwLDYuMTMyLTEuNDkyLDguMDE5LTQuMDI0YzU3Ljc4MS03Ny41NDMsODcuMDc4LTEzOS4zNiw4Ny4wNzgtMTgzLjczNEM0NjcuNjQyLDI3Ny41MjMsNDY0LjczLDI3My42MjMsNDYwLjQ4NiwyNzIuMzYzelxcclxcblxcdFxcdFxcdFxcdCBNMjM3Ljk4Miw2Mi4yOTFoMzcuMDlWNzJIMjYxYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMTQuMDcydjI5LjQzOGgtMzcuMDlWNjIuMjkxeiBNMTE0LjcxOCwxNDEuNDM4XFxyXFxuXFx0XFx0XFx0XFx0aDExMy4yNjRoNTcuMDloMTEzLjI2NFYyNTMuMDZsLTEzOS4wMTgtNDAuMzk4Yy0xLjg1NS0wLjUzNi0zLjgyOS0wLjUxMi01LjY3OSwwLjAyOGwtMTM4LjkyMSw0MC4zNzFWMTQxLjQzOHogTTM2Ny41MSw0NDkuNzA5XFxyXFxuXFx0XFx0XFx0XFx0SDI2Ni41Mjd2LTk3LjY5M2MwLTUuNTIyLTQuNDc4LTEwLTEwLTEwYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjk3LjY5M2gtNjkuMTQ4aC0zMS44MzRcXHJcXG5cXHRcXHRcXHRcXHRDOTYuMzMzLDM4Mi45Niw2OC45MiwzMjcuODI3LDY1LjcyOCwyODkuMzJsMTkwLjc5OS01Ni42MjVsMTkwLjgsNTYuNjI1QzQ0NC4xMzUsMzI3LjgyNiw0MTYuNzIyLDM4Mi45NTksMzY3LjUxLDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTM1LjU4NSw0NDkuNzA5SDEwYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMjUuNTg1YzUuNTIzLDAsMTAtNC40NzgsMTAtMTBcXHJcXG5cXHRcXHRcXHRcXHRDNDUuNTg1LDQ1NC4xODcsNDEuMTA4LDQ0OS43MDksMzUuNTg1LDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTQ0NS45NjQsNDQ5LjcwOWgtMTkuNDYzYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwYzAsNS41MjIsNC40NzgsMTAsMTAsMTBoMTkuNDYzYzUuNTIyLDAsMTAtNC40NzgsMTAtMTBcXHJcXG5cXHRcXHRcXHRcXHRDNDU1Ljk2NCw0NTQuMTg3LDQ1MS40ODYsNDQ5LjcwOSw0NDUuOTY0LDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTUwMiw0NDkuNzA5aC0xMi4xNjRjLTUuNTIyLDAtMTAsNC40NzgtMTAsMTBjMCw1LjUyMiw0LjQ3OCwxMCwxMCwxMEg1MDJjNS41MjIsMCwxMC00LjQ3OCwxMC0xMFxcclxcblxcdFxcdFxcdFxcdEM1MTIsNDU0LjE4Nyw1MDcuNTIyLDQ0OS43MDksNTAyLDQ0OS43MDl6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTI0Ni41MjcsMjY4Ljk3NnYzNS4wMzJjMCw1LjUyMiw0LjQ3NywxMCwxMCwxMGM1LjUyMiwwLDEwLTQuNDc4LDEwLTEwdi0zNS4wMzJjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMFxcclxcblxcdFxcdFxcdFxcdEMyNTEuMDA0LDI1OC45NzYsMjQ2LjUyNywyNjMuNDU0LDI0Ni41MjcsMjY4Ljk3NnpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMTUyLjcyNiwxNjUuNTU1Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NkMxNjQuNjcyLDE3MC45MTQsMTU5LjMxMywxNjUuNTU1LDE1Mi43MjYsMTY1LjU1NXpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMjA1LjI3NSwxNjUuNTU1Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NkMyMTcuMjIxLDE3MC45MTQsMjExLjg2MywxNjUuNTU1LDIwNS4yNzUsMTY1LjU1NXpcXFwiLz5cXHJcXG5cXHRcXHRcXHQ8cGF0aCBkPVxcXCJNMzA3LjEzLDE4OS40NDdjNi41ODcsMCwxMS45NDYtNS4zNTksMTEuOTQ2LTExLjk0NmMwLTYuNTg3LTUuMzU5LTExLjk0Ni0xMS45NDYtMTEuOTQ2XFxyXFxuXFx0XFx0XFx0XFx0Yy02LjU4NywwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2QzI5NS4xODQsMTg0LjA4OCwzMDAuNTQzLDE4OS40NDcsMzA3LjEzLDE4OS40NDd6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTI2Ny44MjQsMTc3LjUwMWMwLTYuNTg3LTUuMzU4LTExLjk0Ni0xMS45NDYtMTEuOTQ2Yy02LjU4OCwwLTExLjk0Niw1LjM1OS0xMS45NDYsMTEuOTQ2XFxyXFxuXFx0XFx0XFx0XFx0YzAsNi41ODcsNS4zNTksMTEuOTQ2LDExLjk0NiwxMS45NDZDMjYyLjQ2NSwxODkuNDQ3LDI2Ny44MjQsMTg0LjA4OCwyNjcuODI0LDE3Ny41MDF6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTM2MC4zMjgsMTg5LjQ0N2M2LjU4NywwLDExLjk0Ni01LjM1OSwxMS45NDYtMTEuOTQ2YzAtNi41ODctNS4zNTktMTEuOTQ2LTExLjk0Ni0xMS45NDZcXHJcXG5cXHRcXHRcXHRcXHRjLTYuNTg3LDAtMTEuOTQ2LDUuMzU5LTExLjk0NiwxMS45NDZDMzQ4LjM4MiwxODQuMDg4LDM1My43NDEsMTg5LjQ0NywzNjAuMzI4LDE4OS40NDd6XFxcIi8+XFxyXFxuXFx0XFx0XFx0PHBhdGggZD1cXFwiTTMwOS40MzMsMjk5LjMxbDgxLjc0MywyNC42NTJjMC45NjMsMC4yOSwxLjkzNiwwLjQyOSwyLjg5MiwwLjQyOWM0LjI5NiwwLDguMjY2LTIuNzkxLDkuNTctNy4xMTVcXHJcXG5cXHRcXHRcXHRcXHRjMS41OTQtNS4yODktMS40LTEwLjg2OC02LjY4Ny0xMi40NjNsLTgxLjc0My0yNC42NTJjLTUuMjg5LTEuNTk1LTEwLjg2NywxLjM5OS0xMi40NjIsNi42ODdcXHJcXG5cXHRcXHRcXHRcXHRDMzAxLjE1MSwyOTIuMTM2LDMwNC4xNDUsMjk3LjcxNSwzMDkuNDMzLDI5OS4zMXpcXFwiLz5cXHJcXG5cXHRcXHQ8L2c+XFxyXFxuXFx0PC9nPlxcclxcbjwvZz5cXHJcXG48L3N2Zz5cIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24uIERPTkVcclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgaGF2ZSBhIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhaXIgb2YgY29vcmRpbmF0ZXMsIGRldGVybWluZXMgd2hldGhlciBvciBub3QgdGhlIGF0dGFjayBoaXQgYSBzaGlwIGFuZCB0aGVuIHNlbmRzIHRoZSDigJhoaXTigJkgZnVuY3Rpb24gdG8gdGhlIGNvcnJlY3Qgc2hpcCwgb3IgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIG1pc3NlZCBzaG90LlxyXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cclxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxyXG4vLyBTSElQUyBTSE9VTEQgTk9UIEJFIEFCTEUgVE8gT1ZFUkxBUFxyXG5cclxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJvYXJkQXJyYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7IFxyXG4gICAgICAgICAgICAvLyBnZW4gMTAgcm93IGFycmF5c1xyXG4gICAgICAgICAgICBib2FyZFtyb3ddID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2VuIDEwIGNvbHMgKGFkZCAxMCBlbXB0eSBzdHJpbmdzKSBpbnNpZGUgZWFjaCByb3cgYXJyYXlcclxuICAgICAgICAgICAgICAgIGJvYXJkW3Jvd11bY29sXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gYWNjZXNzIGNvb3JkcyBieSBbcm93SW5kZXhdW2NvbEluZGV4XSBpZS4gWzBdWzBdIHx8IFs5XVs3XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib2FyZEFyciA9IGNyZWF0ZUJvYXJkQXJyYXkoKTtcclxuICAgIGNvbnN0IHNoaXBzQXJyID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXAgPSB7XHJcbiAgICAgICAgY2FycmllcjogU2hpcCgnY2FycmllcicpLFxyXG4gICAgICAgIGJhdHRsZXNoaXA6IFNoaXAoJ2JhdHRsZXNoaXAnKSxcclxuICAgICAgICBzdWJtYXJpbmU6IFNoaXAoJ3N1Ym1hcmluZScpLFxyXG4gICAgICAgIGNydWlzZXI6IFNoaXAoJ2NydWlzZXInKSxcclxuICAgICAgICBwYXRyb2xCb2F0OiBTaGlwKCdwYXRyb2xCb2F0JyksXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHR5cGVzID0gT2JqZWN0LmtleXMoc2hpcCk7IC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgZXRjXVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNoaXBUeXBlcygpIHtcclxuICAgICAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKHNoaXApO1xyXG4gICAgICAgIHJldHVybiB0eXBlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBwbGFjZSBzaGlwJ3MgaWQgaW50byB0aGUgYm9hcmQgYXJyYXkgYmV0d2VlbiBpbnB1dCBjb29yZHNcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcykgeyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFN0b3JlIGFsbCBjb29yZHMgYmV0d2VlbiBzdGFydCBjb29yZCAmIGVuZCBjb29yZFxyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBhbW91bnQgb2YgY29vcmRzIGJldHdlZW4gdGhlIDIgZ2l2ZW4gaW5wdXRzXHJcbiAgICAgICAgY29uc3QgY29vcmRzQW1vdW50ID0gYWxsQ29vcmRzLmxlbmd0aDtcclxuICAgICAgICAvLyBHZXQgc2hpcExlbmd0aCAmIGlkIHByb3BzIGZyb20gU2hpcCBmYWN0b3J5XHJcbiAgICAgICAgY29uc3QgeyBzaGlwTGVuZ3RoLCBpZCB9ID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IHR5cGVzLmxlbmd0aCA+IGk7IGkrKykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdHlwZXNbaV0gJiYgc2hpcExlbmd0aCA9PT0gY29vcmRzQW1vdW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXNoIHNoaXAgb2JqIHRvIHNoaXBzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFtzaGlwVHlwZV07XHJcbiAgICAgICAgICAgICAgICBzaGlwc0Fyci5wdXNoKHNoaXBPYmopO1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGlkIHRvIGVhY2ggY29vcmQgKGJvYXJkIGFycmF5IGluZGVjZXMpXHJcbiAgICAgICAgICAgICAgICBhbGxDb29yZHMuZm9yRWFjaCgoY29vcmQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gaWQ7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgXHJcbiAgICB9XHJcbiAgICAgICBcclxuICAgIC8vIHB1c2ggc2hpcGxlbmd0aCBvZiBlYWNoIHNoaXAgaW50byBuZXcgYXJyYXlcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoQXJyYXkgPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGhBcnJheS5wdXNoKHNoaXBbdHlwZXNbaV1dLnNoaXBMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gc2hpcExlbmd0aEFycmF5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgYWxsIGNvb3JkcyBiZXR3ZWVuLCAmIGluY2x1ZGluZywgdHdvIGlucHV0IGNvb3JkcyBlZy4gWzAsMF0sIFswLDNdXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIC8vIGZvcm1hdHMgZWFjaCBpbnB1dCBpbnRvIGFycmF5IHdpdGggMiBpdGVtcyAmIGFzc2lnbnMgdmFyIG5hbWVzIHRvIGl0ZW1zXHJcbiAgICAgICAgY29uc3QgW3N0YXJ0Um93LCBzdGFydENvbF0gPSBzdGFydFBvcztcclxuICAgICAgICBjb25zdCBbZW5kUm93LCBlbmRDb2xdID0gZW5kUG9zO1xyXG4gICAgICAgIGxldCBhbGxDb29yZHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaWYgc2hpcCBpcyBwbGFjZWQgdmVydGljYWxseSAoc2FtZSBjb2wgdmFsdWVzKVxyXG4gICAgICAgIGlmIChzdGFydENvbCA9PT0gZW5kQ29sKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBhbGwgcm93IHZhbHVlcyBiZXR3ZWVuIHN0YXJ0ICYgZW5kIGNvb3Jkc1xyXG4gICAgICAgICAgICBjb25zdCBhbGxSb3dOdW1zID0gZ2V0QWxsTnVtc0JldHdlZW4oc3RhcnRSb3csIGVuZFJvdyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBhbGwgcm93IHZhbHVlcyB0aGF0IHJldHVybnMgcm93IHZhbHVlICsgaW5wdXQgY29sIGFuZCBzdG9yZSBpbiBhbGwgY29vcmRzIGFycmF5XHJcbiAgICAgICAgICAgIGFsbENvb3JkcyA9IGFsbFJvd051bXMubWFwKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbcm93LCBzdGFydENvbF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2UgeyAvLyBpZiBzaGlwIHBsYWNlZCBob3Jpem9udGFsbHkgKHNhbWUgcm93IHZhbHMpXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbENvbE51bXMgPSBnZXRBbGxOdW1zQmV0d2VlbihzdGFydENvbCwgZW5kQ29sKTtcclxuICAgICAgICAgICAgYWxsQ29vcmRzID0gYWxsQ29sTnVtcy5tYXAoKGNvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtzdGFydFJvdywgY29sXTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFsbENvb3JkcztcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgb2YgbnVtcyBiZXR3ZWVuIDIgaW5wdXQgbnVtc1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsTnVtc0JldHdlZW4oeCwgeSkge1xyXG4gICAgICAgIGNvbnN0IG51bXMgPSBbXTtcclxuICAgICAgICBsZXQgaGlnaCwgbG93O1xyXG5cclxuICAgICAgICAvLyBDaGVjayB3aGljaCBudW0gaXMgaGlnaGVyIG9yIGxvd2VyXHJcbiAgICAgICAgaWYgKHggPiB5KSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB4O1xyXG4gICAgICAgICAgICBsb3cgPSB5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGhpZ2ggPSB5O1xyXG4gICAgICAgICAgICBsb3cgPSB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBwdXNoIG51bXMgZnJvbSBsb3cgdG8gaGlnaCB0byBudW1zIGFycmF5XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGxvdzsgaSA8PSBoaWdoOyBpKyspIHtcclxuICAgICAgICAgICAgbnVtcy5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaW5kIGVuZCBjb29yZCBmcm9tIHN0YXJ0IGNvb3JkICsgc2hpcGxlbmd0aCAmIGRpcmVjdGlvblxyXG4gICAgZnVuY3Rpb24gZ2V0RW5kQ29vcmQgKHN0YXJ0UG9zLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGxldCBlbmRSb3cgPSBzdGFydFJvdztcclxuICAgICAgICBsZXQgZW5kQ29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgLy8gdmVydGljYWwgZ29lcyBkb3dud2FyZHMgaW4gYXJyYXkgaW5kZXggKHVwd2FyZHMgaW4gRE9NKSwgaG9yaXpvbnRhbCBnb2VzIHJpZ2h0d2FyZHNcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGVuZFJvdyArPSBzaGlwTGVuZ3RoIC0gMTsgICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgIGVuZENvbCArPSBzaGlwTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtlbmRSb3csIGVuZENvbF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZXMgcGFpciBvZiBjb29yZHMsIGRldGVybWluZXMgd2hldGhlciB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHNlbmRzIGhpdCBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwIG9yIHJlY29yZHMgY29vcmRzIG9mIG1pc3NlZCBzaG90XHJcbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgLy8gU3RvcmUgdmFsdWUgb2YgdGhlIGdpdmVuIGJvYXJkIGFycmF5IGluZGVjZXNcclxuICAgICAgICBjb25zdCBib2FyZFZhbHVlID0gYm9hcmRBcnJbcm93XVtjb2xdO1xyXG4gICAgICAgIC8vIGNvb3JkcyBjb250YWluIGEgc2hpcCBpZiBib2FyZFZhbHVlIGlzIGEgbnVtYmVyLi4uXHJcbiAgICAgICAgY29uc3QgY29vcmRzQ29udGFpblNoaXAgPSB0eXBlb2YgYm9hcmRWYWx1ZSA9PT0gJ251bWJlcic7XHJcblxyXG4gICAgICAgIGlmIChjb29yZHNDb250YWluU2hpcCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgdHlwZXMubGVuZ3RoID4gaTsgaSsrKSB7IFxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhYiBpZCBmcm9tIHNoaXAgcHJvcHNcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHNoaXBbdHlwZXNbaV1dO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBib2FyZCB2YWwgaXMgZXF1YWwgdG8gaWQgb2Ygc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgIGlmIChib2FyZFZhbHVlID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgaGl0IGZ1bmN0aW9uIHRvIHRoYXQgc2hpcCBvYmpcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwT2JqID0gc2hpcFt0eXBlc1tpXV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcE9iai5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgUyB0byByZXByZXNlbnQgU3VuayB0byBlbnRpcmUgc2hpcCBjb29yZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFyci5mb3JFYWNoKChyb3csIHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9hcmRBcnJbcl1bY10udG9TdHJpbmcoKS5pbmNsdWRlcyhpZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZEFycltyXVtjXSA9IGAke2lkfVNgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIGFuIFggdG8gdmFsdWUgdG8gcmVwcmVzZW50IGEgaGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkQXJyW3Jvd11bY29sXSArPSAnWCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFNoaXBzU3VuaygpKSByZXR1cm4gJ0dhbWUgT3Zlcic7IC8vIEdhbWUgb3ZlciBoYXMgdG8gcmV0dXJuIGJlZm9yZSBmaW5hbCBzaGlwIHN1bmtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcE9iai5pc1N1bmsoKSkgcmV0dXJuICdzdW5rJztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hpdCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBib2FyZCB2YWx1ZSB0byBNIGZvciBhIG1pc3NcclxuICAgICAgICAgICAgYm9hcmRBcnJbcm93XVtjb2xdID0gJ00nO1xyXG4gICAgICAgICAgICByZXR1cm4gJ21pc3MnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFRoZSBldmVyeSgpIG1ldGhvZCBvZiBBcnJheSBpbnN0YW5jZXMgdGVzdHMgd2hldGhlciBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IHBhc3MgdGhlIHRlc3QgaW1wbGVtZW50ZWQgYnkgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBJdCByZXR1cm5zIGEgQm9vbGVhbiB2YWx1ZS5cclxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHNoaXBzQXJyLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcclxuXHJcbiAgICAvLyBhcmUgY29vcmRzIGVtcHR5LCB3aXRoaW4gYm9hcmRcclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBzaGlwIGNhbiBwbGFjZSBiZXR3ZWVuIHR3byBnaXZlbiBjb29yZHNcclxuICAgIGZ1bmN0aW9uIGNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGFsbENvb3JkcyA9IGdldEFsbENvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gYWxsQ29vcmRzLmV2ZXJ5KChjb29yZCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpICYmIGFyZUNvb3Jkc0VtcHR5KGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgd2l0aGluIGJvYXJkIGJvdW5kYXJpZXNcclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKHJvdyA+PSAxMCB8fCByb3cgPCAwIHx8IGNvbCA+PSAxMCB8fCBjb2wgPCAgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGNvb3JkcyBhcmUgZW1wdHlcclxuICAgIGZ1bmN0aW9uIGFyZUNvb3Jkc0VtcHR5KGNvb3Jkcykge1xyXG4gICAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICAgICAgaWYgKGJvYXJkQXJyW3Jvd11bY29sXSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcmVDb29yZHNVbnBsYXllZChjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICcnIHx8IHR5cGVvZiBib2FyZEFycltyb3ddW2NvbF0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgY29vcmRzIGJvdGggZW1wdHkgJiB3aXRoaW4gYm9hcmQgYm91bmRhcmllcyByZXR1cm4gdHJ1ZVxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzRW1wdHlXaXRoaW5Cb2FyZChjb29yZHMpIHtcclxuICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkcykpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoIWFyZUNvb3Jkc0VtcHR5KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJlQ29vcmRzTWlzcyhjb29yZHMpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGlmIChib2FyZEFycltyb3ddW2NvbF0gPT09ICdNJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkQXJyO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRha2UgYSBjb29yZCBhbmQgZ2V0IGFsbCBlbXB0eSBjb29yZHMgd2l0aGluIGJvYXJkIHRoYXQgYXJlIGFib3ZlLCBiZWxvdywgbGVmdCAmIHJpZ2h0IG9mIGNvb3JkXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKGNvb3JkcywgYm9hcmRPYmopIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdPSBjb29yZHM7XHJcbiAgICAgICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93ICsgMSwgY29sXSk7XHJcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtyb3cgLSAxLCBjb2xdKTtcclxuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW3JvdywgY29sICsgMV0pO1xyXG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbcm93LCBjb2wgLSAxXSk7XHJcblxyXG4gICAgICAgIC8vIFRoZSBmaWx0ZXIoKSBtZXRob2Qgb2YgQXJyYXkgaW5zdGFuY2VzIGNyZWF0ZXMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIGEgZ2l2ZW4gYXJyYXksIGZpbHRlcmVkIGRvd24gdG8ganVzdCB0aGUgZWxlbWVudHMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cclxuICAgICAgICAvLyBmaWx0ZXIgb3V0IGNvb3JkcyB0aGF0IGFyZSBlbXB0eSBvciBvdXRzaWRlIGJvYXJkXHJcbiAgICAgICAgY29uc3QgdmFsaWRNb3ZlcyA9IHBvc3NpYmxlTW92ZXMuZmlsdGVyKGNvb3JkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFib2FyZE9iaiA/IGFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQoY29vcmQpOiBib2FyZE9iai5hcmVDb29yZHNFbXB0eVdpdGhpbkJvYXJkKGNvb3JkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkTW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGFrZSAyIGNvb3JkcyBhbmQgcmV0dXJuIGFsbCB2YWxpZCBjb29yZHMgYWxvbmcgc2FtZSBheGlzIFxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsVmFsaWRMaW5lYXJDb29yZHMoc3RhcnRQb3MsIGVuZFBvcykge1xyXG4gICAgICAgIGNvbnN0IGxpbmVhclRhcmdldHMgPSBbXTtcclxuICAgICAgICBjb25zdCBbc3RhcnRSb3csIHN0YXJ0Q29sXSA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIGNvbnN0IFtlbmRSb3csIGVuZENvbF0gPSBlbmRQb3M7XHJcbiAgICAgICAgbGV0IGNvb3JkO1xyXG5cclxuICAgICAgICBpZiAoZW5kUm93ID09PSBzdGFydFJvdykgeyAvL3NhbWUgcm93XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q29sID0gc3RhcnRDb2w7XHJcbiAgICAgICAgICAgIC8vIExvb3AgaW4gcG9zaXRpdmUgYW5kIG5lZ2F0aXZlIGRpcmVjdGlvbiBhbG9uZyByb3dzLCBhZGQgZW1wdHkgY29vcmRzIHRvIHRhcmdldHMgYXJyYXkgYW5kIGJyZWFrIG91dCBpZiBjb29yZHMgYXJlIG91dHNpZGUgYm9hcmQgYm91bmRhcmllcyBvciBhIG1pc3NlZCBzaG90XHJcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtzdGFydFJvdywgY3VycmVudENvbCsrXTtcclxuICAgICAgICAgICAgICAgIGlmICghYXJlQ29vcmRzV2l0aGluQm9hcmQoY29vcmQpKSBicmVhazsgLy8gYnJlYWsgc3RhdGVtZW50IHRlcm1pbmF0ZXMgY3VycmVudCBsb29wXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudENvbCA9IHN0YXJ0Q29sO1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbc3RhcnRSb3csIGN1cnJlbnRDb2wtLV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAvLyBzYW1lIGNvbHVtblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgICAgICAvLyBMb29wIGluIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSBkaXJlY3Rpb24gYWxvbmcgY29sdW1uc1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbY3VycmVudFJvdysrLCBzdGFydENvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFJvdyA9IHN0YXJ0Um93O1xyXG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbY3VycmVudFJvdy0tLCBzdGFydENvbF07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFyZUNvb3Jkc1dpdGhpbkJvYXJkKGNvb3JkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlQ29vcmRzTWlzcyhjb29yZCkpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZUNvb3Jkc1VucGxheWVkKGNvb3JkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVhclRhcmdldHMucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpbmVhclRhcmdldHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxyXG4gICAgICAgIGFyZUNvb3Jkc0VtcHR5V2l0aGluQm9hcmQsXHJcbiAgICAgICAgYXJlQ29vcmRzV2l0aGluQm9hcmQsXHJcbiAgICAgICAgY2FuUGxhY2VTaGlwQmV0d2VlbixcclxuICAgICAgICBjcmVhdGVCb2FyZEFycmF5LFxyXG4gICAgICAgIGNyZWF0ZVNoaXBMZW5ndGhBcnJheSxcclxuICAgICAgICBnZXRBbGxDb29yZHMsXHJcbiAgICAgICAgZ2V0QWxsTnVtc0JldHdlZW4sXHJcbiAgICAgICAgZ2V0QXJyYXksXHJcbiAgICAgICAgZ2V0QWxsVmFsaWRBZGphY2VudENvb3JkcyxcclxuICAgICAgICBnZXRBbGxWYWxpZExpbmVhckNvb3JkcyxcclxuICAgICAgICBnZXRFbmRDb29yZCxcclxuICAgICAgICBnZXRTaGlwVHlwZXMsXHJcbiAgICAgICAgcGxhY2VTaGlwLFxyXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssICAgICAgICBcclxuICAgICAgICB0eXBlcyxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDsiLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG5cclxuLy8gUGxheWVycyBjYW4gdGFrZSB0dXJucyBwbGF5aW5nIHRoZSBnYW1lIGJ5IGF0dGFja2luZyB0aGUgZW5lbXkgR2FtZWJvYXJkLlxyXG4vLyBUaGUgZ2FtZSBpcyBwbGF5ZWQgYWdhaW5zdCB0aGUgY29tcHV0ZXIsIHNvIG1ha2UgdGhlIOKAmGNvbXB1dGVy4oCZIGNhcGFibGUgb2YgbWFraW5nIHJhbmRvbSBwbGF5cy4gVGhlIEFJIGRvZXMgbm90IGhhdmUgdG8gYmUgc21hcnQsIGJ1dCBpdCBzaG91bGQga25vdyB3aGV0aGVyIG9yIG5vdCBhIGdpdmVuIG1vdmUgaXMgbGVnYWwgKGkuZS4gaXQgc2hvdWxkbuKAmXQgc2hvb3QgdGhlIHNhbWUgY29vcmRpbmF0ZSB0d2ljZSkuXHJcblxyXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgYm9hcmQgPSBHYW1lYm9hcmQoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGhBcnJheSA9IGdldFNoaXBMZW5ndGhBcnJheSgpOyAgIFxyXG4gICAgY29uc3Qgc2hpcExpc3QgPSBnZXRTaGlwTGlzdCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEJvYXJkT2JqKCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRCb2FyZEFycmF5KCkge1xyXG4gICAgICAgIHJldHVybiBib2FyZC5nZXRBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFsnY2FycmllcicsICdiYXR0bGVzaGlwJywgJ3N1Ym1hcmluZScsICdjcnVpc2VyJywgJ3BhdHJvbEJvYXQnXVxyXG4gICAgZnVuY3Rpb24gZ2V0U2hpcExpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkLmdldFNoaXBUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFs1LCA0LCAzLCAzLCAyXSBcclxuICAgIGZ1bmN0aW9uIGdldFNoaXBMZW5ndGhBcnJheSgpIHtcclxuICAgICAgICByZXR1cm4gYm9hcmQuY3JlYXRlU2hpcExlbmd0aEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXR0YWNrKGNvb3JkcywgZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcGVhdFBsYXkgPSBpc1JlcGVhdFBsYXkoY29vcmRzLCBlbmVteUJvYXJkKTtcclxuICAgICAgICBpZiAocmVwZWF0UGxheSkgcmV0dXJuICdyZXBlYXQnO1xyXG5cclxuICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvb3JkcyBoYXZlIGJlZW4gdGFyZ2V0dGVkIGFscmVhZHlcclxuICAgIGZ1bmN0aW9uIGlzUmVwZWF0UGxheShjb29yZHMsIGVuZW15Qm9hcmQpIHtcclxuICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29vcmRzO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQXJyID0gZW5lbXlCb2FyZC5nZXRBcnJheSgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkVmFsdWUgPSBib2FyZEFycltyb3ddW2NvbF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBib2FyZFZhbHVlID09PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChib2FyZFZhbHVlID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdlbmVyYXRlIDIgcmFuZG9tIG51bWJlcnMgYmV0d2VlbiAwLTkgYW5kIHJldHVybiBpbiBhcnJheVxyXG4gICAgZnVuY3Rpb24gZ2VuUmFuZG9tQ29vcmRzKCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByZXR1cm4gW3gsIHldO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlY3Vyc2l2ZSBzaGlwIHBsYWNlbWVudCAtIHBvcCBuZXcgc2hpcHR5cGUgJiBzaGlwbGVuZ3RoIHVudGlsIGFsbCBzaGlwcyBwbGFjZWRcclxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcHNSYW5kb21seSgpIHtcclxuICAgICAgICBjb25zdCBzaGlwVHlwZSA9IHNoaXBMaXN0LnBvcCgpO1xyXG4gICAgICAgIGlmIChzaGlwVHlwZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXBMZW5ndGhBcnJheS5wb3AoKTtcclxuICAgICAgICBpZiAoc2hpcExlbmd0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBzdGFydFBvcywgZGlyZWN0aW9uLCBlbmRQb3MsIHZhbGlkU2hpcFBsYWNlbWVudDtcclxuXHJcbiAgICAgICAgLy8gd2hpbGUgdGhlcmVzIG5vIHZhbGlkIHNoaXAgcGxhY2VtZW50IGFzc2lnbiB2YWx1ZXMgdG8gdmFycyBmb3IgdXNlIGluIGZ1bmN0aW9ucyB1bnRpbCBzaGlwVHlwZSAmIHNoaXBMZW5ndGggcmV0dXJuIHVuZGVmaW5lZFxyXG4gICAgICAgIHdoaWxlICghdmFsaWRTaGlwUGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gZ2VuUmFuZG9tQ29vcmRzKCk7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnO1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBib2FyZC5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkU2hpcFBsYWNlbWVudCA9IGJvYXJkLmNhblBsYWNlU2hpcEJldHdlZW4oc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwVHlwZSwgc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgcGxhY2VTaGlwc1JhbmRvbWx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhdHRhY2ssXHJcbiAgICAgICAgZ2VuUmFuZG9tQ29vcmRzLFxyXG4gICAgICAgIGdldEJvYXJkQXJyYXksXHJcbiAgICAgICAgZ2V0Qm9hcmRPYmosICAgICAgICBcclxuICAgICAgICBnZXRTaGlwTGlzdCxcclxuICAgICAgICBwbGFjZVNoaXBzUmFuZG9tbHksXHJcbiAgICAgICAgc2hpcExlbmd0aEFycmF5LFxyXG4gICAgICAgIHNoaXBMaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEluaGVyaXQgZnJvbSBQbGF5ZXIgZmFjdG9yeVxyXG5jb25zdCBDb21wdXRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb3RvID0gUGxheWVyKCk7XHJcbiAgICBsZXQgbmV4dFRhcmdldDtcclxuXHJcbiAgICBjb25zdCBoaXRDb29yZHMgPSBbXTtcclxuICAgIGNvbnN0IGFkamFjZW50VGFyZ2V0cyA9IFtdO1xyXG4gICAgY29uc3QgbGluZWFyVGFyZ2V0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyQXJyVmFscyhhcnIpIHtcclxuICAgICAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIGFyci5wb3AoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTY2FuIGJvYXJkIGFycmF5IGFuZCBmaW5kIGNlbGxzIHRoYXQgY29udGFpbiB0YXJnZXQgaS5lICdYJ1xyXG4gICAgY29uc3QgZmluZDJkQ29vcmRpbmF0ZXMgPSAoYm9hcmRBcnIsIHRhcmdldCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb3Jkc0FyciA9IFtdO1xyXG4gICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgIGJvYXJkQXJyLmZvckVhY2goKHJvdywgaSkgPT4ge1xyXG4gICAgICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGopID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0udG9TdHJpbmcoKS5pbmNsdWRlcyh0YXJnZXQsIDEpKSB7XHJcbiAgICAgICAgICAgICAgY29vcmQgPSBbaSxqXTtcclxuICAgICAgICAgICAgICBjb29yZHNBcnIucHVzaChjb29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvb3Jkc0FycjtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIG9uIGhpdCBhZGQgdGhlIGNvb3JkIHRvIGFycmF5LCBvbiBzdW5rIGNsZWFyIGFycmF5c1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIGNvb3Jkcykge1xyXG4gICAgICAgIC8vIGlmIGF0dGFjayByZXN1bHQgaXMgYSBoaXQsIHN0b3JlIGluIGFyclxyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSBoaXRDb29yZHMucHVzaChjb29yZHMpO1xyXG4gICAgICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdzdW5rJykge1xyXG4gICAgICAgICAgICBjbGVhckFyclZhbHMoaGl0Q29vcmRzKTtcclxuICAgICAgICAgICAgY2xlYXJBcnJWYWxzKGFkamFjZW50VGFyZ2V0cyk7XHJcbiAgICAgICAgICAgIGNsZWFyQXJyVmFscyhsaW5lYXJUYXJnZXRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc21hcnRBdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIGNvbnN0IGVuZW15Qm9hcmRBcnIgPSBlbmVteUJvYXJkLmdldEFycmF5KCk7IC8vIGFrYSBwbGF5ZXIgYm9hcmRcclxuICAgICAgICBsZXQgcmVtYWluaW5nSGl0c0FyciA9IGZpbmQyZENvb3JkaW5hdGVzKGVuZW15Qm9hcmRBcnIsICdYJyk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUuY2xlYXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgSElUIENPT1JEUyBpczogJHtoaXRDb29yZHN9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFJlbWFpbmluZyBoaXRzIGlzOiAke3JlbWFpbmluZ0hpdHNBcnJ9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYEFESkFDRU5UIFRBUkdFVFMgaXM6ICR7YWRqYWNlbnRUYXJnZXRzfWApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBMSU5FQVIgVEFSR0VUUyBpczogJHtsaW5lYXJUYXJnZXRzfWApOyAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIDEuIGlmIG5vIHZhbGlkIHRhcmdldHMgYXR0YWNrIHJhbmRvbSBjb29yZFxyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID09PSAwICYmIGFkamFjZW50VGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgbGluZWFyVGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgcmVtYWluaW5nSGl0c0Fyci5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIGlmIGEgaGl0IGV4aXN0cywgc3RvcmUgaXQncyBhZGphY2VudCBjb29yZHMgaW4gYm90aCBheGlzIGluIG5ldyBhcnJcclxuICAgICAgICBpZiAoaGl0Q29vcmRzLmxlbmd0aCA9PT0gMSAmJiBhZGphY2VudFRhcmdldHMubGVuZ3RoID09PSAwICYmIGxpbmVhclRhcmdldHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzSGl0ID0gaGl0Q29vcmRzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKHByZXZpb3VzSGl0LCBlbmVteUJvYXJkKTtcclxuICAgICAgICAgICAgbmV4dFBvc3NpYmxlVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGFkamFjZW50VGFyZ2V0cy5wdXNoKHRhcmdldCkpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY29uZGl0aW9uIDIgLSBQVVNIIFRPIEFESkFDRU5UJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzLiBpZiB0aGVyZSBhcmUgMiBoaXQgY29vcmRzLCBzdG9yZSB0aGUgY29vcmRzIHdpdGhpbiBzYW1lIGF4aXMgaW4gbmV3IGFyciAobGluZWFyKVxyXG4gICAgICAgIGlmIChoaXRDb29yZHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IGhpdENvb3Jkc1swXTtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gaGl0Q29vcmRzW2hpdENvb3Jkcy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgY29uc3QgbmV4dFBvc3NpYmxlTGluZWFyVGFyZ2V0cyA9IGVuZW15Qm9hcmQuZ2V0QWxsVmFsaWRMaW5lYXJDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgICAgIG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBsaW5lYXJUYXJnZXRzLnB1c2godGFyZ2V0KSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbmRpdGlvbiAzIC0gUFVTSCBUTyBMSU5FQVInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIGlmIGFycmF5cyBoYXZlIGJlZW4gY2xlYXJlZCBhZnRlciBzaGlwIHN1bmsgYnV0IGJvYXJkIGFycmF5IHN0aWxsIGNvbnRhaW4gaGl0cyAoeClcclxuICAgICAgICBpZiAocmVtYWluaW5nSGl0c0Fyci5sZW5ndGggPiAwICYmIGFkamFjZW50VGFyZ2V0cy5sZW5ndGggPT09IDAgJiYgbGluZWFyVGFyZ2V0cy5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gcmVtYWluaW5nSGl0c0FyclswXTtcclxuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gcmVtYWluaW5nSGl0c0FycltyZW1haW5pbmdIaXRzQXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICBjb25zdCBuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZExpbmVhckNvb3JkcyhzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBsaW5lYXIgdGFyZ2V0cywgZmluZCB0aGUgYWRqYWNlbnQgdGFyZ2V0cyBmb3IgZWFjaCByZW1haW5pbmcgaGl0XHJcbiAgICAgICAgICAgIGlmIChuZXh0UG9zc2libGVMaW5lYXJUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNIaXQgPSByZW1haW5pbmdIaXRzQXJyLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dFBvc3NpYmxlQWRqYWNlbnRUYXJnZXRzID0gZW5lbXlCb2FyZC5nZXRBbGxWYWxpZEFkamFjZW50Q29vcmRzKHByZXZpb3VzSGl0LCBlbmVteUJvYXJkKTtcclxuICAgICAgICAgICAgICAgIG5leHRQb3NzaWJsZUFkamFjZW50VGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IGFkamFjZW50VGFyZ2V0cy5wdXNoKHRhcmdldCkpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbmRpdGlvbiA0IC0gUFVTSCBSRU1BSU5JTkcgSElUUyBUTyBBREpBQ0VOVFwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHsgLy9lbHNlIHRhcmdldCBsaW5lYXJcclxuICAgICAgICAgICAgICAgIG5leHRQb3NzaWJsZUxpbmVhclRhcmdldHMuZm9yRWFjaCgodGFyZ2V0KSA9PiBsaW5lYXJUYXJnZXRzLnB1c2godGFyZ2V0KSk7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29uZGl0aW9uIDQgLSBQVVNIIFJFTUFJTklORyBISVRTIFRPIExJTkVBUlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgbGluZWFyIHRhcmdldCB0aGUgbGFzdCBvbmUgZnJvbSBhcnJheSB3aWxsIGJlIG5leHRUYXJnZXQsIFxyXG4gICAgICAgIC8vIGVsc2UgdGFyZ2V0IHRoZSBsYXN0IGFkamFjZW50IHRhcmdldHNcclxuICAgICAgICBpZiAobGluZWFyVGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBsaW5lYXJUYXJnZXRzLnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5leHRUYXJnZXQgPSBhZGphY2VudFRhcmdldHMucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBuZXh0IHRhcmdldCBpcyAke25leHRUYXJnZXR9YCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2sobmV4dFRhcmdldCwgZW5lbXlCb2FyZCk7IC8vIHJldHVybnMgaGl0IHN1bmsgb3IgbWlzcyBzdHJpbmdzXHJcbiAgICAgICAgaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIG5leHRUYXJnZXQpO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soZW5lbXlCb2FyZCkge1xyXG4gICAgICAgIG5leHRUYXJnZXQgPSBwcm90by5nZW5SYW5kb21Db29yZHMoKTsgICAgICAgICBcclxuICAgICAgICBjb25zdCBhdHRhY2tSZXN1bHQgPSBwcm90by5hdHRhY2sobmV4dFRhcmdldCwgZW5lbXlCb2FyZCk7XHJcbiAgICAgICAgaGFuZGxlQXR0YWNrUmVzdWx0cyhhdHRhY2tSZXN1bHQsIG5leHRUYXJnZXQpO1xyXG4gICAgICAgIHJldHVybiBhdHRhY2tSZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xyXG4gICAgICAgIHJldHVybiBuZXh0VGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q29vcmRzLFxyXG4gICAgICAgIC4uLnByb3RvLFxyXG4gICAgICAgIHJhbmRvbUF0dGFjayxcclxuICAgICAgICBzbWFydEF0dGFja1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyIH07IiwiLy8gbGVuZ3RoID0gbnVtYmVyXHJcbi8vIGhpdHMgPSBudW1iZXIgb3IgYXJyYXkgb2YgYm9vbGVhbiB2YWx1ZXMgcmVwcmVzZW50aW5nIGVhY2ggc2hpcCBwYXJ0P1xyXG4vLyBpc1N1bmsgPSBlaXRoZXIgY2hlY2sgaWYgZGFtYWdlID49IGxlbmd0aCBPUiBjaGVjayBpZiBldmVyeSBhcnJheSBlbGVtZW50IGlzIHRydWVcclxuXHJcbi8vIFwiUkVNRU1CRVIgeW91IG9ubHkgaGF2ZSB0byB0ZXN0IHlvdXIgb2JqZWN04oCZcyBwdWJsaWMgaW50ZXJmYWNlLiBPbmx5IG1ldGhvZHMgb3IgcHJvcGVydGllcyB0aGF0IGFyZSB1c2VkIG91dHNpZGUgb2YgeW91ciDigJhzaGlw4oCZIG9iamVjdCBuZWVkIHVuaXQgdGVzdHMuXCJcclxuXHJcbmNvbnN0IFNoaXAgPSAoc2hpcFR5cGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBDbGFzc2VzID0ge1xyXG4gICAgICAgIGNhcnJpZXI6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogNSxcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYXR0bGVzaGlwOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWFyaW5lOiB7XHJcbiAgICAgICAgICAgIHNoaXBMZW5ndGg6IDMsXHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3J1aXNlcjoge1xyXG4gICAgICAgICAgICBzaGlwTGVuZ3RoOiAzLFxyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhdHJvbEJvYXQ6IHtcclxuICAgICAgICAgICAgc2hpcExlbmd0aDogMixcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaGl0c0Ftb3VudCA9IDA7XHJcbiAgICBjb25zdCB7IHNoaXBMZW5ndGgsIGlkIH0gPSBzaGlwQ2xhc3Nlc1tzaGlwVHlwZV07XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gdGhhdCBpbmNyZWFzZXMgdGhlIG51bWJlciBvZiDigJhoaXRz4oCZIHRvIHlvdXIgc2hpcC5cclxuICAgIGZ1bmN0aW9uIGhpdCgpIHtcclxuICAgICAgICB0aGlzLmhpdHNBbW91bnQrKztcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlcyB3aGV0aGVyIGhhcyBzdW5rIGJhc2VkIG9uIHNoaXAncyBsZW5ndGggYW5kIHRoZSBudW1iZXIgb2Yg4oCYaGl0c+KAmS5cclxuICAgIGZ1bmN0aW9uIGlzU3VuaygpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRzQW1vdW50ID49IHNoaXBMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNoaXBDbGFzc2VzLFxyXG4gICAgICAgIHNoaXBMZW5ndGgsXHJcbiAgICAgICAgaGl0LFxyXG4gICAgICAgIGhpdHNBbW91bnQsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgaXNTdW5rLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiLCJpbXBvcnQgKiBhcyBHQU1FIGZyb20gXCIuL2dhbWVcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29yZHMsIGNvbnZlcnRDb29yZFRvSWQgfSBmcm9tIFwiLi91dGlsaXR5L3BhcnNlQ29vcmRzXCI7XHJcbmltcG9ydCB7IGdldE5hbWUgfSBmcm9tIFwiLi91dGlsaXR5L2dldE5hbWVcIjtcclxuaW1wb3J0IGJhdHRsZVNoaXBJY29uIGZyb20gXCIuLi9hc3NldHMvYmF0dGxlc2hpcC1pY29uLnN2Z1wiO1xyXG5cclxuY29uc3QgcmVuZGVyT3V0ZXJDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkcy1jb250YWluZXInKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJNYWluTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJCYXR0bGVzaGlwc1wiO1xyXG4gICAgY29uc3Qgc3RhcnRCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1wcmVnYW1lLWJ0bi1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3N0YXJ0LWJ0bicpO1xyXG4gICAgc3RhcnRCdG4uaWQgPSBcInN0YXJ0XCI7XHJcbiAgICBzdGFydEJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBnYW1lJzsgICAgXHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTsgICAgXHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDYXJkKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKHN0YXJ0QnRuQ29udGFpbmVyKTtcclxuICAgIHN0YXJ0QnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcclxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU5hbWVNZW51KTtcclxufVxyXG5cclxuY29uc3QgaGlkZUVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxufVxyXG5cclxuY29uc3QgYmx1ckVsZW1lbnQgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUJsdXIgPSAoZWxlbWVudCkgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlOYW1lTWVudSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1jb250YWluZXInKTtcclxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtY2FyZCcpO1xyXG4gICAgY29uc3QgYXNrTmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcclxuICAgIGFza05hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYXNrLW5hbWUtY29udGFpbmVyJyk7XHJcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChhc2tOYW1lQ29udGFpbmVyKTtcclxuICAgIGNvbnN0IG5hbWVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25hbWUtaW5wdXQnKTtcclxuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IGBBZG1pcmFsIG9uZSBuYW1lOiBgXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LmlkID0gJ25hbWUtaW5wdXQnO1xyXG4gICAgY29uc3QgbmFtZVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbmFtZVN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XHJcbiAgICBhc2tOYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGb3JtKTtcclxuICAgIG5hbWVGb3JtLmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgbmFtZUZvcm0uYXBwZW5kQ2hpbGQobmFtZVN1Ym1pdCk7XHJcbiAgICBuYW1lU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGdldE5hbWUoKTtcclxuICAgICAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgICAgICAgICAgaGlkZUVsZW1lbnQobWVudUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLmRpc2FibGVkID0gdHJ1ZTtcclxufVxyXG5cclxuLy8gUmVtb3ZlIGNoaWxkIGVscyBmcm9tIGEgcGFyZW50IGVsICYgcmV0dXJucyByZW1vdmVkIG5vZGUgLSBlLmcuIG91dGVyY29udGFpbmVyXHJcbmNvbnN0IGNsZWFyQ2hpbGRFbGVtZW50cyA9IChlbGVtZW50KSA9PiB7XHJcbiAgICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTaGlwUGxhY2VtZW50ID0gKHBsYXllcikgPT4ge1xyXG4gICAgY29uc3QgYm9hcmRPYmogPSBwbGF5ZXIuZ2V0Qm9hcmRPYmooKTtcclxuICAgIGNvbnN0IGJvYXJkQXJyID0gcGxheWVyLmdldEJvYXJkQXJyYXkoKTsgICAgXHJcblxyXG4gICAgLy8gLSBwb3AgcmVtb3ZlcyAmIHJldHVybnMgbGFzdCBlbGVtZW50IG9mIGFycmF5IC0gb25jZSB0aGUgYXJyYXkgaXMgZW1wdHkgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkXHJcbiAgICBjb25zdCBzaGlwVHlwZSA9IHBsYXllci5zaGlwTGlzdC5wb3AoKTtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBwbGF5ZXIuc2hpcExlbmd0aEFycmF5LnBvcCgpO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gICAgXHJcbiAgICAvLyBDbGljayBhIHNxdWFyZSB0byBwbGFjZSBzaGlwXHJcbiAgICBjb25zdCBwbGFjZVNoaXBDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgLy8gc3F1YXJlIGlkIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgLy8gbWFrZSB0aGUgbGVnZW5kICYgdGhlIGdhcHMgYmV0d2VlbiBzcXVhcmVzIG5vbiBjbGlja2FibGUpXHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIGNvb3JkcyBpbiBhcnJheSBmb3JtYXRcclxuICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTtcclxuICAgICAgICAvLyBlbmQgcG9zIGNvb3JkIGNhbGNkIGZyb20gc3RhcnQgcG9zXHJcbiAgICAgICAgY29uc3QgZW5kUG9zID0gYm9hcmRPYmouZ2V0RW5kQ29vcmQoc3RhcnRQb3MsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmRPYmouY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGFyZSBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICBib2FyZE9iai5wbGFjZVNoaXAoc2hpcFR5cGUsIHN0YXJ0UG9zLCBlbmRQb3MpOyAvL2UuZyAnYmF0dGxlc2hpcCcsIFswLDBdLCBbNCwwXVxyXG4gICAgICAgICAgICAvLyByZWN1cnNpdmUgLSBwb3AgYSBuZXcgc2hpcCB0eXBlIGludG8gcGxhY2VTaGlwIGZ1bmN0aW9uIHVudGlsIGV2ZXJ5IHNoaXAgaXMgcGxhY2VkXHJcbiAgICAgICAgICAgIGRpc3BsYXlTaGlwUGxhY2VtZW50KHBsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vdXNlIGVudGVyIGV2ZW50IGhhbmRsZXJcclxuICAgIGNvbnN0IGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGxheUhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNb3VzZSBsZWF2ZSBldmVudCBoYW5kbGVyXHJcbiAgICBjb25zdCBoYW5kbGVQbGFjZVNoaXBNb3VzZUxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySG92ZXJFZmZlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzd2l0Y2ggc2hpcCBvcmllbnRhdGlvbiBkdXJpbmcgcGxhY2VtZW50IHRvIHB1dCBvbiByaWdodCBjbGlja1xyXG4gICAgY29uc3Qgcm90YXRlRGlyZWN0aW9uID0gKGUpID0+IHtcclxuICAgICAgICAvLyBwcmV2ZW50IHJpZ2h0IGNsaWNrIG1lbnUgYXBwZWFyaW5nXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSB7IC8vZS5nLiBpZiBsZWdlbmRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYXJIb3ZlckVmZmVjdChwb3NpdGlvbik7XHJcbiAgICAgICAgZGlzcGxheUhvdmVyRWZmZWN0KHBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgaG92ZXIgZWZmZWN0IHRvIGRpdiBzcXVhcmUgaWQgXHJcbiAgICBjb25zdCBkaXNwbGF5SG92ZXJFZmZlY3QgPSAocG9zaXRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBhcnNlQ29vcmRzKHBvc2l0aW9uKTsgLy8gZWcuIDEwQSA9ICdbOSwwXSdcclxuICAgICAgICBjb25zdCBlbmRQb3MgPSBib2FyZE9iai5nZXRFbmRDb29yZChzdGFydFBvcywgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKTsgLy9lZy4gWzksMF0sICd2ZXJ0aWNhbCcsIDIgPSBbMTAsMF1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxDb29yZHMgPSBib2FyZE9iai5nZXRBbGxDb29yZHMoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgLy8gaWYgY29vcmRzIGFyZSBlbXB0eSAmIHdpdGhpbiBib2FyZCBib3VuZGFyaWVzXHJcbiAgICAgICAgY29uc3QgdmFsaWRTaGlwUGxhY2VtZW50ID0gYm9hcmRPYmouY2FuUGxhY2VTaGlwQmV0d2VlbihzdGFydFBvcywgZW5kUG9zKTtcclxuXHJcbiAgICAgICAgYWxsQ29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChib2FyZE9iai5hcmVDb29yZHNXaXRoaW5Cb2FyZChjb29yZCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZFN0cmluZyA9IGNvbnZlcnRDb29yZFRvSWQoY29vcmQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkU2hpcFBsYWNlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkU3RyaW5nfWApLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtc2hpcC1wbGFjZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGhvdmVyIGVmZmVjdHMgKGVnIG9uIG1vdXNlbGVhdmUpXHJcbiAgICBjb25zdCBjbGVhckhvdmVyRWZmZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFsbFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3F1YXJlJyk7XHJcbiAgICAgICAgYWxsU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkLXNoaXAtcGxhY2VtZW50Jyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdGFydEdhbWVwbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIHNoaXBzIGFyZW50IGFsbCBwbGFjZWQsIGRvbid0IHN0YXJ0XHJcbiAgICAgICAgaWYgKHNoaXBMZW5ndGggIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEdBTUUuc3RhcnRHYW1lUGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0U2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgICAgIEdBTUUucmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICAgICAgR0FNRS5zdGFydFByZUdhbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCdzdGFydC1idG4nKTtcclxuICAgIHN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcclxuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVN0YXJ0R2FtZXBsYXkpO1xyXG5cclxuICAgIGNvbnN0IGF1dG9TaGlwUGxhY2VtZW50QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncGxhY2Utc2hpcHMtYnRuJyk7XHJcbiAgICBhdXRvU2hpcFBsYWNlbWVudEJ0bi50ZXh0Q29udGVudCA9ICdBdXRvIHBsYWNlJztcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgR0FNRS5hdXRvU2hpcFBsYWNlbWVudCk7XHJcblxyXG4gICAgY29uc3QgcmVzZXRTaGlwc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcmVzZXRTaGlwc0J0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmVzZXQtYnRuJyk7XHJcbiAgICByZXNldFNoaXBzQnRuLnRleHRDb250ZW50ID0gJ1Jlc2V0IFNoaXBzJztcclxuICAgIHJlc2V0U2hpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVSZXNldFNoaXBzKTtcclxuXHJcbiAgICBjb25zdCBvdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtY29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgIHJlbW92ZUJsdXIoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2FyZHNDb250YWluZXIpOyBcclxuXHJcbiAgICBsZXQgZ2FtZWJvYXJkO1xyXG5cclxuICAgIC8vIGlmIHNoaXBsZW5ndGggY29udGFpbnMgYSBudW1iZXIgLyBpc250IHVuZGVmaW5lZC4gaS5lLiBpZiBzaGlwcyBzdGlsbCBuZWVkcyB0byBiZSBwbGFjZWQgYWRkIGNsaWNrIGV2ZW50XHJcbiAgICBpZiAoc2hpcExlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2FtZWJvYXJkID0gZGlzcGxheUJvYXJkKGJvYXJkQXJyLCAncHJlLWdhbWUnLCBwbGFjZVNoaXBDbGljayk7XHJcbiAgICAgICAgZ2FtZWJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGhhbmRsZVBsYWNlU2hpcE1vdXNlRW50ZXIpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGhhbmRsZVBsYWNlU2hpcE1vdXNlTGVhdmUpO1xyXG4gICAgICAgIGdhbWVib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIHJvdGF0ZURpcmVjdGlvbik7XHJcbiAgICB9IGVsc2UgeyAvL3JlbmRlciBib2FyZCB3aXRob3V0IGV2ZW50c1xyXG4gICAgICAgIGdhbWVib2FyZCA9IGRpc3BsYXlCb2FyZChib2FyZEFyciwgJ3ByZS1nYW1lJyk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zO1xyXG5cclxuICAgIGlmIChzaGlwTGVuZ3RoKSB7IC8vIGlmIGNvbnRhaW5zIGEgbnVtXHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYFBsYWNlIHRoZSAke3NoaXBUeXBlfSwgJHtnZXROYW1lKCl9LiBSaWdodCBjbGljayB0byByb3RhdGUuYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5zdHJ1Y3Rpb25zID0gYENsaWNrIG9uIHN0YXJ0IGdhbWUgdG8gYmVnaW4hYDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbnN0cnVjdGlvbnNQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaW5zdHJ1Y3Rpb25zUGFyYS5jbGFzc0xpc3QuYWRkKCdpbnN0cnVjdGlvbnMnKTtcclxuICAgIGluc3RydWN0aW9uc1BhcmEudGV4dENvbnRlbnQgPSBpbnN0cnVjdGlvbnM7XHJcblxyXG4gICAgY29uc3QgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnYW1lYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlLWdhbWUtZ2FtZWJvYXJkLWNvbnRhaW5lcicpO1xyXG4gICAgb3V0ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVib2FyZCk7ICAgXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnRuLWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xyXG4gICAgZ2FtZWJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5zdHJ1Y3Rpb25zUGFyYSk7XHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuR3JvdXApO1xyXG5cclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKGF1dG9TaGlwUGxhY2VtZW50QnRuKTtcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHJlc2V0U2hpcHNCdG4pOyAgICBcclxuICAgIGJ0bkdyb3VwLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XHJcbn1cclxuXHJcbi8vIG1vZGUgd2lsbCBiZSBjYWxsZWQgYXMncHJlLWdhbWUnIG9yICdwbGF5ZXInLydlbmVteScgc3RyaW5nc1xyXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoYm9hcmRBcnIsIG1vZGUsIGNsaWNrQ2IpIHtcclxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoYCR7bW9kZX1gLCAnZ2FtZWJvYXJkJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGJvYXJkQXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7IC8vIFJPVyBpLmUgbnVtc1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IGJvYXJkQXJyW2ldO1xyXG4gICAgICAgIGxldCByb3dDb29yZCA9IGkgKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7IC8vIENPTFxyXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkgeyAvLyBST1cgTEVHRU5EXHJcbiAgICAgICAgICAgICAgICBjb25zdCByb3dMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvd0xlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwicm93XCIpO1xyXG4gICAgICAgICAgICAgICAgcm93TGVnZW5kLnRleHRDb250ZW50ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKHJvd0xlZ2VuZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY29sQ29vcmQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaik7IC8vIGNvbnZlcnQgdG8gbGV0dGVycztcclxuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IGAke3Jvd0Nvb3JkfSR7Y29sQ29vcmR9YDtcclxuICAgICAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHNxdWFyZS5pZCA9IGNvb3JkaW5hdGU7XHJcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLmFwcGVuZENoaWxkKHNxdWFyZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gJ3ByZS1nYW1lJyB8fCBtb2RlID09PSAncGxheWVyJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBib2FyZEFycltpXVtqXSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLmlubmVySFRNTCA9IGJhdHRsZVNoaXBJY29uO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGJvYXJkQXJyW2ldW2pdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1gnKSkge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuaW5uZXJIVE1MID0gXCJYXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRBcnJbaV1bal0udG9TdHJpbmcoKS5pbmNsdWRlcygnUycpKSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYm9hcmRBcnJbaV1bal0gPT09ICdNJykge1xyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gQ09MIExFR0VORFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gYm9hcmRBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNvbExlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIsIFwiY29sXCIpO1xyXG4gICAgICAgIGNvbExlZ2VuZC50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjQgKyBpKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb2xMZWdlbmQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lYm9hcmQuYXBwZW5kKGNvbExlZ2VuZCk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaWYgKGNsaWNrQ2IpIHtcclxuICAgICAgICBnYW1lYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0NiKTsgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICByZXR1cm4gZ2FtZWJvYXJkO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJUdXJuVHJhY2tlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHR1cm5UcmFja2VyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnR1cm4tdHJhY2tlci1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHR1cm5UcmFja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHR1cm5UcmFja2VyLmNsYXNzTGlzdC5hZGQoJ3R1cm50cmFja2VyJyk7IFxyXG4gICAgY29uc3QgY29tbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgY29tbWVudEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbW1lbnRCb3guY2xhc3NMaXN0LmFkZCgnY29tbWVudC1ib3gnKTtcclxuXHJcbiAgICB0dXJuVHJhY2tlci50ZXh0Q29udGVudCA9IGAke0dBTUUuZ2V0VHVybigpfSdzIHR1cm5gO1xyXG4gICAgaWYgKEdBTUUuZ2V0VHVybigpID09PSAnUGxheWVyJykge1xyXG4gICAgICAgIHR1cm5UcmFja2VyLnRleHRDb250ZW50ID0gYCR7Z2V0TmFtZSgpfSdzIHR1cm5gO1xyXG4gICAgfSBcclxuXHJcbiAgICBjb21tZW50Qm94LnRleHRDb250ZW50ID0gYCR7R0FNRS5nZXRSZXN1bHQoKX1gO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKHR1cm5UcmFja2VyQ29udGFpbmVyKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKHR1cm5UcmFja2VyKTtcclxuICAgIHR1cm5UcmFja2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbW1lbnRDb250YWluZXIpO1xyXG4gICAgY29tbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21tZW50Qm94KTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyR2FtZUxheW91dCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGxheWVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItY29udGFpbmVyXCIpO1xyXG4gICAgY29uc3QgZW5lbXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVuZW15Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbmVteS1jb250YWluZXJcIik7XHJcbiAgICBjb25zdCB0dXJuVHJhY2tlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdHVyblRyYWNrZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndHVybi10cmFja2VyLWNvbnRhaW5lcicpOyAgICBcclxuICAgIFxyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1jb250YWluZXInKTsgICAgXHJcbiAgICBjbGVhckNoaWxkRWxlbWVudHMoYm9hcmRzQ29udGFpbmVyKTtcclxuICAgIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJDb250YWluZXIpO1xyXG4gICAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHR1cm5UcmFja2VyQ29udGFpbmVyKTtcclxuICAgIHJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlDb250YWluZXIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJCb2FyZFVwZGF0ZXMgPSAoZW5lbXlCb2FyZEFyciwgcGxheWVyQm9hcmRBcnIpID0+IHtcclxuICAgIHJlbmRlckVuZW15Qm9hcmQoZW5lbXlCb2FyZEFycik7XHJcbiAgICByZW5kZXJQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZEFycik7XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKHBsYXllckJvYXJkQXJyKSA9PiB7XHJcbiAgICBjb25zdCBwbGF5ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLWNvbnRhaW5lcicpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKHBsYXllckNvbnRhaW5lcik7XHJcblxyXG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkaXNwbGF5Qm9hcmQocGxheWVyQm9hcmRBcnIsICdwbGF5ZXInKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHBsYXllckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYm9hcmQtdGl0bGUnLCAncGxheWVyJyk7XHJcbiAgICBwbGF5ZXJIZWFkaW5nLnRleHRDb250ZW50ID0gJ1BsYXllciBib2FyZCc7XHJcbiAgICBjb25zdCByZW1haW5pbmdTaGlwQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY291bnRlcicpO1xyXG4gICAgcmVtYWluaW5nU2hpcENvdW50ZXIudGV4dENvbnRlbnQgPSAnWCBTaGlwcyByZW1haW5pbmcnO1xyXG5cclxuICAgIHBsYXllckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZCk7XHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVySGVhZGluZyk7XHJcbiAgICBwbGF5ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtYWluaW5nU2hpcENvdW50ZXIpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJFbmVteUJvYXJkID0gKGVuZW15Qm9hcmRBcnIpID0+IHtcclxuICAgIGNvbnN0IGVuZW15Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZW15LWNvbnRhaW5lcicpO1xyXG4gICAgY2xlYXJDaGlsZEVsZW1lbnRzKGVuZW15Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgY29uc3QgZW5lbXlCb2FyZCA9IGRpc3BsYXlCb2FyZChlbmVteUJvYXJkQXJyLCAnZW5lbXknLCBoYW5kbGVBdHRhY2tDbGljayk7XHJcblxyXG4gICAgY29uc3QgZW5lbXlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGVuZW15SGVhZGluZy5jbGFzc0xpc3QuYWRkKCdib2FyZC10aXRsZScsICdlbmVteScpO1xyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcENvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICByZW1haW5pbmdTaGlwQ291bnRlci5jbGFzc0xpc3QuYWRkKCdzaGlwLWNvdW50ZXInKTtcclxuICAgIHJlbWFpbmluZ1NoaXBDb3VudGVyLnRleHRDb250ZW50ID0gJ1ggU2hpcHMgcmVtYWluaW5nJztcclxuXHJcbiAgICBlbmVteUhlYWRpbmcudGV4dENvbnRlbnQgPSAnRW5lbXkgYm9hcmQnO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5lbXlCb2FyZCk7XHJcbiAgICBlbmVteUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmVteUhlYWRpbmcpO1xyXG4gICAgZW5lbXlDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtYWluaW5nU2hpcENvdW50ZXIpOyAgICBcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQXR0YWNrQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKEdBTUUuZ2V0VHVybigpID09PSAnRW5lbXknKSByZXR1cm47XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgaWYgKHBvc2l0aW9uID09PSBudWxsKSByZXR1cm47XHJcbiAgICBjb25zdCBjb29yZHMgPSBwYXJzZUNvb3Jkcyhwb3NpdGlvbik7XHJcbiAgICBHQU1FLnBsYXllckF0dGFjayhjb29yZHMpO1xyXG59XHJcblxyXG5jb25zdCByZW5kZXJWaWN0b3J5U2NyZWVuID0gKHdpbm5lcikgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1tb2RhbCcpO1xyXG4gICAgY29uc3QgYnRuR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ0bkdyb3VwLmNsYXNzTGlzdC5hZGQoJ2J0bi1ncm91cCcpO1xyXG4gICAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LmFkZCgnYnRuJywgJ3BsYXktYWdhaW4tYnRuJyk7XHJcbiAgICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSAnUGxheSBhZ2Fpbic7XHJcbiAgICBjb25zdCByZXR1cm5Ub01lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJldHVyblRvTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nLCAncmV0dXJuLW1lbnUtYnRuJyk7XHJcbiAgICByZXR1cm5Ub01lbnVCdG4udGV4dENvbnRlbnQgPSAnUmV0dXJuIHRvIG1lbnUnO1xyXG4gICAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUGxheUFnYWluKTtcclxuICAgIHJldHVyblRvTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVJldHVyblRvTWVudSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgaWYgKHdpbm5lciA9PT0gJ1BsYXllcicpIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IHdpbiFgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQ29uZ3JhdHVsYXRpb25zISBXYW50IHRvIHBsYXkgYW5vdGhlciByb3VuZD9gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgWW91IGxvc2VgO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLiBXYW50IHRvIHRyeSBhZ2Fpbj9gO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG91dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1jb250YWluZXInKTtcclxuICAgIGJsdXJFbGVtZW50KGJvYXJkc0NvbnRhaW5lcik7XHJcbiAgICBvdXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQocGFyYSk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChidG5Hcm91cCk7XHJcbiAgICBidG5Hcm91cC5hcHBlbmRDaGlsZChyZXR1cm5Ub01lbnVCdG4pO1xyXG4gICAgYnRuR3JvdXAuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKTsgICAgXHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLW1vZGFsJyk7XHJcbiAgICBtb2RhbC5yZW1vdmUoKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlUmV0dXJuVG9NZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNsZWFyQ2hpbGRFbGVtZW50cyhib2R5KTtcclxuICAgIEdBTUUuc3RhcnRHYW1lKCk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVBsYXlBZ2FpbiA9ICgpID0+IHtcclxuICAgIHJlbW92ZU1vZGFsKCk7XHJcbiAgICBHQU1FLnBsYXlBZ2FpbigpO1xyXG59XHJcblxyXG5leHBvcnQgeyAgICBcclxuICAgIGRpc3BsYXlOYW1lTWVudSxcclxuICAgIHJlbmRlck91dGVyQ29udGFpbmVyLFxyXG4gICAgcmVuZGVyTWFpbk1lbnUsXHJcbiAgICBkaXNwbGF5U2hpcFBsYWNlbWVudCxcclxuICAgIHJlbmRlckJvYXJkVXBkYXRlcyxcclxuICAgIHJlbmRlckVuZW15Qm9hcmQsXHJcbiAgICByZW5kZXJHYW1lTGF5b3V0LFxyXG4gICAgcmVuZGVyUGxheWVyQm9hcmQsXHJcbiAgICByZW5kZXJUdXJuVHJhY2tlcixcclxuICAgIHJlbmRlclZpY3RvcnlTY3JlZW5cclxufSIsImltcG9ydCAqIGFzIFBsYXllciBmcm9tICcuLi9mYWN0b3JpZXMvcGxheWVyJztcclxuaW1wb3J0IFNoaXAgZnJvbSAnLi4vZmFjdG9yaWVzL3NoaXAnO1xyXG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xyXG5pbXBvcnQgeyBjb252ZXJ0Q29vcmRUb0lkIH0gZnJvbSBcIi4vdXRpbGl0eS9wYXJzZUNvb3Jkc1wiO1xyXG5cclxubGV0IHBsYXllcjtcclxubGV0IGNvbXB1dGVyO1xyXG5sZXQgdHVybiA9ICdQbGF5ZXInO1xyXG5sZXQgcmVzdWx0U3RyaW5nO1xyXG5cclxuY29uc3QgcmVzZXRQbGF5ZXJPYmpzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5jbGVhcigpO1xyXG4gICAgcGxheWVyID0gUGxheWVyLlBsYXllcigpO1xyXG4gICAgY29tcHV0ZXIgPSBQbGF5ZXIuQ29tcHV0ZXIoKTtcclxuICAgIGNvbXB1dGVyLnBsYWNlU2hpcHNSYW5kb21seSgpOyAgICBcclxufVxyXG5cclxuLy8gTWFpbiBtZW51IC0gc3RhcnQgZ2FtZSBidG5cclxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgRE9NLnJlbmRlck91dGVyQ29udGFpbmVyKCk7XHJcbiAgICBET00ucmVuZGVyTWFpbk1lbnUoKTtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpO1xyXG59XHJcblxyXG4vLyBQUkUtR0FNRSAtIHRha2UgcGxheWVyIG5hbWUsIHNoaXAgcGxhY2VtZW50XHJcbmNvbnN0IHN0YXJ0UHJlR2FtZSA9ICgpID0+IHtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG59XHJcblxyXG5jb25zdCBhdXRvU2hpcFBsYWNlbWVudCA9ICgpID0+IHtcclxuICAgIHJlc2V0UGxheWVyT2JqcygpOyAgICBcclxuICAgIHBsYXllci5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcclxuICAgIERPTS5kaXNwbGF5U2hpcFBsYWNlbWVudChwbGF5ZXIpO1xyXG59XHJcblxyXG4vLyBPbmNlIHNoaXBzIHBsYWNlZCwgc3RhcnQgZ2FtZSAtIHJlbmRlciBwbGF5ZXIgYW5kIGVuZW15IGJvYXJkcyAmIGFkZCBwbGF5ZXIgbmFtZSB0byBzY3JlZW5cclxuY29uc3Qgc3RhcnRHYW1lUGxheSA9ICgpID0+IHtcclxuICAgIERPTS5yZW5kZXJHYW1lTGF5b3V0KCk7XHJcbiAgICBET00ucmVuZGVyUGxheWVyQm9hcmQocGxheWVyLmdldEJvYXJkQXJyYXkoKSk7XHJcbiAgICBET00ucmVuZGVyRW5lbXlCb2FyZChjb21wdXRlci5nZXRCb2FyZEFycmF5KCkpO1xyXG4gICAgY29uc29sZS5sb2coY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG59XHJcblxyXG4vLyAtIGF0dGFjayBlbmVteSBib2FyZCAoZ2V0IGFub3RoZXIgdHVybiBpZiBoaXQpLCB0byBiZSBwdXQgb24gY2xpY2sgZXZlbnQgdGFyZ2V0dGluZyBjb29yZHNcclxuY29uc3QgcGxheWVyQXR0YWNrID0gKGNvb3JkcykgPT4ge1xyXG4gICAgLy8gcmV0dXJucyByZXN1bHRzIG9mIGF0dGFjayBvbiBlbmVteSBib2FyZCB3aXRoIGlucHV0IGNvb3JkcyAtIHgsIG0sIHMsIGdhbWUgb3ZlclxyXG4gICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gcGxheWVyLmF0dGFjayhjb29yZHMsIGNvbXB1dGVyLmdldEJvYXJkT2JqKCkpO1xyXG5cclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBjb29yZHM7XHJcbiAgICBjb25zdCBib2FyZFZhbCA9IGNvbXB1dGVyLmdldEJvYXJkT2JqKCkuZ2V0QXJyYXkoKVtyb3ddW2NvbF07XHJcblxyXG4gICAgLy8gdXBkYXRlIERPTSBib2FyZHMgd2l0aCBhdHRhY2sgcmVzdWx0c1xyXG4gICAgRE9NLnJlbmRlckJvYXJkVXBkYXRlcyhjb21wdXRlci5nZXRCb2FyZEFycmF5KCksIHBsYXllci5nZXRCb2FyZEFycmF5KCkpO1xyXG5cclxuICAgIGlmIChhdHRhY2tSZXN1bHQgPT09ICdHYW1lIE92ZXInKSB7XHJcbiAgICAgICAgZGVjbGFyZVdpbm5lcignUGxheWVyJyk7IC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdtaXNzJykge1xyXG4gICAgICAgIHJlc3VsdFN0cmluZyA9IGAke2NvbnZlcnRDb29yZFRvSWQoY29vcmRzKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9YDtcclxuICAgICAgICB0dXJuID0gJ0VuZW15JztcclxuICAgICAgICBlbmVteUF0dGFjaygpO1xyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpO1xyXG4gICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdoaXQnKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gYCR7Y29udmVydENvb3JkVG9JZChjb29yZHMpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH0hIFRha2UgYW5vdGhlciBzaG90YDtcclxuICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgIH0gZWxzZSBpZiAoYXR0YWNrUmVzdWx0ID09PSAnc3VuaycpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgY29tcHV0ZXIuZ2V0U2hpcExpc3QoKS5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNoaXBUeXBlID0gY29tcHV0ZXIuZ2V0U2hpcExpc3QoKVtpXTtcclxuICAgICAgICAgICAgLy8gYm9hcmR2YWwgaW5jbHVkZXMgc2hpcCBjbGFzcyBpZFxyXG4gICAgICAgICAgICBpZiAoYm9hcmRWYWwuaW5jbHVkZXMoU2hpcChzaGlwVHlwZSkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRTdHJpbmcgPSBgWW91ICR7YXR0YWNrUmVzdWx0fSB0aGVpciAke3NoaXBUeXBlfSEgVGFrZSBhbm90aGVyIHNob3RgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIERPTS5yZW5kZXJUdXJuVHJhY2tlcigpOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXR0YWNrUmVzdWx0O1xyXG59XHJcblxyXG4vLyAtIHJlY2VpdmUgZW5lbXkgYXR0YWNrIFxyXG5jb25zdCBlbmVteUF0dGFjayA9IChhdHRhY2tSZXN1bHQpID0+IHsgXHJcbiAgICAgICAgXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0ID09PSAnR2FtZSBPdmVyJykgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRlY2xhcmVXaW5uZXIoJ0NvbXB1dGVyJyk7IC8vIHZpY3RvcnkvZGVmZWF0IHNjcmVlblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChhdHRhY2tSZXN1bHQgPT09ICdtaXNzJykge1xyXG4gICAgICAgICAgICB0dXJuID0gJ1BsYXllcic7XHJcbiAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IGBDb21wdXRlcidzIHNob3Qgb24gJHtjb252ZXJ0Q29vcmRUb0lkKGNvbXB1dGVyLmdldENvb3JkcygpKX0gd2FzIGEgJHthdHRhY2tSZXN1bHR9YDtcclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ2hpdCcpIHtcclxuICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYENvbXB1dGVyJ3Mgc2hvdCBvbiAke2NvbnZlcnRDb29yZFRvSWQoY29tcHV0ZXIuZ2V0Q29vcmRzKCkpfSB3YXMgYSAke2F0dGFja1Jlc3VsdH1gO1xyXG4gICAgICAgICAgICBET00ucmVuZGVyVHVyblRyYWNrZXIoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGVsc2UgaWYgKGF0dGFja1Jlc3VsdCA9PT0gJ3N1bmsnKSB7IC8vIE5vdCBjdXJyZW50bHkgd29ya2luZ1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VuayEnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IHBsYXllci5nZXRTaGlwTGlzdCgpLmxlbmd0aCA+IGk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNoaXBUeXBlID0gcGxheWVyLmdldFNoaXBMaXN0KClbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBib2FyZHZhbCBpbmNsdWRlcyBzaGlwIGNsYXNzIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2xdID0gY29tcHV0ZXIuZ2V0Q29vcmRzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib2FyZFZhbCA9IHBsYXllci5nZXRCb2FyZEFycmF5KClbcm93XVtjb2xdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkVmFsLnRvU3RyaW5nKCkuaW5jbHVkZXMoU2hpcChzaGlwVHlwZSkuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gYFlvdXIgJHtzaGlwVHlwZX0gaGFzIGJlZW4gJHthdHRhY2tSZXN1bHR9IWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NLnJlbmRlclR1cm5UcmFja2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNhbGwgYXR0YWNrIC0gcmFuZG9tIGF0dGFjayByZXR1cm5zIGF0dGFja1Jlc3VsdFxyXG4gICAgICAgIGVuZW15QXR0YWNrKGNvbXB1dGVyLnNtYXJ0QXR0YWNrKHBsYXllci5nZXRCb2FyZE9iaigpKSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyB1cGRhdGUgRE9NIGJvYXJkc1xyXG4gICAgICAgIERPTS5yZW5kZXJCb2FyZFVwZGF0ZXMoY29tcHV0ZXIuZ2V0Qm9hcmRBcnJheSgpLCBwbGF5ZXIuZ2V0Qm9hcmRBcnJheSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dGFja1Jlc3VsdDtcclxuICAgIH0sIDcwMCk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFR1cm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gdHVybjtcclxufVxyXG5cclxuY29uc3QgZ2V0UmVzdWx0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHJlc3VsdFN0cmluZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmVzdWx0U3RyaW5nID0gJ0ZpcmUgd2hlbiByZWFkeSEnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFN0cmluZztcclxufVxyXG5cclxuLy8gVmljdG9yeSBzY3JlZW4gLyByZXN0YXJ0IGJ0blxyXG5jb25zdCBkZWNsYXJlV2lubmVyID0gKHdpbm5lcikgPT4ge1xyXG4gICAgRE9NLnJlbmRlclZpY3RvcnlTY3JlZW4od2lubmVyKTtcclxufVxyXG5cclxuY29uc3QgcGxheUFnYWluID0gKCkgPT4ge1xyXG4gICAgcmVzdWx0U3RyaW5nID0gJ0ZpcmUgd2hlbiByZWFkeSEnO1xyXG4gICAgdHVybiA9ICdQbGF5ZXInO1xyXG4gICAgcmVzZXRQbGF5ZXJPYmpzKCk7XHJcbiAgICBzdGFydFByZUdhbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGF1dG9TaGlwUGxhY2VtZW50LFxyXG4gICAgZ2V0UmVzdWx0LFxyXG4gICAgZ2V0VHVybixcclxuICAgIHBsYXlBZ2FpbixcclxuICAgIHBsYXllckF0dGFjayxcclxuICAgIHJlc2V0UGxheWVyT2JqcyxcclxuICAgIHN0YXJ0UHJlR2FtZSxcclxuICAgIHN0YXJ0R2FtZSxcclxuICAgIHN0YXJ0R2FtZVBsYXlcclxufVxyXG5cclxuLy8gVE8gRE86IFxyXG4vLyBGaWxsIGluIFggc2hpcHMgcmVtYWluaW5nIiwiY29uc3QgZ2V0TmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgcGxheWVyTmFtZSA9ICdBZG1pcmFsIG9uZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGxheWVyTmFtZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0TmFtZSB9OyIsIi8vIHRha2VzIGlucHV0IHNxdWFyZSBpZCBzdHJpbmcgLSByZXR1cm5zIGJvYXJkIGFycmF5IGluZGVjZXMgZS5nLiAnMTBBJyA9IFs5LDBdXHJcbmZ1bmN0aW9uIHBhcnNlQ29vcmRzKHNxdWFyZUlkKSB7XHJcbiAgICBsZXQgcm93O1xyXG4gICAgbGV0IGNvbDtcclxuXHJcbiAgICBpZiAoc3F1YXJlSWQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgLy8gZmlyc3QgY2hhcmFjdGVyIChyb3cgbnVtKSBvbiBzcXIgaWQgd2lsbCBiZSArMSBhaGVhZCBvZiBhcnJheSBpbmRleFxyXG4gICAgICAgIHJvdyA9IHBhcnNlSW50KHNxdWFyZUlkLmNoYXJBdCgwKSkgLTE7XHJcbiAgICAgICAgLy8gc2Vjb25kIGNoYXJhY3RlciAoY29sIGxldHRlcikgd2lsbCBiZSB0cmFuc2xhdGVkIGZyb20gQS1KIHRvIDAtOVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMSkgLSA2NTtcclxuICAgIH0gZWxzZSB7IC8vIHNxciBpZCBzdHJpbmcgaXMgMyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgY29uc3QgZmlyc3RUd29DaGFycyA9IHNxdWFyZUlkLnNsaWNlKDAsMik7XHJcbiAgICAgICAgcm93ID0gcGFyc2VJbnQoZmlyc3RUd29DaGFycykgLSAxO1xyXG4gICAgICAgIC8vIHRoaXJkIGNoYXJhY3RlciBjb252ZXJ0IHRvIG51bVxyXG4gICAgICAgIGNvbCA9IHNxdWFyZUlkLmNoYXJDb2RlQXQoMikgLSA2NTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcm93LCBjb2xdO1xyXG59XHJcblxyXG4vLyB0YWtlIGFycmF5IGlucHV0IG51bXMgYW5kIGNvbnZlcnQgaXQgdG8gc3F1YXJlIGlkIHN0cmluZyAtIFs5LDBdID0gJzEwQSdcclxuZnVuY3Rpb24gY29udmVydENvb3JkVG9JZChhcnJheUl0ZW0pIHtcclxuICAgIGNvbnN0IFtyb3csIGNvbF0gPSBhcnJheUl0ZW07XHJcbiAgICBsZXQgbmV3Um93ID0gcm93ICsgMTtcclxuICAgIGxldCBuZXdDb2wgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY29sKTtcclxuICAgIGxldCBzdHJpbmdJZCA9IGAke25ld1Jvd30ke25ld0NvbH1gOyAgICBcclxuICAgIHJldHVybiBzdHJpbmdJZDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHBhcnNlQ29vcmRzLFxyXG4gICAgY29udmVydENvb3JkVG9JZFxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgR0FNRSBmcm9tICcuL21vZHVsZXMvZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuXHJcbkdBTUUuc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9