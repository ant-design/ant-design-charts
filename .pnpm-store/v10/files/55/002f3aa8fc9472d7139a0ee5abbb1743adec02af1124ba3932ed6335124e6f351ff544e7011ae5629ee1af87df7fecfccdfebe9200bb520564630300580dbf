import { determination } from "./utils/determination";
import { ols } from "./utils/ols";
import { visitPoints } from "./utils/points";

export default function(){
  let x = d => d[0],
      y = d => d[1],
      domain;

  function linear(data){
    let n = 0,
        X = 0, // sum of x
        Y = 0, // sum of y
        XY = 0, // sum of x * y
        X2 = 0, // sum of x * x
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;

    visitPoints(data, x, y, (dx, dy) => {
      ++n;
      X += (dx - X) / n;
      Y += (dy - Y) / n;
      XY += (dx * dy - XY) / n;
      X2 += (dx * dx - X2) / n;
      
      if (!domain){
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    const [intercept, slope] = ols(X, Y, XY, X2),
        fn = x => slope * x + intercept,
        out = [[xmin, fn(xmin)], [xmax, fn(xmax)]];
    
    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);

    return out;
  }

  linear.domain = function(arr){
    return arguments.length ? (domain = arr, linear) : domain;
  }

  linear.x = function(fn){
    return arguments.length ? (x = fn, linear) : x;
  }

  linear.y = function(fn){
    return arguments.length ? (y = fn, linear) : y;
  }

  return linear;
}
