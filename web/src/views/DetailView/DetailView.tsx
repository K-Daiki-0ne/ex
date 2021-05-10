import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  CircularProgress,
} from '@material-ui/core';
import {
  DetailFileName,
  DetailFileTitle,
  DetailFileComment
} from '@src/components/atoms';
import { fileTypeState } from '@src/store/atoms';
import { 
  getSingleURL, 
  parseBase64String 
} from '@src/lib';
import { FileAPIType } from '@src/types';
import FileAPI from '@src/api/File';
import {
  TextFileContent,
  ImageFileContent,
  PDFFileContent
} from '@src/components/organisms';
import useStyle from './style';

export const DetailView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const [base64String, setBase64String] = useState<string>('');
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

  const transitionEditPage = () => {
    router.push(`/edit/${fileId}`)
  }

  const FileContentComponent = () => {
    if (fileType =='image') {
      return (
        <ImageFileContent 
          base64String={base64String}
          file={singleFile.file}
          fileName={singleFile.Title}
        />
      )
    } else if (fileType == 'text') {
      return (
        <TextFileContent 
          file={singleFile.file}
        />
      )
    } else {
      return (
        <PDFFileContent 
          base64String={base64String}
          file={singleFile.file}
        />
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
        <Button size="small" color="primary" onClick={transitionEditPage}>
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