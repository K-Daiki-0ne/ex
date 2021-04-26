import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
  TextareaAutosize
} from '@material-ui/core';
import {
  DetailFileName,
  DetailFileTitle,
  DetailFileComment
} from '@src/components/atoms';
import { Document, Page, pdfjs } from 'react-pdf';
import { fileTypeState } from '@src/store/atoms';
import { getSingleURL } from '@src/lib/getSingleURL';
import { parseBase64String } from '@src/lib/parseBase64String';
import { FileAPIType } from '@src/types';
import FileAPI from '@src/api/File';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import useStyle from './style';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const DetailView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const [base64String, setBase64String] = useState<string>('');
  const [numPages, setNumPages] = useState(null);
  const fileType = useRecoilValue(fileTypeState);
  const classes = useStyle();
  const router = useRouter();
  const { fileId } = router.query;

  useEffect(() => {
    setIsLoading(false);
    const base64 = parseBase64String(fileType)
    setBase64String(base64)
    const END_POINT = getSingleURL(fileId, fileType);
    FileAPI.getSingleFile(END_POINT)
      .then((data) => setSingleFile(data.data))
      .then(() => setIsLoading(true))
  }, [])

  const FileContentComponent = () => {
    if (fileType =='image') {
      return (
        <CardMedia
          component='img'
          className={classes.media}
          src={`${base64String}${singleFile.file}`}
          title={singleFile.FileName}
        />
      )
    } else if (fileType == 'text') {
      const decodeFileBase64 = (base64String) => {
        // From Bytestream to Percent-encoding to Original string
        return decodeURIComponent(
          atob(base64String)
            .split("")
            .map(function (c) {
              return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
        );
      };
      const decodeBase64 = decodeFileBase64(
        singleFile.file.substring(singleFile.file.indexOf(",") + 1)
      );
      return (
        <div>
          <TextareaAutosize 
            rows={8}
            value={decodeBase64}
            className={classes.text}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Document 
            
            file={`data:application/pdf;base64,${singleFile.file}`}
          >
            <Page
              width={390}
              pageNumber={1}
            />
          </Document>
        </div>
      )
    }
  }

  return isLoading ? (
    <Card className={classes.root}>
      <CardContent>
        <DetailFileName name={singleFile.FileName} />
      </CardContent>
      <CardActionArea>
        <FileContentComponent />
        <CardContent>
          <DetailFileTitle title={singleFile.Title} />
          <DetailFileComment comment={singleFile.Comment} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  ) : (
    <div className={classes.root}>
      <CircularProgress size={140}/>
    </div>
  )
}