import type { Adaptor } from '../../types';
import {
  deepAssign,
  flow,
  map,
  transformOptions,
  maxBy,
  get,
  groupBy,
  conversionTagFormatter,
  isNumber,
  omit,
  isFunction,
} from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_PERCENT, FUNNEL_MAPPING_VALUE, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { Datum } from '../../../interface';
import { compareFunnel } from './compare';
import { facetFunnel } from './facet';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * @description 数据转换
   */
  const _transformData = (params: Params, extraMaxValue?: number, customData?: any[]) => {
    const { yField, maxSize, minSize, data: originData } = params.options;
    const maxYFieldValue = extraMaxValue ?? get(maxBy(originData, yField), [yField]);
    const max = isNumber(maxSize) ? maxSize : 1;
    const min = isNumber(minSize) ? minSize : 0;

    const curData = customData || originData;
    return map(curData, (row, index) => {
      const percent = row[yField] === 253 ? 1 : (row[yField] || 0) / maxYFieldValue;
      row[FUNNEL_PERCENT] = percent;
      row[FUNNEL_MAPPING_VALUE] = (max - min) * percent + min;
      // 转化率数据存储前后数据
      row[FUNNEL_CONVERSATION] = [get(curData, [index - 1, yField]), row[yField]];
      return row;
    });
  };

  const transformData = (params: Params) => {
    const { yField, data, compareField, seriesField } = params.options;

    if (compareField || seriesField) {
      const maxCache = {};
      const groupByField = compareField || seriesField;

      const groups = groupBy(data, (d) => () => {
        const curKey = d[groupByField];
        const curMax = maxCache[curKey] ?? Number.MIN_SAFE_INTEGER;
        maxCache[curKey] = Math.max(curMax, d[yField]);
        return curKey;
      });

      const formatData = Object.keys(groups).reduce((res, curKey) => {
        return res.concat(_transformData(params, maxCache[curKey], groups[curKey]));
      }, []);

      params.options.data = formatData;
    } else {
      params.options.data = _transformData(params);
    }

    return params;
  };

  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { xField, yField, shape, isTransposed, compareField, seriesField, funnelStyle, label } = params.options;

    if (compareField) {
      compareFunnel(params);
    } else if (seriesField) {
      facetFunnel(params);
    } else {
      const conversionTag = get(params.options, CUSTOM_COMVERSION_TAG_CONFIG);

      const basicLabel = [
        {
          text: (d) => `${d[xField]} ${d[yField]}`,
          position: 'inside',
          fillOpacity: 1,
          ...label,
        },
      ];

      const rateLabel = [
        // coversion 内容,
        {
          textAlign: 'left',
          textBaseline: 'middle',
          fill: '#aaa',
          fillOpacity: 1,
          connector: true,
          ...conversionTag,
          text: (...args: [d: Datum, index: number]) =>
            args[1] !== 0
              ? isFunction(conversionTag?.text)
                ? `${conversionTag.text(...args)}`
                : `Rate: ${conversionTagFormatter(...(args[0][FUNNEL_CONVERSATION] as [number, number]))}`
              : '',
          ...(!isTransposed
            ? {
                position: 'top-right',
                dx: 20,
                backgroundPadding: [0, 8],
              }
            : {
                position: 'top-left',
                dy: -20,
                dx: 8, // 与connector 间隙
                backgroundPadding: [-8, 8],
              }),
        },
      ];

      const labels = [...(label === false ? [] : basicLabel), ...(conversionTag === false ? [] : rateLabel)];

      const basicFunnel = {
        type: 'interval',
        axis: false,
        coordinate: !isTransposed
          ? {
              transform: [{ type: 'transpose' }],
            }
          : undefined,
        scale: {
          x: {
            padding: 0,
          },
        },
        style: funnelStyle,
        encode: {
          x: xField,
          y: FUNNEL_MAPPING_VALUE,
          color: xField,
          shape: shape || 'funnel',
        },
        animate: { enter: { type: 'fadeIn' } },
        tooltip: {
          title: false,
          items: [
            (d) => ({
              name: d[xField],
              value: d[yField],
            }),
          ],
        },
        // labels 对应 xField
        labels,
      };

      params.options.children = map(params.options.children, (child) => {
        return deepAssign(child, basicFunnel);
      });
    }

    // 漏斗图 label、conversionTag 不可被通用处理
    params.options = omit(params.options, ['label', CUSTOM_COMVERSION_TAG_CONFIG, 'yField', 'xField', 'seriesField']);

    return params;
  };

  /**
   * legend 配置
   * @param params
   */
  const legend = (params: Params): Params => {
    const { legend } = params.options;

    params.options.legend = legend ?? {
      color: {
        position: 'bottom',
        layout: {
          justifyContent: 'center',
        },
      },
    };

    return params;
  };

  return flow(transformData, init, legend)(params);
}
