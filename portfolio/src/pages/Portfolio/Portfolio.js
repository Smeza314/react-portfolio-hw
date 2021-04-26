import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardActionArea from '@material-ui/core/CardActionArea';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },

  root: {
    width: 250,
    marginTop: 10
  },

  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary
  },

  mainText: {
    color: 'black'
  }
}))

const Portfolio = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.mainText} variant='body1'>HI AGAIN! These are just some of the projects I have worked on.</Typography>
          </Paper>
        </Grid>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.tasteofhome.com/wp-content/uploads/2019/08/Sazerac_shutterstock_438408706.jpg"
                title="A Drink"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cocktail Nutrition
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This app lets you search up your favorite drinks and see their recipe and nutritional values.
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://smeza314.github.io/Cocktail-Nutrition/">
                <Button size="small" color="primary">
                  Cocktail Nutrition
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://web.uri.edu/assessment/files/planning.jpg"
                title="A Drink"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Weekender           
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This app allows you to make an account and post fun activities that others can see!
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://thawing-sands-64181.herokuapp.com/">
                <Button size="small" color="primary">
                  Weekender
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.iocongress2018.com/wp-content/uploads/2021/01/UK_wildbirds-01-robin.jpg"
                title="A Drink"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  BirdBook
              </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is the perfect app for people that love birds. Just make an account and start birding!
              </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a href="https://mysterious-tundra-80786.herokuapp.com/">
                <Button size="small" color="primary">
                  BirdBook
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </div>
    </>
  )
}

export default Portfolio