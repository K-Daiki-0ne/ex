import React from 'react';
import { 
  IconButton,
  Card,
  CardContent,
  Typography 

} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Pagination } from '@material-ui/lab';
import useStyle from './style';

const MainView: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.btn}>
        <IconButton 
          aria-label="add"
          size="small"
        >
          <AddCircleIcon className={classes.iconSize} />
        </IconButton>
      </div>
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.fileTitle}>
              Word of the Day
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={classes.page}>
        <Pagination count={10} variant="outlined" />
      </div>
    </div>
  )
}

export default MainView