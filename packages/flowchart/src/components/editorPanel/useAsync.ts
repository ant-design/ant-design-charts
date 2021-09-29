import { useState, useEffect } from 'react';

export type PromiseType<P extends Promise<any>> = P extends Promise<infer T> ? T : never;

export type FunctionReturningPromise = (...args: any[]) => Promise<any>;

export default function useAsync<T extends FunctionReturningPromise>(fn: T) {
  const [state, set] = useState<{ loading: boolean; data?: unknown }>({
    loading: true,
  });

  const callback = () => {
    fn().then(
      (value) => {
        set({
          loading: false,
          data: value,
        });
      },
      (error) => {
        set({
          loading: false,
        });
        console.error(error);
      },
    );
  };

  useEffect(() => {
    callback();
  }, [fn]);

  return state;
}
