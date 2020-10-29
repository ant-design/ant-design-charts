import { ReactNode, useRef, useEffect } from 'react';
import { isEqual, deepMix } from '@antv/util';
import { utils } from '../util';
import { Plot, Options as G2PlotConfig, Tooltip as G2PlotTooltip } from '@antv/g2plot';
import createNode from '../util/createNode';

export interface ContainerProps {
  style?: React.CSSProperties;
  className?: string;
  loading?: boolean;
  loadingTemplate?: React.ReactElement;
  errorTemplate?: (e: Error) => React.ReactNode;
}
export interface Tooltip extends Omit<G2PlotTooltip, 'customContent'> {
  customContent?: (title: string, data: any[]) => ReactNode | string | void;
  container?: ReactNode;
}

export interface Options extends Omit<G2PlotConfig, 'tooltip' | 'data' | 'yAxis'> {
  tooltip?: boolean | Tooltip;
  data?: any;
  yAxis?: G2PlotConfig['yAxis'] | G2PlotConfig['yAxis'][];
  [key: string]: any;
}

export interface Base extends Plot<any> {
  __proto__?: any;
}

export default function useInit<T extends Base, U extends Options>(ChartClass: any, config: U) {
  const chart = useRef<T>();
  const chartOptions = useRef<U>();
  const container = useRef<HTMLDivElement>(null);

  /**
   * Get data base64
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const toDataURL = (type = 'image/png', encoderOptions?: number) => {
    return chart.current?.chart.canvas.cfg.el.toDataURL(type, encoderOptions);
  };

  /**
   * Download Iamge
   * @param {string} name A name of image
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const downloadImage = (name: string, type = 'image/png', encoderOptions?: number) => {
    try {
      // default png
      if (name && name.indexOf('.') === -1) {
        name = `${name}.png`;
      }
      let imageName = name;
      if (!imageName) {
        const _config = config as any;
        // 默认值：图表 title -> 图表类型
        imageName = `${_config?.title?.text || ChartClass?.name}.png`;
      }
      const base64 = chart.current?.chart.canvas.cfg.el.toDataURL(type, encoderOptions);
      let a: HTMLAnchorElement | null = document.createElement('a');
      a.href = base64;
      a.download = imageName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      a = null;
    } catch (err) {
      console.log(err);
    }
  };

  const processConfig = () => {
    // @ts-ignore 该属性只有 Liquid 和 Dount 存在且配置不一致，类型定义先忽略
    if (config.statistic?.htmlContent) {
      // @ts-ignore
      const statisticHtmlContent = config.statistic.htmlContent;
      // @ts-ignore
      config.statistic.htmlContent = (...arg: any[]) => {
        const statisticDom = statisticHtmlContent(...arg);
        if (
          utils.isType(statisticDom, 'String') ||
          utils.isType(statisticDom, 'Number') ||
          utils.isType(statisticDom, 'HTMLDivElement')
        ) {
          return statisticDom;
        }
        return createNode(statisticDom);
      };
    }

    if (typeof config.tooltip === 'object') {
      if (config.tooltip?.container) {
        config.tooltip.container = createNode(config.tooltip.container);
      }

      if (config.tooltip?.customContent) {
        const customContent = config.tooltip.customContent;
        config.tooltip.customContent = (title: string, items: any[]) => {
          const tooltipDom = customContent(title, items) || '';
          if (utils.isType(tooltipDom, 'HTMLDivElement')) {
            return tooltipDom;
          }
          return createNode(tooltipDom);
        };
      }
    }
  };

  useEffect(() => {
    if (chart.current && !isEqual(chartOptions.current, config)) {
      let changeData = false;
      if (chartOptions.current) {
        // 从 options 里面取出 data 、value 、 percent 进行比对，判断是否仅数值发生改变
        const {
          data: currentData,
          value: currentValue,
          percent: currentPercent,
          ...currentConfig
        } = chartOptions.current;
        const {
          data: inputData,
          value: inputValue,
          percent: inputPercent,
          ...inputConfig
        } = config;
        changeData = isEqual(currentConfig, inputConfig);
      }
      if (changeData) {
        if (isEqual(chartOptions.current?.data, config.data)) {
          chart.current.update(deepMix(chart.current.options, config));
        } else {
          chart.current.changeData(config?.data || []);
        }
      } else {
        processConfig();
        chart.current.update(deepMix(chart.current.options, config));
      }
      chartOptions.current = config;
    }
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    processConfig();
    const chartInstance: T = new (ChartClass as any)(container.current, {
      ...config,
    });

    chartInstance.__proto__.toDataURL = (type: string, encoderOptions?: number) => {
      return toDataURL(type, encoderOptions);
    };
    chartInstance.__proto__.downloadImage = (
      name: string,
      type: string,
      encoderOptions?: number,
    ) => {
      return downloadImage(name, type, encoderOptions);
    };
    chartInstance.render();
    if (!chartOptions.current) {
      chartOptions.current = config;
    }
    chart.current = utils.clone(chartInstance) as T;
    return () => {
      chartInstance.destroy();
    };
  }, []);

  return {
    chart,
    container,
  };
}
