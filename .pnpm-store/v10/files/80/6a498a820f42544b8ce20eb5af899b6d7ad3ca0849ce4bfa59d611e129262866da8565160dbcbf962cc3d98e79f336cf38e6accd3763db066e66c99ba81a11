import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Menu } from 'antd';
import { omitUndefined } from "../omitUndefined";
import { compareVersions } from "./index";
import { getVersion } from "./openVisibleCompatible";
import { jsx as _jsx } from "react/jsx-runtime";
var menuOverlayCompatible = function menuOverlayCompatible(menu) {
  var props = compareVersions(getVersion(), '4.24.0') > -1 ? {
    menu: menu
  } : {
    overlay: /*#__PURE__*/_jsx(Menu, _objectSpread({}, menu))
  };
  return omitUndefined(props);
};
export { menuOverlayCompatible };