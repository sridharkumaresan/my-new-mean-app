import { formatFileSize } from './../utils/file-upload.helper';

export enum FileStatus {
  Uploading = 'UPLOADING',
  Done = 'DONE',
  Failed = 'FAILED',
  Initial = 'INITIAL'
};

export interface IFile {
  name: string;
  type: string;
  size?: number | string;
  comments?: string;
  id: string;
  status: FileStatus;
  data?: any | null;
  arrayIdentifier?: string;
}

export interface IFileUploadResponse {
  id: string;
  file: IFile
}

export class FileUpload implements IFile {
  name: string;
  type: string;
  size?: number | string ;
  comments?: string;
  id: string;
  status: FileStatus = FileStatus.Initial;
  data: any = null;
  arrayIdentifier: string;
  constructor(file: any) {
    this.id = '';
    this.name = file.name,
    this.status = FileStatus.Uploading;
    this.size = formatFileSize(file.size);
    this.type = file.name.substr(file.name.lastIndexOf('.') + 1, file.name.length);
    this.data = file;
    this.arrayIdentifier = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
  }
  public setStatus(status: FileStatus): FileUpload {
    this.status = status;
    return this;
  }
}
