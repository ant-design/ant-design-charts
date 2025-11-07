"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseProList = BaseProList;
exports.ProList = ProList;
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _proTable = _interopRequireDefault(require("@ant-design/pro-table"));
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _react = _interopRequireWildcard(require("react"));
var _ListView = _interopRequireDefault(require("./ListView"));
var _index = require("./style/index");
require("antd/lib/list/style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["metas", "split", "footer", "rowKey", "tooltip", "className", "options", "search", "expandable", "showActions", "showExtra", "rowSelection", "pagination", "itemLayout", "renderItem", "grid", "itemCardProps", "onRow", "onItem", "rowClassName", "locale", "itemHeaderRender", "itemTitleRender"]; // 兼容性代码
function NoProVideProList(props) {
  var metals = props.metas,
    split = props.split,
    footer = props.footer,
    rowKey = props.rowKey,
    tooltip = props.tooltip,
    className = props.className,
    _props$options = props.options,
    options = _props$options === void 0 ? false : _props$options,
    _props$search = props.search,
    search = _props$search === void 0 ? false : _props$search,
    expandable = props.expandable,
    showActions = props.showActions,
    showExtra = props.showExtra,
    _props$rowSelection = props.rowSelection,
    propRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
    _props$pagination = props.pagination,
    propsPagination = _props$pagination === void 0 ? false : _props$pagination,
    itemLayout = props.itemLayout,
    renderItem = props.renderItem,
    grid = props.grid,
    itemCardProps = props.itemCardProps,
    onRow = props.onRow,
    onItem = props.onItem,
    rowClassName = props.rowClassName,
    locale = props.locale,
    itemHeaderRender = props.itemHeaderRender,
    itemTitleRender = props.itemTitleRender,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var actionRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(rest.actionRef, function () {
    return actionRef.current;
  }, [actionRef.current]);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var proTableColumns = (0, _react.useMemo)(function () {
    var columns = [];
    Object.keys(metals || {}).forEach(function (key) {
      var meta = metals[key] || {};
      var valueType = meta.valueType;
      if (!valueType) {
        // 根据 key 给不同的 valueType
        if (key === 'avatar') {
          valueType = 'avatar';
        }
        if (key === 'actions') {
          valueType = 'option';
        }
        if (key === 'description') {
          valueType = 'textarea';
        }
      }
      columns.push((0, _objectSpread2.default)((0, _objectSpread2.default)({
        listKey: key,
        dataIndex: (meta === null || meta === void 0 ? void 0 : meta.dataIndex) || key
      }, meta), {}, {
        valueType: valueType
      }));
    });
    return columns;
  }, [metals]);
  var prefixCls = getPrefixCls('pro-list', props.prefixCls);
  var _useStyle = (0, _index.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var listClassName = (0, _classnames.default)(prefixCls, hashId, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-no-split"), !split));
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_proTable.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    tooltip: tooltip
  }, rest), {}, {
    actionRef: actionRef,
    pagination: propsPagination,
    type: "list",
    rowSelection: propRowSelection,
    search: search,
    options: options,
    className: (0, _classnames.default)(prefixCls, className, listClassName),
    columns: proTableColumns,
    rowKey: rowKey,
    tableViewRender: function tableViewRender(_ref) {
      var columns = _ref.columns,
        size = _ref.size,
        pagination = _ref.pagination,
        rowSelection = _ref.rowSelection,
        dataSource = _ref.dataSource,
        loading = _ref.loading;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListView.default, {
        grid: grid,
        itemCardProps: itemCardProps,
        itemTitleRender: itemTitleRender,
        prefixCls: props.prefixCls,
        columns: columns,
        renderItem: renderItem,
        actionRef: actionRef,
        dataSource: dataSource || [],
        size: size,
        footer: footer,
        split: split,
        rowKey: rowKey,
        expandable: expandable,
        rowSelection: propRowSelection === false ? undefined : rowSelection,
        showActions: showActions,
        showExtra: showExtra,
        pagination: pagination,
        itemLayout: itemLayout,
        loading: loading,
        itemHeaderRender: itemHeaderRender,
        onRow: onRow,
        onItem: onItem,
        rowClassName: rowClassName,
        locale: locale
      });
    }
  })));
}
function BaseProList(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(NoProVideProList, (0, _objectSpread2.default)({
      cardProps: false,
      search: false,
      toolBarRender: false
    }, props))
  });
}
function ProList(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proProvider.ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(NoProVideProList, (0, _objectSpread2.default)({}, props))
  });
}
var _default = exports.default = ProList;