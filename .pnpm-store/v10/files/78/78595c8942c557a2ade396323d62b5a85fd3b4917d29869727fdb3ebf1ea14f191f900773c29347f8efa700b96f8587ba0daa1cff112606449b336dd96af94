import { determination } from "./utils/determination";
import { interpose } from "./utils/interpose";
import { points, visitPoints } from "./utils/points";

export default function(){
  let x = d => d[0],
      y = d => d[1],
      domain;

  function quadratic(data){
    const [xv, yv, ux, uy] = points(data, x, y),
          n = xv.length;
    
    let X2 = 0,
        X3 = 0,
        X4 = 0,
        XY = 0,
        X2Y = 0,
        i, dx, dy, x2;

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
    
    let Y = 0,
        n0 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    
    visitPoints(data, x, y, (dx, dy) => {
      n0++;
      Y += (dy - Y) / n0;
      if (!domain){
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });
    
    const X2X2 = X4 - (X2 * X2),
          d = (X2 * X2X2 - X3 * X3),
          a = (X2Y * X2 - XY * X3) / d,
          b = (XY * X2X2 - X2Y * X3) / d,
          c = -a * X2,
          fn = x => {
            x = x - ux;
            return a * x * x + b * x + c + uy;
          };
    
    const out = interpose(xmin, xmax, fn);

    out.a = a;
    out.b = b - 2 * a * ux;
    out.c = c - b * ux + a * ux * ux + uy;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);

    return out;
  }
  
  quadratic.domain = function(arr){
    return arguments.length ? (domain = arr, quadratic) : domain;
  }

  quadratic.x = function(fn){
    return arguments.length ? (x = fn, quadratic) : x;
  }

  quadratic.y = function(fn){
    return arguments.length ? (y = fn, quadratic) : y;
  }
  
  return quadratic;
}