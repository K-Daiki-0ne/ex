import React, { FC } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import useStyle from './style';

type Props = {
  file: string
}

export const TextFileContent: FC<Props> = ({ file }): JSX.Element => {
  const decodeFileBase64 = (base64String: string) => {
    // Base64にエンコードされたファイルをatobを用いてデコードする
    return decodeURIComponent(
      atob(base64String)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  // デコードされたテキストファイルの内容を表示できるようにする
  const decodeBase64 = decodeFileBase64(
    file.substring(file.indexOf(",") + 1)
  );

  const classes = useStyle();

  return (
    <div>
      <TextareaAutosize 
        rows={8}
        value={decodeBase64}
        className={classes.text}
      />
    </div>
  )
}