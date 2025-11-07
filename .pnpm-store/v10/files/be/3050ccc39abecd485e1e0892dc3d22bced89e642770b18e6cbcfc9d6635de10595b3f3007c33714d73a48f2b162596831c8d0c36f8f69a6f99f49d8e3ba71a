/**
 * Get average height or height for node's position calculation, according to align.
 * @param {*} preNode previous node
 * @param {*} node current node, whose position is going to be calculated
 * @param {'center' | undefined} align 'center' means nodes align at the center, other value means align at the left-top
 * @param {string} heightField field name for height value on preNode and node
 * @return {number} the height for calculation
 */
function getHeight(preNode, node, align, heightField) {
  if (heightField === void 0) {
    heightField = 'height';
  }
  return align === 'center' ? (preNode[heightField] + node[heightField]) / 2 : preNode.height;
}
module.exports = {
  assign: Object.assign,
  getHeight: getHeight
};