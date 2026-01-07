// Adapted from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/points.js
export function points(data, x, y, sort) {
  data = data.filter((d, i) => {
    let u = x(d, i), v = y(d, i);
    return u != null && isFinite(u) && v != null && isFinite(v);
  });

  if (sort) {
    data.sort((a, b) => x(a) - x(b));
  }

  const n = data.length,
        X = new Float64Array(n),
        Y = new Float64Array(n);

  // extract values, calculate means
  let ux = 0, uy = 0, xv, yv, d;
  for (let i = 0; i < n; ) {
    d = data[i];
    X[i] = xv = +x(d, i, data);
    Y[i] = yv = +y(d, i, data);
    ++i;
    ux += (xv - ux) / i;
    uy += (yv - uy) / i;
  }

  // mean center the data
  for (let i = 0; i < n; ++i) {
    X[i] -= ux;
    Y[i] -= uy;
  }

  return [X, Y, ux, uy];
}


export function visitPoints(data, x, y, cb){
  let iterations = 0;

  for (let i = 0, n = data.length; i < n; i++) {
    const d = data[i],
          dx = +x(d, i, data),
          dy = +y(d, i, data);

    if (dx != null && isFinite(dx) && dy != null && isFinite(dy)) {
      cb(dx, dy, iterations++);
    }
  }
}
