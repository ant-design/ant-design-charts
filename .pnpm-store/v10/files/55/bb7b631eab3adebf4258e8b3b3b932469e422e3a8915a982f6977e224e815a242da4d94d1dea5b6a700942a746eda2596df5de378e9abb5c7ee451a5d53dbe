"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _Select = require("../Select");
var _proProvider = require("@ant-design/pro-provider");
require("antd/lib/checkbox/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["layout", "renderFormItem", "mode", "render"],
  _excluded2 = ["fieldNames"]; // 兼容代码-----------
//----------------------
/**
 * 多选组件
 *
 * @param param0
 * @param ref
 */
var FieldCheckbox = function FieldCheckbox(_ref, ref) {
  var _Form$Item, _Form$Item$useStatus;
  var _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'horizontal' : _ref$layout,
    renderFormItem = _ref.renderFormItem,
    mode = _ref.mode,
    render = _ref.render,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-checkbox');
  var status = (_Form$Item = _antd.Form.Item) === null || _Form$Item === void 0 || (_Form$Item$useStatus = _Form$Item.useStatus) === null || _Form$Item$useStatus === void 0 ? void 0 : _Form$Item$useStatus.call(_Form$Item);
  var _useFieldFetchData = (0, _Select.useFieldFetchData)(rest),
    _useFieldFetchData2 = (0, _slicedToArray2.default)(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  // css
  var _useStyle = (0, _proUtils.useStyle)('Checkbox', function (token) {
      return (0, _defineProperty2.default)({}, ".".concat(layoutClassName), {
        '&-error': {
          span: {
            color: token.colorError
          }
        },
        '&-warning': {
          span: {
            color: token.colorWarning
          }
        },
        '&-vertical': (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "&".concat(token.antCls, "-checkbox-group"), {
          display: 'inline-block'
        }), "".concat(token.antCls, "-checkbox-wrapper+").concat(token.antCls, "-checkbox-wrapper"), {
          'margin-inline-start': '0  !important'
        }), "".concat(token.antCls, "-checkbox-group-item"), {
          display: 'flex',
          marginInlineEnd: 0
        })
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useToken = _proProvider.useToken === null || _proProvider.useToken === void 0 ? void 0 : (0, _proProvider.useToken)(),
    token = _useToken.token;
  var checkBoxRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, checkBoxRef.current || {}), {}, {
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
      var _ref3;
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, pre), {}, (0, _defineProperty2.default)({}, (_ref3 = cur.value) !== null && _ref3 !== void 0 ? _ref3 : '', cur.label));
    }, {}) : undefined;
    var dom = (0, _proUtils.proFieldParsingText)(rest.text, (0, _proUtils.objectToMap)(rest.valueEnum || optionsValueEnum));
    if (render) {
      var _render;
      return (_render = render(rest.text, (0, _objectSpread3.default)({
        mode: mode
      }, rest.fieldProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: dom
      }))) !== null && _render !== void 0 ? _render : null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: token.marginSM
      },
      children: dom
    });
  }
  if (mode === 'edit') {
    var _rest$fieldProps;
    var _ref4 = rest.fieldProps || {},
      fieldNames = _ref4.fieldNames,
      restFieldProps = (0, _objectWithoutProperties2.default)(_ref4, _excluded2);
    var _dom = wrapSSR(
    /*#__PURE__*/
    //@ts-ignore
    (0, _jsxRuntime.jsx)(_antd.Checkbox.Group, (0, _objectSpread3.default)((0, _objectSpread3.default)({}, restFieldProps), {}, {
      className: (0, _classnames.default)((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.className, hashId, "".concat(layoutClassName, "-").concat(layout), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(layoutClassName, "-error"), (status === null || status === void 0 ? void 0 : status.status) === 'error'), "".concat(layoutClassName, "-warning"), (status === null || status === void 0 ? void 0 : status.status) === 'warning')),
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
var _default = exports.default = /*#__PURE__*/_react.default.forwardRef(FieldCheckbox);