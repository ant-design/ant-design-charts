import type { ButtonProps, UploadProps, ImageProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
type PickUploadProps = Pick<UploadProps<any>, 'listType' | 'action' | 'accept' | 'fileList' | 'onChange'>;
export type ProFormUploadButtonProps = ProFormFieldItemProps<UploadProps<any>, HTMLElement> & {
    /**
     * @name  上传文件的图标
     * @default UploadOutlined
     *
     * @example 改成笑脸图标  icon={<SmileOutlined/>}
     */
    icon?: React.ReactNode;
    /**
     * @name 按钮文字
     * @default 单击上传
     *
     * @example  title="上传"
     * @example  title={<div>上传</div>}
     */
    title?: React.ReactNode;
    /**
     * @name 最大的文件数量，到达数量之后上传按钮会失效
     *
     * @example max=2
     */
    max?: number;
    /**
     * @name 上传组件的 fileList，为了配合form，改成了这个名字
     * @default []
     *
     * example:value={ [{uid: '-1', name: 'xxx.png', status: 'done', url: 'http://www.baidu.com/xxx.png'}] }
     */
    value?: UploadProps['fileList'];
    /**
     * @name 上传按钮的配置
     *
     * @example 按钮修改为主色 buttonProps={{ type:"primary" }}
     */
    buttonProps?: ButtonProps;
    /**
     * @name 是否禁用按钮
     * @example  disabled={true}
     */
    disabled?: ButtonProps['disabled'];
    /**
      * @name 图片预览组件的配置
      * @example imageProps={{ preview: { toolbarRender: () => null } }}
      */
    imageProps?: Omit<ImageProps, "src">;
} & PickUploadProps;
declare const ProFormUploadButton: React.ForwardRefRenderFunction<any, ProFormUploadButtonProps>;
export default ProFormUploadButton;
