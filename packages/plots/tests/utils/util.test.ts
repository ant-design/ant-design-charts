import { getPathConfig, clone, isType, setPathConfig } from '../../src/utils';

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
    expect(getPathConfig(undefined, ['noPath'])).toBeUndefined();
    expect(getPathConfig(config, ['statistic', 'content', 'customHtml'])).toBe('html');
    expect(getPathConfig(config, ['statistic', 'title', 'customHtml'])).toBeUndefined();
    expect(getPathConfig(config, [])).toEqual(config);
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
    expect(setPathConfig(undefined, ['noPath'])).toBeUndefined();
    expect(setPathConfig(config, [])).toEqual(config);
    expect(setPathConfig(config, ['statistic', 'title', 'customHtml'], 'title')).toEqual({
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
