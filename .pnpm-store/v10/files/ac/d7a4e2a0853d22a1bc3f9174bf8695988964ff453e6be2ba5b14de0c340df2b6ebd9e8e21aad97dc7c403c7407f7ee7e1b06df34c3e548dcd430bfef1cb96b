import Half from "./half.js";

export default function(callback) {
  var halves = [], next = [], q;
  if (this._root) halves.push(new Half(this._root, this._x0, this._x1));
  while (q = halves.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, x1 = q.x1, xm = (x0 + x1) / 2;
      if (child = node[0]) halves.push(new Half(child, x0, xm));
      if (child = node[1]) halves.push(new Half(child, xm, x1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.x1);
  }
  return this;
}
