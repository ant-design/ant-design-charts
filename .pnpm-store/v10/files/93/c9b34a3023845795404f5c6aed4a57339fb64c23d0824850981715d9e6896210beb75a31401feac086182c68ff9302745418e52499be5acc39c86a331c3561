import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"];
import { createEmotion } from "../../core/createEmotion";
import { StyleProvider as AntdStyleProvider } from '@ant-design/cssinjs';
import { memo, useContext, useEffect, useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export var createStyleProvider = function createStyleProvider(EmotionContext) {
  return /*#__PURE__*/memo(function (_ref) {
    var children = _ref.children,
      outerPrefix = _ref.prefix,
      outSpeedy = _ref.speedy,
      getStyleManager = _ref.getStyleManager,
      outerContainer = _ref.container,
      nonce = _ref.nonce,
      insertionPoint = _ref.insertionPoint,
      stylisPlugins = _ref.stylisPlugins,
      linters = _ref.linters,
      antdStyleProviderProps = _objectWithoutProperties(_ref, _excluded);
    var defaultEmotion = useContext(EmotionContext);
    var prefix = outerPrefix !== null && outerPrefix !== void 0 ? outerPrefix : defaultEmotion.sheet.key;
    var container = outerContainer !== null && outerContainer !== void 0 ? outerContainer : defaultEmotion.sheet.container;
    var speedy = outSpeedy !== null && outSpeedy !== void 0 ? outSpeedy : defaultEmotion.sheet.isSpeedy;
    var emotion = useMemo(function () {
      var defaultSpeedy = process.env.NODE_ENV === 'development';
      var instance = createEmotion({
        speedy: speedy !== null && speedy !== void 0 ? speedy : defaultSpeedy,
        key: prefix,
        container: container,
        nonce: nonce,
        insertionPoint: insertionPoint,
        stylisPlugins: stylisPlugins
      });
      if (typeof global !== 'undefined') {
        var cacheManager = global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;
        if (cacheManager) {
          // add 方法有幂等
          instance.cache = cacheManager.add(instance.cache);
        }
      }
      return instance;
    }, [prefix, speedy, container, nonce, insertionPoint, stylisPlugins]);
    useEffect(function () {
      getStyleManager === null || getStyleManager === void 0 || getStyleManager(emotion);
    }, [emotion]);
    var content = /*#__PURE__*/_jsx(EmotionContext.Provider, {
      value: emotion,
      children: children
    });
    if (Boolean(Object.keys(antdStyleProviderProps).length) || container) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        _jsx(AntdStyleProvider, _objectSpread(_objectSpread({
          linters: linters,
          container: container
        }, antdStyleProviderProps), {}, {
          children: content
        }))
      );
    }
    return content;
  });
};