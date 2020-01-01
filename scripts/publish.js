/* eslint-disable global-require */

import { exec } from 'shelljs';
import { join } from 'path';

publishToTnpm();

function publishToTnpm() {
  console.log('start publish');
  // eslint-disable-next-line import/no-dynamic-require
  const { version } = require(join('../', 'package.json'));
  if (version.includes('-rc.') || version.includes('-beta.') || version.includes('-alpha.')) {
    exec('tnpm publish --tag next');
  } else {
    exec('tnpm publish');
  }
  console.log(`finished publish, version: ${version}`);
}
