const fs = require("fs");
const webpack = require("webpack");

const config = require("./webpack.config");

const compiler = webpack(config);

compiler.inputFileSystem = fs;

compiler.run(function (error, stats) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }

  if (stats.compilation.errors.length) {
    stats.compilation.errors.forEach((compilationError) => {
      console.error(compilationError);
    });

    return process.exit(1);
  }

  console.log("Successfully compiled");
});
