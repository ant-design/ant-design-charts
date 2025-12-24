import { useEffect, useRef } from 'react';
import { Chart, CommonConfig } from '../interface';
import { cloneDeep, createNode, isArray, isEqual, isFunction, isObject, isValidElement } from '../util';

export default function useChart<T extends Chart, U extends CommonConfig>(ChartClass: T, config: U) {
  const chart = useRef<T>(null);
  const chartOptions = useRef<U>(null);
  const container = useRef<HTMLDivElement>(null);
  const { onReady, onEvent } = config;

  /**
   * Get data base64
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const toDataURL = (type = 'image/png', encoderOptions?: number) => {
    const canvas = container.current?.getElementsByTagName('canvas')[0];
    return canvas?.toDataURL(type, encoderOptions);
  };

  /**
   * Download Image
   * @param {string} name A name of image
   * @param {string} type A DOMString indicating the image format. The default format type is image/png.
   * @param {number} encoderOptions A Number between 0 and 1 indicating the image quality
   */
  const downloadImage = (name = 'download', type = 'image/png', encoderOptions?: number): string => {
    let imageName = name;
    if (name.indexOf('.') === -1) {
      imageName = `${name}.${type.split('/')[1]}`;
    }
    const base64 = toDataURL(type, encoderOptions);
    let a: HTMLAnchorElement | null = document.createElement('a');
    a.href = base64;
    a.download = imageName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    a = null;
    return imageName;
  };

  /**
   * JSX TO HTMLElement
   * @param {object} cfg
   * @param {boolean} flag isTooltip
   */
  const processConfig = (cfg: object, flag = false) => {
    if (!isObject(cfg)) return;
    const keys = Object.keys(cfg);
    let isTooltip = flag;
    keys.forEach((key) => {
      const current = cfg[key];
      if (key === 'tooltip') {
        isTooltip = true;
      }
      if (isFunction(current) && isValidElement(`${current}`)) {
        cfg[key] = (...arg) => createNode(current(...arg), isTooltip);
      } else {
        if (isArray(current)) {
          current.forEach((item) => {
            processConfig(item, isTooltip);
          });
        } else if (isObject(current)) {
          processConfig(current, isTooltip);
        } else {
          isTooltip = flag;
        }
      }
    });
  };

  useEffect(() => {
    if (chart.current && !isEqual(chartOptions.current, config)) {
      chartOptions.current = cloneDeep(config);
      processConfig(config);
      chart.current.update(config);
      chart.current.render();
    }
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    if (!chartOptions.current) {
      chartOptions.current = cloneDeep(config);
    }
    processConfig(config);
    const chartInstance: T = new (ChartClass as any)(container.current, {
      ...config,
    });

    chartInstance.toDataURL = toDataURL;
    chartInstance.downloadImage = downloadImage;
    chartInstance.render();
    chart.current = chartInstance;
    if (onReady) {
      onReady(chartInstance);
    }
    const handler = (event) => {
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
