import React, { useState } from 'react';

const CopyButton: React.FC<{ content: string }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('copy', error);
    }
  };

  return (
    <button
      className="absolute top-2 right-2 text-xs bg-gray-800 text-white p-1 rounded-md hover:bg-gray-700"
      onClick={handleCopy}
    >
      {copied ? 'copied' : 'copy'}
    </button>
  );
};

export default CopyButton;
