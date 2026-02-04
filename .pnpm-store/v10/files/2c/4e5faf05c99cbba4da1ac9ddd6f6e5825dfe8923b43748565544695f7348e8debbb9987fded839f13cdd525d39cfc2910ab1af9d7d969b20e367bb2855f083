import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { match } from 'path-to-regexp';
export var matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
  // Internal logic use breadcrumbMap to ensure the order
  // 内部逻辑使用 breadcrumbMap 来确保查询顺序
  if (breadcrumbMap) {
    var pathKey = _toConsumableArray(breadcrumbMap.keys()).find(function (key) {
      try {
        if (key.startsWith('http')) {
          return false;
        }
        return match(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (pathKey) {
      return breadcrumbMap.get(pathKey);
    }
  }

  // External uses use breadcrumb
  // 外部用户使用 breadcrumb 参数
  if (breadcrumb) {
    var _pathKey = Object.keys(breadcrumb).find(function (key) {
      try {
        if (key !== null && key !== void 0 && key.startsWith('http')) {
          return false;
        }
        return match(key)(pathname);
      } catch (error) {
        console.log('key', key, error);
        return false;
      }
    });
    if (_pathKey) {
      return breadcrumb[_pathKey];
    }
  }
  return {
    path: ''
  };
};
/**
 * 获取关于 pageTitle 的所有信息方便包装
 *
 * @param props
 * @param ignoreTitle
 */
export var getPageTitleInfo = function getPageTitleInfo(props, ignoreTitle) {
  var _props$pathname = props.pathname,
    pathname = _props$pathname === void 0 ? '/' : _props$pathname,
    breadcrumb = props.breadcrumb,
    breadcrumbMap = props.breadcrumbMap,
    formatMessage = props.formatMessage,
    title = props.title,
    _props$menu = props.menu,
    menu = _props$menu === void 0 ? {
      locale: false
    } : _props$menu;
  var pageTitle = ignoreTitle ? '' : title || '';
  var currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
  if (!currRouterData) {
    return {
      title: pageTitle,
      id: '',
      pageName: pageTitle
    };
  }
  var pageName = currRouterData.name;
  if (menu.locale !== false && currRouterData.locale && formatMessage) {
    pageName = formatMessage({
      id: currRouterData.locale || '',
      defaultMessage: currRouterData.name
    });
  }
  if (!pageName) {
    return {
      title: pageTitle,
      id: currRouterData.locale || '',
      pageName: pageTitle
    };
  }
  if (ignoreTitle || !title) {
    return {
      title: pageName,
      id: currRouterData.locale || '',
      pageName: pageName
    };
  }
  return {
    title: "".concat(pageName, " - ").concat(title),
    id: currRouterData.locale || '',
    pageName: pageName
  };
};
export var getPageTitle = function getPageTitle(props, ignoreTitle) {
  return getPageTitleInfo(props, ignoreTitle).title;
};