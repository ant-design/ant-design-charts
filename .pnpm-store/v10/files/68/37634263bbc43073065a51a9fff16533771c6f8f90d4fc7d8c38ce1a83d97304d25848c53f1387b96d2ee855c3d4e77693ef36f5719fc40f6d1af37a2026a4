import type { Point } from '../../types';
import { CrosshairBase } from './base';
import { CircleCrosshairOptions, CircleCrosshairStyleProps } from './types';
export type { CircleCrosshairStyleProps, CircleCrosshairOptions };
export declare class CircleCrosshair extends CrosshairBase<Required<CircleCrosshairStyleProps>> {
    static tag: string;
    protected static defaultOptions: {
        style: Partial<CircleCrosshairStyleProps>;
    };
    protected get crosshairPath(): any[];
    constructor(options: CircleCrosshairOptions);
    update(cfg: CircleCrosshairStyleProps): void;
    setPointer([x, y]: Point): void;
    protected adjustLayout(): void;
    private createCirclePath;
}
