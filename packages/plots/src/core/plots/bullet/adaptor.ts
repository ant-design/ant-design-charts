import { coordinateLayout } from '../../components';
import { flow, transformOptions, map, get, isArray, includes, isNumber, deepAssign } from '../../utils';

import type { Adaptor } from '../../types';
import type { BulletOptions } from './type';

// 默认颜色
export const DEFAULT_COLORS = ['#f0efff', '#5B8FF9', '#3D76DD'];

type Params = Adaptor<BulletOptions>;

/**
 * 转化为扁平化数据
 * [{ measures: [1,2], title: 'x' }, ...] -> [{ measures: 1, title: 'x' }, { measures: 2, title: 'x' },...]
 * @param data 数据
 * @param field 通道
 * @param xField x 分类通道
 * @param isSort 是否排序（降序）
 * @returns [扁平化的数据, 最大数据量]
 */
function getTransformData(data: any[], field: string, xField: string, isSort = true) {
  let maxSize = 1;
  const transformData = map(data, (d) => {
    const fieldData = get(d, [field], []);
    if (isArray(fieldData)) {
      if (maxSize < fieldData.length) {
        maxSize = fieldData.length;
      }

      return map(isSort ? fieldData.sort((a, b) => b - a) : fieldData, (value: number, index: number) => ({
        [xField]: d[xField],
        [field]: value,
        index,
      }));
    }

    return { [xField]: d[xField], [field]: fieldData };
  }).flat();

  return [transformData, maxSize];
}
/**
 * 按照最大数据量转化为颜色数组
 * @param maxSize 最大数据量
 * @param color 颜色
 * @returns string[]
 */
function getFieldColor(maxSize: number, color: string | string[]) {
  return new Array(maxSize).fill('').map((d, i) => (isArray(color) ? color[i % color.length] : color));
}

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const {
      color,
      rangeField = 'ranges',
      measureField = 'measures',
      targetField = 'targets',
      xField = 'title',
      mapField,
      data,
    } = params.options;

    // 数据进行拍平
    const [rangesData, rangesMaxSize] = getTransformData(data, rangeField, xField);
    const [measuresData, measuresMaxSize] = getTransformData(data, measureField, xField, false);
    const [targetsData, targetsMaxSize] = getTransformData(data, targetField, xField, false);

    // 获取颜色
    const rangesColor = get(color, [rangeField], DEFAULT_COLORS[0]);
    const measuresColor = get(color, [measureField], DEFAULT_COLORS[1]);
    const targetsColor = get(color, [targetField], DEFAULT_COLORS[2]);

    // 获取 scale.color 颜色分类
    const colors = [
      getFieldColor(rangesMaxSize, rangesColor),
      getFieldColor(measuresMaxSize, measuresColor),
      getFieldColor(targetsMaxSize, targetsColor),
    ].flat();

    params.options.children = map(params.options.children, (c, i) => {
      const datas = [rangesData, measuresData, targetsData][i];
      const yField = [rangeField, measureField, targetField][i];

      return {
        ...c,
        data: datas,
        encode: {
          ...(c.encode || {}),
          x: xField,
          y: yField,
          color: (d) => {
            const { index } = d;
            const mapString = isNumber(index) ? `${yField}_${index}` : yField;
            return mapField ? get(mapField, [yField, index], mapString) : mapString;
          },
        },
        style: {
          ...(c.style || {}),
          // 层级
          zIndex: (d) => -d[yField],
        },
        // labels 对应的 yField
        labels: i !== 0 ? map(c.labels, (l) => ({ ...l, text: yField })) : undefined,
      };
    });

    params.options.scale.color.range = colors;
    // legend itemMarker 的形状
    params.options.legend.color.itemMarker = (d) => {
      if (mapField && includes(mapField?.[targetField], d)) {
        return 'line';
      }
      return d?.replace(/\_\d$/, '') === targetField ? 'line' : 'square';
    };

    return params;
  };

  /**
   * 水平｜竖直 方向target配置适配
   * @param params Params
   * @returns params Params
   */
  const layoutAdaptor = (params: Params) => {
    const { layout = 'horizontal' } = params.options;

    if (layout !== 'horizontal') {
      const target = params.options.children[2];
      target.shapeField = 'hyphen';
    }

    return params;
  };

  /**
   * range、measure、target 配置适配
   * @param params Params
   * @returns params Params
   */
  const cfgAdaptor = (params: Params) => {
    const { range = {}, measure = {}, target = {}, children } = params.options;
    params.options.children = [range, measure, target].map((c, i) => deepAssign(children[i], c));
    return params;
  };

  return flow(init, layoutAdaptor, cfgAdaptor, coordinateLayout, transformOptions)(params);
}
