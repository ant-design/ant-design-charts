# cjs-loader

Node.js `require()` hook for loading ESM & TypeScript.

### Features
- Transforms ESM & TypeScript to CommonJS on demand
- Supports TS extensions `.cjs` & `.mjs` (`.cts` & `.mts`)
- Cached for performance boost
- Supports Node.js v12.16.2+
- Handles `node:` import prefixes
- Resolves `tsconfig.json` [`paths`](https://www.typescriptlang.org/tsconfig#paths)

> **Protip:** use with _esm-loader_ or _tsx_
>
>  _cjs-loader_ only transforms CommonJS modules (`.cjs`/`.cts` or `.js` files in `commonjs` type packages).
>
> To hook into `import()` calls or ES modules (`.mjs`/`.mts` extensions or `.js` files in `module` type packages), use this with [esm-loader](https://github.com/esbuild-kit/esm-loader).
>
> Alternatively, use [tsx](https://github.com/esbuild-kit/tsx) to handle them both automatically.

<br>

<p align="center">
	<a href="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=platinum">
		<picture>
			<source width="830" media="(prefers-color-scheme: dark)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=platinum&image=dark">
			<source width="830" media="(prefers-color-scheme: light)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=platinum&image">
			<img width="830" src="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=platinum&image" alt="Premium sponsor banner">
		</picture>
	</a>
</p>

## Install

```sh
npm install --save-dev @esbuild-kit/cjs-loader
```

## Usage

Pass `@esbuild-kit/cjs-loader` into the [`--require`](https://nodejs.org/api/cli.html#-r---require-module) flag
```sh
node -r @esbuild-kit/cjs-loader ./file.js
```

### TypeScript configuration
The following properties are used from `tsconfig.json` in the working directory:
- [`strict`](https://www.typescriptlang.org/tsconfig#strict): Whether to transform to strict mode
- [`jsx`](https://esbuild.github.io/api/#jsx): Whether to transform JSX
	> **Warning:** When set to `preserve`, the JSX syntax will remain untransformed. To prevent Node.js from throwing a syntax error, chain another Node.js loader that can transform JSX to JS.
- [`jsxFactory`](https://esbuild.github.io/api/#jsx-factory): How to transform JSX
- [`jsxFragmentFactory`](https://esbuild.github.io/api/#jsx-fragment): How to transform JSX Fragments
- [`jsxImportSource`](https://www.typescriptlang.org/tsconfig#jsxImportSource): Where to import JSX functions from
- [`allowJs`](https://www.typescriptlang.org/tsconfig#allowJs): Whether to apply the tsconfig to JS files
- [`paths`](https://www.typescriptlang.org/tsconfig#paths): For resolving aliases

#### Custom `tsconfig.json` path
By default, `tsconfig.json` will be detected from the current working directory.

To set a custom path, use the `ESBK_TSCONFIG_PATH` environment variable:

```sh
ESBK_TSCONFIG_PATH=./path/to/tsconfig.custom.json node -r @esbuild-kit/cjs-loader ./file.js
```

<br>

<p align="center">
	<a href="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=gold">
		<picture>
			<source width="830" media="(prefers-color-scheme: dark)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=gold&image=dark">
			<source width="830" media="(prefers-color-scheme: light)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=gold&image">
			<img width="830" src="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=gold&image" alt="Premium sponsor banner">
		</picture>
	</a>
</p>

### Cache
Modules transformations are cached in the system cache directory ([`TMPDIR`](https://en.wikipedia.org/wiki/TMPDIR)). Transforms are cached by content hash so duplicate dependencies are not re-transformed.

Set environment variable `ESBK_DISABLE_CACHE` to a truthy value to disable the cache:

```sh
ESBK_DISABLE_CACHE=1 node -r @esbuild-kit/cjs-loader ./file.js
```

## Related

- [tsx](https://github.com/esbuild-kit/tsx) - Node.js runtime powered by esbuild using [`@esbuild-kit/cjs-loader`](https://github.com/esbuild-kit/cjs-loader) and [`@esbuild-kit/esm-loader`](https://github.com/esbuild-kit/esm-loader).

- [@esbuild-kit/esm-loader](https://github.com/esbuild-kit/esm-loader) - TypeScript to ESM transpiler using the Node.js loader API.


## Sponsors

<p align="center">
	<a href="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver1">
		<picture>
			<source width="410" media="(prefers-color-scheme: dark)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver1&image=dark">
			<source width="410" media="(prefers-color-scheme: light)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver1&image">
			<img width="410" src="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver1&image" alt="Premium sponsor banner">
		</picture>
	</a>
	<a href="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver2">
		<picture>
			<source width="410" media="(prefers-color-scheme: dark)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver2&image=dark">
			<source width="410" media="(prefers-color-scheme: light)" srcset="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver2&image">
			<img width="410" src="https://privatenumber-sponsors.vercel.app/api/sponsor?tier=silver2&image" alt="Premium sponsor banner">
		</picture>
	</a>
</p>

<p align="center">
	<a href="https://github.com/sponsors/privatenumber">
		<img src="https://cdn.jsdelivr.net/gh/privatenumber/sponsors/sponsorkit/sponsors.svg">
	</a>
</p>
