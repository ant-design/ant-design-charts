import { Bubble, useXAgent, useXChat, XStream } from '@ant-design/x';
import { MessageInfo } from '@ant-design/x/es/use-x-chat';
import { Flex, GetProp, theme } from 'antd';
import { isEmpty, isEqual } from 'lodash';
import React, { memo, useEffect, useRef, useState, type FC } from 'react';
import useSWR from 'swr';
import SignatureIcon from '../icons/SignatureIcon';
import {
  IContentMessage,
  ImageURLContentBlock,
  ITool,
  MessageContent,
  MessageTypeEnum,
  Role,
} from '../interface';
import { BOT_INFO } from '../mock';
import { fetcher, streamChat } from '../services/ChatController';
import StarterList from '../StarterList';
import ThoughtChain from '../ThoughtChain';
import { parseStreamChunk } from '../utils';
import InputArea from './components/InputAreaRender';
import LoadingStart from './components/LoadingStart';
import MarkdownRender from './components/MarkdownRender';
import MySpinner from './components/MySpinner';
import UserContent from './components/UserContent';
import { UITemplateRender } from './template';

const CANCEL_REASON = 'petercat user cancel';
export interface MetaData {
  /**
   * 角色头像
   * @description 可选参数，如果不传则使用默认头像
   */
  avatar?: string;
  /**
   *  背景色
   * @description 可选参数，如果不传则使用默认背景色
   */
  backgroundColor?: string;
  /**
   * 名称
   * @description 可选参数，如果不传则使用默认名称
   */
  title?: string;
  /**
   * 自定义类名
   * @description 可选参数，如果不传则使用默认类名
   */
  className?: string;
}

export interface BotInfo {
  assistantMeta?: MetaData;
  helloMessage?: string;
  starters?: string[];
}

export interface ChatProps extends BotInfo {
  apiDomain?: string;
  apiUrl?: string;
  drawerWidth?: number;
  prompt?: string;
  token?: string;
  editBotId?: string;
  style?: React.CSSProperties;
  hideLogo?: boolean;
  disabled?: boolean;
  disabledPlaceholder?: string;
  getToolsResult?: (response: any) => void;
}

