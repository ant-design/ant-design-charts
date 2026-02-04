# animated-scroll-to

[![npm version](https://img.shields.io/npm/v/animated-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/animated-scroll-to)
[![npm downloads](https://img.shields.io/npm/dm/animated-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/animated-scroll-to)

Lightweight (1.45kb gzipped) scroll to function with a powerful API. Scrolls window or any other DOM element.

The main difference to other libraries is that it accepts speed of scrolling instead of duration. This way scrolling for 200 pixels will last less than scrolling 10000 pixels. Minimum and maximum duration are configurable and set to reasonable defaults (250 and 3000ms).

All changes are tracked in [CHANGELOG](CHANGELOG.md).

## Demo

Play with the [live demo.](https://stanko.github.io/animated-scroll-to/)

## Features

- Accepts speed per 1000px instead of duration
- Scrolls window or any other DOM element horizontally and vertically
- Returns a promise with a boolean flag which tells you if desired scroll position was reached (for IE you'll need to include a `Promise` [polyfill](https://github.com/stefanpenner/es6-promise))
- If called multiple times on the same element, it will cancel prior animations
- Optionally prevent user from scrolling until scrolling animation is finished

## Usage

Grab it from npm

```
npm install animated-scroll-to
```

and import it in your app

```javascript
import animateScrollTo from 'animated-scroll-to';

// It returns a promise which will be resolved when scroll animation is finished

animateScrollTo(500).then((hasScrolledToPosition) => {
  // scroll animation is finished

  // "hasScrolledToPosition" indicates if page/element
  // was scrolled to a desired position
  // or if animation got interrupted
  if (hasScrolledToPosition) {
    // page is scrolled to a desired position
  } else {
    // scroll animation was interrupted by user
    // or by another call of "animateScrollTo"
  }
});
```

### Method signatures

Library has three ways to call it:

```js
// "y" is a desired vertical scroll position to scroll to
function animateScrollTo(y, options);

// "coords" are an array "[x, y]"
// Where "x" and "y" are desired horizontal and vertical positions to scroll to
// Both "x" and "y" can be null
// which will result in keeping the current scroll position for that axis
function animateScrollTo(coords, options);

// If you pass a DOM element, page will be scrolled to it
function animateScrollTo(scrollToElement, options);
```

Example usage of each method:

```js
// Scrolls page vertically to 1000px
animateScrollTo(1000);

// Scrolls page horizontally to 1000px but keeps vertical scroll position
animateScrollTo([1000, null]);

// Scrolls page horizontally too 1000px and vertically to 500px
animateScrollTo([1000, 500]);

// Scrolls page both horizontally and vertically to ".my-element"
animateScrollTo(document.querySelector('.my-element'));
```

### Options

Options with their default values:

```js
const defaultOptions = {
  // Indicated if scroll animation should be canceled on user action (scroll/keypress/touch)
  // if set to "false" user input will be disabled until scroll animation is complete
  cancelOnUserAction: true,

  // Animation easing function, with "easeOutCubic" as default
  easing: (t) => --t * t * t + 1,

  // DOM element that should be scrolled
  // Example: document.querySelector('#element-to-scroll'),
  elementToScroll: window,

  // Horizontal scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  horizontalOffset: 0,

  // Maximum duration of the scroll animation
  maxDuration: 3000,

  // Minimum duration of the scroll animation
  minDuration: 250,

  // Duration of the scroll per 1000px
  speed: 500,

  // Vertical scroll offset
  // Practical when you are scrolling to a DOM element and want to add some padding
  verticalOffset: 0,
};
```

### Easing

By default library is using `easeOutCubic` easing function. You can pass a custom function only considering the `t` value for the range `[0, 1] => [0, 1]`.

To make things easier I provided a list of common easing function below:

```js
/*
 * Easing Functions
 * https://gist.github.com/gre/1650294
 */
const EasingFunctions = {
  // no easing, no acceleration
  linear: (t) => {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: (t) => {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: (t) => {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: (t) => {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: (t) => {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: (t) => {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: (t) => {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: (t) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: (t) => {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: (t) => {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: (t) => {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
```

## Certain CSS properties might break the animation

As library is using an animation loop to scroll, some CSS properties might clash with the approach and break the animation.

The library will warn you about the ones that are know to break the animation:

- `scroll-behavior: smooth`
- `scroll-snap-type: x mandatory` (or `y mandatory` depending on the axis you scroll)

## Scrolling an iframe

You can also use the library to scroll iframes from the same domain (check [MDN contentWindow documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow)).

```js
const iframeWindow =
  document.querySelector('#my-iframe').contentWindow.document.documentElement;

animateScrollTo(500, {
  elementToScroll: iframeWindow,
});
```

**Please note:** If the iframe is not on the same domain as the base page, you are going to get a cross origin error.

## Why?

I wasn't able to find standalone, simple and working solution.

## Browser support

Anything that supports `requestAnimationFrame` and `Promise`. For Internet Explorer you'll need to add [es6-promise polyfill](https://github.com/stefanpenner/es6-promise).

For IE9 and lower, you'll to provide [requestAnimationFrame polyfill](https://gist.github.com/paulirish/1579671).

For IE8 and lower, you'll need to polyfill `Array.forEach` as well. Haven't tested this though.

## It is missing &lt;insert a feature here&gt;

I really tried to keep simple and lightweight.
If you are missing something, feel free to open a pull request.

## Version 1

I advise you to use v2, as v1 is deprecated. But it is still available on [v1 branch](https://github.com/Stanko/animated-scroll-to/tree/v1) and on [npm](https://www.npmjs.com/package/animated-scroll-to/v/1.3.1).
