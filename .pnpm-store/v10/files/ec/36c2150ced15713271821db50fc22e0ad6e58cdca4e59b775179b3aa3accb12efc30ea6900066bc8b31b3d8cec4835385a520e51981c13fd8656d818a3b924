"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var _useLazyKVMap3 = _interopRequireDefault(require("antd/lib/table/hooks/useLazyKVMap"));
var _usePagination3 = _interopRequireDefault(require("antd/lib/table/hooks/usePagination"));
var _useSelection3 = _interopRequireDefault(require("antd/lib/table/hooks/useSelection"));
var _classnames = _interopRequireDefault(require("classnames"));
var _get = _interopRequireDefault(require("rc-util/lib/utils/get"));
var _react = _interopRequireWildcard(require("react"));
var _Item = _interopRequireDefault(require("./Item"));
var _constants = require("./constants");
var _proUtils = require("@ant-design/pro-utils");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["dataSource", "columns", "rowKey", "showActions", "showExtra", "prefixCls", "actionRef", "itemTitleRender", "renderItem", "itemCardProps", "itemHeaderRender", "expandable", "rowSelection", "pagination", "onRow", "onItem", "rowClassName"];
function ListView(props) {
  var dataSource = props.dataSource,
    columns = props.columns,
    rowKey = props.rowKey,
    showActions = props.showActions,
    showExtra = props.showExtra,
    customizePrefixCls = props.prefixCls,
    actionRef = props.actionRef,
    itemTitleRender = props.itemTitleRender,
    _renderItem = props.renderItem,
    itemCardProps = props.itemCardProps,
    itemHeaderRender = props.itemHeaderRender,
    expandableConfig = props.expandable,
    rowSelection = props.rowSelection,
    pagination = props.pagination,
    onRow = props.onRow,
    onItem = props.onItem,
    rowClassName = props.rowClassName,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_proProvider.ProProvider),
    hashId = _useContext.hashId;
  var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext2.getPrefixCls;
  var getRowKey = _react.default.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return function (record, index) {
      return record[rowKey] || index;
    };
  }, [rowKey]);
  var _useLazyKVMap = (0, _useLazyKVMap3.default)(dataSource, 'children', getRowKey),
    _useLazyKVMap2 = (0, _slicedToArray2.default)(_useLazyKVMap, 1),
    getRecordByKey = _useLazyKVMap2[0];
  var usePaginationArgs = [function () {}, pagination];
  // 兼容 5.2.0 以下的版本
  if ((0, _proUtils.compareVersions)(_antd.version, '5.3.0') < 0) usePaginationArgs.reverse();
  // 合并分页的的配置，这里是为了兼容 antd 的分页
  var _usePagination = (0, _usePagination3.default)(dataSource.length, usePaginationArgs[0], usePaginationArgs[1]),
    _usePagination2 = (0, _slicedToArray2.default)(_usePagination, 1),
    mergedPagination = _usePagination2[0];
  /** 根据分页来返回不同的数据，模拟 table */
  var pageData = _react.default.useMemo(function () {
    if (pagination === false || !mergedPagination.pageSize || dataSource.length < mergedPagination.total) {
      return dataSource;
    }
    var _mergedPagination$cur = mergedPagination.current,
      current = _mergedPagination$cur === void 0 ? 1 : _mergedPagination$cur,
      _mergedPagination$pag = mergedPagination.pageSize,
      pageSize = _mergedPagination$pag === void 0 ? 10 : _mergedPagination$pag;
    var currentPageData = dataSource.slice((current - 1) * pageSize, current * pageSize);
    return currentPageData;
  }, [dataSource, mergedPagination, pagination]);
  var prefixCls = getPrefixCls('pro-list', customizePrefixCls);

  /** 提供和 table 一样的 rowSelection 配置 */
  var useSelectionArgs = [{
    getRowKey: getRowKey,
    getRecordByKey: getRecordByKey,
    prefixCls: prefixCls,
    data: dataSource,
    pageData: pageData,
    expandType: 'row',
    childrenColumnName: 'children',
    locale: {}
  }, rowSelection
  // 这个 API 用的不好，先 any 一下
  ];

  // 兼容 5.2.0 以下的版本
  if ((0, _proUtils.compareVersions)(_antd.version, '5.3.0') < 0) useSelectionArgs.reverse();
  var _useSelection = _useSelection3.default.apply(void 0, useSelectionArgs),
    _useSelection2 = (0, _slicedToArray2.default)(_useSelection, 2),
    selectItemRender = _useSelection2[0],
    selectedKeySet = _useSelection2[1];

  // 提供和 Table 一样的 expand 支持
  var _ref = expandableConfig || {},
    expandedRowKeys = _ref.expandedRowKeys,
    defaultExpandedRowKeys = _ref.defaultExpandedRowKeys,
    _ref$defaultExpandAll = _ref.defaultExpandAllRows,
    defaultExpandAllRows = _ref$defaultExpandAll === void 0 ? true : _ref$defaultExpandAll,
    onExpand = _ref.onExpand,
    onExpandedRowsChange = _ref.onExpandedRowsChange,
    rowExpandable = _ref.rowExpandable;

  /** 展开收起功能区域 star */
  var _React$useState = _react.default.useState(function () {
      if (defaultExpandedRowKeys) {
        return defaultExpandedRowKeys;
      }
      if (defaultExpandAllRows !== false) {
        return dataSource.map(getRowKey);
      }
      return [];
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    innerExpandedKeys = _React$useState2[0],
    setInnerExpandedKeys = _React$useState2[1];
  var mergedExpandedKeys = _react.default.useMemo(function () {
    return new Set(expandedRowKeys || innerExpandedKeys || []);
  }, [expandedRowKeys, innerExpandedKeys]);
  var onTriggerExpand = _react.default.useCallback(function (record) {
    var key = getRowKey(record, dataSource.indexOf(record));
    var newExpandedKeys;
    var hasKey = mergedExpandedKeys.has(key);
    if (hasKey) {
      mergedExpandedKeys.delete(key);
      newExpandedKeys = (0, _toConsumableArray2.default)(mergedExpandedKeys);
    } else {
      newExpandedKeys = [].concat((0, _toConsumableArray2.default)(mergedExpandedKeys), [key]);
    }
    setInnerExpandedKeys(newExpandedKeys);
    if (onExpand) {
      onExpand(!hasKey, record);
    }
    if (onExpandedRowsChange) {
      onExpandedRowsChange(newExpandedKeys);
    }
  }, [getRowKey, mergedExpandedKeys, dataSource, onExpand, onExpandedRowsChange]);

  /** 展开收起功能区域 end */

  /** 这个是 选择框的 render 方法 为了兼容 antd 的 table,用了同样的渲染逻辑 所以看起来有点奇怪 */
  var selectItemDom = selectItemRender([])[0];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    className: (0, _classnames.default)(getPrefixCls('pro-list-container', customizePrefixCls), hashId, rest.className),
    dataSource: pageData,
    pagination: pagination && mergedPagination,
    renderItem: function renderItem(item, index) {
      var _actionRef$current;
      var listItemProps = {
        className: typeof rowClassName === 'function' ? rowClassName(item, index) : rowClassName
      };
      columns === null || columns === void 0 || columns.forEach(function (column) {
        var listKey = column.listKey,
          cardActionProps = column.cardActionProps;
        if (!_constants.PRO_LIST_KEYS_MAP.has(listKey)) {
          return;
        }
        var dataIndex = column.dataIndex || listKey || column.key;
        var rawData = Array.isArray(dataIndex) ? (0, _get.default)(item, dataIndex) : item[dataIndex];

        /** 如果cardActionProps 需要直接使用源数组，因为 action 必须要源数组 */
        if (cardActionProps === 'actions' && listKey === 'actions') {
          listItemProps.cardActionProps = cardActionProps;
        }
        // 调用protable的列配置渲染数据
        var data = column.render ? column.render(rawData, item, index) : rawData;
        if (data !== '-') listItemProps[column.listKey] = data;
      });
      var checkboxDom;
      if (selectItemDom && selectItemDom.render) {
        checkboxDom = selectItemDom.render(item, item, index);
      }
      var _ref2 = ((_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 ? void 0 : _actionRef$current.isEditable((0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          index: index
        }))) || {},
        isEditable = _ref2.isEditable,
        recordKey = _ref2.recordKey;
      var isChecked = selectedKeySet.has(recordKey || index);
      var defaultDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Item.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        cardProps: rest.grid ? (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, itemCardProps), rest.grid), {}, {
          checked: isChecked,
          onChange: /*#__PURE__*/_react.default.isValidElement(checkboxDom) ? function (changeChecked) {
            var _checkboxDom;
            return (_checkboxDom = checkboxDom) === null || _checkboxDom === void 0 || (_checkboxDom = _checkboxDom.props) === null || _checkboxDom === void 0 ? void 0 : _checkboxDom.onChange({
              nativeEvent: {},
              changeChecked: changeChecked
            });
          } : undefined
        }) : undefined
      }, listItemProps), {}, {
        recordKey: recordKey,
        isEditable: isEditable || false,
        expandable: expandableConfig,
        expand: mergedExpandedKeys.has(getRowKey(item, index)),
        onExpand: function onExpand() {
          onTriggerExpand(item);
        },
        index: index,
        record: item,
        item: item,
        showActions: showActions,
        showExtra: showExtra,
        itemTitleRender: itemTitleRender,
        itemHeaderRender: itemHeaderRender,
        rowSupportExpand: !rowExpandable || rowExpandable && rowExpandable(item),
        selected: selectedKeySet.has(getRowKey(item, index)),
        checkbox: checkboxDom,
        onRow: onRow,
        onItem: onItem
      }), recordKey);
      if (_renderItem) {
        return _renderItem(item, index, defaultDom);
      }
      return defaultDom;
    }
  }));
}
var _default = exports.default = ListView;