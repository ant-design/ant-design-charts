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

export type { ContainerConfig as MapContainerConfig, PlotRef } from './types';

export { default as DotMap } from './components/dot-map';
export type { DotMapConfig } from './components/dot-map';
export { default as Heatmap } from './components/heat-map';
export type { HeatMapConfig } from './components/heat-map';
export { default as GridMap } from './components/grid-map';
export type { GridMapConfig } from './components/grid-map';
export { default as HexbinMap } from './components/hexbin-map';
export type { HexbinMapConfig } from './components/hexbin-map';
export { default as PathMap } from './components/path-map';
export type { PathMapConfig } from './components/path-map';
export { default as FlowMap } from './components/flow-map';
export type { FlowMapConfig } from './components/flow-map';
export { default as AreaMap } from './components/area-map';
export type { AreaMapConfig } from './components/area-map';
export { default as ChoroplethMap } from './components/choropleth-map';
export type { ChoroplethMapConfig } from './components/choropleth-map';
