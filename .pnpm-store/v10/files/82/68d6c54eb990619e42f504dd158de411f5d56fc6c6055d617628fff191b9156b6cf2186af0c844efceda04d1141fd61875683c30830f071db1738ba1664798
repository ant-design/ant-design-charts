import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "action", "accept", "listType", "title", "max", "icon", "buttonProps", "disabled", "proFieldProps", "imageProps"];
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Image } from 'antd';
import React, { useContext, useMemo, useState } from 'react';
import { EditOrReadOnlyContext } from "../../BaseForm/EditOrReadOnlyContext";
import { createField } from "../../BaseForm/createField";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var getBase64 = function getBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      return resolve(reader.result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
  });
};
/**
 * 上传按钮组件
 *
 * @param
 */
var BaseProFormUploadButton = function BaseProFormUploadButton(_ref, ref) {
  var _fieldProps$name;
  var fieldProps = _ref.fieldProps,
    action = _ref.action,
    accept = _ref.accept,
    listType = _ref.listType,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '单击上传' : _ref$title,
    max = _ref.max,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? /*#__PURE__*/_jsx(UploadOutlined, {}) : _ref$icon,
    buttonProps = _ref.buttonProps,
    disabled = _ref.disabled,
    proFieldProps = _ref.proFieldProps,
    imageProps = _ref.imageProps,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    previewOpen = _useState2[0],
    setPreviewOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    previewImage = _useState4[0],
    setPreviewImage = _useState4[1];
  var value = useMemo(function () {
    var _restProps$fileList;
    return (_restProps$fileList = restProps.fileList) !== null && _restProps$fileList !== void 0 ? _restProps$fileList : restProps.value;
  }, [restProps.fileList, restProps.value]);
  var handlePreview = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(file) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!file.url && !file.preview)) {
              _context.next = 4;
              break;
            }
            _context.next = 3;
            return getBase64(file.originFileObj);
          case 3:
            file.preview = _context.sent;
          case 4:
            setPreviewImage(file.url || file.preview);
            setPreviewOpen(true);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handlePreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var modeContext = useContext(EditOrReadOnlyContext);
  var mode = (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) || modeContext.mode || 'edit';

  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && mode !== 'read';
  var isPictureCard = (listType !== null && listType !== void 0 ? listType : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.listType) === 'picture-card';
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Upload, _objectSpread(_objectSpread({
      action: action,
      accept: accept,
      ref: ref,
      listType: listType || 'picture',
      fileList: value,
      onPreview: handlePreview
    }, fieldProps), {}, {
      name: (_fieldProps$name = fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.name) !== null && _fieldProps$name !== void 0 ? _fieldProps$name : 'file',
      onChange: function onChange(info) {
        var _fieldProps$onChange;
        fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call(fieldProps, info);
      },
      children: showUploadButton && (isPictureCard ? /*#__PURE__*/_jsxs("span", {
        children: [icon, " ", title]
      }) : /*#__PURE__*/_jsxs(Button, _objectSpread(_objectSpread({
        disabled: disabled || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.disabled)
      }, buttonProps), {}, {
        children: [icon, title]
      })))
    })), previewImage && /*#__PURE__*/_jsx(Image, _objectSpread(_objectSpread({
      wrapperStyle: {
        display: 'none'
      }
    }, imageProps), {}, {
      preview: _objectSpread({
        visible: previewOpen,
        onVisibleChange: function onVisibleChange(visible) {
          return setPreviewOpen(visible);
        },
        afterOpenChange: function afterOpenChange(visible) {
          return !visible && setPreviewImage('');
        }
      }, (imageProps === null || imageProps === void 0 ? void 0 : imageProps.preview) || {}),
      src: previewImage
    }))]
  });
};
var ProFormUploadButton = createField( /*#__PURE__*/React.forwardRef(BaseProFormUploadButton), {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});
export default ProFormUploadButton;