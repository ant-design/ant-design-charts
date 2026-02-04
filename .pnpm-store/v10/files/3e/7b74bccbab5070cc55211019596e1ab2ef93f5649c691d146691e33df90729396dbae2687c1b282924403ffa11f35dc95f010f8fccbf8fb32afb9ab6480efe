import _regeneratorRuntime from "@babel/runtime/helpers/esm/regeneratorRuntime";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["rowKey", "tableClassName", "defaultClassName", "action", "tableColumn", "type", "pagination", "rowSelection", "size", "defaultSize", "tableStyle", "toolbarDom", "hideToolbar", "searchNode", "style", "cardProps", "alertDom", "name", "onSortChange", "onFilterChange", "options", "isLightFilter", "className", "cardBordered", "editableUtils", "getRowKey"],
  _excluded2 = ["cardBordered", "request", "className", "params", "defaultData", "headerTitle", "postData", "ghost", "pagination", "actionRef", "columns", "toolBarRender", "optionsRender", "onLoad", "onRequestError", "style", "cardProps", "tableStyle", "tableClassName", "columnsStateMap", "onColumnsStateChange", "options", "search", "name", "onLoadingChange", "rowSelection", "beforeSearchSubmit", "tableAlertRender", "defaultClassName", "formRef", "type", "columnEmptyText", "toolbar", "rowKey", "manualRequest", "polling", "tooltip", "revalidateOnFocus", "searchFormRender"];
// 兼容代码-----------
import "antd/es/table/style";
import "antd/es/typography/style";
//----------------------

