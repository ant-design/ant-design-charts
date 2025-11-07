"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_COLORS = exports.ColorPicker = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _sketchColor = require("@chenshuai2144/sketch-color");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["mode", "popoverProps"];
var DEFAULT_COLORS = exports.DEFAULT_COLORS = ['#FF9D4E',
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
var ColorPicker = exports.ColorPicker = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var mode = _ref.mode,
    popoverProps = _ref.popoverProps,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var prefixCls = getPrefixCls('pro-field-color-picker');
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  var _useMergedState = (0, _useMergedState3.default)('#1890ff', {
      value: rest.value,
      onChange: rest.onChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    color = _useMergedState2[0],
    setColor = _useMergedState2[1];
  var _useStyle = (0, _proProvider.useStyle)('ProFiledColorPicker' + color, function () {
      return (0, _defineProperty2.default)({}, ".".concat(prefixCls), {
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
  var readDom = wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(prefixCls, " ").concat(hashId).trim(),
    style: {
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      backgroundColor: rest.disabled ? token.colorBgContainerDisabled : token.colorBgContainer
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        backgroundColor: color,
        width: 24,
        boxSizing: 'border-box',
        height: 24,
        borderRadius: token.borderRadius
      }
    })
  }));
  (0, _react.useImperativeHandle)(ref, function () {});
  if (mode === 'read' || rest.disabled) {
    return readDom;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    trigger: "click",
    placement: "right"
  }, popoverProps), {}, {
    content: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        margin: '-12px -16px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sketchColor.SketchPicker, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
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