var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/html2sketch.ts
var html2sketch_exports = {};
__export(html2sketch_exports, {
  default: () => html2sketch_default
});
module.exports = __toCommonJS(html2sketch_exports);
var SCRIPT_URL = "https://gw.alipayobjects.com/os/lib/html2sketch/1.0.1/dist/html2sketch.min.js";
var CONTAINER_ATTR = "data-html2sketch-container";
var RUNTIME_CONFIG = "toSketchJSON";
var html2sketch_default = (api) => {
  api.describe({
    key: "html2sketch",
    config: {
      schema: (Joi) => Joi.object({ scriptUrl: Joi.string().optional() })
    }
  });
  api.onGenerateFiles(() => {
    if (api.config.html2sketch) {
      api.writeTmpFile({
        path: "msgExecutor.ts",
        content: `import { getSketchJSON } from '.';

    typeof window !== 'undefined' && window.addEventListener('message', (ev) => {
          if (ev.data.type === 'dumi.html2sketch.exec') {
    const { value: opts, token } = ev.data;

    getSketchJSON(document, opts).then((value) => {
      window.postMessage({ type: 'dumi.html2sketch.done', value, token }, '*');
    });
  }
});
`
      });
    }
    api.writeTmpFile({
      path: "index.ts",
      content: `import type { nodeToGroup, nodeToSymbol, SketchFormat } from 'html2sketch';
import { ApplyPluginsType } from 'dumi';
import { getPluginManager } from '@@/core/plugin';

const html2sketch = typeof window !== 'undefined' ? window.html2sketch as {
  nodeToGroup: typeof nodeToGroup;
  nodeToSymbol: typeof nodeToSymbol;
} : null;

async function toSketchJSON(
  node: HTMLElement,
  opts: { type: 'group' | 'symbol' },
) {
  return opts.type === 'group'
    ? (await html2sketch.nodeToGroup(node)).toSketchJSON()
    : (await html2sketch.nodeToSymbol(node)).toSketchJSON();
}

function runtimeToSketchJSON(
  target: HTMLElement | Document,
  opts: Parameters<typeof toSketchJSON>[1],
): ReturnType<typeof toSketchJSON> | Promise<null> {
  return getPluginManager().applyPlugins({
    key: '${RUNTIME_CONFIG}',
    type: ApplyPluginsType.modify,
    initialValue: null,
    args: { target, opts },
    async: true,
  });
}

export const getSketchJSON = ${api.config.html2sketch ? `async (
  target: HTMLElement | Document,
  opts: Parameters<typeof toSketchJSON>[1],
): ReturnType<typeof toSketchJSON> => {
  let node = target;

  // handle iframe demo & post message executor
  if (!(target instanceof HTMLElement) || target.tagName === 'IFRAME') {
    const doc = target instanceof HTMLIFrameElement ? target.contentDocument! : target;

    node = doc.querySelector('[${CONTAINER_ATTR}], #${api.config.mountElementId}');
  }

  return await runtimeToSketchJSON(node, opts) || await toSketchJSON(node, opts);
}` : "null"};
`
    });
  });
  api.addEntryImports(
    () => api.config.html2sketch ? { source: "@@/plugin-html2sketch/msgExecutor" } : []
  );
  api.addHTMLHeadScripts(() => {
    return api.config.html2sketch ? [{ src: api.config.html2sketch.scriptUrl || SCRIPT_URL, async: true }] : [];
  });
  api.addRuntimePluginKey(
    () => api.config.html2sketch ? [RUNTIME_CONFIG] : []
  );
};
