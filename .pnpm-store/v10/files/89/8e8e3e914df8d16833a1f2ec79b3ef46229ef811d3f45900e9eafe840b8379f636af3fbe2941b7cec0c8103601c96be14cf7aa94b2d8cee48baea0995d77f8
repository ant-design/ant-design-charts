import type { PathArray } from '@antv/util';
/** -- Closable path ------------------------------------------------------------------------------- */
type SymbolFactor = (x: number, y: number, r: number) => PathArray;
/**
 * ○
 */
export const circle: SymbolFactor = (x, y, r) => {
  return [['M', x - r, y], ['A', r, r, 0, 1, 0, x + r, y], ['A', r, r, 0, 1, 0, x - r, y], ['Z']];
};

/**
 * Cname circle to point.
 */
export const point = circle;

/**
 * □
 */
export const square: SymbolFactor = (x, y, r) => {
  return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
};

/**
 * ◇
 */
export const diamond: SymbolFactor = (x, y, r) => {
  return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
};

/**
 * △
 */
export const triangle: SymbolFactor = (x, y, r) => {
  const diffY = r * Math.sin((1 / 3) * Math.PI);
  return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
};

/**
 * ▽
 */
export const triangleDown: SymbolFactor = (x, y, r) => {
  const diffY = r * Math.sin((1 / 3) * Math.PI);
  return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
};

/**
 * ⬡
 */
export const hexagon: SymbolFactor = (x, y, r) => {
  const diffX = (r / 2) * Math.sqrt(3);
  return [
    ['M', x, y - r],
    ['L', x + diffX, y - r / 2],
    ['L', x + diffX, y + r / 2],
    ['L', x, y + r],
    ['L', x - diffX, y + r / 2],
    ['L', x - diffX, y - r / 2],
    ['Z'],
  ];
};

/**
 * ▷◁
 */
export const bowtie: SymbolFactor = (x, y, r) => {
  const diffY = r - 1.5;
  return [['M', x - r, y - diffY], ['L', x + r, y + diffY], ['L', x + r, y - diffY], ['L', x - r, y + diffY], ['Z']];
};

/** -- 非闭合图形 ------------------------------------------------------------------------------- */

/**
 * |
 */
export const line: SymbolFactor = (x, y, r) => {
  return [
    ['M', x, y + r],
    ['L', x, y - r],
  ];
};

/**
 * ✕
 */
export const cross: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y - r],
    ['L', x + r, y + r],
    ['M', x + r, y - r],
    ['L', x - r, y + r],
  ];
};

/**
 * 工
 */
export const tick: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r / 2, y - r],
    ['L', x + r / 2, y - r],
    ['M', x, y - r],
    ['L', x, y + r],
    ['M', x - r / 2, y + r],
    ['L', x + r / 2, y + r],
  ];
};

/**
 * +
 */
export const plus: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['L', x + r, y],
    ['M', x, y - r],
    ['L', x, y + r],
  ];
};

/**
 * -
 */
export const hyphen: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['L', x + r, y],
  ];
};

/** -- 用于图例的 marker ------------------------------------------------------------------------------- */

/**
 * ---
 */
export const dot: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['L', x + r, y],
  ];
};

export const dash = dot;

export const smooth: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['A', r / 2, r / 2, 0, 1, 1, x, y],
    ['A', r / 2, r / 2, 0, 1, 0, x + r, y],
  ];
};

export const hv: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r - 1, y - 2.5],
    ['L', x, y - 2.5],
    ['L', x, y + 2.5],
    ['L', x + r + 1, y + 2.5],
  ];
};

export const vh: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - r - 1, y + 2.5],
    ['L', x, y + 2.5],
    ['L', x, y - 2.5],
    ['L', x + r + 1, y - 2.5],
  ];
};

export const hvh: SymbolFactor = (x, y, r) => {
  return [
    ['M', x - (r + 1), y + 2.5],
    ['L', x - r / 2, y + 2.5],
    ['L', x - r / 2, y - 2.5],
    ['L', x + r / 2, y - 2.5],
    ['L', x + r / 2, y + 2.5],
    ['L', x + r + 1, y + 2.5],
  ];
};

export function vhv(x: number, y: number) {
  // 宽 13px，高 8px
  return [
    ['M', x - 5, y + 2.5],
    ['L', x - 5, y],
    ['L', x, y],
    ['L', x, y - 3],
    ['L', x, y + 3],
    ['L', x + 6.5, y + 3],
  ];
}

/** --------------------------------------------------------------------------------- */

export const button: SymbolFactor = (x, y, r) => {
  return [['M', x - r, y - r], ['L', x + r, y], ['L', x - r, y + r], ['Z']];
};

export const focus: SymbolFactor = (x, y, r) => {
  const outerRadius = r;
  const innerRadius = r * 0.2;
  const crossLength = r * 0.7;

  return [
    // 外圆
    ['M', x - outerRadius, y],
    ['A', outerRadius, outerRadius, 0, 1, 0, x + outerRadius, y],
    ['A', outerRadius, outerRadius, 0, 1, 0, x - outerRadius, y],
    ['Z'],
    // 水平十字线 (简单线条)
    ['M', x - crossLength, y],
    ['L', x - innerRadius, y],
    ['M', x + innerRadius, y],
    ['L', x + crossLength, y],
    // 垂直十字线 (简单线条)
    ['M', x, y - crossLength],
    ['L', x, y - innerRadius],
    ['M', x, y + innerRadius],
    ['L', x, y + crossLength],
  ];
};
