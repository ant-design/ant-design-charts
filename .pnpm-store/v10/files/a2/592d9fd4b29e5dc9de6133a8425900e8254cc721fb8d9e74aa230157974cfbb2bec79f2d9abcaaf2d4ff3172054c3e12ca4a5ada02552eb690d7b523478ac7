import { forEach } from 'lodash';
import {
  IErrorMessage,
  ITool,
  MessageContent,
  MessageTypeEnum,
  TextContentBlock,
} from '../interface';

/**
 * parse stream chunk data to lui message json
 * @param rawData original data
 * @returns
 */
export const convertChunkToJson = (rawData: string) => {
  const chunks = rawData?.trim()?.split('\n\n');
  const tools: ITool[] = [];
  const messages: string[] = [];
  const errors: string[] = [];

  try {
    forEach(chunks, (chunk) => {
      const regex = /data: (.*?})\s*$/;
      const match = chunk.match(regex);
      // SSE prototype
      if (match && match[1]) {
        const parsedChunk = JSON.parse(match[1]);
        if (parsedChunk.type === 'tool') {
          tools.push(parsedChunk);
        } else if (parsedChunk.type === 'message') {
          messages.push(parsedChunk.content);
        } else if (parsedChunk.status === 'error') {
          console.warn('assistant error info:', parsedChunk.message);
          errors.push(parsedChunk.message);
        }
        // ignore other type
      } else {
        messages.push(chunk);
      }
    });
    // final message
    return { tools, message: messages.join(''), errors };
  } catch (error: any) {
    // it seems never happen
    errors.push(error.message);
    return { tools, message: messages.join(''), errors };
  }
};

export const parseStreamChunk = (
  origin: MessageContent[],
  rawData: string,
): MessageContent[] => {
  let tool = origin.find((item) => item.type === MessageTypeEnum.TOOL);
  let message = origin.find((item) => item.type === MessageTypeEnum.TEXT);
  let error = origin.find((item) => item.type === MessageTypeEnum.ERROR);
  try {
    const parsedChunk = JSON.parse(rawData);
    if (parsedChunk.type === 'tool') {
      tool = parsedChunk as ITool;
    } else if (parsedChunk.type === 'message') {
      message = {
        type: MessageTypeEnum.TEXT,
        // @ts-ignore
        text: (message?.text ?? '') + parsedChunk.content,
      } as TextContentBlock;
    } else if (parsedChunk.status === 'error') {
      console.warn('assistant error info:', parsedChunk.message);
      error = {
        type: MessageTypeEnum.ERROR,
        // @ts-ignore
        text: (error?.text ?? '') + parsedChunk.message,
      };
    }
  } catch (e: any) {
    error = { type: MessageTypeEnum.ERROR, text: e.message } as IErrorMessage;
  }
  return [tool, message, error].filter((item) => !!item) as MessageContent[];
};

export const handleStream = async (response: Response) => {
  const reader = response.body!.getReader();
  const decoder = new TextDecoder('utf-8');
  const encoder = new TextEncoder();

  const readableStream = new ReadableStream({
    async start(controller) {
      function push() {
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              controller.close();
              return;
            }
            if (value) {
              const chunk = decoder.decode(value, { stream: true });
              controller.enqueue(encoder.encode(chunk));
              push();
            }
          })
          .catch((err) => {
            console.error('读取流中的数据时发生错误', err);
            controller.error(err);
          });
      }
      push();
    },
  });
  return new Response(readableStream);
};
