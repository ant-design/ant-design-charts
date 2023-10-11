import type { Adaptor } from '../../types';
import { flow, get, merge, conversionTagFormatter, isFunction } from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_MAPPING_VALUE, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { Datum } from '../../../interface';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function facetFunnel(params: Params) {
  const getBasicFunnel = (params: Params) => {
    const { xField, yField, shape, legend, label, isTransposed, seriesField } = params.options;

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
      text: (d, index) => {
        return index === 0 ? d[seriesField] : '';
      },
      fontSize: 14,
      position: !isTransposed ? 'top' : 'left',
      fillOpacity: 1,
      dy: -24,
    };

    const labels = [...(label === false ? [] : basicLabel), ...(conversionTag === false ? [] : rateLabel)];

    if (!isTransposed) {
      labels.push(facetLabel);
    }

    return {
      // 分面中需要单独设置 theme
      theme: 'classic',
      type: 'interval',
      axis: {
        x: false,
        y: false,
      },
      legend,
      // facetLabel 空间预留
      marginTop: !isTransposed ? 8 : undefined,
      // 分面单元 紧凑
      marginLeft: !isTransposed ? -10 : undefined,
      frame: false,
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
      coordinate: !isTransposed
        ? {
            transform: [
              {
                type: 'transpose',
              },
            ],
          }
        : undefined,
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

  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { isTransposed, legend, yField, seriesField } = params.options;

    params.options.legend = legend;

    params.options.children = [getBasicFunnel(params)];

    params.options = merge(params.options, {
      type: 'facetRect',
      direction: isTransposed ? 'col' : 'row',
      frame: false,
      encode: { x: seriesField },
      autoFit: true,
      paddingLeft: 60,
      paddingRight: 60,
      axis: { x: false },
      scale: {
        [yField]: {
          sync: true,
        },
      },
    });

    return params;
  };

  return flow(init)(params);
}
