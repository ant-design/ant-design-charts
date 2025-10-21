import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Spin } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ProHelpProvide } from "./HelpProvide";
import { RenderContentPanel } from "./RenderContentPanel";

/**
 * 异步加载内容的面板组件
 * @param item 指向当前面板的 ProHelpDataSource
 */
import { jsx as _jsx } from "react/jsx-runtime";
export var AsyncContentPanel = function AsyncContentPanel(_ref) {
  var item = _ref.item,
    _onInit = _ref.onInit;
  var _useContext = useContext(ProHelpProvide),
    onLoadContext = _useContext.onLoadContext; // 获取上下文中的 onLoadContext
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1]; // 加载状态
  var _useState3 = useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    content = _useState4[0],
    setContent = _useState4[1]; // 内容数据

  useEffect(function () {
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
    return /*#__PURE__*/_jsx("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box',
        padding: 24
      },
      children: /*#__PURE__*/_jsx(Spin, {})
    }, item.key);
  }

  // 加载完成后，渲染内容面板
  return /*#__PURE__*/_jsx(RenderContentPanel, {
    onInit: function onInit(ref) {
      _onInit === null || _onInit === void 0 || _onInit(ref);
    },
    dataSourceChildren: content
  });
};