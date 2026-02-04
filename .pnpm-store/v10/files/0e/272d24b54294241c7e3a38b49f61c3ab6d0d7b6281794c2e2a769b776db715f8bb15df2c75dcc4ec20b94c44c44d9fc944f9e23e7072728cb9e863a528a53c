import { AtomAsset, ExamplePresetAsset } from 'dumi-assets-types';
import type { TypeMap } from 'dumi-assets-types/typings/atom/props/types';
import { type FC } from 'react';
interface IAtomRendererProps {
    type: AtomAsset['type'];
    value: ExamplePresetAsset['value'];
    processor?: typeof builtInProcessor;
}
type Entity = TypeMap['element'] | TypeMap['function'] | TypeMap['dom'];
type Exports = Record<string, any>;
declare function builtInProcessor(entity: Entity, entryExports: Exports): any;
export declare const AtomRenderer: FC<IAtomRendererProps>;
export {};
