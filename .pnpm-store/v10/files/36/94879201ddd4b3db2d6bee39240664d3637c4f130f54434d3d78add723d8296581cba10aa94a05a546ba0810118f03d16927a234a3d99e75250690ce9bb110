import type { DraggerProps, UploadProps } from 'antd/lib/upload';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormUploadDraggerProps = ProFormFieldItemProps<DraggerProps> & {
    /**
     * @name  上传文件块的图标
     * @default UploadOutlined
     *
     * @example 改成笑脸图标  icon={<SmileOutlined/>}
     */
    icon?: React.ReactNode;
    /**
     * @name 上传文件块的标题
     * @default 单击或拖动文件到此区域进行上传
     *
     * @example  title="上传"
     * @example  title={<div>上传</div>}
     */
    title?: React.ReactNode;
    /**
     * @name 上传文件块的说明，比标题小一点，但是字数可以更多
     * @default 支持单次或批量上传
     *
     * @example  description="支持xxx文件"
     * @example  description={<div>支持xxx文件</div>}
     */
    description?: React.ReactNode;
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
    onChange?: UploadProps['onChange'];
    action?: UploadProps['action'];
    accept?: UploadProps['accept'];
};
declare const ProFormUploadDragger: React.FC<ProFormUploadDraggerProps>;
export default ProFormUploadDragger;
