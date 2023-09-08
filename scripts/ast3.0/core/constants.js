const { uniqBy, concat, filter, get } = require('lodash-es');

/**
 * 函数标识
 * 用于标识函数做最后的解析
 * @type {string}
 */
const SIGN = '-FN-';

/**
 * 图表类型
 * @enum {string[]}
 */
const SHAPES = [
  'interval',
  'line',
  'point',
  'area',
  'polygon',
  'edge',
  'schema',
  'heatmap',
  'path',
  'pointStack',
  'link',
  'treemap',
  'facetRect',
  'lineX',
  'lineY',
  'geoPath',
  'text',
  'connector',
];
/**
 * 处理流程
 * @enum {string[]}
 */
const PIPELINE = [
  { key: 'data' },
  { key: 'encode' },
  { key: 'axis' },
  { key: 'legend' },
  { key: 'interaction' },
  { key: 'style' },
  { key: 'call' },
  { key: 'attr' },
  { key: 'scale' },
  { key: 'animate' },
  { key: 'coordinate' },
  { key: 'layout' },
  {
    key: 'tooltip',
    callback: (origin, value) => {
      if (!value) {
        origin['tooltip'] = value;
      } else {
        origin['tooltip'] = {
          items: filter(concat(get(origin, ['tooltip', 'items']), value), Boolean),
        };
      }
    },
  },
  {
    key: 'label',
    callback: (origin, value) => {
      origin['labels'] = filter(concat(origin['labels'], value), Boolean);
    },
  },
  {
    key: 'transform',
    callback: (origin, value) => {
      origin['transform'] = uniqBy(filter(concat(origin['transform'], value), Boolean), 'type');
    },
  },
];

module.exports = {
  SIGN,
  SHAPES,
  PIPELINE,
};
