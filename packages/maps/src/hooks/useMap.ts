import { useRef, useEffect } from 'react';
import { MapSense, Options as BaseOptions } from '@antv/l7plot';
import { isEqual } from '@antv/util';
import { deepClone, clone } from '../util';

export interface Base extends MapSense {}

export default function useInit<T extends Base, U extends BaseOptions>(MapClass: any, config: U) {
  const map = useRef<T>();
  const mapOptions = useRef<U>();
  const container = useRef<HTMLDivElement>(null);
  const { onReady } = config;

  // updateOption/changeData 等 useEffect
  useEffect(() => {
    if (map.current && !isEqual(mapOptions.current, config)) {
      let changeData = false;
      if (changeData) {
        // changeData
      } else {
        // update
      }
      mapOptions.current = deepClone(config);
    }
  }, [config]);

  useEffect(() => {
    if (!container.current) {
      return () => null;
    }
    const mapInstance: T = new (MapClass as any)(container.current, {
      ...config,
    });

    mapInstance.render();
    if (!mapOptions.current) {
      mapOptions.current = deepClone(config);
    }
    map.current = clone(mapInstance) as T;
    if (onReady) {
      onReady(mapInstance);
    }

    // 组件销毁时销毁图表
    return () => {
      if (map.current) {
        // TODO
        // 组件销毁
        // off 事件
        map.current = undefined;
      }
    };
  }, []);

  return {
    map,
    container,
  };
}
