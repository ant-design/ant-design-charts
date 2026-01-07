"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.renderExpandIcon = renderExpandIcon;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _icons = require("@ant-design/icons");
var _proCard = require("@ant-design/pro-card");
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["title", "subTitle", "content", "itemTitleRender", "prefixCls", "actions", "item", "recordKey", "avatar", "cardProps", "description", "isEditable", "checkbox", "index", "selected", "loading", "expand", "onExpand", "expandable", "rowSupportExpand", "showActions", "showExtra", "type", "style", "className", "record", "onRow", "onItem", "itemHeaderRender", "cardActionProps", "extra"];
function renderExpandIcon(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$expandIcon = _ref.expandIcon,
    expandIcon = _ref$expandIcon === void 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RightOutlined, {}) : _ref$expandIcon,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: (0, _classnames.default)(expandClassName, hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-row-expanded"), expanded), "".concat(prefixCls, "-row-collapsed"), !expanded)),
    onClick: onClick,
    children: icon
  });
}
function ProListItem(props) {
  var _ref3, _ref4;
  var customizePrefixCls = props.prefixCls;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useContext2 = (0, _react.useContext)(_proProvider.ProProvider),
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
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _ref2 = expandableConfig || {},
    expandedRowRender = _ref2.expandedRowRender,
    expandIcon = _ref2.expandIcon,
    expandRowByClick = _ref2.expandRowByClick,
    _ref2$indentSize = _ref2.indentSize,
    indentSize = _ref2$indentSize === void 0 ? 8 : _ref2$indentSize,
    expandedRowClassName = _ref2.expandedRowClassName;
  var _useMergedState = (0, _useMergedState3.default)(!!propsExpand, {
      value: propsExpand,
      onChange: propsOnExpand
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    expanded = _useMergedState2[0],
    onExpand = _useMergedState2[1];
  var className = (0, _classnames.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(defaultClassName, "-selected"), !cardProps && selected), "".concat(defaultClassName, "-show-action-hover"), showActions === 'hover'), "".concat(defaultClassName, "-type-").concat(type), !!type), "".concat(defaultClassName, "-editable"), isEditable), "".concat(defaultClassName, "-show-extra-hover"), showExtra === 'hover'), hashId, defaultClassName);
  var extraClassName = (0, _classnames.default)(hashId, (0, _defineProperty2.default)({}, "".concat(propsClassName, "-extra"), showExtra === 'hover'));
  var needExpanded = expanded || Object.values(expandableConfig || {}).length === 0;
  var expandedRowDom = expandedRowRender && expandedRowRender(record, index, indentSize, expanded);
  var extraDom = (0, _react.useMemo)(function () {
    if (!actions || cardActionProps === 'actions') {
      return undefined;
    }
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: actions
    }, "action")];
  }, [actions, cardActionProps]);
  var actionsDom = (0, _react.useMemo)(function () {
    if (!actions || !cardActionProps || cardActionProps === 'extra') {
      return undefined;
    }
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(defaultClassName, "-actions ").concat(hashId).trim(),
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: actions
    }, "action")];
  }, [actions, cardActionProps, defaultClassName, hashId]);
  var titleDom = title || subTitle ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "".concat(defaultClassName, "-header-container ").concat(hashId).trim(),
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(defaultClassName, "-title"), hashId, (0, _defineProperty2.default)({}, "".concat(defaultClassName, "-title-editable"), isEditable)),
      children: title
    }), subTitle && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames.default)("".concat(defaultClassName, "-subTitle"), hashId, (0, _defineProperty2.default)({}, "".concat(defaultClassName, "-subTitle-editable"), isEditable)),
      children: subTitle
    })]
  }) : null;
  var metaTitle = (_ref3 = itemTitleRender && (itemTitleRender === null || itemTitleRender === void 0 ? void 0 : itemTitleRender(record, index, titleDom))) !== null && _ref3 !== void 0 ? _ref3 : titleDom;
  var metaDom = metaTitle || avatar || subTitle || description ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List.Item.Meta, {
    avatar: avatar,
    title: metaTitle,
    description: description && needExpanded && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(className, "-description ").concat(hashId).trim(),
      children: description
    })
  }) : null;
  var rowClassName = (0, _classnames.default)(hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(defaultClassName, "-item-has-checkbox"), checkbox), "".concat(defaultClassName, "-item-has-avatar"), avatar), className, className));
  var cardTitleDom = (0, _react.useMemo)(function () {
    if (avatar || title) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [avatar, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "".concat(getPrefixCls('list-item-meta-title'), " ").concat(hashId).trim(),
          children: title
        })]
      });
    }
    return null;
  }, [avatar, getPrefixCls, hashId, title]);
  var itemProps = onItem === null || onItem === void 0 ? void 0 : onItem(record, index);
  var defaultDom = !cardProps ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: (0, _classnames.default)(rowClassName, hashId, (0, _defineProperty2.default)({}, propsClassName, propsClassName !== defaultClassName))
  }, rest), {}, {
    actions: extraDom,
    extra: !!extra && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Skeleton, {
      avatar: true,
      title: false,
      loading: loading,
      active: true,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(className, "-header ").concat(hashId).trim(),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "".concat(className, "-header-option ").concat(hashId).trim(),
          children: [!!checkbox && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
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
      }), needExpanded && (content || expandedRowDom) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(className, "-content ").concat(hashId).trim(),
        children: [content, expandedRowRender && rowSupportExpand && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: expandedRowClassName && typeof expandedRowClassName !== 'string' ? expandedRowClassName(record, index, indentSize) : expandedRowClassName,
          children: expandedRowDom
        })]
      })]
    })
  })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_proCard.CheckCard, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
    bordered: true,
    style: {
      width: '100%'
    }
  }, cardProps), {}, {
    title: cardTitleDom,
    subTitle: subTitle,
    extra: extraDom,
    actions: actionsDom,
    bodyStyle: (0, _objectSpread2.default)({
      padding: 24
    }, cardProps.bodyStyle)
  }, itemProps), {}, {
    onClick: function onClick(e) {
      var _cardProps$onClick, _itemProps$onClick;
      cardProps === null || cardProps === void 0 || (_cardProps$onClick = cardProps.onClick) === null || _cardProps$onClick === void 0 || _cardProps$onClick.call(cardProps, e);
      itemProps === null || itemProps === void 0 || (_itemProps$onClick = itemProps.onClick) === null || _itemProps$onClick === void 0 || _itemProps$onClick.call(itemProps, e);
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Skeleton, {
      avatar: true,
      title: false,
      loading: loading,
      active: true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(className, "-header ").concat(hashId).trim(),
        children: [itemTitleRender && (itemTitleRender === null || itemTitleRender === void 0 ? void 0 : itemTitleRender(record, index, titleDom)), content]
      })
    })
  }));
  if (!cardProps) {
    return defaultDom;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _classnames.default)(hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(className, "-card"), cardProps), propsClassName, propsClassName !== defaultClassName)),
    style: style,
    children: defaultDom
  });
}
var _default = exports.default = ProListItem;