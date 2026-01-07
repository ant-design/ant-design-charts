"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockCheckbox = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var BlockCheckbox = exports.BlockCheckbox = function BlockCheckbox(_ref) {
  var value = _ref.value,
    configType = _ref.configType,
    onChange = _ref.onChange,
    list = _ref.list,
    prefixCls = _ref.prefixCls,
    hashId = _ref.hashId;
  var baseClassName = "".concat(prefixCls, "-block-checkbox");
  var dom = (0, _react.useMemo)(function () {
    var domList = (list || []).map(function (item) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
        title: item.title,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: (0, _classnames.default)(hashId, "".concat(baseClassName, "-item"), "".concat(baseClassName, "-item-").concat(item.key), "".concat(baseClassName, "-").concat(configType, "-item")),
          onClick: function onClick() {
            return onChange(item.key);
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CheckOutlined, {
            className: "".concat(baseClassName, "-selectIcon ").concat(hashId).trim(),
            style: {
              display: value === item.key ? 'block' : 'none'
            }
          }), item !== null && item !== void 0 && item.icon ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "".concat(baseClassName, "-icon ").concat(hashId).trim(),
            children: item.icon
          }) : null]
        })
      }, item.key);
    });
    return domList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, list === null || list === void 0 ? void 0 : list.length, onChange]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(baseClassName, hashId),
    children: dom
  });
};