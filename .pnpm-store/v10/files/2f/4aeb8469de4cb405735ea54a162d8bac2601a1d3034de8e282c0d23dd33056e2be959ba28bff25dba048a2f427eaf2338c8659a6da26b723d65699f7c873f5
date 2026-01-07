"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayoutDesignToken = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _useStyle = require("../useStyle");
var getLayoutDesignToken = exports.getLayoutDesignToken = function getLayoutDesignToken(designTokens, antdToken) {
  var _finalDesignTokens$si, _finalDesignTokens$he, _finalDesignTokens$he2, _finalDesignTokens$pa, _finalDesignTokens$pa2;
  var finalDesignTokens = (0, _objectSpread2.default)({}, designTokens);
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({
    bgLayout: "linear-gradient(".concat(antdToken.colorBgContainer, ", ").concat(antdToken.colorBgLayout, " 28%)"),
    colorTextAppListIcon: antdToken.colorTextSecondary,
    appListIconHoverBgColor: finalDesignTokens === null || finalDesignTokens === void 0 || (_finalDesignTokens$si = finalDesignTokens.sider) === null || _finalDesignTokens$si === void 0 ? void 0 : _finalDesignTokens$si.colorBgMenuItemSelected,
    colorBgAppListIconHover: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.04),
    colorTextAppListIconHover: antdToken.colorTextBase
  }, finalDesignTokens), {}, {
    header: (0, _objectSpread2.default)({
      colorBgHeader: (0, _useStyle.setAlpha)(antdToken.colorBgElevated, 0.6),
      colorBgScrollHeader: (0, _useStyle.setAlpha)(antdToken.colorBgElevated, 0.8),
      colorHeaderTitle: antdToken.colorText,
      colorBgMenuItemHover: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: 'transparent',
      colorBgMenuElevated: (finalDesignTokens === null || finalDesignTokens === void 0 || (_finalDesignTokens$he = finalDesignTokens.header) === null || _finalDesignTokens$he === void 0 ? void 0 : _finalDesignTokens$he.colorBgHeader) !== 'rgba(255, 255, 255, 0.6)' ? (_finalDesignTokens$he2 = finalDesignTokens.header) === null || _finalDesignTokens$he2 === void 0 ? void 0 : _finalDesignTokens$he2.colorBgHeader : antdToken.colorBgElevated,
      colorTextMenuSelected: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.95),
      colorBgRightActionsItemHover: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.03),
      colorTextRightActionsItem: antdToken.colorTextTertiary,
      heightLayoutHeader: 56,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextMenuActive: antdToken.colorText
    }, finalDesignTokens.header),
    sider: (0, _objectSpread2.default)({
      paddingInlineLayoutMenu: 8,
      paddingBlockLayoutMenu: 0,
      colorBgCollapsedButton: antdToken.colorBgElevated,
      colorTextCollapsedButtonHover: antdToken.colorTextSecondary,
      colorTextCollapsedButton: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.25),
      colorMenuBackground: 'transparent',
      colorMenuItemDivider: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.06),
      colorBgMenuItemHover: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.03),
      colorBgMenuItemSelected: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.04),
      colorTextMenuItemHover: antdToken.colorText,
      colorTextMenuSelected: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.95),
      colorTextMenuActive: antdToken.colorText,
      colorTextMenu: antdToken.colorTextSecondary,
      colorTextMenuSecondary: antdToken.colorTextTertiary,
      colorTextMenuTitle: antdToken.colorText,
      colorTextSubMenuSelected: (0, _useStyle.setAlpha)(antdToken.colorTextBase, 0.95)
    }, finalDesignTokens.sider),
    pageContainer: (0, _objectSpread2.default)({
      colorBgPageContainer: 'transparent',
      paddingInlinePageContainerContent: ((_finalDesignTokens$pa = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa === void 0 ? void 0 : _finalDesignTokens$pa.marginInlinePageContainerContent) || 40,
      paddingBlockPageContainerContent: ((_finalDesignTokens$pa2 = finalDesignTokens.pageContainer) === null || _finalDesignTokens$pa2 === void 0 ? void 0 : _finalDesignTokens$pa2.marginBlockPageContainerContent) || 32,
      colorBgPageContainerFixed: antdToken.colorBgElevated
    }, finalDesignTokens.pageContainer)
  });
};