import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
class TaskForm extends Component {
	handleClose = () => {
		this.props.handleClose()
	}
  render() {
  	var {open} = this.props;
    return (
    	<Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={this.handleClose} color="secondary">Cancel</Button>
          <Button variant="contained" autoFocus onClick={this.handleClose} color="primary">Oke</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default TaskForm;