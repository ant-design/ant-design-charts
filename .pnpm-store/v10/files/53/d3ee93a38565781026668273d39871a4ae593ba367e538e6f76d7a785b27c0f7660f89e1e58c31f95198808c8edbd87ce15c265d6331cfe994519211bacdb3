const util = require("../util");

function positionNode(node, previousNode, indent, dropCap, align) {
  //  caculate the node's horizontal offset DX, dx's type might be number or function
  const displacementX =
    (typeof indent === "function" ? indent(node) : indent) * node.depth;

  if (!dropCap) {
    try {
      if (node.id === node.parent.children[0].id) {
        node.x += displacementX;
        node.y = previousNode ? previousNode.y : 0;
        return;
      }
    } catch (e) {
      // skip to normal when a node has no parent
    }
  }

  node.x += displacementX;
  if (previousNode) {
    node.y = previousNode.y + util.getHeight(previousNode, node, align);
    if (previousNode.parent && node.parent.id !== previousNode.parent.id) {
      // previous node has different parent
      const prevParent = previousNode.parent;
      const preY = prevParent.y + util.getHeight(prevParent, node, align);
      node.y = preY > node.y ? preY : node.y;
    }
  } else {
    node.y = 0;
  }
  return;
}
module.exports = (root, indent, dropCap, align) => {
  let previousNode = null;
  root.eachNode((node) => {
    positionNode(node, previousNode, indent, dropCap, align);
    previousNode = node;
  });
};
