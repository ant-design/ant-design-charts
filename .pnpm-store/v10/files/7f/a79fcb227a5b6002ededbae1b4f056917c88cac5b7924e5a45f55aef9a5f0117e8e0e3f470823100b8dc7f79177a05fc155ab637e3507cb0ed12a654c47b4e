import axios from 'axios';
import { IContentMessage } from '../interface';

/**
 * Chat api
 * @param message
 */
export async function streamChat(
  messages: IContentMessage[],
  apiDomain: string,
  apiUrl = '/api/chat/stream_qa',
  prompt = '',
  token = '',
  signal?: AbortSignal 
): Promise<Response> {
  return fetch(`${apiDomain}${apiUrl}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      messages: messages,
      prompt: prompt,
      bot_id: token,
    }),
    signal
  });
}

export async function fetcher<T>([url, token]: [string, string | undefined]) {
  const response = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data.data as T;
}

export const uploadImage = async (
  file: File,
  apiDomain: string,
): Promise<string> => {
  const formData = new FormData();
  formData.append('title', file?.name);
  formData.append('file', file);

  try {
    const response = await axios.post(`${apiDomain}/api/aws/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response?.data?.data?.url;
  } catch (error) {
    console.error('Error:', error);
    return '';
  }
};
