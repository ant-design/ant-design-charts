import { isType } from '../../src';

describe('Is type', () => {
  it('run', () => {
    expect(isType('s', 'String')).toBeTruthy();
    expect(isType(0, 'Number')).toBeTruthy();
    expect(isType({}, 'Object')).toBeTruthy();
    expect(isType(undefined, 'Undefined')).toBeTruthy();
    expect(isType(null, 'Null')).toBeTruthy();
    expect(isType(NaN, 'Number')).toBeTruthy();
    expect(isType([1, 2], 'Array')).toBeTruthy();
  });
});
