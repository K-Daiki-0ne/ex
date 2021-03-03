import React, { FC } from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Typography } from '@material-ui/core'
import useStyle from './style';

type Props = {
  status: number;
}

const ErrorView: FC<Props> = ({ status }) => {
  const classes = useStyle();
  return (
    <div>
      <ErrorOutlineIcon className={classes.errorIcon} />
      <Typography className={classes.errorText} >
        An { status } Error occurred.
      </Typography>
    </div>
  )
}

export default ErrorView;