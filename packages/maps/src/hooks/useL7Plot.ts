import { useRef, useEffect } from 'react';
import { Plot, PlotOptions } from '@antv/l7plot';
import { isEqual, pick } from '@antv/util';
import { deepCloneMapConfig } from '../util';

// L7PlotCtor 图表 class 构造函数
type L7PlotCtor<O extends PlotOptions, P extends Plot<O>> = new (container: string | HTMLElement, options: O) => P;

// L7PlotConfig 配置属性
export type L7PlotConfig<O extends PlotOptions, P extends Plot<O>> = O & {
  /** 图表渲染完成回调 */
  onReady?: (chart: P) => void;
};

export default function useL7Plot<
  O extends PlotOptions,
  P extends Plot<O>,
  C extends L7PlotConfig<O, P> = L7PlotConfig<O, P>,
>(Ctor: L7PlotCtor<O, P>, config: C) {
  const plotRef = useRef<P>();
  const plotConfig = useRef<C>();
  const containerRef = useRef<HTMLDivElement>(null);
  const { onReady } = config;

  // updateOption/changeData/updateMap
  useEffect(() => {
    if (!plotRef.current || !plotConfig.current || isEqual(plotConfig.current, config)) return;
    let changeData = false;
    let updateMap = false;
    let updateOption = false;

    const {
      onReady: currentOnReady,
      map: currentMap,
      source: { data: currentSourceData, ...currentSourceConfig },
      ...currentConfig
    } = plotConfig.current;
    const {
      onReady,
      map: inputMap,
      source: { data: inputSourceData, ...inputSourceDataConfig },
      ...inputConfig
    } = config;
    updateMap = !isEqual(currentMap, inputMap);
    changeData = !isEqual(currentSourceConfig, inputSourceDataConfig) || currentSourceData !== inputSourceData;
    updateOption = !isEqual(currentConfig, inputConfig);
    plotConfig.current = deepCloneMapConfig<C>(config);
    if (updateMap) {
      const updateMapConfig = pick<any>(inputMap, ['center', 'pitch', 'rotation', 'zoom', 'style']);
      plotRef.current.updateMap(updateMapConfig);
    }

    if (changeData) {
      if (plotRef.current.loaded) {
        plotRef.current.changeData(inputSourceData, inputSourceDataConfig);
      } else {
        plotRef.current.once('loaded', () => {
          plotRef.current?.changeData(inputSourceData, inputSourceDataConfig);
        });
      }
    }

    if (updateOption) {
      if (plotRef.current.loaded) {
        // @ts-ignore
        plotRef.current.update(inputConfig);
      } else {
        plotRef.current.once('loaded', () => {
          // @ts-ignore
          plotRef.current?.update(inputConfig);
        });
      }
    }
  }, [config]);

  useEffect(() => {
    if (!containerRef.current) {
      return () => null;
    }
    if (!plotConfig.current) {
      plotConfig.current = deepCloneMapConfig<C>(config);
    }

    plotRef.current = new Ctor(containerRef.current, { ...config });

    if (onReady) {
      plotRef.current.once('loaded', () => {
        onReady(plotRef.current);
      });
    }

    // 组件销毁时销毁图表
    return () => {
      if (plotRef.current) {
        plotRef.current.destroy();
        plotRef.current = undefined;
      }
    };
  }, []);

  return {
    plotRef,
    containerRef,
  };
}
