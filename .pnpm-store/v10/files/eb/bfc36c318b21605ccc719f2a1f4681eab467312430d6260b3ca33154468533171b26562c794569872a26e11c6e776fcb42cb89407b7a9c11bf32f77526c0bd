"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyle = useStyle;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _proProvider = require("@ant-design/pro-provider");
var genProListStyle = function genProListStyle(token) {
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    lineHeight: '1',
    '&-container': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBlock: token.padding,
      paddingInline: 0,
      '&-mobile': {
        flexDirection: 'column'
      }
    },
    '&-title': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: token.colorTextHeading,
      fontWeight: '500',
      fontSize: token.fontSizeLG
    },
    '&-search:not(:last-child)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    '&-setting-item': {
      marginBlock: 0,
      marginInline: 4,
      color: token.colorIconHover,
      fontSize: token.fontSizeLG,
      cursor: 'pointer',
      '> span': {
        display: 'block',
        width: '100%',
        height: '100%'
      },
      '&:hover': {
        color: token.colorPrimary
      }
    },
    '&-left': (0, _defineProperty2.default)((0, _defineProperty2.default)({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: token.marginXS,
      justifyContent: 'flex-start',
      maxWidth: 'calc(100% - 200px)'
    }, "".concat(token.antCls, "-tabs"), {
      width: '100%'
    }), '&-has-tabs', {
      overflow: 'hidden'
    }),
    '&-right': {
      flex: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      gap: token.marginXS
    },
    '&-extra-line': {
      marginBlockEnd: token.margin
    },
    '&-setting-items': {
      display: 'flex',
      gap: token.marginXS,
      lineHeight: '32px',
      alignItems: 'center'
    },
    '&-filter': (0, _defineProperty2.default)({
      '&:not(:last-child)': {
        marginInlineEnd: token.margin
      },
      display: 'flex',
      alignItems: 'center'
    }, "div$".concat(token.antCls, "-pro-table-search"), {
      marginBlock: 0,
      marginInline: 0,
      paddingBlock: 0,
      paddingInline: 0
    }),
    '&-inline-menu-item': {
      display: 'inline-block',
      marginInlineEnd: token.marginLG,
      cursor: 'pointer',
      opacity: '0.75',
      '&-active': {
        fontWeight: 'bold',
        opacity: '1'
      }
    }
  }, "".concat(token.antCls, "-tabs-top > ").concat(token.antCls, "-tabs-nav"), (0, _defineProperty2.default)({
    marginBlockEnd: 0,
    '&::before': {
      borderBlockEnd: 0
    }
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    marginBlockStart: 0,
    '${token.antCls}-tabs-tab': {
      paddingBlockStart: 0
    }
  })), '&-dropdownmenu-label', {
    fontWeight: 'bold',
    fontSize: token.fontSizeIcon,
    textAlign: 'center',
    cursor: 'pointer'
  }), '@media (max-width: 768px)', (0, _defineProperty2.default)({}, token.componentCls, {
    '&-container': {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
    '&-left': {
      marginBlockEnd: '16px',
      maxWidth: '100%'
    }
  })));
};
function useStyle(prefixCls) {
  return (0, _proProvider.useStyle)('ProTableListToolBar', function (token) {
    var proListToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProListStyle(proListToken)];
  });
}