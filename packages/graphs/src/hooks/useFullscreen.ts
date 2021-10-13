import { useEffect, useState } from 'react';
import { Console } from '../utils';

interface FunUseFullscreen {
  (el?: HTMLElement | null): [boolean, () => void];
}

const useFullscreen: FunUseFullscreen = (el) => {
  const [fullscreen, setFullscreen] = useState(false);
  const handleFullScreenChange = () => {
    // if exit fullscreen
    if (!document.fullscreenElement) {
      setFullscreen(false);
    }
  };
  const enterFullscreen = () => {
    if (el && el.requestFullscreen) {
      el.requestFullscreen()
        .then(() => {
          setFullscreen(true);
        })
        .catch((err) => {
          Console.error('requestFullscreen error: ', err);
        });
    }
  };
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document
        .exitFullscreen()
        .then(() => {
          setFullscreen(false);
        })
        .catch((err) => {
          Console.error('exitFullscreen error: ', err);
        });
    }
  };

  const toggleFullscreen = () => {
    // 切换是否全屏
    if (!el) {
      Console.error('need dom');
      return;
    }
    if (!fullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  useEffect(() => {
    // 用户按Esc键退出全屏 或者 退出全屏都会触发这个事件
    document.addEventListener('fullscreenchange', handleFullScreenChange, false);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return [fullscreen, toggleFullscreen];
};

export default useFullscreen;
