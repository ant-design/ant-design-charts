"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const genBubbleListStyle = token => {
  const {
    componentCls,
    padding
  } = token;
  return {
    [`${componentCls}-list`]: {
      display: 'flex',
      flexDirection: 'column',
      gap: padding,
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: 8,
        backgroundColor: 'transparent'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: token.colorTextTertiary,
        borderRadius: token.borderRadiusSM
      },
      // For Firefox
      '&': {
        scrollbarWidth: 'thin',
        scrollbarColor: `${token.colorTextTertiary} transparent`
      }
    }
  };
};
var _default = exports.default = genBubbleListStyle;