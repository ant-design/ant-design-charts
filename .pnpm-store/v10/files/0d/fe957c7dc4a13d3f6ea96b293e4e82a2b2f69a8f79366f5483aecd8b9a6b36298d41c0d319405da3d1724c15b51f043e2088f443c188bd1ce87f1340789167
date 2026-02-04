import { addNamed } from '@babel/helper-module-imports';
import * as t from '@babel/types';
import { createMacro, MacroError } from 'babel-plugin-macros';

const macro = ({ references }) => {
  var _a;
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
    console.warn("[DEPRECATED] Use useProxy hook instead.");
  }
  (_a = references.useProxy) == null ? void 0 : _a.forEach((path) => {
    var _a2, _b, _c, _d, _e, _f;
    const hook = addNamed(path, "useSnapshot", "valtio");
    const proxy = (_b = (_a2 = path.parentPath) == null ? void 0 : _a2.get("arguments.0")) == null ? void 0 : _b.node;
    if (!t.isIdentifier(proxy))
      throw new MacroError("no proxy object");
    const snap = t.identifier(`valtio_macro_snap_${proxy.name}`);
    (_d = (_c = path.parentPath) == null ? void 0 : _c.parentPath) == null ? void 0 : _d.replaceWith(
      t.variableDeclaration("const", [
        t.variableDeclarator(snap, t.callExpression(hook, [proxy]))
      ])
    );
    let inFunction = 0;
    (_f = (_e = path.parentPath) == null ? void 0 : _e.getFunctionParent()) == null ? void 0 : _f.traverse({
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
  });
};
var macro$1 = createMacro(macro, { configName: "valtio" });

export { macro$1 as default };
