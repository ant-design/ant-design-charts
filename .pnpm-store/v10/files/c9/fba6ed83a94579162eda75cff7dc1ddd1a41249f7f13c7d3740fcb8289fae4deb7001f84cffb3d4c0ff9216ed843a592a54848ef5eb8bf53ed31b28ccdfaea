import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["layout", "renderFormItem", "mode", "render"],
  _excluded2 = ["fieldNames"];
import { objectToMap, proFieldParsingText, useStyle } from '@ant-design/pro-utils';
import { Checkbox, ConfigProvider, Form, Spin } from 'antd';
import classNames from 'classnames';
import React, { useContext, useImperativeHandle, useRef } from 'react';
import { useFieldFetchData } from "../Select";
// 兼容代码-----------
import { useToken } from '@ant-design/pro-provider';
import "antd/es/checkbox/style";
//----------------------
/**
 * 多选组件
 *
 * @param param0
 * @param ref
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var FieldCheckbox = function FieldCheckbox(_ref, ref) {
  var _Form$Item, _Form$Item$useStatus;
  var _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? 'horizontal' : _ref$layout,
    renderFormItem = _ref.renderFormItem,
    mode = _ref.mode,
    render = _ref.render,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-checkbox');
  var status = (_Form$Item = Form.Item) === null || _Form$Item === void 0 || (_Form$Item$useStatus = _Form$Item.useStatus) === null || _Form$Item$useStatus === void 0 ? void 0 : _Form$Item$useStatus.call(_Form$Item);
  var _useFieldFetchData = useFieldFetchData(rest),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  // css
  var _useStyle = useStyle('Checkbox', function (token) {
      return _defineProperty({}, ".".concat(layoutClassName), {
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
        '&-vertical': _defineProperty(_defineProperty(_defineProperty({}, "&".concat(token.antCls, "-checkbox-group"), {
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
  var _useToken = useToken === null || useToken === void 0 ? void 0 : useToken(),
    token = _useToken.token;
  var checkBoxRef = useRef();
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, checkBoxRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);
  if (loading) {
    return /*#__PURE__*/_jsx(Spin, {
      size: "small"
    });
  }
  if (mode === 'read') {
    var optionsValueEnum = options !== null && options !== void 0 && options.length ? options === null || options === void 0 ? void 0 : options.reduce(function (pre, cur) {
      var _ref3;
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, (_ref3 = cur.value) !== null && _ref3 !== void 0 ? _ref3 : '', cur.label));
    }, {}) : undefined;
    var dom = proFieldParsingText(rest.text, objectToMap(rest.valueEnum || optionsValueEnum));
    if (render) {
      var _render;
      return (_render = render(rest.text, _objectSpread({
        mode: mode
      }, rest.fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }))) !== null && _render !== void 0 ? _render : null;
    }
    return /*#__PURE__*/_jsx("div", {
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
      restFieldProps = _objectWithoutProperties(_ref4, _excluded2);
    var _dom = wrapSSR(
    /*#__PURE__*/
    //@ts-ignore
    _jsx(Checkbox.Group, _objectSpread(_objectSpread({}, restFieldProps), {}, {
      className: classNames((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.className, hashId, "".concat(layoutClassName, "-").concat(layout), _defineProperty(_defineProperty({}, "".concat(layoutClassName, "-error"), (status === null || status === void 0 ? void 0 : status.status) === 'error'), "".concat(layoutClassName, "-warning"), (status === null || status === void 0 ? void 0 : status.status) === 'warning')),
      options: options
    })));
    if (renderFormItem) {
      var _renderFormItem;
      return (_renderFormItem = renderFormItem(rest.text, _objectSpread(_objectSpread({
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
export default /*#__PURE__*/React.forwardRef(FieldCheckbox);