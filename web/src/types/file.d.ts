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
  filename: string,
  file: string,
}
