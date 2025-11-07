import { useDemo, useLiveDemo, useParams } from 'dumi';
import { createElement, useEffect } from 'react';
import { useRenderer } from "../../theme-api/useRenderer";
import "./index.less";
var DemoRenderPage = function DemoRenderPage() {
  var params = useParams();
  var id = params.id;
  var demo = useDemo(id);
  var _useRenderer = useRenderer({
      id: id,
      component: demo.component,
      renderOpts: demo.renderOpts
    }),
    canvasRef = _useRenderer.canvasRef;
  var _ref = demo || {},
    component = _ref.component,
    renderOpts = _ref.renderOpts;
  var _useLiveDemo = useLiveDemo(id),
    liveDemoNode = _useLiveDemo.node,
    setSource = _useLiveDemo.setSource,
    liveDemoError = _useLiveDemo.error,
    loading = _useLiveDemo.loading;
  var finalNode = liveDemoNode || (renderOpts !== null && renderOpts !== void 0 && renderOpts.renderer ? /*#__PURE__*/createElement('div', {
    ref: canvasRef
  }) : component && /*#__PURE__*/createElement(component));

  // listen message event for setSource
  useEffect(function () {
    var handler = function handler(ev) {
      if (ev.data.type === 'dumi.liveDemo.setSource') {
        setSource(ev.data.value);
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, [setSource]);

  // notify parent window that compile done
  useEffect(function () {
    if (!loading && (liveDemoError || liveDemoNode)) {
      window.postMessage({
        type: 'dumi.liveDemo.compileDone',
        value: {
          err: liveDemoError
        }
      });
    }
  }, [liveDemoError, liveDemoNode, loading]);
  return finalNode;
};
export default DemoRenderPage;