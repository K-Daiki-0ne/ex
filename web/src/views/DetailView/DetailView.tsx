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
  Typography,
  CircularProgress
} from '@material-ui/core';
import {
  DetailFileName,
  DetailFileTitle,
  DetailFileComment
} from '@src/components/molecules'
import { fileTypeState } from '@src/store/atoms';
import { getSingleURL } from '@src/lib/getSingleURL';
import { FileAPIType } from '@src/types';
import FileAPI from '@src/api/File';
import useStyle from './style';

export const DetailView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const fileType = useRecoilValue(fileTypeState);
  const classes = useStyle();
  const router = useRouter();
  const { fileId } = router.query;

  useEffect(() => {
    setIsLoading(false);
    const END_POINT = getSingleURL(fileId, fileType);
    FileAPI.getSingleFile(END_POINT)
      .then((data) => setSingleFile(data.data))
      .then(() => setIsLoading(true))
  }, [])

  return isLoading ? (
    <Card className={classes.root}>
      <CardContent>
        <DetailFileName name={singleFile.FileName} />
      </CardContent>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          height='140'
          src={`data:image/png;base64,${singleFile.file}`}
          title={singleFile.FileName}
        />
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