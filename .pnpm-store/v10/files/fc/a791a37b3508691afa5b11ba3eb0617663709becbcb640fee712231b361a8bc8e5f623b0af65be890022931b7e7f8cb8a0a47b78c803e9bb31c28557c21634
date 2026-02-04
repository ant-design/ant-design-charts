import { getNeighbors } from './util';
function initCallbacks(callbacks) {
  if (callbacks === void 0) {
    callbacks = {};
  }
  var initiatedCallback = callbacks;
  var stubCallback = function stubCallback() {};
  var allowTraversalCallback = function () {
    var seen = {};
    return function (_a) {
      var next = _a.next;
      if (!seen[next]) {
        seen[next] = true;
        return true;
      }
      return false;
    };
  }();
  initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
  initiatedCallback.enter = callbacks.enter || stubCallback;
  initiatedCallback.leave = callbacks.leave || stubCallback;
  return initiatedCallback;
}
/**
 * @param {Graph} graph
 * @param {GraphNode} currentNode
 * @param {GraphNode} previousNode
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(graphData, currentNode, previousNode, callbacks, directed) {
  if (directed === void 0) {
    directed = true;
  }
  callbacks.enter({
    current: currentNode,
    previous: previousNode
  });
  var _a = graphData.edges,
    edges = _a === void 0 ? [] : _a;
  getNeighbors(currentNode, edges, directed ? 'target' : undefined).forEach(function (nextNode) {
    if (callbacks.allowTraversal({
      previous: previousNode,
      current: currentNode,
      next: nextNode
    })) {
      depthFirstSearchRecursive(graphData, nextNode, currentNode, callbacks, directed);
    }
  });
  callbacks.leave({
    current: currentNode,
    previous: previousNode
  });
}
/**
 * 深度优先遍历图
 * @param data GraphData 图数据
 * @param startNodeId 开始遍历的节点的 ID
 * @param originalCallbacks 回调
 */
export default function depthFirstSearch(graphData, startNodeId, callbacks, directed) {
  if (directed === void 0) {
    directed = true;
  }
  depthFirstSearchRecursive(graphData, startNodeId, '', initCallbacks(callbacks), directed);
}