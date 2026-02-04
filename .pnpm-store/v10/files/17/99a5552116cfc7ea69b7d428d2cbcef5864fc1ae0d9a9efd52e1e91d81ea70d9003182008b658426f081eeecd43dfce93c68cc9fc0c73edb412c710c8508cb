"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStylishFactory = void 0;
// FIXME: 需要考虑如何将 createStylish 和 ThemeProvider 中的 customStylish 方法整合在一起，现在是割裂的两个方法

/**
 * 业务应用中创建复合通用样式的进阶
 */
var createStylishFactory = exports.createStylishFactory = function createStylishFactory(createStyles) {
  return function (cssStyleOrGetCssStyleFn) {
    var useStyles = createStyles(cssStyleOrGetCssStyleFn);
    return function (props) {
      var _useStyles = useStyles(props),
        styles = _useStyles.styles;
      return styles;
    };
  };
};