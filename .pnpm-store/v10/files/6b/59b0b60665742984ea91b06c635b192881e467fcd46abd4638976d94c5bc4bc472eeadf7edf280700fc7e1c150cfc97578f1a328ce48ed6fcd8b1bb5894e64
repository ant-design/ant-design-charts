import type { Transformer } from "@jest/transform";
import { Options } from "@swc/core";
declare function createTransformer(swcTransformOpts?: Options & {
    experimental?: {
        customCoverageInstrumentation?: {
            enabled: boolean;
            coverageVariable?: string;
            compact?: boolean;
            reportLogic?: boolean;
            ignoreClassMethods?: Array<string>;
            instrumentLog?: {
                level: string;
                enableTrace: boolean;
            };
        };
    };
}): Transformer;
declare const _default: {
    createTransformer: typeof createTransformer;
};
export = _default;
