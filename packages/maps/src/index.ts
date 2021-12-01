export {
  registerImage,
  registerImages,
  unregisterImage,
  registerFontFace,
  unregisterFontFace,
  registerIconFont,
  registerIconFonts,
  unregisterIconFont,
} from '@antv/l7plot';

export { ContainerConfig as MapContainerConfig, PlotRef } from './types';

export { default as DotMap, DotMapConfig } from './components/DotMap';
export { default as HeatMap, HeatMapConfig } from './components/HeatMap';
export { default as GridMap, GridMapConfig } from './components/GridMap';
export { default as HexbinMap, HexbinMapConfig } from './components/HexbinMap';
export { default as PathMap, PathMapConfig } from './components/PathMap';
export { default as FlowMap, FlowMapConfig } from './components/FlowMap';
export { default as AreaMap, AreaMapConfig } from './components/AreaMap';
export { default as ChoroplethMap, ChoroplethMapConfig } from './components/ChoroplethMap';
