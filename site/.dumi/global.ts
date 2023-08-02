if (window) {
  (window as any).insertCss = require('insert-css');
  (window as any).antd = require('antd');
  (window as any).react = require('react');
  (window as any).reactDom = require('react-dom');
  /** 不要使用 link, react-dom 冲突 */
  (window as any).plots = require('@ant-design/plots');
}
