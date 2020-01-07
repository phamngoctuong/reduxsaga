import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
class TaskForm extends Component {
  handleClose = () =>  {
    this.props.handleClose()
  }
  render() {
    var {open, classes } = this.props;
    return (
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
            <TextField id="standard-name" label="Name" className={classes.textField}  margin="normal" />
            <TextField id="standard-multiline-flexible" label="Multiline" multiline rowsMax="4"  />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);