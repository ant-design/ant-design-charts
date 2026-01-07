import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _typeof from "@babel/runtime/helpers/esm/typeof";
var _excluded = ["label", "prefixCls", "onChange", "value", "mode", "children", "defaultValue", "size", "showSearch", "disabled", "style", "className", "bordered", "options", "onSearch", "allowClear", "labelInValue", "fieldNames", "lightLabel", "labelTrigger", "optionFilterProp", "optionLabelProp", "valueMaxLength", "fetchDataOnSearch", "fetchData"];
import { SearchOutlined } from '@ant-design/icons';
import { FieldLabel, compatibleBorder, useStyle } from '@ant-design/pro-utils';
import { ConfigProvider, Input, Select } from 'antd';
import classNames from 'classnames';
import toArray from "rc-util/es/Children/toArray";
import React, { useContext, useMemo, useState } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
/**
 * 如果有 label 就优先使用 label
 *
 * @param valueMap
 * @param v
 */
var getValueOrLabel = function getValueOrLabel(valueMap, v) {
  if (_typeof(v) !== 'object') {
    return valueMap[v] || v;
  }
  return valueMap[v === null || v === void 0 ? void 0 : v.value] || v.label;
};
var LightSelect = function LightSelect(props, ref) {
  var label = props.label,
    customizePrefixCls = props.prefixCls,
    _onChange = props.onChange,
    value = props.value,
    mode = props.mode,
    children = props.children,
    defaultValue = props.defaultValue,
    size = props.size,
    showSearch = props.showSearch,
    disabled = props.disabled,
    style = props.style,
    className = props.className,
    bordered = props.bordered,
    options = props.options,
    onSearch = props.onSearch,
    allowClear = props.allowClear,
    labelInValue = props.labelInValue,
    fieldNames = props.fieldNames,
    lightLabel = props.lightLabel,
    labelTrigger = props.labelTrigger,
    optionFilterProp = props.optionFilterProp,
    _props$optionLabelPro = props.optionLabelProp,
    optionLabelProp = _props$optionLabelPro === void 0 ? '' : _props$optionLabelPro,
    _props$valueMaxLength = props.valueMaxLength,
    valueMaxLength = _props$valueMaxLength === void 0 ? 41 : _props$valueMaxLength,
    _props$fetchDataOnSea = props.fetchDataOnSearch,
    fetchDataOnSearch = _props$fetchDataOnSea === void 0 ? false : _props$fetchDataOnSea,
    fetchData = props.fetchData,
    restProps = _objectWithoutProperties(props, _excluded);
  var _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? label : _props$placeholder;
  var _ref = fieldNames || {},
    _ref$label = _ref.label,
    labelPropsName = _ref$label === void 0 ? 'label' : _ref$label,
    _ref$value = _ref.value,
    valuePropsName = _ref$value === void 0 ? 'value' : _ref$value;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-field-select-light-select');
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    keyword = _useState4[0],
    setKeyword = _useState4[1];

  // css
  var _useStyle = useStyle('LightSelect', function (token) {
      return _defineProperty({}, ".".concat(prefixCls), _defineProperty(_defineProperty({}, "".concat(token.antCls, "-select"), {
        position: 'absolute',
        width: '153px',
        height: '28px',
        visibility: 'hidden',
        '&-selector': {
          height: 28
        }
      }), "&.".concat(prefixCls, "-searchable"), _defineProperty({}, "".concat(token.antCls, "-select"), {
        width: '200px',
        '&-selector': {
          height: 28
        }
      })));
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var valueMap = useMemo(function () {
    var values = {};
    options === null || options === void 0 || options.forEach(function (item) {
      var optionLabel = item[optionLabelProp] || item[labelPropsName];
      var optionValue = item[valuePropsName];
      values[optionValue] = optionLabel || optionValue;
    });
    return values;
  }, [labelPropsName, options, valuePropsName, optionLabelProp]);

  // 修复用户在使用ProFormSelect组件时，在fieldProps中使用open属性，不生效。
  // ProComponents文档中写到“与select相同，且fieldProps同antd组件中的props”描述方案不相符
  var mergeOpen = useMemo(function () {
    if (Reflect.has(restProps, 'open')) {
      return restProps === null || restProps === void 0 ? void 0 : restProps.open;
    }
    return open;
  }, [open, restProps]);
  var filterValue = Array.isArray(value) ? value.map(function (v) {
    return getValueOrLabel(valueMap, v);
  }) : getValueOrLabel(valueMap, value);
  return wrapSSR( /*#__PURE__*/_jsxs("div", {
    className: classNames(prefixCls, hashId, _defineProperty({}, "".concat(prefixCls, "-searchable"), showSearch), "".concat(prefixCls, "-container-").concat(restProps.placement || 'bottomLeft'), className),
    style: style,
    onClick: function onClick(e) {
      var _lightLabel$current;
      if (disabled) return;
      // 点击label切换下拉菜单
      var isLabelClick = lightLabel === null || lightLabel === void 0 || (_lightLabel$current = lightLabel.current) === null || _lightLabel$current === void 0 || (_lightLabel$current = _lightLabel$current.labelRef) === null || _lightLabel$current === void 0 || (_lightLabel$current = _lightLabel$current.current) === null || _lightLabel$current === void 0 ? void 0 : _lightLabel$current.contains(e.target);
      if (isLabelClick) {
        setOpen(!open);
      } else {
        // 这里注释掉
        /**
         * 因为这里与代码
         *  if (mode !== 'multiple') {
         *   setOpen(false);
         *  }
         * 冲突了，导致这段代码不生效
         */
        // setOpen(true);
      }
    },
    children: [/*#__PURE__*/_jsx(Select
    /**
     * popupMatchSelectWidth写死false会关闭虚拟滚动，数量量过大时，影响组件性能
     * 将此属性注释掉，变成灵活的动态配置
     */
    // popupMatchSelectWidth={false}
    , _objectSpread(_objectSpread(_objectSpread({}, restProps), {}, {
      allowClear: allowClear,
      value: value,
      mode: mode,
      labelInValue: labelInValue,
      size: size,
      disabled: disabled,
      onChange: function onChange(v, option) {
        _onChange === null || _onChange === void 0 || _onChange(v, option);
        if (mode !== 'multiple') {
          setOpen(false);
        }
      }
    }, compatibleBorder(bordered)), {}, {
      showSearch: showSearch,
      onSearch: showSearch ? function (keyValue) {
        if (fetchDataOnSearch && fetchData) {
          fetchData(keyValue);
        }
        onSearch === null || onSearch === void 0 || onSearch(keyValue);
      } : void 0,
      style: style,
      dropdownRender: function dropdownRender(menuNode) {
        return /*#__PURE__*/_jsxs("div", {
          ref: ref,
          children: [showSearch && /*#__PURE__*/_jsx("div", {
            style: {
              margin: '4px 8px'
            },
            children: /*#__PURE__*/_jsx(Input, {
              value: keyword,
              allowClear: !!allowClear,
              onChange: function onChange(e) {
                setKeyword(e.target.value);
                if (fetchDataOnSearch && fetchData) {
                  fetchData(e.target.value);
                }
                onSearch === null || onSearch === void 0 || onSearch(e.target.value);
              },
              onKeyDown: function onKeyDown(e) {
                // 避免按下删除键把选项也删除了
                if (e.key === 'Backspace') {
                  e.stopPropagation();
                  return;
                }
                if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                  e.preventDefault();
                }
              },
              style: {
                width: '100%'
              },
              prefix: /*#__PURE__*/_jsx(SearchOutlined, {})
            })
          }), menuNode]
        });
      },
      open: mergeOpen,
      onDropdownVisibleChange: function onDropdownVisibleChange(isOpen) {
        var _restProps$onDropdown;
        if (!isOpen) {
          //  测试环境下直接跑
          setKeyword('');
        }
        if (!labelTrigger) {
          setOpen(isOpen);
        }
        restProps === null || restProps === void 0 || (_restProps$onDropdown = restProps.onDropdownVisibleChange) === null || _restProps$onDropdown === void 0 || _restProps$onDropdown.call(restProps, isOpen);
      },
      prefixCls: customizePrefixCls,
      options: onSearch || !keyword ? options : options === null || options === void 0 ? void 0 : options.filter(function (o) {
        var _String, _o$valuePropsName;
        if (optionFilterProp) {
          return toArray(o[optionFilterProp]).join('').toLowerCase().includes(keyword);
        }
        return ((_String = String(o[labelPropsName])) === null || _String === void 0 || (_String = _String.toLowerCase()) === null || _String === void 0 ? void 0 : _String.includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase())) || ((_o$valuePropsName = o[valuePropsName]) === null || _o$valuePropsName === void 0 || (_o$valuePropsName = _o$valuePropsName.toString()) === null || _o$valuePropsName === void 0 || (_o$valuePropsName = _o$valuePropsName.toLowerCase()) === null || _o$valuePropsName === void 0 ? void 0 : _o$valuePropsName.includes(keyword === null || keyword === void 0 ? void 0 : keyword.toLowerCase()));
      })
    })), /*#__PURE__*/_jsx(FieldLabel, {
      ellipsis: true,
      label: label,
      placeholder: placeholder,
      disabled: disabled,
      bordered: bordered,
      allowClear: !!allowClear,
      value: filterValue || (value === null || value === void 0 ? void 0 : value.label) || value,
      onClear: function onClear() {
        _onChange === null || _onChange === void 0 || _onChange(undefined, undefined);
      },
      ref: lightLabel,
      valueMaxLength: valueMaxLength
    })]
  }));
};
export default /*#__PURE__*/React.forwardRef(LightSelect);