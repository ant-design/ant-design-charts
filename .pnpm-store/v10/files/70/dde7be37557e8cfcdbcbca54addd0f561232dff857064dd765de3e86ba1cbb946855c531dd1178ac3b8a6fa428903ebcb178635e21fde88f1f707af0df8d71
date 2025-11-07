import { determination } from "./utils/determination";
import { interpose } from "./utils/interpose";
import { ols } from "./utils/ols";
import { visitPoints } from "./utils/points";

export default function() {
  let x = d => d[0],
      y = d => d[1],
      domain;
  
  function power(data){
    let n = 0,
        X = 0,
        Y = 0,
        XY = 0,
        X2 = 0,
        YS = 0,
        xmin = domain ? +domain[0] : Infinity,
        xmax = domain ? +domain[1] : -Infinity;
    
    visitPoints(data, x, y, (dx, dy) => {
      const lx = Math.log(dx),
            ly = Math.log(dy);
      ++n;
      X += (lx - X) / n;
      Y += (ly - Y) / n;
      XY += (lx * ly - XY) / n;
      X2 += (lx * lx - X2) / n;
      YS += (dy - YS) / n;

      if (!domain){
        if (dx < xmin) xmin = dx;
        if (dx > xmax) xmax = dx;
      }
    });

    let [a, b] = ols(X, Y, XY, X2);
    a = Math.exp(a);
    const fn = x => a * Math.pow(x, b),
        out = interpose(xmin, xmax, fn);

    out.a = a;
    out.b = b;
    out.predict = fn;
    out.rSquared = determination(data, x, y, YS, fn);

    return out; 
  }
  
  power.domain = function(arr){
    return arguments.length ? (domain = arr, power) : domain;
  }

  power.x = function(fn){
    return arguments.length ? (x = fn, power) : x;
  }

  power.y = function(fn){
    return arguments.length ? (y = fn, power) : y;
  }
  
  return power;
}