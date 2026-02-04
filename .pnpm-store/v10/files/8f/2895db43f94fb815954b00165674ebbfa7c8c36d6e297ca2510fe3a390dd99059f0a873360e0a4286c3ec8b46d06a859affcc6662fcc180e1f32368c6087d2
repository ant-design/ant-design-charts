import { LoadingOutlined } from '@ant-design/icons';
import {
  message as AntMessage,
  Button,
  Form,
  Image,
  Input,
  Space,
  Tooltip,
  Upload,
} from 'antd';
import React, { useCallback, useMemo, useState } from 'react';
import { DeleteIcon } from '../../icons/DeleteIcon';
import { NewMessageIcon } from '../../icons/NewMessageIcon';
import { SendMessageIcon } from '../../icons/SendMessageIcon';
import { StopMessageIcon } from '../../icons/StopMessageIcon';
import { UploadImageIcon } from '../../icons/UploadImageIcon';
import {
  ImageURLContentBlock,
  MessageContent,
  TextContentBlock,
} from '../../interface';
import { uploadImage } from '../../services/ChatController';

const InputAreaRender = (props: {
  isShowStop: boolean;
  apiDomain: string;
  disabled?: boolean;
  disabledPlaceholder?: string;
  onMessageSend: (message: string) => void | Promise<any>;
  onClear: () => void;
  onStop: () => void;
}) => {
  const { disabled, disabledPlaceholder } = props;
  const [form] = Form.useForm();
  const [message, setMessage] = useState('');
  const [fileList, setFileList] = useState<
    { url: string | ArrayBuffer | null; uid: any; isLoading: boolean }[]
  >([]);

  const uploadDisabled = useMemo(() => fileList?.length >= 4, [fileList]);

  const handleMessage = useCallback(
    (text?: string) => {
      if (
        !props ||
        !props?.onMessageSend ||
        (!text && !fileList.length) ||
        disabled
      ) {
        return;
      }
      setMessage('');
      form.resetFields();
      let content: MessageContent[] = text
        ? [
            {
              type: 'text',
              text: text,
            } as TextContentBlock,
          ]
        : [];
      if (fileList.length > 0) {
        const images = fileList.map((file) => {
          return {
            type: 'image_url',
            image_url: {
              url: file.url,
              detail: 'auto',
            },
          } as ImageURLContentBlock;
        });
        content = content.concat(images);
      }
      props.onMessageSend(JSON.stringify(content));
      setFileList([]);
    },
    [props.onMessageSend, fileList],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (disabled) {
      return;
    }
    if (
      event.key === 'Enter' &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      handleMessage(message);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) {
      return;
    }
    setMessage(event.target.value);
  };

  const handleUpload = ({ file, uid }: { file: File | null; uid?: string }) => {
    if (!file || uploadDisabled || disabled) {
      return;
    }
    if (fileList.length >= 4) {
      AntMessage.warning('上传图片不能超过 4 张');
      return;
    }

    // @ts-ignore
    const fileId = uid ?? file?.uid;

    setFileList((prevList) => [
      ...prevList,

      { url: '', uid: fileId, isLoading: true },
    ]);
    uploadImage(file, props.apiDomain).then((response: string) => {
      if (response) {
        setFileList((prevList) =>
          prevList.map((item) =>
            item.uid === fileId
              ? { url: response, isLoading: false, uid: fileId }
              : item,
          ),
        );
      } else {
        AntMessage.error('上传图片失败');
        setFileList((prevList) =>
          prevList.filter((item) => item.uid !== fileId),
        );
      }
    });
  };

  const handleRemove = (uid: string) => {
    setFileList(fileList.filter((item) => item.uid !== uid));
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    if (disabled) {
      return;
    }

    const files = event.clipboardData.files;
    if (!files.length) return;

    const file = files[0];

    if (!file.type.includes('image')) return;

    const uniqueUid = `${Date.now()}`;
    const newFile = new File([file], uniqueUid, { type: file.type });

    handleUpload({ file: newFile, uid: uniqueUid });
  };

  return (
    <Form
      form={form}
      className="relative px-[12px] py-[10px] rounded-[10px] lui-input-area bg-[#f1f1f1]"
      style={{ opacity: disabled ? 0.6 : 1 }}
    >
      {disabled && disabledPlaceholder && (
        <div
          className="absolute top-[-14px] left-0 flex items-center justify-center h-[198px]"
          style={{ width: '100%' }}
        >
          <div className="text-gray-400 w-[182px] text-center z-[999] whitespace-pre-wrap">
            {disabledPlaceholder}
          </div>
        </div>
      )}
      <Form.Item name="question">
        <Input.TextArea
          value={message}
          disabled={disabled}
          onChange={handleChange}
          onPaste={handlePaste}
          style={{
            height: 100,
            border: 'none',
            resize: 'none',
            backgroundColor: '#F1F1F1',
            color: 'rgba(0, 0, 0, 0.88)',
          }}
          onKeyDown={handleKeyDown}
        />
      </Form.Item>
      <div className="flex w-[100%]">
        <div className="flex-1">
          <Space>
            {props && props.isShowStop && (
              <Button
                disabled={disabled}
                className="bg-white hover:!bg-white shadow-md border-none rounded-[6px] leading-[0px]"
                icon={<StopMessageIcon />}
                onClick={() => {
                  if (props && props.onStop) {
                    props.onStop();
                  }
                }}
              />
            )}
            <Button
              disabled={disabled}
              className="bg-white hover:!bg-white shadow-md border-none rounded-[6px] leading-[0px]"
              onClick={() => {
                if (props && props.onClear) {
                  props.onClear();
                }
              }}
              icon={<NewMessageIcon />}
            />
            <Upload
              accept="image/*"
              disabled={disabled || uploadDisabled}
              uploadDisabled={uploadDisabled}
              showUploadList={false}
              // @ts-ignore
              customRequest={handleUpload}
            >
              <Tooltip
                title={uploadDisabled ? '上传图片不能超过 4 张' : ''}
                trigger="hover"
              >
                <Button
                  disabled={disabled}
                  className={
                    uploadDisabled
                      ? 'cursor-not-allowed bg-white hover:!bg-white shadow-md'
                      : 'bg-white hover:!bg-white shadow-md border-none rounded-[6px] leading-[0px]'
                  }
                  icon={
                    <div style={uploadDisabled ? { opacity: 0.6 } : {}}>
                      <UploadImageIcon />
                    </div>
                  }
                />
              </Tooltip>
            </Upload>
            {fileList.map((file) => (
              <div key={file.uid} className="relative h-[32px]">
                {file.isLoading ? (
                  <div className="rounded-lg shadow-md w-[32px] h-[32px] flex items-center justify-center border-none rounded-[6px] leading-[0px]">
                    <LoadingOutlined className="text-center" />
                  </div>
                ) : (
                  <Image
                    src={file.url as string}
                    preview={{
                      mask: false,
                    }}
                    width={32}
                    height={32}
                    alt="uploaded"
                    className="object-cover rounded-lg shadow-md border-none rounded-[6px] leading-[0px]"
                  />
                )}

                <div
                  className="absolute w-[16px] h-[16px] bg-gray-800 top-[-8px] right-[-8px] text-white rounded-full cursor-pointer"
                  style={{ border: '2px solid #f1f1f1' }}
                  onClick={() => handleRemove(file.uid)}
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </Space>
        </div>
        <Button
          type="primary"
          className="w-[32px] bg-gray-700 hover:!bg-gray-700 shadow-md border-none rounded-[6px] leading-[0px]"
          onClick={() => {
            handleMessage(form.getFieldValue('question'));
          }}
          htmlType="submit"
          icon={<SendMessageIcon />}
        />
      </div>
    </Form>
  );
};
export default InputAreaRender;
