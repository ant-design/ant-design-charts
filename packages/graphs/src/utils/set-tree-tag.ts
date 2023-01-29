import { prefix } from '../constants';
import { TreeGraphData } from '../interface';

/**
 * 对数据进行打标，加上 level 和  parentId
 */
export const setTreeTag = (data: TreeGraphData, level = 0, parentId = '', path: string = '') => {
  const { id, children = [] } = data;
  return {
    [`${prefix}_level`]: level,
    [`${prefix}_parentId`]: parentId,
    [`${prefix}_currentPath`]: path,
    ...data,
    children: children?.map((item: TreeGraphData, index: number) => {
      return setTreeTag(item, level + 1, parentId ? `${parentId}-${id}` : id, `${path}-${index}`);
    }),
  };
};
