const distance = (x1, y1, z1, x2, y2, z2) => Math.sqrt((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2);

export function findAllWithinRadius(x, y, z, radius) {
  const result = [];

  const xMin = x - radius;
  const yMin = y - radius;
  const zMin = z - radius;
  const xMax = x + radius;
  const yMax = y + radius;
  const zMax = z + radius;

  this.visit((node, x1, y1, z1, x2, y2, z2) => {
    if (!node.length) {
      do {
        const d = node.data;
        if (distance(x, y, z, this._x(d), this._y(d), this._z(d)) <= radius) {
          result.push(d);
        }
      } while (node = node.next);
    }
    return x1 > xMax || y1 > yMax || z1 > zMax || x2 < xMin || y2 < yMin || z2 < zMin;
  });

  return result;
}
