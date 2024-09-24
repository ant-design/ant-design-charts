import type { Point, PolylineStyleProps } from '@antv/g6';
import { Polyline } from '@antv/g6';

export class IndentedEdge extends Polyline {
  getControlPoints(attributes: Required<PolylineStyleProps>): Point[] {
    const [sourcePoint, targetPoint] = this.getEndpoints(attributes, false);
    const [sx] = sourcePoint;
    const [, ty] = targetPoint;
    return [[sx, ty]];
  }
}
