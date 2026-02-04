import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { InboxOutlined } from '@ant-design/icons';
import { ConfigProvider, Upload } from 'antd';
import React, { useContext } from 'react';
import { EditOrReadOnlyContext } from "../../BaseForm/EditOrReadOnlyContext";
import { createField } from "../../BaseForm/createField";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 拖动上传组件
 *
 * @param
 */
var BaseProFormUploadDragger = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _fieldProps$style;
  var fieldProps = _ref.fieldProps,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '单击或拖动文件到此区域进行上传' : _ref$title,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? /*#__PURE__*/_jsx(InboxOutlined, {}) : _ref$icon,
    _ref$description = _ref.description,
    description = _ref$description === void 0 ? '支持单次或批量上传' : _ref$description,
    action = _ref.action,
    accept = _ref.accept,
    _onChange = _ref.onChange,
    value = _ref.value,
    children = _ref.children,
    max = _ref.max,
    proFieldProps = _ref.proFieldProps;
  var context = useContext(ConfigProvider.ConfigContext);
  var modeContext = useContext(EditOrReadOnlyContext);
  var mode = (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) || modeContext.mode || 'edit';
  var baseClassName = context.getPrefixCls('upload');
  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && mode !== 'read' && (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.readonly) !== true;
  return /*#__PURE__*/_jsxs(Upload.Dragger, _objectSpread(_objectSpread({
    // @ts-ignore
    ref: ref,
    name: "files",
    action: action,
    accept: accept,
    fileList: value
  }, fieldProps), {}, {
    onChange: function onChange(info) {
      _onChange === null || _onChange === void 0 || _onChange(info);
      if (fieldProps !== null && fieldProps !== void 0 && fieldProps.onChange) {
        fieldProps === null || fieldProps === void 0 || fieldProps.onChange(info);
      }
    },
    style: _objectSpread(_objectSpread({
      flexDirection: 'column',
      alignItems: 'center'
    }, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.style), {}, {
      display: !showUploadButton ? 'none' : (fieldProps === null || fieldProps === void 0 || (_fieldProps$style = fieldProps.style) === null || _fieldProps$style === void 0 ? void 0 : _fieldProps$style.display) || 'flex'
    }),
    children: [/*#__PURE__*/_jsx("p", {
      className: "".concat(baseClassName, "-drag-icon"),
      children: icon
    }), /*#__PURE__*/_jsx("p", {
      className: "".concat(baseClassName, "-text"),
      children: title
    }), /*#__PURE__*/_jsx("p", {
      className: "".concat(baseClassName, "-hint"),
      children: description
    }), children ? /*#__PURE__*/_jsx("div", {
      className: "".concat(baseClassName, "-extra"),
      style: {
        padding: 16
      },
      children: children
    }) : null]
  }));
});
var ProFormUploadDragger = createField(BaseProFormUploadDragger, {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});
export default ProFormUploadDragger;