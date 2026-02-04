import { OrdinalOptions, Domain, Range } from '../types';
import { Base } from './base';

type Transform = (x: any) => any;

type MapBetweenArrOptions = {
  // 需要映射的值
  value: any;
  // indexMapper 由定义域生成的映射表，键为定义域的每一个值，值为所在下标
  mapper: Map<any, number>;
  // 定义域
  from: any[];
  // 值域
  to: any[];
  // 当 mapper 中查询不到时的返回值
  notFoundReturn?: any;
};

export const defaultUnknown = Symbol('defaultUnknown');

/**
 * 更新 indexMap
 *
 * @param arr 初始的数组
 * @param target 目标 map
 * @returns {Map<string, any>} 生成的 indexMap
 */
function updateIndexMap(target: Map<any, number>, arr: any[], key: Transform) {
  for (let i = 0; i < arr.length; i += 1) {
    if (!target.has(arr[i])) {
      target.set(key(arr[i]), i);
    }
  }
}

/**
 * 基于 indexMap 进行映射
 *
 * @param options 相关选项
 * @see MapBetweenArrOptions
 * @return {any} 映射结果
 */
function mapBetweenArrByMapIndex(options: MapBetweenArrOptions) {
  const { value, from, to, mapper, notFoundReturn } = options;
  let mappedIndex = mapper.get(value);

  // index 不存在时，
  // 如果用户显式设置了 unknown 的值，那么就返回 unknown 的值
  // 否者我们将 value 添加到原数组, 并更新 Map
  if (mappedIndex === undefined) {
    if (notFoundReturn !== defaultUnknown) {
      return notFoundReturn;
    }
    mappedIndex = from.push(value) - 1;
    mapper.set(value, mappedIndex);
  }

  return to[mappedIndex % to.length];
}

function createKey(d: any) {
  if (d instanceof Date) return (d: Date) => `${d}`;
  if (typeof d === 'object') return (d: Object) => JSON.stringify(d);
  return (d: number | string) => d;
}

/**
 * Ordinal 比例尺
 *
 * 该比例尺具有离散的域和范围，例如将一组命名类别映射到一组颜色
 *
 * - 使用 for 替代一些基于 map 的遍历，for 循环性能远高于 forEach, map
 * - 阻止无意义的更新，只有到用户调用 map、invert 或者 update 之后才会进行相应的更新
 * - 两个 map 只初始化一次，在之后的更新中复用他们，这样我们避免了重复 new Map 带来的性能问题
 *   在大量调用 update 函数场景下，较 d3-scale 效率有质的提高
 */
export class Ordinal<O extends OrdinalOptions = OrdinalOptions> extends Base<O> {
  // 定义域映射表
  private domainIndexMap: Map<any, number>;

  // 值域映射表
  private rangeIndexMap: Map<any, number>;

  // 排序后的 domain
  protected sortedDomain: O['domain'];

  // 获得 domain 的 key
  protected domainKey: Transform;

  // 获得 range 的 key
  protected rangeKey: Transform;

  // 覆盖默认配置
  protected getDefaultOptions() {
    return {
      domain: [],
      range: [],
      unknown: defaultUnknown,
    } as O;
  }

  // 显示指定 options 的类型为 OrdinalOptions，从而推断出 O 的类型
  constructor(options?: OrdinalOptions) {
    super(options as O);
  }

  public map(x: Domain<O>) {
    if (this.domainIndexMap.size === 0) {
      updateIndexMap(this.domainIndexMap, this.getDomain(), this.domainKey);
    }

    return mapBetweenArrByMapIndex({
      value: this.domainKey(x),
      mapper: this.domainIndexMap,
      from: this.getDomain(),
      to: this.getRange(),
      notFoundReturn: this.options.unknown,
    });
  }

  public invert(y: Range<O>) {
    if (this.rangeIndexMap.size === 0) {
      updateIndexMap(this.rangeIndexMap, this.getRange(), this.rangeKey);
    }

    return mapBetweenArrByMapIndex({
      value: this.rangeKey(y),
      mapper: this.rangeIndexMap,
      from: this.getRange(),
      to: this.getDomain(),
      notFoundReturn: this.options.unknown,
    });
  }

  // 因为 ordinal 比例尺更新内部状态的开销较大，所以按需更新
  protected rescale(options?: Partial<O>) {
    const [d] = this.options.domain;
    const [r] = this.options.range;

    this.domainKey = createKey(d);
    this.rangeKey = createKey(r);

    // 如果 rangeIndexMap 没有初始化，说明是在初始化阶段
    if (!this.rangeIndexMap) {
      this.rangeIndexMap = new Map();
      this.domainIndexMap = new Map();
      return;
    }

    // 否者是在更新阶段
    if (!options || options.range) {
      this.rangeIndexMap.clear();
    }

    if (!options || options.domain || options.compare) {
      this.domainIndexMap.clear();
      this.sortedDomain = undefined;
    }
  }

  public clone() {
    return new Ordinal<O>(this.options);
  }

  protected getRange() {
    return this.options.range;
  }

  public getDomain() {
    // 如果设置了比较器，就排序
    if (this.sortedDomain) return this.sortedDomain;

    const { domain, compare } = this.options;
    this.sortedDomain = compare ? [...domain].sort(compare) : domain;
    return this.sortedDomain;
  }
}
