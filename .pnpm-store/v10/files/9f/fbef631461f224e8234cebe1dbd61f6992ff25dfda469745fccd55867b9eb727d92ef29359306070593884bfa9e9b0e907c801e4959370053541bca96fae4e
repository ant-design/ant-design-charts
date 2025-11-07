"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProHelpPopover = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _ProHelpContentPanel = require("./ProHelpContentPanel");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 渲染一个弹出式提示框，其中显示了一个ProHelpContentPanel，展示帮助文案的详情
 * @param popoverProps 要传递给 Drawer 组件的属性。
 * @param props 要传递给 ProHelpPanel 组件的属性。
 */
var ProHelpPopover = exports.ProHelpPopover = function ProHelpPopover(props) {
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-help');
  var _useContext2 = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext2.hashId;
  var _useStyle = (0, _style.useStyle)(className),
    wrapSSR = _useStyle.wrapSSR;
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    styles: {
      body: {
        padding: 0
      }
    },
    content: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(className, "-popover-content"), hashId, props.popoverContextClassName),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProHelpContentPanel.ProHelpContentPanel, {
        selectedKey: props.selectedKey
      })
    })
  }, props.popoverProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _classnames.default)("".concat(className, "-popover-text"), hashId, props.textClassName),
      children: props.children
    })
  })));
};