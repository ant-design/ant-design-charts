// https://github.com/HarryStevens/d3-regression#readme Version 1.3.10. Copyright 2022 Harry Stevens.
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// Adapted from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/points.js
function points(data, x, y, sort) {
  data = data.filter(function (d, i) {
    var u = x(d, i),
        v = y(d, i);
    return u != null && isFinite(u) && v != null && isFinite(v);
  });

  if (sort) {
    data.sort(function (a, b) {
      return x(a) - x(b);
    });
  }

  var n = data.length,
      X = new Float64Array(n),
      Y = new Float64Array(n); // extract values, calculate means

  var ux = 0,
      uy = 0,
      xv,
      yv,
      d;

  for (var i = 0; i < n;) {
    d = data[i];
    X[i] = xv = +x(d, i, data);
    Y[i] = yv = +y(d, i, data);
    ++i;
    ux += (xv - ux) / i;
    uy += (yv - uy) / i;
  } // mean center the data


  for (var _i = 0; _i < n; ++_i) {
    X[_i] -= ux;
    Y[_i] -= uy;
  }

  return [X, Y, ux, uy];
}
function visitPoints(data, x, y, cb) {
  var iterations = 0;

  for (var i = 0, n = data.length; i < n; i++) {
    var d = data[i],
        dx = +x(d, i, data),
        dy = +y(d, i, data);

    if (dx != null && isFinite(dx) && dy != null && isFinite(dy)) {
      cb(dx, dy, iterations++);
    }
  }
}

// return the coefficient of determination, or R squared.

function determination(data, x, y, uY, predict) {
  var SSE = 0,
      SST = 0;
  visitPoints(data, x, y, function (dx, dy) {
    var sse = dy - predict(dx),
        sst = dy - uY;
    SSE += sse * sse;
    SST += sst * sst;
  });
  return 1 - SSE / SST;
}

// Returns the angle of a line in degrees.
function angle(line) {
  return Math.atan2(line[1][1] - line[0][1], line[1][0] - line[0][0]) * 180 / Math.PI;
} // Returns the midpoint of a line.

function midpoint(line) {
  return [(line[0][0] + line[1][0]) / 2, (line[0][1] + line[1][1]) / 2];
}

// returns a smooth line.

function interpose(xmin, xmax, predict) {
  var l = Math.log(xmax - xmin) * Math.LOG10E + 1 | 0;
  var precision = 1 * Math.pow(10, -l / 2 - 1),
      maxIter = 1e4;
  var points = [px(xmin), px(xmax)],
      iter = 0;

  while (find(points) && iter < maxIter) {
  }

  return points;

  function px(x) {
    return [x, predict(x)];
  }

  function find(points) {
    iter++;
    var n = points.length;
    var found = false;

    for (var i = 0; i < n - 1; i++) {
      var p0 = points[i],
          p1 = points[i + 1],
          m = midpoint([p0, p1]),
          mp = px(m[0]),
          a0 = angle([p0, m]),
          a1 = angle([p0, mp]),
          a = Math.abs(a0 - a1);

      if (a > precision) {
        points.splice(i + 1, 0, mp);
        found = true;
      }
    }

    return found;
  }
}

// Ordinary Least Squares from vega-statistics by Jeffrey Heer
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE
// Source: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/packages/vega-statistics/src/regression/ols.js
function ols(uX, uY, uXY, uX2) {
  var delta = uX2 - uX * uX,
      slope = Math.abs(delta) < 1e-24 ? 0 : (uXY - uX * uY) / delta,
      intercept = uY - slope * uX;
  return [intercept, slope];
}

function exponential () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      domain;

  function exponential(data) {
    var n = 0,
        Y = 0,
        YL = 0,
        XY = 0,
        XYL = 0,
        X2Y = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function (dx, dy) {
      var ly = Math.log(dy),
          xy = dx * dy;
      ++n;
      Y += (dy - Y) / n;
      XY += (xy - XY) / n;
      X2Y += (dx * xy - X2Y) / n;
      YL += (dy * ly - YL) / n;
      XYL += (xy * ly - XYL) / n;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    var _ols = ols(XY / Y, YL / Y, XYL / Y, X2Y / Y),
        _ols2 = _slicedToArray(_ols, 2),
        a = _ols2[0],
        b = _ols2[1];

    a = Math.exp(a);

    var fn = function fn(x) {
      return a * Math.exp(b * x);
    },
        out = interpose(xmin, xmax, fn);

    out.a = a;
    out.b = b;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }

  exponential.domain = function (arr) {
    return arguments.length ? (domain = arr, exponential) : domain;
  };

  exponential.x = function (fn) {
    return arguments.length ? (x = fn, exponential) : x;
  };

  exponential.y = function (fn) {
    return arguments.length ? (y = fn, exponential) : y;
  };

  return exponential;
}

