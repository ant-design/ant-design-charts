import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var genProListStyle = function genProListStyle(token) {
  return _defineProperty({}, token.componentCls, _defineProperty(_defineProperty(_defineProperty({
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
    '&-left': _defineProperty(_defineProperty({
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
    '&-filter': _defineProperty({
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
  }, "".concat(token.antCls, "-tabs-top > ").concat(token.antCls, "-tabs-nav"), _defineProperty({
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
  }), '@media (max-width: 768px)', _defineProperty({}, token.componentCls, {
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
export function useStyle(prefixCls) {
  return useAntdStyle('ProTableListToolBar', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProListStyle(proListToken)];
  });
}