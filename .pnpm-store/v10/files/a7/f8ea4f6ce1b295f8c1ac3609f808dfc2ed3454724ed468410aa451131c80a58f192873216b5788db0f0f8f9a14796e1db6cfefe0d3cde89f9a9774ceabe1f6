(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AV"] = factory();
	else
		root["AV"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 245);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(9);
var apply = __webpack_require__(71);
var uncurryThis = __webpack_require__(4);
var isCallable = __webpack_require__(8);
var getOwnPropertyDescriptor = __webpack_require__(73).f;
var isForced = __webpack_require__(148);
var path = __webpack_require__(15);
var bind = __webpack_require__(58);
var createNonEnumerableProperty = __webpack_require__(39);
var hasOwn = __webpack_require__(13);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof Wrapper) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return apply(NativeConstructor, this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    createNonEnumerableProperty(target, key, resultProperty);

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_default_js__ = __webpack_require__(288);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__index_default_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_js__ = __webpack_require__(124);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["VERSION"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["restArguments"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isObject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNull"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isUndefined"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isBoolean"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isElement"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isString"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNumber"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isRegExp"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isError"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSymbol"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArrayBuffer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isDataView"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFunction"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isArguments"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isFinite"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isNaN"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isTypedArray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEmpty"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMatch"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isEqual"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isMap"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakMap"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isSet"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["isWeakSet"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["keys"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["allKeys"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["values"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["pairs"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["invert"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["functions"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["methods"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["extend"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["extendOwn"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["assign"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["defaults"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["create"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["clone"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["tap"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "get", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["get"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "has", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["has"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["mapObject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["identity"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["constant"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["noop"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["toPath"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "property", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["property"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["propertyOf"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["matcher"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["matches"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "times", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["times"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "random", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["random"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["now"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["escape"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["unescape"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["templateSettings"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "template", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["template"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "result", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["result"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniqueId"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["chain"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["iteratee"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["partial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["bind"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["bindAll"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["memoize"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["delay"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["defer"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["throttle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["debounce"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["wrap"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["negate"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["compose"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "after", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["after"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "before", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["before"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["once"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["findKey"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["findIndex"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["findLastIndex"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortedIndex"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexOf"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["lastIndexOf"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["find"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["detect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["findWhere"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["each"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["forEach"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["map"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["collect"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduce"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldl"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["inject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["reduceRight"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["foldr"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["filter"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["select"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["reject"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "every", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["every"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["all"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "some", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["some"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "any", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["any"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["contains"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["includes"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "include", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["include"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["invoke"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["pluck"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "where", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["where"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["max"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["min"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["shuffle"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["sample"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["sortBy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["groupBy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["indexBy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["countBy"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["partition"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["toArray"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "size", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["size"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["pick"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["omit"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "first", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["first"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["head"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["take"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["initial"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["last"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["rest"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["tail"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["drop"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["compact"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["flatten"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "without", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["without"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["uniq"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["unique"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "union", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["union"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["intersection"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["difference"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["unzip"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["transpose"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["zip"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "object", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["object"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["range"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["chunk"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_1__index_js__["mixin"]; });
// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.




/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(72);

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var shared = __webpack_require__(75);
var hasOwn = __webpack_require__(13);
var uid = __webpack_require__(112);
var NATIVE_SYMBOL = __webpack_require__(55);
var USE_SYMBOL_AS_UID = __webpack_require__(146);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ObjProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SymbolProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return supportsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return supportsDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return nativeIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return nativeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return nativeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return nativeIsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasEnumBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return nonEnumerableProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAX_ARRAY_INDEX; });
// Current version.
var VERSION = '1.12.1';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(108)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(15);
var hasOwn = __webpack_require__(13);
var wrappedWellKnownSymbolModule = __webpack_require__(142);
var defineProperty = __webpack_require__(34).f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(248);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(72);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var toObject = __webpack_require__(33);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__ = __webpack_require__(177);





// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(obj)) return [];
  if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["m" /* nativeKeys */]) return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__["m" /* nativeKeys */])(obj);
  var keys = [];
  for (var key in obj) if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__["a" /* default */])(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["h" /* hasEnumBug */]) Object(__WEBPACK_IMPORTED_MODULE_3__collectNonEnumProps_js__["a" /* default */])(obj, keys);
  return keys;
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tagTester;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function(obj) {
    return __WEBPACK_IMPORTED_MODULE_0__setup_js__["t" /* toString */].call(obj) === tag;
  };
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(8);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(15);
var global = __webpack_require__(9);
var isCallable = __webpack_require__(8);

var aFunction = function (variable) {
  return isCallable(variable) ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cb;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iteratee_js__ = __webpack_require__(188);




// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].iteratee !== __WEBPACK_IMPORTED_MODULE_2__iteratee_js__["a" /* default */]) return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].iteratee(value, context);
  return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__["a" /* default */])(value, context, argCount);
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = restArguments;
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = __WEBPACK_IMPORTED_MODULE_0__setup_js__["e" /* VERSION */];

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(30);



// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a" /* default */]));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(15);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _concat = _interopRequireDefault(__webpack_require__(25));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);

var md5 = __webpack_require__(500);

var _require = __webpack_require__(2),
    extend = _require.extend;

var AV = __webpack_require__(67);

var AVError = __webpack_require__(43);

var _require2 = __webpack_require__(31),
    getSessionToken = _require2.getSessionToken;

var ajax = __webpack_require__(106); // 计算 X-LC-Sign 的签名方法


var sign = function sign(key, isMasterKey) {
  var _context2;

  var now = new Date().getTime();
  var signature = md5(now + key);

  if (isMasterKey) {
    var _context;

    return (0, _concat.default)(_context = "".concat(signature, ",")).call(_context, now, ",master");
  }

  return (0, _concat.default)(_context2 = "".concat(signature, ",")).call(_context2, now);
};

var setAppKey = function setAppKey(headers, signKey) {
  if (signKey) {
    headers['X-LC-Sign'] = sign(AV.applicationKey);
  } else {
    headers['X-LC-Key'] = AV.applicationKey;
  }
};

var setHeaders = function setHeaders() {
  var authOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var signKey = arguments.length > 1 ? arguments[1] : undefined;
  var headers = {
    'X-LC-Id': AV.applicationId,
    'Content-Type': 'application/json;charset=UTF-8'
  };
  var useMasterKey = false;

  if (typeof authOptions.useMasterKey === 'boolean') {
    useMasterKey = authOptions.useMasterKey;
  } else if (typeof AV._config.useMasterKey === 'boolean') {
    useMasterKey = AV._config.useMasterKey;
  }

  if (useMasterKey) {
    if (AV.masterKey) {
      if (signKey) {
        headers['X-LC-Sign'] = sign(AV.masterKey, true);
      } else {
        headers['X-LC-Key'] = "".concat(AV.masterKey, ",master");
      }
    } else {
      console.warn('masterKey is not set, fall back to use appKey');
      setAppKey(headers, signKey);
    }
  } else {
    setAppKey(headers, signKey);
  }

  if (AV.hookKey) {
    headers['X-LC-Hook-Key'] = AV.hookKey;
  }

  if (AV._config.production !== null) {
    headers['X-LC-Prod'] = String(AV._config.production);
  }

  headers[ false ? 'User-Agent' : 'X-LC-UA'] = AV._sharedConfig.userAgent;
  return _promise.default.resolve().then(function () {
    // Pass the session token
    var sessionToken = getSessionToken(authOptions);

    if (sessionToken) {
      headers['X-LC-Session'] = sessionToken;
    } else if (!AV._config.disableCurrentUser) {
      return AV.User.currentAsync().then(function (currentUser) {
        if (currentUser && currentUser._sessionToken) {
          headers['X-LC-Session'] = currentUser._sessionToken;
        }

        return headers;
      });
    }

    return headers;
  });
};

var createApiUrl = function createApiUrl(_ref) {
  var _ref$service = _ref.service,
      service = _ref$service === void 0 ? 'api' : _ref$service,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? '1.1' : _ref$version,
      path = _ref.path;
  var apiURL = AV._config.serverURLs[service];
  if (!apiURL) throw new Error("undefined server URL for ".concat(service));

  if (apiURL.charAt(apiURL.length - 1) !== '/') {
    apiURL += '/';
  }

  apiURL += version;

  if (path) {
    apiURL += path;
  }

  return apiURL;
};
/**
 * Low level REST API client. Call REST endpoints with authorization headers.
 * @function AV.request
 * @since 3.0.0
 * @param {Object} options
 * @param {String} options.method HTTP method
 * @param {String} options.path endpoint path, e.g. `/classes/Test/55759577e4b029ae6015ac20`
 * @param {Object} [options.query] query string dict
 * @param {Object} [options.data] HTTP body
 * @param {AuthOptions} [options.authOptions]
 * @param {String} [options.service = 'api']
 * @param {String} [options.version = '1.1']
 */


var request = function request(_ref2) {
  var service = _ref2.service,
      version = _ref2.version,
      method = _ref2.method,
      path = _ref2.path,
      query = _ref2.query,
      data = _ref2.data,
      authOptions = _ref2.authOptions,
      _ref2$signKey = _ref2.signKey,
      signKey = _ref2$signKey === void 0 ? true : _ref2$signKey;

  if (!(AV.applicationId && (AV.applicationKey || AV.masterKey))) {
    throw new Error('Not initialized');
  }

  if (AV._appRouter) {
    AV._appRouter.refresh();
  }

  var timeout = AV._config.requestTimeout;
  var url = createApiUrl({
    service: service,
    path: path,
    version: version
  });
  return setHeaders(authOptions, signKey).then(function (headers) {
    return ajax({
      method: method,
      url: url,
      query: query,
      data: data,
      headers: headers,
      timeout: timeout
    }).catch(function (error) {
      var errorJSON = {
        code: error.code || -1,
        error: error.message || error.responseText
      };

      if (error.response && error.response.code) {
        errorJSON = error.response;
      } else if (error.responseText) {
        try {
          errorJSON = JSON.parse(error.responseText);
        } catch (e) {// If we fail to parse the error text, that's okay.
        }
      }

      errorJSON.rawMessage = errorJSON.rawMessage || errorJSON.error;

      if (!AV._sharedConfig.keepErrorRawMessage) {
        var _context3, _context4;

        errorJSON.error += (0, _concat.default)(_context3 = (0, _concat.default)(_context4 = " [".concat(error.statusCode || 'N/A', " ")).call(_context4, method, " ")).call(_context3, url, "]");
      } // Transform the error into an instance of AVError by trying to parse
      // the error string as JSON.


      var err = new AVError(errorJSON.code, errorJSON.error);
      delete errorJSON.error;
      throw _.extend(err, errorJSON);
    });
  });
}; // lagecy request


var _request = function _request(route, className, objectId, method, data, authOptions, query) {
  var path = '';
  if (route) path += "/".concat(route);
  if (className) path += "/".concat(className);
  if (objectId) path += "/".concat(objectId); // for migeration

  if (data && data._fetchWhenSave) throw new Error('_fetchWhenSave should be in the query');
  if (data && data._where) throw new Error('_where should be in the query');

  if (method && method.toLowerCase() === 'get') {
    query = extend({}, query, data);
    data = null;
  }

  return request({
    method: method,
    path: path,
    query: query,
    data: data,
    authOptions: authOptions
  });
};

AV.request = request;
module.exports = {
  _request: _request,
  request: request
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(8);
var tryToString = __webpack_require__(57);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);



var isFunction = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = __WEBPACK_IMPORTED_MODULE_1__setup_js__["p" /* root */].document && __WEBPACK_IMPORTED_MODULE_1__setup_js__["p" /* root */].document.childNodes;
if (typeof /./ != 'function' && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(176);


// Internal helper to obtain the `length` property of an object.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__["a" /* default */])('length'));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _keys = _interopRequireDefault(__webpack_require__(53));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(220));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2); // Helper function to check null or undefined.


var isNullOrUndefined = function isNullOrUndefined(x) {
  return _.isNull(x) || _.isUndefined(x);
};

var ensureArray = function ensureArray(target) {
  if (_.isArray(target)) {
    return target;
  }

  if (target === undefined || target === null) {
    return [];
  }

  return [target];
};

var transformFetchOptions = function transformFetchOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      keys = (0, _keys.default)(_ref),
      include = _ref.include,
      includeACL = _ref.includeACL;

  var fetchOptions = {};

  if (keys) {
    fetchOptions.keys = ensureArray(keys).join(',');
  }

  if (include) {
    fetchOptions.include = ensureArray(include).join(',');
  }

  if (includeACL) {
    fetchOptions.returnACL = includeACL;
  }

  return fetchOptions;
};

var getSessionToken = function getSessionToken(authOptions) {
  if (authOptions.sessionToken) {
    return authOptions.sessionToken;
  }

  if (authOptions.user && typeof authOptions.user.getSessionToken === 'function') {
    return authOptions.user.getSessionToken();
  }
};

var tap = function tap(interceptor) {
  return function (value) {
    return interceptor(value), value;
  };
}; // Shared empty constructor function to aid in prototype-chain creation.


var EmptyConstructor = function EmptyConstructor() {}; // Helper function to correctly set up the prototype chain, for subclasses.
// Similar to `goog.inherits`, but uses a hash of prototype properties and
// class properties to be extended.


var inherits = function inherits(parent, protoProps, staticProps) {
  var child; // The constructor function for the new subclass is either defined by you
  // (the "constructor" property in your `extend` definition), or defaulted
  // by us to simply call the parent's constructor.

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    /** @ignore */
    child = function child() {
      parent.apply(this, arguments);
    };
  } // Inherit class (static) properties from parent.


  _.extend(child, parent); // Set the prototype chain to inherit from `parent`, without calling
  // `parent`'s constructor function.


  EmptyConstructor.prototype = parent.prototype;
  child.prototype = new EmptyConstructor(); // Add prototype properties (instance properties) to the subclass,
  // if supplied.

  if (protoProps) {
    _.extend(child.prototype, protoProps);
  } // Add static properties to the constructor function, if supplied.


  if (staticProps) {
    _.extend(child, staticProps);
  } // Correctly set child's `prototype.constructor`.


  child.prototype.constructor = child; // Set a convenience property in case the parent's prototype is
  // needed later.

  child.__super__ = parent.prototype;
  return child;
}; // Suppress the date string format warning in Weixin DevTools
// Link: https://developers.weixin.qq.com/community/minihome/doc/00080c6f244718053550067736b401


var parseDate = typeof wx === 'undefined' ? function (iso8601) {
  return new Date(iso8601);
} : function (iso8601) {
  return new Date(Date.parse(iso8601));
};

var setValue = function setValue(target, key, value) {
  // '.' is not allowed in Class keys, escaping is not in concern now.
  var segs = key.split('.');
  var lastSeg = segs.pop();
  var currentTarget = target;
  segs.forEach(function (seg) {
    if (currentTarget[seg] === undefined) currentTarget[seg] = {};
    currentTarget = currentTarget[seg];
  });
  currentTarget[lastSeg] = value;
  return target;
};

var findValue = function findValue(target, key) {
  var segs = key.split('.');
  var firstSeg = segs[0];
  var lastSeg = segs.pop();
  var currentTarget = target;

  for (var i = 0; i < segs.length; i++) {
    currentTarget = currentTarget[segs[i]];

    if (currentTarget === undefined) {
      return [undefined, undefined, lastSeg];
    }
  }

  var value = currentTarget[lastSeg];
  return [value, currentTarget, lastSeg, firstSeg];
};

var isPlainObject = function isPlainObject(obj) {
  return _.isObject(obj) && (0, _getPrototypeOf.default)(obj) === Object.prototype;
};

var continueWhile = function continueWhile(predicate, asyncFunction) {
  if (predicate()) {
    return asyncFunction().then(function () {
      return continueWhile(predicate, asyncFunction);
    });
  }

  return _promise.default.resolve();
};

module.exports = {
  isNullOrUndefined: isNullOrUndefined,
  ensureArray: ensureArray,
  transformFetchOptions: transformFetchOptions,
  getSessionToken: getSessionToken,
  tap: tap,
  inherits: inherits,
  parseDate: parseDate,
  setValue: setValue,
  findValue: findValue,
  isPlainObject: isPlainObject,
  continueWhile: continueWhile
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(74);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(147);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(149);
var anObject = __webpack_require__(21);
var toPropertyKey = __webpack_require__(88);

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(109);
var requireObjectCoercible = __webpack_require__(74);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toLength = __webpack_require__(259);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(372);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(227);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var definePropertyModule = __webpack_require__(34);
var createPropertyDescriptor = __webpack_require__(44);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);

var $String = String;

module.exports = function (argument) {
  if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = has;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Internal function to check whether `key` is an own property name of `obj`.
function has(obj, key) {
  return obj != null && __WEBPACK_IMPORTED_MODULE_0__setup_js__["i" /* hasOwnProperty */].call(obj, key);
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(365);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _setPrototypeOf = _interopRequireDefault(__webpack_require__(387));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__(220));

var _ = __webpack_require__(2);
/**
 * @class AV.Error
 */


function AVError(code, message) {
  if (this instanceof AVError ? this.constructor : void 0) {
    var error = new Error(message);
    (0, _setPrototypeOf.default)(error, (0, _getPrototypeOf.default)(this));
    error.code = code;
    return error;
  }

  return new AVError(code, message);
}

AVError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});
(0, _setPrototypeOf.default)(AVError, Error);

_.extend(AVError,
/** @lends AV.Error */
{
  /**
   * Error code indicating some error other than those enumerated here.
   * @constant
   */
  OTHER_CAUSE: -1,

  /**
   * Error code indicating that something has gone wrong with the server.
   * If you get this error code, it is AV's fault.
   * @constant
   */
  INTERNAL_SERVER_ERROR: 1,

  /**
   * Error code indicating the connection to the AV servers failed.
   * @constant
   */
  CONNECTION_FAILED: 100,

  /**
   * Error code indicating the specified object doesn't exist.
   * @constant
   */
  OBJECT_NOT_FOUND: 101,

  /**
   * Error code indicating you tried to query with a datatype that doesn't
   * support it, like exact matching an array or object.
   * @constant
   */
  INVALID_QUERY: 102,

  /**
   * Error code indicating a missing or invalid classname. Classnames are
   * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
   * only valid characters.
   * @constant
   */
  INVALID_CLASS_NAME: 103,

  /**
   * Error code indicating an unspecified object id.
   * @constant
   */
  MISSING_OBJECT_ID: 104,

  /**
   * Error code indicating an invalid key name. Keys are case-sensitive. They
   * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
   * @constant
   */
  INVALID_KEY_NAME: 105,

  /**
   * Error code indicating a malformed pointer. You should not see this unless
   * you have been mucking about changing internal AV code.
   * @constant
   */
  INVALID_POINTER: 106,

  /**
   * Error code indicating that badly formed JSON was received upstream. This
   * either indicates you have done something unusual with modifying how
   * things encode to JSON, or the network is failing badly.
   * @constant
   */
  INVALID_JSON: 107,

  /**
   * Error code indicating that the feature you tried to access is only
   * available internally for testing purposes.
   * @constant
   */
  COMMAND_UNAVAILABLE: 108,

  /**
   * You must call AV.initialize before using the AV library.
   * @constant
   */
  NOT_INITIALIZED: 109,

  /**
   * Error code indicating that a field was set to an inconsistent type.
   * @constant
   */
  INCORRECT_TYPE: 111,

  /**
   * Error code indicating an invalid channel name. A channel name is either
   * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
   * characters.
   * @constant
   */
  INVALID_CHANNEL_NAME: 112,

  /**
   * Error code indicating that push is misconfigured.
   * @constant
   */
  PUSH_MISCONFIGURED: 115,

  /**
   * Error code indicating that the object is too large.
   * @constant
   */
  OBJECT_TOO_LARGE: 116,

  /**
   * Error code indicating that the operation isn't allowed for clients.
   * @constant
   */
  OPERATION_FORBIDDEN: 119,

  /**
   * Error code indicating the result was not found in the cache.
   * @constant
   */
  CACHE_MISS: 120,

  /**
   * Error code indicating that an invalid key was used in a nested
   * JSONObject.
   * @constant
   */
  INVALID_NESTED_KEY: 121,

  /**
   * Error code indicating that an invalid filename was used for AVFile.
   * A valid file name contains only a-zA-Z0-9_. characters and is between 1
   * and 128 characters.
   * @constant
   */
  INVALID_FILE_NAME: 122,

  /**
   * Error code indicating an invalid ACL was provided.
   * @constant
   */
  INVALID_ACL: 123,

  /**
   * Error code indicating that the request timed out on the server. Typically
   * this indicates that the request is too expensive to run.
   * @constant
   */
  TIMEOUT: 124,

  /**
   * Error code indicating that the email address was invalid.
   * @constant
   */
  INVALID_EMAIL_ADDRESS: 125,

  /**
   * Error code indicating a missing content type.
   * @constant
   */
  MISSING_CONTENT_TYPE: 126,

  /**
   * Error code indicating a missing content length.
   * @constant
   */
  MISSING_CONTENT_LENGTH: 127,

  /**
   * Error code indicating an invalid content length.
   * @constant
   */
  INVALID_CONTENT_LENGTH: 128,

  /**
   * Error code indicating a file that was too large.
   * @constant
   */
  FILE_TOO_LARGE: 129,

  /**
   * Error code indicating an error saving a file.
   * @constant
   */
  FILE_SAVE_ERROR: 130,

  /**
   * Error code indicating an error deleting a file.
   * @constant
   */
  FILE_DELETE_ERROR: 153,

  /**
   * Error code indicating that a unique field was given a value that is
   * already taken.
   * @constant
   */
  DUPLICATE_VALUE: 137,

  /**
   * Error code indicating that a role's name is invalid.
   * @constant
   */
  INVALID_ROLE_NAME: 139,

  /**
   * Error code indicating that an application quota was exceeded.  Upgrade to
   * resolve.
   * @constant
   */
  EXCEEDED_QUOTA: 140,

  /**
   * Error code indicating that a Cloud Code script failed.
   * @constant
   */
  SCRIPT_FAILED: 141,

  /**
   * Error code indicating that a Cloud Code validation failed.
   * @constant
   */
  VALIDATION_ERROR: 142,

  /**
   * Error code indicating that invalid image data was provided.
   * @constant
   */
  INVALID_IMAGE_DATA: 150,

  /**
   * Error code indicating an unsaved file.
   * @constant
   */
  UNSAVED_FILE_ERROR: 151,

  /**
   * Error code indicating an invalid push time.
   * @constant
   */
  INVALID_PUSH_TIME_ERROR: 152,

  /**
   * Error code indicating that the username is missing or empty.
   * @constant
   */
  USERNAME_MISSING: 200,

  /**
   * Error code indicating that the password is missing or empty.
   * @constant
   */
  PASSWORD_MISSING: 201,

  /**
   * Error code indicating that the username has already been taken.
   * @constant
   */
  USERNAME_TAKEN: 202,

  /**
   * Error code indicating that the email has already been taken.
   * @constant
   */
  EMAIL_TAKEN: 203,

  /**
   * Error code indicating that the email is missing, but must be specified.
   * @constant
   */
  EMAIL_MISSING: 204,

  /**
   * Error code indicating that a user with the specified email was not found.
   * @constant
   */
  EMAIL_NOT_FOUND: 205,

  /**
   * Error code indicating that a user object without a valid session could
   * not be altered.
   * @constant
   */
  SESSION_MISSING: 206,

  /**
   * Error code indicating that a user can only be created through signup.
   * @constant
   */
  MUST_CREATE_USER_THROUGH_SIGNUP: 207,

  /**
   * Error code indicating that an an account being linked is already linked
   * to another user.
   * @constant
   */
  ACCOUNT_ALREADY_LINKED: 208,

  /**
   * Error code indicating that a user cannot be linked to an account because
   * that account's id could not be found.
   * @constant
   */
  LINKED_ID_MISSING: 250,

  /**
   * Error code indicating that a user with a linked (e.g. Facebook) account
   * has an invalid session.
   * @constant
   */
  INVALID_LINKED_SESSION: 251,

  /**
   * Error code indicating that a service being linked (e.g. Facebook or
   * Twitter) is unsupported.
   * @constant
   */
  UNSUPPORTED_SERVICE: 252,

  /**
   * Error code indicating a real error code is unavailable because
   * we had to use an XDomainRequest object to allow CORS requests in
   * Internet Explorer, which strips the body from HTTP responses that have
   * a non-2XX status code.
   * @constant
   */
  X_DOMAIN_REQUEST: 602
});

module.exports = AVError;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(121);
var isCallable = __webpack_require__(8);
var classofRaw = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var createNonEnumerableProperty = __webpack_require__(39);

module.exports = function (target, key, value, options) {
  if (options && options.enumerable) target[key] = value;
  else createNonEnumerableProperty(target, key, value);
  return target;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(28);

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable(resolve);
  this.reject = aCallable(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isObject;
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tagTester_js__ = __webpack_require__(16);



// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__setup_js__["k" /* nativeIsArray */] || Object(__WEBPACK_IMPORTED_MODULE_1__tagTester_js__["a" /* default */])('Array'));


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = each;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(14);




// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__["a" /* default */])(iteratee, context);
  var i, length;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a" /* default */])(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(56);
var fails = __webpack_require__(3);

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var userAgent = __webpack_require__(45);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var aCallable = __webpack_require__(28);
var NATIVE_BIND = __webpack_require__(72);

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(21);
var definePropertiesModule = __webpack_require__(152);
var enumBugKeys = __webpack_require__(118);
var hiddenKeys = __webpack_require__(93);
var html = __webpack_require__(153);
var documentCreateElement = __webpack_require__(113);
var sharedKey = __webpack_require__(91);

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(35);
var addToUnscopables = __webpack_require__(122);
var Iterators = __webpack_require__(46);
var InternalStateModule = __webpack_require__(95);
var defineProperty = __webpack_require__(34).f;
var defineIterator = __webpack_require__(157);
var IS_PURE = __webpack_require__(32);
var DESCRIPTORS = __webpack_require__(20);

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (!IS_PURE && DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(121);
var defineProperty = __webpack_require__(34).f;
var createNonEnumerableProperty = __webpack_require__(39);
var hasOwn = __webpack_require__(13);
var toString = __webpack_require__(266);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC, SET_METHOD) {
  if (it) {
    var target = STATIC ? it : it.prototype;
    if (!hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
    }
    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
      createNonEnumerableProperty(target, 'toString', toString);
    }
  }
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);

module.exports = global.Promise;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
var DOMIterables = __webpack_require__(287);
var global = __webpack_require__(9);
var classof = __webpack_require__(47);
var createNonEnumerableProperty = __webpack_require__(39);
var Iterators = __webpack_require__(46);
var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype && classof(CollectionPrototype) !== TO_STRING_TAG) {
    createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
  }
  Iterators[COLLECTION_NAME] = Iterators.Array;
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = values;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(14);


// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a" /* default */])(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatten;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArray_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(127);





// Internal implementation of a recursive `flatten` function.
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(input); i < length; i++) {
    var value = input[i];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(value) && (Object(__WEBPACK_IMPORTED_MODULE_2__isArray_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__["a" /* default */])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = map;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(14);




// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(iteratee, context);
  var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a" /* default */])(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _map = _interopRequireDefault(__webpack_require__(42));

var _keys = _interopRequireDefault(__webpack_require__(217));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var _keys2 = _interopRequireDefault(__webpack_require__(53));

var _ = __webpack_require__(2);

var uuid = __webpack_require__(219);

var debug = __webpack_require__(69);

var _require = __webpack_require__(31),
    inherits = _require.inherits,
    parseDate = _require.parseDate;

var version = __webpack_require__(222);

var _require2 = __webpack_require__(70),
    setAdapters = _require2.setAdapters,
    adapterManager = _require2.adapterManager;

var AV = global.AV || {}; // All internal configuration items

AV._config = {
  serverURLs: {},
  useMasterKey: false,
  production: null,
  realtime: null,
  requestTimeout: null
};
var initialUserAgent = "LeanCloud-JS-SDK/".concat(version); // configs shared by all AV instances

AV._sharedConfig = {
  userAgent: initialUserAgent,
  liveQueryRealtime: null
};
adapterManager.on('platformInfo', function (platformInfo) {
  var ua = initialUserAgent;

  if (platformInfo) {
    if (platformInfo.userAgent) {
      ua = platformInfo.userAgent;
    } else {
      var comments = platformInfo.name;

      if (platformInfo.version) {
        comments += "/".concat(platformInfo.version);
      }

      if (platformInfo.extra) {
        comments += "; ".concat(platformInfo.extra);
      }

      ua += " (".concat(comments, ")");
    }
  }

  AV._sharedConfig.userAgent = ua;
});
/**
 * Contains all AV API classes and functions.
 * @namespace AV
 */

/**
 * Returns prefix for localStorage keys used by this instance of AV.
 * @param {String} path The relative suffix to append to it.
 *     null or undefined is treated as the empty string.
 * @return {String} The full key name.
 * @private
 */

AV._getAVPath = function (path) {
  if (!AV.applicationId) {
    throw new Error('You need to call AV.initialize before using AV.');
  }

  if (!path) {
    path = '';
  }

  if (!_.isString(path)) {
    throw new Error("Tried to get a localStorage path that wasn't a String.");
  }

  if (path[0] === '/') {
    path = path.substring(1);
  }

  return 'AV/' + AV.applicationId + '/' + path;
};
/**
 * Returns the unique string for this app on this machine.
 * Gets reset when localStorage is cleared.
 * @private
 */


AV._installationId = null;

AV._getInstallationId = function () {
  // See if it's cached in RAM.
  if (AV._installationId) {
    return _promise.default.resolve(AV._installationId);
  } // Try to get it from localStorage.


  var path = AV._getAVPath('installationId');

  return AV.localStorage.getItemAsync(path).then(function (_installationId) {
    AV._installationId = _installationId;

    if (!AV._installationId) {
      // It wasn't in localStorage, so create a new one.
      AV._installationId = _installationId = uuid();
      return AV.localStorage.setItemAsync(path, _installationId).then(function () {
        return _installationId;
      });
    }

    return _installationId;
  });
};

AV._subscriptionId = null;

AV._refreshSubscriptionId = function () {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AV._getAVPath('subscriptionId');
  var subscriptionId = AV._subscriptionId = uuid();
  return AV.localStorage.setItemAsync(path, subscriptionId).then(function () {
    return subscriptionId;
  });
};

AV._getSubscriptionId = function () {
  // See if it's cached in RAM.
  if (AV._subscriptionId) {
    return _promise.default.resolve(AV._subscriptionId);
  } // Try to get it from localStorage.


  var path = AV._getAVPath('subscriptionId');

  return AV.localStorage.getItemAsync(path).then(function (_subscriptionId) {
    AV._subscriptionId = _subscriptionId;

    if (!AV._subscriptionId) {
      // It wasn't in localStorage, so create a new one.
      _subscriptionId = AV._refreshSubscriptionId(path);
    }

    return _subscriptionId;
  });
};

AV._parseDate = parseDate; // A self-propagating extend function.

AV._extend = function (protoProps, classProps) {
  var child = inherits(this, protoProps, classProps);
  child.extend = this.extend;
  return child;
};
/**
 * Converts a value in a AV Object into the appropriate representation.
 * This is the JS equivalent of Java's AV.maybeReferenceAndEncode(Object)
 * if seenObjects is falsey. Otherwise any AV.Objects not in
 * seenObjects will be fully embedded rather than encoded
 * as a pointer.  This array will be used to prevent going into an infinite
 * loop because we have circular references.  If <seenObjects>
 * is set, then none of the AV Objects that are serialized can be dirty.
 * @private
 */


AV._encode = function (value, seenObjects, disallowObjects) {
  var full = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (value instanceof AV.Object) {
    if (disallowObjects) {
      throw new Error('AV.Objects not allowed here');
    }

    if (!seenObjects || _.include(seenObjects, value) || !value._hasData) {
      return value._toPointer();
    }

    return value._toFullJSON((0, _concat.default)(seenObjects).call(seenObjects, value), full);
  }

  if (value instanceof AV.ACL) {
    return value.toJSON();
  }

  if (_.isDate(value)) {
    return full ? {
      __type: 'Date',
      iso: value.toJSON()
    } : value.toJSON();
  }

  if (value instanceof AV.GeoPoint) {
    return value.toJSON();
  }

  if (_.isArray(value)) {
    return (0, _map.default)(_).call(_, value, function (x) {
      return AV._encode(x, seenObjects, disallowObjects, full);
    });
  }

  if (_.isRegExp(value)) {
    return value.source;
  }

  if (value instanceof AV.Relation) {
    return value.toJSON();
  }

  if (value instanceof AV.Op) {
    return value.toJSON();
  }

  if (value instanceof AV.File) {
    if (!value.url() && !value.id) {
      throw new Error('Tried to save an object containing an unsaved file.');
    }

    return value._toFullJSON(seenObjects, full);
  }

  if (_.isObject(value)) {
    return _.mapObject(value, function (v, k) {
      return AV._encode(v, seenObjects, disallowObjects, full);
    });
  }

  return value;
};
/**
 * The inverse function of AV._encode.
 * @private
 */


AV._decode = function (value, key) {
  if (!_.isObject(value) || _.isDate(value)) {
    return value;
  }

  if (_.isArray(value)) {
    return (0, _map.default)(_).call(_, value, function (v) {
      return AV._decode(v);
    });
  }

  if (value instanceof AV.Object) {
    return value;
  }

  if (value instanceof AV.File) {
    return value;
  }

  if (value instanceof AV.Op) {
    return value;
  }

  if (value instanceof AV.GeoPoint) {
    return value;
  }

  if (value instanceof AV.ACL) {
    return value;
  }

  if (key === 'ACL') {
    return new AV.ACL(value);
  }

  if (value.__op) {
    return AV.Op._decode(value);
  }

  var className;

  if (value.__type === 'Pointer') {
    className = value.className;

    var pointer = AV.Object._create(className);

    if ((0, _keys.default)(value).length > 3) {
      var v = _.clone(value);

      delete v.__type;
      delete v.className;

      pointer._finishFetch(v, true);
    } else {
      pointer._finishFetch({
        objectId: value.objectId
      }, false);
    }

    return pointer;
  }

  if (value.__type === 'Object') {
    // It's an Object included in a query result.
    className = value.className;

    var _v = _.clone(value);

    delete _v.__type;
    delete _v.className;

    var object = AV.Object._create(className);

    object._finishFetch(_v, true);

    return object;
  }

  if (value.__type === 'Date') {
    return AV._parseDate(value.iso);
  }

  if (value.__type === 'GeoPoint') {
    return new AV.GeoPoint({
      latitude: value.latitude,
      longitude: value.longitude
    });
  }

  if (value.__type === 'Relation') {
    if (!key) throw new Error('key missing decoding a Relation');
    var relation = new AV.Relation(null, key);
    relation.targetClassName = value.className;
    return relation;
  }

  if (value.__type === 'File') {
    var file = new AV.File(value.name);

    var _v2 = _.clone(value);

    delete _v2.__type;

    file._finishFetch(_v2);

    return file;
  }

  return _.mapObject(value, AV._decode);
};
/**
 * The inverse function of {@link AV.Object#toFullJSON}.
 * @since 3.0.0
 * @method
 * @param {Object}
 * return {AV.Object|AV.File|any}
 */


AV.parseJSON = AV._decode;
/**
 * Similar to JSON.parse, except that AV internal types will be used if possible.
 * Inverse to {@link AV.stringify}
 * @since 3.14.0
 * @param {string} text the string to parse.
 * @return {AV.Object|AV.File|any}
 */

AV.parse = function (text) {
  return AV.parseJSON(JSON.parse(text));
};
/**
 * Serialize a target containing AV.Object, similar to JSON.stringify.
 * Inverse to {@link AV.parse}
 * @since 3.14.0
 * @return {string}
 */


AV.stringify = function (target) {
  return (0, _stringify.default)(AV._encode(target, [], false, true));
};

AV._encodeObjectOrArray = function (value) {
  var encodeAVObject = function encodeAVObject(object) {
    if (object && object._toFullJSON) {
      object = object._toFullJSON([]);
    }

    return _.mapObject(object, function (value) {
      return AV._encode(value, []);
    });
  };

  if (_.isArray(value)) {
    return (0, _map.default)(value).call(value, function (object) {
      return encodeAVObject(object);
    });
  } else {
    return encodeAVObject(value);
  }
};

AV._arrayEach = _.each;
/**
 * Does a deep traversal of every item in object, calling func on every one.
 * @param {Object} object The object or array to traverse deeply.
 * @param {Function} func The function to call for every item. It will
 *     be passed the item as an argument. If it returns a truthy value, that
 *     value will replace the item in its parent container.
 * @returns {} the result of calling func on the top-level object itself.
 * @private
 */

AV._traverse = function (object, func, seen) {
  if (object instanceof AV.Object) {
    seen = seen || [];

    if ((0, _indexOf.default)(_).call(_, seen, object) >= 0) {
      // We've already visited this object in this call.
      return;
    }

    seen.push(object);

    AV._traverse(object.attributes, func, seen);

    return func(object);
  }

  if (object instanceof AV.Relation || object instanceof AV.File) {
    // Nothing needs to be done, but we don't want to recurse into the
    // object's parent infinitely, so we catch this case.
    return func(object);
  }

  if (_.isArray(object)) {
    _.each(object, function (child, index) {
      var newChild = AV._traverse(child, func, seen);

      if (newChild) {
        object[index] = newChild;
      }
    });

    return func(object);
  }

  if (_.isObject(object)) {
    AV._each(object, function (child, key) {
      var newChild = AV._traverse(child, func, seen);

      if (newChild) {
        object[key] = newChild;
      }
    });

    return func(object);
  }

  return func(object);
};
/**
 * This is like _.each, except:
 * * it doesn't work for so-called array-like objects,
 * * it does work for dictionaries with a "length" attribute.
 * @private
 */


AV._objectEach = AV._each = function (obj, callback) {
  if (_.isObject(obj)) {
    _.each((0, _keys2.default)(_).call(_, obj), function (key) {
      callback(obj[key], key);
    });
  } else {
    _.each(obj, callback);
  }
};
/**
 * @namespace
 * @since 3.14.0
 */


AV.debug = {
  /**
   * Enable debug
   */
  enable: function enable() {
    var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'leancloud*';
    return debug.enable(namespaces);
  },

  /**
   * Disable debug
   */
  disable: debug.disable
};
/**
 * Specify Adapters
 * @since 4.4.0
 * @function
 * @param {Adapters} newAdapters See {@link https://url.leanapp.cn/adapter-type-definitions @leancloud/adapter-types} for detailed definitions.
 */

AV.setAdapters = setAdapters;
module.exports = AV;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(108)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(383)(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _keys = _interopRequireDefault(__webpack_require__(53));

var _ = __webpack_require__(2);

var EventEmitter = __webpack_require__(223);

var _require = __webpack_require__(31),
    inherits = _require.inherits;

var AdapterManager = inherits(EventEmitter, {
  constructor: function constructor() {
    EventEmitter.apply(this);
    this._adapters = {};
  },
  getAdapter: function getAdapter(name) {
    var adapter = this._adapters[name];

    if (adapter === undefined) {
      throw new Error("".concat(name, " adapter is not configured"));
    }

    return adapter;
  },
  setAdapters: function setAdapters(newAdapters) {
    var _this = this;

    _.extend(this._adapters, newAdapters);

    (0, _keys.default)(_).call(_, newAdapters).forEach(function (name) {
      return _this.emit(name, newAdapters[name]);
    });
  }
});
var adapterManager = new AdapterManager();
module.exports = {
  getAdapter: adapterManager.getAdapter.bind(adapterManager),
  setAdapters: adapterManager.setAdapters.bind(adapterManager),
  adapterManager: adapterManager
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(72);

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
});


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var call = __webpack_require__(11);
var propertyIsEnumerableModule = __webpack_require__(145);
var createPropertyDescriptor = __webpack_require__(44);
var toIndexedObject = __webpack_require__(35);
var toPropertyKey = __webpack_require__(88);
var hasOwn = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(147);

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(32);
var store = __webpack_require__(111);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(58);
var call = __webpack_require__(11);
var anObject = __webpack_require__(21);
var tryToString = __webpack_require__(57);
var isArrayIteratorMethod = __webpack_require__(154);
var lengthOfArrayLike = __webpack_require__(36);
var isPrototypeOf = __webpack_require__(12);
var getIterator = __webpack_require__(155);
var getIteratorMethod = __webpack_require__(94);
var iteratorClose = __webpack_require__(156);

var $TypeError = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw $TypeError(tryToString(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }

  next = iterator.next;
  while (!(step = call(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf(ResultPrototype, result)) return result;
  } return new Result(false);
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var NativePromiseConstructor = __webpack_require__(62);
var isCallable = __webpack_require__(8);
var isForced = __webpack_require__(148);
var inspectSource = __webpack_require__(123);
var wellKnownSymbol = __webpack_require__(5);
var IS_BROWSER = __webpack_require__(277);
var IS_PURE = __webpack_require__(32);
var V8_VERSION = __webpack_require__(56);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var SPECIES = wellKnownSymbol('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable(global.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
  if (IS_PURE && !(NativePromisePrototype['catch'] && NativePromisePrototype['finally'])) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = new NativePromiseConstructor(function (resolve) { resolve(1); });
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT;
});

module.exports = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(286).charAt;
var toString = __webpack_require__(40);
var InternalStateModule = __webpack_require__(95);
var defineIterator = __webpack_require__(157);

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: toString(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasStringTagBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isIE11; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__ = __webpack_require__(294);



// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
var hasStringTagBug = (
      __WEBPACK_IMPORTED_MODULE_0__setup_js__["s" /* supportsDataView */] && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__["a" /* default */])(new DataView(new ArrayBuffer(8)))
    ),
    isIE11 = (typeof Map !== 'undefined' && Object(__WEBPACK_IMPORTED_MODULE_1__hasObjectTag_js__["a" /* default */])(new Map));


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = allKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__ = __webpack_require__(177);




// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["h" /* hasEnumBug */]) Object(__WEBPACK_IMPORTED_MODULE_2__collectNonEnumProps_js__["a" /* default */])(obj, keys);
  return keys;
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toPath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(186);



// Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.
function toPath(path) {
  return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].toPath(path);
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optimizeCb;
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = filter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(52);



// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(predicate, context);
  Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */])(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indexOf_js__ = __webpack_require__(202);




// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj)) obj = Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a" /* default */])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return Object(__WEBPACK_IMPORTED_MODULE_2__indexOf_js__["a" /* default */])(obj, item, fromIndex) >= 0;
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(54);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es-x/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toPrimitive = __webpack_require__(252);
var isSymbol = __webpack_require__(89);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);
var isCallable = __webpack_require__(8);
var isPrototypeOf = __webpack_require__(12);
var USE_SYMBOL_AS_UID = __webpack_require__(146);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(13);
var isCallable = __webpack_require__(8);
var toObject = __webpack_require__(33);
var sharedKey = __webpack_require__(91);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(150);

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject(O);
  if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(75);
var uid = __webpack_require__(112);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var uncurryThis = __webpack_require__(4);
var anObject = __webpack_require__(21);
var aPossiblePrototype = __webpack_require__(255);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var getMethod = __webpack_require__(110);
var Iterators = __webpack_require__(46);
var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return getMethod(it, ITERATOR)
    || getMethod(it, '@@iterator')
    || Iterators[classof(it)];
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(264);
var global = __webpack_require__(9);
var uncurryThis = __webpack_require__(4);
var isObject = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(39);
var hasOwn = __webpack_require__(13);
var shared = __webpack_require__(111);
var sharedKey = __webpack_require__(91);
var hiddenKeys = __webpack_require__(93);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(54);
var global = __webpack_require__(9);

module.exports = classof(global.process) == 'process';


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var fails = __webpack_require__(3);
var isCallable = __webpack_require__(8);
var classof = __webpack_require__(47);
var getBuiltIn = __webpack_require__(18);
var inspectSource = __webpack_require__(123);

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);

module.exports = uncurryThis([].slice);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matcher;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extendOwn_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMatch_js__ = __webpack_require__(178);



// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = Object(__WEBPACK_IMPORTED_MODULE_0__extendOwn_js__["a" /* default */])({}, attrs);
  return function(obj) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__isMatch_js__["a" /* default */])(obj, attrs);
  };
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__executeBound_js__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(23);




// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return Object(__WEBPACK_IMPORTED_MODULE_1__executeBound_js__["a" /* default */])(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = __WEBPACK_IMPORTED_MODULE_2__underscore_js__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (partial);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = group;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(52);



// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(iteratee, context);
    Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */])(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPropertyKey = __webpack_require__(88);
var definePropertyModule = __webpack_require__(34);
var createPropertyDescriptor = __webpack_require__(44);

module.exports = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var wellKnownSymbol = __webpack_require__(5);
var V8_VERSION = __webpack_require__(56);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(58);
var uncurryThis = __webpack_require__(4);
var IndexedObject = __webpack_require__(109);
var toObject = __webpack_require__(33);
var lengthOfArrayLike = __webpack_require__(36);
var arraySpeciesCreate = __webpack_require__(216);

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _typeof2 = _interopRequireDefault(__webpack_require__(141));

var _filter = _interopRequireDefault(__webpack_require__(436));

var _map = _interopRequireDefault(__webpack_require__(42));

var _keys = _interopRequireDefault(__webpack_require__(217));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _ = __webpack_require__(2);

var _require = __webpack_require__(441),
    timeout = _require.timeout;

var debug = __webpack_require__(69);

var debugRequest = debug('leancloud:request');
var debugRequestError = debug('leancloud:request:error');

var _require2 = __webpack_require__(70),
    getAdapter = _require2.getAdapter;

var requestsCount = 0;

var ajax = function ajax(_ref) {
  var method = _ref.method,
      url = _ref.url,
      query = _ref.query,
      data = _ref.data,
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers,
      time = _ref.timeout,
      onprogress = _ref.onprogress;

  if (query) {
    var _context, _context2, _context4;

    var queryString = (0, _filter.default)(_context = (0, _map.default)(_context2 = (0, _keys.default)(query)).call(_context2, function (key) {
      var _context3;

      var value = query[key];
      if (value === undefined) return undefined;
      var v = (0, _typeof2.default)(value) === 'object' ? (0, _stringify.default)(value) : value;
      return (0, _concat.default)(_context3 = "".concat(encodeURIComponent(key), "=")).call(_context3, encodeURIComponent(v));
    })).call(_context, function (qs) {
      return qs;
    }).join('&');
    url = (0, _concat.default)(_context4 = "".concat(url, "?")).call(_context4, queryString);
  }

  var count = requestsCount++;
  debugRequest('request(%d) %s %s %o %o %o', count, method, url, query, data, headers);
  var request = getAdapter('request');
  var promise = request(url, {
    method: method,
    headers: headers,
    data: data,
    onprogress: onprogress
  }).then(function (response) {
    debugRequest('response(%d) %d %O %o', count, response.status, response.data || response.text, response.header);

    if (response.ok === false) {
      var error = new Error();
      error.response = response;
      throw error;
    }

    return response.data;
  }).catch(function (error) {
    if (error.response) {
      if (!debug.enabled('leancloud:request')) {
        debugRequestError('request(%d) %s %s %o %o %o', count, method, url, query, data, headers);
      }

      debugRequestError('response(%d) %d %O %o', count, error.response.status, error.response.data || error.response.text, error.response.header);
      error.statusCode = error.response.status;
      error.responseText = error.response.text;
      error.response = error.response.data;
    }

    throw error;
  });
  return time ? timeout(promise, time) : promise;
};

module.exports = ajax;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(446);

/***/ }),
/* 108 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var fails = __webpack_require__(3);
var classof = __webpack_require__(54);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(28);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var defineGlobalProperty = __webpack_require__(254);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var isObject = __webpack_require__(17);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(151);
var enumBugKeys = __webpack_require__(118);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(116);
var lengthOfArrayLike = __webpack_require__(36);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(117);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var trunc = __webpack_require__(258);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(151);
var enumBugKeys = __webpack_require__(118);

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var isCallable = __webpack_require__(8);
var store = __webpack_require__(111);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return __WEBPACK_IMPORTED_MODULE_0__setup_js__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__restArguments_js__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return __WEBPACK_IMPORTED_MODULE_1__restArguments_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_2__isObject_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isNull_js__ = __webpack_require__(289);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return __WEBPACK_IMPORTED_MODULE_3__isNull_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_4__isUndefined_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_5__isBoolean_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isElement_js__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return __WEBPACK_IMPORTED_MODULE_6__isElement_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isString_js__ = __webpack_require__(125);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_7__isString_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__isNumber_js__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_8__isNumber_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__isDate_js__ = __webpack_require__(291);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return __WEBPACK_IMPORTED_MODULE_9__isDate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__ = __webpack_require__(292);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return __WEBPACK_IMPORTED_MODULE_10__isRegExp_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__isError_js__ = __webpack_require__(293);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return __WEBPACK_IMPORTED_MODULE_11__isError_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__ = __webpack_require__(170);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return __WEBPACK_IMPORTED_MODULE_12__isSymbol_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return __WEBPACK_IMPORTED_MODULE_13__isArrayBuffer_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__isDataView_js__ = __webpack_require__(126);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return __WEBPACK_IMPORTED_MODULE_14__isDataView_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__isArray_js__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_15__isArray_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__isFunction_js__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_16__isFunction_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__isArguments_js__ = __webpack_require__(127);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return __WEBPACK_IMPORTED_MODULE_17__isArguments_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__isFinite_js__ = __webpack_require__(295);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return __WEBPACK_IMPORTED_MODULE_18__isFinite_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__isNaN_js__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return __WEBPACK_IMPORTED_MODULE_19__isNaN_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return __WEBPACK_IMPORTED_MODULE_20__isTypedArray_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__ = __webpack_require__(297);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return __WEBPACK_IMPORTED_MODULE_21__isEmpty_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__isMatch_js__ = __webpack_require__(178);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return __WEBPACK_IMPORTED_MODULE_22__isMatch_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__isEqual_js__ = __webpack_require__(298);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return __WEBPACK_IMPORTED_MODULE_23__isEqual_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__isMap_js__ = __webpack_require__(300);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return __WEBPACK_IMPORTED_MODULE_24__isMap_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__ = __webpack_require__(301);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return __WEBPACK_IMPORTED_MODULE_25__isWeakMap_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__isSet_js__ = __webpack_require__(302);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return __WEBPACK_IMPORTED_MODULE_26__isSet_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__ = __webpack_require__(303);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return __WEBPACK_IMPORTED_MODULE_27__isWeakSet_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__keys_js__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_28__keys_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__allKeys_js__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return __WEBPACK_IMPORTED_MODULE_29__allKeys_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__values_js__ = __webpack_require__(64);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_30__values_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pairs_js__ = __webpack_require__(304);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_31__pairs_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__invert_js__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return __WEBPACK_IMPORTED_MODULE_32__invert_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__functions_js__ = __webpack_require__(180);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return __WEBPACK_IMPORTED_MODULE_33__functions_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__extend_js__ = __webpack_require__(181);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_34__extend_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_35__extendOwn_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__defaults_js__ = __webpack_require__(182);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return __WEBPACK_IMPORTED_MODULE_36__defaults_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__create_js__ = __webpack_require__(305);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_37__create_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__clone_js__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return __WEBPACK_IMPORTED_MODULE_38__clone_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__tap_js__ = __webpack_require__(306);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return __WEBPACK_IMPORTED_MODULE_39__tap_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__get_js__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return __WEBPACK_IMPORTED_MODULE_40__get_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__has_js__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return __WEBPACK_IMPORTED_MODULE_41__has_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__mapObject_js__ = __webpack_require__(308);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return __WEBPACK_IMPORTED_MODULE_42__mapObject_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__identity_js__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return __WEBPACK_IMPORTED_MODULE_43__identity_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__constant_js__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return __WEBPACK_IMPORTED_MODULE_44__constant_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__noop_js__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_45__noop_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__toPath_js__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return __WEBPACK_IMPORTED_MODULE_46__toPath_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__property_js__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return __WEBPACK_IMPORTED_MODULE_47__property_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return __WEBPACK_IMPORTED_MODULE_48__propertyOf_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__matcher_js__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_49__matcher_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__times_js__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "times", function() { return __WEBPACK_IMPORTED_MODULE_50__times_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__random_js__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return __WEBPACK_IMPORTED_MODULE_51__random_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__now_js__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return __WEBPACK_IMPORTED_MODULE_52__now_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__escape_js__ = __webpack_require__(311);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return __WEBPACK_IMPORTED_MODULE_53__escape_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__unescape_js__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return __WEBPACK_IMPORTED_MODULE_54__unescape_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return __WEBPACK_IMPORTED_MODULE_55__templateSettings_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__template_js__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return __WEBPACK_IMPORTED_MODULE_56__template_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__result_js__ = __webpack_require__(315);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return __WEBPACK_IMPORTED_MODULE_57__result_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__ = __webpack_require__(316);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return __WEBPACK_IMPORTED_MODULE_58__uniqueId_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__chain_js__ = __webpack_require__(317);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return __WEBPACK_IMPORTED_MODULE_59__chain_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__iteratee_js__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return __WEBPACK_IMPORTED_MODULE_60__iteratee_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__partial_js__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return __WEBPACK_IMPORTED_MODULE_61__partial_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__bind_js__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_62__bind_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__bindAll_js__ = __webpack_require__(318);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return __WEBPACK_IMPORTED_MODULE_63__bindAll_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__memoize_js__ = __webpack_require__(319);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return __WEBPACK_IMPORTED_MODULE_64__memoize_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__delay_js__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return __WEBPACK_IMPORTED_MODULE_65__delay_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__defer_js__ = __webpack_require__(320);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return __WEBPACK_IMPORTED_MODULE_66__defer_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__throttle_js__ = __webpack_require__(321);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return __WEBPACK_IMPORTED_MODULE_67__throttle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__debounce_js__ = __webpack_require__(322);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return __WEBPACK_IMPORTED_MODULE_68__debounce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__wrap_js__ = __webpack_require__(323);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return __WEBPACK_IMPORTED_MODULE_69__wrap_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__negate_js__ = __webpack_require__(136);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return __WEBPACK_IMPORTED_MODULE_70__negate_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__compose_js__ = __webpack_require__(324);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_71__compose_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__after_js__ = __webpack_require__(325);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "after", function() { return __WEBPACK_IMPORTED_MODULE_72__after_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__before_js__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "before", function() { return __WEBPACK_IMPORTED_MODULE_73__before_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__once_js__ = __webpack_require__(326);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_74__once_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__findKey_js__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return __WEBPACK_IMPORTED_MODULE_75__findKey_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__findIndex_js__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return __WEBPACK_IMPORTED_MODULE_76__findIndex_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return __WEBPACK_IMPORTED_MODULE_77__findLastIndex_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return __WEBPACK_IMPORTED_MODULE_78__sortedIndex_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__indexOf_js__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return __WEBPACK_IMPORTED_MODULE_79__indexOf_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__ = __webpack_require__(327);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return __WEBPACK_IMPORTED_MODULE_80__lastIndexOf_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__find_js__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return __WEBPACK_IMPORTED_MODULE_81__find_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__findWhere_js__ = __webpack_require__(328);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return __WEBPACK_IMPORTED_MODULE_82__findWhere_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__each_js__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return __WEBPACK_IMPORTED_MODULE_83__each_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__map_js__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return __WEBPACK_IMPORTED_MODULE_84__map_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__reduce_js__ = __webpack_require__(329);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return __WEBPACK_IMPORTED_MODULE_85__reduce_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__ = __webpack_require__(330);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return __WEBPACK_IMPORTED_MODULE_86__reduceRight_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__filter_js__ = __webpack_require__(84);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_87__filter_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__reject_js__ = __webpack_require__(331);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return __WEBPACK_IMPORTED_MODULE_88__reject_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__every_js__ = __webpack_require__(332);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "every", function() { return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return __WEBPACK_IMPORTED_MODULE_89__every_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__some_js__ = __webpack_require__(333);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return __WEBPACK_IMPORTED_MODULE_90__some_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__contains_js__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return __WEBPACK_IMPORTED_MODULE_91__contains_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__invoke_js__ = __webpack_require__(334);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return __WEBPACK_IMPORTED_MODULE_92__invoke_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pluck_js__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return __WEBPACK_IMPORTED_MODULE_93__pluck_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__where_js__ = __webpack_require__(335);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return __WEBPACK_IMPORTED_MODULE_94__where_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__max_js__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_95__max_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__min_js__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_96__min_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__shuffle_js__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_97__shuffle_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__sample_js__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return __WEBPACK_IMPORTED_MODULE_98__sample_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__sortBy_js__ = __webpack_require__(338);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_99__sortBy_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__groupBy_js__ = __webpack_require__(339);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return __WEBPACK_IMPORTED_MODULE_100__groupBy_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__indexBy_js__ = __webpack_require__(340);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return __WEBPACK_IMPORTED_MODULE_101__indexBy_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__countBy_js__ = __webpack_require__(341);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return __WEBPACK_IMPORTED_MODULE_102__countBy_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__partition_js__ = __webpack_require__(342);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_103__partition_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__toArray_js__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return __WEBPACK_IMPORTED_MODULE_104__toArray_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__size_js__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return __WEBPACK_IMPORTED_MODULE_105__size_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__pick_js__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return __WEBPACK_IMPORTED_MODULE_106__pick_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__omit_js__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return __WEBPACK_IMPORTED_MODULE_107__omit_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__first_js__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return __WEBPACK_IMPORTED_MODULE_108__first_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__initial_js__ = __webpack_require__(209);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return __WEBPACK_IMPORTED_MODULE_109__initial_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__last_js__ = __webpack_require__(348);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return __WEBPACK_IMPORTED_MODULE_110__last_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__rest_js__ = __webpack_require__(210);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return __WEBPACK_IMPORTED_MODULE_111__rest_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__compact_js__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return __WEBPACK_IMPORTED_MODULE_112__compact_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__flatten_js__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return __WEBPACK_IMPORTED_MODULE_113__flatten_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__without_js__ = __webpack_require__(351);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "without", function() { return __WEBPACK_IMPORTED_MODULE_114__without_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__uniq_js__ = __webpack_require__(212);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return __WEBPACK_IMPORTED_MODULE_115__uniq_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__union_js__ = __webpack_require__(352);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return __WEBPACK_IMPORTED_MODULE_116__union_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__intersection_js__ = __webpack_require__(353);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return __WEBPACK_IMPORTED_MODULE_117__intersection_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__difference_js__ = __webpack_require__(211);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return __WEBPACK_IMPORTED_MODULE_118__difference_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__unzip_js__ = __webpack_require__(213);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_119__unzip_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__zip_js__ = __webpack_require__(354);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_120__zip_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__object_js__ = __webpack_require__(355);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return __WEBPACK_IMPORTED_MODULE_121__object_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__range_js__ = __webpack_require__(356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_122__range_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__chunk_js__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return __WEBPACK_IMPORTED_MODULE_123__chunk_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__mixin_js__ = __webpack_require__(358);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_124__mixin_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__ = __webpack_require__(359);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_125__underscore_array_methods_js__["a"]; });
// Named Exports
// =============

//     Underscore.js 1.12.1
//     https://underscorejs.org
//     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup.



// Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.

// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.



























// Functions that treat an object as a dictionary of key-value pairs.
















// Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.



















// Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.















// Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.









// Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.
























// `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.



// Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.

















// OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('String'));


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__ = __webpack_require__(80);





var isDataView = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('DataView');

// In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.
function ie10IsDataView(obj) {
  return obj != null && Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(obj.getInt8) && Object(__WEBPACK_IMPORTED_MODULE_2__isArrayBuffer_js__["a" /* default */])(obj.buffer);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3__stringTagBug_js__["a" /* hasStringTagBug */] ? ie10IsDataView : isDataView);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(41);



var isArguments = Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a" /* default */])(obj, 'callee');
    };
  }
}());

/* harmony default export */ __webpack_exports__["a"] = (isArguments);


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__ = __webpack_require__(176);


// Internal helper to obtain the `byteLength` property of an object.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__shallowProperty_js__["a" /* default */])('byteLength'));


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ie11fingerprint;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return weakMapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setMethods; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allKeys_js__ = __webpack_require__(81);




// Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.
function ie11fingerprint(methods) {
  var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(methods);
  return function(obj) {
    if (obj == null) return false;
    // `Map`, `WeakMap` and `Set` have no enumerable keys.
    var keys = Object(__WEBPACK_IMPORTED_MODULE_2__allKeys_js__["a" /* default */])(obj);
    if (Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(keys)) return false;
    for (var i = 0; i < length; i++) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(obj[methods[i]])) return false;
    }
    // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.
    return methods !== weakMapMethods || !Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(obj[forEachName]);
  };
}

// In the interest of compact minification, we write
// each string in the fingerprints only once.
var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set'];

// `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.
var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createAssigner;
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(14);



// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */]));


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deepGet;
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = property;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deepGet_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(82);



// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a" /* default */])(path);
  return function(obj) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__deepGet_js__["a" /* default */])(obj, path);
  };
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ __webpack_exports__["a"] = (Date.now || function() {
  return new Date().getTime();
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = negate;
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(199);


// Returns the first index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__["a" /* default */])(1));


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pluck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__property_js__ = __webpack_require__(134);



// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map_js__["a" /* default */])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__property_js__["a" /* default */])(key));
}


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(228);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(229);

var _Symbol$iterator = __webpack_require__(431);

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

exports.f = wellKnownSymbol;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(475);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(235);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(55);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var fails = __webpack_require__(3);
var createElement = __webpack_require__(113);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(8);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var fails = __webpack_require__(3);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var hasOwn = __webpack_require__(13);
var toIndexedObject = __webpack_require__(35);
var indexOf = __webpack_require__(115).indexOf;
var hiddenKeys = __webpack_require__(93);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(149);
var definePropertyModule = __webpack_require__(34);
var anObject = __webpack_require__(21);
var toIndexedObject = __webpack_require__(35);
var objectKeys = __webpack_require__(120);

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(46);

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(11);
var aCallable = __webpack_require__(28);
var anObject = __webpack_require__(21);
var tryToString = __webpack_require__(57);
var getIteratorMethod = __webpack_require__(94);

var $TypeError = TypeError;

module.exports = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
  throw $TypeError(tryToString(argument) + ' is not iterable');
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(11);
var anObject = __webpack_require__(21);
var getMethod = __webpack_require__(110);

module.exports = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject(iterator);
  try {
    innerResult = getMethod(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject(innerResult);
  return value;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var IS_PURE = __webpack_require__(32);
var FunctionName = __webpack_require__(158);
var isCallable = __webpack_require__(8);
var createIteratorConstructor = __webpack_require__(265);
var getPrototypeOf = __webpack_require__(90);
var setPrototypeOf = __webpack_require__(92);
var setToStringTag = __webpack_require__(61);
var createNonEnumerableProperty = __webpack_require__(39);
var defineBuiltIn = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(46);
var IteratorsCore = __webpack_require__(159);

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators[NAME] = defaultIterator;

  return methods;
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(20);
var hasOwn = __webpack_require__(13);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);
var isCallable = __webpack_require__(8);
var create = __webpack_require__(59);
var getPrototypeOf = __webpack_require__(90);
var defineBuiltIn = __webpack_require__(48);
var wellKnownSymbol = __webpack_require__(5);
var IS_PURE = __webpack_require__(32);

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es-x/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable(IteratorPrototype[ITERATOR])) {
  defineBuiltIn(IteratorPrototype, ITERATOR, function () {
    return this;
  });
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var aConstructor = __webpack_require__(161);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aConstructor(S);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var isConstructor = __webpack_require__(98);
var tryToString = __webpack_require__(57);

var $TypeError = TypeError;

// `Assert: IsConstructor(argument) is true`
module.exports = function (argument) {
  if (isConstructor(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a constructor');
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var apply = __webpack_require__(71);
var bind = __webpack_require__(58);
var isCallable = __webpack_require__(8);
var hasOwn = __webpack_require__(13);
var fails = __webpack_require__(3);
var html = __webpack_require__(153);
var arraySlice = __webpack_require__(99);
var createElement = __webpack_require__(113);
var validateArgumentsLength = __webpack_require__(271);
var IS_IOS = __webpack_require__(163);
var IS_NODE = __webpack_require__(97);

var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var location, defer, channel, port;

try {
  // Deno throws a ReferenceError on `location` access without `--location` flag
  location = global.location;
} catch (error) { /* empty */ }

var run = function (id) {
  if (hasOwn(queue, id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(String(id), location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable(handler) ? handler : Function(handler);
    var args = arraySlice(arguments, 1);
    queue[++counter] = function () {
      apply(fn, undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    isCallable(global.postMessage) &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(45);

module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var NativePromiseConstructor = __webpack_require__(62);
var checkCorrectnessOfIteration = __webpack_require__(165);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(78).CONSTRUCTOR;

module.exports = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var isObject = __webpack_require__(17);
var newPromiseCapability = __webpack_require__(49);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isUndefined;
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isBoolean;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || __WEBPACK_IMPORTED_MODULE_0__setup_js__["t" /* toString */].call(obj) === '[object Boolean]';
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Number'));


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Symbol'));


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('ArrayBuffer'));


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNaN;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isNumber_js__ = __webpack_require__(169);



// Is the given value `NaN`?
function isNaN(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__isNumber_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["g" /* _isNaN */])(obj);
}


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isDataView_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant_js__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__ = __webpack_require__(296);





// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return __WEBPACK_IMPORTED_MODULE_0__setup_js__["l" /* nativeIsView */] ? (Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["l" /* nativeIsView */])(obj) && !Object(__WEBPACK_IMPORTED_MODULE_1__isDataView_js__["a" /* default */])(obj)) :
                Object(__WEBPACK_IMPORTED_MODULE_3__isBufferLike_js__["a" /* default */])(obj) && typedArrayPattern.test(__WEBPACK_IMPORTED_MODULE_0__setup_js__["t" /* toString */].call(obj));
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__setup_js__["r" /* supportsArrayBuffer */] ? isTypedArray : Object(__WEBPACK_IMPORTED_MODULE_2__constant_js__["a" /* default */])(false));


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = constant;
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createSizePropertyCheck;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= __WEBPACK_IMPORTED_MODULE_0__setup_js__["b" /* MAX_ARRAY_INDEX */];
  }
}


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowProperty;
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = collectNonEnumProps;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__has_js__ = __webpack_require__(41);




// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key]; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = __WEBPACK_IMPORTED_MODULE_0__setup_js__["n" /* nonEnumerableProps */].length;
  var constructor = obj.constructor;
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(constructor) && constructor.prototype || __WEBPACK_IMPORTED_MODULE_0__setup_js__["c" /* ObjProto */];

  // Constructor is a special case.
  var prop = 'constructor';
  if (Object(__WEBPACK_IMPORTED_MODULE_2__has_js__["a" /* default */])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = __WEBPACK_IMPORTED_MODULE_0__setup_js__["n" /* nonEnumerableProps */][nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isMatch;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(14);


// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a" /* default */])(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = invert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(14);


// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a" /* default */])(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = functions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(29);


// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(obj[key])) names.push(key);
  }
  return names.sort();
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(81);



// Extend a given object with all the properties in passed-in object(s).
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__["a" /* default */]));


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createAssigner_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allKeys_js__ = __webpack_require__(81);



// Fill in a given object with default properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createAssigner_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__allKeys_js__["a" /* default */], true));


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = baseCreate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);



// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(prototype)) return {};
  if (__WEBPACK_IMPORTED_MODULE_1__setup_js__["j" /* nativeCreate */]) return Object(__WEBPACK_IMPORTED_MODULE_1__setup_js__["j" /* nativeCreate */])(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clone;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isObject_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extend_js__ = __webpack_require__(181);




// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isObject_js__["a" /* default */])(obj)) return obj;
  return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a" /* default */])(obj) ? obj.slice() : Object(__WEBPACK_IMPORTED_MODULE_2__extend_js__["a" /* default */])({}, obj);
}


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toPath_js__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deepGet_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isUndefined_js__ = __webpack_require__(167);




// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.
function get(object, path, defaultValue) {
  var value = Object(__WEBPACK_IMPORTED_MODULE_1__deepGet_js__["a" /* default */])(object, Object(__WEBPACK_IMPORTED_MODULE_0__toPath_js__["a" /* default */])(path));
  return Object(__WEBPACK_IMPORTED_MODULE_2__isUndefined_js__["a" /* default */])(value) ? defaultValue : value;
}


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toPath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(51);



// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
function toPath(path) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a" /* default */])(path) ? path : [path];
}
__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].toPath = toPath;


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = baseIteratee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObject_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArray_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__matcher_js__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__property_js__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__ = __webpack_require__(83);








// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__identity_js__["a" /* default */];
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(value)) return Object(__WEBPACK_IMPORTED_MODULE_6__optimizeCb_js__["a" /* default */])(value, context, argCount);
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isObject_js__["a" /* default */])(value) && !Object(__WEBPACK_IMPORTED_MODULE_3__isArray_js__["a" /* default */])(value)) return Object(__WEBPACK_IMPORTED_MODULE_4__matcher_js__["a" /* default */])(value);
  return Object(__WEBPACK_IMPORTED_MODULE_5__property_js__["a" /* default */])(value);
}


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = iteratee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__ = __webpack_require__(187);



// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__baseIteratee_js__["a" /* default */])(value, context, Infinity);
}
__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].iteratee = iteratee;


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
// Predicate-generating function. Often useful outside of Underscore.
function noop(){}


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = random;
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createEscaper;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(14);


// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a" /* default */])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Internal list of HTML entities for escaping.
/* harmony default export */ __webpack_exports__["a"] = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);


// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = executeBound;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isObject_js__ = __webpack_require__(50);



// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__["a" /* default */])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isObject_js__["a" /* default */])(result)) return result;
  return self;
}


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__executeBound_js__ = __webpack_require__(194);




// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(func, context, args) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(func)) throw new TypeError('Bind must be called on a function');
  var bound = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(callArgs) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__executeBound_js__["a" /* default */])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);


// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}));


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = before;
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findKey;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(14);



// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(predicate, context);
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPredicateIndexFinder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(30);



// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(predicate, context);
    var length = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a" /* default */])(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__ = __webpack_require__(199);


// Returns the last index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createPredicateIndexFinder_js__["a" /* default */])(-1));


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortedIndex;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(30);



// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = Object(__WEBPACK_IMPORTED_MODULE_1__getLength_js__["a" /* default */])(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__ = __webpack_require__(203);




// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__createIndexFinder_js__["a" /* default */])(1, __WEBPACK_IMPORTED_MODULE_1__findIndex_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__sortedIndex_js__["a" /* default */]));


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createIndexFinder;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isNaN_js__ = __webpack_require__(172);




// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(__WEBPACK_IMPORTED_MODULE_1__setup_js__["q" /* slice */].call(array, i, length), __WEBPACK_IMPORTED_MODULE_2__isNaN_js__["a" /* default */]);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = find;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__findIndex_js__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findKey_js__ = __webpack_require__(198);




// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) ? __WEBPACK_IMPORTED_MODULE_1__findIndex_js__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_2__findKey_js__["a" /* default */];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createReduce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(83);




// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__["a" /* default */])(iteratee, context, 4), memo, initial);
  };
}


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(52);





// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a" /* default */])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a" /* default */])(iteratee, context);
    Object(__WEBPACK_IMPORTED_MODULE_3__each_js__["a" /* default */])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sample;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clone_js__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__random_js__ = __webpack_require__(190);






// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj)) obj = Object(__WEBPACK_IMPORTED_MODULE_2__values_js__["a" /* default */])(obj);
    return obj[Object(__WEBPACK_IMPORTED_MODULE_4__random_js__["a" /* default */])(obj.length - 1)];
  }
  var sample = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) ? Object(__WEBPACK_IMPORTED_MODULE_1__clone_js__["a" /* default */])(obj) : Object(__WEBPACK_IMPORTED_MODULE_2__values_js__["a" /* default */])(obj);
  var length = Object(__WEBPACK_IMPORTED_MODULE_3__getLength_js__["a" /* default */])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = Object(__WEBPACK_IMPORTED_MODULE_4__random_js__["a" /* default */])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__allKeys_js__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flatten_js__ = __webpack_require__(65);







// Return a copy of the object only containing the allowed properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(iteratee)) {
    if (keys.length > 1) iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__optimizeCb_js__["a" /* default */])(iteratee, keys[1]);
    keys = Object(__WEBPACK_IMPORTED_MODULE_3__allKeys_js__["a" /* default */])(obj);
  } else {
    iteratee = __WEBPACK_IMPORTED_MODULE_4__keyInObj_js__["a" /* default */];
    keys = Object(__WEBPACK_IMPORTED_MODULE_5__flatten_js__["a" /* default */])(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}));


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return __WEBPACK_IMPORTED_MODULE_0__setup_js__["q" /* slice */].call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rest;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return __WEBPACK_IMPORTED_MODULE_0__setup_js__["q" /* slice */].call(array, n == null || guard ? 1 : n);
}


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(85);





// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(array, rest) {
  rest = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__["a" /* default */])(rest, true, true);
  return Object(__WEBPACK_IMPORTED_MODULE_2__filter_js__["a" /* default */])(array, function(value){
    return !Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a" /* default */])(rest, value);
  });
}));


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniq;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isBoolean_js__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contains_js__ = __webpack_require__(85);





// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isBoolean_js__["a" /* default */])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = Object(__WEBPACK_IMPORTED_MODULE_1__cb_js__["a" /* default */])(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = Object(__WEBPACK_IMPORTED_MODULE_2__getLength_js__["a" /* default */])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a" /* default */])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!Object(__WEBPACK_IMPORTED_MODULE_3__contains_js__["a" /* default */])(result, value)) {
      result.push(value);
    }
  }
  return result;
}


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = unzip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__max_js__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pluck_js__ = __webpack_require__(138);




// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && Object(__WEBPACK_IMPORTED_MODULE_0__max_js__["a" /* default */])(array, __WEBPACK_IMPORTED_MODULE_1__getLength_js__["a" /* default */]).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = Object(__WEBPACK_IMPORTED_MODULE_2__pluck_js__["a" /* default */])(array, index);
  }
  return result;
}


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chainResult;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);


// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */])(obj).chain() : obj;
}


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var fails = __webpack_require__(3);
var isArray = __webpack_require__(86);
var isObject = __webpack_require__(17);
var toObject = __webpack_require__(33);
var lengthOfArrayLike = __webpack_require__(36);
var doesNotExceedSafeInteger = __webpack_require__(363);
var createProperty = __webpack_require__(103);
var arraySpeciesCreate = __webpack_require__(216);
var arrayMethodHasSpeciesSupport = __webpack_require__(104);
var wellKnownSymbol = __webpack_require__(5);
var V8_VERSION = __webpack_require__(56);

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(364);

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(369);

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(18);
var apply = __webpack_require__(71);
var call = __webpack_require__(11);
var uncurryThis = __webpack_require__(4);
var fails = __webpack_require__(3);
var isArray = __webpack_require__(86);
var isCallable = __webpack_require__(8);
var isObject = __webpack_require__(17);
var isSymbol = __webpack_require__(89);
var arraySlice = __webpack_require__(99);
var NATIVE_SYMBOL = __webpack_require__(55);

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
    }
  });
}


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(381);
var bytesToUuid = __webpack_require__(382);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(221);

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(385);

module.exports = parent;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = '4.15.2';

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _require = __webpack_require__(70),
    getAdapter = _require.getAdapter;

var syncApiNames = ['getItem', 'setItem', 'removeItem', 'clear'];
var localStorage = {
  get async() {
    return getAdapter('storage').async;
  }

}; // wrap sync apis with async ones.

syncApiNames.forEach(function (apiName) {
  localStorage[apiName + 'Async'] = function () {
    var storage = getAdapter('storage');
    return _promise.default.resolve(storage[apiName].apply(storage, arguments));
  };

  localStorage[apiName] = function () {
    var storage = getAdapter('storage');

    if (!storage.async) {
      return storage[apiName].apply(storage, arguments);
    }

    var error = new Error('Synchronous API [' + apiName + '] is not available in this runtime.');
    error.code = 'SYNC_API_NOT_AVAILABLE';
    throw error;
  };
});
module.exports = localStorage;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _concat = _interopRequireDefault(__webpack_require__(25));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var storage = __webpack_require__(224);

var AV = __webpack_require__(67);

var removeAsync = exports.removeAsync = storage.removeItemAsync.bind(storage);

var getCacheData = function getCacheData(cacheData, key) {
  try {
    cacheData = JSON.parse(cacheData);
  } catch (e) {
    return null;
  }

  if (cacheData) {
    var expired = cacheData.expiredAt && cacheData.expiredAt < Date.now();

    if (!expired) {
      return cacheData.value;
    }

    return removeAsync(key).then(function () {
      return null;
    });
  }

  return null;
};

exports.getAsync = function (key) {
  var _context;

  key = (0, _concat.default)(_context = "AV/".concat(AV.applicationId, "/")).call(_context, key);
  return storage.getItemAsync(key).then(function (cache) {
    return getCacheData(cache, key);
  });
};

exports.setAsync = function (key, value, ttl) {
  var _context2;

  var cache = {
    value: value
  };

  if (typeof ttl === 'number') {
    cache.expiredAt = Date.now() + ttl;
  }

  return storage.setItemAsync((0, _concat.default)(_context2 = "AV/".concat(AV.applicationId, "/")).call(_context2, key), (0, _stringify.default)(cache));
};

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(388);

module.exports = parent;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(391);

module.exports = parent;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(394);

module.exports = parent;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(400);
__webpack_require__(63);

module.exports = parent;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var toAbsoluteIndex = __webpack_require__(116);
var lengthOfArrayLike = __webpack_require__(36);
var createProperty = __webpack_require__(103);

var $Array = Array;
var max = Math.max;

module.exports = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(11);
var getBuiltIn = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(5);
var defineBuiltIn = __webpack_require__(48);

module.exports = function () {
  var Symbol = getBuiltIn('Symbol');
  var SymbolPrototype = Symbol && Symbol.prototype;
  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
    // `Symbol.prototype[@@toPrimitive]` method
    // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
    // eslint-disable-next-line no-unused-vars -- required for .length
    defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function (hint) {
      return call(valueOf, this);
    }, { arity: 1 });
  }
};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(55);

/* eslint-disable es-x/no-symbol -- safe */
module.exports = NATIVE_SYMBOL && !!Symbol['for'] && !!Symbol.keyFor;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(435);
__webpack_require__(63);

module.exports = parent;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(237);

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(454);

module.exports = parent;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(458);

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(4);
var aCallable = __webpack_require__(28);
var isObject = __webpack_require__(17);
var hasOwn = __webpack_require__(13);
var arraySlice = __webpack_require__(99);
var NATIVE_BIND = __webpack_require__(72);

var $Function = Function;
var concat = uncurryThis([].concat);
var join = uncurryThis([].join);
var factories = {};

var construct = function (C, argsLength, args) {
  if (!hasOwn(factories, argsLength)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    factories[argsLength] = $Function('C,a', 'return new C(' + join(list, ',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.es/ecma262/#sec-function.prototype.bind
module.exports = NATIVE_BIND ? $Function.bind : function bind(that /* , ...args */) {
  var F = aCallable(this);
  var Prototype = F.prototype;
  var partArgs = arraySlice(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = concat(partArgs, arraySlice(arguments));
    return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
  };
  if (isObject(Prototype)) boundFunction.prototype = Prototype;
  return boundFunction;
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(479);

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(482);

/***/ }),
/* 242 */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),
/* 243 */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _symbol = _interopRequireDefault(__webpack_require__(87));

var _iterator = _interopRequireDefault(__webpack_require__(144));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */


function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AV = __webpack_require__(246);

var useAdatpers = __webpack_require__(544);

module.exports = useAdatpers(AV);

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(247);

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

/*!
 * LeanCloud JavaScript SDK
 * https://leancloud.cn
 *
 * Copyright 2016 LeanCloud.cn, Inc.
 * The LeanCloud JavaScript SDK is freely distributable under the MIT license.
 */
var _ = __webpack_require__(2);

var AV = __webpack_require__(67);

AV._ = _;
AV.version = __webpack_require__(222);
AV.Promise = _promise.default;
AV.localStorage = __webpack_require__(224);
AV.Cache = __webpack_require__(225);
AV.Error = __webpack_require__(43);

__webpack_require__(390);

__webpack_require__(442)(AV);

__webpack_require__(443)(AV);

__webpack_require__(444)(AV);

__webpack_require__(445)(AV);

__webpack_require__(450)(AV);

__webpack_require__(451)(AV);

__webpack_require__(504)(AV);

__webpack_require__(530)(AV);

__webpack_require__(531)(AV);

__webpack_require__(533)(AV);

__webpack_require__(534)(AV);

__webpack_require__(535)(AV);

__webpack_require__(536)(AV);

__webpack_require__(537)(AV);

__webpack_require__(538)(AV);

__webpack_require__(539)(AV);

__webpack_require__(540)(AV);

__webpack_require__(541)(AV);

AV.Conversation = __webpack_require__(542);

__webpack_require__(543);

module.exports = AV;
/**
 * Options to controll the authentication for an operation
 * @typedef {Object} AuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 */

/**
 * Options to controll the authentication for an SMS operation
 * @typedef {Object} SMSAuthOptions
 * @property {String} [sessionToken] Specify a user to excute the operation as.
 * @property {AV.User} [user] Specify a user to excute the operation as. The user must have _sessionToken. This option will be ignored if sessionToken option provided.
 * @property {Boolean} [useMasterKey] Indicates whether masterKey is used for this operation. Only valid when masterKey is set.
 * @property {String} [validateToken] a validate token returned by {@link AV.Cloud.verifyCaptcha}
 */

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(249);
__webpack_require__(63);

module.exports = parent;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(250);
__webpack_require__(60);
__webpack_require__(96);
__webpack_require__(267);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(79);
var path = __webpack_require__(15);

module.exports = path.Promise;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(251);


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var isPrototypeOf = __webpack_require__(12);
var getPrototypeOf = __webpack_require__(90);
var setPrototypeOf = __webpack_require__(92);
var copyConstructorProperties = __webpack_require__(256);
var create = __webpack_require__(59);
var createNonEnumerableProperty = __webpack_require__(39);
var createPropertyDescriptor = __webpack_require__(44);
var clearErrorStack = __webpack_require__(260);
var installErrorCause = __webpack_require__(261);
var iterate = __webpack_require__(76);
var normalizeStringArgument = __webpack_require__(262);
var wellKnownSymbol = __webpack_require__(5);
var ERROR_STACK_INSTALLABLE = __webpack_require__(263);

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var $Error = Error;
var push = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var isInstance = isPrototypeOf(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf) {
    that = setPrototypeOf(new $Error(), isInstance ? getPrototypeOf(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create(AggregateErrorPrototype);
    createNonEnumerableProperty(that, TO_STRING_TAG, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
  installErrorCause(that, options);
  var errorsArray = [];
  iterate(errors, push, { that: errorsArray });
  createNonEnumerableProperty(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf) setPrototypeOf($AggregateError, $Error);
else copyConstructorProperties($AggregateError, $Error, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create($Error.prototype, {
  constructor: createPropertyDescriptor(1, $AggregateError),
  message: createPropertyDescriptor(1, ''),
  name: createPropertyDescriptor(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(11);
var isObject = __webpack_require__(17);
var isSymbol = __webpack_require__(89);
var getMethod = __webpack_require__(110);
var ordinaryToPrimitive = __webpack_require__(253);
var wellKnownSymbol = __webpack_require__(5);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var call = __webpack_require__(11);
var isCallable = __webpack_require__(8);
var isObject = __webpack_require__(17);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var isCallable = __webpack_require__(8);

var $String = String;
var $TypeError = TypeError;

module.exports = function (argument) {
  if (typeof argument == 'object' || isCallable(argument)) return argument;
  throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var hasOwn = __webpack_require__(13);
var ownKeys = __webpack_require__(257);
var getOwnPropertyDescriptorModule = __webpack_require__(73);
var definePropertyModule = __webpack_require__(34);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);
var uncurryThis = __webpack_require__(4);
var getOwnPropertyNamesModule = __webpack_require__(114);
var getOwnPropertySymbolsModule = __webpack_require__(119);
var anObject = __webpack_require__(21);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),
/* 258 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(117);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);

var $Error = Error;
var replace = uncurryThis(''.replace);

var TEST = (function (arg) { return String($Error(arg).stack); })('zxcasd');
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

module.exports = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
    while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var createNonEnumerableProperty = __webpack_require__(39);

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
module.exports = function (O, options) {
  if (isObject(options) && 'cause' in options) {
    createNonEnumerableProperty(O, 'cause', options.cause);
  }
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(40);

module.exports = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(3);
var createPropertyDescriptor = __webpack_require__(44);

module.exports = !fails(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
  return error.stack !== 7;
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var isCallable = __webpack_require__(8);
var inspectSource = __webpack_require__(123);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(159).IteratorPrototype;
var create = __webpack_require__(59);
var createPropertyDescriptor = __webpack_require__(44);
var setToStringTag = __webpack_require__(61);
var Iterators = __webpack_require__(46);

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(121);
var classof = __webpack_require__(47);

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(268);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var IS_PURE = __webpack_require__(32);
var IS_NODE = __webpack_require__(97);
var global = __webpack_require__(9);
var call = __webpack_require__(11);
var defineBuiltIn = __webpack_require__(48);
var setPrototypeOf = __webpack_require__(92);
var setToStringTag = __webpack_require__(61);
var setSpecies = __webpack_require__(269);
var aCallable = __webpack_require__(28);
var isCallable = __webpack_require__(8);
var isObject = __webpack_require__(17);
var anInstance = __webpack_require__(270);
var speciesConstructor = __webpack_require__(160);
var task = __webpack_require__(162).set;
var microtask = __webpack_require__(272);
var hostReportErrors = __webpack_require__(275);
var perform = __webpack_require__(77);
var Queue = __webpack_require__(276);
var InternalStateModule = __webpack_require__(95);
var NativePromiseConstructor = __webpack_require__(62);
var PromiseConstructorDetection = __webpack_require__(78);
var newPromiseCapabilityModule = __webpack_require__(49);

var PROMISE = 'Promise';
var FORCED_PROMISE_CONSTRUCTOR = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
var PromiseConstructor = NativePromiseConstructor;
var PromisePrototype = NativePromisePrototype;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;

var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;

var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && isCallable(then = it.then) ? then : false;
};

var callReaction = function (reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve = reaction.resolve;
  var reject = reaction.reject;
  var domain = reaction.domain;
  var result, then, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value); // can throw
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject(TypeError('Promise-chain cycle'));
      } else if (then = isThenable(result)) {
        call(then, result, resolve, reject);
      } else resolve(result);
    } else reject(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject(error);
  }
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function () {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  call(task, global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          call(then, value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED_PROMISE_CONSTRUCTOR) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromisePrototype);
    aCallable(executor);
    call(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };

  PromisePrototype = PromiseConstructor.prototype;

  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };

  // `Promise.prototype.then` method
  // https://tc39.es/ecma262/#sec-promise.prototype.then
  Internal.prototype = defineBuiltIn(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
    var state = getInternalPromiseState(this);
    var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
    state.parent = true;
    reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
    reaction.fail = isCallable(onRejected) && onRejected;
    reaction.domain = IS_NODE ? process.domain : undefined;
    if (state.state == PENDING) state.reactions.add(reaction);
    else microtask(function () {
      callReaction(reaction, state);
    });
    return reaction.promise;
  });

  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalPromiseState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && isCallable(NativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
    nativeThen = NativePromisePrototype.then;

    if (!NATIVE_PROMISE_SUBCLASSING) {
      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
      defineBuiltIn(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function (resolve, reject) {
          call(nativeThen, that, resolve, reject);
        }).then(onFulfilled, onRejected);
      // https://github.com/zloirock/core-js/issues/640
      }, { unsafe: true });
    }

    // make `.constructor === Promise` work for native promise-based APIs
    try {
      delete NativePromisePrototype.constructor;
    } catch (error) { /* empty */ }

    // make `instanceof Promise` work for native promise-based APIs
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype, PromisePrototype);
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(18);
var definePropertyModule = __webpack_require__(34);
var wellKnownSymbol = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(20);

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);

var $TypeError = TypeError;

module.exports = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError('Incorrect invocation');
};


/***/ }),
/* 271 */
/***/ (function(module, exports) {

var $TypeError = TypeError;

module.exports = function (passed, required) {
  if (passed < required) throw $TypeError('Not enough arguments');
  return passed;
};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var bind = __webpack_require__(58);
var getOwnPropertyDescriptor = __webpack_require__(73).f;
var macrotask = __webpack_require__(162).set;
var IS_IOS = __webpack_require__(163);
var IS_IOS_PEBBLE = __webpack_require__(273);
var IS_WEBOS_WEBKIT = __webpack_require__(274);
var IS_NODE = __webpack_require__(97);

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    // workaround of WebKit ~ iOS Safari 10.1 bug
    promise.constructor = Promise;
    then = bind(promise.then, promise);
    notify = function () {
      then(flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessage
  // - onreadystatechange
  // - setTimeout
  } else {
    // strange IE + webpack dev server bug - use .bind(global)
    macrotask = bind(macrotask, global);
    notify = function () {
      macrotask(flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(45);
var global = __webpack_require__(9);

module.exports = /ipad|iphone|ipod/i.test(userAgent) && global.Pebble !== undefined;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(45);

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length == 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),
/* 276 */
/***/ (function(module, exports) {

var Queue = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype = {
  add: function (item) {
    var entry = { item: item, next: null };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function () {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};

module.exports = Queue;


/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = typeof window == 'object' && typeof Deno != 'object';


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var aCallable = __webpack_require__(28);
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(77);
var iterate = __webpack_require__(76);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(164);

// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call($promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var IS_PURE = __webpack_require__(32);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(78).CONSTRUCTOR;
var NativePromiseConstructor = __webpack_require__(62);
var getBuiltIn = __webpack_require__(18);
var isCallable = __webpack_require__(8);
var defineBuiltIn = __webpack_require__(48);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR, real: true }, {
  'catch': function (onRejected) {
    return this.then(undefined, onRejected);
  }
});

// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['catch'];
  if (NativePromisePrototype['catch'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'catch', method, { unsafe: true });
  }
}


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var aCallable = __webpack_require__(28);
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(77);
var iterate = __webpack_require__(76);
var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(164);

// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function (promise) {
        call($promiseResolve, C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var newPromiseCapabilityModule = __webpack_require__(49);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(78).CONSTRUCTOR;

// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR }, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call(capability.reject, undefined, r);
    return capability.promise;
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(18);
var IS_PURE = __webpack_require__(32);
var NativePromiseConstructor = __webpack_require__(62);
var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(78).CONSTRUCTOR;
var promiseResolve = __webpack_require__(166);

var PromiseConstructorWrapper = getBuiltIn('Promise');
var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$({ target: 'Promise', stat: true, forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR }, {
  resolve: function resolve(x) {
    return promiseResolve(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor : this, x);
  }
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var aCallable = __webpack_require__(28);
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(77);
var iterate = __webpack_require__(76);

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$({ target: 'Promise', stat: true }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var call = __webpack_require__(11);
var aCallable = __webpack_require__(28);
var getBuiltIn = __webpack_require__(18);
var newPromiseCapabilityModule = __webpack_require__(49);
var perform = __webpack_require__(77);
var iterate = __webpack_require__(76);

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$({ target: 'Promise', stat: true }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var promiseResolve = aCallable(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var IS_PURE = __webpack_require__(32);
var NativePromiseConstructor = __webpack_require__(62);
var fails = __webpack_require__(3);
var getBuiltIn = __webpack_require__(18);
var isCallable = __webpack_require__(8);
var speciesConstructor = __webpack_require__(160);
var promiseResolve = __webpack_require__(166);
var defineBuiltIn = __webpack_require__(48);

var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;

// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var NON_GENERIC = !!NativePromiseConstructor && fails(function () {
  // eslint-disable-next-line unicorn/no-thenable -- required for testing
  NativePromisePrototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
});

// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
  'finally': function (onFinally) {
    var C = speciesConstructor(this, getBuiltIn('Promise'));
    var isFunction = isCallable(onFinally);
    return this.then(
      isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () { return x; });
      } : onFinally,
      isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () { throw e; });
      } : onFinally
    );
  }
});

// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!IS_PURE && isCallable(NativePromiseConstructor)) {
  var method = getBuiltIn('Promise').prototype['finally'];
  if (NativePromisePrototype['finally'] !== method) {
    defineBuiltIn(NativePromisePrototype, 'finally', method, { unsafe: true });
  }
}


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var toIntegerOrInfinity = __webpack_require__(117);
var toString = __webpack_require__(40);
var requireObjectCoercible = __webpack_require__(74);

var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var stringSlice = uncurryThis(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString(requireObjectCoercible($this));
    var position = toIntegerOrInfinity(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(124);
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```



// Add all of the Underscore functions to the wrapper object.
var _ = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["mixin"])(__WEBPACK_IMPORTED_MODULE_0__index_js__);
// Legacy Node.js API.
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["a"] = (_);


/***/ }),
/* 289 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNull;
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isElement;
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}


/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Date'));


/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('RegExp'));


/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Error'));


/***/ }),
/* 294 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Object'));


/***/ }),
/* 295 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isFinite;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSymbol_js__ = __webpack_require__(170);



// Is a given object a finite number?
function isFinite(obj) {
  return !Object(__WEBPACK_IMPORTED_MODULE_1__isSymbol_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_0__setup_js__["f" /* _isFinite */])(obj) && !isNaN(parseFloat(obj));
}


/***/ }),
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getByteLength_js__ = __webpack_require__(128);



// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createSizePropertyCheck_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__getByteLength_js__["a" /* default */]));


/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEmpty;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArray_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArguments_js__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keys_js__ = __webpack_require__(14);






// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  var length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(obj);
  if (typeof length == 'number' && (
    Object(__WEBPACK_IMPORTED_MODULE_1__isArray_js__["a" /* default */])(obj) || Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__["a" /* default */])(obj) || Object(__WEBPACK_IMPORTED_MODULE_3__isArguments_js__["a" /* default */])(obj)
  )) return length === 0;
  return Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__keys_js__["a" /* default */])(obj)) === 0;
}


/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getByteLength_js__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isDataView_js__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__keys_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__has_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toBufferView_js__ = __webpack_require__(299);











// We use this string twice, so give it a name for minification.
var tagDataView = '[object DataView]';

// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */]) a = a._wrapped;
  if (b instanceof __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */]) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = __WEBPACK_IMPORTED_MODULE_1__setup_js__["t" /* toString */].call(a);
  if (className !== __WEBPACK_IMPORTED_MODULE_1__setup_js__["t" /* toString */].call(b)) return false;
  // Work around a bug in IE 10 - Edge 13.
  if (__WEBPACK_IMPORTED_MODULE_5__stringTagBug_js__["a" /* hasStringTagBug */] && className == '[object Object]' && Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__["a" /* default */])(a)) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_6__isDataView_js__["a" /* default */])(b)) return false;
    className = tagDataView;
  }
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return __WEBPACK_IMPORTED_MODULE_1__setup_js__["d" /* SymbolProto */].valueOf.call(a) === __WEBPACK_IMPORTED_MODULE_1__setup_js__["d" /* SymbolProto */].valueOf.call(b);
    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq(Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__["a" /* default */])(a), Object(__WEBPACK_IMPORTED_MODULE_9__toBufferView_js__["a" /* default */])(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays && Object(__WEBPACK_IMPORTED_MODULE_3__isTypedArray_js__["a" /* default */])(a)) {
      var byteLength = Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__["a" /* default */])(a);
      if (byteLength !== Object(__WEBPACK_IMPORTED_MODULE_2__getByteLength_js__["a" /* default */])(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
      areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__["a" /* default */])(aCtor) && aCtor instanceof aCtor &&
                             Object(__WEBPACK_IMPORTED_MODULE_4__isFunction_js__["a" /* default */])(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__["a" /* default */])(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object(__WEBPACK_IMPORTED_MODULE_7__keys_js__["a" /* default */])(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(Object(__WEBPACK_IMPORTED_MODULE_8__has_js__["a" /* default */])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}


/***/ }),
/* 299 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toBufferView;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getByteLength_js__ = __webpack_require__(128);


// Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    Object(__WEBPACK_IMPORTED_MODULE_0__getByteLength_js__["a" /* default */])(bufferSource)
  );
}


/***/ }),
/* 300 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(129);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b" /* isIE11 */] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a" /* ie11fingerprint */])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["b" /* mapMethods */]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Map'));


/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(129);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b" /* isIE11 */] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a" /* ie11fingerprint */])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["d" /* weakMapMethods */]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('WeakMap'));


/***/ }),
/* 302 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__ = __webpack_require__(129);




/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1__stringTagBug_js__["b" /* isIE11 */] ? Object(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["a" /* ie11fingerprint */])(__WEBPACK_IMPORTED_MODULE_2__methodFingerprint_js__["c" /* setMethods */]) : Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('Set'));


/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tagTester_js__ = __webpack_require__(16);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__tagTester_js__["a" /* default */])('WeakSet'));


/***/ }),
/* 304 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pairs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__keys_js__ = __webpack_require__(14);


// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_0__keys_js__["a" /* default */])(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}


/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseCreate_js__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extendOwn_js__ = __webpack_require__(131);



// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = Object(__WEBPACK_IMPORTED_MODULE_0__baseCreate_js__["a" /* default */])(prototype);
  if (props) Object(__WEBPACK_IMPORTED_MODULE_1__extendOwn_js__["a" /* default */])(result, props);
  return result;
}


/***/ }),
/* 306 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = tap;
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}


/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = has;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(82);



// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a" /* default */])(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__["a" /* default */])(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}


/***/ }),
/* 308 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mapObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(14);



// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(iteratee, context);
  var _keys = Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),
/* 309 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = propertyOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop_js__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_js__ = __webpack_require__(185);



// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) return __WEBPACK_IMPORTED_MODULE_0__noop_js__["a" /* default */];
  return function(path) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__get_js__["a" /* default */])(obj, path);
  };
}


/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = times;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__ = __webpack_require__(83);


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__optimizeCb_js__["a" /* default */])(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}


/***/ }),
/* 311 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(192);



// Function for escaping strings to HTML interpolation.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__["a" /* default */]));


/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createEscaper_js__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__ = __webpack_require__(313);



// Function for unescaping strings from HTML interpolation.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createEscaper_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__unescapeMap_js__["a" /* default */]));


/***/ }),
/* 313 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__invert_js__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__escapeMap_js__ = __webpack_require__(192);



// Internal list of HTML entities for unescaping.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__invert_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__escapeMap_js__["a" /* default */]));


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = template;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaults_js__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templateSettings_js__ = __webpack_require__(193);




// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

var bareIdentifier = /^\s*(\w|\$)+\s*$/;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = Object(__WEBPACK_IMPORTED_MODULE_0__defaults_js__["a" /* default */])({}, settings, __WEBPACK_IMPORTED_MODULE_1__underscore_js__["a" /* default */].templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  var argument = settings.variable;
  if (argument) {
    if (!bareIdentifier.test(argument)) throw new Error(argument);
  } else {
    // If a variable is not specified, place data values in local scope.
    source = 'with(obj||{}){\n' + source + '}\n';
    argument = 'obj';
  }

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(argument, '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, __WEBPACK_IMPORTED_MODULE_1__underscore_js__["a" /* default */]);
  };

  // Provide the compiled source as a convenience for precompilation.
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = result;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toPath_js__ = __webpack_require__(82);



// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  path = Object(__WEBPACK_IMPORTED_MODULE_1__toPath_js__["a" /* default */])(path);
  var length = path.length;
  if (!length) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = Object(__WEBPACK_IMPORTED_MODULE_0__isFunction_js__["a" /* default */])(prop) ? prop.call(obj) : prop;
  }
  return obj;
}


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueId;
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chain;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);


// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = Object(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */])(obj);
  instance._chain = true;
  return instance;
}


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flatten_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bind_js__ = __webpack_require__(195);




// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(obj, keys) {
  keys = Object(__WEBPACK_IMPORTED_MODULE_1__flatten_js__["a" /* default */])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = Object(__WEBPACK_IMPORTED_MODULE_2__bind_js__["a" /* default */])(obj[key], obj);
  }
  return obj;
}));


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = memoize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__has_js__ = __webpack_require__(41);


// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__has_js__["a" /* default */])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__delay_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__underscore_js__ = __webpack_require__(23);




// Defers a function, scheduling it to run after the current call stack has
// cleared.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__delay_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__underscore_js__["a" /* default */], 1));


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__now_js__ = __webpack_require__(135);


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Object(__WEBPACK_IMPORTED_MODULE_0__now_js__["a" /* default */])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = Object(__WEBPACK_IMPORTED_MODULE_0__now_js__["a" /* default */])();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__now_js__ = __webpack_require__(135);



// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  var debounced = Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(_args) {
    context = this;
    args = _args;
    previous = Object(__WEBPACK_IMPORTED_MODULE_1__now_js__["a" /* default */])();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrap;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(101);


// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a" /* default */])(wrapper, func);
}


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = after;
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partial_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__before_js__ = __webpack_require__(197);



// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__partial_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__before_js__["a" /* default */], 2));


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__ = __webpack_require__(203);



// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__createIndexFinder_js__["a" /* default */])(-1, __WEBPACK_IMPORTED_MODULE_0__findLastIndex_js__["a" /* default */]));


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findWhere;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__find_js__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(100);



// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__find_js__["a" /* default */])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__["a" /* default */])(attrs));
}


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(205);


// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__["a" /* default */])(1));


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createReduce_js__ = __webpack_require__(205);


// The right-associative version of reduce, also known as `foldr`.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__createReduce_js__["a" /* default */])(-1));


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__negate_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(19);




// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a" /* default */])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__negate_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a" /* default */])(predicate)), context);
}


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = every;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(14);




// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(predicate, context);
  var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a" /* default */])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = some;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keys_js__ = __webpack_require__(14);




// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(predicate, context);
  var _keys = !Object(__WEBPACK_IMPORTED_MODULE_1__isArrayLike_js__["a" /* default */])(obj) && Object(__WEBPACK_IMPORTED_MODULE_2__keys_js__["a" /* default */])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deepGet_js__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toPath_js__ = __webpack_require__(82);






// Invoke a method (with arguments) on every item in a collection.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(obj, path, args) {
  var contextPath, func;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(path)) {
    func = path;
  } else {
    path = Object(__WEBPACK_IMPORTED_MODULE_4__toPath_js__["a" /* default */])(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return Object(__WEBPACK_IMPORTED_MODULE_2__map_js__["a" /* default */])(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = Object(__WEBPACK_IMPORTED_MODULE_3__deepGet_js__["a" /* default */])(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
}));


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = where;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher_js__ = __webpack_require__(100);



// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a" /* default */])(obj, Object(__WEBPACK_IMPORTED_MODULE_1__matcher_js__["a" /* default */])(attrs));
}


/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__values_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__each_js__ = __webpack_require__(52);





// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) ? obj : Object(__WEBPACK_IMPORTED_MODULE_1__values_js__["a" /* default */])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__cb_js__["a" /* default */])(iteratee, context);
    Object(__WEBPACK_IMPORTED_MODULE_3__each_js__["a" /* default */])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sample_js__ = __webpack_require__(207);


// Shuffle a collection.
function shuffle(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__sample_js__["a" /* default */])(obj, Infinity);
}


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sortBy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cb_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pluck_js__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_js__ = __webpack_require__(66);




// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = Object(__WEBPACK_IMPORTED_MODULE_0__cb_js__["a" /* default */])(iteratee, context);
  return Object(__WEBPACK_IMPORTED_MODULE_1__pluck_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__map_js__["a" /* default */])(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(41);



// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a" /* default */])(function(result, value, key) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a" /* default */])(result, key)) result[key].push(value); else result[key] = [value];
}));


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(102);


// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a" /* default */])(function(result, value, key) {
  result[key] = value;
}));


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__has_js__ = __webpack_require__(41);



// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a" /* default */])(function(result, value, key) {
  if (Object(__WEBPACK_IMPORTED_MODULE_1__has_js__["a" /* default */])(result, key)) result[key]++; else result[key] = 1;
}));


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__group_js__ = __webpack_require__(102);


// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__group_js__["a" /* default */])(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArray_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isString_js__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__identity_js__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__values_js__ = __webpack_require__(64);








// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isArray_js__["a" /* default */])(obj)) return __WEBPACK_IMPORTED_MODULE_1__setup_js__["q" /* slice */].call(obj);
  if (Object(__WEBPACK_IMPORTED_MODULE_2__isString_js__["a" /* default */])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if (Object(__WEBPACK_IMPORTED_MODULE_3__isArrayLike_js__["a" /* default */])(obj)) return Object(__WEBPACK_IMPORTED_MODULE_4__map_js__["a" /* default */])(obj, __WEBPACK_IMPORTED_MODULE_5__identity_js__["a" /* default */]);
  return Object(__WEBPACK_IMPORTED_MODULE_6__values_js__["a" /* default */])(obj);
}


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = size;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys_js__ = __webpack_require__(14);



// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return Object(__WEBPACK_IMPORTED_MODULE_0__isArrayLike_js__["a" /* default */])(obj) ? obj.length : Object(__WEBPACK_IMPORTED_MODULE_1__keys_js__["a" /* default */])(obj).length;
}


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = keyInObj;
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isFunction_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__negate_js__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__flatten_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contains_js__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pick_js__ = __webpack_require__(208);








// Return a copy of the object without the disallowed properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(obj, keys) {
  var iteratee = keys[0], context;
  if (Object(__WEBPACK_IMPORTED_MODULE_1__isFunction_js__["a" /* default */])(iteratee)) {
    iteratee = Object(__WEBPACK_IMPORTED_MODULE_2__negate_js__["a" /* default */])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = Object(__WEBPACK_IMPORTED_MODULE_3__map_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__flatten_js__["a" /* default */])(keys, false, false), String);
    iteratee = function(value, key) {
      return !Object(__WEBPACK_IMPORTED_MODULE_5__contains_js__["a" /* default */])(keys, key);
    };
  }
  return Object(__WEBPACK_IMPORTED_MODULE_6__pick_js__["a" /* default */])(obj, iteratee, context);
}));


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = first;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__initial_js__ = __webpack_require__(209);


// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return Object(__WEBPACK_IMPORTED_MODULE_0__initial_js__["a" /* default */])(array, array.length - n);
}


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = last;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rest_js__ = __webpack_require__(210);


// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return Object(__WEBPACK_IMPORTED_MODULE_0__rest_js__["a" /* default */])(array, Math.max(0, array.length - n));
}


/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compact;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter_js__ = __webpack_require__(84);


// Trim out all falsy values from an array.
function compact(array) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__filter_js__["a" /* default */])(array, Boolean);
}


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = flatten;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flatten_js__ = __webpack_require__(65);


// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__flatten_js__["a" /* default */])(array, depth, false);
}


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__difference_js__ = __webpack_require__(211);



// Return a version of the array that does not contain the specified value(s).
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(array, otherArrays) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__difference_js__["a" /* default */])(array, otherArrays);
}));


/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uniq_js__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flatten_js__ = __webpack_require__(65);




// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(function(arrays) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__uniq_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__flatten_js__["a" /* default */])(arrays, true, true));
}));


/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = intersection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contains_js__ = __webpack_require__(85);



// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(array); i < length; i++) {
    var item = array[i];
    if (Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__["a" /* default */])(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_1__contains_js__["a" /* default */])(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}


/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__restArguments_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unzip_js__ = __webpack_require__(213);



// Zip together multiple lists into a single array -- elements that share
// an index go together.
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__restArguments_js__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__unzip_js__["a" /* default */]));


/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = object;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getLength_js__ = __webpack_require__(30);


// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = Object(__WEBPACK_IMPORTED_MODULE_0__getLength_js__["a" /* default */])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = range;
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = chunk;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup_js__ = __webpack_require__(6);


// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(__WEBPACK_IMPORTED_MODULE_0__setup_js__["q" /* slice */].call(array, i, i += count));
  }
  return result;
}


/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_js__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chainResult_js__ = __webpack_require__(214);






// Add your own custom functions to the Underscore object.
function mixin(obj) {
  Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__functions_js__["a" /* default */])(obj), function(name) {
    var func = __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */][name] = obj[name];
    __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].prototype[name] = function() {
      var args = [this._wrapped];
      __WEBPACK_IMPORTED_MODULE_3__setup_js__["o" /* push */].apply(args, arguments);
      return Object(__WEBPACK_IMPORTED_MODULE_4__chainResult_js__["a" /* default */])(this, func.apply(__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */], args));
    };
  });
  return __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */];
}


/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__underscore_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each_js__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chainResult_js__ = __webpack_require__(214);





// Add all mutator `Array` functions to the wrapper.
Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* ArrayProto */][name];
  __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__["a" /* default */])(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
Object(__WEBPACK_IMPORTED_MODULE_1__each_js__["a" /* default */])(['concat', 'join', 'slice'], function(name) {
  var method = __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* ArrayProto */][name];
  __WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return Object(__WEBPACK_IMPORTED_MODULE_3__chainResult_js__["a" /* default */])(this, obj);
  };
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__underscore_js__["a" /* default */]);


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(361);

module.exports = parent;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(362);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.concat;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat) ? method : own;
};


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(215);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').concat;


/***/ }),
/* 363 */
/***/ (function(module, exports) {

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(86);
var isConstructor = __webpack_require__(98);
var isObject = __webpack_require__(17);
var wellKnownSymbol = __webpack_require__(5);

var SPECIES = wellKnownSymbol('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(366);

module.exports = parent;


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(367);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;
};


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(368);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $map = __webpack_require__(105).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(104);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(370);

module.exports = parent;


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(371);
var path = __webpack_require__(15);

module.exports = path.Object.keys;


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var toObject = __webpack_require__(33);
var nativeKeys = __webpack_require__(120);
var fails = __webpack_require__(3);

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(373);

module.exports = parent;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(218);
var path = __webpack_require__(15);
var apply = __webpack_require__(71);

// eslint-disable-next-line es-x/no-json -- safe
if (!path.JSON) path.JSON = { stringify: JSON.stringify };

// eslint-disable-next-line no-unused-vars -- required for `.length`
module.exports = function stringify(it, replacer, space) {
  return apply(path.JSON.stringify, null, arguments);
};


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(375);

module.exports = parent;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(376);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.indexOf;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf) ? method : own;
};


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(377);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').indexOf;


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable es-x/no-array-prototype-indexof -- required for testing */
var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(4);
var $IndexOf = __webpack_require__(115).indexOf;
var arrayMethodIsStrict = __webpack_require__(139);

var un$IndexOf = uncurryThis([].indexOf);

var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0
      : $IndexOf(this, searchElement, fromIndex);
  }
});


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
var classof = __webpack_require__(47);
var hasOwn = __webpack_require__(13);
var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(379);

var ArrayPrototype = Array.prototype;

var DOMIterables = {
  DOMTokenList: true,
  NodeList: true
};

module.exports = function (it) {
  var own = it.keys;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.keys)
    || hasOwn(DOMIterables, classof(it)) ? method : own;
};


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(380);

module.exports = parent;


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(96);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').keys;


/***/ }),
/* 381 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 382 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(384);
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),
/* 384 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(386);
var path = __webpack_require__(15);

module.exports = path.Object.getPrototypeOf;


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var fails = __webpack_require__(3);
var toObject = __webpack_require__(33);
var nativeGetPrototypeOf = __webpack_require__(90);
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(150);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(389);
var path = __webpack_require__(15);

module.exports = path.Object.setPrototypeOf;


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var setPrototypeOf = __webpack_require__(92);

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _slice = _interopRequireDefault(__webpack_require__(38));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _defineProperty = _interopRequireDefault(__webpack_require__(140));

var AV = __webpack_require__(67);

var AppRouter = __webpack_require__(396);

var _require = __webpack_require__(31),
    isNullOrUndefined = _require.isNullOrUndefined;

var _require2 = __webpack_require__(2),
    extend = _require2.extend,
    isObject = _require2.isObject,
    isEmpty = _require2.isEmpty;

var isCNApp = function isCNApp(appId) {
  return (0, _slice.default)(appId).call(appId, -9) !== '-MdYXbMMI';
};

var fillServerURLs = function fillServerURLs(url) {
  return {
    push: url,
    stats: url,
    engine: url,
    api: url,
    rtm: url
  };
};

function getDefaultServerURLs(appId) {
  var _context, _context2, _context3, _context4, _context5;

  if (isCNApp(appId)) {
    return {};
  }

  var id = (0, _slice.default)(appId).call(appId, 0, 8).toLowerCase();
  var domain = 'lncldglobal.com';
  return {
    push: (0, _concat.default)(_context = "https://".concat(id, ".push.")).call(_context, domain),
    stats: (0, _concat.default)(_context2 = "https://".concat(id, ".stats.")).call(_context2, domain),
    engine: (0, _concat.default)(_context3 = "https://".concat(id, ".engine.")).call(_context3, domain),
    api: (0, _concat.default)(_context4 = "https://".concat(id, ".api.")).call(_context4, domain),
    rtm: (0, _concat.default)(_context5 = "https://".concat(id, ".rtm.")).call(_context5, domain)
  };
}

var _disableAppRouter = false;
var _initialized = false;
/**
 * URLs for services
 * @typedef {Object} ServerURLs
 * @property {String} [api] serverURL for API service
 * @property {String} [engine] serverURL for engine service
 * @property {String} [stats] serverURL for stats service
 * @property {String} [push] serverURL for push service
 * @property {String} [rtm] serverURL for LiveQuery service
 */

/**
 * Call this method first to set up your authentication tokens for AV.
 * You can get your app keys from the LeanCloud dashboard on http://leancloud.cn .
 * @function AV.init
 * @param {Object} options
 * @param {String} options.appId application id
 * @param {String} options.appKey application key
 * @param {String} [options.masterKey] application master key
 * @param {Boolean} [options.production]
 * @param {String|ServerURLs} [options.serverURL] URLs for services. if a string was given, it will be applied for all services.
 * @param {Boolean} [options.disableCurrentUser]
 */

AV.init = function init(options) {
  if (!isObject(options)) {
    return AV.init({
      appId: options,
      appKey: arguments.length <= 1 ? undefined : arguments[1],
      masterKey: arguments.length <= 2 ? undefined : arguments[2]
    });
  }

  var appId = options.appId,
      appKey = options.appKey,
      masterKey = options.masterKey,
      hookKey = options.hookKey,
      serverURL = options.serverURL,
      _options$serverURLs = options.serverURLs,
      serverURLs = _options$serverURLs === void 0 ? serverURL : _options$serverURLs,
      disableCurrentUser = options.disableCurrentUser,
      production = options.production,
      realtime = options.realtime;
  if (_initialized) console.warn('Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations.');
  if (!appId) throw new TypeError('appId must be a string');
  if (!appKey) throw new TypeError('appKey must be a string');
  if ("Browser" !== 'NODE_JS' && masterKey) console.warn('MasterKey is not supposed to be used at client side.');

  if (isCNApp(appId)) {
    if (!serverURLs && isEmpty(AV._config.serverURLs)) {
      throw new TypeError("serverURL option is required for apps from CN region");
    }
  }

  if (appId !== AV._config.applicationId) {
    // overwrite all keys when reinitializing as a new app
    AV._config.masterKey = masterKey;
    AV._config.hookKey = hookKey;
  } else {
    if (masterKey) AV._config.masterKey = masterKey;
    if (hookKey) AV._config.hookKey = hookKey;
  }

  AV._config.applicationId = appId;
  AV._config.applicationKey = appKey;

  if (!isNullOrUndefined(production)) {
    AV.setProduction(production);
  }

  if (typeof disableCurrentUser !== 'undefined') AV._config.disableCurrentUser = disableCurrentUser;
  var disableAppRouter = _disableAppRouter || typeof serverURLs !== 'undefined';

  if (!disableAppRouter) {
    AV._appRouter = new AppRouter(AV);
  }

  AV._setServerURLs(extend({}, getDefaultServerURLs(appId), AV._config.serverURLs, typeof serverURLs === 'string' ? fillServerURLs(serverURLs) : serverURLs), disableAppRouter);

  if (realtime) {
    AV._config.realtime = realtime;
  } else if (AV._sharedConfig.liveQueryRealtime) {
    var _AV$_config$serverURL = AV._config.serverURLs,
        api = _AV$_config$serverURL.api,
        rtm = _AV$_config$serverURL.rtm;
    AV._config.realtime = new AV._sharedConfig.liveQueryRealtime({
      appId: appId,
      appKey: appKey,
      server: {
        api: api,
        RTMRouter: rtm
      }
    });
  }

  _initialized = true;
}; // If we're running in node.js, allow using the master key.


if (false) {
  AV.Cloud = AV.Cloud || {};
  /**
   * Switches the LeanCloud SDK to using the Master key.  The Master key grants
   * priveleged access to the data in LeanCloud and can be used to bypass ACLs and
   * other restrictions that are applied to the client SDKs.
   * <p><strong><em>Available in Cloud Code and Node.js only.</em></strong>
   * </p>
   */

  AV.Cloud.useMasterKey = function () {
    AV._config.useMasterKey = true;
  };
}
/**
 * Call this method to set production environment variable.
 * @function AV.setProduction
 * @param {Boolean} production True is production environment,and
 *  it's true by default.
 */


AV.setProduction = function (production) {
  if (!isNullOrUndefined(production)) {
    AV._config.production = production ? 1 : 0;
  } else {
    // change to default value
    AV._config.production = null;
  }
};

AV._setServerURLs = function (urls) {
  var disableAppRouter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof urls !== 'string') {
    extend(AV._config.serverURLs, urls);
  } else {
    AV._config.serverURLs = fillServerURLs(urls);
  }

  if (disableAppRouter) {
    if (AV._appRouter) {
      AV._appRouter.disable();
    } else {
      _disableAppRouter = true;
    }
  }
};
/**
 * Set server URLs for services.
 * @function AV.setServerURL
 * @since 4.3.0
 * @param {String|ServerURLs} urls URLs for services. if a string was given, it will be applied for all services.
 * You can also set them when initializing SDK with `options.serverURL`
 */


AV.setServerURL = function (urls) {
  return AV._setServerURLs(urls);
};

AV.setServerURLs = AV.setServerURL;

AV.keepErrorRawMessage = function (value) {
  AV._sharedConfig.keepErrorRawMessage = value;
};
/**
 * Set a deadline for requests to complete.
 * Note that file upload requests are not affected.
 * @function AV.setRequestTimeout
 * @since 3.6.0
 * @param {number} ms
 */


AV.setRequestTimeout = function (ms) {
  AV._config.requestTimeout = ms;
}; // backword compatible


AV.initialize = AV.init;

var defineConfig = function defineConfig(property) {
  return (0, _defineProperty.default)(AV, property, {
    get: function get() {
      return AV._config[property];
    },
    set: function set(value) {
      AV._config[property] = value;
    }
  });
};

['applicationId', 'applicationKey', 'masterKey', 'hookKey'].forEach(defineConfig);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(392);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.slice;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice) ? method : own;
};


/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(393);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').slice;


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var isArray = __webpack_require__(86);
var isConstructor = __webpack_require__(98);
var isObject = __webpack_require__(17);
var toAbsoluteIndex = __webpack_require__(116);
var lengthOfArrayLike = __webpack_require__(36);
var toIndexedObject = __webpack_require__(35);
var createProperty = __webpack_require__(103);
var wellKnownSymbol = __webpack_require__(5);
var arrayMethodHasSpeciesSupport = __webpack_require__(104);
var un$Slice = __webpack_require__(99);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var $Array = Array;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === $Array || Constructor === undefined) {
        return un$Slice(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? $Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(395);
var path = __webpack_require__(15);

var Object = path.Object;

var defineProperty = module.exports = function defineProperty(it, key, desc) {
  return Object.defineProperty(it, key, desc);
};

if (Object.defineProperty.sham) defineProperty.sham = true;


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(20);
var defineProperty = __webpack_require__(34).f;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
$({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
  defineProperty: defineProperty
});


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ajax = __webpack_require__(106);

var Cache = __webpack_require__(225);

function AppRouter(AV) {
  var _this = this;

  this.AV = AV;
  this.lockedUntil = 0;
  Cache.getAsync('serverURLs').then(function (data) {
    if (_this.disabled) return;
    if (!data) return _this.lock(0);
    var serverURLs = data.serverURLs,
        lockedUntil = data.lockedUntil;

    _this.AV._setServerURLs(serverURLs, false);

    _this.lockedUntil = lockedUntil;
  }).catch(function () {
    return _this.lock(0);
  });
}

AppRouter.prototype.disable = function disable() {
  this.disabled = true;
};

AppRouter.prototype.lock = function lock(ttl) {
  this.lockedUntil = Date.now() + ttl;
};

AppRouter.prototype.refresh = function refresh() {
  var _this2 = this;

  if (this.disabled) return;
  if (Date.now() < this.lockedUntil) return;
  this.lock(10);
  var url = 'https://app-router.com/2/route';
  return ajax({
    method: 'get',
    url: url,
    query: {
      appId: this.AV.applicationId
    }
  }).then(function (servers) {
    if (_this2.disabled) return;
    var ttl = servers.ttl;
    if (!ttl) throw new Error('missing ttl');
    ttl = ttl * 1000;
    var protocal = 'https://';
    var serverURLs = {
      push: protocal + servers.push_server,
      stats: protocal + servers.stats_server,
      engine: protocal + servers.engine_server,
      api: protocal + servers.api_server
    };

    _this2.AV._setServerURLs(serverURLs, false);

    _this2.lock(ttl);

    return Cache.setAsync('serverURLs', {
      serverURLs: serverURLs,
      lockedUntil: _this2.lockedUntil
    }, ttl);
  }).catch(function (error) {
    // bypass all errors
    console.warn("refresh server URLs failed: ".concat(error.message));

    _this2.lock(600);
  });
};

module.exports = AppRouter;

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(398);


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(399);
__webpack_require__(423);
__webpack_require__(424);
__webpack_require__(425);
__webpack_require__(426);
__webpack_require__(427);
// TODO: Remove from `core-js@4`
__webpack_require__(428);
__webpack_require__(429);
__webpack_require__(430);

module.exports = parent;


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(230);

module.exports = parent;


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(215);
__webpack_require__(96);
__webpack_require__(401);
__webpack_require__(407);
__webpack_require__(408);
__webpack_require__(409);
__webpack_require__(410);
__webpack_require__(234);
__webpack_require__(411);
__webpack_require__(412);
__webpack_require__(413);
__webpack_require__(414);
__webpack_require__(415);
__webpack_require__(416);
__webpack_require__(417);
__webpack_require__(418);
__webpack_require__(419);
__webpack_require__(420);
__webpack_require__(421);
__webpack_require__(422);
var path = __webpack_require__(15);

module.exports = path.Symbol;


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove this module from `core-js@4` since it's split to modules listed below
__webpack_require__(402);
__webpack_require__(404);
__webpack_require__(405);
__webpack_require__(218);
__webpack_require__(406);


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var global = __webpack_require__(9);
var call = __webpack_require__(11);
var uncurryThis = __webpack_require__(4);
var IS_PURE = __webpack_require__(32);
var DESCRIPTORS = __webpack_require__(20);
var NATIVE_SYMBOL = __webpack_require__(55);
var fails = __webpack_require__(3);
var hasOwn = __webpack_require__(13);
var isPrototypeOf = __webpack_require__(12);
var anObject = __webpack_require__(21);
var toIndexedObject = __webpack_require__(35);
var toPropertyKey = __webpack_require__(88);
var $toString = __webpack_require__(40);
var createPropertyDescriptor = __webpack_require__(44);
var nativeObjectCreate = __webpack_require__(59);
var objectKeys = __webpack_require__(120);
var getOwnPropertyNamesModule = __webpack_require__(114);
var getOwnPropertyNamesExternal = __webpack_require__(403);
var getOwnPropertySymbolsModule = __webpack_require__(119);
var getOwnPropertyDescriptorModule = __webpack_require__(73);
var definePropertyModule = __webpack_require__(34);
var definePropertiesModule = __webpack_require__(152);
var propertyIsEnumerableModule = __webpack_require__(145);
var defineBuiltIn = __webpack_require__(48);
var shared = __webpack_require__(75);
var sharedKey = __webpack_require__(91);
var hiddenKeys = __webpack_require__(93);
var uid = __webpack_require__(112);
var wellKnownSymbol = __webpack_require__(5);
var wrappedWellKnownSymbolModule = __webpack_require__(142);
var defineWellKnownSymbol = __webpack_require__(7);
var defineSymbolToPrimitive = __webpack_require__(232);
var setToStringTag = __webpack_require__(61);
var InternalStateModule = __webpack_require__(95);
var $forEach = __webpack_require__(105).forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';

var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);

var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
var TypeError = global.TypeError;
var QObject = global.QObject;
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var push = uncurryThis([].push);

var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var WellKnownSymbolsStore = shared('wks');

// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPropertyKey(P);
  anObject(Attributes);
  if (hasOwn(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!hasOwn(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (hasOwn(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPropertyKey(V);
  var enumerable = call(nativePropertyIsEnumerable, this, P);
  if (this === ObjectPrototype && hasOwn(AllSymbols, P) && !hasOwn(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !hasOwn(this, P) || !hasOwn(AllSymbols, P) || hasOwn(this, HIDDEN) && this[HIDDEN][P]
    ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPropertyKey(P);
  if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
  });
  return result;
};

var $getOwnPropertySymbols = function (O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
      push(result, AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (isPrototypeOf(SymbolPrototype, this)) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
      if (hasOwn(this, HIDDEN) && hasOwn(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  SymbolPrototype = $Symbol[PROTOTYPE];

  defineBuiltIn(SymbolPrototype, 'toString', function toString() {
    return getInternalState(this).tag;
  });

  defineBuiltIn($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  definePropertiesModule.f = $defineProperties;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      defineBuiltIn(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es-x/no-object-getownpropertynames -- safe */
var classof = __webpack_require__(54);
var toIndexedObject = __webpack_require__(35);
var $getOwnPropertyNames = __webpack_require__(114).f;
var arraySlice = __webpack_require__(231);

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return $getOwnPropertyNames(it);
  } catch (error) {
    return arraySlice(windowNames);
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && classof(it) == 'Window'
    ? getWindowNames(it)
    : $getOwnPropertyNames(toIndexedObject(it));
};


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(18);
var hasOwn = __webpack_require__(13);
var toString = __webpack_require__(40);
var shared = __webpack_require__(75);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(233);

var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.for` method
// https://tc39.es/ecma262/#sec-symbol.for
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  'for': function (key) {
    var string = toString(key);
    if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = getBuiltIn('Symbol')(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  }
});


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var hasOwn = __webpack_require__(13);
var isSymbol = __webpack_require__(89);
var tryToString = __webpack_require__(57);
var shared = __webpack_require__(75);
var NATIVE_SYMBOL_REGISTRY = __webpack_require__(233);

var SymbolToStringRegistry = shared('symbol-to-string-registry');

// `Symbol.keyFor` method
// https://tc39.es/ecma262/#sec-symbol.keyfor
$({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(tryToString(sym) + ' is not a symbol');
    if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  }
});


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var NATIVE_SYMBOL = __webpack_require__(55);
var fails = __webpack_require__(3);
var getOwnPropertySymbolsModule = __webpack_require__(119);
var toObject = __webpack_require__(33);

// V8 ~ Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FORCED = !NATIVE_SYMBOL || fails(function () { getOwnPropertySymbolsModule.f(1); });

// `Object.getOwnPropertySymbols` method
// https://tc39.es/ecma262/#sec-object.getownpropertysymbols
$({ target: 'Object', stat: true, forced: FORCED }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
  }
});


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.asyncIterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');


/***/ }),
/* 408 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.hasInstance` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.match` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.matchAll` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.matchall
defineWellKnownSymbol('matchAll');


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.replace` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.search` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.species` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.split` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);
var defineSymbolToPrimitive = __webpack_require__(232);

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(18);
var defineWellKnownSymbol = __webpack_require__(7);
var setToStringTag = __webpack_require__(61);

// `Symbol.toStringTag` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');

// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag(getBuiltIn('Symbol'), 'Symbol');


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.unscopables` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(9);
var setToStringTag = __webpack_require__(61);

// JSON[@@toStringTag] property
// https://tc39.es/ecma262/#sec-json-@@tostringtag
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 421 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 422 */
/***/ (function(module, exports) {

// empty


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.asyncDispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('asyncDispose');


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-using-statement
defineWellKnownSymbol('dispose');


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.matcher` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('matcher');


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.metadataKey` well-known symbol
// https://github.com/tc39/proposal-decorator-metadata
defineWellKnownSymbol('metadataKey');


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.observable` well-known symbol
// https://github.com/tc39/proposal-observable
defineWellKnownSymbol('observable');


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.metadata` well-known symbol
// https://github.com/tc39/proposal-decorators
defineWellKnownSymbol('metadata');


/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(7);

// `Symbol.patternMatch` well-known symbol
// https://github.com/tc39/proposal-pattern-matching
defineWellKnownSymbol('patternMatch');


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: remove from `core-js@4`
var defineWellKnownSymbol = __webpack_require__(7);

defineWellKnownSymbol('replaceAll');


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(432);

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(434);

module.exports = parent;


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(235);

module.exports = parent;


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(96);
__webpack_require__(79);
__webpack_require__(234);
var WrappedWellKnownSymbolModule = __webpack_require__(142);

module.exports = WrappedWellKnownSymbolModule.f('iterator');


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(437);

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(438);

module.exports = parent;


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(439);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.filter;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.filter) ? method : own;
};


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(440);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').filter;


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $filter = __webpack_require__(105).filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(104);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright (c) 2015-2017 David M. Lee, II


/**
 * Local reference to TimeoutError
 * @private
 */
var TimeoutError;

/**
 * Rejects a promise with a {@link TimeoutError} if it does not settle within
 * the specified timeout.
 *
 * @param {Promise} promise The promise.
 * @param {number} timeoutMillis Number of milliseconds to wait on settling.
 * @returns {Promise} Either resolves/rejects with `promise`, or rejects with
 *                   `TimeoutError`, whichever settles first.
 */
var timeout = module.exports.timeout = function(promise, timeoutMillis) {
  var error = new TimeoutError(),
      timeout;

  return Promise.race([
    promise,
    new Promise(function(resolve, reject) {
      timeout = setTimeout(function() {
        reject(error);
      }, timeoutMillis);
    }),
  ]).then(function(v) {
    clearTimeout(timeout);
    return v;
  }, function(err) {
    clearTimeout(timeout);
    throw err;
  });
};

/**
 * Exception indicating that the timeout expired.
 */
TimeoutError = module.exports.TimeoutError = function() {
  Error.call(this)
  this.stack = Error().stack
  this.message = 'Timeout';
};

TimeoutError.prototype = Object.create(Error.prototype);
TimeoutError.prototype.name = "TimeoutError";


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _slice = _interopRequireDefault(__webpack_require__(38));

var _keys = _interopRequireDefault(__webpack_require__(53));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _ = __webpack_require__(2);

module.exports = function (AV) {
  var eventSplitter = /\s+/;
  var slice = (0, _slice.default)(Array.prototype);
  /**
   * @class
   *
   * <p>AV.Events is a fork of Backbone's Events module, provided for your
   * convenience.</p>
   *
   * <p>A module that can be mixed in to any object in order to provide
   * it with custom events. You may bind callback functions to an event
   * with `on`, or remove these functions with `off`.
   * Triggering an event fires all callbacks in the order that `on` was
   * called.
   *
   * @private
   * @example
   * var object = {};
   * _.extend(object, AV.Events);
   * object.on('expand', function(){ alert('expanded'); });
   * object.trigger('expand');</pre></p>
   *
   */

  AV.Events = {
    /**
     * Bind one or more space separated events, `events`, to a `callback`
     * function. Passing `"all"` will bind the callback to all events fired.
     */
    on: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(eventSplitter);
      calls = this._callbacks || (this._callbacks = {}); // Create an immutable callback list, allowing traversal during
      // modification.  The tail is an empty object that will always be used
      // as the next node.

      event = events.shift();

      while (event) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
        event = events.shift();
      }

      return this;
    },

    /**
     * Remove one or many callbacks. If `context` is null, removes all callbacks
     * with that function. If `callback` is null, removes all callbacks for the
     * event. If `events` is null, removes all bound callbacks for all events.
     */
    off: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx; // No events, or removing *all* events.

      if (!(calls = this._callbacks)) {
        return;
      }

      if (!(events || callback || context)) {
        delete this._callbacks;
        return this;
      } // Loop through the listed events and contexts, splicing them out of the
      // linked list of callbacks if appropriate.


      events = events ? events.split(eventSplitter) : (0, _keys.default)(_).call(_, calls);
      event = events.shift();

      while (event) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        } // Create a new list, omitting the indicated callbacks.


        tail = node.tail;
        node = node.next;

        while (node !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }

          node = node.next;
        }

        event = events.shift();
      }

      return this;
    },

    /**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
    trigger: function trigger(events) {
      var event, node, calls, tail, args, all, rest;

      if (!(calls = this._callbacks)) {
        return this;
      }

      all = calls.all;
      events = events.split(eventSplitter);
      rest = slice.call(arguments, 1); // For each event, walk through the linked list of callbacks twice,
      // first to trigger the event, then to trigger any `"all"` callbacks.

      event = events.shift();

      while (event) {
        node = calls[event];

        if (node) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }

        node = all;

        if (node) {
          var _context;

          tail = node.tail;
          args = (0, _concat.default)(_context = [event]).call(_context, rest);

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, args);
          }
        }

        event = events.shift();
      }

      return this;
    }
  };
  /**
   * @function
   */

  AV.Events.bind = AV.Events.on;
  /**
   * @function
   */

  AV.Events.unbind = AV.Events.off;
};

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);
/*global navigator: false */


module.exports = function (AV) {
  /**
   * Creates a new GeoPoint with any of the following forms:<br>
   * @example
   * new GeoPoint(otherGeoPoint)
   * new GeoPoint(30, 30)
   * new GeoPoint([30, 30])
   * new GeoPoint({latitude: 30, longitude: 30})
   * new GeoPoint()  // defaults to (0, 0)
   * @class
   *
   * <p>Represents a latitude / longitude point that may be associated
   * with a key in a AVObject or used as a reference point for geo queries.
   * This allows proximity-based queries on the key.</p>
   *
   * <p>Only one key in a class may contain a GeoPoint.</p>
   *
   * <p>Example:<pre>
   *   var point = new AV.GeoPoint(30.0, -20.0);
   *   var object = new AV.Object("PlaceObject");
   *   object.set("location", point);
   *   object.save();</pre></p>
   */
  AV.GeoPoint = function (arg1, arg2) {
    if (_.isArray(arg1)) {
      AV.GeoPoint._validate(arg1[0], arg1[1]);

      this.latitude = arg1[0];
      this.longitude = arg1[1];
    } else if (_.isObject(arg1)) {
      AV.GeoPoint._validate(arg1.latitude, arg1.longitude);

      this.latitude = arg1.latitude;
      this.longitude = arg1.longitude;
    } else if (_.isNumber(arg1) && _.isNumber(arg2)) {
      AV.GeoPoint._validate(arg1, arg2);

      this.latitude = arg1;
      this.longitude = arg2;
    } else {
      this.latitude = 0;
      this.longitude = 0;
    } // Add properties so that anyone using Webkit or Mozilla will get an error
    // if they try to set values that are out of bounds.


    var self = this;

    if (this.__defineGetter__ && this.__defineSetter__) {
      // Use _latitude and _longitude to actually store the values, and add
      // getters and setters for latitude and longitude.
      this._latitude = this.latitude;
      this._longitude = this.longitude;

      this.__defineGetter__('latitude', function () {
        return self._latitude;
      });

      this.__defineGetter__('longitude', function () {
        return self._longitude;
      });

      this.__defineSetter__('latitude', function (val) {
        AV.GeoPoint._validate(val, self.longitude);

        self._latitude = val;
      });

      this.__defineSetter__('longitude', function (val) {
        AV.GeoPoint._validate(self.latitude, val);

        self._longitude = val;
      });
    }
  };
  /**
   * @lends AV.GeoPoint.prototype
   * @property {float} latitude North-south portion of the coordinate, in range
   *   [-90, 90].  Throws an exception if set out of range in a modern browser.
   * @property {float} longitude East-west portion of the coordinate, in range
   *   [-180, 180].  Throws if set out of range in a modern browser.
   */

  /**
   * Throws an exception if the given lat-long is out of bounds.
   * @private
   */


  AV.GeoPoint._validate = function (latitude, longitude) {
    if (latitude < -90.0) {
      throw new Error('AV.GeoPoint latitude ' + latitude + ' < -90.0.');
    }

    if (latitude > 90.0) {
      throw new Error('AV.GeoPoint latitude ' + latitude + ' > 90.0.');
    }

    if (longitude < -180.0) {
      throw new Error('AV.GeoPoint longitude ' + longitude + ' < -180.0.');
    }

    if (longitude > 180.0) {
      throw new Error('AV.GeoPoint longitude ' + longitude + ' > 180.0.');
    }
  };
  /**
   * Creates a GeoPoint with the user's current location, if available.
   * @return {Promise.<AV.GeoPoint>}
   */


  AV.GeoPoint.current = function () {
    return new _promise.default(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (location) {
        resolve(new AV.GeoPoint({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }));
      }, reject);
    });
  };

  _.extend(AV.GeoPoint.prototype,
  /** @lends AV.GeoPoint.prototype */
  {
    /**
     * Returns a JSON representation of the GeoPoint, suitable for AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      AV.GeoPoint._validate(this.latitude, this.longitude);

      return {
        __type: 'GeoPoint',
        latitude: this.latitude,
        longitude: this.longitude
      };
    },

    /**
     * Returns the distance from this GeoPoint to another in radians.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
    radiansTo: function radiansTo(point) {
      var d2r = Math.PI / 180.0;
      var lat1rad = this.latitude * d2r;
      var long1rad = this.longitude * d2r;
      var lat2rad = point.latitude * d2r;
      var long2rad = point.longitude * d2r;
      var deltaLat = lat1rad - lat2rad;
      var deltaLong = long1rad - long2rad;
      var sinDeltaLatDiv2 = Math.sin(deltaLat / 2);
      var sinDeltaLongDiv2 = Math.sin(deltaLong / 2); // Square of half the straight line chord distance between both points.

      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
      a = Math.min(1.0, a);
      return 2 * Math.asin(Math.sqrt(a));
    },

    /**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
    kilometersTo: function kilometersTo(point) {
      return this.radiansTo(point) * 6371.0;
    },

    /**
     * Returns the distance from this GeoPoint to another in miles.
     * @param {AV.GeoPoint} point the other AV.GeoPoint.
     * @return {Number}
     */
    milesTo: function milesTo(point) {
      return this.radiansTo(point) * 3958.8;
    }
  });
};

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2);

module.exports = function (AV) {
  var PUBLIC_KEY = '*';
  /**
   * Creates a new ACL.
   * If no argument is given, the ACL has no permissions for anyone.
   * If the argument is a AV.User, the ACL will have read and write
   *   permission for only that user.
   * If the argument is any other JSON object, that object will be interpretted
   *   as a serialized ACL created with toJSON().
   * @see AV.Object#setACL
   * @class
   *
   * <p>An ACL, or Access Control List can be added to any
   * <code>AV.Object</code> to restrict access to only a subset of users
   * of your application.</p>
   */

  AV.ACL = function (arg1) {
    var self = this;
    self.permissionsById = {};

    if (_.isObject(arg1)) {
      if (arg1 instanceof AV.User) {
        self.setReadAccess(arg1, true);
        self.setWriteAccess(arg1, true);
      } else {
        if (_.isFunction(arg1)) {
          throw new Error('AV.ACL() called with a function.  Did you forget ()?');
        }

        AV._objectEach(arg1, function (accessList, userId) {
          if (!_.isString(userId)) {
            throw new Error('Tried to create an ACL with an invalid userId.');
          }

          self.permissionsById[userId] = {};

          AV._objectEach(accessList, function (allowed, permission) {
            if (permission !== 'read' && permission !== 'write') {
              throw new Error('Tried to create an ACL with an invalid permission type.');
            }

            if (!_.isBoolean(allowed)) {
              throw new Error('Tried to create an ACL with an invalid permission value.');
            }

            self.permissionsById[userId][permission] = allowed;
          });
        });
      }
    }
  };
  /**
   * Returns a JSON-encoded version of the ACL.
   * @return {Object}
   */


  AV.ACL.prototype.toJSON = function () {
    return _.clone(this.permissionsById);
  };

  AV.ACL.prototype._setAccess = function (accessType, userId, allowed) {
    if (userId instanceof AV.User) {
      userId = userId.id;
    } else if (userId instanceof AV.Role) {
      userId = 'role:' + userId.getName();
    }

    if (!_.isString(userId)) {
      throw new Error('userId must be a string.');
    }

    if (!_.isBoolean(allowed)) {
      throw new Error('allowed must be either true or false.');
    }

    var permissions = this.permissionsById[userId];

    if (!permissions) {
      if (!allowed) {
        // The user already doesn't have this permission, so no action needed.
        return;
      } else {
        permissions = {};
        this.permissionsById[userId] = permissions;
      }
    }

    if (allowed) {
      this.permissionsById[userId][accessType] = true;
    } else {
      delete permissions[accessType];

      if (_.isEmpty(permissions)) {
        delete this.permissionsById[userId];
      }
    }
  };

  AV.ACL.prototype._getAccess = function (accessType, userId) {
    if (userId instanceof AV.User) {
      userId = userId.id;
    } else if (userId instanceof AV.Role) {
      userId = 'role:' + userId.getName();
    }

    var permissions = this.permissionsById[userId];

    if (!permissions) {
      return false;
    }

    return permissions[accessType] ? true : false;
  };
  /**
   * Set whether the given user is allowed to read this object.
   * @param userId An instance of AV.User or its objectId.
   * @param {Boolean} allowed Whether that user should have read access.
   */


  AV.ACL.prototype.setReadAccess = function (userId, allowed) {
    this._setAccess('read', userId, allowed);
  };
  /**
   * Get whether the given user id is *explicitly* allowed to read this object.
   * Even if this returns false, the user may still be able to access it if
   * getPublicReadAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */


  AV.ACL.prototype.getReadAccess = function (userId) {
    return this._getAccess('read', userId);
  };
  /**
   * Set whether the given user id is allowed to write this object.
   * @param userId An instance of AV.User or its objectId, or a AV.Role..
   * @param {Boolean} allowed Whether that user should have write access.
   */


  AV.ACL.prototype.setWriteAccess = function (userId, allowed) {
    this._setAccess('write', userId, allowed);
  };
  /**
   * Get whether the given user id is *explicitly* allowed to write this object.
   * Even if this returns false, the user may still be able to write it if
   * getPublicWriteAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */


  AV.ACL.prototype.getWriteAccess = function (userId) {
    return this._getAccess('write', userId);
  };
  /**
   * Set whether the public is allowed to read this object.
   * @param {Boolean} allowed
   */


  AV.ACL.prototype.setPublicReadAccess = function (allowed) {
    this.setReadAccess(PUBLIC_KEY, allowed);
  };
  /**
   * Get whether the public is allowed to read this object.
   * @return {Boolean}
   */


  AV.ACL.prototype.getPublicReadAccess = function () {
    return this.getReadAccess(PUBLIC_KEY);
  };
  /**
   * Set whether the public is allowed to write this object.
   * @param {Boolean} allowed
   */


  AV.ACL.prototype.setPublicWriteAccess = function (allowed) {
    this.setWriteAccess(PUBLIC_KEY, allowed);
  };
  /**
   * Get whether the public is allowed to write this object.
   * @return {Boolean}
   */


  AV.ACL.prototype.getPublicWriteAccess = function () {
    return this.getWriteAccess(PUBLIC_KEY);
  };
  /**
   * Get whether users belonging to the given role are allowed
   * to read this object. Even if this returns false, the role may
   * still be able to write it if a parent role has read access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has read access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.getRoleReadAccess = function (role) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      return this.getReadAccess('role:' + role);
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Get whether users belonging to the given role are allowed
   * to write this object. Even if this returns false, the role may
   * still be able to write it if a parent role has write access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has write access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.getRoleWriteAccess = function (role) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      return this.getWriteAccess('role:' + role);
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Set whether users belonging to the given role are allowed
   * to read this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can read this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.setRoleReadAccess = function (role, allowed) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      this.setReadAccess('role:' + role, allowed);
      return;
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Set whether users belonging to the given role are allowed
   * to write this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can write this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.setRoleWriteAccess = function (role, allowed) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      this.setWriteAccess('role:' + role, allowed);
      return;
    }

    throw new Error('role must be a AV.Role or a String');
  };
};

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _concat = _interopRequireDefault(__webpack_require__(25));

var _find = _interopRequireDefault(__webpack_require__(107));

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var _map = _interopRequireDefault(__webpack_require__(42));

var _ = __webpack_require__(2);

module.exports = function (AV) {
  /**
   * @private
   * @class
   * A AV.Op is an atomic operation that can be applied to a field in a
   * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
   * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
   * is a AV.Op.Unset. These operations are stored in a AV.Object and
   * sent to the server as part of <code>object.save()</code> operations.
   * Instances of AV.Op should be immutable.
   *
   * You should not create subclasses of AV.Op or instantiate AV.Op
   * directly.
   */
  AV.Op = function () {
    this._initialize.apply(this, arguments);
  };

  _.extend(AV.Op.prototype,
  /** @lends AV.Op.prototype */
  {
    _initialize: function _initialize() {}
  });

  _.extend(AV.Op, {
    /**
     * To create a new Op, call AV.Op._extend();
     * @private
     */
    _extend: AV._extend,
    // A map of __op string to decoder function.
    _opDecoderMap: {},

    /**
     * Registers a function to convert a json object with an __op field into an
     * instance of a subclass of AV.Op.
     * @private
     */
    _registerDecoder: function _registerDecoder(opName, decoder) {
      AV.Op._opDecoderMap[opName] = decoder;
    },

    /**
     * Converts a json object into an instance of a subclass of AV.Op.
     * @private
     */
    _decode: function _decode(json) {
      var decoder = AV.Op._opDecoderMap[json.__op];

      if (decoder) {
        return decoder(json);
      } else {
        return undefined;
      }
    }
  });
  /*
   * Add a handler for Batch ops.
   */


  AV.Op._registerDecoder('Batch', function (json) {
    var op = null;

    AV._arrayEach(json.ops, function (nextOp) {
      nextOp = AV.Op._decode(nextOp);
      op = nextOp._mergeWithPrevious(op);
    });

    return op;
  });
  /**
   * @private
   * @class
   * A Set operation indicates that either the field was changed using
   * AV.Object.set, or it is a mutable container that was detected as being
   * changed.
   */


  AV.Op.Set = AV.Op._extend(
  /** @lends AV.Op.Set.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },

    /**
     * Returns the new value of this field after the set.
     */
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return AV._encode(this.value());
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      return this;
    },
    _estimate: function _estimate(oldValue) {
      return this.value();
    }
  });
  /**
   * A sentinel value that is returned by AV.Op.Unset._estimate to
   * indicate the field should be deleted. Basically, if you find _UNSET as a
   * value in your object, you should remove that key.
   */

  AV.Op._UNSET = {};
  /**
   * @private
   * @class
   * An Unset operation indicates that this field has been deleted from the
   * object.
   */

  AV.Op.Unset = AV.Op._extend(
  /** @lends AV.Op.Unset.prototype */
  {
    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Delete'
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      return this;
    },
    _estimate: function _estimate(oldValue) {
      return AV.Op._UNSET;
    }
  });

  AV.Op._registerDecoder('Delete', function (json) {
    return new AV.Op.Unset();
  });
  /**
   * @private
   * @class
   * An Increment is an atomic operation where the numeric value for the field
   * will be increased by a given amount.
   */


  AV.Op.Increment = AV.Op._extend(
  /** @lends AV.Op.Increment.prototype */
  {
    _initialize: function _initialize(amount) {
      this._amount = amount;
    },

    /**
     * Returns the amount to increment by.
     * @return {Number} the amount to increment by.
     */
    amount: function amount() {
      return this._amount;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Increment',
        amount: this._amount
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.amount());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() + this.amount());
      } else if (previous instanceof AV.Op.Increment) {
        return new AV.Op.Increment(this.amount() + previous.amount());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return this.amount();
      }

      return oldValue + this.amount();
    }
  });

  AV.Op._registerDecoder('Increment', function (json) {
    return new AV.Op.Increment(json.amount);
  });
  /**
   * @private
   * @class
   * BitAnd is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitAnd = AV.Op._extend(
  /** @lends AV.Op.BitAnd.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitAnd',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(0);
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() & this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue & this.value();
    }
  });

  AV.Op._registerDecoder('BitAnd', function (json) {
    return new AV.Op.BitAnd(json.value);
  });
  /**
   * @private
   * @class
   * BitOr is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitOr = AV.Op._extend(
  /** @lends AV.Op.BitOr.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitOr',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.value());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() | this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue | this.value();
    }
  });

  AV.Op._registerDecoder('BitOr', function (json) {
    return new AV.Op.BitOr(json.value);
  });
  /**
   * @private
   * @class
   * BitXor is an atomic operation where the given value will be bit and to the
   * value than is stored in this field.
   */


  AV.Op.BitXor = AV.Op._extend(
  /** @lends AV.Op.BitXor.prototype */
  {
    _initialize: function _initialize(value) {
      this._value = value;
    },
    value: function value() {
      return this._value;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'BitXor',
        value: this.value()
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.value());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(previous.value() ^ this.value());
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      return oldValue ^ this.value();
    }
  });

  AV.Op._registerDecoder('BitXor', function (json) {
    return new AV.Op.BitXor(json.value);
  });
  /**
   * @private
   * @class
   * Add is an atomic operation where the given objects will be appended to the
   * array that is stored in this field.
   */


  AV.Op.Add = AV.Op._extend(
  /** @lends AV.Op.Add.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = objects;
    },

    /**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Add',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.objects());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.Add) {
        var _context;

        return new AV.Op.Add((0, _concat.default)(_context = previous.objects()).call(_context, this.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return _.clone(this.objects());
      } else {
        return (0, _concat.default)(oldValue).call(oldValue, this.objects());
      }
    }
  });

  AV.Op._registerDecoder('Add', function (json) {
    return new AV.Op.Add(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * AddUnique is an atomic operation where the given items will be appended to
   * the array that is stored in this field only if they were not already
   * present in the array.
   */


  AV.Op.AddUnique = AV.Op._extend(
  /** @lends AV.Op.AddUnique.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = _.uniq(objects);
    },

    /**
     * Returns the objects to be added to the array.
     * @return {Array} The objects to be added to the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'AddUnique',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return new AV.Op.Set(this.objects());
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.AddUnique) {
        return new AV.Op.AddUnique(this._estimate(previous.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return _.clone(this.objects());
      } else {
        // We can't just take the _.uniq(_.union(...)) of oldValue and
        // this.objects, because the uniqueness may not apply to oldValue
        // (especially if the oldValue was set via .set())
        var newValue = _.clone(oldValue);

        AV._arrayEach(this.objects(), function (obj) {
          if (obj instanceof AV.Object && obj.id) {
            var matchingObj = (0, _find.default)(_).call(_, newValue, function (anObj) {
              return anObj instanceof AV.Object && anObj.id === obj.id;
            });

            if (!matchingObj) {
              newValue.push(obj);
            } else {
              var index = (0, _indexOf.default)(_).call(_, newValue, matchingObj);
              newValue[index] = obj;
            }
          } else if (!_.contains(newValue, obj)) {
            newValue.push(obj);
          }
        });

        return newValue;
      }
    }
  });

  AV.Op._registerDecoder('AddUnique', function (json) {
    return new AV.Op.AddUnique(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * Remove is an atomic operation where the given objects will be removed from
   * the array that is stored in this field.
   */


  AV.Op.Remove = AV.Op._extend(
  /** @lends AV.Op.Remove.prototype */
  {
    _initialize: function _initialize(objects) {
      this._objects = _.uniq(objects);
    },

    /**
     * Returns the objects to be removed from the array.
     * @return {Array} The objects to be removed from the array.
     */
    objects: function objects() {
      return this._objects;
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __op: 'Remove',
        objects: AV._encode(this.objects())
      };
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        return previous;
      } else if (previous instanceof AV.Op.Set) {
        return new AV.Op.Set(this._estimate(previous.value()));
      } else if (previous instanceof AV.Op.Remove) {
        return new AV.Op.Remove(_.union(previous.objects(), this.objects()));
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue) {
      if (!oldValue) {
        return [];
      } else {
        var newValue = _.difference(oldValue, this.objects()); // If there are saved AV Objects being removed, also remove them.


        AV._arrayEach(this.objects(), function (obj) {
          if (obj instanceof AV.Object && obj.id) {
            newValue = _.reject(newValue, function (other) {
              return other instanceof AV.Object && other.id === obj.id;
            });
          }
        });

        return newValue;
      }
    }
  });

  AV.Op._registerDecoder('Remove', function (json) {
    return new AV.Op.Remove(AV._decode(json.objects));
  });
  /**
   * @private
   * @class
   * A Relation operation indicates that the field is an instance of
   * AV.Relation, and objects are being added to, or removed from, that
   * relation.
   */


  AV.Op.Relation = AV.Op._extend(
  /** @lends AV.Op.Relation.prototype */
  {
    _initialize: function _initialize(adds, removes) {
      this._targetClassName = null;
      var self = this;

      var pointerToId = function pointerToId(object) {
        if (object instanceof AV.Object) {
          if (!object.id) {
            throw new Error("You can't add an unsaved AV.Object to a relation.");
          }

          if (!self._targetClassName) {
            self._targetClassName = object.className;
          }

          if (self._targetClassName !== object.className) {
            throw new Error('Tried to create a AV.Relation with 2 different types: ' + self._targetClassName + ' and ' + object.className + '.');
          }

          return object.id;
        }

        return object;
      };

      this.relationsToAdd = _.uniq((0, _map.default)(_).call(_, adds, pointerToId));
      this.relationsToRemove = _.uniq((0, _map.default)(_).call(_, removes, pointerToId));
    },

    /**
     * Returns an array of unfetched AV.Object that are being added to the
     * relation.
     * @return {Array}
     */
    added: function added() {
      var self = this;
      return (0, _map.default)(_).call(_, this.relationsToAdd, function (objectId) {
        var object = AV.Object._create(self._targetClassName);

        object.id = objectId;
        return object;
      });
    },

    /**
     * Returns an array of unfetched AV.Object that are being removed from
     * the relation.
     * @return {Array}
     */
    removed: function removed() {
      var self = this;
      return (0, _map.default)(_).call(_, this.relationsToRemove, function (objectId) {
        var object = AV.Object._create(self._targetClassName);

        object.id = objectId;
        return object;
      });
    },

    /**
     * Returns a JSON version of the operation suitable for sending to AV.
     * @return {Object}
     */
    toJSON: function toJSON() {
      var adds = null;
      var removes = null;
      var self = this;

      var idToPointer = function idToPointer(id) {
        return {
          __type: 'Pointer',
          className: self._targetClassName,
          objectId: id
        };
      };

      var pointers = null;

      if (this.relationsToAdd.length > 0) {
        pointers = (0, _map.default)(_).call(_, this.relationsToAdd, idToPointer);
        adds = {
          __op: 'AddRelation',
          objects: pointers
        };
      }

      if (this.relationsToRemove.length > 0) {
        pointers = (0, _map.default)(_).call(_, this.relationsToRemove, idToPointer);
        removes = {
          __op: 'RemoveRelation',
          objects: pointers
        };
      }

      if (adds && removes) {
        return {
          __op: 'Batch',
          ops: [adds, removes]
        };
      }

      return adds || removes || {};
    },
    _mergeWithPrevious: function _mergeWithPrevious(previous) {
      if (!previous) {
        return this;
      } else if (previous instanceof AV.Op.Unset) {
        throw new Error("You can't modify a relation after deleting it.");
      } else if (previous instanceof AV.Op.Relation) {
        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
          throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + this._targetClassName + ' was passed in.');
        }

        var newAdd = _.union(_.difference(previous.relationsToAdd, this.relationsToRemove), this.relationsToAdd);

        var newRemove = _.union(_.difference(previous.relationsToRemove, this.relationsToAdd), this.relationsToRemove);

        var newRelation = new AV.Op.Relation(newAdd, newRemove);
        newRelation._targetClassName = this._targetClassName;
        return newRelation;
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    },
    _estimate: function _estimate(oldValue, object, key) {
      if (!oldValue) {
        var relation = new AV.Relation(object, key);
        relation.targetClassName = this._targetClassName;
      } else if (oldValue instanceof AV.Relation) {
        if (this._targetClassName) {
          if (oldValue.targetClassName) {
            if (oldValue.targetClassName !== this._targetClassName) {
              throw new Error('Related object must be a ' + oldValue.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
            }
          } else {
            oldValue.targetClassName = this._targetClassName;
          }
        }

        return oldValue;
      } else {
        throw new Error('Op is invalid after previous op.');
      }
    }
  });

  AV.Op._registerDecoder('AddRelation', function (json) {
    return new AV.Op.Relation(AV._decode(json.objects), []);
  });

  AV.Op._registerDecoder('RemoveRelation', function (json) {
    return new AV.Op.Relation([], AV._decode(json.objects));
  });
};

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(447);

module.exports = parent;


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(448);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.find;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.find) ? method : own;
};


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(449);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').find;


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $find = __webpack_require__(105).find;
var addToUnscopables = __webpack_require__(122);

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2);

module.exports = function (AV) {
  /**
   * Creates a new Relation for the given parent object and key. This
   * constructor should rarely be used directly, but rather created by
   * {@link AV.Object#relation}.
   * @param {AV.Object} parent The parent of this relation.
   * @param {String} key The key for this relation on the parent.
   * @see AV.Object#relation
   * @class
   *
   * <p>
   * A class that is used to access all of the children of a many-to-many
   * relationship.  Each instance of AV.Relation is associated with a
   * particular parent object and key.
   * </p>
   */
  AV.Relation = function (parent, key) {
    if (!_.isString(key)) {
      throw new TypeError('key must be a string');
    }

    this.parent = parent;
    this.key = key;
    this.targetClassName = null;
  };
  /**
   * Creates a query that can be used to query the parent objects in this relation.
   * @param {String} parentClass The parent class or name.
   * @param {String} relationKey The relation field key in parent.
   * @param {AV.Object} child The child object.
   * @return {AV.Query}
   */


  AV.Relation.reverseQuery = function (parentClass, relationKey, child) {
    var query = new AV.Query(parentClass);
    query.equalTo(relationKey, child._toPointer());
    return query;
  };

  _.extend(AV.Relation.prototype,
  /** @lends AV.Relation.prototype */
  {
    /**
     * Makes sure that this relation has the right parent and key.
     * @private
     */
    _ensureParentAndKey: function _ensureParentAndKey(parent, key) {
      this.parent = this.parent || parent;
      this.key = this.key || key;

      if (this.parent !== parent) {
        throw new Error('Internal Error. Relation retrieved from two different Objects.');
      }

      if (this.key !== key) {
        throw new Error('Internal Error. Relation retrieved from two different keys.');
      }
    },

    /**
     * Adds a AV.Object or an array of AV.Objects to the relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to add.
     */
    add: function add(objects) {
      if (!_.isArray(objects)) {
        objects = [objects];
      }

      var change = new AV.Op.Relation(objects, []);
      this.parent.set(this.key, change);
      this.targetClassName = change._targetClassName;
    },

    /**
     * Removes a AV.Object or an array of AV.Objects from this relation.
     * @param {AV.Object|AV.Object[]} objects The item or items to remove.
     */
    remove: function remove(objects) {
      if (!_.isArray(objects)) {
        objects = [objects];
      }

      var change = new AV.Op.Relation([], objects);
      this.parent.set(this.key, change);
      this.targetClassName = change._targetClassName;
    },

    /**
     * Returns a JSON version of the object suitable for saving to disk.
     * @return {Object}
     */
    toJSON: function toJSON() {
      return {
        __type: 'Relation',
        className: this.targetClassName
      };
    },

    /**
     * Returns a AV.Query that is limited to objects in this
     * relation.
     * @return {AV.Query}
     */
    query: function query() {
      var targetClass;
      var query;

      if (!this.targetClassName) {
        targetClass = AV.Object._getSubclass(this.parent.className);
        query = new AV.Query(targetClass);
        query._defaultParams.redirectClassNameForKey = this.key;
      } else {
        targetClass = AV.Object._getSubclass(this.targetClassName);
        query = new AV.Query(targetClass);
      }

      query._addCondition('$relatedTo', 'object', this.parent._toPointer());

      query._addCondition('$relatedTo', 'key', this.key);

      return query;
    }
  });
};

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);

var cos = __webpack_require__(452);

var qiniu = __webpack_require__(453);

var s3 = __webpack_require__(499);

var AVError = __webpack_require__(43);

var _require = __webpack_require__(27),
    request = _require.request,
    AVRequest = _require._request;

var _require2 = __webpack_require__(31),
    tap = _require2.tap,
    transformFetchOptions = _require2.transformFetchOptions;

var debug = __webpack_require__(69)('leancloud:file');

var parseBase64 = __webpack_require__(503);

module.exports = function (AV) {
  // port from browserify path module
  // since react-native packager won't shim node modules.
  var extname = function extname(path) {
    if (!_.isString(path)) return '';
    return path.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
  };

  var b64Digit = function b64Digit(number) {
    if (number < 26) {
      return String.fromCharCode(65 + number);
    }

    if (number < 52) {
      return String.fromCharCode(97 + (number - 26));
    }

    if (number < 62) {
      return String.fromCharCode(48 + (number - 52));
    }

    if (number === 62) {
      return '+';
    }

    if (number === 63) {
      return '/';
    }

    throw new Error('Tried to encode large digit ' + number + ' in base64.');
  };

  var encodeBase64 = function encodeBase64(array) {
    var chunks = [];
    chunks.length = Math.ceil(array.length / 3);

    _.times(chunks.length, function (i) {
      var b1 = array[i * 3];
      var b2 = array[i * 3 + 1] || 0;
      var b3 = array[i * 3 + 2] || 0;
      var has2 = i * 3 + 1 < array.length;
      var has3 = i * 3 + 2 < array.length;
      chunks[i] = [b64Digit(b1 >> 2 & 0x3f), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0f), has2 ? b64Digit(b2 << 2 & 0x3c | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3f) : '='].join('');
    });

    return chunks.join('');
  };
  /**
   * An AV.File is a local representation of a file that is saved to the AV
   * cloud.
   * @param name {String} The file's name. This will change to a unique value
   *     once the file has finished saving.
   * @param data {Array} The data for the file, as either:
   *     1. an Array of byte value Numbers, or
   *     2. an Object like { base64: "..." } with a base64-encoded String.
   *     3. a Blob(File) selected with a file upload control in a browser.
   *     4. an Object like { blob: {uri: "..."} } that mimics Blob
   *        in some non-browser environments such as React Native.
   *     5. a Buffer in Node.js runtime.
   *     6. a Stream in Node.js runtime.
   *
   *        For example:<pre>
   * var fileUploadControl = $("#profilePhotoFileUpload")[0];
   * if (fileUploadControl.files.length > 0) {
   *   var file = fileUploadControl.files[0];
   *   var name = "photo.jpg";
   *   var file = new AV.File(name, file);
   *   file.save().then(function() {
   *     // The file has been saved to AV.
   *   }, function(error) {
   *     // The file either could not be read, or could not be saved to AV.
   *   });
   * }</pre>
   *
   * @class
   * @param [mimeType] {String} Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   */


  AV.File = function (name, data, mimeType) {
    this.attributes = {
      name: name,
      url: '',
      metaData: {},
      // 用来存储转换后要上传的 base64 String
      base64: ''
    };

    if (_.isString(data)) {
      throw new TypeError('Creating an AV.File from a String is not yet supported.');
    }

    if (_.isArray(data)) {
      this.attributes.metaData.size = data.length;
      data = {
        base64: encodeBase64(data)
      };
    }

    this._extName = '';
    this._data = data;
    this._uploadHeaders = {};

    if (data && data.blob && typeof data.blob.uri === 'string') {
      this._extName = extname(data.blob.uri);
    }

    if (typeof Blob !== 'undefined' && data instanceof Blob) {
      if (data.size) {
        this.attributes.metaData.size = data.size;
      }

      if (data.name) {
        this._extName = extname(data.name);
      }
    }

    var owner;

    if (data && data.owner) {
      owner = data.owner;
    } else if (!AV._config.disableCurrentUser) {
      try {
        owner = AV.User.current();
      } catch (error) {
        if ('SYNC_API_NOT_AVAILABLE' !== error.code) {
          throw error;
        }
      }
    }

    this.attributes.metaData.owner = owner ? owner.id : 'unknown';
    this.set('mime_type', mimeType);
  };
  /**
   * Creates a fresh AV.File object with exists url for saving to AVOS Cloud.
   * @param {String} name the file name
   * @param {String} url the file url.
   * @param {Object} [metaData] the file metadata object.
   * @param {String} [type] Content-Type header to use for the file. If
   *     this is omitted, the content type will be inferred from the name's
   *     extension.
   * @return {AV.File} the file object
   */


  AV.File.withURL = function (name, url, metaData, type) {
    if (!name || !url) {
      throw new Error('Please provide file name and url');
    }

    var file = new AV.File(name, null, type); //copy metaData properties to file.

    if (metaData) {
      for (var prop in metaData) {
        if (!file.attributes.metaData[prop]) file.attributes.metaData[prop] = metaData[prop];
      }
    }

    file.attributes.url = url; //Mark the file is from external source.

    file.attributes.metaData.__source = 'external';
    file.attributes.metaData.size = 0;
    return file;
  };
  /**
   * Creates a file object with exists objectId.
   * @param {String} objectId The objectId string
   * @return {AV.File} the file object
   */


  AV.File.createWithoutData = function (objectId) {
    if (!objectId) {
      throw new TypeError('The objectId must be provided');
    }

    var file = new AV.File();
    file.id = objectId;
    return file;
  };
  /**
   * Request file censor.
   * @since 4.13.0
   * @param {String} objectId
   * @return {Promise.<string>}
   */


  AV.File.censor = function (objectId) {
    if (!AV._config.masterKey) {
      throw new Error('Cannot censor a file without masterKey');
    }

    return request({
      method: 'POST',
      path: "/files/".concat(objectId, "/censor"),
      authOptions: {
        useMasterKey: true
      }
    }).then(function (res) {
      return res.censorResult;
    });
  };

  _.extend(AV.File.prototype,
  /** @lends AV.File.prototype */
  {
    className: '_File',
    _toFullJSON: function _toFullJSON(seenObjects) {
      var _this = this;

      var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var json = _.clone(this.attributes);

      AV._objectEach(json, function (val, key) {
        json[key] = AV._encode(val, seenObjects, undefined, full);
      });

      AV._objectEach(this._operations, function (val, key) {
        json[key] = val;
      });

      if (_.has(this, 'id')) {
        json.objectId = this.id;
      }

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (_.has(_this, key)) {
          var val = _this[key];
          json[key] = _.isDate(val) ? val.toJSON() : val;
        }
      });

      if (full) {
        json.__type = 'File';
      }

      return json;
    },

    /**
     * Returns a JSON version of the file with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
    toFullJSON: function toFullJSON() {
      var seenObjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this._toFullJSON(seenObjects);
    },

    /**
     * Returns a JSON version of the object.
     * @return {Object}
     */
    toJSON: function toJSON(key, holder) {
      var seenObjects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [this];
      return this._toFullJSON(seenObjects, false);
    },

    /**
     * Gets a Pointer referencing this file.
     * @private
     */
    _toPointer: function _toPointer() {
      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    },

    /**
     * Returns the ACL for this file.
     * @returns {AV.ACL} An instance of AV.ACL.
     */
    getACL: function getACL() {
      return this._acl;
    },

    /**
     * Sets the ACL to be used for this file.
     * @param {AV.ACL} acl An instance of AV.ACL.
     */
    setACL: function setACL(acl) {
      if (!(acl instanceof AV.ACL)) {
        return new AVError(AVError.OTHER_CAUSE, 'ACL must be a AV.ACL.');
      }

      this._acl = acl;
      return this;
    },

    /**
     * Gets the name of the file. Before save is called, this is the filename
     * given by the user. After save is called, that name gets prefixed with a
     * unique identifier.
     */
    name: function name() {
      return this.get('name');
    },

    /**
     * Gets the url of the file. It is only available after you save the file or
     * after you get the file from a AV.Object.
     * @return {String}
     */
    url: function url() {
      return this.get('url');
    },

    /**
     * Gets the attributs of the file object.
     * @param {String} The attribute name which want to get.
     * @returns {Any}
     */
    get: function get(attrName) {
      switch (attrName) {
        case 'objectId':
          return this.id;

        case 'url':
        case 'name':
        case 'mime_type':
        case 'metaData':
        case 'createdAt':
        case 'updatedAt':
          return this.attributes[attrName];

        default:
          return this.attributes.metaData[attrName];
      }
    },

    /**
     * Set the metaData of the file object.
     * @param {Object} Object is an key value Object for setting metaData.
     * @param {String} attr is an optional metadata key.
     * @param {Object} value is an optional metadata value.
     * @returns {String|Number|Array|Object}
     */
    set: function set() {
      var _this2 = this;

      var set = function set(attrName, value) {
        switch (attrName) {
          case 'name':
          case 'url':
          case 'mime_type':
          case 'base64':
          case 'metaData':
            _this2.attributes[attrName] = value;
            break;

          default:
            // File 并非一个 AVObject，不能完全自定义其他属性，所以只能都放在 metaData 上面
            _this2.attributes.metaData[attrName] = value;
            break;
        }
      };

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      switch (args.length) {
        case 1:
          // 传入一个 Object
          for (var k in args[0]) {
            set(k, args[0][k]);
          }

          break;

        case 2:
          set(args[0], args[1]);
          break;
      }

      return this;
    },

    /**
     * Set a header for the upload request.
     * For more infomation, go to https://url.leanapp.cn/avfile-upload-headers
     *
     * @param {String} key header key
     * @param {String} value header value
     * @return {AV.File} this
     */
    setUploadHeader: function setUploadHeader(key, value) {
      this._uploadHeaders[key] = value;
      return this;
    },

    /**
     * <p>Returns the file's metadata JSON object if no arguments is given.Returns the
     * metadata value if a key is given.Set metadata value if key and value are both given.</p>
     * <p><pre>
     *  var metadata = file.metaData(); //Get metadata JSON object.
     *  var size = file.metaData('size');  // Get the size metadata value.
     *  file.metaData('format', 'jpeg'); //set metadata attribute and value.
     *</pre></p>
     * @return {Object} The file's metadata JSON object.
     * @param {String} attr an optional metadata key.
     * @param {Object} value an optional metadata value.
     **/
    metaData: function metaData(attr, value) {
      if (attr && value) {
        this.attributes.metaData[attr] = value;
        return this;
      } else if (attr && !value) {
        return this.attributes.metaData[attr];
      } else {
        return this.attributes.metaData;
      }
    },

    /**
     * 如果文件是图片，获取图片的缩略图URL。可以传入宽度、高度、质量、格式等参数。
     * @return {String} 缩略图URL
     * @param {Number} width 宽度，单位：像素
     * @param {Number} heigth 高度，单位：像素
     * @param {Number} quality 质量，1-100的数字，默认100
     * @param {Number} scaleToFit 是否将图片自适应大小。默认为true。
     * @param {String} fmt 格式，默认为png，也可以为jpeg,gif等格式。
     */
    thumbnailURL: function thumbnailURL(width, height) {
      var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
      var scaleToFit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var fmt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'png';
      var url = this.attributes.url;

      if (!url) {
        throw new Error('Invalid url.');
      }

      if (!width || !height || width <= 0 || height <= 0) {
        throw new Error('Invalid width or height value.');
      }

      if (quality <= 0 || quality > 100) {
        throw new Error('Invalid quality value.');
      }

      var mode = scaleToFit ? 2 : 1;
      return url + '?imageView/' + mode + '/w/' + width + '/h/' + height + '/q/' + quality + '/format/' + fmt;
    },

    /**
     * Returns the file's size.
     * @return {Number} The file's size in bytes.
     **/
    size: function size() {
      return this.metaData().size;
    },

    /**
     * Returns the file's owner.
     * @return {String} The file's owner id.
     */
    ownerId: function ownerId() {
      return this.metaData().owner;
    },

    /**
     * Destroy the file.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
    destroy: function destroy(options) {
      if (!this.id) {
        return _promise.default.reject(new Error('The file id does not eixst.'));
      }

      var request = AVRequest('files', null, this.id, 'DELETE', null, options);
      return request;
    },

    /**
     * Request Qiniu upload token
     * @param {string} type
     * @return {Promise} Resolved with the response
     * @private
     */
    _fileToken: function _fileToken(type, authOptions) {
      var name = this.attributes.name;
      var extName = extname(name);

      if (!extName && this._extName) {
        name += this._extName;
        extName = this._extName;
      }

      var data = {
        name: name,
        keep_file_name: authOptions.keepFileName,
        key: authOptions.key,
        ACL: this._acl,
        mime_type: type,
        metaData: this.attributes.metaData
      };
      return AVRequest('fileTokens', null, null, 'POST', data, authOptions);
    },

    /**
     * @callback UploadProgressCallback
     * @param {XMLHttpRequestProgressEvent} event - The progress event with 'loaded' and 'total' attributes
     */

    /**
     * Saves the file to the AV cloud.
     * @param {AuthOptions} [options] AuthOptions plus:
     * @param {UploadProgressCallback} [options.onprogress] 文件上传进度，在 Node.js 中无效，回调参数说明详见 {@link UploadProgressCallback}。
     * @param {boolean} [options.keepFileName = false] 保留下载文件的文件名。
     * @param {string} [options.key] 指定文件的 key。设置该选项需要使用 masterKey
     * @return {Promise} Promise that is resolved when the save finishes.
     */
    save: function save() {
      var _this3 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.id) {
        throw new Error('File is already saved.');
      }

      if (!this._previousSave) {
        if (this._data) {
          var mimeType = this.get('mime_type');
          this._previousSave = this._fileToken(mimeType, options).then(function (uploadInfo) {
            if (uploadInfo.mime_type) {
              mimeType = uploadInfo.mime_type;

              _this3.set('mime_type', mimeType);
            }

            _this3._token = uploadInfo.token;
            return _promise.default.resolve().then(function () {
              var data = _this3._data;

              if (data && data.base64) {
                return parseBase64(data.base64, mimeType);
              }

              if (data && data.blob) {
                if (!data.blob.type && mimeType) {
                  data.blob.type = mimeType;
                }

                if (!data.blob.name) {
                  data.blob.name = _this3.get('name');
                }

                return data.blob;
              }

              if (typeof Blob !== 'undefined' && data instanceof Blob) {
                return data;
              }

              throw new TypeError('malformed file data');
            }).then(function (data) {
              var _options = _.extend({}, options); // filter out download progress events


              if (options.onprogress) {
                _options.onprogress = function (event) {
                  if (event.direction === 'download') return;
                  return options.onprogress(event);
                };
              }

              switch (uploadInfo.provider) {
                case 's3':
                  return s3(uploadInfo, data, _this3, _options);

                case 'qcloud':
                  return cos(uploadInfo, data, _this3, _options);

                case 'qiniu':
                default:
                  return qiniu(uploadInfo, data, _this3, _options);
              }
            }).then(tap(function () {
              return _this3._callback(true);
            }), function (error) {
              _this3._callback(false);

              throw error;
            });
          });
        } else if (this.attributes.url && this.attributes.metaData.__source === 'external') {
          // external link file.
          var data = {
            name: this.attributes.name,
            ACL: this._acl,
            metaData: this.attributes.metaData,
            mime_type: this.mimeType,
            url: this.attributes.url
          };
          this._previousSave = AVRequest('files', null, null, 'post', data, options).then(function (response) {
            _this3.id = response.objectId;
            return _this3;
          });
        }
      }

      return this._previousSave;
    },
    _callback: function _callback(success) {
      AVRequest('fileCallback', null, null, 'post', {
        token: this._token,
        result: success
      }).catch(debug);
      delete this._token;
      delete this._data;
    },

    /**
     * fetch the file from server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
    fetch: function fetch(fetchOptions, options) {
      if (!this.id) {
        throw new Error('Cannot fetch unsaved file');
      }

      var request = AVRequest('files', null, this.id, 'GET', transformFetchOptions(fetchOptions), options);
      return request.then(this._finishFetch.bind(this));
    },
    _finishFetch: function _finishFetch(response) {
      var value = AV.Object.prototype.parse(response);
      value.attributes = {
        name: value.name,
        url: value.url,
        mime_type: value.mime_type,
        bucket: value.bucket
      };
      value.attributes.metaData = value.metaData || {};
      value.id = value.objectId; // clean

      delete value.objectId;
      delete value.metaData;
      delete value.url;
      delete value.name;
      delete value.mime_type;
      delete value.bucket;

      _.extend(this, value);

      return this;
    },

    /**
     * Request file censor
     * @since 4.13.0
     * @return {Promise.<string>}
     */
    censor: function censor() {
      if (!this.id) {
        throw new Error('Cannot censor an unsaved file');
      }

      return AV.File.censor(this.id);
    }
  });
};

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(70),
    getAdapter = _require.getAdapter;

var debug = __webpack_require__(69)('cos');

module.exports = function (uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var url = uploadInfo.upload_url + '?sign=' + encodeURIComponent(uploadInfo.token);
  var fileFormData = {
    field: 'fileContent',
    data: data,
    name: file.attributes.name
  };
  var options = {
    headers: file._uploadHeaders,
    data: {
      op: 'upload'
    },
    onprogress: saveOptions.onprogress
  };
  debug('url: %s, file: %o, options: %o', url, fileFormData, options);
  var upload = getAdapter('upload');
  return upload(url, fileFormData, options).then(function (response) {
    debug(response.status, response.data);

    if (response.ok === false) {
      var error = new Error(response.status);
      error.response = response;
      throw error;
    }

    file.attributes.url = uploadInfo.url;
    file._bucket = uploadInfo.bucket;
    file.id = uploadInfo.objectId;
    return file;
  }, function (error) {
    var response = error.response;

    if (response) {
      debug(response.status, response.data);
      error.statusCode = response.status;
      error.response = response.data;
    }

    throw error;
  });
};

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sliceInstanceProperty2 = __webpack_require__(38);

var _Array$from = __webpack_require__(236);

var _Symbol = __webpack_require__(87);

var _getIteratorMethod = __webpack_require__(238);

var _Reflect$construct = __webpack_require__(463);

var _interopRequireDefault = __webpack_require__(1);

var _inherits2 = _interopRequireDefault(__webpack_require__(467));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(489));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(491));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(496));

var _createClass2 = _interopRequireDefault(__webpack_require__(497));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _slice = _interopRequireDefault(__webpack_require__(38));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = _Reflect$construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_Reflect$construct) return false; if (_Reflect$construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context8; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty2(_context8 = Object.prototype.toString.call(o)).call(_context8, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _require = __webpack_require__(70),
    getAdapter = _require.getAdapter;

var debug = __webpack_require__(69)('leancloud:qiniu');

var ajax = __webpack_require__(106);

var btoa = __webpack_require__(498);

var SHARD_THRESHOLD = 1024 * 1024 * 64;
var CHUNK_SIZE = 1024 * 1024 * 16;

function upload(uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Get the uptoken to upload files to qiniu.
  var uptoken = uploadInfo.token;
  var url = uploadInfo.upload_url || 'https://upload.qiniup.com';
  var fileFormData = {
    field: 'file',
    data: data,
    name: file.attributes.name
  };
  var options = {
    headers: file._uploadHeaders,
    data: {
      name: file.attributes.name,
      key: uploadInfo.key,
      token: uptoken
    },
    onprogress: saveOptions.onprogress
  };
  debug('url: %s, file: %o, options: %o', url, fileFormData, options);
  var upload = getAdapter('upload');
  return upload(url, fileFormData, options).then(function (response) {
    debug(response.status, response.data);

    if (response.ok === false) {
      var message = response.status;

      if (response.data) {
        if (response.data.error) {
          message = response.data.error;
        } else {
          message = (0, _stringify.default)(response.data);
        }
      }

      var error = new Error(message);
      error.response = response;
      throw error;
    }

    file.attributes.url = uploadInfo.url;
    file._bucket = uploadInfo.bucket;
    file.id = uploadInfo.objectId;
    return file;
  }, function (error) {
    var response = error.response;

    if (response) {
      debug(response.status, response.data);
      error.statusCode = response.status;
      error.response = response.data;
    }

    throw error;
  });
}

function urlSafeBase64(string) {
  var base64 = btoa(unescape(encodeURIComponent(string)));
  var result = '';

  var _iterator = _createForOfIteratorHelper(base64),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ch = _step.value;

      switch (ch) {
        case '+':
          result += '-';
          break;

        case '/':
          result += '_';
          break;

        default:
          result += ch;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return result;
}

var ShardUploader = /*#__PURE__*/function () {
  function ShardUploader(uploadInfo, data, file, saveOptions) {
    var _context,
        _context2,
        _this = this;

    (0, _classCallCheck2.default)(this, ShardUploader);
    this.uploadInfo = uploadInfo;
    this.data = data;
    this.file = file;
    this.size = undefined;
    this.offset = 0;
    this.uploadedChunks = 0;
    var key = urlSafeBase64(uploadInfo.key);
    var uploadURL = uploadInfo.upload_url || 'https://upload.qiniup.com';
    this.baseURL = (0, _concat.default)(_context = (0, _concat.default)(_context2 = "".concat(uploadURL, "/buckets/")).call(_context2, uploadInfo.bucket, "/objects/")).call(_context, key, "/uploads");
    this.upToken = 'UpToken ' + uploadInfo.token;
    this.uploaded = 0;

    if (saveOptions && saveOptions.onprogress) {
      this.onProgress = function (_ref) {
        var loaded = _ref.loaded;
        loaded += _this.uploadedChunks * CHUNK_SIZE;

        if (loaded <= _this.uploaded) {
          return;
        }

        if (_this.size) {
          saveOptions.onprogress({
            loaded: loaded,
            total: _this.size,
            percent: loaded / _this.size * 100
          });
        } else {
          saveOptions.onprogress({
            loaded: loaded
          });
        }

        _this.uploaded = loaded;
      };
    }
  }
  /**
   * @returns {Promise<string>}
   */


  (0, _createClass2.default)(ShardUploader, [{
    key: "getUploadId",
    value: function getUploadId() {
      return ajax({
        method: 'POST',
        url: this.baseURL,
        headers: {
          Authorization: this.upToken
        }
      }).then(function (res) {
        return res.uploadId;
      });
    }
  }, {
    key: "getChunk",
    value: function getChunk() {
      throw new Error('Not implemented');
    }
    /**
     * @param {string} uploadId
     * @param {number} partNumber
     * @param {any} data
     * @returns {Promise<{ partNumber: number, etag: string }>}
     */

  }, {
    key: "uploadPart",
    value: function uploadPart(uploadId, partNumber, data) {
      var _context3, _context4;

      return ajax({
        method: 'PUT',
        url: (0, _concat.default)(_context3 = (0, _concat.default)(_context4 = "".concat(this.baseURL, "/")).call(_context4, uploadId, "/")).call(_context3, partNumber),
        headers: {
          Authorization: this.upToken
        },
        data: data,
        onprogress: this.onProgress
      }).then(function (_ref2) {
        var etag = _ref2.etag;
        return {
          partNumber: partNumber,
          etag: etag
        };
      });
    }
  }, {
    key: "stopUpload",
    value: function stopUpload(uploadId) {
      var _context5;

      return ajax({
        method: 'DELETE',
        url: (0, _concat.default)(_context5 = "".concat(this.baseURL, "/")).call(_context5, uploadId),
        headers: {
          Authorization: this.upToken
        }
      });
    }
  }, {
    key: "upload",
    value: function upload() {
      var _this2 = this;

      var parts = [];
      return this.getUploadId().then(function (uploadId) {
        var uploadPart = function uploadPart() {
          return _promise.default.resolve(_this2.getChunk()).then(function (chunk) {
            if (!chunk) {
              return;
            }

            var partNumber = parts.length + 1;
            return _this2.uploadPart(uploadId, partNumber, chunk).then(function (part) {
              parts.push(part);
              _this2.uploadedChunks++;
              return uploadPart();
            });
          }).catch(function (error) {
            return _this2.stopUpload(uploadId).then(function () {
              return _promise.default.reject(error);
            });
          });
        };

        return uploadPart().then(function () {
          var _context6;

          return ajax({
            method: 'POST',
            url: (0, _concat.default)(_context6 = "".concat(_this2.baseURL, "/")).call(_context6, uploadId),
            headers: {
              Authorization: _this2.upToken
            },
            data: {
              parts: parts,
              fname: _this2.file.attributes.name,
              mimeType: _this2.file.attributes.mime_type
            }
          });
        });
      }).then(function () {
        _this2.file.attributes.url = _this2.uploadInfo.url;
        _this2.file._bucket = _this2.uploadInfo.bucket;
        _this2.file.id = _this2.uploadInfo.objectId;
        return _this2.file;
      });
    }
  }]);
  return ShardUploader;
}();

var BlobUploader = /*#__PURE__*/function (_ShardUploader) {
  (0, _inherits2.default)(BlobUploader, _ShardUploader);

  var _super = _createSuper(BlobUploader);

  function BlobUploader(uploadInfo, data, file, saveOptions) {
    var _this3;

    (0, _classCallCheck2.default)(this, BlobUploader);
    _this3 = _super.call(this, uploadInfo, data, file, saveOptions);
    _this3.size = data.size;
    return _this3;
  }
  /**
   * @returns {Blob | null}
   */


  (0, _createClass2.default)(BlobUploader, [{
    key: "getChunk",
    value: function getChunk() {
      var _context7;

      if (this.offset >= this.size) {
        return null;
      }

      var chunk = (0, _slice.default)(_context7 = this.data).call(_context7, this.offset, this.offset + CHUNK_SIZE);
      this.offset += chunk.size;
      return chunk;
    }
  }]);
  return BlobUploader;
}(ShardUploader);

function isBlob(data) {
  return typeof Blob !== 'undefined' && data instanceof Blob;
}

module.exports = function (uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (isBlob(data) && data.size >= SHARD_THRESHOLD) {
    return new BlobUploader(uploadInfo, data, file, saveOptions).upload();
  }

  return upload(uploadInfo, data, file, saveOptions);
};

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
__webpack_require__(455);
var path = __webpack_require__(15);

module.exports = path.Array.from;


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var from = __webpack_require__(456);
var checkCorrectnessOfIteration = __webpack_require__(165);

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es-x/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(58);
var call = __webpack_require__(11);
var toObject = __webpack_require__(33);
var callWithSafeIterationClosing = __webpack_require__(457);
var isArrayIteratorMethod = __webpack_require__(154);
var isConstructor = __webpack_require__(98);
var lengthOfArrayLike = __webpack_require__(36);
var createProperty = __webpack_require__(103);
var getIterator = __webpack_require__(155);
var getIteratorMethod = __webpack_require__(94);

var $Array = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = lengthOfArrayLike(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(21);
var iteratorClose = __webpack_require__(156);

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};


/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(459);


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(460);

module.exports = parent;


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(461);

module.exports = parent;


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(462);
__webpack_require__(63);

module.exports = parent;


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(79);
var getIteratorMethod = __webpack_require__(94);

module.exports = getIteratorMethod;


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(464);

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(465);

module.exports = parent;


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(466);
var path = __webpack_require__(15);

module.exports = path.Reflect.construct;


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var getBuiltIn = __webpack_require__(18);
var apply = __webpack_require__(71);
var bind = __webpack_require__(239);
var aConstructor = __webpack_require__(161);
var anObject = __webpack_require__(21);
var isObject = __webpack_require__(17);
var create = __webpack_require__(59);
var fails = __webpack_require__(3);

var nativeConstruct = getBuiltIn('Reflect', 'construct');
var ObjectPrototype = Object.prototype;
var push = [].push;

// `Reflect.construct` method
// https://tc39.es/ecma262/#sec-reflect.construct
// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
});

var ARGS_BUG = !fails(function () {
  nativeConstruct(function () { /* empty */ });
});

var FORCED = NEW_TARGET_BUG || ARGS_BUG;

$({ target: 'Reflect', stat: true, forced: FORCED, sham: FORCED }, {
  construct: function construct(Target, args /* , newTarget */) {
    aConstructor(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      apply(push, $args, args);
      return new (apply(bind, Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : ObjectPrototype);
    var result = apply(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(468);

var _Object$defineProperty = __webpack_require__(143);

var setPrototypeOf = __webpack_require__(478);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });

  _Object$defineProperty(subClass, "prototype", {
    writable: false
  });

  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(469);

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(470);


/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(471);

module.exports = parent;


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(472);

module.exports = parent;


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(473);

module.exports = parent;


/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(474);
var path = __webpack_require__(15);

var Object = path.Object;

module.exports = function create(P, D) {
  return Object.create(P, D);
};


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(0);
var DESCRIPTORS = __webpack_require__(20);
var create = __webpack_require__(59);

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  create: create
});


/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(476);


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(477);

module.exports = parent;


/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(228);

module.exports = parent;


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(240);

var _bindInstanceProperty = __webpack_require__(241);

function _setPrototypeOf(o, p) {
  var _context;

  module.exports = _setPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$setPrototypeOf).call(_context) : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(480);


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(481);

module.exports = parent;


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(226);

module.exports = parent;


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(483);


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(484);

module.exports = parent;


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(485);

module.exports = parent;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(486);

module.exports = parent;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(487);

var FunctionPrototype = Function.prototype;

module.exports = function (it) {
  var own = it.bind;
  return it === FunctionPrototype || (isPrototypeOf(FunctionPrototype, it) && own === FunctionPrototype.bind) ? method : own;
};


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(488);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Function').bind;


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

// TODO: Remove from `core-js@4`
var $ = __webpack_require__(0);
var bind = __webpack_require__(239);

// `Function.prototype.bind` method
// https://tc39.es/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true, forced: Function.bind !== bind }, {
  bind: bind
});


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(141)["default"];

var assertThisInitialized = __webpack_require__(490);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 490 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(240);

var _bindInstanceProperty = __webpack_require__(241);

var _Object$getPrototypeOf = __webpack_require__(492);

function _getPrototypeOf(o) {
  var _context;

  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _bindInstanceProperty(_context = _Object$getPrototypeOf).call(_context) : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(493);

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(494);


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(495);

module.exports = parent;


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(221);

module.exports = parent;


/***/ }),
/* 496 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(143);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);

  _Object$defineProperty(Constructor, "prototype", {
    writable: false
  });

  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _slice = _interopRequireDefault(__webpack_require__(38));

// base64 character set, plus padding character (=)
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

module.exports = function (string) {
  var result = '';

  for (var i = 0; i < string.length;) {
    var a = string.charCodeAt(i++);
    var b = string.charCodeAt(i++);
    var c = string.charCodeAt(i++);

    if (a > 255 || b > 255 || c > 255) {
      throw new TypeError('Failed to encode base64: The string to be encoded contains characters outside of the Latin1 range.');
    }

    var bitmap = a << 16 | b << 8 | c;
    result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63) + b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
  } // To determine the final padding


  var rest = string.length % 3; // If there's need of padding, replace the last 'A's with equal signs

  return rest ? (0, _slice.default)(result).call(result, 0, rest - 3) + '==='.substring(rest) : result;
};

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2);

var ajax = __webpack_require__(106);

module.exports = function upload(uploadInfo, data, file) {
  var saveOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return ajax({
    url: uploadInfo.upload_url,
    method: 'PUT',
    data: data,
    headers: _.extend({
      'Content-Type': file.get('mime_type'),
      'Cache-Control': 'public, max-age=31536000'
    }, file._uploadHeaders),
    onprogress: saveOptions.onprogress
  }).then(function () {
    file.attributes.url = uploadInfo.url;
    file._bucket = uploadInfo.bucket;
    file.id = uploadInfo.objectId;
    return file;
  });
};

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(501),
      utf8 = __webpack_require__(242).utf8,
      isBuffer = __webpack_require__(502),
      bin = __webpack_require__(242).bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),
/* 501 */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),
/* 502 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var dataURItoBlob = function dataURItoBlob(dataURI, type) {
  var _context;

  var byteString; // 传入的 base64，不是 dataURL

  if ((0, _indexOf.default)(dataURI).call(dataURI, 'base64') < 0) {
    byteString = atob(dataURI);
  } else if ((0, _indexOf.default)(_context = dataURI.split(',')[0]).call(_context, 'base64') >= 0) {
    type = type || dataURI.split(',')[0].split(':')[1].split(';')[0];
    byteString = atob(dataURI.split(',')[1]);
  } else {
    byteString = unescape(dataURI.split(',')[1]);
  }

  var ia = new Uint8Array(byteString.length);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {
    type: type
  });
};

module.exports = dataURItoBlob;

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(505));

var _map = _interopRequireDefault(__webpack_require__(42));

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var _find = _interopRequireDefault(__webpack_require__(107));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _keys2 = _interopRequireDefault(__webpack_require__(53));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _defineProperty = _interopRequireDefault(__webpack_require__(140));

var _getOwnPropertyDescriptor = _interopRequireDefault(__webpack_require__(526));

var _ = __webpack_require__(2);

var AVError = __webpack_require__(43);

var _require = __webpack_require__(27),
    _request = _require._request;

var _require2 = __webpack_require__(31),
    isNullOrUndefined = _require2.isNullOrUndefined,
    ensureArray = _require2.ensureArray,
    transformFetchOptions = _require2.transformFetchOptions,
    setValue = _require2.setValue,
    findValue = _require2.findValue,
    isPlainObject = _require2.isPlainObject,
    continueWhile = _require2.continueWhile;

var recursiveToPointer = function recursiveToPointer(value) {
  if (_.isArray(value)) return (0, _map.default)(value).call(value, recursiveToPointer);
  if (isPlainObject(value)) return _.mapObject(value, recursiveToPointer);
  if (_.isObject(value) && value._toPointer) return value._toPointer();
  return value;
};

var RESERVED_KEYS = ['objectId', 'createdAt', 'updatedAt'];

var checkReservedKey = function checkReservedKey(key) {
  if ((0, _indexOf.default)(RESERVED_KEYS).call(RESERVED_KEYS, key) !== -1) {
    throw new Error("key[".concat(key, "] is reserved"));
  }
};

var handleBatchResults = function handleBatchResults(results) {
  var firstError = (0, _find.default)(_).call(_, results, function (result) {
    return result instanceof Error;
  });

  if (!firstError) {
    return results;
  }

  var error = new AVError(firstError.code, firstError.message);
  error.results = results;
  throw error;
}; // Helper function to get a value from a Backbone object as a property
// or as a function.


function getValue(object, prop) {
  if (!(object && object[prop])) {
    return null;
  }

  return _.isFunction(object[prop]) ? object[prop]() : object[prop];
} // AV.Object is analogous to the Java AVObject.
// It also implements the same interface as a Backbone model.


module.exports = function (AV) {
  /**
   * Creates a new model with defined attributes. A client id (cid) is
   * automatically generated and assigned for you.
   *
   * <p>You won't normally call this method directly.  It is recommended that
   * you use a subclass of <code>AV.Object</code> instead, created by calling
   * <code>extend</code>.</p>
   *
   * <p>However, if you don't want to use a subclass, or aren't sure which
   * subclass is appropriate, you can use this form:<pre>
   *     var object = new AV.Object("ClassName");
   * </pre>
   * That is basically equivalent to:<pre>
   *     var MyClass = AV.Object.extend("ClassName");
   *     var object = new MyClass();
   * </pre></p>
   *
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @see AV.Object.extend
   *
   * @class
   *
   * <p>The fundamental unit of AV data, which implements the Backbone Model
   * interface.</p>
   */
  AV.Object = function (attributes, options) {
    // Allow new AV.Object("ClassName") as a shortcut to _create.
    if (_.isString(attributes)) {
      return AV.Object._create.apply(this, arguments);
    }

    attributes = attributes || {};

    if (options && options.parse) {
      attributes = this.parse(attributes);
      attributes = this._mergeMagicFields(attributes);
    }

    var defaults = getValue(this, 'defaults');

    if (defaults) {
      attributes = _.extend({}, defaults, attributes);
    }

    if (options && options.collection) {
      this.collection = options.collection;
    }

    this._serverData = {}; // The last known data for this object from cloud.

    this._opSetQueue = [{}]; // List of sets of changes to the data.

    this._flags = {};
    this.attributes = {}; // The best estimate of this's current data.

    this._hashedJSON = {}; // Hash of values of containers at last save.

    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this.set(attributes, {
      silent: true
    });
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._hasData = true;
    this._previousAttributes = _.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };
  /**
   * @lends AV.Object.prototype
   * @property {String} id The objectId of the AV Object.
   */

  /**
   * Saves the given list of AV.Object.
   * If any error is encountered, stops and calls the error handler.
   *
   * @example
   * AV.Object.saveAll([object1, object2, ...]).then(function(list) {
   *   // All the objects were saved.
   * }, function(error) {
   *   // An error occurred while saving one of the objects.
   * });
   *
   * @param {Array} list A list of <code>AV.Object</code>.
   */


  AV.Object.saveAll = function (list, options) {
    return AV.Object._deepSaveAsync(list, null, options);
  };
  /**
   * Fetch the given list of AV.Object.
   *
   * @param {AV.Object[]} objects A list of <code>AV.Object</code>
   * @param {AuthOptions} options
   * @return {Promise.<AV.Object[]>} The given list of <code>AV.Object</code>, updated
   */


  AV.Object.fetchAll = function (objects, options) {
    return _promise.default.resolve().then(function () {
      return _request('batch', null, null, 'POST', {
        requests: (0, _map.default)(_).call(_, objects, function (object) {
          var _context;

          if (!object.className) throw new Error('object must have className to fetch');
          if (!object.id) throw new Error('object must have id to fetch');
          if (object.dirty()) throw new Error('object is modified but not saved');
          return {
            method: 'GET',
            path: (0, _concat.default)(_context = "/1.1/classes/".concat(object.className, "/")).call(_context, object.id)
          };
        })
      }, options);
    }).then(function (response) {
      var results = (0, _map.default)(_).call(_, objects, function (object, i) {
        if (response[i].success) {
          var fetchedAttrs = object.parse(response[i].success);

          object._cleanupUnsetKeys(fetchedAttrs);

          object._finishFetch(fetchedAttrs);

          return object;
        }

        if (response[i].success === null) {
          return new AVError(AVError.OBJECT_NOT_FOUND, 'Object not found.');
        }

        return new AVError(response[i].error.code, response[i].error.error);
      });
      return handleBatchResults(results);
    });
  }; // Attach all inheritable methods to the AV.Object prototype.


  _.extend(AV.Object.prototype, AV.Events,
  /** @lends AV.Object.prototype */
  {
    _fetchWhenSave: false,

    /**
     * Initialize is an empty function by default. Override it with your own
     * initialization logic.
     */
    initialize: function initialize() {},

    /**
     * Set whether to enable fetchWhenSave option when updating object.
     * When set true, SDK would fetch the latest object after saving.
     * Default is false.
     *
     * @deprecated use AV.Object#save with options.fetchWhenSave instead
     * @param {boolean} enable  true to enable fetchWhenSave option.
     */
    fetchWhenSave: function fetchWhenSave(enable) {
      console.warn('AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead.');

      if (!_.isBoolean(enable)) {
        throw new Error('Expect boolean value for fetchWhenSave');
      }

      this._fetchWhenSave = enable;
    },

    /**
     * Returns the object's objectId.
     * @return {String} the objectId.
     */
    getObjectId: function getObjectId() {
      return this.id;
    },

    /**
     * Returns the object's createdAt attribute.
     * @return {Date}
     */
    getCreatedAt: function getCreatedAt() {
      return this.createdAt;
    },

    /**
     * Returns the object's updatedAt attribute.
     * @return {Date}
     */
    getUpdatedAt: function getUpdatedAt() {
      return this.updatedAt;
    },

    /**
     * Returns a JSON version of the object.
     * @return {Object}
     */
    toJSON: function toJSON(key, holder) {
      var seenObjects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      return this._toFullJSON(seenObjects, false);
    },

    /**
     * Returns a JSON version of the object with meta data.
     * Inverse to {@link AV.parseJSON}
     * @since 3.0.0
     * @return {Object}
     */
    toFullJSON: function toFullJSON() {
      var seenObjects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return this._toFullJSON(seenObjects);
    },
    _toFullJSON: function _toFullJSON(seenObjects) {
      var _this = this;

      var full = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var json = _.clone(this.attributes);

      if (_.isArray(seenObjects)) {
        var newSeenObjects = (0, _concat.default)(seenObjects).call(seenObjects, this);
      }

      AV._objectEach(json, function (val, key) {
        json[key] = AV._encode(val, newSeenObjects, undefined, full);
      });

      AV._objectEach(this._operations, function (val, key) {
        json[key] = val;
      });

      if (_.has(this, 'id')) {
        json.objectId = this.id;
      }

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (_.has(_this, key)) {
          var val = _this[key];
          json[key] = _.isDate(val) ? val.toJSON() : val;
        }
      });

      if (full) {
        json.__type = 'Object';
        if (_.isArray(seenObjects) && seenObjects.length) json.__type = 'Pointer';
        json.className = this.className;
      }

      return json;
    },

    /**
     * Updates _hashedJSON to reflect the current state of this object.
     * Adds any changed hash values to the set of pending changes.
     * @private
     */
    _refreshCache: function _refreshCache() {
      var self = this;

      if (self._refreshingCache) {
        return;
      }

      self._refreshingCache = true;

      AV._objectEach(this.attributes, function (value, key) {
        if (value instanceof AV.Object) {
          value._refreshCache();
        } else if (_.isObject(value)) {
          if (self._resetCacheForKey(key)) {
            self.set(key, new AV.Op.Set(value), {
              silent: true
            });
          }
        }
      });

      delete self._refreshingCache;
    },

    /**
     * Returns true if this object has been modified since its last
     * save/refresh.  If an attribute is specified, it returns true only if that
     * particular attribute has been modified since the last save/refresh.
     * @param {String} attr An attribute name (optional).
     * @return {Boolean}
     */
    dirty: function dirty(attr) {
      this._refreshCache();

      var currentChanges = _.last(this._opSetQueue);

      if (attr) {
        return currentChanges[attr] ? true : false;
      }

      if (!this.id) {
        return true;
      }

      if ((0, _keys2.default)(_).call(_, currentChanges).length > 0) {
        return true;
      }

      return false;
    },

    /**
     * Returns the keys of the modified attribute since its last save/refresh.
     * @return {String[]}
     */
    dirtyKeys: function dirtyKeys() {
      this._refreshCache();

      var currentChanges = _.last(this._opSetQueue);

      return (0, _keys2.default)(_).call(_, currentChanges);
    },

    /**
     * Gets a Pointer referencing this Object.
     * @private
     */
    _toPointer: function _toPointer() {
      // if (!this.id) {
      //   throw new Error("Can't serialize an unsaved AV.Object");
      // }
      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    },

    /**
     * Gets the value of an attribute.
     * @param {String} attr The string name of an attribute.
     */
    get: function get(attr) {
      switch (attr) {
        case 'objectId':
          return this.id;

        case 'createdAt':
        case 'updatedAt':
          return this[attr];

        default:
          return this.attributes[attr];
      }
    },

    /**
     * Gets a relation on the given class for the attribute.
     * @param {String} attr The attribute to get the relation for.
     * @return {AV.Relation}
     */
    relation: function relation(attr) {
      var value = this.get(attr);

      if (value) {
        if (!(value instanceof AV.Relation)) {
          throw new Error('Called relation() on non-relation field ' + attr);
        }

        value._ensureParentAndKey(this, attr);

        return value;
      } else {
        return new AV.Relation(this, attr);
      }
    },

    /**
     * Gets the HTML-escaped value of an attribute.
     */
    escape: function escape(attr) {
      var html = this._escapedAttributes[attr];

      if (html) {
        return html;
      }

      var val = this.attributes[attr];
      var escaped;

      if (isNullOrUndefined(val)) {
        escaped = '';
      } else {
        escaped = _.escape(val.toString());
      }

      this._escapedAttributes[attr] = escaped;
      return escaped;
    },

    /**
     * Returns <code>true</code> if the attribute contains a value that is not
     * null or undefined.
     * @param {String} attr The string name of the attribute.
     * @return {Boolean}
     */
    has: function has(attr) {
      return !isNullOrUndefined(this.attributes[attr]);
    },

    /**
     * Pulls "special" fields like objectId, createdAt, etc. out of attrs
     * and puts them on "this" directly.  Removes them from attrs.
     * @param attrs - A dictionary with the data for this AV.Object.
     * @private
     */
    _mergeMagicFields: function _mergeMagicFields(attrs) {
      // Check for changes of magic fields.
      var model = this;
      var specialFields = ['objectId', 'createdAt', 'updatedAt'];

      AV._arrayEach(specialFields, function (attr) {
        if (attrs[attr]) {
          if (attr === 'objectId') {
            model.id = attrs[attr];
          } else if ((attr === 'createdAt' || attr === 'updatedAt') && !_.isDate(attrs[attr])) {
            model[attr] = AV._parseDate(attrs[attr]);
          } else {
            model[attr] = attrs[attr];
          }

          delete attrs[attr];
        }
      });

      return attrs;
    },

    /**
     * Returns the json to be sent to the server.
     * @private
     */
    _startSave: function _startSave() {
      this._opSetQueue.push({});
    },

    /**
     * Called when a save fails because of an error. Any changes that were part
     * of the save need to be merged with changes made after the save. This
     * might throw an exception is you do conflicting operations. For example,
     * if you do:
     *   object.set("foo", "bar");
     *   object.set("invalid field name", "baz");
     *   object.save();
     *   object.increment("foo");
     * then this will throw when the save fails and the client tries to merge
     * "bar" with the +1.
     * @private
     */
    _cancelSave: function _cancelSave() {
      var failedChanges = _.first(this._opSetQueue);

      this._opSetQueue = _.rest(this._opSetQueue);

      var nextChanges = _.first(this._opSetQueue);

      AV._objectEach(failedChanges, function (op, key) {
        var op1 = failedChanges[key];
        var op2 = nextChanges[key];

        if (op1 && op2) {
          nextChanges[key] = op2._mergeWithPrevious(op1);
        } else if (op1) {
          nextChanges[key] = op1;
        }
      });

      this._saving = this._saving - 1;
    },

    /**
     * Called when a save completes successfully. This merges the changes that
     * were saved into the known server data, and overrides it with any data
     * sent directly from the server.
     * @private
     */
    _finishSave: function _finishSave(serverData) {
      var _context2;

      // Grab a copy of any object referenced by this object. These instances
      // may have already been fetched, and we don't want to lose their data.
      // Note that doing it like this means we will unify separate copies of the
      // same object, but that's a risk we have to take.
      var fetchedObjects = {};

      AV._traverse(this.attributes, function (object) {
        if (object instanceof AV.Object && object.id && object._hasData) {
          fetchedObjects[object.id] = object;
        }
      });

      var savedChanges = _.first(this._opSetQueue);

      this._opSetQueue = _.rest(this._opSetQueue);

      this._applyOpSet(savedChanges, this._serverData);

      this._mergeMagicFields(serverData);

      var self = this;

      AV._objectEach(serverData, function (value, key) {
        self._serverData[key] = AV._decode(value, key); // Look for any objects that might have become unfetched and fix them
        // by replacing their values with the previously observed values.

        var fetched = AV._traverse(self._serverData[key], function (object) {
          if (object instanceof AV.Object && fetchedObjects[object.id]) {
            return fetchedObjects[object.id];
          }
        });

        if (fetched) {
          self._serverData[key] = fetched;
        }
      });

      this._rebuildAllEstimatedData();

      var opSetQueue = (0, _map.default)(_context2 = this._opSetQueue).call(_context2, _.clone);

      this._refreshCache();

      this._opSetQueue = opSetQueue;
      this._saving = this._saving - 1;
    },

    /**
     * Called when a fetch or login is complete to set the known server data to
     * the given object.
     * @private
     */
    _finishFetch: function _finishFetch(serverData, hasData) {
      // Clear out any changes the user might have made previously.
      this._opSetQueue = [{}]; // Bring in all the new server data.

      this._mergeMagicFields(serverData);

      var self = this;

      AV._objectEach(serverData, function (value, key) {
        self._serverData[key] = AV._decode(value, key);
      }); // Refresh the attributes.


      this._rebuildAllEstimatedData(); // Clear out the cache of mutable containers.


      this._refreshCache();

      this._opSetQueue = [{}];
      this._hasData = hasData;
    },

    /**
     * Applies the set of AV.Op in opSet to the object target.
     * @private
     */
    _applyOpSet: function _applyOpSet(opSet, target) {
      var self = this;

      AV._objectEach(opSet, function (change, key) {
        var _findValue = findValue(target, key),
            _findValue2 = (0, _slicedToArray2.default)(_findValue, 3),
            value = _findValue2[0],
            actualTarget = _findValue2[1],
            actualKey = _findValue2[2];

        setValue(target, key, change._estimate(value, self, key));

        if (actualTarget && actualTarget[actualKey] === AV.Op._UNSET) {
          delete actualTarget[actualKey];
        }
      });
    },

    /**
     * Replaces the cached value for key with the current value.
     * Returns true if the new value is different than the old value.
     * @private
     */
    _resetCacheForKey: function _resetCacheForKey(key) {
      var value = this.attributes[key];

      if (_.isObject(value) && !(value instanceof AV.Object) && !(value instanceof AV.File)) {
        var json = (0, _stringify.default)(recursiveToPointer(value));

        if (this._hashedJSON[key] !== json) {
          var wasSet = !!this._hashedJSON[key];
          this._hashedJSON[key] = json;
          return wasSet;
        }
      }

      return false;
    },

    /**
     * Populates attributes[key] by starting with the last known data from the
     * server, and applying all of the local changes that have been made to that
     * key since then.
     * @private
     */
    _rebuildEstimatedDataForKey: function _rebuildEstimatedDataForKey(key) {
      var self = this;
      delete this.attributes[key];

      if (this._serverData[key]) {
        this.attributes[key] = this._serverData[key];
      }

      AV._arrayEach(this._opSetQueue, function (opSet) {
        var op = opSet[key];

        if (op) {
          var _findValue3 = findValue(self.attributes, key),
              _findValue4 = (0, _slicedToArray2.default)(_findValue3, 4),
              value = _findValue4[0],
              actualTarget = _findValue4[1],
              actualKey = _findValue4[2],
              firstKey = _findValue4[3];

          setValue(self.attributes, key, op._estimate(value, self, key));

          if (actualTarget && actualTarget[actualKey] === AV.Op._UNSET) {
            delete actualTarget[actualKey];
          }

          self._resetCacheForKey(firstKey);
        }
      });
    },

    /**
     * Populates attributes by starting with the last known data from the
     * server, and applying all of the local changes that have been made since
     * then.
     * @private
     */
    _rebuildAllEstimatedData: function _rebuildAllEstimatedData() {
      var self = this;

      var previousAttributes = _.clone(this.attributes);

      this.attributes = _.clone(this._serverData);

      AV._arrayEach(this._opSetQueue, function (opSet) {
        self._applyOpSet(opSet, self.attributes);

        AV._objectEach(opSet, function (op, key) {
          self._resetCacheForKey(key);
        });
      }); // Trigger change events for anything that changed because of the fetch.


      AV._objectEach(previousAttributes, function (oldValue, key) {
        if (self.attributes[key] !== oldValue) {
          self.trigger('change:' + key, self, self.attributes[key], {});
        }
      });

      AV._objectEach(this.attributes, function (newValue, key) {
        if (!_.has(previousAttributes, key)) {
          self.trigger('change:' + key, self, newValue, {});
        }
      });
    },

    /**
     * Sets a hash of model attributes on the object, firing
     * <code>"change"</code> unless you choose to silence it.
     *
     * <p>You can call it with an object containing keys and values, or with one
     * key and value.  For example:</p>
     *
     * @example
     * gameTurn.set({
     *   player: player1,
     *   diceRoll: 2
     * });
     *
     * game.set("currentPlayer", player2);
     *
     * game.set("finished", true);
     *
     * @param {String} key The key to set.
     * @param {Any} value The value to give it.
     * @param {Object} [options]
     * @param {Boolean} [options.silent]
     * @return {AV.Object} self if succeeded, throws if the value is not valid.
     * @see AV.Object#validate
     */
    set: function set(key, value, options) {
      var attrs;

      if (_.isObject(key) || isNullOrUndefined(key)) {
        attrs = _.mapObject(key, function (v, k) {
          checkReservedKey(k);
          return AV._decode(v, k);
        });
        options = value;
      } else {
        attrs = {};
        checkReservedKey(key);
        attrs[key] = AV._decode(value, key);
      } // Extract attributes and options.


      options = options || {};

      if (!attrs) {
        return this;
      }

      if (attrs instanceof AV.Object) {
        attrs = attrs.attributes;
      } // If the unset option is used, every attribute should be a Unset.


      if (options.unset) {
        AV._objectEach(attrs, function (unused_value, key) {
          attrs[key] = new AV.Op.Unset();
        });
      } // Apply all the attributes to get the estimated values.


      var dataToValidate = _.clone(attrs);

      var self = this;

      AV._objectEach(dataToValidate, function (value, key) {
        if (value instanceof AV.Op) {
          dataToValidate[key] = value._estimate(self.attributes[key], self, key);

          if (dataToValidate[key] === AV.Op._UNSET) {
            delete dataToValidate[key];
          }
        }
      }); // Run validation.


      this._validate(attrs, options);

      options.changes = {};
      var escaped = this._escapedAttributes; // Update attributes.

      AV._arrayEach((0, _keys2.default)(_).call(_, attrs), function (attr) {
        var val = attrs[attr]; // If this is a relation object we need to set the parent correctly,
        // since the location where it was parsed does not have access to
        // this object.

        if (val instanceof AV.Relation) {
          val.parent = self;
        }

        if (!(val instanceof AV.Op)) {
          val = new AV.Op.Set(val);
        } // See if this change will actually have any effect.


        var isRealChange = true;

        if (val instanceof AV.Op.Set && _.isEqual(self.attributes[attr], val.value)) {
          isRealChange = false;
        }

        if (isRealChange) {
          delete escaped[attr];

          if (options.silent) {
            self._silent[attr] = true;
          } else {
            options.changes[attr] = true;
          }
        }

        var currentChanges = _.last(self._opSetQueue);

        currentChanges[attr] = val._mergeWithPrevious(currentChanges[attr]);

        self._rebuildEstimatedDataForKey(attr);

        if (isRealChange) {
          self.changed[attr] = self.attributes[attr];

          if (!options.silent) {
            self._pending[attr] = true;
          }
        } else {
          delete self.changed[attr];
          delete self._pending[attr];
        }
      });

      if (!options.silent) {
        this.change(options);
      }

      return this;
    },

    /**
     * Remove an attribute from the model, firing <code>"change"</code> unless
     * you choose to silence it. This is a noop if the attribute doesn't
     * exist.
     * @param key {String} The key.
     */
    unset: function unset(attr, options) {
      options = options || {};
      options.unset = true;
      return this.set(attr, null, options);
    },

    /**
     * Atomically increments the value of the given attribute the next time the
     * object is saved. If no amount is specified, 1 is used by default.
     *
     * @param key {String} The key.
     * @param amount {Number} The amount to increment by.
     */
    increment: function increment(attr, amount) {
      if (_.isUndefined(amount) || _.isNull(amount)) {
        amount = 1;
      }

      return this.set(attr, new AV.Op.Increment(amount));
    },

    /**
     * Atomically add an object to the end of the array associated with a given
     * key.
     * @param key {String} The key.
     * @param item {} The item to add.
     */
    add: function add(attr, item) {
      return this.set(attr, new AV.Op.Add(ensureArray(item)));
    },

    /**
     * Atomically add an object to the array associated with a given key, only
     * if it is not already present in the array. The position of the insert is
     * not guaranteed.
     *
     * @param key {String} The key.
     * @param item {} The object to add.
     */
    addUnique: function addUnique(attr, item) {
      return this.set(attr, new AV.Op.AddUnique(ensureArray(item)));
    },

    /**
     * Atomically remove all instances of an object from the array associated
     * with a given key.
     *
     * @param key {String} The key.
     * @param item {} The object to remove.
     */
    remove: function remove(attr, item) {
      return this.set(attr, new AV.Op.Remove(ensureArray(item)));
    },

    /**
     * Atomically apply a "bit and" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitAnd: function bitAnd(attr, value) {
      return this.set(attr, new AV.Op.BitAnd(value));
    },

    /**
     * Atomically apply a "bit or" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitOr: function bitOr(attr, value) {
      return this.set(attr, new AV.Op.BitOr(value));
    },

    /**
     * Atomically apply a "bit xor" operation on the value associated with a
     * given key.
     *
     * @param key {String} The key.
     * @param value {Number} The value to apply.
     */
    bitXor: function bitXor(attr, value) {
      return this.set(attr, new AV.Op.BitXor(value));
    },

    /**
     * Returns an instance of a subclass of AV.Op describing what kind of
     * modification has been performed on this field since the last time it was
     * saved. For example, after calling object.increment("x"), calling
     * object.op("x") would return an instance of AV.Op.Increment.
     *
     * @param key {String} The key.
     * @returns {AV.Op} The operation, or undefined if none.
     */
    op: function op(attr) {
      return _.last(this._opSetQueue)[attr];
    },

    /**
     * Clear all attributes on the model, firing <code>"change"</code> unless
     * you choose to silence it.
     */
    clear: function clear(options) {
      options = options || {};
      options.unset = true;

      var keysToClear = _.extend(this.attributes, this._operations);

      return this.set(keysToClear, options);
    },

    /**
     * Clears any (or specific) changes to the model made since the last save.
     * @param {string|string[]} [keys] specify keys to revert.
     */
    revert: function revert(keys) {
      var lastOp = _.last(this._opSetQueue);

      var _keys = ensureArray(keys || (0, _keys2.default)(_).call(_, lastOp));

      _keys.forEach(function (key) {
        delete lastOp[key];
      });

      this._rebuildAllEstimatedData();

      return this;
    },

    /**
     * Returns a JSON-encoded set of operations to be sent with the next save
     * request.
     * @private
     */
    _getSaveJSON: function _getSaveJSON() {
      var json = _.clone(_.first(this._opSetQueue));

      AV._objectEach(json, function (op, key) {
        json[key] = op.toJSON();
      });

      return json;
    },

    /**
     * Returns true if this object can be serialized for saving.
     * @private
     */
    _canBeSerialized: function _canBeSerialized() {
      return AV.Object._canBeSerializedAsValue(this.attributes);
    },

    /**
     * Fetch the model from the server. If the server's representation of the
     * model differs from its current attributes, they will be overriden,
     * triggering a <code>"change"</code> event.
     * @param {Object} fetchOptions Optional options to set 'keys',
     *      'include' and 'includeACL' option.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the fetch
     *     completes.
     */
    fetch: function fetch() {
      var fetchOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 ? arguments[1] : undefined;

      if (!this.id) {
        throw new Error('Cannot fetch unsaved object');
      }

      var self = this;

      var request = _request('classes', this.className, this.id, 'GET', transformFetchOptions(fetchOptions), options);

      return request.then(function (response) {
        var fetchedAttrs = self.parse(response);

        self._cleanupUnsetKeys(fetchedAttrs, (0, _keys2.default)(fetchOptions) ? ensureArray((0, _keys2.default)(fetchOptions)).join(',').split(',') : undefined);

        self._finishFetch(fetchedAttrs, true);

        return self;
      });
    },
    _cleanupUnsetKeys: function _cleanupUnsetKeys(fetchedAttrs) {
      var _this2 = this;

      var fetchedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _keys2.default)(_).call(_, this._serverData);

      _.forEach(fetchedKeys, function (key) {
        if (fetchedAttrs[key] === undefined) delete _this2._serverData[key];
      });
    },

    /**
     * Set a hash of model attributes, and save the model to the server.
     * updatedAt will be updated when the request returns.
     * You can either call it as:<pre>
     *   object.save();</pre>
     * or<pre>
     *   object.save(null, options);</pre>
     * or<pre>
     *   object.save(attrs, options);</pre>
     * or<pre>
     *   object.save(key, value, options);</pre>
     *
     * @example
     * gameTurn.save({
     *   player: "Jake Cutter",
     *   diceRoll: 2
     * }).then(function(gameTurnAgain) {
     *   // The save was successful.
     * }, function(error) {
     *   // The save failed.  Error is an instance of AVError.
     * });
     *
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} options.fetchWhenSave fetch and update object after save succeeded
     * @param {AV.Query} options.query Save object only when it matches the query
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     * @see AVError
     */
    save: function save(arg1, arg2, arg3) {
      var attrs, current, options;

      if (_.isObject(arg1) || isNullOrUndefined(arg1)) {
        attrs = arg1;
        options = arg2;
      } else {
        attrs = {};
        attrs[arg1] = arg2;
        options = arg3;
      }

      options = _.clone(options) || {};

      if (options.wait) {
        current = _.clone(this.attributes);
      }

      var setOptions = _.clone(options) || {};

      if (setOptions.wait) {
        setOptions.silent = true;
      }

      if (attrs) {
        this.set(attrs, setOptions);
      }

      var model = this;
      var unsavedChildren = [];
      var unsavedFiles = [];

      AV.Object._findUnsavedChildren(model, unsavedChildren, unsavedFiles);

      if (unsavedChildren.length + unsavedFiles.length > 1) {
        return AV.Object._deepSaveAsync(this, model, options);
      }

      this._startSave();

      this._saving = (this._saving || 0) + 1;
      this._allPreviousSaves = this._allPreviousSaves || _promise.default.resolve();
      this._allPreviousSaves = this._allPreviousSaves.catch(function (e) {}).then(function () {
        var method = model.id ? 'PUT' : 'POST';

        var json = model._getSaveJSON();

        var query = {};

        if (model._fetchWhenSave || options.fetchWhenSave) {
          query['new'] = 'true';
        } // user login option


        if (options._failOnNotExist) {
          query.failOnNotExist = 'true';
        }

        if (options.query) {
          var queryParams;

          if (typeof options.query._getParams === 'function') {
            queryParams = options.query._getParams();

            if (queryParams) {
              query.where = queryParams.where;
            }
          }

          if (!query.where) {
            var error = new Error('options.query is not an AV.Query');
            throw error;
          }
        }

        _.extend(json, model._flags);

        var route = 'classes';
        var className = model.className;

        if (model.className === '_User' && !model.id) {
          // Special-case user sign-up.
          route = 'users';
          className = null;
        } //hook makeRequest in options.


        var makeRequest = options._makeRequest || _request;
        var requestPromise = makeRequest(route, className, model.id, method, json, options, query);
        requestPromise = requestPromise.then(function (resp) {
          var serverAttrs = model.parse(resp);

          if (options.wait) {
            serverAttrs = _.extend(attrs || {}, serverAttrs);
          }

          model._finishSave(serverAttrs);

          if (options.wait) {
            model.set(current, setOptions);
          }

          return model;
        }, function (error) {
          model._cancelSave();

          throw error;
        });
        return requestPromise;
      });
      return this._allPreviousSaves;
    },

    /**
     * Destroy this model on the server if it was already persisted.
     * Optimistically removes the model from its collection, if it has one.
     * @param {AuthOptions} options AuthOptions plus:
     * @param {Boolean} [options.wait] wait for the server to respond
     * before removal.
     *
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
    destroy: function destroy(options) {
      options = options || {};
      var model = this;

      var triggerDestroy = function triggerDestroy() {
        model.trigger('destroy', model, model.collection, options);
      };

      if (!this.id) {
        return triggerDestroy();
      }

      if (!options.wait) {
        triggerDestroy();
      }

      var request = _request('classes', this.className, this.id, 'DELETE', this._flags, options);

      return request.then(function () {
        if (options.wait) {
          triggerDestroy();
        }

        return model;
      });
    },

    /**
     * Converts a response into the hash of attributes to be set on the model.
     * @ignore
     */
    parse: function parse(resp) {
      var output = _.clone(resp);

      ['createdAt', 'updatedAt'].forEach(function (key) {
        if (output[key]) {
          output[key] = AV._parseDate(output[key]);
        }
      });

      if (output.createdAt && !output.updatedAt) {
        output.updatedAt = output.createdAt;
      }

      return output;
    },

    /**
     * Creates a new model with identical attributes to this one.
     * @return {AV.Object}
     */
    clone: function clone() {
      return new this.constructor(this.attributes);
    },

    /**
     * Returns true if this object has never been saved to AV.
     * @return {Boolean}
     */
    isNew: function isNew() {
      return !this.id;
    },

    /**
     * Call this method to manually fire a `"change"` event for this model and
     * a `"change:attribute"` event for each changed attribute.
     * Calling this will cause all objects observing the model to update.
     */
    change: function change(options) {
      options = options || {};
      var changing = this._changing;
      this._changing = true; // Silent changes become pending changes.

      var self = this;

      AV._objectEach(this._silent, function (attr) {
        self._pending[attr] = true;
      }); // Silent changes are triggered.


      var changes = _.extend({}, options.changes, this._silent);

      this._silent = {};

      AV._objectEach(changes, function (unused_value, attr) {
        self.trigger('change:' + attr, self, self.get(attr), options);
      });

      if (changing) {
        return this;
      } // This is to get around lint not letting us make a function in a loop.


      var deleteChanged = function deleteChanged(value, attr) {
        if (!self._pending[attr] && !self._silent[attr]) {
          delete self.changed[attr];
        }
      }; // Continue firing `"change"` events while there are pending changes.


      while (!_.isEmpty(this._pending)) {
        this._pending = {};
        this.trigger('change', this, options); // Pending and silent changes still remain.

        AV._objectEach(this.changed, deleteChanged);

        self._previousAttributes = _.clone(this.attributes);
      }

      this._changing = false;
      return this;
    },

    /**
     * Gets the previous value of an attribute, recorded at the time the last
     * <code>"change"</code> event was fired.
     * @param {String} attr Name of the attribute to get.
     */
    previous: function previous(attr) {
      if (!arguments.length || !this._previousAttributes) {
        return null;
      }

      return this._previousAttributes[attr];
    },

    /**
     * Gets all of the attributes of the model at the time of the previous
     * <code>"change"</code> event.
     * @return {Object}
     */
    previousAttributes: function previousAttributes() {
      return _.clone(this._previousAttributes);
    },

    /**
     * Checks if the model is currently in a valid state. It's only possible to
     * get into an *invalid* state if you're using silent changes.
     * @return {Boolean}
     */
    isValid: function isValid() {
      try {
        this.validate(this.attributes);
      } catch (error) {
        return false;
      }

      return true;
    },

    /**
     * You should not call this function directly unless you subclass
     * <code>AV.Object</code>, in which case you can override this method
     * to provide additional validation on <code>set</code> and
     * <code>save</code>.  Your implementation should throw an Error if
     * the attrs is invalid
     *
     * @param {Object} attrs The current data to validate.
     * @see AV.Object#set
     */
    validate: function validate(attrs) {
      if (_.has(attrs, 'ACL') && !(attrs.ACL instanceof AV.ACL)) {
        throw new AVError(AVError.OTHER_CAUSE, 'ACL must be a AV.ACL.');
      }
    },

    /**
     * Run validation against a set of incoming attributes, returning `true`
     * if all is well. If a specific `error` callback has been passed,
     * call that instead of firing the general `"error"` event.
     * @private
     */
    _validate: function _validate(attrs, options) {
      if (options.silent || !this.validate) {
        return;
      }

      attrs = _.extend({}, this.attributes, attrs);
      this.validate(attrs);
    },

    /**
     * Returns the ACL for this object.
     * @returns {AV.ACL} An instance of AV.ACL.
     * @see AV.Object#get
     */
    getACL: function getACL() {
      return this.get('ACL');
    },

    /**
     * Sets the ACL to be used for this object.
     * @param {AV.ACL} acl An instance of AV.ACL.
     * @param {Object} options Optional Backbone-like options object to be
     *     passed in to set.
     * @return {AV.Object} self
     * @see AV.Object#set
     */
    setACL: function setACL(acl, options) {
      return this.set('ACL', acl, options);
    },
    disableBeforeHook: function disableBeforeHook() {
      this.ignoreHook('beforeSave');
      this.ignoreHook('beforeUpdate');
      this.ignoreHook('beforeDelete');
    },
    disableAfterHook: function disableAfterHook() {
      this.ignoreHook('afterSave');
      this.ignoreHook('afterUpdate');
      this.ignoreHook('afterDelete');
    },
    ignoreHook: function ignoreHook(hookName) {
      if (!_.contains(['beforeSave', 'afterSave', 'beforeUpdate', 'afterUpdate', 'beforeDelete', 'afterDelete'], hookName)) {
        throw new Error('Unsupported hookName: ' + hookName);
      }

      if (!AV.hookKey) {
        throw new Error('ignoreHook required hookKey');
      }

      if (!this._flags.__ignore_hooks) {
        this._flags.__ignore_hooks = [];
      }

      this._flags.__ignore_hooks.push(hookName);
    }
  });
  /**
   * Creates an instance of a subclass of AV.Object for the give classname
   * and id.
   * @param  {String|Function} class the className or a subclass of AV.Object.
   * @param {String} id The object id of this model.
   * @return {AV.Object} A new subclass instance of AV.Object.
   */


  AV.Object.createWithoutData = function (klass, id, hasData) {
    var _klass;

    if (_.isString(klass)) {
      _klass = AV.Object._getSubclass(klass);
    } else if (klass.prototype && klass.prototype instanceof AV.Object) {
      _klass = klass;
    } else {
      throw new Error('class must be a string or a subclass of AV.Object.');
    }

    if (!id) {
      throw new TypeError('The objectId must be provided');
    }

    var object = new _klass();
    object.id = id;
    object._hasData = hasData;
    return object;
  };
  /**
   * Delete objects in batch.
   * @param {AV.Object[]} objects The <code>AV.Object</code> array to be deleted.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the save
   *     completes.
   */


  AV.Object.destroyAll = function (objects) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!objects || objects.length === 0) {
      return _promise.default.resolve();
    }

    var objectsByClassNameAndFlags = _.groupBy(objects, function (object) {
      return (0, _stringify.default)({
        className: object.className,
        flags: object._flags
      });
    });

    var body = {
      requests: (0, _map.default)(_).call(_, objectsByClassNameAndFlags, function (objects) {
        var _context3;

        var ids = (0, _map.default)(_).call(_, objects, 'id').join(',');
        return {
          method: 'DELETE',
          path: (0, _concat.default)(_context3 = "/1.1/classes/".concat(objects[0].className, "/")).call(_context3, ids),
          body: objects[0]._flags
        };
      })
    };
    return _request('batch', null, null, 'POST', body, options).then(function (response) {
      var firstError = (0, _find.default)(_).call(_, response, function (result) {
        return !result.success;
      });
      if (firstError) throw new AVError(firstError.error.code, firstError.error.error);
      return undefined;
    });
  };
  /**
   * Returns the appropriate subclass for making new instances of the given
   * className string.
   * @private
   */


  AV.Object._getSubclass = function (className) {
    if (!_.isString(className)) {
      throw new Error('AV.Object._getSubclass requires a string argument.');
    }

    var ObjectClass = AV.Object._classMap[className];

    if (!ObjectClass) {
      ObjectClass = AV.Object.extend(className);
      AV.Object._classMap[className] = ObjectClass;
    }

    return ObjectClass;
  };
  /**
   * Creates an instance of a subclass of AV.Object for the given classname.
   * @private
   */


  AV.Object._create = function (className, attributes, options) {
    var ObjectClass = AV.Object._getSubclass(className);

    return new ObjectClass(attributes, options);
  }; // Set up a map of className to class so that we can create new instances of
  // AV Objects from JSON automatically.


  AV.Object._classMap = {};
  AV.Object._extend = AV._extend;
  /**
   * Creates a new model with defined attributes,
   * It's the same with
   * <pre>
   *   new AV.Object(attributes, options);
   *  </pre>
   * @param {Object} attributes The initial set of data to store in the object.
   * @param {Object} options A set of Backbone-like options for creating the
   *     object.  The only option currently supported is "collection".
   * @return {AV.Object}
   * @since v0.4.4
   * @see AV.Object
   * @see AV.Object.extend
   */

  AV.Object['new'] = function (attributes, options) {
    return new AV.Object(attributes, options);
  };
  /**
   * Creates a new subclass of AV.Object for the given AV class name.
   *
   * <p>Every extension of a AV class will inherit from the most recent
   * previous extension of that class. When a AV.Object is automatically
   * created by parsing JSON, it will use the most recent extension of that
   * class.</p>
   *
   * @example
   * var MyClass = AV.Object.extend("MyClass", {
   *     // Instance properties
   * }, {
   *     // Class properties
   * });
   *
   * @param {String} className The name of the AV class backing this model.
   * @param {Object} protoProps Instance properties to add to instances of the
   *     class returned from this method.
   * @param {Object} classProps Class properties to add the class returned from
   *     this method.
   * @return {Class} A new subclass of AV.Object.
   */


  AV.Object.extend = function (className, protoProps, classProps) {
    // Handle the case with only two args.
    if (!_.isString(className)) {
      if (className && _.has(className, 'className')) {
        return AV.Object.extend(className.className, className, protoProps);
      } else {
        throw new Error("AV.Object.extend's first argument should be the className.");
      }
    } // If someone tries to subclass "User", coerce it to the right type.


    if (className === 'User') {
      className = '_User';
    }

    var NewClassObject = null;

    if (_.has(AV.Object._classMap, className)) {
      var OldClassObject = AV.Object._classMap[className]; // This new subclass has been told to extend both from "this" and from
      // OldClassObject. This is multiple inheritance, which isn't supported.
      // For now, let's just pick one.

      if (protoProps || classProps) {
        NewClassObject = OldClassObject._extend(protoProps, classProps);
      } else {
        return OldClassObject;
      }
    } else {
      protoProps = protoProps || {};
      protoProps._className = className;
      NewClassObject = this._extend(protoProps, classProps);
    } // Extending a subclass should reuse the classname automatically.


    NewClassObject.extend = function (arg0) {
      var _context4;

      if (_.isString(arg0) || arg0 && _.has(arg0, 'className')) {
        return AV.Object.extend.apply(NewClassObject, arguments);
      }

      var newArguments = (0, _concat.default)(_context4 = [className]).call(_context4, _.toArray(arguments));
      return AV.Object.extend.apply(NewClassObject, newArguments);
    }; // Add the query property descriptor.


    (0, _defineProperty.default)(NewClassObject, 'query', (0, _getOwnPropertyDescriptor.default)(AV.Object, 'query'));

    NewClassObject['new'] = function (attributes, options) {
      return new NewClassObject(attributes, options);
    };

    AV.Object._classMap[className] = NewClassObject;
    return NewClassObject;
  }; // ES6 class syntax support


  (0, _defineProperty.default)(AV.Object.prototype, 'className', {
    get: function get() {
      var className = this._className || this.constructor._LCClassName || this.constructor.name; // If someone tries to subclass "User", coerce it to the right type.

      if (className === 'User') {
        return '_User';
      }

      return className;
    }
  });
  /**
   * Register a class.
   * If a subclass of <code>AV.Object</code> is defined with your own implement
   * rather then <code>AV.Object.extend</code>, the subclass must be registered.
   * @param {Function} klass A subclass of <code>AV.Object</code>
   * @param {String} [name] Specify the name of the class. Useful when the class might be uglified.
   * @example
   * class Person extend AV.Object {}
   * AV.Object.register(Person);
   */

  AV.Object.register = function (klass, name) {
    if (!(klass.prototype instanceof AV.Object)) {
      throw new Error('registered class is not a subclass of AV.Object');
    }

    var className = name || klass.name;

    if (!className.length) {
      throw new Error('registered class must be named');
    }

    if (name) {
      klass._LCClassName = name;
    }

    AV.Object._classMap[className] = klass;
  };
  /**
   * Get a new Query of the current class
   * @name query
   * @memberof AV.Object
   * @type AV.Query
   * @readonly
   * @since v3.1.0
   * @example
   * const Post = AV.Object.extend('Post');
   * Post.query.equalTo('author', 'leancloud').find().then();
   */


  (0, _defineProperty.default)(AV.Object, 'query', {
    get: function get() {
      return new AV.Query(this.prototype.className);
    }
  });

  AV.Object._findUnsavedChildren = function (objects, children, files) {
    AV._traverse(objects, function (object) {
      if (object instanceof AV.Object) {
        if (object.dirty()) {
          children.push(object);
        }

        return;
      }

      if (object instanceof AV.File) {
        if (!object.id) {
          files.push(object);
        }

        return;
      }
    });
  };

  AV.Object._canBeSerializedAsValue = function (object) {
    var canBeSerializedAsValue = true;

    if (object instanceof AV.Object || object instanceof AV.File) {
      canBeSerializedAsValue = !!object.id;
    } else if (_.isArray(object)) {
      AV._arrayEach(object, function (child) {
        if (!AV.Object._canBeSerializedAsValue(child)) {
          canBeSerializedAsValue = false;
        }
      });
    } else if (_.isObject(object)) {
      AV._objectEach(object, function (child) {
        if (!AV.Object._canBeSerializedAsValue(child)) {
          canBeSerializedAsValue = false;
        }
      });
    }

    return canBeSerializedAsValue;
  };

  AV.Object._deepSaveAsync = function (object, model, options) {
    var unsavedChildren = [];
    var unsavedFiles = [];

    AV.Object._findUnsavedChildren(object, unsavedChildren, unsavedFiles);

    unsavedFiles = _.uniq(unsavedFiles);

    var promise = _promise.default.resolve();

    _.each(unsavedFiles, function (file) {
      promise = promise.then(function () {
        return file.save();
      });
    });

    var objects = _.uniq(unsavedChildren);

    var remaining = _.uniq(objects);

    return promise.then(function () {
      return continueWhile(function () {
        return remaining.length > 0;
      }, function () {
        // Gather up all the objects that can be saved in this batch.
        var batch = [];
        var newRemaining = [];

        AV._arrayEach(remaining, function (object) {
          if (object._canBeSerialized()) {
            batch.push(object);
          } else {
            newRemaining.push(object);
          }
        });

        remaining = newRemaining; // If we can't save any objects, there must be a circular reference.

        if (batch.length === 0) {
          return _promise.default.reject(new AVError(AVError.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
        } // Reserve a spot in every object's save queue.


        var readyToStart = _promise.default.resolve((0, _map.default)(_).call(_, batch, function (object) {
          return object._allPreviousSaves || _promise.default.resolve();
        })); // Save a single batch, whether previous saves succeeded or failed.


        var bathSavePromise = readyToStart.then(function () {
          return _request('batch', null, null, 'POST', {
            requests: (0, _map.default)(_).call(_, batch, function (object) {
              var method = object.id ? 'PUT' : 'POST';

              var json = object._getSaveJSON();

              _.extend(json, object._flags);

              var route = 'classes';
              var className = object.className;
              var path = "/".concat(route, "/").concat(className);

              if (object.className === '_User' && !object.id) {
                // Special-case user sign-up.
                path = '/users';
              }

              var path = "/1.1".concat(path);

              if (object.id) {
                path = path + '/' + object.id;
              }

              object._startSave();

              return {
                method: method,
                path: path,
                body: json,
                params: options && options.fetchWhenSave ? {
                  fetchWhenSave: true
                } : undefined
              };
            })
          }, options).then(function (response) {
            var results = (0, _map.default)(_).call(_, batch, function (object, i) {
              if (response[i].success) {
                object._finishSave(object.parse(response[i].success));

                return object;
              }

              object._cancelSave();

              return new AVError(response[i].error.code, response[i].error.error);
            });
            return handleBatchResults(results);
          });
        });

        AV._arrayEach(batch, function (object) {
          object._allPreviousSaves = bathSavePromise;
        });

        return bathSavePromise;
      });
    }).then(function () {
      return object;
    });
  };
};

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(506);

var iterableToArrayLimit = __webpack_require__(514);

var unsupportedIterableToArray = __webpack_require__(515);

var nonIterableRest = __webpack_require__(525);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(507);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(508);

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(509);


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(510);

module.exports = parent;


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(511);

module.exports = parent;


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(512);

module.exports = parent;


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(513);
var path = __webpack_require__(15);

module.exports = path.Array.isArray;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var isArray = __webpack_require__(86);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(229);

var _getIteratorMethod = __webpack_require__(238);

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof _Symbol !== "undefined" && _getIteratorMethod(arr) || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var _sliceInstanceProperty = __webpack_require__(516);

var _Array$from = __webpack_require__(520);

var arrayLikeToArray = __webpack_require__(524);

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(517);

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(518);


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(519);

module.exports = parent;


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(227);

module.exports = parent;


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(521);

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(522);


/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(523);

module.exports = parent;


/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(237);

module.exports = parent;


/***/ }),
/* 524 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 525 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(527);

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(528);

module.exports = parent;


/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(529);
var path = __webpack_require__(15);

var Object = path.Object;

var getOwnPropertyDescriptor = module.exports = function getOwnPropertyDescriptor(it, key) {
  return Object.getOwnPropertyDescriptor(it, key);
};

if (Object.getOwnPropertyDescriptor.sham) getOwnPropertyDescriptor.sham = true;


/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(0);
var fails = __webpack_require__(3);
var toIndexedObject = __webpack_require__(35);
var nativeGetOwnPropertyDescriptor = __webpack_require__(73).f;
var DESCRIPTORS = __webpack_require__(20);

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2);

var AVError = __webpack_require__(43);

module.exports = function (AV) {
  AV.Role = AV.Object.extend('_Role',
  /** @lends AV.Role.prototype */
  {
    // Instance Methods

    /**
     * Represents a Role on the AV server. Roles represent groupings of
     * Users for the purposes of granting permissions (e.g. specifying an ACL
     * for an Object). Roles are specified by their sets of child users and
     * child roles, all of which are granted any permissions that the parent
     * role has.
     *
     * <p>Roles must have a name (which cannot be changed after creation of the
     * role), and must specify an ACL.</p>
     * An AV.Role is a local representation of a role persisted to the AV
     * cloud.
     * @class AV.Role
     * @param {String} name The name of the Role to create.
     * @param {AV.ACL} acl The ACL for this role.
     */
    constructor: function constructor(name, acl) {
      if (_.isString(name)) {
        AV.Object.prototype.constructor.call(this, null, null);
        this.setName(name);
      } else {
        AV.Object.prototype.constructor.call(this, name, acl);
      }

      if (acl) {
        if (!(acl instanceof AV.ACL)) {
          throw new TypeError('acl must be an instance of AV.ACL');
        } else {
          this.setACL(acl);
        }
      }
    },

    /**
     * Gets the name of the role.  You can alternatively call role.get("name")
     *
     * @return {String} the name of the role.
     */
    getName: function getName() {
      return this.get('name');
    },

    /**
     * Sets the name for a role. This value must be set before the role has
     * been saved to the server, and cannot be set once the role has been
     * saved.
     *
     * <p>
     *   A role's name can only contain alphanumeric characters, _, -, and
     *   spaces.
     * </p>
     *
     * <p>This is equivalent to calling role.set("name", name)</p>
     *
     * @param {String} name The name of the role.
     */
    setName: function setName(name, options) {
      return this.set('name', name, options);
    },

    /**
     * Gets the AV.Relation for the AV.Users that are direct
     * children of this role. These users are granted any privileges that this
     * role has been granted (e.g. read or write access through ACLs). You can
     * add or remove users from the role through this relation.
     *
     * <p>This is equivalent to calling role.relation("users")</p>
     *
     * @return {AV.Relation} the relation for the users belonging to this
     *     role.
     */
    getUsers: function getUsers() {
      return this.relation('users');
    },

    /**
     * Gets the AV.Relation for the AV.Roles that are direct
     * children of this role. These roles' users are granted any privileges that
     * this role has been granted (e.g. read or write access through ACLs). You
     * can add or remove child roles from this role through this relation.
     *
     * <p>This is equivalent to calling role.relation("roles")</p>
     *
     * @return {AV.Relation} the relation for the roles belonging to this
     *     role.
     */
    getRoles: function getRoles() {
      return this.relation('roles');
    },

    /**
     * @ignore
     */
    validate: function validate(attrs, options) {
      if ('name' in attrs && attrs.name !== this.getName()) {
        var newName = attrs.name;

        if (this.id && this.id !== attrs.objectId) {
          // Check to see if the objectId being set matches this.id.
          // This happens during a fetch -- the id is set before calling fetch.
          // Let the name be set in this case.
          return new AVError(AVError.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
        }

        if (!_.isString(newName)) {
          return new AVError(AVError.OTHER_CAUSE, "A role's name must be a String.");
        }

        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
          return new AVError(AVError.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _," + ' -, and spaces.');
        }
      }

      if (AV.Object.prototype.validate) {
        return AV.Object.prototype.validate.call(this, attrs, options);
      }

      return false;
    }
  });
};

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _defineProperty2 = _interopRequireDefault(__webpack_require__(532));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _map = _interopRequireDefault(__webpack_require__(42));

var _find = _interopRequireDefault(__webpack_require__(107));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _ = __webpack_require__(2);

var uuid = __webpack_require__(219);

var AVError = __webpack_require__(43);

var _require = __webpack_require__(27),
    AVRequest = _require._request,
    request = _require.request;

var _require2 = __webpack_require__(70),
    getAdapter = _require2.getAdapter;

var PLATFORM_ANONYMOUS = 'anonymous';
var PLATFORM_QQAPP = 'lc_qqapp';

var mergeUnionDataIntoAuthData = function mergeUnionDataIntoAuthData() {
  var defaultUnionIdPlatform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'weixin';
  return function (authData, unionId) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$unionIdPlatform = _ref.unionIdPlatform,
        unionIdPlatform = _ref$unionIdPlatform === void 0 ? defaultUnionIdPlatform : _ref$unionIdPlatform,
        _ref$asMainAccount = _ref.asMainAccount,
        asMainAccount = _ref$asMainAccount === void 0 ? false : _ref$asMainAccount;

    if (typeof unionId !== 'string') throw new AVError(AVError.OTHER_CAUSE, 'unionId is not a string');
    if (typeof unionIdPlatform !== 'string') throw new AVError(AVError.OTHER_CAUSE, 'unionIdPlatform is not a string');
    return _.extend({}, authData, {
      platform: unionIdPlatform,
      unionid: unionId,
      main_account: Boolean(asMainAccount)
    });
  };
};

module.exports = function (AV) {
  /**
   * @class
   *
   * <p>An AV.User object is a local representation of a user persisted to the
   * LeanCloud server. This class is a subclass of an AV.Object, and retains the
   * same functionality of an AV.Object, but also extends it with various
   * user specific methods, like authentication, signing up, and validation of
   * uniqueness.</p>
   */
  AV.User = AV.Object.extend('_User',
  /** @lends AV.User.prototype */
  {
    // Instance Variables
    _isCurrentUser: false,
    // Instance Methods

    /**
     * Internal method to handle special fields in a _User response.
     * @private
     */
    _mergeMagicFields: function _mergeMagicFields(attrs) {
      if (attrs.sessionToken) {
        this._sessionToken = attrs.sessionToken;
        delete attrs.sessionToken;
      }

      return AV.User.__super__._mergeMagicFields.call(this, attrs);
    },

    /**
     * Removes null values from authData (which exist temporarily for
     * unlinking)
     * @private
     */
    _cleanupAuthData: function _cleanupAuthData() {
      if (!this.isCurrent()) {
        return;
      }

      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      AV._objectEach(this.get('authData'), function (value, key) {
        if (!authData[key]) {
          delete authData[key];
        }
      });
    },

    /**
     * Synchronizes authData for all providers.
     * @private
     */
    _synchronizeAllAuthData: function _synchronizeAllAuthData() {
      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      var self = this;

      AV._objectEach(this.get('authData'), function (value, key) {
        self._synchronizeAuthData(key);
      });
    },

    /**
     * Synchronizes auth data for a provider (e.g. puts the access token in the
     * right place to be used by the Facebook SDK).
     * @private
     */
    _synchronizeAuthData: function _synchronizeAuthData(provider) {
      if (!this.isCurrent()) {
        return;
      }

      var authType;

      if (_.isString(provider)) {
        authType = provider;
        provider = AV.User._authProviders[authType];
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData');

      if (!authData || !provider) {
        return;
      }

      var success = provider.restoreAuthentication(authData[authType]);

      if (!success) {
        this.dissociateAuthData(provider);
      }
    },
    _handleSaveResult: function _handleSaveResult(makeCurrent) {
      // Clean up and synchronize the authData object, removing any unset values
      if (makeCurrent && !AV._config.disableCurrentUser) {
        this._isCurrentUser = true;
      }

      this._cleanupAuthData();

      this._synchronizeAllAuthData(); // Don't keep the password around.


      delete this._serverData.password;

      this._rebuildEstimatedDataForKey('password');

      this._refreshCache();

      if ((makeCurrent || this.isCurrent()) && !AV._config.disableCurrentUser) {
        // Some old version of leanengine-node-sdk will overwrite
        // AV.User._saveCurrentUser which returns no Promise.
        // So we need a Promise wrapper.
        return _promise.default.resolve(AV.User._saveCurrentUser(this));
      } else {
        return _promise.default.resolve();
      }
    },

    /**
     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
     * call linkWith on the user (even if it doesn't exist yet on the server).
     * @private
     */
    _linkWith: function _linkWith(provider, data) {
      var _this = this;

      var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref2$failOnNotExist = _ref2.failOnNotExist,
          failOnNotExist = _ref2$failOnNotExist === void 0 ? false : _ref2$failOnNotExist,
          useMasterKey = _ref2.useMasterKey,
          sessionToken = _ref2.sessionToken,
          user = _ref2.user;

      var authType;

      if (_.isString(provider)) {
        authType = provider;
        provider = AV.User._authProviders[provider];
      } else {
        authType = provider.getAuthType();
      }

      if (data) {
        return this.save({
          authData: (0, _defineProperty2.default)({}, authType, data)
        }, {
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user,
          fetchWhenSave: !!this.get('authData'),
          _failOnNotExist: failOnNotExist
        }).then(function (model) {
          return model._handleSaveResult(true).then(function () {
            return model;
          });
        });
      } else {
        return provider.authenticate().then(function (result) {
          return _this._linkWith(provider, result);
        });
      }
    },

    /**
     * Associate the user with a third party authData.
     * @since 3.3.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    associateWithAuthData: function associateWithAuthData(authData, platform) {
      return this._linkWith(platform, authData);
    },

    /**
     * Associate the user with a third party authData and unionId.
     * @since 3.5.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example user.associateWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    associateWithAuthDataAndUnionId: function associateWithAuthDataAndUnionId(authData, platform, unionId, unionOptions) {
      return this._linkWith(platform, mergeUnionDataIntoAuthData()(authData, unionId, unionOptions));
    },

    /**
     * Associate the user with the identity of the current mini-app.
     * @since 4.6.0
     * @param {Object} [authInfo]
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     * @return {Promise<AV.User>}
     */
    associateWithMiniApp: function associateWithMiniApp(authInfo, option) {
      var _this2 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this2._linkWith(authInfo.provider, authInfo.authData, option);
        });
      }

      return this._linkWith(authInfo.provider, authInfo.authData, option);
    },

    /**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的微信帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithQQApp: function associateWithQQApp() {
      var _this3 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$preferUnionId = _ref3.preferUnionId,
          preferUnionId = _ref3$preferUnionId === void 0 ? false : _ref3$preferUnionId,
          _ref3$unionIdPlatform = _ref3.unionIdPlatform,
          unionIdPlatform = _ref3$unionIdPlatform === void 0 ? 'qq' : _ref3$unionIdPlatform,
          _ref3$asMainAccount = _ref3.asMainAccount,
          asMainAccount = _ref3$asMainAccount === void 0 ? true : _ref3$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this3.associateWithMiniApp(authInfo);
      });
    },

    /**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId = false] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithWeapp: function associateWithWeapp() {
      var _this4 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$preferUnionId = _ref4.preferUnionId,
          preferUnionId = _ref4$preferUnionId === void 0 ? false : _ref4$preferUnionId,
          _ref4$unionIdPlatform = _ref4.unionIdPlatform,
          unionIdPlatform = _ref4$unionIdPlatform === void 0 ? 'weixin' : _ref4$unionIdPlatform,
          _ref4$asMainAccount = _ref4.asMainAccount,
          asMainAccount = _ref4$asMainAccount === void 0 ? true : _ref4$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this4.associateWithMiniApp(authInfo);
      });
    },

    /**
     * @deprecated renamed to {@link AV.User#associateWithWeapp}
     * @return {Promise<AV.User>}
     */
    linkWithWeapp: function linkWithWeapp(options) {
      console.warn('DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替');
      return this.associateWithWeapp(options);
    },

    /**
     * 将用户与 QQ 小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用 QQ 小程序的 QQ 帐号。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 4.2.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithQQAppWithUnionId: function associateWithQQAppWithUnionId(unionId) {
      var _this5 = this;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$unionIdPlatform = _ref5.unionIdPlatform,
          unionIdPlatform = _ref5$unionIdPlatform === void 0 ? 'qq' : _ref5$unionIdPlatform,
          _ref5$asMainAccount = _ref5.asMainAccount,
          asMainAccount = _ref5$asMainAccount === void 0 ? false : _ref5$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this5.associateWithMiniApp(authInfo);
      });
    },

    /**
     * 将用户与微信小程序用户进行关联。适用于为已经在用户系统中存在的用户关联当前使用微信小程序的微信帐号。
     * 仅在微信小程序中可用。
     *
     * @deprecated Please use {@link AV.User#associateWithMiniApp}
     * @since 3.13.0
     * @param {string} unionId
     * @param {Object} [unionOptions]
     * @param {string} [unionOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    associateWithWeappWithUnionId: function associateWithWeappWithUnionId(unionId) {
      var _this6 = this;

      var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$unionIdPlatform = _ref6.unionIdPlatform,
          unionIdPlatform = _ref6$unionIdPlatform === void 0 ? 'weixin' : _ref6$unionIdPlatform,
          _ref6$asMainAccount = _ref6.asMainAccount,
          asMainAccount = _ref6$asMainAccount === void 0 ? false : _ref6$asMainAccount;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this6.associateWithMiniApp(authInfo);
      });
    },

    /**
     * Unlinks a user from a service.
     * @param {string} platform
     * @return {Promise<AV.User>}
     * @since 3.3.0
     */
    dissociateAuthData: function dissociateAuthData(provider) {
      this.unset("authData.".concat(provider));
      return this.save().then(function (model) {
        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * @private
     * @deprecated
     */
    _unlinkFrom: function _unlinkFrom(provider) {
      console.warn('DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替');
      return this.dissociateAuthData(provider);
    },

    /**
     * Checks whether a user is linked to a service.
     * @private
     */
    _isLinked: function _isLinked(provider) {
      var authType;

      if (_.isString(provider)) {
        authType = provider;
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData') || {};
      return !!authData[authType];
    },

    /**
     * Checks whether a user is anonymous.
     * @since 3.9.0
     * @return {boolean}
     */
    isAnonymous: function isAnonymous() {
      return this._isLinked(PLATFORM_ANONYMOUS);
    },
    logOut: function logOut() {
      this._logOutWithAll();

      this._isCurrentUser = false;
    },

    /**
     * Deauthenticates all providers.
     * @private
     */
    _logOutWithAll: function _logOutWithAll() {
      var authData = this.get('authData');

      if (!authData) {
        return;
      }

      var self = this;

      AV._objectEach(this.get('authData'), function (value, key) {
        self._logOutWith(key);
      });
    },

    /**
     * Deauthenticates a single provider (e.g. removing access tokens from the
     * Facebook SDK).
     * @private
     */
    _logOutWith: function _logOutWith(provider) {
      if (!this.isCurrent()) {
        return;
      }

      if (_.isString(provider)) {
        provider = AV.User._authProviders[provider];
      }

      if (provider && provider.deauthenticate) {
        provider.deauthenticate();
      }
    },

    /**
     * Signs up a new user. You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUp
     */
    signUp: function signUp(attrs, options) {
      var error;
      var username = attrs && attrs.username || this.get('username');

      if (!username || username === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up user with an empty name.');
        throw error;
      }

      var password = attrs && attrs.password || this.get('password');

      if (!password || password === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up user with an empty password.');
        throw error;
      }

      return this.save(attrs, options).then(function (model) {
        if (model.isAnonymous()) {
          model.unset("authData.".concat(PLATFORM_ANONYMOUS));
          model._opSetQueue = [{}];
        }

        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * Signs up a new user with mobile phone and sms code.
     * You should call this instead of save for
     * new AV.Users. This will create a new AV.User on the server, and
     * also persist the session on disk so that you can access the user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling signUp.</p>
     *
     * @param {Object} attrs Extra fields to set on the new user, or null.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the signup
     *     finishes.
     * @see AV.User.signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(attrs) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var error;
      var mobilePhoneNumber = attrs && attrs.mobilePhoneNumber || this.get('mobilePhoneNumber');

      if (!mobilePhoneNumber || mobilePhoneNumber === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up or login user by mobilePhoneNumber ' + 'with an empty mobilePhoneNumber.');
        throw error;
      }

      var smsCode = attrs && attrs.smsCode || this.get('smsCode');

      if (!smsCode || smsCode === '') {
        error = new AVError(AVError.OTHER_CAUSE, 'Cannot sign up or login user by mobilePhoneNumber  ' + 'with an empty smsCode.');
        throw error;
      }

      options._makeRequest = function (route, className, id, method, json) {
        return AVRequest('usersByMobilePhone', null, null, 'POST', json);
      };

      return this.save(attrs, options).then(function (model) {
        delete model.attributes.smsCode;
        delete model._serverData.smsCode;
        return model._handleSaveResult(true).then(function () {
          return model;
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithAuthData}, except that you can set attributes before login.
     * @since 3.7.0
     */
    loginWithAuthData: function loginWithAuthData(authData, platform, options) {
      return this._linkWith(platform, authData, options);
    },

    /**
     * The same with {@link AV.User.loginWithAuthDataAndUnionId}, except that you can set attributes before login.
     * @since 3.7.0
     */
    loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
      return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
    },

    /**
     * The same with {@link AV.User.loginWithWeapp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.7.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @return {Promise<AV.User>}
     */
    loginWithWeapp: function loginWithWeapp() {
      var _this7 = this;

      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$preferUnionId = _ref7.preferUnionId,
          preferUnionId = _ref7$preferUnionId === void 0 ? false : _ref7$preferUnionId,
          _ref7$unionIdPlatform = _ref7.unionIdPlatform,
          unionIdPlatform = _ref7$unionIdPlatform === void 0 ? 'weixin' : _ref7$unionIdPlatform,
          _ref7$asMainAccount = _ref7.asMainAccount,
          asMainAccount = _ref7$asMainAccount === void 0 ? true : _ref7$asMainAccount,
          _ref7$failOnNotExist = _ref7.failOnNotExist,
          failOnNotExist = _ref7$failOnNotExist === void 0 ? false : _ref7$failOnNotExist,
          useMasterKey = _ref7.useMasterKey,
          sessionToken = _ref7.sessionToken,
          user = _ref7.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this7.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithWeappWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 3.13.0
     */
    loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
      var _this8 = this;

      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$unionIdPlatform = _ref8.unionIdPlatform,
          unionIdPlatform = _ref8$unionIdPlatform === void 0 ? 'weixin' : _ref8$unionIdPlatform,
          _ref8$asMainAccount = _ref8.asMainAccount,
          asMainAccount = _ref8$asMainAccount === void 0 ? false : _ref8$asMainAccount,
          _ref8$failOnNotExist = _ref8.failOnNotExist,
          failOnNotExist = _ref8$failOnNotExist === void 0 ? false : _ref8$failOnNotExist,
          useMasterKey = _ref8.useMasterKey,
          sessionToken = _ref8.sessionToken,
          user = _ref8.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this8.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithQQApp}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     */
    loginWithQQApp: function loginWithQQApp() {
      var _this9 = this;

      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref9$preferUnionId = _ref9.preferUnionId,
          preferUnionId = _ref9$preferUnionId === void 0 ? false : _ref9$preferUnionId,
          _ref9$unionIdPlatform = _ref9.unionIdPlatform,
          unionIdPlatform = _ref9$unionIdPlatform === void 0 ? 'qq' : _ref9$unionIdPlatform,
          _ref9$asMainAccount = _ref9.asMainAccount,
          asMainAccount = _ref9$asMainAccount === void 0 ? true : _ref9$asMainAccount,
          _ref9$failOnNotExist = _ref9.failOnNotExist,
          failOnNotExist = _ref9$failOnNotExist === void 0 ? false : _ref9$failOnNotExist,
          useMasterKey = _ref9.useMasterKey,
          sessionToken = _ref9.sessionToken,
          user = _ref9.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this9.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithQQAppWithUnionId}, except that you can set attributes before login.
     * @deprecated please use {@link AV.User#loginWithMiniApp}
     * @since 4.2.0
     */
    loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
      var _this10 = this;

      var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref10$unionIdPlatfor = _ref10.unionIdPlatform,
          unionIdPlatform = _ref10$unionIdPlatfor === void 0 ? 'qq' : _ref10$unionIdPlatfor,
          _ref10$asMainAccount = _ref10.asMainAccount,
          asMainAccount = _ref10$asMainAccount === void 0 ? false : _ref10$asMainAccount,
          _ref10$failOnNotExist = _ref10.failOnNotExist,
          failOnNotExist = _ref10$failOnNotExist === void 0 ? false : _ref10$failOnNotExist,
          useMasterKey = _ref10.useMasterKey,
          sessionToken = _ref10.sessionToken,
          user = _ref10.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this10.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * The same with {@link AV.User.loginWithMiniApp}, except that you can set attributes before login.
     * @since 4.6.0
     */
    loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
      var _this11 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this11.loginWithAuthData(authInfo.authData, authInfo.provider, option);
        });
      }

      return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
    },

    /**
     * Logs in a AV.User. On success, this saves the session to localStorage,
     * so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * <p>A username and password must be set before calling logIn.</p>
     *
     * @see AV.User.logIn
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login is complete.
     */
    logIn: function logIn() {
      var model = this;
      var request = AVRequest('login', null, null, 'POST', this.toJSON());
      return request.then(function (resp) {
        var serverAttrs = model.parse(resp);

        model._finishFetch(serverAttrs);

        return model._handleSaveResult(true).then(function () {
          if (!serverAttrs.smsCode) delete model.attributes['smsCode'];
          return model;
        });
      });
    },

    /**
     * @see AV.Object#save
     */
    save: function save(arg1, arg2, arg3) {
      var attrs, options;

      if (_.isObject(arg1) || _.isNull(arg1) || _.isUndefined(arg1)) {
        attrs = arg1;
        options = arg2;
      } else {
        attrs = {};
        attrs[arg1] = arg2;
        options = arg3;
      }

      options = options || {};
      return AV.Object.prototype.save.call(this, attrs, options).then(function (model) {
        return model._handleSaveResult(false).then(function () {
          return model;
        });
      });
    },

    /**
     * Follow a user
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as
     *  conditions of followerQuery/followeeQuery.
     * @param {AuthOptions} [authOptions]
     */
    follow: function follow(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      var user;
      var attributes;

      if (options.user) {
        user = options.user;
        attributes = options.attributes;
      } else {
        user = options;
      }

      var userObjectId = _.isString(user) ? user : user.id;

      if (!userObjectId) {
        throw new Error('Invalid target user.');
      }

      var route = 'users/' + this.id + '/friendship/' + userObjectId;
      var request = AVRequest(route, null, null, 'POST', AV._encode(attributes), authOptions);
      return request;
    },

    /**
     * Unfollow a user.
     * @since 0.3.0
     * @param {Object | AV.User | String} options if an AV.User or string is given, it will be used as the target user.
     * @param {AV.User | String} options.user The target user or user's objectId to unfollow.
     * @param {AuthOptions} [authOptions]
     */
    unfollow: function unfollow(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      var user;

      if (options.user) {
        user = options.user;
      } else {
        user = options;
      }

      var userObjectId = _.isString(user) ? user : user.id;

      if (!userObjectId) {
        throw new Error('Invalid target user.');
      }

      var route = 'users/' + this.id + '/friendship/' + userObjectId;
      var request = AVRequest(route, null, null, 'DELETE', null, authOptions);
      return request;
    },

    /**
     * Get the user's followers and followees.
     * @since 4.8.0
     * @param {Object} [options]
     * @param {Number} [options.skip]
     * @param {Number} [options.limit]
     * @param {AuthOptions} [authOptions]
     */
    getFollowersAndFollowees: function getFollowersAndFollowees(options, authOptions) {
      if (!this.id) {
        throw new Error('Please signin.');
      }

      return request({
        method: 'GET',
        path: "/users/".concat(this.id, "/followersAndFollowees"),
        query: {
          skip: options && options.skip,
          limit: options && options.limit,
          include: 'follower,followee',
          keys: 'follower,followee'
        },
        authOptions: authOptions
      }).then(function (_ref11) {
        var followers = _ref11.followers,
            followees = _ref11.followees;
        return {
          followers: (0, _map.default)(followers).call(followers, function (_ref12) {
            var follower = _ref12.follower;
            return AV._decode(follower);
          }),
          followees: (0, _map.default)(followees).call(followees, function (_ref13) {
            var followee = _ref13.followee;
            return AV._decode(followee);
          })
        };
      });
    },

    /**
     *Create a follower query to query the user's followers.
     * @since 0.3.0
     * @see AV.User#followerQuery
     */
    followerQuery: function followerQuery() {
      return AV.User.followerQuery(this.id);
    },

    /**
     *Create a followee query to query the user's followees.
     * @since 0.3.0
     * @see AV.User#followeeQuery
     */
    followeeQuery: function followeeQuery() {
      return AV.User.followeeQuery(this.id);
    },

    /**
     * @see AV.Object#fetch
     */
    fetch: function fetch(fetchOptions, options) {
      return AV.Object.prototype.fetch.call(this, fetchOptions, options).then(function (model) {
        return model._handleSaveResult(false).then(function () {
          return model;
        });
      });
    },

    /**
     * Update user's new password safely based on old password.
     * @param {String} oldPassword the old password.
     * @param {String} newPassword the new password.
     * @param {AuthOptions} options
     */
    updatePassword: function updatePassword(oldPassword, newPassword, options) {
      var _this12 = this;

      var route = 'users/' + this.id + '/updatePassword';
      var params = {
        old_password: oldPassword,
        new_password: newPassword
      };
      var request = AVRequest(route, null, null, 'PUT', params, options);
      return request.then(function (resp) {
        _this12._finishFetch(_this12.parse(resp));

        return _this12._handleSaveResult(true).then(function () {
          return resp;
        });
      });
    },

    /**
     * Returns true if <code>current</code> would return this user.
     * @see AV.User#current
     */
    isCurrent: function isCurrent() {
      return this._isCurrentUser;
    },

    /**
     * Returns get("username").
     * @return {String}
     * @see AV.Object#get
     */
    getUsername: function getUsername() {
      return this.get('username');
    },

    /**
     * Returns get("mobilePhoneNumber").
     * @return {String}
     * @see AV.Object#get
     */
    getMobilePhoneNumber: function getMobilePhoneNumber() {
      return this.get('mobilePhoneNumber');
    },

    /**
     * Calls set("mobilePhoneNumber", phoneNumber, options) and returns the result.
     * @param {String} mobilePhoneNumber
     * @return {Boolean}
     * @see AV.Object#set
     */
    setMobilePhoneNumber: function setMobilePhoneNumber(phone, options) {
      return this.set('mobilePhoneNumber', phone, options);
    },

    /**
     * Calls set("username", username, options) and returns the result.
     * @param {String} username
     * @return {Boolean}
     * @see AV.Object#set
     */
    setUsername: function setUsername(username, options) {
      return this.set('username', username, options);
    },

    /**
     * Calls set("password", password, options) and returns the result.
     * @param {String} password
     * @return {Boolean}
     * @see AV.Object#set
     */
    setPassword: function setPassword(password, options) {
      return this.set('password', password, options);
    },

    /**
     * Returns get("email").
     * @return {String}
     * @see AV.Object#get
     */
    getEmail: function getEmail() {
      return this.get('email');
    },

    /**
     * Calls set("email", email, options) and returns the result.
     * @param {String} email
     * @param {AuthOptions} options
     * @return {Boolean}
     * @see AV.Object#set
     */
    setEmail: function setEmail(email, options) {
      return this.set('email', email, options);
    },

    /**
     * Checks whether this user is the current user and has been authenticated.
     * @deprecated 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，
     * 如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id
     * @return (Boolean) whether this user is the current user and is logged in.
     */
    authenticated: function authenticated() {
      console.warn('DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。');
      return !!this._sessionToken && !AV._config.disableCurrentUser && AV.User.current() && AV.User.current().id === this.id;
    },

    /**
     * Detects if current sessionToken is valid.
     *
     * @since 2.0.0
     * @return Promise.<Boolean>
     */
    isAuthenticated: function isAuthenticated() {
      var _this13 = this;

      return _promise.default.resolve().then(function () {
        return !!_this13._sessionToken && AV.User._fetchUserBySessionToken(_this13._sessionToken).then(function () {
          return true;
        }, function (error) {
          if (error.code === 211) {
            return false;
          }

          throw error;
        });
      });
    },

    /**
     * Get sessionToken of current user.
     * @return {String} sessionToken
     */
    getSessionToken: function getSessionToken() {
      return this._sessionToken;
    },

    /**
     * Refresh sessionToken of current user.
     * @since 2.1.0
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.User>} user with refreshed sessionToken
     */
    refreshSessionToken: function refreshSessionToken(options) {
      var _this14 = this;

      return AVRequest("users/".concat(this.id, "/refreshSessionToken"), null, null, 'PUT', null, options).then(function (response) {
        _this14._finishFetch(response);

        return _this14._handleSaveResult(true).then(function () {
          return _this14;
        });
      });
    },

    /**
     * Get this user's Roles.
     * @param {AuthOptions} [options]
     * @return {Promise.<AV.Role[]>} A promise that is fulfilled with the roles when
     *     the query is complete.
     */
    getRoles: function getRoles(options) {
      var _context;

      return (0, _find.default)(_context = AV.Relation.reverseQuery('_Role', 'users', this)).call(_context, options);
    }
  },
  /** @lends AV.User */
  {
    // Class Variables
    // The currently logged-in user.
    _currentUser: null,
    // Whether currentUser is known to match the serialized version on disk.
    // This is useful for saving a localstorage check if you try to load
    // _currentUser frequently while there is none stored.
    _currentUserMatchesDisk: false,
    // The localStorage key suffix that the current user is stored under.
    _CURRENT_USER_KEY: 'currentUser',
    // The mapping of auth provider names to actual providers
    _authProviders: {},
    // Class Methods

    /**
     * Signs up a new user with a username (or email) and password.
     * This will create a new AV.User on the server, and also persist the
     * session in localStorage so that you can access the user using
     * {@link #current}.
     *
     * @param {String} username The username (or email) to sign up with.
     * @param {String} password The password to sign up with.
     * @param {Object} [attrs] Extra fields to set on the new user.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that is fulfilled with the user when
     *     the signup completes.
     * @see AV.User#signUp
     */
    signUp: function signUp(username, password, attrs, options) {
      attrs = attrs || {};
      attrs.username = username;
      attrs.password = password;

      var user = AV.Object._create('_User');

      return user.signUp(attrs, options);
    },

    /**
     * Logs in a user with a username (or email) and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} username The username (or email) to log in with.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logIn: function logIn(username, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        username: username,
        password: password
      });

      return user.logIn();
    },

    /**
     * Logs in a user with a session token. On success, this saves the session
     * to disk, so you can retrieve the currently logged in user using
     * <code>current</code>.
     *
     * @param {String} sessionToken The sessionToken to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
    become: function become(sessionToken) {
      return this._fetchUserBySessionToken(sessionToken).then(function (user) {
        return user._handleSaveResult(true).then(function () {
          return user;
        });
      });
    },
    _fetchUserBySessionToken: function _fetchUserBySessionToken(sessionToken) {
      if (sessionToken === undefined) {
        return _promise.default.reject(new Error('The sessionToken cannot be undefined'));
      }

      var user = AV.Object._create('_User');

      return request({
        method: 'GET',
        path: '/users/me',
        authOptions: {
          sessionToken: sessionToken
        }
      }).then(function (resp) {
        var serverAttrs = user.parse(resp);

        user._finishFetch(serverAttrs);

        return user;
      });
    },

    /**
     * Logs in a user with a mobile phone number and sms code sent by
     * AV.User.requestLoginSmsCode.On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} smsCode The sms code sent by AV.User.requestLoginSmsCode
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logInWithMobilePhoneSmsCode: function logInWithMobilePhoneSmsCode(mobilePhone, smsCode) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        mobilePhoneNumber: mobilePhone,
        smsCode: smsCode
      });

      return user.logIn();
    },

    /**
     * Signs up or logs in a user with a mobilePhoneNumber and smsCode.
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @param {String} mobilePhoneNumber The user's mobilePhoneNumber.
     * @param {String} smsCode The sms code sent by AV.Cloud.requestSmsCode
     * @param {Object} attributes  The user's other attributes such as username etc.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#signUpOrlogInWithMobilePhone
     * @see AV.Cloud.requestSmsCode
     */
    signUpOrlogInWithMobilePhone: function signUpOrlogInWithMobilePhone(mobilePhoneNumber, smsCode, attrs, options) {
      attrs = attrs || {};
      attrs.mobilePhoneNumber = mobilePhoneNumber;
      attrs.smsCode = smsCode;

      var user = AV.Object._create('_User');

      return user.signUpOrlogInWithMobilePhone(attrs, options);
    },

    /**
     * Logs in a user with a mobile phone number and password. On success, this
     * saves the session to disk, so you can retrieve the currently logged in
     * user using <code>current</code>.
     *
     * @param {String} mobilePhone The user's mobilePhoneNumber
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @see AV.User#logIn
     */
    logInWithMobilePhone: function logInWithMobilePhone(mobilePhone, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        mobilePhoneNumber: mobilePhone,
        password: password
      });

      return user.logIn();
    },

    /**
     * Logs in a user with email and password.
     *
     * @since 3.13.0
     * @param {String} email The user's email.
     * @param {String} password The password to log in with.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     */
    loginWithEmail: function loginWithEmail(email, password) {
      var user = AV.Object._create('_User');

      user._finishFetch({
        email: email,
        password: password
      });

      return user.logIn();
    },

    /**
     * Signs up or logs in a user with a third party auth data(AccessToken).
     * On success, this saves the session to disk, so you can retrieve the currently
     * logged in user using <code>current</code>.
     *
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {Object} [options]
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise} A promise that is fulfilled with the user when
     *     the login completes.
     * @example AV.User.loginWithAuthData({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin').then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     * @see {@link https://leancloud.cn/docs/js_guide.html#绑定第三方平台账户}
     */
    loginWithAuthData: function loginWithAuthData(authData, platform, options) {
      return AV.User._logInWith(platform, authData, options);
    },

    /**
     * @deprecated renamed to {@link AV.User.loginWithAuthData}
     */
    signUpOrlogInWithAuthData: function signUpOrlogInWithAuthData() {
      console.warn('DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替');
      return this.loginWithAuthData.apply(this, arguments);
    },

    /**
     * Signs up or logs in a user with a third party authData and unionId.
     * @since 3.7.0
     * @param {Object} authData The response json data returned from third party token, maybe like { openid: 'abc123', access_token: '123abc', expires_in: 1382686496 }
     * @param {string} platform Available platform for sign up.
     * @param {string} unionId
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise<AV.User>} A promise that is fulfilled with the user when completed.
     * @example AV.User.loginWithAuthDataAndUnionId({
     *   openid: 'abc123',
     *   access_token: '123abc',
     *   expires_in: 1382686496
     * }, 'weixin', 'union123', {
     *   unionIdPlatform: 'weixin',
     *   asMainAccount: true,
     * }).then(function(user) {
     *   //Access user here
     * }).catch(function(error) {
     *   //console.error("error: ", error);
     * });
     */
    loginWithAuthDataAndUnionId: function loginWithAuthDataAndUnionId(authData, platform, unionId, unionLoginOptions) {
      return this.loginWithAuthData(mergeUnionDataIntoAuthData()(authData, unionId, unionLoginOptions), platform, unionLoginOptions);
    },

    /**
     * @deprecated renamed to {@link AV.User.loginWithAuthDataAndUnionId}
     * @since 3.5.0
     */
    signUpOrlogInWithAuthDataAndUnionId: function signUpOrlogInWithAuthDataAndUnionId() {
      console.warn('DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替');
      return this.loginWithAuthDataAndUnionId.apply(this, arguments);
    },

    /**
     * Merge unionId into authInfo.
     * @since 4.6.0
     * @param {Object} authInfo
     * @param {String} unionId
     * @param {Object} [unionIdOption]
     * @param {Boolean} [unionIdOption.asMainAccount] If true, the unionId will be associated with the user.
     */
    mergeUnionId: function mergeUnionId(authInfo, unionId) {
      var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref14$asMainAccount = _ref14.asMainAccount,
          asMainAccount = _ref14$asMainAccount === void 0 ? false : _ref14$asMainAccount;

      authInfo = JSON.parse((0, _stringify.default)(authInfo));
      var _authInfo = authInfo,
          authData = _authInfo.authData,
          platform = _authInfo.platform;
      authData.platform = platform;
      authData.main_account = asMainAccount;
      authData.unionid = unionId;
      return authInfo;
    },

    /**
     * 使用当前使用微信小程序的微信用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 2.0.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 当用户满足 {@link https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html 获取 UnionId 的条件} 时，是否使用 UnionId 登录。（since 3.13.0）
     * @param {string} [options.unionIdPlatform = 'weixin'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
    loginWithWeapp: function loginWithWeapp() {
      var _this15 = this;

      var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref15$preferUnionId = _ref15.preferUnionId,
          preferUnionId = _ref15$preferUnionId === void 0 ? false : _ref15$preferUnionId,
          _ref15$unionIdPlatfor = _ref15.unionIdPlatform,
          unionIdPlatform = _ref15$unionIdPlatfor === void 0 ? 'weixin' : _ref15$unionIdPlatfor,
          _ref15$asMainAccount = _ref15.asMainAccount,
          asMainAccount = _ref15$asMainAccount === void 0 ? true : _ref15$asMainAccount,
          _ref15$failOnNotExist = _ref15.failOnNotExist,
          failOnNotExist = _ref15$failOnNotExist === void 0 ? false : _ref15$failOnNotExist,
          useMasterKey = _ref15.useMasterKey,
          sessionToken = _ref15.sessionToken,
          user = _ref15.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        return _this15.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用微信小程序的微信用户身份注册或登录，
     * 仅在微信小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 3.13.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'weixin'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.       * @return {Promise.<AV.User>}
     */
    loginWithWeappWithUnionId: function loginWithWeappWithUnionId(unionId) {
      var _this16 = this;

      var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref16$unionIdPlatfor = _ref16.unionIdPlatform,
          unionIdPlatform = _ref16$unionIdPlatfor === void 0 ? 'weixin' : _ref16$unionIdPlatfor,
          _ref16$asMainAccount = _ref16.asMainAccount,
          asMainAccount = _ref16$asMainAccount === void 0 ? false : _ref16$asMainAccount,
          _ref16$failOnNotExist = _ref16.failOnNotExist,
          failOnNotExist = _ref16$failOnNotExist === void 0 ? false : _ref16$failOnNotExist,
          useMasterKey = _ref16.useMasterKey,
          sessionToken = _ref16.sessionToken,
          user = _ref16.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        return _this16.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，成功后用户的 session 会在设备上持久化保存，之后可以使用 AV.User.current() 获取当前登录用户。
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [options]
     * @param {boolean} [options.preferUnionId] 如果服务端在登录时获取到了用户的 UnionId，是否将 UnionId 保存在用户账号中。
     * @param {string} [options.unionIdPlatform = 'qq'] (only take effect when preferUnionId) unionId platform
     * @param {boolean} [options.asMainAccount = true] (only take effect when preferUnionId) If true, the unionId will be associated with the user.
     * @param {boolean} [options.failOnNotExist] If true, the login request will fail when no user matches this authData exists. (since v3.7.0)
     * @return {Promise.<AV.User>}
     */
    loginWithQQApp: function loginWithQQApp() {
      var _this17 = this;

      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref17$preferUnionId = _ref17.preferUnionId,
          preferUnionId = _ref17$preferUnionId === void 0 ? false : _ref17$preferUnionId,
          _ref17$unionIdPlatfor = _ref17.unionIdPlatform,
          unionIdPlatform = _ref17$unionIdPlatfor === void 0 ? 'qq' : _ref17$unionIdPlatfor,
          _ref17$asMainAccount = _ref17.asMainAccount,
          asMainAccount = _ref17$asMainAccount === void 0 ? true : _ref17$asMainAccount,
          _ref17$failOnNotExist = _ref17.failOnNotExist,
          failOnNotExist = _ref17$failOnNotExist === void 0 ? false : _ref17$failOnNotExist,
          useMasterKey = _ref17.useMasterKey,
          sessionToken = _ref17.sessionToken,
          user = _ref17.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        preferUnionId: preferUnionId,
        asMainAccount: asMainAccount,
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo.provider = PLATFORM_QQAPP;
        return _this17.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * 使用当前使用 QQ 小程序的 QQ 用户身份注册或登录，
     * 仅在 QQ 小程序中可用。
     *
     * @deprecated please use {@link AV.User.loginWithMiniApp}
     * @since 4.2.0
     * @param {Object} [unionLoginOptions]
     * @param {string} [unionLoginOptions.unionIdPlatform = 'qq'] unionId platform
     * @param {boolean} [unionLoginOptions.asMainAccount = false] If true, the unionId will be associated with the user.
     * @param {boolean} [unionLoginOptions.failOnNotExist] If true, the login request will fail when no user matches this authData exists.
     * @return {Promise.<AV.User>}
     */
    loginWithQQAppWithUnionId: function loginWithQQAppWithUnionId(unionId) {
      var _this18 = this;

      var _ref18 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref18$unionIdPlatfor = _ref18.unionIdPlatform,
          unionIdPlatform = _ref18$unionIdPlatfor === void 0 ? 'qq' : _ref18$unionIdPlatfor,
          _ref18$asMainAccount = _ref18.asMainAccount,
          asMainAccount = _ref18$asMainAccount === void 0 ? false : _ref18$asMainAccount,
          _ref18$failOnNotExist = _ref18.failOnNotExist,
          failOnNotExist = _ref18$failOnNotExist === void 0 ? false : _ref18$failOnNotExist,
          useMasterKey = _ref18.useMasterKey,
          sessionToken = _ref18.sessionToken,
          user = _ref18.user;

      var getAuthInfo = getAdapter('getAuthInfo');
      return getAuthInfo({
        platform: unionIdPlatform
      }).then(function (authInfo) {
        authInfo = AV.User.mergeUnionId(authInfo, unionId, {
          asMainAccount: asMainAccount
        });
        authInfo.provider = PLATFORM_QQAPP;
        return _this18.loginWithMiniApp(authInfo, {
          failOnNotExist: failOnNotExist,
          useMasterKey: useMasterKey,
          sessionToken: sessionToken,
          user: user
        });
      });
    },

    /**
     * Register or login using the identity of the current mini-app.
     * @param {Object} authInfo
     * @param {Object} [option]
     * @param {Boolean} [option.failOnNotExist] If true, the login request will fail when no user matches this authInfo.authData exists.
     */
    loginWithMiniApp: function loginWithMiniApp(authInfo, option) {
      var _this19 = this;

      if (authInfo === undefined) {
        var getAuthInfo = getAdapter('getAuthInfo');
        return getAuthInfo().then(function (authInfo) {
          return _this19.loginWithAuthData(authInfo.authData, authInfo.provider, option);
        });
      }

      return this.loginWithAuthData(authInfo.authData, authInfo.provider, option);
    },

    /**
     * Only use for DI in tests to produce deterministic IDs.
     */
    _genId: function _genId() {
      return uuid();
    },

    /**
     * Creates an anonymous user.
     *
     * @since 3.9.0
     * @return {Promise.<AV.User>}
     */
    loginAnonymously: function loginAnonymously() {
      return this.loginWithAuthData({
        id: AV.User._genId()
      }, 'anonymous');
    },
    associateWithAuthData: function associateWithAuthData(userObj, platform, authData) {
      console.warn('DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替');
      return userObj._linkWith(platform, authData);
    },

    /**
     * Logs out the currently logged in user session. This will remove the
     * session from disk, log out of linked services, and future calls to
     * <code>current</code> will return <code>null</code>.
     * @return {Promise}
     */
    logOut: function logOut() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return _promise.default.resolve(null);
      }

      if (AV.User._currentUser !== null) {
        AV.User._currentUser._logOutWithAll();

        AV.User._currentUser._isCurrentUser = false;
      }

      AV.User._currentUserMatchesDisk = true;
      AV.User._currentUser = null;
      return AV.localStorage.removeItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function () {
        return AV._refreshSubscriptionId();
      });
    },

    /**
     *Create a follower query for special user to query the user's followers.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
    followerQuery: function followerQuery(userObjectId) {
      if (!userObjectId || !_.isString(userObjectId)) {
        throw new Error('Invalid user object id.');
      }

      var query = new AV.FriendShipQuery('_Follower');
      query._friendshipTag = 'follower';
      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
      return query;
    },

    /**
     *Create a followee query for special user to query the user's followees.
     * @param {String} userObjectId The user object id.
     * @return {AV.FriendShipQuery}
     * @since 0.3.0
     */
    followeeQuery: function followeeQuery(userObjectId) {
      if (!userObjectId || !_.isString(userObjectId)) {
        throw new Error('Invalid user object id.');
      }

      var query = new AV.FriendShipQuery('_Followee');
      query._friendshipTag = 'followee';
      query.equalTo('user', AV.Object.createWithoutData('_User', userObjectId));
      return query;
    },

    /**
     * Requests a password reset email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * reset their password on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     forgot their password.
     * @return {Promise}
     */
    requestPasswordReset: function requestPasswordReset(email) {
      var json = {
        email: email
      };
      var request = AVRequest('requestPasswordReset', null, null, 'POST', json);
      return request;
    },

    /**
     * Requests a verify email to be sent to the specified email address
     * associated with the user account. This email allows the user to securely
     * verify their email address on the AV site.
     *
     * @param {String} email The email address associated with the user that
     *     doesn't verify their email address.
     * @return {Promise}
     */
    requestEmailVerify: function requestEmailVerify(email) {
      var json = {
        email: email
      };
      var request = AVRequest('requestEmailVerify', null, null, 'POST', json);
      return request;
    },

    /**
     * Requests a verify sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * verify their mobile phone number by calling AV.User.verifyMobilePhone
     *
     * @param {String} mobilePhoneNumber The mobile phone number associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestMobilePhoneVerify: function requestMobilePhoneVerify(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestMobilePhoneVerify', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Requests a reset password sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * reset their account's password by calling AV.User.resetPasswordBySmsCode
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *                  user that doesn't verify their mobile phone number.
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestPasswordResetBySmsCode: function requestPasswordResetBySmsCode(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestPasswordResetBySmsCode', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Requests a change mobile phone number sms code to be sent to the mobilePhoneNumber.
     * This sms code allows current user to reset it's mobilePhoneNumber by
     * calling {@link AV.User.changePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {Number} [ttl] ttl of sms code (default is 6 minutes)
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestChangePhoneNumber: function requestChangePhoneNumber(mobilePhoneNumber, ttl, options) {
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (ttl) {
        data.ttl = options.ttl;
      }

      if (options && options.validateToken) {
        data.validate_token = options.validateToken;
      }

      return AVRequest('requestChangePhoneNumber', null, null, 'POST', data, options);
    },

    /**
     * Makes a call to reset user's account mobilePhoneNumber by sms code.
     * The sms code is sent by {@link AV.User.requestChangePhoneNumber}
     * @since 4.7.0
     * @param {String} mobilePhoneNumber
     * @param {String} code The sms code.
     * @return {Promise}
     */
    changePhoneNumber: function changePhoneNumber(mobilePhoneNumber, code) {
      var data = {
        mobilePhoneNumber: mobilePhoneNumber,
        code: code
      };
      return AVRequest('changePhoneNumber', null, null, 'POST', data);
    },

    /**
     * Makes a call to reset user's account password by sms code and new password.
     * The sms code is sent by AV.User.requestPasswordResetBySmsCode.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @param {String} password The new password.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    resetPasswordBySmsCode: function resetPasswordBySmsCode(code, password) {
      var json = {
        password: password
      };
      var request = AVRequest('resetPasswordBySmsCode', null, code, 'PUT', json);
      return request;
    },

    /**
     * Makes a call to verify sms code that sent by AV.User.Cloud.requestSmsCode
     * If verify successfully,the user mobilePhoneVerified attribute will be true.
     * @param {String} code The sms code sent by AV.User.Cloud.requestSmsCode
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    verifyMobilePhone: function verifyMobilePhone(code) {
      var request = AVRequest('verifyMobilePhone', null, code, 'POST', null);
      return request;
    },

    /**
     * Requests a logIn sms code to be sent to the specified mobile phone
     * number associated with the user account. This sms code allows the user to
     * login by AV.User.logInWithMobilePhoneSmsCode function.
     *
     * @param {String} mobilePhoneNumber The mobile phone number  associated with the
     *           user that want to login by AV.User.logInWithMobilePhoneSmsCode
     * @param {SMSAuthOptions} [options]
     * @return {Promise}
     */
    requestLoginSmsCode: function requestLoginSmsCode(mobilePhoneNumber) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var data = {
        mobilePhoneNumber: mobilePhoneNumber
      };

      if (options.validateToken) {
        data.validate_token = options.validateToken;
      }

      var request = AVRequest('requestLoginSmsCode', null, null, 'POST', data, options);
      return request;
    },

    /**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {Promise.<AV.User>} resolved with the currently logged in AV.User.
     */
    currentAsync: function currentAsync() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return _promise.default.resolve(null);
      }

      if (AV.User._currentUser) {
        return _promise.default.resolve(AV.User._currentUser);
      }

      if (AV.User._currentUserMatchesDisk) {
        return _promise.default.resolve(AV.User._currentUser);
      }

      return AV.localStorage.getItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY)).then(function (userData) {
        if (!userData) {
          return null;
        } // Load the user from local storage.


        AV.User._currentUserMatchesDisk = true;
        AV.User._currentUser = AV.Object._create('_User');
        AV.User._currentUser._isCurrentUser = true;
        var json = JSON.parse(userData);
        AV.User._currentUser.id = json._id;
        delete json._id;
        AV.User._currentUser._sessionToken = json._sessionToken;
        delete json._sessionToken;

        AV.User._currentUser._finishFetch(json); //AV.User._currentUser.set(json);


        AV.User._currentUser._synchronizeAllAuthData();

        AV.User._currentUser._refreshCache();

        AV.User._currentUser._opSetQueue = [{}];
        return AV.User._currentUser;
      });
    },

    /**
     * Retrieves the currently logged in AVUser with a valid session,
     * either from memory or localStorage, if necessary.
     * @return {AV.User} The currently logged in AV.User.
     */
    current: function current() {
      if (AV._config.disableCurrentUser) {
        console.warn('AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html');
        return null;
      }

      if (AV.localStorage.async) {
        var error = new Error('Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.');
        error.code = 'SYNC_API_NOT_AVAILABLE';
        throw error;
      }

      if (AV.User._currentUser) {
        return AV.User._currentUser;
      }

      if (AV.User._currentUserMatchesDisk) {
        return AV.User._currentUser;
      } // Load the user from local storage.


      AV.User._currentUserMatchesDisk = true;
      var userData = AV.localStorage.getItem(AV._getAVPath(AV.User._CURRENT_USER_KEY));

      if (!userData) {
        return null;
      }

      AV.User._currentUser = AV.Object._create('_User');
      AV.User._currentUser._isCurrentUser = true;
      var json = JSON.parse(userData);
      AV.User._currentUser.id = json._id;
      delete json._id;
      AV.User._currentUser._sessionToken = json._sessionToken;
      delete json._sessionToken;

      AV.User._currentUser._finishFetch(json); //AV.User._currentUser.set(json);


      AV.User._currentUser._synchronizeAllAuthData();

      AV.User._currentUser._refreshCache();

      AV.User._currentUser._opSetQueue = [{}];
      return AV.User._currentUser;
    },

    /**
     * Persists a user as currentUser to localStorage, and into the singleton.
     * @private
     */
    _saveCurrentUser: function _saveCurrentUser(user) {
      var promise;

      if (AV.User._currentUser !== user) {
        promise = AV.User.logOut();
      } else {
        promise = _promise.default.resolve();
      }

      return promise.then(function () {
        user._isCurrentUser = true;
        AV.User._currentUser = user;

        var json = user._toFullJSON();

        json._id = user.id;
        json._sessionToken = user._sessionToken;
        return AV.localStorage.setItemAsync(AV._getAVPath(AV.User._CURRENT_USER_KEY), (0, _stringify.default)(json)).then(function () {
          AV.User._currentUserMatchesDisk = true;
          return AV._refreshSubscriptionId();
        });
      });
    },
    _registerAuthenticationProvider: function _registerAuthenticationProvider(provider) {
      AV.User._authProviders[provider.getAuthType()] = provider; // Synchronize the current user with the auth provider.

      if (!AV._config.disableCurrentUser && AV.User.current()) {
        AV.User.current()._synchronizeAuthData(provider.getAuthType());
      }
    },
    _logInWith: function _logInWith(provider, authData, options) {
      var user = AV.Object._create('_User');

      return user._linkWith(provider, authData, options);
    }
  });
};

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(143);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _map = _interopRequireDefault(__webpack_require__(42));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _keys = _interopRequireDefault(__webpack_require__(53));

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _find = _interopRequireDefault(__webpack_require__(107));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _ = __webpack_require__(2);

var debug = __webpack_require__(69)('leancloud:query');

var AVError = __webpack_require__(43);

var _require = __webpack_require__(27),
    _request = _require._request,
    request = _require.request;

var _require2 = __webpack_require__(31),
    ensureArray = _require2.ensureArray,
    transformFetchOptions = _require2.transformFetchOptions,
    continueWhile = _require2.continueWhile;

var requires = function requires(value, message) {
  if (value === undefined) {
    throw new Error(message);
  }
}; // AV.Query is a way to create a list of AV.Objects.


module.exports = function (AV) {
  /**
   * Creates a new AV.Query for the given AV.Object subclass.
   * @param {Class|String} objectClass An instance of a subclass of AV.Object, or a AV className string.
   * @class
   *
   * <p>AV.Query defines a query that is used to fetch AV.Objects. The
   * most common use case is finding all objects that match a query through the
   * <code>find</code> method. For example, this sample code fetches all objects
   * of class <code>MyClass</code>. It calls a different function depending on
   * whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.find().then(function(results) {
   *   // results is an array of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to retrieve a single object whose id is
   * known, through the get method. For example, this sample code fetches an
   * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
   * different function depending on whether the fetch succeeded or not.
   *
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.get(myId).then(function(object) {
   *   // object is an instance of AV.Object.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   *
   * <p>An AV.Query can also be used to count the number of objects that match
   * the query without retrieving all of those objects. For example, this
   * sample code counts the number of objects of the class <code>MyClass</code>
   * <pre>
   * var query = new AV.Query(MyClass);
   * query.count().then(function(number) {
   *   // There are number instances of MyClass.
   * }, function(error) {
   *   // error is an instance of AVError.
   * });</pre></p>
   */
  AV.Query = function (objectClass) {
    if (_.isString(objectClass)) {
      objectClass = AV.Object._getSubclass(objectClass);
    }

    this.objectClass = objectClass;
    this.className = objectClass.prototype.className;
    this._where = {};
    this._include = [];
    this._select = [];
    this._limit = -1; // negative limit means, do not send a limit

    this._skip = 0;
    this._defaultParams = {};
  };
  /**
   * Constructs a AV.Query that is the OR of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.or(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an or of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to OR.
   * @return {AV.Query} The query that is the OR of the passed in queries.
   */


  AV.Query.or = function () {
    var queries = _.toArray(arguments);

    var className = null;

    AV._arrayEach(queries, function (q) {
      if (_.isNull(className)) {
        className = q.className;
      }

      if (className !== q.className) {
        throw new Error('All queries must be for the same class');
      }
    });

    var query = new AV.Query(className);

    query._orQuery(queries);

    return query;
  };
  /**
   * Constructs a AV.Query that is the AND of the passed in queries.  For
   * example:
   * <pre>var compoundQuery = AV.Query.and(query1, query2, query3);</pre>
   *
   * will create a compoundQuery that is an 'and' of the query1, query2, and
   * query3.
   * @param {...AV.Query} var_args The list of queries to AND.
   * @return {AV.Query} The query that is the AND of the passed in queries.
   */


  AV.Query.and = function () {
    var queries = _.toArray(arguments);

    var className = null;

    AV._arrayEach(queries, function (q) {
      if (_.isNull(className)) {
        className = q.className;
      }

      if (className !== q.className) {
        throw new Error('All queries must be for the same class');
      }
    });

    var query = new AV.Query(className);

    query._andQuery(queries);

    return query;
  };
  /**
   * Retrieves a list of AVObjects that satisfy the CQL.
   * CQL syntax please see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   *
   * @param {String} cql A CQL string, see {@link https://leancloud.cn/docs/cql_guide.html CQL Guide}.
   * @param {Array} pvalues An array contains placeholder values.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is resolved with the results when
   * the query completes.
   */


  AV.Query.doCloudQuery = function (cql, pvalues, options) {
    var params = {
      cql: cql
    };

    if (_.isArray(pvalues)) {
      params.pvalues = pvalues;
    } else {
      options = pvalues;
    }

    var request = _request('cloudQuery', null, null, 'GET', params, options);

    return request.then(function (response) {
      //query to process results.
      var query = new AV.Query(response.className);
      var results = (0, _map.default)(_).call(_, response.results, function (json) {
        var obj = query._newObject(response);

        if (obj._finishFetch) {
          obj._finishFetch(query._processResult(json), true);
        }

        return obj;
      });
      return {
        results: results,
        count: response.count,
        className: response.className
      };
    });
  };
  /**
   * Return a query with conditions from json.
   * This can be useful to send a query from server side to client side.
   * @since 4.0.0
   * @param {Object} json from {@link AV.Query#toJSON}
   * @return {AV.Query}
   */


  AV.Query.fromJSON = function (_ref) {
    var className = _ref.className,
        where = _ref.where,
        include = _ref.include,
        select = _ref.select,
        includeACL = _ref.includeACL,
        limit = _ref.limit,
        skip = _ref.skip,
        order = _ref.order;

    if (typeof className !== 'string') {
      throw new TypeError('Invalid Query JSON, className must be a String.');
    }

    var query = new AV.Query(className);

    _.extend(query, {
      _where: where,
      _include: include,
      _select: select,
      _includeACL: includeACL,
      _limit: limit,
      _skip: skip,
      _order: order
    });

    return query;
  };

  AV.Query._extend = AV._extend;

  _.extend(AV.Query.prototype,
  /** @lends AV.Query.prototype */
  {
    //hook to iterate result. Added by dennis<xzhuang@avoscloud.com>.
    _processResult: function _processResult(obj) {
      return obj;
    },

    /**
     * Constructs an AV.Object whose id is already known by fetching data from
     * the server.
     *
     * @param {String} objectId The id of the object to be fetched.
     * @param {AuthOptions} options
     * @return {Promise.<AV.Object>}
     */
    get: function get(objectId, options) {
      if (!_.isString(objectId)) {
        throw new Error('objectId must be a string');
      }

      if (objectId === '') {
        return _promise.default.reject(new AVError(AVError.OBJECT_NOT_FOUND, 'Object not found.'));
      }

      var obj = this._newObject();

      obj.id = objectId;

      var queryJSON = this._getParams();

      var fetchOptions = {};
      if ((0, _keys.default)(queryJSON)) fetchOptions.keys = (0, _keys.default)(queryJSON);
      if (queryJSON.include) fetchOptions.include = queryJSON.include;
      if (queryJSON.includeACL) fetchOptions.includeACL = queryJSON.includeACL;
      return _request('classes', this.className, objectId, 'GET', transformFetchOptions(fetchOptions), options).then(function (response) {
        if (_.isEmpty(response)) throw new AVError(AVError.OBJECT_NOT_FOUND, 'Object not found.');

        obj._finishFetch(obj.parse(response), true);

        return obj;
      });
    },

    /**
     * Returns a JSON representation of this query.
     * @return {Object}
     */
    toJSON: function toJSON() {
      var className = this.className,
          where = this._where,
          include = this._include,
          select = this._select,
          includeACL = this._includeACL,
          limit = this._limit,
          skip = this._skip,
          order = this._order;
      return {
        className: className,
        where: where,
        include: include,
        select: select,
        includeACL: includeACL,
        limit: limit,
        skip: skip,
        order: order
      };
    },
    _getParams: function _getParams() {
      var params = _.extend({}, this._defaultParams, {
        where: this._where
      });

      if (this._include.length > 0) {
        params.include = this._include.join(',');
      }

      if (this._select.length > 0) {
        params.keys = this._select.join(',');
      }

      if (this._includeACL !== undefined) {
        params.returnACL = this._includeACL;
      }

      if (this._limit >= 0) {
        params.limit = this._limit;
      }

      if (this._skip > 0) {
        params.skip = this._skip;
      }

      if (this._order !== undefined) {
        params.order = this._order;
      }

      return params;
    },
    _newObject: function _newObject(response) {
      var obj;

      if (response && response.className) {
        obj = new AV.Object(response.className);
      } else {
        obj = new this.objectClass();
      }

      return obj;
    },
    _createRequest: function _createRequest() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getParams();
      var options = arguments.length > 1 ? arguments[1] : undefined;
      var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "/classes/".concat(this.className);

      if (encodeURIComponent((0, _stringify.default)(params)).length > 2000) {
        var body = {
          requests: [{
            method: 'GET',
            path: "/1.1".concat(path),
            params: params
          }]
        };
        return request({
          path: '/batch',
          method: 'POST',
          data: body,
          authOptions: options
        }).then(function (response) {
          var result = response[0];

          if (result.success) {
            return result.success;
          }

          var error = new AVError(result.error.code, result.error.error || 'Unknown batch error');
          throw error;
        });
      }

      return request({
        method: 'GET',
        path: path,
        query: params,
        authOptions: options
      });
    },
    _parseResponse: function _parseResponse(response) {
      var _this = this;

      return (0, _map.default)(_).call(_, response.results, function (json) {
        var obj = _this._newObject(response);

        if (obj._finishFetch) {
          obj._finishFetch(_this._processResult(json), true);
        }

        return obj;
      });
    },

    /**
     * Retrieves a list of AVObjects that satisfy this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
    find: function find(options) {
      var request = this._createRequest(undefined, options);

      return request.then(this._parseResponse.bind(this));
    },

    /**
     * Retrieves both AVObjects and total count.
     *
     * @since 4.12.0
     * @param {AuthOptions} options
     * @return {Promise} A tuple contains results and count.
     */
    findAndCount: function findAndCount(options) {
      var _this2 = this;

      var params = this._getParams();

      params.count = 1;

      var request = this._createRequest(params, options);

      return request.then(function (response) {
        return [_this2._parseResponse(response), response.count];
      });
    },

    /**
     * scan a Query. masterKey required.
     *
     * @since 2.1.0
     * @param {object} [options]
     * @param {string} [options.orderedBy] specify the key to sort
     * @param {number} [options.batchSize] specify the batch size for each request
     * @param {AuthOptions} [authOptions]
     * @return {AsyncIterator.<AV.Object>}
     * @example const testIterator = {
     *   [Symbol.asyncIterator]() {
     *     return new Query('Test').scan(undefined, { useMasterKey: true });
     *   },
     * };
     * for await (const test of testIterator) {
     *   console.log(test.id);
     * }
     */
    scan: function scan() {
      var _this3 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          orderedBy = _ref2.orderedBy,
          batchSize = _ref2.batchSize;

      var authOptions = arguments.length > 1 ? arguments[1] : undefined;

      var condition = this._getParams();

      debug('scan %O', condition);

      if (condition.order) {
        console.warn('The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan.');
        delete condition.order;
      }

      if (condition.skip) {
        console.warn('The skip option of the query is ignored for Query#scan.');
        delete condition.skip;
      }

      if (condition.limit) {
        console.warn('The limit option of the query is ignored for Query#scan.');
        delete condition.limit;
      }

      if (orderedBy) condition.scan_key = orderedBy;
      if (batchSize) condition.limit = batchSize;
      var cursor;
      var remainResults = [];
      return {
        next: function next() {
          if (remainResults.length) {
            return _promise.default.resolve({
              done: false,
              value: remainResults.shift()
            });
          }

          if (cursor === null) {
            return _promise.default.resolve({
              done: true
            });
          }

          return _request('scan/classes', _this3.className, null, 'GET', cursor ? _.extend({}, condition, {
            cursor: cursor
          }) : condition, authOptions).then(function (response) {
            cursor = response.cursor;

            if (response.results.length) {
              var results = _this3._parseResponse(response);

              results.forEach(function (result) {
                return remainResults.push(result);
              });
            }

            if (cursor === null && remainResults.length === 0) {
              return {
                done: true
              };
            }

            return {
              done: false,
              value: remainResults.shift()
            };
          });
        }
      };
    },

    /**
     * Delete objects retrieved by this query.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the save
     *     completes.
     */
    destroyAll: function destroyAll(options) {
      var self = this;
      return (0, _find.default)(self).call(self, options).then(function (objects) {
        return AV.Object.destroyAll(objects, options);
      });
    },

    /**
     * Counts the number of objects that match this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the count when
     * the query completes.
     */
    count: function count(options) {
      var params = this._getParams();

      params.limit = 0;
      params.count = 1;

      var request = this._createRequest(params, options);

      return request.then(function (response) {
        return response.count;
      });
    },

    /**
     * Retrieves at most one AV.Object that satisfies this query.
     *
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the object when
     * the query completes.
     */
    first: function first(options) {
      var self = this;

      var params = this._getParams();

      params.limit = 1;

      var request = this._createRequest(params, options);

      return request.then(function (response) {
        return (0, _map.default)(_).call(_, response.results, function (json) {
          var obj = self._newObject();

          if (obj._finishFetch) {
            obj._finishFetch(self._processResult(json), true);
          }

          return obj;
        })[0];
      });
    },

    /**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    skip: function skip(n) {
      requires(n, 'undefined is not a valid skip value');
      this._skip = n;
      return this;
    },

    /**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    limit: function limit(n) {
      requires(n, 'undefined is not a valid limit value');
      this._limit = n;
      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that the AV.Object must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    equalTo: function equalTo(key, value) {
      requires(key, 'undefined is not a valid key');
      requires(value, 'undefined is not a valid value');
      this._where[key] = AV._encode(value);
      return this;
    },

    /**
     * Helper for condition queries
     * @private
     */
    _addCondition: function _addCondition(key, condition, value) {
      requires(key, 'undefined is not a valid condition key');
      requires(condition, 'undefined is not a valid condition');
      requires(value, 'undefined is not a valid condition value'); // Check if we already have a condition

      if (!this._where[key]) {
        this._where[key] = {};
      }

      this._where[key][condition] = AV._encode(value);
      return this;
    },

    /**
     * Add a constraint to the query that requires a particular
     * <strong>array</strong> key's length to be equal to the provided value.
     * @param {String} key The array key to check.
     * @param {number} value The length value.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    sizeEqualTo: function sizeEqualTo(key, value) {
      this._addCondition(key, '$size', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be not equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that must not be equalled.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    notEqualTo: function notEqualTo(key, value) {
      this._addCondition(key, '$ne', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be less than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    lessThan: function lessThan(key, value) {
      this._addCondition(key, '$lt', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    greaterThan: function greaterThan(key, value) {
      this._addCondition(key, '$gt', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be less than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an upper bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    lessThanOrEqualTo: function lessThanOrEqualTo(key, value) {
      this._addCondition(key, '$lte', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be greater than or equal to the provided value.
     * @param {String} key The key to check.
     * @param value The value that provides an lower bound.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    greaterThanOrEqualTo: function greaterThanOrEqualTo(key, value) {
      this._addCondition(key, '$gte', value);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    containedIn: function containedIn(key, values) {
      this._addCondition(key, '$in', values);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * not be contained in the provided list of values.
     * @param {String} key The key to check.
     * @param {Array} values The values that will not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    notContainedIn: function notContainedIn(key, values) {
      this._addCondition(key, '$nin', values);

      return this;
    },

    /**
     * Add a constraint to the query that requires a particular key's value to
     * contain each one of the provided list of values.
     * @param {String} key The key to check.  This key's value must be an array.
     * @param {Array} values The values that will match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    containsAll: function containsAll(key, values) {
      this._addCondition(key, '$all', values);

      return this;
    },

    /**
     * Add a constraint for finding objects that contain the given key.
     * @param {String} key The key that should exist.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    exists: function exists(key) {
      this._addCondition(key, '$exists', true);

      return this;
    },

    /**
     * Add a constraint for finding objects that do not contain a given key.
     * @param {String} key The key that should not exist
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    doesNotExist: function doesNotExist(key) {
      this._addCondition(key, '$exists', false);

      return this;
    },

    /**
     * Add a regular expression constraint for finding string values that match
     * the provided regular expression.
     * This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {RegExp} regex The regular expression pattern to match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    matches: function matches(key, regex, modifiers) {
      this._addCondition(key, '$regex', regex);

      if (!modifiers) {
        modifiers = '';
      } // Javascript regex options support mig as inline options but store them
      // as properties of the object. We support mi & should migrate them to
      // modifiers


      if (regex.ignoreCase) {
        modifiers += 'i';
      }

      if (regex.multiline) {
        modifiers += 'm';
      }

      if (modifiers && modifiers.length) {
        this._addCondition(key, '$options', modifiers);
      }

      return this;
    },

    /**
     * Add a constraint that requires that a key's value matches a AV.Query
     * constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    matchesQuery: function matchesQuery(key, query) {
      var queryJSON = query._getParams();

      queryJSON.className = query.className;

      this._addCondition(key, '$inQuery', queryJSON);

      return this;
    },

    /**
     * Add a constraint that requires that a key's value not matches a
     * AV.Query constraint.
     * @param {String} key The key that the contains the object to match the
     *                     query.
     * @param {AV.Query} query The query that should not match.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    doesNotMatchQuery: function doesNotMatchQuery(key, query) {
      var queryJSON = query._getParams();

      queryJSON.className = query.className;

      this._addCondition(key, '$notInQuery', queryJSON);

      return this;
    },

    /**
     * Add a constraint that requires that a key's value matches a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     matched.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    matchesKeyInQuery: function matchesKeyInQuery(key, queryKey, query) {
      var queryJSON = query._getParams();

      queryJSON.className = query.className;

      this._addCondition(key, '$select', {
        key: queryKey,
        query: queryJSON
      });

      return this;
    },

    /**
     * Add a constraint that requires that a key's value not match a value in
     * an object returned by a different AV.Query.
     * @param {String} key The key that contains the value that is being
     *                     excluded.
     * @param {String} queryKey The key in the objects returned by the query to
     *                          match against.
     * @param {AV.Query} query The query to run.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    doesNotMatchKeyInQuery: function doesNotMatchKeyInQuery(key, queryKey, query) {
      var queryJSON = query._getParams();

      queryJSON.className = query.className;

      this._addCondition(key, '$dontSelect', {
        key: queryKey,
        query: queryJSON
      });

      return this;
    },

    /**
     * Add constraint that at least one of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
    _orQuery: function _orQuery(queries) {
      var queryJSON = (0, _map.default)(_).call(_, queries, function (q) {
        return q._getParams().where;
      });
      this._where.$or = queryJSON;
      return this;
    },

    /**
     * Add constraint that both of the passed in queries matches.
     * @param {Array} queries
     * @return {AV.Query} Returns the query, so you can chain this call.
     * @private
     */
    _andQuery: function _andQuery(queries) {
      var queryJSON = (0, _map.default)(_).call(_, queries, function (q) {
        return q._getParams().where;
      });
      this._where.$and = queryJSON;
      return this;
    },

    /**
     * Converts a string into a regex that matches it.
     * Surrounding with \Q .. \E does this, we just need to escape \E's in
     * the text separately.
     * @private
     */
    _quote: function _quote(s) {
      return '\\Q' + s.replace('\\E', '\\E\\\\E\\Q') + '\\E';
    },

    /**
     * Add a constraint for finding string values that contain a provided
     * string.  This may be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} substring The substring that the value must contain.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    contains: function contains(key, value) {
      this._addCondition(key, '$regex', this._quote(value));

      return this;
    },

    /**
     * Add a constraint for finding string values that start with a provided
     * string.  This query will use the backend index, so it will be fast even
     * for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} prefix The substring that the value must start with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    startsWith: function startsWith(key, value) {
      this._addCondition(key, '$regex', '^' + this._quote(value));

      return this;
    },

    /**
     * Add a constraint for finding string values that end with a provided
     * string.  This will be slow for large datasets.
     * @param {String} key The key that the string to match is stored in.
     * @param {String} suffix The substring that the value must end with.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    endsWith: function endsWith(key, value) {
      this._addCondition(key, '$regex', this._quote(value) + '$');

      return this;
    },

    /**
     * Sorts the results in ascending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    ascending: function ascending(key) {
      requires(key, 'undefined is not a valid key');
      this._order = key;
      return this;
    },

    /**
     * Also sorts the results in ascending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
    addAscending: function addAscending(key) {
      requires(key, 'undefined is not a valid key');
      if (this._order) this._order += ',' + key;else this._order = key;
      return this;
    },

    /**
     * Sorts the results in descending order by the given key.
     *
     * @param {String} key The key to order by.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    descending: function descending(key) {
      requires(key, 'undefined is not a valid key');
      this._order = '-' + key;
      return this;
    },

    /**
     * Also sorts the results in descending order by the given key. The previous sort keys have
     * precedence over this key.
     *
     * @param {String} key The key to order by
     * @return {AV.Query} Returns the query so you can chain this call.
     */
    addDescending: function addDescending(key) {
      requires(key, 'undefined is not a valid key');
      if (this._order) this._order += ',-' + key;else this._order = '-' + key;
      return this;
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    near: function near(key, point) {
      if (!(point instanceof AV.GeoPoint)) {
        // Try to cast it to a GeoPoint, so that near("loc", [20,30]) works.
        point = new AV.GeoPoint(point);
      }

      this._addCondition(key, '$nearSphere', point);

      return this;
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param maxDistance Maximum distance (in radians) of results to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    withinRadians: function withinRadians(key, point, distance) {
      this.near(key, point);

      this._addCondition(key, '$maxDistance', distance);

      return this;
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 3958.8 miles.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in miles) of results to
     *     return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    withinMiles: function withinMiles(key, point, distance) {
      return this.withinRadians(key, point, distance / 3958.8);
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given and within the maximum distance given.
     * Radius of earth used is 6371.0 kilometers.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Number} maxDistance Maximum distance (in kilometers) of results
     *     to return.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    withinKilometers: function withinKilometers(key, point, distance) {
      return this.withinRadians(key, point, distance / 6371.0);
    },

    /**
     * Add a constraint to the query that requires a particular key's
     * coordinates be contained within a given rectangular geographic bounding
     * box.
     * @param {String} key The key to be constrained.
     * @param {AV.GeoPoint} southwest
     *     The lower-left inclusive corner of the box.
     * @param {AV.GeoPoint} northeast
     *     The upper-right inclusive corner of the box.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    withinGeoBox: function withinGeoBox(key, southwest, northeast) {
      if (!(southwest instanceof AV.GeoPoint)) {
        southwest = new AV.GeoPoint(southwest);
      }

      if (!(northeast instanceof AV.GeoPoint)) {
        northeast = new AV.GeoPoint(northeast);
      }

      this._addCondition(key, '$within', {
        $box: [southwest, northeast]
      });

      return this;
    },

    /**
     * Include nested AV.Objects for the provided key.  You can use dot
     * notation to specify which fields in the included object are also fetch.
     * @param {String[]} keys The name of the key to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    include: function include(keys) {
      var _this4 = this;

      requires(keys, 'undefined is not a valid key');

      _.forEach(arguments, function (keys) {
        var _context;

        _this4._include = (0, _concat.default)(_context = _this4._include).call(_context, ensureArray(keys));
      });

      return this;
    },

    /**
     * Include the ACL.
     * @param {Boolean} [value=true] Whether to include the ACL
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    includeACL: function includeACL() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._includeACL = value;
      return this;
    },

    /**
     * Restrict the fields of the returned AV.Objects to include only the
     * provided keys.  If this is called multiple times, then all of the keys
     * specified in each of the calls will be included.
     * @param {String[]} keys The names of the keys to include.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    select: function select(keys) {
      var _this5 = this;

      requires(keys, 'undefined is not a valid key');

      _.forEach(arguments, function (keys) {
        var _context2;

        _this5._select = (0, _concat.default)(_context2 = _this5._select).call(_context2, ensureArray(keys));
      });

      return this;
    },

    /**
     * Iterates over each result of a query, calling a callback for each one. If
     * the callback returns a promise, the iteration will not continue until
     * that promise has been fulfilled. If the callback returns a rejected
     * promise, then iteration will stop with that error. The items are
     * processed in an unspecified order. The query may not have any sort order,
     * and may not use limit or skip.
     * @param callback {Function} Callback that will be called with each result
     *     of the query.
     * @return {Promise} A promise that will be fulfilled once the
     *     iteration has completed.
     */
    each: function each(callback) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this._order || this._skip || this._limit >= 0) {
        var error = new Error('Cannot iterate on a query with sort, skip, or limit.');
        return _promise.default.reject(error);
      }

      var query = new AV.Query(this.objectClass); // We can override the batch size from the options.
      // This is undocumented, but useful for testing.

      query._limit = options.batchSize || 100;
      query._where = _.clone(this._where);
      query._include = _.clone(this._include);
      query.ascending('objectId');
      var finished = false;
      return continueWhile(function () {
        return !finished;
      }, function () {
        return (0, _find.default)(query).call(query, options).then(function (results) {
          var callbacksDone = _promise.default.resolve();

          _.each(results, function (result) {
            callbacksDone = callbacksDone.then(function () {
              return callback(result);
            });
          });

          return callbacksDone.then(function () {
            if (results.length >= query._limit) {
              query.greaterThan('objectId', results[results.length - 1].id);
            } else {
              finished = true;
            }
          });
        });
      });
    },

    /**
     * Subscribe the changes of this query.
     *
     * LiveQuery is not included in the default bundle: {@link https://url.leanapp.cn/enable-live-query}.
     *
     * @since 3.0.0
     * @return {AV.LiveQuery} An eventemitter which can be used to get LiveQuery updates;
     */
    subscribe: function subscribe(options) {
      return AV.LiveQuery.init(this, options);
    }
  });

  AV.FriendShipQuery = AV.Query._extend({
    _newObject: function _newObject() {
      var UserClass = AV.Object._getSubclass('_User');

      return new UserClass();
    },
    _processResult: function _processResult(json) {
      if (json && json[this._friendshipTag]) {
        var user = json[this._friendshipTag];

        if (user.__type === 'Pointer' && user.className === '_User') {
          delete user.__type;
          delete user.className;
        }

        return user;
      } else {
        return null;
      }
    }
  });
};

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _keys = _interopRequireDefault(__webpack_require__(53));

var _ = __webpack_require__(2);

var EventEmitter = __webpack_require__(223);

var _require = __webpack_require__(31),
    inherits = _require.inherits;

var _require2 = __webpack_require__(27),
    request = _require2.request;

var subscribe = function subscribe(queryJSON, subscriptionId) {
  return request({
    method: 'POST',
    path: '/LiveQuery/subscribe',
    data: {
      query: queryJSON,
      id: subscriptionId
    }
  });
};

module.exports = function (AV) {
  var requireRealtime = function requireRealtime() {
    if (!AV._config.realtime) {
      throw new Error('LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query');
    }
  };
  /**
   * @class
   * A LiveQuery, created by {@link AV.Query#subscribe} is an EventEmitter notifies changes of the Query.
   * @since 3.0.0
   */


  AV.LiveQuery = inherits(EventEmitter,
  /** @lends AV.LiveQuery.prototype */
  {
    constructor: function constructor(id, client, queryJSON, subscriptionId) {
      var _this = this;

      EventEmitter.apply(this);
      this.id = id;
      this._client = client;

      this._client.register(this);

      this._queryJSON = queryJSON;
      this._subscriptionId = subscriptionId;
      this._onMessage = this._dispatch.bind(this);

      this._onReconnect = function () {
        subscribe(_this._queryJSON, _this._subscriptionId).catch(function (error) {
          return console.error("LiveQuery resubscribe error: ".concat(error.message));
        });
      };

      client.on('message', this._onMessage);
      client.on('reconnect', this._onReconnect);
    },
    _dispatch: function _dispatch(message) {
      var _this2 = this;

      message.forEach(function (_ref) {
        var op = _ref.op,
            object = _ref.object,
            queryId = _ref.query_id,
            updatedKeys = _ref.updatedKeys;
        if (queryId !== _this2.id) return;
        var target = AV.parseJSON(_.extend({
          __type: object.className === '_File' ? 'File' : 'Object'
        }, object));

        if (updatedKeys) {
          /**
           * An existing AV.Object which fulfills the Query you subscribe is updated.
           * @event AV.LiveQuery#update
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */

          /**
           * An existing AV.Object which doesn't fulfill the Query is updated and now it fulfills the Query.
           * @event AV.LiveQuery#enter
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */

          /**
           * An existing AV.Object which fulfills the Query is updated and now it doesn't fulfill the Query.
           * @event AV.LiveQuery#leave
           * @param {AV.Object|AV.File} target updated object
           * @param {String[]} updatedKeys updated keys
           */
          _this2.emit(op, target, updatedKeys);
        } else {
          /**
           * A new AV.Object which fulfills the Query you subscribe is created.
           * @event AV.LiveQuery#create
           * @param {AV.Object|AV.File} target updated object
           */

          /**
           * An existing AV.Object which fulfills the Query you subscribe is deleted.
           * @event AV.LiveQuery#delete
           * @param {AV.Object|AV.File} target updated object
           */
          _this2.emit(op, target);
        }
      });
    },

    /**
     * unsubscribe the query
     *
     * @return {Promise}
     */
    unsubscribe: function unsubscribe() {
      var client = this._client;
      client.off('message', this._onMessage);
      client.off('reconnect', this._onReconnect);
      client.deregister(this);
      return request({
        method: 'POST',
        path: '/LiveQuery/unsubscribe',
        data: {
          id: client.id,
          query_id: this.id
        }
      });
    }
  },
  /** @lends AV.LiveQuery */
  {
    init: function init(query) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$subscriptionId = _ref2.subscriptionId,
          userDefinedSubscriptionId = _ref2$subscriptionId === void 0 ? AV._getSubscriptionId() : _ref2$subscriptionId;

      requireRealtime();
      if (!(query instanceof AV.Query)) throw new TypeError('LiveQuery must be inited with a Query');
      return _promise.default.resolve(userDefinedSubscriptionId).then(function (subscriptionId) {
        return AV._config.realtime.createLiveQueryClient(subscriptionId).then(function (liveQueryClient) {
          var _query$_getParams = query._getParams(),
              where = _query$_getParams.where,
              keys = (0, _keys.default)(_query$_getParams),
              returnACL = _query$_getParams.returnACL;

          var queryJSON = {
            where: where,
            keys: keys,
            returnACL: returnACL,
            className: query.className
          };
          var promise = subscribe(queryJSON, subscriptionId).then(function (_ref3) {
            var queryId = _ref3.query_id;
            return new AV.LiveQuery(queryId, liveQueryClient, queryJSON, subscriptionId);
          }).finally(function () {
            liveQueryClient.deregister(promise);
          });
          liveQueryClient.register(promise);
          return promise;
        });
      });
    },

    /**
     * Pause the LiveQuery connection. This is useful to deactivate the SDK when the app is swtiched to background.
     * @static
     * @return void
     */
    pause: function pause() {
      requireRealtime();
      return AV._config.realtime.pause();
    },

    /**
     * Resume the LiveQuery connection. All subscriptions will be restored after reconnection.
     * @static
     * @return void
     */
    resume: function resume() {
      requireRealtime();
      return AV._config.realtime.resume();
    }
  });
};

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(2);

var _require = __webpack_require__(31),
    tap = _require.tap;

module.exports = function (AV) {
  /**
   * @class
   * @example
   * AV.Captcha.request().then(captcha => {
   *   captcha.bind({
   *     textInput: 'code', // the id for textInput
   *     image: 'captcha',
   *     verifyButton: 'verify',
   *   }, {
   *     success: (validateCode) => {}, // next step
   *     error: (error) => {}, // present error.message to user
   *   });
   * });
   */
  AV.Captcha = function Captcha(options, authOptions) {
    this._options = options;
    this._authOptions = authOptions;
    /**
     * The image url of the captcha
     * @type string
     */

    this.url = undefined;
    /**
     * The captchaToken of the captcha.
     * @type string
     */

    this.captchaToken = undefined;
    /**
     * The validateToken of the captcha.
     * @type string
     */

    this.validateToken = undefined;
  };
  /**
   * Refresh the captcha
   * @return {Promise.<string>} a new capcha url
   */


  AV.Captcha.prototype.refresh = function refresh() {
    var _this = this;

    return AV.Cloud._requestCaptcha(this._options, this._authOptions).then(function (_ref) {
      var captchaToken = _ref.captchaToken,
          url = _ref.url;

      _.extend(_this, {
        captchaToken: captchaToken,
        url: url
      });

      return url;
    });
  };
  /**
   * Verify the captcha
   * @param {String} code The code from user input
   * @return {Promise.<string>} validateToken if the code is valid
   */


  AV.Captcha.prototype.verify = function verify(code) {
    var _this2 = this;

    return AV.Cloud.verifyCaptcha(code, this.captchaToken).then(tap(function (validateToken) {
      return _this2.validateToken = validateToken;
    }));
  };

  if (true) {
    /**
     * Bind the captcha to HTMLElements. <b>ONLY AVAILABLE in browsers</b>.
     * @param [elements]
     * @param {String|HTMLInputElement} [elements.textInput] An input element typed text, or the id for the element.
     * @param {String|HTMLImageElement} [elements.image] An image element, or the id for the element.
     * @param {String|HTMLElement} [elements.verifyButton] A button element, or the id for the element.
     * @param [callbacks]
     * @param {Function} [callbacks.success] Success callback will be called if the code is verified. The param `validateCode` can be used for further SMS request.
     * @param {Function} [callbacks.error] Error callback will be called if something goes wrong, detailed in param `error.message`.
     */
    AV.Captcha.prototype.bind = function bind(_ref2, _ref3) {
      var _this3 = this;

      var textInput = _ref2.textInput,
          image = _ref2.image,
          verifyButton = _ref2.verifyButton;
      var success = _ref3.success,
          error = _ref3.error;

      if (typeof textInput === 'string') {
        textInput = document.getElementById(textInput);
        if (!textInput) throw new Error("textInput with id ".concat(textInput, " not found"));
      }

      if (typeof image === 'string') {
        image = document.getElementById(image);
        if (!image) throw new Error("image with id ".concat(image, " not found"));
      }

      if (typeof verifyButton === 'string') {
        verifyButton = document.getElementById(verifyButton);
        if (!verifyButton) throw new Error("verifyButton with id ".concat(verifyButton, " not found"));
      }

      this.__refresh = function () {
        return _this3.refresh().then(function (url) {
          image.src = url;

          if (textInput) {
            textInput.value = '';
            textInput.focus();
          }
        }).catch(function (err) {
          return console.warn("refresh captcha fail: ".concat(err.message));
        });
      };

      if (image) {
        this.__image = image;
        image.src = this.url;
        image.addEventListener('click', this.__refresh);
      }

      this.__verify = function () {
        var code = textInput.value;

        _this3.verify(code).catch(function (err) {
          _this3.__refresh();

          throw err;
        }).then(success, error).catch(function (err) {
          return console.warn("verify captcha fail: ".concat(err.message));
        });
      };

      if (textInput && verifyButton) {
        this.__verifyButton = verifyButton;
        verifyButton.addEventListener('click', this.__verify);
      }
    };
    /**
     * unbind the captcha from HTMLElements. <b>ONLY AVAILABLE in browsers</b>.
     */


    AV.Captcha.prototype.unbind = function unbind() {
      if (this.__image) this.__image.removeEventListener('click', this.__refresh);
      if (this.__verifyButton) this.__verifyButton.removeEventListener('click', this.__verify);
    };
  }
  /**
   * Request a captcha
   * @param [options]
   * @param {Number} [options.width] width(px) of the captcha, ranged 60-200
   * @param {Number} [options.height] height(px) of the captcha, ranged 30-100
   * @param {Number} [options.size=4] length of the captcha, ranged 3-6. MasterKey required.
   * @param {Number} [options.ttl=60] time to live(s), ranged 10-180. MasterKey required.
   * @return {Promise.<AV.Captcha>}
   */


  AV.Captcha.request = function (options, authOptions) {
    var captcha = new AV.Captcha(options, authOptions);
    return captcha.refresh().then(function () {
      return captcha;
    });
  };
};

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);

var _require = __webpack_require__(27),
    _request = _require._request,
    request = _require.request;

module.exports = function (AV) {
  /**
   * Contains functions for calling and declaring
   * <p><strong><em>
   *   Some functions are only available from Cloud Code.
   * </em></strong></p>
   *
   * @namespace
   * @borrows AV.Captcha.request as requestCaptcha
   */
  AV.Cloud = AV.Cloud || {};

  _.extend(AV.Cloud,
  /** @lends AV.Cloud */
  {
    /**
     * Makes a call to a cloud function.
     * @param {String} name The function name.
     * @param {Object} [data] The parameters to send to the cloud function.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    run: function run(name, data, options) {
      return request({
        service: 'engine',
        method: 'POST',
        path: "/functions/".concat(name),
        data: AV._encode(data, null, true),
        authOptions: options
      }).then(function (resp) {
        return AV._decode(resp).result;
      });
    },

    /**
     * Makes a call to a cloud function, you can send {AV.Object} as param or a field of param; the response
     * from server will also be parsed as an {AV.Object}, array of {AV.Object}, or object includes {AV.Object}
     * @param {String} name The function name.
     * @param {Object} [data] The parameters to send to the cloud function.
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result of the function.
     */
    rpc: function rpc(name, data, options) {
      if (_.isArray(data)) {
        return _promise.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK."));
      }

      return request({
        service: 'engine',
        method: 'POST',
        path: "/call/".concat(name),
        data: AV._encodeObjectOrArray(data),
        authOptions: options
      }).then(function (resp) {
        return AV._decode(resp).result;
      });
    },

    /**
     * Make a call to request server date time.
     * @return {Promise.<Date>} A promise that will be resolved with the result
     * of the function.
     * @since 0.5.9
     */
    getServerDate: function getServerDate() {
      return _request('date', null, null, 'GET').then(function (resp) {
        return AV._decode(resp);
      });
    },

    /**
     * Makes a call to request an sms code for operation verification.
     * @param {String|Object} data The mobile phone number string or a JSON
     *    object that contains mobilePhoneNumber,template,sign,op,ttl,name etc.
     * @param {String} data.mobilePhoneNumber
     * @param {String} [data.template] sms template name
     * @param {String} [data.sign] sms signature name
     * @param {String} [data.smsType] sending code by `sms` (default) or `voice` call
     * @param {SMSAuthOptions} [options]
     * @return {Promise} A promise that will be resolved if the request succeed
     */
    requestSmsCode: function requestSmsCode(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (_.isString(data)) {
        data = {
          mobilePhoneNumber: data
        };
      }

      if (!data.mobilePhoneNumber) {
        throw new Error('Missing mobilePhoneNumber.');
      }

      if (options.validateToken) {
        data = _.extend({}, data, {
          validate_token: options.validateToken
        });
      }

      return _request('requestSmsCode', null, null, 'POST', data, options);
    },

    /**
     * Makes a call to verify sms code that sent by AV.Cloud.requestSmsCode
     * @param {String} code The sms code sent by AV.Cloud.requestSmsCode
     * @param {phone} phone The mobile phoner number.
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    verifySmsCode: function verifySmsCode(code, phone) {
      if (!code) throw new Error('Missing sms code.');
      var params = {};

      if (_.isString(phone)) {
        params['mobilePhoneNumber'] = phone;
      }

      return _request('verifySmsCode', code, null, 'POST', params);
    },
    _requestCaptcha: function _requestCaptcha(options, authOptions) {
      return _request('requestCaptcha', null, null, 'GET', options, authOptions).then(function (_ref) {
        var url = _ref.captcha_url,
            captchaToken = _ref.captcha_token;
        return {
          captchaToken: captchaToken,
          url: url
        };
      });
    },

    /**
     * Request a captcha.
     */
    requestCaptcha: AV.Captcha.request,

    /**
     * Verify captcha code. This is the low-level API for captcha.
     * Checkout {@link AV.Captcha} for high abstract APIs.
     * @param {String} code the code from user input
     * @param {String} captchaToken captchaToken returned by {@link AV.Cloud.requestCaptcha}
     * @return {Promise.<String>} validateToken if the code is valid
     */
    verifyCaptcha: function verifyCaptcha(code, captchaToken) {
      return _request('verifyCaptcha', null, null, 'POST', {
        captcha_code: code,
        captcha_token: captchaToken
      }).then(function (_ref2) {
        var validateToken = _ref2.validate_token;
        return validateToken;
      });
    }
  });
};

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var request = __webpack_require__(27).request;

module.exports = function (AV) {
  AV.Installation = AV.Object.extend('_Installation');
  /**
   * @namespace
   */

  AV.Push = AV.Push || {};
  /**
   * Sends a push notification.
   * @param {Object} data The data of the push notification.
   * @param {String[]} [data.channels] An Array of channels to push to.
   * @param {Date} [data.push_time] A Date object for when to send the push.
   * @param {Date} [data.expiration_time]  A Date object for when to expire
   *         the push.
   * @param {Number} [data.expiration_interval] The seconds from now to expire the push.
   * @param {Number} [data.flow_control] The clients to notify per second
   * @param {AV.Query} [data.where] An AV.Query over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {String} [data.cql] A CQL statement over AV.Installation that is used to match
   *         a set of installations to push to.
   * @param {Object} data.data The data to send as part of the push.
             More details:  https://url.leanapp.cn/pushData
   * @param {AuthOptions} [options]
   * @return {Promise}
   */

  AV.Push.send = function (data, options) {
    if (data.where) {
      data.where = data.where._getParams().where;
    }

    if (data.where && data.cql) {
      throw new Error("Both where and cql can't be set");
    }

    if (data.push_time) {
      data.push_time = data.push_time.toJSON();
    }

    if (data.expiration_time) {
      data.expiration_time = data.expiration_time.toJSON();
    }

    if (data.expiration_time && data.expiration_interval) {
      throw new Error("Both expiration_time and expiration_interval can't be set");
    }

    return request({
      service: 'push',
      method: 'POST',
      path: '/push',
      data: data,
      authOptions: options
    });
  };
};

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _typeof2 = _interopRequireDefault(__webpack_require__(141));

var _ = __webpack_require__(2);

var AVRequest = __webpack_require__(27)._request;

var _require = __webpack_require__(31),
    getSessionToken = _require.getSessionToken;

module.exports = function (AV) {
  var getUser = function getUser() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var sessionToken = getSessionToken(options);

    if (sessionToken) {
      return AV.User._fetchUserBySessionToken(getSessionToken(options));
    }

    return AV.User.currentAsync();
  };

  var getUserPointer = function getUserPointer(options) {
    return getUser(options).then(function (currUser) {
      return AV.Object.createWithoutData('_User', currUser.id)._toPointer();
    });
  };
  /**
   * Contains functions to deal with Status in LeanCloud.
   * @class
   */


  AV.Status = function (imageUrl, message) {
    this.data = {};
    this.inboxType = 'default';
    this.query = null;

    if (imageUrl && (0, _typeof2.default)(imageUrl) === 'object') {
      this.data = imageUrl;
    } else {
      if (imageUrl) {
        this.data.image = imageUrl;
      }

      if (message) {
        this.data.message = message;
      }
    }

    return this;
  };

  _.extend(AV.Status.prototype,
  /** @lends AV.Status.prototype */
  {
    /**
     * Gets the value of an attribute in status data.
     * @param {String} attr The string name of an attribute.
     */
    get: function get(attr) {
      return this.data[attr];
    },

    /**
     * Sets a hash of model attributes on the status data.
     * @param {String} key The key to set.
     * @param {any} value The value to give it.
     */
    set: function set(key, value) {
      this.data[key] = value;
      return this;
    },

    /**
     * Destroy this status,then it will not be avaiable in other user's inboxes.
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the destroy
     *     completes.
     */
    destroy: function destroy(options) {
      if (!this.id) return _promise.default.reject(new Error('The status id is not exists.'));
      var request = AVRequest('statuses', null, this.id, 'DELETE', options);
      return request;
    },

    /**
     * Cast the AV.Status object to an AV.Object pointer.
     * @return {AV.Object} A AV.Object pointer.
     */
    toObject: function toObject() {
      if (!this.id) return null;
      return AV.Object.createWithoutData('_Status', this.id);
    },
    _getDataJSON: function _getDataJSON() {
      var json = _.clone(this.data);

      return AV._encode(json);
    },

    /**
     * Send a status by a AV.Query object.
     * @since 0.3.0
     * @param {AuthOptions} options
     * @return {Promise} A promise that is fulfilled when the send
     *     completes.
     * @example
     *     // send a status to male users
     *     var status = new AVStatus('image url', 'a message');
     *     status.query = new AV.Query('_User');
     *     status.query.equalTo('gender', 'male');
     *     status.send().then(function(){
     *              //send status successfully.
     *      }, function(err){
     *             //an error threw.
     *             console.dir(err);
     *      });
     */
    send: function send() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!getSessionToken(options) && !AV.User.current()) {
        throw new Error('Please signin an user.');
      }

      if (!this.query) {
        return AV.Status.sendStatusToFollowers(this, options);
      }

      return getUserPointer(options).then(function (currUser) {
        var query = _this.query._getParams();

        query.className = _this.query.className;
        var data = {};
        data.query = query;
        _this.data = _this.data || {};
        _this.data.source = _this.data.source || currUser;
        data.data = _this._getDataJSON();
        data.inboxType = _this.inboxType || 'default';
        return AVRequest('statuses', null, null, 'POST', data, options);
      }).then(function (response) {
        _this.id = response.objectId;
        _this.createdAt = AV._parseDate(response.createdAt);
        return _this;
      });
    },
    _finishFetch: function _finishFetch(serverData) {
      this.id = serverData.objectId;
      this.createdAt = AV._parseDate(serverData.createdAt);
      this.updatedAt = AV._parseDate(serverData.updatedAt);
      this.messageId = serverData.messageId;
      delete serverData.messageId;
      delete serverData.objectId;
      delete serverData.createdAt;
      delete serverData.updatedAt;
      this.data = AV._decode(serverData);
    }
  });
  /**
   * Send a status to current signined user's followers.
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendStatusToFollowers(status).then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */


  AV.Status.sendStatusToFollowers = function (status) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!getSessionToken(options) && !AV.User.current()) {
      throw new Error('Please signin an user.');
    }

    return getUserPointer(options).then(function (currUser) {
      var query = {};
      query.className = '_Follower';
      query.keys = 'follower';
      query.where = {
        user: currUser
      };
      var data = {};
      data.query = query;
      status.data = status.data || {};
      status.data.source = status.data.source || currUser;
      data.data = status._getDataJSON();
      data.inboxType = status.inboxType || 'default';
      var request = AVRequest('statuses', null, null, 'POST', data, options);
      return request.then(function (response) {
        status.id = response.objectId;
        status.createdAt = AV._parseDate(response.createdAt);
        return status;
      });
    });
  };
  /**
   * <p>Send  a status from current signined user to other user's private status inbox.</p>
   * @since 0.3.0
   * @param {AV.Status} status  A status object to be send to followers.
   * @param {String} target The target user or user's objectId.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the send
   *     completes.
   * @example
   *     // send a private status to user '52e84e47e4b0f8de283b079b'
   *     var status = new AVStatus('image url', 'a message');
   *     AV.Status.sendPrivateStatus(status, '52e84e47e4b0f8de283b079b').then(function(){
   *              //send status successfully.
   *      }, function(err){
   *             //an error threw.
   *             console.dir(err);
   *      });
   */


  AV.Status.sendPrivateStatus = function (status, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!getSessionToken(options) && !AV.User.current()) {
      throw new Error('Please signin an user.');
    }

    if (!target) {
      throw new Error('Invalid target user.');
    }

    var userObjectId = _.isString(target) ? target : target.id;

    if (!userObjectId) {
      throw new Error('Invalid target user.');
    }

    return getUserPointer(options).then(function (currUser) {
      var query = {};
      query.className = '_User';
      query.where = {
        objectId: userObjectId
      };
      var data = {};
      data.query = query;
      status.data = status.data || {};
      status.data.source = status.data.source || currUser;
      data.data = status._getDataJSON();
      data.inboxType = 'private';
      status.inboxType = 'private';
      var request = AVRequest('statuses', null, null, 'POST', data, options);
      return request.then(function (response) {
        status.id = response.objectId;
        status.createdAt = AV._parseDate(response.createdAt);
        return status;
      });
    });
  };
  /**
   * Count unread statuses in someone's inbox.
   * @since 0.3.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the count
   *     completes.
   * @example
   *  AV.Status.countUnreadStatuses(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */


  AV.Status.countUnreadStatuses = function (owner) {
    var inboxType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!_.isString(inboxType)) options = inboxType;

    if (!getSessionToken(options) && owner == null && !AV.User.current()) {
      throw new Error('Please signin an user or pass the owner objectId.');
    }

    return _promise.default.resolve(owner || getUser(options)).then(function (owner) {
      var params = {};
      params.inboxType = AV._encode(inboxType);
      params.owner = AV._encode(owner);
      return AVRequest('subscribe/statuses/count', null, null, 'GET', params, options);
    });
  };
  /**
   * reset unread statuses count in someone's inbox.
   * @since 2.1.0
   * @param {AV.User} owner The status owner.
   * @param {String} inboxType The inbox type, 'default' by default.
   * @param {AuthOptions} options
   * @return {Promise} A promise that is fulfilled when the reset
   *     completes.
   * @example
   *  AV.Status.resetUnreadCount(AV.User.current()).then(function(response){
   *    console.log(response.unread); //unread statuses number.
   *    console.log(response.total);  //total statuses number.
   *  });
   */


  AV.Status.resetUnreadCount = function (owner) {
    var inboxType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!_.isString(inboxType)) options = inboxType;

    if (!getSessionToken(options) && owner == null && !AV.User.current()) {
      throw new Error('Please signin an user or pass the owner objectId.');
    }

    return _promise.default.resolve(owner || getUser(options)).then(function (owner) {
      var params = {};
      params.inboxType = AV._encode(inboxType);
      params.owner = AV._encode(owner);
      return AVRequest('subscribe/statuses/resetUnreadCount', null, null, 'POST', params, options);
    });
  };
  /**
   * Create a status query to find someone's published statuses.
   * @since 0.3.0
   * @param {AV.User} source The status source, typically the publisher.
   * @return {AV.Query} The query object for status.
   * @example
   *   //Find current user's published statuses.
   *   var query = AV.Status.statusQuery(AV.User.current());
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */


  AV.Status.statusQuery = function (source) {
    var query = new AV.Query('_Status');

    if (source) {
      query.equalTo('source', source);
    }

    return query;
  };
  /**
   * <p>AV.InboxQuery defines a query that is used to fetch somebody's inbox statuses.</p>
   * @class
   */


  AV.InboxQuery = AV.Query._extend(
  /** @lends AV.InboxQuery.prototype */
  {
    _objectClass: AV.Status,
    _sinceId: 0,
    _maxId: 0,
    _inboxType: 'default',
    _owner: null,
    _newObject: function _newObject() {
      return new AV.Status();
    },
    _createRequest: function _createRequest(params, options) {
      return AV.InboxQuery.__super__._createRequest.call(this, params, options, '/subscribe/statuses');
    },

    /**
     * Sets the messageId of results to skip before returning any results.
     * This is useful for pagination.
     * Default is zero.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
    sinceId: function sinceId(id) {
      this._sinceId = id;
      return this;
    },

    /**
     * Sets the maximal messageId of results。
     * This is useful for pagination.
     * Default is zero that is no limition.
     * @param {Number} n the mesage id.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
    maxId: function maxId(id) {
      this._maxId = id;
      return this;
    },

    /**
     * Sets the owner of the querying inbox.
     * @param {AV.User} owner The inbox owner.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
    owner: function owner(_owner) {
      this._owner = _owner;
      return this;
    },

    /**
     * Sets the querying inbox type.default is 'default'.
     * @param {String} type The inbox type.
     * @return {AV.InboxQuery} Returns the query, so you can chain this call.
     */
    inboxType: function inboxType(type) {
      this._inboxType = type;
      return this;
    },
    _getParams: function _getParams() {
      var params = AV.InboxQuery.__super__._getParams.call(this);

      params.owner = AV._encode(this._owner);
      params.inboxType = AV._encode(this._inboxType);
      params.sinceId = AV._encode(this._sinceId);
      params.maxId = AV._encode(this._maxId);
      return params;
    }
  });
  /**
   * Create a inbox status query to find someone's inbox statuses.
   * @since 0.3.0
   * @param {AV.User} owner The inbox's owner
   * @param {String} inboxType The inbox type,'default' by default.
   * @return {AV.InboxQuery} The inbox query object.
   * @see AV.InboxQuery
   * @example
   *   //Find current user's default inbox statuses.
   *   var query = AV.Status.inboxQuery(AV.User.current());
   *   //find the statuses after the last message id
   *   query.sinceId(lastMessageId);
   *   query.find().then(function(statuses){
   *      //process statuses
   *   });
   */

  AV.Status.inboxQuery = function (owner, inboxType) {
    var query = new AV.InboxQuery(AV.Status);

    if (owner) {
      query._owner = owner;
    }

    if (inboxType) {
      query._inboxType = inboxType;
    }

    return query;
  };
};

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _map = _interopRequireDefault(__webpack_require__(42));

var _ = __webpack_require__(2);

var AVRequest = __webpack_require__(27)._request;

module.exports = function (AV) {
  /**
   * A builder to generate sort string for app searching.For example:
   * @class
   * @since 0.5.1
   * @example
   *   var builder = new AV.SearchSortBuilder();
   *   builder.ascending('key1').descending('key2','max');
   *   var query = new AV.SearchQuery('Player');
   *   query.sortBy(builder);
   *   query.find().then();
   */
  AV.SearchSortBuilder = function () {
    this._sortFields = [];
  };

  _.extend(AV.SearchSortBuilder.prototype,
  /** @lends AV.SearchSortBuilder.prototype */
  {
    _addField: function _addField(key, order, mode, missing) {
      var field = {};
      field[key] = {
        order: order || 'asc',
        mode: mode || 'avg',
        missing: '_' + (missing || 'last')
      };

      this._sortFields.push(field);

      return this;
    },

    /**
     * Sorts the results in ascending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    ascending: function ascending(key, mode, missing) {
      return this._addField(key, 'asc', mode, missing);
    },

    /**
     * Sorts the results in descending order by the given key and options.
     *
     * @param {String} key The key to order by.
     * @param {String} mode The sort mode, default is 'avg', you can choose
     *                  'max' or 'min' too.
     * @param {String} missing The missing key behaviour, default is 'last',
     *                  you can choose 'first' too.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    descending: function descending(key, mode, missing) {
      return this._addField(key, 'desc', mode, missing);
    },

    /**
     * Add a proximity based constraint for finding objects with key point
     * values near the point given.
     * @param {String} key The key that the AV.GeoPoint is stored in.
     * @param {AV.GeoPoint} point The reference AV.GeoPoint that is used.
     * @param {Object} options The other options such as mode,order, unit etc.
     * @return {AV.SearchSortBuilder} Returns the builder, so you can chain this call.
     */
    whereNear: function whereNear(key, point, options) {
      options = options || {};
      var field = {};
      var geo = {
        lat: point.latitude,
        lon: point.longitude
      };
      var m = {
        order: options.order || 'asc',
        mode: options.mode || 'avg',
        unit: options.unit || 'km'
      };
      m[key] = geo;
      field['_geo_distance'] = m;

      this._sortFields.push(field);

      return this;
    },

    /**
     * Build a sort string by configuration.
     * @return {String} the sort string.
     */
    build: function build() {
      return (0, _stringify.default)(AV._encode(this._sortFields));
    }
  });
  /**
   * App searching query.Use just like AV.Query:
   *
   * Visit <a href='https://leancloud.cn/docs/app_search_guide.html'>App Searching Guide</a>
   * for more details.
   * @class
   * @since 0.5.1
   * @example
   *   var query = new AV.SearchQuery('Player');
   *   query.queryString('*');
   *   query.find().then(function(results) {
   *     console.log('Found %d objects', query.hits());
   *     //Process results
   *   });
   */


  AV.SearchQuery = AV.Query._extend(
  /** @lends AV.SearchQuery.prototype */
  {
    _sid: null,
    _hits: 0,
    _queryString: null,
    _highlights: null,
    _sortBuilder: null,
    _clazz: null,
    constructor: function constructor(className) {
      if (className) {
        this._clazz = className;
      } else {
        className = '__INVALID_CLASS';
      }

      AV.Query.call(this, className);
    },
    _createRequest: function _createRequest(params, options) {
      return AVRequest('search/select', null, null, 'GET', params || this._getParams(), options);
    },

    /**
     * Sets the sid of app searching query.Default is null.
     * @param {String} sid  Scroll id for searching.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    sid: function sid(_sid) {
      this._sid = _sid;
      return this;
    },

    /**
     * Sets the query string of app searching.
     * @param {String} q  The query string.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    queryString: function queryString(q) {
      this._queryString = q;
      return this;
    },

    /**
     * Sets the highlight fields. Such as
     * <pre><code>
     *   query.highlights('title');
     *   //or pass an array.
     *   query.highlights(['title', 'content'])
     * </code></pre>
     * @param {String|String[]} highlights a list of fields.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     */
    highlights: function highlights(_highlights) {
      var objects;

      if (_highlights && _.isString(_highlights)) {
        objects = _.toArray(arguments);
      } else {
        objects = _highlights;
      }

      this._highlights = objects;
      return this;
    },

    /**
     * Sets the sort builder for this query.
     * @see AV.SearchSortBuilder
     * @param { AV.SearchSortBuilder} builder The sort builder.
     * @return {AV.SearchQuery} Returns the query, so you can chain this call.
     *
     */
    sortBy: function sortBy(builder) {
      this._sortBuilder = builder;
      return this;
    },

    /**
     * Returns the number of objects that match this query.
     * @return {Number}
     */
    hits: function hits() {
      if (!this._hits) {
        this._hits = 0;
      }

      return this._hits;
    },
    _processResult: function _processResult(json) {
      delete json['className'];
      delete json['_app_url'];
      delete json['_deeplink'];
      return json;
    },

    /**
     * Returns true when there are more documents can be retrieved by this
     * query instance, you can call find function to get more results.
     * @see AV.SearchQuery#find
     * @return {Boolean}
     */
    hasMore: function hasMore() {
      return !this._hitEnd;
    },

    /**
     * Reset current query instance state(such as sid, hits etc) except params
     * for a new searching. After resetting, hasMore() will return true.
     */
    reset: function reset() {
      this._hitEnd = false;
      this._sid = null;
      this._hits = 0;
    },

    /**
     * Retrieves a list of AVObjects that satisfy this query.
     * Either options.success or options.error is called when the find
     * completes.
     *
     * @see AV.Query#find
     * @param {AuthOptions} options
     * @return {Promise} A promise that is resolved with the results when
     * the query completes.
     */
    find: function find(options) {
      var self = this;

      var request = this._createRequest(undefined, options);

      return request.then(function (response) {
        //update sid for next querying.
        if (response.sid) {
          self._oldSid = self._sid;
          self._sid = response.sid;
        } else {
          self._sid = null;
          self._hitEnd = true;
        }

        self._hits = response.hits || 0;
        return (0, _map.default)(_).call(_, response.results, function (json) {
          if (json.className) {
            response.className = json.className;
          }

          var obj = self._newObject(response);

          obj.appURL = json['_app_url'];

          obj._finishFetch(self._processResult(json), true);

          return obj;
        });
      });
    },
    _getParams: function _getParams() {
      var params = AV.SearchQuery.__super__._getParams.call(this);

      delete params.where;

      if (this._clazz) {
        params.clazz = this.className;
      }

      if (this._sid) {
        params.sid = this._sid;
      }

      if (!this._queryString) {
        throw new Error('Please set query string.');
      } else {
        params.q = this._queryString;
      }

      if (this._highlights) {
        params.highlights = this._highlights.join(',');
      }

      if (this._sortBuilder && params.order) {
        throw new Error('sort and order can not be set at same time.');
      }

      if (this._sortBuilder) {
        params.sort = this._sortBuilder.build();
      }

      return params;
    }
  });
};
/**
 * Sorts the results in ascending order by the given key.
 *
 * @method AV.SearchQuery#ascending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Also sorts the results in ascending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addAscending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */

/**
 * Sorts the results in descending order by the given key.
 *
 * @method AV.SearchQuery#descending
 * @param {String} key The key to order by.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Also sorts the results in descending order by the given key. The previous sort keys have
 * precedence over this key.
 *
 * @method AV.SearchQuery#addDescending
 * @param {String} key The key to order by
 * @return {AV.SearchQuery} Returns the query so you can chain this call.
 */

/**
 * Include nested AV.Objects for the provided key.  You can use dot
 * notation to specify which fields in the included object are also fetch.
 * @method AV.SearchQuery#include
 * @param {String[]} keys The name of the key to include.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Sets the number of results to skip before returning any results.
 * This is useful for pagination.
 * Default is to skip zero results.
 * @method AV.SearchQuery#skip
 * @param {Number} n the number of results to skip.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/**
 * Sets the limit of the number of results to return. The default limit is
 * 100, with a maximum of 1000 results being returned at a time.
 * @method AV.SearchQuery#limit
 * @param {Number} n the number of results to limit to.
 * @return {AV.SearchQuery} Returns the query, so you can chain this call.
 */

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);

var AVError = __webpack_require__(43);

var _require = __webpack_require__(27),
    request = _require.request;

module.exports = function (AV) {
  /**
   * 包含了使用了 LeanCloud
   *  <a href='/docs/leaninsight_guide.html'>离线数据分析功能</a>的函数。
   * <p><strong><em>
   *   仅在云引擎运行环境下有效。
   * </em></strong></p>
   * @namespace
   */
  AV.Insight = AV.Insight || {};

  _.extend(AV.Insight,
  /** @lends AV.Insight */
  {
    /**
     * 开始一个 Insight 任务。结果里将返回 Job id，你可以拿得到的 id 使用
     * AV.Insight.JobQuery 查询任务状态和结果。
     * @param {Object} jobConfig 任务配置的 JSON 对象，例如：<code><pre>
     *                   { "sql" : "select count(*) as c,gender from _User group by gender",
     *                     "saveAs": {
     *                         "className" : "UserGender",
     *                         "limit": 1
     *                      }
     *                   }
     *                  </pre></code>
     *               sql 指定任务执行的 SQL 语句， saveAs（可选） 指定将结果保存在哪张表里，limit 最大 1000。
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     */
    startJob: function startJob(jobConfig, options) {
      if (!jobConfig || !jobConfig.sql) {
        throw new Error('Please provide the sql to run the job.');
      }

      var data = {
        jobConfig: jobConfig,
        appId: AV.applicationId
      };
      return request({
        path: '/bigquery/jobs',
        method: 'POST',
        data: AV._encode(data, null, true),
        authOptions: options,
        signKey: false
      }).then(function (resp) {
        return AV._decode(resp).id;
      });
    },

    /**
     * 监听 Insight 任务事件（未来推出独立部署的离线分析服务后开放）
     *  <p><strong><em>
     *     仅在云引擎运行环境下有效。
     *  </em></strong></p>
     * @param {String} event 监听的事件，目前尚不支持。
     * @param {Function} 监听回调函数，接收 (err, id) 两个参数，err 表示错误信息，
     *                   id 表示任务 id。接下来你可以拿这个 id 使用AV.Insight.JobQuery 查询任务状态和结果。
     *
     */
    on: function on(event, cb) {}
  });
  /**
   * 创建一个对象，用于查询 Insight 任务状态和结果。
   * @class
   * @param {String} id 任务 id
   * @since 0.5.5
   */


  AV.Insight.JobQuery = function (id, className) {
    if (!id) {
      throw new Error('Please provide the job id.');
    }

    this.id = id;
    this.className = className;
    this._skip = 0;
    this._limit = 100;
  };

  _.extend(AV.Insight.JobQuery.prototype,
  /** @lends AV.Insight.JobQuery.prototype */
  {
    /**
     * Sets the number of results to skip before returning any results.
     * This is useful for pagination.
     * Default is to skip zero results.
     * @param {Number} n the number of results to skip.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    skip: function skip(n) {
      this._skip = n;
      return this;
    },

    /**
     * Sets the limit of the number of results to return. The default limit is
     * 100, with a maximum of 1000 results being returned at a time.
     * @param {Number} n the number of results to limit to.
     * @return {AV.Query} Returns the query, so you can chain this call.
     */
    limit: function limit(n) {
      this._limit = n;
      return this;
    },

    /**
     * 查询任务状态和结果，任务结果为一个 JSON 对象，包括 status 表示任务状态， totalCount 表示总数，
     * results 数组表示任务结果数组，previewCount 表示可以返回的结果总数，任务的开始和截止时间
     * startTime、endTime 等信息。
     *
     * @param {AuthOptions} [options]
     * @return {Promise} A promise that will be resolved with the result
     * of the function.
     *
     */
    find: function find(options) {
      var params = {
        skip: this._skip,
        limit: this._limit
      };
      return request({
        path: "/bigquery/jobs/".concat(this.id),
        method: 'GET',
        query: params,
        authOptions: options,
        signKey: false
      }).then(function (response) {
        if (response.error) {
          return _promise.default.reject(new AVError(response.code, response.error));
        }

        return _promise.default.resolve(response);
      });
    }
  });
};

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _ = __webpack_require__(2);

var _require = __webpack_require__(27),
    LCRequest = _require.request;

var _require2 = __webpack_require__(31),
    getSessionToken = _require2.getSessionToken;

module.exports = function (AV) {
  var getUserWithSessionToken = function getUserWithSessionToken(authOptions) {
    if (authOptions.user) {
      if (!authOptions.user._sessionToken) {
        throw new Error('authOptions.user is not signed in.');
      }

      return _promise.default.resolve(authOptions.user);
    }

    if (authOptions.sessionToken) {
      return AV.User._fetchUserBySessionToken(authOptions.sessionToken);
    }

    return AV.User.currentAsync();
  };

  var getSessionTokenAsync = function getSessionTokenAsync(authOptions) {
    var sessionToken = getSessionToken(authOptions);

    if (sessionToken) {
      return _promise.default.resolve(sessionToken);
    }

    return AV.User.currentAsync().then(function (user) {
      if (user) {
        return user.getSessionToken();
      }
    });
  };
  /**
   * Contains functions to deal with Friendship in LeanCloud.
   * @class
   */


  AV.Friendship = {
    /**
     * Request friendship.
     * @since 4.8.0
     * @param {String | AV.User | Object} options if an AV.User or string is given, it will be used as the friend.
     * @param {AV.User | string} options.friend The friend (or friend's objectId) to follow.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of followeeQuery.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    request: function request(options) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var friend;
      var attributes;

      if (options.friend) {
        friend = options.friend;
        attributes = options.attributes;
      } else {
        friend = options;
      }

      var friendObj = _.isString(friend) ? AV.Object.createWithoutData('_User', friend) : friend;
      return getUserWithSessionToken(authOptions).then(function (userObj) {
        if (!userObj) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'POST',
          path: '/users/friendshipRequests',
          data: {
            user: userObj._toPointer(),
            friend: friendObj._toPointer(),
            friendship: attributes
          },
          authOptions: authOptions
        });
      });
    },

    /**
     * Accept a friendship request.
     * @since 4.8.0
     * @param {AV.Object | string | Object} options if an AV.Object or string is given, it will be used as the request in _FriendshipRequest.
     * @param {AV.Object} options.request The request (or it's objectId) to be accepted.
     * @param {Object} [options.attributes] key-value attributes dictionary to be used as conditions of {@link AV#followeeQuery}.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    acceptRequest: function acceptRequest(options) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var request;
      var attributes;

      if (options.request) {
        request = options.request;
        attributes = options.attributes;
      } else {
        request = options;
      }

      var requestId = _.isString(request) ? request : request.id;
      return getSessionTokenAsync(authOptions).then(function (sessionToken) {
        if (!sessionToken) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'PUT',
          path: '/users/friendshipRequests/' + requestId + '/accept',
          data: {
            friendship: AV._encode(attributes)
          },
          authOptions: authOptions
        });
      });
    },

    /**
     * Decline a friendship request.
     * @param {AV.Object | string} request The request (or it's objectId) to be declined.
     * @param {AuthOptions} [authOptions]
     * @return {Promise<void>}
     */
    declineRequest: function declineRequest(request) {
      var authOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var requestId = _.isString(request) ? request : request.id;
      return getSessionTokenAsync(authOptions).then(function (sessionToken) {
        if (!sessionToken) {
          throw new Error('Please signin an user.');
        }

        return LCRequest({
          method: 'PUT',
          path: '/users/friendshipRequests/' + requestId + '/decline',
          authOptions: authOptions
        });
      });
    }
  };
};

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _stringify = _interopRequireDefault(__webpack_require__(37));

var _ = __webpack_require__(2);

var _require = __webpack_require__(27),
    _request = _require._request;

var AV = __webpack_require__(67);

var serializeMessage = function serializeMessage(message) {
  if (typeof message === 'string') {
    return message;
  }

  if (typeof message.getPayload === 'function') {
    return (0, _stringify.default)(message.getPayload());
  }

  return (0, _stringify.default)(message);
};
/**
 * <p>An AV.Conversation is a local representation of a LeanCloud realtime's
 * conversation. This class is a subclass of AV.Object, and retains the
 * same functionality of an AV.Object, but also extends it with various
 * conversation specific methods, like get members, creators of this conversation.
 * </p>
 *
 * @class AV.Conversation
 * @param {String} name The name of the Role to create.
 * @param {Object} [options]
 * @param {Boolean} [options.isSystem] Set this conversation as system conversation.
 * @param {Boolean} [options.isTransient] Set this conversation as transient conversation.
 */


module.exports = AV.Object.extend('_Conversation',
/** @lends AV.Conversation.prototype */
{
  constructor: function constructor(name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    AV.Object.prototype.constructor.call(this, null, null);
    this.set('name', name);

    if (options.isSystem !== undefined) {
      this.set('sys', options.isSystem ? true : false);
    }

    if (options.isTransient !== undefined) {
      this.set('tr', options.isTransient ? true : false);
    }
  },

  /**
   * Get current conversation's creator.
   *
   * @return {String}
   */
  getCreator: function getCreator() {
    return this.get('c');
  },

  /**
   * Get the last message's time.
   *
   * @return {Date}
   */
  getLastMessageAt: function getLastMessageAt() {
    return this.get('lm');
  },

  /**
   * Get this conversation's members
   *
   * @return {String[]}
   */
  getMembers: function getMembers() {
    return this.get('m');
  },

  /**
   * Add a member to this conversation
   *
   * @param {String} member
   */
  addMember: function addMember(member) {
    return this.add('m', member);
  },

  /**
   * Get this conversation's members who set this conversation as muted.
   *
   * @return {String[]}
   */
  getMutedMembers: function getMutedMembers() {
    return this.get('mu');
  },

  /**
   * Get this conversation's name field.
   *
   * @return String
   */
  getName: function getName() {
    return this.get('name');
  },

  /**
   * Returns true if this conversation is transient conversation.
   *
   * @return {Boolean}
   */
  isTransient: function isTransient() {
    return this.get('tr');
  },

  /**
   * Returns true if this conversation is system conversation.
   *
   * @return {Boolean}
   */
  isSystem: function isSystem() {
    return this.get('sys');
  },

  /**
   * Send realtime message to this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}
   * @param {Object} [options]
   * @param {Boolean} [options.transient] Whether send this message as transient message or not.
   * @param {String[]} [options.toClients] Ids of clients to send to. This option can be used only in system conversation.
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
  send: function send(fromClient, message) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var authOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var data = {
      from_peer: fromClient,
      conv_id: this.id,
      transient: false,
      message: serializeMessage(message)
    };

    if (options.toClients !== undefined) {
      data.to_peers = options.toClients;
    }

    if (options.transient !== undefined) {
      data.transient = options.transient ? true : false;
    }

    if (options.pushData !== undefined) {
      data.push_data = options.pushData;
    }

    return _request('rtm', 'messages', null, 'POST', data, authOptions);
  },

  /**
   * Send realtime broadcast message to all clients, via this conversation, using HTTP request.
   *
   * @param {String} fromClient Sender's client id.
   * @param {String|Object} message The message which will send to conversation.
   *     It could be a raw string, or an object with a `toJSON` method, like a
   *     realtime SDK's Message object. See more: {@link https://leancloud.cn/docs/realtime_guide-js.html#消息}.
   * @param {Object} [options]
   * @param {Object} [options.pushData] Push data to this message. See more: {@link https://url.leanapp.cn/pushData 推送消息内容}.
   * @param {Object} [options.validTill] The message will valid till this time.
   * @param {AuthOptions} [authOptions]
   * @return {Promise}
   */
  broadcast: function broadcast(fromClient, message) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var authOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var data = {
      from_peer: fromClient,
      conv_id: this.id,
      message: serializeMessage(message)
    };

    if (options.pushData !== undefined) {
      data.push = options.pushData;
    }

    if (options.validTill !== undefined) {
      var ts = options.validTill;

      if (_.isDate(ts)) {
        ts = ts.getTime();
      }

      options.valid_till = ts;
    }

    return _request('rtm', 'broadcast', null, 'POST', data, authOptions);
  }
});

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _promise = _interopRequireDefault(__webpack_require__(10));

var _map = _interopRequireDefault(__webpack_require__(42));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _ = __webpack_require__(2);

var _require = __webpack_require__(27),
    request = _require.request;

var _require2 = __webpack_require__(31),
    ensureArray = _require2.ensureArray,
    parseDate = _require2.parseDate;

var AV = __webpack_require__(67);
/**
 * The version change interval for Leaderboard
 * @enum
 */


AV.LeaderboardVersionChangeInterval = {
  NEVER: 'never',
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month'
};
/**
 * The order of the leaderboard results
 * @enum
 */

AV.LeaderboardOrder = {
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
};
/**
 * The update strategy for Leaderboard
 * @enum
 */

AV.LeaderboardUpdateStrategy = {
  /** Only keep the best statistic. If the leaderboard is in descending order, the best statistic is the highest one. */
  BETTER: 'better',

  /** Keep the last updated statistic */
  LAST: 'last',

  /** Keep the sum of all updated statistics */
  SUM: 'sum'
};
/**
 * @typedef {Object} Ranking
 * @property {number} rank Starts at 0
 * @property {number} value the statistic value of this ranking
 * @property {AV.User} user The user of this ranking
 * @property {Statistic[]} [includedStatistics] Other statistics of the user, specified by the `includeStatistic` option of `AV.Leaderboard.getResults()`
 */

/**
 * @typedef {Object} LeaderboardArchive
 * @property {string} statisticName
 * @property {number} version version of the leaderboard
 * @property {string} status
 * @property {string} url URL for the downloadable archive
 * @property {Date} activatedAt time when this version became active
 * @property {Date} deactivatedAt time when this version was deactivated by a version incrementing
 */

/**
 * @class
 */

function Statistic(_ref) {
  var name = _ref.name,
      value = _ref.value,
      version = _ref.version;

  /**
   * @type {string}
   */
  this.name = name;
  /**
   * @type {number}
   */

  this.value = value;
  /**
   * @type {number?}
   */

  this.version = version;
}

var parseStatisticData = function parseStatisticData(statisticData) {
  var _AV$_decode = AV._decode(statisticData),
      name = _AV$_decode.statisticName,
      value = _AV$_decode.statisticValue,
      version = _AV$_decode.version;

  return new Statistic({
    name: name,
    value: value,
    version: version
  });
};
/**
 * @class
 */


AV.Leaderboard = function Leaderboard(statisticName) {
  /**
   * @type {string}
   */
  this.statisticName = statisticName;
  /**
   * @type {AV.LeaderboardOrder}
   */

  this.order = undefined;
  /**
   * @type {AV.LeaderboardUpdateStrategy}
   */

  this.updateStrategy = undefined;
  /**
   * @type {AV.LeaderboardVersionChangeInterval}
   */

  this.versionChangeInterval = undefined;
  /**
   * @type {number}
   */

  this.version = undefined;
  /**
   * @type {Date?}
   */

  this.nextResetAt = undefined;
  /**
   * @type {Date?}
   */

  this.createdAt = undefined;
};

var Leaderboard = AV.Leaderboard;
/**
 * Create an instance of Leaderboard for the give statistic name.
 * @param {string} statisticName
 * @return {AV.Leaderboard}
 */

AV.Leaderboard.createWithoutData = function (statisticName) {
  return new Leaderboard(statisticName);
};
/**
 * (masterKey required) Create a new Leaderboard.
 * @param {Object} options
 * @param {string} options.statisticName
 * @param {AV.LeaderboardOrder} options.order
 * @param {AV.LeaderboardVersionChangeInterval} [options.versionChangeInterval] default to WEEK
 * @param {AV.LeaderboardUpdateStrategy} [options.updateStrategy] default to BETTER
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */


AV.Leaderboard.createLeaderboard = function (_ref2, authOptions) {
  var statisticName = _ref2.statisticName,
      order = _ref2.order,
      versionChangeInterval = _ref2.versionChangeInterval,
      updateStrategy = _ref2.updateStrategy;
  return request({
    method: 'POST',
    path: '/leaderboard/leaderboards',
    data: {
      statisticName: statisticName,
      order: order,
      versionChangeInterval: versionChangeInterval,
      updateStrategy: updateStrategy
    },
    authOptions: authOptions
  }).then(function (data) {
    var leaderboard = new Leaderboard(statisticName);
    return leaderboard._finishFetch(data);
  });
};
/**
 * Get the Leaderboard with the specified statistic name.
 * @param {string} statisticName
 * @param {AuthOptions} [authOptions]
 * @return {Promise<AV.Leaderboard>}
 */


AV.Leaderboard.getLeaderboard = function (statisticName, authOptions) {
  return Leaderboard.createWithoutData(statisticName).fetch(authOptions);
};
/**
 * Get Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} [options]
 * @param {string[]} [options.statisticNames] Specify the statisticNames. If not set, all statistics of the user will be fetched.
 * @param {AuthOptions} [authOptions]
 * @return {Promise<Statistic[]>}
 */


AV.Leaderboard.getStatistics = function (user) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      statisticNames = _ref3.statisticNames;

  var authOptions = arguments.length > 2 ? arguments[2] : undefined;
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    return request({
      method: 'GET',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        statistics: statisticNames ? ensureArray(statisticNames).join(',') : undefined
      },
      authOptions: authOptions
    }).then(function (_ref4) {
      var results = _ref4.results;
      return (0, _map.default)(results).call(results, parseStatisticData);
    });
  });
};
/**
 * Update Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to update.
 * @param {AuthOptions} [options] AuthOptions plus:
 * @param {boolean} [options.overwrite] Wethere to overwrite these statistics disregarding the updateStrategy of there leaderboards
 * @return {Promise<Statistic[]>}
 */


AV.Leaderboard.updateStatistics = function (user, statistics) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    var data = (0, _map.default)(_).call(_, statistics, function (value, key) {
      return {
        statisticName: key,
        statisticValue: value
      };
    });
    var overwrite = options.overwrite;
    return request({
      method: 'POST',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        overwrite: overwrite ? 1 : undefined
      },
      data: data,
      authOptions: options
    }).then(function (_ref5) {
      var results = _ref5.results;
      return (0, _map.default)(results).call(results, parseStatisticData);
    });
  });
};
/**
 * Delete Statistics for the specified user.
 * @param {AV.User} user The specified AV.User pointer.
 * @param {Object} statistics A name-value pair representing the statistics to delete.
 * @param {AuthOptions} [options]
 * @return {Promise<void>}
 */


AV.Leaderboard.deleteStatistics = function (user, statisticNames, authOptions) {
  return _promise.default.resolve().then(function () {
    if (!(user && user.id)) throw new Error('user must be an AV.User');
    return request({
      method: 'DELETE',
      path: "/leaderboard/users/".concat(user.id, "/statistics"),
      query: {
        statistics: ensureArray(statisticNames).join(',')
      },
      authOptions: authOptions
    }).then(function () {
      return undefined;
    });
  });
};

_.extend(Leaderboard.prototype,
/** @lends AV.Leaderboard.prototype */
{
  _finishFetch: function _finishFetch(data) {
    var _this = this;

    _.forEach(data, function (value, key) {
      if (key === 'updatedAt' || key === 'objectId') return;

      if (key === 'expiredAt') {
        key = 'nextResetAt';
      }

      if (key === 'createdAt') {
        value = parseDate(value);
      }

      if (value && value.__type === 'Date') {
        value = parseDate(value.iso);
      }

      _this[key] = value;
    });

    return this;
  },

  /**
   * Fetch data from the srever.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  fetch: function fetch(authOptions) {
    var _this2 = this;

    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      authOptions: authOptions
    }).then(function (data) {
      return _this2._finishFetch(data);
    });
  },

  /**
   * Counts the number of users participated in this leaderboard
   * @param {Object} [options]
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<number>}
   */
  count: function count() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        version = _ref6.version;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/ranks"),
      query: {
        count: 1,
        limit: 0,
        version: version
      },
      authOptions: authOptions
    }).then(function (_ref7) {
      var count = _ref7.count;
      return count;
    });
  },
  _getResults: function _getResults(_ref8, authOptions, userId) {
    var _context;

    var skip = _ref8.skip,
        limit = _ref8.limit,
        selectUserKeys = _ref8.selectUserKeys,
        includeUserKeys = _ref8.includeUserKeys,
        includeStatistics = _ref8.includeStatistics,
        version = _ref8.version;
    return request({
      method: 'GET',
      path: (0, _concat.default)(_context = "/leaderboard/leaderboards/".concat(this.statisticName, "/ranks")).call(_context, userId ? "/".concat(userId) : ''),
      query: {
        skip: skip,
        limit: limit,
        selectUserKeys: _.union(ensureArray(selectUserKeys), ensureArray(includeUserKeys)).join(',') || undefined,
        includeUser: includeUserKeys ? ensureArray(includeUserKeys).join(',') : undefined,
        includeStatistics: includeStatistics ? ensureArray(includeStatistics).join(',') : undefined,
        version: version
      },
      authOptions: authOptions
    }).then(function (_ref9) {
      var rankings = _ref9.results;
      return (0, _map.default)(rankings).call(rankings, function (rankingData) {
        var _AV$_decode2 = AV._decode(rankingData),
            user = _AV$_decode2.user,
            value = _AV$_decode2.statisticValue,
            rank = _AV$_decode2.rank,
            _AV$_decode2$statisti = _AV$_decode2.statistics,
            statistics = _AV$_decode2$statisti === void 0 ? [] : _AV$_decode2$statisti;

        return {
          user: user,
          value: value,
          rank: rank,
          includedStatistics: (0, _map.default)(statistics).call(statistics, parseStatisticData)
        };
      });
    });
  },

  /**
   * Retrieve a list of ranked users for this Leaderboard.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
  getResults: function getResults() {
    var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        skip = _ref10.skip,
        limit = _ref10.limit,
        selectUserKeys = _ref10.selectUserKeys,
        includeUserKeys = _ref10.includeUserKeys,
        includeStatistics = _ref10.includeStatistics,
        version = _ref10.version;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return this._getResults({
      skip: skip,
      limit: limit,
      selectUserKeys: selectUserKeys,
      includeUserKeys: includeUserKeys,
      includeStatistics: includeStatistics,
      version: version
    }, authOptions);
  },

  /**
   * Retrieve a list of ranked users for this Leaderboard, centered on the specified user.
   * @param {AV.User} user The specified AV.User pointer.
   * @param {Object} [options]
   * @param {number} [options.limit] The limit of the number of results.
   * @param {string[]} [options.selectUserKeys] Specify keys of the users to include in the Rankings
   * @param {string[]} [options.includeUserKeys] If the value of a selected user keys is a Pointer, use this options to include its value.
   * @param {string[]} [options.includeStatistics] Specify other statistics to include in the Rankings
   * @param {number} [options.version] Specify the version of the leaderboard
   * @param {AuthOptions} [authOptions]
   * @return {Promise<Ranking[]>}
   */
  getResultsAroundUser: function getResultsAroundUser(user) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var authOptions = arguments.length > 2 ? arguments[2] : undefined;

    // getResultsAroundUser(options, authOptions)
    if (user && typeof user.id !== 'string') {
      return this.getResultsAroundUser(undefined, user, options);
    }

    var limit = options.limit,
        selectUserKeys = options.selectUserKeys,
        includeUserKeys = options.includeUserKeys,
        includeStatistics = options.includeStatistics,
        version = options.version;
    return this._getResults({
      limit: limit,
      selectUserKeys: selectUserKeys,
      includeUserKeys: includeUserKeys,
      includeStatistics: includeStatistics,
      version: version
    }, authOptions, user ? user.id : 'self');
  },
  _update: function _update(data, authOptions) {
    var _this3 = this;

    return request({
      method: 'PUT',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      data: data,
      authOptions: authOptions
    }).then(function (result) {
      return _this3._finishFetch(result);
    });
  },

  /**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardVersionChangeInterval} versionChangeInterval
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  updateVersionChangeInterval: function updateVersionChangeInterval(versionChangeInterval, authOptions) {
    return this._update({
      versionChangeInterval: versionChangeInterval
    }, authOptions);
  },

  /**
   * (masterKey required) Update the version change interval of the Leaderboard.
   * @param {AV.LeaderboardUpdateStrategy} updateStrategy
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  updateUpdateStrategy: function updateUpdateStrategy(updateStrategy, authOptions) {
    return this._update({
      updateStrategy: updateStrategy
    }, authOptions);
  },

  /**
   * (masterKey required) Reset the Leaderboard. The version of the Leaderboard will be incremented by 1.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<AV.Leaderboard>}
   */
  reset: function reset(authOptions) {
    var _this4 = this;

    return request({
      method: 'PUT',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/incrementVersion"),
      authOptions: authOptions
    }).then(function (data) {
      return _this4._finishFetch(data);
    });
  },

  /**
   * (masterKey required) Delete the Leaderboard and its all archived versions.
   * @param {AuthOptions} [authOptions]
   * @return {void}
   */
  destroy: function destroy(authOptions) {
    return AV.request({
      method: 'DELETE',
      path: "/leaderboard/leaderboards/".concat(this.statisticName),
      authOptions: authOptions
    }).then(function () {
      return undefined;
    });
  },

  /**
   * (masterKey required) Get archived versions.
   * @param {Object} [options]
   * @param {number} [options.skip] The number of results to skip. This is useful for pagination.
   * @param {number} [options.limit] The limit of the number of results.
   * @param {AuthOptions} [authOptions]
   * @return {Promise<LeaderboardArchive[]>}
   */
  getArchives: function getArchives() {
    var _this5 = this;

    var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        skip = _ref11.skip,
        limit = _ref11.limit;

    var authOptions = arguments.length > 1 ? arguments[1] : undefined;
    return request({
      method: 'GET',
      path: "/leaderboard/leaderboards/".concat(this.statisticName, "/archives"),
      query: {
        skip: skip,
        limit: limit
      },
      authOptions: authOptions
    }).then(function (_ref12) {
      var results = _ref12.results;
      return (0, _map.default)(results).call(results, function (_ref13) {
        var version = _ref13.version,
            status = _ref13.status,
            url = _ref13.url,
            activatedAt = _ref13.activatedAt,
            deactivatedAt = _ref13.deactivatedAt;
        return {
          statisticName: _this5.statisticName,
          version: version,
          status: status,
          url: url,
          activatedAt: parseDate(activatedAt.iso),
          deactivatedAt: parseDate(deactivatedAt.iso)
        };
      });
    });
  }
});

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var adapters = __webpack_require__(545);

module.exports = function (AV) {
  AV.setAdapters(adapters);
  return AV;
};

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(140);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.platformInfo = exports.WebSocket = void 0;

_Object$defineProperty(exports, "request", {
  enumerable: true,
  get: function get() {
    return _adaptersSuperagent.request;
  }
});

exports.storage = void 0;

_Object$defineProperty(exports, "upload", {
  enumerable: true,
  get: function get() {
    return _adaptersSuperagent.upload;
  }
});

var _adaptersSuperagent = __webpack_require__(546);

var storage = window.localStorage;
exports.storage = storage;
var WebSocket = window.WebSocket;
exports.WebSocket = WebSocket;
var platformInfo = {
  name: "Browser"
};
exports.platformInfo = platformInfo;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.request = void 0;
var adapter_utils_1 = __webpack_require__(547);
var superagent = __webpack_require__(548);
function convertResponse(res) {
    return {
        ok: res.ok,
        status: res.status,
        headers: res.header,
        data: res.body,
    };
}
var request = function (url, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, method, data, headers, onprogress, signal, req, aborted, onAbort, res, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = options.method, method = _a === void 0 ? "GET" : _a, data = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
                    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    req = superagent(method, url).ok(function () { return true; });
                    if (headers) {
                        req.set(headers);
                    }
                    if (onprogress) {
                        req.on("progress", onprogress);
                    }
                    aborted = false;
                    onAbort = function () {
                        aborted = true;
                        req.abort();
                    };
                    signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, req.send(data)];
                case 2:
                    res = _b.sent();
                    return [2 /*return*/, convertResponse(res)];
                case 3:
                    error_1 = _b.sent();
                    if (aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    throw error_1;
                case 4:
                    signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.request = request;
var upload = function (url, file, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, method, data, headers, onprogress, signal, req, aborted, onAbort, res, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = options.method, method = _a === void 0 ? "POST" : _a, data = options.data, headers = options.headers, onprogress = options.onprogress, signal = options.signal;
                    if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    req = superagent(method, url)
                        .ok(function () { return true; })
                        .attach(file.field, file.data, file.name);
                    if (data) {
                        req.field(data);
                    }
                    if (headers) {
                        req.set(headers);
                    }
                    if (onprogress) {
                        req.on("progress", onprogress);
                    }
                    aborted = false;
                    onAbort = function () {
                        aborted = true;
                        req.abort();
                    };
                    signal === null || signal === void 0 ? void 0 : signal.addEventListener("abort", onAbort);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, req];
                case 2:
                    res = _b.sent();
                    return [2 /*return*/, convertResponse(res)];
                case 3:
                    error_2 = _b.sent();
                    if (aborted) {
                        throw new adapter_utils_1.AbortError("Request aborted");
                    }
                    throw error_2;
                case 4:
                    signal === null || signal === void 0 ? void 0 : signal.removeEventListener("abort", onAbort);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    });
};
exports.upload = upload;
//# sourceMappingURL=index.js.map

/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbortError", function() { return AbortError; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var AbortError = /** @class */ (function (_super) {
    __extends(AbortError, _super);
    function AbortError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AbortError";
        return _this;
    }
    return AbortError;
}(Error));


//# sourceMappingURL=index.es.js.map


/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _symbol = _interopRequireDefault(__webpack_require__(87));

var _iterator = _interopRequireDefault(__webpack_require__(144));

var _trim = _interopRequireDefault(__webpack_require__(549));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var _slice = _interopRequireDefault(__webpack_require__(38));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Root reference for iframes.
 */


var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = __webpack_require__(556);

var safeStringify = __webpack_require__(557);

var RequestBase = __webpack_require__(558);

var isObject = __webpack_require__(244);

var ResponseBase = __webpack_require__(579);

var Agent = __webpack_require__(587);
/**
 * Noop.
 */


function noop() {}
/**
 * Expose `request`.
 */


module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = (0, _trim.default)('') ? function (s) {
  return (0, _trim.default)(s).call(s);
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      var _context;

      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, (0, _concat.default)(_context = "".concat(key, "[")).call(_context, subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = (0, _indexOf.default)(pair).call(pair, '=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent((0, _slice.default)(pair).call(pair, 0, pos))] = decodeURIComponent((0, _slice.default)(pair).call(pair, pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = (0, _indexOf.default)(line).call(line, ':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = (0, _slice.default)(line).call(line, 0, index).toLowerCase();
    val = trim((0, _slice.default)(line).call(line, index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var _context2, _context3;

  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = (0, _concat.default)(_context2 = (0, _concat.default)(_context3 = "cannot ".concat(method, " ")).call(_context3, url, " (")).call(_context2, this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request.delete = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(550);

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(551);

module.exports = parent;


/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(552);

var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.trim;
  return typeof it == 'string' || it === StringPrototype
    || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.trim) ? method : own;
};


/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(553);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('String').trim;


/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $trim = __webpack_require__(554).trim;
var forcedStringTrimMethod = __webpack_require__(555);

// `String.prototype.trim` method
// https://tc39.es/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

var uncurryThis = __webpack_require__(4);
var requireObjectCoercible = __webpack_require__(74);
var toString = __webpack_require__(40);
var whitespaces = __webpack_require__(243);

var replace = uncurryThis(''.replace);
var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = toString(requireObjectCoercible($this));
    if (TYPE & 1) string = replace(string, ltrim, '');
    if (TYPE & 2) string = replace(string, rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

var PROPER_FUNCTION_NAME = __webpack_require__(158).PROPER;
var fails = __webpack_require__(3);
var whitespaces = __webpack_require__(243);

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]()
      || non[METHOD_NAME]() !== non
      || (PROPER_FUNCTION_NAME && whitespaces[METHOD_NAME].name !== METHOD_NAME);
  });
};


/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Expose `Emitter`.
 */

if (true) {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};


/***/ }),
/* 557 */
/***/ (function(module, exports) {

module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}


/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _symbol = _interopRequireDefault(__webpack_require__(87));

var _iterator = _interopRequireDefault(__webpack_require__(144));

var _includes = _interopRequireDefault(__webpack_require__(559));

var _promise = _interopRequireDefault(__webpack_require__(10));

var _concat = _interopRequireDefault(__webpack_require__(25));

var _indexOf = _interopRequireDefault(__webpack_require__(68));

var _slice = _interopRequireDefault(__webpack_require__(38));

var _sort = _interopRequireDefault(__webpack_require__(569));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _symbol.default === "function" && typeof _iterator.default === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _symbol.default === "function" && obj.constructor === _symbol.default && obj !== _symbol.default.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
/**
 * Module of mixed-in functions shared between node and client code
 */


var isObject = __webpack_require__(244);
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && (0, _includes.default)(ERROR_CODES).call(ERROR_CODES, err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new _promise.default(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      if (Object.prototype.hasOwnProperty.call(val, i)) this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (val === null || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof val === 'boolean') {
    val = String(val);
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  var _context;

  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder((0, _concat.default)(_context = "".concat(user, ":")).call(_context, pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if (type === 'application/x-www-form-urlencoded') {
      var _context2;

      this._data = this._data ? (0, _concat.default)(_context2 = "".concat(this._data, "&")).call(_context2, data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    var _context3;

    this.url += ((0, _includes.default)(_context3 = this.url).call(_context3, '?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var _context4;

    var index = (0, _indexOf.default)(_context4 = this.url).call(_context4, '?');

    if (index >= 0) {
      var _context5, _context6;

      var queryArr = (0, _slice.default)(_context5 = this.url).call(_context5, index + 1).split('&');

      if (typeof this._sort === 'function') {
        (0, _sort.default)(queryArr).call(queryArr, this._sort);
      } else {
        (0, _sort.default)(queryArr).call(queryArr);
      }

      this.url = (0, _slice.default)(_context6 = this.url).call(_context6, 0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(560);

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(561);

module.exports = parent;


/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var arrayMethod = __webpack_require__(562);
var stringMethod = __webpack_require__(564);

var ArrayPrototype = Array.prototype;
var StringPrototype = String.prototype;

module.exports = function (it) {
  var own = it.includes;
  if (it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.includes)) return arrayMethod;
  if (typeof it == 'string' || it === StringPrototype || (isPrototypeOf(StringPrototype, it) && own === StringPrototype.includes)) {
    return stringMethod;
  } return own;
};


/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(563);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').includes;


/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $includes = __webpack_require__(115).includes;
var fails = __webpack_require__(3);
var addToUnscopables = __webpack_require__(122);

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(565);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('String').includes;


/***/ }),
/* 565 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(4);
var notARegExp = __webpack_require__(566);
var requireObjectCoercible = __webpack_require__(74);
var toString = __webpack_require__(40);
var correctIsRegExpLogic = __webpack_require__(568);

var stringIndexOf = uncurryThis(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf(
      toString(requireObjectCoercible(this)),
      toString(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(567);

var $TypeError = TypeError;

module.exports = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(17);
var classof = __webpack_require__(54);
var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),
/* 568 */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(5);

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),
/* 569 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(570);

/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(571);

module.exports = parent;


/***/ }),
/* 571 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(572);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.sort;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.sort) ? method : own;
};


/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(573);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').sort;


/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var uncurryThis = __webpack_require__(4);
var aCallable = __webpack_require__(28);
var toObject = __webpack_require__(33);
var lengthOfArrayLike = __webpack_require__(36);
var deletePropertyOrThrow = __webpack_require__(574);
var toString = __webpack_require__(40);
var fails = __webpack_require__(3);
var internalSort = __webpack_require__(575);
var arrayMethodIsStrict = __webpack_require__(139);
var FF = __webpack_require__(576);
var IE_OR_EDGE = __webpack_require__(577);
var V8 = __webpack_require__(56);
var WEBKIT = __webpack_require__(578);

var test = [];
var un$Sort = uncurryThis(test.sort);
var push = uncurryThis(test.push);

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test.sort(null);
});
// Old WebKit
var STRICT_METHOD = arrayMethodIsStrict('sort');

var STABLE_SORT = !fails(function () {
  // feature detection can be too slow, so check engines versions
  if (V8) return V8 < 70;
  if (FF && FF > 3) return;
  if (IE_OR_EDGE) return true;
  if (WEBKIT) return WEBKIT < 603;

  var result = '';
  var code, chr, value, index;

  // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
  for (code = 65; code < 76; code++) {
    chr = String.fromCharCode(code);

    switch (code) {
      case 66: case 69: case 70: case 72: value = 3; break;
      case 68: case 71: value = 4; break;
      default: value = 2;
    }

    for (index = 0; index < 47; index++) {
      test.push({ k: chr + index, v: value });
    }
  }

  test.sort(function (a, b) { return b.v - a.v; });

  for (index = 0; index < test.length; index++) {
    chr = test[index].k.charAt(0);
    if (result.charAt(result.length - 1) !== chr) result += chr;
  }

  return result !== 'DGBEFHACIJK';
});

var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;

var getSortCompare = function (comparefn) {
  return function (x, y) {
    if (y === undefined) return -1;
    if (x === undefined) return 1;
    if (comparefn !== undefined) return +comparefn(x, y) || 0;
    return toString(x) > toString(y) ? 1 : -1;
  };
};

// `Array.prototype.sort` method
// https://tc39.es/ecma262/#sec-array.prototype.sort
$({ target: 'Array', proto: true, forced: FORCED }, {
  sort: function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);

    var array = toObject(this);

    if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);

    var items = [];
    var arrayLength = lengthOfArrayLike(array);
    var itemsLength, index;

    for (index = 0; index < arrayLength; index++) {
      if (index in array) push(items, array[index]);
    }

    internalSort(items, getSortCompare(comparefn));

    itemsLength = items.length;
    index = 0;

    while (index < itemsLength) array[index] = items[index++];
    while (index < arrayLength) deletePropertyOrThrow(array, index++);

    return array;
  }
});


/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var tryToString = __webpack_require__(57);

var $TypeError = TypeError;

module.exports = function (O, P) {
  if (!delete O[P]) throw $TypeError('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
};


/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

var arraySlice = __webpack_require__(231);

var floor = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

module.exports = mergeSort;


/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(45);

var firefox = userAgent.match(/firefox\/(\d+)/i);

module.exports = !!firefox && +firefox[1];


/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

var UA = __webpack_require__(45);

module.exports = /MSIE|Trident/.test(UA);


/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(45);

var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);

module.exports = !!webkit && +webkit[1];


/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Module dependencies.
 */

var utils = __webpack_require__(580);
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

var _interopRequireDefault = __webpack_require__(1);

var _reduce = _interopRequireDefault(__webpack_require__(581));

var _slice = _interopRequireDefault(__webpack_require__(38));

exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  var _context;

  return (0, _reduce.default)(_context = str.split(/ *; */)).call(_context, function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  var _context2;

  return (0, _reduce.default)(_context2 = str.split(/ *, */)).call(_context2, function (obj, str) {
    var _context3, _context4;

    var parts = str.split(/ *; */);
    var url = (0, _slice.default)(_context3 = parts[0]).call(_context3, 1, -1);
    var rel = (0, _slice.default)(_context4 = parts[1].split(/ *= */)[1]).call(_context4, 1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(582);

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(583);

module.exports = parent;


/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototypeOf = __webpack_require__(12);
var method = __webpack_require__(584);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.reduce;
  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce) ? method : own;
};


/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(585);
var entryVirtual = __webpack_require__(26);

module.exports = entryVirtual('Array').reduce;


/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(0);
var $reduce = __webpack_require__(586).left;
var arrayMethodIsStrict = __webpack_require__(139);
var CHROME_VERSION = __webpack_require__(56);
var IS_NODE = __webpack_require__(97);

var STRICT_METHOD = arrayMethodIsStrict('reduce');
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    var length = arguments.length;
    return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

var aCallable = __webpack_require__(28);
var toObject = __webpack_require__(33);
var IndexedObject = __webpack_require__(109);
var lengthOfArrayLike = __webpack_require__(36);

var $TypeError = TypeError;

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aCallable(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = lengthOfArrayLike(O);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw $TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),
/* 587 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(1);

var _slice = _interopRequireDefault(__webpack_require__(38));

var _from = _interopRequireDefault(__webpack_require__(236));

var _symbol = _interopRequireDefault(__webpack_require__(87));

var _isIterable2 = _interopRequireDefault(__webpack_require__(588));

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  var _context;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = (0, _slice.default)(_context = Object.prototype.toString.call(o)).call(_context, 8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return (0, _from.default)(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof _symbol.default !== "undefined" && (0, _isIterable2.default)(Object(iter))) return (0, _from.default)(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

/***/ }),
/* 588 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(589);

/***/ }),
/* 589 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(590);


/***/ }),
/* 590 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(591);

module.exports = parent;


/***/ }),
/* 591 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(592);

module.exports = parent;


/***/ }),
/* 592 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(593);
__webpack_require__(63);

module.exports = parent;


/***/ }),
/* 593 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
__webpack_require__(79);
var isIterable = __webpack_require__(594);

module.exports = isIterable;


/***/ }),
/* 594 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(47);
var hasOwn = __webpack_require__(13);
var wellKnownSymbol = __webpack_require__(5);
var Iterators = __webpack_require__(46);

var ITERATOR = wellKnownSymbol('iterator');
var $Object = Object;

module.exports = function (it) {
  var O = $Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || hasOwn(Iterators, classof(O));
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=av.js.map