function linear () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      domain;

  function linear(data) {
    var n = 0,
        X = 0,
        // sum of x
    Y = 0,
        // sum of y
    XY = 0,
        // sum of x * y
    X2 = 0,
        // sum of x * x
    xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function (dx, dy) {
      ++n;
      X += (dx - X) / n;
      Y += (dy - Y) / n;
      XY += (dx * dy - XY) / n;
      X2 += (dx * dx - X2) / n;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    var _ols = ols(X, Y, XY, X2),
        _ols2 = _slicedToArray(_ols, 2),
        intercept = _ols2[0],
        slope = _ols2[1],
        fn = function fn(x) {
      return slope * x + intercept;
    },
        out = [[xmin, fn(xmin)], [xmax, fn(xmax)]];

    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }

  linear.domain = function (arr) {
    return arguments.length ? (domain = arr, linear) : domain;
  };

  linear.x = function (fn) {
    return arguments.length ? (x = fn, linear) : x;
  };

  linear.y = function (fn) {
    return arguments.length ? (y = fn, linear) : y;
  };

  return linear;
}

// Returns the medium value of an array of numbers.
function median(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var i = arr.length / 2;
  return i % 1 === 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}

var maxiters = 2,
    epsilon = 1e-12;
function loess () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      bandwidth = .3;

  function loess(data) {
    var _points = points(data, x, y, true),
        _points2 = _slicedToArray(_points, 4),
        xv = _points2[0],
        yv = _points2[1],
        ux = _points2[2],
        uy = _points2[3],
        n = xv.length,
        bw = Math.max(2, ~~(bandwidth * n)),
        yhat = new Float64Array(n),
        residuals = new Float64Array(n),
        robustWeights = new Float64Array(n).fill(1);

    for (var iter = -1; ++iter <= maxiters;) {
      var interval = [0, bw - 1];

      for (var i = 0; i < n; ++i) {
        var dx = xv[i],
            i0 = interval[0],
            i1 = interval[1],
            edge = dx - xv[i0] > xv[i1] - dx ? i0 : i1;
        var W = 0,
            X = 0,
            Y = 0,
            XY = 0,
            X2 = 0,
            denom = 1 / Math.abs(xv[edge] - dx || 1); // Avoid singularity

        for (var k = i0; k <= i1; ++k) {
          var xk = xv[k],
              yk = yv[k],
              w = tricube(Math.abs(dx - xk) * denom) * robustWeights[k],
              xkw = xk * w;
          W += w;
          X += xkw;
          Y += yk * w;
          XY += yk * xkw;
          X2 += xk * xkw;
        } // Linear regression fit


        var _ols = ols(X / W, Y / W, XY / W, X2 / W),
            _ols2 = _slicedToArray(_ols, 2),
            a = _ols2[0],
            b = _ols2[1];

        yhat[i] = a + b * dx;
        residuals[i] = Math.abs(yv[i] - yhat[i]);
        updateInterval(xv, i + 1, interval);
      }

      if (iter === maxiters) {
        break;
      }

      var medianResidual = median(residuals);
      if (Math.abs(medianResidual) < epsilon) break;

      for (var _i = 0, arg, _w; _i < n; ++_i) {
        arg = residuals[_i] / (6 * medianResidual); // Default to epsilon (rather than zero) for large deviations
        // Keeping weights tiny but non-zero prevents singularites

        robustWeights[_i] = arg >= 1 ? epsilon : (_w = 1 - arg * arg) * _w;
      }
    }

    return output(xv, yhat, ux, uy);
  }

  loess.bandwidth = function (bw) {
    return arguments.length ? (bandwidth = bw, loess) : bandwidth;
  };

  loess.x = function (fn) {
    return arguments.length ? (x = fn, loess) : x;
  };

  loess.y = function (fn) {
    return arguments.length ? (y = fn, loess) : y;
  };

  return loess;
} // Weighting kernel for local regression

function tricube(x) {
  return (x = 1 - x * x * x) * x * x;
} // Advance sliding window interval of nearest neighbors


function updateInterval(xv, i, interval) {
  var val = xv[i],
      left = interval[0],
      right = interval[1] + 1;
  if (right >= xv.length) return; // Step right if distance to new right edge is <= distance to old left edge
  // Step when distance is equal to ensure movement over duplicate x values

  while (i > left && xv[right] - val <= val - xv[left]) {
    interval[0] = ++left;
    interval[1] = right;
    ++right;
  }
} // Generate smoothed output points
// Average points with repeated x values


