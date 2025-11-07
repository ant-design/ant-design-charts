"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncContentPanel = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _antd = require("antd");
var _react = require("react");
var _HelpProvide = require("./HelpProvide");
var _RenderContentPanel = require("./RenderContentPanel");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * 异步加载内容的面板组件
 * @param item 指向当前面板的 ProHelpDataSource
 */
var AsyncContentPanel = exports.AsyncContentPanel = function AsyncContentPanel(_ref) {
  var item = _ref.item,
    _onInit = _ref.onInit;
  var _useContext = (0, _react.useContext)(_HelpProvide.ProHelpProvide),
    onLoadContext = _useContext.onLoadContext; // 获取上下文中的 onLoadContext
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1]; // 加载状态
  var _useState3 = (0, _react.useState)(),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1]; // 内容数据

  (0, _react.useEffect)(function () {
    if (!item.key) return; // 如果没有key则返回
    setLoading(true); // 开始加载
    onLoadContext === null || onLoadContext === void 0 || onLoadContext(item.key, item).then(function (res) {
      // 调用加载方法
      setLoading(false); // 加载完成
      setContent(res); // 设置内容数据
    });
  }, [item.key]);

  // 如果没有key，则返回null
  if (!item.key) return null;

  // 如果正在加载并且有key，则显示加载中的状态
  if (loading && item.key) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: 24
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Spin, {})
    }, item.key);
  }

  // 加载完成后，渲染内容面板
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RenderContentPanel.RenderContentPanel, {
    onInit: function onInit(ref) {
      _onInit === null || _onInit === void 0 || _onInit(ref);
    },
    dataSourceChildren: content
  });
};