import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["mode", "popoverProps"];
import { proTheme, useStyle } from '@ant-design/pro-provider';
import { SketchPicker } from '@chenshuai2144/sketch-color';
import { ConfigProvider, Popover } from 'antd';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext, useImperativeHandle } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
export var DEFAULT_COLORS = ['#FF9D4E',
// 0 - 橘黄色
'#5BD8A6',
// 1 - 绿色
'#5B8FF9',
// 2 - 蓝色
'#F7664E',
// 3 - 红色
'#FF86B7',
// 4 - 水红色
'#2B9E9D',
// 5 - 墨绿色
'#9270CA',
// 6 - 紫色
'#6DC8EC',
// 7 - 浅蓝色
'#667796',
// 8 - 黛蓝色
'#F6BD16' // 9 - 黄色
];
export var ColorPicker = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var mode = _ref.mode,
    popoverProps = _ref.popoverProps,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-field-color-picker');
  var _proTheme$useToken = proTheme.useToken(),
    token = _proTheme$useToken.token;
  var _useMergedState = useMergedState('#1890ff', {
      value: rest.value,
      onChange: rest.onChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    color = _useMergedState2[0],
    setColor = _useMergedState2[1];
  var _useStyle = useStyle('ProFiledColorPicker' + color, function () {
      return _defineProperty({}, ".".concat(prefixCls), {
        width: 32,
        height: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        border: "1px solid ".concat(token.colorSplit),
        borderRadius: token.borderRadius,
        '&:hover': {
          borderColor: color
        }
      });
    }),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var readDom = wrapSSR( /*#__PURE__*/_jsx("div", {
    className: "".concat(prefixCls, " ").concat(hashId).trim(),
    style: {
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      backgroundColor: rest.disabled ? token.colorBgContainerDisabled : token.colorBgContainer
    },
    children: /*#__PURE__*/_jsx("div", {
      style: {
        backgroundColor: color,
        width: 24,
        boxSizing: 'border-box',
        height: 24,
        borderRadius: token.borderRadius
      }
    })
  }));
  useImperativeHandle(ref, function () {});
  if (mode === 'read' || rest.disabled) {
    return readDom;
  }
  return /*#__PURE__*/_jsx(Popover, _objectSpread(_objectSpread({
    trigger: "click",
    placement: "right"
  }, popoverProps), {}, {
    content: /*#__PURE__*/_jsx("div", {
      style: {
        margin: '-12px -16px'
      },
      children: /*#__PURE__*/_jsx(SketchPicker, _objectSpread(_objectSpread({}, rest), {}, {
        presetColors: rest.colors || rest.presetColors || DEFAULT_COLORS,
        color: color,
        onChange: function onChange(_ref3) {
          var hex = _ref3.hex,
            _ref3$rgb = _ref3.rgb,
            r = _ref3$rgb.r,
            g = _ref3$rgb.g,
            b = _ref3$rgb.b,
            a = _ref3$rgb.a;
          if (a && a < 1) {
            setColor("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
            return;
          }
          setColor(hex);
        }
      }))
    }),
    children: readDom
  }));
});