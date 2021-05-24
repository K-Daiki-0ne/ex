import { getSingleURL } from '../../lib';

const smpTextFile: string   = 'text';
const smpImageFile: string  = 'image';
const smpPDFFile: string    = 'pdf';
const smpFileID: string     = '12345';


describe('Test URL determination based on file type', () => {
  it('Get single text file endpoint test', () => {
    const txtFileEndPoint: string    = getSingleURL(smpFileID, smpTextFile);
    const sucTxtFileEndPoint: string = 'http://localhost:5050/app/single/text?fileID=12345';
    expect(txtFileEndPoint).toEqual(sucTxtFileEndPoint);
  });

  it('text file endpoint test', () => {
    const imgFileEndPoint: string    = getSingleURL(smpFileID, smpImageFile);
    const sucImgFileEndPoint: string = 'http://localhost:5050/app/single/image?fileID=12345';
    expect(imgFileEndPoint).toEqual(sucImgFileEndPoint);
  });

  it('text file endpoint test', () => {
    const pdfFileEndPoint: string    = getSingleURL(smpFileID, smpPDFFile);
    const sucPDFFileEndPoint: string = 'http://localhost:5050/app/single/pdf?fileID=12345';
    expect(pdfFileEndPoint).toEqual(sucPDFFileEndPoint);    
  });

})