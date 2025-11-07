"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coverToNewToken = coverToNewToken;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _index = require("./index");
var _openVisibleCompatible = require("./openVisibleCompatible");
function coverToNewToken(token) {
  if ((0, _index.compareVersions)((0, _openVisibleCompatible.getVersion)(), '5.6.0') < 0) return token;
  var deprecatedTokens = {
    colorGroupTitle: 'groupTitleColor',
    radiusItem: 'itemBorderRadius',
    radiusSubMenuItem: 'subMenuItemBorderRadius',
    colorItemText: 'itemColor',
    colorItemTextHover: 'itemHoverColor',
    colorItemTextHoverHorizontal: 'horizontalItemHoverColor',
    colorItemTextSelected: 'itemSelectedColor',
    colorItemTextSelectedHorizontal: 'horizontalItemSelectedColor',
    colorItemTextDisabled: 'itemDisabledColor',
    colorDangerItemText: 'dangerItemColor',
    colorDangerItemTextHover: 'dangerItemHoverColor',
    colorDangerItemTextSelected: 'dangerItemSelectedColor',
    colorDangerItemBgActive: 'dangerItemActiveBg',
    colorDangerItemBgSelected: 'dangerItemSelectedBg',
    colorItemBg: 'itemBg',
    colorItemBgHover: 'itemHoverBg',
    colorSubItemBg: 'subMenuItemBg',
    colorItemBgActive: 'itemActiveBg',
    colorItemBgSelected: 'itemSelectedBg',
    colorItemBgSelectedHorizontal: 'horizontalItemSelectedBg',
    colorActiveBarWidth: 'activeBarWidth',
    colorActiveBarHeight: 'activeBarHeight',
    colorActiveBarBorderSize: 'activeBarBorderWidth'
  };
  var newToken = (0, _objectSpread2.default)({}, token);
  Object.keys(deprecatedTokens).forEach(function (key) {
    if (newToken[key] !== undefined) {
      // @ts-ignore
      newToken[deprecatedTokens[key]] = newToken[key];
      delete newToken[key];
    }
  });
  return newToken;
}