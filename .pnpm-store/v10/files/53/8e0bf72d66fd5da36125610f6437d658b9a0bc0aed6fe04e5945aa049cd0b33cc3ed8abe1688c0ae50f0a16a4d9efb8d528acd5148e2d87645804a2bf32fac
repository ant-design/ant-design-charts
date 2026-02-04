import { getFullDemos } from 'dumi';
import { useLocaleDocRoutes } from '../utils';
type IDemosData = Record<string, Partial<Awaited<ReturnType<typeof getFullDemos>>[string]>>;
type ISearchData = [
    routes: ReturnType<typeof useLocaleDocRoutes>,
    demos: IDemosData
];
export default function useSearchData(): [
    ISearchData | null,
    () => Promise<void>
];
export {};
