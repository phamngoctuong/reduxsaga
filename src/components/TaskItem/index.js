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
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
class TaskItem extends Component {
  render() {
    const {classes, status,index, listask} = this.props;
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
          <Typography  component="p">{listask.description}</Typography>
        </Grid>
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Fab color="primary">
            <Icon>edit</Icon>
          </Fab>
          <Fab color="secondary">
            <Icon>add_circle</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}
export default withStyles(styles)(TaskItem);