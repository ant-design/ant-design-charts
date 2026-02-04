import { TransformComponent as TC, G2Mark } from '../runtime';
import { GroupTransform } from '../spec';
export type GroupOptions = Omit<GroupTransform & {
    groupBy?: (I: number[], mark: G2Mark, options?: Record<string, any>) => number[][];
}, 'type'>;
/**
 * The Group transform group data by x and y channels, and aggregate.
 */
export declare const Group: TC<GroupOptions>;
