import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {STATUSES} from './../../constants';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
class App extends Component {
  renderBoard() {
    let xhtml = null;
    var {classes} = this.props;
    xhtml = (
      STATUSES.map((status,index)=> {
        return(
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
      })
    );
    return xhtml
  }
  render() {
    var {classes} = this.props;
    return (
      <Container maxWidth="lg">
        <div className="App">
          <Button variant="contained" color="primary"><AddIcon/>&nbsp;Thêm công việc mới</Button>
          <Box component="div" mt={2}>
            <Grid container className={classes.root} spacing={1}>
              {this.renderBoard()}
            </Grid>
          </Box>
        </div>
      </Container>
    );
  }
}
export default withStyles(styles)(App);