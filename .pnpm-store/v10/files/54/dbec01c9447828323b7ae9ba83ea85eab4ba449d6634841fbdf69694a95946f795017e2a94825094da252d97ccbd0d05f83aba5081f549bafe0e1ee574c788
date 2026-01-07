import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["rowKey", "dragSortKey", "dragSortHandlerRender", "onDragSortEnd", "onDataSourceChange", "defaultData", "dataSource", "onLoad"],
  _excluded2 = ["rowData", "index", "className"];
import { HolderOutlined } from '@ant-design/icons';
import { ConfigProvider } from 'antd';
import useMergedState from "rc-util/es/hooks/useMergedState";
import React, { useContext, useMemo } from 'react';
import ProTable from "../../Table";
import { useDragSort } from "../../utils/useDragSort";
import { useStyle } from "./style";
import { jsx as _jsx } from "react/jsx-runtime";
function DragSortTable(props) {
  var _otherProps$columns;
  var rowKey = props.rowKey,
    dragSortKey = props.dragSortKey,
    dragSortHandlerRender = props.dragSortHandlerRender,
    onDragSortEnd = props.onDragSortEnd,
    onDataSourceChange = props.onDataSourceChange,
    defaultData = props.defaultData,
    originDataSource = props.dataSource,
    onLoad = props.onLoad,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useMergedState = useMergedState(function () {
      return defaultData || [];
    }, {
      value: originDataSource,
      onChange: onDataSourceChange
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    dataSource = _useMergedState2[0],
    setDataSource = _useMergedState2[1];
  var _useStyle = useStyle(getPrefixCls('pro-table-drag')),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // 默认拖拽把手
  var DragHandle = useMemo(function () {
    return function (dragHandleProps) {
      var rowData = dragHandleProps.rowData,
        index = dragHandleProps.index,
        className = dragHandleProps.className,
        rest = _objectWithoutProperties(dragHandleProps, _excluded2);
      var defaultDom = /*#__PURE__*/_jsx(HolderOutlined, _objectSpread(_objectSpread({}, rest), {}, {
        className: "".concat(getPrefixCls('pro-table-drag-icon'), " ").concat(className || '', " ").concat(hashId || '').trim()
      }));
      var handel = dragSortHandlerRender ? dragSortHandlerRender(dragHandleProps === null || dragHandleProps === void 0 ? void 0 : dragHandleProps.rowData, dragHandleProps === null || dragHandleProps === void 0 ? void 0 : dragHandleProps.index) : defaultDom;
      return /*#__PURE__*/_jsx("div", _objectSpread(_objectSpread({}, rest), {}, {
        children: handel
      }));
    };
  }, [getPrefixCls]);

  // 使用自定义hooks获取拖拽相关组件的components集合
  var _useDragSort = useDragSort({
      dataSource: dataSource === null || dataSource === void 0 ? void 0 : dataSource.slice(),
      dragSortKey: dragSortKey,
      onDragSortEnd: onDragSortEnd,
      components: props.components,
      rowKey: rowKey,
      DragHandle: DragHandle
    }),
    components = _useDragSort.components,
    DndContext = _useDragSort.DndContext;
  var wrapOnload = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setDataSource(ds);
            return _context.abrupt("return", onLoad === null || onLoad === void 0 ? void 0 : onLoad(ds));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function wrapOnload(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  return wrapSSR( /*#__PURE__*/_jsx(ProTable, _objectSpread(_objectSpread({}, otherProps), {}, {
    columns: (_otherProps$columns = otherProps.columns) === null || _otherProps$columns === void 0 ? void 0 : _otherProps$columns.map(function (item) {
      if (item.dataIndex == dragSortKey || item.key === dragSortKey) {
        if (!item.render) {
          item.render = function () {
            return null;
          };
        }
      }
      return item;
    }),
    onLoad: wrapOnload,
    rowKey: rowKey,
    tableViewRender: function tableViewRender(_, defaultDom) {
      return /*#__PURE__*/_jsx(DndContext, {
        children: defaultDom
      });
    },
    dataSource: dataSource,
    components: components,
    onDataSourceChange: onDataSourceChange
  })));
}
export default DragSortTable;