import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["radioType", "renderFormItem", "mode", "render", "label", "light"];
import { LoadingOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, compatibleBorder, objectToMap, proFieldParsingText } from '@ant-design/pro-utils';
import { Cascader, ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useFieldFetchData } from "../Select";

// 兼容代码-----------
import "antd/es/cascader/style";
//----------------------
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
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
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-cascader');
  var _useFieldFetchData = useFieldFetchData(rest),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  var intl = useIntl();
  var cascaderRef = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, cascaderRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  }, [_fetchData]);
  var optionsValueEnum = useMemo(function () {
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
    var _rest$fieldProps3, _rest$fieldProps5;
    var _dom = /*#__PURE__*/_jsx(Cascader, _objectSpread(_objectSpread(_objectSpread({}, compatibleBorder(!light)), {}, {
      ref: cascaderRef,
      open: open,
      suffixIcon: loading ? /*#__PURE__*/_jsx(LoadingOutlined, {}) : undefined,
      placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择'),
      allowClear: ((_rest$fieldProps3 = rest.fieldProps) === null || _rest$fieldProps3 === void 0 ? void 0 : _rest$fieldProps3.allowClear) !== false
    }, rest.fieldProps), {}, {
      onDropdownVisibleChange: function onDropdownVisibleChange(isOpen) {
        var _rest$fieldProps4, _rest$fieldProps4$onD;
        rest === null || rest === void 0 || (_rest$fieldProps4 = rest.fieldProps) === null || _rest$fieldProps4 === void 0 || (_rest$fieldProps4$onD = _rest$fieldProps4.onDropdownVisibleChange) === null || _rest$fieldProps4$onD === void 0 || _rest$fieldProps4$onD.call(_rest$fieldProps4, isOpen);
        setOpen(isOpen);
      },
      className: classNames((_rest$fieldProps5 = rest.fieldProps) === null || _rest$fieldProps5 === void 0 ? void 0 : _rest$fieldProps5.className, layoutClassName),
      options: options
    }));
    if (renderFormItem) {
      var _renderFormItem;
      _dom = (_renderFormItem = renderFormItem(rest.text, _objectSpread(_objectSpread({
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
      return /*#__PURE__*/_jsx(FieldLabel, {
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
export default /*#__PURE__*/React.forwardRef(FieldCascader);