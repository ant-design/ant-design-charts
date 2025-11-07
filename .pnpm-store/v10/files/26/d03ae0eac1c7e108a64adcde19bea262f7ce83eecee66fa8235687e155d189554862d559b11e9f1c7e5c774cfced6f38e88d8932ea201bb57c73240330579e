import { GraphData } from "../types";
export interface EdgeMap {
    [key: string]: {
        idx: number;
        edge: any;
    };
}
export interface NodeMap {
    [key: string]: {
        idx: number;
        node: any;
        degree: number;
        inDegree: number;
        outDegree: number;
    };
}
interface GraphDataMap {
    [key: string]: GraphData;
}
interface Props {
    graphs: GraphDataMap;
    minSupport: number;
    directed?: boolean;
    nodeLabelProp?: string;
    edgeLabelProp?: string;
    minNodeNum?: number;
    maxNodeNum?: number;
    top?: number;
    verbose?: boolean;
}
/**
 * gSpan 频繁子图计算算法（frequent graph mining）
 * @param params 参数
 */
declare const gSpan: (params: Props) => GraphData[];
export default gSpan;
