"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genDrawerFormStyle = function genDrawerFormStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, {
    '&-sidebar-dragger': {
      width: '5px',
      cursor: 'ew-resize',
      padding: '4px 0 0',
      borderTop: '1px solid transparent',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 100,
      backgroundColor: 'transparent',
      '&-min-disabled': {
        cursor: 'w-resize'
      },
      '&-max-disabled': {
        cursor: 'e-resize'
      }
    }
  });
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('DrawerForm', function (token) {
    var drawerFormToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genDrawerFormStyle(drawerFormToken)];
  });
}