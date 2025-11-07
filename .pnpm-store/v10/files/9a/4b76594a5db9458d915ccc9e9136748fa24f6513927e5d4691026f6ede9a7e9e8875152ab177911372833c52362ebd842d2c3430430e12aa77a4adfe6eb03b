import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
var _excluded = ["headerTitle", "tooltip", "toolBarRender", "action", "options", "selectedRowKeys", "selectedRows", "toolbar", "onSearch", "columns", "optionsRender"];
import { ReloadOutlined } from '@ant-design/icons';
import { useIntl } from '@ant-design/pro-provider';
import { isDeepEqualReact, omitUndefined } from '@ant-design/pro-utils';
import { Tooltip } from 'antd';
import React, { useContext, useEffect, useMemo } from 'react';
import { TableContext } from "../../Store/Provide";
import ColumnSetting from "../ColumnSetting";
import ListToolBar from "../ListToolBar";
import DensityIcon from "./DensityIcon";
import FullScreenIcon from "./FullscreenIcon";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
function getButtonText(_ref, options) {
  var _options$reloadIcon;
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: (_options$reloadIcon = options.reloadIcon) !== null && _options$reloadIcon !== void 0 ? _options$reloadIcon : /*#__PURE__*/_jsx(ReloadOutlined, {})
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/_jsx(DensityIcon, {
        icon: options.densityIcon
      })
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/_jsx(FullScreenIcon, {})
    }
  };
}

/**
 * 渲染默认的 工具栏
 *
 * @param options
 * @param className
 */
