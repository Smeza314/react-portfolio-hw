import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

  image: {
    height: 300,
    width: '100%'
  },

  right: {
    float: 'right',
    width: '48%',
    marginTop: 10,
    textAlign: 'center',
  },

  left: {
    float: 'left',
    width: '48%',
    marginTop: 10,
    textAlign: 'center',
  },

  base: {
    maxWidth: 350,
    marginLeft: 140
  },

  media: {
    height: 400
  },

  mainText: {
    color: 'black'
  }

}))

const Home = () => {
  const classes =  useStyles();
  return(
    <>
      <img className={classes.image} src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='portfolio'></img>
      <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.mainText} variant='body1'>Hello my name is Sebastian Meza. This is my first time creating a portfolio page using React!</Typography>
          </Paper>
        </Grid>
        <Grid container>
          <Grid className={classes.left} xs={6}>
            <Card className={classes.base}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='https://www.insurance-relief.com/wp-content/uploads/sites/4/2019/11/December-2019-Setting-Your-Goals-for-2020.png'
                  title='Goals'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    Goals:
                  </Typography>
                  <Typography className={classes.mainText} variant='body2' color='textSecondary'>
                    I want to become more comfortable with coding. At the moment I still find it very difficult at times, but I also am happy with what I have learned so far these past 3 months.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid className={classes.right} xs={6}>
            <Card className={classes.base}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='https://wildatv.com/wp-content/uploads/2019/07/ATV-at-Glamis-Sand-Dunes-featured-image.jpg'
                  title='Glamis'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5'>
                    About me:
                  </Typography>
                  <Typography className={classes.mainText} variant='body2' color='textSecondary'>
                    I enjoy going riding any kind of vehicle and just having fun with them. I also love playing video games mainly survival, but I'm also open to anything.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Home