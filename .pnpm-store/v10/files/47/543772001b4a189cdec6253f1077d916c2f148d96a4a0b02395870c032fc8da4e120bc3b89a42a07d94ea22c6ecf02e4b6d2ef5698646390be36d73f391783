import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["metas", "split", "footer", "rowKey", "tooltip", "className", "options", "search", "expandable", "showActions", "showExtra", "rowSelection", "pagination", "itemLayout", "renderItem", "grid", "itemCardProps", "onRow", "onItem", "rowClassName", "locale", "itemHeaderRender", "itemTitleRender"];
import { ProConfigProvider } from '@ant-design/pro-provider';
import ProTable from '@ant-design/pro-table';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';
import React, { useContext, useImperativeHandle, useMemo, useRef } from 'react';
import ListView from "./ListView";
import { useStyle } from "./style/index";

// 兼容性代码
import "antd/es/list/style";
import { jsx as _jsx } from "react/jsx-runtime";
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
    rest = _objectWithoutProperties(props, _excluded);
  var actionRef = useRef();
  useImperativeHandle(rest.actionRef, function () {
    return actionRef.current;
  }, [actionRef.current]);
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var proTableColumns = useMemo(function () {
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
      columns.push(_objectSpread(_objectSpread({
        listKey: key,
        dataIndex: (meta === null || meta === void 0 ? void 0 : meta.dataIndex) || key
      }, meta), {}, {
        valueType: valueType
      }));
    });
    return columns;
  }, [metals]);
  var prefixCls = getPrefixCls('pro-list', props.prefixCls);
  var _useStyle = useStyle(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var listClassName = classNames(prefixCls, hashId, _defineProperty({}, "".concat(prefixCls, "-no-split"), !split));
  return wrapSSR( /*#__PURE__*/_jsx(ProTable, _objectSpread(_objectSpread({
    tooltip: tooltip
  }, rest), {}, {
    actionRef: actionRef,
    pagination: propsPagination,
    type: "list",
    rowSelection: propRowSelection,
    search: search,
    options: options,
    className: classNames(prefixCls, className, listClassName),
    columns: proTableColumns,
    rowKey: rowKey,
    tableViewRender: function tableViewRender(_ref) {
      var columns = _ref.columns,
        size = _ref.size,
        pagination = _ref.pagination,
        rowSelection = _ref.rowSelection,
        dataSource = _ref.dataSource,
        loading = _ref.loading;
      return /*#__PURE__*/_jsx(ListView, {
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
  return /*#__PURE__*/_jsx(ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/_jsx(NoProVideProList, _objectSpread({
      cardProps: false,
      search: false,
      toolBarRender: false
    }, props))
  });
}
function ProList(props) {
  return /*#__PURE__*/_jsx(ProConfigProvider, {
    needDeps: true,
    children: /*#__PURE__*/_jsx(NoProVideProList, _objectSpread({}, props))
  });
}
export { BaseProList, ProList };
export default ProList;