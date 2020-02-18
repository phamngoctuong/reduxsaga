import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
import styles from './styles';
import TaskItem from '../TaskItem/Index.js';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;

    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        {tasks.map(task => {
          return <TaskItem task={task} status={status} key={task.id} />;
        })}
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);
