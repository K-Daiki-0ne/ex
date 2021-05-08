/**
 *  単一のファイルを取得するAPIのエンドポイントを判定する。
 * 
 *  @param { string } fileID    ファイルのID
 *  @param { stirng } fileType  ファイルの種類
 */
export const getSingleURL = (fileID: string | string[], fileType: string): string => {
  switch (fileType) {
    case 'text':
      return `http://localhost:5050/app/single/text?fileID=${fileID}`
      break;
    case 'image':
      return `http://localhost:5050/app/single/image?fileID=${fileID}`
      break;
    case 'pdf':
      return `http://localhost:5050/app/single/pdf?fileID=${fileID}`
      break;
    default:
      break;
  }
}