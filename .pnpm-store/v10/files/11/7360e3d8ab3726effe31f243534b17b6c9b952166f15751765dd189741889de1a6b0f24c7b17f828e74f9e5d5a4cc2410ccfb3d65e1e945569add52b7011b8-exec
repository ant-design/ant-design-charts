#!/usr/bin/env node

import {program} from "commander";
import {readFileSync} from "fs";
import {dirname, resolve} from "path";
import {fileURLToPath} from "url";
import {geoStitch} from "../src/index.js";
import read from "./read.js";
import write from "./write.js";

const version = JSON.parse(readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), "../package.json"))).version;

const options = program
    .version(version)
    .usage("[options] [file]")
    .description("Stitch equirectangular GeoJSON in degrees, removing antimeridian and polar cuts.")
    .option("-o, --out <file>", "output file name; defaults to “-” for stdout", "-")
    .option("-n, --newline-delimited", "use newline-delimited JSON")
    .parse(process.argv)
    .opts();

if (program.args.length === 0) program.args[0] = "-";
else if (program.args.length !== 1) {
  console.error();
  console.error("  error: multiple input files");
  console.error();
  process.exit(1);
}

var reader = read(program.args[0], options.newlineDelimited, stitch).then(end),
    writer = write(options.out);

reader.catch(error => {
  console.error(error.stack);
});

function stitch(d) {
  return writer.write(JSON.stringify(geoStitch(d)) + "\n");
}

function end() {
  return writer.end();
}
