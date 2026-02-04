import Octant from "./octant.js";

export default function(x, y, z, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      z0 = this._z0,
      x1,
      y1,
      z1,
      x2,
      y2,
      z2,
      x3 = this._x1,
      y3 = this._y1,
      z3 = this._z1,
      octs = [],
      node = this._root,
      q,
      i;

  if (node) octs.push(new Octant(node, x0, y0, z0, x3, y3, z3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius, z0 = z - radius;
    x3 = x + radius, y3 = y + radius, z3 = z + radius;
    radius *= radius;
  }

  while (q = octs.pop()) {

    // Stop searching if this octant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (z1 = q.z0) > z3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0
        || (z2 = q.z1) < z0) continue;

    // Bisect the current octant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2,
          zm = (z1 + z2) / 2;

      octs.push(
        new Octant(node[7], xm, ym, zm, x2, y2, z2),
        new Octant(node[6], x1, ym, zm, xm, y2, z2),
        new Octant(node[5], xm, y1, zm, x2, ym, z2),
        new Octant(node[4], x1, y1, zm, xm, ym, z2),
        new Octant(node[3], xm, ym, z1, x2, y2, zm),
        new Octant(node[2], x1, ym, z1, xm, y2, zm),
        new Octant(node[1], xm, y1, z1, x2, ym, zm),
        new Octant(node[0], x1, y1, z1, xm, ym, zm)
      );

      // Visit the closest octant first.
      if (i = (z >= zm) << 2 | (y >= ym) << 1 | (x >= xm)) {
        q = octs[octs.length - 1];
        octs[octs.length - 1] = octs[octs.length - 1 - i];
        octs[octs.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          dz = z - +this._z.call(null, node.data),
          d2 = dx * dx + dy * dy + dz * dz;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d, z0 = z - d;
        x3 = x + d, y3 = y + d, z3 = z + d;
        data = node.data;
      }
    }
  }

  return data;
}
