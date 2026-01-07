"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useStyle;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _proUtils = require("@ant-design/pro-utils");
var genActiveStyle = function genActiveStyle(token) {
  return {
    backgroundColor: token.controlItemBgActive,
    borderColor: token.controlOutline
  };
};
var genProCardStyle = function genProCardStyle(token) {
  var componentCls = token.componentCls;
  return (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, componentCls, (0, _objectSpread3.default)((0, _objectSpread3.default)({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    width: '100%',
    marginBlock: 0,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 0,
    backgroundColor: token.colorBgContainer,
    borderRadius: token.borderRadius,
    transition: 'all 0.3s'
  }, _proUtils.resetComponent === null || _proUtils.resetComponent === void 0 ? void 0 : (0, _proUtils.resetComponent)(token)), {}, (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({
    '&-box-shadow': {
      boxShadow: '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017',
      borderColor: 'transparent'
    },
    '&-col': {
      width: '100%'
    },
    '&-border': {
      border: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    },
    '&-hoverable': (0, _defineProperty2.default)({
      cursor: 'pointer',
      transition: 'box-shadow 0.3s, border-color 0.3s',
      '&:hover': {
        borderColor: 'transparent',
        boxShadow: '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017'
      }
    }, "&".concat(componentCls, "-checked:hover"), {
      borderColor: token.controlOutline
    }),
    '&-checked': (0, _objectSpread3.default)((0, _objectSpread3.default)({}, genActiveStyle(token)), {}, {
      '&::after': {
        visibility: 'visible',
        position: 'absolute',
        insetBlockStart: 2,
        insetInlineEnd: 2,
        opacity: 1,
        width: 0,
        height: 0,
        border: "6px solid ".concat(token.colorPrimary),
        borderBlockEnd: '6px solid transparent',
        borderInlineStart: '6px solid transparent',
        borderStartEndRadius: 2,
        content: '""'
      }
    }),
    '&:focus': (0, _objectSpread3.default)({}, genActiveStyle(token)),
    '&&-ghost': (0, _defineProperty2.default)({
      backgroundColor: 'transparent'
    }, "> ".concat(componentCls), {
      '&-header': {
        paddingInlineEnd: 0,
        paddingBlockEnd: token.padding,
        paddingInlineStart: 0
      },
      '&-body': {
        paddingBlock: 0,
        paddingInline: 0,
        backgroundColor: 'transparent'
      }
    }),
    '&&-split > &-body': {
      paddingBlock: 0,
      paddingInline: 0
    },
    '&&-contain-card > &-body': {
      display: 'flex'
    }
  }, "".concat(componentCls, "-body-direction-column"), {
    flexDirection: 'column'
  }), "".concat(componentCls, "-body-wrap"), {
    flexWrap: 'wrap'
  }), '&&-collapse', (0, _defineProperty2.default)({}, "> ".concat(componentCls), {
    '&-header': {
      paddingBlockEnd: token.padding,
      borderBlockEnd: 0
    },
    '&-body': {
      display: 'none'
    }
  })), "".concat(componentCls, "-header"), {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: token.paddingLG,
    paddingBlock: token.padding,
    paddingBlockEnd: 0,
    '&-border': {
      '&': {
        paddingBlockEnd: token.padding
      },
      borderBlockEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
    },
    '&-collapsible': {
      cursor: 'pointer'
    }
  }), "".concat(componentCls, "-title"), {
    color: token.colorText,
    fontWeight: 500,
    fontSize: token.fontSizeLG,
    lineHeight: token.lineHeight
  }), "".concat(componentCls, "-extra"), {
    color: token.colorText
  }), "".concat(componentCls, "-type-inner"), (0, _defineProperty2.default)({}, "".concat(componentCls, "-header"), {
    backgroundColor: token.colorFillAlter
  })), "".concat(componentCls, "-collapsible-icon"), {
    marginInlineEnd: token.marginXS,
    color: token.colorIconHover,
    ':hover': {
      color: token.colorPrimaryHover
    },
    '& svg': {
      transition: "transform ".concat(token.motionDurationMid)
    }
  }), "".concat(componentCls, "-body"), {
    display: 'block',
    boxSizing: 'border-box',
    height: '100%',
    paddingInline: token.paddingLG,
    paddingBlock: token.padding,
    '&-center': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }), '&&-size-small', (0, _defineProperty2.default)((0, _defineProperty2.default)({}, componentCls, {
    '&-header': {
      paddingInline: token.paddingSM,
      paddingBlock: token.paddingXS,
      paddingBlockEnd: 0,
      '&-border': {
        paddingBlockEnd: token.paddingXS
      }
    },
    '&-title': {
      fontSize: token.fontSize
    },
    '&-body': {
      paddingInline: token.paddingSM,
      paddingBlock: token.paddingSM
    }
  }), "".concat(componentCls, "-header").concat(componentCls, "-header-collapsible"), {
    paddingBlock: token.paddingXS
  })))), "".concat(componentCls, "-col"), (0, _defineProperty2.default)((0, _defineProperty2.default)({}, "&".concat(componentCls, "-split-vertical"), {
    borderInlineEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
  }), "&".concat(componentCls, "-split-horizontal"), {
    borderBlockEnd: "".concat(token.lineWidth, "px ").concat(token.lineType, " ").concat(token.colorSplit)
  })), "".concat(componentCls, "-tabs"), (0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)((0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-top > ").concat(token.antCls, "-tabs-nav"), (0, _defineProperty2.default)({
    marginBlockEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    marginBlockStart: token.marginXS,
    paddingInlineStart: token.padding
  })), "".concat(token.antCls, "-tabs-bottom > ").concat(token.antCls, "-tabs-nav"), (0, _defineProperty2.default)({
    marginBlockEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingInlineStart: token.padding
  })), "".concat(token.antCls, "-tabs-left"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-content-holder"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-content"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), "".concat(token.antCls, "-tabs-left > ").concat(token.antCls, "-tabs-nav"), (0, _defineProperty2.default)({
    marginInlineEnd: 0
  }, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token.padding
  })), "".concat(token.antCls, "-tabs-right"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-content-holder"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-content"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-tabpane"), {
    paddingInlineStart: 0
  })))), "".concat(token.antCls, "-tabs-right > ").concat(token.antCls, "-tabs-nav"), (0, _defineProperty2.default)({}, "".concat(token.antCls, "-tabs-nav-list"), {
    paddingBlockStart: token.padding
  })));
};
var GRID_COLUMNS = 24;
var genColStyle = function genColStyle(index, token) {
  var componentCls = token.componentCls;
  if (index === 0) {
    return (0, _defineProperty2.default)({}, "".concat(componentCls, "-col-0"), {
      display: 'none'
    });
  }
  return (0, _defineProperty2.default)({}, "".concat(componentCls, "-col-").concat(index), {
    flexShrink: 0,
    width: "".concat(index / GRID_COLUMNS * 100, "%")
  });
};
var genGridStyle = function genGridStyle(token) {
  return Array(GRID_COLUMNS + 1).fill(1).map(function (_, index) {
    return genColStyle(index, token);
  });
};
function useStyle(prefixCls) {
  return (0, _proUtils.useStyle)('ProCard', function (token) {
    var proCardToken = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, token), {}, {
      componentCls: ".".concat(prefixCls)
    });
    return [genProCardStyle(proCardToken), genGridStyle(proCardToken)];
  });
}