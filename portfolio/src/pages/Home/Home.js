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
            <Typography variant='body1'>Hello my name is Sebastian Meza. This is my first time creating a portfolio page using React!</Typography>
          </Paper>
        </Grid>
      </div>
    </>
  )
}

export default Home