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

const fileTypeNumberState: string = "text";

export const fileState = atom<File>({
  key: "fileState",
  default: null
})

export const fileTypeState = atom<string>({
  key: "fileTypeState",
  default: fileTypeNumberState
})
