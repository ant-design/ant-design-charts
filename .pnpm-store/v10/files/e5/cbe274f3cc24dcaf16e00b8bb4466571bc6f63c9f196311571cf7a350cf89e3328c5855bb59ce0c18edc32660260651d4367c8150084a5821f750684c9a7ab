export type UsePaginationProps = {
  totalPage: number;
  currentPage: number;
  middlePagesSiblingCount?: number;
  edgePageCount?: number;
};

export type UsePagination = (
  args0: UsePaginationProps
) => {
  getMiddlePages: () => number[];
  hasPreviousPage: () => boolean;
  hasNextPage: () => boolean;
  getPreviousPages: () => number[];
  getNextPages: () => number[];
  isPreviousTruncable: () => boolean;
  isNextTruncable: () => boolean;
  totalPage: number;
  currentPage: number;
};
