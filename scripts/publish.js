const shell = require('shelljs');
const path = require('path');

publishToNpm();

function publishToNpm() {
  // eslint-disable-next-line global-require
  const { version } = require(path.join('../', 'package.json'));
  if (version.includes('-rc.') || version.includes('-beta.') || version.includes('-alpha.')) {
    shell.exec('npm publish --access public --tag next');
  } else {
    shell.exec('npm publish --access public');
  }
  shell.exec('git add .');
  shell.exec(`git commit -m 'publish version:${version}'`);
  shell.exec('git push');
}
