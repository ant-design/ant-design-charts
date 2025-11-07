"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStyleProvider = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _createEmotion = require("../../core/createEmotion");
var _cssinjs = require("@ant-design/cssinjs");
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"];
var createStyleProvider = exports.createStyleProvider = function createStyleProvider(EmotionContext) {
  return /*#__PURE__*/(0, _react.memo)(function (_ref) {
    var children = _ref.children,
      outerPrefix = _ref.prefix,
      outSpeedy = _ref.speedy,
      getStyleManager = _ref.getStyleManager,
      outerContainer = _ref.container,
      nonce = _ref.nonce,
      insertionPoint = _ref.insertionPoint,
      stylisPlugins = _ref.stylisPlugins,
      linters = _ref.linters,
      antdStyleProviderProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
    var defaultEmotion = (0, _react.useContext)(EmotionContext);
    var prefix = outerPrefix !== null && outerPrefix !== void 0 ? outerPrefix : defaultEmotion.sheet.key;
    var container = outerContainer !== null && outerContainer !== void 0 ? outerContainer : defaultEmotion.sheet.container;
    var speedy = outSpeedy !== null && outSpeedy !== void 0 ? outSpeedy : defaultEmotion.sheet.isSpeedy;
    var emotion = (0, _react.useMemo)(function () {
      var defaultSpeedy = process.env.NODE_ENV === 'development';
      var instance = (0, _createEmotion.createEmotion)({
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
    (0, _react.useEffect)(function () {
      getStyleManager === null || getStyleManager === void 0 || getStyleManager(emotion);
    }, [emotion]);
    var content = /*#__PURE__*/(0, _jsxRuntime.jsx)(EmotionContext.Provider, {
      value: emotion,
      children: children
    });
    if (Boolean(Object.keys(antdStyleProviderProps).length) || container) {
      return (
        /*#__PURE__*/
        // @ts-ignore
        (0, _jsxRuntime.jsx)(_cssinjs.StyleProvider, (0, _objectSpread2.default)((0, _objectSpread2.default)({
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