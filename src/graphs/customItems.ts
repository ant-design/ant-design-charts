import G6, { IGroup } from '@antv/g6';
import { defaultLabelCfg, Margin, defaultTitleLabelCfg } from './constants';
import { getConfig, getContentAndStyle } from './utils';
import { CardModelConfig } from './types';

export const registerNodes = () => {
  G6.registerNode(
    'card',
    {
      draw: (cfg: CardModelConfig | undefined = {}, group: IGroup | undefined) => {
        let size = cfg.size || [100, 30];
        let height = 0; // 统计容器总高度，动态设置
        if (typeof size === 'number') size = [size, size];
        const style = { radius: 2, fill: '#fff', ...cfg.style };
        const color = style.stroke || cfg.color || '#5B8FF9';
        const { radius } = style;
        // node box
        const shape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: size[1],
            stroke: color,
            ...style,
          },
          name: 'main-box',
          draggable: true,
        });

        // node title
        let titleTextShape;
        if (cfg.title) {
          const { text, style: titleStyle = cfg.titleStyle } = getContentAndStyle(cfg.title);
          titleTextShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: Margin,
              y: 2,
              text,
              ...defaultTitleLabelCfg,
              ...getConfig(titleStyle, group),
            },
            name: 'title',
          });
        }

        const titleBox = titleTextShape ? titleTextShape.getBBox() : { height: size[1] / 2 };
        // title rect
        const titleRectShape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: titleBox.height + 4,
            fill: color,
            radius: [radius, radius, 0, 0],
          },
          name: 'title-rect',
          draggable: true,
        });
        titleTextShape?.toFront();

        // collapse marker
        let markerShape;
        if (cfg?.children) {
          markerShape = group!.addShape('marker', {
            attrs: {
              x: size[0] / 2,
              y: 0,
              r: 6,
              cursor: 'pointer',
              symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
              stroke: color,
              lineWidth: 1,
              fill: '#fff',
            },
            name: 'collapse-icon',
          });
        }

        const { height: titleRectBoxHeight } = titleRectShape.getBBox();
        height += titleRectBoxHeight;

        // body
        let bodyShape;
        if (cfg.body) {
          const { text, style: bodyStyle = cfg.bodyStyle } = getContentAndStyle(cfg.body);
          bodyShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: Margin,
              y: height + Margin,
              text,
              ...defaultLabelCfg,
              ...getConfig(bodyStyle, group),
            },
            name: `body`,
          });
          height += bodyShape.getBBox().height;
        }

        // footer
        let footerTextShape;
        if (cfg.footer) {
          if (bodyShape) {
            height += Margin;
          }
          const { text: labelText, style: labelStyle = cfg.footerStyle } = getContentAndStyle(
            cfg.footer,
          );
          footerTextShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: Margin,
              y: height + Margin,
              text: labelText,
              ...defaultLabelCfg,
              ...getConfig(labelStyle, group),
            },
            name: `footer-label`,
          });
          const { width, height: contentHeight } = footerTextShape.getBBox();
          let footerValueHeight = 0;
          if (typeof cfg.footer === 'object' && cfg.footer?.value) {
            const { text: valueText, style: valueStyle = cfg.footerValueStyle || cfg.footerStyle } =
              getContentAndStyle({
                content: cfg.footer.value,
                style: cfg.footer.valueStyle,
              });
            const valueTextShape = group!.addShape('text', {
              attrs: {
                textBaseline: 'top',
                x: width + Margin * 2,
                y: height + Margin,
                text: valueText,
                ...defaultLabelCfg,
                ...getConfig(valueStyle, group),
              },
              name: `footer-value`,
            });
            const { height: valueHeight } = valueTextShape.getBBox();
            footerValueHeight = valueHeight;
          }
          height += Math.max(contentHeight, footerValueHeight);
        }
        // 调整容器宽高
        if (bodyShape) {
          const desTextShapeBBox = bodyShape.getBBox();
          const width =
            size[0] > desTextShapeBBox.width + 16 ? size[0] : desTextShapeBBox.width + 16;
          shape.attr({ width, height: height + 16 });
          titleRectShape?.attr('width', width);
          markerShape?.attr({
            x: width,
            y: (height + 16) / 2,
          });
        }
        return shape;
      },
      update: undefined,
    },
    'single-node',
  );
};
