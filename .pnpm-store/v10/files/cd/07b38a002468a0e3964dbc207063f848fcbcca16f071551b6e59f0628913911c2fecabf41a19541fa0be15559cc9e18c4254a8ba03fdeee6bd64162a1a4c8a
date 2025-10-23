import React from 'react';
import { Button } from 'antd';

import GitHubIcon from '../../icons/GitHubIcon';
import useUser from '../../hooks/useUser';

const LoginCard = ({ apiDomain, webDomain, token }: { apiDomain: string; webDomain?: string; token: string; }) => {
  const { user, isLoading, actions } = useUser({ apiDomain, webDomain, fingerprint: token });

  if (isLoading) {
    return <Button disabled loading>Loading...</Button>
  }

  if (!user || user.id.startsWith('client|')) {
    return (
      <Button
        onClick={actions.doLogin}
        type="primary"
        icon={<GitHubIcon />}
      >
        Login
      </Button>
    );
  }

  return <p>你已完成登录。可以继续输入了。</p>

}

export default LoginCard;
