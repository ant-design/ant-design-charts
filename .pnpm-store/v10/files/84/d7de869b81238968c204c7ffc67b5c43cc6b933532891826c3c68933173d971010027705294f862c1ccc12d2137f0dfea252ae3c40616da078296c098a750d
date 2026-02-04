'use client';

import { useEffect } from 'react';
import useSWR from 'swr';
import { getUserInfo, requestLogout } from '../services/UserController';
import { popupCenter } from '../utils/popcenter';

function useUser({
  apiDomain,
  webDomain = 'https://petercat.ai',
  fingerprint,
}: {
  apiDomain: string;
  fingerprint: string;
  webDomain?: string;
}) {
  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR(
    ['user.info'],
    async () => getUserInfo(apiDomain, { clientId: fingerprint }),
    { suspense: false },
  );

  const doLogin = () => {
    console.log('call do Login', webDomain);
    popupCenter({
      url: `${webDomain}/user/login`,
      title: 'Login',
      w: 600,
      h: 400,
    });
  };

  const handleLoginPostMessage = (event: MessageEvent) => {
    const { origin, data } = event;
    const { status } = data;

    if (status === 'success' && (origin === webDomain || origin === location.origin)) {
      mutate();
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('message', handleLoginPostMessage);
    return () => {
      window.removeEventListener('message', handleLoginPostMessage);
    };
  }, []);

  const doLogout = async () => {
    await requestLogout(apiDomain);
    mutate();
  };

  return {
    user,
    isLoading,
    actions: {
      doLogin,
      doLogout,
    },
  };
}

export default useUser;
