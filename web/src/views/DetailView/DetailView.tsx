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
} from '@src/components/atoms';
import { fileTypeState } from '@src/store/atoms';
import { getSingleURL } from '@src/lib/getSingleURL';
import { parseBase64String } from '@src/lib/parseBase64String';
import { FileAPIType } from '@src/types';
import FileAPI from '@src/api/File';
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

  return isLoading ? (
    <Card className={classes.root}>
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
        >
          { singleFile.FileName }
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          src={`${base64String}${singleFile.file}`}
          title={singleFile.FileName}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2"
          >
            { singleFile.Title }
          </Typography>
          <Typography 
            gutterBottom 
            variant="h5" 
            component="h2"
          >
            { singleFile.Comment }
          </Typography>
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