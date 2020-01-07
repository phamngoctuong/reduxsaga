import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {STATUSES} from './../../constants';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TaskList from './../../components/TaskList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  openTask = () => {
    this.setState({
      open: true
    }) 
  }
  renderBoard() {
    let xhtml = null;
    xhtml = (
      STATUSES.map((status,index)=> {
        return(
          <TaskList key={index} status={status} index={index}/>
        );
      })
    );
    return xhtml
  }
  renderForm() {
    var {open} = this.state;
    let xhtml = null;
    xhtml = (
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
    return xhtml;
  }
  render() {
    var {classes} = this.props;
    return (
      <Container maxWidth="lg">
        <div className="App">
          <Button variant="contained" color="primary" onClick={this.openTask}><AddIcon/>&nbsp;Thêm công việc mới</Button>
          <Box component="div" mt={2}>
            <Grid container className={classes.root} spacing={1}>
              {this.renderBoard()}
              {this.renderForm()}
            </Grid>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(App);