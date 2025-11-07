import { clone, isEqual, clamp } from '@antv/util';
import { catmullRom2Bezier } from '../../util';
import type { Data, Line, Point, Scales } from './types';

/**
 * 根据数据获得每条线各点x，y值
 */
export function dataToLines(data: Data, scales: Scales): Line[] {
  const { x, y } = scales;

  let [max, min] = (y.getOptions().range || [0, 0]) as [number, number];
  if (min > max) [min, max] = [max, min];

  return data.map((points) => {
    const lines = points.map((val: number, idx: number) => {
      return [x.map(idx), clamp(y.map(val), min, max)] as Point;
    });
    return lines;
  });
}

/**
 * 根据线的点数据生成折线path
 */
export function lineToLinePath(line: Line, reverse = false) {
  const M = reverse ? line.length - 1 : 0;
  const linePath = line.map((point: Point, idx: number) => [idx === M ? 'M' : 'L', ...point]) as any[];
  return reverse ? linePath.reverse() : linePath;
}

/**
 * 根据点数据生成曲线path
 * @param points 点数据
 * @param reverse 是否倒序生成
 */
export function lineToCurvePath(line: Line, reverse = false) {
  if (line.length <= 2) {
    return lineToLinePath(line);
  }
  const data = [];
  const len = line.length;
  for (let idx = 0; idx < len; idx += 1) {
    const point = reverse ? line[len - idx - 1] : line[idx];
    if (!isEqual(point, data.slice(-2))) {
      data.push(...point);
    }
  }
  const path = catmullRom2Bezier(data, false);
  if (reverse) {
    path.unshift(['M', ...line[len - 1]]);
  } else {
    path.unshift(['M', ...line[0]]);
  }
  return path as any[];
}

/**
 * 根据baseline将path闭合
 */
export function closePathByBaseLine(path: any[], width: number, baseline: number) {
  const closedPath = clone(path);
  closedPath.push(['L', width, baseline], ['L', 0, baseline], ['Z']);
  return closedPath;
}

/**
 * 将多条线的点数据生成区域path
 * 可以是折线或曲线
 */
export function linesToAreaPaths(lines: Line[], smooth: boolean, width: number, baseline: number) {
  return lines.map((line) => {
    return closePathByBaseLine(smooth ? lineToCurvePath(line) : lineToLinePath(line), width, baseline);
  });
}

/**
 * 生成折线堆叠区域封闭图形路径
 */
export function linesToStackAreaPaths(lines: Line[], width: number, baseline: number) {
  const paths: any[][] = [];
  for (let idx = lines.length - 1; idx >= 0; idx -= 1) {
    const currLine = lines[idx];
    const currCurvePath = lineToLinePath(currLine);
    let path: any[];
    if (idx === 0) {
      // 最底部的线直接与y=0连接成闭合区域
      path = closePathByBaseLine(currCurvePath, width, baseline);
    } else {
      // 计算下一根曲线的反向路径
      const belowLine = lines[idx - 1];
      const belowCurvePath = lineToLinePath(belowLine, true);
      belowCurvePath[0][0] = 'L';

      // 连接路径
      path = [...currCurvePath, ...belowCurvePath, ['Z']];
    }
    paths.push(path);
  }

  return paths;
}

/**
 * 生成曲线堆叠区域封闭图形路径
 */
export function linesToStackCurveAreaPaths(lines: Line[], width: number, baseline: number) {
  const paths: any[][] = [];
  for (let idx = lines.length - 1; idx >= 0; idx -= 1) {
    const currLine = lines[idx];
    const currCurvePath = lineToCurvePath(currLine);
    let path: any[];
    if (idx === 0) {
      // 最底部的线直接与y=0连接成闭合区域
      path = closePathByBaseLine(currCurvePath, width, baseline);
    } else {
      // 计算下一根曲线的反向路径
      const belowLine = lines[idx - 1];
      const belowCurvePath = lineToCurvePath(belowLine, true);

      /**
       * 将线条连接成闭合路径
       *  M C C C C C
       *  A ～ -> ～ B
       *  ⬆        ⬇
       *  D ～ <- ～ C
       *  C C C C C M
       *
       */
      const A = currLine[0];
      // const B = currLine[currLine.length - 1];
      // const C = belowLine[belowLine.length - 1];
      // const D = belowLine[0];

      // 将反向曲线开头 M X Y 改为 L X Y
      belowCurvePath[0][0] = 'L';
      // 连接路径
      path = [...currCurvePath, ...belowCurvePath, ['M', ...A], ['Z']];
    }
    paths.push(path);
  }
  return paths;
}
