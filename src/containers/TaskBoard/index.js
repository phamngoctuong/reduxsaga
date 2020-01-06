import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {STATUSES} from './../constants';
class TaskBoard extends Component {
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status,index)=> {
            return (
              <Grid key={index} item md={4}>{status.label}</Grid>
            )
          })
        }
      </Grid>
    );
    return xhtml;
  }
  render() {
    const {classes} = this.props;
    return (
      <Container maxWidth="md">
        <div className="classes.taskBoard">
          <Button variant="contained" color="primary"><AddIcon/>&nbsp;Thêm công việc</Button>
        </div>
        {this.renderBoard()}
      </Container>
    );
  }
}
export default withStyles(styles)(TaskBoard);