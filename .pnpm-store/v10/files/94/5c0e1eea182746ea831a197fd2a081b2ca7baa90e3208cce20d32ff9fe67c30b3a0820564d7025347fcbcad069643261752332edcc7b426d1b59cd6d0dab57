"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStylesFactory = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _core = require("../../core");
var _utils = require("../../utils");
var _response = require("./response");
var _excluded = ["stylish", "appearance", "isDarkMode", "prefixCls", "iconPrefixCls"],
  _excluded2 = ["prefixCls", "iconPrefixCls"];
/**
 * 创建样式基础写法
 */
var createStylesFactory = exports.createStylesFactory = function createStylesFactory(_ref) {
  var hashPriority = _ref.hashPriority,
    useTheme = _ref.useTheme,
    EmotionContext = _ref.EmotionContext;
  return function (styleOrGetStyle, options) {
    // 从该字段可以获得当前文件的文件名
    var styleFileName = options === null || options === void 0 ? void 0 : options.__BABEL_FILE_NAME__;
    // 判断是否使用 babel 插件，如果有在用 babel 插件，则有一个特殊的内部字段
    var usingBabel = !!styleFileName;

    // 返回 useStyles 方法，作为 hooks 使用
    return function (props) {
      var theme = useTheme();
      var _useContext = (0, _react.useContext)(EmotionContext),
        cache = _useContext.cache;
      // 由于 toClassName 方法依赖了用户给 createStyle 传递的 hashPriority，所以需要在这里重新生成 cx 和 toClassName 方法
      var _createCSS = (0, _core.createCSS)(cache, {
          hashPriority: (options === null || options === void 0 ? void 0 : options.hashPriority) || hashPriority,
          label: options === null || options === void 0 ? void 0 : options.label
        }),
        cx = _createCSS.cx,
        toClassName = _createCSS.css;
      var responsiveMap = (0, _response.useMediaQueryMap)();
      var styles = (0, _react.useMemo)(function () {
        var tempStyles;

        // 函数场景
        if (styleOrGetStyle instanceof Function) {
          var stylish = theme.stylish,
            appearance = theme.appearance,
            isDarkMode = theme.isDarkMode,
            prefixCls = theme.prefixCls,
            iconPrefixCls = theme.iconPrefixCls,
            token = (0, _objectWithoutProperties2.default)(theme, _excluded);

          // 创建响应式断点选择器的工具函数
          // @ts-ignore
          var responsive = function responsive(styles) {
            return (0, _response.convertResponsiveStyleToString)(styles, responsiveMap);
          };
          // 并赋予其相应的断点工具
          Object.assign(responsive, responsiveMap);
          tempStyles = styleOrGetStyle({
            token: token,
            stylish: stylish,
            appearance: appearance,
            isDarkMode: isDarkMode,
            prefixCls: prefixCls,
            iconPrefixCls: iconPrefixCls,
            // 工具函数们
            cx: cx,
            css: _core.serializeCSS,
            responsive: responsive
          }, props);
        }
        // 没有函数时直接就是 object 或者 string
        else {
          tempStyles = styleOrGetStyle;
        }
        if ((0, _typeof2.default)(tempStyles) === 'object') {
          // 判断是否是用 reactCSS 生成的
          if ((0, _utils.isReactCssResult)(tempStyles)) {
            // 如果是用 reactCss 生成的话，需要用 className 的 css 做一层转换
            tempStyles = toClassName(tempStyles);
          } else {
            // 不是的话就是直接是 复合的 css object
            tempStyles = Object.fromEntries(Object.entries(tempStyles).map(function (_ref2) {
              var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                key = _ref3[0],
                value = _ref3[1];
              // 这里做两道转换：
              // 1. 如果是用 babel 插件，则将样式的 label 设置为当前文件名 + key
              // 2. 如果是 SerializedStyles ，将其用 cx 包一下转换成 className

              var label = usingBabel ? "".concat(styleFileName, "-").concat(key) : undefined;

              // 这里有可能是 { a : css` color:red ` } 也可能是 { b: { color:"blue" } } 这样的写法
              if ((0, _typeof2.default)(value) === 'object') {
                if (usingBabel) {
                  return [key, toClassName(value, "label:".concat(label))];
                }
                return [key, toClassName(value)];
              }

              // 这里只可能是 { c: cx(css`color:red`) } , 或者 d: 'abcd'  这样的写法
              return [key, value];
            }));
          }
        }
        return tempStyles;
      }, [props, theme]);
      return (0, _react.useMemo)(function () {
        var prefixCls = theme.prefixCls,
          iconPrefixCls = theme.iconPrefixCls,
          res = (0, _objectWithoutProperties2.default)(theme, _excluded2);
        return {
          styles: styles,
          cx: cx,
          theme: res,
          prefixCls: prefixCls,
          iconPrefixCls: iconPrefixCls
        };
      }, [styles, theme]);
    };
  };
};