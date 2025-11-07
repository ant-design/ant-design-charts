"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _antd = require("antd");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _Select = require("../Select");
var _proUtils = require("@ant-design/pro-utils");
require("antd/lib/segmented/style");
require("antd/lib/spin/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["mode", "render", "renderFormItem", "fieldProps", "emptyText"];
/**
 * Segmented https://ant.design/components/segmented-cn/
 *
 * @param
 */
var FieldSegmented = function FieldSegmented(props, ref) {
  var mode = props.mode,
    render = props.render,
    renderFormItem = props.renderFormItem,
    fieldProps = props.fieldProps,
    _props$emptyText = props.emptyText,
    emptyText = _props$emptyText === void 0 ? '-' : _props$emptyText,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var inputRef = (0, _react.useRef)();
  var _useFieldFetchData = (0, _Select.useFieldFetchData)(props),
    _useFieldFetchData2 = (0, _slicedToArray2.default)(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, inputRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);
  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {
      size: "small"
    });
  }
  if (mode === 'read') {
    var optionsValueEnum = options !== null && options !== void 0 && options.length ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      var _ref;
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, pre), {}, (0, _defineProperty2.default)({}, (_ref = cur.value) !== null && _ref !== void 0 ? _ref : '', cur.label));
    }, {}) : undefined;
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _proUtils.proFieldParsingText)(rest.text, (0, _proUtils.objectToMap)(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, (0, _objectSpread3.default)({
        mode: mode
      }, fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }))) !== null && _render !== void 0 ? _render : emptyText;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Segmented, (0, _objectSpread3.default)((0, _objectSpread3.default)({
      ref: inputRef
    }, (0, _omit.default)(fieldProps || {}, ['allowClear'])), {}, {
      options: options
    }));
    if (renderFormItem) {
      return renderFormItem(rest.text, (0, _objectSpread3.default)((0, _objectSpread3.default)({
        mode: mode
      }, fieldProps), {}, {
        options: options,
        loading: loading
      }), _dom);
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldSegmented);