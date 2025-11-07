import { createHashStyleName, insertStyles } from "./insertStyles";
import { classnames, isReactCssResult, mergeCSS } from "../utils";
import { serializeStyles } from '@emotion/serialize';
var createClassNameGenerator = function createClassNameGenerator(cache, options) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    // @ts-ignore
    var serialized = serializeStyles(args, cache.registered, undefined);
    insertStyles(cache, serialized, false, options);
    return createHashStyleName(cache.key, serialized.name);
  };
};
var createCX = function createCX(cache, classNameGenerator) {
  return function () {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }
    // 由于使用了 reactCss 作为基础样式工具，因此在使用 cx 级联 className 时需要使用特殊处理的 cx
    // 要将 reactCss 的产出转为 css 产物
    var className = classNames.map(function (c) {
      return isReactCssResult(c) ? classNameGenerator(c) : c;
    });
    return mergeCSS(cache.registered, classNameGenerator, classnames(className));
  };
};

/**
 * CSS相关方法生成器 用于序列化的样式转换生成 className
 * @param cache
 * @param options
 */
export var createCSS = function createCSS(cache, options) {
  var css = createClassNameGenerator(cache, {
    hashPriority: options.hashPriority || 'high',
    label: options.label
  });
  var cx = createCX(cache, css);
  return {
    css: css,
    cx: cx
  };
};