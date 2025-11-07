import Vector from './utils/vector';
/**
 * cosine-similarity算法 计算余弦相似度
 * @param item 元素
 * @param targetItem 目标元素
 */
var cosineSimilarity = function cosineSimilarity(item, targetItem) {
  // 目标元素向量
  var targetItemVector = new Vector(targetItem);
  // 目标元素向量的模长
  var targetNodeNorm2 = targetItemVector.norm2();
  // 元素向量
  var itemVector = new Vector(item);
  // 元素向量的模长
  var itemNorm2 = itemVector.norm2();
  // 计算元素向量和目标元素向量的点积
  var dot = targetItemVector.dot(itemVector);
  var norm2Product = targetNodeNorm2 * itemNorm2;
  // 计算元素向量和目标元素向量的余弦相似度
  var cosineSimilarity = norm2Product ? dot / norm2Product : 0;
  return cosineSimilarity;
};
export default cosineSimilarity;