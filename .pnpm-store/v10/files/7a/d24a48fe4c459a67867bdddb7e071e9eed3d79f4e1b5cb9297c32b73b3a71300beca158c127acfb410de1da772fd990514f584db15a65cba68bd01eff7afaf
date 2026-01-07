import Queue from './structs/queue';
import { getNeighbors } from './util';
/**
 *
 * @param callbacks
 * allowTraversal: 确定 BFS 是否从顶点沿着边遍历到其邻居，默认情况下，同一个节点只能遍历一次
 * enterNode: 当 BFS 访问某个节点时调用
 * leaveNode: 当 BFS 访问访问结束某个节点时调用
 */
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
      var id = next;
      if (!seen[id]) {
        seen[id] = true;
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
 * 广度优先遍历图
 * @param graph Graph 图实例
 * @param startNode 开始遍历的节点
 * @param originalCallbacks 回调
 */
var breadthFirstSearch = function breadthFirstSearch(graphData, startNodeId, originalCallbacks, directed) {
  if (directed === void 0) {
    directed = true;
  }
  var callbacks = initCallbacks(originalCallbacks);
  var nodeQueue = new Queue();
  var _a = graphData.edges,
    edges = _a === void 0 ? [] : _a;
  // 初始化队列元素
  nodeQueue.enqueue(startNodeId);
  var previousNode = '';
  var _loop_1 = function _loop_1() {
    var currentNode = nodeQueue.dequeue();
    callbacks.enter({
      current: currentNode,
      previous: previousNode
    });
    // 将所有邻居添加到队列中以便遍历
    getNeighbors(currentNode, edges, directed ? 'target' : undefined).forEach(function (nextNode) {
      if (callbacks.allowTraversal({
        previous: previousNode,
        current: currentNode,
        next: nextNode
      })) {
        nodeQueue.enqueue(nextNode);
      }
    });
    callbacks.leave({
      current: currentNode,
      previous: previousNode
    });
    // 下一次循环之前存储当前顶点
    previousNode = currentNode;
  };
  // 遍历队列中的所有顶点
  while (!nodeQueue.isEmpty()) {
    _loop_1();
  }
};
export default breadthFirstSearch;