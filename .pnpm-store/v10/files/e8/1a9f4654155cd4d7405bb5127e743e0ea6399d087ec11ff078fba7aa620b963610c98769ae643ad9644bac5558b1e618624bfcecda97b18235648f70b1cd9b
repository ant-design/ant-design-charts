import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import { transformRoute } from '@umijs/route-utils';
function fromEntries(iterable) {
  return _toConsumableArray(iterable).reduce(function (obj, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];
    // eslint-disable-next-line no-param-reassign
    obj[key] = val;
    return obj;
  }, {});
}
var getMenuData = function getMenuData(routes, menu, formatMessage, menuDataRender) {
  var _transformRoute = transformRoute(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true),
    menuData = _transformRoute.menuData,
    breadcrumb = _transformRoute.breadcrumb;
  if (!menuDataRender) {
    return {
      breadcrumb: fromEntries(breadcrumb),
      breadcrumbMap: breadcrumb,
      menuData: menuData
    };
  }
  return getMenuData(menuDataRender(menuData), menu, formatMessage, undefined);
};
export { getMenuData };