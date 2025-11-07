const path = require("path");
const TsconfigPathsPlugin = require("../");

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: "./index",
  output: {
    path: path.join(__dirname, "temp"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        exclude: /^node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "./example/tsconfig.json",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
        logLevel: "info",
        extensions: [".ts", ".tsx"],
        mainFields: ["browser", "main"],
        references: ["../example/tsconfig.json"]
        // baseUrl: "/foo"
      }),
    ],
  },
};