function output(xv, yhat, ux, uy) {
  var n = xv.length,
      out = [];
  var i = 0,
      cnt = 0,
      prev = [],
      v;

  for (; i < n; ++i) {
    v = xv[i] + ux;

    if (prev[0] === v) {
      // Average output values via online update
      prev[1] += (yhat[i] - prev[1]) / ++cnt;
    } else {
      // Add new output point
      cnt = 0;
      prev[1] += uy;
      prev = [v, yhat[i]];
      out.push(prev);
    }
  }

  prev[1] += uy;
  return out;
}

function logarithmic () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      base = Math.E,
      domain;

  function logarithmic(data) {
    var n = 0,
        X = 0,
        Y = 0,
        XY = 0,
        X2 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity,
        lb = Math.log(base);
    visitPoints(data, x, y, function (dx, dy) {
      var lx = Math.log(dx) / lb;
      ++n;
      X += (lx - X) / n;
      Y += (dy - Y) / n;
      XY += (lx * dy - XY) / n;
      X2 += (lx * lx - X2) / n;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    var _ols = ols(X, Y, XY, X2),
        _ols2 = _slicedToArray(_ols, 2),
        intercept = _ols2[0],
        slope = _ols2[1],
        fn = function fn(x) {
      return slope * Math.log(x) / lb + intercept;
    },
        out = interpose(xmin, xmax, fn);

    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }

  logarithmic.domain = function (arr) {
    return arguments.length ? (domain = arr, logarithmic) : domain;
  };

  logarithmic.x = function (fn) {
    return arguments.length ? (x = fn, logarithmic) : x;
  };

  logarithmic.y = function (fn) {
    return arguments.length ? (y = fn, logarithmic) : y;
  };

  logarithmic.base = function (n) {
    return arguments.length ? (base = n, logarithmic) : base;
  };

  return logarithmic;
}

function quad () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      domain;

  function quadratic(data) {
    var _points = points(data, x, y),
        _points2 = _slicedToArray(_points, 4),
        xv = _points2[0],
        yv = _points2[1],
        ux = _points2[2],
        uy = _points2[3],
        n = xv.length;

    var X2 = 0,
        X3 = 0,
        X4 = 0,
        XY = 0,
        X2Y = 0,
        i,
        dx,
        dy,
        x2;

    for (i = 0; i < n;) {
      dx = xv[i];
      dy = yv[i++];
      x2 = dx * dx;
      X2 += (x2 - X2) / i;
      X3 += (x2 * dx - X3) / i;
      X4 += (x2 * x2 - X4) / i;
      XY += (dx * dy - XY) / i;
      X2Y += (x2 * dy - X2Y) / i;
    }

    var Y = 0,
        n0 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function (dx, dy) {
      n0++;
      Y += (dy - Y) / n0;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    var X2X2 = X4 - X2 * X2,
        d = X2 * X2X2 - X3 * X3,
        a = (X2Y * X2 - XY * X3) / d,
        b = (XY * X2X2 - X2Y * X3) / d,
        c = -a * X2,
        fn = function fn(x) {
      x = x - ux;
      return a * x * x + b * x + c + uy;
    };

    var out = interpose(xmin, xmax, fn);
    out.a = a;
    out.b = b - 2 * a * ux;
    out.c = c - b * ux + a * ux * ux + uy;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }

  quadratic.domain = function (arr) {
    return arguments.length ? (domain = arr, quadratic) : domain;
  };

  quadratic.x = function (fn) {
    return arguments.length ? (x = fn, quadratic) : x;
  };

  quadratic.y = function (fn) {
    return arguments.length ? (y = fn, quadratic) : y;
  };

  return quadratic;
}

// Source: https://github.com/Tom-Alexander/regression-js/blob/master/src/regression.js#L246
// License: https://github.com/Tom-Alexander/regression-js/blob/master/LICENSE
// ...with ideas from vega-statistics by Jeffrey Heer
// Source: https://github.com/vega/vega/blob/f21cb8792b4e0cbe2b1a3fd44b0f5db370dbaadb/packages/vega-statistics/src/regression/poly.js
// License: https://github.com/vega/vega/blob/f058b099decad9db78301405dd0d2e9d8ba3d51a/LICENSE

function polynomial () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      order = 3,
      domain;

  function polynomial(data) {
    // Use more efficient methods for lower orders
    if (order === 1) {
      var o = linear().x(x).y(y).domain(domain)(data);
      o.coefficients = [o.b, o.a];
      delete o.a;
      delete o.b;
      return o;
    }

    if (order === 2) {
      var _o = quad().x(x).y(y).domain(domain)(data);

      _o.coefficients = [_o.c, _o.b, _o.a];
      delete _o.a;
      delete _o.b;
      delete _o.c;
      return _o;
    }

    var _points = points(data, x, y),
        _points2 = _slicedToArray(_points, 4),
        xv = _points2[0],
        yv = _points2[1],
        ux = _points2[2],
        uy = _points2[3],
        n = xv.length,
        lhs = [],
        rhs = [],
        k = order + 1;

    var Y = 0,
        n0 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function (dx, dy) {
      ++n0;
      Y += (dy - Y) / n0;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });
    var i, j, l, v, c;

    for (i = 0; i < k; ++i) {
      for (l = 0, v = 0; l < n; ++l) {
        v += Math.pow(xv[l], i) * yv[l];
      }

      lhs.push(v);
      c = new Float64Array(k);

      for (j = 0; j < k; ++j) {
        for (l = 0, v = 0; l < n; ++l) {
          v += Math.pow(xv[l], i + j);
        }

        c[j] = v;
      }

      rhs.push(c);
    }

    rhs.push(lhs);

    var coef = gaussianElimination(rhs),
        fn = function fn(x) {
      x -= ux;
      var y = uy + coef[0] + coef[1] * x + coef[2] * x * x;

      for (i = 3; i < k; ++i) {
        y += coef[i] * Math.pow(x, i);
      }

      return y;
    },
        out = interpose(xmin, xmax, fn);

    out.coefficients = uncenter(k, coef, -ux, uy);
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }

  polynomial.domain = function (arr) {
    return arguments.length ? (domain = arr, polynomial) : domain;
  };

  polynomial.x = function (fn) {
    return arguments.length ? (x = fn, polynomial) : x;
  };

  polynomial.y = function (fn) {
    return arguments.length ? (y = fn, polynomial) : y;
  };

  polynomial.order = function (n) {
    return arguments.length ? (order = n, polynomial) : order;
  };

  return polynomial;
}

