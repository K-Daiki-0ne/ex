
/**
 *  @description ファイルの拡張子を判定しAPIリクエストのエンドポイントを判定する関数。
 *  @param { string } fileName - ファイル名を取得します。
 *  @param { string } userID   - ユーザーIDを取得します。
 *  @returns { string } APIリクエストのエンドポイントを返す
 */
export const checkFile = async (fileName: string, userID: string): Promise<string> => {
  if (!fileName) {
    throw new Error("Not exit File");
  };
  let fileType: string[] = fileName.split(".");
  const fileLen: number = fileType.length;
  const file: string = fileType[fileLen - 1];

  console.log(file)

  try {
    switch (file) {
      case "txt":
        return `http://localhost:5050/app/text?userID=${userID}`;
        break;
      case "png":
        return `http://localhost:5050/app/image?userID=${userID}`;
        break;
      case "jpg":
        return `http://localhost:5050/app/image?userID=${userID}`;
        break;
      case "pdf":
        return `http://localhost:5050/app/pdf?userID=${userID}`;
        break;
      default:
        throw new Error("Dont't support file");
        break;
    }
  } catch (err) {
    throw new Error("Sorry failed API request");
    console.error(err);    
  }
}