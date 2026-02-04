import { useCallback, useEffect, useRef, useState } from 'react';
import { HookProps } from './type';
import { optimization } from '../utils';
import { ReadingProgress } from './core';

export const useReadingProgress = (props?: HookProps) => {
  const rp = useRef<ReadingProgress>();

  useEffect(() => {
    rp.current = new ReadingProgress({
      rootEl: props?.rootEl,
      targetEl: props?.targetEl,
    });
  }, [props]);

  const [value, updateProgressValue] = useState(rp.current?.getProgress() || 0);

  const update = useCallback(() => {
    updateProgressValue(rp.current?.getProgress() || 0);
  }, []);
  const debounceUpdate = useCallback(
    optimization.debounce(() => {
      update();
    }),
    []
  );

  useEffect(() => {
    if (rp.current?.rootSelector) {
      rp.current.rootSelector.addEventListener('scroll', debounceUpdate);
    }
    window.addEventListener('resize', debounceUpdate);
    update();

    return () => {
      if (rp.current?.rootSelector) {
        rp.current.rootSelector.removeEventListener('scroll', debounceUpdate);
      }
      window.removeEventListener('resize', debounceUpdate);
    };
  }, [update, debounceUpdate]);

  return {
    value,
  };
};
