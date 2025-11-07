import Half from "./half.js";

export default function(x, radius) {
  var data,
      x0 = this._x0,
      x1,
      x2,
      x3 = this._x1,
      halves = [],
      node = this._root,
      q,
      i;

  if (node) halves.push(new Half(node, x0, x3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius;
    x3 = x + radius;
  }

  while (q = halves.pop()) {

    // Stop searching if this half can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (x2 = q.x1) < x0) continue;

    // Bisect the current half.
    if (node.length) {
      var xm = (x1 + x2) / 2;

      halves.push(
        new Half(node[1], xm, x2),
        new Half(node[0], x1, xm)
      );

      // Visit the closest half first.
      if (i = +(x >= xm)) {
        q = halves[halves.length - 1];
        halves[halves.length - 1] = halves[halves.length - 1 - i];
        halves[halves.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var d = Math.abs(x - +this._x.call(null, node.data));
      if (d < radius) {
        radius = d;
        x0 = x - d;
        x3 = x + d;
        data = node.data;
      }
    }
  }

  return data;
}
