self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AppScreenShots.js":
/*!******************************************!*\
  !*** ./src/components/AppScreenShots.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/js/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Irfah Bhai Project\\Torg\\src\\components\\AppScreenShots.js";
 // requires a loader




function AppScreenShots() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel, {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    interval: 5000,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      id: "Slide",
      className: "flex items-center m-2 my-5 space-x-4 rounded-xl \r cursor-pointer hover:bg-gray-100 hover:scale-105 motion-reduce:transition-none motion-reduce:transform-none\r transition transform duration-200 shadow-lg ease-Out transition-all",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "relative h-70 w-70",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: img,
          layout: "fill",
          objectFit: "contain",
          className: "rounded-lg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            className: "flex items-center justify-center",
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

_c = AppScreenShots;
/* harmony default export */ __webpack_exports__["default"] = (AppScreenShots);

var _c;

$RefreshReg$(_c, "AppScreenShots");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element) {
                // These elements should always exist. If they do not,
                // this code should fail.
                var anchorElement = document.querySelector('#__next_css__DO_NOT_USE__');
                var parentNode = anchorElement.parentNode// Normally <head>
                ;
                // Each style tag should be placed right before our
                // anchor. By inserting before and not after, we do not
                // need to track the last inserted element.
                parentNode.insertBefore(element, anchorElement);
            };
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
    if (!a && b || a && !b) {
        return false;
    }
    let p;
    for(p in a){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (a[p] !== b[p]) {
            return false;
        }
    }
    for(p in b){
        if (isNamedExport && p === 'default') {
            continue;
        }
        if (!a[p]) {
            return false;
        }
    }
    return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css",
      function () {
        content = __webpack_require__(/*! !!../../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!../../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./carousel.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOldIE = function isOldIE1() {
    let memo;
    return function memorize() {
        if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
    };
}();
const getTarget = function getTarget1() {
    const memo = {
    };
    return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
            let styleTarget = document.querySelector(target);
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
    };
}();
const stylesInDom = [];
function getIndexByIdentifier(identifier) {
    let result = -1;
    for(let i = 0; i < stylesInDom.length; i++){
        if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
        }
    }
    return result;
}
function modulesToDom(list, options) {
    const idCountMap = {
    };
    const identifiers = [];
    for(let i = 0; i < list.length; i++){
        const item = list[i];
        const id = options.base ? item[0] + options.base : item[0];
        const count = idCountMap[id] || 0;
        const identifier = id + ' ' + count.toString();
        idCountMap[id] = count + 1;
        const index = getIndexByIdentifier(identifier);
        const obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
        };
        if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
        } else {
            stylesInDom.push({
                identifier: identifier,
                updater: addStyle(obj, options),
                references: 1
            });
        }
        identifiers.push(identifier);
    }
    return identifiers;
}
function insertStyleElement(options) {
    const style = document.createElement('style');
    const attributes = options.attributes || {
    };
    if (typeof attributes.nonce === 'undefined') {
        const nonce = // eslint-disable-next-line no-undef
         true ? __webpack_require__.nc : 0;
        if (nonce) {
            attributes.nonce = nonce;
        }
    }
    Object.keys(attributes).forEach(function(key) {
        style.setAttribute(key, attributes[key]);
    });
    if (typeof options.insert === 'function') {
        options.insert(style);
    } else {
        const target = getTarget(options.insert || 'head');
        if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
    }
    return style;
}
function removeStyleElement(style) {
    // istanbul ignore if
    if (style.parentNode === null) {
        return false;
    }
    style.parentNode.removeChild(style);
}
/* istanbul ignore next  */ const replaceText = function replaceText1() {
    const textStore = [];
    return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
    };
}();
function applyToSingletonTag(style, index, remove, obj) {
    const css = remove ? '' : obj.media ? '@media ' + obj.media + ' {' + obj.css + '}' : obj.css;
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
    } else {
        const cssNode = document.createTextNode(css);
        const childNodes = style.childNodes;
        if (childNodes[index]) {
            style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
        } else {
            style.appendChild(cssNode);
        }
    }
}
function applyToTag(style, options, obj) {
    let css = obj.css;
    const media = obj.media;
    const sourceMap = obj.sourceMap;
    if (media) {
        style.setAttribute('media', media);
    } else {
        style.removeAttribute('media');
    }
    if (sourceMap && typeof btoa !== 'undefined') {
        css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
    }
    // For old IE
    /* istanbul ignore if  */ if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        while(style.firstChild){
            style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
    }
}
let singleton = null;
let singletonCounter = 0;
function addStyle(obj, options) {
    let style;
    let update;
    let remove;
    if (options.singleton) {
        const styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
    } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function() {
            removeStyleElement(style);
        };
    }
    update(obj);
    return function updateStyle(newObj) {
        if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
                return;
            }
            update(obj = newObj);
        } else {
            remove();
        }
    };
}
module.exports = function(list, options) {
    options = options || {
    };
    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
    }
    list = list || [];
    let lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
        newList = newList || [];
        if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
        }
        for(let i = 0; i < lastIdentifiers.length; i++){
            const identifier = lastIdentifiers[i];
            const index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
        }
        const newLastIdentifiers = modulesToDom(newList, options);
        for(let i1 = 0; i1 < lastIdentifiers.length; i1++){
            const identifier = lastIdentifiers[i1];
            const index = getIndexByIdentifier(identifier);
            if (stylesInDom[index].references === 0) {
                stylesInDom[index].updater();
                stylesInDom.splice(index, 1);
            }
        }
        lastIdentifiers = newLastIdentifiers;
    };
};

