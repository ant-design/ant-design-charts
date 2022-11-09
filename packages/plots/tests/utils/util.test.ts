import { hasPath, clone, isType, setPath } from '../../src/utils';

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

  it('has path', () => {
    const config = {
      statistic: {
        content: {
          customHtml: 'html',
        },
        title: {},
      },
    };
    expect(hasPath(undefined, ['noPath'])).toBeUndefined();
    expect(hasPath(config, ['statistic', 'content', 'customHtml'])).toBe('html');
    expect(hasPath(config, ['statistic', 'title', 'customHtml'])).toBeUndefined();
    expect(hasPath(config, [])).toEqual(config);
  });

  it('set path', () => {
    const config = {
      statistic: {
        content: {
          customHtml: 'html',
        },
        title: {},
      },
    };
    expect(setPath(undefined, ['noPath'])).toBeUndefined();
    expect(setPath(config, [])).toEqual(config);
    expect(setPath(config, ['statistic', 'title', 'customHtml'], 'title')).toEqual({
      statistic: {
        content: {
          customHtml: 'html',
        },
        title: {
          customHtml: 'title',
        },
      },
    });
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
    // @ts-ignore
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
