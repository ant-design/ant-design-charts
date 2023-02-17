import React, { useEffect, useRef, Fragment } from 'react';
import useFullscreen from '../../../hooks/useFullscreen';
import { Graph, ToolbarCfg } from '../../../interface';

export interface IToolbar {
  toolbarCfg: ToolbarCfg;
  graph: Graph;
  container: HTMLDivElement | null;
}

export const Toolbar: React.FC<IToolbar> = ({ toolbarCfg, container, graph }) => {
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
    return customRender({
      zoomIn,
      zoomOut,
      toggleFullscreen: setToggleFullscreen,
      fullscreen,
      graph,
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
