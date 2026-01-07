import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["key"];
import { omitUndefined } from '@ant-design/pro-utils';
import omit from "rc-util/es/omit";
import React from 'react';
import ProFormDependency from "../../Dependency";
import ProFormField from "../../Field";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
export var field = function field(item, _ref) {
  var action = _ref.action,
    formRef = _ref.formRef,
    type = _ref.type,
    originItem = _ref.originItem;
  /** 公用的 类型 props */
  var formFieldProps = _objectSpread(_objectSpread({}, omit(item, ['dataIndex', 'width', 'render', 'renderFormItem', 'renderText', 'title'])), {}, {
    name: item.name || item.key || item.dataIndex,
    width: item.width,
    render: item !== null && item !== void 0 && item.render ? function (dom, entity, renderIndex) {
      var _item$render, _item$key, _item$getFormItemProp, _item$getFieldProps;
      return item === null || item === void 0 || (_item$render = item.render) === null || _item$render === void 0 ? void 0 : _item$render.call(item, dom, entity, renderIndex, action === null || action === void 0 ? void 0 : action.current, _objectSpread(_objectSpread({
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
      rest = _objectWithoutProperties(formFieldProps, _excluded);
    return /*#__PURE__*/_jsx(ProFormField, _objectSpread(_objectSpread({}, rest), {}, {
      ignoreFormItem: true
    }), key);
  };
  var renderFormItem = item !== null && item !== void 0 && item.renderFormItem ? function (_, config) {
    var _item$renderFormItem, _item$key2, _item$getFormItemProp2, _item$getFieldProps2;
    var renderConfig = omitUndefined(_objectSpread(_objectSpread({}, config), {}, {
      onChange: undefined
    }));
    return item === null || item === void 0 || (_item$renderFormItem = item.renderFormItem) === null || _item$renderFormItem === void 0 ? void 0 : _item$renderFormItem.call(item, _objectSpread(_objectSpread({
      type: type
    }, item), {}, {
      key: (_item$key2 = item.key) === null || _item$key2 === void 0 ? void 0 : _item$key2.toString(),
      formItemProps: (_item$getFormItemProp2 = item.getFormItemProps) === null || _item$getFormItemProp2 === void 0 ? void 0 : _item$getFormItemProp2.call(item),
      fieldProps: (_item$getFieldProps2 = item.getFieldProps) === null || _item$getFieldProps2 === void 0 ? void 0 : _item$getFieldProps2.call(item),
      originProps: originItem
    }), _objectSpread(_objectSpread({}, renderConfig), {}, {
      defaultRender: defaultRender,
      type: type
    }), formRef.current);
  } : undefined;
  var getField = function getField() {
    if (item !== null && item !== void 0 && item.renderFormItem) {
      var dom = renderFormItem === null || renderFormItem === void 0 ? void 0 : renderFormItem(null, {});
      if (!dom || item.ignoreFormItem) return dom;
    }
    return /*#__PURE__*/_createElement(ProFormField, _objectSpread(_objectSpread({}, formFieldProps), {}, {
      key: [item.key, item.index || 0].join('-'),
      renderFormItem: renderFormItem
    }));
  };
  if (item.dependencies) {
    return /*#__PURE__*/_jsx(ProFormDependency, {
      name: item.dependencies || [],
      children: getField
    }, item.key);
  }
  return getField();
};