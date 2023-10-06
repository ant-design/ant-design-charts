import type { Adaptor } from '../../types';
import { flow, get, merge, conversionTagFormatter, isFunction } from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_MAPPING_VALUE, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { Datum } from 'packages/plots/src/interface';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function facetFunnel(params: Params) {
  const getBasicFunnel = (params: Params, seriesField: string) => {
    const { xField, yField, shape, funnelStyle, label, isTransposed } = params.options;

    const conversionTag = get(params.options, CUSTOM_COMVERSION_TAG_CONFIG);

    const basicLabel = [
      {
        text: (d) => `${d[yField]}`,
        position: 'inside',
        fillOpacity: 1,
        ...label,
      },
    ];

    const rateLabel = [
      {
        textAlign: 'left',
        textBaseline: 'middle',
        fill: '#aaa',
        fillOpacity: 1,
        connector: true,
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
        ...conversionTag,
        text: (...args: [d: Datum, index: number]) =>
          args[1] !== 0
            ? isFunction(conversionTag?.text)
              ? `${conversionTag.text(...args)}`
              : `Rate: ${conversionTagFormatter(...(args[0][FUNNEL_CONVERSATION] as [number, number]))}`
            : '',
      },
    ];

    const facetLabel = {
      text: (_, index) => {
        return index === 0 ? seriesField : '';
      },
      fontSize: 14,
      position: 'top',
      fillOpacity: 1,
      dy: -24,
    };

    const labels = [...(label === false ? [] : basicLabel), ...(conversionTag === false ? [] : rateLabel), facetLabel];

    return {
      type: 'interval',
      axis: false,
      encode: {
        x: xField,
        y: FUNNEL_MAPPING_VALUE,
        color: xField,
        shape: shape || 'funnel',
      },
      scale: {
        x: {
          padding: 0,
        },
      },
      transform: [
        {
          type: 'symmetryY',
        },
      ],
      tooltip: {
        title: false,
        items: [
          (d) => ({
            name: d[xField],
            value: d[yField],
          }),
        ],
      },
      labels,
    };
  };

  const getSeriesFields = (params: Params) => {
    const { data, seriesField } = params.options;
    const seriesFields: string[] = [];

    let i = 0;
    while (seriesFields.length < 2) {
      const curData = data[i][seriesField];
      if (seriesFields.every((has) => has !== curData)) {
        seriesFields.push(curData);
      }
      i += 1;
    }

    return seriesFields;
  };
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { isTransposed, legend, yField } = params.options;

    const seriesFields = getSeriesFields(params);

    params.options.coordinate = !isTransposed
      ? {
          transform: [{ type: 'transpose' }],
        }
      : undefined;

    params.options.legend = legend;

    params.options.children = seriesFields.map((curSeriesField, index) => {
      return merge(getBasicFunnel(params, curSeriesField), {
        data: {
          transform: [
            {
              type: 'filter',
              callback: (d) => d.company === curSeriesField,
            },
          ],
        },
        legend: false,
      });
    });

    params.options = merge(params.options, {
      type: 'spaceFlex',
      direction: isTransposed ? 'col' : 'row',
      paddingTop: 12,
      marginRight: 80,
      // marginLeft: 5,
      // scale: {
      //   [yField]: {
      //     sync: true,
      //   },
      // },
      // 分面 需要自定义图例
      // legend,
    });

    return params;
  };

  return flow(init)(params);
}
