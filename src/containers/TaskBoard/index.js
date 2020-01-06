import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { STATUSES } from './../../constants';
import TaskList from './../../components/TaskList';
class TaskBoard extends Component {
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
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="lg">
        <div className="classes.taskBoard">
          <Button variant="contained" color="primary"><AddIcon/>&nbsp;Thêm công việc</Button>
        </div>
        {this.renderBoard()}
      </Container>
    );
  }
}
export default withStyles(styles)(TaskBoard);