//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[5].use[2]!./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".carousel .control-arrow,.carousel.carousel-slider .control-arrow{transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{transition:all .15s ease-in;transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n", "",{"version":3,"sources":["webpack://node_modules/react-responsive-carousel/lib/styles/carousel.min.css"],"names":[],"mappings":"AAAA,kEAAsM,2BAA2B,CAAC,UAAU,CAAC,wBAAwB,CAAC,iBAAiB,CAAC,SAAS,CAAC,QAAQ,CAAC,eAAe,CAAC,QAAQ,CAAC,cAAc,CAAC,cAAc,CAAC,8DAA8D,SAAS,CAAC,yBAAyB,CAAC,gFAAgF,YAAY,CAAC,oBAAoB,CAAC,gCAAgC,CAAC,mCAAmC,CAAC,UAAU,CAAC,0CAA0C,SAAS,CAAC,uBAAuB,CAAC,cAAc,CAAC,YAAY,CAAC,sCAAsC,MAAM,CAAC,6CAA6C,2BAA2B,CAAC,sCAAsC,OAAO,CAAC,6CAA6C,0BAA0B,CAAC,eAAe,YAAY,CAAC,UAAU,iBAAiB,CAAC,UAAU,CAAC,YAAqE,qBAAqB,CAAC,cAAc,UAAU,CAAC,oBAAoB,CAAC,mBAAmB,CAAC,oBAAoB,iBAAiB,CAAC,yBAAyB,SAAS,CAAC,QAAQ,CAAC,eAAe,CAAC,OAAO,CAAC,gBAAgB,CAAC,cAAc,CAAC,0BAA0B,WAAW,CAAC,eAAe,CAAC,kBAAsJ,2BAA2B,CAAiJ,8BAA8B,CAAC,iBAAiB,CAAC,eAAe,CAAC,kBAAkB,CAAC,iBAAiK,8BAA8B,CAAC,oBAAoB,CAAC,gBAAgB,CAAC,kBAAkB,CAAC,eAAe,CAAC,qBAAqB,CAAC,WAAW,CAAC,uBAAuB,qBAAqB,CAAC,YAAY,CAAC,iDAAiD,qBAAqB,CAAC,qBAAqB,kBAAkB,CAAC,0BAA0B,iBAAiB,CAAC,QAAQ,CAAC,eAAe,CAAC,yCAAyC,KAAK,CAAC,UAAU,CAAC,cAAc,CAAC,QAAQ,CAAC,YAAY,CAAC,WAAW,CAAC,+CAA+C,0BAA0B,CAAC,0BAA0B,eAAe,CAAC,WAAW,CAAC,UAAU,CAAiJ,8BAA8B,CAAC,kDAAkD,yBAAyB,CAA0D,iBAAiB,CAAsB,YAAY,CAAC,yDAAyD,qBAAqB,CAAC,gBAAgB,CAAC,wCAAwC,yBAAyB,CAA0D,iBAAiB,CAAsB,YAAY,CAAC,gDAA8E,qBAAqB,CAAC,kBAAkB,QAAQ,CAAC,SAAS,CAAC,iBAAiB,CAAC,eAAe,CAAC,UAAU,CAAC,2BAA+K,+BAA+B,CAAC,iBAAiB,cAAc,CAAC,QAAQ,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,qBAAqB,UAAU,CAAC,kBAAkB,CAAC,QAAQ,CAAC,wBAAwB,oBAAoB,CAAC,uBAAuB,CAAC,kBAAkB,CAAC,QAAQ,CAAC,yBAAyK,8BAA8B,CAAC,iBAAiB,CAAC,WAAW,CAAC,QAAQ,CAAC,gBAAgB,CAAC,SAAS,CAAC,kBAAkB,CAAC,eAAe,CAAC,UAAU,CAAC,YAAY,CAAC,cAAc,CAAC,iBAAiB,CAAC,YAAY,CAAqK,mCAAmC,CAAC,wBAAwB,iBAAiB,CAAC,QAAQ,CAAC,aAAa,CAAC,SAAS,CAAC,iBAAiB,CAAC,UAAU,CAAC,SAAS,CAAC,0BAA0B,wBAAwB,QAAQ,CAAC,CAAC,6BAAiL,+BAA+B,CAAC,UAAU,CAAC,wBAAwB,CAAC,sCAAsC,CAAC,eAAe,CAAC,iBAAiB,CAAC,SAAS,CAAC,UAAU,CAAC,cAAc,CAAC,oBAAoB,CAAC,YAAY,CAAC,yEAAyE,SAAS,CAAC,yBAAyB,CAAC,2BAA2B,iBAAiB,CAAC,KAAK,CAAC,OAAO,CAAC,WAAW,CAAC,cAAc,CAAC,uCAAuC,CAAC,UAAU,CAAC,+BAA+B,SAAS","sourcesContent":[".carousel .control-arrow,.carousel.carousel-slider .control-arrow{-webkit-transition:all .25s ease-in;-moz-transition:all .25s ease-in;-ms-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;filter:alpha(opacity=40);position:absolute;z-index:2;top:20px;background:none;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:focus,.carousel .control-arrow:hover{opacity:1;filter:alpha(opacity=100)}.carousel .control-arrow:before,.carousel.carousel-slider .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:''}.carousel .control-disabled.control-arrow{opacity:0;filter:alpha(opacity=0);cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel-root{outline:none}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{outline:0;border:0;background:none;top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-moz-transition:all .15s ease-in;-ms-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translate3d(0, 0, 0);-moz-transform:translate3d(0, 0, 0);-ms-transform:translate3d(0, 0, 0);-o-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-moz-transition:border .15s ease-in;-ms-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb:focus{border:3px solid #ccc;outline:none}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,0.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-moz-transition:height .15s ease-in;-ms-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{flex-direction:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-moz-flex;display:-webkit-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-webkit-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-moz-transition:all .35s ease-in-out;-ms-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;-ms-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:0.25;-webkit-transition:opacity .35s ease-in-out;-moz-transition:opacity .35s ease-in-out;-ms-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;padding:0;text-align:center;width:100%;z-index:1}@media (min-width: 960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-moz-transition:opacity .25s ease-in;-ms-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;filter:alpha(opacity=30);box-shadow:1px 1px 2px rgba(0,0,0,0.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1;filter:alpha(opacity=100)}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,0.9);color:#fff}.carousel:hover .slide .legend{opacity:1}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener('test', null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {} // eslint-disable-line no-empty

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);

      _this._setSwiperRef = _this._setSwiperRef.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault && event.cancelable) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: '_setSwiperRef',
      value: function _setSwiperRef(node) {
        this.swiper = node;
        this.props.innerRef(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            tagName = _props.tagName,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            allowMouseEvents = _props.allowMouseEvents,
            onSwipeUp = _props.onSwipeUp,
            onSwipeDown = _props.onSwipeDown,
            onSwipeLeft = _props.onSwipeLeft,
            onSwipeRight = _props.onSwipeRight,
            onSwipeStart = _props.onSwipeStart,
            onSwipeMove = _props.onSwipeMove,
            onSwipeEnd = _props.onSwipeEnd,
            innerRef = _props.innerRef,
            tolerance = _props.tolerance,
            props = _objectWithoutProperties(_props, ['tagName', 'className', 'style', 'children', 'allowMouseEvents', 'onSwipeUp', 'onSwipeDown', 'onSwipeLeft', 'onSwipeRight', 'onSwipeStart', 'onSwipeMove', 'onSwipeEnd', 'innerRef', 'tolerance']);

        return _react2.default.createElement(
          this.props.tagName,
          _extends({
            ref: this._setSwiperRef,
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: className,
            style: style
          }, props),
          children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    innerRef: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},
    innerRef: function innerRef() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _default = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = 'translate3d';
  var translatedPosition = '(' + positionCss.join(',') + ')';
  return transitionProp + translatedPosition;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _CSSTranslate = _interopRequireDefault(__webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _Thumbs = _interopRequireDefault(__webpack_require__(/*! ./Thumbs */ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

var _document = _interopRequireDefault(__webpack_require__(/*! ../shims/document */ "./node_modules/react-responsive-carousel/lib/js/shims/document.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ../shims/window */ "./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {};

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
  return "".concat(current, " of ").concat(total);
};

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e ? e.hasOwnProperty('key') : false;
};

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "timer", void 0);

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node) {
      _this.thumbsRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function (node) {
      _this.carouselWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setListRef", function (node) {
      _this.listRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function (node, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }

      _this.itemsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "autoPlay", function () {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.clearAutoPlay();

      _this.timer = setTimeout(function () {
        _this.increment();
      }, _this.props.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function () {
      if (_this.timer) clearTimeout(_this.timer);
    });

    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function () {
      _this.clearAutoPlay();

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function () {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function () {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });

    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function () {
      if (!_this.carouselWrapperRef) {
        return false;
      }

      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function (e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }

      var axis = _this.props.axis;
      var isHorizontal = axis === 'horizontal';
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }

      var isHorizontal = _this.props.axis === 'horizontal';
      var firstItem = _this.itemsRef[0];

      if (!firstItem) {
        return;
      }

      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

      _this.setState({
        itemSize: itemSize
      });

      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setMountState", function () {
      _this.setState({
        hasMount: true
      });

      _this.updateSizes();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }

      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });

        return;
      }

      _this.props.onClickItem(index, item);

      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }

      _this.props.onChange(index, item);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function (index, item) {
      _this.props.onClickThumb(index, item);

      _this.moveTo(index);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function (event) {
      _this.setState({
        swiping: true
      });

      _this.props.onSwipeStart(event);

      _this.clearAutoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function (event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });

      _this.props.onSwipeEnd(event);

      _this.autoPlay();
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta, event) {
      _this.props.onSwipeMove(event);

      var isHorizontal = _this.props.axis === 'horizontal';

      var childrenLength = _react.Children.count(_this.props.children);

      var initialBoundry = 0;

      var currentPosition = _this.getPosition(_this.state.selectedItem);

      var finalBoundry = _this.props.infiniteLoop ? _this.getPosition(childrenLength - 1) - 100 : _this.getPosition(childrenLength - 1);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta; // prevent user from swiping left out of boundaries

      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }

      var position = currentPosition + 100 / (_this.state.itemSize / handledDelta);

      var hasMoved = Math.abs(axisDelta) > _this.props.swipeScrollTolerance;

      if (_this.props.infiniteLoop && hasMoved) {
        // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
        // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
        if (_this.state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (_this.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }

      if (!_this.props.preventMovementUntilSwipeScrollTolerance || hasMoved || _this.state.swipeMovementStarted) {
        if (!_this.state.swipeMovementStarted) {
          _this.setState({
            swipeMovementStarted: true
          });
        }

        _this.setPosition(position);
      } // allows scroll if the swipe was within the tolerance


      if (hasMoved && !_this.state.cancelClick) {
        _this.setState({
          cancelClick: true
        });
      }

      return hasMoved;
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (position, forceReflow) {
      var list = _reactDom.default.findDOMNode(_this.listRef);

      if (list instanceof HTMLElement) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          list.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });

        if (forceReflow) {
          list.offsetLeft;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetPosition", function () {
      var currentPosition = _this.getPosition(_this.state.selectedItem);

      _this.setPosition(currentPosition);
    });

    _defineProperty(_assertThisInitialized(_this), "decrement", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "increment", function () {
      var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position, fromSwipe) {
      if (typeof position !== 'number') {
        return;
      }

      var lastPosition = _react.Children.count(_this.props.children) - 1;
      var needClonedSlide = _this.props.infiniteLoop && !fromSwipe && (position < 0 || position > lastPosition);
      var oldPosition = position;

      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }

      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }

      if (needClonedSlide) {
        // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
        // this is only needed for non-swiping situation
        _this.setState({
          swiping: true
        }, function () {
          if (oldPosition < 0) {
            if (_this.props.centerMode && _this.props.centerSlidePercentage && _this.props.axis === 'horizontal') {
              _this.setPosition(-(lastPosition + 2) * _this.props.centerSlidePercentage - (100 - _this.props.centerSlidePercentage) / 2, true);
            } else {
              _this.setPosition(-(lastPosition + 2) * 100, true);
            }
          } else if (oldPosition > lastPosition) {
            _this.setPosition(0, true);
          }

          _this.selectItem({
            selectedItem: position,
            swiping: false
          });
        });
      } else {
        _this.selectItem({
          // if it's not a slider, we don't need to set position here
          selectedItem: position
        });
      } // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
      // and will result in the interval function not being cleared correctly.


      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickNext", function () {
      _this.increment(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function () {
      _this.decrement(1, false);
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function () {
      _this.increment(1, true);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function () {
      _this.decrement(1, true);

      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeItem", function (newIndex) {
      return function (e) {
        if (!isKeyboardEvent(e) || e.key === 'Enter') {
          _this.moveTo(newIndex);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (state, cb) {
      _this.setState(state, cb);

      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });

    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function () {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName('img') || [];
      return images[0];
    });

    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function (position) {
      var item = _this.itemsRef && _this.itemsRef[position];

      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName('img') || [];

        if (slideImages.length > 0) {
          var image = slideImages[0];

          if (!image.complete) {
            // if the image is still loading, the size won't be available so we trigger a new render after it's done
            var onImageLoad = function onImageLoad() {
              _this.forceUpdate();

              image.removeEventListener('load', onImageLoad);
            };

            image.addEventListener('load', onImageLoad);
          }
        } // try to get img first, if img not there find first display tag


        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }

      return null;
    });

    _this.state = {
      initialized: false,
      selectedItem: props.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1
    };
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }

      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }

      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }

      if (prevState.swiping && !this.state.swiping) {
        // We stopped swiping, ensure we are heading to the new/current slide and not stuck
        this.resetPosition();
      }

      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }

      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }

        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;

      this.bindEvents();

      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }

      if (this.props.autoFocus) {
        this.forceFocus();
      }

      this.setState({
        initialized: true
      }, function () {
        var initialImage = _this2.getInitialImage();

        if (initialImage && !initialImage.complete) {
          // if it's a carousel of images, we set the mount state after the first image is loaded
          initialImage.addEventListener('load', _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;

      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
        carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes);

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
      var initialImage = this.getInitialImage();

      if (initialImage) {
        initialImage.removeEventListener('load', this.setMountState);
      }

      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener('keydown', this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;

      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "getPosition",
    value: function getPosition(index) {
      if (this.props.infiniteLoop) {
        // index has to be added by 1 because of the first cloned slide
        ++index;
      }

      if (index === 0) {
        return 0;
      }

      var childrenLength = _react.Children.count(this.props.children);

      if (this.props.centerMode && this.props.axis === 'horizontal') {
        var currentPosition = -index * this.props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;

        if (index && (index !== lastPosition || this.props.infiniteLoop)) {
          currentPosition += (100 - this.props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - this.props.centerSlidePercentage;
        }

        return currentPosition;
      }

      return -index * 100;
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;

      if (!this.props.children) {
        return [];
      }

      return _react.Children.map(this.props.children, function (item, index) {
        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: 'itemKey' + index + (isClone ? 'clone' : ''),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item)
        };
        var extraProps = {};

        if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
          extraProps.style = {
            minWidth: _this3.props.centerSlidePercentage + '%'
          };
        }

        return /*#__PURE__*/_react.default.createElement("li", _extends({}, slideProps, extraProps), _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;

      var _this$props = this.props,
          showIndicators = _this$props.showIndicators,
          labels = _this$props.labels,
          renderIndicator = _this$props.renderIndicator,
          children = _this$props.children;

      if (!showIndicators) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function (_, index) {
        return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }

      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === 'horizontal';
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false; // show right arrow

      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = this.getPosition(this.state.selectedItem); // if 3d is available, let's take advantage of the performance of transform

      var transformProp = (0, _CSSTranslate.default)(currentPosition, '%', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp
      };

      if (!this.state.swiping) {
        itemListStyles = _objectSpread(_objectSpread({}, itemListStyles), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          MsTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }

      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};

      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;

        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
          swiperProps.style.height = itemHeight || 'auto';
          containerStyles.height = itemHeight || 'auto';
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style.height = this.state.itemSize;
        containerStyles.height = this.state.itemSize;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: 0
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node) {
          return _this5.setListRef(node);
        },
        style: itemListStyles
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);

  return Carousel;
}(_react.default.Component);

exports.default = Carousel;

_defineProperty(Carousel, "displayName", 'Carousel');

_defineProperty(Carousel, "defaultProps", {
  axis: 'horizontal',
  centerSlidePercentage: 80,
  interval: 3000,
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  onClickItem: noop,
  onClickThumb: noop,
  onChange: noop,
  onSwipeStart: function onSwipeStart() {},
  onSwipeEnd: function onSwipeEnd() {},
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function (item) {
      var img = item; // if the item is not an image, try to find the first image in the item's children.

      if (item.type !== 'img') {
        img = _react.Children.toArray(item.props.children).find(function (children) {
          return children.type === 'img';
        });
      }

      if (!img) {
        return undefined;
      }

      return img;
    });

    if (images.filter(function (image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }

    return images;
  },
  statusFormatter: defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: 'standard',
  width: '100%'
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js ***!
  \************************************************************************************/
/***/ (function() {

"use strict";


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _cssClasses = _interopRequireDefault(__webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js"));

var _dimensions = __webpack_require__(/*! ../dimensions */ "./node_modules/react-responsive-carousel/lib/js/dimensions.js");

var _CSSTranslate = _interopRequireDefault(__webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"));

var _reactEasySwipe = _interopRequireDefault(__webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ../shims/window */ "./node_modules/react-responsive-carousel/lib/js/shims/window.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isKeyboardEvent = function isKeyboardEvent(e) {
  return e.hasOwnProperty('key');
};

var Thumbs = /*#__PURE__*/function (_Component) {
  _inherits(Thumbs, _Component);

  var _super = _createSuper(Thumbs);

  function Thumbs(_props) {
    var _this;

    _classCallCheck(this, Thumbs);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function (node) {
      _this.itemsWrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function (node) {
      _this.itemsListRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function (node, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }

      _this.thumbsRef[index] = node;
    });

    _defineProperty(_assertThisInitialized(_this), "updateSizes", function () {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }

      var total = _react.Children.count(_this.props.children);

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;

      _this.setState(function (_state, props) {
        return {
          itemSize: itemSize,
          visibleItems: visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
          lastPosition: lastPosition,
          showArrows: showArrows
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function (index, item, e) {
      if (!isKeyboardEvent(e) || e.key === 'Enter') {
        var handler = _this.props.onSelectItem;

        if (typeof handler === 'function') {
          handler(index, item);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function () {
      _this.setState({
        swiping: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function () {
      _this.setState({
        swiping: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function (delta) {
      var deltaX = delta.x;

      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }

      var leftBoundary = 0;

      var childrenLength = _react.Children.count(_this.props.children);

      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems; // prevent user from swiping left out of boundaries

      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      } // prevent user from swiping right out of boundaries


      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }

      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX); // if 3d isn't available we will use left to move

      if (_this.itemsListRef) {
        ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, '%', _this.props.axis);
        });
      }

      return true;
    });

    _defineProperty(_assertThisInitialized(_this), "slideRight", function (positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "slideLeft", function (positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === 'number' ? positions : 1));
    });

    _defineProperty(_assertThisInitialized(_this), "moveTo", function (position) {
      // position can't be lower than 0
      position = position < 0 ? 0 : position; // position can't be higher than last postion

      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;

      _this.setState({
        firstItem: position
      });
    });

    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }

  _createClass(Thumbs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      if (props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: props.selectedItem,
          firstItem: this.getFirstItem(props.selectedItem)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children === prevProps.children) {
        return;
      } // This will capture any size changes for arrow adjustments etc.
      // usually in the same render cycle so we don't see any flickers


      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      // as the widths are calculated, we need to resize
      // the carousel when the window is resized
      (0, _window.default)().addEventListener('resize', this.updateSizes); // issue #2 - image loading smaller

      (0, _window.default)().addEventListener('DOMContentLoaded', this.updateSizes); // when the component is rendered we need to calculate
      // the container size to adjust the responsive behaviour

      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      // removing listeners
      (0, _window.default)().removeEventListener('resize', this.updateSizes);
      (0, _window.default)().removeEventListener('DOMContentLoaded', this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;

      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }

      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }

      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }

      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;

      return this.props.children.map(function (img, index) {
        var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);

        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          'aria-label': "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /*#__PURE__*/_react.default.createElement("li", _extends({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      }

      var isSwipeable = _react.Children.count(this.props.children) > 1; // show left arrow?

      var hasPrev = this.state.showArrows && this.state.firstItem > 0; // show right arrow

      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition; // obj to hold the transformations and styles

      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, 'px', this.props.axis);
      var transitionTime = this.props.transitionTime + 'ms';
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(false)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /*#__PURE__*/_react.default.createElement(_reactEasySwipe.default, {
        tagName: "ul",
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /*#__PURE__*/_react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(false, this.state.swiping),
        ref: function ref(node) {
          return _this3.setItemsListRef(node);
        },
        style: itemListStyles
      }, this.renderItems()), /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: _cssClasses.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);

  return Thumbs;
}(_react.Component);

exports.default = Thumbs;

_defineProperty(Thumbs, "displayName", 'Thumbs');

_defineProperty(Thumbs, "defaultProps", {
  axis: 'horizontal',
  labels: {
    leftArrow: 'previous slide / item',
    rightArrow: 'next slide / item',
    item: 'slide item'
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/cssClasses.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/cssClasses.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty({
      'carousel-root': true
    }, customClassName || '', !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      'carousel-slider': isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      'thumbs-wrapper': !isSlider,
      'slider-wrapper': isSlider,
      'axis-horizontal': axis === 'horizontal',
      'axis-vertical': axis !== 'horizontal'
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected: selected,
      previous: previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-prev': true,
      'control-disabled': disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      'control-arrow control-next': true,
      'control-disabled': disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected: selected
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/dimensions.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/dimensions.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.outerWidth = void 0;

var outerWidth = function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};

exports.outerWidth = outerWidth;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
}));
Object.defineProperty(exports, "CarouselProps", ({
  enumerable: true,
  get: function get() {
    return _types.CarouselProps;
  }
}));
Object.defineProperty(exports, "Thumbs", ({
  enumerable: true,
  get: function get() {
    return _Thumbs.default;
  }
}));

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ./components/Carousel */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel.js"));

var _types = __webpack_require__(/*! ./components/Carousel/types */ "./node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js");

var _Thumbs = _interopRequireDefault(__webpack_require__(/*! ./components/Thumbs */ "./node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/document.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/shims/document.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _default = function _default() {
  return document;
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/js/shims/window.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/js/shims/window.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _default = function _default() {
  return window;
};

exports.default = _default;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVhMGM2N2MyOGJlNTIxNjZlMzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFnRTs7QUFDaEU7OztBQUVBLFNBQVNDLGNBQVQsR0FBMEI7QUFFdEIsc0JBQ0ksOERBQUMsK0RBQUQ7QUFDSSxZQUFRLE1BRFo7QUFFSSxnQkFBWSxNQUZoQjtBQUdJLGNBQVUsRUFBRSxLQUhoQjtBQUlJLGtCQUFjLEVBQUUsS0FKcEI7QUFLSSxjQUFVLEVBQUUsS0FMaEI7QUFNSSxZQUFRLEVBQUUsSUFOZDtBQUFBLDJCQVNJO0FBQUssUUFBRSxFQUFDLE9BQVI7QUFBZ0IsZUFBUyxFQUFDLHNPQUExQjtBQUFBLDZCQUtJO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFQyxHQUFWO0FBQWUsZ0JBQU0sRUFBQyxNQUF0QjtBQUE2QixtQkFBUyxFQUFDLFNBQXZDO0FBQWlELG1CQUFTLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsaUNBQ0k7QUFBSSxxQkFBUyxFQUFDLGtDQUFkO0FBQUEsc0JBQWtEQztBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJIOztLQTdCUUY7QUErQlQsK0RBQWVBLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFF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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLDhCQUE4QjtBQUM5QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTs7QUFFM0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztB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QztBQUNGLGVBQWU7O0FBRWY7QUFDQTtBQUNBOztBQUVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwU2NyZWVuU2hvdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3M/OWUwYyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVhc3ktc3dpcGUvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZWFzeS1zd2lwZS9saWIvcmVhY3Qtc3dpcGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9DU1NUcmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9jb21wb25lbnRzL0Nhcm91c2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvY29tcG9uZW50cy9UaHVtYnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9jc3NDbGFzc2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvZGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL2pzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvanMvc2hpbXMvZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9qcy9zaGltcy93aW5kb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgLy8gcmVxdWlyZXMgYSBsb2FkZXJcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsJztcclxuXHJcbmZ1bmN0aW9uIEFwcFNjcmVlblNob3RzKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgIGF1dG9QbGF5XHJcbiAgICAgICAgICAgIGluZmluaXRlTG9vcFxyXG4gICAgICAgICAgICBzaG93U3RhdHVzPXtmYWxzZX1cclxuICAgICAgICAgICAgc2hvd0luZGljYXRvcnM9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzaG93VGh1bWJzPXtmYWxzZX1cclxuICAgICAgICAgICAgaW50ZXJ2YWw9ezUwMDB9XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIlNsaWRlXCIgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBtLTIgbXktNSBzcGFjZS14LTQgcm91bmRlZC14bCBcclxuICAgICAgICBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpzY2FsZS0xMDUgbW90aW9uLXJlZHVjZTp0cmFuc2l0aW9uLW5vbmUgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVxyXG4gICAgICAgIHRyYW5zaXRpb24gdHJhbnNmb3JtIGR1cmF0aW9uLTIwMCBzaGFkb3ctbGcgZWFzZS1PdXQgdHJhbnNpdGlvbi1hbGwnPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNzAgdy03MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGxheW91dD0nZmlsbCcgb2JqZWN0Rml0PSdjb250YWluJyBjbGFzc05hbWU9J3JvdW5kZWQtbGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwU2NyZWVuU2hvdHNcclxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsxXSEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLm9uZU9mWzVdLnVzZVsyXSEuL2Nhcm91c2VsLm1pbi5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgIHZhciBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gYW5jaG9yRWxlbWVudC5wYXJlbnROb2RlLy8gTm9ybWFsbHkgPGhlYWQ+XG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgIC8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICB9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gICAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwO1xuICAgIGZvcihwIGluIGEpe1xuICAgICAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls1XS51c2VbMl0hLi9jYXJvdXNlbC5taW4uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzFdIS4uLy4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNV0udXNlWzJdIS4vY2Fyb3VzZWwubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFMSgpIHtcbiAgICBsZXQgbWVtbztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAgICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAgICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgIH07XG59KCk7XG5jb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQxKCkge1xuICAgIGNvbnN0IG1lbW8gPSB7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgbGV0IHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgICAgICAgICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICAgICAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gICAgfTtcbn0oKTtcbmNvbnN0IHN0eWxlc0luRG9tID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgbGV0IHJlc3VsdCA9IC0xO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gICAgY29uc3QgaWRDb3VudE1hcCA9IHtcbiAgICB9O1xuICAgIGNvbnN0IGlkZW50aWZpZXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBpdGVtID0gbGlzdFtpXTtcbiAgICAgICAgY29uc3QgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICAgICAgY29uc3QgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaWQgKyAnICcgKyBjb3VudC50b1N0cmluZygpO1xuICAgICAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb2JqID0ge1xuICAgICAgICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICAgICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICAgICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7XG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IG5vbmNlID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG4gICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICAgIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi8gY29uc3QgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dDEoKSB7XG4gICAgY29uc3QgdGV4dFN0b3JlID0gW107XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gICAgfTtcbn0oKTtcbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICAgIGNvbnN0IGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gJ0BtZWRpYSAnICsgb2JqLm1lZGlhICsgJyB7JyArIG9iai5jc3MgKyAnfScgOiBvYmouY3NzO1xuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcbiAgICAgICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgICBsZXQgY3NzID0gb2JqLmNzcztcbiAgICBjb25zdCBtZWRpYSA9IG9iai5tZWRpYTtcbiAgICBjb25zdCBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICAgIGlmIChtZWRpYSkge1xuICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY3NzICs9ICdcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LCcgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgJyAqLyc7XG4gICAgfVxuICAgIC8vIEZvciBvbGQgSUVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZShzdHlsZS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbn1cbmxldCBzaW5nbGV0b24gPSBudWxsO1xubGV0IHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gICAgbGV0IHN0eWxlO1xuICAgIGxldCB1cGRhdGU7XG4gICAgbGV0IHJlbW92ZTtcbiAgICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICAgICAgY29uc3Qgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgICAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgICAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHVwZGF0ZShvYmopO1xuICAgIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICAgICAgaWYgKG5ld09iaikge1xuICAgICAgICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xuICAgIH07XG4gICAgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gICAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuICAgIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gICAgfVxuICAgIGxpc3QgPSBsaXN0IHx8IFtdO1xuICAgIGxldCBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgICAgICBmb3IobGV0IGkxID0gMDsgaTEgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpMSsrKXtcbiAgICAgICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaTFdO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gICAgfTtcbn07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBuPXs3NjI6ZnVuY3Rpb24obil7bi5leHBvcnRzPWZ1bmN0aW9uKG4pe3ZhciB0PVtdO3QudG9TdHJpbmc9ZnVuY3Rpb24gdG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIHI9Y3NzV2l0aE1hcHBpbmdUb1N0cmluZyh0LG4pO2lmKHRbMl0pe3JldHVyblwiQG1lZGlhIFwiLmNvbmNhdCh0WzJdLFwiIHtcIikuY29uY2F0KHIsXCJ9XCIpfXJldHVybiByfSkuam9pbihcIlwiKX07dC5pPWZ1bmN0aW9uKG4scixvKXtpZih0eXBlb2Ygbj09PVwic3RyaW5nXCIpe249W1tudWxsLG4sXCJcIl1dfXZhciBlPXt9O2lmKG8pe2Zvcih2YXIgYT0wO2E8dGhpcy5sZW5ndGg7YSsrKXt2YXIgYz10aGlzW2FdWzBdO2lmKGMhPW51bGwpe2VbY109dHJ1ZX19fWZvcih2YXIgaT0wO2k8bi5sZW5ndGg7aSsrKXt2YXIgdT1bXS5jb25jYXQobltpXSk7aWYobyYmZVt1WzBdXSl7Y29udGludWV9aWYocil7aWYoIXVbMl0pe3VbMl09cn1lbHNle3VbMl09XCJcIi5jb25jYXQocixcIiBhbmQgXCIpLmNvbmNhdCh1WzJdKX19dC5wdXNoKHUpfX07cmV0dXJuIHR9O2Z1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcobix0KXt2YXIgcj1uWzFdfHxcIlwiO3ZhciBvPW5bM107aWYoIW8pe3JldHVybiByfWlmKHQmJnR5cGVvZiBidG9hPT09XCJmdW5jdGlvblwiKXt2YXIgZT10b0NvbW1lbnQobyk7dmFyIGE9by5zb3VyY2VzLm1hcChmdW5jdGlvbihuKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KG8uc291cmNlUm9vdHx8XCJcIikuY29uY2F0KG4sXCIgKi9cIil9KTtyZXR1cm5bcl0uY29uY2F0KGEpLmNvbmNhdChbZV0pLmpvaW4oXCJcXG5cIil9cmV0dXJuW3JdLmpvaW4oXCJcXG5cIil9ZnVuY3Rpb24gdG9Db21tZW50KG4pe3ZhciB0PWJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KG4pKSkpO3ZhciByPVwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KHQpO3JldHVyblwiLyojIFwiLmNvbmNhdChyLFwiICovXCIpfX19O3ZhciB0PXt9O2Z1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18ocil7aWYodFtyXSl7cmV0dXJuIHRbcl0uZXhwb3J0c312YXIgbz10W3JdPXtleHBvcnRzOnt9fTt2YXIgZT10cnVlO3RyeXtuW3JdKG8sby5leHBvcnRzLF9fbmNjd3Bja19yZXF1aXJlX18pO2U9ZmFsc2V9ZmluYWxseXtpZihlKWRlbGV0ZSB0W3JdfXJldHVybiBvLmV4cG9ydHN9X19uY2N3cGNrX3JlcXVpcmVfXy5hYj1fX2Rpcm5hbWUrXCIvXCI7cmV0dXJuIF9fbmNjd3Bja19yZXF1aXJlX18oNzYyKX0oKTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJvdXNlbCAuY29udHJvbC1hcnJvdywuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93e3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbjtvcGFjaXR5Oi40O2ZpbHRlcjphbHBoYShvcGFjaXR5PTQwKTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjIwcHg7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2ZvbnQtc2l6ZTozMnB4O2N1cnNvcjpwb2ludGVyfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpmb2N1cywuY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3c6aG92ZXJ7b3BhY2l0eToxO2ZpbHRlcjphbHBoYShvcGFjaXR5PTEwMCl9LmNhcm91c2VsIC5jb250cm9sLWFycm93OmJlZm9yZSwuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93OmJlZm9yZXttYXJnaW46MCA1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXRvcDo4cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTo4cHggc29saWQgdHJhbnNwYXJlbnQ7Y29udGVudDonJ30uY2Fyb3VzZWwgLmNvbnRyb2wtZGlzYWJsZWQuY29udHJvbC1hcnJvd3tvcGFjaXR5OjA7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MCk7Y3Vyc29yOmluaGVyaXQ7ZGlzcGxheTpub25lfS5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3d7bGVmdDowfS5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3c6YmVmb3Jle2JvcmRlci1yaWdodDo4cHggc29saWQgI2ZmZn0uY2Fyb3VzZWwgLmNvbnRyb2wtbmV4dC5jb250cm9sLWFycm93e3JpZ2h0OjB9LmNhcm91c2VsIC5jb250cm9sLW5leHQuY29udHJvbC1hcnJvdzpiZWZvcmV7Ym9yZGVyLWxlZnQ6OHB4IHNvbGlkICNmZmZ9LmNhcm91c2VsLXJvb3R7b3V0bGluZTpub25lfS5jYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5jYXJvdXNlbCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY2Fyb3VzZWwgaW1ne3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZX0uY2Fyb3VzZWwgLmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvd3tvdXRsaW5lOjA7Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO3RvcDo1MCU7bWFyZ2luLXRvcDotMTNweDtmb250LXNpemU6MThweH0uY2Fyb3VzZWwgLnRodW1icy13cmFwcGVye21hcmdpbjoyMHB4O292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwgLnRodW1ic3t0cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2UtaW47dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO3Bvc2l0aW9uOnJlbGF0aXZlO2xpc3Qtc3R5bGU6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXB9LmNhcm91c2VsIC50aHVtYnt0cmFuc2l0aW9uOmJvcmRlciAuMTVzIGVhc2UtaW47ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjZweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjozcHggc29saWQgI2ZmZjtwYWRkaW5nOjJweH0uY2Fyb3VzZWwgLnRodW1iOmZvY3Vze2JvcmRlcjozcHggc29saWQgI2NjYztvdXRsaW5lOm5vbmV9LmNhcm91c2VsIC50aHVtYi5zZWxlY3RlZCwuY2Fyb3VzZWwgLnRodW1iOmhvdmVye2JvcmRlcjozcHggc29saWQgIzMzM30uY2Fyb3VzZWwgLnRodW1iIGltZ3t2ZXJ0aWNhbC1hbGlnbjp0b3B9LmNhcm91c2VsLmNhcm91c2VsLXNsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW59LmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvd3t0b3A6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyNnB4O2JvdHRvbTowO21hcmdpbi10b3A6MDtwYWRkaW5nOjVweH0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93OmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpfS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXJ7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjphdXRvO3dpZHRoOjEwMCU7dHJhbnNpdGlvbjpoZWlnaHQgLjE1cyBlYXNlLWlufS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXIuYXhpcy1ob3Jpem9udGFsIC5zbGlkZXJ7LW1zLWJveC1vcmllbnQ6aG9yaXpvbnRhbDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLWhvcml6b250YWwgLnNsaWRlciAuc2xpZGV7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW59LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2Fsey1tcy1ib3gtb3JpZW50Omhvcml6b250YWw7ZGlzcGxheTotbW96LWZsZXg7ZGlzcGxheTpmbGV4fS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXIuYXhpcy12ZXJ0aWNhbCAuc2xpZGVye2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY2Fyb3VzZWwgLnNsaWRlcnttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7bGlzdC1zdHlsZTpub25lO3dpZHRoOjEwMCV9LmNhcm91c2VsIC5zbGlkZXIuYW5pbWF0ZWR7dHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dH0uY2Fyb3VzZWwgLnNsaWRle21pbi13aWR0aDoxMDAlO21hcmdpbjowO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246Y2VudGVyfS5jYXJvdXNlbCAuc2xpZGUgaW1ne3dpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlcjowfS5jYXJvdXNlbCAuc2xpZGUgaWZyYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOmNhbGMoMTAwJSAtIDgwcHgpO21hcmdpbjowIDQwcHggNDBweDtib3JkZXI6MH0uY2Fyb3VzZWwgLnNsaWRlIC5sZWdlbmR7dHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTo0MHB4O2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi00NSU7d2lkdGg6OTAlO2JvcmRlci1yYWRpdXM6MTBweDtiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2ZmZjtwYWRkaW5nOjEwcHg7Zm9udC1zaXplOjEycHg7dGV4dC1hbGlnbjpjZW50ZXI7b3BhY2l0eTowLjI1O3RyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0fS5jYXJvdXNlbCAuY29udHJvbC1kb3Rze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO21hcmdpbjoxMHB4IDA7cGFkZGluZzowO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ei1pbmRleDoxfUBtZWRpYSAobWluLXdpZHRoOiA5NjBweCl7LmNhcm91c2VsIC5jb250cm9sLWRvdHN7Ym90dG9tOjB9fS5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3R7dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjtvcGFjaXR5Oi4zO2ZpbHRlcjphbHBoYShvcGFjaXR5PTMwKTtib3gtc2hhZG93OjFweCAxcHggMnB4IHJnYmEoMCwwLDAsMC45KTtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo1MCU7d2lkdGg6OHB4O2hlaWdodDo4cHg7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgOHB4fS5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3Quc2VsZWN0ZWQsLmNhcm91c2VsIC5jb250cm9sLWRvdHMgLmRvdDpob3ZlcntvcGFjaXR5OjE7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MTAwKX0uY2Fyb3VzZWwgLmNhcm91c2VsLXN0YXR1c3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO3BhZGRpbmc6NXB4O2ZvbnQtc2l6ZToxMHB4O3RleHQtc2hhZG93OjFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC45KTtjb2xvcjojZmZmfS5jYXJvdXNlbDpob3ZlciAuc2xpZGUgLmxlZ2VuZHtvcGFjaXR5OjF9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrRUFBc00sMkJBQTJCLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLDhEQUE4RCxTQUFTLENBQUMseUJBQXlCLENBQUMsZ0ZBQWdGLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxtQ0FBbUMsQ0FBQyxVQUFVLENBQUMsMENBQTBDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLHNDQUFzQyxNQUFNLENBQUMsNkNBQTZDLDJCQUEyQixDQUFDLHNDQUFzQyxPQUFPLENBQUMsNkNBQTZDLDBCQUEwQixDQUFDLGVBQWUsWUFBWSxDQUFDLFVBQVUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFlBQXFFLHFCQUFxQixDQUFDLGNBQWMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixpQkFBaUIsQ0FBQyx5QkFBeUIsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQywwQkFBMEIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxrQkFBc0osMkJBQTJCLENBQWlKLDhCQUE4QixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUssOEJBQThCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyx1QkFBdUIscUJBQXFCLENBQUMsWUFBWSxDQUFDLGlEQUFpRCxxQkFBcUIsQ0FBQyxxQkFBcUIsa0JBQWtCLENBQUMsMEJBQTBCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMseUNBQXlDLEtBQUssQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLCtDQUErQywwQkFBMEIsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQWlKLDhCQUE4QixDQUFDLGtEQUFrRCx5QkFBeUIsQ0FBMEQsaUJBQWlCLENBQXNCLFlBQVksQ0FBQyx5REFBeUQscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsd0NBQXdDLHlCQUF5QixDQUEwRCxpQkFBaUIsQ0FBc0IsWUFBWSxDQUFDLGdEQUE4RSxxQkFBcUIsQ0FBQyxrQkFBa0IsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLDJCQUErSywrQkFBK0IsQ0FBQyxpQkFBaUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyx3QkFBd0Isb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLHlCQUF5Syw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFxSyxtQ0FBbUMsQ0FBQyx3QkFBd0IsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsd0JBQXdCLFFBQVEsQ0FBQyxDQUFDLDZCQUFpTCwrQkFBK0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsc0NBQXNDLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyx5RUFBeUUsU0FBUyxDQUFDLHlCQUF5QixDQUFDLDJCQUEyQixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsdUNBQXVDLENBQUMsVUFBVSxDQUFDLCtCQUErQixTQUFTXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJvdXNlbCAuY29udHJvbC1hcnJvdywuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93ey13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluOy1tcy10cmFuc2l0aW9uOmFsbCAuMjVzIGVhc2UtaW47LW8tdHJhbnNpdGlvbjphbGwgLjI1cyBlYXNlLWluO3RyYW5zaXRpb246YWxsIC4yNXMgZWFzZS1pbjtvcGFjaXR5Oi40O2ZpbHRlcjphbHBoYShvcGFjaXR5PTQwKTtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjIwcHg7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2ZvbnQtc2l6ZTozMnB4O2N1cnNvcjpwb2ludGVyfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvdzpmb2N1cywuY2Fyb3VzZWwgLmNvbnRyb2wtYXJyb3c6aG92ZXJ7b3BhY2l0eToxO2ZpbHRlcjphbHBoYShvcGFjaXR5PTEwMCl9LmNhcm91c2VsIC5jb250cm9sLWFycm93OmJlZm9yZSwuY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93OmJlZm9yZXttYXJnaW46MCA1cHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyLXRvcDo4cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbTo4cHggc29saWQgdHJhbnNwYXJlbnQ7Y29udGVudDonJ30uY2Fyb3VzZWwgLmNvbnRyb2wtZGlzYWJsZWQuY29udHJvbC1hcnJvd3tvcGFjaXR5OjA7ZmlsdGVyOmFscGhhKG9wYWNpdHk9MCk7Y3Vyc29yOmluaGVyaXQ7ZGlzcGxheTpub25lfS5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3d7bGVmdDowfS5jYXJvdXNlbCAuY29udHJvbC1wcmV2LmNvbnRyb2wtYXJyb3c6YmVmb3Jle2JvcmRlci1yaWdodDo4cHggc29saWQgI2ZmZn0uY2Fyb3VzZWwgLmNvbnRyb2wtbmV4dC5jb250cm9sLWFycm93e3JpZ2h0OjB9LmNhcm91c2VsIC5jb250cm9sLW5leHQuY29udHJvbC1hcnJvdzpiZWZvcmV7Ym9yZGVyLWxlZnQ6OHB4IHNvbGlkICNmZmZ9LmNhcm91c2VsLXJvb3R7b3V0bGluZTpub25lfS5jYXJvdXNlbHtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5jYXJvdXNlbCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uY2Fyb3VzZWwgaW1ne3dpZHRoOjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9pbnRlci1ldmVudHM6bm9uZX0uY2Fyb3VzZWwgLmNhcm91c2Vse3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJvdXNlbCAuY29udHJvbC1hcnJvd3tvdXRsaW5lOjA7Ym9yZGVyOjA7YmFja2dyb3VuZDpub25lO3RvcDo1MCU7bWFyZ2luLXRvcDotMTNweDtmb250LXNpemU6MThweH0uY2Fyb3VzZWwgLnRodW1icy13cmFwcGVye21hcmdpbjoyMHB4O292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwgLnRodW1ic3std2Via2l0LXRyYW5zaXRpb246YWxsIC4xNXMgZWFzZS1pbjstbW96LXRyYW5zaXRpb246YWxsIC4xNXMgZWFzZS1pbjstbXMtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlLWluOy1vLXRyYW5zaXRpb246YWxsIC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2UtaW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLCAwLCAwKTstby10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwgMCwgMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsIDAsIDApO3Bvc2l0aW9uOnJlbGF0aXZlO2xpc3Qtc3R5bGU6bm9uZTt3aGl0ZS1zcGFjZTpub3dyYXB9LmNhcm91c2VsIC50aHVtYnstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyIC4xNXMgZWFzZS1pbjstbW96LXRyYW5zaXRpb246Ym9yZGVyIC4xNXMgZWFzZS1pbjstbXMtdHJhbnNpdGlvbjpib3JkZXIgLjE1cyBlYXNlLWluOy1vLXRyYW5zaXRpb246Ym9yZGVyIC4xNXMgZWFzZS1pbjt0cmFuc2l0aW9uOmJvcmRlciAuMTVzIGVhc2UtaW47ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjZweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjozcHggc29saWQgI2ZmZjtwYWRkaW5nOjJweH0uY2Fyb3VzZWwgLnRodW1iOmZvY3Vze2JvcmRlcjozcHggc29saWQgI2NjYztvdXRsaW5lOm5vbmV9LmNhcm91c2VsIC50aHVtYi5zZWxlY3RlZCwuY2Fyb3VzZWwgLnRodW1iOmhvdmVye2JvcmRlcjozcHggc29saWQgIzMzM30uY2Fyb3VzZWwgLnRodW1iIGltZ3t2ZXJ0aWNhbC1hbGlnbjp0b3B9LmNhcm91c2VsLmNhcm91c2VsLXNsaWRlcntwb3NpdGlvbjpyZWxhdGl2ZTttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW59LmNhcm91c2VsLmNhcm91c2VsLXNsaWRlciAuY29udHJvbC1hcnJvd3t0b3A6MDtjb2xvcjojZmZmO2ZvbnQtc2l6ZToyNnB4O2JvdHRvbTowO21hcmdpbi10b3A6MDtwYWRkaW5nOjVweH0uY2Fyb3VzZWwuY2Fyb3VzZWwtc2xpZGVyIC5jb250cm9sLWFycm93OmhvdmVye2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpfS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXJ7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjphdXRvO3dpZHRoOjEwMCU7LXdlYmtpdC10cmFuc2l0aW9uOmhlaWdodCAuMTVzIGVhc2UtaW47LW1vei10cmFuc2l0aW9uOmhlaWdodCAuMTVzIGVhc2UtaW47LW1zLXRyYW5zaXRpb246aGVpZ2h0IC4xNXMgZWFzZS1pbjstby10cmFuc2l0aW9uOmhlaWdodCAuMTVzIGVhc2UtaW47dHJhbnNpdGlvbjpoZWlnaHQgLjE1cyBlYXNlLWlufS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXIuYXhpcy1ob3Jpem9udGFsIC5zbGlkZXJ7LW1zLWJveC1vcmllbnQ6aG9yaXpvbnRhbDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1vei1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5Oi1tb3otZmxleDtkaXNwbGF5Oi13ZWJraXQtZmxleDtkaXNwbGF5OmZsZXh9LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLWhvcml6b250YWwgLnNsaWRlciAuc2xpZGV7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW59LmNhcm91c2VsIC5zbGlkZXItd3JhcHBlci5heGlzLXZlcnRpY2Fsey1tcy1ib3gtb3JpZW50Omhvcml6b250YWw7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tb3otYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTotbW96LWZsZXg7ZGlzcGxheTotd2Via2l0LWZsZXg7ZGlzcGxheTpmbGV4fS5jYXJvdXNlbCAuc2xpZGVyLXdyYXBwZXIuYXhpcy12ZXJ0aWNhbCAuc2xpZGVyey13ZWJraXQtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uY2Fyb3VzZWwgLnNsaWRlcnttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7bGlzdC1zdHlsZTpub25lO3dpZHRoOjEwMCV9LmNhcm91c2VsIC5zbGlkZXIuYW5pbWF0ZWR7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dDstbXMtdHJhbnNpdGlvbjphbGwgLjM1cyBlYXNlLWluLW91dDstby10cmFuc2l0aW9uOmFsbCAuMzVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC4zNXMgZWFzZS1pbi1vdXR9LmNhcm91c2VsIC5zbGlkZXttaW4td2lkdGg6MTAwJTttYXJnaW46MDtwb3NpdGlvbjpyZWxhdGl2ZTt0ZXh0LWFsaWduOmNlbnRlcn0uY2Fyb3VzZWwgLnNsaWRlIGltZ3t3aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXI6MH0uY2Fyb3VzZWwgLnNsaWRlIGlmcmFtZXtkaXNwbGF5OmlubGluZS1ibG9jazt3aWR0aDpjYWxjKDEwMCUgLSA4MHB4KTttYXJnaW46MCA0MHB4IDQwcHg7Ym9yZGVyOjB9LmNhcm91c2VsIC5zbGlkZSAubGVnZW5key13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0Oy1tcy10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7LW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206NDBweDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNDUlO3dpZHRoOjkwJTtib3JkZXItcmFkaXVzOjEwcHg7YmFja2dyb3VuZDojMDAwO2NvbG9yOiNmZmY7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxMnB4O3RleHQtYWxpZ246Y2VudGVyO29wYWNpdHk6MC4yNTstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4zNXMgZWFzZS1pbi1vdXQ7LW1zLXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuMzVzIGVhc2UtaW4tb3V0fS5jYXJvdXNlbCAuY29udHJvbC1kb3Rze3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO21hcmdpbjoxMHB4IDA7cGFkZGluZzowO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7ei1pbmRleDoxfUBtZWRpYSAobWluLXdpZHRoOiA5NjBweCl7LmNhcm91c2VsIC5jb250cm9sLWRvdHN7Ym90dG9tOjB9fS5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3R7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjstbXMtdHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgZWFzZS1pbjstby10cmFuc2l0aW9uOm9wYWNpdHkgLjI1cyBlYXNlLWluO3RyYW5zaXRpb246b3BhY2l0eSAuMjVzIGVhc2UtaW47b3BhY2l0eTouMztmaWx0ZXI6YWxwaGEob3BhY2l0eT0zMCk7Ym94LXNoYWRvdzoxcHggMXB4IDJweCByZ2JhKDAsMCwwLDAuOSk7YmFja2dyb3VuZDojZmZmO2JvcmRlci1yYWRpdXM6NTAlO3dpZHRoOjhweDtoZWlnaHQ6OHB4O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbjowIDhweH0uY2Fyb3VzZWwgLmNvbnRyb2wtZG90cyAuZG90LnNlbGVjdGVkLC5jYXJvdXNlbCAuY29udHJvbC1kb3RzIC5kb3Q6aG92ZXJ7b3BhY2l0eToxO2ZpbHRlcjphbHBoYShvcGFjaXR5PTEwMCl9LmNhcm91c2VsIC5jYXJvdXNlbC1zdGF0dXN7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtwYWRkaW5nOjVweDtmb250LXNpemU6MTBweDt0ZXh0LXNoYWRvdzoxcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuOSk7Y29sb3I6I2ZmZn0uY2Fyb3VzZWw6aG92ZXIgLnNsaWRlIC5sZWdlbmR7b3BhY2l0eToxfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydleHBvcnRzJywgJy4vcmVhY3Qtc3dpcGUnXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJy4vcmVhY3Qtc3dpcGUnKSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZC5leHBvcnRzLCBnbG9iYWwucmVhY3RTd2lwZSk7XG4gICAgZ2xvYmFsLmluZGV4ID0gbW9kLmV4cG9ydHM7XG4gIH1cbn0pKHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzLCBfcmVhY3RTd2lwZSkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG5cbiAgdmFyIF9yZWFjdFN3aXBlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0U3dpcGUpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICBleHBvcnRzLmRlZmF1bHQgPSBfcmVhY3RTd2lwZTIuZGVmYXVsdDtcbn0pOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnLCAncmVhY3QnLCAncHJvcC10eXBlcyddLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgncmVhY3QnKSwgcmVxdWlyZSgncHJvcC10eXBlcycpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnByb3BUeXBlcyk7XG4gICAgZ2xvYmFsLnJlYWN0U3dpcGUgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbiAgfSk7XG4gIGV4cG9ydHMuc2V0SGFzU3VwcG9ydFRvQ2FwdHVyZU9wdGlvbiA9IHNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb247XG5cbiAgdmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbiAgdmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgICB9O1xuICB9KCk7XG5cbiAgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICAgIGlmICghc2VsZikge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gICAgfVxuXG4gICAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xuICB9XG5cbiAgdmFyIHN1cHBvcnRzQ2FwdHVyZU9wdGlvbiA9IGZhbHNlO1xuICBmdW5jdGlvbiBzZXRIYXNTdXBwb3J0VG9DYXB0dXJlT3B0aW9uKGhhc1N1cHBvcnQpIHtcbiAgICBzdXBwb3J0c0NhcHR1cmVPcHRpb24gPSBoYXNTdXBwb3J0O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnY2FwdHVyZScsIHsgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHNldEhhc1N1cHBvcnRUb0NhcHR1cmVPcHRpb24odHJ1ZSk7XG4gICAgICB9IH0pKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG4gIGZ1bmN0aW9uIGdldFNhZmVFdmVudEhhbmRsZXJPcHRzKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7IGNhcHR1cmU6IHRydWUgfTtcblxuICAgIHJldHVybiBzdXBwb3J0c0NhcHR1cmVPcHRpb24gPyBvcHRpb25zIDogb3B0aW9ucy5jYXB0dXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIFtnZXRQb3NpdGlvbiByZXR1cm5zIGEgcG9zaXRpb24gZWxlbWVudCB0aGF0IHdvcmtzIGZvciBtb3VzZSBvciB0b3VjaCBldmVudHNdXG4gICAqIEBwYXJhbSAge1tFdmVudF19IGV2ZW50IFt0aGUgcmVjZWl2ZWQgZXZlbnRdXG4gICAqIEByZXR1cm4ge1tPYmplY3RdfSAgICAgIFt4IGFuZCB5IGNvb3Jkc11cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCd0b3VjaGVzJyBpbiBldmVudCkge1xuICAgICAgdmFyIF9ldmVudCR0b3VjaGVzJCA9IGV2ZW50LnRvdWNoZXNbMF0sXG4gICAgICAgICAgcGFnZVggPSBfZXZlbnQkdG91Y2hlcyQucGFnZVgsXG4gICAgICAgICAgcGFnZVkgPSBfZXZlbnQkdG91Y2hlcyQucGFnZVk7XG5cbiAgICAgIHJldHVybiB7IHg6IHBhZ2VYLCB5OiBwYWdlWSB9O1xuICAgIH1cblxuICAgIHZhciBzY3JlZW5YID0gZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgc2NyZWVuWSA9IGV2ZW50LnNjcmVlblk7XG5cbiAgICByZXR1cm4geyB4OiBzY3JlZW5YLCB5OiBzY3JlZW5ZIH07XG4gIH1cblxuICB2YXIgUmVhY3RTd2lwZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJlYWN0U3dpcGUsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmVhY3RTd2lwZSgpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVhY3RTd2lwZSk7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVhY3RTd2lwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0U3dpcGUpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgX3RoaXMuX2hhbmRsZVN3aXBlU3RhcnQgPSBfdGhpcy5faGFuZGxlU3dpcGVTdGFydC5iaW5kKF90aGlzKTtcbiAgICAgIF90aGlzLl9oYW5kbGVTd2lwZU1vdmUgPSBfdGhpcy5faGFuZGxlU3dpcGVNb3ZlLmJpbmQoX3RoaXMpO1xuICAgICAgX3RoaXMuX2hhbmRsZVN3aXBlRW5kID0gX3RoaXMuX2hhbmRsZVN3aXBlRW5kLmJpbmQoX3RoaXMpO1xuXG4gICAgICBfdGhpcy5fb25Nb3VzZURvd24gPSBfdGhpcy5fb25Nb3VzZURvd24uYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5fb25Nb3VzZU1vdmUgPSBfdGhpcy5fb25Nb3VzZU1vdmUuYmluZChfdGhpcyk7XG4gICAgICBfdGhpcy5fb25Nb3VzZVVwID0gX3RoaXMuX29uTW91c2VVcC5iaW5kKF90aGlzKTtcblxuICAgICAgX3RoaXMuX3NldFN3aXBlclJlZiA9IF90aGlzLl9zZXRTd2lwZXJSZWYuYmluZChfdGhpcyk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJlYWN0U3dpcGUsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnN3aXBlcikge1xuICAgICAgICAgIHRoaXMuc3dpcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuX2hhbmRsZVN3aXBlTW92ZSwgZ2V0U2FmZUV2ZW50SGFuZGxlck9wdHMoe1xuICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy5zd2lwZXIpIHtcbiAgICAgICAgICB0aGlzLnN3aXBlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9oYW5kbGVTd2lwZU1vdmUsIGdldFNhZmVFdmVudEhhbmRsZXJPcHRzKHtcbiAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19vbk1vdXNlRG93bicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5hbGxvd01vdXNlRXZlbnRzKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3VzZURvd24gPSB0cnVlO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlU3dpcGVTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX29uTW91c2VNb3ZlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1vdXNlRG93bikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhbmRsZVN3aXBlTW92ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX29uTW91c2VVcCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX29uTW91c2VVcChldmVudCkge1xuICAgICAgICB0aGlzLm1vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9vbk1vdXNlVXApO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9vbk1vdXNlTW92ZSk7XG5cbiAgICAgICAgdGhpcy5faGFuZGxlU3dpcGVFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ19oYW5kbGVTd2lwZVN0YXJ0JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU3dpcGVTdGFydChldmVudCkge1xuICAgICAgICB2YXIgX2dldFBvc2l0aW9uID0gZ2V0UG9zaXRpb24oZXZlbnQpLFxuICAgICAgICAgICAgeCA9IF9nZXRQb3NpdGlvbi54LFxuICAgICAgICAgICAgeSA9IF9nZXRQb3NpdGlvbi55O1xuXG4gICAgICAgIHRoaXMubW92ZVN0YXJ0ID0geyB4OiB4LCB5OiB5IH07XG4gICAgICAgIHRoaXMucHJvcHMub25Td2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdfaGFuZGxlU3dpcGVNb3ZlJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU3dpcGVNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5tb3ZlU3RhcnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2dldFBvc2l0aW9uMiA9IGdldFBvc2l0aW9uKGV2ZW50KSxcbiAgICAgICAgICAgIHggPSBfZ2V0UG9zaXRpb24yLngsXG4gICAgICAgICAgICB5ID0gX2dldFBvc2l0aW9uMi55O1xuXG4gICAgICAgIHZhciBkZWx0YVggPSB4IC0gdGhpcy5tb3ZlU3RhcnQueDtcbiAgICAgICAgdmFyIGRlbHRhWSA9IHkgLSB0aGlzLm1vdmVTdGFydC55O1xuICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG5cbiAgICAgICAgLy8gaGFuZGxpbmcgdGhlIHJlc3BvbnNhYmlsaXR5IG9mIGNhbmNlbGxpbmcgdGhlIHNjcm9sbCB0b1xuICAgICAgICAvLyB0aGUgY29tcG9uZW50IGhhbmRsaW5nIHRoZSBldmVudFxuICAgICAgICB2YXIgc2hvdWxkUHJldmVudERlZmF1bHQgPSB0aGlzLnByb3BzLm9uU3dpcGVNb3ZlKHtcbiAgICAgICAgICB4OiBkZWx0YVgsXG4gICAgICAgICAgeTogZGVsdGFZXG4gICAgICAgIH0sIGV2ZW50KTtcblxuICAgICAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQgJiYgZXZlbnQuY2FuY2VsYWJsZSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vdmVQb3NpdGlvbiA9IHsgZGVsdGFYOiBkZWx0YVgsIGRlbHRhWTogZGVsdGFZIH07XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX2hhbmRsZVN3aXBlRW5kJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfaGFuZGxlU3dpcGVFbmQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlRW5kKGV2ZW50KTtcblxuICAgICAgICB2YXIgdG9sZXJhbmNlID0gdGhpcy5wcm9wcy50b2xlcmFuY2U7XG5cblxuICAgICAgICBpZiAodGhpcy5tb3ZpbmcgJiYgdGhpcy5tb3ZlUG9zaXRpb24pIHtcbiAgICAgICAgICBpZiAodGhpcy5tb3ZlUG9zaXRpb24uZGVsdGFYIDwgLXRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlTGVmdCgxLCBldmVudCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVQb3NpdGlvbi5kZWx0YVggPiB0b2xlcmFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Td2lwZVJpZ2h0KDEsIGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubW92ZVBvc2l0aW9uLmRlbHRhWSA8IC10b2xlcmFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Td2lwZVVwKDEsIGV2ZW50KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubW92ZVBvc2l0aW9uLmRlbHRhWSA+IHRvbGVyYW5jZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN3aXBlRG93bigxLCBldmVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vdmVQb3NpdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnX3NldFN3aXBlclJlZicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFN3aXBlclJlZihub2RlKSB7XG4gICAgICAgIHRoaXMuc3dpcGVyID0gbm9kZTtcbiAgICAgICAgdGhpcy5wcm9wcy5pbm5lclJlZihub2RlKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICB0YWdOYW1lID0gX3Byb3BzLnRhZ05hbWUsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIGFsbG93TW91c2VFdmVudHMgPSBfcHJvcHMuYWxsb3dNb3VzZUV2ZW50cyxcbiAgICAgICAgICAgIG9uU3dpcGVVcCA9IF9wcm9wcy5vblN3aXBlVXAsXG4gICAgICAgICAgICBvblN3aXBlRG93biA9IF9wcm9wcy5vblN3aXBlRG93bixcbiAgICAgICAgICAgIG9uU3dpcGVMZWZ0ID0gX3Byb3BzLm9uU3dpcGVMZWZ0LFxuICAgICAgICAgICAgb25Td2lwZVJpZ2h0ID0gX3Byb3BzLm9uU3dpcGVSaWdodCxcbiAgICAgICAgICAgIG9uU3dpcGVTdGFydCA9IF9wcm9wcy5vblN3aXBlU3RhcnQsXG4gICAgICAgICAgICBvblN3aXBlTW92ZSA9IF9wcm9wcy5vblN3aXBlTW92ZSxcbiAgICAgICAgICAgIG9uU3dpcGVFbmQgPSBfcHJvcHMub25Td2lwZUVuZCxcbiAgICAgICAgICAgIGlubmVyUmVmID0gX3Byb3BzLmlubmVyUmVmLFxuICAgICAgICAgICAgdG9sZXJhbmNlID0gX3Byb3BzLnRvbGVyYW5jZSxcbiAgICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0YWdOYW1lJywgJ2NsYXNzTmFtZScsICdzdHlsZScsICdjaGlsZHJlbicsICdhbGxvd01vdXNlRXZlbnRzJywgJ29uU3dpcGVVcCcsICdvblN3aXBlRG93bicsICdvblN3aXBlTGVmdCcsICdvblN3aXBlUmlnaHQnLCAnb25Td2lwZVN0YXJ0JywgJ29uU3dpcGVNb3ZlJywgJ29uU3dpcGVFbmQnLCAnaW5uZXJSZWYnLCAndG9sZXJhbmNlJ10pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICB0aGlzLnByb3BzLnRhZ05hbWUsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgcmVmOiB0aGlzLl9zZXRTd2lwZXJSZWYsXG4gICAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5fb25Nb3VzZURvd24sXG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuX2hhbmRsZVN3aXBlU3RhcnQsXG4gICAgICAgICAgICBvblRvdWNoRW5kOiB0aGlzLl9oYW5kbGVTd2lwZUVuZCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgICAgfSwgcHJvcHMpLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJlYWN0U3dpcGU7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgUmVhY3RTd2lwZS5kaXNwbGF5TmFtZSA9ICdSZWFjdFN3aXBlJztcbiAgUmVhY3RTd2lwZS5wcm9wVHlwZXMgPSB7XG4gICAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgICBhbGxvd01vdXNlRXZlbnRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgb25Td2lwZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICBvblN3aXBlTGVmdDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVSaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIG9uU3dpcGVNb3ZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgb25Td2lwZUVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIGlubmVyUmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgdG9sZXJhbmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG4gIFJlYWN0U3dpcGUuZGVmYXVsdFByb3BzID0ge1xuICAgIHRhZ05hbWU6ICdkaXYnLFxuICAgIGFsbG93TW91c2VFdmVudHM6IGZhbHNlLFxuICAgIG9uU3dpcGVVcDogZnVuY3Rpb24gb25Td2lwZVVwKCkge30sXG4gICAgb25Td2lwZURvd246IGZ1bmN0aW9uIG9uU3dpcGVEb3duKCkge30sXG4gICAgb25Td2lwZUxlZnQ6IGZ1bmN0aW9uIG9uU3dpcGVMZWZ0KCkge30sXG4gICAgb25Td2lwZVJpZ2h0OiBmdW5jdGlvbiBvblN3aXBlUmlnaHQoKSB7fSxcbiAgICBvblN3aXBlU3RhcnQ6IGZ1bmN0aW9uIG9uU3dpcGVTdGFydCgpIHt9LFxuICAgIG9uU3dpcGVNb3ZlOiBmdW5jdGlvbiBvblN3aXBlTW92ZSgpIHt9LFxuICAgIG9uU3dpcGVFbmQ6IGZ1bmN0aW9uIG9uU3dpcGVFbmQoKSB7fSxcbiAgICBpbm5lclJlZjogZnVuY3Rpb24gaW5uZXJSZWYoKSB7fSxcblxuICAgIHRvbGVyYW5jZTogMFxuICB9O1xuICBleHBvcnRzLmRlZmF1bHQgPSBSZWFjdFN3aXBlO1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHBvc2l0aW9uLCBtZXRyaWMsIGF4aXMpIHtcbiAgdmFyIHBvc2l0aW9uUGVyY2VudCA9IHBvc2l0aW9uID09PSAwID8gcG9zaXRpb24gOiBwb3NpdGlvbiArIG1ldHJpYztcbiAgdmFyIHBvc2l0aW9uQ3NzID0gYXhpcyA9PT0gJ2hvcml6b250YWwnID8gW3Bvc2l0aW9uUGVyY2VudCwgMCwgMF0gOiBbMCwgcG9zaXRpb25QZXJjZW50LCAwXTtcbiAgdmFyIHRyYW5zaXRpb25Qcm9wID0gJ3RyYW5zbGF0ZTNkJztcbiAgdmFyIHRyYW5zbGF0ZWRQb3NpdGlvbiA9ICcoJyArIHBvc2l0aW9uQ3NzLmpvaW4oJywnKSArICcpJztcbiAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wICsgdHJhbnNsYXRlZFBvc2l0aW9uO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JlYWN0RG9tID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3QtZG9tXCIpKTtcblxudmFyIF9yZWFjdEVhc3lTd2lwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWVhc3ktc3dpcGVcIikpO1xuXG52YXIgX2Nzc0NsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jc3NDbGFzc2VzXCIpKTtcblxudmFyIF9DU1NUcmFuc2xhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9DU1NUcmFuc2xhdGVcIikpO1xuXG52YXIgX1RodW1icyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGh1bWJzXCIpKTtcblxudmFyIF9kb2N1bWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoaW1zL2RvY3VtZW50XCIpKTtcblxudmFyIF93aW5kb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGltcy93aW5kb3dcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDsgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTsgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyByZXR1cm4gY2FjaGU7IH07IHJldHVybiBjYWNoZTsgfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4geyBkZWZhdWx0OiBvYmogfTsgfSB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTsgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7IHJldHVybiBjYWNoZS5nZXQob2JqKTsgfSB2YXIgbmV3T2JqID0ge307IHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgeyB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDsgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpOyB9IGVsc2UgeyBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgaWYgKGNhY2hlKSB7IGNhY2hlLnNldChvYmosIG5ld09iaik7IH0gcmV0dXJuIG5ld09iajsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHsgcmV0dXJuIGNhbGw7IH0gcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7IH1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7IGlmIChzZWxmID09PSB2b2lkIDApIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgcmV0dXJuIHRydWU7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIGZhbHNlOyB9IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIGRlZmF1bHRTdGF0dXNGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkZWZhdWx0U3RhdHVzRm9ybWF0dGVyKGN1cnJlbnQsIHRvdGFsKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChjdXJyZW50LCBcIiBvZiBcIikuY29uY2F0KHRvdGFsKTtcbn07XG5cbnZhciBpc0tleWJvYXJkRXZlbnQgPSBmdW5jdGlvbiBpc0tleWJvYXJkRXZlbnQoZSkge1xuICByZXR1cm4gZSA/IGUuaGFzT3duUHJvcGVydHkoJ2tleScpIDogZmFsc2U7XG59O1xuXG52YXIgQ2Fyb3VzZWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENhcm91c2VsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gX2NyZWF0ZVN1cGVyKENhcm91c2VsKTtcblxuICBmdW5jdGlvbiBDYXJvdXNlbChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDYXJvdXNlbCk7XG5cbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0aHVtYnNSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjYXJvdXNlbFdyYXBwZXJSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJsaXN0UmVmXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXRlbXNSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0aW1lclwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFRodW1ic1JlZlwiLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudGh1bWJzUmVmID0gbm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRDYXJvdXNlbFdyYXBwZXJSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmNhcm91c2VsV3JhcHBlclJlZiA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0TGlzdFJlZlwiLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMubGlzdFJlZiA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNSZWZcIiwgZnVuY3Rpb24gKG5vZGUsIGluZGV4KSB7XG4gICAgICBpZiAoIV90aGlzLml0ZW1zUmVmKSB7XG4gICAgICAgIF90aGlzLml0ZW1zUmVmID0gW107XG4gICAgICB9XG5cbiAgICAgIF90aGlzLml0ZW1zUmVmW2luZGV4XSA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiYXV0b1BsYXlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9yZWFjdC5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbikgPD0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmNsZWFyQXV0b1BsYXkoKTtcblxuICAgICAgX3RoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuaW5jcmVtZW50KCk7XG4gICAgICB9LCBfdGhpcy5wcm9wcy5pbnRlcnZhbCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiY2xlYXJBdXRvUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMudGltZXIpIGNsZWFyVGltZW91dChfdGhpcy50aW1lcik7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRBdXRvUGxheVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbGVhckF1dG9QbGF5KCk7XG5cbiAgICAgIF90aGlzLmF1dG9QbGF5KCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RvcE9uSG92ZXJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc01vdXNlRW50ZXJlZDogdHJ1ZVxuICAgICAgfSwgX3RoaXMuY2xlYXJBdXRvUGxheSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic3RhcnRPbkxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNNb3VzZUVudGVyZWQ6IGZhbHNlXG4gICAgICB9LCBfdGhpcy5hdXRvUGxheSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaXNGb2N1c1dpdGhpblRoZUNhcm91c2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCgwLCBfZG9jdW1lbnQuZGVmYXVsdCkoKS5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYgfHwgX3RoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmLmNvbnRhaW5zKCgwLCBfZG9jdW1lbnQuZGVmYXVsdCkoKS5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm5hdmlnYXRlV2l0aEtleWJvYXJkXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIV90aGlzLmlzRm9jdXNXaXRoaW5UaGVDYXJvdXNlbCgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGF4aXMgPSBfdGhpcy5wcm9wcy5heGlzO1xuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGF4aXMgPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciBrZXlOYW1lcyA9IHtcbiAgICAgICAgQXJyb3dVcDogMzgsXG4gICAgICAgIEFycm93UmlnaHQ6IDM5LFxuICAgICAgICBBcnJvd0Rvd246IDQwLFxuICAgICAgICBBcnJvd0xlZnQ6IDM3XG4gICAgICB9O1xuICAgICAgdmFyIG5leHRLZXkgPSBpc0hvcml6b250YWwgPyBrZXlOYW1lcy5BcnJvd1JpZ2h0IDoga2V5TmFtZXMuQXJyb3dEb3duO1xuICAgICAgdmFyIHByZXZLZXkgPSBpc0hvcml6b250YWwgPyBrZXlOYW1lcy5BcnJvd0xlZnQgOiBrZXlOYW1lcy5BcnJvd1VwO1xuXG4gICAgICBpZiAobmV4dEtleSA9PT0gZS5rZXlDb2RlKSB7XG4gICAgICAgIF90aGlzLmluY3JlbWVudCgpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2S2V5ID09PSBlLmtleUNvZGUpIHtcbiAgICAgICAgX3RoaXMuZGVjcmVtZW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwidXBkYXRlU2l6ZXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5pbml0aWFsaXplZCB8fCAhX3RoaXMuaXRlbXNSZWYgfHwgX3RoaXMuaXRlbXNSZWYubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IF90aGlzLnByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciBmaXJzdEl0ZW0gPSBfdGhpcy5pdGVtc1JlZlswXTtcblxuICAgICAgaWYgKCFmaXJzdEl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbVNpemUgPSBpc0hvcml6b250YWwgPyBmaXJzdEl0ZW0uY2xpZW50V2lkdGggOiBmaXJzdEl0ZW0uY2xpZW50SGVpZ2h0O1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGl0ZW1TaXplOiBpdGVtU2l6ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy50aHVtYnNSZWYpIHtcbiAgICAgICAgX3RoaXMudGh1bWJzUmVmLnVwZGF0ZVNpemVzKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0TW91bnRTdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhhc01vdW50OiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVDbGlja0l0ZW1cIiwgZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XG4gICAgICBpZiAoX3JlYWN0LkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5jYW5jZWxDbGljaykge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2FuY2VsQ2xpY2s6IGZhbHNlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucHJvcHMub25DbGlja0l0ZW0oaW5kZXgsIGl0ZW0pO1xuXG4gICAgICBpZiAoaW5kZXggIT09IF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtOiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJoYW5kbGVPbkNoYW5nZVwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgIGlmIChfcmVhY3QuQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pIDw9IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShpbmRleCwgaXRlbSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaGFuZGxlQ2xpY2tUaHVtYlwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0pIHtcbiAgICAgIF90aGlzLnByb3BzLm9uQ2xpY2tUaHVtYihpbmRleCwgaXRlbSk7XG5cbiAgICAgIF90aGlzLm1vdmVUbyhpbmRleCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZVN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgX3RoaXMucHJvcHMub25Td2lwZVN0YXJ0KGV2ZW50KTtcblxuICAgICAgX3RoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVFbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICBjYW5jZWxDbGljazogZmFsc2UsXG4gICAgICAgIHN3aXBlTW92ZW1lbnRTdGFydGVkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLnByb3BzLm9uU3dpcGVFbmQoZXZlbnQpO1xuXG4gICAgICBfdGhpcy5hdXRvUGxheSgpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVNb3ZlXCIsIGZ1bmN0aW9uIChkZWx0YSwgZXZlbnQpIHtcbiAgICAgIF90aGlzLnByb3BzLm9uU3dpcGVNb3ZlKGV2ZW50KTtcblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IF90aGlzLnByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJztcblxuICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgdmFyIGluaXRpYWxCb3VuZHJ5ID0gMDtcblxuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IF90aGlzLmdldFBvc2l0aW9uKF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG5cbiAgICAgIHZhciBmaW5hbEJvdW5kcnkgPSBfdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgPyBfdGhpcy5nZXRQb3NpdGlvbihjaGlsZHJlbkxlbmd0aCAtIDEpIC0gMTAwIDogX3RoaXMuZ2V0UG9zaXRpb24oY2hpbGRyZW5MZW5ndGggLSAxKTtcbiAgICAgIHZhciBheGlzRGVsdGEgPSBpc0hvcml6b250YWwgPyBkZWx0YS54IDogZGVsdGEueTtcbiAgICAgIHZhciBoYW5kbGVkRGVsdGEgPSBheGlzRGVsdGE7IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgbGVmdCBvdXQgb2YgYm91bmRhcmllc1xuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBpbml0aWFsQm91bmRyeSAmJiBheGlzRGVsdGEgPiAwKSB7XG4gICAgICAgIGhhbmRsZWREZWx0YSA9IDA7XG4gICAgICB9IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgcmlnaHQgb3V0IG9mIGJvdW5kYXJpZXNcblxuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBmaW5hbEJvdW5kcnkgJiYgYXhpc0RlbHRhIDwgMCkge1xuICAgICAgICBoYW5kbGVkRGVsdGEgPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zaXRpb24gPSBjdXJyZW50UG9zaXRpb24gKyAxMDAgLyAoX3RoaXMuc3RhdGUuaXRlbVNpemUgLyBoYW5kbGVkRGVsdGEpO1xuXG4gICAgICB2YXIgaGFzTW92ZWQgPSBNYXRoLmFicyhheGlzRGVsdGEpID4gX3RoaXMucHJvcHMuc3dpcGVTY3JvbGxUb2xlcmFuY2U7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgaGFzTW92ZWQpIHtcbiAgICAgICAgLy8gV2hlbiBhbGxvd2luZyBpbmZpbml0ZSBsb29wLCBpZiB3ZSBzbGlkZSBsZWZ0IGZyb20gcG9zaXRpb24gMCB3ZSByZXZlYWwgdGhlIGNsb25lZCBsYXN0IHNsaWRlIHRoYXQgYXBwZWFycyBiZWZvcmUgaXRcbiAgICAgICAgLy8gaWYgd2Ugc2xpZGUgZXZlbiBmdXJ0aGVyIHdlIG5lZWQgdG8ganVtcCB0byBvdGhlciBzaWRlIHNvIGl0IGNhbiBjb250aW51ZSAtIGFuZCB2aWNlIHZlcnNhIGZvciB0aGUgbGFzdCBzbGlkZVxuICAgICAgICBpZiAoX3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtID09PSAwICYmIHBvc2l0aW9uID4gLTEwMCkge1xuICAgICAgICAgIHBvc2l0aW9uIC09IGNoaWxkcmVuTGVuZ3RoICogMTAwO1xuICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA9PT0gY2hpbGRyZW5MZW5ndGggLSAxICYmIHBvc2l0aW9uIDwgLWNoaWxkcmVuTGVuZ3RoICogMTAwKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gY2hpbGRyZW5MZW5ndGggKiAxMDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5wcmV2ZW50TW92ZW1lbnRVbnRpbFN3aXBlU2Nyb2xsVG9sZXJhbmNlIHx8IGhhc01vdmVkIHx8IF90aGlzLnN0YXRlLnN3aXBlTW92ZW1lbnRTdGFydGVkKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3RhdGUuc3dpcGVNb3ZlbWVudFN0YXJ0ZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzd2lwZU1vdmVtZW50U3RhcnRlZDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xuICAgICAgfSAvLyBhbGxvd3Mgc2Nyb2xsIGlmIHRoZSBzd2lwZSB3YXMgd2l0aGluIHRoZSB0b2xlcmFuY2VcblxuXG4gICAgICBpZiAoaGFzTW92ZWQgJiYgIV90aGlzLnN0YXRlLmNhbmNlbENsaWNrKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjYW5jZWxDbGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhhc01vdmVkO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFBvc2l0aW9uXCIsIGZ1bmN0aW9uIChwb3NpdGlvbiwgZm9yY2VSZWZsb3cpIHtcbiAgICAgIHZhciBsaXN0ID0gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMubGlzdFJlZik7XG5cbiAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgWydXZWJraXRUcmFuc2Zvcm0nLCAnTW96VHJhbnNmb3JtJywgJ01zVHJhbnNmb3JtJywgJ09UcmFuc2Zvcm0nLCAndHJhbnNmb3JtJywgJ21zVHJhbnNmb3JtJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgIGxpc3Quc3R5bGVbcHJvcF0gPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShwb3NpdGlvbiwgJyUnLCBfdGhpcy5wcm9wcy5heGlzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZvcmNlUmVmbG93KSB7XG4gICAgICAgICAgbGlzdC5vZmZzZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwicmVzZXRQb3NpdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gX3RoaXMuZ2V0UG9zaXRpb24oX3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgX3RoaXMuc2V0UG9zaXRpb24oY3VycmVudFBvc2l0aW9uKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJkZWNyZW1lbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogMTtcbiAgICAgIHZhciBmcm9tU3dpcGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgICBfdGhpcy5tb3ZlVG8oX3RoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtIC0gKHR5cGVvZiBwb3NpdGlvbnMgPT09ICdudW1iZXInID8gcG9zaXRpb25zIDogMSksIGZyb21Td2lwZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwiaW5jcmVtZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwb3NpdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDE7XG4gICAgICB2YXIgZnJvbVN3aXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcblxuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSArICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpLCBmcm9tU3dpcGUpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm1vdmVUb1wiLCBmdW5jdGlvbiAocG9zaXRpb24sIGZyb21Td2lwZSkge1xuICAgICAgaWYgKHR5cGVvZiBwb3NpdGlvbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFBvc2l0aW9uID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KF90aGlzLnByb3BzLmNoaWxkcmVuKSAtIDE7XG4gICAgICB2YXIgbmVlZENsb25lZFNsaWRlID0gX3RoaXMucHJvcHMuaW5maW5pdGVMb29wICYmICFmcm9tU3dpcGUgJiYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+IGxhc3RQb3NpdGlvbik7XG4gICAgICB2YXIgb2xkUG9zaXRpb24gPSBwb3NpdGlvbjtcblxuICAgICAgaWYgKHBvc2l0aW9uIDwgMCkge1xuICAgICAgICBwb3NpdGlvbiA9IF90aGlzLnByb3BzLmluZmluaXRlTG9vcCA/IGxhc3RQb3NpdGlvbiA6IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA+IGxhc3RQb3NpdGlvbikge1xuICAgICAgICBwb3NpdGlvbiA9IF90aGlzLnByb3BzLmluZmluaXRlTG9vcCA/IDAgOiBsYXN0UG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkQ2xvbmVkU2xpZGUpIHtcbiAgICAgICAgLy8gc2V0IHN3aXBpbmcgdHJ1ZSB3b3VsZCBkaXNhYmxlIHRyYW5zaXRpb24gdGltZSwgdGhlbiB3ZSBzZXQgc2xpZGVyIHRvIGNsb25lZCBwb3NpdGlvbiBhbmQgZm9yY2UgYSByZWZsb3dcbiAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lZWRlZCBmb3Igbm9uLXN3aXBpbmcgc2l0dWF0aW9uXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzd2lwaW5nOiB0cnVlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAob2xkUG9zaXRpb24gPCAwKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJvcHMuY2VudGVyTW9kZSAmJiBfdGhpcy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UgJiYgX3RoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldFBvc2l0aW9uKC0obGFzdFBvc2l0aW9uICsgMikgKiBfdGhpcy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UgLSAoMTAwIC0gX3RoaXMucHJvcHMuY2VudGVyU2xpZGVQZXJjZW50YWdlKSAvIDIsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24oLShsYXN0UG9zaXRpb24gKyAyKSAqIDEwMCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChvbGRQb3NpdGlvbiA+IGxhc3RQb3NpdGlvbikge1xuICAgICAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24oMCwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuc2VsZWN0SXRlbSh7XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW06IHBvc2l0aW9uLFxuICAgICAgICAgICAgc3dpcGluZzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZWxlY3RJdGVtKHtcbiAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhIHNsaWRlciwgd2UgZG9uJ3QgbmVlZCB0byBzZXQgcG9zaXRpb24gaGVyZVxuICAgICAgICAgIHNlbGVjdGVkSXRlbTogcG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIGRvbid0IHJlc2V0IGF1dG8gcGxheSB3aGVuIHN0b3Agb24gaG92ZXIgaXMgZW5hYmxlZCwgZG9pbmcgc28gd2lsbCB0cmlnZ2VyIGEgY2FsbCB0byBhdXRvIHBsYXkgbW9yZSB0aGFuIG9uY2VcbiAgICAgIC8vIGFuZCB3aWxsIHJlc3VsdCBpbiB0aGUgaW50ZXJ2YWwgZnVuY3Rpb24gbm90IGJlaW5nIGNsZWFyZWQgY29ycmVjdGx5LlxuXG5cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5hdXRvUGxheSAmJiBfdGhpcy5zdGF0ZS5pc01vdXNlRW50ZXJlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgX3RoaXMucmVzZXRBdXRvUGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uQ2xpY2tOZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmluY3JlbWVudCgxLCBmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25DbGlja1ByZXZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZGVjcmVtZW50KDEsIGZhbHNlKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlRm9yd2FyZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5pbmNyZW1lbnQoMSwgdHJ1ZSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5lbXVsYXRlVG91Y2gpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNhbmNlbENsaWNrOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcIm9uU3dpcGVCYWNrd2FyZHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuZGVjcmVtZW50KDEsIHRydWUpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuZW11bGF0ZVRvdWNoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjYW5jZWxDbGljazogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJjaGFuZ2VJdGVtXCIsIGZ1bmN0aW9uIChuZXdJbmRleCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghaXNLZXlib2FyZEV2ZW50KGUpIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgX3RoaXMubW92ZVRvKG5ld0luZGV4KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZWxlY3RJdGVtXCIsIGZ1bmN0aW9uIChzdGF0ZSwgY2IpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHN0YXRlLCBjYik7XG5cbiAgICAgIF90aGlzLmhhbmRsZU9uQ2hhbmdlKHN0YXRlLnNlbGVjdGVkSXRlbSwgX3JlYWN0LkNoaWxkcmVuLnRvQXJyYXkoX3RoaXMucHJvcHMuY2hpbGRyZW4pW3N0YXRlLnNlbGVjdGVkSXRlbV0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldEluaXRpYWxJbWFnZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3RoaXMucHJvcHMuc2VsZWN0ZWRJdGVtO1xuICAgICAgdmFyIGl0ZW0gPSBfdGhpcy5pdGVtc1JlZiAmJiBfdGhpcy5pdGVtc1JlZltzZWxlY3RlZEl0ZW1dO1xuICAgICAgdmFyIGltYWdlcyA9IGl0ZW0gJiYgaXRlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJykgfHwgW107XG4gICAgICByZXR1cm4gaW1hZ2VzWzBdO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImdldFZhcmlhYmxlSXRlbUhlaWdodFwiLCBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgIHZhciBpdGVtID0gX3RoaXMuaXRlbXNSZWYgJiYgX3RoaXMuaXRlbXNSZWZbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaGFzTW91bnQgJiYgaXRlbSAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICB2YXIgc2xpZGVJbWFnZXMgPSBpdGVtLmNoaWxkcmVuWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSB8fCBbXTtcblxuICAgICAgICBpZiAoc2xpZGVJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBpbWFnZSA9IHNsaWRlSW1hZ2VzWzBdO1xuXG4gICAgICAgICAgaWYgKCFpbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGltYWdlIGlzIHN0aWxsIGxvYWRpbmcsIHRoZSBzaXplIHdvbid0IGJlIGF2YWlsYWJsZSBzbyB3ZSB0cmlnZ2VyIGEgbmV3IHJlbmRlciBhZnRlciBpdCdzIGRvbmVcbiAgICAgICAgICAgIHZhciBvbkltYWdlTG9hZCA9IGZ1bmN0aW9uIG9uSW1hZ2VMb2FkKCkge1xuICAgICAgICAgICAgICBfdGhpcy5mb3JjZVVwZGF0ZSgpO1xuXG4gICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkltYWdlTG9hZCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25JbWFnZUxvYWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyB0cnkgdG8gZ2V0IGltZyBmaXJzdCwgaWYgaW1nIG5vdCB0aGVyZSBmaW5kIGZpcnN0IGRpc3BsYXkgdGFnXG5cblxuICAgICAgICB2YXIgZGlzcGxheUl0ZW0gPSBzbGlkZUltYWdlc1swXSB8fCBpdGVtLmNoaWxkcmVuWzBdO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gZGlzcGxheUl0ZW0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByZXR1cm4gaGVpZ2h0ID4gMCA/IGhlaWdodCA6IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLnNlbGVjdGVkSXRlbSxcbiAgICAgIGhhc01vdW50OiBmYWxzZSxcbiAgICAgIGlzTW91c2VFbnRlcmVkOiBmYWxzZSxcbiAgICAgIGF1dG9QbGF5OiBwcm9wcy5hdXRvUGxheSxcbiAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgc3dpcGVNb3ZlbWVudFN0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgY2FuY2VsQ2xpY2s6IGZhbHNlLFxuICAgICAgaXRlbVNpemU6IDFcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYXJvdXNlbCwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldHVwQ2Fyb3VzZWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKCFwcmV2UHJvcHMuY2hpbGRyZW4gJiYgdGhpcy5wcm9wcy5jaGlsZHJlbiAmJiAhdGhpcy5zdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLnNldHVwQ2Fyb3VzZWwoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFwcmV2UHJvcHMuYXV0b0ZvY3VzICYmIHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9yY2VGb2N1cygpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldlN0YXRlLnN3aXBpbmcgJiYgIXRoaXMuc3RhdGUuc3dpcGluZykge1xuICAgICAgICAvLyBXZSBzdG9wcGVkIHN3aXBpbmcsIGVuc3VyZSB3ZSBhcmUgaGVhZGluZyB0byB0aGUgbmV3L2N1cnJlbnQgc2xpZGUgYW5kIG5vdCBzdHVja1xuICAgICAgICB0aGlzLnJlc2V0UG9zaXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZEl0ZW0gIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtIHx8IHByZXZQcm9wcy5jZW50ZXJNb2RlICE9PSB0aGlzLnByb3BzLmNlbnRlck1vZGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTaXplcygpO1xuICAgICAgICB0aGlzLm1vdmVUbyh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcmV2UHJvcHMuYXV0b1BsYXkgIT09IHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b1BsYXkpIHtcbiAgICAgICAgICB0aGlzLnNldHVwQXV0b1BsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRlc3Ryb3lBdXRvUGxheSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYXV0b1BsYXk6IHRoaXMucHJvcHMuYXV0b1BsYXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5kZXN0cm95Q2Fyb3VzZWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBDYXJvdXNlbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cENhcm91c2VsKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5hdXRvUGxheSAmJiBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICAgIHRoaXMuc2V0dXBBdXRvUGxheSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5mb3JjZUZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5pdGlhbEltYWdlID0gX3RoaXMyLmdldEluaXRpYWxJbWFnZSgpO1xuXG4gICAgICAgIGlmIChpbml0aWFsSW1hZ2UgJiYgIWluaXRpYWxJbWFnZS5jb21wbGV0ZSkge1xuICAgICAgICAgIC8vIGlmIGl0J3MgYSBjYXJvdXNlbCBvZiBpbWFnZXMsIHdlIHNldCB0aGUgbW91bnQgc3RhdGUgYWZ0ZXIgdGhlIGZpcnN0IGltYWdlIGlzIGxvYWRlZFxuICAgICAgICAgIGluaXRpYWxJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgX3RoaXMyLnNldE1vdW50U3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi5zZXRNb3VudFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZXN0cm95Q2Fyb3VzZWxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveUNhcm91c2VsKCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5kZXN0cm95QXV0b1BsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBBdXRvUGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cEF1dG9QbGF5KCkge1xuICAgICAgdGhpcy5hdXRvUGxheSgpO1xuICAgICAgdmFyIGNhcm91c2VsV3JhcHBlciA9IHRoaXMuY2Fyb3VzZWxXcmFwcGVyUmVmO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zdG9wT25Ib3ZlciAmJiBjYXJvdXNlbFdyYXBwZXIpIHtcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLnN0b3BPbkhvdmVyKTtcbiAgICAgICAgY2Fyb3VzZWxXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLnN0YXJ0T25MZWF2ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lBdXRvUGxheVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95QXV0b1BsYXkoKSB7XG4gICAgICB0aGlzLmNsZWFyQXV0b1BsYXkoKTtcbiAgICAgIHZhciBjYXJvdXNlbFdyYXBwZXIgPSB0aGlzLmNhcm91c2VsV3JhcHBlclJlZjtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuc3RvcE9uSG92ZXIgJiYgY2Fyb3VzZWxXcmFwcGVyKSB7XG4gICAgICAgIGNhcm91c2VsV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5zdG9wT25Ib3Zlcik7XG4gICAgICAgIGNhcm91c2VsV3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5zdGFydE9uTGVhdmUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJiaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XG4gICAgICAvLyBhcyB0aGUgd2lkdGhzIGFyZSBjYWxjdWxhdGVkLCB3ZSBuZWVkIHRvIHJlc2l6ZVxuICAgICAgLy8gdGhlIGNhcm91c2VsIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpOyAvLyBpc3N1ZSAjMiAtIGltYWdlIGxvYWRpbmcgc21hbGxlclxuXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZVNpemVzKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMudXNlS2V5Ym9hcmRBcnJvd3MpIHtcbiAgICAgICAgKDAsIF9kb2N1bWVudC5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm5hdmlnYXRlV2l0aEtleWJvYXJkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidW5iaW5kRXZlbnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICAgIC8vIHJlbW92aW5nIGxpc3RlbmVyc1xuICAgICAgKDAsIF93aW5kb3cuZGVmYXVsdCkoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNpemVzKTtcbiAgICAgICgwLCBfd2luZG93LmRlZmF1bHQpKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMudXBkYXRlU2l6ZXMpO1xuICAgICAgdmFyIGluaXRpYWxJbWFnZSA9IHRoaXMuZ2V0SW5pdGlhbEltYWdlKCk7XG5cbiAgICAgIGlmIChpbml0aWFsSW1hZ2UpIHtcbiAgICAgICAgaW5pdGlhbEltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLnNldE1vdW50U3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy51c2VLZXlib2FyZEFycm93cykge1xuICAgICAgICAoMCwgX2RvY3VtZW50LmRlZmF1bHQpKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMubmF2aWdhdGVXaXRoS2V5Ym9hcmQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmb3JjZUZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcmNlRm9jdXMoKSB7XG4gICAgICB2YXIgX3RoaXMkY2Fyb3VzZWxXcmFwcGVyO1xuXG4gICAgICAoX3RoaXMkY2Fyb3VzZWxXcmFwcGVyID0gdGhpcy5jYXJvdXNlbFdyYXBwZXJSZWYpID09PSBudWxsIHx8IF90aGlzJGNhcm91c2VsV3JhcHBlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkY2Fyb3VzZWxXcmFwcGVyLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFBvc2l0aW9uXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGluZGV4KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgLy8gaW5kZXggaGFzIHRvIGJlIGFkZGVkIGJ5IDEgYmVjYXVzZSBvZiB0aGUgZmlyc3QgY2xvbmVkIHNsaWRlXG4gICAgICAgICsraW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gX3JlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXJNb2RlICYmIHRoaXMucHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAtaW5kZXggKiB0aGlzLnByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZTtcbiAgICAgICAgdmFyIGxhc3RQb3NpdGlvbiA9IGNoaWxkcmVuTGVuZ3RoIC0gMTtcblxuICAgICAgICBpZiAoaW5kZXggJiYgKGluZGV4ICE9PSBsYXN0UG9zaXRpb24gfHwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3ApKSB7XG4gICAgICAgICAgY3VycmVudFBvc2l0aW9uICs9ICgxMDAgLSB0aGlzLnByb3BzLmNlbnRlclNsaWRlUGVyY2VudGFnZSkgLyAyO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBsYXN0UG9zaXRpb24pIHtcbiAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKz0gMTAwIC0gdGhpcy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VycmVudFBvc2l0aW9uO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLWluZGV4ICogMTAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJJdGVtc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJJdGVtcyhpc0Nsb25lKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBzbGlkZVByb3BzID0ge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuc2V0SXRlbXNSZWYoZSwgaW5kZXgpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5OiAnaXRlbUtleScgKyBpbmRleCArIChpc0Nsb25lID8gJ2Nsb25lJyA6ICcnKSxcbiAgICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuSVRFTSh0cnVlLCBpbmRleCA9PT0gX3RoaXMzLnN0YXRlLnNlbGVjdGVkSXRlbSksXG4gICAgICAgICAgb25DbGljazogX3RoaXMzLmhhbmRsZUNsaWNrSXRlbS5iaW5kKF90aGlzMywgaW5kZXgsIGl0ZW0pXG4gICAgICAgIH07XG4gICAgICAgIHZhciBleHRyYVByb3BzID0ge307XG5cbiAgICAgICAgaWYgKF90aGlzMy5wcm9wcy5jZW50ZXJNb2RlICYmIF90aGlzMy5wcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBleHRyYVByb3BzLnN0eWxlID0ge1xuICAgICAgICAgICAgbWluV2lkdGg6IF90aGlzMy5wcm9wcy5jZW50ZXJTbGlkZVBlcmNlbnRhZ2UgKyAnJSdcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgX2V4dGVuZHMoe30sIHNsaWRlUHJvcHMsIGV4dHJhUHJvcHMpLCBfdGhpczMucHJvcHMucmVuZGVySXRlbShpdGVtLCB7XG4gICAgICAgICAgaXNTZWxlY3RlZDogaW5kZXggPT09IF90aGlzMy5zdGF0ZS5zZWxlY3RlZEl0ZW1cbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckNvbnRyb2xzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckNvbnRyb2xzKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgc2hvd0luZGljYXRvcnMgPSBfdGhpcyRwcm9wcy5zaG93SW5kaWNhdG9ycyxcbiAgICAgICAgICBsYWJlbHMgPSBfdGhpcyRwcm9wcy5sYWJlbHMsXG4gICAgICAgICAgcmVuZGVySW5kaWNhdG9yID0gX3RoaXMkcHJvcHMucmVuZGVySW5kaWNhdG9yLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmICghc2hvd0luZGljYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtZG90c1wiXG4gICAgICB9LCBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckluZGljYXRvciAmJiByZW5kZXJJbmRpY2F0b3IoX3RoaXM0LmNoYW5nZUl0ZW0oaW5kZXgpLCBpbmRleCA9PT0gX3RoaXM0LnN0YXRlLnNlbGVjdGVkSXRlbSwgaW5kZXgsIGxhYmVscy5pdGVtKTtcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyU3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclN0YXR1cygpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5zaG93U3RhdHVzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLXN0YXR1c1wiXG4gICAgICB9LCB0aGlzLnByb3BzLnN0YXR1c0Zvcm1hdHRlcih0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSArIDEsIF9yZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJUaHVtYnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGh1bWJzKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnNob3dUaHVtYnMgfHwgIXRoaXMucHJvcHMuY2hpbGRyZW4gfHwgX3JlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID09PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RodW1icy5kZWZhdWx0LCB7XG4gICAgICAgIHJlZjogdGhpcy5zZXRUaHVtYnNSZWYsXG4gICAgICAgIG9uU2VsZWN0SXRlbTogdGhpcy5oYW5kbGVDbGlja1RodW1iLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtLFxuICAgICAgICB0cmFuc2l0aW9uVGltZTogdGhpcy5wcm9wcy50cmFuc2l0aW9uVGltZSxcbiAgICAgICAgdGh1bWJXaWR0aDogdGhpcy5wcm9wcy50aHVtYldpZHRoLFxuICAgICAgICBsYWJlbHM6IHRoaXMucHJvcHMubGFiZWxzXG4gICAgICB9LCB0aGlzLnByb3BzLnJlbmRlclRodW1icyh0aGlzLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmNoaWxkcmVuIHx8IF9yZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIGlzU3dpcGVhYmxlID0gdGhpcy5wcm9wcy5zd2lwZWFibGUgJiYgX3JlYWN0LkNoaWxkcmVuLmNvdW50KHRoaXMucHJvcHMuY2hpbGRyZW4pID4gMTtcbiAgICAgIHZhciBpc0hvcml6b250YWwgPSB0aGlzLnByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJztcbiAgICAgIHZhciBjYW5TaG93QXJyb3dzID0gdGhpcy5wcm9wcy5zaG93QXJyb3dzICYmIF9yZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA+IDE7IC8vIHNob3cgbGVmdCBhcnJvdz9cblxuICAgICAgdmFyIGhhc1ByZXYgPSBjYW5TaG93QXJyb3dzICYmICh0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSA+IDAgfHwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3ApIHx8IGZhbHNlOyAvLyBzaG93IHJpZ2h0IGFycm93XG5cbiAgICAgIHZhciBoYXNOZXh0ID0gY2FuU2hvd0Fycm93cyAmJiAodGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0gPCBfcmVhY3QuQ2hpbGRyZW4uY291bnQodGhpcy5wcm9wcy5jaGlsZHJlbikgLSAxIHx8IHRoaXMucHJvcHMuaW5maW5pdGVMb29wKSB8fCBmYWxzZTsgLy8gb2JqIHRvIGhvbGQgdGhlIHRyYW5zZm9ybWF0aW9ucyBhbmQgc3R5bGVzXG5cbiAgICAgIHZhciBpdGVtTGlzdFN0eWxlcyA9IHt9O1xuICAgICAgdmFyIGN1cnJlbnRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb24odGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW0pOyAvLyBpZiAzZCBpcyBhdmFpbGFibGUsIGxldCdzIHRha2UgYWR2YW50YWdlIG9mIHRoZSBwZXJmb3JtYW5jZSBvZiB0cmFuc2Zvcm1cblxuICAgICAgdmFyIHRyYW5zZm9ybVByb3AgPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShjdXJyZW50UG9zaXRpb24sICclJywgdGhpcy5wcm9wcy5heGlzKTtcbiAgICAgIHZhciB0cmFuc2l0aW9uVGltZSA9IHRoaXMucHJvcHMudHJhbnNpdGlvblRpbWUgKyAnbXMnO1xuICAgICAgaXRlbUxpc3RTdHlsZXMgPSB7XG4gICAgICAgIFdlYmtpdFRyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgTW96VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBNc1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgT1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcCxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBtc1RyYW5zZm9ybTogdHJhbnNmb3JtUHJvcFxuICAgICAgfTtcblxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnN3aXBpbmcpIHtcbiAgICAgICAgaXRlbUxpc3RTdHlsZXMgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1MaXN0U3R5bGVzKSwge30sIHtcbiAgICAgICAgICBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICAgIE1velRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXG4gICAgICAgICAgTXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICAgIE9UcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXG4gICAgICAgICAgbXNUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbXNDbG9uZSA9IHRoaXMucmVuZGVySXRlbXModHJ1ZSk7XG4gICAgICB2YXIgZmlyc3RDbG9uZSA9IGl0ZW1zQ2xvbmUuc2hpZnQoKTtcbiAgICAgIHZhciBsYXN0Q2xvbmUgPSBpdGVtc0Nsb25lLnBvcCgpO1xuICAgICAgdmFyIHN3aXBlclByb3BzID0ge1xuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuU0xJREVSKHRydWUsIHRoaXMuc3RhdGUuc3dpcGluZyksXG4gICAgICAgIG9uU3dpcGVNb3ZlOiB0aGlzLm9uU3dpcGVNb3ZlLFxuICAgICAgICBvblN3aXBlU3RhcnQ6IHRoaXMub25Td2lwZVN0YXJ0LFxuICAgICAgICBvblN3aXBlRW5kOiB0aGlzLm9uU3dpcGVFbmQsXG4gICAgICAgIHN0eWxlOiBpdGVtTGlzdFN0eWxlcyxcbiAgICAgICAgdG9sZXJhbmNlOiB0aGlzLnByb3BzLnN3aXBlU2Nyb2xsVG9sZXJhbmNlXG4gICAgICB9O1xuICAgICAgdmFyIGNvbnRhaW5lclN0eWxlcyA9IHt9O1xuXG4gICAgICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgICAgIHN3aXBlclByb3BzLm9uU3dpcGVMZWZ0ID0gdGhpcy5vblN3aXBlRm9yd2FyZDtcbiAgICAgICAgc3dpcGVyUHJvcHMub25Td2lwZVJpZ2h0ID0gdGhpcy5vblN3aXBlQmFja3dhcmRzO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmR5bmFtaWNIZWlnaHQpIHtcbiAgICAgICAgICB2YXIgaXRlbUhlaWdodCA9IHRoaXMuZ2V0VmFyaWFibGVJdGVtSGVpZ2h0KHRoaXMuc3RhdGUuc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICBzd2lwZXJQcm9wcy5zdHlsZS5oZWlnaHQgPSBpdGVtSGVpZ2h0IHx8ICdhdXRvJztcbiAgICAgICAgICBjb250YWluZXJTdHlsZXMuaGVpZ2h0ID0gaXRlbUhlaWdodCB8fCAnYXV0byc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXBlclByb3BzLm9uU3dpcGVVcCA9IHRoaXMucHJvcHMudmVydGljYWxTd2lwZSA9PT0gJ25hdHVyYWwnID8gdGhpcy5vblN3aXBlQmFja3dhcmRzIDogdGhpcy5vblN3aXBlRm9yd2FyZDtcbiAgICAgICAgc3dpcGVyUHJvcHMub25Td2lwZURvd24gPSB0aGlzLnByb3BzLnZlcnRpY2FsU3dpcGUgPT09ICduYXR1cmFsJyA/IHRoaXMub25Td2lwZUZvcndhcmQgOiB0aGlzLm9uU3dpcGVCYWNrd2FyZHM7XG4gICAgICAgIHN3aXBlclByb3BzLnN0eWxlLmhlaWdodCA9IHRoaXMuc3RhdGUuaXRlbVNpemU7XG4gICAgICAgIGNvbnRhaW5lclN0eWxlcy5oZWlnaHQgPSB0aGlzLnN0YXRlLml0ZW1TaXplO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuUk9PVCh0aGlzLnByb3BzLmNsYXNzTmFtZSksXG4gICAgICAgIHJlZjogdGhpcy5zZXRDYXJvdXNlbFdyYXBwZXJSZWYsXG4gICAgICAgIHRhYkluZGV4OiAwXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5DQVJPVVNFTCh0cnVlKSxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB3aWR0aDogdGhpcy5wcm9wcy53aWR0aFxuICAgICAgICB9XG4gICAgICB9LCB0aGlzLnJlbmRlckNvbnRyb2xzKCksIHRoaXMucHJvcHMucmVuZGVyQXJyb3dQcmV2KHRoaXMub25DbGlja1ByZXYsIGhhc1ByZXYsIHRoaXMucHJvcHMubGFiZWxzLmxlZnRBcnJvdyksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LldSQVBQRVIodHJ1ZSwgdGhpcy5wcm9wcy5heGlzKSxcbiAgICAgICAgc3R5bGU6IGNvbnRhaW5lclN0eWxlc1xuICAgICAgfSwgaXNTd2lwZWFibGUgPyAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFYXN5U3dpcGUuZGVmYXVsdCwgX2V4dGVuZHMoe1xuICAgICAgICB0YWdOYW1lOiBcInVsXCIsXG4gICAgICAgIGlubmVyUmVmOiB0aGlzLnNldExpc3RSZWZcbiAgICAgIH0sIHN3aXBlclByb3BzLCB7XG4gICAgICAgIGFsbG93TW91c2VFdmVudHM6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXG4gICAgICB9KSwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgbGFzdENsb25lLCB0aGlzLnJlbmRlckl0ZW1zKCksIHRoaXMucHJvcHMuaW5maW5pdGVMb29wICYmIGZpcnN0Q2xvbmUpIDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5TTElERVIodHJ1ZSwgdGhpcy5zdGF0ZS5zd2lwaW5nKSxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczUuc2V0TGlzdFJlZihub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IGl0ZW1MaXN0U3R5bGVzXG4gICAgICB9LCB0aGlzLnByb3BzLmluZmluaXRlTG9vcCAmJiBsYXN0Q2xvbmUsIHRoaXMucmVuZGVySXRlbXMoKSwgdGhpcy5wcm9wcy5pbmZpbml0ZUxvb3AgJiYgZmlyc3RDbG9uZSkpLCB0aGlzLnByb3BzLnJlbmRlckFycm93TmV4dCh0aGlzLm9uQ2xpY2tOZXh0LCBoYXNOZXh0LCB0aGlzLnByb3BzLmxhYmVscy5yaWdodEFycm93KSwgdGhpcy5yZW5kZXJTdGF0dXMoKSksIHRoaXMucmVuZGVyVGh1bWJzKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYXJvdXNlbDtcbn0oX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2Fyb3VzZWw7XG5cbl9kZWZpbmVQcm9wZXJ0eShDYXJvdXNlbCwgXCJkaXNwbGF5TmFtZVwiLCAnQ2Fyb3VzZWwnKTtcblxuX2RlZmluZVByb3BlcnR5KENhcm91c2VsLCBcImRlZmF1bHRQcm9wc1wiLCB7XG4gIGF4aXM6ICdob3Jpem9udGFsJyxcbiAgY2VudGVyU2xpZGVQZXJjZW50YWdlOiA4MCxcbiAgaW50ZXJ2YWw6IDMwMDAsXG4gIGxhYmVsczoge1xuICAgIGxlZnRBcnJvdzogJ3ByZXZpb3VzIHNsaWRlIC8gaXRlbScsXG4gICAgcmlnaHRBcnJvdzogJ25leHQgc2xpZGUgLyBpdGVtJyxcbiAgICBpdGVtOiAnc2xpZGUgaXRlbSdcbiAgfSxcbiAgb25DbGlja0l0ZW06IG5vb3AsXG4gIG9uQ2xpY2tUaHVtYjogbm9vcCxcbiAgb25DaGFuZ2U6IG5vb3AsXG4gIG9uU3dpcGVTdGFydDogZnVuY3Rpb24gb25Td2lwZVN0YXJ0KCkge30sXG4gIG9uU3dpcGVFbmQ6IGZ1bmN0aW9uIG9uU3dpcGVFbmQoKSB7fSxcbiAgb25Td2lwZU1vdmU6IGZ1bmN0aW9uIG9uU3dpcGVNb3ZlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgcHJldmVudE1vdmVtZW50VW50aWxTd2lwZVNjcm9sbFRvbGVyYW5jZTogZmFsc2UsXG4gIHJlbmRlckFycm93UHJldjogZnVuY3Rpb24gcmVuZGVyQXJyb3dQcmV2KG9uQ2xpY2tIYW5kbGVyLCBoYXNQcmV2LCBsYWJlbCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgXCJhcmlhLWxhYmVsXCI6IGxhYmVsLFxuICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LkFSUk9XX1BSRVYoIWhhc1ByZXYpLFxuICAgICAgb25DbGljazogb25DbGlja0hhbmRsZXJcbiAgICB9KTtcbiAgfSxcbiAgcmVuZGVyQXJyb3dOZXh0OiBmdW5jdGlvbiByZW5kZXJBcnJvd05leHQob25DbGlja0hhbmRsZXIsIGhhc05leHQsIGxhYmVsKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICBcImFyaWEtbGFiZWxcIjogbGFiZWwsXG4gICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuQVJST1dfTkVYVCghaGFzTmV4dCksXG4gICAgICBvbkNsaWNrOiBvbkNsaWNrSGFuZGxlclxuICAgIH0pO1xuICB9LFxuICByZW5kZXJJbmRpY2F0b3I6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcihvbkNsaWNrSGFuZGxlciwgaXNTZWxlY3RlZCwgaW5kZXgsIGxhYmVsKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LkRPVChpc1NlbGVjdGVkKSxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIYW5kbGVyLFxuICAgICAgb25LZXlEb3duOiBvbkNsaWNrSGFuZGxlcixcbiAgICAgIHZhbHVlOiBpbmRleCxcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICByb2xlOiBcImJ1dHRvblwiLFxuICAgICAgdGFiSW5kZXg6IDAsXG4gICAgICBcImFyaWEtbGFiZWxcIjogXCJcIi5jb25jYXQobGFiZWwsIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKVxuICAgIH0pO1xuICB9LFxuICByZW5kZXJJdGVtOiBmdW5jdGlvbiByZW5kZXJJdGVtKGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSxcbiAgcmVuZGVyVGh1bWJzOiBmdW5jdGlvbiByZW5kZXJUaHVtYnMoY2hpbGRyZW4pIHtcbiAgICB2YXIgaW1hZ2VzID0gX3JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBpbWcgPSBpdGVtOyAvLyBpZiB0aGUgaXRlbSBpcyBub3QgYW4gaW1hZ2UsIHRyeSB0byBmaW5kIHRoZSBmaXJzdCBpbWFnZSBpbiB0aGUgaXRlbSdzIGNoaWxkcmVuLlxuXG4gICAgICBpZiAoaXRlbS50eXBlICE9PSAnaW1nJykge1xuICAgICAgICBpbWcgPSBfcmVhY3QuQ2hpbGRyZW4udG9BcnJheShpdGVtLnByb3BzLmNoaWxkcmVuKS5maW5kKGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgICAgICAgIHJldHVybiBjaGlsZHJlbi50eXBlID09PSAnaW1nJztcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbWc7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VzLmZpbHRlcihmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9KS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUud2FybihcIk5vIGltYWdlcyBmb3VuZCEgQ2FuJ3QgYnVpbGQgdGhlIHRodW1iIGxpc3Qgd2l0aG91dCBpbWFnZXMuIElmIHlvdSBkb24ndCBuZWVkIHRodW1icywgc2V0IHNob3dUaHVtYnM9e2ZhbHNlfSBpbiB0aGUgQ2Fyb3VzZWwuIE5vdGUgdGhhdCBpdCdzIG5vdCBwb3NzaWJsZSB0byBnZXQgaW1hZ2VzIHJlbmRlcmVkIGluc2lkZSBjdXN0b20gY29tcG9uZW50cy4gTW9yZSBpbmZvIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9sZWFuZHJvd2QvcmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9ibG9iL21hc3Rlci9UUk9VQkxFU0hPT1RJTkcubWRcIik7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlcztcbiAgfSxcbiAgc3RhdHVzRm9ybWF0dGVyOiBkZWZhdWx0U3RhdHVzRm9ybWF0dGVyLFxuICBzZWxlY3RlZEl0ZW06IDAsXG4gIHNob3dBcnJvd3M6IHRydWUsXG4gIHNob3dJbmRpY2F0b3JzOiB0cnVlLFxuICBzaG93U3RhdHVzOiB0cnVlLFxuICBzaG93VGh1bWJzOiB0cnVlLFxuICBzdG9wT25Ib3ZlcjogdHJ1ZSxcbiAgc3dpcGVTY3JvbGxUb2xlcmFuY2U6IDUsXG4gIHN3aXBlYWJsZTogdHJ1ZSxcbiAgdHJhbnNpdGlvblRpbWU6IDM1MCxcbiAgdmVydGljYWxTd2lwZTogJ3N0YW5kYXJkJyxcbiAgd2lkdGg6ICcxMDAlJ1xufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2Nzc0NsYXNzZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jc3NDbGFzc2VzXCIpKTtcblxudmFyIF9kaW1lbnNpb25zID0gcmVxdWlyZShcIi4uL2RpbWVuc2lvbnNcIik7XG5cbnZhciBfQ1NTVHJhbnNsYXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vQ1NTVHJhbnNsYXRlXCIpKTtcblxudmFyIF9yZWFjdEVhc3lTd2lwZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWVhc3ktc3dpcGVcIikpO1xuXG52YXIgX3dpbmRvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoaW1zL3dpbmRvd1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsOyB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpOyBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7IHJldHVybiBjYWNoZTsgfTsgcmV0dXJuIGNhY2hlOyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7IHJldHVybiB7IGRlZmF1bHQ6IG9iaiB9OyB9IHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpOyBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHsgcmV0dXJuIGNhY2hlLmdldChvYmopOyB9IHZhciBuZXdPYmogPSB7fTsgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7IHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsOyBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7IH0gZWxzZSB7IG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyBpZiAoY2FjaGUpIHsgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTsgfSByZXR1cm4gbmV3T2JqOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSBfZ2V0UHJvdG90eXBlT2YoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9IF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3RvcjsgcmVzdWx0ID0gUmVmbGVjdC5jb25zdHJ1Y3QoU3VwZXIsIGFyZ3VtZW50cywgTmV3VGFyZ2V0KTsgfSBlbHNlIHsgcmVzdWx0ID0gU3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfSByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7IHJldHVybiBjYWxsOyB9IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7IHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7IH07IHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGlzS2V5Ym9hcmRFdmVudCA9IGZ1bmN0aW9uIGlzS2V5Ym9hcmRFdmVudChlKSB7XG4gIHJldHVybiBlLmhhc093blByb3BlcnR5KCdrZXknKTtcbn07XG5cbnZhciBUaHVtYnMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRodW1icywgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihUaHVtYnMpO1xuXG4gIGZ1bmN0aW9uIFRodW1icyhfcHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGh1bWJzKTtcblxuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX3Byb3BzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpdGVtc1dyYXBwZXJSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJpdGVtc0xpc3RSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ0aHVtYnNSZWZcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzZXRJdGVtc1dyYXBwZXJSZWZcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLml0ZW1zV3JhcHBlclJlZiA9IG5vZGU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwic2V0SXRlbXNMaXN0UmVmXCIsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5pdGVtc0xpc3RSZWYgPSBub2RlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNldFRodW1ic1JlZlwiLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgpIHtcbiAgICAgIGlmICghX3RoaXMudGh1bWJzUmVmKSB7XG4gICAgICAgIF90aGlzLnRodW1ic1JlZiA9IFtdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy50aHVtYnNSZWZbaW5kZXhdID0gbm9kZTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJ1cGRhdGVTaXplc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmNoaWxkcmVuIHx8ICFfdGhpcy5pdGVtc1dyYXBwZXJSZWYgfHwgIV90aGlzLnRodW1ic1JlZikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3RhbCA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChfdGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIHZhciB3cmFwcGVyU2l6ZSA9IF90aGlzLml0ZW1zV3JhcHBlclJlZi5jbGllbnRXaWR0aDtcbiAgICAgIHZhciBpdGVtU2l6ZSA9IF90aGlzLnByb3BzLnRodW1iV2lkdGggPyBfdGhpcy5wcm9wcy50aHVtYldpZHRoIDogKDAsIF9kaW1lbnNpb25zLm91dGVyV2lkdGgpKF90aGlzLnRodW1ic1JlZlswXSk7XG4gICAgICB2YXIgdmlzaWJsZUl0ZW1zID0gTWF0aC5mbG9vcih3cmFwcGVyU2l6ZSAvIGl0ZW1TaXplKTtcbiAgICAgIHZhciBzaG93QXJyb3dzID0gdmlzaWJsZUl0ZW1zIDwgdG90YWw7XG4gICAgICB2YXIgbGFzdFBvc2l0aW9uID0gc2hvd0Fycm93cyA/IHRvdGFsIC0gdmlzaWJsZUl0ZW1zIDogMDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9zdGF0ZSwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtU2l6ZTogaXRlbVNpemUsXG4gICAgICAgICAgdmlzaWJsZUl0ZW1zOiB2aXNpYmxlSXRlbXMsXG4gICAgICAgICAgZmlyc3RJdGVtOiBzaG93QXJyb3dzID8gX3RoaXMuZ2V0Rmlyc3RJdGVtKHByb3BzLnNlbGVjdGVkSXRlbSkgOiAwLFxuICAgICAgICAgIGxhc3RQb3NpdGlvbjogbGFzdFBvc2l0aW9uLFxuICAgICAgICAgIHNob3dBcnJvd3M6IHNob3dBcnJvd3NcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcImhhbmRsZUNsaWNrSXRlbVwiLCBmdW5jdGlvbiAoaW5kZXgsIGl0ZW0sIGUpIHtcbiAgICAgIGlmICghaXNLZXlib2FyZEV2ZW50KGUpIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gX3RoaXMucHJvcHMub25TZWxlY3RJdGVtO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGhhbmRsZXIoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZVN0YXJ0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3dpcGluZzogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIFwib25Td2lwZUVuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN3aXBpbmc6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJvblN3aXBlTW92ZVwiLCBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICAgIHZhciBkZWx0YVggPSBkZWx0YS54O1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLml0ZW1TaXplIHx8ICFfdGhpcy5pdGVtc1dyYXBwZXJSZWYgfHwgIV90aGlzLnN0YXRlLnZpc2libGVJdGVtcykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZWZ0Qm91bmRhcnkgPSAwO1xuXG4gICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSBfcmVhY3QuQ2hpbGRyZW4uY291bnQoX3RoaXMucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICB2YXIgY3VycmVudFBvc2l0aW9uID0gLShfdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiAxMDApIC8gX3RoaXMuc3RhdGUudmlzaWJsZUl0ZW1zO1xuICAgICAgdmFyIGxhc3RMZWZ0SXRlbSA9IE1hdGgubWF4KGNoaWxkcmVuTGVuZ3RoIC0gX3RoaXMuc3RhdGUudmlzaWJsZUl0ZW1zLCAwKTtcbiAgICAgIHZhciBsYXN0TGVmdEJvdW5kYXJ5ID0gLWxhc3RMZWZ0SXRlbSAqIDEwMCAvIF90aGlzLnN0YXRlLnZpc2libGVJdGVtczsgLy8gcHJldmVudCB1c2VyIGZyb20gc3dpcGluZyBsZWZ0IG91dCBvZiBib3VuZGFyaWVzXG5cbiAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGxlZnRCb3VuZGFyeSAmJiBkZWx0YVggPiAwKSB7XG4gICAgICAgIGRlbHRhWCA9IDA7XG4gICAgICB9IC8vIHByZXZlbnQgdXNlciBmcm9tIHN3aXBpbmcgcmlnaHQgb3V0IG9mIGJvdW5kYXJpZXNcblxuXG4gICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBsYXN0TGVmdEJvdW5kYXJ5ICYmIGRlbHRhWCA8IDApIHtcbiAgICAgICAgZGVsdGFYID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIHdyYXBwZXJTaXplID0gX3RoaXMuaXRlbXNXcmFwcGVyUmVmLmNsaWVudFdpZHRoO1xuICAgICAgdmFyIHBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgMTAwIC8gKHdyYXBwZXJTaXplIC8gZGVsdGFYKTsgLy8gaWYgM2QgaXNuJ3QgYXZhaWxhYmxlIHdlIHdpbGwgdXNlIGxlZnQgdG8gbW92ZVxuXG4gICAgICBpZiAoX3RoaXMuaXRlbXNMaXN0UmVmKSB7XG4gICAgICAgIFsnV2Via2l0VHJhbnNmb3JtJywgJ01velRyYW5zZm9ybScsICdNc1RyYW5zZm9ybScsICdPVHJhbnNmb3JtJywgJ3RyYW5zZm9ybScsICdtc1RyYW5zZm9ybSddLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICBfdGhpcy5pdGVtc0xpc3RSZWYuc3R5bGVbcHJvcF0gPSAoMCwgX0NTU1RyYW5zbGF0ZS5kZWZhdWx0KShwb3NpdGlvbiwgJyUnLCBfdGhpcy5wcm9wcy5heGlzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBcInNsaWRlUmlnaHRcIiwgZnVuY3Rpb24gKHBvc2l0aW9ucykge1xuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLmZpcnN0SXRlbSAtICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJzbGlkZUxlZnRcIiwgZnVuY3Rpb24gKHBvc2l0aW9ucykge1xuICAgICAgX3RoaXMubW92ZVRvKF90aGlzLnN0YXRlLmZpcnN0SXRlbSArICh0eXBlb2YgcG9zaXRpb25zID09PSAnbnVtYmVyJyA/IHBvc2l0aW9ucyA6IDEpKTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgXCJtb3ZlVG9cIiwgZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAvLyBwb3NpdGlvbiBjYW4ndCBiZSBsb3dlciB0aGFuIDBcbiAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24gPCAwID8gMCA6IHBvc2l0aW9uOyAvLyBwb3NpdGlvbiBjYW4ndCBiZSBoaWdoZXIgdGhhbiBsYXN0IHBvc3Rpb25cblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbiA+PSBfdGhpcy5zdGF0ZS5sYXN0UG9zaXRpb24gPyBfdGhpcy5zdGF0ZS5sYXN0UG9zaXRpb24gOiBwb3NpdGlvbjtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdEl0ZW06IHBvc2l0aW9uXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWRJdGVtOiBfcHJvcHMuc2VsZWN0ZWRJdGVtLFxuICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICBzaG93QXJyb3dzOiBmYWxzZSxcbiAgICAgIGZpcnN0SXRlbTogMCxcbiAgICAgIHZpc2libGVJdGVtczogMCxcbiAgICAgIGxhc3RQb3NpdGlvbjogMFxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRodW1icywgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldHVwVGh1bWJzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuc2VsZWN0ZWRJdGVtICE9PSB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLnNlbGVjdGVkSXRlbSxcbiAgICAgICAgICBmaXJzdEl0ZW06IHRoaXMuZ2V0Rmlyc3RJdGVtKHByb3BzLnNlbGVjdGVkSXRlbSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiA9PT0gcHJldlByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gVGhpcyB3aWxsIGNhcHR1cmUgYW55IHNpemUgY2hhbmdlcyBmb3IgYXJyb3cgYWRqdXN0bWVudHMgZXRjLlxuICAgICAgLy8gdXN1YWxseSBpbiB0aGUgc2FtZSByZW5kZXIgY3ljbGUgc28gd2UgZG9uJ3Qgc2VlIGFueSBmbGlja2Vyc1xuXG5cbiAgICAgIHRoaXMudXBkYXRlU2l6ZXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmRlc3Ryb3lUaHVtYnMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0dXBUaHVtYnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0dXBUaHVtYnMoKSB7XG4gICAgICAvLyBhcyB0aGUgd2lkdGhzIGFyZSBjYWxjdWxhdGVkLCB3ZSBuZWVkIHRvIHJlc2l6ZVxuICAgICAgLy8gdGhlIGNhcm91c2VsIHdoZW4gdGhlIHdpbmRvdyBpcyByZXNpemVkXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlU2l6ZXMpOyAvLyBpc3N1ZSAjMiAtIGltYWdlIGxvYWRpbmcgc21hbGxlclxuXG4gICAgICAoMCwgX3dpbmRvdy5kZWZhdWx0KSgpLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZVNpemVzKTsgLy8gd2hlbiB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIHdlIG5lZWQgdG8gY2FsY3VsYXRlXG4gICAgICAvLyB0aGUgY29udGFpbmVyIHNpemUgdG8gYWRqdXN0IHRoZSByZXNwb25zaXZlIGJlaGF2aW91clxuXG4gICAgICB0aGlzLnVwZGF0ZVNpemVzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRlc3Ryb3lUaHVtYnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveVRodW1icygpIHtcbiAgICAgIC8vIHJlbW92aW5nIGxpc3RlbmVyc1xuICAgICAgKDAsIF93aW5kb3cuZGVmYXVsdCkoKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZVNpemVzKTtcbiAgICAgICgwLCBfd2luZG93LmRlZmF1bHQpKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMudXBkYXRlU2l6ZXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRGaXJzdEl0ZW1cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rmlyc3RJdGVtKHNlbGVjdGVkSXRlbSkge1xuICAgICAgdmFyIGZpcnN0SXRlbSA9IHNlbGVjdGVkSXRlbTtcblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA+PSB0aGlzLnN0YXRlLmxhc3RQb3NpdGlvbikge1xuICAgICAgICBmaXJzdEl0ZW0gPSB0aGlzLnN0YXRlLmxhc3RQb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdGVkSXRlbSA8IHRoaXMuc3RhdGUuZmlyc3RJdGVtICsgdGhpcy5zdGF0ZS52aXNpYmxlSXRlbXMpIHtcbiAgICAgICAgZmlyc3RJdGVtID0gdGhpcy5zdGF0ZS5maXJzdEl0ZW07XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxlY3RlZEl0ZW0gPCB0aGlzLnN0YXRlLmZpcnN0SXRlbSkge1xuICAgICAgICBmaXJzdEl0ZW0gPSBzZWxlY3RlZEl0ZW07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmaXJzdEl0ZW07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlckl0ZW1zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckl0ZW1zKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoaW1nLCBpbmRleCkge1xuICAgICAgICB2YXIgaXRlbUNsYXNzID0gX2Nzc0NsYXNzZXMuZGVmYXVsdC5JVEVNKGZhbHNlLCBpbmRleCA9PT0gX3RoaXMyLnN0YXRlLnNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgdmFyIHRodW1iUHJvcHMgPSB7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFRodW1ic1JlZihlLCBpbmRleCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IGl0ZW1DbGFzcyxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2tJdGVtLmJpbmQoX3RoaXMyLCBpbmRleCwgX3RoaXMyLnByb3BzLmNoaWxkcmVuW2luZGV4XSksXG4gICAgICAgICAgb25LZXlEb3duOiBfdGhpczIuaGFuZGxlQ2xpY2tJdGVtLmJpbmQoX3RoaXMyLCBpbmRleCwgX3RoaXMyLnByb3BzLmNoaWxkcmVuW2luZGV4XSksXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBcIlwiLmNvbmNhdChfdGhpczIucHJvcHMubGFiZWxzLml0ZW0sIFwiIFwiKS5jb25jYXQoaW5kZXggKyAxKSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgd2lkdGg6IF90aGlzMi5wcm9wcy50aHVtYldpZHRoXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7fSwgdGh1bWJQcm9wcywge1xuICAgICAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgICAgfSksIGltZyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc1N3aXBlYWJsZSA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKSA+IDE7IC8vIHNob3cgbGVmdCBhcnJvdz9cblxuICAgICAgdmFyIGhhc1ByZXYgPSB0aGlzLnN0YXRlLnNob3dBcnJvd3MgJiYgdGhpcy5zdGF0ZS5maXJzdEl0ZW0gPiAwOyAvLyBzaG93IHJpZ2h0IGFycm93XG5cbiAgICAgIHZhciBoYXNOZXh0ID0gdGhpcy5zdGF0ZS5zaG93QXJyb3dzICYmIHRoaXMuc3RhdGUuZmlyc3RJdGVtIDwgdGhpcy5zdGF0ZS5sYXN0UG9zaXRpb247IC8vIG9iaiB0byBob2xkIHRoZSB0cmFuc2Zvcm1hdGlvbnMgYW5kIHN0eWxlc1xuXG4gICAgICB2YXIgaXRlbUxpc3RTdHlsZXMgPSB7fTtcbiAgICAgIHZhciBjdXJyZW50UG9zaXRpb24gPSAtdGhpcy5zdGF0ZS5maXJzdEl0ZW0gKiAodGhpcy5zdGF0ZS5pdGVtU2l6ZSB8fCAwKTtcbiAgICAgIHZhciB0cmFuc2Zvcm1Qcm9wID0gKDAsIF9DU1NUcmFuc2xhdGUuZGVmYXVsdCkoY3VycmVudFBvc2l0aW9uLCAncHgnLCB0aGlzLnByb3BzLmF4aXMpO1xuICAgICAgdmFyIHRyYW5zaXRpb25UaW1lID0gdGhpcy5wcm9wcy50cmFuc2l0aW9uVGltZSArICdtcyc7XG4gICAgICBpdGVtTGlzdFN0eWxlcyA9IHtcbiAgICAgICAgV2Via2l0VHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBNb3pUcmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXG4gICAgICAgIE1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBPVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVByb3AsXG4gICAgICAgIG1zVHJhbnNmb3JtOiB0cmFuc2Zvcm1Qcm9wLFxuICAgICAgICBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICBNb3pUcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICBNc1RyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWUsXG4gICAgICAgIE9UcmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRyYW5zaXRpb25UaW1lLFxuICAgICAgICBtc1RyYW5zaXRpb25EdXJhdGlvbjogdHJhbnNpdGlvblRpbWVcbiAgICAgIH07XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuQ0FST1VTRUwoZmFsc2UpXG4gICAgICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5XUkFQUEVSKGZhbHNlKSxcbiAgICAgICAgcmVmOiB0aGlzLnNldEl0ZW1zV3JhcHBlclJlZlxuICAgICAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICBjbGFzc05hbWU6IF9jc3NDbGFzc2VzLmRlZmF1bHQuQVJST1dfUFJFVighaGFzUHJldiksXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5zbGlkZVJpZ2h0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmxhYmVscy5sZWZ0QXJyb3dcbiAgICAgIH0pLCBpc1N3aXBlYWJsZSA/IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEVhc3lTd2lwZS5kZWZhdWx0LCB7XG4gICAgICAgIHRhZ05hbWU6IFwidWxcIixcbiAgICAgICAgY2xhc3NOYW1lOiBfY3NzQ2xhc3Nlcy5kZWZhdWx0LlNMSURFUihmYWxzZSwgdGhpcy5zdGF0ZS5zd2lwaW5nKSxcbiAgICAgICAgb25Td2lwZUxlZnQ6IHRoaXMuc2xpZGVMZWZ0LFxuICAgICAgICBvblN3aXBlUmlnaHQ6IHRoaXMuc2xpZGVSaWdodCxcbiAgICAgICAgb25Td2lwZU1vdmU6IHRoaXMub25Td2lwZU1vdmUsXG4gICAgICAgIG9uU3dpcGVTdGFydDogdGhpcy5vblN3aXBlU3RhcnQsXG4gICAgICAgIG9uU3dpcGVFbmQ6IHRoaXMub25Td2lwZUVuZCxcbiAgICAgICAgc3R5bGU6IGl0ZW1MaXN0U3R5bGVzLFxuICAgICAgICBpbm5lclJlZjogdGhpcy5zZXRJdGVtc0xpc3RSZWYsXG4gICAgICAgIGFsbG93TW91c2VFdmVudHM6IHRoaXMucHJvcHMuZW11bGF0ZVRvdWNoXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKCkpIDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5TTElERVIoZmFsc2UsIHRoaXMuc3RhdGUuc3dpcGluZyksXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldEl0ZW1zTGlzdFJlZihub2RlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IGl0ZW1MaXN0U3R5bGVzXG4gICAgICB9LCB0aGlzLnJlbmRlckl0ZW1zKCkpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgIGNsYXNzTmFtZTogX2Nzc0NsYXNzZXMuZGVmYXVsdC5BUlJPV19ORVhUKCFoYXNOZXh0KSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnNsaWRlTGVmdCgpO1xuICAgICAgICB9LFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5sYWJlbHMucmlnaHRBcnJvd1xuICAgICAgfSkpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGh1bWJzO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGh1bWJzO1xuXG5fZGVmaW5lUHJvcGVydHkoVGh1bWJzLCBcImRpc3BsYXlOYW1lXCIsICdUaHVtYnMnKTtcblxuX2RlZmluZVByb3BlcnR5KFRodW1icywgXCJkZWZhdWx0UHJvcHNcIiwge1xuICBheGlzOiAnaG9yaXpvbnRhbCcsXG4gIGxhYmVsczoge1xuICAgIGxlZnRBcnJvdzogJ3ByZXZpb3VzIHNsaWRlIC8gaXRlbScsXG4gICAgcmlnaHRBcnJvdzogJ25leHQgc2xpZGUgLyBpdGVtJyxcbiAgICBpdGVtOiAnc2xpZGUgaXRlbSdcbiAgfSxcbiAgc2VsZWN0ZWRJdGVtOiAwLFxuICB0aHVtYldpZHRoOiA4MCxcbiAgdHJhbnNpdGlvblRpbWU6IDM1MFxufSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIFJPT1Q6IGZ1bmN0aW9uIFJPT1QoY3VzdG9tQ2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShfZGVmaW5lUHJvcGVydHkoe1xuICAgICAgJ2Nhcm91c2VsLXJvb3QnOiB0cnVlXG4gICAgfSwgY3VzdG9tQ2xhc3NOYW1lIHx8ICcnLCAhIWN1c3RvbUNsYXNzTmFtZSkpO1xuICB9LFxuICBDQVJPVVNFTDogZnVuY3Rpb24gQ0FST1VTRUwoaXNTbGlkZXIpIHtcbiAgICByZXR1cm4gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHtcbiAgICAgIGNhcm91c2VsOiB0cnVlLFxuICAgICAgJ2Nhcm91c2VsLXNsaWRlcic6IGlzU2xpZGVyXG4gICAgfSk7XG4gIH0sXG4gIFdSQVBQRVI6IGZ1bmN0aW9uIFdSQVBQRVIoaXNTbGlkZXIsIGF4aXMpIHtcbiAgICByZXR1cm4gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHtcbiAgICAgICd0aHVtYnMtd3JhcHBlcic6ICFpc1NsaWRlcixcbiAgICAgICdzbGlkZXItd3JhcHBlcic6IGlzU2xpZGVyLFxuICAgICAgJ2F4aXMtaG9yaXpvbnRhbCc6IGF4aXMgPT09ICdob3Jpem9udGFsJyxcbiAgICAgICdheGlzLXZlcnRpY2FsJzogYXhpcyAhPT0gJ2hvcml6b250YWwnXG4gICAgfSk7XG4gIH0sXG4gIFNMSURFUjogZnVuY3Rpb24gU0xJREVSKGlzU2xpZGVyLCBpc1N3aXBpbmcpIHtcbiAgICByZXR1cm4gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHtcbiAgICAgIHRodW1iczogIWlzU2xpZGVyLFxuICAgICAgc2xpZGVyOiBpc1NsaWRlcixcbiAgICAgIGFuaW1hdGVkOiAhaXNTd2lwaW5nXG4gICAgfSk7XG4gIH0sXG4gIElURU06IGZ1bmN0aW9uIElURU0oaXNTbGlkZXIsIHNlbGVjdGVkLCBwcmV2aW91cykge1xuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoe1xuICAgICAgdGh1bWI6ICFpc1NsaWRlcixcbiAgICAgIHNsaWRlOiBpc1NsaWRlcixcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgIHByZXZpb3VzOiBwcmV2aW91c1xuICAgIH0pO1xuICB9LFxuICBBUlJPV19QUkVWOiBmdW5jdGlvbiBBUlJPV19QUkVWKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh7XG4gICAgICAnY29udHJvbC1hcnJvdyBjb250cm9sLXByZXYnOiB0cnVlLFxuICAgICAgJ2NvbnRyb2wtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgIH0pO1xuICB9LFxuICBBUlJPV19ORVhUOiBmdW5jdGlvbiBBUlJPV19ORVhUKGRpc2FibGVkKSB7XG4gICAgcmV0dXJuICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh7XG4gICAgICAnY29udHJvbC1hcnJvdyBjb250cm9sLW5leHQnOiB0cnVlLFxuICAgICAgJ2NvbnRyb2wtZGlzYWJsZWQnOiBkaXNhYmxlZFxuICAgIH0pO1xuICB9LFxuICBET1Q6IGZ1bmN0aW9uIERPVChzZWxlY3RlZCkge1xuICAgIHJldHVybiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoe1xuICAgICAgZG90OiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub3V0ZXJXaWR0aCA9IHZvaWQgMDtcblxudmFyIG91dGVyV2lkdGggPSBmdW5jdGlvbiBvdXRlcldpZHRoKGVsKSB7XG4gIHZhciB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgd2lkdGggKz0gcGFyc2VJbnQoc3R5bGUubWFyZ2luTGVmdCkgKyBwYXJzZUludChzdHlsZS5tYXJnaW5SaWdodCk7XG4gIHJldHVybiB3aWR0aDtcbn07XG5cbmV4cG9ydHMub3V0ZXJXaWR0aCA9IG91dGVyV2lkdGg7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDYXJvdXNlbFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQ2Fyb3VzZWwuZGVmYXVsdDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDYXJvdXNlbFByb3BzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF90eXBlcy5DYXJvdXNlbFByb3BzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlRodW1ic1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfVGh1bWJzLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX0Nhcm91c2VsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL0Nhcm91c2VsXCIpKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvQ2Fyb3VzZWwvdHlwZXNcIik7XG5cbnZhciBfVGh1bWJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL1RodW1ic1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICByZXR1cm4gZG9jdW1lbnQ7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gIHJldHVybiB3aW5kb3c7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJBcHBTY3JlZW5TaG90cyIsImltZyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9