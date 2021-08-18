import { useRef, useEffect } from 'react';
import { Plot, IPlotOptions } from '@antv/l7plot';
import { isEqual, pick } from '@antv/util';
import { deepCloneMapConfig } from '../util';

export interface Base extends Plot<any> {}

export interface IOptions<O extends IPlotOptions = IPlotOptions, P extends Plot<O> = Plot<O>>
  extends IPlotOptions {
  /** 图表渲染完成回调 */
  onReady?: (chart: P) => void;
}

export default function useInit<T extends Base, U extends IOptions>(MapClass: any, config: U) {
  const map = useRef<T>();
  const mapOptions = useRef<U>();
  const container = useRef<HTMLDivElement>(null);
  const { onReady } = config;

  // updateOption/changeData/updateMap
  useEffect(() => {
    if (!map.current || isEqual(mapOptions.current, config)) return;
    let changeData = false;
    let updateMap = false;
    let updateOption = false;

    if (mapOptions.current) {
      const { map: currentMap, source: currentSource, ...currentConfig } = mapOptions.current;
      const { map: inputMap, source: inputSource, ...inputConfig } = config;
      updateMap = !isEqual(currentMap, inputMap);
      changeData = !isEqual(currentSource, inputSource);
      updateOption = !isEqual(currentConfig, inputConfig);
    }

    if (updateMap && config.map) {
      const updateMapConfig = pick<any>(config.map, [
        'center',
        'pitch',
        'rotation',
        'zoom',
        'style',
      ]);
      map.current.updateMap(updateMapConfig);
    }
    if (changeData) {
      const { data, ...rest } = config.source;
      if (map.current.loaded) {
        map.current.changeData(config.source.data, rest);
      } else {
        map.current.once('loaded', () => {
          map.current?.changeData(config.source.data, rest);
        });
      }
    }
    if (updateOption) {
      if (map.current.loaded) {
        map.current.update(config);
      } else {
        map.current.once('loaded', () => {
          map.current?.update(config);
        });
      }
    }

    mapOptions.current = deepCloneMapConfig<U>(config);
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    const mapInstance: T = new (MapClass as any)(container.current, {
      ...config,
    });

    if (!mapOptions.current) {
      mapOptions.current = deepCloneMapConfig<U>(config);
    }
    map.current = mapInstance;
    if (onReady) {
      mapInstance.once('loaded', () => {
        onReady(mapInstance);
      });
    }

    // 组件销毁时销毁图表
    return () => {
      if (map.current) {
        map.current.destroy();
        map.current = undefined;
      }
    };
  }, []);

  return {
    map,
    container,
  };
}
