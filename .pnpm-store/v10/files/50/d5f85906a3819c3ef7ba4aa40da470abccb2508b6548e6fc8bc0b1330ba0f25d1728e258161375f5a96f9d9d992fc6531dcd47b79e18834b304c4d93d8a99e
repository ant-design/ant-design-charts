import type { DisplayObject } from '../display-objects';
import type { GlobalRuntime } from '../global-runtime';
import type { BaseStyleProps } from '../types';
import type { PropertyMetadata, PropertyParseOptions, StyleValueRegistry } from './interfaces';
export type CSSGlobalKeywords = 'unset' | 'initial' | 'inherit' | '';
/**
 * Blink used them in code generation(css_properties.json5)
 */
export declare const BUILT_IN_PROPERTIES: PropertyMetadata[];
export declare const propertyMetadataCache: Record<string, PropertyMetadata>;
export declare class DefaultStyleValueRegistry implements StyleValueRegistry {
    private runtime;
    constructor(runtime: GlobalRuntime);
    registerMetadata(metadata: PropertyMetadata): void;
    getPropertySyntax(syntax: string): any;
    /**
     * * parse value, eg.
     * fill: 'red' => CSSRGB
     * translateX: '10px' => CSSUnitValue { unit: 'px', value: 10 }
     * fontSize: '2em' => { unit: 'px', value: 32 }
     *
     * * calculate used value
     * * post process
     */
    processProperties(object: DisplayObject, attributes: BaseStyleProps, options?: Partial<PropertyParseOptions>): void;
    /**
     * update geometry when relative props changed,
     * eg. r of Circle, width/height of Rect
     */
    updateGeometry(object: DisplayObject): void;
    updateSizeAttenuation(node: DisplayObject, zoom: number): void;
}
//# sourceMappingURL=StyleValueRegistry.d.ts.map