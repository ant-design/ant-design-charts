import { useRef, useEffect } from 'react';
import { Base, PlotConfig } from '@antv/g2plot';

export declare type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<RecursivePartial<U>>
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};

export default function useInit<T extends Base<U>, U extends PlotConfig>(
  ChartClass: any,
  config: U,
) {
  const chart = useRef<T>();

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chart.current) {
      chart.current.updateConfig(config as RecursivePartial<U>);
      chart.current.render();
    }
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    const chartInstance: T = new (ChartClass as any)(container.current, {
      ...config,
    });
    chart.current = chartInstance;
    chartInstance.render();
    return () => chartInstance.destroy();
  }, [container.current]);

  return {
    chart,
    container,
  };
}
