import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Keyframes } from '@ant-design/cssinjs';
import { useStyle as useAntdStyle } from '@ant-design/pro-provider';
var proCheckCardActive = function proCheckCardActive(token) {
  return {
    backgroundColor: token.colorPrimaryBg,
    borderColor: token.colorPrimary
  };
};
var proCheckCardDisabled = function proCheckCardDisabled(token) {
  return _defineProperty({
    backgroundColor: token.colorBgContainerDisabled,
    borderColor: token.colorBorder,
    cursor: 'not-allowed'
  }, token.componentCls, {
    '&-description': {
      color: token.colorTextDisabled
    },
    '&-title': {
      color: token.colorTextDisabled
    },
    '&-avatar': {
      opacity: '0.25'
    }
  });
};
export var cardLoading = new Keyframes('card-loading', {
  '0%': {
    backgroundPosition: '0 50%'
  },
  '50%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
var genProStyle = function genProStyle(token) {
  var _token$componentCls;
  return _defineProperty({}, token.componentCls, (_token$componentCls = {
    position: 'relative',
    display: 'inline-block',
    width: '320px',
    marginInlineEnd: '16px',
    marginBlockEnd: '16px',
    color: token.colorText,
    fontSize: token.fontSize,
    lineHeight: token.lineHeight,
    verticalAlign: 'top',
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    overflow: 'auto',
    cursor: 'pointer',
    transition: "all 0.3s",
    '&:after': {
      position: 'absolute',
      insetBlockStart: 2,
      insetInlineEnd: 2,
      width: 0,
      height: 0,
      opacity: 0,
      transition: 'all 0.3s ' + token.motionEaseInOut,
      borderBlockEnd: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderInlineStart: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderStartEndRadius: "".concat(token.borderRadius, "px"),
      content: "''"
    },
    '&:last-child': {
      marginInlineEnd: 0
    },
    '& + &': {
      marginInlineStart: '0 !important'
    },
    '&-bordered': {
      border: "".concat(token.lineWidth, "px solid ").concat(token.colorBorder)
    },
    '&-group': {
      display: 'inline-block',
      '&-sub-check-card': {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        '&-title': {
          cursor: 'pointer',
          paddingBlock: token.paddingXS,
          display: 'flex',
          gap: 4,
          alignItems: 'center'
        },
        '&-panel': {
          visibility: 'initial',
          transition: 'all 0.3s',
          opacity: 1,
          '&-collapse': {
            display: 'none',
            visibility: 'hidden',
            opacity: 0
          }
        }
      }
    }
  }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_token$componentCls, "".concat(token.componentCls, "-loading"), {
    overflow: 'hidden',
    userSelect: 'none',
    '&-content': {
      padding: token.paddingMD
    }
  }), '&:focus', proCheckCardActive(token)), '&-checked', _objectSpread(_objectSpread({}, proCheckCardActive(token)), {}, {
    '&:after': {
      opacity: 1,
      border: "".concat(token.borderRadius + 4, "px solid ").concat(token.colorPrimary),
      borderBlockEnd: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderInlineStart: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderStartEndRadius: "".concat(token.borderRadius, "px")
    }
  })), '&-disabled', proCheckCardDisabled(token)), '&[disabled]', proCheckCardDisabled(token)), '&-checked&-disabled', {
    '&:after': {
      position: 'absolute',
      insetBlockStart: 2,
      insetInlineEnd: 2,
      width: 0,
      height: 0,
      border: "".concat(token.borderRadius + 4, "px solid ").concat(token.colorTextDisabled),
      borderBlockEnd: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderInlineStart: "".concat(token.borderRadius + 4, "px  solid transparent"),
      borderStartEndRadius: "".concat(token.borderRadius, "px"),
      content: "''"
    }
  }), '&-lg', {
    width: 440
  }), '&-sm', {
    width: 212
  }), '&-cover', {
    paddingInline: token.paddingXXS,
    paddingBlock: token.paddingXXS,
    img: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: token.borderRadius
    }
  }), '&-content', {
    display: 'flex',
    paddingInline: token.paddingSM,
    paddingBlock: token.padding
  }), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_token$componentCls, '&-body', {
    paddingInline: token.paddingSM,
    paddingBlock: token.padding
  }), '&-avatar-header', {
    display: 'flex',
    alignItems: 'center'
  }), '&-avatar', {
    paddingInlineEnd: 8
  }), '&-detail', {
    overflow: 'hidden',
    width: '100%',
    '> div:not(:last-child)': {
      marginBlockEnd: 4
    }
  }), '&-header', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: token.lineHeight,
    '&-left': {
      display: 'flex',
      alignItems: 'center',
      gap: token.sizeSM,
      minWidth: 0
    }
  }), '&-title', {
    overflow: 'hidden',
    color: token.colorTextHeading,
    fontWeight: '500',
    fontSize: token.fontSize,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&-with-ellipsis': {
      display: 'inline-block'
    }
  }), '&-description', {
    color: token.colorTextSecondary
  }), "&:not(".concat(token.componentCls, "-disabled)"), {
    '&:hover': {
      borderColor: token.colorPrimary
    }
  })));
};
export function useStyle(prefixCls) {
  return useAntdStyle('CheckCard', function (token) {
    var proListToken = _objectSpread(_objectSpread({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProStyle(proListToken)];
  });
}