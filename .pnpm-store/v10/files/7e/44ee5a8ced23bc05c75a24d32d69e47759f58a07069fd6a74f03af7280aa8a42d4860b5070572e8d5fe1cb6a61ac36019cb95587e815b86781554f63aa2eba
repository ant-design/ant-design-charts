# issue-regex

> Regular expression for matching issue references

## Install

```sh
npm install issue-regex
```

## Usage

```js
import issueRegex from 'issue-regex';

'Fixes #143 and avajs/ava#1023'.match(issueRegex());
//=> ['#143', 'avajs/ava#1023']
```

Organization name, repository name, and issue number are also available individually in capturing groups 1-3, or named groups `organization`, `repository`, and `issueNumber`:

```js
issueRegex().exec('Fixes avajs/ava#1023');
/*
[
	'avajs/ava#1023',
	'avajs',
	'ava',
	'1023',
	index: 6,
	input: 'Fixes avajs/ava#1023',
	groups: {
		organization: 'avajs',
		repository: 'ava',
		issueNumber: '1023'
	}
]
*/
```

## API

### issueRegex(options?)

Returns a `RegExp` for matching issue references.

### options

Type: `object`

#### additionalPrefix

Support for references like `GH-123` can be added manually. Adding a prefix will still match the #-based references:

```js
import issueRegex from 'issue-regex';

issueRegex({additionalPrefix: 'GH-'}).exec('GH-123');
//=> ['GH-123', 'GH-', '123']

'Fixes GH-143 and avajs/ava#1023'.match(issueRegex({additionalPrefix: 'GH-'}));
//=> ['GH-143', 'avajs/ava#1023']
```

> [!NOTE]
> `additionalPrefix` is added unescaped to the regex, keep it simple.

## Important

If you run the regex against untrusted user input in a server context, you should [give it a timeout](https://github.com/sindresorhus/super-regex).

**I do not consider ReDoS a valid vulnerability for this package.**

## Related

- [linkify-issues](https://github.com/sindresorhus/linkify-issues) - Linkify GitHub issue references
