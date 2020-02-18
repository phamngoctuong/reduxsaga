import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      //Cái này copy từ material Form dialogs
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          {/* Cái này copy từ material Form TextField */}
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
          {/* Cái này copy từ material Form TextField */}
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);
