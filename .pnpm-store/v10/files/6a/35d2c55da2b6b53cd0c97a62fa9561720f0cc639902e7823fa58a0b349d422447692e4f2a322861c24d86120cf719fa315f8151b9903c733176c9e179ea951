# isomorphic-rslog

A tiny, intuitive, type-friendly logger for Node.js/Browser.

- **Tiny**. [1.5kB gzipped](https://bundlephobia.com/package/isomorphic-rslog@latest).
- **Clean**. Zero dependencies.
- **Intuitive**. Clear log prefix.
- **Type-friendly**. Written in TypeScript.

## Preview

### Node.js

<img width="564" alt="node" src="https://github.com/user-attachments/assets/16362210-4e36-4f64-8722-bd9e37e84729">

### Browser

<img width="936" alt="browser" src="https://github.com/user-attachments/assets/4c17f94e-5760-497a-8d1d-33c8dd395fbc">

## Install

```bash
# with npm
npm add isomorphic-rslog

# with yarn
yarn add isomorphic-rslog

# with pnpm
pnpm add isomorphic-rslog

# with bun
bun add isomorphic-rslog
```

## Usage

- Require:

```js
// with require
const { logger } = require('isomorphic-rslog');

// with import
import { logger } from 'isomorphic-rslog';
```

- Log:

```js
// A gradient welcome log
logger.greet(`\n➜ Rslog v1.0.0\n`);

// Info
logger.info('This is a info message');

// Start
logger.start('This is a start message');

// Warn
logger.warn('This is a warn message');

// Ready
logger.ready('This is a ready message');

// Success
logger.success('This is a success message');

// Error
logger.error('This is a error message');
logger.error(new Error('This is a error message with stack'));

// Debug
logger.debug('This is a debug message');

// Same as console.log
logger.log('This is a log message');
```

## Log Level

You can create a new logger instance through `createLogger` and specify the log level:

```js
import { createLogger } from 'isomorphic-rslog';

const logger = createLogger({ level: 'warn' });

// Will print
logger.error('This is a error message');
logger.warn('This is a warn message');

// Will not print
logger.info('This is a info message');
logger.log('This is a log message');
```

You can also directly modify the level attribute of the logger instance:

```js
logger.level = 'verbose';
```

The log levels of each method are as follows:

| Level   | Method                              |
| ------- | ----------------------------------- |
| error   | `error`                             |
| warn    | `warn`                              |
| info    | `info`, `start`, `ready`, `success` |
| log     | `log`                               |
| verbose | `debug`                             |

## Label Prefix

You can create a new logger instance through `createLogger` and specify the label prefix:

```js
import { createLogger } from 'isomorphic-rslog';

const logger = createLogger({ level: 'warn' });

const logger = createLogger({
  labels: {
    warn: '[ Prefix ] Warn',
    error: '[ Prefix ] Error',
    success: '[ Prefix ] Success',
    info: '[ Prefix ] Info',
    ready: '[ Prefix ] Ready',
    debug: '[ Prefix ] Debug',
  },
});

logger.info('this is an info message');
logger.warn('this is a warn message');
logger.ready('this is a ready message');
logger.debug('this is a debug message');
logger.success('this is a success message');
```
<img width="393" alt="prefix" src="https://github.com/user-attachments/assets/d0d8f1c2-ca1c-4fdd-9b32-8e2ea7b54ea3">


## Override

You can use `logger.override` to override some or all methods of the default logger.

```js
import { logger } from 'isomorphic-rslog';

logger.override({
  log: message => {
    console.log(`[LOG] ${message}`);
  },
  info: message => {
    console.log(`[INFO] ${message}`);
  },
  warn: message => {
    console.log(`[WARN] ${message}`);
  },
  error: message => {
    console.log(`[ERROR] ${message}`);
  },
});
```

## Environment

`isomorphic-rslog` provides both CommonJS and ESModule output and supports Node.js >= 14.

## Credits

`isomorphic-rslog` is fork from [rslog](https://github.com/rspack-contrib/rslog).

`isomorphic-rslog` is built with [Modern.js](https://github.com/web-infra-dev/modern.js).

The color implementation of `isomorphic-rslog` are modified from [alexeyraspopov/picocolors](https://github.com/alexeyraspopov/picocolors).

## License

`isomorphic-rslog` is [MIT licensed](https://github.com/2heal1/isomorphic-rslog/blob/main/LICENSE).
