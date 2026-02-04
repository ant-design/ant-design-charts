// Detect either spaces or tabs but not both to properly handle tabs for indentation and spaces for alignment
const INDENT_REGEX = /^(?:( )+|\t+)/;

const INDENT_TYPE_SPACE = 'space';
const INDENT_TYPE_TAB = 'tab';

// Helper function to check if we should ignore single space patterns
function shouldIgnoreSingleSpace(ignoreSingleSpaces, indentType, value) {
	return ignoreSingleSpaces && indentType === INDENT_TYPE_SPACE && value === 1;
}

/**
Make a Map that counts how many indents/unindents have occurred for a given size and how many lines follow a given indentation.

The key is a concatenation of the indentation type (s = space and t = tab) and the size of the indents/unindents.

```
indents = {
	t3: [1, 0],
	t4: [1, 5],
	s5: [1, 0],
	s12: [1, 0],
}
```
*/
function makeIndentsMap(string, ignoreSingleSpaces) {
	const indents = new Map();

	// Remember the size of previous line's indentation
	let previousSize = 0;
	let previousIndentType;

	// Indents key (ident type + size of the indents/unindents)
	let key;

	for (const line of string.split(/\n/g)) {
		if (!line) {
			// Ignore empty lines
			continue;
		}

		const matches = line.match(INDENT_REGEX);

		if (matches === null) {
			previousSize = 0;
			previousIndentType = '';
		} else {
			const indent = matches[0].length;
			const indentType = matches[1] ? INDENT_TYPE_SPACE : INDENT_TYPE_TAB;

			// Ignore single space unless it's the only indent detected to prevent common false positives
			if (shouldIgnoreSingleSpace(ignoreSingleSpaces, indentType, indent)) {
				continue;
			}

			if (indentType !== previousIndentType) {
				previousSize = 0;
			}

			previousIndentType = indentType;

			let use = 1;
			let weight = 0;

			const indentDifference = indent - previousSize;
			previousSize = indent;

			// Previous line have same indent?
			if (indentDifference === 0) {
				// Not a new "use" of the current indent:
				use = 0;
				// But do add a bit to it for breaking ties:
				weight = 1;
				// We use the key from previous loop
			} else {
				const absoluteIndentDifference = Math.abs(indentDifference);

				// Ignore single space changes when ignoreSingleSpaces is true
				// This prevents common false positives from things like aligned comments
				if (shouldIgnoreSingleSpace(ignoreSingleSpaces, indentType, absoluteIndentDifference)) {
					continue;
				}

				key = encodeIndentsKey(indentType, absoluteIndentDifference);
			}

			// Update the stats
			const entry = indents.get(key);
			indents.set(key, entry === undefined ? [1, 0] : [entry[0] + use, entry[1] + weight]);
		}
	}

	return indents;
}

// Encode the indent type and amount as a string (e.g. 's4') for use as a compound key in the indents Map.
function encodeIndentsKey(indentType, indentAmount) {
	const typeCharacter = indentType === INDENT_TYPE_SPACE ? 's' : 't';
	return typeCharacter + String(indentAmount);
}

// Extract the indent type and amount from a key of the indents Map.
function decodeIndentsKey(indentsKey) {
	const keyHasTypeSpace = indentsKey[0] === 's';
	const type = keyHasTypeSpace ? INDENT_TYPE_SPACE : INDENT_TYPE_TAB;

	const amount = Number(indentsKey.slice(1));

	return {type, amount};
}

// Return the key (e.g. 's4') from the indents Map that represents the most common indent,
// or return undefined if there are no indents.
function getMostUsedKey(indents) {
	let result;
	let maxUsed = 0;
	let maxWeight = 0;

	for (const [key, [usedCount, weight]] of indents) {
		if (usedCount > maxUsed || (usedCount === maxUsed && weight > maxWeight)) {
			maxUsed = usedCount;
			maxWeight = weight;
			result = key;
		}
	}

	return result;
}

function makeIndentString(type, amount) {
	const indentCharacter = type === INDENT_TYPE_SPACE ? ' ' : '\t';
	return indentCharacter.repeat(amount);
}

export default function detectIndent(string) {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Identify indents while skipping single space indents to avoid common edge cases (e.g. code comments)
	// If no indents are identified, run again and include all indents for comprehensive detection
	let indents = makeIndentsMap(string, true);
	if (indents.size === 0) {
		indents = makeIndentsMap(string, false);
	}

	const keyOfMostUsedIndent = getMostUsedKey(indents);

	let type;
	let amount = 0;
	let indent = '';

	if (keyOfMostUsedIndent !== undefined) {
		({type, amount} = decodeIndentsKey(keyOfMostUsedIndent));
		indent = makeIndentString(type, amount);
	}

	return {
		amount,
		type,
		indent,
	};
}
