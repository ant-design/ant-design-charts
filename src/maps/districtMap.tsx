import React, { useEffect, useState } from 'react';
import { Scene } from '@antv/l7';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';
import { MapScene, createLayer } from './components';
import { getAttachConfig } from './util';
import { IMapSceneConig, LayerOptions } from './interface';

const DistrictMap = (props: IMapSceneConig) => {
  const {
    mapConfig,
    attach,
    loading,
    sceneConfig,
    loadingTemplate,
    errorTemplate,
    onReady,
    layerConfig,
    style,
    className,
  } = props;

  const [scene, setScene] = useState<Scene>();
  const [layer, setLayer] = useState<LayerOptions>();
  const [attachScene, setAttachScene] = useState<Scene>();
  const [attachLayer, setAttachLayer] = useState<LayerOptions>();
  const defaultAttachConfig = getAttachConfig(layerConfig);

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
      layer.updateData(mapConfig.data);
    }
  }, [mapConfig?.data]);

  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      <div
        className={className}
        style={{
          width: '100%',
          height: '100%',
          ...style,
          position: 'relative',
        }}
      >
        {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
        <MapScene
          option={{
            logoVisible: false,
            ...sceneConfig,
          }}
          type="Mapbox"
          mapConfig={mapConfig}
          onSceneLoaded={(upScene: Scene) => {
            const layer = createLayer({ scene: upScene, layerConfig });
            if (layer) {
              setLayer(layer);
              setScene(upScene);
              if (!attach && onReady) {
                onReady(upScene, layer);
              }
            }
          }}
        />
        {attach && (
          <MapScene
            type="Mapbox"
            style={{ ...defaultAttachConfig.style, ...attach.style }}
            className={attach.className}
            option={{
              logoVisible: false,
              ...attach.sceneConfig,
            }}
            mapConfig={{ ...defaultAttachConfig.mapConfig, ...attach.mapConfig }}
            onSceneLoaded={(attachScene) => {
              setAttachScene(attachScene);
              setAttachLayer(
                createLayer({
                  scene: attachScene,
                  layerConfig: {
                    ...defaultAttachConfig.layerConfig,
                    ...attach.layerConfig,
                  },
                }),
              );
              if (onReady) {
                onReady(scene as Scene, layer);
              }
            }}
          />
        )}
      </div>
    </ErrorBoundary>
  );
};

export default DistrictMap;
