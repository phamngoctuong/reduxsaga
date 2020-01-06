import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { STATUSES } from './../../constants';
import TaskList from './../../components/TaskList';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={1}>
        {
          STATUSES.map((status,index)=> {
            return (
              <TaskList status={status} index={index} key={index}/>
            )
          })
        }
      </Grid>
    );
    return xhtml;
  }
  handleClose = () =>  {
    this.setState({
      open: false
    })
  }
  addNewTask = () => {
    this.setState({
      open: true
    })
  }
  renderForm() {
    var {open} = this.state;
    let xhmtl = null;
    xhmtl = (
      <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span>Dealog Content</span>
          </DialogContentText>
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
    return xhmtl;
  }
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <div className="classes.taskBoard">
          <Button variant="contained" color="primary" onClick={this.addNewTask}><AddIcon/>&nbsp;Thêm công việc</Button>
        </div>
        {this.renderBoard()}
        {this.renderForm()}
      </Container>
    );
  }
}
export default withStyles(styles)(TaskBoard);