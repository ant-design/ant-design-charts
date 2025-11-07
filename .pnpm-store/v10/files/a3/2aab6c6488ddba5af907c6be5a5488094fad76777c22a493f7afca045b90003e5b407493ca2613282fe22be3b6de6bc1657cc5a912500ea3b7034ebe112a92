# Changelog

### v2.3.2

17.01.2025.

**Added**

- Improved the readme. Added two sections - on scrolling iframes and CSS properties that can break the animation.

---

### v2.3.1

16.01.2025.

**Added**

- Added a warning that `scroll-snap-type: x mandatory` might break the animation [#71](https://github.com/Stanko/animated-scroll-to/pull/71)

---

### v2.3.0

23.06.2022.

**Changed**

- Switched to [keen](https://github.com/Stanko/keen/) as build system.
- Added ESM and CJS modules.
- Upgraded dev dependencies.

---

### v2.2.0

18.03.2020.

**Fixed**

- Added a warning if the scrolling element has `scroll-behavior: smooth` [#55](https://github.com/Stanko/animated-scroll-to/pull/55)

---

### v2.1.0

08.03.2020.

**Removed**

- Removed support for using the script in browsers directly. It was broken, so probably was not using it anyway. Use version 1 if you really need it.

---

### v2.0.12

27.10.2020.

**Fixed**

- Reverted labeled tuple coordinates for TCoords [#49](https://github.com/Stanko/animated-scroll-to/pull/49) as it breaks on older TS version [#50](https://github.com/Stanko/animated-scroll-to/issues/50).

---

### v2.0.11

19.10.2020.

**Fixed**

- Improved types, labeled tuple coordinates for TCoords [#49](https://github.com/Stanko/animated-scroll-to/pull/49).
- Fixed build on windows [#49](https://github.com/Stanko/animated-scroll-to/pull/49).

---

### v2.0.9, 2.0.10

25.06.2020.

**Fixed**

- Added `Promise<boolean>` as a return type in the types definition file.

---

### v2.0.8

07.05.2020.

**Fixed**

- Event options were missing in `removeEventListener` [#44](https://github.com/Stanko/animated-scroll-to/pull/44)

---

### v2.0.6 and v2.0.7

20.04.2020.

**Fixed**

- Calculating element offset inside of element was sometimes a pixel off.
- Active animations weren't cleared on animation end
- Now error is thrown in "elementToScroll" is not a parent of "scrollToElement"

---

### v2.0.4 and v2.0.5

09.11.2019.

**Fixed**

- Fixed TS types [#36](https://github.com/Stanko/animated-scroll-to/issues/36)

---

### v2.0.3

03.10.2019.

**Fixed**

- Fixed library breaking when running on server [#34](https://github.com/Stanko/animated-scroll-to/issues/34)

---

### v2.0.2

26.09.2019.

**Changed**

- Switched to commonjs module [#33](https://github.com/Stanko/animated-scroll-to/issues/33)

---

### v2.0.0 and v2.0.1

23.09.2019.

**Changed**

- Full TypeScript rewrite
- New method signatures
- Method now returns a promise

---

### v1.3.1

14.09.2019.

**Fixed**

- Fixed if element was scrolling and cancelOnUserAction was passed the whole page couldn't scroll [#28](https://github.com/Stanko/animated-scroll-to/issues/28)

---

### v1.3.0

02.09.2019.

**Changed**

- `onComplete` callback now has a boolean argument `isCanceledByUserAction`, and it is called even when scroll is canceled [#26](https://github.com/Stanko/animated-scroll-to/issues/26)

---

### v1.2.2

07.06.2018.

**Fixed**

- Fix event listeners not being removed in IE11 [#19](https://github.com/Stanko/animated-scroll-to/pull/19)
- Updated `index.d.ts` to add `offset` [#19](https://github.com/Stanko/animated-scroll-to/pull/19)

---

### v1.2.1

17.05.2018.

**Added**

- Added `offset` option, kudos to @weotch [#17](https://github.com/Stanko/animated-scroll-to/pull/17)

**Fixed**

- Chrome would throw `Unable to preventDefault inside passive event listener invocation.` when `cancelOnUserAction` was set to `false` [#18](https://github.com/Stanko/animated-scroll-to/issues/18)

---

### v1.2.0

22.04.2018.

**Added**

- Added `horizontal` option, kudos to @jesseditson [#15](https://github.com/Stanko/animated-scroll-to/pull/15)
- Changelog

---

### v1.1.11

09.04.2018.

**Added**

- Set events to be `passive` by default, kudos to @cybot1711 [#14](https://github.com/Stanko/animated-scroll-to/pull/14)

---

For changes prior version 1.1.11 please check the [commit list](https://github.com/Stanko/animated-scroll-to/commits/master).
