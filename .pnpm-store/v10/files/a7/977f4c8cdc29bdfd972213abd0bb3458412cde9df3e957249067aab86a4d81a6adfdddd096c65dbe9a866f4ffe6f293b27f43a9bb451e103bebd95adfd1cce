"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormatMessage = exports.SettingDrawer = void 0;
var _regeneratorRuntime2 = _interopRequireDefault(require("@babel/runtime/helpers/regeneratorRuntime"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _icons = require("@ant-design/icons");
var _proUtils = require("@ant-design/pro-utils");
var _useParams = require("@umijs/use-params");
var _antd = require("antd");
var _useMergedState5 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));
var _omit = _interopRequireDefault(require("rc-util/lib/omit"));
var _react = _interopRequireWildcard(require("react"));
var _defaultSettings = require("../../defaultSettings");
var _locales = require("../../locales");
var _utils = require("../../utils/utils");
var _BlockCheckbox = require("./BlockCheckbox");
var _LayoutChange = require("./LayoutChange");
var _RegionalChange = require("./RegionalChange");
var _ThemeColor = require("./ThemeColor");
var _group = require("./icon/group");
var _sub = require("./icon/sub");
var _index = require("./style/index");
var _jsxRuntime = require("react/jsx-runtime");
var Body = function Body(_ref) {
  var children = _ref.children,
    hashId = _ref.hashId,
    prefixCls = _ref.prefixCls,
    title = _ref.title;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      marginBlockEnd: 12
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "".concat(prefixCls, "-body-title ").concat(hashId).trim(),
      children: title
    }), children]
  });
};
var getDifferentSetting = function getDifferentSetting(state) {
  var stateObj = {};
  Object.keys(state).forEach(function (key) {
    if (state[key] !== _defaultSettings.defaultSettings[key] &&
    //@ts-ignore
    key !== 'collapse') {
      stateObj[key] = state[key];
    } else {
      stateObj[key] = undefined;
    }
    if (key.includes('Render')) stateObj[key] = state[key] === false ? false : undefined;
  });
  stateObj.menu = undefined;
  return stateObj;
};
var getFormatMessage = exports.getFormatMessage = function getFormatMessage() {
  var formatMessage = function formatMessage(_ref2) {
    var id = _ref2.id;
    var locales = (0, _locales.gLocaleObject)();
    return locales[id];
  };
  return formatMessage;
};

/**
 * 初始化的时候需要做的工作
 *
 * @param param0
 */
var initState = function initState(urlParams, settings, onSettingChange) {
  if (!(0, _proUtils.isBrowser)()) return;
  var replaceSetting = {};
  Object.keys(urlParams).forEach(function (key) {
    if (_defaultSettings.defaultSettings[key] || _defaultSettings.defaultSettings[key] === undefined) {
      if (key === 'colorPrimary') {
        replaceSetting[key] = (0, _utils.genStringToTheme)(urlParams[key]);
        return;
      }
      replaceSetting[key] = urlParams[key];
    }
  });
  var newSettings = (0, _proUtils.merge)({}, settings, replaceSetting);
  delete newSettings.menu;
  delete newSettings.title;
  delete newSettings.iconfontUrl;

  // 同步数据到外部
  onSettingChange === null || onSettingChange === void 0 || onSettingChange(newSettings);
};
var getParamsFromUrl = function getParamsFromUrl(urlParams, settings) {
  if (!(0, _proUtils.isBrowser)()) return _defaultSettings.defaultSettings;
  return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _defaultSettings.defaultSettings), settings || {}), urlParams);
};
var genCopySettingJson = function genCopySettingJson(settingState) {
  return JSON.stringify((0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, settingState), {}, {
    colorPrimary: settingState.colorPrimary
  }), ['colorWeak']), null, 2);
};

/**
 * 可视化配置组件
 *
 * @param props
 */
