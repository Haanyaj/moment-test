import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    logoContainer: {
        textAlign: 'center',
        marginBottom: theme.spacing(7),
      },
      title: {
        fontSize: 35,
        color: '#d4af37',
        fontFamily: 'AbhayaLibre-SemiBold'
      },
      text: {
        fontSize: 16,
        color: '#d4af37',
        fontFamily: 'AbhayaLibre-SemiBold'
      }
  }));
  
export default function Logo() {
    const classes = useStyles();

    return (
      <div className={classes.logoContainer}>
        <div className={[classes.title]}>MOMENT</div>
        <div className={classes.text}>PARIS</div>
      </div>
    )
  }