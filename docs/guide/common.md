---
title: Common configuration
order: 3
nav:
  title: Docs
  order: 1
---

### Common configuration

| Configuration items | describe | type | default |
| --- | --- | --- | --- |
| onReady | Chart load callback | (chart)=> void | - |
| onEvent | Bind events | (chart, event)=> void | - |
| loading | Load state, used when asynchronously fetching data | boolean | false |
| loadingTemplate | Custom Loading component | React.ReactElement | - |
| errorTemplate | Template rendered when the chart load error occurs | (e: Error) => React.ReactNode | - |
| className | The chart container class | string | - |
| style | The chart container style | React.CSSProperties | - |
| chartRef | Chart instance | (React.MutableRefObject&lt;Chart&gt;)=> void | - |
