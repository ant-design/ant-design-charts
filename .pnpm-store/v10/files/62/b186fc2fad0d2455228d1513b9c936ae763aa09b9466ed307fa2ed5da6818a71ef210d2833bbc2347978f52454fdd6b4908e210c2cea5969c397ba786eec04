import React from 'react';
type Getter<T> = () => T;
export default function useSyncState<T>(defaultValue: T | Getter<T>): readonly [T, (action: React.SetStateAction<T>) => void, Getter<T>];
export {};
