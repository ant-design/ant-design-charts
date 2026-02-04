import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "onChange", "onBlur", "ignoreFormItem", "valuePropName"],
  _excluded2 = ["children", "addonAfter", "addonBefore", "valuePropName", "addonWarpStyle", "convertValue", "help"],
  _excluded3 = ["valueType", "transform", "dataFormat", "ignoreFormItem", "lightProps", "children"];
import { isDropdownValueType, omitUndefined, useDeepCompareMemo, useRefFunction } from '@ant-design/pro-utils';
import { ConfigProvider, Form } from 'antd';
import omit from "rc-util/es/omit";
import React, { useContext, useEffect, useMemo } from 'react';
import { LightWrapper } from "../../BaseForm";
import FieldContext from "../../FieldContext";
import { FormListContext } from "../List";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
var FormItemProvide = /*#__PURE__*/React.createContext({});

/**
 * 把value扔给 fieldProps，方便给自定义用
 *
 * @param param0
 * @returns
 */
var WithValueFomFiledProps = function WithValueFomFiledProps(formFieldProps) {
  var _filedChildren$type, _filedChildren$props9;
  var filedChildren = formFieldProps.children,
    onChange = formFieldProps.onChange,
    onBlur = formFieldProps.onBlur,
    ignoreFormItem = formFieldProps.ignoreFormItem,
    _formFieldProps$value = formFieldProps.valuePropName,
    valuePropName = _formFieldProps$value === void 0 ? 'value' : _formFieldProps$value,
    restProps = _objectWithoutProperties(formFieldProps, _excluded);
  var isProFormComponent =
  // @ts-ignore
  (filedChildren === null || filedChildren === void 0 || (_filedChildren$type = filedChildren.type) === null || _filedChildren$type === void 0 ? void 0 : _filedChildren$type.displayName) !== 'ProFormComponent';
  var isValidElementForFiledChildren = ! /*#__PURE__*/React.isValidElement(filedChildren);
  var onChangeMemo = useRefFunction(function () {
    var _filedChildren$props, _filedChildren$props$, _filedChildren$props2, _filedChildren$props3;
    for (var _len = arguments.length, restParams = new Array(_len), _key = 0; _key < _len; _key++) {
      restParams[_key] = arguments[_key];
    }
    onChange === null || onChange === void 0 || onChange.apply(void 0, restParams);
    if (isProFormComponent) return;
    if (isValidElementForFiledChildren) return undefined;
    filedChildren === null || filedChildren === void 0 || (_filedChildren$props = filedChildren.props) === null || _filedChildren$props === void 0 || (_filedChildren$props$ = _filedChildren$props.onChange) === null || _filedChildren$props$ === void 0 || _filedChildren$props$.call.apply(_filedChildren$props$, [_filedChildren$props].concat(restParams));
    filedChildren === null || filedChildren === void 0 || (_filedChildren$props2 = filedChildren.props) === null || _filedChildren$props2 === void 0 || (_filedChildren$props2 = _filedChildren$props2.fieldProps) === null || _filedChildren$props2 === void 0 || (_filedChildren$props3 = _filedChildren$props2.onChange) === null || _filedChildren$props3 === void 0 || _filedChildren$props3.call.apply(_filedChildren$props3, [_filedChildren$props2].concat(restParams));
  });
  var onBlurMemo = useRefFunction(function () {
    var _filedChildren$props4, _filedChildren$props5, _filedChildren$props6, _filedChildren$props7;
    if (isProFormComponent) return;
    if (isValidElementForFiledChildren) return;
    for (var _len2 = arguments.length, restParams = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      restParams[_key2] = arguments[_key2];
    }
    onBlur === null || onBlur === void 0 || onBlur.apply(void 0, restParams);
    filedChildren === null || filedChildren === void 0 || (_filedChildren$props4 = filedChildren.props) === null || _filedChildren$props4 === void 0 || (_filedChildren$props5 = _filedChildren$props4.onBlur) === null || _filedChildren$props5 === void 0 || _filedChildren$props5.call.apply(_filedChildren$props5, [_filedChildren$props4].concat(restParams));
    filedChildren === null || filedChildren === void 0 || (_filedChildren$props6 = filedChildren.props) === null || _filedChildren$props6 === void 0 || (_filedChildren$props6 = _filedChildren$props6.fieldProps) === null || _filedChildren$props6 === void 0 || (_filedChildren$props7 = _filedChildren$props6.onBlur) === null || _filedChildren$props7 === void 0 || _filedChildren$props7.call.apply(_filedChildren$props7, [_filedChildren$props6].concat(restParams));
  });
  var omitOnBlurAndOnChangeProps = useDeepCompareMemo(function () {
    var _filedChildren$props8;
    return omit(
    // @ts-ignore
    (filedChildren === null || filedChildren === void 0 || (_filedChildren$props8 = filedChildren.props) === null || _filedChildren$props8 === void 0 ? void 0 : _filedChildren$props8.fieldProps) || {}, ['onBlur', 'onChange']);
  }, [omit(
  // @ts-ignore
  (filedChildren === null || filedChildren === void 0 || (_filedChildren$props9 = filedChildren.props) === null || _filedChildren$props9 === void 0 ? void 0 : _filedChildren$props9.fieldProps) || {}, ['onBlur', 'onChange'])]);
  var propsValuePropName = formFieldProps[valuePropName];
  var fieldProps = useMemo(function () {
    if (isProFormComponent) return undefined;
    if (isValidElementForFiledChildren) return undefined;
    return omitUndefined(_objectSpread(_objectSpread(_defineProperty({
      id: restProps.id
    }, valuePropName, propsValuePropName), omitOnBlurAndOnChangeProps), {}, {
      onBlur: onBlurMemo,
      // 这个 onChange 是 Form.Item 添加上的，
      // 要通过 fieldProps 透传给 ProField 调用
      onChange: onChangeMemo
    }));
  }, [propsValuePropName, omitOnBlurAndOnChangeProps, onBlurMemo, onChangeMemo, restProps.id, valuePropName]);
  var finalChange = useMemo(function () {
    if (fieldProps) return undefined;
    if (! /*#__PURE__*/React.isValidElement(filedChildren)) return undefined;
    return function () {
      var _filedChildren$props10, _filedChildren$props11;
      for (var _len3 = arguments.length, restParams = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        restParams[_key3] = arguments[_key3];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, restParams);
      filedChildren === null || filedChildren === void 0 || (_filedChildren$props10 = filedChildren.props) === null || _filedChildren$props10 === void 0 || (_filedChildren$props11 = _filedChildren$props10.onChange) === null || _filedChildren$props11 === void 0 || _filedChildren$props11.call.apply(_filedChildren$props11, [_filedChildren$props10].concat(restParams));
    };
  }, [fieldProps, filedChildren, onChange]);
  if (! /*#__PURE__*/React.isValidElement(filedChildren)) return /*#__PURE__*/_jsx(_Fragment, {
    children: filedChildren
  });
  return /*#__PURE__*/React.cloneElement(filedChildren, omitUndefined(_objectSpread(_objectSpread(_objectSpread({}, restProps), {}, _defineProperty({}, valuePropName, formFieldProps[valuePropName]), filedChildren.props), {}, {
    onChange: finalChange,
    fieldProps: fieldProps,
    onBlur: isProFormComponent && !isValidElementForFiledChildren && onBlur
  })));
};
/**
 * 支持了一下前置 dom 和后置的 dom 同时包一个provide
 *
 * @param WarpFormItemProps
 * @returns
 */
