import { Coordinate } from '@antv/coord';
import { Vector2 } from '../../../runtime';
export type LabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inside' | 'outside' | 'area' | 'spider' | 'surround';
export declare function inferNonCircularStyle(position: LabelPosition, points: Vector2[], value: Record<string, any>, coordinate: Coordinate): any;
export declare function inferRadialStyle(position: LabelPosition, points: Vector2[], value: Record<string, any>, coordinate: Coordinate): {
    textAlign: string;
    textBaseline: string;
    rotate: number;
    x: number;
    y: number;
};
export declare function pointOfArc(center: Vector2, angle: any, radius: any): Vector2;
export declare function inferRotation(angle: any, autoRotate: any, rotateToAlignArc: any): number;
export declare function inferIdentityStyle(position: any, points: any, value: any, coordinate: any): {
    x: any;
    y: any;
};
export declare function getDefaultStyle(position: LabelPosition, points: Vector2[], value: Record<string, any>, coordinate: Coordinate): any;
