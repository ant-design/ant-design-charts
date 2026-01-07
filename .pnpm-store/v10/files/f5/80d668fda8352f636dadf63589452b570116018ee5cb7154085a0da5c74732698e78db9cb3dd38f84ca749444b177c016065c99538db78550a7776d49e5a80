/** 获得 ticks 的方法 */
export type TickMethod<T = number> = (min: T, max: T, n?: number, ...rest: any[]) => T[];

/** nice domain 的方法 */
export type NiceMethod<T = number> = TickMethod<T>;

/** 插值器工厂 */
export type Interpolate<T = number> = (a: T, b: T) => (t: number) => T;

/** 插值器函数 */
export type Interpolator = (t: number) => any;

/** 所有支持的插值器工厂 */
export type Interpolates = Interpolate<number> | Interpolate<string> | Interpolate<number | string>;

/** 比较器 */
export type Comparator = (a: any, b: any) => number;

/** tickMethod 和 nice 需要使用的参数 */
export type TickMethodOptions<T = number | Date> = [T, T, number, number?, boolean?];

/** 柯里化后的函数的类型，对输入的值进行处理 */
export type Transform = (x: any) => any;

/** 柯里化后的函数的工厂函数类型 */
export type CreateTransform = (...args: any[]) => Transform;

/** 通用的配置 */
export type BaseOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: any[];
};

/** 获得比例尺选项中定义域元素的类型 */
export type Domain<O extends BaseOptions> = O['domain'][number];

/** 获得比例尺选项中值域元素的类型 */
export type Range<O extends BaseOptions> = O['range'][number];

/** 获得比例尺选项中 unknown 的类型 */
export type Unknown<O extends BaseOptions> = O['unknown'];

/** Identity 比例尺的选项 */

/** Identity 比例尺的选项 */
export type IdentityOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: any[];
  /** tick 个数，默认值为 5 */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number>;
};

/** Constant 比例尺的选项 */
export type ConstantOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: any[];
  /** tick 个数，默认值为 5 */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number>;
};

/** Constant 比例尺的选项 */
export type ContinuousOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: (number | string)[];
  /** 定义域，默认为 [0, 1] */
  domain?: (number | Date)[];
  /** tick 个数，默认值为 5 */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number | Date>;
  /** 是否需要对定义域的范围进行优化 */
  nice?: boolean;
  /** 是否需要限制输入的范围在值域内 */
  clamp?: boolean;
  /** 是否需要对输出进行四舍五入 */
  round?: boolean;
  /** 插值器的工厂函数，返回一个对归一化后的输入在值域指定范围内插值的函数 */
  interpolate?: Interpolates;
};

/** Linear 比例尺的选项 */
export type LinearOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: (number | string)[];
  /** 定义域，默认为 [0, 1] */
  domain?: number[];
  /** tick 个数，默认值为 5 */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number>;
  /** 是否需要对定义域的范围进行优化 */
  nice?: boolean;
  /** 是否需要限制输入的范围在值域内 */
  clamp?: boolean;
  /** 是否需要对输出进行四舍五入 */
  round?: boolean;
  /** 插值器的工厂函数，返回一个对归一化后的输入在值域指定范围内插值的函数 */
  interpolate?: Interpolates;
};

/** Pow 比例尺的选项 */
export type PowOptions = LinearOptions & {
  /** 指数 */
  exponent?: number;
};

/** Sqrt 比例尺的选项 */
export type SqrtOptions = LinearOptions;

/** Log 比例尺的选项 */
export type LogOptions = LinearOptions & {
  /** 底数 */
  base?: number;
};

/** time 比例尺的选项 */
export type TimeOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: (number | string)[];
  /** 定义域，默认为 [0, 1] */
  domain?: Date[];
  /** tick 个数，默认值为 5 */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<Date>;
  /** 是否需要对定义域的范围进行优化 */
  nice?: boolean;
  /** 是否需要限制输入的范围在值域内 */
  clamp?: boolean;
  /** 是否需要对输出进行四舍五入 */
  round?: boolean;
  /** 插值器的工厂函数，返回一个对归一化后的输入在值域指定范围内插值的函数 */
  interpolate?: Interpolates;
  /** getTick 的时间间隔 */
  tickInterval?: number;
  /** 格式化的形式 */
  mask?: string;
  /** 是否是 utc 时间 */
  utc?: boolean;
};

/** OrdinalOptions 比例尺的选项 */
export type OrdinalOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: any[];
  /** 比较器 */
  compare?: Comparator;
};

/** 详细请参阅 scale/band.ts */
export type BandOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: number[];
  /** 定义域，默认为 [0, 1] */
  domain?: any[];
  /** 是否取整 */
  round?: boolean;
  /** 内部边距 */
  paddingInner?: number;
  /** 两侧边距 */
  paddingOuter?: number;
  /** 同时定义内部边距和两侧边距，如果该值大于 0，则 paddingInner 和 paddingOuter 无效 */
  padding?: number;
  /** 对齐，取值为 0 - 1 的整数，例如 0.5 表示居中 */
  align?: number;
  /** 比较器，用于对 domain 进行排序 */
  compare?: Comparator;
  /** 每个条的宽度 (bandWidth) 的比例 */
  flex?: number[];
};

/** Point 比例尺的选项 */
export type PointOptions = Omit<BandOptions, 'paddingInner' | 'paddingOuter'>;

/** Threshold 比例尺的选项 */
export type ThresholdOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: number[];
};

/** Quantize 比例尺的选项 */
export type QuantizeOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: number[];
  /** 是否需要 nice */
  nice?: boolean;
  /** 期望的 tickCount */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number>;
};

/** Quantile 比例尺的选项 */
export type QuantileOptions = {
  /** 当需要映射的值不合法的时候，返回的值 */
  unknown?: any;
  /** 值域，默认为 [0, 1] */
  range?: any[];
  /** 定义域，默认为 [0, 1] */
  domain?: number[];
  /** 期望的 tickCount */
  tickCount?: number;
  /** 计算 ticks 的算法 */
  tickMethod?: TickMethod<number>;
};

/** Sequential 比例尺的选项 */
export type SequentialOptions = Omit<LinearOptions, 'Interpolates'> & { interpolator?: Interpolator };

/** Diverging 比例尺的选项  */
export type DivergingOptions = Omit<LinearOptions, 'Interpolates'> & { interpolator?: Interpolator };
