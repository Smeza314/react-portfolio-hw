import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return(
    <>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <a href="/">
              <IconButton edge='start' className={classes.menuButton} color='secondary' aria-label='menu'>
                <HomeIcon />
              </IconButton>
            </a>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar