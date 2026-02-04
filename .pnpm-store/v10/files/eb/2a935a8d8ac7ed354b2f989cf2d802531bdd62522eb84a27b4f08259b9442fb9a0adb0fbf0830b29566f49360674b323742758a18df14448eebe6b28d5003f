import { Graph } from '@antv/g6';
import type { GraphinProps } from '../types';
/**
 * Hook for creating and managing a G6 graph instance.
 * @param props The props for the Graphin component.
 * @returns An object containing the graph instance, the container ref, and a boolean indicating whether the graph is ready.
 */
export default function useGraph<P extends GraphinProps>(props: P): {
    graph: Graph | null;
    containerRef: import("react").MutableRefObject<HTMLDivElement | null>;
    isReady: boolean;
};
