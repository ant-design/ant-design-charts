import { determination } from "./utils/determination";
import { interpose } from "./utils/interpose";
import { ols } from "./utils/ols";
import { visitPoints } from "./utils/points";

export default function() {
  let x = d => d[0],
      y = d => d[1],
      base = Math.E,
      domain;
  
  function logarithmic(data){
    let n = 0,
        X = 0,
        Y = 0,
        XY = 0,
        X2 = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity,
        lb = Math.log(base);
    
    visitPoints(data, x, y, (dx, dy) => {
      const lx = Math.log(dx) / lb;
      ++n;
      X += (lx - X) / n;
      Y += (dy - Y) / n;
      XY += (lx * dy - XY) / n;
      X2 += (lx * lx - X2) / n;
      
      if (!domain){
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });
    
    const [intercept, slope] = ols(X, Y, XY, X2),
        fn = x => slope * Math.log(x) / lb + intercept,
        out = interpose(xmin, xmax, fn);
        
    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);

    return out; 
  }
  
  logarithmic.domain = function(arr){
    return arguments.length ? (domain = arr, logarithmic) : domain;
  }

  logarithmic.x = function(fn){
    return arguments.length ? (x = fn, logarithmic) : x;
  }

  logarithmic.y = function(fn){
    return arguments.length ? (y = fn, logarithmic) : y;
  }

  logarithmic.base = function(n){
    return arguments.length ? (base = n, logarithmic) : base;
  }
  
  return logarithmic;
}