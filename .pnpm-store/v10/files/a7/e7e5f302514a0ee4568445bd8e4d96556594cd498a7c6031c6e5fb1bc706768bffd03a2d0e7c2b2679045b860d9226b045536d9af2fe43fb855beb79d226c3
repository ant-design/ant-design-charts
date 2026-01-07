import { CloseCircleFilled } from '@ant-design/icons';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import Chat, { ChatProps } from '../Chat';
import BubbleIcon from '../icons/BubbleIcon';

export interface AssistantProps extends ChatProps {
  showBubble?: boolean;
  isVisible?: boolean;
  onClose?: () => void;
  bottom?: number;
}

const Assistant = (props: AssistantProps) => {
  const {
    showBubble = true,
    isVisible = false,
    onClose,
    drawerWidth = 500,
    bottom = 120,
  } = props;
  const [chatVisible, setChatVisible] = useState(isVisible);
  const [position, setPosition] = useState({ transformY: 0 });

  const toggleDrawer = () => {
    setChatVisible(!chatVisible);
    onClose?.();
  };

  const startDrag = (e: { clientY: number; preventDefault: () => void }) => {
    const startY = e.clientY;
    const initTransformY = position.transformY;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dy = moveEvent.clientY - startY;
      setPosition({ transformY: initTransformY + dy });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    e.preventDefault();
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
  }, []);

  useEffect(() => {
    setChatVisible(isVisible);
  }, [isVisible]);

  const cls = classnames(
    'fixed top-0 h-full ease-in flex flex-row z-[999] overflow-hidden text-left text-black rounded-l-[20px] shadow-[0px_8px_32px_-12px_rgba(0,0,0,0.1)] border-[0.5px] solid  border-[#e4e4e7]',
    {
      [`right-[-500px]`]: !chatVisible,
      [`right-0`]: chatVisible,
      [`transition-[right]`]: chatVisible,
    },
  );

  return (
    <div className="petercat-assistant fixed" style={{ zIndex: 9999 }}>
      <div
        className={cls}
        style={{
          width: drawerWidth,
          height: '100vh',
          zIndex: 9999,
          borderBottomLeftRadius: '20px!important',
          boxShadow: '0px 8px 32px -12px rgba(0, 0, 0, 0.2)',
        }}
      >
        {chatVisible && (
          <>
            <Chat
              style={{ backgroundColor: '#FCFCFC' }}
              {...props}
              drawerWidth={drawerWidth}
            />
            <div
              className="absolute top-0 right-0 m-1 flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-300 cursor-pointer transition-all duration-300"
              onClick={toggleDrawer}
            >
              <CloseCircleFilled className="w-4 h-4 text-black" />
            </div>
          </>
        )}
      </div>

      {showBubble && !chatVisible && (
        <div
          className="fixed right-0 flex items-center justify-center rounded-full shadow-[0_8px_8px_-5px_#00000014,_0_16px_24px_-5px_#00000029] bg-white cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg"
          onMouseDown={startDrag}
          onClick={toggleDrawer}
          style={{
            transform: `translateY(${position.transformY}px)`,
            marginRight: '24px',
            bottom: `${bottom}px`, // Use bottom as the initial position
            zIndex: 9999,
          }}
        >
          <div
            id="petercat-lui-tip"
            className="animate-shake absolute top-[-9px] left-[-47px] px-[8px] py-[4px] w-[52px] h-[22px] bg-[#3F3F46] shadow-xl rounded-full rounded-br-none text-[10px] text-white"
            style={{ boxSizing: 'border-box' }}
          >
            Ask me
          </div>
          <BubbleIcon />
        </div>
      )}
    </div>
  );
};

export default Assistant;
