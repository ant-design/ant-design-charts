import type { PathArray } from '../types';

/**
 * The `PathParser` is used by the `parsePathString` static method
 * to generate a `pathArray`.
 */
export class PathParser {
  pathValue: string;

  segments: PathArray;

  max: number;

  index: number;

  param: number;

  segmentStart: number;

  data: any;

  err: string;

  constructor(pathString: string) {
    this.pathValue = pathString;
    // @ts-ignore
    this.segments = [];
    this.max = pathString.length;
    this.index = 0;
    this.param = 0.0;
    this.segmentStart = 0;
    this.data = [];
    this.err = '';
  }
}
