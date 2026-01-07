#!/usr/bin/env node

import {program} from "commander";
import {readFileSync} from "fs";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {createContext, Script} from "vm";
import * as d3Geo from "d3-geo";
import * as d3GeoProjection from "../src/index.js";
import {geoProject} from "../src/index.js";
import read from "./read.js";
import write from "./write.js";

const version = JSON.parse(readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), "../package.json"))).version;

const d3 = {...d3Geo, ...d3GeoProjection};

const options = program
    .version(version)
    .usage("[options] <projection> [file]")
    .description("Transform GeoJSON, such as to project from spherical to planar coordinates.")
    .option("-o, --out <file>", "output file name; defaults to “-” for stdout", "-")
    .option("-p, --precision <value>", "number of output digits after the decimal point")
    .option("-n, --newline-delimited", "use newline-delimited JSON")
    .option("-r, --require <[name=]module>", "require (import) a module", require, [])
    .parse(process.argv)
    .opts();

if (program.args.length < 1) {
  console.error();
  console.error("  error: missing projection");
  console.error();
  process.exit(1);
} else if (program.args.length > 2) {
  console.error();
  console.error("  error: multiple input files");
  console.error();
  process.exit(1);
} else if (program.args.length === 1) {
  program.args.push("-");
}

var reader = projection().then(project => read(program.args[1], options.newlineDelimited, project)).then(end),
    writer = write(options.out);

reader.catch(error => {
  console.error(error.stack);
});

async function projection() {
  const sandbox = {d3, d: undefined, i: undefined};
  for (const [name, module] of await Promise.all(options.require)) {
    sandbox[name] = sandbox[name] ? {...sandbox[name], ...module} : module;
  }
  const context = createContext(sandbox);
  const projection = new Script("(" + program.args[0] + ")");
  return function project(d, i) {
    sandbox.d = d, sandbox.i = i;
    d = geoProject(d, projection.runInContext(context));
    if (options.precision != null) d = geoQuantize(d, options.precision);
    return writer.write(JSON.stringify(d) + "\n");
  };
}

function end() {
  return writer.end();
}

function require(module, requires) {
  var i = module.indexOf("="), name = module;
  if (i >= 0) name = module.slice(0, i), module = module.slice(i + 1);
  requires.push(import(module).then(module => [name, module]));
  return requires;
}
