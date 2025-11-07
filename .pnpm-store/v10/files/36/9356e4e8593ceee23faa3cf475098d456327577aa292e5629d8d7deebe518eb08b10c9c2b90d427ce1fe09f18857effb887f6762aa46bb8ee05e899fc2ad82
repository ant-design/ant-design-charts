import type { FlexElementConfig, FlexLayoutConfig } from './flex/types';
import type { GridContainerConfig, GridLayoutConfig } from './grid/types';
export type LayoutItem = DOMRect;
export type LayoutElementConfig = FlexElementConfig | GridContainerConfig;
export type LayoutConfig = FlexLayoutConfig | GridLayoutConfig;
export type LayoutType = LayoutConfig['display'];
export type LayoutReturns = DOMRect[];
export type LayoutExecuter<T extends LayoutConfig> = (container: LayoutItem, children: LayoutItem[], config: T) => LayoutReturns;
