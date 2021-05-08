import { selector } from 'recoil';
import { fileTypeState, fileState } from '../atoms';
import { FileType } from '@src/types';

// ファイルの種類をもとにファイル情報を取得する
export const fileStateSelector = selector({
  key: "fileStateSelector",
  get: ({ get }) => {
    const filter: string = get(fileTypeState);
    const fileList: FileType = get(fileState)

    switch (filter) {
      case 'image':
        return fileList.image
      case 'pdf':
        return fileList.pdf
      case 'text':
        return fileList.text
      default:
        throw new Error(`Unknown filter ${filter}`);
        break;
    };  
  }
});