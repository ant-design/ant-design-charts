import { flow, map, transformOptions } from '../../utils';
import type { Adaptor } from '../../types';
import type { StockOptions } from './type';

type Params = Adaptor<StockOptions>;

const X_FIELD = 'date';

// 开盘价/收盘价/最高价/最低价
const Y_FIELD = ['open', 'close', 'high', 'low'];

export const Y_FIELD_KEY = '__stock-range__';

export const TREND_FIELD = 'trend';
export const TREND_UP = 'up';
export const TREND_DOWN = 'down';

/**
 * @param chart
 * @param options
 */
export function adaptor(params: Params) {
  const transformData = (params: Params) => {
    const { data, yField = Y_FIELD } = params.options;

    params.options.data = map(data, (item) => {
      const obj = item && { ...item };
      if (Array.isArray(yField) && obj) {
        const [open, close, high, low] = yField;
        obj[TREND_FIELD] = obj[open] <= obj[close] ? TREND_UP : TREND_DOWN;
        obj[Y_FIELD_KEY] = [obj[open], obj[close], obj[high], obj[low]];
      }
      return obj;
    });

    return params;
  };

  /**
   * 图表差异化处理
   */
  const init = (params: Params) => {
    const { xField = X_FIELD, yField = Y_FIELD, fallingFill, risingFill } = params.options;

    const [open, close, high, low] = yField;

    params.options.children = map(params.options.children, (child, index) => {
      const isShadow = index === 0;

      return {
        ...child,
        tooltip: {
          title: (d) => (d[xField] instanceof Date ? d[xField].toLocaleString() : d[xField]),
          items: [{ field: high }, { field: low }, { field: open }, { field: close }],
        },
        encode: {
          ...(child.encode || {}),
          x: xField,
          y: isShadow ? [high, low] : [open, close],
          color: (d) => Math.sign(d[close] - d[open]),
        },
        style: {
          ...(child.style || {}),
          lineWidth: isShadow ? 1 : 10,
        },
      };
    });

    params.options.legend = {
      color: false,
    };

    if (fallingFill) {
      params.options.scale.color.range[0] = fallingFill;
    }

    if (risingFill) {
      params.options.scale.color.range[2] = risingFill;
    }

    return params;
  };

  return flow(transformData, init, transformOptions)(params);
}
