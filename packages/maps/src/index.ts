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

export { default as DotMap, DotMapConfig } from './components/dot-map';
export { default as HeatMap, HeatMapConfig } from './components/heat-map';
export { default as GridMap, GridMapConfig } from './components/grid-map';
export { default as HexbinMap, HexbinMapConfig } from './components/hexbin-map';
export { default as PathMap, PathMapConfig } from './components/path-map';
export { default as FlowMap, FlowMapConfig } from './components/flow-map';
export { default as AreaMap, AreaMapConfig } from './components/area-map';
export { default as ChoroplethMap, ChoroplethMapConfig } from './components/choropleth-map';
