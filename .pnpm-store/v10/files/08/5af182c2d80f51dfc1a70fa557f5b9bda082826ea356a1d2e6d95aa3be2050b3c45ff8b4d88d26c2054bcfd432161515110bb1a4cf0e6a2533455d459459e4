"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefaultStyles = exports.defaultNodeStyle = void 0;
const defaultNodeStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)',
  backgroundImage: 'none',
  borderWidth: '0px',
  boxShadow: 'none',
  overflow: 'visible'
  // verticalAlign: 'baseline',
};

/**
 * 是否是默认样式
 */
exports.defaultNodeStyle = defaultNodeStyle;
const isDefaultStyles = styles => Object.keys(defaultNodeStyle).every(key => {
  // @ts-ignore
  const defaultValue = defaultNodeStyle[key];
  // @ts-ignore
  const value = styles[key];
  return defaultValue === value;
});
exports.isDefaultStyles = isDefaultStyles;