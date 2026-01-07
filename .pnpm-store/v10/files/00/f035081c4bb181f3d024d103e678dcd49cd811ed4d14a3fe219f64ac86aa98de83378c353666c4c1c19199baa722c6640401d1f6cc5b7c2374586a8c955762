import { visitPoints } from "./points";

// Given a dataset, x- and y-accessors, the mean center of the y values, and a predict function,
// return the coefficient of determination, or R squared.
export function determination(data, x, y, uY, predict){
  let SSE = 0,
      SST = 0;
  
  visitPoints(data, x, y, (dx, dy) => {
    const sse = dy - predict(dx),
          sst = dy - uY;

    SSE += sse * sse;
    SST += sst * sst;
  });

  return 1 - SSE / SST;
}