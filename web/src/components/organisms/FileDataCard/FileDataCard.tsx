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
  const uplDate = props.CreatedAt.substring(0, 10)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.dairyContent}>
          {uplDate}
        </Typography>
        <Typography className={classes.fileTitle}>
          {props.FileName}
        </Typography>
        <IconButton aria-label="delete" className={classes.deleteBtn}>
          <DeleteIcon className={classes.deleteIcon} />
        </IconButton>
      </CardContent>
    </Card>
  )
}