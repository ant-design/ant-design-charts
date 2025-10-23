"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDragSort = useDragSort;
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var _core = require("@dnd-kit/core");
var _modifiers = require("@dnd-kit/modifiers");
var _sortable = require("@dnd-kit/sortable");
var _utilities = require("@dnd-kit/utilities");
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["DragHandle", "dragSortKey"],
  _excluded2 = ["dragSortKey"];
var SortableItemContextValue = /*#__PURE__*/(0, _react.createContext)({
  handle: null
});

/**
 * 拖拽排序表格的行，
 * 如果有 DragHandle 回给 dragSortKey 所在的行注入 provide 和 handle
 * 如果没有整个行都支持拖拽
 * @param props
 * @returns
 */
var SortableRow = function SortableRow(props) {
  var _useSortable = (0, _sortable.useSortable)({
      id: props.id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var style = (0, _objectSpread2.default)({
    transform: _utilities.CSS.Transform.toString(transform),
    transition: transition
  }, props === null || props === void 0 ? void 0 : props.style);
  var DragHandle = props.DragHandle,
    dragSortKey = props.dragSortKey,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  if (dragSortKey) {
    var doms = [];
    _react.default.Children.forEach(rest.children, function (child, index) {
      if (child.key === dragSortKey) {
        var _child$props, _child$props2;
        doms.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(SortableItemContextValue.Provider, {
          value: {
            handle: /*#__PURE__*/(0, _jsxRuntime.jsx)(DragHandle, (0, _objectSpread2.default)((0, _objectSpread2.default)({
              rowData: child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.record,
              index: child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 ? void 0 : _child$props2.index
            }, listeners), attributes))
          },
          children: child
        }, child.key || index));
        return;
      }
      doms.push(child);
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
      ref: setNodeRef,
      style: style,
      children: doms
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
    ref: setNodeRef,
    style: style
  }, attributes), listeners));
};

/**
 * 拖拽排序表格的 cell，用与判断要不要展示 handle
 */
var SortableItemCell = /*#__PURE__*/_react.default.memo(function (props) {
  var dragSortKey = props.dragSortKey,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded2);
  var _useContext = (0, _react.useContext)(SortableItemContextValue),
    handle = _useContext.handle;
  if (handle) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [handle, " ", rest.children]
      })
    }));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", (0, _objectSpread2.default)({}, rest));
});
var SortContainer = function SortContainer(p) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", (0, _objectSpread2.default)({}, p));
};
function useDragSort(props) {
  var _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
    onDragSortEnd = props.onDragSortEnd,
    DragHandle = props.DragHandle,
    dragSortKey = props.dragSortKey;
  var sensors = (0, _core.useSensors)((0, _core.useSensor)(_core.PointerSensor), (0, _core.useSensor)(_core.MouseSensor));
  var handleDragEnd = (0, _react.useCallback)(function (event) {
    var _over$id;
    var active = event.active,
      over = event.over;
    if (over !== null && over !== void 0 && (_over$id = over.id) !== null && _over$id !== void 0 && _over$id.toString() && active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      var newData = (0, _sortable.arrayMove)(dataSource || [], parseInt(active.id), parseInt(over.id));
      onDragSortEnd === null || onDragSortEnd === void 0 || onDragSortEnd(parseInt(active.id), parseInt(over.id), newData || []);
    }
  }, [dataSource, onDragSortEnd]);
  var DraggableContainer = (0, _proUtils.useRefFunction)(function (p) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_sortable.SortableContext, {
      items: dataSource.map(function (_, index) {
        return index === null || index === void 0 ? void 0 : index.toString();
      }),
      strategy: _sortable.verticalListSortingStrategy,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SortContainer, (0, _objectSpread2.default)({}, p))
    });
  });
  var DraggableBodyRow = (0, _proUtils.useRefFunction)(function (p) {
    var _dataSource$findIndex;
    var restProps = Object.assign({}, ((0, _objectDestructuringEmpty2.default)(p), p));
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = (_dataSource$findIndex = dataSource.findIndex(function (item) {
      var _props$rowKey;
      return item[(_props$rowKey = props.rowKey) !== null && _props$rowKey !== void 0 ? _props$rowKey : 'index'] === restProps['data-row-key'];
    })) === null || _dataSource$findIndex === void 0 ? void 0 : _dataSource$findIndex.toString();
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(SortableRow, (0, _objectSpread2.default)({
      id: index,
      dragSortKey: dragSortKey,
      DragHandle: DragHandle
    }, restProps), index);
  });
  var components = props.components || {};
  if (dragSortKey) {
    var _props$components;
    components.body = (0, _objectSpread2.default)({
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
      cell: SortableItemCell
    }, ((_props$components = props.components) === null || _props$components === void 0 ? void 0 : _props$components.body) || {});
  }
  var memoDndContext = (0, _react.useMemo)(function () {
    return function (contextProps) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_core.DndContext, {
        modifiers: [_modifiers.restrictToVerticalAxis],
        sensors: sensors,
        collisionDetection: _core.rectIntersection,
        onDragEnd: handleDragEnd,
        children: contextProps.children
      });
    };
  }, [handleDragEnd, sensors]);
  return {
    DndContext: memoDndContext,
    components: components
  };
}