import { determination } from "./utils/determination";
import { interpose } from "./utils/interpose";
import { points, visitPoints } from "./utils/points";
import linear from "./linear";
import quad from "./quadratic";

// Adapted from regression-js by Tom Alexander
// Source: https://github.com/Tom-Alexander/regression-js/blob/master/src/regression.js#L246
// License: https://github.com/Tom-Alexander/regression-js/blob/master/LICENSE
// ...with ideas from vega-statistics by Jeffrey Heer
// Source: https://github.com/vega/vega/blob/f21cb8792b4e0cbe2b1a3fd44b0f5db370dbaadb/packages/vega-statistics/src/regression/poly.js
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
export default function(){
  let x = d => d[0],
      y = d => d[1],
      order = 3,
      domain;
  
  function polynomial(data) {    
    // Use more efficient methods for lower orders
    if (order === 1) {
      const o = linear().x(x).y(y).domain(domain)(data);
      o.coefficients = [o.b, o.a];
      delete o.a; delete o.b;
      return o;
    }
    if (order === 2) {
      const o = quad().x(x).y(y).domain(domain)(data);
      o.coefficients = [o.c, o.b, o.a];
      delete o.a; delete o.b; delete o.c;
      return o;
    }
    
    const [xv, yv, ux, uy] = points(data, x, y),
        n = xv.length,
        lhs = [],
        rhs = [],
        k = order + 1;

    let Y = 0, n0 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    
    visitPoints(data, x, y, (dx, dy) => {
      ++n0
      Y += (dy - Y) / n0;
      if (!domain){
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;        
      }
    });

    let i, j, l, v, c;

    for (i = 0; i < k; ++i) {
      for (l = 0, v = 0; l < n; ++l) {
        v += Math.pow(xv[l], i) * yv[l];
      }
      lhs.push(v);

      c = new Float64Array(k);
      for (j=0; j<k; ++j) {
        for (l=0, v=0; l<n; ++l) {
          v += Math.pow(xv[l], i + j);
        }
        c[j] = v;
      }
      rhs.push(c);
    }
    rhs.push(lhs);

    const coef = gaussianElimination(rhs),
          fn = x => {
            x -= ux;
            let y = uy + coef[0] + coef[1] * x + coef[2] * x * x;
            for (i = 3; i < k; ++i) y += coef[i] * Math.pow(x, i);
            return y;
          },
          out = interpose(xmin, xmax, fn);

    out.coefficients = uncenter(k, coef, -ux, uy);
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    
    return out;
  }

  polynomial.domain = function(arr){
    return arguments.length ? (domain = arr, polynomial) : domain;
  }

  polynomial.x = function(fn){
    return arguments.length ? (x = fn, polynomial) : x;
  }

  polynomial.y = function(fn){
    return arguments.length ? (y = fn, polynomial) : y;
  }

  polynomial.order = function(n){
    return arguments.length ? (order = n, polynomial) : order;
  }
  
  return polynomial;
}

function uncenter(k, a, x, y) {
  const z = Array(k);
  let i, j, v, c;

  // initialize to zero
  for (i = 0; i < k; ++i) z[i] = 0;

  // polynomial expansion
  for (i = k - 1; i >= 0; --i) {
    v = a[i];
    c = 1;
    z[i] += v;
    for (j = 1; j <= i; ++j) {
      c *= (i + 1 - j) / j; // binomial coefficent
      z[i-j] += v * Math.pow(x, j) * c;
    }
  }

  // bias term
  z[0] += y;

  return z;
}

// Given an array for a two-dimensional matrix and the polynomial order,
// solve A * x = b using Gaussian elimination.
function gaussianElimination(matrix) {
  const n = matrix.length - 1,
        coef = [];

  let i, j, k, r, t;

  for (i = 0; i < n; ++i) {
    r = i; // max row
    for (j = i + 1; j < n; ++j) {
      if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][r])) {
        r = j;
      }
    }

    for (k = i; k < n + 1; ++k) {
      t = matrix[k][i];
      matrix[k][i] = matrix[k][r];
      matrix[k][r] = t;
    }

    for (j = i + 1; j < n; ++j) {
      for (k = n; k >= i; k--) {
        matrix[k][j] -= (matrix[k][i] * matrix[i][j]) / matrix[i][i];
      }
    }
  }

  for (j = n - 1; j >= 0; --j) {
    t = 0;
    for (k = j + 1; k < n; ++k) {
      t += matrix[k][j] * coef[k];
    }
    coef[j] = (matrix[n][j] - t) / matrix[j][j];
  }

  return coef;
}