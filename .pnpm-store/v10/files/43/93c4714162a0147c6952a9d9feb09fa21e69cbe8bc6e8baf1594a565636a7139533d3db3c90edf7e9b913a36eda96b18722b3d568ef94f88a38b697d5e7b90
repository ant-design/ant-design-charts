"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _EditOrReadOnlyContext = require("../../BaseForm/EditOrReadOnlyContext");
var _createField = require("../../BaseForm/createField");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["fieldProps", "action", "accept", "listType", "title", "max", "icon", "buttonProps", "disabled", "proFieldProps", "imageProps"];
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
    icon = _ref$icon === void 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.UploadOutlined, {}) : _ref$icon,
    buttonProps = _ref.buttonProps,
    disabled = _ref.disabled,
    proFieldProps = _ref.proFieldProps,
    imageProps = _ref.imageProps,
    restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    previewOpen = _useState2[0],
    setPreviewOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    previewImage = _useState4[0],
    setPreviewImage = _useState4[1];
  var value = (0, _react.useMemo)(function () {
    var _restProps$fileList;
    return (_restProps$fileList = restProps.fileList) !== null && _restProps$fileList !== void 0 ? _restProps$fileList : restProps.value;
  }, [restProps.fileList, restProps.value]);
  var handlePreview = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(file) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
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
  var modeContext = (0, _react.useContext)(_EditOrReadOnlyContext.EditOrReadOnlyContext);
  var mode = (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) || modeContext.mode || 'edit';

  // 如果配置了 max ，并且 超过了文件列表的大小，就不展示按钮
  var showUploadButton = (max === undefined || !value || (value === null || value === void 0 ? void 0 : value.length) < max) && mode !== 'read';
  var isPictureCard = (listType !== null && listType !== void 0 ? listType : fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.listType) === 'picture-card';
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Upload, (0, _objectSpread2.default)((0, _objectSpread2.default)({
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
      children: showUploadButton && (isPictureCard ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [icon, " ", title]
      }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Button, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        disabled: disabled || (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.disabled)
      }, buttonProps), {}, {
        children: [icon, title]
      })))
    })), previewImage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Image, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      wrapperStyle: {
        display: 'none'
      }
    }, imageProps), {}, {
      preview: (0, _objectSpread2.default)({
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
var ProFormUploadButton = (0, _createField.createField)( /*#__PURE__*/_react.default.forwardRef(BaseProFormUploadButton), {
  getValueFromEvent: function getValueFromEvent(value) {
    return value.fileList;
  }
});
var _default = exports.default = ProFormUploadButton;