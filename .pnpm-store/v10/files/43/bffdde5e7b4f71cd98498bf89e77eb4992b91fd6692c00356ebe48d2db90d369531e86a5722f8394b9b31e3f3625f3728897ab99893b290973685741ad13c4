import { Arguments } from 'swr/_internal';

type SWRInfiniteKeyLoader<Data = any, Args extends Arguments = Arguments> = (index: number, previousPageData: Data | null) => Args;

declare const unstable_serialize: (getKey: SWRInfiniteKeyLoader) => string;

export { unstable_serialize };
