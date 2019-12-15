import { camelCase } from './util/utils';

const req = require.context('./chart', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach((mod: any) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v;
    } else {
      exports[camelCase(match[1])] = v;
    }
  }
});

module.exports = require('./chart');
