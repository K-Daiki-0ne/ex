import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import { useRouter } from 'next/router';
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
} from '@material-ui/core';
import { checkFile } from '@src/lib';
import { PostHeader } from '@src/components/molecules';
import { ProgressLabel } from '@src/components/organisms';
import useStyle from './style';
import axios from 'axios';

const PostView: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>('Choose File');
  const [uploadTitle, setUploadTitle] = useState<string>('');
  const [uploadComment, setUploadComment] = useState<string>('');
  const [uploadPercentage, setUploadPercentage] = useState<number>(0);

  const classes = useStyle();
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    const reqUrl = checkFile(fileName, userId, uploadTitle, uploadComment);
    reqUrl
      .then((e) => setUrl(e))
      .catch((err) => console.error(err))
  }, [fileName, uploadTitle, uploadComment])

  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const postFile = async () => {
    setOpen(true);
    const fileData = new FormData();
    fileData.append('file', file);

    try {
      const res = await axios.post(
        url,
        fileData, {
          headers: {
            'Content-Type': "multipart/form-data",
          },
          onUploadProgress: (progressEvent: any) => { 
            setUploadPercentage(Math.round((progressEvent.loaded * 100) / progressEvent.total))
          },
        }
      )
      await setTimeout(() => {
        router.push(`/main/${userId}`)
      }, 1800);
    } catch (err) {
      console.log(typeof(err));
    }
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
      <PostHeader />
      <div className={classes.fileTitle}>
        <TextField 
          required 
          label="タイトルを入力してください"
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
          placeholder="コメントを入力してください"
          rowsMin={3}
          className={classes.fileCommentContent}
        />
      </div>
      <div onClick={postFile}>
        <IconButton className={classes.postBtn}>
          <PublishIcon 
            className={classes.postIcon}
          />
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
            <ProgressLabel value={uploadPercentage} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default PostView