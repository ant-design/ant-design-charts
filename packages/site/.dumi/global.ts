if (window) {
  (window as any).insertCss = require('insert-css');
  (window as any).dataSet = require('@antv/data-set');
  (window as any).antd = require('antd');
  (window as any).util = require('@antv/util');
  (window as any).react = require('react');
  (window as any).reactDom = require('react-dom');
  /** 不要使用 link, react-dom 冲突 */
  (window as any).plots = require('@ant-design/plots');
  (window as any).flowchart = require('@ant-design/flowchart');
  (window as any).maps = require('@ant-design/maps');
  (window as any).graphs = require('@ant-design/graphs');
}
