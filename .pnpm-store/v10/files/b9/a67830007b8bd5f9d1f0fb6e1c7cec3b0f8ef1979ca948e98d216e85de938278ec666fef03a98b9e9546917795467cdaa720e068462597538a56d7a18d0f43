import { usePagination } from './usePagination';
import { UsePaginationProps } from './types';

type PaginationProps = {
  children: (arg0: ReturnType<typeof usePagination>) => JSX.Element;
} & UsePaginationProps;

export { usePagination };

export const Pagination = ({
  children,
  totalPage,
  currentPage,
  middlePagesSiblingCount,
  edgePageCount,
}: PaginationProps) => {
  const pagination = usePagination({
    totalPage,
    currentPage,
    middlePagesSiblingCount,
    edgePageCount,
  });

  return children(pagination);
};
