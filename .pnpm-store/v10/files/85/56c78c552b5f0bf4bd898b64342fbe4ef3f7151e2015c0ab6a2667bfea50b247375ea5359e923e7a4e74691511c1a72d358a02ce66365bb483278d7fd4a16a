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
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/features/icons/icons.ts
var icons_exports = {};
__export(icons_exports, {
  default: () => icons_default
});
module.exports = __toCommonJS(icons_exports);
var import_utils = require("@umijs/utils");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_depsOnDemand = require("../depsOnDemand/depsOnDemand");
var icons_default = (api) => {
  const iconPlugin = (0, import_utils.importLazy)(
    require.resolve("./esbuildIconPlugin")
  );
  const svgr = (0, import_utils.importLazy)(require.resolve("./svgr"));
  api.describe({
    config: {
      schema({ zod }) {
        return zod.object({
          // don't support tnpm
          autoInstall: zod.object({}),
          defaultComponentConfig: zod.object({}),
          // e.g. alias: { home: 'fa:home' }
          alias: zod.object({}),
          include: zod.array(zod.string())
        }).deepPartial();
      }
    },
    enableBy: api.EnableBy.config
  });
  api.onCheckConfig(() => {
    if (api.config.icons.autoInstall && (api.appData.npmClient === "tnpm" || api.appData.npmClient === "cnpm")) {
      throw new Error(
        `[icons] autoInstall option don't support ${api.appData.npmClient}`
      );
    }
  });
  const EMPTY_ICONS_FILE = `export const __no_icons = true;`;
  const icons = /* @__PURE__ */ new Set();
  api.addPrepareBuildPlugins(() => {
    return [
      iconPlugin.esbuildIconPlugin({
        icons,
        alias: api.config.icons.alias || {}
      })
    ];
  });
  api.onPrepareBuildSuccess(async () => {
    const extraIcons = api.config.icons.include || [];
    const allIcons = /* @__PURE__ */ new Set([...icons, ...extraIcons]);
    if (!allIcons.size) {
      import_utils.logger.info(`[icons] no icons was found`);
      return;
    }
    import_utils.logger.info(`[icons] generate icons ${Array.from(icons).join(", ")}`);
    const code = [];
    const { generateIconName, generateSvgr } = svgr;
    for (const iconStr of allIcons) {
      const [collect, icon] = iconStr.split(":");
      const iconName = generateIconName({ collect, icon });
      let svgr2;
      try {
        svgr2 = await generateSvgr({
          collect,
          api,
          icon,
          iconifyOptions: {
            autoInstall: api.config.icons.autoInstall && (async (name) => {
              try {
                const version = (await import_utils.crossSpawn.sync("npm", ["view", name, "version"], {
                  encoding: "utf-8"
                }).stdout).trim();
                (0, import_depsOnDemand.addDeps)({
                  pkgPath: api.pkgPath,
                  deps: [{ name, version }]
                });
              } catch (e) {
                throw new Error(`[icons] npm package ${name} not found`);
              }
              import_utils.logger.info(`[icons] install ${name}...`);
              await (0, import_utils.installWithNpmClient)({
                npmClient: api.appData.npmClient,
                cwd: api.cwd
              });
            })
          },
          localIconDir: getLocalIconDir()
        });
      } catch (e) {
        import_utils.logger.error(e);
      }
      if (svgr2) {
        code.push(svgr2);
        code.push(`export { ${iconName} };`);
      } else {
        if (api.env === "development") {
          icons.delete(iconStr);
          import_utils.logger.error(`[icons] Icon ${iconStr} not found`);
        } else {
          throw new Error(`[icons] Icon ${iconStr} not found`);
        }
      }
    }
    if (code.length) {
      code.unshift("import React from 'react';");
    }
    api.writeTmpFile({
      path: "icons.tsx",
      content: code.join("\n") || EMPTY_ICONS_FILE
    });
  });
  api.onGenerateFiles(({ isFirstTime }) => {
    if (isFirstTime) {
      api.writeTmpFile({
        path: "icons.tsx",
        content: EMPTY_ICONS_FILE
      });
    }
    const localIconDir = getLocalIconDir();
    const localIcons = [];
    if (import_fs.default.existsSync(localIconDir)) {
      localIcons.push(
        ...readIconsFromDir(localIconDir).filter((file) => file.endsWith(".svg")).map((file) => file.replace(/\.svg$/, ""))
      );
    }
    api.writeTmpFile({
      path: "index.tsx",
      content: `
import React from 'react';
import * as iconsMap from './icons';
import './index.css';

const alias = ${JSON.stringify(api.config.icons.alias || {})};
type AliasKeys = keyof typeof alias;
const localIcons = ${JSON.stringify(localIcons)} as const;
type LocalIconsKeys = typeof localIcons[number];

type IconCollections = 'academicons' |
  'akar-icons' |
  'ant-design' |
  'arcticons' |
  'basil' |
  'bi' |
  'bpmn' |
  'brandico' |
  'bx' |
  'bxl' |
  'bxs' |
  'bytesize' |
  'carbon' |
  'charm' |
  'ci' |
  'cib' |
  'cif' |
  'cil' |
  'circle-flags' |
  'circum' |
  'clarity' |
  'codicon' |
  'cryptocurrency-color' |
  'cryptocurrency' |
  'dashicons' |
  'ei' |
  'el' |
  'emblemicons' |
  'emojione-monotone' |
  'emojione-v1' |
  'emojione' |
  'entypo-social' |
  'entypo' |
  'eos-icons' |
  'ep' |
  'et' |
  'eva' |
  'fa-brands' |
  'fa-regular' |
  'fa-solid' |
  'fa' |
  'fa6-brands' |
  'fa6-regular' |
  'fa6-solid' |
  'fad' |
  'fe' |
  'feather' |
  'file-icons' |
  'flag' |
  'flagpack' |
  'flat-color-icons' |
  'flat-ui' |
  'fluent-emoji-flat' |
  'fluent-emoji-high-contrast' |
  'fluent-emoji' |
  'fluent-mdl2' |
  'fluent' |
  'fontelico' |
  'fontisto' |
  'foundation' |
  'fxemoji' |
  'gala' |
  'game-icons' |
  'geo' |
  'gg' |
  'gis' |
  'gridicons' |
  'grommet-icons' |
  'healthicons' |
  'heroicons-outline' |
  'heroicons-solid' |
  'heroicons' |
  'humbleicons' |
  'ic' |
  'icomoon-free' |
  'icon-park-outline' |
  'icon-park-solid' |
  'icon-park-twotone' |
  'icon-park' |
  'iconoir' |
  'icons8' |
  'il' |
  'ion' |
  'iwwa' |
  'jam' |
  'la' |
  'line-md' |
  'logos' |
  'ls' |
  'lucide' |
  'majesticons' |
  'maki' |
  'map' |
  'material-symbols' |
  'mdi-light' |
  'mdi' |
  'medical-icon' |
  'memory' |
  'mi' |
  'mingcute' |
  'mono-icons' |
  'nimbus' |
  'nonicons' |
  'noto-v1' |
  'noto' |
  'octicon' |
  'oi' |
  'ooui' |
  'openmoji' |
  'pajamas' |
  'pepicons-pop' |
  'pepicons-print' |
  'pepicons' |
  'ph' |
  'pixelarticons' |
  'prime' |
  'ps' |
  'quill' |
  'radix-icons' |
  'raphael' |
  'ri' |
  'si-glyph' |
  'simple-icons' |
  'simple-line-icons' |
  'skill-icons' |
  'subway' |
  'svg-spinners' |
  'system-uicons' |
  'solar' |
  'tabler' |
  'teenyicons' |
  'topcoat' |
  'twemoji' |
  'typcn' |
  'uil' |
  'uim' |
  'uis' |
  'uit' |
  'uiw' |
  'vaadin' |
  'vs' |
  'vscode-icons' |
  'websymbol' |
  'whh' |
  'wi' |
  'wpf' |
  'zmdi' |
  'zondicons';
type Icon = \`\${IconCollections}:\${string}\`;

interface IUmiIconProps extends React.SVGAttributes<SVGElement> {
  icon: AliasKeys | Icon | \`local:\${LocalIconsKeys}\`;
  hover?: AliasKeys | string;
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  style?: any;
  spin?: boolean;
  rotate?: number | string;
  flip?: 'vertical' | 'horizontal' | 'horizontal,vertical' | 'vertical,horizontal';
}

export const getIconComponent = (icon: Pick<IUmiIconProps, 'icon'>) => {
  const iconName = normalizeIconName(alias[icon] || icon);
  return iconsMap[iconName];
}

export const Icon = React.forwardRef<HTMLSpanElement, IUmiIconProps>((props, ref) => {
  const { icon, hover, style, className = '' , rotate, spin, flip, ...extraProps } = props;
  const Component = getIconComponent(icon);
  if (!Component) {
    // TODO: give a error icon when dev, to help developer find the error
    return null;
  }
  const HoverComponent = hover ? iconsMap[normalizeIconName(alias[hover] || hover)] : null;
  const cls = spin ? 'umiIconLoadingCircle' : undefined;
  const svgStyle = {};
  const transform: string[] = [];
  if (rotate) {
    const rotateDeg = normalizeRotate(rotate);
    transform.push(\`rotate(\${rotateDeg}deg)\`);
  }
  if (flip) {
    const flipMap = flip.split(',').reduce((memo, item) => {
      memo[item] = 1;
      return memo;
    }, {});
    if (flipMap.vertical) {
      transform.push(\`rotateY(180deg)\`);
    }
    if (flipMap.horizontal) {
      transform.push(\`rotateX(180deg)\`);
    }
  }
  if (transform.length) {
    const transformStr = transform.join('');
    svgStyle.msTransform = transformStr;
    svgStyle.transform = transformStr;
  }

  const spanClassName = HoverComponent ? 'umiIconDoNotUseThis ' : '' + className;
  const spanClass = spanClassName ? { className: spanClassName } : {};

  return (
    <span role="img" ref={ref} {...spanClass} style={style}>
      <Component {...extraProps} className={cls} style={svgStyle} />
      {
        HoverComponent ? <HoverComponent {...extraProps} className={'umiIconDoNotUseThisHover ' + cls} style={svgStyle} /> : null
      }
    </span>
  );
});

function normalizeRotate(rotate: number | string) {
  if (typeof rotate === 'number') {
    return rotate * 90;
  }
  if (typeof rotate === 'string') {
    if (rotate.endsWith('deg')) {
      return parseInt(rotate, 10);
    }
    if (rotate.endsWith('%')) {
      return parseInt(rotate, 10) / 100 * 360;
    }
    return 0;
  }
}

function camelCase(str: string) {
  return str.replace(/\\//g, '-').replace(/-([a-zA-Z]|[1-9])/g, (g) => g[1].toUpperCase());
}

function normalizeIconName(name: string) {
  return camelCase(name.replace(':', '-'));
}
      `
    });
    api.writeTmpFile({
      path: "index.css",
      content: `
.umiIconDoNotUseThisHover {
  display: none;
}
.umiIconDoNotUseThis:hover svg {
  display: none;
}
.umiIconDoNotUseThis:hover .umiIconDoNotUseThisHover {
  display: inline-block;
}
.umiIconLoadingCircle {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: umiIconLoadingCircle 1s linear infinite;
}

@-webkit-keyframes umiIconLoadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes umiIconLoadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
      `
    });
  });
  api.addTmpGenerateWatcherPaths(() => {
    return [getLocalIconDir()];
  });
  function getLocalIconDir() {
    return import_path.default.join(api.paths.absSrcPath, "icons");
  }
};
function readIconsFromDir(dir) {
  const icons = [];
  const prefix = (0, import_utils.winPath)(import_path.default.join(dir, "./"));
  const collect = (p) => {
    if (import_fs.default.statSync(p).isDirectory()) {
      const files = import_fs.default.readdirSync(p);
      files.forEach((name) => {
        collect(import_path.default.join(p, name));
      });
    } else {
      const prunePath = (0, import_utils.winPath)(p).replace(prefix, "");
      icons.push(prunePath);
    }
  };
  collect(dir);
  return icons;
}
