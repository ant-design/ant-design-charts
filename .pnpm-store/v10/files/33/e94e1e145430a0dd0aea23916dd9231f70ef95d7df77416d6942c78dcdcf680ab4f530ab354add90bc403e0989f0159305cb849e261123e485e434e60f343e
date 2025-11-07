"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GroupTitleContext = void 0;
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireDefault(require("react"));
// User should not care about internal state.
// Which should pass by context instead.
const GroupTitleContext = exports.GroupTitleContext = /*#__PURE__*/_react.default.createContext(null);
const GroupTitle = ({
  children
}) => {
  const {
    prefixCls
  } = _react.default.useContext(GroupTitleContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(`${prefixCls}-group-title`)
  }, children && /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, null, children));
};
var _default = exports.default = GroupTitle;