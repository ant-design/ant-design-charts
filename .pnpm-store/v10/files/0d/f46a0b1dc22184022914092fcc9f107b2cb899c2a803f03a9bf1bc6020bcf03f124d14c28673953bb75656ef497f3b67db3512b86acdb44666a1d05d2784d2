export declare class Pagination {
    private currentPage;
    private totalPage;
    private middlePagesSiblingCount;
    private edgePageCount;
    constructor({ currentPage, totalPage, middlePagesSiblingCount, edgePageCount, }: {
        currentPage: number;
        totalPage: number;
        middlePagesSiblingCount?: number;
        edgePageCount?: number;
    });
    private getAllPages;
    private getMiddlePageCount;
    private isReachedToFirst;
    private isReachedToLast;
    private getAllPreviousPages;
    private getAllNextPages;
    hasPreviousPage: () => boolean;
    hasNextPage: () => boolean;
    getMiddlePages: () => number[];
    getPreviousPages: () => number[];
    getNextPages: () => number[];
    isPreviousTruncable: () => boolean;
    isNextTruncable: () => boolean;
}
