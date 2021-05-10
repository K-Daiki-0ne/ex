import { atom } from 'recoil';
import { FileType } from '@src/types';

const fileTypeNumberState: string = 'text';

const defaultFileState: FileType = {
  image: [],
  pdf: [],
  text: []
}

// ファイル情報を格納する
export const fileState = atom<FileType>({
  key: "fileState",
  default: defaultFileState
})

// ファイルの種類を格納する
export const fileTypeState = atom<string>({
  key: "fileTypeState",
  default: fileTypeNumberState
})