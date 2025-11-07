"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _FieldContext = _interopRequireDefault(require("../../FieldContext"));
var _helpers = require("../../helpers");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var Group = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _React$useContext = _react.default.useContext(_FieldContext.default),
    groupProps = _React$useContext.groupProps;
  var _groupProps$props = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, groupProps), props),
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
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(function () {
      return defaultCollapsed || false;
    }, {
      value: props.collapsed,
      onChange: props.onCollapse
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    collapsed = _useMountMergeState2[0],
    setCollapsed = _useMountMergeState2[1];
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useGridHelpers = (0, _helpers.useGridHelpers)(props),
    ColWrapper = _useGridHelpers.ColWrapper,
    RowWrapper = _useGridHelpers.RowWrapper;
  var className = getPrefixCls('pro-form-group');
  var _useStyle = (0, _style.useStyle)(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var collapsibleButton = collapsible && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RightOutlined, {
    style: {
      marginInlineEnd: 8
    },
    rotate: !collapsed ? 90 : undefined
  });
  var label = /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
    label: collapsibleButton ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [collapsibleButton, title]
    }) : title,
    tooltip: tooltip
  });
  var Wrapper = (0, _react.useCallback)(function (_ref) {
    var dom = _ref.children;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Space, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, spaceProps), {}, {
      className: (0, _classnames.default)("".concat(className, "-container ").concat(hashId), spaceProps === null || spaceProps === void 0 ? void 0 : spaceProps.className),
      size: size,
      align: align,
      direction: direction,
      style: (0, _objectSpread2.default)({
        rowGap: 0
      }, spaceProps === null || spaceProps === void 0 ? void 0 : spaceProps.style),
      children: dom
    }));
  }, [align, className, direction, hashId, size, spaceProps]);
  var titleDom = titleRender ? titleRender(label, props) : label;
  var _useMemo = (0, _react.useMemo)(function () {
      var hiddenChildren = [];
      var childrenList = _react.default.Children.toArray(children).map(function (element, index) {
        var _element$props;
        if ( /*#__PURE__*/_react.default.isValidElement(element) && element !== null && element !== void 0 && (_element$props = element.props) !== null && _element$props !== void 0 && _element$props.hidden) {
          hiddenChildren.push(element);
          return null;
        }
        if (index === 0 && /*#__PURE__*/_react.default.isValidElement(element) && autoFocus) {
          return /*#__PURE__*/_react.default.cloneElement(element, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, element.props), {}, {
            autoFocus: autoFocus
          }));
        }
        return element;
      });
      return [/*#__PURE__*/(0, _jsxRuntime.jsx)(RowWrapper, {
        Wrapper: Wrapper,
        children: childrenList
      }, "children"), hiddenChildren.length > 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          display: 'none'
        },
        children: hiddenChildren
      }) : null];
    }, [children, RowWrapper, Wrapper, autoFocus]),
    _useMemo2 = (0, _slicedToArray2.default)(_useMemo, 2),
    childrenDoms = _useMemo2[0],
    hiddenDoms = _useMemo2[1];
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(ColWrapper, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)(className, hashId, (0, _defineProperty2.default)({}, "".concat(className, "-twoLine"), labelLayout === 'twoLine')),
      style: style,
      ref: ref,
      children: [hiddenDoms, (title || tooltip || extra) && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(className, "-title ").concat(hashId).trim(),
        style: titleStyle,
        onClick: function onClick() {
          setCollapsed(!collapsed);
        },
        children: extra ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [titleDom, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            children: extra
          })]
        }) : titleDom
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          display: collapsible && collapsed ? 'none' : undefined
        },
        children: childrenDoms
      })]
    })
  }));
});
Group.displayName = 'ProForm-Group';
var _default = exports.default = Group;