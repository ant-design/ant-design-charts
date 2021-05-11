import React, { useEffect, useState } from 'react';
import { Scene } from '@antv/l7';
import { ErrorBoundary } from '../base';
import ChartLoading from '../util/createLoading';
import { MapScene } from './components';
import { createDistrict, getAttachConfig } from './util';
import { IMapSceneConig, LayerOptions } from './index.d';

const DistrictMap = (props: IMapSceneConig) => {
  const {
    mapConfig,
    attach,
    loading,
    loadingTemplate,
    errorTemplate,
    onReady,
    layerConfig,
    type,
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
  }, [mapConfig.data]);

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
          {...props}
          option={{
            logoVisible: false,
          }}
          mapConfig={mapConfig}
          onSceneLoaded={(upScene: Scene) => {
            const layer = createDistrict({ type, scene: upScene, layerConfig });
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
            {...attach}
            style={{ ...defaultAttachConfig.style, ...attach.style }}
            className={attach.className}
            option={{
              logoVisible: false,
            }}
            mapConfig={{ ...defaultAttachConfig.mapConfig, ...attach.mapConfig }}
            onSceneLoaded={(attachScene) => {
              setAttachScene(attachScene);
              setAttachLayer(
                createDistrict({
                  scene: attachScene,
                  type: attach.type || type,
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
