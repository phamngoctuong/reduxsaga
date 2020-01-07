import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
var taskList = [
  {
    id: 0,
    title: 'PLAYGAME',
    description: 'Play with my Friend',
    status: 0
  },
  {
    id: 2,
    title: 'SING A SONG',
    description: 'Sing with my Friend',
    status: 1
  },
  {
    id: 3,
    title: 'PLAY FOOTBALL',
    description: 'Play Football with my Friend',
    status: 2
  }
];
class TaskList extends Component {
  render() {
    var {classes, index, status} = this.props;
    return (
      <Grid key={index} item md={4}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={1}>
              {
                taskList.map((task, index)=>{
                    if(status.value === task.status) {
                      return (
                        <React.Fragment key={index}>
                          <Grid item lg={6}>
                            <Typography component="h2" className={classes.title} color="textSecondary">
                              {task.title}
                            </Typography>
                          </Grid>
                          <Grid item lg={6}>
                            <Typography component="h3" className={classes.title} color="textSecondary">
                              {status.label}
                            </Typography>
                          </Grid>
                          <Grid item lg={12}>
                            <Typography className={classes.title} color="textSecondary">
                              {task.description}
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      );
                    }
                })
              }
            </Grid>
          </CardContent>
          <CardActions className={classes.CardAction}>
            <Button variant="contained" size="small" color="primary"><EditIcon />&nbsp;Edit Task</Button>
            <Button variant="contained" size="small" color="secondary"><EditIcon />&nbsp;Delete Task</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
export default withStyles(styles)(TaskList);