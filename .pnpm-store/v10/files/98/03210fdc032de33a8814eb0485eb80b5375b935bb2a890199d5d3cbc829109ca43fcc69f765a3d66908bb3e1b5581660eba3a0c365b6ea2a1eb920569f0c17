import React from 'react';
import GitInsightCard from './GitInsightCard';
import LoginCard from './LoginCard';

export const UITemplateRender = ({ templateId, apiDomain, webDomain, token, cardData }: { templateId: string, apiDomain: string; webDomain?: string; token: string; cardData: any }) => {
  if (templateId === 'GIT_INSIGHT') {
    return (
      <GitInsightCard
        forkCount={cardData?.forks}
        starCount={cardData?.stars}
        commitCount={cardData?.commits}
      />
    );
  }

  if (templateId === 'LOGIN_INVITE') {
    return (
      <LoginCard
        apiDomain={apiDomain}
        webDomain={webDomain}
        token={token}
      />
    );
  }
  return null;
};
