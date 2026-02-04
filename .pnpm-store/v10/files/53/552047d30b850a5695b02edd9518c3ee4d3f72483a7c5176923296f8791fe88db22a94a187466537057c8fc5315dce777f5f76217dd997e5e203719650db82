import { startTransition } from 'react';
export var safeStartTransition = function safeStartTransition(func) {
  if (typeof startTransition === 'function') {
    startTransition(func);
  } else {
    func();
  }
};