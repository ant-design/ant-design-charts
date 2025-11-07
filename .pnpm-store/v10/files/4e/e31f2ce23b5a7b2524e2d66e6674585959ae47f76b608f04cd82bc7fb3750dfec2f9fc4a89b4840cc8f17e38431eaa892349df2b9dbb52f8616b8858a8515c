import type { Stats } from '@umijs/bundler-webpack/compiled/webpack';
interface ISizes {
    root: string;
    sizes: Record<string, number>;
}
export declare function printFileSizesAfterBuild(opts: {
    webpackStats: Stats;
    previousSizeMap: ISizes;
    buildFolder: string;
    suggestMaxSize?: number;
}): void;
export declare function measureFileSizesBeforeBuild(dir: string): ISizes;
export {};
