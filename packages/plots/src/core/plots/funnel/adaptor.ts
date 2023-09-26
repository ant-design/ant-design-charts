import type { Adaptor } from '../../types';
import {
  deepAssign,
  flow,
  map,
  transformOptions,
  maxBy,
  get,
  // isNumber,
  conversionTagFormatter,
  omit,
  isFunction,
} from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_PERCENT, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { Datum } from 'packages/plots/src/interface';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * @description 数据转换
   */
  const transformData = (params: Params) => {
    const {
      yField,
      // maxSize, minSize,
      data: originData,
    } = params.options;
    const maxYFieldValue = get(maxBy(originData, yField), [yField]);
    // const max = isNumber(maxSize) ? maxSize : 1;
    // const min = isNumber(minSize) ? minSize : 0;

    params.options.data = map(originData, (row, index) => {
      const percent = (row[yField] || 0) / maxYFieldValue;
      row[FUNNEL_PERCENT] = percent;
      // row[FUNNEL_MAPPING_VALUE] = (max - min) * percent + min;
      // 转化率数据存储前后数据
      row[FUNNEL_CONVERSATION] = [get(originData, [index - 1, yField]), row[yField]];
      return row;
    });

    return params;
  };

  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { xField, yField, data, shape, isTransposed, legend, compareField, funnelStyle, label } = params.options;
    const conversionTag = get(params.options, CUSTOM_COMVERSION_TAG_CONFIG);

    params.options.coordinate = !isTransposed
      ? {
          transform: [{ type: 'transpose' }],
        }
      : undefined;

    params.options.legend = legend;

    params.options.children = map(params.options.children, (child) => {
      const basicLabel = [
        {
          text: (d) => `${d[xField]} ${d[yField]}`,
          position: 'inside',
          // ? 内部label是否需要显示反色
          // transform: [{ type: 'contrastReverse' }],
          ...label,
        },
      ];

      const rateLabel = [
        // coversion 连线
        {
          text: '',
          render: (_, __, i: number) =>
            i !== 0
              ? !isTransposed
                ? `
              <div
                style="height:1px;width:20px;background:#aaa;"
              ></div>`
                : `
              <div
                style="position:relative;top:-20px;height:20px;width:1px;background:#aaa;"
              ></div>`
              : '',
          position: !isTransposed ? 'top-right' : 'top-left',
        },
        // coversion 内容,
        {
          textAlign: 'left',
          textBaseline: 'middle',
          fill: '#aaa',
          ...conversionTag,
          text: (...args: [d: Datum, index: number]) =>
            args[1] !== 0
              ? isFunction(conversionTag?.text)
                ? conversionTag.text(...args)
                : `Rate: ${conversionTagFormatter(...(args[0][FUNNEL_CONVERSATION] as [number, number]))}`
              : '',
          ...(!isTransposed
            ? {
                position: 'top-right',
                dx: 28,
              }
            : {
                position: 'top-left',
                dx: 8,
                dy: -20,
              }),
        },
      ];

      const labels = [...(label === false ? [] : basicLabel), ...(conversionTag === false ? [] : rateLabel)];

      const childConfig = {
        ...child,
        data,
        style: funnelStyle,
        encode: {
          ...(child.encode || {}),
          x: xField,
          y: yField,
          color: xField,
          shape: shape || 'funnel',
        },
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

      if (compareField) {
        deepAssign(childConfig, {
          style: {
            stroke: '#FFF',
          },
        });
      }

      return childConfig;
    });

    // 漏斗图 label、conversionTag 不可被通用处理
    params.options = omit(params.options, ['label', CUSTOM_COMVERSION_TAG_CONFIG]);

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

  return flow(transformData, init, legend, transformOptions)(params);
}
