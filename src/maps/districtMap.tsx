import React, { useEffect, useState } from 'react';
import { Scene, ISceneConfig, IMapOptions, ILayerOptions } from '@antv/l7';
import SceneComponent from './components/scene';
import { CreateDistrict, CreateMapBox, LayerOptions, DistrictType } from './util';
import { DefaultAttachConfig } from './contants';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';
import { CommonProps } from '../interface';

interface IMapSceneConig extends CommonProps {
  children?: React.ReactNode;
  sceneOption?: Partial<ISceneConfig>;
  mapConfig: IMapOptions;
  layerConfig?: ILayerOptions;
  attachMap?: Omit<IMapSceneConig, 'attachMap'>;
  type?: DistrictType;
  /** 图表渲染完成回调 */
  onReady?: (scene: Scene, layer: LayerOptions) => void;
}

const DistrictMap = (props: IMapSceneConig) => {
  const {
    mapConfig,
    sceneOption,
    attachMap,
    loading,
    loadingTemplate,
    errorTemplate,
    onReady,
    layerConfig,
    type,
  } = props;
  const [scene, setScene] = useState<Scene>();
  const [layer, setLayer] = useState<LayerOptions>();
  const [attachScene, setAttachScene] = useState<Scene>();
  const [attachLayer, setAttachLayer] = useState<LayerOptions>();
  useEffect(() => {
    return () => {
      if (layer) {
        scene?.destroy();
        layer.destroy();
      }
      if (attachLayer) {
        attachScene?.destroy();
        attachLayer.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (layer) {
      // @ts-ignore
      layer.updateData(layerConfig.data);
    }
  }, [layerConfig.data]);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <SceneComponent
        {...props}
        option={{
          logoVisible: false,
          ...sceneOption,
        }}
        map={CreateMapBox(mapConfig)}
        onSceneLoaded={(upScene: Scene) => {
          const layer = CreateDistrict({ type, scene: upScene, layerConfig });
          setLayer(layer);
          setScene(upScene);
          if (!attachMap && onReady) {
            onReady(upScene, layer);
          }
        }}
      >
        {attachMap && (
          <SceneComponent
            {...attachMap}
            style={{ ...DefaultAttachConfig.style, ...attachMap.style }}
            option={{
              logoVisible: false,
              ...attachMap.sceneOption,
            }}
            map={CreateMapBox({ ...DefaultAttachConfig.mapConfig, ...attachMap.mapConfig })}
            onSceneLoaded={(attachScene) => {
              setAttachScene(attachScene);
              setAttachLayer(
                CreateDistrict({
                  scene: attachScene,
                  type: attachMap.type || type,
                  layerConfig: {
                    ...DefaultAttachConfig.layerConfig,
                    ...attachMap.layerConfig,
                  },
                }),
              );
              if (onReady) {
                onReady(scene as Scene, layer as LayerOptions);
              }
            }}
          />
        )}
      </SceneComponent>
    </ErrorBoundary>
  );
};

export default DistrictMap;
