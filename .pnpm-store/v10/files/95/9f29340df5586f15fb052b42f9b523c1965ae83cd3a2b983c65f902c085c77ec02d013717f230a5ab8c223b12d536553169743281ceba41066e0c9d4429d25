import { type GetProp, type UploadProps } from 'antd';
import React from 'react';
import { type FileListProps } from './FileList';
import FileListCard from './FileList/FileListCard';
import { type PlaceholderType } from './PlaceholderUploader';
export type SemanticType = 'list' | 'item' | 'placeholder' | 'upload';
export type Attachment = GetProp<UploadProps, 'fileList'>[number] & {
    description?: React.ReactNode;
};
export interface AttachmentsProps extends Omit<UploadProps, 'fileList'> {
    prefixCls?: string;
    rootClassName?: string;
    rootStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    className?: string;
    classNames?: Partial<Record<SemanticType, string>>;
    styles?: Partial<Record<SemanticType, React.CSSProperties>>;
    children?: React.ReactElement;
    disabled?: boolean;
    placeholder?: PlaceholderType | ((type: 'inline' | 'drop') => PlaceholderType);
    getDropContainer?: null | (() => HTMLElement | null | undefined);
    items?: Attachment[];
    overflow?: FileListProps['overflow'];
    imageProps?: FileListProps['imageProps'];
}
export interface AttachmentsRef {
    nativeElement: HTMLDivElement | null;
    upload: (file: File) => void;
}
declare const ForwardAttachments: React.ForwardRefExoticComponent<AttachmentsProps & React.RefAttributes<AttachmentsRef>> & {
    FileCard: typeof FileListCard;
};
export default ForwardAttachments;