var WarpFormItem = function WarpFormItem(_ref) {
  var children = _ref.children,
    addonAfter = _ref.addonAfter,
    addonBefore = _ref.addonBefore,
    valuePropName = _ref.valuePropName,
    addonWarpStyle = _ref.addonWarpStyle,
    convertValue = _ref.convertValue,
    help = _ref.help,
    props = _objectWithoutProperties(_ref, _excluded2);
  var formDom = useMemo(function () {
    var getValuePropsFunc = function getValuePropsFunc(value) {
      var _convertValue;
      var newValue = (_convertValue = convertValue === null || convertValue === void 0 ? void 0 : convertValue(value, props.name)) !== null && _convertValue !== void 0 ? _convertValue : value;
      if (props.getValueProps) return props.getValueProps(newValue);
      return _defineProperty({}, valuePropName || 'value', newValue);
    };
    if (!convertValue && !props.getValueProps) {
      getValuePropsFunc = undefined;
    }
    if (!addonAfter && !addonBefore) {
      return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread({}, props), {}, {
        //help={typeof help !== 'function' ? help : undefined}
        valuePropName: valuePropName,
        getValueProps: getValuePropsFunc
        // @ts-ignore
        // _internalItemRender={{
        //   mark: 'pro_table_render',
        //   render: (
        //     inputProps: FormItemProps & {
        //       errors: React.ReactNode[];
        //       warnings: React.ReactNode[];
        //     },
        //     doms: {
        //       input: JSX.Element;
        //       errorList: JSX.Element;
        //       extra: JSX.Element;
        //     },
        //   ) => (
        //     <>
        //       {doms.input}
        //       {typeof help === 'function'
        //         ? help({
        //             errors: inputProps.errors,
        //             warnings: inputProps.warnings,
        //           })
        //         : doms.errorList}
        //       {doms.extra}
        //     </>
        //   ),
        // }}
        ,
        children: children
      }));
    }
    return /*#__PURE__*/_jsx(Form.Item, _objectSpread(_objectSpread(_objectSpread({}, props), {}, {
      help: typeof help !== 'function' ? help : undefined,
      valuePropName: valuePropName
      // @ts-ignore
      ,
      _internalItemRender: {
        mark: 'pro_table_render',
        render: function render(inputProps, doms) {
          return /*#__PURE__*/_jsxs(_Fragment, {
            children: [/*#__PURE__*/_jsxs("div", {
              style: _objectSpread({
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
              }, addonWarpStyle),
              children: [addonBefore ? /*#__PURE__*/_jsx("div", {
                style: {
                  marginInlineEnd: 8
                },
                children: addonBefore
              }) : null, doms.input, addonAfter ? /*#__PURE__*/_jsx("div", {
                style: {
                  marginInlineStart: 8
                },
                children: addonAfter
              }) : null]
            }), typeof help === 'function' ? help({
              errors: inputProps.errors,
              warnings: inputProps.warnings
            }) : doms.errorList, doms.extra]
          });
        }
      }
    }, props), {}, {
      getValueProps: getValuePropsFunc,
      children: children
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addonAfter, addonBefore, children, convertValue === null || convertValue === void 0 ? void 0 : convertValue.toString(), props]);
  return /*#__PURE__*/_jsx(FormItemProvide.Provider, {
    value: {
      name: props.name,
      label: props.label
    },
    children: formDom
  });
};
var ProFormItem = function ProFormItem(props) {
  var _ConfigProvider$useCo, _rest$name2, _rest$name3, _rest$name4;
  /** 从 context 中拿到的值 */
  var _ref3 = (ConfigProvider === null || ConfigProvider === void 0 || (_ConfigProvider$useCo = ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref3.componentSize;
  var size = componentSize;
  var valueType = props.valueType,
    transform = props.transform,
    dataFormat = props.dataFormat,
    ignoreFormItem = props.ignoreFormItem,
    lightProps = props.lightProps,
    unusedChildren = props.children,
    rest = _objectWithoutProperties(props, _excluded3);
  var formListField = useContext(FormListContext);

  // ProFromList 的 filed，里面有name和key
  /** 从 context 中拿到的值 */
  var name = useMemo(function () {
    if (props.name === undefined) return props.name;
    if (formListField.name !== undefined) {
      return [formListField.name, props.name].flat(1);
    }
    return props.name;
  }, [formListField.name, props.name]);

  /** 从 context 中拿到的值 */
  var _React$useContext = React.useContext(FieldContext),
    setFieldValueType = _React$useContext.setFieldValueType,
    formItemProps = _React$useContext.formItemProps;
  useEffect(function () {
    // 如果 setFieldValueType 和 props.name 不存在不存入
    if (!setFieldValueType || !props.name) {
      return;
    }
    // Field.type === 'ProField' 时 props 里面是有 valueType 的，所以要设置一下
    // 写一个 ts 比较麻烦，用 any 顶一下
    setFieldValueType([formListField.listName, props.name].flat(1).filter(function (itemName) {
      return itemName !== undefined;
    }), {
      valueType: valueType || 'text',
      dateFormat: dataFormat,
      transform: transform
    });
  }, [formListField.listName, name, dataFormat, props.name, setFieldValueType, transform, valueType]);
  var isDropdown = /*#__PURE__*/React.isValidElement(props.children) && isDropdownValueType(valueType || props.children.props.valueType);
  var noLightFormItem = useMemo(function () {
    if (!(lightProps !== null && lightProps !== void 0 && lightProps.light) || lightProps !== null && lightProps !== void 0 && lightProps.customLightMode || isDropdown) {
      return true;
    }
    return false;
  }, [lightProps === null || lightProps === void 0 ? void 0 : lightProps.customLightMode, isDropdown, lightProps === null || lightProps === void 0 ? void 0 : lightProps.light]);

  // formItem 支持function，如果是function 我就直接不管了
  if (typeof props.children === 'function') {
    var _rest$name;
    return /*#__PURE__*/_createElement(WarpFormItem, _objectSpread(_objectSpread({}, rest), {}, {
      name: name,
      key: rest.proFormFieldKey || ((_rest$name = rest.name) === null || _rest$name === void 0 ? void 0 : _rest$name.toString())
    }), props.children);
  }
  var children = /*#__PURE__*/_jsx(WithValueFomFiledProps, {
    valuePropName: props.valuePropName,
    children: props.children
  }, rest.proFormFieldKey || ((_rest$name2 = rest.name) === null || _rest$name2 === void 0 ? void 0 : _rest$name2.toString()));
  var lightDom = noLightFormItem ? children : /*#__PURE__*/_createElement(LightWrapper, _objectSpread(_objectSpread({}, lightProps), {}, {
    key: rest.proFormFieldKey || ((_rest$name3 = rest.name) === null || _rest$name3 === void 0 ? void 0 : _rest$name3.toString()),
    size: size
  }), children);
  // 这里控制是否需要 LightWrapper，为了提升一点点性能
  if (ignoreFormItem) {
    return /*#__PURE__*/_jsx(_Fragment, {
      children: lightDom
    });
  }
  return /*#__PURE__*/_jsx(WarpFormItem, _objectSpread(_objectSpread(_objectSpread({}, formItemProps), rest), {}, {
    name: name,
    isListField: formListField.name !== undefined,
    children: lightDom
  }), rest.proFormFieldKey || ((_rest$name4 = rest.name) === null || _rest$name4 === void 0 ? void 0 : _rest$name4.toString()));
};
export { FormItemProvide };
export default ProFormItem;