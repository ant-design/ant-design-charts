System.register(['@babel/helper-module-imports', '@babel/types', 'aslemammad-vite-plugin-macro', 'babel-plugin-macros'], (function (exports) {
  'use strict';
  var babelModuleImports, t, plugin, babelMacro;
  return {
    setters: [function (module) {
      babelModuleImports = module;
    }, function (module) {
      t = module;
    }, function (module) {
      plugin = module;
    }, function (module) {
      babelMacro = module;
    }],
    execute: (function () {

      exports("provideValtioMacro", provideValtioMacro);

      const { defineMacro, defineMacroProvider, createMacroPlugin } = (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "default" in plugin ? plugin.default : plugin
      );
      const valtioMacro = exports("valtioMacro", defineMacro(`useProxy`).withSignature(`<T extends object>(proxyObject: T): void`).withHandler((ctx) => {
        var _a, _b, _c, _d;
        const { path, args } = ctx;
        const hook = babelModuleImports.addNamed(path, "useSnapshot", "valtio");
        const proxy = (_a = args[0]) == null ? void 0 : _a.node;
        if (!t.isIdentifier(proxy)) {
          throw new babelMacro.MacroError("no proxy object");
        }
        const snap = t.identifier(`valtio_macro_snap_${proxy.name}`);
        (_b = path.parentPath) == null ? void 0 : _b.replaceWith(
          t.variableDeclaration("const", [
            t.variableDeclarator(snap, t.callExpression(hook, [proxy]))
          ])
        );
        let inFunction = 0;
        (_d = (_c = path.parentPath) == null ? void 0 : _c.getFunctionParent()) == null ? void 0 : _d.traverse({
          Identifier(p) {
            if (inFunction === 0 && // in render
            p.node !== proxy && p.node.name === proxy.name) {
              p.node.name = snap.name;
            }
          },
          Function: {
            enter() {
              ++inFunction;
            },
            exit() {
              --inFunction;
            }
          }
        });
      }));
      function provideValtioMacro() {
        {
          console.warn("[DEPRECATED] Use useProxy hook instead.");
        }
        return defineMacroProvider({
          id: "valtio/macro",
          exports: {
            "valtio/macro": {
              macros: [valtioMacro]
            }
          }
        });
      }
      const macroPlugin = exports("default", createMacroPlugin({}).use(provideValtioMacro()));

    })
  };
}));
