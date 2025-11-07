"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryFilter = QueryFilter;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _BaseForm = require("../../BaseForm");
var _Actions = _interopRequireDefault(require("./Actions"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["collapsed", "layout", "defaultCollapsed", "defaultColsNumber", "defaultFormItemsNumber", "span", "searchGutter", "searchText", "resetText", "optionRender", "collapseRender", "onReset", "onCollapse", "labelWidth", "style", "split", "preserve", "ignoreRules", "showHiddenNum", "submitterColSpanProps"];
var _document;
/* eslint-disable no-param-reassign */
var CONFIG_SPAN_BREAKPOINTS = {
  xs: 513,
  sm: 513,
  md: 785,
  lg: 992,
  xl: 1057,
  xxl: Infinity
};
/** 配置表单列变化的容器宽度断点 */
var BREAKPOINTS = {
  vertical: [
  // [breakpoint, cols, layout]
  [513, 1, 'vertical'], [785, 2, 'vertical'], [1057, 3, 'vertical'], [Infinity, 4, 'vertical']],
  default: [[513, 1, 'vertical'], [701, 2, 'vertical'], [1062, 3, 'horizontal'], [1352, 3, 'horizontal'], [Infinity, 4, 'horizontal']]
};

/**
 * 合并用户和默认的配置
 *
 * @param layout
 * @param width
 */
var getSpanConfig = function getSpanConfig(layout, width, span) {
  if (span && typeof span === 'number') {
    return {
      span: span,
      layout: layout
    };
  }
  var spanConfig = span ? ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].map(function (key) {
    return [CONFIG_SPAN_BREAKPOINTS[key], 24 / span[key], 'horizontal'];
  }) : BREAKPOINTS[layout || 'default'];
  var breakPoint = (spanConfig || BREAKPOINTS.default).find(function (item) {
    return width < item[0] + 16;
  } // 16 = 2 * (ant-row -8px margin)
  );
  if (!breakPoint) {
    return {
      span: 8,
      layout: 'horizontal'
    };
  }
  return {
    span: 24 / breakPoint[1],
    layout: breakPoint === null || breakPoint === void 0 ? void 0 : breakPoint[2]
  };
};
var flatMapItems = function flatMapItems(items, ignoreRules) {
  return items === null || items === void 0 ? void 0 : items.flatMap(function (item) {
    var _item$type, _item$props;
    if ((item === null || item === void 0 || (_item$type = item.type) === null || _item$type === void 0 ? void 0 : _item$type.displayName) === 'ProForm-Group' && !((_item$props = item.props) !== null && _item$props !== void 0 && _item$props.title)) {
      return item.props.children;
    }
    if (ignoreRules && /*#__PURE__*/_react.default.isValidElement(item)) {
      var _item$props2;
      return /*#__PURE__*/_react.default.cloneElement(item, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item.props), {}, {
        formItemProps: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, (_item$props2 = item.props) === null || _item$props2 === void 0 ? void 0 : _item$props2.formItemProps), {}, {
          rules: []
        })
      }));
    }
    return item;
  });
};
var QueryFilterContent = function QueryFilterContent(props) {
  var _props$submitterColSp5, _props$submitterColSp6, _props$submitterColSp7, _props$submitterColSp8;
  var intl = (0, _proProvider.useIntl)();
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var resetText = props.resetText || intl.getMessage('tableForm.reset', '重置');
  var searchText = props.searchText || intl.getMessage('tableForm.search', '搜索');
  var _useMergedState = (0, _useMergedState3.default)(function () {
      return props.defaultCollapsed && !!props.submitter;
    }, {
      value: props.collapsed,
      onChange: props.onCollapse
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    collapsed = _useMergedState2[0],
    setCollapsed = _useMergedState2[1];
  var optionRender = props.optionRender,
    collapseRender = props.collapseRender,
    split = props.split,
    items = props.items,
    spanSize = props.spanSize,
    showLength = props.showLength,
    searchGutter = props.searchGutter,
    showHiddenNum = props.showHiddenNum;
  var submitter = (0, _react.useMemo)(function () {
    if (!props.submitter || optionRender === false) {
      return null;
    }
    return /*#__PURE__*/_react.default.cloneElement(props.submitter, (0, _objectSpread2.default)({
      searchConfig: {
        resetText: resetText,
        submitText: searchText
      },
      render: optionRender ? function (_, dom) {
        return optionRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
          resetText: resetText,
          searchText: searchText
        }), props, dom);
      } : optionRender
    }, props.submitter.props));
  }, [props, resetText, searchText, optionRender]);

  // totalSpan 统计控件占的位置，计算 offset 保证查询按钮在最后一列
  var totalSpan = 0;
  var itemLength = 0;
  //首个表单项是否占满第一行
  var firstRowFull = false;
  // totalSize 统计控件占的份数
  var totalSize = 0;

  // for split compute
  var currentSpan = 0;

  // 处理过，包含是否需要隐藏的 数组
  var processedList = flatMapItems(items, props.ignoreRules).map(function (item, index) {
    var _item$props$colSize, _item$props3, _props2, _item$props4;
    // 如果 formItem 自己配置了 hidden，默认使用它自己的
    var colSize = /*#__PURE__*/_react.default.isValidElement(item) ? (_item$props$colSize = item === null || item === void 0 || (_item$props3 = item.props) === null || _item$props3 === void 0 ? void 0 : _item$props3.colSize) !== null && _item$props$colSize !== void 0 ? _item$props$colSize : 1 : 1;
    var colSpan = Math.min(spanSize.span * (colSize || 1), 24);
    // 计算总的 totalSpan 长度
    totalSpan += colSpan;
    // 计算总的 colSize 长度
    totalSize += colSize;
    if (index === 0) {
      var _props;
      firstRowFull = colSpan === 24 && !(item !== null && item !== void 0 && (_props = item.props) !== null && _props !== void 0 && _props.hidden);
    }
    var hidden = (item === null || item === void 0 || (_props2 = item.props) === null || _props2 === void 0 ? void 0 : _props2.hidden) ||
    // 如果收起了
    collapsed && (firstRowFull ||
    // 如果 超过显示长度 且 总长度超过了 24
    totalSize > showLength) && !!index;
    itemLength += 1;
    var itemKey = /*#__PURE__*/_react.default.isValidElement(item) && (item.key || "".concat((_item$props4 = item.props) === null || _item$props4 === void 0 ? void 0 : _item$props4.name)) || index;
    if ( /*#__PURE__*/_react.default.isValidElement(item) && hidden) {
      if (!props.preserve) {
        return {
          itemDom: null,
          colSpan: 0,
          hidden: true
        };
      }
      return {
        itemDom: /*#__PURE__*/_react.default.cloneElement(item, {
          hidden: true,
          key: itemKey || index
        }),
        hidden: true,
        colSpan: colSpan
      };
    }
    return {
      itemDom: item,
      colSpan: colSpan,
      hidden: false
    };
  });
  var doms = processedList.map(function (itemProps, index) {
    var _props3, _itemDom$props;
    var itemDom = itemProps.itemDom,
      colSpan = itemProps.colSpan;
    var hidden = itemDom === null || itemDom === void 0 || (_props3 = itemDom.props) === null || _props3 === void 0 ? void 0 : _props3.hidden;
    if (hidden) return itemDom;

    // 每一列的key, 一般是存在的
    var itemKey = /*#__PURE__*/_react.default.isValidElement(itemDom) && (itemDom.key || "".concat((_itemDom$props = itemDom.props) === null || _itemDom$props === void 0 ? void 0 : _itemDom$props.name)) || index;
    if (24 - currentSpan % 24 < colSpan) {
      // 如果当前行空余位置放不下，那么折行
      totalSpan += 24 - currentSpan % 24;
      currentSpan += 24 - currentSpan % 24;
    }
    currentSpan += colSpan;
    if (split && currentSpan % 24 === 0 && index < itemLength - 1) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
        span: colSpan,
        className: "".concat(props.baseClassName, "-row-split-line ").concat(props.baseClassName, "-row-split ").concat(hashId).trim(),
        children: itemDom
      }, itemKey);
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
      className: "".concat(props.baseClassName, "-row-split ").concat(hashId).trim(),
      span: colSpan,
      children: itemDom
    }, itemKey);
  });
  var hiddenNum = showHiddenNum && processedList.filter(function (item) {
    return item.hidden;
  }).length;

  /** 是否需要展示 collapseRender */
  var needCollapseRender = (0, _react.useMemo)(function () {
    if (totalSpan < 24 || totalSize <= showLength) {
      return false;
    }
    return true;
  }, [totalSize, showLength, totalSpan]);
  var offset = (0, _react.useMemo)(function () {
    var _props$submitterColSp, _props$submitterColSp2;
    var offsetSpan = currentSpan % 24 + ((_props$submitterColSp = (_props$submitterColSp2 = props.submitterColSpanProps) === null || _props$submitterColSp2 === void 0 ? void 0 : _props$submitterColSp2.span) !== null && _props$submitterColSp !== void 0 ? _props$submitterColSp : spanSize.span);
    if (offsetSpan > 24) {
      var _props$submitterColSp3, _props$submitterColSp4;
      return 24 - ((_props$submitterColSp3 = (_props$submitterColSp4 = props.submitterColSpanProps) === null || _props$submitterColSp4 === void 0 ? void 0 : _props$submitterColSp4.span) !== null && _props$submitterColSp3 !== void 0 ? _props$submitterColSp3 : spanSize.span);
    }
    return 24 - offsetSpan;
  }, [currentSpan, currentSpan % 24 + ((_props$submitterColSp5 = (_props$submitterColSp6 = props.submitterColSpanProps) === null || _props$submitterColSp6 === void 0 ? void 0 : _props$submitterColSp6.span) !== null && _props$submitterColSp5 !== void 0 ? _props$submitterColSp5 : spanSize.span), (_props$submitterColSp7 = props.submitterColSpanProps) === null || _props$submitterColSp7 === void 0 ? void 0 : _props$submitterColSp7.span]);
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-query-filter');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
    gutter: searchGutter,
    justify: "start",
    className: (0, _classnames.default)("".concat(baseClassName, "-row"), hashId),
    children: [doms, submitter && /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      span: spanSize.span,
      offset: offset,
      className: (0, _classnames.default)((_props$submitterColSp8 = props.submitterColSpanProps) === null || _props$submitterColSp8 === void 0 ? void 0 : _props$submitterColSp8.className)
    }, props.submitterColSpanProps), {}, {
      style: {
        textAlign: 'end'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
        label: " ",
        colon: false,
        shouldUpdate: false,
        className: "".concat(baseClassName, "-actions ").concat(hashId).trim(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Actions.default, {
          hiddenNum: hiddenNum,
          collapsed: collapsed,
          collapseRender: needCollapseRender ? collapseRender : false,
          submitter: submitter,
          setCollapsed: setCollapsed
        }, "pro-form-query-filter-actions")
      })
    }), "submitter")]
  }, "resize-observer-row");
};
var defaultWidth = (0, _proUtils.isBrowser)() ? (_document = document) === null || _document === void 0 || (_document = _document.body) === null || _document === void 0 ? void 0 : _document.clientWidth : 1024;
function QueryFilter(props) {
  var controlCollapsed = props.collapsed,
    layout = props.layout,
    _props$defaultCollaps = props.defaultCollapsed,
    defaultCollapsed = _props$defaultCollaps === void 0 ? true : _props$defaultCollaps,
    defaultColsNumber = props.defaultColsNumber,
    defaultFormItemsNumber = props.defaultFormItemsNumber,
    span = props.span,
    _props$searchGutter = props.searchGutter,
    searchGutter = _props$searchGutter === void 0 ? 24 : _props$searchGutter,
    searchText = props.searchText,
    resetText = props.resetText,
    optionRender = props.optionRender,
    collapseRender = props.collapseRender,
    onReset = props.onReset,
    onCollapse = props.onCollapse,
    _props$labelWidth = props.labelWidth,
    labelWidth = _props$labelWidth === void 0 ? '80' : _props$labelWidth,
    style = props.style,
    split = props.split,
    _props$preserve = props.preserve,
    preserve = _props$preserve === void 0 ? true : _props$preserve,
    ignoreRules = props.ignoreRules,
    _props$showHiddenNum = props.showHiddenNum,
    showHiddenNum = _props$showHiddenNum === void 0 ? false : _props$showHiddenNum,
    submitterColSpanProps = props.submitterColSpanProps,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
  var baseClassName = context.getPrefixCls('pro-query-filter');
  var _useStyle = (0, _style.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useMountMergeState = (0, _proUtils.useMountMergeState)(function () {
      return typeof (style === null || style === void 0 ? void 0 : style.width) === 'number' ? style === null || style === void 0 ? void 0 : style.width : defaultWidth;
    }),
    _useMountMergeState2 = (0, _slicedToArray2.default)(_useMountMergeState, 2),
    width = _useMountMergeState2[0],
    setWidth = _useMountMergeState2[1];
  var spanSize = (0, _react.useMemo)(function () {
    return getSpanConfig(layout, width + 16, span);
  }, [layout, width, span]);
  var showLength = (0, _react.useMemo)(function () {
    if (defaultFormItemsNumber !== undefined) {
      return defaultFormItemsNumber;
    }
    if (defaultColsNumber !== undefined) {
      // 折叠为一行，需要处理多行的情况请使用 defaultFormItemsNumber
      var oneRowControlsNumber = 24 / spanSize.span - 1;
      return defaultColsNumber > oneRowControlsNumber ? oneRowControlsNumber : defaultColsNumber;
    }
    return Math.max(1, 24 / spanSize.span - 1);
  }, [defaultColsNumber, defaultFormItemsNumber, spanSize.span]);

  /** 计算最大宽度防止溢出换行 */
  var formItemFixStyle = (0, _react.useMemo)(function () {
    if (labelWidth && spanSize.layout !== 'vertical' && labelWidth !== 'auto') {
      return {
        labelCol: {
          flex: "0 0 ".concat(labelWidth, "px")
        },
        wrapperCol: {
          style: {
            maxWidth: "calc(100% - ".concat(labelWidth, "px)")
          }
        },
        style: {
          flexWrap: 'nowrap'
        }
      };
    }
    return undefined;
  }, [spanSize.layout, labelWidth]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
    onResize: function onResize(offset) {
      if (width !== offset.width && offset.width > 17) {
        setWidth(offset.width);
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-container ").concat(hashId),
      style: props.containerStyle,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BaseForm.BaseForm, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        isKeyPressSubmit: true,
        preserve: preserve
      }, rest), {}, {
        className: (0, _classnames.default)(baseClassName, hashId, rest.className),
        onReset: onReset,
        style: style,
        layout: spanSize.layout,
        fieldProps: {
          style: {
            width: '100%'
          }
        },
        formItemProps: formItemFixStyle,
        groupProps: {
          titleStyle: {
            display: 'inline-block',
            marginInlineEnd: 16
          }
        },
        contentRender: function contentRender(items, renderSubmitter, form) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(QueryFilterContent, {
            spanSize: spanSize,
            collapsed: controlCollapsed,
            form: form,
            submitterColSpanProps: submitterColSpanProps,
            collapseRender: collapseRender,
            defaultCollapsed: defaultCollapsed,
            onCollapse: onCollapse,
            optionRender: optionRender,
            submitter: renderSubmitter,
            items: items,
            split: split,
            baseClassName: baseClassName,
            resetText: props.resetText,
            searchText: props.searchText,
            searchGutter: searchGutter,
            preserve: preserve,
            ignoreRules: ignoreRules,
            showLength: showLength,
            showHiddenNum: showHiddenNum
          });
        }
      }))
    })
  }, "resize-observer"));
}