"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderContentPanel = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _HelpProvide = require("./HelpProvide");
var _ProHelpPanel = require("./ProHelpPanel");
var _jsxRuntime = require("react/jsx-runtime");
// HTML渲染组件，接收一个字符串形式的html作为props
// 可选接收className作为组件的样式类名
var HTMLRender = function HTMLRender(props) {
  var ref = (0, _react.useRef)(null);

  // 当html发生变化时，将其渲染到ref.current的innerHTML中
  (0, _react.useEffect)(function () {
    if (ref.current) ref.current.innerHTML = props.children;
  }, [props.children]);
  // 返回一个div元素作为容器，并传递ref和className作为props
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    className: props.className || 'inner-html'
  });
};
var NavigationSwitch = function NavigationSwitch(props) {
  var context = (0, _react.useContext)(_ProHelpPanel.SelectKeyProvide);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Text, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      "data-testid": "navigation-switch",
      onClick: function onClick() {
        context.setSelectedKey(props.selectKey);
      },
      children: props.children
    })
  });
};
var RenderContentPanel = exports.RenderContentPanel = function RenderContentPanel(_ref) {
  var dataSourceChildren = _ref.dataSourceChildren,
    onInit = _ref.onInit;
  var _useContext = (0, _react.useContext)(_HelpProvide.ProHelpProvide),
    valueTypeMap = _useContext.valueTypeMap;
  var divRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    onInit === null || onInit === void 0 || onInit(divRef.current);
  }, [dataSourceChildren]);

  /**
   * itemRender 的定义
   * @param {ProHelpDataSourceChildren} item
   * @param {number} index
   * @return {*}
   */
  var itemRender = function itemRender(item, index) {
    // 自定义的渲染，优先级最高
    if (valueTypeMap.has(item.valueType)) {
      var _valueTypeMap$get;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
        children: (_valueTypeMap$get = valueTypeMap.get(item.valueType)) === null || _valueTypeMap$get === void 0 ? void 0 : _valueTypeMap$get(item, index)
      }, index);
    }
    if (item.valueType === 'html') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(HTMLRender, (0, _objectSpread2.default)({}, item.children), index);
    }
    if (item.valueType === 'h1') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Title, {
        style: {
          marginTop: 0
        },
        level: 3,
        children: item.children
      }, index);
    }
    if (item.valueType === 'h2') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Title, {
        style: {
          marginTop: 20
        },
        level: 5,
        children: item.children
      }, index);
    }
    if (item.valueType === 'image') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          marginBlock: 12
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Image, (0, _objectSpread2.default)({}, item.children))
      }, index);
    }
    if (item.valueType === 'inlineLink') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Text, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", (0, _objectSpread2.default)({}, item.children))
      }, index);
    }
    if (item.valueType === 'link') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Text, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("a", (0, _objectSpread2.default)({}, item.children))
        }, index)
      }, index);
    }
    if (item.valueType === 'navigationSwitch') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(NavigationSwitch, (0, _objectSpread2.default)({}, item.children), index);
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Typography.Text, {
      children: item.children
    }, index);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: divRef,
    children: dataSourceChildren === null || dataSourceChildren === void 0 ? void 0 : dataSourceChildren.map(itemRender)
  });
};