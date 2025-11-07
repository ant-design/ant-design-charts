import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { compareVersions } from '@ant-design/pro-utils';
import { version } from 'antd';
import { match } from 'path-to-regexp';
import { urlToList } from "./pathTools";
import { jsx as _jsx } from "react/jsx-runtime";
export var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return version;
  return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || version;
};
// 渲染 Breadcrumb 子节点
// Render the Breadcrumb child node
var defaultItemRender = function defaultItemRender(route, _, routes) {
  var _ref = route,
    breadcrumbName = _ref.breadcrumbName,
    title = _ref.title,
    path = _ref.path;
  var last = routes.findIndex(function (i) {
    return (
      // @ts-ignore
      i.linkPath === route.path
    );
  }) === routes.length - 1;
  return last ? /*#__PURE__*/_jsx("span", {
    children: title || breadcrumbName
  }) : /*#__PURE__*/_jsx("span", {
    onClick: path ? function () {
      return location.href = path;
    } : undefined,
    children: title || breadcrumbName
  });
};
var renderItemLocal = function renderItemLocal(item, props) {
  var formatMessage = props.formatMessage,
    menu = props.menu;
  if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) {
    return formatMessage({
      id: item.locale,
      defaultMessage: item.name
    });
  }
  return item.name;
};
export var getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
  var breadcrumbItem = breadcrumbMap.get(url);
  if (!breadcrumbItem) {
    // Find the first matching path in the order defined by route config
    // 按照 route config 定义的顺序找到第一个匹配的路径
    var keys = Array.from(breadcrumbMap.keys()) || [];
    var targetPath = keys.find(function (path) {
      try {
        if (path !== null && path !== void 0 && path.startsWith('http')) return false;
        return match(path.replace('?', ''))(url);
      } catch (error) {
        console.log('path', path, error);
        return false;
      }
    }
    // remove ? ,不然会重复
    );
    if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
  }
  return breadcrumbItem || {
    path: ''
  };
};
export var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
  var location = props.location,
    breadcrumbMap = props.breadcrumbMap;
  return {
    location: location,
    breadcrumbMap: breadcrumbMap
  };
};
var conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
  // Convertor the url to an array
  var pathSnippets = urlToList(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname);
  // Loop data mosaic routing
  var extraBreadcrumbItems = pathSnippets.map(function (url) {
    var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
    var name = renderItemLocal(currentBreadcrumb, props);
    var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
    return name && !hideInBreadcrumb ? {
      linkPath: url,
      breadcrumbName: name,
      title: name,
      component: currentBreadcrumb.component
    } : {
      linkPath: '',
      breadcrumbName: '',
      title: ''
    };
  }).filter(function (item) {
    return item && item.linkPath;
  });
  return extraBreadcrumbItems;
};
/** 将参数转化为面包屑 Convert parameters into breadcrumbs */
export var genBreadcrumbProps = function genBreadcrumbProps(props) {
  var _getBreadcrumbFromPro = getBreadcrumbFromProps(props),
    location = _getBreadcrumbFromPro.location,
    breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap;

  // 根据 location 生成 面包屑
  // Generate breadcrumbs based on location
  if (location && location.pathname && breadcrumbMap) {
    return conversionFromLocation(location, breadcrumbMap, props);
  }
  return [];
};

// 声明一个导出函数，接收两个参数：BreadcrumbProps和ProLayoutProps，返回一个BreadcrumbListReturn类型的对象
export var getBreadcrumbProps = function getBreadcrumbProps(props, layoutPros // ProLayoutProps类型的layoutPros
) {
  // 解构赋值获取props中的breadcrumbRender和props中的itemRender，如果props中没有itemRender则使用默认的defaultItemRender函数
  var breadcrumbRender = props.breadcrumbRender,
    propsItemRender = props.itemRender;
  // 解构赋值获取layoutPros.breadcrumbProps.minLenght的值，如果没有设置，则默认为2
  var _ref2 = layoutPros.breadcrumbProps || {},
    _ref2$minLength = _ref2.minLength,
    minLength = _ref2$minLength === void 0 ? 2 : _ref2$minLength;
  // 生成面包屑的路由数组，该数组中包含菜单项和面包屑项
  var routesArray = genBreadcrumbProps(props);
  // 如果props中有itemRender，则使用props中的itemRender，否则使用默认函数defaultItemRender
  var itemRender = function itemRender(item) {
    var renderFunction = propsItemRender || defaultItemRender;
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    return renderFunction === null || renderFunction === void 0 ? void 0 : renderFunction.apply(void 0, [_objectSpread(_objectSpread({}, item), {}, {
      // 如果item.linkPath存在，则使用item.linkPath，否则使用item.path
      // @ts-ignore
      path: item.linkPath || item.path
    })].concat(rest));
  };
  var items = routesArray;
  // 如果面包屑渲染函数breadcrumbRender存在，则使用其渲染数组items
  if (breadcrumbRender) {
    items = breadcrumbRender(items || []) || undefined;
  }
  // 如果items（渲染后的数组）的长度小于minLength或者breadcrumbRender为false，则items为undefined
  if (items && items.length < minLength || breadcrumbRender === false) {
    items = undefined;
  }
  // 如果当前 ant design 包的版本大于等于5.3.0，则返回一个对象{items,itemRender},否则返回一个对象{routes:item,itemRender}
  return compareVersions(getVersion(), '5.3.0') > -1 ? {
    items: items,
    itemRender: itemRender
  } : {
    routes: items,
    itemRender: itemRender
  };
};