"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FormItemProvide = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _BaseForm = require("../../BaseForm");
var _FieldContext = _interopRequireDefault(require("../../FieldContext"));
var _List = require("../List");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "onChange", "onBlur", "ignoreFormItem", "valuePropName"],
  _excluded2 = ["children", "addonAfter", "addonBefore", "valuePropName", "addonWarpStyle", "convertValue", "help"],
  _excluded3 = ["valueType", "transform", "dataFormat", "ignoreFormItem", "lightProps", "children"];
var FormItemProvide = exports.FormItemProvide = /*#__PURE__*/_react.default.createContext({});

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
    restProps = (0, _objectWithoutProperties2.default)(formFieldProps, _excluded);
  var isProFormComponent =
  // @ts-ignore
  (filedChildren === null || filedChildren === void 0 || (_filedChildren$type = filedChildren.type) === null || _filedChildren$type === void 0 ? void 0 : _filedChildren$type.displayName) !== 'ProFormComponent';
  var isValidElementForFiledChildren = ! /*#__PURE__*/_react.default.isValidElement(filedChildren);
  var onChangeMemo = (0, _proUtils.useRefFunction)(function () {
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
  var onBlurMemo = (0, _proUtils.useRefFunction)(function () {
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
  var omitOnBlurAndOnChangeProps = (0, _proUtils.useDeepCompareMemo)(function () {
    var _filedChildren$props8;
    return (0, _omit.default)(
    // @ts-ignore
    (filedChildren === null || filedChildren === void 0 || (_filedChildren$props8 = filedChildren.props) === null || _filedChildren$props8 === void 0 ? void 0 : _filedChildren$props8.fieldProps) || {}, ['onBlur', 'onChange']);
  }, [(0, _omit.default)(
  // @ts-ignore
  (filedChildren === null || filedChildren === void 0 || (_filedChildren$props9 = filedChildren.props) === null || _filedChildren$props9 === void 0 ? void 0 : _filedChildren$props9.fieldProps) || {}, ['onBlur', 'onChange'])]);
  var propsValuePropName = formFieldProps[valuePropName];
  var fieldProps = (0, _react.useMemo)(function () {
    if (isProFormComponent) return undefined;
    if (isValidElementForFiledChildren) return undefined;
    return (0, _proUtils.omitUndefined)((0, _objectSpread4.default)((0, _objectSpread4.default)((0, _defineProperty2.default)({
      id: restProps.id
    }, valuePropName, propsValuePropName), omitOnBlurAndOnChangeProps), {}, {
      onBlur: onBlurMemo,
      // 这个 onChange 是 Form.Item 添加上的，
      // 要通过 fieldProps 透传给 ProField 调用
      onChange: onChangeMemo
    }));
  }, [propsValuePropName, omitOnBlurAndOnChangeProps, onBlurMemo, onChangeMemo, restProps.id, valuePropName]);
  var finalChange = (0, _react.useMemo)(function () {
    if (fieldProps) return undefined;
    if (! /*#__PURE__*/_react.default.isValidElement(filedChildren)) return undefined;
    return function () {
      var _filedChildren$props10, _filedChildren$props11;
      for (var _len3 = arguments.length, restParams = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        restParams[_key3] = arguments[_key3];
      }
      onChange === null || onChange === void 0 || onChange.apply(void 0, restParams);
      filedChildren === null || filedChildren === void 0 || (_filedChildren$props10 = filedChildren.props) === null || _filedChildren$props10 === void 0 || (_filedChildren$props11 = _filedChildren$props10.onChange) === null || _filedChildren$props11 === void 0 || _filedChildren$props11.call.apply(_filedChildren$props11, [_filedChildren$props10].concat(restParams));
    };
  }, [fieldProps, filedChildren, onChange]);
  if (! /*#__PURE__*/_react.default.isValidElement(filedChildren)) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: filedChildren
  });
  return /*#__PURE__*/_react.default.cloneElement(filedChildren, (0, _proUtils.omitUndefined)((0, _objectSpread4.default)((0, _objectSpread4.default)((0, _objectSpread4.default)({}, restProps), {}, (0, _defineProperty2.default)({}, valuePropName, formFieldProps[valuePropName]), filedChildren.props), {}, {
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
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded2);
  var formDom = (0, _react.useMemo)(function () {
    var getValuePropsFunc = function getValuePropsFunc(value) {
      var _convertValue;
      var newValue = (_convertValue = convertValue === null || convertValue === void 0 ? void 0 : convertValue(value, props.name)) !== null && _convertValue !== void 0 ? _convertValue : value;
      if (props.getValueProps) return props.getValueProps(newValue);
      return (0, _defineProperty2.default)({}, valuePropName || 'value', newValue);
    };
    if (!convertValue && !props.getValueProps) {
      getValuePropsFunc = undefined;
    }
    if (!addonAfter && !addonBefore) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, props), {}, {
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
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, (0, _objectSpread4.default)((0, _objectSpread4.default)((0, _objectSpread4.default)({}, props), {}, {
      help: typeof help !== 'function' ? help : undefined,
      valuePropName: valuePropName
      // @ts-ignore
      ,
      _internalItemRender: {
        mark: 'pro_table_render',
        render: function render(inputProps, doms) {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              style: (0, _objectSpread4.default)({
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap'
              }, addonWarpStyle),
              children: [addonBefore ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                style: {
                  marginInlineEnd: 8
                },
                children: addonBefore
              }) : null, doms.input, addonAfter ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FormItemProvide.Provider, {
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
  var _ref3 = (_antd.ConfigProvider === null || _antd.ConfigProvider === void 0 || (_ConfigProvider$useCo = _antd.ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(_antd.ConfigProvider)) || {
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
    rest = (0, _objectWithoutProperties2.default)(props, _excluded3);
  var formListField = (0, _react.useContext)(_List.FormListContext);

  // ProFromList 的 filed，里面有name和key
  /** 从 context 中拿到的值 */
  var name = (0, _react.useMemo)(function () {
    if (props.name === undefined) return props.name;
    if (formListField.name !== undefined) {
      return [formListField.name, props.name].flat(1);
    }
    return props.name;
  }, [formListField.name, props.name]);

  /** 从 context 中拿到的值 */
  var _React$useContext = _react.default.useContext(_FieldContext.default),
    setFieldValueType = _React$useContext.setFieldValueType,
    formItemProps = _React$useContext.formItemProps;
  (0, _react.useEffect)(function () {
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
  var isDropdown = /*#__PURE__*/_react.default.isValidElement(props.children) && (0, _proUtils.isDropdownValueType)(valueType || props.children.props.valueType);
  var noLightFormItem = (0, _react.useMemo)(function () {
    if (!(lightProps !== null && lightProps !== void 0 && lightProps.light) || lightProps !== null && lightProps !== void 0 && lightProps.customLightMode || isDropdown) {
      return true;
    }
    return false;
  }, [lightProps === null || lightProps === void 0 ? void 0 : lightProps.customLightMode, isDropdown, lightProps === null || lightProps === void 0 ? void 0 : lightProps.light]);

  // formItem 支持function，如果是function 我就直接不管了
  if (typeof props.children === 'function') {
    var _rest$name;
    return /*#__PURE__*/(0, _react.createElement)(WarpFormItem, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, rest), {}, {
      name: name,
      key: rest.proFormFieldKey || ((_rest$name = rest.name) === null || _rest$name === void 0 ? void 0 : _rest$name.toString())
    }), props.children);
  }
  var children = /*#__PURE__*/(0, _jsxRuntime.jsx)(WithValueFomFiledProps, {
    valuePropName: props.valuePropName,
    children: props.children
  }, rest.proFormFieldKey || ((_rest$name2 = rest.name) === null || _rest$name2 === void 0 ? void 0 : _rest$name2.toString()));
  var lightDom = noLightFormItem ? children : /*#__PURE__*/(0, _react.createElement)(_BaseForm.LightWrapper, (0, _objectSpread4.default)((0, _objectSpread4.default)({}, lightProps), {}, {
    key: rest.proFormFieldKey || ((_rest$name3 = rest.name) === null || _rest$name3 === void 0 ? void 0 : _rest$name3.toString()),
    size: size
  }), children);
  // 这里控制是否需要 LightWrapper，为了提升一点点性能
  if (ignoreFormItem) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: lightDom
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(WarpFormItem, (0, _objectSpread4.default)((0, _objectSpread4.default)((0, _objectSpread4.default)({}, formItemProps), rest), {}, {
    name: name,
    isListField: formListField.name !== undefined,
    children: lightDom
  }), rest.proFormFieldKey || ((_rest$name4 = rest.name) === null || _rest$name4 === void 0 ? void 0 : _rest$name4.toString()));
};
var _default = exports.default = ProFormItem;