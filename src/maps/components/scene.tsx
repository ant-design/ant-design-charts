import React, { useRef, useEffect, useState, memo } from 'react';
import { IMapConfig, ISceneConfig, Scene } from '@antv/l7';
import { createMap } from './maps';
import { MapType } from '../interface';

interface IMapSceneConig {
  /** 地图类型 */
  type?: MapType;
  style?: React.CSSProperties;
  mapConfig: IMapConfig;
  className?: string;
  option?: Partial<ISceneConfig>;
  onSceneLoaded?: (scene: Scene) => void;
}

const MapScene = React.memo((props: IMapSceneConig) => {
  const { style, mapConfig, option, onSceneLoaded, className, type } = props;
  const { zoom, center, pitch, rotation, style: mapStyle } = mapConfig;
  const container = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<Scene>();

  // 地图初始
  useEffect(() => {
    const sceneInstance = new Scene({
      id: container.current!,
      ...option,
      map: createMap(mapConfig, type),
    });
    sceneInstance.on('loaded', () => {
      setScene(sceneInstance);
      if (onSceneLoaded) {
        onSceneLoaded(sceneInstance);
      }
    });

    return () => {
      sceneInstance.destroy();
    };
  }, []);

  // 更新地图样式
  useEffect(() => {
    if (scene && mapStyle) {
      scene.setMapStyle(mapStyle);
    }
  }, [mapStyle]);

  useEffect(() => {
    if (scene && zoom) {
      scene.setZoom(zoom);
    }
  }, [zoom]);

  useEffect(() => {
    if (scene && center) {
      scene.setCenter(center);
    }
  }, [center]);

  useEffect(() => {
    if (scene && pitch) {
      scene.setPitch(pitch);
    }
  }, [pitch]);

  useEffect(() => {
    if (scene && rotation) {
      scene.setRotation(rotation);
    }
  }, [rotation]);

  return (
    <div
      ref={container}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    />
  );
});

export default memo(MapScene);
