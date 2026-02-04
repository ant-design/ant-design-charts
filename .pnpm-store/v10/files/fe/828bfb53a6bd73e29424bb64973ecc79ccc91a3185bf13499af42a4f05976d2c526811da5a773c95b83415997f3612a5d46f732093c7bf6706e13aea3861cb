"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectKeyProvide = exports.ProHelpPanel = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _icons = require("@ant-design/icons");
var _proProvider = require("@ant-design/pro-provider");
var _proUtils = require("@ant-design/pro-utils");
var _antd = require("antd");
var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _react = _interopRequireWildcard(require("react"));
var _HelpProvide = require("./HelpProvide");
var _ProHelpContentPanel = require("./ProHelpContentPanel");
var _Search = require("./Search");
var _style = require("./style");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["title", "bordered", "onClose", "footer", "height", "extraRender"];
var SelectKeyProvide = exports.SelectKeyProvide = /*#__PURE__*/_react.default.createContext({
  selectedKey: undefined,
  setSelectedKey: function setSelectedKey() {}
});
/**
 * ProHelpPanel 组件是一个帮助中心面板组件，具有可折叠的左侧菜单和右侧帮助内容区域。
 * 左侧菜单显示了帮助文档的目录结构，右侧帮助内容区域显示了用户选中的帮助文档内容。
 * 在左侧菜单中，用户可以通过点击目录来选择并显示相应的文档内容。
 * @param param0
 * @returns
 */
var ProHelpPanel = exports.ProHelpPanel = function ProHelpPanel(_ref) {
  var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? '帮助中心' : _ref$title,
    _ref$bordered = _ref.bordered,
    bordered = _ref$bordered === void 0 ? true : _ref$bordered,
    onClose = _ref.onClose,
    footer = _ref.footer,
    height = _ref.height,
    extraRender = _ref.extraRender,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
    getPrefixCls = _useContext.getPrefixCls;
  var className = getPrefixCls('pro-help');
  var _useStyle = (0, _style.useStyle)(className),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var _useContext2 = (0, _react.useContext)(_HelpProvide.ProHelpProvide),
    dataSource = _useContext2.dataSource;
  var _useMergedState = (0, _useMergedState5.default)(undefined, {
      defaultValue: props.defaultSelectedKey,
      value: props.selectedKey,
      onChange: props.onSelectedKeyChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    selectedKey = _useMergedState2[0],
    setSelectedKey = _useMergedState2[1];
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    openKey = _useState2[0],
    setOpenKey = _useState2[1];
  var _useContext3 = (0, _react.useContext)(_proProvider.ProProvider),
    token = _useContext3.token;
  var _useMergedState3 = (0, _useMergedState5.default)(true, {
      value: props.showLeftPanel,
      onChange: props.onShowLeftPanelChange
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    showLeftPanel = _useMergedState4[0],
    setShowLeftPanel = _useMergedState4[1];
  var dataSourceKeyMap = (0, _react.useMemo)(function () {
    var map = new Map();
    dataSource.forEach(function (page) {
      var _page$children;
      map.set(page.key, page);
      (_page$children = page.children) === null || _page$children === void 0 || _page$children.forEach(function (item) {
        map.set(item.key || item.title, (0, _objectSpread2.default)({
          parentKey: page.key
        }, item));
      });
    });
    return map;
  }, [dataSource]);
  var parentKey = (0, _react.useMemo)(function () {
    var _dataSourceKeyMap$get;
    return (_dataSourceKeyMap$get = dataSourceKeyMap.get(selectedKey)) === null || _dataSourceKeyMap$get === void 0 ? void 0 : _dataSourceKeyMap$get.parentKey;
  }, [dataSourceKeyMap, selectedKey]);
  var defaultExtraActions = {
    collapsePanelAction: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(className, "-actions-item ").concat(hashId).trim(),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.ProfileOutlined, {
        title: "collapse panel",
        onClick: function onClick() {
          setShowLeftPanel(!showLeftPanel);
        }
      })
    }),
    helpSelectAction: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Search.ProHelpSelect, {
      iconClassName: "".concat(className, "-actions-item"),
      className: "".concat(hashId, " ").concat(className, "-actions-input"),
      value: selectedKey,
      onChange: function onChange(value, item) {
        setSelectedKey(value);
        setOpenKey(item === null || item === void 0 ? void 0 : item.dataItemKey);
      }
    }),
    closeAction: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(className, "-actions-item ").concat(hashId).trim(),
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CloseOutlined, {
        title: "close panel",
        onClick: function onClick() {
          onClose === null || onClose === void 0 || onClose();
        }
      })
    })
  };
  var extraDomList = function extraDomList() {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(className, "-actions ").concat(hashId).trim(),
      children: extraRender ? extraRender(defaultExtraActions.collapsePanelAction, defaultExtraActions.helpSelectAction, defaultExtraActions.closeAction) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [defaultExtraActions.collapsePanelAction, defaultExtraActions.helpSelectAction, onClose ? defaultExtraActions.closeAction : null]
      })
    });
  };
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsx)(SelectKeyProvide.Provider, {
    value: {
      selectedKey: selectedKey,
      setSelectedKey: setSelectedKey
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Card, {
      bordered: bordered,
      title: title,
      bodyStyle: {
        display: 'flex',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%'
      },
      size: "small",
      extra: extraDomList(),
      children: [showLeftPanel ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(hashId, " ").concat(className, "-left-panel "),
        style: {
          height: height
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
          theme: {
            hashed: (0, _proProvider.isNeedOpenHash)(),
            token: {
              lineHeight: 1.2,
              fontSize: 12,
              controlHeightLG: 26
            },
            components: {
              Menu: (0, _proUtils.coverToNewToken)({
                radiusItem: token.borderRadius,
                colorActiveBarWidth: 0,
                colorActiveBarBorderSize: 0,
                colorItemBgSelected: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgMenuItemSelected) || 'rgba(0, 0, 0, 0.04)',
                colorItemBgActive: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
                colorItemText: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu) || 'rgba(0, 0, 0, 0.65)',
                colorItemTextHover: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
                colorItemTextSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                colorItemBg: 'transparent',
                colorSubItemBg: 'transparent',
                popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
              })
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Menu, {
            className: "".concat(hashId, " ").concat(className, "-left-panel-menu"),
            openKeys: [parentKey, openKey],
            onOpenChange: function onOpenChange(keys) {
              setOpenKey(keys.at(-1) || '');
            },
            selectedKeys: selectedKey ? [selectedKey] : [],
            onSelect: function onSelect(_ref2) {
              var selectedKeys = _ref2.selectedKeys;
              setSelectedKey(selectedKeys.at(-1) || '');
            },
            mode: "inline",
            items: dataSource.map(function (item) {
              return {
                key: item.key,
                label: item.title,
                children: item.children.map(function (child) {
                  return {
                    key: child.key,
                    label: child.title
                  };
                })
              };
            })
          })
        })
      }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(hashId, " ").concat(className, "-content-panel"),
        style: {
          height: height
        },
        children: [selectedKey ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProHelpContentPanel.ProHelpContentPanel, {
          parentItem: dataSourceKeyMap.get(parentKey),
          className: "".concat(className, "-content-render"),
          selectedKey: selectedKey,
          onScroll: function onScroll(key) {
            return setSelectedKey(key);
          }
        }) : null, footer ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(hashId, " ").concat(className, "-footer"),
          children: footer
        }) : null]
      })]
    })
  }));
};