import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fieldProps", "children", "labelCol", "label", "autoFocus", "isDefaultDom", "render", "proFieldProps", "renderFormItem", "valueType", "initialValue", "onChange", "valueEnum", "params", "name", "dependenciesValues", "cacheForSwr", "valuePropName"];
import ProField from '@ant-design/pro-field';
import { isDeepEqualReact, runFunction, useRefFunction } from '@ant-design/pro-utils';
import React, { memo, useContext, useMemo } from 'react';
import { EditOrReadOnlyContext } from "../../BaseForm/EditOrReadOnlyContext";
import { createField } from "../../BaseForm/createField";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var BaseProFormField = function BaseProFormField(props) {
  var fieldProps = props.fieldProps,
    children = props.children,
    labelCol = props.labelCol,
    label = props.label,
    autoFocus = props.autoFocus,
    isDefaultDom = props.isDefaultDom,
    render = props.render,
    proFieldProps = props.proFieldProps,
    renderFormItem = props.renderFormItem,
    valueType = props.valueType,
    initialValue = props.initialValue,
    _onChange = props.onChange,
    valueEnum = props.valueEnum,
    params = props.params,
    name = props.name,
    dependenciesValues = props.dependenciesValues,
    _props$cacheForSwr = props.cacheForSwr,
    cacheForSwr = _props$cacheForSwr === void 0 ? false : _props$cacheForSwr,
    _props$valuePropName = props.valuePropName,
    valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
    restProps = _objectWithoutProperties(props, _excluded);
  var modeContext = useContext(EditOrReadOnlyContext);
  var propsParams = useMemo(function () {
    // 使用dependencies时 dependenciesValues是有值的
    // 此时如果存在request，注入dependenciesValues
    return dependenciesValues && restProps.request ? _objectSpread(_objectSpread({}, params), dependenciesValues || {}) : params;
  }, [dependenciesValues, params, restProps.request]);
  var memoUnChange = useRefFunction(function () {
    if (fieldProps !== null && fieldProps !== void 0 && fieldProps.onChange) {
      var _fieldProps$onChange;
      for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
        restParams[_key] = arguments[_key];
      }
      fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call.apply(_fieldProps$onChange, [fieldProps].concat(restParams));
      return;
    }
  });
  var memoFieldProps = useMemo(function () {
    return _objectSpread(_objectSpread({
      autoFocus: autoFocus
    }, fieldProps), {}, {
      onChange: memoUnChange
    });
  }, [autoFocus, fieldProps, memoUnChange]);
  var childrenRender = useMemo(function () {
    // 防止 formItem 的值被吃掉
    if (children) {
      if ( /*#__PURE__*/React.isValidElement(children)) {
        return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, restProps), {}, {
          onChange: function onChange() {
            for (var _len2 = arguments.length, restParams = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              restParams[_key2] = arguments[_key2];
            }
            if (fieldProps !== null && fieldProps !== void 0 && fieldProps.onChange) {
              var _fieldProps$onChange2;
              fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange2 = fieldProps.onChange) === null || _fieldProps$onChange2 === void 0 || _fieldProps$onChange2.call.apply(_fieldProps$onChange2, [fieldProps].concat(restParams));
              return;
            }
            _onChange === null || _onChange === void 0 || _onChange.apply(void 0, restParams);
          }
        }, (children === null || children === void 0 ? void 0 : children.props) || {}));
      }
      return /*#__PURE__*/_jsx(_Fragment, {
        children: children
      });
    }
    return;
  }, [children, fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.onChange, _onChange, restProps]);
  if (childrenRender) {
    return childrenRender;
  }
  return /*#__PURE__*/_jsx(ProField, _objectSpread(_objectSpread(_objectSpread({
    text: fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps[valuePropName],
    render: render,
    renderFormItem: renderFormItem,
    valueType: valueType || 'text',
    cacheForSwr: cacheForSwr,
    fieldProps: memoFieldProps,
    valueEnum: runFunction(valueEnum)
  }, proFieldProps), restProps), {}, {
    mode: (proFieldProps === null || proFieldProps === void 0 ? void 0 : proFieldProps.mode) || modeContext.mode || 'edit',
    params: propsParams
  }));
};
var ProFormField = createField( /*#__PURE__*/memo(BaseProFormField, function (prevProps, nextProps) {
  return isDeepEqualReact(nextProps, prevProps, ['onChange', 'onBlur']);
}));
export default ProFormField;