const Avatar = (props: { backgroundColor?: string; avatar: string }) => {
  const { backgroundColor, avatar } = props;
  return (
    <div
      className="ant-avatar ant-avatar-circle ant-avatar-image w-[40px] h-[40px] rounded-full overflow-hidden flex-shrink-0"
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `url(${avatar})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const Chat: FC<ChatProps> = memo(
  ({
    helloMessage = '让我们开始对话吧~',
    apiDomain = 'http://127.0.0.1:8000',
    apiUrl,
    drawerWidth = 500,
    assistantMeta,
    starters,
    prompt,
    token,
    style,
    disabled = false,
    hideLogo = false,
    disabledPlaceholder,
    editBotId,
    getToolsResult,
  }) => {
    const { token: designToken } = theme.useToken();
    const tokenRef = useRef<string | undefined>(token);
    const requestParamsRef = useRef({ apiDomain, apiUrl, prompt, editBotId });
    useEffect(() => {
      requestParamsRef.current = {
        apiDomain,
        apiUrl,
        prompt,
        editBotId,
      };
    }, [tokenRef?.current, apiDomain, apiUrl, prompt, editBotId]);

    useEffect(() => {
      tokenRef.current = token;
    }, [token]);
    const messageMinWidth = drawerWidth
      ? `calc(${drawerWidth}px - 90px)`
      : '400px';

    const [currentBotInfo, setCurrentBotInfo] = useState<BotInfo>({
      assistantMeta,
      helloMessage,
      starters,
    });
    const currentBotInfoRef = useRef<BotInfo>({
      assistantMeta,
      helloMessage,
      starters,
    });

    const { data: botDetail, isValidating } = useSWR(
      tokenRef?.current
        ? [
            `${apiDomain}/api/bot/detail?id=${tokenRef?.current}`,
            tokenRef?.current,
          ]
        : null,
      fetcher<BotInfo>,
    );

    const [abortController, setAbortController] = useState<AbortController>();

    const resetController = () => {
      if (abortController) {
        // 在发起请求前重置控制器
        abortController.abort();
      }
      const newAbortController = new AbortController();
      setAbortController(newAbortController);
      return newAbortController;
    };
    // ============================ Agent =============================

    const [agent] = useXAgent<IContentMessage>({
      baseURL: apiDomain,
      request: async ({ messages = [] }, { onUpdate, onSuccess }) => {
        onUpdate({
          role: Role.loading,
          content: [],
        });
        const newMessages = messages
          .filter(
            (item) => item.role !== Role.tool && item.role !== Role.knowledge,
          )
          .map((item) => {
            return {
              ...item,
              content: item.content.filter(
                (item) =>
                  item.type !== MessageTypeEnum.ERROR &&
                  item.type !== MessageTypeEnum.TOOL,
              ),
            };
          });
        let res: IContentMessage = { role: Role.assistant, content: [] };
        try {
          const { apiDomain, prompt, apiUrl, editBotId } =
            requestParamsRef.current;
          const response = await streamChat(
            newMessages,
            apiDomain,
            apiUrl,
            prompt,
            editBotId || tokenRef?.current,
            resetController().signal,
          );
          if (!response.ok) {
            throw new Error(await response.json());
          }
          if (response.body instanceof ReadableStream) {
            for await (const chunk of XStream({
              readableStream: response.body!,
            })) {
              const resContent = parseStreamChunk(res.content, chunk.data);
              res = {
                role: Role.assistant,
                content: resContent,
              };
              // @ts-ignore
              const toolContent: ITool[] = resContent.filter(
                (i: MessageContent) => i.type === 'tool',
              );
              if (
                toolContent.length > 0 &&
                toolContent[0]?.extra &&
                getToolsResult !== undefined
              ) {
                getToolsResult(toolContent[0].extra);
              }
              onUpdate(res);
            }
          } else {
            res = {
              role: Role.assistant,
              content: [
                {
                  type: MessageTypeEnum.TEXT,
                  text: JSON.stringify(await response.json()),
                },
              ],
            };
          }
        } catch (e: any) {
          if (e.name === 'AbortError' || e === CANCEL_REASON) {
            // ignore abort error
          } else {
            res = {
              role: Role.assistant,
              content: [{ type: MessageTypeEnum.ERROR, text: e.message }],
            };
          }
        }

        onSuccess(res);
      },
    });

    // ============================= Chat =============================
    const { setMessages, messages, onRequest } = useXChat<
      IContentMessage,
      IContentMessage
    >({
      agent,
    });

    const resetChat = () => {
      resetController();
      const initMessages: MessageInfo<IContentMessage>[] = [
        {
          id: 'init',
          status: 'success',
          message: {
            role: Role.init,
            content: [
              {
                type: MessageTypeEnum.TEXT,
                text: helloMessage || BOT_INFO.helloMessage,
              },
            ],
          },
        },
      ];
      if (currentBotInfo?.starters?.length) {
        initMessages.push({
          id: 'suggestion',
          status: 'success' as const,
          message: {
            role: Role.starter,
            content: currentBotInfo.starters.map((starterTxt) => {
              return {
                type: MessageTypeEnum.TEXT,
                text: starterTxt,
              };
            }),
          },
        });
      }
      // resetController may touch abort error and set Error Message
      setTimeout(() => {
        setMessages(initMessages);
      }, 0);
    };

    // ============================ Event ============================
    const handleSendMessage = (message: IContentMessage) => {
      setMessages((prev) =>
        prev.filter((info) => info.id !== 'init' && info.id !== 'suggestion'),
      );
      onRequest(message);
    };

    useEffect(() => {
      return () => {
        resetController();
      };
    }, []);

    useEffect(() => {
      if (isEqual(currentBotInfo, currentBotInfoRef.current)) {
        return;
      }
      if (currentBotInfo?.assistantMeta?.title) {
        document.title = currentBotInfo.assistantMeta.title;
      }
      resetChat();
      currentBotInfoRef.current = currentBotInfo;
    }, [currentBotInfo]);

    useEffect(() => {
      setCurrentBotInfo({
        assistantMeta: {
          avatar: assistantMeta?.avatar,
          title: assistantMeta?.title,
          backgroundColor: assistantMeta?.backgroundColor,
        },
        helloMessage: helloMessage,
        starters: starters,
      });
    }, [assistantMeta, helloMessage, starters]);

    useEffect(() => {
      if (isEmpty(botDetail)) {
        return;
      }
      try {
        // @ts-ignore
        const info = botDetail?.[0] as any;
        setCurrentBotInfo({
          assistantMeta: {
            avatar: info.avatar,
            title: info.name,
          },
          helloMessage: info.hello_message,
          starters: info.starters || [],
        });
      } catch (e) {
        console.error('botDetail effect', e);
      }
    }, [botDetail]);

    // ============================ Roles =============================
    const roles: GetProp<typeof Bubble.List, 'roles'> = React.useMemo(() => {
      const {
        title,
        avatar = BOT_INFO.avatar,
        backgroundColor,
      } = currentBotInfo?.assistantMeta ?? {};
      return {
        [Role.init]: {
          classNames: {
            avatar: 'petercat-avatar',
            header: 'petercat-header',
            content: 'petercat-content-start',
          },
          placement: 'start',
          avatar: <Avatar backgroundColor={backgroundColor} avatar={avatar} />,
          header: <>{title}</>,
          messageRender: (message) => {
            try {
              // @ts-ignore
              const hello = message.content[0].text;
              return <MarkdownRender content={hello} />;
            } catch (e) {
              console.error('init items', e);
            }
          },
        },
        [Role.starter]: {
          placement: 'start',
          variant: 'borderless',
          messageRender: (items) => {
            try {
              // @ts-ignore
              const botStarters = items.content.map((item) => item.text);
              return (
                <StarterList
                  className="ml-[52px]"
                  starters={botStarters}
                  onClick={(item) => {
                    handleSendMessage({
                      role: Role.user,
                      content: [
                        {
                          type: MessageTypeEnum.TEXT,
                          text: item.trim(),
                        },
                      ],
                    });
                  }}
                ></StarterList>
              );
            } catch (e) {
              console.error('starter items', e);
            }
          },
        },
        [Role.assistant]: {
          classNames: {
            header: 'petercat-header',
            avatar: 'petercat-avatar',
          },
          placement: 'start',
          avatar: <Avatar backgroundColor={backgroundColor} avatar={avatar} />,
          variant: 'borderless',
          header: <>{title}</>,
          messageRender: (message: any) => {
            try {
              const toolContent = message.content.find(
                (i: MessageContent) => i.type === 'tool',
              );
              const extra = toolContent?.extra;
              const textContent = message.content.find(
                (i: MessageContent) => i.type === MessageTypeEnum.TEXT,
              );
              const errorContent = message.content.find(
                (i: MessageContent) => i.type === MessageTypeEnum.ERROR,
              );
              return (
                <>
                  {extra && (
                    <div className="mb-2">
                      <ThoughtChain
                        content={extra}
                        status={extra.status}
                        source={extra.source}
                      />
                    </div>
                  )}
                  {textContent && (
                    <div className="petercat-content-start">
                      <MarkdownRender content={textContent.text} />
                    </div>
                  )}
                  {errorContent && (
                    <div className="petercat-content-start text-red-700">
                      ops... {errorContent.text}
                    </div>
                  )}
                  {extra?.template_id && message.status === 'success' && (
                    <div
                      style={{ maxWidth: messageMinWidth }}
                      className="transition-all duration-300 ease-in-out"
                    >
                      {UITemplateRender({
                        templateId: extra.template_id,
                        cardData: extra.data,
                        apiDomain: apiDomain,
                        token: tokenRef?.current ?? '',
                      })}
                    </div>
                  )}
                </>
              );
            } catch (e) {
              console.error('items', message);
            }
          },
          typing: {
            step: 5,
          },
        },
        [Role.user]: {
          classNames: {
            avatar: 'petercat-avatar',
            header: 'petercat-header',
            content: 'petercat-content-end',
          },
          placement: 'end',
          messageRender: (message) => {
            try {
              // @ts-ignore
              const { images, text } = message.content.reduce(
                (acc: any, item: any) => {
                  if (item.type === 'image_url') acc.images.push(item);
                  else if (item.type === 'text') acc.text += item.text;
                  return acc;
                },
                { images: [] as ImageURLContentBlock[], text: '' },
              );
              return <UserContent images={images} text={text} />;
            } catch (e) {
              console.error('user items', e);
              return null;
            }
          },
        },
        [Role.loading]: {
          classNames: {
            avatar: 'petercat-avatar',
            header: 'petercat-header',
          },
          placement: 'start',
          avatar: {
            src: avatar,
          },
          header: <div>{title}</div>,
          variant: 'borderless',
          messageRender: () => {
            return <LoadingStart loop={true}></LoadingStart>;
          },
        },
      };
    }, [currentBotInfo]);

    // ============================ Render ============================
    return (
      <div
        className="petercat-assistant bg-[#FCFCFC] pt-2"
        style={{
          ...style,
          minWidth: drawerWidth,
          height: '100%',
        }}
      >
        <MySpinner
          loading={!botDetail && isValidating}
          spinner={<LoadingStart loop={true} />}
        >
          <div className="h-full w-full flex flex-col relative">
            {!hideLogo && <SignatureIcon className="mx-auto my-2 flex-none" />}
            <Flex vertical className="h-full">
              <Bubble.List
                style={{ flex: '1 1 0', padding: designToken.padding }}
                roles={roles}
                items={
                  disabled
                    ? []
                    : messages.map(({ status, message, id }, index) => {
                        const role = message.role;
                        const key = id || `fixed_${index}`;
                        return {
                          key,
                          role,
                          content: { ...message, status, id },
                          typing: false,
                        };
                      })
                }
              />
              <div style={{ padding: designToken.paddingSM }}>
                <InputArea
                  apiDomain={apiDomain}
                  disabled={disabled}
                  disabledPlaceholder={disabledPlaceholder}
                  isShowStop={agent.isRequesting()}
                  onMessageSend={(contentStr) => {
                    if (agent.isRequesting()) {
                      return;
                    }
                    const message = {
                      role: Role.user,
                      content: JSON.parse(contentStr),
                    };
                    handleSendMessage(message);
                  }}
                  onClear={() => {
                    resetChat();
                  }}
                  onStop={() => {
                    abortController?.abort(CANCEL_REASON);
                  }}
                />
              </div>
            </Flex>
          </div>
        </MySpinner>
      </div>
    );
  },
);

export default Chat;
