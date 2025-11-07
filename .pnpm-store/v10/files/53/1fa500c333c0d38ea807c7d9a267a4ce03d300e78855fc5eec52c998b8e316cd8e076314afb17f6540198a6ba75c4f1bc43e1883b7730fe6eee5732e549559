"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var _antd = require("antd");
var getVersion = function getVersion() {
  var _process;
  if (typeof process === 'undefined') return _antd.version;
  return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || _antd.version;
};

/**
 * 主要区别：
 * 需要手动引入 import 'antd/dist/antd.css';
 * 需要重置 menu 的样式
 * @param token
 * @returns
 */
var compatibleStyle = function compatibleStyle(token) {
  var _getVersion, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19, _$concat6, _token$layout20, _token$layout21, _token$layout22, _token$layout23, _token$layout24, _token$layout25, _token$layout26, _token$layout27, _token$layout28, _token$layout29, _token$layout30;
  if ((_getVersion = getVersion()) !== null && _getVersion !== void 0 && _getVersion.startsWith('5')) {
    return {};
  }
  return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)({
    width: '100%',
    height: '100%'
  }, "".concat(token.proComponentsCls, "-base-menu"), (_$concat6 = {
    color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextMenu
  }, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)(_$concat6, "".concat(token.antCls, "-menu-sub"), {
    backgroundColor: 'transparent!important',
    color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextMenu
  }), "& ".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.antCls, "-menu-submenu-expand-icon, ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: 'inherit'
  }), "&".concat(token.antCls, "-menu"), (0, _defineProperty2.default)((0, _defineProperty2.default)({
    color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu
  }, "".concat(token.antCls, "-menu-item"), {
    '*': {
      transition: 'none !important'
    }
  }), "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-inline"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-selected::after,").concat(token.antCls, "-menu-item-selected::after"), {
    display: 'none'
  })), "".concat(token.antCls, "-menu-sub ").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  }), "&".concat(token.antCls, "-menu-light"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty2.default)({
    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuActive
  }))), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: (_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemSelected,
    borderRadius: token.borderRadius
  }), "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty2.default)({
    color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive,
    borderRadius: token.borderRadius,
    backgroundColor: "".concat((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemHover, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive
  }))), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSelected
  }), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)(_$concat6, "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-inline) ").concat(token.antCls, "-menu-submenu-open"), {
    color: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.sider) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorTextMenuSelected
  }), "&".concat(token.antCls, "-menu-vertical"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-submenu-selected"), {
    borderRadius: token.borderRadius,
    color: (_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.sider) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorTextMenuSelected
  })), "".concat(token.antCls, "-menu-submenu:hover > ").concat(token.antCls, "-menu-submenu-title > ").concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.sider) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorTextMenuActive
  }), "&".concat(token.antCls, "-menu-horizontal"), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item:hover,\n          ").concat(token.antCls, "-menu-submenu:hover,\n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-active"), {
    borderRadius: 4,
    transition: 'none',
    color: (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorTextMenuActive,
    backgroundColor: "".concat((_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorBgMenuItemHover, " !important")
  }), "".concat(token.antCls, "-menu-item-open,\n          ").concat(token.antCls, "-menu-submenu-open,\n          ").concat(token.antCls, "-menu-item-selected,\n          ").concat(token.antCls, "-menu-submenu-selected"), (0, _defineProperty2.default)({
    backgroundColor: (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorBgMenuItemSelected,
    borderRadius: token.borderRadius,
    transition: 'none',
    color: "".concat((_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, " !important")
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: "".concat((_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorTextMenuSelected, " !important")
  })), "> ".concat(token.antCls, "-menu-item, > ").concat(token.antCls, "-menu-submenu"), {
    paddingInline: 16,
    marginInline: 4
  }), "> ".concat(token.antCls, "-menu-item::after, > ").concat(token.antCls, "-menu-submenu::after"), {
    display: 'none'
  })))), "".concat(token.proComponentsCls, "-top-nav-header-base-menu"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "&".concat(token.antCls, "-menu"), (0, _defineProperty2.default)({
    color: (_token$layout20 = token.layout) === null || _token$layout20 === void 0 || (_token$layout20 = _token$layout20.header) === null || _token$layout20 === void 0 ? void 0 : _token$layout20.colorTextMenu
  }, "".concat(token.antCls, "-menu-item a"), {
    color: 'inherit'
  })), "&".concat(token.antCls, "-menu-light"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty2.default)({
    color: (_token$layout21 = token.layout) === null || _token$layout21 === void 0 || (_token$layout21 = _token$layout21.header) === null || _token$layout21 === void 0 ? void 0 : _token$layout21.colorTextMenuActive,
    borderRadius: token.borderRadius,
    transition: 'none',
    backgroundColor: (_token$layout22 = token.layout) === null || _token$layout22 === void 0 || (_token$layout22 = _token$layout22.header) === null || _token$layout22 === void 0 ? void 0 : _token$layout22.colorBgMenuItemSelected
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout23 = token.layout) === null || _token$layout23 === void 0 || (_token$layout23 = _token$layout23.header) === null || _token$layout23 === void 0 ? void 0 : _token$layout23.colorTextMenuActive
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout24 = token.layout) === null || _token$layout24 === void 0 || (_token$layout24 = _token$layout24.header) === null || _token$layout24 === void 0 ? void 0 : _token$layout24.colorTextMenuSelected,
    borderRadius: token.borderRadius,
    backgroundColor: (_token$layout25 = token.layout) === null || _token$layout25 === void 0 || (_token$layout25 = _token$layout25.header) === null || _token$layout25 === void 0 ? void 0 : _token$layout25.colorBgMenuItemSelected
  })))), "".concat(token.antCls, "-menu-sub").concat(token.antCls, "-menu-inline"), {
    backgroundColor: 'transparent!important'
  }), "".concat(token.antCls, "-menu-submenu-popup"), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }, "".concat(token.antCls, "-menu"), (0, _defineProperty2.default)({
    background: 'transparent !important',
    backgroundColor: 'transparent !important'
  }, "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
    backgroundColor: 'transparent!important'
  })), "".concat(token.antCls, "-menu-item-selected"), {
    color: (_token$layout26 = token.layout) === null || _token$layout26 === void 0 || (_token$layout26 = _token$layout26.sider) === null || _token$layout26 === void 0 ? void 0 : _token$layout26.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-submenu-selected"), {
    color: (_token$layout27 = token.layout) === null || _token$layout27 === void 0 || (_token$layout27 = _token$layout27.sider) === null || _token$layout27 === void 0 ? void 0 : _token$layout27.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item-selected"), {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    borderRadius: token.borderRadius,
    color: (_token$layout28 = token.layout) === null || _token$layout28 === void 0 || (_token$layout28 = _token$layout28.sider) === null || _token$layout28 === void 0 ? void 0 : _token$layout28.colorTextMenuSelected
  }), "".concat(token.antCls, "-menu-item:hover, \n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty2.default)({
    color: (_token$layout29 = token.layout) === null || _token$layout29 === void 0 || (_token$layout29 = _token$layout29.sider) === null || _token$layout29 === void 0 ? void 0 : _token$layout29.colorTextMenuActive,
    borderRadius: token.borderRadius
  }, "".concat(token.antCls, "-menu-submenu-arrow"), {
    color: (_token$layout30 = token.layout) === null || _token$layout30 === void 0 || (_token$layout30 = _token$layout30.sider) === null || _token$layout30 === void 0 ? void 0 : _token$layout30.colorTextMenuActive
  }))));
};
var genProLayoutStyle = function genProLayoutStyle(token) {
  var _token$layout31, _token$layout32, _token$layout33, _token$layout34;
  return (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-layout"), {
    backgroundColor: 'transparent !important'
  }), token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "& ".concat(token.antCls, "-layout"), {
    display: 'flex',
    backgroundColor: 'transparent',
    width: '100%'
  }), "".concat(token.componentCls, "-content"), {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: ((_token$layout31 = token.layout) === null || _token$layout31 === void 0 || (_token$layout31 = _token$layout31.pageContainer) === null || _token$layout31 === void 0 ? void 0 : _token$layout31.colorBgPageContainer) || 'transparent',
    position: 'relative',
    paddingBlock: (_token$layout32 = token.layout) === null || _token$layout32 === void 0 || (_token$layout32 = _token$layout32.pageContainer) === null || _token$layout32 === void 0 ? void 0 : _token$layout32.paddingBlockPageContainerContent,
    paddingInline: (_token$layout33 = token.layout) === null || _token$layout33 === void 0 || (_token$layout33 = _token$layout33.pageContainer) === null || _token$layout33 === void 0 ? void 0 : _token$layout33.paddingInlinePageContainerContent,
    '&-has-page-container': {
      padding: 0
    }
  }), "".concat(token.componentCls, "-container"), {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    minHeight: 0,
    backgroundColor: 'transparent'
  }), "".concat(token.componentCls, "-bg-list"), {
    pointerEvents: 'none',
    position: 'fixed',
    overflow: 'hidden',
    insetBlockStart: 0,
    insetInlineStart: 0,
    zIndex: 0,
    height: '100%',
    width: '100%',
    background: (_token$layout34 = token.layout) === null || _token$layout34 === void 0 ? void 0 : _token$layout34.bgLayout
  }));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProLayout', function (token) {
    var proLayoutToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutStyle(proLayoutToken), compatibleStyle(proLayoutToken)];
  });
}