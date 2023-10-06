/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./dancingscript-variablefont_wght-webfont.woff */ "./src/dancingscript-variablefont_wght-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./dancingscript-variablefont_wght-webfont.woff2 */ "./src/dancingscript-variablefont_wght-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: HeadlineFont;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff'),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff2');
}

* {
    color: inherit;
    justify-self: center;
    text-decoration: none;
}

.activeMenu {
    color: #CD9E50;
    background-color: #a7c7ba42;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-left: 1px solid #CD9E50;
    border-right: 1px solid #CD9E50;
    border-top: 1px solid #CD9E50;
}

body {
    display: flex;
    margin: 0;
    padding: 0;
}

#contactGrid {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
}

#contactGrid button {
    color:#CD9E50;
    background-color: #88a0962a;
    border: 2px solid #CD9E50;
    border-radius: 10px;
    display: flex;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 18px;
    padding: 6px 14px;
    text-align: center;
}

#contactGrid > div:first-child {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 5vh
}

#contactGrid > div:last-child {
    flex-grow: 3;
}

#content {
    background-color: #F5F7F6;
    display: grid;
    width: 100%;
}

footer {
    color: #CD9E50;
    background-color: #dfe1de;
    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding: 1vh 0;
    text-align: center;
    width: 100%;
}

#galleryGrid {
    align-items: start;
    display: grid;
    gap: 2vmin;
    grid-template-columns: repeat(auto-fit, clamp(300px, 32%, 33%));
    justify-content: center;
    justify-items: center;
    margin: 5vh auto 5vh auto;
    width: 90vw;
}

#galleryGrid > * {
    aspect-ratio: 1 / 1;
    border: 1px solid #CD9E50;
    border-radius: 5%;
    box-sizing: border-box;
    object-fit: cover;
    width: max(300px, 28vw);
}

h1 {
    color: #88a096;
    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 48px;
}

html{
    background-color: #dfe1de;
}

iframe {
    border: 1px solid #CD9E50;
    border-radius: 2vmin;
    aspect-ratio: 4 / 3;
    display: block;
    margin: 10vh auto;
    width: min(600px, 90vw);
}

.imageLarge {
    border-radius: 3vmin;
    height: auto;
    max-width: 95vw;
    margin: 5vh 0;
}

li {
    border: 1px solid #ffffff00;
    box-sizing:border-box;
    padding: 8px 8px 12px 8px;
}

li:not(.activeMenu):hover {
    background-color: #a7c7ba25;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-left: 1px solid #CD9E5035;
    border-right: 1px solid #CD9E5035;
    border-top: 1px solid #CD9E5035;
}

#topBar {
    align-items: center;
    background-color: #dfe1de;
    border-bottom: 2px solid #CD9E50;
    color: #88a096;
    display: flex;
    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    justify-content: center;
    justify-self: unset;
    position: sticky;
}

