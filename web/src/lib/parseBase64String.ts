/**
 * Base64のデータを画面に表示できるようにする
 * 
 * @param   { string } fileName ファイル名から拡張子を取得する
 * @returns { string }          画面に表示できるようなデータ形式にする
 */

export const parseBase64String = (fileType: string) => {
  if (!fileType) {
    throw new Error("Not exit File");
  };

  switch (fileType) {
    case 'text':
      return 'data:text/plain;base64,';
    case 'image':
      return 'data:image/png;base64,';
    case 'pdf':
      return 'data:application/pdf;base64,';
    default:
      throw new Error("Dont't support file type")
      break;
  }
}