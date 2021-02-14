import React, { FC, useState } from 'react';
import { 
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import useStyle from './style';

export const CheckFileType: FC = (): JSX.Element => {
  const [value, setValue] = useState<number>(0)

  const classes = useStyle();

  return (
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
  )
}
