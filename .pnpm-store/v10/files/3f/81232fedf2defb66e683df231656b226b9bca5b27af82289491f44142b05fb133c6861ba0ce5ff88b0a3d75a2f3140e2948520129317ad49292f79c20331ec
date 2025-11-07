import { parseCodeFrontmatter } from "../utils";
import type { ExampleBlockAsset } from 'dumi-assets-types';
import type { sync } from 'enhanced-resolve';
import { IDumiTechStack } from '../types';
export interface IParsedBlockAsset {
    asset: ExampleBlockAsset;
    /**
     * resolveMap: {
     *   '@/constants': '/path/to/constants.ts',
     *   'antd/es/button': '/path/to/antd/es/button/index.jsx',
     * }
     */
    resolveMap: Record<string, string>;
    frontmatter: ReturnType<typeof parseCodeFrontmatter>['frontmatter'];
}
declare function parseBlockAsset(opts: {
    fileAbsPath: string;
    fileLocale?: string;
    id: string;
    refAtomIds: string[];
    entryPointCode?: string;
    resolver: typeof sync;
    techStack: IDumiTechStack;
}): Promise<IParsedBlockAsset>;
export default parseBlockAsset;
