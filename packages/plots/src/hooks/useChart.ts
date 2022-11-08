import { useRef, useEffect } from 'react';
import { isEqual, get } from '@antv/util';
import { G2 } from '@antv/g2plot';
import createNode from '../utils/createNode';
import { hasPath, isType, deepClone, clone, setPath } from '../utils';
import { BasePlot, BaseConfig, AllBaseConfig } from '../interface';

interface Base extends BaseConfig<AllBaseConfig> {
  data?: any;
  value?: number;
  /** Gauge、Liquid、Progress、RingProgress */
  percent?: number;
}

export default function useInit<T extends BasePlot, U extends Base>(ChartClass: any, config: U) {
  const chart = useRef<T>();
  const chartOptions = useRef<U>();
  const container = useRef<HTMLDivElement>(null);
  const { onReady, onEvent } = config;

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
  const downloadImage = (name = 'download', type = 'image/png', encoderOptions?: number): string => {
    let imageName = name;
    if (name.indexOf('.') === -1) {
      imageName = `${name}.${type.split('/')[1]}`;
    }
    const base64 = chart.current?.chart.canvas.cfg.el.toDataURL(type, encoderOptions);
    let a: HTMLAnchorElement | null = document.createElement('a');
    a.href = base64;
    a.download = imageName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a = null;
    return imageName;
  };

  const reactDomToString = (source: U, path: string[], type?: string) => {
    const statisticCustomHtml = hasPath(source, path);
    setPath(source, path, (...arg: any[]) => {
      const statisticDom = isType(statisticCustomHtml, 'Function') ? statisticCustomHtml(...arg) : statisticCustomHtml;
      if (isType(statisticDom, 'String') || isType(statisticDom, 'Number') || isType(statisticDom, 'HTMLDivElement')) {
        return statisticDom;
      }
      return createNode(statisticDom, type);
    });
  };

  const processConfig = () => {
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
        const { data: inputData, value: inputValue, percent: inputPercent, ...inputConfig } = config;
        changeData = isEqual(currentConfig, inputConfig);
      }
      chartOptions.current = deepClone(config);
      if (changeData && get(config, 'chartType') !== 'Mix') {
        let changeType = 'data';
        const typeMaps = ['percent']; // 特殊类型的图表 data 字段，例如 RingProgress
        const currentKeys = Object.keys(config);
        typeMaps.forEach((type: string) => {
          if (currentKeys.includes(type)) {
            changeType = type;
          }
        });
        chart.current.changeData(config?.[changeType] || []);
        chart.current.render();
      } else {
        processConfig();
        chart.current.update(config);
      }
    }
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    if (!chartOptions.current) {
      chartOptions.current = deepClone(config);
    }
    processConfig();
    const chartInstance: T = new (ChartClass as any)(container.current, {
      ...config,
    });

    chartInstance.toDataURL = (type?: string, encoderOptions?: number) => {
      return toDataURL(type, encoderOptions);
    };
    chartInstance.downloadImage = (name?: string, type?: string, encoderOptions?: number) => {
      return downloadImage(name, type, encoderOptions);
    };
    chartInstance.render();
    chart.current = clone(chartInstance) as T;
    if (onReady) {
      onReady(chartInstance);
    }
    const handler = (event: G2.Event) => {
      if (onEvent) {
        onEvent(chartInstance, event);
      }
    };
    chartInstance.on('*', handler);

    // 组件销毁时销毁图表
    return () => {
      if (chart.current) {
        chart.current.destroy();
        chart.current.off('*', handler);
        chart.current = undefined;
      }
    };
  }, []);

  return {
    chart,
    container,
  };
}
