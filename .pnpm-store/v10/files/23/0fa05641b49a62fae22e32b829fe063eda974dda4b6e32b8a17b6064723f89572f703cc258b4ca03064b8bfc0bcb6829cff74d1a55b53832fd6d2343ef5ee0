import { GraphData, ClusterData, DistanceType } from './types';
/**
 *  k-means算法 根据节点之间的距离将节点聚类为K个簇
 * @param data 图数据
 * @param k 质心（聚类中心）个数
 * @param propertyKey 属性的字段名
 * @param involvedKeys 参与计算的key集合
 * @param uninvolvedKeys 不参与计算的key集合
 * @param distanceType 距离类型 默认节点属性的欧式距离
 */
declare const kMeans: (data: GraphData, k?: number, propertyKey?: string, involvedKeys?: string[], uninvolvedKeys?: string[], distanceType?: DistanceType) => ClusterData;
export default kMeans;
