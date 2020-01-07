import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {STATUSES} from './../../constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from './../../actions/task';
class TaskBoard extends Component {
	componentDidMount() {
	    const {taskActionsCreators} = this.props;
	    const {fetchListTask} = taskActionsCreators;
	    fetchListTask();
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
  handleClose = () => {
  	this.props.handleClose()
  }
  openTask = () => {
  	this.props.openTask()
  }
  renderForm() {
    var {open} = this.props;
    let xhtml = null;
    xhtml = <TaskForm handleClose={this.handleClose} open={open} />
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
var mapStateToProps = null;
var mapDispatchToProps = (dispatch) => {
	return {
		taskActionsCreators: bindActionCreators(taskActions,dispatch)
	}
}
export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(TaskBoard));