import React from 'react';
import Markdown from '../../Markdown';

interface IProps {
  className?: string;
  content: string;
}

const MarkdownRender = React.memo((props: IProps) => (
  <Markdown
    style={{ overflowX: 'hidden', overflowY: 'auto' }}
    text={props.content}
  />
));
export default MarkdownRender;
