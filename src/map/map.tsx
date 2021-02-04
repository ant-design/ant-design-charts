import React, { useRef, useEffect, useState } from 'react';
import { Scene, ISceneConfig } from '@antv/l7';
import { SceneContext } from './context';
import SceneComponent from './components/scene';
import { CreateDistrict, CreateMapBox } from './util';

// form L7
interface IMapOptions {}

interface IMapSceneConig {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  option?: Partial<ISceneConfig>;
  mapConfig?: IMapOptions;
  data: any[];
  onSceneLoaded?: (scene: Scene) => void;
}

const Map = (props: IMapSceneConig) => {
  const { mapConfig, option } = props;
  const [scene, setScene] = useState<Scene>();

  return (
    <SceneContext.Provider value={scene}>
      <SceneComponent
        {...props}
        option={{
          logoVisible: false,
          ...option,
        }}
        map={CreateMapBox(mapConfig)}
        onSceneLoaded={(scene) => {
          setScene(scene);
          CreateDistrict({ ...props, scene });
        }}
      />
    </SceneContext.Provider>
  );
};

export default Map;
