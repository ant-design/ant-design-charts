function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = _interopDefault(require('path'));
var loaderUtils = _interopDefault(require('loader-utils'));
var NodeTargetPlugin = _interopDefault(require('webpack/lib/node/NodeTargetPlugin'));
var SingleEntryPlugin = _interopDefault(require('webpack/lib/SingleEntryPlugin'));
var WebWorkerTemplatePlugin = _interopDefault(require('webpack/lib/webworker/WebWorkerTemplatePlugin'));

function loader() {}
var CACHE = {};
var tapName = 'workerize-loader';

function compilationHook(compiler, handler) {
  if (compiler.hooks) {
    return compiler.hooks.compilation.tap(tapName, handler);
  }

  return compiler.plugin('compilation', handler);
}

function parseHook(data, handler) {
  if (data.normalModuleFactory.hooks) {
    return data.normalModuleFactory.hooks.parser.for('javascript/auto').tap(tapName, handler);
  }

  return data.normalModuleFactory.plugin('parser', handler);
}

function exportDeclarationHook(parser, handler) {
  if (parser.hooks) {
    return parser.hooks.exportDeclaration.tap(tapName, handler);
  }

  return parser.plugin('export declaration', handler);
}

loader.pitch = function (request) {
  var _this = this;

  this.cacheable(false);
  var options = loaderUtils.getOptions(this) || {};
  var cb = this.async();
  var compilerOptions = this._compiler.options || {};
  var filename = (options.name || '[fullhash]') + '.worker.js';
  var worker = {};
  worker.options = {
    filename: filename,
    chunkFilename: filename,
    publicPath: options.publicPath || compilerOptions.output.publicPath,
    globalObject: 'self'
  };

  if (compilerOptions.output && compilerOptions.output.globalObject === 'window') {
    console.warn('Warning (workerize-loader): output.globalObject is set to "window". It should be set to "self" or "this" to support HMR in Workers.');
  }

  worker.compiler = this._compilation.createChildCompiler("worker " + request, worker.options);
  new WebWorkerTemplatePlugin(worker.options).apply(worker.compiler);

  if (this.target !== 'webworker' && this.target !== 'web') {
    new NodeTargetPlugin().apply(worker.compiler);
  } // webpack >= v4 supports webassembly


  var wasmPluginPath = null;

  try {
    wasmPluginPath = require.resolve('webpack/lib/web/FetchCompileWasmTemplatePlugin');
  } catch (_err) {// webpack <= v3, skipping
  }

  if (wasmPluginPath) {
    // eslint-disable-next-line global-require
    var FetchCompileWasmTemplatePlugin = require(wasmPluginPath);

    new FetchCompileWasmTemplatePlugin({
      mangleImports: this._compiler.options.optimization.mangleWasmImports
    }).apply(worker.compiler);
  }

  var bundleName = path.parse(this.resourcePath).name;
  new SingleEntryPlugin(this.context, "!!" + path.resolve(__dirname, 'rpc-worker-loader.js') + "!" + request, bundleName).apply(worker.compiler);
  compilationHook(worker.compiler, function (compilation, data) {
    parseHook(data, function (parser, options) {
      exportDeclarationHook(parser, function (expr) {
        var decl = expr.declaration || expr;
        var _parser$state = parser.state,
            compilation = _parser$state.compilation,
            current = _parser$state.current;
        var entryModule = compilation.entries instanceof Map ? compilation.moduleGraph.getModule(compilation.entries.get(bundleName).dependencies[0]) : compilation.entries[0]; // only process entry exports

        if (current.resource !== entryModule.resource) return;
        var key = current.nameForCondition();
        var exports = CACHE[key] || (CACHE[key] = {});

        if (decl.id) {
          exports[decl.id.name] = true;
        } else if (decl.declarations) {
          for (var i = 0; i < decl.declarations.length; i++) {
            exports[decl.declarations[i].id.name] = true;
          }
        } else {
          console.warn('[workerize] unknown export declaration: ', expr);
        } // This is for Webpack 5: mark the exports as used so it does not get tree-shaken away on production build


        if (compilation.moduleGraph) {
          var _require = require('webpack/lib/util/runtime'),
              getEntryRuntime = _require.getEntryRuntime;

          var _require2 = require('webpack'),
              UsageState = _require2.UsageState;

          var runtime = getEntryRuntime(compilation, bundleName);

          for (var _i = 0, _Object$keys = Object.keys(exports); _i < _Object$keys.length; _i++) {
            var exportName = _Object$keys[_i];
            var exportInfo = compilation.moduleGraph.getExportInfo(entryModule, exportName);
            exportInfo.setUsed(UsageState.Used, runtime);
            exportInfo.canMangleUse = false;
            exportInfo.canMangleProvide = false;
          }

          compilation.moduleGraph.addExtraReason(entryModule, 'used by workerize-loader');
        }
      });
    });
  });
  worker.compiler.runAsChild(function (err, entries, compilation) {
    if (err) return cb(err);

    if (entries[0]) {
      worker.file = Array.from(entries[0].files)[0];
      var entryModules = compilation.chunkGraph && compilation.chunkGraph.getChunkEntryModulesIterable ? Array.from(compilation.chunkGraph.getChunkEntryModulesIterable(entries[0])) : null;
      var entryModule = entryModules && entryModules.length > 0 ? entryModules[0] : entries[0].entryModule;
      var key = entryModule.nameForCondition();
      var contents = compilation.assets[worker.file].source();
      var exports = Object.keys(CACHE[key] || {}); // console.log('Workerized exports: ', exports.join(', '));

      if (options.inline) {
        worker.url = "URL.createObjectURL(new Blob([" + JSON.stringify(contents) + "]))";
      } else if (options.publicPath) {
        worker.url = "" + JSON.stringify(options.publicPath + worker.file);
      } else {
        worker.url = "__webpack_public_path__ + " + JSON.stringify(worker.file);
      }

      if (options.fallback === false) {
        delete _this._compilation.assets[worker.file];
      }

      var workerUrl = worker.url;

      if (options.import) {
        workerUrl = "\"data:,importScripts('\"+new URL(" + workerUrl + ",location.origin)+\"')\"";
      } // workerUrl will be URL.revokeObjectURL() to avoid memory leaks on browsers
      // https://github.com/webpack-contrib/worker-loader/issues/208


      return cb(null, "\n\t\t\t\tvar addMethods = require(" + loaderUtils.stringifyRequest(_this, path.resolve(__dirname, 'rpc-wrapper.js')) + ")\n\t\t\t\tvar methods = " + JSON.stringify(exports) + "\n\t\t\t\tmodule.exports = function() {\n\t\t\t\t\tvar w = new Worker(" + workerUrl + ", { name: " + JSON.stringify(filename) + " })\n\t\t\t\t\tURL.revokeObjectURL(" + workerUrl + ");\n\t\t\t\t\taddMethods(w, methods)\n\t\t\t\t\t" + (options.ready ? 'w.ready = new Promise(function(r) { w.addEventListener("ready", function(){ r(w) }) })' : '') + "\n\t\t\t\t\treturn w\n\t\t\t\t}\n\t\t\t");
    }

    return cb(null, null);
  });
};

module.exports = loader;
//# sourceMappingURL=index.js.map
