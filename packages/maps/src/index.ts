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
export { default as HexagonMap, HexagonMapConfig } from './components/HexagonMap';
export { default as AreaMap, AreaMapConfig } from './components/AreaMap';
export { default as ChoroplethMap, ChoroplethMapConfig } from './components/ChoroplethMap';
