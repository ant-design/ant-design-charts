---
title: General Properties
---

> Tips: The following general properties apply to chart components. Components that do not support these properties will be specifically noted.

| Parameter           | Description                                                 | Type                            | Default |
| ------------------- | ----------------------------------------------------------- | ------------------------------- | ------- |
| containerStyle      | Configures the style of the chart container, accepts an object with CSS properties and values | `React.CSSProperties`           | -       |
| containerAttributes | Adds custom HTML attributes to the chart container           | `Record<string, any>`           | -       |
| className           | Adds a className to the outermost component wrapper          | `string`                        | -       |
| loading             | Indicates whether the chart is in a loading state            | `boolean`                       | `false` |
| loadingTemplate     | Custom loading template, the element displayed when the chart is loading | `React.ReactElement`            | -       |
| errorTemplate       | Custom error template, a function that returns the error information to display when the chart encounters an error | `(e: Error) => React.ReactNode` | -       |
