import { deepAssign } from '../../src';

describe('Deep assign', () => {
  it('run', () => {
    expect(deepAssign({ a: 1 }, { a: 2 })).toEqual({ a: 2 });
    expect(deepAssign({ a: 1 }, { a: 2, b: 1 })).toEqual({ a: 2, b: 1 });
    expect(deepAssign({ a: 1, b: { c: { d: 1 } } }, { a: 1, b: { c: { d: 2, e: 1 } } })).toEqual({
      a: 1,
      b: { c: { d: 2, e: 1 } },
    });
    expect(deepAssign({ a: { b: 1 } }, { a: 2 })).toEqual({ a: 2 });
    expect(deepAssign({ a: { b: 1 } }, { a: { c: 1 } })).toEqual({ a: { b: 1, c: 1 } });
    expect(deepAssign({ a: { b: [1, 2, 3] } }, { a: 2 })).toEqual({ a: 2 });
    expect(deepAssign({ a: { b: ['b', 2, 'c'] } }, { a: { b: ['a', 2] } })).toEqual({ a: { b: ['a', 2] } });
    expect(deepAssign({ a: { b: [{ c: 1 }, { d: 2, e: 4 }] } }, { a: { b: [{ c: 2 }, { d: 3 }] } })).toEqual({
      a: { b: [{ c: 2 }, { d: 3 }] },
    });
    expect(deepAssign({ a: { b: { c: null } } }, { a: { b: { c: undefined } } })).toEqual({
      a: { b: { c: undefined } },
    });
  });
});
