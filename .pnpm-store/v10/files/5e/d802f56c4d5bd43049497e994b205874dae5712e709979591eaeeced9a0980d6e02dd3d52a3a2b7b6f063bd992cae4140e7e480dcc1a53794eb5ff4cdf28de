import { NodeConfig } from './types';
/**
 *  nodes-cosine-similarity算法 基于节点属性计算余弦相似度(基于种子节点寻找相似节点)
 * @param nodes 图节点数据
 * @param seedNode 种子节点
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 */
declare const nodesCosineSimilarity: (nodes: NodeConfig[], seedNode: NodeConfig, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[]) => {
    allCosineSimilarity: number[];
    similarNodes: NodeConfig[];
};
export default nodesCosineSimilarity;
