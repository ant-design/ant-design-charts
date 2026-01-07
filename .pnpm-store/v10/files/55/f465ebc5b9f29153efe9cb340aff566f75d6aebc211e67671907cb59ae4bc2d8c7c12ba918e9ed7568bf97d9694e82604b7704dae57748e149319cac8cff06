import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { warning } from "rc-util/es/warning";
import { getShadowRoot } from "rc-util/es/Dom/shadow";
import raf from "rc-util/es/raf";
import * as React from 'react';
import { getWin } from "../util";
export default function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = React.useRef(open);

  // Window click to hide should be lock to avoid trigger lock immediately
  var lockRef = React.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  React.useEffect(function () {
    var id = raf(function () {
      lockRef.current = false;
    });
    return function () {
      raf.cancel(id);
    };
  }, [open]);

  // Click to hide is special action since click popup element should not hide
  React.useEffect(function () {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var genClickEvents = function genClickEvents() {
        var clickInside = false;

        // User may mouseDown inside and drag out of popup and mouse up
        // Record here to prevent close
        var onWindowMouseDown = function onWindowMouseDown(_ref) {
          var target = _ref.target;
          clickInside = inPopupOrChild(target);
        };
        var onWindowClick = function onWindowClick(_ref2) {
          var target = _ref2.target;
          if (!lockRef.current && openRef.current && !clickInside && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        return [onWindowMouseDown, onWindowClick];
      };

      // Events
      var _genClickEvents = genClickEvents(),
        _genClickEvents2 = _slicedToArray(_genClickEvents, 2),
        onWinMouseDown = _genClickEvents2[0],
        onWinClick = _genClickEvents2[1];
      var _genClickEvents3 = genClickEvents(),
        _genClickEvents4 = _slicedToArray(_genClickEvents3, 2),
        onShadowMouseDown = _genClickEvents4[0],
        onShadowClick = _genClickEvents4[1];
      var win = getWin(popupEle);
      win.addEventListener('mousedown', onWinMouseDown, true);
      win.addEventListener('click', onWinClick, true);
      win.addEventListener('contextmenu', onWinClick, true);

      // shadow root
      var targetShadowRoot = getShadowRoot(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onShadowMouseDown, true);
        targetShadowRoot.addEventListener('click', onShadowClick, true);
        targetShadowRoot.addEventListener('contextmenu', onShadowClick, true);
      }

      // Warning if target and popup not in same root
      if (process.env.NODE_ENV !== 'production') {
        var _targetEle$getRootNod, _popupEle$getRootNode;
        var targetRoot = targetEle === null || targetEle === void 0 || (_targetEle$getRootNod = targetEle.getRootNode) === null || _targetEle$getRootNod === void 0 ? void 0 : _targetEle$getRootNod.call(targetEle);
        var popupRoot = (_popupEle$getRootNode = popupEle.getRootNode) === null || _popupEle$getRootNode === void 0 ? void 0 : _popupEle$getRootNode.call(popupEle);
        warning(targetRoot === popupRoot, "trigger element and popup element should in same shadow root.");
      }
      return function () {
        win.removeEventListener('mousedown', onWinMouseDown, true);
        win.removeEventListener('click', onWinClick, true);
        win.removeEventListener('contextmenu', onWinClick, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onShadowMouseDown, true);
          targetShadowRoot.removeEventListener('click', onShadowClick, true);
          targetShadowRoot.removeEventListener('contextmenu', onShadowClick, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}