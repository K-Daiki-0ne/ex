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
import { fileTypeState } from '@src/store/atoms';
import { FileAPIType } from '@src/types';
import { getSingleURL } from '@src/lib/getSingleURL';
import { updateSingleURL } from '@src/lib/updateSingleURL';
import FileAPI from '@src/api/File';
import useStyle from './style';

export const EditView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
  const [fileName, setFileName] = useState<string>('');
  const [fileTitle, setFileTitle] = useState<string>('');
  const [fileComment, setFileComment] = useState<string>('');
  const router = useRouter();
  const fileType = useRecoilValue(fileTypeState);
  const { fileId } = router.query;

  const classes = useStyle();

  useEffect(() => {
    setIsLoading(false);
    const END_POINT = getSingleURL(fileId, fileType);
    FileAPI.getSingleFile(END_POINT)
      .then((data) => setSingleFile(data.data))
      .then(() => setIsLoading(true))
  }, [])

  const updateFileContent = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (fileName == '') {
      setFileName(singleFile.FileName);
    } else if(fileTitle == '') {
      setFileTitle(singleFile.Title);
    } else if(fileComment == '') {
      setFileComment(singleFile.Comment)
    }

    const END_POINT = updateSingleURL(fileType, fileName, fileTitle, fileComment)

    FileAPI.updateSingleFile(END_POINT)
      .then()
  }

  return isLoading ? (
    <div className={classes.root}>
      <TextField 
        id="standard-basic"
        label="File's name"
        color="primary"
        defaultValue={singleFile.FileName}
        onChange={e => setFileName(e.target.value)}
        inputProps={{
          className: classes.textField
        }}
        className={classes.textField} 
      />
      <TextField 
        id="standard-basic" 
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