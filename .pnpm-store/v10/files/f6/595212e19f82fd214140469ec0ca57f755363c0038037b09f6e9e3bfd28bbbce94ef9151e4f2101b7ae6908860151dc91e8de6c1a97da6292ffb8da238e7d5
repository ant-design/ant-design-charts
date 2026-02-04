import { Image } from 'antd';
import React, { type FC } from 'react';
import { ImageURLContentBlock } from '../../interface';
import MarkdownRender from './MarkdownRender';

interface IProps {
  images: ImageURLContentBlock[];
  text: string;
}

const UserContent: FC<IProps> = ({ images, text }) => {
  return (
    <div className="ant-pro-chat-list-item-message-content">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image_url?.url}
          alt="img"
          style={{
            maxWidth: '300px',
            maxHeight: '400px',
            borderRadius: '10px',
          }}
        />
      ))}
      {text && <MarkdownRender content={text} />}
    </div>
  );
};

export default UserContent;
