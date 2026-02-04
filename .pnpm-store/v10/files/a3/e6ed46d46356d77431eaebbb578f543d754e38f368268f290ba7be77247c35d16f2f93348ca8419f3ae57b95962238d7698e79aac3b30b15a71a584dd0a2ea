import axios from 'axios';

//  Get the public bot profile by id
export async function getUserInfo(apiDomain: string, { clientId }: { clientId?: string }) {  
  const response = await axios.get(`${apiDomain}/api/auth/userinfo?clientId=${clientId}`, { withCredentials: true });
  return response.data.data;
}


export async function requestLogout(apiDomain: string) {
  const response = await axios.get(`${apiDomain}/api/auth/logout`, { withCredentials: true });
  return response.data;
}