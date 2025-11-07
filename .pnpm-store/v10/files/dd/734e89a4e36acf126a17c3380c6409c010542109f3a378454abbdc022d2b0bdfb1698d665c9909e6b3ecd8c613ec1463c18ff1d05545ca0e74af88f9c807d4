import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["radioType", "renderFormItem", "mode", "light", "label", "render"],
  _excluded2 = ["onSearch", "onClear", "onChange", "onBlur", "showSearch", "autoClearSearchValue", "treeData", "fetchDataOnSearch", "searchValue"];
import { useIntl } from '@ant-design/pro-provider';
import { FieldLabel, objectToMap, proFieldParsingText } from '@ant-design/pro-utils';
import { ConfigProvider, Spin, TreeSelect } from 'antd';
import classNames from 'classnames';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useFieldFetchData } from "../Select";

// 兼容代码-----------
import "antd/es/spin/style";
import "antd/es/tree-select/style";
//----------------------
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Tree select
 * A function that returns a React component.
 * @param ref
 */
var FieldTreeSelect = function FieldTreeSelect(_ref, ref) {
  var radioType = _ref.radioType,
    renderFormItem = _ref.renderFormItem,
    mode = _ref.mode,
    light = _ref.light,
    label = _ref.label,
    render = _ref.render,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var layoutClassName = getPrefixCls('pro-field-tree-select');
  var treeSelectRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _ref2 = rest.fieldProps,
    onSearch = _ref2.onSearch,
    _onClear = _ref2.onClear,
    propsOnChange = _ref2.onChange,
    _onBlur = _ref2.onBlur,
    showSearch = _ref2.showSearch,
    autoClearSearchValue = _ref2.autoClearSearchValue,
    treeData = _ref2.treeData,
    fetchDataOnSearch = _ref2.fetchDataOnSearch,
    propsSearchValue = _ref2.searchValue,
    fieldProps = _objectWithoutProperties(_ref2, _excluded2);
  var intl = useIntl();
  var _useFieldFetchData = useFieldFetchData(_objectSpread(_objectSpread({}, rest), {}, {
      defaultKeyWords: propsSearchValue
    })),
    _useFieldFetchData2 = _slicedToArray(_useFieldFetchData, 3),
    loading = _useFieldFetchData2[0],
    options = _useFieldFetchData2[1],
    _fetchData = _useFieldFetchData2[2];
  var _useMergedState = useMergedState(undefined, {
      onChange: onSearch,
      value: propsSearchValue
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    searchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];
  useImperativeHandle(ref, function () {
    return _objectSpread(_objectSpread({}, treeSelectRef.current || {}), {}, {
      fetchData: function fetchData(keyWord) {
        return _fetchData(keyWord);
      }
    });
  });
  var optionsValueEnum = useMemo(function () {
    if (mode !== 'read') return;
    /**
     * Support TreeSelect fieldNames
     * @see https://ant.design/components/tree-select-cn
     */
    var _ref3 = (fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.fieldNames) || {},
      _ref3$value = _ref3.value,
      valuePropsName = _ref3$value === void 0 ? 'value' : _ref3$value,
      _ref3$label = _ref3.label,
      labelPropsName = _ref3$label === void 0 ? 'label' : _ref3$label,
      _ref3$children = _ref3.children,
      childrenPropsName = _ref3$children === void 0 ? 'children' : _ref3$children;
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
  }, [fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.fieldNames, mode, options]);
  var onChange = function onChange(value, optionList, extra) {
    // 将搜索框置空 和 antd 行为保持一致
    if (showSearch && autoClearSearchValue) {
      _fetchData(undefined);
      setSearchValue(undefined);
    }
    propsOnChange === null || propsOnChange === void 0 || propsOnChange(value, optionList, extra);
  };
  if (mode === 'read') {
    var dom = /*#__PURE__*/_jsx(_Fragment, {
      children: proFieldParsingText(rest.text, objectToMap(rest.valueEnum || optionsValueEnum))
    });
    if (render) {
      var _render;
      return (_render = render(rest.text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        treeData: options
      }), dom)) !== null && _render !== void 0 ? _render : null;
    }
    return dom;
  }
  if (mode === 'edit') {
    var _fieldProps$value;
    var valuesLength = Array.isArray(fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.value) ? fieldProps === null || fieldProps === void 0 || (_fieldProps$value = fieldProps.value) === null || _fieldProps$value === void 0 ? void 0 : _fieldProps$value.length : 0;
    var _dom = /*#__PURE__*/_jsx(Spin, {
      spinning: loading,
      children: /*#__PURE__*/_jsx(TreeSelect, _objectSpread(_objectSpread({
        open: open,
        onDropdownVisibleChange: function onDropdownVisibleChange(isOpen) {
          var _fieldProps$onDropdow;
          fieldProps === null || fieldProps === void 0 || (_fieldProps$onDropdow = fieldProps.onDropdownVisibleChange) === null || _fieldProps$onDropdow === void 0 || _fieldProps$onDropdow.call(fieldProps, isOpen);
          setOpen(isOpen);
        },
        ref: treeSelectRef,
        popupMatchSelectWidth: !light,
        placeholder: intl.getMessage('tableForm.selectPlaceholder', '请选择'),
        tagRender: light ? function (item) {
          var _fieldProps$value2;
          if (valuesLength < 2) return /*#__PURE__*/_jsx(_Fragment, {
            children: item.label
          });
          /**
           * 性能不好，等我给 antd 提个issue
           */
          var itemIndex = fieldProps === null || fieldProps === void 0 || (_fieldProps$value2 = fieldProps.value) === null || _fieldProps$value2 === void 0 ? void 0 : _fieldProps$value2.findIndex(function (v) {
            return v === item.value || v.value === item.value;
          });
          return /*#__PURE__*/_jsxs(_Fragment, {
            children: [item.label, " ", itemIndex < valuesLength - 1 ? ',' : '']
          });
        } : undefined,
        bordered: !light
      }, fieldProps), {}, {
        treeData: options,
        showSearch: showSearch,
        style: _objectSpread({
          minWidth: 60
        }, fieldProps.style),
        allowClear: fieldProps.allowClear !== false,
        searchValue: searchValue,
        autoClearSearchValue: autoClearSearchValue,
        onClear: function onClear() {
          _onClear === null || _onClear === void 0 || _onClear();
          _fetchData(undefined);
          if (showSearch) {
            setSearchValue(undefined);
          }
        },
        onChange: onChange,
        onSearch: function onSearch(value) {
          // fix 不支持请求的情况下不刷新options
          if (fetchDataOnSearch && rest !== null && rest !== void 0 && rest.request) {
            _fetchData(value);
          }
          setSearchValue(value);
        },
        onBlur: function onBlur(event) {
          setSearchValue(undefined);
          _fetchData(undefined);
          _onBlur === null || _onBlur === void 0 || _onBlur(event);
        },
        className: classNames(fieldProps === null || fieldProps === void 0 ? void 0 : fieldProps.className, layoutClassName)
      }))
    });
    if (renderFormItem) {
      var _renderFormItem;
      _dom = (_renderFormItem = renderFormItem(rest.text, _objectSpread(_objectSpread({
        mode: mode
      }, fieldProps), {}, {
        options: options,
        loading: loading
      }), _dom)) !== null && _renderFormItem !== void 0 ? _renderFormItem : null;
    }
    if (light) {
      var _fieldProps$value3;
      var disabled = fieldProps.disabled,
        placeholder = fieldProps.placeholder;
      var notEmpty = !!fieldProps.value && ((_fieldProps$value3 = fieldProps.value) === null || _fieldProps$value3 === void 0 ? void 0 : _fieldProps$value3.length) !== 0;
      return /*#__PURE__*/_jsx(FieldLabel, {
        label: label,
        disabled: disabled,
        placeholder: placeholder,
        onClick: function onClick() {
          var _fieldProps$onDropdow2;
          setOpen(true);
          fieldProps === null || fieldProps === void 0 || (_fieldProps$onDropdow2 = fieldProps.onDropdownVisibleChange) === null || _fieldProps$onDropdow2 === void 0 || _fieldProps$onDropdow2.call(fieldProps, true);
        },
        bordered: rest.bordered,
        value: notEmpty || open ? _dom : null,
        style: notEmpty ? {
          paddingInlineEnd: 0
        } : undefined,
        allowClear: false,
        downIcon: false
      });
    }
    return _dom;
  }
  return null;
};
export default /*#__PURE__*/React.forwardRef(FieldTreeSelect);