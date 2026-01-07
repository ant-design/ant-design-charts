import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["mode", "render", "renderFormItem", "fieldProps", "emptyText"];
import { Segmented, Spin } from 'antd';
import omit from "rc-util/es/omit";
import React, { useImperativeHandle, useRef } from 'react';
import { useFieldFetchData } from "../Select";
import { objectToMap, proFieldParsingText } from '@ant-design/pro-utils';
import "antd/es/segmented/style";
import "antd/es/spin/style";

/**
 * Segmented https://ant.design/components/segmented-cn/
 *
 * @param
 */
import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
var FieldSegmented = function FieldSegmented(props, ref) {
  var mode = props.mode,
    render = props.render,
    renderFormItem = props.renderFormItem,
    fieldProps = props.fieldProps,
    _props$emptyText = props.emptyText,
    emptyText = _props$emptyText === void 0 ? '-' : _props$emptyText,
    rest = _objectWithoutProperties(props, _excluded);
  var inputRef = useRef();
  var _useFieldFetchData = useFieldFetchData(props),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, inputRef.current || {}), {}, {
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
      var _ref;
      return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, (_ref = cur.value) !== null && _ref !== void 0 ? _ref : '', cur.label));
    }, {}) : undefined;
    var dom = /*#__PURE__*/_jsx(_Fragment, {
      children: proFieldParsingText(rest.text, objectToMap(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, _objectSpread({
        mode: mode
      }, fieldProps), /*#__PURE__*/_jsx(_Fragment, {
        children: dom
      }))) !== null && _render !== void 0 ? _render : emptyText;
    }
    return dom;
  }
  if (mode === 'edit' || mode === 'update') {
    var _dom = /*#__PURE__*/_jsx(Segmented, _objectSpread(_objectSpread({
      ref: inputRef
    }, omit(fieldProps || {}, ['allowClear'])), {}, {
      options: options
    }));
    if (renderFormItem) {
      return renderFormItem(rest.text, _objectSpread(_objectSpread({
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
export default /*#__PURE__*/React.forwardRef(FieldSegmented);