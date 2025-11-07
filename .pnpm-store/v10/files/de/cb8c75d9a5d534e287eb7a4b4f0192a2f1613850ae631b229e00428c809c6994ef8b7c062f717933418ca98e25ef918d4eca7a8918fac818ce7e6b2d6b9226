//@ts-ignore
import { pathToRegexp } from '../path-to-regexp';
import getFlatMenu from '../getFlatMenus/getFlatMenus';
import { isUrl, stripQueryStringAndHashFromPath } from '../transformRoute/transformRoute';
export var getMenuMatches = function getMenuMatches() {
  var flatMenuKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var path = arguments.length > 1 ? arguments[1] : undefined;
  var exact = arguments.length > 2 ? arguments[2] : undefined;
  return flatMenuKeys.filter(function (item) {
    if (item === '/' && path === '/') {
      return true;
    }
    if (item !== '/' && item !== '/*' && item && !isUrl(item)) {
      var pathKey = stripQueryStringAndHashFromPath(item);
      try {
        // exact
        if (exact) {
          if (pathToRegexp("".concat(pathKey)).test(path)) {
            return true;
          }
        }
        // /a
        if (pathToRegexp("".concat(pathKey), []).test(path)) {
          return true;
        }
        // /a/b/b
        if (pathToRegexp("".concat(pathKey, "/(.*)")).test(path)) {
          return true;
        }
      } catch (error) {
        // console.log(error, path);
      }
    }
    return false;
  }).sort(function (a, b) {
    // 如果完全匹配放到最后面
    if (a === path) {
      return 10;
    }
    if (b === path) {
      return -10;
    }
    return a.substr(1).split('/').length - b.substr(1).split('/').length;
  });
};
/**
 * 获取当前的选中菜单列表
 * @param pathname
 * @param menuData
 * @returns MenuDataItem[]
 */
export var getMatchMenu = function getMatchMenu(pathname, menuData,
/**
 * 要不要展示全部的 key
 */
fullKeys, exact) {
  var flatMenus = getFlatMenu(menuData);
  var flatMenuKeys = Object.keys(flatMenus);
  var menuPathKeys = getMenuMatches(flatMenuKeys, pathname || '/', exact);
  if (!menuPathKeys || menuPathKeys.length < 1) {
    return [];
  }
  if (!fullKeys) {
    menuPathKeys = [menuPathKeys[menuPathKeys.length - 1]];
  }
  return menuPathKeys.map(function (menuPathKey) {
    var menuItem = flatMenus[menuPathKey] || {
      pro_layout_parentKeys: '',
      key: ''
    };
    // 去重
    var map = new Map();
    var parentItems = (menuItem.pro_layout_parentKeys || []).map(function (key) {
      if (map.has(key)) {
        return null;
      }
      map.set(key, true);
      return flatMenus[key];
    }).filter(function (item) {
      return item;
    });
    if (menuItem.key) {
      parentItems.push(menuItem);
    }
    return parentItems;
  }).flat(1);
};
export default getMatchMenu;