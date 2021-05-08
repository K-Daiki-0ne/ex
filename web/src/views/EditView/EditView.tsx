import React, { FC, useState ,useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { 
  CircularProgress,
  Typography,
  TextField,
  TextareaAutosize,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { fileTypeState, userInfoState } from '@src/store/atoms';
import { FileAPIType } from '@src/types';
import { 
  getSingleURL, 
  updateSingleURL 
} from '@src/lib';
import FileAPI from '@src/api/File';
import useStyle from './style';

export const EditView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const [fileName, setFileName] = useState<string>('');
  const [fileTitle, setFileTitle] = useState<string>('');
  const [fileComment, setFileComment] = useState<string>('');
  const fileType = useRecoilValue(fileTypeState);
  const userID   = useRecoilValue(userInfoState);
  const router = useRouter();
  const { fileId } = router.query;

  const classes = useStyle();

  useEffect(() => {
    setIsLoading(false);
    const END_POINT = getSingleURL(fileId, fileType);
    FileAPI.getSingleFile(END_POINT)
      .then((data) => setSingleFile(data.data))
      .then(() => setIsLoading(true))
  }, [])

  const updateFileContent = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    setIsLoading(false);

    const END_POINT = updateSingleURL(fileType, fileId, fileTitle, fileComment)

    setIsLoading(true)

    FileAPI.updateSingleFile(END_POINT)
      .then(() => setIsLoading(true))
      .then(() => router.push(`/main/${userID}`))
  }

  return isLoading ? (
    <div className={classes.root}>
      <TextField 
        label="File's name"
        color="primary"
        value={singleFile.FileName}
        onChange={e => setFileName(e.target.value)}
        inputProps={{
          className: classes.textField
        }}
        className={classes.textField} 
      />
      <TextField 
        label="Title"
        color="primary"
        defaultValue={singleFile.Title}
        onChange={e => setFileTitle(e.target.value)}
        inputProps={{
          className: classes.textField
        }}
        className={classes.textField}
      />
      <Typography 
        variant="h6" 
        gutterBottom
        align="left"
        className={classes.comment}
      >
        Comment
      </Typography>
      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="comment area zone"
        className={classes.commentArea}
        rowsMin={5}
        defaultValue={singleFile.Comment}
        onChange={e => setFileComment(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<EditIcon />}
          onClick={updateFileContent}
        >
          Edit
        </Button>
      </div>
    </div>
  ) : (
    <div>
      <CircularProgress size={140}/>
    </div>
  )
}