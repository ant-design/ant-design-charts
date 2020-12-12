import { ReactNode, useRef, useEffect } from 'react';
import { isEqual } from '@antv/util';
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

  const reactDomToString = (source: U, path: string[], type?: string) => {
    const { hasPath, setPath } = utils;
    const statisticCustomHtml = hasPath(source, path);
    setPath(source, path, (...arg: any[]) => {
      const statisticDom = utils.isType(statisticCustomHtml, 'Function')
        ? statisticCustomHtml(...arg)
        : statisticCustomHtml;
      if (
        utils.isType(statisticDom, 'String') ||
        utils.isType(statisticDom, 'Number') ||
        utils.isType(statisticDom, 'HTMLDivElement')
      ) {
        return statisticDom;
      }
      return createNode(statisticDom, type);
    });
  };

  const processConfig = () => {
    const { hasPath } = utils;
    // statistic
    if (hasPath(config, ['statistic', 'content', 'customHtml'])) {
      reactDomToString(config, ['statistic', 'content', 'customHtml']);
    }
    if (hasPath(config, ['statistic', 'title', 'customHtml'])) {
      reactDomToString(config, ['statistic', 'title', 'customHtml']);
    }
    // tooltip
    if (typeof config.tooltip === 'object') {
      if (hasPath(config, ['tooltip', 'container'])) {
        reactDomToString(config, ['tooltip', 'container'], 'tooltip');
      }
      if (hasPath(config, ['tooltip', 'customContent'])) {
        reactDomToString(config, ['tooltip', 'customContent'], 'tooltip');
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
        let changeType = 'data';
        const typeMaps = ['percent']; // 特殊类型的图表 data 字段，例如 RingProgress
        const currentKeys = Object.keys(config);
        typeMaps.forEach((type: string) => {
          if (currentKeys.includes(type)) {
            changeType = type;
          }
        });
        chart.current.changeData(config?.[changeType] || []);
      } else {
        processConfig();
        chart.current.update(config);
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

    chartInstance.__proto__.toDataURL = (type?: string, encoderOptions?: number) => {
      return toDataURL(type, encoderOptions);
    };
    chartInstance.__proto__.downloadImage = (
      name: string,
      type?: string,
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
