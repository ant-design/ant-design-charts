import { useRef } from 'react';

/**
 * @see https://github.com/streamich/react-use/blob/master/docs/useLatest.md
 */
export var useLatest = function useLatest(value) {
  var ref = useRef(value);
  ref.current = value;
  return ref;
};