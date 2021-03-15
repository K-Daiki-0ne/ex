import { atom } from 'recoil';
import { FileType } from '@src/types';

const fileTypeNumberState: string = "text";

export const fileState = atom<FileType[]>({
  key: "fileState",
  default: null
})

export const fileTypeState = atom<string>({
  key: "fileTypeState",
  default: fileTypeNumberState
})
