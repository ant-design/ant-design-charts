import type { sync } from 'enhanced-resolve';
import type { Root } from 'hast';
import type { Transformer } from 'unified';
import type { IMdTransformerOptions } from '.';
export declare const DEMO_PROP_VALUE_KEY = "$demo-prop-value-key";
export declare const DUMI_DEMO_TAG = "DumiDemo";
export declare const DUMI_DEMO_GRID_TAG = "DumiDemoGrid";
export declare const SKIP_DEMO_PARSE = "pure";
type IRehypeDemoOptions = Pick<IMdTransformerOptions, 'techStacks' | 'cwd' | 'fileAbsPath' | 'resolve'> & {
    resolver: typeof sync;
    fileLocaleLessPath: string;
    fileLocale?: string;
};
export default function rehypeDemo(opts: IRehypeDemoOptions): Transformer<Root>;
export {};
