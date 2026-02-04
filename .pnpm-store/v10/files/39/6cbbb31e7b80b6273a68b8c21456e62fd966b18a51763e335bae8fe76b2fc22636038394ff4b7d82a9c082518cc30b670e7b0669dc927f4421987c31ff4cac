import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { compareVersions } from '@ant-design/pro-utils';
import { ColorPicker as ColorPickerV5, ConfigProvider, version } from 'antd';
import classNames from 'classnames';
import React, { useContext, useMemo } from 'react';
import { ColorPicker as ColorPickerV4 } from "./old";
// https://ant.design/components/color-picker-cn 示例颜色
import { jsx as _jsx } from "react/jsx-runtime";
var DEFAULT_PRESETS = {
  label: 'Recommended',
  colors: ['#F5222D', '#FA8C16', '#FADB14', '#8BBB11', '#52C41A', '#13A8A8', '#1677FF', '#2F54EB', '#722ED1', '#EB2F96', '#F5222D4D', '#FA8C164D', '#FADB144D', '#8BBB114D', '#52C41A4D', '#13A8A84D', '#1677FF4D', '#2F54EB4D', '#722ED14D', '#EB2F964D']
};
/**
 * 判断是否是 5.5.0 以上的版本
 * @returns
 */
function IsIt_Render_V5() {
  return compareVersions(version, '5.5.0') > -1;
}
/**
 * 获取颜色组件
 * @param {boolean} [old=false] 是否使用旧版本
 * @return {*}
 */
function getColorPicker() {
  var old = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if ((typeof old === 'undefined' || old === false) && IsIt_Render_V5()) {
    return ColorPickerV5;
  }
  return ColorPickerV4;
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
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var ColorPicker = React.useMemo(function () {
    return getColorPicker(old);
  }, [old]);
  var prefixCls = getPrefixCls('pro-field-color-picker');
  // 5.5.0 以上版本追加 className
  var className = useMemo(function () {
    if (old) return '';
    return classNames(_defineProperty({}, prefixCls, IsIt_Render_V5()));
  }, [prefixCls, old]);
  if (type === 'read') {
    var dom = /*#__PURE__*/_jsx(ColorPicker, {
      value: text,
      mode: "read",
      ref: ref,
      className: className
      // @ts-ignore 设置无法 open
      ,
      open: false
    });
    if (render) {
      return render(text, _objectSpread({
        mode: type
      }, fieldProps), dom);
    }
    return dom;
  }
  if (type === 'edit' || type === 'update') {
    // 解决 默认的 width 100% 问题
    var style = _objectSpread({
      display: 'table-cell'
    }, fieldProps.style);
    var _dom = /*#__PURE__*/_jsx(ColorPicker, _objectSpread(_objectSpread({
      ref: ref,
      presets: [DEFAULT_PRESETS]
    }, fieldProps), {}, {
      style: style,
      className: className
    }));
    if (renderFormItem) {
      return renderFormItem(text, _objectSpread(_objectSpread({
        mode: type
      }, fieldProps), {}, {
        style: style
      }), _dom);
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldColorPicker);