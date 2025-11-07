"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _Card = _interopRequireDefault(require("./components/Card"));
var _Divider = _interopRequireDefault(require("./components/Divider"));
var _TabPane = _interopRequireDefault(require("./components/TabPane"));
var _jsxRuntime = require("react/jsx-runtime");
var Group = function Group(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default, (0, _objectSpread2.default)({
    bodyStyle: {
      padding: 0
    }
  }, props));
};

// 当前不对底层 Card 做封装，仅挂载子组件，直接导出
// @ts-ignore
var ProCard = _Card.default;
ProCard.isProCard = true;
ProCard.Divider = _Divider.default;
ProCard.TabPane = _TabPane.default;
ProCard.Group = Group;
var _default = exports.default = ProCard;