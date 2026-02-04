import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { RightOutlined } from '@ant-design/icons';
import { LabelIconTip, useMountMergeState } from '@ant-design/pro-utils';
import { ConfigProvider, Space } from 'antd';
import classNames from 'classnames';
import React, { useCallback, useContext, useMemo } from 'react';
import FieldContext from "../../FieldContext";
import { useGridHelpers } from "../../helpers";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Group = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(FieldContext),
    groupProps = _React$useContext.groupProps;
  var _groupProps$props = _objectSpread(_objectSpread({}, groupProps), props),
    children = _groupProps$props.children,
    collapsible = _groupProps$props.collapsible,
    defaultCollapsed = _groupProps$props.defaultCollapsed,
    style = _groupProps$props.style,
    labelLayout = _groupProps$props.labelLayout,
    _groupProps$props$tit = _groupProps$props.title,
    title = _groupProps$props$tit === void 0 ? props.label : _groupProps$props$tit,
    tooltip = _groupProps$props.tooltip,
    _groupProps$props$ali = _groupProps$props.align,
    align = _groupProps$props$ali === void 0 ? 'start' : _groupProps$props$ali,
    direction = _groupProps$props.direction,
    _groupProps$props$siz = _groupProps$props.size,
    size = _groupProps$props$siz === void 0 ? 32 : _groupProps$props$siz,
    titleStyle = _groupProps$props.titleStyle,
    titleRender = _groupProps$props.titleRender,
    spaceProps = _groupProps$props.spaceProps,
    extra = _groupProps$props.extra,
    autoFocus = _groupProps$props.autoFocus;
  var _useMountMergeState = useMountMergeState(function () {
      return defaultCollapsed || false;
    }, {
      value: props.collapsed,
      onChange: props.onCollapse
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    collapsed = _useMountMergeState2[0],
    setCollapsed = _useMountMergeState2[1];
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useGridHelpers = useGridHelpers(props),
    ColWrapper = _useGridHelpers.ColWrapper,
    RowWrapper = _useGridHelpers.RowWrapper;
  var className = getPrefixCls('pro-form-group');
  var _useStyle = useStyle(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var collapsibleButton = collapsible && /*#__PURE__*/_jsx(RightOutlined, {
    style: {
      marginInlineEnd: 8
    },
    rotate: !collapsed ? 90 : undefined
  });
  var label = /*#__PURE__*/_jsx(LabelIconTip, {
    label: collapsibleButton ? /*#__PURE__*/_jsxs("div", {
      children: [collapsibleButton, title]
    }) : title,
    tooltip: tooltip
  });
  var Wrapper = useCallback(function (_ref) {
    var dom = _ref.children;
    return /*#__PURE__*/_jsx(Space, _objectSpread(_objectSpread({}, spaceProps), {}, {
      className: classNames("".concat(className, "-container ").concat(hashId), spaceProps === null || spaceProps === void 0 ? void 0 : spaceProps.className),
      size: size,
      align: align,
      direction: direction,
      style: _objectSpread({
        rowGap: 0
      }, spaceProps === null || spaceProps === void 0 ? void 0 : spaceProps.style),
      children: dom
    }));
  }, [align, className, direction, hashId, size, spaceProps]);
  var titleDom = titleRender ? titleRender(label, props) : label;
  var _useMemo = useMemo(function () {
      var hiddenChildren = [];
      var childrenList = React.Children.toArray(children).map(function (element, index) {
        var _element$props;
        if ( /*#__PURE__*/React.isValidElement(element) && element !== null && element !== void 0 && (_element$props = element.props) !== null && _element$props !== void 0 && _element$props.hidden) {
          hiddenChildren.push(element);
          return null;
        }
        if (index === 0 && /*#__PURE__*/React.isValidElement(element) && autoFocus) {
          return /*#__PURE__*/React.cloneElement(element, _objectSpread(_objectSpread({}, element.props), {}, {
            autoFocus: autoFocus
          }));
        }
        return element;
      });
      return [/*#__PURE__*/_jsx(RowWrapper, {
        Wrapper: Wrapper,
        children: childrenList
      }, "children"), hiddenChildren.length > 0 ? /*#__PURE__*/_jsx("div", {
        style: {
          display: 'none'
        },
        children: hiddenChildren
      }) : null];
    }, [children, RowWrapper, Wrapper, autoFocus]),
    _useMemo2 = _slicedToArray(_useMemo, 2),
    childrenDoms = _useMemo2[0],
    hiddenDoms = _useMemo2[1];
  return wrapSSR( /*#__PURE__*/_jsx(ColWrapper, {
    children: /*#__PURE__*/_jsxs("div", {
      className: classNames(className, hashId, _defineProperty({}, "".concat(className, "-twoLine"), labelLayout === 'twoLine')),
      style: style,
      ref: ref,
      children: [hiddenDoms, (title || tooltip || extra) && /*#__PURE__*/_jsx("div", {
        className: "".concat(className, "-title ").concat(hashId).trim(),
        style: titleStyle,
        onClick: function onClick() {
          setCollapsed(!collapsed);
        },
        children: extra ? /*#__PURE__*/_jsxs("div", {
          style: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [titleDom, /*#__PURE__*/_jsx("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            children: extra
          })]
        }) : titleDom
      }), /*#__PURE__*/_jsx("div", {
        style: {
          display: collapsible && collapsed ? 'none' : undefined
        },
        children: childrenDoms
      })]
    })
  }));
});
Group.displayName = 'ProForm-Group';
export default Group;