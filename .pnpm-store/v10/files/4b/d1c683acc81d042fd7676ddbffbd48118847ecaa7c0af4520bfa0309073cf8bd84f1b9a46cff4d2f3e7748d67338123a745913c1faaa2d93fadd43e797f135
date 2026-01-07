import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { compareVersions } from "./index";
import { getVersion } from "./openVisibleCompatible";
export function coverToNewToken(token) {
  if (compareVersions(getVersion(), '5.6.0') < 0) return token;
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
  var newToken = _objectSpread({}, token);
  Object.keys(deprecatedTokens).forEach(function (key) {
    if (newToken[key] !== undefined) {
      // @ts-ignore
      newToken[deprecatedTokens[key]] = newToken[key];
      delete newToken[key];
    }
  });
  return newToken;
}