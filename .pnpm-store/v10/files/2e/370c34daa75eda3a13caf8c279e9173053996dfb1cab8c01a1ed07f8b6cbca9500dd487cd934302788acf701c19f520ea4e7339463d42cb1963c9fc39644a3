export interface Indent {
	/**
	The type of indentation.

	It is `undefined` if no indentation is detected.
	*/
	type: 'tab' | 'space' | undefined;

	/**
	The amount of indentation. For example, `2`.
	*/
	amount: number;

	/**
	The actual indentation.
	*/
	indent: string;
}

/**
Detect the indentation of code.

@param string - A string of any kind of text.

@example
```
import fs from 'node:fs';
import detectIndent from 'detect-indent';

// {
//     "ilove": "pizza"
// }
const file = fs.readFileSync('foo.json', 'utf8');

// Tries to detect the indentation and falls back to a default if it can't
const indent = detectIndent(file).indent || '    ';

const json = JSON.parse(file);

json.ilove = 'unicorns';

fs.writeFileSync('foo.json', JSON.stringify(json, undefined, indent));
// {
//     "ilove": "unicorns"
// }
```
*/
export default function detectIndent(string: string): Indent;
