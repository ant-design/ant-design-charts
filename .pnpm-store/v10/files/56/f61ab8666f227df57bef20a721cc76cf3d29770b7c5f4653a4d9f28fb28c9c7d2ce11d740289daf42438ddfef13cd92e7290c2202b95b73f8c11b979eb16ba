import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import CopyButton from './CopyButton';

const CodeBlock: React.FC<{
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}> = ({ inline, className, children }) => {
  const language = className?.replace('language-', '') || ''; // 提取语言信息
  const codeContent = String(children).trim();

  if (inline) {
    return <code className="bg-gray-200  px-1 rounded">{children}</code>;
  }

  return (
    <div className="relative group">
      <SyntaxHighlighter language={language} style={vs} className="rounded-md">
        {codeContent}
      </SyntaxHighlighter>
      <CopyButton content={codeContent} />
    </div>
  );
};

export default CodeBlock;
