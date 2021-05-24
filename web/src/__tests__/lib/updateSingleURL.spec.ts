import { updateSingleURL } from '../../lib';

const smpTextFile:    string  = 'text';
const smpImageFile:   string  = 'image';
const smpPDFFile:     string  = 'pdf';
const smpFileID:      string  = '12345';
const smpFileTitle:   string  = 'title';
const smpFileComment: string  = 'comment'

describe('Test Upload URL determination based on file type.', () => {
  it('Update text file endpoint test', () => {
    const txtFileUpdEndPoint:    string = updateSingleURL(smpTextFile, smpFileID, smpFileTitle, smpFileComment);
    const sucTxtFileUpdEndPoint: string = 'http://localhost:5050/app/update/text?fileID=12345&title=title&comment=comment';
    expect(txtFileUpdEndPoint).toEqual(sucTxtFileUpdEndPoint);
  });

  it('Update image file endpoint test', () => {
    const imgFileUpdEndPoint:    string = updateSingleURL(smpImageFile, smpFileID, smpFileTitle, smpFileComment);
    const sucImgFileUpdEndPoint: string = 'http://localhost:5050/app/update/image?fileID=12345&title=title&comment=comment';
    expect(imgFileUpdEndPoint).toEqual(sucImgFileUpdEndPoint);
  });

  it('Update PDF file endpoint test', () => {
    const pdfFileUpdEndPoint: string = updateSingleURL(smpPDFFile, smpFileID, smpFileTitle, smpFileComment);
    const sucPDFFileUpdEndPoint: string = 'http://localhost:5050/app/update/pdf?fileID=12345&title=title&comment=comment';
    expect(pdfFileUpdEndPoint).toEqual(sucPDFFileUpdEndPoint);    
  });

})