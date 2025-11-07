import tree_add, {addAll as tree_addAll} from "./add.js";
import tree_cover from "./cover.js";
import tree_data from "./data.js";
import tree_extent from "./extent.js";
import tree_find from "./find.js";
import tree_remove, {removeAll as tree_removeAll} from "./remove.js";
import tree_root from "./root.js";
import tree_size from "./size.js";
import tree_visit from "./visit.js";
import tree_visitAfter from "./visitAfter.js";
import tree_x, {defaultX} from "./x.js";

export default function binarytree(nodes, x) {
  var tree = new Binarytree(x == null ? defaultX : x, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Binarytree(x, x0, x1) {
  this._x = x;
  this._x0 = x0;
  this._x1 = x1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = binarytree.prototype = Binarytree.prototype;

treeProto.copy = function() {
  var copy = new Binarytree(this._x, this._x0, this._x1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(2)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 2; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(2)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = tree_add;
treeProto.addAll = tree_addAll;
treeProto.cover = tree_cover;
treeProto.data = tree_data;
treeProto.extent = tree_extent;
treeProto.find = tree_find;
treeProto.remove = tree_remove;
treeProto.removeAll = tree_removeAll;
treeProto.root = tree_root;
treeProto.size = tree_size;
treeProto.visit = tree_visit;
treeProto.visitAfter = tree_visitAfter;
treeProto.x = tree_x;