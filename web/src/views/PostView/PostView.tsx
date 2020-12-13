import React, { ChangeEvent, useState } from 'react';
import Link from 'next/link'
import {useDropzone} from 'react-dropzone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PublishIcon from '@material-ui/icons/Publish';
import {
  TextareaAutosize,
  TextField,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Typography
} from '@material-ui/core'

import useStyle from './style';

const PostView: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('Choose File');
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [upploadComment, setUploadComment] = useState<string>('');
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  const classes = useStyle();
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const postFile = async (event: React.MouseEvent<HTMLInputElement>) => {
    setOpen(true);
    event.preventDefault();
    const fileData = new FormData();
    fileData.append('file', file);
  }

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  }

  function closeModal() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <Typography className={classes.description}>
        .txt .jpg .pdfファイルをアップロードできます。
        <br />
        アップロードできるファイルはひとつだけです。
      </Typography>
      <div className={classes.fileTitle}>
        <TextField 
          required 
          label="Enter file title" 
          fullWidth
          className={classes.fileTitleColor}
          inputProps={{
            className: classes.fileTitleColor
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUploadTitle(event.target.value)}
        />
      </div>
      <div className={classes.fileUploadZone}>
        <div {...getRootProps({className: 'dropzone'})}>
          <CloudUploadIcon className={classes.uploadIcon} />
          <input 
            {...getInputProps()} 
            onChange={uploadFile}
            type='file'
          />
          <p>{fileName}</p>
        </div>
      </div>
      <div>
      </div>
      <div onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUploadComment(event.target.value)}>
        <TextareaAutosize 
          aria-label="empty textarea" 
          placeholder="Please post file comment"
          rowsMin={3}
          className={classes.fileCommentContent}
        />
      </div>
      <div onClick={postFile}>
        <IconButton className={classes.postBtn}>
          <Link href='/main/1223'>
            <PublishIcon 
              className={classes.postIcon}
            />
          </Link>
        </IconButton>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{fileName}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PostView