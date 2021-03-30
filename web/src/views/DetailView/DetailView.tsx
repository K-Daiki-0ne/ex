import React, { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import useStyle from './style';

export const DetailView: FC = (): JSX.Element => {
  const classes = useStyle();
  const router = useRouter();
  const { fileId } = router.query;
  
  useEffect(() => {
    console.log(fileId)
  }, [fileId])

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="h4" className={classes.filename}>
          File name
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            title
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            comment
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}