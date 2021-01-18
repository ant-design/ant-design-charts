import React from 'react';
import ReactDom from 'react-dom';
import { Tooltip } from 'antd';
import { Graph, Markup, ToolsView, EdgeView } from '@antv/x6';

class TooltipTool extends ToolsView.ToolItem<EdgeView, TooltipToolOptions> {
  private delay = 100;

  private moveTimer: number = 0;

  private enterTimer: number = 0;

  private leaveTimer: number = 0;

  private tooltipVisible: boolean = false;

  protected onRender() {
    this.updatePosition();
  }

  private toggleTooltip(visible: boolean) {
    ReactDom.unmountComponentAtNode(this.childNodes.foContent);

    if (visible) {
      ReactDom.render(
        <Tooltip title={this.options.tooltip} visible>
          <div />
        </Tooltip>,
        this.childNodes.foContent,
      );
    }
    this.tooltipVisible = visible;
  }

  private updatePosition(e?: MouseEvent) {
    const fo = this.childNodes.fo as SVGForeignObjectElement;
    if (e) {
      const pos = this.graph.clientToLocal(e.clientX, e.clientY);
      fo.setAttribute('x', `${pos.x}`);
      fo.setAttribute('y', `${pos.y}`);
    } else {
      fo.setAttribute('x', `-10000`);
      fo.setAttribute('y', `-10000`);
    }
  }

  private onMouseEnter({ e }: EdgeView.EventArgs['edge:mouseenter']) {
    this.updatePosition(e.originalEvent);
    window.clearTimeout(this.leaveTimer);
    this.enterTimer = window.setTimeout(() => this.toggleTooltip(true), this.delay);
    if (this.options.follow !== false) {
      document.addEventListener('mousemove', this.onMouseMove);
    }
  }

  private onMouseLeave() {
    this.updatePosition();
    window.clearTimeout(this.enterTimer);
    this.leaveTimer = window.setTimeout(() => this.toggleTooltip(false), this.delay);
    if (this.options.follow !== false) {
      document.removeEventListener('mousemove', this.onMouseMove);
    }
  }

  private onMouseMove = (e: MouseEvent) => {
    window.clearTimeout(this.moveTimer);
    window.clearTimeout(this.enterTimer);
    this.updatePosition(e);
    this.moveTimer = window.setTimeout(() => {
      if (this.tooltipVisible) {
        this.toggleTooltip(false);
      }
      this.toggleTooltip(true);
    }, this.delay);
  };

  delegateEvents() {
    this.cellView.on('edge:mouseenter', this.onMouseEnter, this);
    this.cellView.on('edge:mouseleave', this.onMouseLeave, this);
    return super.delegateEvents();
  }

  protected onRemove() {
    this.cellView.off('edge:mouseenter', this.onMouseEnter, this);
    this.cellView.off('edge:mouseleave', this.onMouseLeave, this);
  }
}

TooltipTool.config({
  markup: Markup.getForeignObjectMarkup(),
});

export interface TooltipToolOptions extends ToolsView.ToolItem.Options {
  follow?: boolean;
  tooltip?: string;
}

Graph.registerEdgeTool('tooltip', TooltipTool, true);