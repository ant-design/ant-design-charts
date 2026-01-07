import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useImperativeHandle, useRef } from 'react';
import { useStyle } from "./style";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
var FieldLabelFunction = function FieldLabelFunction(props, ref) {
  var _ConfigProvider$useCo, _ref2, _props$size;
  var label = props.label,
    onClear = props.onClear,
    value = props.value,
    disabled = props.disabled,
    onLabelClick = props.onLabelClick,
    ellipsis = props.ellipsis,
    placeholder = props.placeholder,
    className = props.className,
    formatter = props.formatter,
    bordered = props.bordered,
    style = props.style,
    downIcon = props.downIcon,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
    _props$valueMaxLength = props.valueMaxLength,
    valueMaxLength = _props$valueMaxLength === void 0 ? 41 : _props$valueMaxLength;
  var _ref = (ConfigProvider === null || ConfigProvider === void 0 || (_ConfigProvider$useCo = ConfigProvider.useConfig) === null || _ConfigProvider$useCo === void 0 ? void 0 : _ConfigProvider$useCo.call(ConfigProvider)) || {
      componentSize: 'middle'
    },
    componentSize = _ref.componentSize;
  var size = componentSize;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-core-field-label');
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var intl = useIntl();
  var clearRef = useRef(null);
  var labelRef = useRef(null);
  useImperativeHandle(ref, function () {
    return {
      labelRef: labelRef,
      clearRef: clearRef
    };
  });
  var wrapElements = function wrapElements(array) {
    if (array.every(function (item) {
      return typeof item === 'string';
    })) return array.join(',');
    return array.map(function (item, index) {
      var comma = index === array.length - 1 ? '' : ',';
      if (typeof item === 'string') {
        return /*#__PURE__*/_jsxs("span", {
          children: [item, comma]
        }, index);
      }
      return /*#__PURE__*/_jsxs("span", {
        style: {
          display: 'flex'
        },
        children: [item, comma]
      }, index);
    });
  };
  var formatterText = function formatterText(aValue) {
    if (formatter) {
      return formatter(aValue);
    }
    return Array.isArray(aValue) ? wrapElements(aValue) : aValue;
  };
  var getTextByValue = function getTextByValue(aLabel, aValue) {
    if (aValue !== undefined && aValue !== null && aValue !== '' && (!Array.isArray(aValue) || aValue.length)) {
      var _str$toString, _str$toString$slice;
      var prefix = aLabel ? /*#__PURE__*/_jsxs("span", {
        onClick: function onClick() {
          onLabelClick === null || onLabelClick === void 0 || onLabelClick();
        },
        className: "".concat(prefixCls, "-text"),
        children: [aLabel, ': ']
      }) : '';
      var str = formatterText(aValue);
      if (!ellipsis) {
        return /*#__PURE__*/_jsxs("span", {
          style: {
            display: 'inline-flex',
            alignItems: 'center'
          },
          children: [prefix, formatterText(aValue)]
        });
      }
      var getText = function getText() {
        var isArrayValue = Array.isArray(aValue) && aValue.length > 1;
        var unitText = intl.getMessage('form.lightFilter.itemUnit', '项');
        if (typeof str === 'string' && str.length > valueMaxLength && isArrayValue) {
          return "...".concat(aValue.length).concat(unitText);
        }
        return '';
      };
      var tail = getText();
      return /*#__PURE__*/_jsxs("span", {
        title: typeof str === 'string' ? str : undefined,
        style: {
          display: 'inline-flex',
          alignItems: 'center'
        },
        children: [prefix, /*#__PURE__*/_jsx("span", {
          style: {
            paddingInlineStart: 4,
            display: 'flex'
          },
          children: typeof str === 'string' ? str === null || str === void 0 || (_str$toString = str.toString()) === null || _str$toString === void 0 || (_str$toString$slice = _str$toString.slice) === null || _str$toString$slice === void 0 ? void 0 : _str$toString$slice.call(_str$toString, 0, valueMaxLength) : str
        }), tail]
      });
    }
    return aLabel || placeholder;
  };
  return wrapSSR( /*#__PURE__*/_jsxs("span", {
    className: classNames(prefixCls, hashId, "".concat(prefixCls, "-").concat((_ref2 = (_props$size = props.size) !== null && _props$size !== void 0 ? _props$size : size) !== null && _ref2 !== void 0 ? _ref2 : 'middle'), _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-active"), (Array.isArray(value) ? value.length > 0 : !!value) || value === 0), "".concat(prefixCls, "-disabled"), disabled), "".concat(prefixCls, "-bordered"), bordered), "".concat(prefixCls, "-allow-clear"), allowClear), className),
    style: style,
    ref: labelRef,
    onClick: function onClick() {
      var _props$onClick;
      props === null || props === void 0 || (_props$onClick = props.onClick) === null || _props$onClick === void 0 || _props$onClick.call(props);
    },
    children: [getTextByValue(label, value), (value || value === 0) && allowClear && /*#__PURE__*/_jsx(CloseCircleFilled, {
      role: "button",
      title: intl.getMessage('form.lightFilter.clear', '清除'),
      className: classNames("".concat(prefixCls, "-icon"), hashId, "".concat(prefixCls, "-close")),
      onClick: function onClick(e) {
        if (!disabled) onClear === null || onClear === void 0 || onClear();
        e.stopPropagation();
      },
      ref: clearRef
    }), downIcon !== false ? downIcon !== null && downIcon !== void 0 ? downIcon : /*#__PURE__*/_jsx(DownOutlined, {
      className: classNames("".concat(prefixCls, "-icon"), hashId, "".concat(prefixCls, "-arrow"))
    }) : null]
  }));
};
export var FieldLabel = /*#__PURE__*/React.forwardRef(FieldLabelFunction);