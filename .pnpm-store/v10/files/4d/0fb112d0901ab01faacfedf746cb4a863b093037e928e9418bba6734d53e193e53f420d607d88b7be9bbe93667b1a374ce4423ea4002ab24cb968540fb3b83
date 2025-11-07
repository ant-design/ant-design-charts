"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DescriptionsSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.DescriptionsSkeleton;
  }
});
Object.defineProperty(exports, "ListPageSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});
Object.defineProperty(exports, "ListSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.ListSkeleton;
  }
});
Object.defineProperty(exports, "ListSkeletonItem", {
  enumerable: true,
  get: function get() {
    return _List.ListSkeletonItem;
  }
});
Object.defineProperty(exports, "ListToolbarSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.ListToolbarSkeleton;
  }
});
Object.defineProperty(exports, "PageHeaderSkeleton", {
  enumerable: true,
  get: function get() {
    return _List.PageHeaderSkeleton;
  }
});
exports.ProSkeleton = void 0;
Object.defineProperty(exports, "TableItemSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.TableItemSkeleton;
  }
});
Object.defineProperty(exports, "TableSkeleton", {
  enumerable: true,
  get: function get() {
    return _Descriptions.TableSkeleton;
  }
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
require("antd/lib/skeleton/style");
var _react = _interopRequireDefault(require("react"));
var _Descriptions = _interopRequireWildcard(require("./components/Descriptions"));
var _List = _interopRequireWildcard(require("./components/List"));
var _Result = _interopRequireDefault(require("./components/Result"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type"];
var ProSkeleton = exports.ProSkeleton = function ProSkeleton(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'list' : _ref$type,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  if (type === 'result') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Result.default, (0, _objectSpread2.default)({}, rest));
  }
  if (type === 'descriptions') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Descriptions.default, (0, _objectSpread2.default)({}, rest));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, (0, _objectSpread2.default)({}, rest));
};
var _default = exports.default = ProSkeleton;