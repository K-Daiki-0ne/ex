import { atom } from 'recoil';
import { FileType } from '@src/types';

const fileTypeNumberState: string = 'text';

const defaultFileState: FileType = {
  image: [],
  pdf: [],
  text: []
}

export const fileState = atom<FileType>({
  key: "fileState",
  default: defaultFileState
})

export const fileTypeState = atom<string>({
  key: "fileTypeState",
  default: fileTypeNumberState
})