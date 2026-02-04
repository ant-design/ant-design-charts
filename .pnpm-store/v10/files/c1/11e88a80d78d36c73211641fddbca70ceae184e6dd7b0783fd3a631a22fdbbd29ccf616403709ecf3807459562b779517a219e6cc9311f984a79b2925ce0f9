"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _Table = _interopRequireDefault(require("../../Table"));
var _useDragSort2 = require("../../utils/useDragSort");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["rowKey", "dragSortKey", "dragSortHandlerRender", "onDragSortEnd", "onDataSourceChange", "defaultData", "dataSource", "onLoad"],
  _excluded2 = ["rowData", "index", "className"];
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
    otherProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _useMergedState = (0, _useMergedState3.default)(function () {
      return defaultData || [];
    }, {
      value: originDataSource,
      onChange: onDataSourceChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    dataSource = _useMergedState2[0],
    setDataSource = _useMergedState2[1];
  var _useStyle = (0, _style.useStyle)(getPrefixCls('pro-table-drag')),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;

  // 默认拖拽把手
  var DragHandle = (0, _react.useMemo)(function () {
    return function (dragHandleProps) {
      var rowData = dragHandleProps.rowData,
        index = dragHandleProps.index,
        className = dragHandleProps.className,
        rest = (0, _objectWithoutProperties2.default)(dragHandleProps, _excluded2);
      var defaultDom = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.HolderOutlined, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        className: "".concat(getPrefixCls('pro-table-drag-icon'), " ").concat(className || '', " ").concat(hashId || '').trim()
      }));
      var handel = dragSortHandlerRender ? dragSortHandlerRender(dragHandleProps === null || dragHandleProps === void 0 ? void 0 : dragHandleProps.rowData, dragHandleProps === null || dragHandleProps === void 0 ? void 0 : dragHandleProps.index) : defaultDom;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        children: handel
      }));
    };
  }, [getPrefixCls]);

  // 使用自定义hooks获取拖拽相关组件的components集合
  var _useDragSort = (0, _useDragSort2.useDragSort)({
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
    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(ds) {
      return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
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
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, otherProps), {}, {
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(DndContext, {
        children: defaultDom
      });
    },
    dataSource: dataSource,
    components: components,
    onDataSourceChange: onDataSourceChange
  })));
}
var _default = exports.default = DragSortTable;