var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
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
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  build: () => build2,
});
module.exports = __toCommonJS(src_exports);
var import_fs = __toESM(require('fs'));
var import_os = __toESM(require('os'));
var import_path = __toESM(require('path'));
var import_chalk = __toESM(require('chalk'));
var import_lodash = require('lodash');
var import_resolve = __toESM(require('resolve'));
var binding = __toESM(require('../binding'));
var import_forkTSChecker = require('./forkTSChecker');
var import_less = require('./plugins/less');
var import_postcss = require('./plugins/postcss');
var import_sass = require('./plugins/sass');
var import_rustPlugins = require('./rustPlugins');
function blockStdout() {
  if (process.stdout._handle != null) {
    process.stdout._handle.setBlocking(true);
  }
  if (process.stderr._handle != null) {
    process.stderr._handle.setBlocking(true);
  }
}
async function build2(params) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  blockStdout();
  if (!__dirname.includes('node_modules')) {
    console.log(
      import_chalk.default.red(
        'NOTICE: Mako is running in DEBUG mode with local build...',
      ),
    );
  }
  params.config.plugins = params.config.plugins || [];
  params.config.resolve = params.config.resolve || {};
  const rustPlugins =
    (_a = params.config.experimental) == null ? void 0 : _a.rustPlugins;
  if (rustPlugins) {
    params.config.experimental.rustPlugins = await (0,
    import_rustPlugins.rustPluginResolver)(rustPlugins);
  }
  let makoConfig = {};
  let makoConfigPath = import_path.default.join(
    params.root,
    'mako.config.json',
  );
  if (import_fs.default.existsSync(makoConfigPath)) {
    try {
      makoConfig = JSON.parse(
        import_fs.default.readFileSync(makoConfigPath, 'utf-8'),
      );
    } catch (e) {
      throw new Error(`Parse mako.config.json failed: ${e.message}`);
    }
  }
  params.config.resolve.alias = [
    ...(((_b = makoConfig.resolve) == null ? void 0 : _b.alias) || []),
    ...(((_c = params.config.resolve) == null ? void 0 : _c.alias) || []),
    // we still need @swc/helpers
    // since features like decorator or legacy browser support will
    // inject helper functions in the build transform step
    [
      '@swc/helpers',
      import_path.default.dirname(require.resolve('@swc/helpers/package.json')),
    ],
    [
      'node-libs-browser-okam',
      import_path.default.dirname(
        require.resolve('node-libs-browser-okam/package.json'),
      ),
    ],
    [
      'react-refresh',
      import_path.default.dirname(
        require.resolve('react-refresh/package.json'),
      ),
    ],
    [
      'react-error-overlay',
      import_path.default.dirname(
        require.resolve('react-error-overlay/package.json'),
      ),
    ],
  ];
  const resolveAlias =
    ((_e = (_d = params.config.resolve) == null ? void 0 : _d.alias) == null
      ? void 0
      : _e.reduce((accumulator, currentValue) => {
          accumulator[currentValue[0]] = currentValue[1];
          return accumulator;
        }, {})) || {};
  if (
    (makoConfig == null ? void 0 : makoConfig.postcss) ||
    ((_f = params.config) == null ? void 0 : _f.postcss)
  ) {
    params.config.postcss = true;
    params.config.plugins.push(
      // @ts-ignore
      new import_postcss.PostcssPlugin({
        ...params,
        resolveAlias,
      }),
    );
  }
  params.config.plugins.push(
    // @ts-ignore
    new import_less.LessPlugin({
      ...params,
      resolveAlias,
    }),
  );
  if (
    (makoConfig == null ? void 0 : makoConfig.sass) ||
    ((_g = params.config) == null ? void 0 : _g.sass)
  ) {
    params.config.sass = {
      ...((makoConfig == null ? void 0 : makoConfig.sass) || {}),
      ...(((_h = params.config) == null ? void 0 : _h.sass) || {}),
    };
    params.config.plugins.push(
      // @ts-ignore
      new import_sass.SassPlugin({
        ...params,
        resolveAlias,
      }),
    );
  }
  if (
    (makoConfig == null ? void 0 : makoConfig.moduleFederation) ||
    ((_i = params.config) == null ? void 0 : _i.moduleFederation)
  ) {
    const moduleFederation = {
      ...(makoConfig.moduleFederation || {}),
      ...(params.config.moduleFederation || {}),
    };
    if (!moduleFederation.implementation) {
      moduleFederation.implementation = require.resolve(
        '@module-federation/webpack-bundler-runtime',
      );
    }
    if (moduleFederation == null ? void 0 : moduleFederation.shared) {
      if (Array.isArray(moduleFederation.shared)) {
        moduleFederation.shared = moduleFederation.shared.reduce(
          (acc, cur) => ({ ...acc, [cur]: {} }),
          {},
        );
      }
    }
    params.config.moduleFederation = moduleFederation;
  }
  if (process.env.DUMP_MAKO_CONFIG) {
    const configFile = import_path.default.join(
      params.root,
      'mako.config.json',
    );
    import_fs.default.writeFileSync(
      configFile,
      JSON.stringify(params.config, null, 2),
    );
  }
  if (process.env.XCODE_PROFILE) {
    await new Promise((resolve2) => {
      const readline = require('readline');
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(
        `Xcode profile enabled. Current process ${process.title} (${process.pid}) . Press Enter to continue...
`,
        () => {
          rl.close();
          resolve2();
        },
      );
    });
  }
  let plugins = params.config.plugins;
  plugins = plugins.map((plugin) => {
    if (typeof plugin === 'string') {
      let fn = require(
        import_resolve.default.sync(plugin, {
          basedir: params.root,
        }),
      );
      return fn.default || fn;
    } else {
      return plugin;
    }
  });
  (_j = makoConfig.plugins) == null
    ? void 0
    : _j.forEach((plugin) => {
        if (typeof plugin === 'string') {
          let fn = require(
            import_resolve.default.sync(plugin, {
              basedir: params.root,
            }),
          );
          plugins.push(fn.default || fn);
        } else {
          throw new Error(
            `Invalid plugin: ${plugin} in mako.config.json, only support string type plugin here.`,
          );
        }
      });
  plugins.forEach((plugin) => {
    if (plugin.__isPatched) {
      return;
    }
    plugin.__isPatched = true;
    Object.keys(plugin).forEach((key) => {
      const oldValue = plugin[key];
      if (typeof oldValue === 'function') {
        plugin[key] = (context, ...args) => {
          let result = oldValue.apply(
            {
              // https://rollupjs.org/plugin-development/#this-parse
              parse(_code) {
                throw new Error('parse is not supported');
              },
              // https://rollupjs.org/plugin-development/#this-addwatchfile
              addWatchFile(_file) {
                throw new Error('addWatchFile is not supported');
              },
              // https://rollupjs.org/plugin-development/#this-emitfile
              // only support asset type
              emitFile(file) {
                if (file.type !== 'asset') {
                  throw new Error('emitFile only support asset type');
                }
                if (file.name && !file.fileName) {
                  throw new Error(
                    'name in emitFile is not supported yet, please supply fileName instead',
                  );
                }
                const tmpFile = import_path.default.join(
                  import_os.default.tmpdir(),
                  Math.random().toString(36).substring(2, 15),
                );
                import_fs.default.writeFileSync(tmpFile, file.source);
                context.emitFile(tmpFile, file.fileName);
              },
              warn(message) {
                if (typeof message === 'object') {
                  const msg = [
                    message.message,
                    message.pluginCode
                      ? `pluginCode: ${message.pluginCode}`
                      : '',
                    message.meta ? `meta: ${message.meta}` : '',
                  ]
                    .filter(Boolean)
                    .join('\n');
                  context.warn(msg);
                } else {
                  context.warn(message);
                }
              },
              error(message) {
                if (typeof message === 'object') {
                  const msg = [
                    message.message,
                    message.pluginCode
                      ? `pluginCode: ${message.pluginCode}`
                      : '',
                    message.meta ? `meta: ${message.meta}` : '',
                  ]
                    .filter(Boolean)
                    .join('\n');
                  context.error(msg);
                } else {
                  context.error(message);
                }
              },
            },
            [...args],
          );
          if (key === 'load' || key === 'transform') {
            if (result === null) {
              result = args[0];
            }
            const isPromise = typeof result === 'object' && result.then;
            if (isPromise) {
              result = result.then((result2) => adapterResult(result2));
            } else {
              result = adapterResult(result);
            }
          }
          if (key === 'resolveId') {
            if (typeof result === 'string') {
              result = {
                id: result,
                external: false,
              };
            }
          }
          return result;
        };
      }
    });
  });
  params.config = (0, import_lodash.omit)(params.config, [
    'less',
    'sass',
    'postcss',
    'forkTSChecker',
    'plugins',
  ]);
  await binding.build({
    ...params,
    plugins,
  });
  if (params.config.forkTSChecker) {
    let forkTypeChecker = new import_forkTSChecker.ForkTSChecker({
      root: params.root,
      watch: params.watch,
    });
    forkTypeChecker.runTypeCheckInChildProcess();
  }
}
function adapterResult(result) {
  if (typeof result === 'string') {
    return {
      content: result,
      type: 'tsx',
    };
  } else if (typeof result === 'object' && result.code) {
    return {
      content: result.code,
      type: 'tsx',
    };
  }
  return result;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    build,
  });
