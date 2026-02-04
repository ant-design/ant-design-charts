import _typeof from "@babel/runtime/helpers/esm/typeof";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { proFieldParsingValueEnumToArray } from '@ant-design/pro-field';
import { omitBoolean, omitUndefinedAndEmptyArr, runFunction } from '@ant-design/pro-utils';
import { Table } from 'antd';
import { columnRender, defaultOnFilter, renderColumnsTitle } from "./columnRender";
import { genColumnKey } from "./index";
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
export function genProColumnToColumn(params, parents) {
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
    if (columnProps === Table.EXPAND_COLUMN) return columnProps;
    if (columnProps === Table.SELECTION_COLUMN) return columnProps;
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
    var columnKey = genColumnKey(key || (dataIndex === null || dataIndex === void 0 ? void 0 : dataIndex.toString()), [parents === null || parents === void 0 ? void 0 : parents.key, columnsIndex].filter(Boolean).join('-'));
    // 这些都没有，说明是普通的表格不需要 pro 管理
    var noNeedPro = !valueEnum && !valueType && !children;
    if (noNeedPro) {
      return _objectSpread({
        index: columnsIndex
      }, columnProps);
    }
    var config = counter.columnsMap[columnKey] || {
      fixed: columnProps.fixed
    };
    var genOnFilter = function genOnFilter() {
      if (onFilter === true) {
        return function (value, row) {
          return defaultOnFilter(value, row, dataIndex);
        };
      }
      return omitBoolean(onFilter);
    };

    // 对应筛选值，用作双向绑定
    var filteredValue = columnKey && (proFilter === null || proFilter === void 0 ? void 0 : proFilter[columnKey]) !== undefined ? proFilter === null || proFilter === void 0 ? void 0 : proFilter[columnKey] : null;
    // 对应排序值，用作双向绑定
    var sortOrder = columnKey && proSort[columnKey] !== undefined ? proSort[columnKey] : null;
    var keyName = rowKey;
    var tempColumns = _objectSpread(_objectSpread({
      index: columnsIndex,
      key: columnKey
    }, columnProps), {}, {
      title: renderColumnsTitle(columnProps),
      valueEnum: valueEnum,
      filters: filters === true ? proFieldParsingValueEnumToArray(runFunction(valueEnum, undefined)).filter(function (valueItem) {
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
      children: columnProps.children ? genProColumnToColumn(_objectSpread(_objectSpread({}, params), {}, {
        columns: (columnProps === null || columnProps === void 0 ? void 0 : columnProps.children) || []
      }), _objectSpread(_objectSpread({}, columnProps), {}, {
        key: columnKey
      })) : undefined,
      render: function render(text, rowData, index) {
        if (typeof rowKey === 'function') {
          keyName = rowKey(rowData, index);
        }
        var uniqueKey;
        if (_typeof(rowData) === 'object' && rowData !== null && Reflect.has(rowData, keyName)) {
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
        return columnRender(renderProps);
      }
    });
    return omitUndefinedAndEmptyArr(tempColumns);
  })) === null || _columns$map === void 0 ? void 0 : _columns$map.filter(function (item) {
    return !item.hideInTable;
  });
}