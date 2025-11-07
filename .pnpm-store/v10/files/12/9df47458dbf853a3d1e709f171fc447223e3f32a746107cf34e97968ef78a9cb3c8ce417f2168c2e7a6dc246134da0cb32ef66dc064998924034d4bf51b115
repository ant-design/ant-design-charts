"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proUtils = require("@ant-design/pro-utils");
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireDefault(require("react"));
var _index = require("../../utils/index");
var _FormRender = _interopRequireDefault(require("./FormRender"));
var _jsxRuntime = require("react/jsx-runtime");
var FormSearch = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(FormSearch, _React$Component);
  var _super = (0, _createSuper2.default)(FormSearch);
  function FormSearch() {
    var _this;
    (0, _classCallCheck2.default)(this, FormSearch);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    /** 查询表单相关的配置 */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function (value, firstLoad) {
      var _this$props = _this.props,
        pagination = _this$props.pagination,
        _this$props$beforeSea = _this$props.beforeSearchSubmit,
        beforeSearchSubmit = _this$props$beforeSea === void 0 ? function (searchParams) {
          return searchParams;
        } : _this$props$beforeSea,
        action = _this$props.action,
        onSubmit = _this$props.onSubmit,
        onFormSearchSubmit = _this$props.onFormSearchSubmit;
      // 只传入 pagination 中的 current 和 pageSize 参数
      var pageInfo = pagination ? (0, _proUtils.omitUndefined)({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      var submitParams = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), {}, {
        _timestamp: Date.now()
      }, pageInfo);
      var omitParams = (0, _omit.default)(beforeSearchSubmit(submitParams), Object.keys(pageInfo));
      onFormSearchSubmit(omitParams);
      if (!firstLoad) {
        var _action$current, _action$current$setPa;
        // back first page
        (_action$current = action.current) === null || _action$current === void 0 || (_action$current$setPa = _action$current.setPageInfo) === null || _action$current$setPa === void 0 || _action$current$setPa.call(_action$current, {
          current: 1
        });
      }
      // 不是第一次提交就不触发，第一次提交是 js 触发的
      // 为了解决 https://github.com/ant-design/pro-components/issues/579
      if (onSubmit && !firstLoad) {
        onSubmit === null || onSubmit === void 0 || onSubmit(value);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onReset", function (value) {
      var _action$current2, _action$current2$setP;
      var _this$props2 = _this.props,
        pagination = _this$props2.pagination,
        _this$props2$beforeSe = _this$props2.beforeSearchSubmit,
        beforeSearchSubmit = _this$props2$beforeSe === void 0 ? function (searchParams) {
          return searchParams;
        } : _this$props2$beforeSe,
        action = _this$props2.action,
        onFormSearchSubmit = _this$props2.onFormSearchSubmit,
        onReset = _this$props2.onReset;
      var pageInfo = pagination ? (0, _proUtils.omitUndefined)({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      var omitParams = (0, _omit.default)(beforeSearchSubmit((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), pageInfo)), Object.keys(pageInfo));
      onFormSearchSubmit(omitParams);
      // back first page
      (_action$current2 = action.current) === null || _action$current2 === void 0 || (_action$current2$setP = _action$current2.setPageInfo) === null || _action$current2$setP === void 0 || _action$current2$setP.call(_action$current2, {
        current: 1
      });
      onReset === null || onReset === void 0 || onReset();
    });
    /**
     * 只 Diff 需要用的 props，能减少 5 次左右的render
     *
     * @param next
     * @see 因为 hooks 每次的 setFormSearch 都是新的，所以每次都触发 render
     * @see action 也是同样的原因
     * @returns
     */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isEqual", function (next) {
      var _this$props3 = _this.props,
        columns = _this$props3.columns,
        loading = _this$props3.loading,
        formRef = _this$props3.formRef,
        type = _this$props3.type,
        cardBordered = _this$props3.cardBordered,
        dateFormatter = _this$props3.dateFormatter,
        form = _this$props3.form,
        search = _this$props3.search,
        manualRequest = _this$props3.manualRequest;
      var diffProps = {
        columns: columns,
        loading: loading,
        formRef: formRef,
        type: type,
        cardBordered: cardBordered,
        dateFormatter: dateFormatter,
        form: form,
        search: search,
        manualRequest: manualRequest
      };
      return !(0, _proUtils.isDeepEqualReact)(diffProps, {
        columns: next.columns,
        formRef: next.formRef,
        loading: next.loading,
        type: next.type,
        cardBordered: next.cardBordered,
        dateFormatter: next.dateFormatter,
        form: next.form,
        search: next.search,
        manualRequest: next.manualRequest
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shouldComponentUpdate", function (next) {
      return _this.isEqual(next);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
      var _this$props4 = _this.props,
        columns = _this$props4.columns,
        loading = _this$props4.loading,
        formRef = _this$props4.formRef,
        type = _this$props4.type,
        action = _this$props4.action,
        cardBordered = _this$props4.cardBordered,
        dateFormatter = _this$props4.dateFormatter,
        form = _this$props4.form,
        search = _this$props4.search,
        pagination = _this$props4.pagination,
        ghost = _this$props4.ghost,
        manualRequest = _this$props4.manualRequest;
      var pageInfo = pagination ? (0, _proUtils.omitUndefined)({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormRender.default, {
        submitButtonLoading: loading,
        columns: columns,
        type: type,
        ghost: ghost,
        formRef: formRef,
        onSubmit: _this.onSubmit,
        manualRequest: manualRequest,
        onReset: _this.onReset,
        dateFormatter: dateFormatter,
        search: search,
        form: (0, _objectSpread2.default)((0, _objectSpread2.default)({
          autoFocusFirstInput: false
        }, form), {}, {
          extraUrlParams: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageInfo), form === null || form === void 0 ? void 0 : form.extraUrlParams)
        }),
        action: action,
        bordered: (0, _index.isBordered)('search', cardBordered)
      });
    });
    return _this;
  }
  return (0, _createClass2.default)(FormSearch);
}(_react.default.Component);
var _default = exports.default = FormSearch;