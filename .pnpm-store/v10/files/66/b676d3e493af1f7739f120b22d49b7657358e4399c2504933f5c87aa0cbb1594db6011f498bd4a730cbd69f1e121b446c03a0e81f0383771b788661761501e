"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.defaultGetValueFromEvent = defaultGetValueFromEvent;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));
var _react = _interopRequireWildcard(require("react"));
var _createField = require("../../BaseForm/createField");
var _helpers = require("../../helpers");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["children", "value", "valuePropName", "onChange", "fieldProps", "space", "type", "transform", "convertValue", "lightProps"],
  _excluded2 = ["children", "space", "valuePropName"];
var FieldSetType = {
  space: _antd.Space,
  group: _antd.Input.Group
};
function defaultGetValueFromEvent(valuePropName) {
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
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  /**
   * 使用方法的引用防止闭包
   *
   * @param fileValue
   * @param index
   */
  var fieldSetOnChange = (0, _proUtils.useRefFunction)(function (fileValue, index) {
    var _fieldProps$onChange;
    var newValues = (0, _toConsumableArray2.default)(value);
    newValues[index] = defaultGetValueFromEvent(valuePropName || 'value', fileValue);
    onChange === null || onChange === void 0 || onChange(newValues);
    fieldProps === null || fieldProps === void 0 || (_fieldProps$onChange = fieldProps.onChange) === null || _fieldProps$onChange === void 0 || _fieldProps$onChange.call(fieldProps, newValues);
  });
  var itemIndex = -1;
  var list = (0, _toArray.default)((0, _proUtils.runFunction)(children, value, props)).map(function (item) {
    if ( /*#__PURE__*/_react.default.isValidElement(item)) {
      var _item$type, _item$props, _item$props2;
      itemIndex += 1;
      var index = itemIndex;
      var isProFromItem =
      // @ts-ignore
      (item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) === 'ProFormComponent' || (item === null || item === void 0 || (_item$props = item.props) === null || _item$props === void 0 ? void 0 : _item$props.readonly);
      var forkProps = isProFromItem ? (0, _objectSpread2.default)((0, _objectSpread2.default)({
        key: index,
        ignoreFormItem: true
      }, item.props || {}), {}, {
        // 如果不是我们自定义的组件 fieldProps 无法识别
        fieldProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item === null || item === void 0 || (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.fieldProps), {}, {
          onChange: function onChange() {
            fieldSetOnChange(arguments.length <= 0 ? undefined : arguments[0], index);
          }
        }),
        value: value === null || value === void 0 ? void 0 : value[index],
        onChange: undefined
      }) : (0, _objectSpread2.default)((0, _objectSpread2.default)({
        key: index
      }, item.props || {}), {}, {
        value: value === null || value === void 0 ? void 0 : value[index],
        onChange: function onChange(itemValue) {
          var _props$onChange, _props;
          fieldSetOnChange(itemValue, index);
          (_props$onChange = (_props = item.props).onChange) === null || _props$onChange === void 0 || _props$onChange.call(_props, itemValue);
        }
      });
      return /*#__PURE__*/_react.default.cloneElement(item, forkProps);
    }
    return item;
  });
  var Components = FieldSetType[type];
  var _useGridHelpers = (0, _helpers.useGridHelpers)(rest),
    RowWrapper = _useGridHelpers.RowWrapper;

  /** Input.Group 需要配置 compact */
  var typeProps = (0, _react.useMemo)(function () {
    return (0, _objectSpread2.default)({}, type === 'group' ? {
      compact: true
    } : {});
  }, [type]);
  var Wrapper = (0, _react.useCallback)(function (_ref) {
    var dom = _ref.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Components, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, typeProps), space), {}, {
      align: "start",
      wrap: true,
      children: dom
    }));
  }, [Components, space, typeProps]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(RowWrapper, {
    Wrapper: Wrapper,
    children: list
  });
};
var BaseProFormFieldSet = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var children = _ref2.children,
    space = _ref2.space,
    valuePropName = _ref2.valuePropName,
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(FieldSet, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    space: space,
    valuePropName: valuePropName
  }, rest.fieldProps), {}, {
    // 把 fieldProps 里的重置掉
    onChange: undefined
  }, rest), {}, {
    children: children
  }));
});
var ProFormFieldSet = (0, _createField.createField)(BaseProFormFieldSet);
var _default = exports.default = ProFormFieldSet;