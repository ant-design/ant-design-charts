import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React from 'react';
import EditableProTable from "./index";
import { jsx as _jsx } from "react/jsx-runtime";
export function CellEditorTable(props) {
  var _props$columns;
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    editableKeys = _React$useState2[0],
    setEditableRowKeys = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dataIndex = _React$useState4[0],
    setDataIndex = _React$useState4[1];
  var rowKey = props.rowKey || 'id';

  // ============================ RowKey ============================
  var getRowKey = React.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return function (record, index) {
      var _ref;
      if (index === -1) {
        return record === null || record === void 0 ? void 0 : record[rowKey];
      }
      // 如果 props 中有name 的话，用index 来做行号，这样方便转化为 index
      if (props.name) {
        return index === null || index === void 0 ? void 0 : index.toString();
      }
      return (_ref = record === null || record === void 0 ? void 0 : record[rowKey]) !== null && _ref !== void 0 ? _ref : index === null || index === void 0 ? void 0 : index.toString();
    };
  }, [props.name, rowKey]);
  return /*#__PURE__*/_jsx(EditableProTable, _objectSpread(_objectSpread({
    bordered: true,
    pagination: false
  }, props), {}, {
    editable: _objectSpread({
      editableKeys: editableKeys
    }, props.editable),
    columns: (props === null || props === void 0 || (_props$columns = props.columns) === null || _props$columns === void 0 ? void 0 : _props$columns.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        editable: dataIndex.flat(1).join('.') === [item.dataIndex || item.key].flat(1).join('.') ? undefined : false,
        onCell: function onCell(record, rowIndex) {
          return {
            onDoubleClick: function onDoubleClick() {
              setEditableRowKeys([getRowKey(record, rowIndex)]);
              setDataIndex([item.dataIndex || item.key]);
            },
            onBlur: function onBlur() {
              setEditableRowKeys([]);
            }
          };
        }
      });
    })) || []
  }));
}