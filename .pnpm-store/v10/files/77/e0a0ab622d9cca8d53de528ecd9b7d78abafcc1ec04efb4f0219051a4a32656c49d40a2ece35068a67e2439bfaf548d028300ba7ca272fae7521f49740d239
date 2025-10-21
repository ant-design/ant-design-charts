import { TransformComponent as TC } from '../runtime';
import { StackEnterTransform } from '../spec';
export type StackEnterOptions = Omit<StackEnterTransform, 'type'>;
/**
 * Group marks by channels into groups and stacking their enterDelay
 * to make marks show up groups by groups.
 * It will update enterDelay channel for each mark by its enterDuration and group.
 * @todo Support orderBy.
 * @todo Sort among groups(e.g. reverse).
 * @todo Stack enter in groups rather than between groups?
 * @todo Auto inter this statistic for scaleInY animation in stacked interval?
 * @todo All the groups shared the enterDuration?
 */
export declare const StackEnter: TC<StackEnterOptions>;
