"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionalSetting = void 0;
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
var _LayoutChange = require("./LayoutChange");
var _index = require("./index");
var _jsxRuntime = require("react/jsx-runtime");
var RegionalSetting = exports.RegionalSetting = function RegionalSetting(_ref) {
  var settings = _ref.settings,
    prefixCls = _ref.prefixCls,
    changeSetting = _ref.changeSetting,
    hashId = _ref.hashId;
  var formatMessage = (0, _index.getFormatMessage)();
  var regionalSetting = ['header', 'footer', 'menu', 'menuHeader'];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, {
    className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
    split: false,
    renderItem: _LayoutChange.renderLayoutSettingItem,
    dataSource: regionalSetting.map(function (key) {
      return {
        title: formatMessage({
          id: "app.setting.regionalsettings.".concat(key)
        }),
        action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, {
          size: "small",
          className: "regional-".concat(key, " ").concat(hashId).trim(),
          checked: settings["".concat(key, "Render")] || settings["".concat(key, "Render")] === undefined,
          onChange: function onChange(checked) {
            return changeSetting("".concat(key, "Render"), checked === true ? undefined : false);
          }
        })
      };
    })
  });
};