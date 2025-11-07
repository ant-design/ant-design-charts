![Tests](https://github.com/simonhaenisch/prettier-plugin-organize-imports/workflows/Tests/badge.svg)

# Prettier Plugin: Organize Imports

> Make sure that your import statements stay consistent no matter who writes them and what their preferences are.

A plugin that makes Prettier organize your imports (i. e. sorts, combines and removes unused ones) using the `organizeImports` feature of the TypeScript language service API. This is the same as using the "Organize Imports" action in VS Code.

**Features**

- 👌 Dependency-free (just peer-dependencies you probably already have).
- 💪 Supports `.js`, `.jsx`, `.ts`, `.tsx` and `.vue` files.
- 🚀 Zero config.
- 🤓 No more weird diffs or annoying merge conflicts in PRs caused by import statements.
- 🤯 If your editor supports auto-imports, you'll stop thinking about your imports so much that you won't even care about their order anymore.

**Caveat**

This plugin inherits, extends, and then overrides the built-in Prettier parsers for `babel`, `babel-ts`, `typescript` and `vue`. This means that it is incompatible with other plugins that do the same; only the last loaded plugin that exports one of those parsers will function.

## Installation

```sh
npm install --save-dev prettier-plugin-organize-imports
```

_Note that `prettier` and `typescript` are peer dependencies, so make sure you have those installed in your project._

## Usage

### Prettier 3

Automatic plugin discovery [has been removed](https://prettier.io/blog/2023/07/05/3.0.0.html#plugin-search-feature-has-been-removed-14759httpsgithubcomprettierprettierpull14759-by-fiskerhttpsgithubcomfisker). Thus you need to configure Prettier to use the plugin according to the [Plugins docs](https://prettier.io/docs/en/plugins.html), for example by adding it to the `plugins` config option:

```json
{
  "plugins": ["prettier-plugin-organize-imports"]
}
```

### Prettier 2

The plugin will be loaded by Prettier automatically. No configuration needed.

Note that automatic plugin discovery is not supported with some package managers, e. g. Yarn PnP (see https://github.com/prettier/prettier/issues/8474). In that case follow the instructions for Prettier 3 above.

## Configuration

### Skip Files

Files containing the substring `// organize-imports-ignore` or `// tslint:disable:ordered-imports` are skipped.

### Skip Destructive Code Actions

If you don't want destructive code actions (like removing unused imports), you can enable the option `organizeImportsSkipDestructiveCodeActions` via your Prettier config.

```json
{
  "organizeImportsSkipDestructiveCodeActions": true
}
```

## Compatibility

### ESLint

For compatibility with [ESLint](https://eslint.org/) or other linters, see ["Integrating with Linters"](https://prettier.io/docs/en/integrating-with-linters.html) in the Prettier docs. You should have any import order rules/plugins disabled.

### React

Depending on your configuration, if you need the `React` import to stay even if it's "unused" (i.e. only needed for the JSX factory), make sure to have the `jsx` option set to `react` in your `tsconfig.json`. For more details [click here](https://www.typescriptlang.org/docs/handbook/jsx.html#basic-usage).

### Vue.js

Make sure that you have the optional peer dependency `@volar/vue-typescript` installed.

```
npm i --save-dev @volar/vue-typescript
```

If you're using Vue.js with Pug templates, you'll also need to install `@volar/vue-language-plugin-pug` as a dev dependency, and configure it in `vueCompilerOptions` (see [usage](https://www.npmjs.com/package/@volar/vue-language-plugin-pug)).

## Debug Logs

If something doesn't work, you can try to prefix your `prettier` command with `DEBUG=true` which will enable this plugin to print some logs.

## Rationale/Disclaimer

This plugin acts outside of [Prettier's scope](https://prettier.io/docs/en/rationale#what-prettier-is-_not_-concerned-about) because _"Prettier only prints code. It does not transform it."_, and technically sorting is a code transformation because it changes the AST (this plugin even removes code, i. e. unused imports). In my opinion however, the import statements are not _really_ part of the code, they are merely directives that instruct the module system where to find the code (only true as long as your imports are side-effects free regarding the global scope, i. e. import order doesn't matter), comparable with `using` directives in C# or `#include` preprocessing directives in C. Therefore the practical benefits outweigh sticking with the philosophy in this case.

## Changelog

Version `3.2.4` implements a fix to skip when formatting ranges (i.e. if the plugin is requested to format a range, it doesn't do anything because it would lack the full file context).

Version `3.2.3` updates the readme with instructions for Prettier 3.

Version `3.2.2` fixes a performance regression introduced in `3.2.0`.

Version `3.2.1` fixes the implementation of the language service host's `getCurrentDirectory` method to return the directory containing the tsconfig, rather than using `ts.sys.getCurrentDirectory` (which returns `process.cwd()`). This should prevent issues with resolving compiler plugins with Volar (which is used for Vue support).

Version `3.2.0` adds and fixes support for pug templates in Vue files (via `@volar/vue-language-plugin-pug`). Please be aware that you'll need to update your version of the `@volar/vue-typescript` peer dependency from `0.x` to `1.x`.

Version `3.1.0` adds an option to skip destructive code actions like removing unused imports.

Version `3.0.3` fixes a performance regression introduced in `3.0.2`.

Version `3.0.2` fixes a regression introduced by adding some file-system related methods to the language service host (to fix a bug), which revealed that another method's implementation was incorrect.

Version `3.0.1` bumps the `@volar/vue-typescript` version to fix more edge cases, e. g. not removing imports when a component is used via kebab-case naming. `@volar/vue-typescript` is now defined as an optional peer dependency and you'll need to install version `0.39` or later. Furthermore a fix has been added that should help support more module resolution algorithms.

Version `3.0.0` switches to a different package for Vue support, which fixes some more issues, e. g. support for setup scripts. No breaking changes otherwise.

Version `2.3.4` fixes an issue with Vue v2 files.

Version `2.3.3` fixes a bug where default imports were removed erroneously.

Version `2.3.1` adds debug logs and fixes Vue.js support.

Version `2.2.0` adds a compiler options cache to improve performance.

Version `2.1.0` adds support for Vue.js (`.vue` files).

Version `2.0.0` adds support for the parsers `babel` (i. e. JavaScript) and `babel-ts` which are only available since Prettier v2 (and thus the peer dependency has received a major bump).

## License

[MIT](/license).
