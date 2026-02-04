import type { Plugin } from '../../compiled/vite';
declare type fileType = Parameters<NonNullable<Plugin['generateBundle']>>[1]['file'];
/**
 * delete specific files from output map
 * @param files file list which will be removed
 */
export default function deleteOutputFiles(files: string[], beforeDelete: (file: fileType) => void): Plugin;
export {};
