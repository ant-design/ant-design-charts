import { clone, isType } from '../../src/util';

describe('utils', () => {
  it('is type', () => {
    expect(isType('s', 'String')).toBeTruthy();
    expect(isType(0, 'Number')).toBeTruthy();
    expect(isType({}, 'Object')).toBeTruthy();
    expect(isType(undefined, 'Undefined')).toBeTruthy();
    expect(isType(null, 'Null')).toBeTruthy();
    expect(isType(NaN, 'Number')).toBeTruthy();
    expect(isType([1, 2], 'Array')).toBeTruthy();
  });

  it('clone', () => {
    const config = {
      statistic: {
        content: {
          customHtml: 'html',
        },
        title: {},
      },
    };
    expect(clone(undefined)).toBeUndefined();
    expect(clone(config)).toEqual(config);
    config.__proto__.name = 'fj';
    expect(clone(config)).toEqual({
      statistic: {
        content: {
          customHtml: 'html',
        },
        title: {},
      },
      name: 'fj',
    });
  });
});
