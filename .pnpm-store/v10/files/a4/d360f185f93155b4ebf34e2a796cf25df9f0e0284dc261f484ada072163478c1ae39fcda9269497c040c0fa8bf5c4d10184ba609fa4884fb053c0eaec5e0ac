import type { AnyLayer } from '..';
import { Group } from '../models';
export interface Options {
    postTransform?: (group: AnyLayer) => AnyLayer;
    getGroupName: (node: Element) => string;
}
/**
 * 将一个节点和其包含的所有子级转为 Group 对象
 * @param node
 * @param options
 */
declare const nodeToGroup: (node: Element, options?: Options) => Promise<Group>;
export default nodeToGroup;
