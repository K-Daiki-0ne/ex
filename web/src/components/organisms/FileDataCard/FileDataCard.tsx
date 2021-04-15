import React, { useState, useEffect, FC } from 'react';
import { 
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FileType, File } from '@src/types'
import { useRecoilValue, useRecoilState } from 'recoil';
import { fileState } from '@src/store/atoms'
import { fileTypeState } from '@src/store/atoms';
import FileAPI from '@src/api/File';
import useStyle from './style';

type Props = {
  props: File
}

export const FileDataCard: FC<Props> = ({ props }): JSX.Element => {
  const [isDelSuc, setIsDelSuc] = useState<boolean>(false);
  const fileType = useRecoilValue(fileTypeState);
  const [ , setFileListState ]    = useRecoilState(fileState);
  const classes = useStyle();
  const uplDate = props.CreatedAt.substring(0, 10);
  const router      = useRouter();
  const { userId }  = router.query;

  useEffect(() => {
    if (isDelSuc) {
      router.push({
        pathname: '/main/[userId]',
        query: {userId: userId}
      })
    }
  }, [isDelSuc])

  const deleteFile = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDelSuc(false);
    FileAPI.deleteSingleFile(userId, props.ID, fileType)
      .then(() => {
        FileAPI.getAllFiles(userId)
          .then((data: FileType) => setFileListState(data))
          .then(() => setIsDelSuc(true))
      })
      .catch((err) => console.error(err))
    // FileAPI.getAllFiles(userId)
    //   .then((data: FileType) => setFileListState(data))
    //   .then(() => setIsDelSuc(true))
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.dairyContent}>
          {uplDate}
        </Typography>
        <Link href={`/detail/${props.ID}`}>
          <Typography className={classes.fileTitle}>
            {props.FileName}
          </Typography>
        </Link>
        <IconButton aria-label="delete" className={classes.deleteBtn} onClick={deleteFile}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </CardContent>
    </Card>
  )
}