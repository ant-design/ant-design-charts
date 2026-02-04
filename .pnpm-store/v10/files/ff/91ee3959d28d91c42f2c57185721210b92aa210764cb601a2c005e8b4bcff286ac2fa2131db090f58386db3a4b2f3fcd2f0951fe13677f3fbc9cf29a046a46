"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _Select = require("../Select");
require("antd/lib/cascader/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["radioType", "renderFormItem", "mode", "render", "label", "light"]; // 兼容代码-----------
//----------------------
/**
 * 级联选择组件
 *
 * @param param0
 * @param ref
 */
var FieldCascader = function FieldCascader(_ref, ref) {
  var _rest$fieldProps2;
  var radioType = _ref.radioType,
    renderFormItem = _ref.renderFormItem,
    mode = _ref.mode,
    render = _ref.render,
    label = _ref.label,
    light = _ref.light,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-cascader');
  var _useFieldFetchData = (0, _Select.useFieldFetchData)(rest),
    _useFieldFetchData2 = (0, _slicedToArray2.default)(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  var intl = (0, _proProvider.useIntl)();
  var cascaderRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, cascaderRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);
  var optionsValueEnum = (0, _react.useMemo)(function () {
    var _rest$fieldProps;
    if (mode !== 'read') return;
    /**
     * Support cascader fieldNames
     *
     * @see https://ant.design/components/cascader-cn/#header
     */
    var _ref2 = ((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.fieldNames) || {},
      _ref2$value = _ref2.value,
      valuePropsName = _ref2$value === void 0 ? 'value' : _ref2$value,
      _ref2$label = _ref2.label,
      labelPropsName = _ref2$label === void 0 ? 'label' : _ref2$label,
      _ref2$children = _ref2.children,
      childrenPropsName = _ref2$children === void 0 ? 'children' : _ref2$children;
    var valuesMap = new Map();
    var traverseOptions = function traverseOptions(_options) {
      if (!(_options !== null && _options !== void 0 && _options.length)) {
        return valuesMap;
      }
      var length = _options.length;
      var i = 0;
      while (i < length) {
        var cur = _options[i++];
        valuesMap.set(cur[valuePropsName], cur[labelPropsName]);
        traverseOptions(cur[childrenPropsName]);
      }
      return valuesMap;
    };
    return traverseOptions(options);
  }, [mode, options, (_rest$fieldProps2 = rest.fieldProps) === null || _rest$fieldProps2 === void 0 ? void 0 : _rest$fieldProps2.fieldNames]);
  if (mode === 'read') {
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _proUtils.proFieldParsingText)(rest.text, (0, _proUtils.objectToMap)(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, (0, _objectSpread2.default)({
        mode: mode
      }, rest.fieldProps), dom)) !== null && _render !== void 0 ? _render : null;
    }
    return dom;
  }
  if (mode === 'edit') {
    var _rest$fieldProps3, _rest$fieldProps5;
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Cascader, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, (0, _proUtils.compatibleBorder)(!light)), {}, {
      ref: cascaderRef,
      open: open,
      suffixIcon: loading ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.LoadingOutlined, {}) : undefined,
      placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择'),
      allowClear: ((_rest$fieldProps3 = rest.fieldProps) === null || _rest$fieldProps3 === void 0 ? void 0 : _rest$fieldProps3.allowClear) !== false
    }, rest.fieldProps), {}, {
      onDropdownVisibleChange: function onDropdownVisibleChange(isOpen) {
        var _rest$fieldProps4, _rest$fieldProps4$onD;
        rest === null || rest === void 0 || (_rest$fieldProps4 = rest.fieldProps) === null || _rest$fieldProps4 === void 0 || (_rest$fieldProps4$onD = _rest$fieldProps4.onDropdownVisibleChange) === null || _rest$fieldProps4$onD === void 0 || _rest$fieldProps4$onD.call(_rest$fieldProps4, isOpen);
        setOpen(isOpen);
      },
      className: (0, _classnames.default)((_rest$fieldProps5 = rest.fieldProps) === null || _rest$fieldProps5 === void 0 ? void 0 : _rest$fieldProps5.className, layoutClassName),
      options: options
    }));
    if (renderFormItem) {
      var _renderFormItem;
      _dom = (_renderFormItem = renderFormItem(rest.text, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        mode: mode
      }, rest.fieldProps), {}, {
        options: options,
        loading: loading
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    if (light) {
      var _rest$fieldProps6 = rest.fieldProps,
        disabled = _rest$fieldProps6.disabled,
        value = _rest$fieldProps6.value;
      var notEmpty = !!value && (value === null || value === void 0 ? void 0 : value.length) !== 0;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.FieldLabel, {
        label: label,
        disabled: disabled,
        bordered: rest.bordered,
        value: notEmpty || open ? _dom : null,
        style: notEmpty ? {
          paddingInlineEnd: 0
        } : undefined,
        allowClear: false,
        downIcon: notEmpty || open ? false : undefined,
        onClick: function onClick() {
          var _rest$fieldProps7, _rest$fieldProps7$onD;
          setOpen(true);
          rest === null || rest === void 0 || (_rest$fieldProps7 = rest.fieldProps) === null || _rest$fieldProps7 === void 0 || (_rest$fieldProps7$onD = _rest$fieldProps7.onDropdownVisibleChange) === null || _rest$fieldProps7$onD === void 0 || _rest$fieldProps7$onD.call(_rest$fieldProps7, true);
        }
      });
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldCascader);