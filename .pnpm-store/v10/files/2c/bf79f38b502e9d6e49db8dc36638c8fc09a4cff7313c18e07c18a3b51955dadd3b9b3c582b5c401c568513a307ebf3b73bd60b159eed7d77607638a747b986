import { RunLoaderResult } from 'loader-runner';
import { Piscina } from 'piscina';
import { RunLoadersOptions } from '.';
export declare function createParallelLoader<T>(renderPath: string): Piscina<
  {
    filename: string;
    content?: string | undefined;
    opts?: T | undefined;
    extOpts: RunLoadersOptions;
  },
  RunLoaderResult & {
    missingDependencies: string[];
  }
>;
