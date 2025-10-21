import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["drawerProps"];
import { Drawer } from 'antd';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import { ProHelpPanel } from "./ProHelpPanel";
import { jsx as _jsx } from "react/jsx-runtime";
/**
 * 渲染一个抽屉，其中显示了一个 ProHelpPanel。
 * @param drawerProps 要传递给 Drawer 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
export var ProHelpDrawer = function ProHelpDrawer(_ref) {
  var drawerProps = _ref.drawerProps,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useMergedState = useMergedState(false, {
      value: drawerProps.open,
      onChange: drawerProps.afterOpenChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    drawerOpen = _useMergedState2[0],
    setDrawerOpen = _useMergedState2[1];
  return /*#__PURE__*/_jsx(Drawer, _objectSpread(_objectSpread({
    width: 720,
    closeIcon: null,
    styles: {
      header: {
        display: 'none'
      },
      body: {
        padding: 0
      }
    },
    maskClosable: true
  }, drawerProps), {}, {
    open: drawerOpen,
    onClose: function onClose() {
      return setDrawerOpen(false);
    },
    afterOpenChange: function afterOpenChange(open) {
      setDrawerOpen(open);
    },
    children: /*#__PURE__*/_jsx(ProHelpPanel, _objectSpread(_objectSpread({}, props), {}, {
      onClose: function onClose() {
        return setDrawerOpen(false);
      },
      bordered: false
    }))
  }));
};