import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  openDialog: {
    position: 'absolute',
    width: 300,
    height: 394,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({ movie }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
// window of movies details
  return (
    <div>
      <div variant="outlined" color="primary" onClick={handleClickOpen} style={{position: 'absolute', width: 300, height: 394,}}>

      </div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.title} />
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <b>{movie.title}</b>
          <div style={{fontSize: 13}}>{"Année: "}{(movie.release_date).substr(0, 4)}</div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {"Vu: "}{movie.popularity} {" fois  "}<br/>
            {movie.vote_average === 0 ? "" : "Note des utilisateurs: "}
            <div style={{width: '100px'}}>
            {movie.vote_average !== 0 ? <CircularProgressbar value={movie.vote_average * 10} text={`${movie.vote_average}/10`} strokeWidth="3"/>  : "Non noté" }
            </div>
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>
            {movie.overview === "" ? "Pas de synopsis disponible pour ce film" : movie.overview}
          </Typography>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
