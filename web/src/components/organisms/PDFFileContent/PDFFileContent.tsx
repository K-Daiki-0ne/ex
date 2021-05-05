import React, { FC } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type Props = {
  base64String: string,
  file: string
}

export const PDFFileContent: FC<Props> = ({ base64String, file }) => {
  return (
    <div>
      <Document     
        file={`${base64String}${file}`}
      >
        <Page
          width={390}
          pageNumber={1}
        />
      </Document>
    </div>

  )
}