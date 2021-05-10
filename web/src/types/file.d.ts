export type FileType = {
  image: File[],
  pdf: File[],
  text: File[]
}

export type File = {
  ID: string,
  CreatedAt: string,
  UpdateAt: string,
  DeletedAt: string,
  userid: string,
  FileName: string,
  file: string,
  Title: string,
  Commnet: string,
}

export type SingleFileAPIType = {
  data: FileAPIType
}

export type FileAPIType = {
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