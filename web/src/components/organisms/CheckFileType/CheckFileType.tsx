import React, { FC, useState, useEffect } from 'react';
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

  useEffect(() => {
    console.log(value)
  }, [])

  const changeFileType = (event, newValue: number) => {
    event.preventDefault();
    setValue(newValue)
  }

  const classes = useStyle();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        changeFileType(event, newValue);
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
