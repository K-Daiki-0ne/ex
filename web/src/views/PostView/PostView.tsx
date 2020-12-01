import React from 'react';
import Link from 'next/link'
import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PublishIcon from '@material-ui/icons/Publish';

import useStyle from './style';

const PostView: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  return (
    <div className={classes.root}>
      <div className={classes.fileTitle}>
        <TextField 
          required 
          label="Enter file title" 
          fullWidth
          className={classes.fileTitleColor}
          inputProps={{
            className: classes.fileTitleColor
          }}
        />
      </div>
      <div className={classes.fileUploadZone}>
        <div {...getRootProps({className: 'dropzone'})}>
          <CloudUploadIcon className={classes.uploadIcon} />
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
      </div>
      <div>
        <TextareaAutosize 
          aria-label="empty textarea" 
          placeholder="File comment"
          rowsMin={3}
          className={classes.fileCommentContent}
        />
      </div>
      <IconButton className={classes.postBtn}>
        <Link href='/main/1223'>
          <PublishIcon 
            className={classes.postIcon}
          />
        </Link>
      </IconButton>
    </div>
  );
}

export default PostView