import ProCard from '@ant-design/pro-card';
import ProForm, { GridContext } from '@ant-design/pro-form';
import { ProConfigProvider, proTheme, useIntl } from '@ant-design/pro-provider';
import { ErrorBoundary, editableRowByKey, omitUndefined, recordKeyToString, stringify, useDeepCompareEffect, useDeepCompareEffectDebounce, useEditableArray, useMountMergeState } from '@ant-design/pro-utils';
import { ConfigProvider, Table } from 'antd';
import classNames from 'classnames';
import isEmpty from 'lodash-es/isEmpty';
import isEqual from 'lodash-es/isEqual';
import React, { useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import { Container, TableContext } from "./Store/Provide";
import Alert from "./components/Alert";
import FormRender from "./components/Form";
import Toolbar from "./components/ToolBar";
import { useStyle } from "./style";
import useFetchData from "./useFetchData";
import { genColumnKey, isBordered, mergePagination, parseDefaultColumnConfig, useActionType } from "./utils";
import { columnSort } from "./utils/columnSort";
import { genProColumnToColumn } from "./utils/genProColumnToColumn";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function TableRender(props) {
  var rowKey = props.rowKey,
    tableClassName = props.tableClassName,
    defaultClassName = props.defaultClassName,
    action = props.action,
    tableColumns = props.tableColumn,
    type = props.type,
    pagination = props.pagination,
    rowSelection = props.rowSelection,
    size = props.size,
    defaultSize = props.defaultSize,
    tableStyle = props.tableStyle,
    toolbarDom = props.toolbarDom,
    hideToolbar = props.hideToolbar,
    searchNode = props.searchNode,
    style = props.style,
    propsCardProps = props.cardProps,
    alertDom = props.alertDom,
    name = props.name,
    onSortChange = props.onSortChange,
    onFilterChange = props.onFilterChange,
    options = props.options,
    isLightFilter = props.isLightFilter,
    className = props.className,
    cardBordered = props.cardBordered,
    editableUtils = props.editableUtils,
    getRowKey = props.getRowKey,
    rest = _objectWithoutProperties(props, _excluded);
  var counter = useContext(TableContext);

  /** 需要遍历一下，不然不支持嵌套表格 */
  var columns = useMemo(function () {
    var loopFilter = function loopFilter(column) {
      return column.map(function (item) {
        // 删掉不应该显示的
        var columnKey = genColumnKey(item.key, item.index);
        var config = counter.columnsMap[columnKey];
        if (config && config.show === false) {
          return false;
        }
        if (item.children) {
          return _objectSpread(_objectSpread({}, item), {}, {
            children: loopFilter(item.children)
          });
        }
        return item;
      }).filter(Boolean);
    };
    return loopFilter(tableColumns);
  }, [counter.columnsMap, tableColumns]);

  /**
   * 如果是分页的新增，总是加到最后一行
   *
   * @returns
   */
  var editableDataSource = function editableDataSource(dataSource) {
    var _ref = editableUtils.newLineRecord || {},
      newLineOptions = _ref.options,
      row = _ref.defaultValue;
    var isNewLineRecordAtTop = (newLineOptions === null || newLineOptions === void 0 ? void 0 : newLineOptions.position) === 'top';
    if (newLineOptions !== null && newLineOptions !== void 0 && newLineOptions.parentKey) {
      var _recordKeyToString, _props$expandable;
      var actionProps = {
        data: dataSource,
        getRowKey: getRowKey,
        row: _objectSpread(_objectSpread({}, row), {}, {
          map_row_parentKey: (_recordKeyToString = recordKeyToString(newLineOptions.parentKey)) === null || _recordKeyToString === void 0 ? void 0 : _recordKeyToString.toString()
        }),
        key: newLineOptions === null || newLineOptions === void 0 ? void 0 : newLineOptions.recordKey,
        childrenColumnName: ((_props$expandable = props.expandable) === null || _props$expandable === void 0 ? void 0 : _props$expandable.childrenColumnName) || 'children'
      };
      return editableRowByKey(actionProps, isNewLineRecordAtTop ? 'top' : 'update');
    }
    if (isNewLineRecordAtTop) {
      return [row].concat(_toConsumableArray(action.dataSource));
    }
    // 如果有分页的功能，我们加到这一页的末尾
    if (pagination && pagination !== null && pagination !== void 0 && pagination.current && pagination !== null && pagination !== void 0 && pagination.pageSize) {
      var newDataSource = _toConsumableArray(action.dataSource);
      if ((pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) > newDataSource.length) {
        newDataSource.push(row);
        return newDataSource;
      }
      newDataSource.splice((pagination === null || pagination === void 0 ? void 0 : pagination.current) * (pagination === null || pagination === void 0 ? void 0 : pagination.pageSize) - 1, 0, row);
      return newDataSource;
    }
    return [].concat(_toConsumableArray(action.dataSource), [row]);
  };
  var getTableProps = function getTableProps() {
    return _objectSpread(_objectSpread({}, rest), {}, {
      size: size,
      rowSelection: rowSelection === false ? undefined : rowSelection,
      className: tableClassName,
      style: tableStyle,
      columns: columns,
      loading: action.loading,
      dataSource: editableUtils.newLineRecord ? editableDataSource(action.dataSource) : action.dataSource,
      pagination: pagination,
      onChange: function onChange(changePagination, filters, sorter, extra) {
        var _rest$onChange;
        (_rest$onChange = rest.onChange) === null || _rest$onChange === void 0 || _rest$onChange.call(rest, changePagination, filters, sorter, extra);
        onFilterChange(omitUndefined(filters));

        // 制造筛选的数据
        // 制造一个排序的数据
        if (Array.isArray(sorter)) {
          var _omitUndefined;
          var data = sorter.reduce(function (pre, value) {
            return _objectSpread(_objectSpread({}, pre), {}, _defineProperty({}, "".concat(value.field), value.order));
          }, {});
          onSortChange((_omitUndefined = omitUndefined(data)) !== null && _omitUndefined !== void 0 ? _omitUndefined : {});
        } else {
          var _sorter$column, _omitUndefined2;
          var sorterOfColumn = (_sorter$column = sorter.column) === null || _sorter$column === void 0 ? void 0 : _sorter$column.sorter;
          var isSortByField = (sorterOfColumn === null || sorterOfColumn === void 0 ? void 0 : sorterOfColumn.toString()) === sorterOfColumn;
          onSortChange((_omitUndefined2 = omitUndefined(_defineProperty({}, "".concat(isSortByField ? sorterOfColumn : sorter.field), sorter.order))) !== null && _omitUndefined2 !== void 0 ? _omitUndefined2 : {});
        }
      }
    });
  };

  /**
   * 是否需要 card 来包裹
   */
  var notNeedCardDom = useMemo(function () {
    if (props.search === false && !props.headerTitle && props.toolBarRender === false) {
      return true;
    }
    return false;
  }, []);

  /** 默认的 table dom，如果是编辑模式，外面还要包个 form */
  var baseTableDom = /*#__PURE__*/_jsx(GridContext.Provider, {
    value: {
      grid: false,
      colProps: undefined,
      rowProps: undefined
    },
    children: /*#__PURE__*/_jsx(Table, _objectSpread(_objectSpread({}, getTableProps()), {}, {
      rowKey: rowKey
    }))
  });

  /** 自定义的 render */
  var tableDom = props.tableViewRender ? props.tableViewRender(_objectSpread(_objectSpread({}, getTableProps()), {}, {
    rowSelection: rowSelection !== false ? rowSelection : undefined
  }), baseTableDom) : baseTableDom;

  /**
   * 这段代码使用了 useMemo 进行了性能优化，根据 props.editable 和 props.name 的不同情况，渲染不同的页面组件。
   * 当 props.editable 为 true 并且 props.name 不存在时，渲染一个带有表单和工具栏的页面组件，否则只渲染工具栏和表格组件。
   * renderContent 函数会在 alertDom、props.loading、props.editable、tableDom、toolbarDom 发生变化时重新执行。
   * */
  var tableContentDom = useMemo(function () {
    if (props.editable && !props.name) {
      var _props$editable, _props$editable2, _props$editable3;
      return /*#__PURE__*/_jsxs(_Fragment, {
        children: [toolbarDom, alertDom, /*#__PURE__*/_createElement(ProForm, _objectSpread(_objectSpread({}, (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.formProps), {}, {
          formRef: (_props$editable2 = props.editable) === null || _props$editable2 === void 0 || (_props$editable2 = _props$editable2.formProps) === null || _props$editable2 === void 0 ? void 0 : _props$editable2.formRef,
          component: false,
          form: (_props$editable3 = props.editable) === null || _props$editable3 === void 0 ? void 0 : _props$editable3.form,
          onValuesChange: editableUtils.onValuesChange,
          key: "table",
          submitter: false,
          omitNil: false,
          dateFormatter: props.dateFormatter
        }), tableDom)]
      });
    }
    return /*#__PURE__*/_jsxs(_Fragment, {
      children: [toolbarDom, alertDom, tableDom]
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertDom, props.loading, !!props.editable, tableDom, toolbarDom]);
  var cardBodyStyle = useMemo(function () {
    if (propsCardProps === false || notNeedCardDom === true || !!props.name) return {};
    if (hideToolbar) {
      return {
        padding: 0
      };
    }
    if (toolbarDom) {
      return {
        paddingBlockStart: 0
      };
    }
    if (toolbarDom && pagination === false) {
      return {
        paddingBlockStart: 0
      };
    }
    // if (!toolbarDom)
    return {
      padding: 0
    };
  }, [notNeedCardDom, pagination, props.name, propsCardProps, toolbarDom, hideToolbar]);

  /** Table 区域的 dom，为了方便 render */
  var tableAreaDom =
  // cardProps 或者 有了name 就不需要这个padding了，不然会导致不好对齐
  propsCardProps === false || notNeedCardDom === true || !!props.name ? tableContentDom : /*#__PURE__*/_jsx(ProCard, _objectSpread(_objectSpread({
    ghost: props.ghost,
    bordered: isBordered('table', cardBordered),
    bodyStyle: cardBodyStyle
  }, propsCardProps), {}, {
    children: tableContentDom
  }));
  var renderTable = function renderTable() {
    if (props.tableRender) {
      return props.tableRender(props, tableAreaDom, {
        toolbar: toolbarDom || undefined,
        alert: alertDom || undefined,
        table: tableDom || undefined
      });
    }
    return tableAreaDom;
  };
  var proTableDom = /*#__PURE__*/_jsxs("div", {
    className: classNames(className, _defineProperty({}, "".concat(defaultClassName, "-polling"), action.pollingLoading)),
    style: style,
    ref: counter.rootDomRef,
    children: [isLightFilter ? null : searchNode, type !== 'form' && props.tableExtraRender && /*#__PURE__*/_jsx("div", {
      className: classNames(className, "".concat(defaultClassName, "-extra")),
      children: props.tableExtraRender(props, action.dataSource || [])
    }), type !== 'form' && renderTable()]
  });

  // 如果不需要的全屏，ConfigProvider 没有意义
  if (!options || !(options !== null && options !== void 0 && options.fullScreen)) {
    return proTableDom;
  }
  return /*#__PURE__*/_jsx(ConfigProvider, {
    getPopupContainer: function getPopupContainer() {
      return counter.rootDomRef.current || document.body;
    },
    children: proTableDom
  });
}
var emptyObj = {};
var ProTable = function ProTable(props) {
  var _props$expandable2;
  var cardBordered = props.cardBordered,
    request = props.request,
    propsClassName = props.className,
    _props$params = props.params,
    params = _props$params === void 0 ? emptyObj : _props$params,
    defaultData = props.defaultData,
    headerTitle = props.headerTitle,
    postData = props.postData,
    ghost = props.ghost,
    propsPagination = props.pagination,
    propsActionRef = props.actionRef,
    _props$columns = props.columns,
    propsColumns = _props$columns === void 0 ? [] : _props$columns,
    toolBarRender = props.toolBarRender,
    optionsRender = props.optionsRender,
    onLoad = props.onLoad,
    onRequestError = props.onRequestError,
    style = props.style,
    cardProps = props.cardProps,
    tableStyle = props.tableStyle,
    tableClassName = props.tableClassName,
    columnsStateMap = props.columnsStateMap,
    onColumnsStateChange = props.onColumnsStateChange,
    options = props.options,
    search = props.search,
    isEditorTable = props.name,
    onLoadingChange = props.onLoadingChange,
    _props$rowSelection = props.rowSelection,
    propsRowSelection = _props$rowSelection === void 0 ? false : _props$rowSelection,
    beforeSearchSubmit = props.beforeSearchSubmit,
    tableAlertRender = props.tableAlertRender,
    defaultClassName = props.defaultClassName,
    propRef = props.formRef,
    _props$type = props.type,
    type = _props$type === void 0 ? 'table' : _props$type,
    _props$columnEmptyTex = props.columnEmptyText,
    columnEmptyText = _props$columnEmptyTex === void 0 ? '-' : _props$columnEmptyTex,
    toolbar = props.toolbar,
    rowKey = props.rowKey,
    manualRequest = props.manualRequest,
    polling = props.polling,
    tooltip = props.tooltip,
    _props$revalidateOnFo = props.revalidateOnFocus,
    revalidateOnFocus = _props$revalidateOnFo === void 0 ? false : _props$revalidateOnFo,
    searchFormRender = props.searchFormRender,
    rest = _objectWithoutProperties(props, _excluded2);
  var _useStyle = useStyle(props.defaultClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var className = classNames(defaultClassName, propsClassName, hashId);

  /** 通用的来操作子节点的工具类 */
  var actionRef = useRef();
  var defaultFormRef = useRef();
  var formRef = propRef || defaultFormRef;
  useImperativeHandle(propsActionRef, function () {
    return actionRef.current;
  });

  /** 单选多选的相关逻辑 */
  var _useMountMergeState = useMountMergeState(propsRowSelection ? (propsRowSelection === null || propsRowSelection === void 0 ? void 0 : propsRowSelection.defaultSelectedRowKeys) || [] : undefined, {
      value: propsRowSelection ? propsRowSelection.selectedRowKeys : undefined
    }),
    _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
    selectedRowKeys = _useMountMergeState2[0],
    setSelectedRowKeys = _useMountMergeState2[1];
  var _useMountMergeState3 = useMountMergeState(function () {
      // 如果手动模式，或者 search 不存在的时候设置为 undefined
      // undefined 就不会触发首次加载
      if (manualRequest || search !== false) {
        return undefined;
      }
      return {};
    }),
    _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
    formSearch = _useMountMergeState4[0],
    setFormSearch = _useMountMergeState4[1];
  var _useMountMergeState5 = useMountMergeState({}),
    _useMountMergeState6 = _slicedToArray(_useMountMergeState5, 2),
    proFilter = _useMountMergeState6[0],
    setProFilter = _useMountMergeState6[1];
  var _useMountMergeState7 = useMountMergeState({}),
    _useMountMergeState8 = _slicedToArray(_useMountMergeState7, 2),
    proSort = _useMountMergeState8[0],
    setProSort = _useMountMergeState8[1];

  // 平铺所有columns, 用于判断是用的是本地筛选/排序
  var loopColumns = useCallback(function (data) {
    var _columns = [];
    for (var i = 0; i < data.length; i++) {
      var _curItem = data[i];
      if (_curItem.children) {
        loopColumns(_curItem.children);
      } else {
        _columns.push(_curItem);
      }
    }
    return _columns;
  }, []);

  /** 如果所有列中的 filters = true | undefined 说明是用的是本地筛选 任何一列配置 filters=false，就能绕过这个判断 */
  var useLocaleFilter = useMemo(function () {
    var _columns = loopColumns(propsColumns);
    return _columns === null || _columns === void 0 ? void 0 : _columns.every(function (column) {
      return !!column.filters && !!column.onFilter || column.filters === undefined && column.onFilter === undefined;
    });
  }, [loopColumns, propsColumns]);

  /** 如果所有列中的 sorter != true 说明是用的是本地排序 任何一列配置 sorter=true，就能绕过这个判断 */
  var useLocaleSorter = useMemo(function () {
    var _columns = loopColumns(propsColumns);
    return _columns === null || _columns === void 0 ? void 0 : _columns.every(function (column) {
      return column.sorter !== true;
    });
  }, [loopColumns, propsColumns]);

  /** 设置默认的服務端排序和筛选值 */
  useEffect(function () {
    var _parseDefaultColumnCo = parseDefaultColumnConfig(propsColumns),
      sort = _parseDefaultColumnCo.sort,
      filter = _parseDefaultColumnCo.filter;
    if (!useLocaleFilter) setProFilter(filter);
    if (!useLocaleSorter) setProSort(sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var intl = useIntl();

  /** 需要初始化 不然默认可能报错 这里取了 defaultCurrent 和 current 为了保证不会重复刷新 */
  var fetchPagination = _typeof(propsPagination) === 'object' ? propsPagination : {
    defaultCurrent: 1,
    defaultPageSize: 20,
    pageSize: 20,
    current: 1
  };
  var counter = useContext(TableContext);

  // ============================ useFetchData ============================
  var fetchData = useMemo(function () {
    if (!request) return undefined;
    return /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageParams) {
        var actionParams, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              actionParams = _objectSpread(_objectSpread(_objectSpread({}, pageParams || {}), formSearch), params); // eslint-disable-next-line no-underscore-dangle
              delete actionParams._timestamp;
              _context.next = 4;
              return request(actionParams, proSort, proFilter);
            case 4:
              response = _context.sent;
              return _context.abrupt("return", response);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();
  }, [formSearch, params, proFilter, proSort, request]);
  var action = useFetchData(fetchData, defaultData, {
    pageInfo: propsPagination === false ? false : fetchPagination,
    loading: props.loading,
    dataSource: props.dataSource,
    onDataSourceChange: props.onDataSourceChange,
    onLoad: onLoad,
    onLoadingChange: onLoadingChange,
    onRequestError: onRequestError,
    postData: postData,
    revalidateOnFocus: revalidateOnFocus,
    manual: formSearch === undefined,
    polling: polling,
    effects: [stringify(params), stringify(formSearch), stringify(proFilter), stringify(proSort)],
    debounceTime: props.debounceTime,
    onPageInfoChange: function onPageInfoChange(pageInfo) {
      var _propsPagination$onCh, _propsPagination$onSh;
      if (!propsPagination || !fetchData) return;

      // 总是触发一下 onChange 和  onShowSizeChange
      // 目前只有 List 和 Table 支持分页, List 有分页的时候打断 Table 的分页
      propsPagination === null || propsPagination === void 0 || (_propsPagination$onCh = propsPagination.onChange) === null || _propsPagination$onCh === void 0 || _propsPagination$onCh.call(propsPagination, pageInfo.current, pageInfo.pageSize);
      propsPagination === null || propsPagination === void 0 || (_propsPagination$onSh = propsPagination.onShowSizeChange) === null || _propsPagination$onSh === void 0 || _propsPagination$onSh.call(propsPagination, pageInfo.current, pageInfo.pageSize);
    }
  });
  // ============================ END ============================

  /** 聚焦的时候重新请求数据，这样可以保证数据都是最新的。 */
  useEffect(function () {
    var _props$form;
    // 手动模式和 request 为空都不生效
    if (props.manualRequest || !props.request || !revalidateOnFocus || (_props$form = props.form) !== null && _props$form !== void 0 && _props$form.ignoreRules) return;

    // 聚焦时重新请求事件
    var visibilitychange = function visibilitychange() {
      if (document.visibilityState === 'visible') {
        action.reload();
      }
    };
    document.addEventListener('visibilitychange', visibilitychange);
    return function () {
      return document.removeEventListener('visibilitychange', visibilitychange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** SelectedRowKeys受控处理selectRows */
  var preserveRecordsRef = React.useRef(new Map());

  // ============================ RowKey ============================
  var getRowKey = React.useMemo(function () {
    if (typeof rowKey === 'function') {
      return rowKey;
    }
    return function (record, index) {
      var _ref3;
      if (index === -1) {
        return record === null || record === void 0 ? void 0 : record[rowKey];
      }
      // 如果 props 中有name 的话，用index 来做行号，这样方便转化为 index
      if (props.name) {
        return index === null || index === void 0 ? void 0 : index.toString();
      }
      return (_ref3 = record === null || record === void 0 ? void 0 : record[rowKey]) !== null && _ref3 !== void 0 ? _ref3 : index === null || index === void 0 ? void 0 : index.toString();
    };
  }, [props.name, rowKey]);
  useMemo(function () {
    var _action$dataSource;
    if ((_action$dataSource = action.dataSource) !== null && _action$dataSource !== void 0 && _action$dataSource.length) {
      var keys = action.dataSource.map(function (data) {
        var dataRowKey = getRowKey(data, -1);
        preserveRecordsRef.current.set(dataRowKey, data);
        return dataRowKey;
      });
      return keys;
    }
    return [];
  }, [action.dataSource, getRowKey]);

  /** 页面编辑的计算 */
  var pagination = useMemo(function () {
    var newPropsPagination = propsPagination === false ? false : _objectSpread({}, propsPagination);
    var pageConfig = _objectSpread(_objectSpread({}, action.pageInfo), {}, {
      setPageInfo: function setPageInfo(_ref4) {
        var pageSize = _ref4.pageSize,
          current = _ref4.current;
        var pageInfo = action.pageInfo;

        // pageSize 发生改变，并且你不是在第一页，切回到第一页
        // 这样可以防止出现 跳转到一个空的数据页的问题
        if (pageSize === pageInfo.pageSize || pageInfo.current === 1) {
          action.setPageInfo({
            pageSize: pageSize,
            current: current
          });
          return;
        }

        // 通过request的时候清空数据，然后刷新不然可能会导致 pageSize 没有数据多
        if (request) action.setDataSource([]);
        action.setPageInfo({
          pageSize: pageSize,
          // 目前只有 List 和 Table 支持分页, List 有分页的时候 还是使用之前的当前页码
          current: type === 'list' ? current : 1
        });
      }
    });
    if (request && newPropsPagination) {
      delete newPropsPagination.onChange;
      delete newPropsPagination.onShowSizeChange;
    }
    return mergePagination(newPropsPagination, pageConfig, intl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsPagination, action, intl]);
  useDeepCompareEffect(function () {
    var _action$pageInfo;
    // request 存在且params不为空，且已经请求过数据才需要设置。
    if (props.request && !isEmpty(params) && action.dataSource && !isEqual(action.dataSource, defaultData) && (action === null || action === void 0 || (_action$pageInfo = action.pageInfo) === null || _action$pageInfo === void 0 ? void 0 : _action$pageInfo.current) !== 1) {
      action.setPageInfo({
        current: 1
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  // 设置 name 到 store 中，里面用了 ref ，所以不用担心直接 set
  counter.setPrefixName(props.name);

  /** 清空所有的选中项 */
  var _onCleanSelected = useCallback(function () {
    if (propsRowSelection && propsRowSelection.onChange) {
      propsRowSelection.onChange([], [], {
        type: 'none'
      });
    }
    setSelectedRowKeys([]);
  }, [propsRowSelection, setSelectedRowKeys]);
  counter.propsRef.current = props;

  /** 可编辑行的相关配置 */
  var editableUtils = useEditableArray(_objectSpread(_objectSpread({}, props.editable), {}, {
    tableName: props.name,
    getRowKey: getRowKey,
    childrenColumnName: ((_props$expandable2 = props.expandable) === null || _props$expandable2 === void 0 ? void 0 : _props$expandable2.childrenColumnName) || 'children',
    dataSource: action.dataSource || [],
    setDataSource: function setDataSource(data) {
      var _props$editable4, _props$editable4$onVa;
      (_props$editable4 = props.editable) === null || _props$editable4 === void 0 || (_props$editable4$onVa = _props$editable4.onValuesChange) === null || _props$editable4$onVa === void 0 || _props$editable4$onVa.call(_props$editable4, undefined, data);
      action.setDataSource(data);
    }
  }));

  // ============================ Render ============================
  var _proTheme$useToken = proTheme === null || proTheme === void 0 ? void 0 : proTheme.useToken(),
    token = _proTheme$useToken.token;

  /** 绑定 action */
  useActionType(actionRef, action, {
    fullScreen: function fullScreen() {
      var _counter$rootDomRef;
      if (!((_counter$rootDomRef = counter.rootDomRef) !== null && _counter$rootDomRef !== void 0 && _counter$rootDomRef.current) || !document.fullscreenEnabled) {
        return;
      }
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        var _counter$rootDomRef2;
        (_counter$rootDomRef2 = counter.rootDomRef) === null || _counter$rootDomRef2 === void 0 || _counter$rootDomRef2.current.requestFullscreen();
      }
    },
    onCleanSelected: function onCleanSelected() {
      // 清空选中行
      _onCleanSelected();
    },
    resetAll: function resetAll() {
      var _formRef$current;
      // 清空选中行
      _onCleanSelected();
      var _parseDefaultColumnCo2 = parseDefaultColumnConfig(propsColumns),
        sort = _parseDefaultColumnCo2.sort,
        filter = _parseDefaultColumnCo2.filter;
      // 清空筛选
      setProFilter(filter);
      // 清空排序
      setProSort(sort);

      // 清空 toolbar 搜索
      counter.setKeyWords(undefined);
      // 重置页码
      action.setPageInfo({
        current: 1
      });

      // 重置表单
      formRef === null || formRef === void 0 || (_formRef$current = formRef.current) === null || _formRef$current === void 0 || _formRef$current.resetFields();
      setFormSearch({});
    },
    editableUtils: editableUtils
  });

  /** 同步 action */
  counter.setAction(actionRef.current);

  // ---------- 列计算相关 start  -----------------
  var tableColumn = useMemo(function () {
    var _props$expandable3;
    return genProColumnToColumn({
      columns: propsColumns,
      counter: counter,
      columnEmptyText: columnEmptyText,
      type: type,
      marginSM: token.marginSM,
      editableUtils: editableUtils,
      rowKey: rowKey,
      childrenColumnName: (_props$expandable3 = props.expandable) === null || _props$expandable3 === void 0 ? void 0 : _props$expandable3.childrenColumnName,
      proFilter: proFilter,
      proSort: proSort
    }).sort(columnSort(counter.columnsMap));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propsColumns, counter === null || counter === void 0 ? void 0 : counter.sortKeyColumns, counter === null || counter === void 0 ? void 0 : counter.columnsMap, columnEmptyText, type,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  editableUtils.editableKeys && editableUtils.editableKeys.join(','), proFilter, proSort]);

  /** Table Column 变化的时候更新一下，这个参数将会用于渲染 */
  useDeepCompareEffectDebounce(function () {
    if (tableColumn && tableColumn.length > 0) {
      // 重新生成key的字符串用于排序
      var columnKeys = tableColumn.map(function (item) {
        return genColumnKey(item.key, item.index);
      });
      counter.setSortKeyColumns(columnKeys);
    }
  }, [tableColumn], ['render', 'renderFormItem'], 100);

  /** 同步 Pagination，支持受控的 页码 和 pageSize */
  useDeepCompareEffect(function () {
    var pageInfo = action.pageInfo;
    var _ref5 = propsPagination || {},
      _ref5$current = _ref5.current,
      current = _ref5$current === void 0 ? pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.current : _ref5$current,
      _ref5$pageSize = _ref5.pageSize,
      pageSize = _ref5$pageSize === void 0 ? pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize : _ref5$pageSize;
    if (propsPagination && (current || pageSize) && (pageSize !== (pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.pageSize) || current !== (pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.current))) {
      action.setPageInfo({
        pageSize: pageSize || pageInfo.pageSize,
        current: current || pageInfo.current
      });
    }
  }, [propsPagination && propsPagination.pageSize, propsPagination && propsPagination.current]);

  /** 行选择相关的问题 */
  var rowSelection = _objectSpread(_objectSpread({
    selectedRowKeys: selectedRowKeys
  }, propsRowSelection), {}, {
    onChange: function onChange(keys, rows, info) {
      if (propsRowSelection && propsRowSelection.onChange) {
        propsRowSelection.onChange(keys, rows, info);
      }
      setSelectedRowKeys(keys);
    }
  });

  /** 是不是 LightFilter, LightFilter 有一些特殊的处理 */
  var isLightFilter = search !== false && (search === null || search === void 0 ? void 0 : search.filterType) === 'light';
  var _onFormSearchSubmit = useCallback(function (values) {
    // 判断search.onSearch返回值决定是否更新formSearch
    if (options && options.search) {
      var _options$search, _options$search$onSea;
      var _ref6 = options.search === true ? {} : options.search,
        _ref6$name = _ref6.name,
        name = _ref6$name === void 0 ? 'keyword' : _ref6$name;

      /** 如果传入的 onSearch 返回值为 false，则不要把options.search.name对应的值set到formSearch */
      var success = (_options$search = options.search) === null || _options$search === void 0 || (_options$search$onSea = _options$search.onSearch) === null || _options$search$onSea === void 0 ? void 0 : _options$search$onSea.call(_options$search, counter.keyWords);
      if (success !== false) {
        setFormSearch(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, counter.keyWords)));
        return;
      }
    }
    setFormSearch(values);
  }, [counter.keyWords, options, setFormSearch]);
  var loading = useMemo(function () {
    if (_typeof(action.loading) === 'object') {
      var _action$loading;
      return ((_action$loading = action.loading) === null || _action$loading === void 0 ? void 0 : _action$loading.spinning) || false;
    }
    return action.loading;
  }, [action.loading]);
  var searchNode = useMemo(function () {
    var node = search === false && type !== 'form' ? null : /*#__PURE__*/_jsx(FormRender, {
      pagination: pagination,
      beforeSearchSubmit: beforeSearchSubmit,
      action: actionRef,
      columns: propsColumns,
      onFormSearchSubmit: function onFormSearchSubmit(values) {
        _onFormSearchSubmit(values);
      },
      ghost: ghost,
      onReset: props.onReset,
      onSubmit: props.onSubmit,
      loading: !!loading,
      manualRequest: manualRequest,
      search: search,
      form: props.form,
      formRef: formRef,
      type: props.type || 'table',
      cardBordered: props.cardBordered,
      dateFormatter: props.dateFormatter
    });
    if (searchFormRender && node) {
      return /*#__PURE__*/_jsx(_Fragment, {
        children: searchFormRender(props, node)
      });
    } else {
      return node;
    }
  }, [beforeSearchSubmit, formRef, ghost, loading, manualRequest, _onFormSearchSubmit, pagination, props, propsColumns, search, searchFormRender, type]);
  var selectedRows = useMemo(function () {
    return selectedRowKeys === null || selectedRowKeys === void 0 ? void 0 : selectedRowKeys.map(function (key) {
      var _preserveRecordsRef$c;
      return (_preserveRecordsRef$c = preserveRecordsRef.current) === null || _preserveRecordsRef$c === void 0 ? void 0 : _preserveRecordsRef$c.get(key);
    });
  }, [action.dataSource, selectedRowKeys]);
  var hideToolbar = useMemo(function () {
    return options === false && !headerTitle && !toolBarRender && !toolbar && !isLightFilter;
  }, [options, headerTitle, toolBarRender, toolbar, isLightFilter]);

  /** 内置的工具栏 */
  var toolbarDom = toolBarRender === false ? null : /*#__PURE__*/_jsx(Toolbar, {
    headerTitle: headerTitle,
    hideToolbar: hideToolbar,
    selectedRows: selectedRows,
    selectedRowKeys: selectedRowKeys,
    tableColumn: tableColumn,
    tooltip: tooltip,
    toolbar: toolbar,
    onFormSearchSubmit: function onFormSearchSubmit(newValues) {
      setFormSearch(_objectSpread(_objectSpread({}, formSearch), newValues));
    },
    searchNode: isLightFilter ? searchNode : null,
    options: options,
    optionsRender: optionsRender,
    actionRef: actionRef,
    toolBarRender: toolBarRender
  });

  /** 内置的多选操作栏 */
  var alertDom = propsRowSelection !== false ? /*#__PURE__*/_jsx(Alert, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows,
    onCleanSelected: _onCleanSelected,
    alertOptionRender: rest.tableAlertOptionRender,
    alertInfoRender: tableAlertRender,
    alwaysShowAlert: propsRowSelection === null || propsRowSelection === void 0 ? void 0 : propsRowSelection.alwaysShowAlert
  }) : null;
  return wrapSSR( /*#__PURE__*/_jsx(TableRender, _objectSpread(_objectSpread({}, props), {}, {
    name: isEditorTable,
    defaultClassName: defaultClassName,
    size: counter.tableSize,
    onSizeChange: counter.setTableSize,
    pagination: pagination,
    searchNode: searchNode,
    rowSelection: propsRowSelection !== false ? rowSelection : undefined,
    className: className,
    tableColumn: tableColumn,
    isLightFilter: isLightFilter,
    action: action,
    alertDom: alertDom,
    toolbarDom: toolbarDom,
    hideToolbar: hideToolbar,
    onSortChange: function onSortChange(sortConfig) {
      if (useLocaleSorter || sortConfig === proSort) return;
      setProSort(sortConfig);
    },
    onFilterChange: function onFilterChange(filterConfig) {
      if (useLocaleFilter || filterConfig === proFilter) return;
      setProFilter(filterConfig);
    },
    editableUtils: editableUtils,
    getRowKey: getRowKey
  })));
};

/**
 * 🏆 Use Ant Design Table like a Pro! 更快 更好 更方便
 *
 * @param props
 */
var ProviderTableContainer = function ProviderTableContainer(props) {
  var _useContext = useContext(ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var ErrorComponent = props.ErrorBoundary === false ? React.Fragment : props.ErrorBoundary || ErrorBoundary;
  return /*#__PURE__*/_jsx(Container, {
    initValue: props,
    children: /*#__PURE__*/_jsx(ProConfigProvider, {
      needDeps: true,
      children: /*#__PURE__*/_jsx(ErrorComponent, {
        children: /*#__PURE__*/_jsx(ProTable, _objectSpread({
          defaultClassName: "".concat(getPrefixCls('pro-table'))
        }, props))
      })
    })
  });
};
ProviderTableContainer.Summary = Table.Summary;
export default ProviderTableContainer;