# detect-indent

> Detect the indentation of code

Pass in a string of any kind of text and get the indentation.

## Use cases

- Persisting the indentation when modifying a file.
- Have new content match the existing indentation.
- Setting the right indentation in your editor.

## Install

```sh
npm install detect-indent
```

## Usage

Here we modify a JSON file while persisting the indentation:

```js
import fs from 'node:fs';
import detectIndent from 'detect-indent';

/*
{
    "ilove": "pizza"
}
*/
const file = fs.readFileSync('foo.json', 'utf8');

// Tries to detect the indentation and falls back to a default if it can't
const indent = detectIndent(file).indent || '    ';

const json = JSON.parse(file);

json.ilove = 'unicorns';

fs.writeFileSync('foo.json', JSON.stringify(json, undefined, indent));
/*
{
    "ilove": "unicorns"
}
*/
```

## API

Accepts a string and returns an object with stats about the indentation:

- `type` {'tab' | 'space' | undefined} - The type of indentation. It is `undefined` if no indentation is detected.
- `amount` {number} - The amount of indentation. For example, `2`.
- `indent` {string} - The actual indentation.

## Algorithm

The current algorithm looks for the most common difference between two consecutive non-empty lines. Single-space indentations and changes are ignored by default to prevent common false positives from comment alignment.

In the following example, even if 4-space indentation appears 3 times while 2-space appears only 2 times, the 2-space indentation is detected because there are 4 indent changes of 2 spaces vs only 2 changes of 4 spaces:

```css
html {
  box-sizing: border-box;
}

body {
  background: gray;
}

p {
    line-height: 1.3em;
    margin-top: 1em;
    text-indent: 2em;
}
```

[Source.](https://medium.com/@heatherarthur/detecting-code-indentation-eff3ed0fb56b#3918)

Furthermore, if there are multiple indent differences with the same usage count, the indentation with the most lines is selected.

In the following example, the indentation is detected as 4-spaces:

```css
body {
  background: gray;
}

p {
    line-height: 1.3em;
    margin-top: 1em;
    text-indent: 2em;
}
```

## Related

- [detect-indent-cli](https://github.com/sindresorhus/detect-indent-cli) - CLI for this module
- [detect-newline](https://github.com/sindresorhus/detect-newline) - Detect the dominant newline character of a string
- [detect-indent-rs](https://github.com/stefanpenner/detect-indent-rs) - Rust port
- [detect-indent-py](https://github.com/Ethan-Vanderheijden/detect-indent-py) - Python port
