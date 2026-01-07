const enhancedResolve = require("enhanced-resolve");
const path = require("path");

/* eslint-disable class-methods-use-this */
const trailingSlash = /[/\\]$/;

// This somewhat changed in Less 3.x. Now the file name comes without the
// automatically added extension whereas the extension is passed in as `options.ext`.
// So, if the file name matches this regexp, we simply ignore the proposed extension.
const IS_SPECIAL_MODULE_IMPORT = /^~[^/]+$/;

// `[drive_letter]:\` + `\\[server]\[share_name]\`
const IS_NATIVE_WIN32_PATH = /^[a-z]:[/\\]|^\\\\/i;

// Examples:
// - ~package
// - ~package/
// - ~@org
// - ~@org/
// - ~@org/package
// - ~@org/package/
const IS_MODULE_IMPORT =
  /^~([^/]+|[^/]+\/|@[^/]+[/][^/]+|@[^/]+\/?|@[^/]+[/][^/]+\/)$/;
const MODULE_REQUEST_REGEX = /^[^?]*~/;

function parseOptions(options) {
    return options.split('&').reduce((acc, cur) => {
        const [key, value] = cur.split('=');
        acc[key] = value;
        return acc;
    }, {});
}

class LessAliasesPlugin {
    constructor(options) {
        this.options = options;
    }
    setOptions(options) {
        const parsedOptions = parseOptions(options);
        this.options = {
            aliases: parsedOptions,
        };
    }
    install(less, pluginManager) {
        const { aliases, urlRewriteTargetPath } = this.options;

        const resolver = enhancedResolve.create({
            alias: aliases,
            dependencyType: "less",
            conditionNames: ["less", "style", "..."],
            mainFields: ["less", "style", "main", "..."],
            mainFiles: ["index", "..."],
            extensions: [".less", ".css"],
            preferRelative: true,
        });

        async function resolve(context, path) {
            return new Promise((resolve, reject) => {
                resolver(context, path, (err, result) =>
                    err ? reject(err) : resolve(result),
                );
            });
        }

        class ResolvedFileManager extends less.FileManager {
          supports(filename) {
            if (filename[0] === "/" || IS_NATIVE_WIN32_PATH.test(filename)) {
              return true;
            }

            if (this.isPathAbsolute(filename)) {
              return false;
            }

            return true;
          }

          // Sync resolving is used at least by the `data-uri` function.
          // This file manager doesn't know how to do it, so let's delegate it
          // to the default file manager of Less.
          // We could probably use loaderContext.resolveSync, but it's deprecated,
          // see https://webpack.js.org/api/loaders/#this-resolvesync
        supportsSync() {
            return false;
        }

        async resolveFilename(filename, currentDirectory) {
            // Less is giving us trailing slashes, but the context should have no trailing slash
            const context = currentDirectory.replace(trailingSlash, "");

            let request = filename;

            // A `~` makes the url an module
            if (MODULE_REQUEST_REGEX.test(filename)) {
                request = request.replace(MODULE_REQUEST_REGEX, "");
            }

            if (IS_MODULE_IMPORT.test(filename)) {
                request = request[request.length - 1] === "/" ? request : `${request}/`;
            }

            return this.resolveRequests(context, [...new Set([request, filename])]);
        }

          async resolveRequests(context, possibleRequests) {
            if (possibleRequests.length === 0) {
              return Promise.reject();
            }

            let result;

            try {
                result = await resolve(context, possibleRequests[0]);
            } catch (error) {
                const [, ...tailPossibleRequests] = possibleRequests;

                if (tailPossibleRequests.length === 0) {
                    throw error;
                }

                result = await this.resolveRequests(context, tailPossibleRequests);
            }

            return result;
          }

          async loadFile(filename, ...args) {
            let result;

            try {
              if (IS_SPECIAL_MODULE_IMPORT.test(filename)) {
                const error = new Error();

                error.type = "Next";

                throw error;
              }

              result = await super.loadFile(filename, ...args);
            } catch (error) {
              if (error.type !== "File" && error.type !== "Next") {
                return Promise.reject(error);
              }

              try {
                result = await this.resolveFilename(filename, ...args);
              } catch (webpackResolveError) {
                error.message =
                  `Less resolver error:\n${error.message}\n\n` +
                  `Enhanced resolver error details:\n${webpackResolveError.details}\n\n` +
                  `Enhanced resolver error missing:\n${webpackResolveError.missing}\n\n`;

                return Promise.reject(error);
              }

              return super.loadFile(result, ...args);
            }

            return result;
          }
        }

        class UrlVisitor {
          constructor(options) {
            this.isReplacing = true;
            this.isPreEvalVisitor = true;

            this._options = options;
            this._visitor = new less.visitors.Visitor(this);
          }
          run(root) {
            return this._visitor.visit(root);
          }
          visitUrl(node, _visitArgs) {
            const isRelative = node.value.value.startsWith('./') || node.value.value.startsWith('../');
            if (isRelative) {
              const filename = node._fileInfo && node._fileInfo.filename
              if (filename) {
                const assetPath = path.resolve(path.dirname(filename), node.value.value);
                const relativePath = path.relative(
                  path.dirname(urlRewriteTargetPath),
                  assetPath
                );
                node.value.value = winPath(relativePath)
              }
            }
            return node
          }
        }

        pluginManager.addFileManager(new ResolvedFileManager());
        if (urlRewriteTargetPath) {
          pluginManager.addVisitor(new UrlVisitor());
        }
    }
}

function winPath(path) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, '/');
}


module.exports = LessAliasesPlugin;
