import type webpack from "webpack";
import { BundleOptions } from "./types";
export type WebpackConfig = Pick<webpack.Configuration, "name" | "entry" | "mode" | "module" | "resolve" | "externals" | "output" | "target" | "devtool" | "optimization" | "plugins" | "stats"> & {
    compatMode: true;
};
export declare function compatOptionsFromWebpack(webpackConfig: WebpackConfig): BundleOptions;
