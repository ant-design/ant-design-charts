import type { IThemeLoadResult } from "../../features/theme/loader";
import { type IMdTransformerOptions, type IMdTransformerResult } from './transformer';
interface IMdLoaderDefaultModeOptions extends Omit<IMdTransformerOptions, 'fileAbsPath'> {
    mode?: 'markdown';
    builtins: IThemeLoadResult['builtins'];
    onResolveDemos?: (demos: NonNullable<IMdTransformerResult['meta']['demos']>) => void;
    onResolveAtomMeta?: (atomId: string, meta: IMdTransformerResult['meta']['frontmatter']) => void;
    disableLiveDemo: boolean;
}
interface IMdLoaderDemosModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'meta';
}
interface IMdLoaderDemoModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'demo';
}
interface IMdLoaderDemoIndexModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'demo-index';
}
interface IMdLoaderFrontmatterModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'frontmatter';
}
interface IMdLoaderTextModeOptions extends Omit<IMdLoaderDefaultModeOptions, 'builtins' | 'mode'> {
    mode: 'text';
}
export type IMdLoaderOptions = IMdLoaderDefaultModeOptions | IMdLoaderDemosModeOptions | IMdLoaderDemoModeOptions | IMdLoaderFrontmatterModeOptions | IMdLoaderTextModeOptions | IMdLoaderDemoIndexModeOptions;
export default function mdLoader(this: any, content: string): void;
export {};
