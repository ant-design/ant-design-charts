import _objectDestructuringEmpty from "@babel/runtime/helpers/esm/objectDestructuringEmpty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["DragHandle", "dragSortKey"],
  _excluded2 = ["dragSortKey"];
import { useRefFunction } from '@ant-design/pro-utils';
import { rectIntersection, DndContext, MouseSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var SortableItemContextValue = /*#__PURE__*/createContext({
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
  var _useSortable = useSortable({
      id: props.id
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition;
  var style = _objectSpread({
    transform: CSS.Transform.toString(transform),
    transition: transition
  }, props === null || props === void 0 ? void 0 : props.style);
  var DragHandle = props.DragHandle,
    dragSortKey = props.dragSortKey,
    rest = _objectWithoutProperties(props, _excluded);
  if (dragSortKey) {
    var doms = [];
    React.Children.forEach(rest.children, function (child, index) {
      if (child.key === dragSortKey) {
        var _child$props, _child$props2;
        doms.push( /*#__PURE__*/_jsx(SortableItemContextValue.Provider, {
          value: {
            handle: /*#__PURE__*/_jsx(DragHandle, _objectSpread(_objectSpread({
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
    return /*#__PURE__*/_jsx("tr", _objectSpread(_objectSpread({}, rest), {}, {
      ref: setNodeRef,
      style: style,
      children: doms
    }));
  }
  return /*#__PURE__*/_jsx("tr", _objectSpread(_objectSpread(_objectSpread({}, rest), {}, {
    ref: setNodeRef,
    style: style
  }, attributes), listeners));
};

/**
 * 拖拽排序表格的 cell，用与判断要不要展示 handle
 */
var SortableItemCell = /*#__PURE__*/React.memo(function (props) {
  var dragSortKey = props.dragSortKey,
    rest = _objectWithoutProperties(props, _excluded2);
  var _useContext = useContext(SortableItemContextValue),
    handle = _useContext.handle;
  if (handle) {
    return /*#__PURE__*/_jsx("td", _objectSpread(_objectSpread({}, rest), {}, {
      children: /*#__PURE__*/_jsxs("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [handle, " ", rest.children]
      })
    }));
  }
  return /*#__PURE__*/_jsx("td", _objectSpread({}, rest));
});
var SortContainer = function SortContainer(p) {
  return /*#__PURE__*/_jsx("tbody", _objectSpread({}, p));
};
export function useDragSort(props) {
  var _props$dataSource = props.dataSource,
    dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
    onDragSortEnd = props.onDragSortEnd,
    DragHandle = props.DragHandle,
    dragSortKey = props.dragSortKey;
  var sensors = useSensors(useSensor(PointerSensor), useSensor(MouseSensor));
  var handleDragEnd = useCallback(function (event) {
    var _over$id;
    var active = event.active,
      over = event.over;
    if (over !== null && over !== void 0 && (_over$id = over.id) !== null && _over$id !== void 0 && _over$id.toString() && active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      var newData = arrayMove(dataSource || [], parseInt(active.id), parseInt(over.id));
      onDragSortEnd === null || onDragSortEnd === void 0 || onDragSortEnd(parseInt(active.id), parseInt(over.id), newData || []);
    }
  }, [dataSource, onDragSortEnd]);
  var DraggableContainer = useRefFunction(function (p) {
    return /*#__PURE__*/_jsx(SortableContext, {
      items: dataSource.map(function (_, index) {
        return index === null || index === void 0 ? void 0 : index.toString();
      }),
      strategy: verticalListSortingStrategy,
      children: /*#__PURE__*/_jsx(SortContainer, _objectSpread({}, p))
    });
  });
  var DraggableBodyRow = useRefFunction(function (p) {
    var _dataSource$findIndex;
    var restProps = Object.assign({}, (_objectDestructuringEmpty(p), p));
    // function findIndex base on Table rowKey props and should always be a right array index
    var index = (_dataSource$findIndex = dataSource.findIndex(function (item) {
      var _props$rowKey;
      return item[(_props$rowKey = props.rowKey) !== null && _props$rowKey !== void 0 ? _props$rowKey : 'index'] === restProps['data-row-key'];
    })) === null || _dataSource$findIndex === void 0 ? void 0 : _dataSource$findIndex.toString();
    return /*#__PURE__*/_jsx(SortableRow, _objectSpread({
      id: index,
      dragSortKey: dragSortKey,
      DragHandle: DragHandle
    }, restProps), index);
  });
  var components = props.components || {};
  if (dragSortKey) {
    var _props$components;
    components.body = _objectSpread({
      wrapper: DraggableContainer,
      row: DraggableBodyRow,
      cell: SortableItemCell
    }, ((_props$components = props.components) === null || _props$components === void 0 ? void 0 : _props$components.body) || {});
  }
  var memoDndContext = useMemo(function () {
    return function (contextProps) {
      return /*#__PURE__*/_jsx(DndContext, {
        modifiers: [restrictToVerticalAxis],
        sensors: sensors,
        collisionDetection: rectIntersection,
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