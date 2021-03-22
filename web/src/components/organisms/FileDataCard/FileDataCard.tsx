import React, { FC } from 'react';
import { 
  Card,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { File } from '@src/types'
import useStyle from './style';

type Props = {
  props: File
}

export const FileDataCard: FC<Props> = ({ props }): JSX.Element => {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.dairyContent}>
          2020/11/13
        </Typography>
        <Typography className={classes.fileTitle}>
          {props.filename}
        </Typography>
        <IconButton aria-label="delete" className={classes.deleteBtn}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </CardContent>
    </Card>
  )
}