var SettingDrawer = exports.SettingDrawer = function SettingDrawer(props) {
  var _props$defaultSetting = props.defaultSettings,
    propsDefaultSettings = _props$defaultSetting === void 0 ? undefined : _props$defaultSetting,
    _props$settings = props.settings,
    propsSettings = _props$settings === void 0 ? undefined : _props$settings,
    hideHintAlert = props.hideHintAlert,
    hideCopyButton = props.hideCopyButton,
    _props$colorList = props.colorList,
    colorList = _props$colorList === void 0 ? [{
      key: 'techBlue',
      color: '#1677FF'
    }, {
      key: 'daybreak',
      color: '#1890ff'
    }, {
      key: 'dust',
      color: '#F5222D'
    }, {
      key: 'volcano',
      color: '#FA541C'
    }, {
      key: 'sunset',
      color: '#FAAD14'
    }, {
      key: 'cyan',
      color: '#13C2C2'
    }, {
      key: 'green',
      color: '#52C41A'
    }, {
      key: 'geekblue',
      color: '#2F54EB'
    }, {
      key: 'purple',
      color: '#722ED1'
    }] : _props$colorList,
    getContainer = props.getContainer,
    onSettingChange = props.onSettingChange,
    enableDarkTheme = props.enableDarkTheme,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls,
    _props$pathname = props.pathname,
    pathname = _props$pathname === void 0 ? (0, _proUtils.isBrowser)() ? window.location.pathname : '' : _props$pathname,
    _props$disableUrlPara = props.disableUrlParams,
    disableUrlParams = _props$disableUrlPara === void 0 ? true : _props$disableUrlPara,
    themeOnly = props.themeOnly,
    drawerProps = props.drawerProps;
  var firstRender = (0, _react.useRef)(true);
  var _useMergedState = (0, _useMergedState5.default)(false, {
      value: props.collapse,
      onChange: props.onCollapseChange
    }),
    _useMergedState2 = (0, _slicedToArray2.default)(_useMergedState, 2),
    open = _useMergedState2[0],
    setOpen = _useMergedState2[1];
  var _useState = (0, _react.useState)((0, _locales.getLanguage)()),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];
  var _useUrlSearchParams = (0, _useParams.useUrlSearchParams)({}, {
      disabled: disableUrlParams
    }),
    _useUrlSearchParams2 = (0, _slicedToArray2.default)(_useUrlSearchParams, 2),
    urlParams = _useUrlSearchParams2[0],
    setUrlParams = _useUrlSearchParams2[1];
  var _useMergedState3 = (0, _useMergedState5.default)(function () {
      return getParamsFromUrl(urlParams, propsSettings || propsDefaultSettings);
    }, {
      value: propsSettings,
      onChange: onSettingChange
    }),
    _useMergedState4 = (0, _slicedToArray2.default)(_useMergedState3, 2),
    settingState = _useMergedState4[0],
    setSettingState = _useMergedState4[1];
  var _ref3 = settingState || {},
    navTheme = _ref3.navTheme,
    colorPrimary = _ref3.colorPrimary,
    siderMenuType = _ref3.siderMenuType,
    layout = _ref3.layout,
    colorWeak = _ref3.colorWeak;
  (0, _react.useEffect)(function () {
    // 语言修改，这个是和 locale 是配置起来的
    var onLanguageChange = function onLanguageChange() {
      if (language !== (0, _locales.getLanguage)()) {
        setLanguage((0, _locales.getLanguage)());
      }
    };

    /** 如果不是浏览器 都没有必要做了 */
    if (!(0, _proUtils.isBrowser)()) return function () {
      return null;
    };
    initState(getParamsFromUrl(urlParams, propsSettings), settingState, setSettingState);
    window.document.addEventListener('languagechange', onLanguageChange, {
      passive: true
    });
    return function () {
      return window.document.removeEventListener('languagechange', onLanguageChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(function () {
    if ((0, _proUtils.compareVersions)(_antd.version, '5.0.0') < 0) {
      _antd.ConfigProvider.config({
        theme: {
          primaryColor: settingState.colorPrimary
        }
      });
    }
  }, [settingState.colorPrimary, settingState.navTheme]);
  /**
   * 修改设置
   *
   * @param key
   * @param value
   */
  var changeSetting = function changeSetting(key, value) {
    var nextState = {};
    nextState[key] = value;
    if (key === 'layout') {
      nextState.contentWidth = value === 'top' ? 'Fixed' : 'Fluid';
    }
    if (key === 'layout' && value !== 'mix') {
      nextState.splitMenus = false;
    }
    if (key === 'layout' && value === 'mix') {
      nextState.navTheme = 'light';
    }
    if (key === 'colorWeak' && value === true) {
      var dom = document.querySelector('body');
      if (dom) {
        dom.dataset.prosettingdrawer = dom.style.filter;
        dom.style.filter = 'invert(80%)';
      }
    }
    if (key === 'colorWeak' && value === false) {
      var _dom = document.querySelector('body');
      if (_dom) {
        _dom.style.filter = _dom.dataset.prosettingdrawer || 'none';
        delete _dom.dataset.prosettingdrawer;
      }
    }
    delete nextState.menu;
    delete nextState.title;
    delete nextState.iconfontUrl;
    delete nextState.logo;
    delete nextState.pwa;
    setSettingState((0, _objectSpread2.default)((0, _objectSpread2.default)({}, settingState), nextState));
  };
  var formatMessage = getFormatMessage();
  (0, _react.useEffect)(function () {
    /** 如果不是浏览器 都没有必要做了 */
    if (!(0, _proUtils.isBrowser)()) return;
    if (disableUrlParams) return;
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    /** 每次从url拿最新的防止记忆 */
    var urlSearchParams = new URLSearchParams(window.location.search);
    var params = Object.fromEntries(urlSearchParams.entries());
    var diffParams = getDifferentSetting((0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), settingState));
    delete diffParams.logo;
    delete diffParams.menu;
    delete diffParams.title;
    delete diffParams.iconfontUrl;
    delete diffParams.pwa;
    setUrlParams(diffParams);
  }, [setUrlParams, settingState, urlParams, pathname, disableUrlParams]);
  var baseClassName = "".concat(prefixCls, "-setting-drawer");
  var _useStyle = (0, _index.useStyle)(baseClassName),
    wrapSSR = _useStyle.wrapSSR,
    hashId = _useStyle.hashId;
  var drawerOpenProps = (0, _proUtils.openVisibleCompatible)(open);
  return wrapSSR( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "".concat(baseClassName, "-handle ").concat(hashId).trim(),
      onClick: function onClick() {
        return setOpen(!open);
      },
      style: {
        width: 48,
        height: 48
      },
      children: open ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CloseOutlined, {
        style: {
          color: '#fff',
          fontSize: 20
        }
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.SettingOutlined, {
        style: {
          color: '#fff',
          fontSize: 20
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, drawerOpenProps), {}, {
      width: 300,
      onClose: function onClose() {
        return setOpen(false);
      },
      closable: false,
      placement: "right",
      getContainer: getContainer,
      style: {
        zIndex: 999
      }
    }, drawerProps), {}, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "".concat(baseClassName, "-drawer-content ").concat(hashId).trim(),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
          title: formatMessage({
            id: 'app.setting.pagestyle',
            defaultMessage: 'Page style setting'
          }),
          hashId: hashId,
          prefixCls: baseClassName,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlockCheckbox.BlockCheckbox, {
            hashId: hashId,
            prefixCls: baseClassName,
            list: [{
              key: 'light',
              title: formatMessage({
                id: 'app.setting.pagestyle.light',
                defaultMessage: '亮色菜单风格'
              })
            }, {
              key: 'realDark',
              title: formatMessage({
                id: 'app.setting.pagestyle.realdark',
                defaultMessage: '暗色菜单风格'
              })
            }].filter(function (item) {
              if (item.key === 'dark' && settingState.layout === 'mix') return false;
              if (item.key === 'realDark' && !enableDarkTheme) return false;
              return true;
            }),
            value: navTheme,
            configType: "theme",
            onChange: function onChange(value) {
              return changeSetting('navTheme', value);
            }
          }, "navTheme")
        }), colorList !== false && /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
          hashId: hashId,
          title: formatMessage({
            id: 'app.setting.themecolor',
            defaultMessage: 'Theme color'
          }),
          prefixCls: baseClassName,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThemeColor.ThemeColor, {
            hashId: hashId,
            prefixCls: baseClassName,
            colorList: colorList,
            value: (0, _utils.genStringToTheme)(colorPrimary),
            formatMessage: formatMessage,
            onChange: function onChange(color) {
              return changeSetting('colorPrimary', color);
            }
          })
        }), !themeOnly && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
            hashId: hashId,
            prefixCls: baseClassName,
            title: formatMessage({
              id: 'app.setting.navigationmode'
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlockCheckbox.BlockCheckbox, {
              prefixCls: baseClassName,
              value: layout,
              hashId: hashId,
              configType: "layout",
              list: [{
                key: 'side',
                title: formatMessage({
                  id: 'app.setting.sidemenu'
                })
              }, {
                key: 'top',
                title: formatMessage({
                  id: 'app.setting.topmenu'
                })
              }, {
                key: 'mix',
                title: formatMessage({
                  id: 'app.setting.mixmenu'
                })
              }],
              onChange: function onChange(value) {
                return changeSetting('layout', value);
              }
            }, "layout")
          }), settingState.layout == 'side' || settingState.layout == 'mix' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
            hashId: hashId,
            prefixCls: baseClassName,
            title: formatMessage({
              id: 'app.setting.sidermenutype'
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlockCheckbox.BlockCheckbox, {
              prefixCls: baseClassName,
              value: siderMenuType,
              hashId: hashId,
              configType: "siderMenuType",
              list: [{
                key: 'sub',
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_sub.SubIcon, {}),
                title: formatMessage({
                  id: 'app.setting.sidermenutype-sub'
                })
              }, {
                key: 'group',
                icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_group.GroupIcon, {}),
                title: formatMessage({
                  id: 'app.setting.sidermenutype-group'
                })
              }],
              onChange: function onChange(value) {
                return changeSetting('siderMenuType', value);
              }
            }, "siderMenuType")
          }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_LayoutChange.LayoutSetting, {
            prefixCls: baseClassName,
            hashId: hashId,
            settings: settingState,
            changeSetting: changeSetting
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
            hashId: hashId,
            prefixCls: baseClassName,
            title: formatMessage({
              id: 'app.setting.regionalsettings'
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RegionalChange.RegionalSetting, {
              hashId: hashId,
              prefixCls: baseClassName,
              settings: settingState,
              changeSetting: changeSetting
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Divider, {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(Body, {
            hashId: hashId,
            prefixCls: baseClassName,
            title: formatMessage({
              id: 'app.setting.othersettings'
            }),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.List, {
              className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
              split: false,
              size: "small",
              renderItem: _LayoutChange.renderLayoutSettingItem,
              dataSource: [{
                title: formatMessage({
                  id: 'app.setting.weakmode'
                }),
                action: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Switch, {
                  size: "small",
                  className: "color-weak",
                  checked: !!colorWeak,
                  onChange: function onChange(checked) {
                    changeSetting('colorWeak', checked);
                  }
                })
              }]
            })
          }), hideHintAlert && hideCopyButton ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Divider, {}), hideHintAlert ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Alert, {
            type: "warning",
            message: formatMessage({
              id: 'app.setting.production.hint'
            }),
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.NotificationOutlined, {}),
            showIcon: true,
            style: {
              marginBlockEnd: 16
            }
          }), hideCopyButton ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
            block: true,
            icon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.CopyOutlined, {}),
            style: {
              marginBlockEnd: 24
            },
            onClick: /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
              return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return navigator.clipboard.writeText(genCopySettingJson(settingState));
                  case 3:
                    _antd.message.success(formatMessage({
                      id: 'app.setting.copyinfo'
                    }));
                    _context.next = 8;
                    break;
                  case 6:
                    _context.prev = 6;
                    _context.t0 = _context["catch"](0);
                  case 8:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 6]]);
            })),
            children: formatMessage({
              id: 'app.setting.copy'
            })
          })]
        })]
      })
    }))]
  }));
};