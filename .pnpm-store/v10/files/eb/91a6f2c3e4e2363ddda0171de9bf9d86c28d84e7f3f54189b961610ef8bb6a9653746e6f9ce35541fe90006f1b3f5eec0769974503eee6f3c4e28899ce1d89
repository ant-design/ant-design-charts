import { Options, Transformation, Vector2, Vector } from './type';
export declare class Coordinate {
    private output;
    private input;
    private options;
    private transformers;
    /**
     * Create a new Coordinate Object.
     * @param options Custom options
     */
    constructor(options?: Partial<Options>);
    /**
     * Update options and inner state.
     * @param options Options to be updated
     */
    update(options: Partial<Options>): void;
    /**
     * Returns a new Coordinate with same options.
     * @returns Coordinate
     */
    clone(): Coordinate;
    /**
     * Returns current options.
     * @returns options
     */
    getOptions(): Options;
    /**
     * Clear transformations and update.
     */
    clear(): void;
    /**
     * Returns the size of the bounding box of the coordinate.
     * @returns [width, height]
     */
    getSize(): [number, number];
    /**
     * Returns the center of the bounding box of the coordinate.
     * @returns [centerX, centerY, centerZ]
     */
    getCenter(): [number, number];
    /**
     * Add selected transformation.
     * @param args transform type and params
     * @returns Coordinate
     */
    transform(...args: Transformation): this;
    /**
     * Apples transformations for the current vector.
     * @param vector original vector2
     * @returns transformed vector2
     */
    map(vector: Vector2 | Vector): Vector2 | Vector;
    /**
     * Apples invert transformations for the current vector.
     * @param vector transformed vector2
     * @param vector original vector2
     */
    invert(vector: Vector2 | Vector): Vector2 | Vector;
    private recoordinate;
    private compose;
    private createMatrixTransform;
}
