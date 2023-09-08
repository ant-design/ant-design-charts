import { getPathConfig, setPathConfig } from '../../src/util';

describe('utils', () => {
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
});