#topBar > ul {
    align-content: center;
    align-items: center;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    gap: 2vw;
    list-style-type: none;
    margin: 0;
    padding: 8px 0 0 0;
    text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB;+DAC0E;AAC9E;;AAEA;IACI,cAAc;IACd,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;IAC9B,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,sEAAsE;IACtE,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,+FAA+F;IAC/F,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,+DAA+D;IAC/D,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,+FAA+F;IAC/F,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,oBAAoB;IACpB,mBAAmB;IACnB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,gCAAgC;IAChC,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,cAAc;IACd,aAAa;IACb,+FAA+F;IAC/F,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,QAAQ;IACR,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: HeadlineFont;\n    src: url('./dancingscript-variablefont_wght-webfont.woff') format('woff'),\n        url('./dancingscript-variablefont_wght-webfont.woff2') format('woff2');\n}\n\n* {\n    color: inherit;\n    justify-self: center;\n    text-decoration: none;\n}\n\n.activeMenu {\n    color: #CD9E50;\n    background-color: #a7c7ba42;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E50;\n    border-right: 1px solid #CD9E50;\n    border-top: 1px solid #CD9E50;\n}\n\nbody {\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n#contactGrid {\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 90vw;\n}\n\n#contactGrid button {\n    color:#CD9E50;\n    background-color: #88a0962a;\n    border: 2px solid #CD9E50;\n    border-radius: 10px;\n    display: flex;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 18px;\n    padding: 6px 14px;\n    text-align: center;\n}\n\n#contactGrid > div:first-child {\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    flex-grow: 1;\n    gap: 5vh\n}\n\n#contactGrid > div:last-child {\n    flex-grow: 3;\n}\n\n#content {\n    background-color: #F5F7F6;\n    display: grid;\n    width: 100%;\n}\n\nfooter {\n    color: #CD9E50;\n    background-color: #dfe1de;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    padding: 1vh 0;\n    text-align: center;\n    width: 100%;\n}\n\n#galleryGrid {\n    align-items: start;\n    display: grid;\n    gap: 2vmin;\n    grid-template-columns: repeat(auto-fit, clamp(300px, 32%, 33%));\n    justify-content: center;\n    justify-items: center;\n    margin: 5vh auto 5vh auto;\n    width: 90vw;\n}\n\n#galleryGrid > * {\n    aspect-ratio: 1 / 1;\n    border: 1px solid #CD9E50;\n    border-radius: 5%;\n    box-sizing: border-box;\n    object-fit: cover;\n    width: max(300px, 28vw);\n}\n\nh1 {\n    color: #88a096;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 48px;\n}\n\nhtml{\n    background-color: #dfe1de;\n}\n\niframe {\n    border: 1px solid #CD9E50;\n    border-radius: 2vmin;\n    aspect-ratio: 4 / 3;\n    display: block;\n    margin: 10vh auto;\n    width: min(600px, 90vw);\n}\n\n.imageLarge {\n    border-radius: 3vmin;\n    height: auto;\n    max-width: 95vw;\n    margin: 5vh 0;\n}\n\nli {\n    border: 1px solid #ffffff00;\n    box-sizing:border-box;\n    padding: 8px 8px 12px 8px;\n}\n\nli:not(.activeMenu):hover {\n    background-color: #a7c7ba25;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E5035;\n    border-right: 1px solid #CD9E5035;\n    border-top: 1px solid #CD9E5035;\n}\n\n#topBar {\n    align-items: center;\n    background-color: #dfe1de;\n    border-bottom: 2px solid #CD9E50;\n    color: #88a096;\n    display: flex;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    justify-content: center;\n    justify-self: unset;\n    position: sticky;\n}\n\n#topBar > ul {\n    align-content: center;\n    align-items: center;\n    display: flex;\n    font-size: 20px;\n    font-weight: bold;\n    gap: 2vw;\n    list-style-type: none;\n    margin: 0;\n    padding: 8px 0 0 0;\n    text-align: center;\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/contactLoad.js":
/*!****************************!*\
  !*** ./src/contactLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuLoad.js */ "./src/menuLoad.js");
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/banner.png */ "./src/images/banner.png");
/* harmony import */ var _images_email_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/email.svg */ "./src/images/email.svg");
/* harmony import */ var _images_phone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/phone.svg */ "./src/images/phone.svg");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const parentContainer = document.querySelector('#content');

    const bannerImage = new Image();
    bannerImage.src = _images_banner_png__WEBPACK_IMPORTED_MODULE_1__;
    bannerImage.classList.add('imageLarge');

    const whatsappButton = document.createElement('button');
    whatsappButton.setAttribute('type', 'button');
    whatsappButton.innerHTML = 'Nos WhatsApp';
    whatsappButton.setAttribute('id', 'whatsappButton');
    const waLink = document.createElement('a');
    waLink.setAttribute('href', 'https://wa.me/5215519360044');
    waLink.setAttribute('rel', 'noreferrer noopener');
    waLink.setAttribute('target', '_blank');
    waLink.appendChild(whatsappButton);

    const emailButton = document.createElement('button');
    const emailIco = new Image();
    emailIco.src = _images_email_svg__WEBPACK_IMPORTED_MODULE_2__;
    emailButton.setAttribute('type', 'button');
    emailButton.appendChild(emailIco);
    emailButton.innerHTML += ' masajes.puntodecalma@gmail.com';
    emailButton.setAttribute('id', 'emailButton');
    const emailLink = document.createElement('a');
    emailLink.setAttribute('href', 'mailto:masajes.puntodecalma@gmail.com');
    emailLink.setAttribute('rel', 'noreferrer noopener');
    emailLink.setAttribute('target', '_blank');
    emailLink.appendChild(emailButton);

    const phoneButton = document.createElement('button');
    const phoneIco = new Image();
    phoneIco.src = _images_phone_svg__WEBPACK_IMPORTED_MODULE_3__;
    phoneButton.setAttribute('type', 'button');
    phoneButton.appendChild(phoneIco);
    phoneButton.innerHTML += ' Llamar Ahora';
    phoneButton.setAttribute('id', 'phoneButton');
    const phoneLink = document.createElement('a');
    phoneLink.setAttribute('href', 'tel:+52-55-1936-0044');
    phoneLink.setAttribute('rel', 'noreferrer noopener');
    phoneLink.setAttribute('target', '_blank');
    phoneLink.appendChild(phoneButton);

    const addressDiv = document.createElement('div');
    addressDiv.setAttribute('id', "addressDiv");
    addressDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.415995426221!2d-99.16565900000002!3d19.407912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd99bdbd54b%3A0x120c7f5cac1a26a1!2sPunto%20de%20Calma!5e0!3m2!1sen!2smx!4v1696628761494!5m2!1sen!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'


    const contactDiv = document.createElement('div');
    contactDiv.appendChild(waLink);
    contactDiv.appendChild(phoneLink);
    contactDiv.appendChild(emailLink);

    const contactGrid = document.createElement('div');
    contactGrid.setAttribute('id', 'contactGrid');
    contactGrid.appendChild(contactDiv);
    contactGrid.appendChild(addressDiv);

    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parentContainer);
    const contactButton = document.querySelector('#contactUs');
    contactButton.classList.add('activeMenu');
    parentContainer.appendChild(bannerImage);
    parentContainer.appendChild(contactGrid);
};

