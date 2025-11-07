import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["dataSource", "valueTypeMap", "onLoadContext"];
import React from 'react';
import { ProHelpProvide } from "./HelpProvide";
import { ProHelpSelect } from "./Search";
import { jsx as _jsx } from "react/jsx-runtime";
export * from "./ProHelpContentPanel";
export * from "./ProHelpDrawer";
export * from "./ProHelpModal";
export * from "./ProHelpPanel";
export * from "./ProHelpPopover";
export * from "./RenderContentPanel";
export { ProHelpProvide, ProHelpSelect };
export var ProHelp = function ProHelp(_ref) {
  var dataSource = _ref.dataSource,
    _ref$valueTypeMap = _ref.valueTypeMap,
    valueTypeMap = _ref$valueTypeMap === void 0 ? new Map() : _ref$valueTypeMap,
    onLoadContext = _ref.onLoadContext,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_jsx(ProHelpProvide.Provider, {
    value: {
      onLoadContext: onLoadContext,
      dataSource: dataSource,
      valueTypeMap: valueTypeMap
    },
    children: props.children
  });
};