# @stackblitz/sdk changelog

## v1.11.0 (2024-07-02)

- Add cross-origin isolation flag (https://github.com/stackblitz/sdk/pull/20)
- Fix and test format (https://github.com/stackblitz/sdk/pull/21)

## v1.10.0 (2024-05-03)

- Added support for `organization` in `ProjectOptions`

## v1.9.0 (2023-04-04)

- Moved the StackBlitz SDK to a dedicated repository: https://github.com/stackblitz/sdk.
- Added support for new options: `startScript`, `sidebarView` and `zenMode`. (https://github.com/stackblitz/sdk/pull/4)
- Changed `project.description` to be optional. (https://github.com/stackblitz/sdk/pull/5)

## v1.8.2 (2023-01-26)

- Fixed using the characters `[]` in file paths with the `embedProject` and `openProject` methods. (https://github.com/stackblitz/core/pull/2295)

## v1.8.1 (2022-11-10)

- Fixed the case of the URL query parameters for the `hideDevTools` and `devToolsHeight` options, for backwards compatibility with StackBlitz EE. (https://github.com/stackblitz/core/pull/2154)

## v1.8.0 (2022-06-09)

- Added a `terminalHeight` option, used to set a preferred height for the Terminal in WebContainers-based projects. (https://github.com/stackblitz/core/pull/1891)

## v1.7.0 (2022-05-09)

- TypeScript: improved the precision and inline documentation of types such as `Project`, `EmbedOptions`, `OpenOptions` and `VM`. Made those types directly importable with `import type { Project } from '@stackblitz/sdk'`. (https://github.com/stackblitz/core/pull/1775, https://github.com/stackblitz/core/pull/1779, https://github.com/stackblitz/core/pull/1837)
- Added support for opening multiple files in an embedded projects with the `vm.editor.openFile` method. (https://github.com/stackblitz/core/pull/1810)
- Added new methods to the `VM` class for controlling the embedded editor’s UI: `vm.editor.setCurrentFile`, `vm.editor.setTheme`, `vm.editor.setView`, `vm.editor.showSidebar`, `vm.preview.getUrl`, `vm.preview.setUrl`. (https://github.com/stackblitz/core/pull/1810, https://github.com/stackblitz/core/pull/1837)
- Added new `showSidebar` option. (https://github.com/stackblitz/core/pull/1837)
- Added source maps to the published bundle files. (https://github.com/stackblitz/core/pull/1776)
- Fixed the default value of the `forceEmbedLayout` option. (https://github.com/stackblitz/core/pull/1817)

## v1.6.0 (2022-03-02)

- Add support for opening multiple files with the openFile parameter, with support for multiple tabs (`openFile: 'index.html,src/index.js'`) and split editor panes (`openFile: ['index.html', 'src/index.js]`). (https://github.com/stackblitz/core/pull/1758)

## v1.5.6 (2022-02-04)

- Add `template: 'html'` to the allowed project templates. (https://github.com/stackblitz/core/pull/1728)

## v1.5.5 (2022-01-26)

- Fix broken type declarations in previous v1.5.4. (https://github.com/stackblitz/core/pull/1722)

## v1.5.4 (2022-01-20)

- Add `template: 'node'` to the allowed project templates. (https://github.com/stackblitz/core/pull/1714)
- Remove support for the `tags` option when creating new projects. (https://github.com/stackblitz/core/pull/1714)

## v1.5.3 (2021-11-05)

- Fix: correct type for `EmbedOptions['view']`. (https://github.com/stackblitz/core/pull/1655)
- Fix: set the `EmbedOptions`’s `hideNavigation` UI option correctly. (https://github.com/stackblitz/core/pull/1654)

## v1.5.2 (2020-12-07)

_No known changes._

## v1.5.1 (2020-09-25)

- Add `template: 'vue'` to the allowed project templates. (https://github.com/stackblitz/core/pull/1307)

## v1.5.0 (2020-07-16)

- Add a `theme` option to `ProjectOptions` to set the editor’s color theme. (https://github.com/stackblitz/core/pull/1269)

## v1.4.0 (2020-05-13)

- Add `origin` option to `ProjectOptions` to allow embedding projects from StackBlitz Enterprise Edition. (https://github.com/stackblitz/core/pull/1236)

## v1.3.0 (2019-02-06)

- Add `template: 'polymer'` to the allowed project templates. (https://github.com/stackblitz/core/pull/859)

## v1.2.0 (2018-05-03)

- Add support for editor UI options: `hideDevTools` and `devToolsHeight`.
- Add support for project compilation settings in `ProjectOptions`.
