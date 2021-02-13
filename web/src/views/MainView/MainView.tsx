import React, { useState } from 'react';
import { 
  IconButton,
  Card,
  CardContent,
  Typography,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { Pagination } from '@material-ui/lab';
import useStyle from './style';

import { UploadButton } from '../../components/molecules';

const MainView: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const [value, setValue] = useState<number>(0)
  return (
    <div className={classes.root}>
      <div className={classes.bottomArea}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.tabMenu}
        >
          <BottomNavigationAction 
            label="Text" 
            icon={<TextFieldsIcon />}
            className={classes.iconColor}
          />
          <BottomNavigationAction 
            label="Images" 
            icon={<ImageIcon />}
            className={classes.iconColor}
          />
          <BottomNavigationAction 
            label="PDF" 
            icon={<PictureAsPdfIcon />}
            className={classes.iconColor}
          />
        </BottomNavigation>
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
      <UploadButton 
        props="12345"
      />
      <div className={classes.page}>
        <Pagination count={10} className={classes.selected} />
      </div>
    </div>
  )
}

export default MainView