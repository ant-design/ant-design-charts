import type { Adaptor } from '../../types';
import { flow, map, maxBy, get, merge, conversionTagFormatter, omit, isFunction } from '../../utils';
import type { FunnelOptions } from './type';
import { FUNNEL_CONVERSATION, FUNNEL_MAPPING_VALUE, CUSTOM_COMVERSION_TAG_CONFIG } from './constant';
import { Datum } from '../../../interface';

type Params = Adaptor<FunnelOptions>;

/**
 * @param chart
 * @param options
 */
export function compareFunnel(params: Params) {
  const getBasicFunnel = (params: Params, compareField: string) => {
    const { xField, yField, funnelStyle, label, isTransposed } = params.options;

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
        transform: [
          {
            type: 'overlapDodgeY',
          },
        ],
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
              dx: 8,
              dy: -20,
              backgroundPadding: [-8, 8],
            }),
      },
    ];

    const compareLabel = {
      text: (_, index) => {
        return index === 0 ? compareField : '';
      },
      fontSize: 14,
      position: 'top',
      fillOpacity: 1,
      dy: -24,
    };

    const labels = [
      ...(label === false ? [] : basicLabel),
      ...(conversionTag === false ? [] : rateLabel),
      compareLabel,
    ];

    return {
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
        shape: 'funnel',
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
  };

  const getCompareFields = (params: Params) => {
    const { data, compareField } = params.options;
    const compareFields: string[] = [];

    let i = 0;
    while (compareFields.length < 2) {
      const curData = data[i][compareField];
      if (curData !== compareFields[0]) {
        compareFields.push(curData);
      }
      if (compareFields.length === 2) return compareFields;
      i += 1;
    }

    return compareFields;
  };
  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { yField, isTransposed, legend, conversionTag, label, compareField } = params.options;

    const compareFields = getCompareFields(params);

    params.options.children = [
      compareFields[0]
        ? merge(getBasicFunnel(params, compareFields[0]), {
            data: {
              transform: [
                {
                  type: 'filter',
                  callback: (d) => d.company === compareFields[0],
                },
              ],
            },
            style: {
              stroke: '#FFF',
            },
            encode: {
              y: (d) => -d[FUNNEL_MAPPING_VALUE],
            },
            labels: [
              ...(label === false
                ? []
                : [
                    {
                      textAlign: isTransposed ? 'center' : 'end',
                      position: isTransposed ? 'top' : 'right',
                      dx: isTransposed ? undefined : -8,
                      dy: isTransposed ? 8 : undefined,
                      fill: '#FFF',
                    },
                  ]),
              ...(conversionTag === false
                ? []
                : [
                    {
                      ...(!isTransposed
                        ? {
                            position: 'top-left',
                            dx: -48 * 2,
                          }
                        : {
                            position: 'bottom-left',
                            dx: 8,
                            dy: 24,
                          }),
                    },
                  ]),
              isTransposed
                ? {
                    text: (_, index, arr) => {
                      return index === arr.length - 1 ? compareFields[0] : '';
                    },
                    textAlign: 'end',
                    position: 'bottom-right',
                    textBaseline: 'middle',
                    dy: 24,
                  }
                : {},
            ],
          })
        : null,
      compareFields[1]
        ? merge(getBasicFunnel(params, compareFields[1]), {
            data: {
              transform: [
                {
                  type: 'filter',
                  callback: (d) => d.company === compareFields[1],
                },
              ],
            },
            style: {
              stroke: '#FFF',
            },
            labels: [
              ...(label === false
                ? []
                : [
                    {
                      textAlign: isTransposed ? 'center' : 'start',
                      position: isTransposed ? 'bottom' : 'left',
                      dx: isTransposed ? undefined : 8,
                      dy: isTransposed ? -8 : undefined,
                      fill: '#FFF',
                    },
                  ]),
              ...(conversionTag === false ? [] : [{}]),
              isTransposed
                ? {
                    text: (_, index, arr) => {
                      return index === arr.length - 1 ? compareFields[1] : '';
                    },
                    textAlign: 'end',
                    position: 'top-right',
                    textBaseline: 'middle',
                    dy: -24,
                  }
                : {},
            ],
          })
        : null,
    ].filter((i) => !!i);

    params.options = merge(params.options, {
      // 预留给 compareLabel 的空间
      paddingTop: 24,
      paddingLeft: 60,
      paddingRight: 60,
    });

    return params;
  };

  return flow(init)(params);
}
