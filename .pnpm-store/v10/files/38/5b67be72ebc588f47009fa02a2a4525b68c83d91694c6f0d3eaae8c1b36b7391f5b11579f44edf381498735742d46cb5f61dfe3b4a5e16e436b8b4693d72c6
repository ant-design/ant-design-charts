"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var defaultCollapseRender = function defaultCollapseRender(collapsed, _, intl, hiddenNum) {
  if (collapsed) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [intl.getMessage('tableForm.collapsed', '展开'), hiddenNum && "(".concat(hiddenNum, ")"), /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DownOutlined, {
        style: {
          marginInlineStart: '0.5em',
          transition: '0.3s all',
          transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
        }
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [intl.getMessage('tableForm.expand', '收起'), /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.DownOutlined, {
      style: {
        marginInlineStart: '0.5em',
        transition: '0.3s all',
        transform: "rotate(".concat(collapsed ? 0 : 0.5, "turn)")
      }
    })]
  });
};

/**
 * FormFooter 的组件，可以自动进行一些配置
 *
 * @param props
 */
var Actions = function Actions(props) {
  var setCollapsed = props.setCollapsed,
    _props$collapsed = props.collapsed,
    collapsed = _props$collapsed === void 0 ? false : _props$collapsed,
    submitter = props.submitter,
    style = props.style,
    hiddenNum = props.hiddenNum;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var intl = (0, _proProvider.useIntl)();
  var _useContext2 = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext2.hashId;
  var collapseRender = (0, _proUtils.omitBoolean)(props.collapseRender) || defaultCollapseRender;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Space, {
    style: style,
    size: 16,
    children: [submitter, props.collapseRender !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "".concat(getPrefixCls('pro-query-filter-collapse-button'), " ").concat(hashId).trim(),
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      },
      children: collapseRender === null || collapseRender === void 0 ? void 0 : collapseRender(collapsed, props, intl, hiddenNum)
    })]
  });
};
var _default = exports.default = Actions;