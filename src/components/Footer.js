import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    
    <Typography variant="body2" color="secondary">
      <Box letterSpacing={3}>
      {'Moment tech test technique '}
      {new Date().getFullYear()}
      {'.'}
      </Box>
    </Typography>
    
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: 'center',
    padding: theme.spacing(10, 2, 10, 2),
    marginTop: 'auto',
  },
  hr: {
    marginBottom: theme.spacing(2),
    marginBlockStart: 0,
    borderColor: theme.palette.secondary.main,
  },
    links: {
      marginTop: 10,
        color: theme.palette.secondary.main
    },
    link: {
      color: theme.palette.secondary.main
    }
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <hr className={classes.hr} />
          <Typography variant="body1">
          </Typography>
          <Copyright />

          <Box letterSpacing={2} className={classes.links}>
              <Link className={classes.link} to="themoviedb.org">
                  TMDB
              </Link>
          </Box>
        </Container>
      </footer>
  );
}
