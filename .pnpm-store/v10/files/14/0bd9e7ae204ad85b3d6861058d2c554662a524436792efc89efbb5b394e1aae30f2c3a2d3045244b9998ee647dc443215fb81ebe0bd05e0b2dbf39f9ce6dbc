import groupToMap from './group-to-map';

export default <T>(data: T[], condition: ((v: T) => string) | string | string[]): T[][] => {
  if (!condition) {
    // 没有条件，则自身改成数组
    return [data];
  }
  const groups = groupToMap(data, condition) as { [key: string]: T };
  const array = [];
  for (const i in groups) {
    array.push(groups[i]);
  }
  return array;
};
