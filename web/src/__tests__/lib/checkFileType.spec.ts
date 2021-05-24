import { checkFile } from '../../lib';

const smpTextFile: string   = 'sample.txt';
const smpImageFile: string  = 'sample.png';
const smpPDFFile: string    = 'sample.pdf';
const smpUserID: string     = '12345';
const smpComment: string    = 'comment';
const smpTitle: string      = 'title'


describe('Check post file endpoint', () => {
  it('text file endpoint test', () => {
    const txtFileEndPoint = checkFile(smpTextFile, smpUserID, smpTitle ,smpComment);
    const sucTxtFileEndPoint: string = 'http://localhost:5050/app/text?userID=12345&title=title&comment=comment'
    expect(txtFileEndPoint).toEqual(sucTxtFileEndPoint);
  });

  it('text file endpoint test', () => {
    const imgFileEndPoint = checkFile(smpImageFile, smpUserID, smpTitle ,smpComment);
    const sucImgFileEndPoint: string = 'http://localhost:5050/app/image?userID=12345&title=title&comment=comment'
    expect(imgFileEndPoint).toEqual(sucImgFileEndPoint);
  });

  it('text file endpoint test', () => {
    const pdfFileEndPoint = checkFile(smpPDFFile, smpUserID, smpTitle ,smpComment);
    const sucPDFFileEndPoint: string = 'http://localhost:5050/app/pdf?userID=12345&title=title&comment=comment'
    expect(pdfFileEndPoint).toEqual(sucPDFFileEndPoint);    
  });

})