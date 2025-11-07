"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _react = _interopRequireWildcard(require("react"));
var _Provide = require("../../Store/Provide");
var _ColumnSetting = _interopRequireDefault(require("../ColumnSetting"));
var _ListToolBar = _interopRequireDefault(require("../ListToolBar"));
var _DensityIcon = _interopRequireDefault(require("./DensityIcon"));
var _FullscreenIcon = _interopRequireDefault(require("./FullscreenIcon"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["headerTitle", "tooltip", "toolBarRender", "action", "options", "selectedRowKeys", "selectedRows", "toolbar", "onSearch", "columns", "optionsRender"];
function getButtonText(_ref, options) {
  var _options$reloadIcon;
  var intl = _ref.intl;
  return {
    reload: {
      text: intl.getMessage('tableToolBar.reload', '刷新'),
      icon: (_options$reloadIcon = options.reloadIcon) !== null && _options$reloadIcon !== void 0 ? _options$reloadIcon : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ReloadOutlined, {})
    },
    density: {
      text: intl.getMessage('tableToolBar.density', '表格密度'),
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DensityIcon.default, {
        icon: options.densityIcon
      })
    },
    fullScreen: {
      text: intl.getMessage('tableToolBar.fullScreen', '全屏'),
      icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FullscreenIcon.default, {})
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
      return /*#__PURE__*/(0, _react.createElement)(_ColumnSetting.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, options[key]), {}, {
        columns: columns,
        key: key
      }));
    }
    if (key === 'fullScreen') {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: onClick,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FullscreenIcon.default, {})
      }, key);
    }
    var optionItem = getButtonText(defaultOptions, options)[key];
    if (optionItem) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: onClick,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
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
    rest = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  var counter = (0, _react.useContext)(_Provide.TableContext);
  var intl = (0, _proProvider.useIntl)();
  var optionDom = (0, _react.useMemo)(function () {
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
    var options = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultOptions), {}, {
      fullScreen: false
    }, propsOptions);
    var settings = renderDefaultOption(options, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultOptions), {}, {
      intl: intl
    }), action, columns);
    if (optionsRender) {
      return optionsRender((0, _objectSpread2.default)({
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
  var searchConfig = (0, _react.useMemo)(function () {
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
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultSearchConfig), propsOptions.search);
  }, [counter, propsOptions]);
  (0, _react.useEffect)(function () {
    if (counter.keyWords === undefined) {
      onSearch === null || onSearch === void 0 || onSearch('');
    }
  }, [counter.keyWords, onSearch]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListToolBar.default, (0, _objectSpread2.default)({
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
  (0, _inherits2.default)(ToolbarRender, _React$Component);
  var _super = (0, _createSuper2.default)(ToolbarRender);
  function ToolbarRender() {
    var _this;
    (0, _classCallCheck2.default)(this, ToolbarRender);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSearch", function (keyword) {
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
      onFormSearchSubmit((0, _proUtils.omitUndefined)((0, _defineProperty2.default)({
        _timestamp: Date.now()
      }, name, keyword)));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isEquals", function (next) {
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
      return (0, _proUtils.isDeepEqualReact)({
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
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shouldComponentUpdate", function (next) {
      if (next.searchNode) {
        return true;
      }
      return !_this.isEquals(next);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "render", function () {
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(ToolBar, {
        tooltip: tooltip,
        columns: tableColumn,
        options: options,
        headerTitle: headerTitle,
        action: actionRef,
        onSearch: _this.onSearch,
        selectedRows: selectedRows,
        selectedRowKeys: selectedRowKeys,
        toolBarRender: toolBarRender,
        toolbar: (0, _objectSpread2.default)({
          filter: searchNode
        }, toolbar),
        optionsRender: optionsRender
      });
    });
    return _this;
  }
  return (0, _createClass2.default)(ToolbarRender);
}(_react.default.Component);
var _default = exports.default = ToolbarRender;