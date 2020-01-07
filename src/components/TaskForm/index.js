import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
class TaskForm extends Component {
	handleClose = () => {
		this.props.handleClose()
	}
  render() {
  	var {open, classes} = this.props;
    return (
    	<Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
        	<Grid container>
        		<Grid item lg={12}>
	          	<TextField id="standard-helperText" fullWidth label="Name" className={classes.textfield} />
	          </Grid>
	          <Grid item lg={12}>
		        	<TextField id="standard-multiline-flexible" fullWidth className={classes.textfield} label="Multiline" multiline rowsMax="4"/>
		        </Grid>
	        </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={this.handleClose} color="secondary">Cancel</Button>
          <Button variant="contained" autoFocus onClick={this.handleClose} color="primary">Oke</Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default withStyles(styles)(TaskForm);