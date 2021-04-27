import React, { FC } from 'react';
import { 
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { fileTypeState } from '@src/store/atoms';
import { useRecoilState } from 'recoil';
import useStyle from './style';

export const CheckFileType: FC = (): JSX.Element => {
  const [fileTypeNumber, setFileTypeNumber] = useRecoilState<string>(fileTypeState);

  const changeFileType = (event: React.ChangeEvent<{}>, newValue: string) => {
    event.preventDefault();
    setFileTypeNumber(newValue);

  }

  const classes = useStyle();

  return (
    <BottomNavigation
      value={fileTypeNumber}
      onChange={changeFileType}
      showLabels
      className={classes.tabMenu}
    >
      <BottomNavigationAction 
        label="Text" 
        icon={<TextFieldsIcon />}
        value="text"
        className={classes.iconColor}
      />
      <BottomNavigationAction 
        label="Images" 
        icon={<ImageIcon />}
        value="image"
        className={classes.iconColor}
      />
      <BottomNavigationAction 
        label="PDF" 
        icon={<PictureAsPdfIcon />}
        value="pdf"
        className={classes.iconColor}
      />          
    </BottomNavigation>
  )
}
