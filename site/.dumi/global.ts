if (window) {
  (window as any).insertCss = require('insert-css');
  (window as any).antd = require('antd');
  (window as any).react = require('react');
  (window as any).reactDom = require('react-dom');
  (window as any).fecha = require('fecha');
  (window as any).lodashEs = require('lodash');
  /** 不要使用 link, react-dom 冲突 */
  (window as any).plots = require('@ant-design/plots');
  (window as any).graphs = require('@ant-design/graphs');
  (window as any).d3Interpolate = require('d3-interpolate');
  (window as any).d3Regression = require('d3-regression');
}
