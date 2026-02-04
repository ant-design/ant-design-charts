import { ID } from '@antv/graphlib';
import { Graph } from '../../types';
export type ConflictEntry = {
    i: number;
    indegree?: number;
    in?: ConflictEntry[];
    out?: ConflictEntry[];
    vs: ID[];
    barycenter?: number;
    weight?: number;
    merged?: boolean;
    fixorder?: number;
    order?: number;
};
declare const resolveConflicts: (entries: {
    v: ID;
    barycenter?: number;
    weight?: number;
}[], cg: Graph) => ConflictEntry[];
export default resolveConflicts;
