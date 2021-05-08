/**
 *  単一のファイルをアップデートするAPIのエンドポイントを判定する。
 * 
 *  @param { stirng } fileType  ファイルの種類
 *  @param { string } fileID    ファイルのID
 *  @param { string } title     アップロードしたファイルのタイトル
 *  @param { string } comment   アップロードしたファイルのコメント
 */
export const updateSingleURL = (
  fileType: string, 
  fileID: string | string[], 
  title: string, 
  commnet: string
) => {
  if(!fileType) {
    throw new Error("Not exit File Type")
  }

  switch (fileType) {
    case "text":
      return `http://localhost:5050/app/update/text?fileID=${fileID}&title=${title}&comment=${commnet}`
    case "image":
      return `http://localhost:5050/app/update/image?fileID=${fileID}&title=${title}&comment=${commnet}`
    case "pdf":
      return `http://localhost:5050/app/update/pdf?fileID=${fileID}&title=${title}&comment=${commnet}`
    default:
      break;
  }
}