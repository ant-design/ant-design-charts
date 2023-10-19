import { Plot } from '../../base';
import { adaptor } from './adaptor';

import type { Adaptor } from '../../types';
import { ParallelOptions } from './type';

export type { ParallelOptions };

export class Parallel extends Plot<ParallelOptions> {
	 /** 图表类型 */
	 public type = 'Parallel';

	 /**
		* 获取 平行图 默认配置项
		* 供外部使用
		*/
	 static getDefaultOptions(): Partial<ParallelOptions> {
		 return {
				type: 'view',
				children: [{ type: 'line' }],
				coordinate: { type: "parallel" },
		  };
	 }
 
	 /**
		* 获取 平行图 默认配置
		*/
	 protected getDefaultOptions() {
		 return Parallel.getDefaultOptions();
	 }
 
	 /**
		* 平行图适配器
		*/
	 protected getSchemaAdaptor(): (params: Adaptor<ParallelOptions>) => void {
		 return adaptor;
	 }
}