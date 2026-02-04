import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["radioType", "renderFormItem", "mode", "render"];
import { objectToMap, proFieldParsingText, useStyle } from '@ant-design/pro-utils';
import { ConfigProvider, Form, Radio, Spin } from 'antd';
import classNames from 'classnames';
import React, { useContext, useImperativeHandle, useRef } from 'react';
import { useFieldFetchData } from "../Select";

// 兼容代码-----------
import "antd/es/radio/style";
//------------
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
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
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-radio');
  var _useFieldFetchData = useFieldFetchData(rest),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  var radioRef = useRef();
  var status = (_Form$Item = Form.Item) === null || _Form$Item === void 0 || (_Form$Item$useStatus = _Form$Item.useStatus) === null || _Form$Item$useStatus === void 0 ? void 0 : _Form$Item$useStatus.call(_Form$Item);
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, radioRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);

  // css
  var _useStyle = useStyle('FieldRadioRadio', function (token) {
      return _defineProperty(_defineProperty(_defineProperty({}, ".".concat(layoutClassName, "-error"), {
        span: {
          color: token.colorError
        }
      }), ".".concat(layoutClassName, "-warning"), {
        span: {
          color: token.colorWarning
        }
      }), ".".concat(layoutClassName, "-vertical"), _defineProperty({}, "".concat(token.antCls, "-radio-wrapper"), {
        display: 'flex',
        marginInlineEnd: 0
      }));
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
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
    var dom = /*#__PURE__*/_jsx(_Fragment, {
      children: proFieldParsingText(rest.text, objectToMap(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, _objectSpread({
        mode: mode
      }, rest.fieldProps), dom)) !== null && _render !== void 0 ? _render : null;
    }
    return dom;
  }
  if (mode === 'edit') {
    var _rest$fieldProps;
    var _dom = wrapSSR( /*#__PURE__*/_jsx(Radio.Group, _objectSpread(_objectSpread({
      ref: radioRef,
      optionType: radioType
    }, rest.fieldProps), {}, {
      className: classNames((_rest$fieldProps = rest.fieldProps) === null || _rest$fieldProps === void 0 ? void 0 : _rest$fieldProps.className, _defineProperty(_defineProperty({}, "".concat(layoutClassName, "-error"), (status === null || status === void 0 ? void 0 : status.status) === 'error'), "".concat(layoutClassName, "-warning"), (status === null || status === void 0 ? void 0 : status.status) === 'warning'), hashId, "".concat(layoutClassName, "-").concat(rest.fieldProps.layout || 'horizontal')),
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
export default /*#__PURE__*/React.forwardRef(FieldRadio);