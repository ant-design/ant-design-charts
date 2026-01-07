import _typeof from "@babel/runtime/helpers/esm/typeof";
import { getRegisteredStyles } from '@emotion/utils';

/* c8 ignore start */
/**
 * 判断是否是 ReactCss 的编译产物
 * @param params
 */
export var isReactCssResult = function isReactCssResult(params) {
  return _typeof(params) === 'object' && 'styles' in params && 'name' in params && 'toString' in params;
};

// copied from https://github.com/emotion-js/emotion/blob/main/packages/css/src/create-instance.js#L125
export var classnames = function classnames(args) {
  var cls = '';
  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg === null) continue;
    var toAdd = void 0;
    switch (_typeof(arg)) {
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
export var mergeCSS = function mergeCSS(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
};
/* c8 ignore end */