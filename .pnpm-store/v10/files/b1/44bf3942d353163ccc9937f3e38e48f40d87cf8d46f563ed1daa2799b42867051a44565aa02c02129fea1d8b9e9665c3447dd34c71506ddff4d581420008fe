import type { RequestData, UseFetchDataAction, UseFetchProps } from './typing';
/**
 * useFetchData hook 用来获取数据并控制数据的状态和分页
 * @template T
 * @param {(undefined | ((params?: { pageSize: number; current: number }) => Promise<DataSource>))} getData - 获取数据的函数，参数为分页参数，
 * 返回一个 Promise 类型的 T 类型的数据
 * @param {(undefined | any[])} defaultData - 默认的数据
 * @param {UseFetchProps} options - 配置项，包括了默认的分页参数、格式化数据的函数等
 * @returns {UseFetchDataAction} 返回一个对象，包含当前的数据列表、loading 状态、error、以及可控制的分页参数等
 */
declare const useFetchData: <DataSource extends RequestData<any>>(getData: ((params?: {
    pageSize: number;
    current: number;
}) => Promise<DataSource>) | undefined, defaultData: any[] | undefined, options: UseFetchProps) => UseFetchDataAction;
export default useFetchData;
