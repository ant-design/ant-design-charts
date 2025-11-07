"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.field = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _Dependency = _interopRequireDefault(require("../../Dependency"));
var _Field = _interopRequireDefault(require("../../Field"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["key"];
var field = exports.field = function field(item, _ref) {
  var action = _ref.action,
    formRef = _ref.formRef,
    type = _ref.type,
    originItem = _ref.originItem;
  /** 公用的 类型 props */
  var formFieldProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _omit.default)(item, ['dataIndex', 'width', 'render', 'renderFormItem', 'renderText', 'title'])), {}, {
    name: item.name || item.key || item.dataIndex,
    width: item.width,
    render: item !== null && item !== void 0 && item.render ? function (dom, entity, renderIndex) {
      var _item$render, _item$key, _item$getFormItemProp, _item$getFieldProps;
      return item === null || item === void 0 || (_item$render = item.render) === null || _item$render === void 0 ? void 0 : _item$render.call(item, dom, entity, renderIndex, action === null || action === void 0 ? void 0 : action.current, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        type: type
      }, item), {}, {
        key: (_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString(),
        formItemProps: (_item$getFormItemProp = item.getFormItemProps) === null || _item$getFormItemProp === void 0 ? void 0 : _item$getFormItemProp.call(item),
        fieldProps: (_item$getFieldProps = item.getFieldProps) === null || _item$getFieldProps === void 0 ? void 0 : _item$getFieldProps.call(item)
      }));
    } : undefined
  });
  var defaultRender = function defaultRender() {
    var key = formFieldProps.key,
      rest = (0, _objectWithoutProperties2.default)(formFieldProps, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Field.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
      ignoreFormItem: true
    }), key);
  };
  var renderFormItem = item !== null && item !== void 0 && item.renderFormItem ? function (_, config) {
    var _item$renderFormItem, _item$key2, _item$getFormItemProp2, _item$getFieldProps2;
    var renderConfig = (0, _proUtils.omitUndefined)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, config), {}, {
      onChange: undefined
    }));
    return item === null || item === void 0 || (_item$renderFormItem = item.renderFormItem) === null || _item$renderFormItem === void 0 ? void 0 : _item$renderFormItem.call(item, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      type: type
    }, item), {}, {
      key: (_item$key2 = item.key) === null || _item$key2 === void 0 ? void 0 : _item$key2.toString(),
      formItemProps: (_item$getFormItemProp2 = item.getFormItemProps) === null || _item$getFormItemProp2 === void 0 ? void 0 : _item$getFormItemProp2.call(item),
      fieldProps: (_item$getFieldProps2 = item.getFieldProps) === null || _item$getFieldProps2 === void 0 ? void 0 : _item$getFieldProps2.call(item),
      originProps: originItem
    }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, renderConfig), {}, {
      defaultRender: defaultRender,
      type: type
    }), formRef.current);
  } : undefined;
  var getField = function getField() {
    if (item !== null && item !== void 0 && item.renderFormItem) {
      var dom = renderFormItem === null || renderFormItem === void 0 ? void 0 : renderFormItem(null, {});
      if (!dom || item.ignoreFormItem) return dom;
    }
    return /*#__PURE__*/(0, _react.createElement)(_Field.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, formFieldProps), {}, {
      key: [item.key, item.index || 0].join('-'),
      renderFormItem: renderFormItem
    }));
  };
  if (item.dependencies) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dependency.default, {
      name: item.dependencies || [],
      children: getField
    }, item.key);
  }
  return getField();
};