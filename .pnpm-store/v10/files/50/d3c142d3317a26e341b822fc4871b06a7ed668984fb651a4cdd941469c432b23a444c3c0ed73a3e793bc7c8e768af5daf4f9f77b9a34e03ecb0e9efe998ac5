import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "value", "valuePropName", "onChange", "fieldProps", "space", "type", "transform", "convertValue", "lightProps"],
  _excluded2 = ["children", "space", "valuePropName"];
import { runFunction, useRefFunction } from '@ant-design/pro-utils';
import { Input, Space } from 'antd';
import toArray from "rc-util/es/Children/toArray";
import React, { useCallback, useImperativeHandle, useMemo } from 'react';
import { createField } from "../../BaseForm/createField";
import { useGridHelpers } from "../../helpers";
import { jsx as _jsx } from "react/jsx-runtime";
var FieldSetType = {
  space: Space,
  group: Input.Group
};
export function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && valuePropName in event.target) {
    // @ts-ignore
    return event.target[valuePropName];
  }
  return event;
}
var FieldSet = function FieldSet(props) {
  var children = props.children,
    _props$value = props.value,
    value = _props$value === void 0 ? [] : _props$value,
    valuePropName = props.valuePropName,
    onChange = props.onChange,
    fieldProps = props.fieldProps,
    space = props.space,
    _props$type = props.type,
    type = _props$type === void 0 ? 'space' : _props$type,
    transform = props.transform,
    convertValue = props.convertValue,
    lightProps = props.lightProps,
    rest = _objectWithoutProperties(props, _excluded);
  /**
   * 使用方法的引用防止闭包
   *
   * @param fileValue
   * @param index
   */
  var fieldSetOnChange = useRefFunction(function (fileValue, index) {
    var _fieldProps$onChange;
    var newValues = _toConsumableArray(value);
    newValues[index] = defaultGetValueFromEvent(valuePropName || 'value', fileValue);
    onChange === null || onChange === void 0 || onChange(newValues);
    fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call(fieldProps, newValues);
  });
  var itemIndex = -1;
  var list = toArray(runFunction(children, value, props)).map(function (item) {
    if ( /*#__PURE__*/React.isValidElement(item)) {
      var _item$type, _item$props, _item$props2;
      itemIndex += 1;
      var index = itemIndex;
      var isProFromItem =
      // @ts-ignore
      (item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) === 'ProFormComponent' || (item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.readonly);
      var forkProps = isProFromItem ? _objectSpread(_objectSpread({
        key: index,
        ignoreFormItem: true
      }, item.props || {}), {}, {
        // 如果不是我们自定义的组件 fieldProps 无法识别
        fieldProps: _objectSpread(_objectSpread({}, item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.fieldProps), {}, {
          onChange: function onChange() {
            fieldSetOnChange(arguments.length <= 0 ? undefined : arguments[0], index);
          }
        }),
        value: value === null || value === void 0 ? void 0 : value[index],
        onChange: undefined
      }) : _objectSpread(_objectSpread({
        key: index
      }, item.props || {}), {}, {
        value: value === null || value === void 0 ? void 0 : value[index],
        onChange: function onChange(itemValue) {
          var _props$onChange, _props;
          fieldSetOnChange(itemValue, index);
          (_props$onChange = (_props = item.props).onChange) === null || _props$onChange === void 0 || _props$onChange.call(_props, itemValue);
        }
      });
      return /*#__PURE__*/React.cloneElement(item, forkProps);
    }
    return item;
  });
  var Components = FieldSetType[type];
  var _useGridHelpers = useGridHelpers(rest),
    RowWrapper = _useGridHelpers.RowWrapper;

  /** Input.Group 需要配置 compact */
  var typeProps = useMemo(function () {
    return _objectSpread({}, type === 'group' ? {
      compact: true
    } : {});
  }, [type]);
  var Wrapper = useCallback(function (_ref) {
    var dom = _ref.children;
    return /*#__PURE__*/_jsx(Components, _objectSpread(_objectSpread(_objectSpread({}, typeProps), space), {}, {
      align: "start",
      wrap: true,
      children: dom
    }));
  }, [Components, space, typeProps]);
  return /*#__PURE__*/_jsx(RowWrapper, {
    Wrapper: Wrapper,
    children: list
  });
};
var BaseProFormFieldSet = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
    space = _ref2.space,
    valuePropName = _ref2.valuePropName,
    rest = _objectWithoutProperties(_ref2, _excluded2);
  useImperativeHandle(ref, function () {
    return {};
  });
  return /*#__PURE__*/_jsx(FieldSet, _objectSpread(_objectSpread(_objectSpread({
    space: space,
    valuePropName: valuePropName
  }, rest.fieldProps), {}, {
    // 把 fieldProps 里的重置掉
    onChange: undefined
  }, rest), {}, {
    children: children
  }));
});
var ProFormFieldSet = createField(BaseProFormFieldSet);
export default ProFormFieldSet;