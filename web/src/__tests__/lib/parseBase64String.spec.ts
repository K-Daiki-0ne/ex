import { parseBase64String } from '../../lib';

const smpTextFile: string   = 'text';
const smpImageFile: string  = 'image';
const smpPDFFile: string    = 'pdf';


describe('Test Base64 determination based on file type', () => {
  it('Get single text file endpoint test', () => {
    const txtFileBase64: string = parseBase64String(smpTextFile);
    const sucTxtFilebase64: string = 'data:text/plain;base64,';
    expect(txtFileBase64).toEqual(sucTxtFilebase64);
  });

  it('text file endpoint test', () => {
    const imgFileBase64: string = parseBase64String(smpImageFile);
    const sucImgFileBase64: string = 'data:image/png;base64,';
    expect(imgFileBase64).toEqual(sucImgFileBase64);
  });

  it('text file endpoint test', () => {
    const pdfFileBase64: string = parseBase64String(smpPDFFile);
    const sucPDFFileBase64: string = 'data:application/pdf;base64,';
    expect(pdfFileBase64).toEqual(sucPDFFileBase64);    
  });

})