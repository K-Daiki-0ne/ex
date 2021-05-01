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
import FileAPI from '@src/api/File';
import useStyle from './style';

export const EditView: FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [singleFile, setSingleFile] = useState<FileAPIType>();
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
  return isLoading ? (
    <div className={classes.root}>
      <TextField 
        id="standard-basic"
        label="File's name"
        color="primary"
        inputProps={{
          className: classes.textField
        }}
        className={classes.textField} 
      />
      <TextField 
        id="standard-basic" 
        label="Title"
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
      />
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<EditIcon />}
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