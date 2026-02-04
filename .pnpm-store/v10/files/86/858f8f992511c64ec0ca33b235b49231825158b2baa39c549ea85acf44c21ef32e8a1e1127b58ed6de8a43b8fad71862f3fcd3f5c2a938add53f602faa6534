import isArray from './is-array';
import isPlainObject from './is-plain-object';

const MAX_MIX_LEVEL = 5;

function _deepMix(dist, src, level?, maxLevel?) {
  level = level || 0;
  maxLevel = maxLevel || MAX_MIX_LEVEL;
  for (const key in src) {
    if (src.hasOwnProperty(key)) {
      const value = src[key];
      if (value !== null && isPlainObject(value)) {
        if (!isPlainObject(dist[key])) {
          dist[key] = {};
        }
        if (level < maxLevel) {
          _deepMix(dist[key], value, level + 1, maxLevel);
        } else {
          dist[key] = src[key];
        }
      } else if (isArray(value)) {
        dist[key] = [];
        dist[key] = dist[key].concat(value);
      } else if (value !== undefined) {
        dist[key] = value;
      }
    }
  }
}

// todo 重写
const deepMix = function(rst:any, ...args:any[]) {
  for (let i = 0; i < args.length; i += 1) {
    _deepMix(rst, args[i]);
  }
  return rst;
};

export default deepMix;
