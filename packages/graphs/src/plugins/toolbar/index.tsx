import React, { useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import useFullscreen from '../../hooks/useFullscreen';
import { setStyles, Log } from '../../utils';
import { Graph, ToolbarCfg } from '../../interface';

export interface IToolbar {
  toolbarCfg: ToolbarCfg;
  graph: Graph;
  container: HTMLDivElement | null;
}

const Toolbar: React.FC<IToolbar> = ({ toolbarCfg, container, graph }) => {
  const useGraph = useRef<Graph | undefined>();
  const width = useRef<number>();
  const height = useRef<number>();
  const zoom = useRef<number>(1);
  const { zoomFactor = 0.25, renderIcon, customContent } = toolbarCfg;
  const [fullscreen, toggleFullscreen] = useFullscreen(container);
  // 获取当全屏时的窗口大小
  const getWindow = () => {
    return [window.outerWidth, window.outerHeight];
  };
  // 切换全屏时保存 graph 尺寸
  const toggleWidth = (f: boolean) => {
    const size = f ? getWindow() : [width.current, height.current];
    useGraph.current?.changeSize(size[0] as number, size[1] as number);
  };

  // 获取缩放中心
  const getCenter = () => {
    if (!container) {
      return {
        x: 0,
        y: 0,
      };
    }
    return {
      x: container.clientWidth / 2,
      y: container.clientHeight / 2,
    };
  };

  // in 放大
  const zoomIn = () => {
    useGraph.current?.zoom(Math.min(zoom.current + zoomFactor, 5), getCenter());
  };

  // out 缩小
  const zoomOut = () => {
    useGraph.current?.zoom(Math.max(zoom.current - zoomFactor, 0.25), getCenter());
  };

  useEffect(() => {
    if (graph) {
      useGraph.current = graph;
      width.current = container?.clientWidth;
      height.current = container?.clientHeight;
    }
  }, [graph]);

  const setToggleFullscreen = () => {
    toggleFullscreen();
    toggleWidth(!document.fullscreenElement);
  };

  const customRender = customContent || renderIcon;

  if (customRender) {
    // 用法升级，提示旧用户
    if (
      !customRender
        .toString()
        .match(/\(([^)]*)\)/)?.[1]
        ?.includes('{')
    ) {
      Log.warn(`customContent 用法已经升级，customContent(zoomIn, xx) => customContent({zoomIn, xx})`);
    }
    return customRender({
      zoomIn,
      zoomOut,
      toggleFullscreen: setToggleFullscreen,
      fullscreen,
    });
  }

  return (
    <Fragment>
      {!fullscreen ? (
        <span
          style={{
            cursor: 'pointer',
          }}
          onClick={setToggleFullscreen}
        >
          ☐
        </span>
      ) : (
        <span
          style={{
            cursor: 'pointer',
          }}
          onClick={setToggleFullscreen}
        >
          ⚄
        </span>
      )}
      <span
        style={{
          cursor: 'pointer',
        }}
        onClick={zoomIn}
      >
        +
      </span>
      <span
        style={{
          cursor: 'pointer',
        }}
        onClick={zoomOut}
      >
        -
      </span>
    </Fragment>
  );
};

export const createToolbar = ({ graph, container, toolbarCfg }: IToolbar) => {
  const { style, show, className } = toolbarCfg;
  const toolbarId = `${graph.get('id')}-toolbar`;
  const exist = document.querySelector(`#${toolbarId}`);
  if (exist) {
    exist.parentNode?.removeChild(exist);
  }
  if (!show) {
    return;
  }
  const defaultStyle = {
    position: 'absolute',
    right: '12px',
    top: '12px',
    display: 'flex',
    flexDirection: 'column',
    padding: '6px',
    borderRadius: '2px',
    fontSize: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    color: 'rgba(0,0,0,.65)',
    backgroundColor: '#fff',
    boxShadow: '0 0 3px #ccc',
  } as React.CSSProperties;
  const mountPoint = document.createElement('div');
  mountPoint.id = toolbarId;
  mountPoint.className = className ?? 'charts-toolbar';
  setStyles(mountPoint, defaultStyle);
  setStyles(mountPoint, style);
  ReactDOM.render(<Toolbar graph={graph} container={container} toolbarCfg={toolbarCfg} />, mountPoint);
  // @ts-ignore
  container.appendChild(mountPoint);
};
