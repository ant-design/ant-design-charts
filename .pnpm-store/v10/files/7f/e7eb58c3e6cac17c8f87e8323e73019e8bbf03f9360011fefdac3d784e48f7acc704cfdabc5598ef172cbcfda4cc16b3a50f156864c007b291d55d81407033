# Tailwind CSS + UI libraries = no conflicts 🚀

![NPM Downloads](https://img.shields.io/npm/dw/tailwindcss-scoped-preflight)
![GitHub Repo stars](https://img.shields.io/github/stars/Roman86/tailwindcss-scoped-preflight)

### What

[Tailwind CSS](https://tailwindcss.com/) plugin

### Why

To avoid style conflicts (CSS collisions/interference side effects) when using Tailwind CSS with other UI libraries like Antd, Vuetify etc.

### How

This plugin is limiting the scope of [Tailwind's opinionated preflight styles](https://tailwindcss.com/docs/preflight) to the customizable CSS selector.
So you can control where exactly in DOM to apply these base styles - usually it's your own components (not the 3rd party).

## Version 3 is here 🎉

[Migrate from v2](#from-v2) | [Migrate from v1](#from-v1)

Looking for old version's documentation? [v2](https://www.npmjs.com/package/tailwindcss-scoped-preflight/v/legacy-2) | [v1](https://www.npmjs.com/package/tailwindcss-scoped-preflight/v/legacy-1)

Starting from version 3 it provides a powerful configuration to (optionally):

- 🤌 precisely control CSS selectors;
- 💨 flexibly remove any preflight styles;
- 🔎 or even [modify particular values](#modifying-the-preflight-styles) of the Tailwind preflight styles (if you have some very specific conflicts).

### ❤️ If you'd like to say thanks, buy me a coffee

[<img src="src/bmc_qr.png" alt="Buy Me A Coffee" width="120" height="120">](https://www.buymeacoffee.com/romanjs)
<br/>Support/contact [tiny website](https://tailwindcss-scoped-preflight-plugin.vercel.app/)

[Discord server](https://discord.gg/CXHadKnaGk) for any discussions/questions/ideas/proposals - feel free to join.

## Strategies overview

For ease of use, there are 2 pre-bundled isolation strategies available (as named exports) that cover 99% cases:

|                                           Pre-bundled strategy                                            | Description                                                                                                                                                                                                                                                                                                                                                                            |
| :-------------------------------------------------------------------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           `isolateInsideOfContainer`<br/><img src="docs/inside.png" alt="inside" width="220"/>            | Everything is protected from the preflight styles, except specified Tailwind root(s).<br/>Use it when you have all the tailwind-powered stuff **isolated under some root container**.                                                                                                                                                                                                  |
|          `isolateOutsideOfContainer`<br/><img src="docs/outside.png" alt="outside" width="220"/>          | Protects specific root(s) from the preflight styles - Tailwind is everywhere outside.<br/>Use it when you have Tailwind powered stuff everywhere as usual, but you want to **exclude some part of the DOM** from being affected by the preflight styles.                                                                                                                               |
| ~~`isolateForComponents`~~ (deprecated)<br/><img src="docs/components.png" alt="components" width="220"/> | It generates the same CSS as `isolateInsideOfContainer` with small difference about root styles - so I just put it as an option of `isolateInsideOfContainer` strategy to simplify the strategy selection while still be able to use both modes if needed. If you use this strategy - migrate to `isolateInsideOfContainer` and set `rootStyles` to `add :where` for the same effect). |

🔨 If none of these strategies work for your case, or something isn't perfect - you can [create your own strategy](#your-owncustom-isolation-strategy).

# Quick Start

### 1. Install

```bash
npm i -D tailwindcss-scoped-preflight
```

### 2. Update your Tailwind CSS configuration

#### 2.1 Case: you want to lock Tailwind preflight styles inside of some root container (or multiple containers), so they couldn't affect the rest of your web page.

Use `isolateInsideOfContainer`:

```javascript
// tailwind.config.js

import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight';

/** @type {import("tailwindcss").Config} */
const config = {
  // ...
  plugins: [
    // ...
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('.twp', {
        except: '.no-twp', // optional, to exclude some elements under .twp from being preflighted, like external markup
      }),
    }),
  ],
};

exports.default = config;
```

|         Option          | Value                         | Description                                                                                                 |
|:-----------------------:|-------------------------------|-------------------------------------------------------------------------------------------------------------|
|   `except` (optional)   | CSS selector                  | to exclude some elements under .twp from being preflighted, like external markup                            |
| `rootStyles` (optional) | `move to container` (default) | moves the root styles to the container styles (by simply replacing the selector)                            |
|                         | `add :where`                  | adds ` :where` to the root selector so styles are still in roots, but only matching items would be affected |
|   `remove` (optional)   | array of CSS selectors        | Removes specified (with CSS selectors) preflight styles                                                     |
|   `ignore` (optional)   | array of CSS selectors        | Keeps these preflight selectors untouched (skipped by the isolation strategy)                               |

#### 2.2 Case: you want Tailwind preflight styles to be everywhere except some root container(s) that may collide.

Use `isolateOutsideOfContainer`:

```javascript
// tailwind.config.js

import { scopedPreflightStyles, isolateOutsideOfContainer } from 'tailwindcss-scoped-preflight';

/** @type {import("tailwindcss").Config} */
const config = {
  // ...
  plugins: [
    // ...
    scopedPreflightStyles({
      isolationStrategy: isolateOutsideOfContainer('.no-twp', {
        plus: '.twp', // optional, if you have your Tailwind components under .no-twp, you need them to be preflighted
      }),
    }),
  ],
};

exports.default = config;
```

|       Option        | Value                  | Description                                                                                                                       |
|:-------------------:|------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
|  `plus` (optional)  | CSS selector           | if you have your Tailwind components under .no-twp, you need them to be preflighted. Specify their root selector with this option |
| `remove` (optional) | array of CSS selectors | Removes specified (with CSS selectors) preflight styles                                                                           |
| `ignore` (optional) | array of CSS selectors | Keeps these preflight selectors untouched (skipped by the isolation strategy)                                                     |

### 3. Use specified selectors in your DOM

```tsx
export function MyApp({ children }: PropsWithChildren) {
  return <div className={'twp'}>{children}</div>;
}
```

# Configuration examples

### Using the strategy for multiple selectors

```diff
scopedPreflightStyles({
  isolationStrategy: isolateInsideOfContainer(
-   '.twp',
+   [
+     '.twp',
+     '[twp]',
+   ],
  ),
})
```

> Although all the strategies allow you to specify a number of selectors - it's recommended to use one short selector to avoid CSS bloat as selectors repeat many times in the generated CSS.

### Keeping some preflight styles unaffected

```diff
scopedPreflightStyles({
  isolationStrategy: isolateInsideOfContainer(
    '.twp',
    // every strategy provides some base options to fine tune the transformation
+   {
+     ignore: ["html", ":host", "*"],
+   },
  ),
})
```

### Removing some preflight styles by CSS selector

```diff
scopedPreflightStyles({
  isolationStrategy: isolateInsideOfContainer(
    '.twp',
+   {
+     remove: ["body", ":before", ":after"],
+   },
  ),
})
```

### Your own/custom isolation strategy

`isolationStrategy` option is basically a function that accepts the original CSS selector and returns the transformed one.

```javascript
// tailwind.config.js

import { scopedPreflightStyles } from 'tailwindcss-scoped-preflight';

/** @type {import("tailwindcss").Config} */
const config = {
  // ...
  plugins: [
    // ...
    scopedPreflightStyles({
      //it's just a function accepting { ruleSelector: string } and returning modified rule selector (prefixed or whatever you need)
      isolationStrategy: ({ ruleSelector, ...whateverElse }) => {
        // let's say we want to scope the styles for some global selectors Tailwind utilizes:
        if (
          [
            'html',
            ':host',
            'body',
          ].includes(ruleSelector)
        ) {
          return `${ruleSelector} .twp`; // adding the .twp class to these global things so only things under .twp would be affected
        }

        // let's say we want table to be preflighted only when under the .twp
        if (ruleSelector === 'table') {
          return `.twp ${ruleSelector}`;
        }

        // and don't want * to be preflighted at all
        if (ruleSelector === '*') {
          // returning an empty string or anything falsy/nullish removes the CSS rule
          return '';
        }

        // Caution! Don't forget to return the value,
        // falsy/nullish result will remove the rule.
        // Either return the original ruleSelector, or inject some of existing strategies,
        // let's fallback to the isolateInsideOfContainer strategy for this demo:
        return isolateInsideOfContainer('.twp')({ ruleSelector, ...whateverElse });
      },
    }),
  ],
};

exports.default = config;
```

### Modifying the preflight styles

This option allows you to hook into the preflight styles to perform some modifications
like removing or changing CSS properties.

You may configure the modifications in a declarative manner (as an object) or provide a function to have more control.

#### Object syntax

```javascript
scopedPreflightStyles({
  isolationStrategy: isolateInsideOfContainer('.twp'), // whatever
  modifyPreflightStyles: {
    html: {
      // removes the line-height for the html selector
      'line-height': null,
      // changes the font-family
      'font-family': '"Open Sans", sans-serif',
    },
    body: {
      // replaces the margin value for the body selector in preflight styles
      margin: '0 4px',
      // following won't have any effect as this property is not in the preflight styles
      color: 'red',
    },
  },
});
```

#### Function syntax

```javascript
scopedPreflightStyles({
  isolationStrategy: isolateInsideOfContainer('.twp'), // whatever
  modifyPreflightStyles: ({ selectorSet, property, value }) => {
    // let's say you want to override the font family (no matter what the rule selector is)
    if (property === 'font-family' && value !== 'inherit') {
      return '"Open Sans", sans-serif';
    }
    // or body margin
    if (selectorSet.has('body') && property === 'margin') {
      return '0 4px';
    }
    // if you want to remove some property - return null
    if (selectorSet.has('html') && property === 'line-height') {
      return null;
    }
    // to keep the property as it is - you may return the original value;
    // but returning undefined would have the same effect,
    // so you may just omit such default return
    return value;
  },
});
```

# Migration guide (to v3)

## from v2

#### for 'matched only' mode users

```diff
import {
  scopedPreflightStyles,
+ isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';

// ...
     scopedPreflightStyles({
-       mode: 'matched only',
-       cssSelector: '.twp',
+       isolationStrategy: isolateInsideOfContainer('.twp'),
      }),
```

#### for 'except matched' mode users

```diff
import {
  scopedPreflightStyles,
+ isolateOutsideOfContainer,
} from 'tailwindcss-scoped-preflight';

// ...
     scopedPreflightStyles({
-       mode: 'except matched',
-       cssSelector: '.notwp',
+       isolationStrategy: isolateOutsideOfContainer('.notwp'),
      }),
```

## from v1

```diff
import {
  scopedPreflightStyles,
+ isolateInsideOfContainer,
} from 'tailwindcss-scoped-preflight';

// ...
     scopedPreflightStyles({
-       preflightSelector: '.twp',
-       disableCorePreflight: true,
+       isolationStrategy: isolateInsideOfContainer('.twp'),
      }),
```
