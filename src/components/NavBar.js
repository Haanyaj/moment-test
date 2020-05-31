import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconContainer: {
    display: 'flex',
  },
  menuBar: {
    marginRight: '50px',
  },
  signInButton: {
    margin: theme.spacing(1),
  },
  inputRoot: {
    color: 'inherit',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchField: {
    width: '100%',
  },
  backButton: {
    margin: theme.spacing(1),
  }
}));


function BaseNavBar(props) {
  const classes = useStyles();

  return (
    <Toolbar >
      <div className={classes.sectionMobile}>
      </div>
      <Typography className={classes.title} variant="h6" noWrap>
      <img src="%PUBLIC_URL%/images/blue.png" alt="The Movie database"/>
    </Typography>
      <div className={classes.sectionDesktop}>     
      </div>
      <div className={classes.grow} />
    </Toolbar>
  );
}

export default function NavBar(props) {

  return (
    <div>
      <AppBar position={!props.sticky ? "static" : 'fixed'}>
        <BaseNavBar />
      </AppBar>
      {props.sticky && <Box height="64px" />}
    </div>
  );
}
