import { atom } from 'recoil';
import { FileType } from '@src/types';

type SingleFileAPIType = {
  ID: number,
  CreatedAt: string,
  UpdatedAt: string,
  DeletedAt: string,
  userid: string,
  FileName: string,
  file: string,
  Title: string,
  Comment: string,
}

const fileTypeNumberState: string = 'text';
const defaultFileState: FileType = {
  image: [],
  pdf: [],
  text: []
}

const defaultSingleFileState = {
  'ID': 0,
  'CreatedAt': '',
  'UpdatedAt': '',
  'DeletedAt': '',
  'userid': '',
  'FileName': '',
  'file': '',
  'Title': '',
  'Comment': '',
}
export const fileState = atom<FileType>({
  key: "fileState",
  default: defaultFileState
})

export const fileTypeState = atom<string>({
  key: "fileTypeState",
  default: fileTypeNumberState
})

export const singleFileState = atom<SingleFileAPIType>({
  key: "singleFileState",
  default: defaultSingleFileState
})