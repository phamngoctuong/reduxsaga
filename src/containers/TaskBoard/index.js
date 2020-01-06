import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { STATUSES } from './../constants';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
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
class TaskBoard extends Component {
  renderBoard() {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={1}>
        {
          STATUSES.map((status,index)=> {
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
                              <Card className={classes.card} key={index}>
                                <CardContent>
                                <Grid container>
                                  <Grid item md={6}>
                                    <Typography variant="h5" component="h1">{listask.title}</Typography>
                                  </Grid>
                                  <Grid item md={6}>
                                    <Typography variant="h6" component="p">{status.label}</Typography>
                                  </Grid>
                                </Grid>
                                </CardContent>
                                <CardActions>
                                  <Button size="small">Learn More</Button>
                                </CardActions>
                              </Card>
                            )
                        }
                    })
                  }
                </div>
              </Grid>
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