var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod,
  )
);

// src/cli.ts
var import_chalk = __toESM(require('chalk'));
var import_yargs_parser = __toESM(require('yargs-parser'));
var import_checker = require('./checker');
(async () => {
  process.env.MAKO_CLI = '1';
  console.log();
  console.log(
    import_chalk.default.bold(`Mako v${require('../package.json').version}`),
  );
  console.log();
  let argv = (0, import_yargs_parser.default)(process.argv.slice(2));
  let command = argv._[0];
  switch (command) {
    case 'build':
      if (argv.help || argv.h) {
        showBuildHelp();
        break;
      }
      let watch = argv.watch || argv.w || false;
      let root = argv.root || process.cwd();
      (0, import_checker.check)(root);
      await require('./').build({
        root,
        config: {
          mode: argv.mode || 'development',
        },
        plugins: [],
        watch,
      });
      if (watch) {
        break;
      }
      process.exit(0);
    case void 0:
      if (argv.version || argv.v) {
        console.log(require('../package.json').version);
        break;
      } else {
        showHelp();
        break;
      }
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
function showHelp() {
  console.log(`Usage: mako <command> [options]`);
  console.log(``);
  console.log(`Commands:`);
  console.log(`  build`);
  console.log(``);
  console.log(`Options:`);
  console.log(`  --help,-h`);
  console.log(`  --version,-v`);
  console.log(``);
  console.log(`Examples:`);
  console.log(`  mako build`);
  console.log(`  mako -v`);
}
function showBuildHelp() {
  console.log(`Usage: mako build [options]`);
  console.log(``);
  console.log(`Options:`);
  console.log(`  --help,-h`);
  console.log(`  --root`);
  console.log(`  --watch,-w`);
  console.log(``);
  console.log(`Examples:`);
  console.log(`  mako build`);
  console.log(`  mako build --watch`);
  console.log(`  mako build --root ./src`);
}
