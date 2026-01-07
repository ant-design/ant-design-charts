# Sketch File Format TS

Contains TypeScript types automatically generated from the
[Sketch File Format](../file-format) JSON Schemas.

## Overview

Types are maintained and exported for each Sketch File Format major version. See
usage instructions below for more information.

## Usage

Add the npm module using `npm` or `yarn`

```sh
npm install @sketch-hq/sketch-file-format-ts
```

Types for the latest file format are on the default export

```typescript
import FileFormat from '@sketch-hq/sketch-file-format-ts'
```

> Read about how file format versions map to Sketch document versions
> [here](https://github.com/sketch-hq/sketch-file-format)

## Examples

Create a typed layer blur object

```typescript
import FileFormat from '@sketch-hq/sketch-file-format-ts'

const blur: FileFormat.Blur = {
  _class: 'blur',
  isEnabled: false,
  center: '{0.5, 0.5}',
  motionAngle: 0,
  radius: 10,
  saturation: 1,
  type: FileFormat.BlurType.Gaussian,
}
```

Layer types can be narrowed using discriminate properties on the helper union
types like `AnyLayer`

```typescript
import FileFormat from '@sketch-hq/sketch-file-format-ts'

const mapLayers = (layers: FileFormat.AnyLayer[]) => {
  return layers.map((layer) => {
    switch (layer._class) {
      case 'bitmap':
      // type narrowed to Bitmap layers
      case 'star':
      // type narrowed to Star layers
    }
  })
}
```

## Development

Following is further information for making changes to how the types are
generated.

### Approach

The `scripts/generate.ts` ingests the file format JSON Schema, and generates
type definitions using the TypeScript compiler API.

We depend on multiple major versions of the schemas in package.json using
[yarn aliases](https://classic.yarnpkg.com/en/docs/cli/add/#toc-yarn-add-alias),
and generate types for each one. This means that users that have to implement
multiple versions of the file format don't need to manually manage multiple
versions of this package.

Please note that the latest version of the schemas is referenced directly within
the monorepo and **not** using aliases.

### Scripts

| Script            | Description                               |
| ----------------- | ----------------------------------------- |
| yarn build        | Builds the project into the `dist` folder |
| yarn test         | Build script unit tests                   |
| yarn format-check | Checks the repo with Prettier             |

### Workflows

#### Conventional commits

Try and use the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
convention when writing commit messages.

#### Changing how the types are generated

1. Update `scripts/generate.ts`
1. Unit test your changes
1. Determine the semver bump type and call yarn changeset to create an intent to
   release your changes (read more about changesets
   [here](https://github.com/atlassian/changesets)).
1. Open a PR to `main`

#### Adding or updating a file format version

1. Use the yarn aliases syntax to add new schema version
1. Use exact semvers, for example to update or add v3 of the schemas as `3.4.3`
   run,<br/>`yarn add @sketch-hq/sketch-file-format-3@npm:@sketch-hq/sketch-file-format@3.4.3`
1. If the schema version is new to the repo you'll also need to update the
   `index.ts` to export the types, and `scripts/generate.ts` to generate the new
   types
1. Open a PR to `main`
