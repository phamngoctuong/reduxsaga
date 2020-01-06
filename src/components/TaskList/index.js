import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TaskItem from './../TaskItem';
const listTask = [{
    id: 1,
    title: 'Read book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'With my friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'Alone 😊',
    status: 1,
  },
];
class TaskList extends Component {
  render() {
    const {status,index} = this.props;
    const { classes } = this.props;
    return (
      <Grid key={index} item md={4}>
        <Box my={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {
            listTask.map((listask, index)=> {
                if(listask.status === status.value) {
                    return (
                      <TaskItem listask={listask} status={status} key={index}/>
                    )
                }
            })
          }
        </div>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);