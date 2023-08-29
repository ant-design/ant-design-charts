import { HTML, canvas as GCanvas } from '@antv/g';

export type HTMLRenderOptions = {
  x?: number;
  y?: number;
  innerHTML: string;
};

export class HTMLRender {
  /** canvas 实例 */
  public canvas: GCanvas;
  /** 配置 */
  public options: HTMLRenderOptions;

  constructor(canvas: GCanvas, options: HTMLRenderOptions) {
    this.canvas = canvas;
    this.options = options;
    this.init();
  }
  public init() {
    const html = new HTML({
      style: {
        x: 0,
        y: 0,
        ...this.options,
      },
    });
    this.canvas.appendChild(html);
  }
  public update(options: HTMLRenderOptions) {}
  public destroy() {}
}
