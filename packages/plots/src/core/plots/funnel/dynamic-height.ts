import type { Adaptor } from '../../types';
import { flow, map, maxBy, get, conversionTagFormatter, isFunction, deepAssign } from '../../utils';
import type { FunnelOptions } from './type';
import {
  FUNNEL_CONVERSATION,
  FUNNEL_PERCENT,
  FUNNEL_TOTAL_PERCENT,
  CUSTOM_COMVERSION_TAG_CONFIG,
  POLYGON_X,
  POLYGON_Y,
} from './constant';
import { Datum } from '../../../interface';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function dynamicHeightFunnel(params: Params) {
  const transformData = (params: Params) => {
    const { options } = params;
    const { data = [], yField } = options;

    // 计算各数据项所占高度
    const sum = data.reduce((total, item) => {
      return total + (item[yField] || 0);
    }, 0);

    const max = maxBy(data, yField)[yField];

    const formatData = map(data, (row, index) => {
      // 储存四个点 x，y 坐标，方向为顺时针，即 [左上, 右上，右下，左下]
      const x = [];
      const y = [];

      row[FUNNEL_TOTAL_PERCENT] = (row[yField] || 0) / sum;

      // 获取左上角，右上角坐标
      if (index) {
        const preItemX = data[index - 1][POLYGON_X];
        const preItemY = data[index - 1][POLYGON_Y];
        x[0] = preItemX[3];
        y[0] = preItemY[3];
        x[1] = preItemX[2];
        y[1] = preItemY[2];
      } else {
        x[0] = -0.5;
        y[0] = 1;
        x[1] = 0.5;
        y[1] = 1;
      }

      // 获取右下角坐标
      y[2] = y[1] - row[FUNNEL_TOTAL_PERCENT];
      x[2] = (y[2] + 1) / 4;
      y[3] = y[2];
      x[3] = -x[2];

      // 赋值
      row[POLYGON_X] = x;
      row[POLYGON_Y] = y;
      row[FUNNEL_PERCENT] = (row[yField] || 0) / max;
      row[FUNNEL_CONVERSATION] = [get(data, [index - 1, yField]), row[yField]];
      return row;
    });

    options.data = formatData;

    return params;
  };

  const init = (params: Params) => {
    const { options } = params;
    const { xField, yField, label, isTransposed, tooltip } = options;

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
      type: 'polygon',
      transform: undefined,
      encode: {
        x: POLYGON_X,
        y: POLYGON_Y,
        color: xField,
      },
      labels,
      tooltip: {
        title: false,
        items: [
          (d) =>
            isFunction(tooltip?.text)
              ? tooltip.text(d)
              : {
                  name: d[xField],
                  value: d[yField],
                },
        ],
      },
    };

    params.options.children = map(params.options.children, (child) => {
      return deepAssign(child, basicFunnel);
    });

    deepAssign(params.options, {
      paddingLeft: 60,
      paddingRight: 60,
      legend: false,
      // TODO 暂无法实现转置, 缺少 reflect.x
      // coordinate: !isTransposed
      //   ? {
      //       transform: [{ type: 'transpose' }, { type: 'reflect.x' }],
      //     }
      //   : undefined,
    });
  };

  return flow(transformData, init)(params);
}
