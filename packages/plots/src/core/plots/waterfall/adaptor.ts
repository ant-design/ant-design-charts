import { flow, transformOptions, fieldAdapter, isObject, set } from '../../utils';
import { mark } from '../../adaptor';
import { START_KEY, END_KEY, WATERFALL_VALUE } from './constants';
import type { Adaptor } from '../../types';
import type { WaterfallOptions } from './type';

type Params = Adaptor<WaterfallOptions>;

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  /**
   * @description 数据转换
   */
  const transformData = (params: Params) => {
    const { options } = params;
    const { data = [], yField } = options;
    if (!data.length) return params;
    data.reduce((prev, cur, index: number) => {
      const getFieldData = fieldAdapter(yField);
      const newCur = getFieldData(cur, index, data);
      if (index === 0 || cur.isTotal) {
        cur[START_KEY] = 0;
        cur[END_KEY] = newCur;
        cur[WATERFALL_VALUE] = newCur;
      } else {
        const start = prev[END_KEY] ?? getFieldData(prev, index, data);
        cur[START_KEY] = start;
        cur[END_KEY] = start + newCur;
        cur[WATERFALL_VALUE] = prev[END_KEY];
      }
      return cur;
    }, []);
    Object.assign(options, { yField: [START_KEY, END_KEY] });
    return params;
  };
  /**
   * @description 添加连线信息
   */
  const link = (params: Params) => {
    const { options } = params;
    const { data = [], xField, children, linkStyle } = options;
    const linkData = [...data];
    linkData.reduce((prev, cur, index) => {
      if (index > 0) {
        cur.x1 = prev[xField as string];
        cur.x2 = cur[xField as string];
        cur.y1 = prev[END_KEY];
      }
      return cur;
    }, []);
    linkData.shift();
    children.push({
      type: 'link',
      xField: ['x1', 'x2'],
      yField: 'y1',
      // 防止动画或 scrollbar 重绘时 link 层级高于 interval
      zIndex: -1,
      data: linkData,
      style: {
        stroke: '#697474',
        ...linkStyle,
      },
      label: false,
      tooltip: false,
    });
    return params;
  };

  /**
  * @description 连接线
  */
  const connectorTransform = (params: Params) => {
    const { options } = params;
    const { data = [], connector } = options;
    if (!connector) return params;
    set(options, 'connector', {
      xField: connector.reverse ? ['x2', 'x1'] : ['x1', 'x2'],
      yField: connector.reverse ? ['y2', 'y1'] : ['y1', 'y2'],
      data: [
        {
          x1: data[0].x,
          y1: data[0][END_KEY],
          x2: data[data.length - 1].x,
          y2: data[data.length - 1][END_KEY],
        },
      ],
      ...(isObject(connector) ? connector : {}),
    })
    return params;
  };

  return flow(transformData, link, mark, connectorTransform, transformOptions)(params);
}
