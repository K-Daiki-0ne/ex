type FileType = {
  image: File[],
  pdf: File[],
  text: File[]
}

type File = {
  ID: string,
  CreatedAt: string,
  UpdateAt: string,
  DeletedAt: string,
  userid: string,
  filename: string,
  file: string,
}

export default FileType;