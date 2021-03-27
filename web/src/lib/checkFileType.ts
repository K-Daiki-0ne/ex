
type UplaodFileArgType = {
  props: {
    fileName: string,
    userID: string,
    title: string,
    comment: string
  }
}

/**
 *  @description ファイルの拡張子を判定しAPIリクエストのエンドポイントを判定する関数。
 *  @param { UplaodFileArgType } ファイルの名前 ユーザーID　タイトル　コメントが渡されます。
 */
export const checkFile = async ({ props }: UplaodFileArgType): Promise<string> => {
  if (!props.fileName) {
    throw new Error("Not exit File");
  };
  let fileType: string[] = props.fileName.split(".");
  const fileLen: number = fileType.length;
  const file: string = fileType[fileLen - 1];

  try {
    switch (file) {
      case "txt":
        return `http://localhost:5050/app/text?userID=${props.userID}?title=${props.title}?comment=${props.title}`;
        break;
      case "png":
        return `http://localhost:5050/app/image?userID=${props.userID}?title=${props.title}?comment=${props.title}`;
        break;
      case "jpg":
        return `http://localhost:5050/app/image?userID=${props.userID}?title=${props.title}?comment=${props.title}`;
        break;
      case "pdf":
        return `http://localhost:5050/app/pdf?userID=${props.userID}?title=${props.title}?comment=${props.title}`;
        break;
      default:
        throw new Error("Dont't support file");
        break;
    }
  } catch (err) {
    throw new Error("Sorry failed API request");
  }
}