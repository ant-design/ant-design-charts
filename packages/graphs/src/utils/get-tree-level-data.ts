import { Datum } from '../interface';

/**
 * 根据 level 获取相关数据
 */
export const getTreeLevelData = (data: Datum, level: number): Datum => {
  const { children = [], g_level = 0 } = data;
  if (level <= 0) {
    return data;
  }
  return {
    ...data,
    children:
      g_level + 1 < level
        ? children?.map((item: Datum) => {
            return getTreeLevelData(item, level);
          })
        : [],
  };
};
