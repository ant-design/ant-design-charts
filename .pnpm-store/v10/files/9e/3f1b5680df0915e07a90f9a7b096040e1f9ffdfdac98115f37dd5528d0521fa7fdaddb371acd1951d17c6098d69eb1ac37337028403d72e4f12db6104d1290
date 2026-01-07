import { useEffect, useRef } from 'react';
export var usePrevious = function usePrevious(state) {
  var ref = useRef();
  useEffect(function () {
    ref.current = state;
  });
  return ref.current;
};