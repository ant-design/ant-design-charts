import { ComponentProps } from './type';
import { useReadingProgress } from './useReadingProgress';

export { useReadingProgress };

export const ReadingProgress = ({
  targetEl,
  rootEl,
  children,
}: ComponentProps) => {
  const readingProgress = useReadingProgress({
    targetEl,
    rootEl,
  });

  return children(readingProgress);
};
