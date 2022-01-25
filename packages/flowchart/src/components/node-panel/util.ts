// 类型检测
export const isType = (value: any, type: string): boolean => {
  const { toString } = {};
  return toString.call(value) === `[object ${type}]`;
};

export const isNumber = (value: unknown) => {
  return isType(value, 'Number');
};

type IPath = [string, number, number, number, number];

// 创建节点路径
export const createPath = (paths: (string | number)[][], offsetX = 0, offsetY = 0) => {
  if (!paths.length) {
    return null;
  }
  let path = '';
  // @ts-ignore
  paths.forEach((item: IPath) => {
    const [c, x, y, c2x, c2y] = item;
    path += isNumber(y) ? ` ${c} ${x + offsetX} ${y + offsetY}` : ` ${c}`;
    if (c2y) {
      path += ` ${c2x + offsetX} ${c2y + offsetY}`;
    }
  });

  return path;
};

export const createRoundedPath = (paths: (string | number)[][]) => {
  if (!paths.length) {
    return null;
  }
  let path = '';
  // @ts-ignore
  paths.forEach((item) => {
    path += item.join(' ');
  });

  return path;
};

// 将16进制表示颜色转变为gba表示
// 例如 getGradientColor('#FF0000') ===> 'rgb(255, 0, 0)'
export const getGradientColor = (color) => {
  if (!color) return;
  const r = parseInt(color[1] + color[2], 16);
  const g = parseInt(color[3] + color[4], 16);
  const b = parseInt(color[5] + color[6], 16);
  return `rgb(${r}, ${g}, ${b})`;
};
