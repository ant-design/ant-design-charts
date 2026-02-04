"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeCSS = exports.isReactCssResult = exports.classnames = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _utils = require("@emotion/utils");
/* c8 ignore start */
/**
 * 判断是否是 ReactCss 的编译产物
 * @param params
 */
var isReactCssResult = exports.isReactCssResult = function isReactCssResult(params) {
  return (0, _typeof2.default)(params) === 'object' && 'styles' in params && 'name' in params && 'toString' in params;
};

// copied from https://github.com/emotion-js/emotion/blob/main/packages/css/src/create-instance.js#L125
var classnames = exports.classnames = function classnames(args) {
  var cls = '';
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg === null) continue;
    var toAdd = void 0;
    switch ((0, _typeof2.default)(arg)) {
      case 'boolean':
        break;
      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';
            for (var k in arg) {
              if (arg[k] && k) {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }
          break;
        }
      default:
        {
          toAdd = arg;
        }
    }
    if (toAdd) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};

// copied from https://github.com/emotion-js/emotion/blob/main/packages/css/src/create-instance.js#LL17C62-L17C62
var mergeCSS = exports.mergeCSS = function mergeCSS(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0, _utils.getRegisteredStyles)(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
};
/* c8 ignore end */