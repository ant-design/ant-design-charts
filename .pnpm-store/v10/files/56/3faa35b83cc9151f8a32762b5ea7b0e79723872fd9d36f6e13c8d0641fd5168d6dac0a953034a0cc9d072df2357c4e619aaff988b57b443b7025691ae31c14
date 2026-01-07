/// <reference types="gl-matrix" />
/// <reference types="gl-matrix" />
import { Vector3, Vector, Options3D, Transformation3D } from './type';
export declare class Coordinate3D {
    private output;
    private input;
    private options;
    private transformers;
    /**
     * Create a new Coordinate Object.
     * @param options Custom options
     */
    constructor(options?: Partial<Options3D>);
    /**
     * Update options and inner state.
     * @param options Options to be updated
     */
    update(options: Partial<Options3D>): void;
    /**
     * Returns a new Coordinate with same options.
     * @returns Coordinate
     */
    clone(): Coordinate3D;
    /**
     * Returns current options.
     * @returns options
     */
    getOptions(): Options3D;
    /**
     * Clear transformations and update.
     */
    clear(): void;
    /**
     * Returns the size of the bounding box of the coordinate.
     * @returns [width, height, depth]
     */
    getSize(): [number, number, number];
    /**
     * Returns the center of the bounding box of the coordinate.
     * @returns [centerX, centerY, centerZ]
     */
    getCenter(): [number, number, number];
    /**
     * Add selected transformation.
     * @param args transform type and params
     * @returns Coordinate
     */
    transform(...args: Transformation3D): this;
    /**
     * Apples transformations for the current vector.
     * @param vector original vector3
     * @returns transformed vector3
     */
    map(vector: Vector3 | Vector): import("gl-matrix").vec3 | Vector;
    /**
     * Apples invert transformations for the current vector.
     * @param vector transformed vector3
     * @param vector original vector3
     */
    invert(vector: Vector3 | Vector): import("gl-matrix").vec3 | Vector;
    private recoordinate;
    private compose;
    private createMatrixTransform;
}
