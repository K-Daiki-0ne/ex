import React, { FC, useState, useEffect } from 'react';
import { 
  IconButton,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Pagination } from '@material-ui/lab';
import { UploadButton } from '../../components/molecules';
import { CheckFileType } from '../../components/organisms';
import { getAllFiles } from '../../api';
import useStyle from './style';


const MainView: FC = (): JSX.Element => {
  const [files, setFiles] = useState<any[]>([])
  
  const classes = useStyle();

  useEffect(() => {
    getAllFiles("12345")
      .then((data: any) => console.log(data))
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.bottomArea}>
        <UploadButton 
          props="12345"
        />
        <CheckFileType />
      </div>
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.dairyContent}>
              2020/11/13
            </Typography>
            <Typography className={classes.fileTitle}>
              Word of the Day
            </Typography>
            <IconButton aria-label="delete" className={classes.deleteBtn}>
              <DeleteIcon className={classes.deleteIcon} />
            </IconButton>
          </CardContent>
        </Card>
      </div>
      
      <div className={classes.page}>
        <Pagination count={10} className={classes.selected} />
      </div>
    </div>
  )
}

export default MainView