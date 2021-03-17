import { selector } from 'recoil';
import { fileTypeState, fileState } from '../atoms';
import { FileType } from '@src/types';


export const fileStateSelector = selector({
  key: "fileStateSelector",
  get: ({ get }) => {
    const fileType: string = get(fileTypeState);
    const fileList: FileType = get(fileState)
    
    switch (fileType) {
      case 'text':
        return fileList.text
        break;
      case 'image':
        return fileList.image
        break;
      case 'pdf':
        return fileList.pdf
        break;
      default:
        throw new Error(`Unknown filter ${fileType}`);
        break;
    };
  }
});