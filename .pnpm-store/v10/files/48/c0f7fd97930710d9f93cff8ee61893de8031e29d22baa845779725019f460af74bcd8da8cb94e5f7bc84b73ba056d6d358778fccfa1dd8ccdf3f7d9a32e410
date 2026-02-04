import { Plugin } from '@umijs/bundler-utils/compiled/esbuild';
import type { DepOptimizationOptions } from 'vite';
import type { createResolver } from '../../../libs/scan';
/**
 * only external top level import, exclude sub-path imports for esmi
 * example:
 *   - import from 'antd' will be externalized
 *   - import from 'antd/dist/antd.less' will not be externalized
 */
export default function topLevelExternal({ exclude, resolver, }: {
    exclude: NonNullable<DepOptimizationOptions['exclude']>;
    resolver: ReturnType<typeof createResolver>;
}): Plugin;
