"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionButton = ActionButton;
exports.default = exports.ActionButtonContext = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var React = _interopRequireWildcard(require("react"));
const ActionButtonContext = exports.ActionButtonContext = /*#__PURE__*/React.createContext(null);
function ActionButton(props, ref) {
  const {
    className,
    action,
    onClick,
    ...restProps
  } = props;
  const context = React.useContext(ActionButtonContext);
  const {
    prefixCls,
    disabled: rootDisabled
  } = context;
  const mergedDisabled = restProps.disabled ?? rootDisabled ?? context[`${action}Disabled`];
  return /*#__PURE__*/React.createElement(_antd.Button, (0, _extends2.default)({
    type: "text"
  }, restProps, {
    ref: ref,
    onClick: e => {
      if (mergedDisabled) {
        return;
      }
      context[action]?.();
      onClick?.(e);
    },
    className: (0, _classnames.default)(prefixCls, className, {
      [`${prefixCls}-disabled`]: mergedDisabled
    })
  }));
}
var _default = exports.default = /*#__PURE__*/React.forwardRef(ActionButton);