/**
 * @description                 Base64のデータを画面に表示できるようにする
 * @param   { string } fileName ファイル名から拡張子を取得する
 * @returns { string }          画面に表示できるようなデータ形式にする
 */

export const parseBase64String = (fileName: string) => {
  if (!fileName) {
    throw new Error("Not exit File");
  };
  let fileType: string[] = fileName.split(".");
  const fileLen: number = fileType.length;
  const file: string = fileType[fileLen - 1];

  switch (file) {
    case 'text':
      return 'data:text/plain;base64,';
    case 'png':
      return 'data:image/png;base64,';
    case 'jpg': 
      return 'data:image/jpg;base64,';
    case 'pdf':
      return ''
    default:
      throw new Error("Dont't support file type")
      break;
  }
}