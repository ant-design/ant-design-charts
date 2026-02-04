import { Marker } from '../marker';

/**
 * 将值转换至步长tick上
 */
export function getStepValueByValue(value: number, step: number, min: number) {
  const count = Math.round((value - min) / step);
  return min + count * step;
}

export function hiddenHandle(x: number, y: number, r: number) {
  // 长宽比
  const ratio = 1.4;
  const diffY = ratio * r;
  return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x + r, y + diffY], ['L', x - r, y + diffY], ['Z']];
}

// 控制手柄
const HANDLE_HEIGHT_RATIO = 1.4;
const HANDLE_TRIANGLE_RATIO = 0.4;

// 纵向手柄
export function verticalHandle(x: number, y: number, r: number) {
  const width = r;
  const height = width * HANDLE_HEIGHT_RATIO;
  const halfWidth = width / 2;
  const oneSixthWidth = width / 6;
  const triangleX = x + height * HANDLE_TRIANGLE_RATIO;
  return [
    ['M', x, y],
    ['L', triangleX, y + halfWidth],
    ['L', x + height, y + halfWidth],
    ['L', x + height, y - halfWidth],
    ['L', triangleX, y - halfWidth],
    ['Z'],
    // 绘制两条横线
    ['M', triangleX, y + oneSixthWidth],
    ['L', x + height - 2, y + oneSixthWidth],
    ['M', triangleX, y - oneSixthWidth],
    ['L', x + height - 2, y - oneSixthWidth],
  ];
}

// 横向手柄
export function horizontalHandle(x: number, y: number, r: number) {
  const width = r;
  const height = width * HANDLE_HEIGHT_RATIO;
  const halfWidth = width / 2;
  const oneSixthWidth = width / 6;
  const triangleY = y + height * HANDLE_TRIANGLE_RATIO;
  return [
    ['M', x, y],
    ['L', x - halfWidth, triangleY],
    ['L', x - halfWidth, y + height],
    ['L', x + halfWidth, y + height],
    ['L', x + halfWidth, triangleY],
    ['Z'],
    // 绘制两条竖线
    ['M', x - oneSixthWidth, triangleY],
    ['L', x - oneSixthWidth, y + height - 2],
    ['M', x + oneSixthWidth, triangleY],
    ['L', x + oneSixthWidth, y + height - 2],
  ];
}

Marker.registerSymbol('hiddenHandle', hiddenHandle);
Marker.registerSymbol('verticalHandle', verticalHandle);
Marker.registerSymbol('horizontalHandle', horizontalHandle);

export const ifH = (orientation = 'horizontal', a: any, b: any) => (orientation === 'horizontal' ? a : b);

// 具体逻辑还没看，@chushen
export function getSafetySelections(
  domain: [number, number],
  newSelection: [number, number],
  oldSelection: [number, number],
  precision: number = 4
) {
  const [min, max] = domain;
  const [start, end] = newSelection;
  const [prevStart, prevEnd] = oldSelection;
  let [startVal, endVal] = [start, end];
  const range = endVal - startVal;
  // 交换startVal endVal
  if (startVal > endVal) {
    [startVal, endVal] = [endVal, startVal];
  }
  // 超出范围就全选
  if (range > max - min) {
    return [min, max];
  }

  if (startVal < min) {
    if (prevStart === min && prevEnd === endVal) {
      return [min, endVal];
    }
    return [min, range + min];
  }
  if (endVal > max) {
    if (prevEnd === max && prevStart === startVal) {
      return [startVal, max];
    }
    return [max - range, max];
  }

  // 保留小数
  return [startVal, endVal];
}

export function ifHorizontal<T>(orientation: string = 'horizontal', a: T, b: T): T {
  return orientation === 'horizontal' ? a : b;
}
