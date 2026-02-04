// src/forkTSChecker/childProcessFork.ts
var import_tsChecker = require('./tsChecker');
var projectRoot = process.argv[2];
async function runTypeCheck() {
  const typeChecker = new import_tsChecker.TypeChecker(projectRoot);
  return await typeChecker.check();
}
runTypeCheck()
  .then(() => {
    process.exit(1);
  })
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
