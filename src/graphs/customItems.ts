import G6, { IGroup } from '@antv/g6';
import { defaultLabelCfg, Margin, defaultTitleLabelCfg, cardTitlePadding } from './constants';
import { getConfig, getContentAndStyle, getMarkerPosition } from './utils';
import { CardModelConfig, IconNodeModelConfig } from './types';

export const registerCardNode = () => {
  G6.registerNode(
    'card',
    {
      draw: (cfg: CardModelConfig | undefined = {}, group: IGroup | undefined) => {
        const { title, body, footer, collapseExpand, children, markerPosition } = cfg;
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
        if (title) {
          const { text, style: titleStyle = cfg.titleStyle } = getContentAndStyle(title);
          titleTextShape = group!.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: Margin,
              y: cardTitlePadding,
              text,
              ...defaultTitleLabelCfg,
              ...getConfig(titleStyle, group),
            },
            name: 'title',
          });
        }

        const { height: titleHeight } = titleTextShape
          ? titleTextShape.getBBox()
          : { height: size[1] / 2 };

        // title rect
        const titleRectShape = group!.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: size[0],
            height: titleHeight + 2 * cardTitlePadding,
            fill: color,
            radius: [radius, radius, 0, 0],
          },
          name: 'title-rect',
          draggable: true,
        });
        titleTextShape?.toFront();

        // collapse marker
        let markerShape;
        if (collapseExpand && children) {
          markerShape = group!.addShape('marker', {
            attrs: {
              ...getMarkerPosition(markerPosition as string, size),
              r: 6,
              cursor: 'pointer',
              symbol: cfg.collapsed ? G6.Marker.expand : G6.Marker.collapse,
              stroke: color,
              lineWidth: 1,
              fill: '#fff',
              ...getConfig(cfg.markerStyle, group, { ...cfg, name: 'collapse-icon' }),
            },
            name: 'collapse-icon',
          });
        }

        const { height: titleRectBoxHeight } = titleRectShape.getBBox();
        height += titleRectBoxHeight;

        // body
        let bodyShape;
        if (body) {
          const { text, style: bodyStyle = cfg.bodyStyle } = getContentAndStyle(body);
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
        if (footer) {
          if (bodyShape) {
            height += Margin;
          }
          const { text: labelText, style: labelStyle = cfg.footerStyle } =
            getContentAndStyle(footer);
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
          console.log(titleHeight);

          const width =
            size[0] > desTextShapeBBox.width + 16 ? size[0] : desTextShapeBBox.width + 16;
          shape.attr({ width, height: height + 16 });
          titleRectShape?.attr('width', width);
          markerShape?.attr({
            ...getMarkerPosition(markerPosition as string, [
              width,
              height + titleHeight + 2 * cardTitlePadding,
            ]),
          });
        }
        return shape;
      },
      update: undefined,
    },
    'single-node',
  );
};

export const registerIconNode = () => {
  G6.registerNode(
    'icon-node',
    {
      options: {
        size: [60, 20],
        stroke: '#91d5ff',
        fill: '#91d5ff',
      },
      draw(cfg: IconNodeModelConfig | undefined = {}, group: IGroup | undefined) {
        // @ts-ignore
        const styles = this.getShapeStyle(cfg);
        const {
          labelCfg = {},
          labelStyle,
          label,
          markerStyle,
          showMarker,
          title,
          titleStyle,
        } = cfg;

        const keyShape = group!.addShape('rect', {
          attrs: {
            ...styles,
            x: 0,
            y: 0,
          },
        });
        const { height: keyShapeHeight } = keyShape.getBBox();
        let headShape;
        if (cfg.leftIcon) {
          const { x = 8, y, width = 24, height = 24, style } = cfg.leftIcon;
          if (style) {
            group!.addShape('rect', {
              attrs: {
                x: 1,
                y: 1,
                width: 38,
                height: styles.height - 2,
                ...style,
              },
            });
          }
          headShape = group!.addShape('image', {
            attrs: {
              x,
              y: y || keyShapeHeight / 2 - height / 2,
              width,
              height,
              img: (cfg.leftIcon as any).img,
            },
            name: 'image-shape',
          });
        }

        if (showMarker) {
          group!.addShape('marker', {
            attrs: {
              x: styles.width / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#73d13d',
              cursor: 'pointer',
              symbol: G6.Marker.expand,
              ...getConfig(markerStyle, group, { ...cfg, name: 'add-item' }),
            },
            name: 'add-item',
          });

          group!.addShape('marker', {
            attrs: {
              x: (styles.width * 2) / 3,
              y: styles.height + 6,
              r: 6,
              stroke: '#ff4d4f',
              cursor: 'pointer',
              symbol: G6.Marker.collapse,
              ...getConfig(markerStyle, group, { ...cfg, name: 'remove-item' }),
            },
            name: 'remove-item',
          });
        }
        if (label) {
          const textCfg = labelStyle ? getConfig(labelStyle, group, cfg) : labelCfg;
          const y = title
            ? styles.height / 2 - (textCfg.fontSize * 1 || 12) - Margin / 2
            : styles.height / 2;
          group!.addShape('text', {
            attrs: {
              text: label,
              x: styles.width / 2,
              y,
              textAlign: headShape ? 'start' : 'center',
              textBaseline: title ? 'top' : 'middle',
              ...textCfg,
            },
          });
        }
        if (title) {
          const titleCfg = titleStyle ? getConfig(titleStyle, group, cfg) : labelCfg;
          group!.addShape('text', {
            attrs: {
              text: title,
              x: styles.width / 2,
              y: styles.height / 2 + Margin / 2,
              textAlign: headShape ? 'start' : 'center',
              textBaseline: 'top',
              ...titleCfg,
            },
          });
        }

        return keyShape;
      },
    },
    'rect',
  );
};
