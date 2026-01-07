import type { CallableObject, Vector2 } from '../../../types';
import type { AxisDatumCP, AxisStyleProps, Direction, RequiredArcAxisStyleProps, RequiredAxisStyleProps } from '../types';
export declare function getCallbackStyle<T extends {
    [keys: string]: any;
}, P extends Array<any> = []>(style: CallableObject<T, AxisDatumCP<P>>, params: AxisDatumCP<P>): {
    [k: string]: any;
};
export declare function baseDependencies(attr: Required<AxisStyleProps>): any[];
export declare function filterExec<T>(data: T[], filter?: (...args: any) => boolean): T[];
/** ---- to avoid cycle dependency */
export declare function getLineAngle(value: number, attr: RequiredArcAxisStyleProps): number;
export declare function getLineTangentVector(value: number, attr: RequiredAxisStyleProps): Vector2;
export declare function getDirectionVector(value: number, direction: Direction, attr: RequiredAxisStyleProps): Vector2;
export declare function getLabelVector(value: number, attr: Required<AxisStyleProps>): Vector2;
