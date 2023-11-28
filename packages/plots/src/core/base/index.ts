import EE from '@antv/event-emitter';
import { Chart, ChartEvent } from '@antv/g2';
import { CHART_OPTIONS, ANNOTATION_LIST, SKIP_DEL_CUSTOM_SIGN } from '../constants';
import { deepAssign, omit, pick, deleteCustomKeys, deleteChartOptionKeys } from '../utils';
import { Annotaion } from '../annotation';

import type { Adaptor, Options } from '../types';

const SOURCE_ATTRIBUTE_NAME = 'data-chart-source-type';

const ANNOTATION_MAP = new Map();

type PickOptions = Pick<Options, 'autoFit' | 'width' | 'height'>;
export abstract class Plot<O extends PickOptions> extends EE {
  /** plot 类型名称 */
  public abstract readonly type: string;
  /** plot 绘制的 dom */
  public readonly container: HTMLElement;
  /** G2 Spec */
  public options: O;
  /** G2 chart 实例 */
  public chart: Chart;

  constructor(container: string | HTMLElement, options: O) {
    super();
    this.container = typeof container === 'string' ? document.getElementById(container) : container;
    this.options = deepAssign({}, this.getBaseOptions(), this.getDefaultOptions(), options);
    this.createG2();
    this.bindEvents();
  }

  /**
   * new Chart 所需配置
   */
  private getChartOptions() {
    const { autoFit = true } = this.options;
    return {
      ...pick(this.options, CHART_OPTIONS),
      container: this.container,
      autoFit,
    };
  }

  /**
   * G2 options(Spec) 配置
   */
  private getSpecOptions() {
    if (this.type === 'base' || this[SKIP_DEL_CUSTOM_SIGN]) {
      return { ...this.options, ...this.getChartOptions() };
    }
    return deleteCustomKeys(omit(this.options, CHART_OPTIONS), true);
  }

  /**
   * 创建 G2 实例
   */
  private createG2() {
    if (!this.container) {
      throw Error('The container is not initialized!');
    }
    this.chart = new Chart(this.getChartOptions());
    // 给容器增加标识，知道图表的来源区别于 G2
    this.container.setAttribute(SOURCE_ATTRIBUTE_NAME, 'Ant Design Charts');
  }

  /**
   * 绑定代理所有 G2 的事件
   */
  private bindEvents() {
    if (this.chart) {
      this.chart.on('*', (e) => {
        if (e?.type) {
          this.emit(e.type, e);
        }
      });
    }
  }

  private getBaseOptions(): Partial<Options> {
    return { type: 'view' };
  }

  /**
   * 获取默认的 options 配置项，每个组件都可以复写
   */
  protected getDefaultOptions(): any {}

  /**
   * 绘制
   */
  public render(): void {
    // 执行 adaptor , base 穿透类型不必 adaptor.
    if (this.type !== 'base') {
      this.execAdaptor();
    }
    // options 转换
    this.chart.options(this.getSpecOptions());
    // 渲染
    this.chart.render().then(() => {
      this.annotations();
    });
    // 绑定
    this.bindSizeSensor();
  }

  /**
   * annotaions
   */
  public annotations(): void {
    ANNOTATION_LIST.forEach((annotation) => {
      const { key, shape } = annotation;
      const annotationOptions = this.options[key];
      if (ANNOTATION_MAP.has(key)) {
        ANNOTATION_MAP.get(key).destroy();
      }
      if (annotationOptions) {
        ANNOTATION_MAP.set(key, new Annotaion[shape](this.chart, annotationOptions));
      }
    });
  }

  /**
   * 更新
   * @param options
   */
  public update(options: Partial<O>) {
    this.updateOption(options);
  }

  /**
   * 更新配置
   * @param options
   */
  protected updateOption(options: Partial<O>) {
    this.options = deepAssign({}, this.options, options);
  }

  /**
   * 更新数据
   * @override
   * @param options
   */
  public changeData(data: any) {
    this.chart.changeData(data);
  }

  /**
   * 修改画布大小
   * @param width
   * @param height
   */
  public changeSize(width: number, height: number) {
    this.chart.changeSize(width, height);
  }

  /**
   * 销毁
   */
  public destroy() {
    // G2 的销毁
    this.chart.destroy();
    // 清空已经绑定的事件
    this.off();

    this.container.removeAttribute(SOURCE_ATTRIBUTE_NAME);
  }

  /**
   * 每个组件有自己的 schema adaptor
   */
  protected abstract getSchemaAdaptor(): (params: Adaptor<O>) => void;

  /**
   * 执行 adaptor 操作
   */
  protected execAdaptor() {
    const adaptor = this.getSchemaAdaptor();

    // 转化成 G2 Spec
    adaptor({
      chart: this.chart,
      options: deleteChartOptionKeys(this.options),
    });
  }

  /**
   * 当图表容器大小变化的时候，执行的函数
   */
  protected triggerResize() {
    this.chart.forceFit();
  }

  /**
   * 绑定 dom 容器大小变化的事件
   */
  private bindSizeSensor() {
    const { autoFit = true } = this.options;
    if (autoFit) {
      this.chart.on(ChartEvent.AFTER_CHANGE_SIZE, () => {
        this.annotations();
      });
    }
  }
}
