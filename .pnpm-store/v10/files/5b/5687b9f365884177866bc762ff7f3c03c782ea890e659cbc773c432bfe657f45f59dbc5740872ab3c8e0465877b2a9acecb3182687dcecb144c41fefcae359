import { isFunction } from '@antv/util';
import type { CallableObject, Vector2 } from '../../../types';
import { degToRad, getCallbackValue, normalize, vertical } from '../../../util';
import type {
  AxisDatumCP,
  AxisStyleProps,
  Direction,
  RequiredArcAxisStyleProps,
  RequiredAxisStyleProps,
} from '../types';

export function getCallbackStyle<T extends { [keys: string]: any }, P extends Array<any> = []>(
  style: CallableObject<T, AxisDatumCP<P>>,
  params: AxisDatumCP<P>
) {
  return Object.fromEntries(
    Object.entries(style).map(([key, val]) => {
      return [key, getCallbackValue(val as any, params)];
    })
  );
}

export function baseDependencies(attr: Required<AxisStyleProps>): any[] {
  if (attr.type === 'linear') {
    const { startPos, endPos } = attr;
    return [...startPos, ...endPos];
  }
  const { startAngle, endAngle, center, radius } = attr;
  return [startAngle, endAngle, ...center, radius];
}

export function filterExec<T>(data: T[], filter?: (...args: any) => boolean): T[] {
  return !!filter && isFunction(filter) ? data.filter(filter) : data;
}

/** ---- to avoid cycle dependency */

export function getLineAngle(value: number, attr: RequiredArcAxisStyleProps) {
  const { startAngle, endAngle } = attr;
  return (endAngle - startAngle) * value + startAngle;
}

export function getLineTangentVector(value: number, attr: RequiredAxisStyleProps) {
  if (attr.type === 'linear') {
    const {
      startPos: [startX, startY],
      endPos: [endX, endY],
    } = attr;
    const [dx, dy] = [endX - startX, endY - startY];
    return normalize([dx, dy]);
  }
  const angle = degToRad(getLineAngle(value, attr));
  return [-Math.sin(angle), Math.cos(angle)] as Vector2;
}

export function getDirectionVector(value: number, direction: Direction, attr: RequiredAxisStyleProps): Vector2 {
  const tangentVector = getLineTangentVector(value, attr);
  return vertical(tangentVector, direction !== 'positive') as Vector2;
}

export function getLabelVector(value: number, attr: Required<AxisStyleProps>) {
  return getDirectionVector(value, attr.labelDirection, attr);
}
