import isArray from './is-array';

export interface RadiusType {
  r1: number;
  r2: number;
  r3: number;
  r4: number;
}

function parseRadius(radius: number): RadiusType;
function parseRadius(radius: number[]): RadiusType;

function parseRadius(radius: number | number[]): RadiusType {
  let r1 = 0,
    r2 = 0,
    r3 = 0,
    r4 = 0;
  if (isArray(radius)) {
    if (radius.length === 1) {
      r1 = r2 = r3 = r4 = radius[0];
    } else if (radius.length === 2) {
      r1 = r3 = radius[0];
      r2 = r4 = radius[1];
    } else if (radius.length === 3) {
      r1 = radius[0];
      r2 = r4 = radius[1];
      r3 = radius[2];
    } else {
      r1 = radius[0];
      r2 = radius[1];
      r3 = radius[2];
      r4 = radius[3];
    }
  } else {
    r1 = r2 = r3 = r4 = radius;
  }
  return {
    r1,
    r2,
    r3,
    r4
  };
}

export default parseRadius;