/***/ }),

/***/ "./src/footerLoad.js":
/*!***************************!*\
  !*** ./src/footerLoad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parentContainer) {
const footer = document.createElement('footer');
const string = 'Copyright &copy 2023 Punto de Calma';
footer.innerHTML = string;
parentContainer.appendChild(footer);
};

/***/ }),

/***/ "./src/galleryLoad.js":
/*!****************************!*\
  !*** ./src/galleryLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuLoad.js */ "./src/menuLoad.js");
/* harmony import */ var _images_banner_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/banner.png */ "./src/images/banner.png");
/* harmony import */ var _images_gallery_pic1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/gallery/pic1.jpg */ "./src/images/gallery/pic1.jpg");
/* harmony import */ var _images_gallery_pic2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/gallery/pic2.jpg */ "./src/images/gallery/pic2.jpg");
/* harmony import */ var _images_gallery_pic3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/gallery/pic3.jpg */ "./src/images/gallery/pic3.jpg");
/* harmony import */ var _images_gallery_pic4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/gallery/pic4.jpg */ "./src/images/gallery/pic4.jpg");
/* harmony import */ var _images_gallery_pic5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/gallery/pic5.jpg */ "./src/images/gallery/pic5.jpg");
/* harmony import */ var _images_gallery_pic6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/gallery/pic6.jpg */ "./src/images/gallery/pic6.jpg");
/* harmony import */ var _images_gallery_pic7_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/gallery/pic7.jpg */ "./src/images/gallery/pic7.jpg");
/* harmony import */ var _images_gallery_pic8_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/gallery/pic8.jpg */ "./src/images/gallery/pic8.jpg");
/* harmony import */ var _images_gallery_pic9_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/gallery/pic9.jpg */ "./src/images/gallery/pic9.jpg");
/* harmony import */ var _images_gallery_pic10_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/gallery/pic10.jpg */ "./src/images/gallery/pic10.jpg");
/* harmony import */ var _images_gallery_pic11_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/gallery/pic11.jpg */ "./src/images/gallery/pic11.jpg");
/* harmony import */ var _images_gallery_pic12_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/gallery/pic12.jpg */ "./src/images/gallery/pic12.jpg");
/* harmony import */ var _images_gallery_pic13_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/gallery/pic13.jpg */ "./src/images/gallery/pic13.jpg");
/* harmony import */ var _images_gallery_pic14_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/gallery/pic14.jpg */ "./src/images/gallery/pic14.jpg");
/* harmony import */ var _images_gallery_pic15_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/gallery/pic15.jpg */ "./src/images/gallery/pic15.jpg");



















/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const bannerImage = new Image();
    bannerImage.src = _images_banner_png__WEBPACK_IMPORTED_MODULE_1__;
    bannerImage.classList.add('imageLarge');

    const galleryGrid = document.createElement('div');
    galleryGrid.setAttribute('id', 'galleryGrid');

    const addImage = function(imageSourceName) {
        const photo = new Image();
        photo.src = imageSourceName;
        galleryGrid.appendChild(photo);
    };

    addImage(_images_gallery_pic1_jpg__WEBPACK_IMPORTED_MODULE_2__);
    addImage(_images_gallery_pic2_jpg__WEBPACK_IMPORTED_MODULE_3__);
    addImage(_images_gallery_pic3_jpg__WEBPACK_IMPORTED_MODULE_4__);
    addImage(_images_gallery_pic4_jpg__WEBPACK_IMPORTED_MODULE_5__);
    addImage(_images_gallery_pic5_jpg__WEBPACK_IMPORTED_MODULE_6__);
    addImage(_images_gallery_pic6_jpg__WEBPACK_IMPORTED_MODULE_7__);
    addImage(_images_gallery_pic7_jpg__WEBPACK_IMPORTED_MODULE_8__);
    addImage(_images_gallery_pic8_jpg__WEBPACK_IMPORTED_MODULE_9__);
    addImage(_images_gallery_pic9_jpg__WEBPACK_IMPORTED_MODULE_10__);
    addImage(_images_gallery_pic10_jpg__WEBPACK_IMPORTED_MODULE_11__);
    addImage(_images_gallery_pic11_jpg__WEBPACK_IMPORTED_MODULE_12__);
    addImage(_images_gallery_pic12_jpg__WEBPACK_IMPORTED_MODULE_13__);
    addImage(_images_gallery_pic13_jpg__WEBPACK_IMPORTED_MODULE_14__);
    addImage(_images_gallery_pic14_jpg__WEBPACK_IMPORTED_MODULE_15__);
    addImage(_images_gallery_pic15_jpg__WEBPACK_IMPORTED_MODULE_16__);
    
    const parentContainer = document.querySelector('#content');
    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_0__["default"])(parentContainer);
    parentContainer.appendChild(bannerImage);
    const galleryButton = document.querySelector('#gallery');
    galleryButton.classList.add('activeMenu');
    parentContainer.appendChild(galleryGrid);
};

