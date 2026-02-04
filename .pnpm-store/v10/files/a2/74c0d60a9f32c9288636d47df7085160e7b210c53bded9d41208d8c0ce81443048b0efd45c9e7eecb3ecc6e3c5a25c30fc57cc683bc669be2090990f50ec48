export declare const VACANT_EDGE_ID = -1;
export declare const VACANT_NODE_ID = -1;
export declare const VACANT_EDGE_LABEL = "-1";
export declare const VACANT_NODE_LABEL = "-1";
export declare const VACANT_GRAPH_ID = -1;
export declare const AUTO_EDGE_ID = "-1";
export declare class Edge {
    id: number;
    from: number;
    to: number;
    label: string;
    constructor(id?: number, from?: number, to?: number, label?: string);
}
export declare class Node {
    id: number;
    from: number;
    to: number;
    label: string;
    edges: Edge[];
    edgeMap: {};
    constructor(id?: number, label?: string);
    addEdge(edge: any): void;
}
export declare class Graph {
    id: number;
    from: number;
    to: number;
    label: string;
    edgeIdAutoIncrease: boolean;
    nodes: Node[];
    edges: Edge[];
    nodeMap: {};
    edgeMap: {};
    nodeLabelMap: {};
    edgeLabelMap: {};
    private counter;
    directed: boolean;
    constructor(id?: number, edgeIdAutoIncrease?: boolean, directed?: boolean);
    getNodeNum(): number;
    addNode(id: number, label: string): void;
    addEdge(id: number, from: number, to: number, label: string): void;
}
