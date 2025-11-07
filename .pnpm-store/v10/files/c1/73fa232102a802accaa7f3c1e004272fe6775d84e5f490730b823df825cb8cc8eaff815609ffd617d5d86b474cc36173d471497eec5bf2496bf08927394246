/** given a list of set objects, and their corresponding overlaps.
updates the (x, y, radius) attribute on each set such that their positions
roughly correspond to the desired overlaps */
export declare function venn(areas: any, parameters?: any): any;
/** Returns the distance necessary for two circles of radius r1 + r2 to
have the overlap area 'overlap' */
export declare function distanceFromIntersectArea(r1: any, r2: any, overlap: any): any;
export declare function getDistanceMatrices(areas: any, sets: any, setids: any): {
    distances: any[][];
    constraints: any[][];
};
export declare function bestInitialLayout(areas: any, params: any): {};
export declare function constrainedMDSLayout(areas: any, params: any): {};
/** Lays out a Venn diagram greedily, going from most overlapped sets to
least overlapped, attempting to position each new set such that the
overlapping areas to already positioned sets are basically right */
export declare function greedyLayout(areas: any, params: any): {};
/** Given a bunch of sets, and the desired overlaps between these sets - computes
the distance from the actual overlaps to the desired overlaps. Note that
this method ignores overlaps of more than 2 circles */
export declare function lossFunction(sets: any, overlaps: any): number;
export declare function disjointCluster(circles: any): any[];
export declare function normalizeSolution(solution: any, orientation: any, orientationOrder: any): {};
/** Scales a solution from venn.venn or venn.greedyLayout such that it fits in
a rectangle of width/height - with padding around the borders. also
centers the diagram in the available space at the same time */
export declare function scaleSolution(solution: any, width: any, height: any, padding: any): any;
