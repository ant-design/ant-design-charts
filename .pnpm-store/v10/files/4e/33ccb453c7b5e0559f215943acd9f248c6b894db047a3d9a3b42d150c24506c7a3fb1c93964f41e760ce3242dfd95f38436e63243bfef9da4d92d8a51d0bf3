import * as loaderRunner from 'loader-runner';
export interface RunLoadersOptions {
  root: string;
  alias?: Record<string, string>;
}
export declare function runLoaders(
  options: {
    resource: string;
    loaders: any[];
    processResource?: (ctx: any, resource: string, callback: any) => void;
  } & RunLoadersOptions,
): Promise<
  loaderRunner.RunLoaderResult & {
    missingDependencies: string[];
  }
>;
export type RunLoaderResult = loaderRunner.RunLoaderResult;
export * from './parallelLoader';
