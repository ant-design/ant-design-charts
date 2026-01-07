type PrimitiveInterpolatable = number;

export type Interpolatable = number | { [key: string]: PrimitiveInterpolatable } | PrimitiveInterpolatable[];

export type Interpolate<T extends Interpolatable = any> = (t: number) => T;

export type Interpolator<T extends Interpolatable = any> = (from: T, to: T) => Interpolate<T>;

export const numberInterpolate: Interpolator<number> = function (from, to) {
  return function (t: number) {
    return from * (1 - t) + to * t;
  };
};

export function arrayInterpolate(
  from: PrimitiveInterpolatable[],
  to: PrimitiveInterpolatable[]
): Interpolate<PrimitiveInterpolatable[]> {
  const nb = to ? to.length : 0;
  const na = from ? Math.min(nb, from.length) : 0;

  return function (t) {
    const x = new Array(na);
    const c = new Array(nb);

    let i = 0;
    for (i = 0; i < na; ++i) x[i] = interpolate(from[i], to[i]);
    for (; i < nb; ++i) c[i] = to[i];
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

export function objectInterpolate(
  from: { [keys: string]: PrimitiveInterpolatable } = {},
  to: { [keys: string]: PrimitiveInterpolatable } = {}
) {
  const i: { [keys: string]: Interpolate } = {};
  const c: { [keys: string]: PrimitiveInterpolatable } = {};
  Object.entries(to).forEach(([k, v]) => {
    if (k in from) i[k] = interpolate(from[k], v);
    else c[k] = v;
  });
  return function (t: PrimitiveInterpolatable) {
    Object.entries(i).forEach(([k, v]) => (c[k] = v(t)));
    return c;
  };
}

export function interpolate<T extends Interpolatable>(from: T, to: T): Interpolate<T> {
  if (typeof from === 'number' && typeof to === 'number') {
    // @ts-ignore
    return numberInterpolate(from, to);
  }
  if (Array.isArray(from) && Array.isArray(to)) {
    // @ts-ignore
    return arrayInterpolate(from, to);
  }
  if (typeof from === 'object' && typeof to === 'object') {
    // @ts-ignore
    return objectInterpolate(
      from as { [keys: string]: PrimitiveInterpolatable },
      to as { [keys: string]: PrimitiveInterpolatable }
    );
  }
  return ((t: T) => from) as Interpolate<T>;
}
