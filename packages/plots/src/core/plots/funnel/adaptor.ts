// import { coordinateLayout } from '../../components';
import type { Adaptor } from '../../types';
import { deepAssign, flow, map, transformOptions, maxBy, get, isNumber, conversionTagFormatter } from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_PERCENT } from './constant';

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
    const { xField, yField, data, shape, isTransposed, legend, compareField, funnelStyle } = params.options;

    params.options.coordinate = !isTransposed
      ? {
          transform: [{ type: 'transpose' }],
        }
      : undefined;

    params.options.legend = legend;

    params.options.children = map(params.options.children, (child) => {
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
        labels: [
          {
            text: (d) => `${d[xField]} ${d[yField]}`,
            position: 'inside',
            // ? 内部label是否需要显示反色
            // transform: [{ type: 'contrastReverse' }],
          },
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
          // coversion 内容
          {
            text: (d, i: number) =>
              i !== 0 ? `Rate: ${conversionTagFormatter(...(d[FUNNEL_CONVERSATION] as [number, number]))}` : '',
            textAlign: 'left',
            textBaseline: 'middle',
            fill: '#aaa',
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
        ],
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
