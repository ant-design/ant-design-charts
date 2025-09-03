if (typeof window !== 'undefined' && window) {
  (window as any).insertCss = require('insert-css');
  (window as any).antd = require('antd');
  (window as any).react = require('react');
  (window as any).reactDom = require('react-dom/client');
  (window as any).fecha = require('fecha');
  (window as any).lodash = require('lodash');
  /** 不要使用 link, react-dom 冲突 */
  (window as any).plots = require('@ant-design/plots');
  (window as any).graphs = require('@ant-design/graphs');
  (window as any).d3Interpolate = require('d3-interpolate');
  (window as any).d3Regression = require('d3-regression');
  (window as any).g = require('@antv/g');
  (window as any).gPluginRoughCanvasRenderer = require('@antv/g-plugin-rough-canvas-renderer');
}