function uncenter(k, a, x, y) {
  var z = Array(k);
  var i, j, v, c; // initialize to zero

  for (i = 0; i < k; ++i) {
    z[i] = 0;
  } // polynomial expansion


  for (i = k - 1; i >= 0; --i) {
    v = a[i];
    c = 1;
    z[i] += v;

    for (j = 1; j <= i; ++j) {
      c *= (i + 1 - j) / j; // binomial coefficent

      z[i - j] += v * Math.pow(x, j) * c;
    }
  } // bias term


  z[0] += y;
  return z;
} // Given an array for a two-dimensional matrix and the polynomial order,
// solve A * x = b using Gaussian elimination.


function gaussianElimination(matrix) {
  var n = matrix.length - 1,
      coef = [];
  var i, j, k, r, t;

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
        matrix[k][j] -= matrix[k][i] * matrix[i][j] / matrix[i][i];
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

function power () {
  var x = function x(d) {
    return d[0];
  },
      y = function y(d) {
    return d[1];
  },
      domain;

  function power(data) {
    var n = 0,
        X = 0,
        Y = 0,
        XY = 0,
        X2 = 0,
        YS = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function (dx, dy) {
      var lx = Math.log(dx),
          ly = Math.log(dy);
      ++n;
      X += (lx - X) / n;
      Y += (ly - Y) / n;
      XY += (lx * ly - XY) / n;
      X2 += (lx * lx - X2) / n;
      YS += (dy - YS) / n;

      if (!domain) {
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    var _ols = ols(X, Y, XY, X2),
        _ols2 = _slicedToArray(_ols, 2),
        a = _ols2[0],
        b = _ols2[1];

    a = Math.exp(a);

    var fn = function fn(x) {
      return a * Math.pow(x, b);
    },
        out = interpose(xmin, xmax, fn);

    out.a = a;
    out.b = b;
    out.predict = fn;
    out.rSquared = determination(data, x, y, YS, fn);
    return out;
  }

  power.domain = function (arr) {
    return arguments.length ? (domain = arr, power) : domain;
  };

  power.x = function (fn) {
    return arguments.length ? (x = fn, power) : x;
  };

  power.y = function (fn) {
    return arguments.length ? (y = fn, power) : y;
  };

  return power;
}

exports.regressionExp = exponential;
exports.regressionLinear = linear;
exports.regressionLoess = loess;
exports.regressionLog = logarithmic;
exports.regressionPoly = polynomial;
exports.regressionPow = power;
exports.regressionQuad = quad;
