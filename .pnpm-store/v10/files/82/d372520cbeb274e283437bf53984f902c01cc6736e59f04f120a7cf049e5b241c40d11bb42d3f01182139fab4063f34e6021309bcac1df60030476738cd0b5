import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { Image, Typography } from 'antd';
import React, { useContext, useEffect, useRef } from 'react';
import { ProHelpProvide } from "./HelpProvide";
import { SelectKeyProvide } from "./ProHelpPanel";

// HTML渲染组件，接收一个字符串形式的html作为props
// 可选接收className作为组件的样式类名
import { jsx as _jsx } from "react/jsx-runtime";
var HTMLRender = function HTMLRender(props) {
  var ref = useRef(null);

  // 当html发生变化时，将其渲染到ref.current的innerHTML中
  useEffect(function () {
    if (ref.current) ref.current.innerHTML = props.children;
  }, [props.children]);
  // 返回一个div元素作为容器，并传递ref和className作为props
  return /*#__PURE__*/_jsx("div", {
    ref: ref,
    className: props.className || 'inner-html'
  });
};
var NavigationSwitch = function NavigationSwitch(props) {
  var context = useContext(SelectKeyProvide);
  return /*#__PURE__*/_jsx(Typography.Text, {
    children: /*#__PURE__*/_jsx("a", {
      "data-testid": "navigation-switch",
      onClick: function onClick() {
        context.setSelectedKey(props.selectKey);
      },
      children: props.children
    })
  });
};
export var RenderContentPanel = function RenderContentPanel(_ref) {
  var dataSourceChildren = _ref.dataSourceChildren,
    onInit = _ref.onInit;
  var _useContext = useContext(ProHelpProvide),
    valueTypeMap = _useContext.valueTypeMap;
  var divRef = useRef(null);
  useEffect(function () {
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
      return /*#__PURE__*/_jsx(React.Fragment, {
        children: (_valueTypeMap$get = valueTypeMap.get(item.valueType)) === null || _valueTypeMap$get === void 0 ? void 0 : _valueTypeMap$get(item, index)
      }, index);
    }
    if (item.valueType === 'html') {
      return /*#__PURE__*/_jsx(HTMLRender, _objectSpread({}, item.children), index);
    }
    if (item.valueType === 'h1') {
      return /*#__PURE__*/_jsx(Typography.Title, {
        style: {
          marginTop: 0
        },
        level: 3,
        children: item.children
      }, index);
    }
    if (item.valueType === 'h2') {
      return /*#__PURE__*/_jsx(Typography.Title, {
        style: {
          marginTop: 20
        },
        level: 5,
        children: item.children
      }, index);
    }
    if (item.valueType === 'image') {
      return /*#__PURE__*/_jsx("div", {
        style: {
          marginBlock: 12
        },
        children: /*#__PURE__*/_jsx(Image, _objectSpread({}, item.children))
      }, index);
    }
    if (item.valueType === 'inlineLink') {
      return /*#__PURE__*/_jsx(Typography.Text, {
        children: /*#__PURE__*/_jsx("a", _objectSpread({}, item.children))
      }, index);
    }
    if (item.valueType === 'link') {
      return /*#__PURE__*/_jsx("div", {
        children: /*#__PURE__*/_jsx(Typography.Text, {
          children: /*#__PURE__*/_jsx("a", _objectSpread({}, item.children))
        }, index)
      }, index);
    }
    if (item.valueType === 'navigationSwitch') {
      return /*#__PURE__*/_jsx(NavigationSwitch, _objectSpread({}, item.children), index);
    }
    return /*#__PURE__*/_jsx(Typography.Text, {
      children: item.children
    }, index);
  };
  return /*#__PURE__*/_jsx("div", {
    ref: divRef,
    children: dataSourceChildren === null || dataSourceChildren === void 0 ? void 0 : dataSourceChildren.map(itemRender)
  });
};