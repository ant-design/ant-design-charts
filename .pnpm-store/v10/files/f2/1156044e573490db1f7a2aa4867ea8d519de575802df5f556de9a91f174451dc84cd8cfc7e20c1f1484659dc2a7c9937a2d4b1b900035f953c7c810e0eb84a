/*
  Copyright © 2018 Andrew Powell

  This Source Code Form is subject to the terms of the Mozilla Public
  License, v. 2.0. If a copy of the MPL was not distributed with this
  file, You can obtain one at http://mozilla.org/MPL/2.0/.

  The above copyright notice and this permission notice shall be
  included in all copies or substantial portions of this Source Code Form.
*/
const chalk = require('chalk');
const loglevel = require('loglevelnext');
const nanoid = require('nanoid');

const defaults = {
  level: 'info',
  name: '<webpack-log>',
  timestamp: false,
  unique: true
};
const symbols = { ok: '⬡', whoops: '⬢' };
const colors = {
  trace: 'cyan',
  debug: 'magenta',
  info: 'blue',
  warn: 'yellow',
  error: 'red'
};

const getLogger = (opts) => {
  const options = Object.assign({}, defaults, opts);
  const prefix = {
    level: ({ level }) => {
      const color = colors[level];
      const symbol = ['error', 'warn'].includes(level) ? symbols.whoops : symbols.ok;
      return chalk[color](`${symbol} ${options.name}: `);
    },
    template: '{{level}}'
  };

  if (options.timestamp) {
    prefix.template = `[{{time}}] ${prefix.template}`;
  }

  options.id = options.name + (options.unique ? nanoid() : '');
  options.prefix = prefix;

  const log = loglevel.create(options);

  return log;
};

/* istanbul ignore next */
Object.defineProperty(getLogger, 'colors', {
  get() {
    const message =
      'The colors property in webpack-log exports is deprecated. Please install and use `chalk` or a similar ANSI color module.';
    process.emitWarning(message, { type: 'DeprecationWarning' });
    return chalk;
  }
});

// NOTE: Undocumented and unsupported. For testing only. Do not use.
getLogger.delete = (id) => {
  delete loglevel.loggers[id];
};

module.exports = getLogger;
