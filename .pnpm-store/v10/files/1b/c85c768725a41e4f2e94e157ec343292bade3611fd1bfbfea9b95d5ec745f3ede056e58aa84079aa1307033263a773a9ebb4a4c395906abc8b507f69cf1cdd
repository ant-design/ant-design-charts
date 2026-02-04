import React from 'react';
export default function useSyncState(defaultValue) {
  const [, forceUpdate] = React.useState(0);
  const stateRef = React.useRef(typeof defaultValue === 'function' ? defaultValue() : defaultValue);
  const setState = React.useCallback(action => {
    stateRef.current = typeof action === 'function' ? action(stateRef.current) : action;
    forceUpdate(prev => prev + 1);
  }, []);
  const getState = React.useCallback(() => stateRef.current, []);
  return [stateRef.current, setState, getState];
}