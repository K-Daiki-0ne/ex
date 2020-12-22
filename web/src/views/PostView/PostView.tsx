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
import axios from 'axios';

const PostView: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [fileName, setFileName] = useState<string>('Choose File');
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadComment, setUploadComment] = useState<string>('');
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  
  const classes = useStyle();

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const postFile = async () => {
    setOpen(true);
    console.log(file)
    const fileData = new FormData();
    console.log(file.name)
    fileData.append('file', file);
    console.log(fileData)

    try {
      const res = await axios.post(
        "http://localhost:5050/app/image?userID=123456743242432432",
        fileData, {
          headers: {
            'content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent: any) => {
  
            const uploadPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            console.log(uploadPercent)
          },
        }
      )  
    } catch (err) {
      console.log(err)
    }
  }

  const uploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setFile(event.target.files[0]);
    console.log(file)
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
          <form>
          <input 
            {...getInputProps()} 
            onChange={uploadFile}
            type='file'
          />
          </form>
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
          {/* <Link href='/main/1223'> */}
            <PublishIcon 
              className={classes.postIcon}
            />
          {/* </Link> */}
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
            <h2>{fileName}</h2>
            <p>{uploadTitle}</p>
            <p>{uploadComment}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PostView