function renderDefaultOption(options, defaultOptions, actions, columns) {
  return Object.keys(options).filter(function (item) {
    return item;
  }).map(function (key) {
    var value = options[key];
    if (!value) {
      return null;
    }
    var onClick = value === true ? defaultOptions[key] : function (event) {
      value === null || value === void 0 || value(event, actions.current);
    };
    if (typeof onClick !== 'function') {
      onClick = function onClick() {};
    }
    if (key === 'setting') {
      return /*#__PURE__*/_createElement(ColumnSetting, _objectSpread(_objectSpread({}, options[key]), {}, {
        columns: columns,
        key: key
      }));
    }
    if (key === 'fullScreen') {
      return /*#__PURE__*/_jsx("span", {
        onClick: onClick,
        children: /*#__PURE__*/_jsx(FullScreenIcon, {})
      }, key);
    }
    var optionItem = getButtonText(defaultOptions, options)[key];
    if (optionItem) {
      return /*#__PURE__*/_jsx("span", {
        onClick: onClick,
        children: /*#__PURE__*/_jsx(Tooltip, {
          title: optionItem.text,
          children: optionItem.icon
        })
      }, key);
    }
    return null;
  }).filter(function (item) {
    return item;
  });
}
function ToolBar(_ref2) {
  var headerTitle = _ref2.headerTitle,
    tooltip = _ref2.tooltip,
    toolBarRender = _ref2.toolBarRender,
    action = _ref2.action,
    propsOptions = _ref2.options,
    selectedRowKeys = _ref2.selectedRowKeys,
    selectedRows = _ref2.selectedRows,
    toolbar = _ref2.toolbar,
    onSearch = _ref2.onSearch,
    columns = _ref2.columns,
    optionsRender = _ref2.optionsRender,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var counter = useContext(TableContext);
  var intl = useIntl();
  var optionDom = useMemo(function () {
    var defaultOptions = {
      reload: function reload() {
        var _action$current;
        return action === null || action === void 0 || (_action$current = action.current) === null || _action$current === void 0 ? void 0 : _action$current.reload();
      },
      density: true,
      setting: true,
      search: false,
      fullScreen: function fullScreen() {
        var _action$current2, _action$current2$full;
        return action === null || action === void 0 || (_action$current2 = action.current) === null || _action$current2 === void 0 || (_action$current2$full = _action$current2.fullScreen) === null || _action$current2$full === void 0 ? void 0 : _action$current2$full.call(_action$current2);
      }
    };
    if (propsOptions === false) {
      return [];
    }
    var options = _objectSpread(_objectSpread({}, defaultOptions), {}, {
      fullScreen: false
    }, propsOptions);
    var settings = renderDefaultOption(options, _objectSpread(_objectSpread({}, defaultOptions), {}, {
      intl: intl
    }), action, columns);
    if (optionsRender) {
      return optionsRender(_objectSpread({
        headerTitle: headerTitle,
        tooltip: tooltip,
        toolBarRender: toolBarRender,
        action: action,
        options: propsOptions,
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        toolbar: toolbar,
        onSearch: onSearch,
        columns: columns,
        optionsRender: optionsRender
      }, rest), settings);
    }
    return settings;
  }, [action, columns, headerTitle, intl, onSearch, optionsRender, propsOptions, rest, selectedRowKeys, selectedRows, toolBarRender, toolbar, tooltip]);
  // 操作列表
  var actions = toolBarRender ? toolBarRender(action === null || action === void 0 ? void 0 : action.current, {
    selectedRowKeys: selectedRowKeys,
    selectedRows: selectedRows
  }) : [];
  var searchConfig = useMemo(function () {
    if (!propsOptions) {
      return false;
    }
    if (!propsOptions.search) return false;

    /** 受控的value 和 onChange */
    var defaultSearchConfig = {
      value: counter.keyWords,
      onChange: function onChange(e) {
        return counter.setKeyWords(e.target.value);
      }
    };
    if (propsOptions.search === true) return defaultSearchConfig;
    return _objectSpread(_objectSpread({}, defaultSearchConfig), propsOptions.search);
  }, [counter, propsOptions]);
  useEffect(function () {
    if (counter.keyWords === undefined) {
      onSearch === null || onSearch === void 0 || onSearch('');
    }
  }, [counter.keyWords, onSearch]);
  return /*#__PURE__*/_jsx(ListToolBar, _objectSpread({
    title: headerTitle,
    tooltip: tooltip || rest.tip,
    search: searchConfig,
    onSearch: onSearch,
    actions: actions,
    settings: optionDom
  }, toolbar));
}
/** 这里负责与table交互，并且减少 render次数 */
var ToolbarRender = /*#__PURE__*/function (_React$Component) {
  _inherits(ToolbarRender, _React$Component);
  var _super = _createSuper(ToolbarRender);
  function ToolbarRender() {
    var _this;
    _classCallCheck(this, ToolbarRender);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onSearch", function (keyword) {
      var _options$search, _options$search$onSea, _actionRef$current, _actionRef$current$se;
      var _this$props = _this.props,
        options = _this$props.options,
        onFormSearchSubmit = _this$props.onFormSearchSubmit,
        actionRef = _this$props.actionRef;
      if (!options || !options.search) {
        return;
      }
      var _ref3 = options.search === true ? {} : options.search,
        _ref3$name = _ref3.name,
        name = _ref3$name === void 0 ? 'keyword' : _ref3$name;

      /** 如果传入的 onSearch 返回值为 false，应该直接拦截请求 */
      var success = (_options$search = options.search) === null || _options$search === void 0 || (_options$search$onSea = _options$search.onSearch) === null || _options$search$onSea === void 0 ? void 0 : _options$search$onSea.call(_options$search, keyword);
      if (success === false) return;

      // 查询的时候的回到第一页
      actionRef === null || actionRef === void 0 || (_actionRef$current = actionRef.current) === null || _actionRef$current === void 0 || (_actionRef$current$se = _actionRef$current.setPageInfo) === null || _actionRef$current$se === void 0 || _actionRef$current$se.call(_actionRef$current, {
        current: 1
      });
      onFormSearchSubmit(omitUndefined(_defineProperty({
        _timestamp: Date.now()
      }, name, keyword)));
    });
    _defineProperty(_assertThisInitialized(_this), "isEquals", function (next) {
      var _this$props2 = _this.props,
        hideToolbar = _this$props2.hideToolbar,
        tableColumn = _this$props2.tableColumn,
        options = _this$props2.options,
        tooltip = _this$props2.tooltip,
        toolbar = _this$props2.toolbar,
        selectedRows = _this$props2.selectedRows,
        selectedRowKeys = _this$props2.selectedRowKeys,
        headerTitle = _this$props2.headerTitle,
        actionRef = _this$props2.actionRef,
        toolBarRender = _this$props2.toolBarRender;
      return isDeepEqualReact({
        hideToolbar: hideToolbar,
        tableColumn: tableColumn,
        options: options,
        tooltip: tooltip,
        toolbar: toolbar,
        selectedRows: selectedRows,
        selectedRowKeys: selectedRowKeys,
        headerTitle: headerTitle,
        actionRef: actionRef,
        toolBarRender: toolBarRender
      }, {
        hideToolbar: next.hideToolbar,
        tableColumn: next.tableColumn,
        options: next.options,
        tooltip: next.tooltip,
        toolbar: next.toolbar,
        selectedRows: next.selectedRows,
        selectedRowKeys: next.selectedRowKeys,
        headerTitle: next.headerTitle,
        actionRef: next.actionRef,
        toolBarRender: next.toolBarRender
      }, ['render', 'renderFormItem']);
    });
    _defineProperty(_assertThisInitialized(_this), "shouldComponentUpdate", function (next) {
      if (next.searchNode) {
        return true;
      }
      return !_this.isEquals(next);
    });
    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props3 = _this.props,
        hideToolbar = _this$props3.hideToolbar,
        tableColumn = _this$props3.tableColumn,
        options = _this$props3.options,
        searchNode = _this$props3.searchNode,
        tooltip = _this$props3.tooltip,
        toolbar = _this$props3.toolbar,
        selectedRows = _this$props3.selectedRows,
        selectedRowKeys = _this$props3.selectedRowKeys,
        headerTitle = _this$props3.headerTitle,
        actionRef = _this$props3.actionRef,
        toolBarRender = _this$props3.toolBarRender,
        optionsRender = _this$props3.optionsRender;

      // 不展示 toolbar
      if (hideToolbar) {
        return null;
      }
      return /*#__PURE__*/_jsx(ToolBar, {
        tooltip: tooltip,
        columns: tableColumn,
        options: options,
        headerTitle: headerTitle,
        action: actionRef,
        onSearch: _this.onSearch,
        selectedRows: selectedRows,
        selectedRowKeys: selectedRowKeys,
        toolBarRender: toolBarRender,
        toolbar: _objectSpread({
          filter: searchNode
        }, toolbar),
        optionsRender: optionsRender
      });
    });
    return _this;
  }
  return _createClass(ToolbarRender);
}(React.Component);
export default ToolbarRender;