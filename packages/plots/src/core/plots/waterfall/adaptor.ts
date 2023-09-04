import { flow, transformOptions } from '../../utils';
import { mark } from '../../components';
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
   * 图表差异化处理
   */
  const init = (params: Params) => {
    return params;
  };

  /**
   * @description 数据转换
   */
  const transformData = (params: Params) => {
    const { options } = params;
    const { data = [], yField } = options;
    if (!data.length) return params;
    data.reduce((prev, cur, index) => {
      if (index === 0 || cur.isTotal) {
        cur[START_KEY] = 0;
        cur[END_KEY] = cur[yField];
        cur[WATERFALL_VALUE] = cur[yField];
      } else {
        const start = prev[END_KEY] ?? prev[yField];
        cur[START_KEY] = start;
        cur[END_KEY] = start + cur[yField];
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
        cur.x1 = prev[xField];
        cur.x2 = cur[xField];
        cur.y1 = prev[END_KEY];
      }
      return cur;
    }, []);
    linkData.shift();
    children.push({
      type: 'link',
      xField: ['x1', 'x2'],
      yField: 'y1',
      data: linkData,
      style: {
        stroke: '#697474',
        ...linkStyle,
      },
      labels: [],
      tooltip: false,
    });
    return params;
  };

  return flow(init, transformData, link, transformOptions, mark)(params);
}
