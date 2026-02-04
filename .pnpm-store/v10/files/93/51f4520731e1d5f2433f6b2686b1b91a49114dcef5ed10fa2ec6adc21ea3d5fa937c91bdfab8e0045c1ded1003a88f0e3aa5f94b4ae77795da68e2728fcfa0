# g2-extension-plot

The plot for @antv/g2 marks.

## Getting Started

Install `@antv/g2-extension-plot` and `@antv/g2` via package manager such NPM or Yarn.

```bash
$ npm install @antv/g2-extension-plot @antv/g2
```

Use mark individually:

```js
import { Runtime, extend, corelib } from "@antv/g2";
import { plotlib } from "@antv/g2-extension-plot";

const Chart = extend(Runtime, { ...corelib(), ...plotlib() });

const chart = new Chart({ container: "container" });

  chart
    .sunburst()
    .data({
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/antfincdn/ryp44nvUYZ/coffee.json',
    })
    .animate('enter', { type: 'waveIn' })
    .coordinate({ type: 'polar', innerRadius: 0 });

  chart.render();
```

## License

MIT@[AntV](https://github.com/antvis).
