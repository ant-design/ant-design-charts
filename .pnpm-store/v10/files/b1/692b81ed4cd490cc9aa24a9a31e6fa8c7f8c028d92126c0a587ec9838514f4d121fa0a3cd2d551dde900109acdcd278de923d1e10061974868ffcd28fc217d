import { useMemo } from 'react';
import { Pagination } from './core';
import { UsePagination } from './types';

const MIDDLE_PAGES_SIBLING_COUNT = 2;
const EDGE_PAGE_COUNT = 2;

export const usePagination: UsePagination = ({
  totalPage,
  currentPage,
  middlePagesSiblingCount = MIDDLE_PAGES_SIBLING_COUNT,
  edgePageCount = EDGE_PAGE_COUNT,
}) => {
  const pagination = useMemo(
    () =>
      new Pagination({
        totalPage,
        currentPage,
        middlePagesSiblingCount: middlePagesSiblingCount,
        edgePageCount: edgePageCount,
      }),
    [totalPage, currentPage, middlePagesSiblingCount, edgePageCount]
  );

  return {
    getMiddlePages: pagination.getMiddlePages,
    hasPreviousPage: pagination.hasPreviousPage,
    hasNextPage: pagination.hasNextPage,
    getPreviousPages: pagination.getPreviousPages,
    getNextPages: pagination.getNextPages,
    isPreviousTruncable: pagination.isPreviousTruncable,
    isNextTruncable: pagination.isNextTruncable,
    totalPage,
    currentPage,
  };
};