/***/ }),

/***/ "./src/menuLoad.js":
/*!*************************!*\
  !*** ./src/menuLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(parentContainer) {
    const services = document.createElement('li');
    const contactUs = document.createElement('li');
    const gallery = document.createElement('li');
    services.setAttribute('id', 'services');
    contactUs.setAttribute('id', 'contactUs');
    gallery.setAttribute('id', 'gallery');
    services.innerHTML = 'Nos Servicios';
    contactUs.innerHTML = 'Contactarnos';
    gallery.innerHTML = 'Galería';
    const ul = document.createElement('ul');
    ul.appendChild(services);
    ul.appendChild(contactUs);
    ul.appendChild(gallery);
    const topBar = document.createElement('div');
    topBar.setAttribute('id', 'topBar');
    topBar.appendChild(ul);
    
    parentContainer.innerHTML = '';
    parentContainer.appendChild(topBar);
};

/***/ }),

/***/ "./src/serviceLoad.js":
/*!****************************!*\
  !*** ./src/serviceLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_services_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/services.jpg */ "./src/images/services.jpg");
/* harmony import */ var _menuLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuLoad.js */ "./src/menuLoad.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const parentContainer = document.querySelector('#content');
    
    const headingName = document.createElement('h1');
    headingName.innerHTML = 'Punto de Calma';

    const myPriceList = new Image();
    myPriceList.classList.add('imageLarge');
    myPriceList.src = _images_services_jpg__WEBPACK_IMPORTED_MODULE_0__;

    (0,_menuLoad_js__WEBPACK_IMPORTED_MODULE_1__["default"])(parentContainer);
    const serviceButton = document.querySelector('#services');
    serviceButton.classList.add('activeMenu');
    parentContainer.appendChild(headingName);
    parentContainer.appendChild(myPriceList);
};

/***/ }),

/***/ "./src/dancingscript-variablefont_wght-webfont.woff":
/*!**********************************************************!*\
  !*** ./src/dancingscript-variablefont_wght-webfont.woff ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5199059d34b6c086735c.woff";

/***/ }),

/***/ "./src/dancingscript-variablefont_wght-webfont.woff2":
/*!***********************************************************!*\
  !*** ./src/dancingscript-variablefont_wght-webfont.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77388881975f61efb55b.woff2";

/***/ }),

/***/ "./src/images/banner.png":
/*!*******************************!*\
  !*** ./src/images/banner.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "207b226562514d82a271.png";

/***/ }),

/***/ "./src/images/email.svg":
/*!******************************!*\
  !*** ./src/images/email.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a993830408a8604bfac2.svg";

/***/ }),

/***/ "./src/images/gallery/pic1.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "320aeaf6ca6c10dac1fb.jpg";

/***/ }),

/***/ "./src/images/gallery/pic10.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic10.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9cbdca8bd29735f22835.jpg";

/***/ }),

/***/ "./src/images/gallery/pic11.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic11.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0184744a7412ca53b63.jpg";

/***/ }),

/***/ "./src/images/gallery/pic12.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic12.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59c2a17501ce5202b9c4.jpg";

/***/ }),

/***/ "./src/images/gallery/pic13.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic13.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bee44d210f620d4046f0.jpg";

/***/ }),

/***/ "./src/images/gallery/pic14.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic14.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d92286f47729e6d55004.jpg";

/***/ }),

/***/ "./src/images/gallery/pic15.jpg":
/*!**************************************!*\
  !*** ./src/images/gallery/pic15.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d182a3ce3751866db6c7.jpg";

/***/ }),

/***/ "./src/images/gallery/pic2.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ba3e956f0b309dc47f64.jpg";

/***/ }),

/***/ "./src/images/gallery/pic3.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fdbe3e9376d9fc76d48c.jpg";

/***/ }),

/***/ "./src/images/gallery/pic4.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3631e5586c0bda7181b6.jpg";

/***/ }),

/***/ "./src/images/gallery/pic5.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a50d1bcd367c09e6dc86.jpg";

/***/ }),

/***/ "./src/images/gallery/pic6.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic6.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5bc3215b2e2221d88f61.jpg";

