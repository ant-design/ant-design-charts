import type { Graph, GraphOptions } from '@antv/g6';
export interface GraphinProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'id' | 'className' | 'style'> {
    /**
     * The options for the G6 graph instance.
     */
    options?: GraphOptions;
    /**
     * Callback for when the graph is initialized, after new Graph().
     */
    onInit?: (graph: Graph) => void;
    /**
     * Callback for when the graph is ready, after graph.render().
     */
    onReady?: (graph: Graph) => void;
    /**
     * Callback for when the graph is destroyed, after graph.destroy().
     */
    onDestroy?: () => void;
}
export interface GraphinContextProps {
    /**
     * The G6 graph instance.
     */
    graph: Graph | null;
    /**
     * Whether the graph is ready.
     */
    isReady: boolean;
}
