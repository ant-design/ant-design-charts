"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _classnames = _interopRequireDefault(require("classnames"));
var _rcResizeObserver = _interopRequireDefault(require("rc-resize-observer"));
var _react = _interopRequireWildcard(require("react"));
var _HeaderMenu = _interopRequireDefault(require("./HeaderMenu"));
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
/** Antd 默认直接导出了 rc 组件中的 Tab.Pane 组件。 */

/**
 * 获取配置区域 DOM Item
 *
 * @param setting 配置项
 */
function getSettingItem(setting) {
  if ( /*#__PURE__*/_react.default.isValidElement(setting)) {
    return setting;
  }
  if (setting) {
    var settingConfig = setting;
    var icon = settingConfig.icon,
      tooltip = settingConfig.tooltip,
      _onClick = settingConfig.onClick,
      _key = settingConfig.key;
    if (icon && tooltip) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tooltip, {
        title: tooltip,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          onClick: function onClick() {
            if (_onClick) {
              _onClick(_key);
            }
          },
          children: icon
        }, _key)
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      onClick: function onClick() {
        if (_onClick) {
          _onClick(_key);
        }
      },
      children: icon
    }, _key);
  }
  return null;
}
var ListToolBarTabBar = function ListToolBarTabBar(_ref) {
  var _tabs$items;
  var prefixCls = _ref.prefixCls,
    tabs = _ref.tabs,
    multipleLine = _ref.multipleLine,
    filtersNode = _ref.filtersNode;
  if (!multipleLine) return null;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(prefixCls, "-extra-line"),
    children: tabs !== null && tabs !== void 0 && tabs.items && tabs !== null && tabs !== void 0 && tabs.items.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Tabs, {
      style: {
        width: '100%'
      },
      defaultActiveKey: tabs.defaultActiveKey,
      activeKey: tabs.activeKey,
      items: tabs.items.map(function (item, index) {
        var _item$key;
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({
          label: item.tab
        }, item), {}, {
          key: ((_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()) || (index === null || index === void 0 ? void 0 : index.toString())
        });
      }),
      onChange: tabs.onChange,
      tabBarExtraContent: filtersNode,
      children: (_tabs$items = tabs.items) === null || _tabs$items === void 0 ? void 0 : _tabs$items.map(function (item, index) {
        return (0, _proUtils.compareVersions)(_antd.version, '4.23.0') < 0 ? /*#__PURE__*/(0, _react.createElement)(_antd.Tabs.TabPane, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
          key: item.key || index,
          tab: item.tab
        })) : null;
      })
    }) : filtersNode
  });
};
var ListToolBar = function ListToolBar(_ref2) {
  var customizePrefixCls = _ref2.prefixCls,
    title = _ref2.title,
    subTitle = _ref2.subTitle,
    tooltip = _ref2.tooltip,
    className = _ref2.className,
    style = _ref2.style,
    search = _ref2.search,
    onSearch = _ref2.onSearch,
    _ref2$multipleLine = _ref2.multipleLine,
    multipleLine = _ref2$multipleLine === void 0 ? false : _ref2$multipleLine,
    filter = _ref2.filter,
    _ref2$actions = _ref2.actions,
    actions = _ref2$actions === void 0 ? [] : _ref2$actions,
    _ref2$settings = _ref2.settings,
    settings = _ref2$settings === void 0 ? [] : _ref2$settings,
    tabs = _ref2.tabs,
    menu = _ref2.menu;
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var _proTheme$useToken = _proProvider.proTheme.useToken(),
    token = _proTheme$useToken.token;
  var prefixCls = getPrefixCls('pro-table-list-toolbar', customizePrefixCls);
  var _useStyle = (0, _style.useStyle)(prefixCls),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var intl = (0, _proProvider.useIntl)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var placeholder = intl.getMessage('tableForm.inputPlaceholder', '请输入');

  /**
   * 获取搜索栏 DOM
   *
   * @param search 搜索框相关配置
   */
  var searchNode = (0, _react.useMemo)(function () {
    if (!search) {
      return null;
    }
    if ( /*#__PURE__*/_react.default.isValidElement(search)) {
      return search;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input.Search, (0, _objectSpread2.default)((0, _objectSpread2.default)({
      style: {
        width: 200
      },
      placeholder: placeholder
    }, search), {}, {
      onSearch: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
        var _onSearch, _ref4;
        var _len,
          restParams,
          _key2,
          success,
          _args = arguments;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, restParams = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                restParams[_key2] = _args[_key2];
              }
              _context.next = 3;
              return (_onSearch = (_ref4 = search).onSearch) === null || _onSearch === void 0 ? void 0 : _onSearch.call.apply(_onSearch, [_ref4].concat(restParams));
            case 3:
              success = _context.sent;
              if (success !== false) {
                onSearch === null || onSearch === void 0 || onSearch(restParams === null || restParams === void 0 ? void 0 : restParams[0]);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))
    }));
  }, [placeholder, onSearch, search]);

  /** 轻量筛选组件 */
  var filtersNode = (0, _react.useMemo)(function () {
    if (filter) return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(prefixCls, "-filter ").concat(hashId).trim(),
      children: filter
    });
    return null;
  }, [filter, hashId, prefixCls]);

  /** 有没有 title，需要结合多个场景判断 */
  var hasTitle = (0, _react.useMemo)(function () {
    return menu || title || subTitle || tooltip;
  }, [menu, subTitle, title, tooltip]);

  /** 没有 key 的时候帮忙加一下 key 不加的话很烦人 */
  var actionDom = (0, _react.useMemo)(function () {
    if (!Array.isArray(actions)) {
      return actions;
    }
    if (actions.length < 1) {
      return null;
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: token.marginXS
      },
      children: actions.map(function (action, index) {
        if (! /*#__PURE__*/_react.default.isValidElement(action)) {
          // eslint-disable-next-line react/no-array-index-key
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
            children: action
          }, index);
        }
        return /*#__PURE__*/_react.default.cloneElement(action, (0, _objectSpread2.default)({
          // eslint-disable-next-line react/no-array-index-key
          key: index
        }, action === null || action === void 0 ? void 0 : action.props));
      })
    });
  }, [actions]);
  var hasRight = (0, _react.useMemo)(function () {
    return !!(hasTitle && searchNode || !multipleLine && filtersNode || actionDom || settings !== null && settings !== void 0 && settings.length);
  }, [actionDom, filtersNode, hasTitle, multipleLine, searchNode, settings === null || settings === void 0 ? void 0 : settings.length]);
  var hasLeft = (0, _react.useMemo)(function () {
    return tooltip || title || subTitle || menu || !hasTitle && searchNode;
  }, [hasTitle, menu, searchNode, subTitle, title, tooltip]);
  var leftTitleDom = (0, _react.useMemo)(function () {
    // 保留dom是为了占位，不然 right 就变到左边了
    if (!hasLeft && hasRight) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-left ").concat(hashId).trim()
      });
    }

    // 减少 space 的dom，渲染的时候能节省点性能
    if (!menu && (hasTitle || !searchNode)) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-left ").concat(hashId).trim(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(prefixCls, "-title ").concat(hashId).trim(),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
            tooltip: tooltip,
            label: title,
            subTitle: subTitle
          })
        })
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _classnames.default)("".concat(prefixCls, "-left"), hashId, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(prefixCls, "-left-has-tabs"), (menu === null || menu === void 0 ? void 0 : menu.type) === 'tab'), "".concat(prefixCls, "-left-has-dropdown"), (menu === null || menu === void 0 ? void 0 : menu.type) === 'dropdown'), "".concat(prefixCls, "-left-has-inline-menu"), (menu === null || menu === void 0 ? void 0 : menu.type) === 'inline')),
      children: [hasTitle && !menu && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-title ").concat(hashId).trim(),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_proUtils.LabelIconTip, {
          tooltip: tooltip,
          label: title,
          subTitle: subTitle
        })
      }), menu &&
      /*#__PURE__*/
      // 这里面实现了 tabs 的逻辑
      (0, _jsxRuntime.jsx)(_HeaderMenu.default, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, menu), {}, {
        prefixCls: prefixCls
      })), !hasTitle && searchNode ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-search ").concat(hashId).trim(),
        children: searchNode
      }) : null]
    });
  }, [hasLeft, hasRight, hasTitle, hashId, menu, prefixCls, searchNode, subTitle, title, tooltip]);
  var rightTitleDom = (0, _react.useMemo)(function () {
    if (!hasRight) return null;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "".concat(prefixCls, "-right ").concat(hashId).trim(),
      style: isMobile ? {} : {
        alignItems: 'center'
      },
      children: [!multipleLine ? filtersNode : null, hasTitle && searchNode ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-search ").concat(hashId).trim(),
        children: searchNode
      }) : null, actionDom, settings !== null && settings !== void 0 && settings.length ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(prefixCls, "-setting-items ").concat(hashId).trim(),
        children: settings.map(function (setting, index) {
          var settingItem = getSettingItem(setting);
          return (
            /*#__PURE__*/
            // eslint-disable-next-line react/no-array-index-key
            (0, _jsxRuntime.jsx)("div", {
              className: "".concat(prefixCls, "-setting-item ").concat(hashId).trim(),
              children: settingItem
            }, index)
          );
        })
      }) : null]
    });
  }, [hasRight, prefixCls, hashId, isMobile, hasTitle, searchNode, multipleLine, filtersNode, actionDom, settings]);
  var titleNode = (0, _react.useMemo)(function () {
    if (!hasRight && !hasLeft) return null;
    var containerClassName = (0, _classnames.default)("".concat(prefixCls, "-container"), hashId, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-container-mobile"), isMobile));
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: containerClassName,
      children: [leftTitleDom, rightTitleDom]
    });
  }, [hasLeft, hasRight, hashId, isMobile, leftTitleDom, prefixCls, rightTitleDom]);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(_rcResizeObserver.default, {
    onResize: function onResize(size) {
      if (size.width < 375 !== isMobile) {
        setIsMobile(size.width < 375);
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: style,
      className: (0, _classnames.default)(prefixCls, hashId, className),
      children: [titleNode, /*#__PURE__*/(0, _jsxRuntime.jsx)(ListToolBarTabBar, {
        filtersNode: filtersNode,
        prefixCls: prefixCls,
        tabs: tabs,
        multipleLine: multipleLine
      })]
    })
  }));
};
var _default = exports.default = ListToolBar;