/***/ }),

/***/ "./src/images/gallery/pic7.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic7.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9035ad825d36fd0a599b.jpg";

/***/ }),

/***/ "./src/images/gallery/pic8.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic8.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7575fd887ebceec0d699.jpg";

/***/ }),

/***/ "./src/images/gallery/pic9.jpg":
/*!*************************************!*\
  !*** ./src/images/gallery/pic9.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a412d528df64eb5ff9c.jpg";

/***/ }),

/***/ "./src/images/phone.svg":
/*!******************************!*\
  !*** ./src/images/phone.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2799ad09328c0c64a61b.svg";

/***/ }),

/***/ "./src/images/services.jpg":
/*!*********************************!*\
  !*** ./src/images/services.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "479def494b41dd1af218.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _serviceLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./serviceLoad.js */ "./src/serviceLoad.js");
/* harmony import */ var _contactLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactLoad.js */ "./src/contactLoad.js");
/* harmony import */ var _galleryLoad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galleryLoad.js */ "./src/galleryLoad.js");
/* harmony import */ var _footerLoad_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footerLoad.js */ "./src/footerLoad.js");






const addListeners = function() {
    const buttonListener = function(button, action) {
        button.addEventListener('click', () => {
            action();
            addListeners();
        });
    };
    const serviceLoadButton = document.querySelector('#services');
    const contactLoadButton = document.querySelector('#contactUs');
    const galleryLoadButton = document.querySelector('#gallery');
    
    buttonListener(serviceLoadButton, _serviceLoad_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    buttonListener(contactLoadButton, _contactLoad_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    buttonListener(galleryLoadButton, _galleryLoad_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
    const parentContainer = document.querySelector('#content');
    (0,_footerLoad_js__WEBPACK_IMPORTED_MODULE_4__["default"])(parentContainer);
};

window.addEventListener('DOMContentLoaded', () => {
    (0,_serviceLoad_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    addListeners();
});


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtBQUNoQjtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvY29udGFjdExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9mb290ZXJMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvZ2FsbGVyeUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9tZW51TG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL3NlcnZpY2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9kYW5jaW5nc2NyaXB0LXZhcmlhYmxlZm9udF93Z2h0LXdlYmZvbnQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IEhlYWRsaW5lRm9udDtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgnd29mZjInKTtcbn1cblxuKiB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYWN0aXZlTWVudSB7XG4gICAgY29sb3I6ICNDRDlFNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzdiYTQyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NEOUU1MDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0Q5RTUwO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGFjdEdyaWQge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwdnc7XG59XG5cbiNjb250YWN0R3JpZCBidXR0b24ge1xuICAgIGNvbG9yOiNDRDlFNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YTA5NjJhO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDRDlFNTA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvbnRhY3RHcmlkID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZ2FwOiA1dmhcbn1cblxuI2NvbnRhY3RHcmlkID4gZGl2Omxhc3QtY2hpbGQge1xuICAgIGZsZXgtZ3JvdzogMztcbn1cblxuI2NvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RjY7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuZm9vdGVyIHtcbiAgICBjb2xvcjogI0NEOUU1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmVGb250JywgY3Vyc2l2ZSwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIHBhZGRpbmc6IDF2aCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2dhbGxlcnlHcmlkIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJ2bWluO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgzMDBweCwgMzIlLCAzMyUpKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1dmggYXV0byA1dmggYXV0bztcbiAgICB3aWR0aDogOTB2dztcbn1cblxuI2dhbGxlcnlHcmlkID4gKiB7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgMjh2dyk7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogIzg4YTA5NjtcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcbn1cblxuaWZyYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDJ2bWluO1xuICAgIGFzcGVjdC1yYXRpbzogNCAvIDM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAxMHZoIGF1dG87XG4gICAgd2lkdGg6IG1pbig2MDBweCwgOTB2dyk7XG59XG5cbi5pbWFnZUxhcmdlIHtcbiAgICBib3JkZXItcmFkaXVzOiAzdm1pbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgIG1hcmdpbjogNXZoIDA7XG59XG5cbmxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmMDA7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDhweCA4cHggMTJweCA4cHg7XG59XG5cbmxpOm5vdCguYWN0aXZlTWVudSk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2M3YmEyNTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRDlFNTAzNTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwMzU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRDlFNTAzNTtcbn1cblxuI3RvcEJhciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGNvbG9yOiAjODhhMDk2O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiB1bnNldDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4jdG9wQmFyID4gdWwge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGdhcDogMnZ3O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekI7K0RBQzBFO0FBQzlFOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNFQUFzRTtJQUN0RSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QiwrRkFBK0Y7SUFDL0YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDViwrREFBK0Q7SUFDL0QsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsK0ZBQStGO0lBQy9GLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGFBQWE7SUFDYiwrRkFBK0Y7SUFDL0YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWFkbGluZUZvbnQ7XFxuICAgIHNyYzogdXJsKCcuL2RhbmNpbmdzY3JpcHQtdmFyaWFibGVmb250X3dnaHQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJy4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4qIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5hY3RpdmVNZW51IHtcXG4gICAgY29sb3I6ICNDRDlFNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhN2M3YmE0MjtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRDlFNTA7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDRDlFNTA7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0Q5RTUwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGFjdEdyaWQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogOTB2dztcXG59XFxuXFxuI2NvbnRhY3RHcmlkIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiNDRDlFNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGEwOTYyYTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0NEOUU1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMTRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdEdyaWQgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGdhcDogNXZoXFxufVxcblxcbiNjb250YWN0R3JpZCA+IGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgZmxleC1ncm93OiAzO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RjY7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBjb2xvcjogI0NEOUU1MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICAgIHBhZGRpbmc6IDF2aCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jZ2FsbGVyeUdyaWQge1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMnZtaW47XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgzMDBweCwgMzIlLCAzMyUpKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1dmggYXV0byA1dmggYXV0bztcXG4gICAgd2lkdGg6IDkwdnc7XFxufVxcblxcbiNnYWxsZXJ5R3JpZCA+ICoge1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiBtYXgoMzAwcHgsIDI4dncpO1xcbn1cXG5cXG5oMSB7XFxuICAgIGNvbG9yOiAjODhhMDk2O1xcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG5odG1se1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xcbn1cXG5cXG5pZnJhbWUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAydm1pbjtcXG4gICAgYXNwZWN0LXJhdGlvOiA0IC8gMztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTB2aCBhdXRvO1xcbiAgICB3aWR0aDogbWluKDYwMHB4LCA5MHZ3KTtcXG59XFxuXFxuLmltYWdlTGFyZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAzdm1pbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk1dnc7XFxuICAgIG1hcmdpbjogNXZoIDA7XFxufVxcblxcbmxpIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjAwO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggMTJweCA4cHg7XFxufVxcblxcbmxpOm5vdCguYWN0aXZlTWVudSk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjN2JhMjU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0Q5RTUwMzU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDRDlFNTAzNTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRDlFNTAzNTtcXG59XFxuXFxuI3RvcEJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUxZGU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBjb2xvcjogIzg4YTA5NjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHVuc2V0O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4jdG9wQmFyID4gdWwge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMnZ3O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudUxvYWQuanMnXG5pbXBvcnQgYmFubmVySW1nIGZyb20gJy4vaW1hZ2VzL2Jhbm5lci5wbmcnO1xuaW1wb3J0IGVtYWlsSWNvbiBmcm9tICcuL2ltYWdlcy9lbWFpbC5zdmcnO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tICcuL2ltYWdlcy9waG9uZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgYmFubmVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYW5uZXJJbWFnZS5zcmMgPSBiYW5uZXJJbWc7XG4gICAgYmFubmVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2VMYXJnZScpO1xuXG4gICAgY29uc3Qgd2hhdHNhcHBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB3aGF0c2FwcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgd2hhdHNhcHBCdXR0b24uaW5uZXJIVE1MID0gJ05vcyBXaGF0c0FwcCc7XG4gICAgd2hhdHNhcHBCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd3aGF0c2FwcEJ1dHRvbicpO1xuICAgIGNvbnN0IHdhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB3YUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd2EubWUvNTIxNTUxOTM2MDA0NCcpO1xuICAgIHdhTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub3JlZmVycmVyIG5vb3BlbmVyJyk7XG4gICAgd2FMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIHdhTGluay5hcHBlbmRDaGlsZCh3aGF0c2FwcEJ1dHRvbik7XG5cbiAgICBjb25zdCBlbWFpbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGVtYWlsSWNvID0gbmV3IEltYWdlKCk7XG4gICAgZW1haWxJY28uc3JjID0gZW1haWxJY29uO1xuICAgIGVtYWlsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlbWFpbEJ1dHRvbi5hcHBlbmRDaGlsZChlbWFpbEljbyk7XG4gICAgZW1haWxCdXR0b24uaW5uZXJIVE1MICs9ICcgbWFzYWplcy5wdW50b2RlY2FsbWFAZ21haWwuY29tJztcbiAgICBlbWFpbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsQnV0dG9uJyk7XG4gICAgY29uc3QgZW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVtYWlsTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOm1hc2FqZXMucHVudG9kZWNhbG1hQGdtYWlsLmNvbScpO1xuICAgIGVtYWlsTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub3JlZmVycmVyIG5vb3BlbmVyJyk7XG4gICAgZW1haWxMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIGVtYWlsTGluay5hcHBlbmRDaGlsZChlbWFpbEJ1dHRvbik7XG5cbiAgICBjb25zdCBwaG9uZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHBob25lSWNvID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVJY28uc3JjID0gcGhvbmVJY29uO1xuICAgIHBob25lQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBwaG9uZUJ1dHRvbi5hcHBlbmRDaGlsZChwaG9uZUljbyk7XG4gICAgcGhvbmVCdXR0b24uaW5uZXJIVE1MICs9ICcgTGxhbWFyIEFob3JhJztcbiAgICBwaG9uZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lQnV0dG9uJyk7XG4gICAgY29uc3QgcGhvbmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHBob25lTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndGVsOis1Mi01NS0xOTM2LTAwNDQnKTtcbiAgICBwaG9uZUxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9yZWZlcnJlciBub29wZW5lcicpO1xuICAgIHBob25lTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICBwaG9uZUxpbmsuYXBwZW5kQ2hpbGQocGhvbmVCdXR0b24pO1xuXG4gICAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsIFwiYWRkcmVzc0RpdlwiKTtcbiAgICBhZGRyZXNzRGl2LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTUwNTIuNDE1OTk1NDI2MjIxITJkLTk5LjE2NTY1OTAwMDAwMDAyITNkMTkuNDA3OTEyITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg1ZDFmZmQ5OWJkYmQ1NGIlM0EweDEyMGM3ZjVjYWMxYTI2YTEhMnNQdW50byUyMGRlJTIwQ2FsbWEhNWUwITNtMiExc2VuITJzbXghNHYxNjk2NjI4NzYxNDk0ITVtMiExc2VuITJzbXhcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nXG5cblxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHdhTGluayk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChwaG9uZUxpbmspO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoZW1haWxMaW5rKTtcblxuICAgIGNvbnN0IGNvbnRhY3RHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0R3JpZCcpO1xuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGNvbnRhY3REaXYpO1xuICAgIGNvbnRhY3RHcmlkLmFwcGVuZENoaWxkKGFkZHJlc3NEaXYpO1xuXG4gICAgbG9hZE1lbnUocGFyZW50Q29udGFpbmVyKTtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RVcycpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlTWVudScpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXJJbWFnZSk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RHcmlkKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGFyZW50Q29udGFpbmVyKSB7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbmNvbnN0IHN0cmluZyA9ICdDb3B5cmlnaHQgJmNvcHkgMjAyMyBQdW50byBkZSBDYWxtYSc7XG5mb290ZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xucGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG59OyIsImltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnVMb2FkLmpzJztcbmltcG9ydCBiYW5uZXJJbWcgZnJvbSAnLi9pbWFnZXMvYmFubmVyLnBuZyc7XG5pbXBvcnQgaW1nMSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzEuanBnJztcbmltcG9ydCBpbWcyIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMi5qcGcnO1xuaW1wb3J0IGltZzMgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMzLmpwZyc7XG5pbXBvcnQgaW1nNCBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzQuanBnJztcbmltcG9ydCBpbWc1IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljNS5qcGcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM2LmpwZyc7XG5pbXBvcnQgaW1nNyBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzcuanBnJztcbmltcG9ydCBpbWc4IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljOC5qcGcnO1xuaW1wb3J0IGltZzkgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM5LmpwZyc7XG5pbXBvcnQgaW1nMTAgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxMC5qcGcnO1xuaW1wb3J0IGltZzExIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTEuanBnJztcbmltcG9ydCBpbWcxMiBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzEyLmpwZyc7XG5pbXBvcnQgaW1nMTMgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxMy5qcGcnO1xuaW1wb3J0IGltZzE0IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTQuanBnJztcbmltcG9ydCBpbWcxNSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzE1LmpwZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYmFubmVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYW5uZXJJbWFnZS5zcmMgPSBiYW5uZXJJbWc7XG4gICAgYmFubmVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2VMYXJnZScpO1xuXG4gICAgY29uc3QgZ2FsbGVyeUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYWxsZXJ5R3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbGxlcnlHcmlkJyk7XG5cbiAgICBjb25zdCBhZGRJbWFnZSA9IGZ1bmN0aW9uKGltYWdlU291cmNlTmFtZSkge1xuICAgICAgICBjb25zdCBwaG90byA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwaG90by5zcmMgPSBpbWFnZVNvdXJjZU5hbWU7XG4gICAgICAgIGdhbGxlcnlHcmlkLmFwcGVuZENoaWxkKHBob3RvKTtcbiAgICB9O1xuXG4gICAgYWRkSW1hZ2UoaW1nMSk7XG4gICAgYWRkSW1hZ2UoaW1nMik7XG4gICAgYWRkSW1hZ2UoaW1nMyk7XG4gICAgYWRkSW1hZ2UoaW1nNCk7XG4gICAgYWRkSW1hZ2UoaW1nNSk7XG4gICAgYWRkSW1hZ2UoaW1nNik7XG4gICAgYWRkSW1hZ2UoaW1nNyk7XG4gICAgYWRkSW1hZ2UoaW1nOCk7XG4gICAgYWRkSW1hZ2UoaW1nOSk7XG4gICAgYWRkSW1hZ2UoaW1nMTApO1xuICAgIGFkZEltYWdlKGltZzExKTtcbiAgICBhZGRJbWFnZShpbWcxMik7XG4gICAgYWRkSW1hZ2UoaW1nMTMpO1xuICAgIGFkZEltYWdlKGltZzE0KTtcbiAgICBhZGRJbWFnZShpbWcxNSk7XG4gICAgXG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBsb2FkTWVudShwYXJlbnRDb250YWluZXIpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXJJbWFnZSk7XG4gICAgY29uc3QgZ2FsbGVyeUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYWxsZXJ5Jyk7XG4gICAgZ2FsbGVyeUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmVNZW51Jyk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdhbGxlcnlHcmlkKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2VydmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGNvbnRhY3RVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc2VydmljZXMuc2V0QXR0cmlidXRlKCdpZCcsICdzZXJ2aWNlcycpO1xuICAgIGNvbnRhY3RVcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RVcycpO1xuICAgIGdhbGxlcnkuc2V0QXR0cmlidXRlKCdpZCcsICdnYWxsZXJ5Jyk7XG4gICAgc2VydmljZXMuaW5uZXJIVE1MID0gJ05vcyBTZXJ2aWNpb3MnO1xuICAgIGNvbnRhY3RVcy5pbm5lckhUTUwgPSAnQ29udGFjdGFybm9zJztcbiAgICBnYWxsZXJ5LmlubmVySFRNTCA9ICdHYWxlcsOtYSc7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHVsLmFwcGVuZENoaWxkKHNlcnZpY2VzKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICAgIHVsLmFwcGVuZENoaWxkKGdhbGxlcnkpO1xuICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcEJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvcEJhcicpO1xuICAgIHRvcEJhci5hcHBlbmRDaGlsZCh1bCk7XG4gICAgXG4gICAgcGFyZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BCYXIpO1xufTsiLCJpbXBvcnQgcHJpY2VMaXN0IGZyb20gJy4vaW1hZ2VzL3NlcnZpY2VzLmpwZydcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnVMb2FkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBcbiAgICBjb25zdCBoZWFkaW5nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZ05hbWUuaW5uZXJIVE1MID0gJ1B1bnRvIGRlIENhbG1hJztcblxuICAgIGNvbnN0IG15UHJpY2VMaXN0ID0gbmV3IEltYWdlKCk7XG4gICAgbXlQcmljZUxpc3QuY2xhc3NMaXN0LmFkZCgnaW1hZ2VMYXJnZScpO1xuICAgIG15UHJpY2VMaXN0LnNyYyA9IHByaWNlTGlzdDtcblxuICAgIGxvYWRNZW51KHBhcmVudENvbnRhaW5lcik7XG4gICAgY29uc3Qgc2VydmljZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXJ2aWNlcycpO1xuICAgIHNlcnZpY2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlTWVudScpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nTmFtZSk7XG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG15UHJpY2VMaXN0KTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2FkU2VydmljZXMgZnJvbSAnLi9zZXJ2aWNlTG9hZC5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3RJbmZvIGZyb20gJy4vY29udGFjdExvYWQuanMnO1xuaW1wb3J0IGxvYWRHYWxsZXJ5IGZyb20gJy4vZ2FsbGVyeUxvYWQuanMnO1xuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSAnLi9mb290ZXJMb2FkLmpzJztcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnV0dG9uTGlzdGVuZXIgPSBmdW5jdGlvbihidXR0b24sIGFjdGlvbikge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgIGFkZExpc3RlbmVycygpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHNlcnZpY2VMb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlcnZpY2VzJyk7XG4gICAgY29uc3QgY29udGFjdExvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdFVzJyk7XG4gICAgY29uc3QgZ2FsbGVyeUxvYWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpO1xuICAgIFxuICAgIGJ1dHRvbkxpc3RlbmVyKHNlcnZpY2VMb2FkQnV0dG9uLCBsb2FkU2VydmljZXMpO1xuICAgIGJ1dHRvbkxpc3RlbmVyKGNvbnRhY3RMb2FkQnV0dG9uLCBsb2FkQ29udGFjdEluZm8pO1xuICAgIGJ1dHRvbkxpc3RlbmVyKGdhbGxlcnlMb2FkQnV0dG9uLCBsb2FkR2FsbGVyeSk7XG4gICAgY29uc3QgcGFyZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBsb2FkRm9vdGVyKHBhcmVudENvbnRhaW5lcik7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBsb2FkU2VydmljZXMoKTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=