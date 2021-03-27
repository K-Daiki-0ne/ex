/**
 *  @description ファイルの拡張子を判定しAPIリクエストのエンドポイントを判定する関数。
 *  @param { string } fileName  ファイルの名前
 *  @param { stirng } userID    ユーザーID
 *  @param { stirng } title     アップロードしたファイルのタイトル
 *  @param { string } comment   アップロードしたファイルのコメント
 */
export const checkFile = async (fileName: string, userID: string, title: string, comment: string): Promise<string> => {
  if (!fileName) {
    throw new Error("Not exit File");
  };
  let fileType: string[] = fileName.split(".");
  const fileLen: number = fileType.length;
  const file: string = fileType[fileLen - 1];

  try {
    switch (file) {
      case "txt":
        return `http://localhost:5050/app/text?userID=${userID}?title=${title}?comment=${comment}`;
        break;
      case "png":
        return `http://localhost:5050/app/image?userID=${userID}?title=${title}?comment=${comment}`;
        break;
      case "jpg":
        return `http://localhost:5050/app/image?userID=${userID}?title=${title}?comment=${comment}`;
        break;
      case "pdf":
        return `http://localhost:5050/app/pdf?userID=${userID}?title=${title}?comment=${comment}`;
        break;
      default:
        throw new Error("Dont't support file");
        break;
    }
  } catch (err) {
    throw new Error("Sorry failed API request");
  }
}