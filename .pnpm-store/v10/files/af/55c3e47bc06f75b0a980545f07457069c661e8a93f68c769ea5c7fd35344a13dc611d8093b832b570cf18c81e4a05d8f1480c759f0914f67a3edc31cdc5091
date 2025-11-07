# svg-path-parser [![stable](http://hughsk.github.io/stability-badges/dist/stable.svg)](http://github.com/hughsk/stability-badges) #

An SVG path parser, originally built from the [PEG.js](http://pegjs.majda.cz/) grammar
specified [here](http://pastie.org/1036541), published as an NPM module.

Grammar originally written by [Gavin Kistner](http://github.com/Phrogz).

[![svg-path-parser](https://nodei.co/npm/svg-path-parser.png?mini=true)](https://nodei.co/npm/svg-path-parser)

## Usage ##

### `require('svg-path-parser')(d)` ###

Takes an SVG path string. The following code…

``` javascript
var parseSVG = require('svg-path-parser');
var d='M3,7 5-6 L1,7 1e2-.4 m-10,10 l10,0  \
  V27 89 H23           v10 h10             \
  C33,43 38,47 43,47   c0,5 5,10 10,10     \
  S63,67 63,67         s-10,10 10,10       \
  Q50,50 73,57         q20,-5 0,-10        \
  T70,40               t0,-15              \
  A5,5 45 1,0 40,20    a5,5 20 0,1 -10-10  Z';
console.log(parseSVG(d));
```

…will yield an array of commands that define the path, like so:

``` javascript
[ { code:'M', command:'moveto', x:3, y:7 },
  { code:'L', command:'lineto', x:5, y:-6 },
  { code:'L', command:'lineto', x:1, y:7 },
  { code:'L', command:'lineto', x:100, y:-0.4 },
  { code:'m', command:'moveto', relative:true, x:-10, y:10 },
  { code:'l', command:'lineto', relative:true, x:10, y:0 },
  { code:'V', command:'vertical lineto', y:27 },
  { code:'V', command:'vertical lineto', y:89 },
  { code:'H', command:'horizontal lineto', x:23 },
  { code:'v', command:'vertical lineto', relative:true, y:10 },
  { code:'h', command:'horizontal lineto', relative:true, x:10 },
  { code:'C', command:'curveto', x1:33, y1:43, x2:38, y2:47, x:43, y:47 },
  { code:'c', command:'curveto', relative:true, x1:0, y1:5, x2:5, y2:10, x:10, y:10 },
  { code:'S', command:'smooth curveto', x2:63, y2:67, x:63, y:67 },
  { code:'s', command:'smooth curveto', relative:true, x2:-10, y2:10, x:10, y:10 },
  { code:'Q', command:'quadratic curveto', x1:50, y1:50, x:73, y:57 },
  { code:'q', command:'quadratic curveto', relative:true, x1:20, y1:-5, x:0, y:-10 },
  { code:'T', command:'smooth quadratic curveto', x:70, y:40 },
  { code:'t', command:'smooth quadratic curveto', relative:true, x:0, y:-15 },
  { code:'A', command:'elliptical arc', rx:5, ry:5, xAxisRotation:45, largeArc:true, sweep:false, x:40, y:20 },
  { code:'a', command:'elliptical arc', relative:true, rx:5, ry:5, xAxisRotation:20, largeArc:false, sweep:true, x:-10, y:-10 },
  { code:'Z', command:'closepath' } ]
```

Alternatively, from version 1.1 on, the module exports multiple functions that you can separately use:

```js
const {parseSVG, makeAbsolute} = require('svg-path-parser');
```

## Absolute Path Commands

Version 1.1 adds the ability to convert an array of path commands into their absolute-coordinate equivalents. This modifies the parsed command objects in place, and also returns the array of commands. Continuing the example above:

```js
const {parseSVG, makeAbsolute} = require('svg-path-parser');
const commands = parseSVG(d);
makeAbsolute(commands); // Note: mutates the commands in place!
console.log(commands);
```

``` javascript
[ { code:'M', command:'moveto',                   x0:0, y0:0 x:3, y:7 },
  { code:'L', command:'lineto',                   x0:3, y0:7 x:5, y:-6 },
  { code:'L', command:'lineto',                   x0:5, y0:-6 x:1, y:7 },
  { code:'L', command:'lineto',                   x0:1, y0:7 x:100, y:-0.4 },
  { code:'M', command:'moveto',                   x0:100, y0:-0.4 x:90, y:9.6 },
  { code:'L', command:'lineto',                   x0:90, y0:9.6 x:100, y:9.6 },
  { code:'V', command:'vertical lineto',          x0:100, y0:9.6, x:100, y:27  },
  { code:'V', command:'vertical lineto',          x0:100, y0:27, x:100, y:89 },
  { code:'H', command:'horizontal lineto',        x0:100, y0:89, x:23, y:89 },
  { code:'V', command:'vertical lineto',          x0:23, y0:89, y:99, x:23 },
  { code:'H', command:'horizontal lineto',        x0:23, y0:99, x:33, y:99 },
  { code:'C', command:'curveto',                  x0:33, y0:99 x1:33, y1:43, x2:38, y2:47, x:43, y:47 },
  { code:'C', command:'curveto',                  x0:43, y0:47 x1:43, y1:52, x2:48, y2:57, x:53, y:57 },
  { code:'S', command:'smooth curveto',           x0:53, y0:57 x2:63, y2:67, x:63, y:67 },
  { code:'S', command:'smooth curveto',           x0:63, y0:67 x2:53, y2:77, x:73, y:77 },
  { code:'Q', command:'quadratic curveto',        x0:73, y0:77 x1:50, y1:50, x:73, y:57 },
  { code:'Q', command:'quadratic curveto',        x0:73, y0:57 x1:93, y1:52, x:73, y:47 },
  { code:'T', command:'smooth quadratic curveto', x0:73, y0:47 x:70, y:40 },
  { code:'T', command:'smooth quadratic curveto', x0:70, y0:40 x:70, y:25 },
  { code:'A', command:'elliptical arc',           x0:70, y0:25 rx:5, ry:5, xAxisRotation:45, largeArc:true, sweep:false, x:40, y:20 },
  { code:'A', command:'elliptical arc',           x0:40, y0:20 rx:5, ry:5, xAxisRotation:20, largeArc:false, sweep:true, x:30, y:10 },
  { code:'Z', command:'closepath',                x0:30, y0:10, x:90, y:9.6 } ]
```

In addition to converting all commands to absolute coordinates, the `makeAbsolute` function ensures that:

* Every command has `x0` and `y0` properties showing the start point for the command.
* Every command has `x` and `y` properties showing the finish point for the command.
  * This makes `H`, `V`, and `Z` commands equivalent to an `L` command.

## History

### v1.1.0 - 2017-Jun-19
+ Add `makeAbsolute(cmds)`.

### v1.0.2 - 2017-Mar-1
+ Update package to allow latest PEGJS versions (was locked to v0.7.x).
+ Fix bug preventing parsing errors from appearing for newer PEGJS. (Issue #9)

### v1.0.1 - 2014-Oct-30
+ Fix bug that prevented more than two subpaths from being returned.

### v1.0.0 - 2014-Oct-12
+ Changed return values to represent each unique path command as its own object,
  regardless of whether the markup merged them or not. Arguments for a command
  (e.g. `.x`) are no longer in a `.args` array of values, but are instead part
  of the command object itself.

### v0.0.4 - 2014-Oct-10
+ Unroll recursive grammar descriptions that could cause parsing a large path to overflow the stack.

### v0.0.3 - 2014-Oct-1
+ Fix bug that prevented parsing some valid documents.

### v0.0.2 - 2014-Oct-1
+ Fix parsing of numbers other than integers to work.
+ First `moveto` command is always absolute.
+ Additional coordinates after moveto are treated as lineto.

## License

This library is released under an MIT-style license. That generally means that you are free to do almost anything you want with it as long as you give a bit of credit where credit is due. See the LICENSE file included for the actual legal limitations.