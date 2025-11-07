"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proProvider = require("@ant-design/pro-provider");
var genProLayoutBaseMenuStyle = function genProLayoutBaseMenuStyle(token, mode) {
  var _token$layout, _token$layout2;
  var menuToken = mode.includes('horizontal') ? (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.header : (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.sider;
  return (0, _objectSpread4.default)((0, _objectSpread4.default)((0, _defineProperty2.default)({}, "".concat(token.componentCls), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    background: 'transparent',
    color: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorTextMenu,
    border: 'none'
  }, "".concat(token.componentCls, "-menu-item"), {
    transition: 'none !important'
  }), "".concat(token.componentCls, "-submenu-has-icon"), (0, _defineProperty2.default)({}, "> ".concat(token.antCls, "-menu-sub"), {
    paddingInlineStart: 10
  })), "".concat(token.antCls, "-menu-title-content"), {
    width: '100%',
    height: '100%',
    display: 'inline-flex'
  }), "".concat(token.antCls, "-menu-title-content"), {
    '&:first-child': {
      width: '100%'
    }
  }), "".concat(token.componentCls, "-item-icon"), {
    display: 'flex',
    alignItems: 'center'
  }), "&&-collapsed", (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title"), {
    paddingInline: '0 !important',
    marginBlock: '4px !important'
  }), "".concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title"), {
    backgroundColor: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorBgMenuItemSelected,
    borderRadius: token.borderRadiusLG
  }), "".concat(token.componentCls, "-group"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    paddingInline: 0
  }))), '&-item-title', (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: token.marginXS
  }, "".concat(token.componentCls, "-item-text"), {
    maxWidth: '100%',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap'
  }), '&-collapsed', (0, _defineProperty2.default)((0, _defineProperty2.default)({
    minWidth: 40,
    height: 40
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px !important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text-has-icon"), {
    display: 'none !important'
  })), '&-collapsed-level-0', {
    flexDirection: 'column',
    justifyContent: 'center'
  }), "&".concat(token.componentCls, "-group-item-title"), {
    gap: token.marginXS,
    height: 18,
    overflow: 'hidden'
  }), "&".concat(token.componentCls, "-item-collapsed-show-title"), (0, _defineProperty2.default)({
    lineHeight: '16px',
    gap: 0
  }, "&".concat(token.componentCls, "-item-title-collapsed"), (0, _defineProperty2.default)((0, _defineProperty2.default)({
    display: 'flex'
  }, "".concat(token.componentCls, "-item-icon"), {
    height: '16px',
    width: '16px',
    lineHeight: '16px !important',
    '.anticon': {
      lineHeight: '16px!important',
      height: '16px'
    }
  }), "".concat(token.componentCls, "-item-text"), {
    opacity: '1 !important',
    display: 'inline !important',
    textAlign: 'center',
    fontSize: 12,
    height: 12,
    lineHeight: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    margin: 0,
    padding: 0,
    marginBlockStart: 4
  })))), '&-group', (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-item-group-title"), {
    fontSize: 12,
    color: token.colorTextLabel,
    '.anticon': {
      marginInlineEnd: 8
    }
  })), '&-group-divider', {
    color: token.colorTextSecondary,
    fontSize: 12,
    lineHeight: 20
  })), mode.includes('horizontal') ? {} : (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-submenu").concat(token.antCls, "-menu-submenu-popup"), (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-item-title"), {
    alignItems: 'flex-start'
  }))), {}, (0, _defineProperty2.default)({}, "".concat(token.antCls, "-menu-submenu-popup"), {
    backgroundColor: 'rgba(255, 255, 255, 0.42)',
    '-webkit-backdrop-filter': 'blur(8px)',
    backdropFilter: 'blur(8px)'
  }));
};
function useStyle(prefixCls, mode) {
  return (0, _proProvider.useStyle)('ProLayoutBaseMenu' + mode, function (token) {
    var proLayoutMenuToken = (0, _objectSpread4.default)((0, _objectSpread4.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProLayoutBaseMenuStyle(proLayoutMenuToken, mode || 'inline')];
  });
}