import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
export var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
  return (menuData || []).reduce(function (pre, item) {
    if (item.key) {
      pre.push(item.key);
    }
    if (item.children || item.routes) {
      var newArray = pre.concat(getOpenKeysFromMenuData(item.children || item.routes) || []);
      return newArray;
    }
    return pre;
  }, []);
};
var themeConfig = {
  techBlue: '#1677FF',
  daybreak: '#1890ff',
  dust: '#F5222D',
  volcano: '#FA541C',
  sunset: '#FAAD14',
  cyan: '#13C2C2',
  green: '#52C41A',
  geekblue: '#2F54EB',
  purple: '#722ED1'
};
/**
 * Daybreak-> #1890ff
 *
 * @param val
 */
export function genStringToTheme(val) {
  return val && themeConfig[val] ? themeConfig[val] : val || '';
}
export function clearMenuItem(menusData) {
  return menusData.map(function (item) {
    var children = item.children || [];
    var finalItem = _objectSpread({}, item);
    if (!finalItem.children && finalItem.routes) {
      finalItem.children = finalItem.routes;
    }
    if (!finalItem.name || finalItem.hideInMenu) {
      return null;
    }
    if (finalItem && finalItem !== null && finalItem !== void 0 && finalItem.children) {
      if (!finalItem.hideChildrenInMenu && children.some(function (child) {
        return child && child.name && !child.hideInMenu;
      })) {
        return _objectSpread(_objectSpread({}, item), {}, {
          children: clearMenuItem(children)
        });
      }
      // children 为空就直接删掉
      delete finalItem.children;
    }
    delete finalItem.routes;
    return finalItem;
  }).filter(function (item) {
    return item;
  });
}