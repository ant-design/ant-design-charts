import { useRef } from 'react';

export default function useInit() {
  const chart = useRef(null) as any;
  const chartsProps = useRef(null) as any;
  const container = useRef<HTMLDivElement>(null);

  return {
    chart,
    chartsProps,
    container,
  };
}
