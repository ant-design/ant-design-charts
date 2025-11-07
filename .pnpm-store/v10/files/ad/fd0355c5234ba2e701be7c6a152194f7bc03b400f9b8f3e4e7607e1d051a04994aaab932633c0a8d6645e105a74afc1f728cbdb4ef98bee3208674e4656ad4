import { Primitive } from '@antv/vendor/d3-array';
import { TabularData, G2Mark } from '../../runtime';
export type IndexComparatorFactory = (data: TabularData, Y: Primitive[], S: Primitive[]) => IndexComparator;
export type IndexComparator = (i: number, j: number) => number;
export type Order = 'value' | 'sum' | 'series' | 'maxIndex' | string[] | ((data: Record<string, Primitive>) => Primitive);
export declare function createGroups(groupBy: string | string[], I: number[], mark: G2Mark): number[][];
export declare function normalizeComparator(order: Order): IndexComparatorFactory | null;
export declare function applyOrder(groups: number[][], comparator: IndexComparator): void;
export declare function domainOf(value: Primitive[], scale: Record<string, any>): any;
