import { useRef, useEffect } from 'react';
import { MapWrapper } from '@antv/l7plot';
import { isEqual } from '@antv/util';
import { deepClone, clone } from '../util';
import { CommonConfig } from '../interface';

export interface Base extends MapWrapper<any> {}

export default function useInit<T extends Base, U extends CommonConfig>(MapClass: T, config: U) {
  const map = useRef<T>();
  const mapOptions = useRef<U>();
  const container = useRef<HTMLDivElement>(null);
  // const { onReady } = config;

  // updateOption/changeData 等 useEffect
  useEffect(() => {
    if (map.current && !isEqual(mapOptions.current, config)) {
      // TODO: changeData Boolean ?
      let changeData = false;
      if (changeData) {
        const {data, ...rest} = config.source
        map.current.changeData(config.source.data, rest)
      } else {
        map.current.update(config)
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

    if (!mapOptions.current) {
      // TODO: big data
      mapOptions.current = deepClone(config);
    }
    // ?
    map.current = clone(mapInstance) as T;
    // if (onReady) {
    //   onReady(mapInstance);
    // }

    // 组件销毁时销毁图表
    return () => {
      if (map.current) {
        map.current.destroy()
        map.current = undefined;
      }
    };
  }, []);

  return {
    map,
    container,
  };
}
