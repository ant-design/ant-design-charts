import { CoordinateComponent as CC } from '../runtime';
import { PolarCoordinate } from '../spec';
export type PolarOptions = Omit<PolarCoordinate, 'type'>;
export declare const getPolarOptions: (options?: PolarOptions) => {
    startAngle: number;
    endAngle: number;
    transform?: import("../spec").CoordinateTransform[];
    innerRadius: number;
    outerRadius: number;
};
/**
 * Polar transformation for circular charts using center of canvas as origin.
 * @todo Adjust size of canvas by startAngle and endAngle to make chart as big as possible.
 */
export declare const Polar: CC<PolarOptions>;
