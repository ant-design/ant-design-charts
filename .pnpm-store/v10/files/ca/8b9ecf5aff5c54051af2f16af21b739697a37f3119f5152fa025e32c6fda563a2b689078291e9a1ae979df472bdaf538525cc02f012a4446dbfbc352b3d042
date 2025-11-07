"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _old = require("./old");
var _jsxRuntime = require("react/jsx-runtime");
// https://ant.design/components/color-picker-cn 示例颜色
var DEFAULT_PRESETS = {
  label: 'Recommended',
  colors: ['#F5222D', '#FA8C16', '#FADB14', '#8BBB11', '#52C41A', '#13A8A8', '#1677FF', '#2F54EB', '#722ED1', '#EB2F96', '#F5222D4D', '#FA8C164D', '#FADB144D', '#8BBB114D', '#52C41A4D', '#13A8A84D', '#1677FF4D', '#2F54EB4D', '#722ED14D', '#EB2F964D']
};
/**
 * 判断是否是 5.5.0 以上的版本
 * @returns
 */
function IsIt_Render_V5() {
  return (0, _proUtils.compareVersions)(_antd.version, '5.5.0') > -1;
}
/**
 * 获取颜色组件
 * @param {boolean} [old=false] 是否使用旧版本
 * @return {*}
 */
function getColorPicker() {
  var old = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if ((typeof old === 'undefined' || old === false) && IsIt_Render_V5()) {
    return _antd.ColorPicker;
  }
  return _old.ColorPicker;
}
// const ColorPicker = getColorPicker();
/**
 * 颜色组件
 * Antd > 5.5.0 的版本 使用 antd 的 ColorPicker
 * @param FieldColorPicker {
 *     text: number;
 *     moneySymbol?: string; }
 */
var FieldColorPicker = function FieldColorPicker(_ref, ref) {
  var text = _ref.text,
    type = _ref.mode,
    render = _ref.render,
    renderFormItem = _ref.renderFormItem,
    fieldProps = _ref.fieldProps,
    old = _ref.old;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var ColorPicker = _react.default.useMemo(function () {
    return getColorPicker(old);
  }, [old]);
  var prefixCls = getPrefixCls('pro-field-color-picker');
  // 5.5.0 以上版本追加 className
  var className = (0, _react.useMemo)(function () {
    if (old) return '';
    return (0, _classnames.default)((0, _defineProperty2.default)({}, prefixCls, IsIt_Render_V5()));
  }, [prefixCls, old]);
  if (type === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorPicker, {
      value: text,
      mode: "read",
      ref: ref,
      className: className
      // @ts-ignore 设置无法 open
      ,
      open: false
    });
    if (render) {
      return render(text, (0, _objectSpread2.default)({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    // 解决 默认的 width 100% 问题
    var style = (0, _objectSpread2.default)({
      display: 'table-cell'
    }, fieldProps.style);
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(ColorPicker, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      ref: ref,
      presets: [DEFAULT_PRESETS]
    }, fieldProps), {}, {
      style: style,
      className: className
    }));
    if (renderFormItem) {
      return renderFormItem(text, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: type
      }, fieldProps), {}, {
        style: style
      }), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldColorPicker);