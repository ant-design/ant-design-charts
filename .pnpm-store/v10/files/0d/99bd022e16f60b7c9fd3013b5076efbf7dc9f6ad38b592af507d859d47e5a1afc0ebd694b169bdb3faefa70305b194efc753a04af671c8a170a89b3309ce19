import type { IApi } from '../types';
interface IRouteExportExtractor {
    api: IApi;
    entryFile: string;
}
interface IRouteExportExtractorGenTmpFileOpts extends IRouteExportExtractor {
    propertyName: string;
}
interface IRouteExportExtractorSetupBuilderOpts extends IRouteExportExtractor {
    outFile: string;
}
declare type ISetupRouteExportExtractorOpts = IRouteExportExtractorGenTmpFileOpts & IRouteExportExtractorSetupBuilderOpts;
export declare function setupRouteExportExtractor(opts: ISetupRouteExportExtractorOpts): void;
export {};
