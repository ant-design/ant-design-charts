export declare type IPoint = { x: number; y: number };

export interface ICenterPoint {
  cx: number;
  cy: number;
}

export interface IRectangle extends IPoint {
  width: number;
  height: number;
}

export interface IRectangle2 extends IRectangle {
  x2: number;
  y2: number;
}

export interface ILine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface ICircle extends ICenterPoint {
  radius: number;
}

export function rect(x: number, y: number, width: number, height: number): IRectangle {
  return { x, y, width, height };
}

export function circle(cx: number, cy: number, radius: number): ICircle {
  return { cx, cy, radius };
}

export function line(x1: number, y1: number, x2: number, y2: number): ILine {
  return { x1, y1, x2, y2 };
}

export function point(x: number, y: number) {
  return { x, y };
}
