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
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _Select = require("../Select");
require("antd/lib/radio/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["radioType", "renderFormItem", "mode", "render"]; // 兼容代码-----------
//------------
/**
 * 单选组件
 *
 * @param param0
 * @param ref
 */
var FieldRadio = function FieldRadio(_ref, ref) {
  var _Form$Item, _Form$Item$useStatus;
  var radioType = _ref.radioType,
    renderFormItem = _ref.renderFormItem,
    mode = _ref.mode,
    render = _ref.render,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-radio');
  var _useFieldFetchData = (0, _Select.useFieldFetchData)(rest),
    _useFieldFetchData2 = (0, _slicedToArray2.default)(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  var radioRef = (0, _react.useRef)();
  var status = (_Form$Item = _antd.Form.Item) === null || _Form$Item === void 0 || (_Form$Item$useStatus = _Form$Item.useStatus) === null || _Form$Item$useStatus === void 0 ? void 0 : _Form$Item$useStatus.call(_Form$Item);
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, radioRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);

  // css
  var _useStyle = (0, _proUtils.useStyle)('FieldRadioRadio', function (token) {
      return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, ".".concat(layoutClassName, "-error"), {
        span: {
          color: token.colorError
        }
      }), ".".concat(layoutClassName, "-warning"), {
        span: {
          color: token.colorWarning
        }
      }), ".".concat(layoutClassName, "-vertical"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-radio-wrapper"), {
        display: 'flex',
        marginInlineEnd: 0
      }));
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {
      size: "small"
    });
  }
  if (mode === 'read') {
    var optionsValueEnum = options !== null && options !== void 0 && options.length ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      var _ref3;
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, pre), {}, (0, _defineProperty2.default)({}, (_ref3 = cur.value) !== null && _ref3 !== void 0 ? _ref3 : '', cur.label));
    }, {}) : undefined;
    var dom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: (0, _proUtils.proFieldParsingText)(rest.text, (0, _proUtils.objectToMap)(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, (0, _objectSpread3.default)({
        mode: mode
      }, rest.fieldProps), dom)) !== null && _render !== void 0 ? _render : null;
    }
    return dom;
  }
  if (mode === 'edit') {
    var _rest$fieldProps;
    var _dom = wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Radio.Group, (0, _objectSpread3.default)((0, _objectSpread3.default)({
      ref: radioRef,
      optionType: radioType
    }, rest.fieldProps), {}, {
      className: (0, _classnames.default)((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.className, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(layoutClassName, "-error"), (status === null || status === void 0 ? void 0 : status.status) === 'error'), "".concat(layoutClassName, "-warning"), (status === null || status === void 0 ? void 0 : status.status) === 'warning'), hashId, "".concat(layoutClassName, "-").concat(rest.fieldProps.layout || 'horizontal')),
      options: options
    })));
    if (renderFormItem) {
      var _renderFormItem;
      return (_renderFormItem = renderFormItem(rest.text, (0, _objectSpread3.default)((0, _objectSpread3.default)({
        mode: mode
      }, rest.fieldProps), {}, {
        options: options,
        loading: loading
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    return _dom;
  }
  return null;
};
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldRadio);