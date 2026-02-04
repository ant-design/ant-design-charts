"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProHelpDrawer = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _ProHelpPanel = require("./ProHelpPanel");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["drawerProps"];
/**
 * 渲染一个抽屉，其中显示了一个 ProHelpPanel。
 * @param drawerProps 要传递给 Drawer 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
var ProHelpDrawer = exports.ProHelpDrawer = function ProHelpDrawer(_ref) {
  var drawerProps = _ref.drawerProps,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useMergedState = (0, _useMergedState3.default)(false, {
      value: drawerProps.open,
      onChange: drawerProps.afterOpenChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    drawerOpen = _useMergedState2[0],
    setDrawerOpen = _useMergedState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProHelpPanel.ProHelpPanel, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
      onClose: function onClose() {
        return setDrawerOpen(false);
      },
      bordered: false
    }))
  }));
};