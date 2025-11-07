"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genProColumnToColumn = genProColumnToColumn;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proField = require("@ant-design/pro-field");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _columnRender = require("./columnRender");
var _index = require("./index");
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
function genProColumnToColumn(params, parents) {
  var _columns$map;
  var columns = params.columns,
    counter = params.counter,
    columnEmptyText = params.columnEmptyText,
    type = params.type,
    editableUtils = params.editableUtils,
    marginSM = params.marginSM,
    _params$rowKey = params.rowKey,
    rowKey = _params$rowKey === void 0 ? 'id' : _params$rowKey,
    _params$childrenColum = params.childrenColumnName,
    childrenColumnName = _params$childrenColum === void 0 ? 'children' : _params$childrenColum,
    _params$proFilter = params.proFilter,
    proFilter = _params$proFilter === void 0 ? {} : _params$proFilter,
    proSort = params.proSort;
  var subNameRecord = new Map();
  return columns === null || columns === void 0 || (_columns$map = columns.map(function (columnProps, columnsIndex) {
    if (columnProps === _antd.Table.EXPAND_COLUMN) return columnProps;
    if (columnProps === _antd.Table.SELECTION_COLUMN) return columnProps;
    var _ref = columnProps,
      key = _ref.key,
      dataIndex = _ref.dataIndex,
      valueEnum = _ref.valueEnum,
      _ref$valueType = _ref.valueType,
      valueType = _ref$valueType === void 0 ? 'text' : _ref$valueType,
      children = _ref.children,
      onFilter = _ref.onFilter,
      _ref$filters = _ref.filters,
      filters = _ref$filters === void 0 ? [] : _ref$filters,
      sorter = _ref.sorter,
      columnFilteredValue = _ref.filteredValue;
    var columnKey = (0, _index.genColumnKey)(key || (dataIndex === null || dataIndex === void 0 ? void 0 : dataIndex.toString()), [parents === null || parents === void 0 ? void 0 : parents.key, columnsIndex].filter(Boolean).join('-'));
    // 这些都没有，说明是普通的表格不需要 pro 管理
    var noNeedPro = !valueEnum && !valueType && !children;
    if (noNeedPro) {
      return (0, _objectSpread2.default)({
        index: columnsIndex
      }, columnProps);
    }
    var config = counter.columnsMap[columnKey] || {
      fixed: columnProps.fixed
    };
    var genOnFilter = function genOnFilter() {
      if (onFilter === true) {
        return function (value, row) {
          return (0, _columnRender.defaultOnFilter)(value, row, dataIndex);
        };
      }
      return (0, _proUtils.omitBoolean)(onFilter);
    };

    // 对应筛选值，用作双向绑定
    var filteredValue = columnKey && (proFilter === null || proFilter === void 0 ? void 0 : proFilter[columnKey]) !== undefined ? proFilter === null || proFilter === void 0 ? void 0 : proFilter[columnKey] : null;
    // 对应排序值，用作双向绑定
    var sortOrder = columnKey && proSort[columnKey] !== undefined ? proSort[columnKey] : null;
    var keyName = rowKey;
    var tempColumns = (0, _objectSpread2.default)((0, _objectSpread2.default)({
      index: columnsIndex,
      key: columnKey
    }, columnProps), {}, {
      title: (0, _columnRender.renderColumnsTitle)(columnProps),
      valueEnum: valueEnum,
      filters: filters === true ? (0, _proField.proFieldParsingValueEnumToArray)((0, _proUtils.runFunction)(valueEnum, undefined)).filter(function (valueItem) {
        return valueItem && valueItem.value !== 'all';
      }) : filters,
      onFilter: genOnFilter(),
      filteredValue:
      // 优先使用用户明确设置的 filteredValue
      columnFilteredValue !== undefined ? columnFilteredValue :
      // 否则，只有在服务端筛选时才使用计算的 filteredValue
      filters && genOnFilter() == null ? filteredValue : undefined,
      sortOrder: sorter === true ? sortOrder : undefined,
      fixed: config.fixed,
      width: columnProps.width || (columnProps.fixed ? 200 : undefined),
      children: columnProps.children ? genProColumnToColumn((0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), {}, {
        columns: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.children) || []
      }), (0, _objectSpread2.default)((0, _objectSpread2.default)({}, columnProps), {}, {
        key: columnKey
      })) : undefined,
      render: function render(text, rowData, index) {
        if (typeof rowKey === 'function') {
          keyName = rowKey(rowData, index);
        }
        var uniqueKey;
        if ((0, _typeof2.default)(rowData) === 'object' && rowData !== null && Reflect.has(rowData, keyName)) {
          var _childrenColumnName;
          uniqueKey = rowData[keyName];
          var parentInfo = subNameRecord.get(uniqueKey) || [];
          (_childrenColumnName = rowData[childrenColumnName]) === null || _childrenColumnName === void 0 || _childrenColumnName.forEach(function (item) {
            var itemUniqueKey = item[keyName];
            if (!subNameRecord.has(itemUniqueKey)) {
              subNameRecord.set(itemUniqueKey, parentInfo.concat([index, childrenColumnName]));
            }
          });
        }
        var renderProps = {
          columnProps: columnProps,
          text: text,
          rowData: rowData,
          index: index,
          columnEmptyText: columnEmptyText,
          counter: counter,
          type: type,
          marginSM: marginSM,
          subName: subNameRecord.get(uniqueKey),
          editableUtils: editableUtils
        };
        return (0, _columnRender.columnRender)(renderProps);
      }
    });
    return (0, _proUtils.omitUndefinedAndEmptyArr)(tempColumns);
  })) === null || _columns$map === void 0 ? void 0 : _columns$map.filter(function (item) {
    return !item.hideInTable;
  });
}