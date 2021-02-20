import { atom } from 'recoil';

type File = {
  image: FileType[],
  pdf: FileType[],
  text: FileType[]
}

type FileType = {
  ID: string,
  CreatedAt: string,
  UpdateAt: string,
  DeletedAt: string,
  userid: string,
  filename: string,
  file: string,
}

const fileTypeNumberState: number = 0;

export const fileState = atom<File>({
  key: "fileState",
  default: null
})

export const fileTypeState = atom({
  key: "fileTypeState",
  default: fileTypeNumberState
})
