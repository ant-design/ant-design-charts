"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellEditorTable = CellEditorTable;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("./index"));
var _jsxRuntime = require("react/jsx-runtime");
function CellEditorTable(props) {
  var _props$columns;
  var _React$useState = _react.default.useState([]),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    editableKeys = _React$useState2[0],
    setEditableRowKeys = _React$useState2[1];
  var _React$useState3 = _react.default.useState([]),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    dataIndex = _React$useState4[0],
    setDataIndex = _React$useState4[1];
  var rowKey = props.rowKey || 'id';

  // ============================ RowKey ============================
  var getRowKey = _react.default.useMemo(function () {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({
    bordered: true,
    pagination: false
  }, props), {}, {
    editable: (0, _objectSpread2.default)({
      editableKeys: editableKeys
    }, props.editable),
    columns: (props === null || props === void 0 || (_props$columns = props.columns) === null || _props$columns === void 0 ? void 0 : _props$columns.map(function (item) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
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