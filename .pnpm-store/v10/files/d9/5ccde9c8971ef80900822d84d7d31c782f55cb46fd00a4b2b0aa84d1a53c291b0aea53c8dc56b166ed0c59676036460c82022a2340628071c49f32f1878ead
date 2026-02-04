"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var textOverflowEllipsis = function textOverflowEllipsis() {
  return {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };
};
var genPageHeaderStyle = function genPageHeaderStyle(token) {
  var _token$layout;
  return (0, _defineProperty2.default)({}, token.componentCls, (0, _objectSpread5.default)((0, _objectSpread5.default)({}, _proUtils.resetComponent === null || _proUtils.resetComponent === void 0 ? void 0 : (0, _proUtils.resetComponent)(token)), {}, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
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
    '& &-back': (0, _defineProperty2.default)({
      marginInlineEnd: token.margin,
      fontSize: 16,
      lineHeight: 1,
      '&-button': (0, _objectSpread5.default)((0, _objectSpread5.default)({
        fontSize: 16
      }, _proUtils.operationUnit === null || _proUtils.operationUnit === void 0 ? void 0 : (0, _proUtils.operationUnit)(token)), {}, {
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
    '&-title': (0, _objectSpread5.default)((0, _objectSpread5.default)({
      marginInlineEnd: token.marginSM,
      marginBlockEnd: 0,
      color: token.colorTextHeading,
      fontWeight: 600,
      fontSize: token.pageHeaderFontSizeHeaderTitle,
      lineHeight: token.controlHeight + 'px'
    }, textOverflowEllipsis()), {}, (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-rlt &"), {
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    })),
    '&-avatar': (0, _defineProperty2.default)({
      marginInlineEnd: token.marginSM
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: token.marginSM
    }),
    '&-tags': (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right'
    }),
    '&-sub-title': (0, _objectSpread5.default)((0, _objectSpread5.default)({
      marginInlineEnd: token.marginSM,
      color: token.colorTextSecondary,
      fontSize: token.pageHeaderFontSizeHeaderSubTitle,
      lineHeight: token.lineHeight
    }, textOverflowEllipsis()), {}, (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-rlt &"), {
      float: 'right',
      marginInlineEnd: 0,
      marginInlineStart: 12
    })),
    '&-extra': (0, _defineProperty2.default)((0, _defineProperty2.default)({
      marginBlock: token.marginXS / 2,
      marginInlineEnd: 0,
      marginInlineStart: 0,
      whiteSpace: 'nowrap',
      '> *': (0, _defineProperty2.default)({
        'white-space': 'unset'
      }, "".concat(token.componentCls, "-rlt &"), {
        marginInlineEnd: token.marginSM,
        marginInlineStart: 0
      })
    }, "".concat(token.componentCls, "-rlt &"), {
      float: 'left'
    }), '*:first-child', (0, _defineProperty2.default)({}, "".concat(token.componentCls, "-rlt &"), {
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
function useStyle(prefixCls) {
  return (0, _proUtils.useStyle)('ProLayoutPageHeader', function (token) {
    var proCardToken = (0, _objectSpread5.default)((0, _objectSpread5.default)({}, token), {}, {
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