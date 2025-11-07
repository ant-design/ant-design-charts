import { ExtensionController } from '../registry/extension';
import type { CustomTransformOption, TransformOptions } from '../spec/transform';
import { BaseTransform } from '../transforms';
import type { RuntimeContext } from './types';
export declare const REQUIRED_TRANSFORMS: TransformOptions;
export declare class TransformController extends ExtensionController<BaseTransform<CustomTransformOption>> {
    category: "transform";
    constructor(context: RuntimeContext);
    protected getTransforms(): void;
    setTransforms(transforms: TransformOptions): void;
    getTransformInstance(): Record<string, BaseTransform>;
    getTransformInstance(key: string): BaseTransform;
}
