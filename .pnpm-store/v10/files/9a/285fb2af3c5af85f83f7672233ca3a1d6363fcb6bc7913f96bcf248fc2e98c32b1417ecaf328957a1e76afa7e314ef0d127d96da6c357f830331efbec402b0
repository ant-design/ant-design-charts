export class Pagination {
  private currentPage: number;
  private totalPage: number;
  private middlePagesSiblingCount: number;
  private edgePageCount: number;

  constructor({
    currentPage,
    totalPage,
    middlePagesSiblingCount = 2,
    edgePageCount = 2,
  }: {
    currentPage: number;
    totalPage: number;
    middlePagesSiblingCount?: number;
    edgePageCount?: number;
  }) {
    this.currentPage = currentPage;
    this.totalPage = totalPage;
    this.middlePagesSiblingCount = middlePagesSiblingCount;
    this.edgePageCount = edgePageCount;
  }

  private getAllPages = () => {
    return [...Array(this.totalPage)].fill(1).map((_, i) => i + 1);
  };

  private getMiddlePageCount = () => {
    return this.middlePagesSiblingCount * 2 + 1;
  };

  private isReachedToFirst = () =>
    this.currentPage <= this.middlePagesSiblingCount;
  private isReachedToLast = () =>
    this.currentPage + this.middlePagesSiblingCount >= this.totalPage;

  private getAllPreviousPages = () => {
    return this.getAllPages().slice(0, this.getMiddlePages()[0] - 1);
  };

  private getAllNextPages = () => {
    const totalPageItems = this.getAllPages();
    const middlePages = this.getMiddlePages();

    return totalPageItems.slice(
      middlePages[middlePages.length - 1],
      totalPageItems[totalPageItems.length]
    );
  };

  hasPreviousPage = () => this.currentPage > 1;
  hasNextPage = () => this.totalPage > this.currentPage;

  getMiddlePages = () => {
    const totalPageItems = this.getAllPages();
    const middlePageCount = this.getMiddlePageCount();
    if (this.isReachedToFirst()) {
      return totalPageItems.slice(0, middlePageCount);
    }
    if (this.isReachedToLast()) {
      return totalPageItems.slice(-middlePageCount);
    }
    return totalPageItems.slice(
      this.currentPage - this.middlePagesSiblingCount - 1,
      this.currentPage + this.middlePagesSiblingCount
    );
  };

  getPreviousPages = () => {
    if (this.isReachedToFirst()) {
      return [];
    }
    if (this.getAllPreviousPages().length < 1) {
      return [];
    }
    return this.getAllPages()
      .slice(0, this.edgePageCount)
      .filter(p => !this.getMiddlePages().includes(p));
  };

  getNextPages = () => {
    if (this.isReachedToLast()) {
      return [];
    }
    if (this.getAllNextPages().length < 1) {
      return [];
    }
    const totalPages = this.getAllPages();
    return totalPages
      .slice(totalPages.length - this.edgePageCount, totalPages.length)
      .filter(p => !this.getMiddlePages().includes(p));
  };

  isPreviousTruncable = () => {
    return (
      this.getAllPreviousPages().filter(
        p =>
          !this.getPreviousPages().includes(p) &&
          !this.getMiddlePages().includes(p)
      ).length > 0
    );
  };

  isNextTruncable = () => {
    return (
      this.getAllNextPages().filter(
        p =>
          !this.getNextPages().includes(p) && !this.getMiddlePages().includes(p)
      ).length > 0
    );
  };
}
