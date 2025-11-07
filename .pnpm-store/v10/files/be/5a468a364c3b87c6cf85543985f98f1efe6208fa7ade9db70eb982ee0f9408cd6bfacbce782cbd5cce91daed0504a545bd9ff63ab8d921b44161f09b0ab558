import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type"];
import "antd/es/skeleton/style";
import React from 'react';
import DescriptionsPageSkeleton, { DescriptionsSkeleton, TableItemSkeleton, TableSkeleton } from "./components/Descriptions";
import ListPageSkeleton, { ListSkeleton, ListSkeletonItem, ListToolbarSkeleton, PageHeaderSkeleton } from "./components/List";
import ResultPageSkeleton from "./components/Result";
import { jsx as _jsx } from "react/jsx-runtime";
var ProSkeleton = function ProSkeleton(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'list' : _ref$type,
    rest = _objectWithoutProperties(_ref, _excluded);
  if (type === 'result') {
    return /*#__PURE__*/_jsx(ResultPageSkeleton, _objectSpread({}, rest));
  }
  if (type === 'descriptions') {
    return /*#__PURE__*/_jsx(DescriptionsPageSkeleton, _objectSpread({}, rest));
  }
  return /*#__PURE__*/_jsx(ListPageSkeleton, _objectSpread({}, rest));
};
export { DescriptionsSkeleton, ListPageSkeleton, ListSkeleton, ListSkeletonItem, ListToolbarSkeleton, PageHeaderSkeleton, ProSkeleton, TableItemSkeleton, TableSkeleton };
export default ProSkeleton;