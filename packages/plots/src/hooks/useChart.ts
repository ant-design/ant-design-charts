import React, { useRef, useEffect } from 'react';
import { isEqual, get } from 'lodash-es';
import createNode from '../utils/createNode';
import { getPathConfig, isType, deepClone, clone, setPathConfig } from '../utils';
import { JSX_TO_STRING } from '../constants';
import { CommonConfig, Chart } from '../interface';

export default function useChart<T extends Chart, U extends CommonConfig>(ChartClass: T, config: U) {
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
    const canvas = container.current?.getElementsByTagName('canvas')[0];
    return canvas?.toDataURL(type, encoderOptions);
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

  const reactDomToString = (source: U, path: string[], extra?: object) => {
    const statisticCustomHtml = getPathConfig(source, path);
    setPathConfig(source, path, (...arg: any[]) => {
      const statisticDom = isType(statisticCustomHtml, 'Function') ? statisticCustomHtml(...arg) : statisticCustomHtml;
      if (isType(statisticDom, 'String') || isType(statisticDom, 'Number') || isType(statisticDom, 'HTMLDivElement')) {
        return statisticDom;
      }
      return createNode(statisticDom, extra);
    });
  };

  const processConfig = () => {
    JSX_TO_STRING.forEach(({ path, extra }) => {
      if (getPathConfig(config, path)) {
        reactDomToString(config, path, extra);
      }
    });
  };

  useEffect(() => {
    if (chart.current && !isEqual(chartOptions.current, config)) {
      let changeData = false;
      if (chartOptions.current) {
        // 从 options 里面取出 data 、value 、 percent 进行比对，判断是否仅数值发生改变
        const { data: currentData, ...currentConfig } = chartOptions.current;
        const { data: inputData, ...inputConfig } = config;
        changeData = isEqual(currentConfig, inputConfig);
      }
      chartOptions.current = deepClone(config);
      if (changeData) {
        chart.current.changeData(get(config, 'data'));
      } else {
        processConfig();
        chart.current.update(config);
        chart.current.render();
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

    chartInstance.toDataURL = toDataURL;
    chartInstance.downloadImage = downloadImage;
    chartInstance.render();
    chart.current = clone(chartInstance) as T;
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
