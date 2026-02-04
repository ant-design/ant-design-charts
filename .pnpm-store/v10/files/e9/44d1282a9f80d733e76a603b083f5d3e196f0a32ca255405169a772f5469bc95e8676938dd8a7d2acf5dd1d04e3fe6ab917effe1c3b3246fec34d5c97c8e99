# @antv/event-emitter

> event-emitter for @antvis.



## Install

> npm i --save @antv/event-emitter



## Usage

```js
import EE from '@antv/event-emitter';

const ee = new EE();

ee.on('mouseover', () => {});

ee.once('click', () => {});

ee.on('*', () => {});

ee.emit('click', 1, 'hello', true);

ee.off('click');
```



## API

Simple and similar with `event-emitter`.


 - `on(evt: string, callback: Function)`: listen an event.
 - `once(evt: string, callback: Function)`: listen a event only once.
 - `emit(evt: string, ...parameters: any[])`: emit / trigger an event with parameters.
 - `off(evt?: string, callback?: Function)`: unsubscribe an event.
 - `getEvents()`: get all the exist events.
