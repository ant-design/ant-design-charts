/// <reference types="react" />
import type { AgnosticComponentType, IDemoData } from './types';
export interface UseRendererOptions {
    id: string;
    component?: AgnosticComponentType;
    renderOpts: IDemoData['renderOpts'];
    onResolved?: () => void;
}
export declare const useRenderer: ({ id, component, renderOpts, onResolved, }: UseRendererOptions) => {
    canvasRef: import("react").RefObject<HTMLDivElement>;
    setComponent: import("react").Dispatch<import("react").SetStateAction<AgnosticComponentType | null>>;
};
