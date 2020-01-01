const shell = require('shelljs');
const path = require('path');

publishToTnpm();

function publishToTnpm() {
  // eslint-disable-next-line global-require
  const { version } = require(path.join('../', 'package.json'));
  if (version.includes('-rc.') || version.includes('-beta.') || version.includes('-alpha.')) {
    shell.exec('tnpm publish --tag next');
  } else {
    shell.exec('tnpm publish');
  }
}
