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

#content {
    background-color: #F5F7F6;
    display: grid;
    width: 100%;
}

.embeddedMap {
    aspect-ratio: 3 / 4;
    max-width: 600px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB;+DAC0E;AAC9E;;AAEA;IACI,cAAc;IACd,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;IAC9B,+BAA+B;IAC/B,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,UAAU;AACd;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,+FAA+F;IAC/F,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,+DAA+D;IAC/D,uBAAuB;IACvB,qBAAqB;IACrB,yBAAyB;IACzB,WAAW;AACf;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,+FAA+F;IAC/F,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,gCAAgC;IAChC,iCAAiC;IACjC,+BAA+B;AACnC;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,cAAc;IACd,aAAa;IACb,+FAA+F;IAC/F,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,QAAQ;IACR,qBAAqB;IACrB,SAAS;IACT,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: HeadlineFont;\n    src: url('./dancingscript-variablefont_wght-webfont.woff') format('woff'),\n        url('./dancingscript-variablefont_wght-webfont.woff2') format('woff2');\n}\n\n* {\n    color: inherit;\n    justify-self: center;\n}\n\n.activeMenu {\n    color: #CD9E50;\n    background-color: #a7c7ba42;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E50;\n    border-right: 1px solid #CD9E50;\n    border-top: 1px solid #CD9E50;\n}\n\nbody {\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    background-color: #F5F7F6;\n    display: grid;\n    width: 100%;\n}\n\n.embeddedMap {\n    aspect-ratio: 3 / 4;\n    max-width: 600px;\n}\n\nfooter {\n    color: #CD9E50;\n    background-color: #dfe1de;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    padding: 1vh 0;\n    text-align: center;\n    width: 100%;\n}\n\n#galleryGrid {\n    align-items: start;\n    display: grid;\n    gap: 2vmin;\n    grid-template-columns: repeat(auto-fit, clamp(300px, 32%, 33%));\n    justify-content: center;\n    justify-items: center;\n    margin: 5vh auto 5vh auto;\n    width: 90vw;\n}\n\n#galleryGrid > * {\n    aspect-ratio: 1 / 1;\n    border: 1px solid #CD9E50;\n    border-radius: 5%;\n    box-sizing: border-box;\n    object-fit: cover;\n    width: max(300px, 28vw);\n}\n\nh1 {\n    color: #88a096;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 48px;\n}\n\nhtml{\n    background-color: #dfe1de;\n}\n\n.imageLarge {\n    border-radius: 3vmin;\n    height: auto;\n    max-width: 95vw;\n    margin: 5vh 0;\n}\n\nli {\n    border: 1px solid #ffffff00;\n    box-sizing:border-box;\n    padding: 8px 8px 12px 8px;\n}\n\nli:not(.activeMenu):hover {\n    background-color: #a7c7ba25;\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n    border-left: 1px solid #CD9E5035;\n    border-right: 1px solid #CD9E5035;\n    border-top: 1px solid #CD9E5035;\n}\n\n#topBar {\n    align-items: center;\n    background-color: #dfe1de;\n    border-bottom: 2px solid #CD9E50;\n    color: #88a096;\n    display: flex;\n    font-family: 'HeadlineFont', cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    justify-content: center;\n    justify-self: unset;\n    position: sticky;\n}\n\n#topBar > ul {\n    align-content: center;\n    align-items: center;\n    display: flex;\n    font-size: 20px;\n    font-weight: bold;\n    gap: 2vw;\n    list-style-type: none;\n    margin: 0;\n    padding: 8px 0 0 0;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
    phoneLink.appendChild(phoneButton);

    const addressDiv = document.createElement('div');
    addressDiv.setAttribute('id', "addressDiv");
    addressDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15052.415995426221!2d-99.16565900000002!3d19.407912!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffd99bdbd54b%3A0x120c7f5cac1a26a1!2sPunto%20de%20Calma!5e0!3m2!1sen!2smx!4v1696628761494!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3VCO0FBQ0c7QUFDSjtBQUNGOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdURBQVk7QUFDbEQsc0NBQXNDLHVEQUFlO0FBQ3JELHNDQUFzQyx1REFBVztBQUNqRDtBQUNBLElBQUksMERBQVU7QUFDZDs7QUFFQTtBQUNBLElBQUksMkRBQVk7QUFDaEI7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2NvbnRhY3RMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvZm9vdGVyTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlLy4vc3JjL2dhbGxlcnlMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvbWVudUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS8uL3NyYy9zZXJ2aWNlTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2RhbmNpbmdzY3JpcHQtdmFyaWFibGVmb250X3dnaHQtd2ViZm9udC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBIZWFkbGluZUZvbnQ7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYyJyk7XG59XG5cbioge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uYWN0aXZlTWVudSB7XG4gICAgY29sb3I6ICNDRDlFNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzdiYTQyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NEOUU1MDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjQ0Q5RTUwO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjdGNjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZW1iZWRkZWRNYXAge1xuICAgIGFzcGVjdC1yYXRpbzogMyAvIDQ7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuZm9vdGVyIHtcbiAgICBjb2xvcjogI0NEOUU1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlMWRlO1xuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmVGb250JywgY3Vyc2l2ZSwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xuICAgIHBhZGRpbmc6IDF2aCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2dhbGxlcnlHcmlkIHtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDJ2bWluO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgzMDBweCwgMzIlLCAzMyUpKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1dmggYXV0byA1dmggYXV0bztcbiAgICB3aWR0aDogOTB2dztcbn1cblxuI2dhbGxlcnlHcmlkID4gKiB7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q5RTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IG1heCgzMDBweCwgMjh2dyk7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogIzg4YTA5NjtcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDQ4cHg7XG59XG5cbmh0bWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcbn1cblxuLmltYWdlTGFyZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDN2bWluO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgbWFyZ2luOiA1dmggMDtcbn1cblxubGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmYwMDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogOHB4IDhweCAxMnB4IDhweDtcbn1cblxubGk6bm90KC5hY3RpdmVNZW51KTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzdiYTI1O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NEOUU1MDM1O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDRDlFNTAzNTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NEOUU1MDM1O1xufVxuXG4jdG9wQmFyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUxZGU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDRDlFNTA7XG4gICAgY29sb3I6ICM4OGEwOTY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogJ0hlYWRsaW5lRm9udCcsIGN1cnNpdmUsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IHVuc2V0O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbiN0b3BCYXIgPiB1bCB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZ2FwOiAydnc7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA4cHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QjsrREFDMEU7QUFDOUU7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLCtGQUErRjtJQUMvRixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLCtEQUErRDtJQUMvRCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCwrRkFBK0Y7SUFDL0YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGFBQWE7SUFDYiwrRkFBK0Y7SUFDL0YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWFkbGluZUZvbnQ7XFxuICAgIHNyYzogdXJsKCcuL2RhbmNpbmdzY3JpcHQtdmFyaWFibGVmb250X3dnaHQtd2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXFxuICAgICAgICB1cmwoJy4vZGFuY2luZ3NjcmlwdC12YXJpYWJsZWZvbnRfd2dodC13ZWJmb250LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbn1cXG5cXG4qIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYWN0aXZlTWVudSB7XFxuICAgIGNvbG9yOiAjQ0Q5RTUwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjN2JhNDI7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0NEOUU1MDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGN0Y2O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmVtYmVkZGVkTWFwIHtcXG4gICAgYXNwZWN0LXJhdGlvOiAzIC8gNDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgY29sb3I6ICNDRDlFNTA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUxZGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSGVhZGxpbmVGb250JywgY3Vyc2l2ZSwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbiAgICBwYWRkaW5nOiAxdmggMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2dhbGxlcnlHcmlkIHtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDJ2bWluO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgY2xhbXAoMzAwcHgsIDMyJSwgMzMlKSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXZoIGF1dG8gNXZoIGF1dG87XFxuICAgIHdpZHRoOiA5MHZ3O1xcbn1cXG5cXG4jZ2FsbGVyeUdyaWQgPiAqIHtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NEOUU1MDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogbWF4KDMwMHB4LCAyOHZ3KTtcXG59XFxuXFxuaDEge1xcbiAgICBjb2xvcjogIzg4YTA5NjtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuaHRtbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTFkZTtcXG59XFxuXFxuLmltYWdlTGFyZ2Uge1xcbiAgICBib3JkZXItcmFkaXVzOiAzdm1pbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDk1dnc7XFxuICAgIG1hcmdpbjogNXZoIDA7XFxufVxcblxcbmxpIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjAwO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDhweCA4cHggMTJweCA4cHg7XFxufVxcblxcbmxpOm5vdCguYWN0aXZlTWVudSk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjN2JhMjU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0Q5RTUwMzU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDRDlFNTAzNTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNDRDlFNTAzNTtcXG59XFxuXFxuI3RvcEJhciB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmUxZGU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQ0Q5RTUwO1xcbiAgICBjb2xvcjogIzg4YTA5NjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1mYW1pbHk6ICdIZWFkbGluZUZvbnQnLCBjdXJzaXZlLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHVuc2V0O1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbn1cXG5cXG4jdG9wQmFyID4gdWwge1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGdhcDogMnZ3O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogOHB4IDAgMCAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudUxvYWQuanMnXG5pbXBvcnQgYmFubmVySW1nIGZyb20gJy4vaW1hZ2VzL2Jhbm5lci5wbmcnO1xuaW1wb3J0IGVtYWlsSWNvbiBmcm9tICcuL2ltYWdlcy9lbWFpbC5zdmcnO1xuaW1wb3J0IHBob25lSWNvbiBmcm9tICcuL2ltYWdlcy9waG9uZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gICAgY29uc3QgYmFubmVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBiYW5uZXJJbWFnZS5zcmMgPSBiYW5uZXJJbWc7XG4gICAgYmFubmVySW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2VMYXJnZScpO1xuXG4gICAgY29uc3Qgd2hhdHNhcHBCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB3aGF0c2FwcEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgd2hhdHNhcHBCdXR0b24uaW5uZXJIVE1MID0gJ05vcyBXaGF0c0FwcCc7XG4gICAgd2hhdHNhcHBCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICd3aGF0c2FwcEJ1dHRvbicpO1xuICAgIGNvbnN0IHdhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB3YUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vd2EubWUvNTIxNTUxOTM2MDA0NCcpO1xuICAgIHdhTGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub3JlZmVycmVyIG5vb3BlbmVyJyk7XG4gICAgd2FMaW5rLmFwcGVuZENoaWxkKHdoYXRzYXBwQnV0dG9uKTtcblxuICAgIGNvbnN0IGVtYWlsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgZW1haWxJY28gPSBuZXcgSW1hZ2UoKTtcbiAgICBlbWFpbEljby5zcmMgPSBlbWFpbEljb247XG4gICAgZW1haWxCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGVtYWlsQnV0dG9uLmFwcGVuZENoaWxkKGVtYWlsSWNvKTtcbiAgICBlbWFpbEJ1dHRvbi5pbm5lckhUTUwgKz0gJyBtYXNhamVzLnB1bnRvZGVjYWxtYUBnbWFpbC5jb20nO1xuICAgIGVtYWlsQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWxCdXR0b24nKTtcbiAgICBjb25zdCBlbWFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZW1haWxMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdtYWlsdG86bWFzYWplcy5wdW50b2RlY2FsbWFAZ21haWwuY29tJyk7XG4gICAgZW1haWxMaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vcmVmZXJyZXIgbm9vcGVuZXInKTtcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoZW1haWxCdXR0b24pO1xuXG4gICAgY29uc3QgcGhvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBwaG9uZUljbyA9IG5ldyBJbWFnZSgpO1xuICAgIHBob25lSWNvLnNyYyA9IHBob25lSWNvbjtcbiAgICBwaG9uZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgcGhvbmVCdXR0b24uYXBwZW5kQ2hpbGQocGhvbmVJY28pO1xuICAgIHBob25lQnV0dG9uLmlubmVySFRNTCArPSAnIExsYW1hciBBaG9yYSc7XG4gICAgcGhvbmVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZUJ1dHRvbicpO1xuICAgIGNvbnN0IHBob25lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwaG9uZUxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ3RlbDorNTItNTUtMTkzNi0wMDQ0Jyk7XG4gICAgcGhvbmVMaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vcmVmZXJyZXIgbm9vcGVuZXInKTtcbiAgICBwaG9uZUxpbmsuYXBwZW5kQ2hpbGQocGhvbmVCdXR0b24pO1xuXG4gICAgY29uc3QgYWRkcmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZHJlc3NEaXYuc2V0QXR0cmlidXRlKCdpZCcsIFwiYWRkcmVzc0RpdlwiKTtcbiAgICBhZGRyZXNzRGl2LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMTUwNTIuNDE1OTk1NDI2MjIxITJkLTk5LjE2NTY1OTAwMDAwMDAyITNkMTkuNDA3OTEyITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg1ZDFmZmQ5OWJkYmQ1NGIlM0EweDEyMGM3ZjVjYWMxYTI2YTEhMnNQdW50byUyMGRlJTIwQ2FsbWEhNWUwITNtMiExc2VuITJzbXghNHYxNjk2NjI4NzYxNDk0ITVtMiExc2VuITJzbXhcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+J1xuXG5cbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh3YUxpbmspO1xuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQocGhvbmVMaW5rKTtcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGVtYWlsTGluayk7XG5cbiAgICBjb25zdCBjb250YWN0R3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RHcmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdEdyaWQnKTtcbiAgICBjb250YWN0R3JpZC5hcHBlbmRDaGlsZChjb250YWN0RGl2KTtcbiAgICBjb250YWN0R3JpZC5hcHBlbmRDaGlsZChhZGRyZXNzRGl2KTtcblxuICAgIGxvYWRNZW51KHBhcmVudENvbnRhaW5lcik7XG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0VXMnKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZU1lbnUnKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0R3JpZCk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmVudENvbnRhaW5lcikge1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5jb25zdCBzdHJpbmcgPSAnQ29weXJpZ2h0ICZjb3B5IDIwMjMgUHVudG8gZGUgQ2FsbWEnO1xuZm9vdGVyLmlubmVySFRNTCA9IHN0cmluZztcbnBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xufTsiLCJpbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51TG9hZC5qcyc7XG5pbXBvcnQgYmFubmVySW1nIGZyb20gJy4vaW1hZ2VzL2Jhbm5lci5wbmcnO1xuaW1wb3J0IGltZzEgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxLmpwZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzIuanBnJztcbmltcG9ydCBpbWczIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMy5qcGcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM0LmpwZyc7XG5pbXBvcnQgaW1nNSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzUuanBnJztcbmltcG9ydCBpbWc2IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljNi5qcGcnO1xuaW1wb3J0IGltZzcgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWM3LmpwZyc7XG5pbXBvcnQgaW1nOCBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzguanBnJztcbmltcG9ydCBpbWc5IGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljOS5qcGcnO1xuaW1wb3J0IGltZzEwIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTAuanBnJztcbmltcG9ydCBpbWcxMSBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzExLmpwZyc7XG5pbXBvcnQgaW1nMTIgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxMi5qcGcnO1xuaW1wb3J0IGltZzEzIGZyb20gJy4vaW1hZ2VzL2dhbGxlcnkvcGljMTMuanBnJztcbmltcG9ydCBpbWcxNCBmcm9tICcuL2ltYWdlcy9nYWxsZXJ5L3BpYzE0LmpwZyc7XG5pbXBvcnQgaW1nMTUgZnJvbSAnLi9pbWFnZXMvZ2FsbGVyeS9waWMxNS5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJhbm5lckltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgYmFubmVySW1hZ2Uuc3JjID0gYmFubmVySW1nO1xuICAgIGJhbm5lckltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlTGFyZ2UnKTtcblxuICAgIGNvbnN0IGdhbGxlcnlHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FsbGVyeUdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdnYWxsZXJ5R3JpZCcpO1xuXG4gICAgY29uc3QgYWRkSW1hZ2UgPSBmdW5jdGlvbihpbWFnZVNvdXJjZU5hbWUpIHtcbiAgICAgICAgY29uc3QgcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgcGhvdG8uc3JjID0gaW1hZ2VTb3VyY2VOYW1lO1xuICAgICAgICBnYWxsZXJ5R3JpZC5hcHBlbmRDaGlsZChwaG90byk7XG4gICAgfTtcblxuICAgIGFkZEltYWdlKGltZzEpO1xuICAgIGFkZEltYWdlKGltZzIpO1xuICAgIGFkZEltYWdlKGltZzMpO1xuICAgIGFkZEltYWdlKGltZzQpO1xuICAgIGFkZEltYWdlKGltZzUpO1xuICAgIGFkZEltYWdlKGltZzYpO1xuICAgIGFkZEltYWdlKGltZzcpO1xuICAgIGFkZEltYWdlKGltZzgpO1xuICAgIGFkZEltYWdlKGltZzkpO1xuICAgIGFkZEltYWdlKGltZzEwKTtcbiAgICBhZGRJbWFnZShpbWcxMSk7XG4gICAgYWRkSW1hZ2UoaW1nMTIpO1xuICAgIGFkZEltYWdlKGltZzEzKTtcbiAgICBhZGRJbWFnZShpbWcxNCk7XG4gICAgYWRkSW1hZ2UoaW1nMTUpO1xuICAgIFxuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbG9hZE1lbnUocGFyZW50Q29udGFpbmVyKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVySW1hZ2UpO1xuICAgIGNvbnN0IGdhbGxlcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FsbGVyeScpO1xuICAgIGdhbGxlcnlCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlTWVudScpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChnYWxsZXJ5R3JpZCk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHBhcmVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHNlcnZpY2VzLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VydmljZXMnKTtcbiAgICBjb250YWN0VXMuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0VXMnKTtcbiAgICBnYWxsZXJ5LnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2FsbGVyeScpO1xuICAgIHNlcnZpY2VzLmlubmVySFRNTCA9ICdOb3MgU2VydmljaW9zJztcbiAgICBjb250YWN0VXMuaW5uZXJIVE1MID0gJ0NvbnRhY3Rhcm5vcyc7XG4gICAgZ2FsbGVyeS5pbm5lckhUTUwgPSAnR2FsZXLDrWEnO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB1bC5hcHBlbmRDaGlsZChzZXJ2aWNlcyk7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdFVzKTtcbiAgICB1bC5hcHBlbmRDaGlsZChnYWxsZXJ5KTtcbiAgICBjb25zdCB0b3BCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BCYXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b3BCYXInKTtcbiAgICB0b3BCYXIuYXBwZW5kQ2hpbGQodWwpO1xuICAgIFxuICAgIHBhcmVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wQmFyKTtcbn07IiwiaW1wb3J0IHByaWNlTGlzdCBmcm9tICcuL2ltYWdlcy9zZXJ2aWNlcy5qcGcnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9tZW51TG9hZC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGluZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmdOYW1lLmlubmVySFRNTCA9ICdQdW50byBkZSBDYWxtYSc7XG5cbiAgICBjb25zdCBteVByaWNlTGlzdCA9IG5ldyBJbWFnZSgpO1xuICAgIG15UHJpY2VMaXN0LmNsYXNzTGlzdC5hZGQoJ2ltYWdlTGFyZ2UnKTtcbiAgICBteVByaWNlTGlzdC5zcmMgPSBwcmljZUxpc3Q7XG5cbiAgICBsb2FkTWVudShwYXJlbnRDb250YWluZXIpO1xuICAgIGNvbnN0IHNlcnZpY2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VydmljZXMnKTtcbiAgICBzZXJ2aWNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZU1lbnUnKTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZ05hbWUpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChteVByaWNlTGlzdCk7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgbG9hZFNlcnZpY2VzIGZyb20gJy4vc2VydmljZUxvYWQuanMnO1xuaW1wb3J0IGxvYWRDb250YWN0SW5mbyBmcm9tICcuL2NvbnRhY3RMb2FkLmpzJztcbmltcG9ydCBsb2FkR2FsbGVyeSBmcm9tICcuL2dhbGxlcnlMb2FkLmpzJztcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gJy4vZm9vdGVyTG9hZC5qcyc7XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbkxpc3RlbmVyID0gZnVuY3Rpb24oYnV0dG9uLCBhY3Rpb24pIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWN0aW9uKCk7XG4gICAgICAgICAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBzZXJ2aWNlTG9hZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXJ2aWNlcycpO1xuICAgIGNvbnN0IGNvbnRhY3RMb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3RVcycpO1xuICAgIGNvbnN0IGdhbGxlcnlMb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbGxlcnknKTtcbiAgICBcbiAgICBidXR0b25MaXN0ZW5lcihzZXJ2aWNlTG9hZEJ1dHRvbiwgbG9hZFNlcnZpY2VzKTtcbiAgICBidXR0b25MaXN0ZW5lcihjb250YWN0TG9hZEJ1dHRvbiwgbG9hZENvbnRhY3RJbmZvKTtcbiAgICBidXR0b25MaXN0ZW5lcihnYWxsZXJ5TG9hZEJ1dHRvbiwgbG9hZEdhbGxlcnkpO1xuICAgIGNvbnN0IHBhcmVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgbG9hZEZvb3RlcihwYXJlbnRDb250YWluZXIpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgbG9hZFNlcnZpY2VzKCk7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG59KTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9