import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { isDeepEqualReact, omitUndefined } from '@ant-design/pro-utils';
import omit from "rc-util/es/omit";
import React from 'react';
import { isBordered } from "../../utils/index";
import FormRender from "./FormRender";
import { jsx as _jsx } from "react/jsx-runtime";
var FormSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(FormSearch, _React$Component);
  var _super = _createSuper(FormSearch);
  function FormSearch() {
    var _this;
    _classCallCheck(this, FormSearch);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    /** 查询表单相关的配置 */
    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (value, firstLoad) {
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
      var pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      var submitParams = _objectSpread(_objectSpread({}, value), {}, {
        _timestamp: Date.now()
      }, pageInfo);
      var omitParams = omit(beforeSearchSubmit(submitParams), Object.keys(pageInfo));
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
    _defineProperty(_assertThisInitialized(_this), "onReset", function (value) {
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
      var pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      var omitParams = omit(beforeSearchSubmit(_objectSpread(_objectSpread({}, value), pageInfo)), Object.keys(pageInfo));
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
    _defineProperty(_assertThisInitialized(_this), "isEqual", function (next) {
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
      return !isDeepEqualReact(diffProps, {
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
    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (next) {
      return _this.isEqual(next);
    });
    _defineProperty(_assertThisInitialized(_this), "render", function () {
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
      var pageInfo = pagination ? omitUndefined({
        current: pagination.current,
        pageSize: pagination.pageSize
      }) : {};
      return /*#__PURE__*/_jsx(FormRender, {
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
        form: _objectSpread(_objectSpread({
          autoFocusFirstInput: false
        }, form), {}, {
          extraUrlParams: _objectSpread(_objectSpread({}, pageInfo), form === null || form === void 0 ? void 0 : form.extraUrlParams)
        }),
        action: action,
        bordered: isBordered('search', cardBordered)
      });
    });
    return _this;
  }
  return _createClass(FormSearch);
}(React.Component);
export default FormSearch;