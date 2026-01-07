"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _useBreakpoint = _interopRequireDefault(require("antd/lib/grid/hooks/useBreakpoint"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _Actions = _interopRequireDefault(require("../Actions"));
var _Loading = _interopRequireDefault(require("../Loading"));
var _TabPane = require("../TabPane");
var _style = _interopRequireDefault(require("./style"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["className", "style", "bodyStyle", "headStyle", "title", "subTitle", "extra", "wrap", "layout", "loading", "gutter", "tooltip", "split", "headerBordered", "bordered", "boxShadow", "children", "size", "actions", "ghost", "hoverable", "direction", "collapsed", "collapsible", "collapsibleIconRender", "colStyle", "defaultCollapsed", "onCollapse", "checked", "onChecked", "tabs", "type"];
var Card = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _classNames2;
  var className = props.className,
    style = props.style,
    bodyStyle = props.bodyStyle,
    headStyle = props.headStyle,
    title = props.title,
    subTitle = props.subTitle,
    extra = props.extra,
    _props$wrap = props.wrap,
    wrap = _props$wrap === void 0 ? false : _props$wrap,
    layout = props.layout,
    loading = props.loading,
    _props$gutter = props.gutter,
    gutter = _props$gutter === void 0 ? 0 : _props$gutter,
    tooltip = props.tooltip,
    split = props.split,
    _props$headerBordered = props.headerBordered,
    headerBordered = _props$headerBordered === void 0 ? false : _props$headerBordered,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? false : _props$bordered,
    _props$boxShadow = props.boxShadow,
    boxShadow = _props$boxShadow === void 0 ? false : _props$boxShadow,
    children = props.children,
    size = props.size,
    actions = props.actions,
    _props$ghost = props.ghost,
    ghost = _props$ghost === void 0 ? false : _props$ghost,
    _props$hoverable = props.hoverable,
    hoverable = _props$hoverable === void 0 ? false : _props$hoverable,
    direction = props.direction,
    controlCollapsed = props.collapsed,
    _props$collapsible = props.collapsible,
    collapsible = _props$collapsible === void 0 ? false : _props$collapsible,
    collapsibleIconRender = props.collapsibleIconRender,
    colStyle = props.colStyle,
    _props$defaultCollaps = props.defaultCollapsed,
    defaultCollapsed = _props$defaultCollaps === void 0 ? false : _props$defaultCollaps,
    onCollapse = props.onCollapse,
    checked = props.checked,
    onChecked = props.onChecked,
    tabs = props.tabs,
    type = props.type,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var screens = (0, _useBreakpoint.default)() || {
    lg: true,
    md: true,
    sm: true,
    xl: false,
    xs: false,
    xxl: false
  };
  var _useMergedState = (0, _useMergedState3.default)(defaultCollapsed, {
      value: controlCollapsed,
      onChange: onCollapse
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    setCollapsed = _useMergedState2[1];

  // 顺序决定如何进行响应式取值，按最大响应值依次取值，请勿修改。
  var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
  // 修改组合传给antd tabs的参数
  // @ts-ignore
  var ModifyTabItemsContent = (0, _TabPane.useLegacyItems)(tabs === null || tabs === void 0 ? void 0 : tabs.items, children, tabs);

  /**
   * 根据响应式获取 gutter, 参考 antd 实现
   *
   * @param gutter Gutter
   */
  var getNormalizedGutter = function getNormalizedGutter(gut) {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach(function (g, index) {
      if ((0, _typeof2.default)(g) === 'object') {
        for (var i = 0; i < responsiveArray.length; i += 1) {
          var breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  /**
   * 根据条件返回 style，负责返回空对象
   *
   * @param withStyle 是否符合条件
   * @param appendStyle 如果符合条件要返回的 style 属性
   */
  var getStyle = function getStyle(withStyle, appendStyle) {
    return withStyle ? appendStyle : {};
  };
  var getColSpanStyle = function getColSpanStyle(colSpan) {
    var span = colSpan;

    // colSpan 响应式
    if ((0, _typeof2.default)(colSpan) === 'object') {
      for (var i = 0; i < responsiveArray.length; i += 1) {
        var breakpoint = responsiveArray[i];
        if (screens !== null && screens !== void 0 && screens[breakpoint] && (colSpan === null || colSpan === void 0 ? void 0 : colSpan[breakpoint]) !== undefined) {
          span = colSpan[breakpoint];
          break;
        }
      }
    }

    // 当 colSpan 为 30% 或 300px 时
    var colSpanStyle = getStyle(typeof span === 'string' && /\d%|\dpx/i.test(span), {
      width: span,
      flexShrink: 0
    });
    return {
      span: span,
      colSpanStyle: colSpanStyle
    };
  };
  var prefixCls = getPrefixCls('pro-card');
  var _useStyle = (0, _style.default)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _getNormalizedGutter = getNormalizedGutter(gutter),
    _getNormalizedGutter2 = (0, _slicedToArray2.default)(_getNormalizedGutter, 2),
    horizontalGutter = _getNormalizedGutter2[0],
    verticalGutter = _getNormalizedGutter2[1];

  // 判断是否套了卡片，如果套了的话将自身卡片内部内容的 padding 设置为0
  var containProCard = false;
  var childrenArray = _react.default.Children.toArray(children);
  var childrenModified = childrenArray.map(function (element, index) {
    var _element$type;
    if (element !== null && element !== void 0 && (_element$type = element.type) !== null && _element$type !== void 0 && _element$type.isProCard) {
      containProCard = true;

      // 宽度
      var colSpan = element.props.colSpan;
      var _getColSpanStyle = getColSpanStyle(colSpan),
        span = _getColSpanStyle.span,
        colSpanStyle = _getColSpanStyle.colSpanStyle;
      var columnClassName = (0, _classnames.default)(["".concat(prefixCls, "-col")], hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-split-vertical"), split === 'vertical' && index !== childrenArray.length - 1), "".concat(prefixCls, "-split-horizontal"), split === 'horizontal' && index !== childrenArray.length - 1), "".concat(prefixCls, "-col-").concat(span), typeof span === 'number' && span >= 0 && span <= 24));
      var wrappedElement = wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, colSpanStyle), getStyle(horizontalGutter > 0, {
          paddingInlineEnd: horizontalGutter / 2,
          paddingInlineStart: horizontalGutter / 2
        })), getStyle(verticalGutter > 0, {
          paddingBlockStart: verticalGutter / 2,
          paddingBlockEnd: verticalGutter / 2
        })), colStyle),
        className: columnClassName,
        children: /*#__PURE__*/_react.default.cloneElement(element)
      }));
      return /*#__PURE__*/_react.default.cloneElement(wrappedElement, {
        key: "pro-card-col-".concat((element === null || element === void 0 ? void 0 : element.key) || index)
      });
    }
    return element;
  });
  var cardCls = (0, _classnames.default)("".concat(prefixCls), className, hashId, (_classNames2 = {}, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-border"), bordered), "".concat(prefixCls, "-box-shadow"), boxShadow), "".concat(prefixCls, "-contain-card"), containProCard), "".concat(prefixCls, "-loading"), loading), "".concat(prefixCls, "-split"), split === 'vertical' || split === 'horizontal'), "".concat(prefixCls, "-ghost"), ghost), "".concat(prefixCls, "-hoverable"), hoverable), "".concat(prefixCls, "-size-").concat(size), size), "".concat(prefixCls, "-type-").concat(type), type), "".concat(prefixCls, "-collapse"), collapsed), (0, _defineProperty2.default)(_classNames2, "".concat(prefixCls, "-checked"), checked)));
  var bodyCls = (0, _classnames.default)("".concat(prefixCls, "-body"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-body-center"), layout === 'center'), "".concat(prefixCls, "-body-direction-column"), split === 'horizontal' || direction === 'column'), "".concat(prefixCls, "-body-wrap"), wrap && containProCard));
  var cardBodyStyle = bodyStyle;
  var loadingDOM = /*#__PURE__*/_react.default.isValidElement(loading) ? loading : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Loading.default, {
    prefix: prefixCls,
    style: (bodyStyle === null || bodyStyle === void 0 ? void 0 : bodyStyle.padding) === 0 || (bodyStyle === null || bodyStyle === void 0 ? void 0 : bodyStyle.padding) === '0px' ? {
      padding: 24
    } : undefined
  });
  // 非受控情况下展示
  var collapsibleButton = collapsible && controlCollapsed === undefined && (collapsibleIconRender ? collapsibleIconRender({
    collapsed: collapsed
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RightOutlined, {
    onClick: function onClick() {
      if (collapsible === 'icon') setCollapsed(!collapsed);
    },
    rotate: !collapsed ? 90 : undefined,
    className: "".concat(prefixCls, "-collapsible-icon ").concat(hashId).trim()
  }));
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
    className: cardCls,
    style: style,
    ref: ref,
    onClick: function onClick(e) {
      var _rest$onClick;
      onChecked === null || onChecked === void 0 || onChecked(e);
      rest === null || rest === void 0 || (_rest$onClick = rest.onClick) === null || _rest$onClick === void 0 || _rest$onClick.call(rest, e);
    }
  }, (0, _omit.default)(rest, ['prefixCls', 'colSpan'])), {}, {
    children: [(title || extra || collapsibleButton) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-header"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-header-border"), headerBordered || type === 'inner'), "".concat(prefixCls, "-header-collapsible"), collapsibleButton)),
      style: headStyle,
      onClick: function onClick() {
        if (collapsible === 'header' || collapsible === true) setCollapsed(!collapsed);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(prefixCls, "-title ").concat(hashId).trim(),
        children: [collapsibleButton, /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
          label: title,
          tooltip: tooltip,
          subTitle: subTitle
        })]
      }), extra && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-extra ").concat(hashId).trim(),
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: extra
      })]
    }), tabs ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-tabs ").concat(hashId).trim(),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        onChange: tabs.onChange
      }, (0, _omit.default)(tabs, ['cardProps'])), {}, {
        // @ts-ignore
        items: ModifyTabItemsContent,
        children: loading ? loadingDOM : children
      }))
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: bodyCls,
      style: cardBodyStyle,
      children: loading ? loadingDOM : childrenModified
    }), actions ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Actions.default, {
      actions: actions,
      prefixCls: prefixCls
    }) : null]
  })));
});
var _default = exports.default = Card;