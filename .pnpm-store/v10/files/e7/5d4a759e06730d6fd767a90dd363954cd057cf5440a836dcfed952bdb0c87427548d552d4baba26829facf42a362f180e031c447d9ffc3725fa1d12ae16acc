import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["title", "subTitle", "content", "itemTitleRender", "prefixCls", "actions", "item", "recordKey", "avatar", "cardProps", "description", "isEditable", "checkbox", "index", "selected", "loading", "expand", "onExpand", "expandable", "rowSupportExpand", "showActions", "showExtra", "type", "style", "className", "record", "onRow", "onItem", "itemHeaderRender", "cardActionProps", "extra"];
import { RightOutlined } from '@ant-design/icons';
import { CheckCard } from '@ant-design/pro-card';
import { ProProvider } from '@ant-design/pro-provider';
import { ConfigProvider, List, Skeleton } from 'antd';
import classNames from 'classnames';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext, useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment as _Fragment } from "react/jsx-runtime";
export function renderExpandIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$expandIcon = _ref.expandIcon,
    expandIcon = _ref$expandIcon === void 0 ? /*#__PURE__*/_jsx(RightOutlined, {}) : _ref$expandIcon,
    onExpand = _ref.onExpand,
    expanded = _ref.expanded,
    record = _ref.record,
    hashId = _ref.hashId;
  var icon = expandIcon;
  var expandClassName = "".concat(prefixCls, "-row-expand-icon");
  var onClick = function onClick(event) {
    onExpand(!expanded);
    event.stopPropagation();
  };
  if (typeof expandIcon === 'function') {
    icon = expandIcon({
      expanded: expanded,
      onExpand: onExpand,
      record: record
    });
  }
  return /*#__PURE__*/_jsx("span", {
    className: classNames(expandClassName, hashId, _defineProperty(_defineProperty({}, "".concat(prefixCls, "-row-expanded"), expanded), "".concat(prefixCls, "-row-collapsed"), !expanded)),
    onClick: onClick,
    children: icon
  });
}
function ProListItem(props) {
  var _ref3, _ref4;
  var customizePrefixCls = props.prefixCls;
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = useContext(ProProvider),
    hashId = _useContext2.hashId;
  var prefixCls = getPrefixCls('pro-list', customizePrefixCls);
  var defaultClassName = "".concat(prefixCls, "-row");
  var title = props.title,
    subTitle = props.subTitle,
    content = props.content,
    itemTitleRender = props.itemTitleRender,
    restPrefixCls = props.prefixCls,
    actions = props.actions,
    item = props.item,
    recordKey = props.recordKey,
    avatar = props.avatar,
    cardProps = props.cardProps,
    description = props.description,
    isEditable = props.isEditable,
    checkbox = props.checkbox,
    index = props.index,
    selected = props.selected,
    loading = props.loading,
    propsExpand = props.expand,
    propsOnExpand = props.onExpand,
    expandableConfig = props.expandable,
    rowSupportExpand = props.rowSupportExpand,
    showActions = props.showActions,
    showExtra = props.showExtra,
    type = props.type,
    style = props.style,
    _props$className = props.className,
    propsClassName = _props$className === void 0 ? defaultClassName : _props$className,
    record = props.record,
    onRow = props.onRow,
    onItem = props.onItem,
    itemHeaderRender = props.itemHeaderRender,
    cardActionProps = props.cardActionProps,
    extra = props.extra,
    rest = _objectWithoutProperties(props, _excluded);
  var _ref2 = expandableConfig || {},
    expandedRowRender = _ref2.expandedRowRender,
    expandIcon = _ref2.expandIcon,
    expandRowByClick = _ref2.expandRowByClick,
    _ref2$indentSize = _ref2.indentSize,
    indentSize = _ref2$indentSize === void 0 ? 8 : _ref2$indentSize,
    expandedRowClassName = _ref2.expandedRowClassName;
  var _useMergedState = useMergedState(!!propsExpand, {
      value: propsExpand,
      onChange: propsOnExpand
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    expanded = _useMergedState2[0],
    onExpand = _useMergedState2[1];
  var className = classNames(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(defaultClassName, "-selected"), !cardProps && selected), "".concat(defaultClassName, "-show-action-hover"), showActions === 'hover'), "".concat(defaultClassName, "-type-").concat(type), !!type), "".concat(defaultClassName, "-editable"), isEditable), "".concat(defaultClassName, "-show-extra-hover"), showExtra === 'hover'), hashId, defaultClassName);
  var extraClassName = classNames(hashId, _defineProperty({}, "".concat(propsClassName, "-extra"), showExtra === 'hover'));
  var needExpanded = expanded || Object.values(expandableConfig || {}).length === 0;
  var expandedRowDom = expandedRowRender && expandedRowRender(record, index, indentSize, expanded);
  var extraDom = useMemo(function () {
    if (!actions || cardActionProps === 'actions') {
      return undefined;
    }
    return [/*#__PURE__*/_jsx("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: actions
    }, "action")];
  }, [actions, cardActionProps]);
  var actionsDom = useMemo(function () {
    if (!actions || !cardActionProps || cardActionProps === 'extra') {
      return undefined;
    }
    return [/*#__PURE__*/_jsx("div", {
      className: "".concat(defaultClassName, "-actions ").concat(hashId).trim(),
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: actions
    }, "action")];
  }, [actions, cardActionProps, defaultClassName, hashId]);
  var titleDom = title || subTitle ? /*#__PURE__*/_jsxs("div", {
    className: "".concat(defaultClassName, "-header-container ").concat(hashId).trim(),
    children: [title && /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(defaultClassName, "-title"), hashId, _defineProperty({}, "".concat(defaultClassName, "-title-editable"), isEditable)),
      children: title
    }), subTitle && /*#__PURE__*/_jsx("div", {
      className: classNames("".concat(defaultClassName, "-subTitle"), hashId, _defineProperty({}, "".concat(defaultClassName, "-subTitle-editable"), isEditable)),
      children: subTitle
    })]
  }) : null;
  var metaTitle = (_ref3 = itemTitleRender && (itemTitleRender === null || itemTitleRender === void 0 ? void 0 : itemTitleRender(record, index, titleDom))) !== null && _ref3 !== void 0 ? _ref3 : titleDom;
  var metaDom = metaTitle || avatar || subTitle || description ? /*#__PURE__*/_jsx(List.Item.Meta, {
    avatar: avatar,
    title: metaTitle,
    description: description && needExpanded && /*#__PURE__*/_jsx("div", {
      className: "".concat(className, "-description ").concat(hashId).trim(),
      children: description
    })
  }) : null;
  var rowClassName = classNames(hashId, _defineProperty(_defineProperty(_defineProperty({}, "".concat(defaultClassName, "-item-has-checkbox"), checkbox), "".concat(defaultClassName, "-item-has-avatar"), avatar), className, className));
  var cardTitleDom = useMemo(function () {
    if (avatar || title) {
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [avatar, /*#__PURE__*/_jsx("span", {
          className: "".concat(getPrefixCls('list-item-meta-title'), " ").concat(hashId).trim(),
          children: title
        })]
      });
    }
    return null;
  }, [avatar, getPrefixCls, hashId, title]);
  var itemProps = onItem === null || onItem === void 0 ? void 0 : onItem(record, index);
  var defaultDom = !cardProps ? /*#__PURE__*/_jsx(List.Item, _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    className: classNames(rowClassName, hashId, _defineProperty({}, propsClassName, propsClassName !== defaultClassName))
  }, rest), {}, {
    actions: extraDom,
    extra: !!extra && /*#__PURE__*/_jsx("div", {
      className: extraClassName,
      children: extra
    })
  }, onRow === null || onRow === void 0 ? void 0 : onRow(record, index)), itemProps), {}, {
    onClick: function onClick(e) {
      var _onRow, _onRow$onClick, _onItem, _onItem$onClick;
      onRow === null || onRow === void 0 || (_onRow = onRow(record, index)) === null || _onRow === void 0 || (_onRow$onClick = _onRow.onClick) === null || _onRow$onClick === void 0 || _onRow$onClick.call(_onRow, e);
      onItem === null || onItem === void 0 || (_onItem = onItem(record, index)) === null || _onItem === void 0 || (_onItem$onClick = _onItem.onClick) === null || _onItem$onClick === void 0 || _onItem$onClick.call(_onItem, e);
      if (expandRowByClick) {
        onExpand(!expanded);
      }
    },
    children: /*#__PURE__*/_jsxs(Skeleton, {
      avatar: true,
      title: false,
      loading: loading,
      active: true,
      children: [/*#__PURE__*/_jsxs("div", {
        className: "".concat(className, "-header ").concat(hashId).trim(),
        children: [/*#__PURE__*/_jsxs("div", {
          className: "".concat(className, "-header-option ").concat(hashId).trim(),
          children: [!!checkbox && /*#__PURE__*/_jsx("div", {
            className: "".concat(className, "-checkbox ").concat(hashId).trim(),
            children: checkbox
          }), Object.values(expandableConfig || {}).length > 0 && rowSupportExpand && renderExpandIcon({
            prefixCls: prefixCls,
            hashId: hashId,
            expandIcon: expandIcon,
            onExpand: onExpand,
            expanded: expanded,
            record: record
          })]
        }), (_ref4 = itemHeaderRender && (itemHeaderRender === null || itemHeaderRender === void 0 ? void 0 : itemHeaderRender(record, index, metaDom))) !== null && _ref4 !== void 0 ? _ref4 : metaDom]
      }), needExpanded && (content || expandedRowDom) && /*#__PURE__*/_jsxs("div", {
        className: "".concat(className, "-content ").concat(hashId).trim(),
        children: [content, expandedRowRender && rowSupportExpand && /*#__PURE__*/_jsx("div", {
          className: expandedRowClassName && typeof expandedRowClassName !== 'string' ? expandedRowClassName(record, index, indentSize) : expandedRowClassName,
          children: expandedRowDom
        })]
      })]
    })
  })) : /*#__PURE__*/_jsx(CheckCard, _objectSpread(_objectSpread(_objectSpread({
    bordered: true,
    style: {
      width: '100%'
    }
  }, cardProps), {}, {
    title: cardTitleDom,
    subTitle: subTitle,
    extra: extraDom,
    actions: actionsDom,
    bodyStyle: _objectSpread({
      padding: 24
    }, cardProps.bodyStyle)
  }, itemProps), {}, {
    onClick: function onClick(e) {
      var _cardProps$onClick, _itemProps$onClick;
      cardProps === null || cardProps === void 0 || (_cardProps$onClick = cardProps.onClick) === null || _cardProps$onClick === void 0 || _cardProps$onClick.call(cardProps, e);
      itemProps === null || itemProps === void 0 || (_itemProps$onClick = itemProps.onClick) === null || _itemProps$onClick === void 0 || _itemProps$onClick.call(itemProps, e);
    },
    children: /*#__PURE__*/_jsx(Skeleton, {
      avatar: true,
      title: false,
      loading: loading,
      active: true,
      children: /*#__PURE__*/_jsxs("div", {
        className: "".concat(className, "-header ").concat(hashId).trim(),
        children: [itemTitleRender && (itemTitleRender === null || itemTitleRender === void 0 ? void 0 : itemTitleRender(record, index, titleDom)), content]
      })
    })
  }));
  if (!cardProps) {
    return defaultDom;
  }
  return /*#__PURE__*/_jsx("div", {
    className: classNames(hashId, _defineProperty(_defineProperty({}, "".concat(className, "-card"), cardProps), propsClassName, propsClassName !== defaultClassName)),
    style: style,
    children: defaultDom
  });
}
export default ProListItem;