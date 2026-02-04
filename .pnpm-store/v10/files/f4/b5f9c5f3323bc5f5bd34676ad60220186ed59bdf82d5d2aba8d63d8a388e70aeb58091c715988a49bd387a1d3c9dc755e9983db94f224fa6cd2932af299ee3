import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import { operationUnit, resetComponent, useStyle as useAntdStyle } from '@ant-design/pro-utils';
var textOverflowEllipsis = function textOverflowEllipsis() {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };
};
var genPageHeaderStyle = function genPageHeaderStyle(token) {
  var _token$layout;
  return _defineProperty({}, token.componentCls, _objectSpread(_objectSpread({}, resetComponent === null || resetComponent === void 0 ? void 0 : resetComponent(token)), {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    position: 'relative',
    backgroundColor: token.colorWhite,
    paddingBlock: token.pageHeaderPaddingVertical + 2,
    paddingInline: token.pageHeaderPadding,
    '&&-ghost': {
      backgroundColor: token.pageHeaderBgGhost
    },
    '&-no-children': {
      height: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.pageContainer) === null || _token$layout === void 0 ? void 0 : _token$layout.paddingBlockPageContainerContent
    },
    '&&-has-breadcrumb': {
      paddingBlockStart: token.pageHeaderPaddingBreadCrumb
    },
    '&&-has-footer': {
      paddingBlockEnd: 0
    },
    '& &-back': _defineProperty({
      marginInlineEnd: token.margin,
      fontSize: 16,
      lineHeight: 1,
      '&-button': _objectSpread(_objectSpread({
        fontSize: 16
      }, operationUnit === null || operationUnit === void 0 ? void 0 : operationUnit(token)), {}, {
        color: token.pageHeaderColorBack,
        cursor: 'pointer'
      })
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: 0
    })
  }, "& ".concat('ant', "-divider-vertical"), {
    height: 14,
    marginBlock: 0,
    marginInline: token.marginSM,
    verticalAlign: 'middle'
  }), "& &-breadcrumb + &-heading", {
    marginBlockStart: token.marginXS
  }), '& &-heading', {
    display: 'flex',
    justifyContent: 'space-between',
    '&-left': {
      display: 'flex',
      alignItems: 'center',
      marginBlock: token.marginXS / 2,
      marginInlineEnd: 0,
      marginInlineStart: 0,
      overflow: 'hidden'
    },
    '&-title': _objectSpread(_objectSpread({
      marginInlineEnd: token.marginSM,
      marginBlockEnd: 0,
      color: token.colorTextHeading,
      fontWeight: 600,
      fontSize: token.pageHeaderFontSizeHeaderTitle,
      lineHeight: token.controlHeight + 'px'
    }, textOverflowEllipsis()), {}, _defineProperty({}, "".concat(token.componentCls, "-rlt &"), {
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    })),
    '&-avatar': _defineProperty({
      marginInlineEnd: token.marginSM
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    }),
    '&-tags': _defineProperty({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right'
    }),
    '&-sub-title': _objectSpread(_objectSpread({
      marginInlineEnd: token.marginSM,
      color: token.colorTextSecondary,
      fontSize: token.pageHeaderFontSizeHeaderSubTitle,
      lineHeight: token.lineHeight
    }, textOverflowEllipsis()), {}, _defineProperty({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: 12
    })),
    '&-extra': _defineProperty(_defineProperty({
      marginBlock: token.marginXS / 2,
      marginInlineEnd: 0,
      marginInlineStart: 0,
      whiteSpace: 'nowrap',
      '> *': _defineProperty({
        'white-space': 'unset'
      }, "".concat(token.componentCls, "-rlt &"), {
        marginInlineEnd: token.marginSM,
        marginInlineStart: 0
      })
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'left'
    }), '*:first-child', _defineProperty({}, "".concat(token.componentCls, "-rlt &"), {
      marginInlineEnd: 0
    }))
  }), '&-content', {
    paddingBlockStart: token.pageHeaderPaddingContentPadding
  }), '&-footer', {
    marginBlockStart: token.margin
  }), '&-compact &-heading', {
    flexWrap: 'wrap'
  }), '&-wide', {
    maxWidth: 1152,
    margin: '0 auto'
  }), '&-rtl', {
    direction: 'rtl'
  })));
};
export default function useStyle(prefixCls) {
  return useAntdStyle('ProLayoutPageHeader', function (token) {
    var proCardToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls),
      pageHeaderBgGhost: 'transparent',
      pageHeaderPadding: 16,
      pageHeaderPaddingVertical: 4,
      pageHeaderPaddingBreadCrumb: token.paddingSM,
      pageHeaderColorBack: token.colorTextHeading,
      pageHeaderFontSizeHeaderTitle: token.fontSizeHeading4,
      pageHeaderFontSizeHeaderSubTitle: 14,
      pageHeaderPaddingContentPadding: token.paddingSM
    });
    return [genPageHeaderStyle(proCardToken)];
  });
}