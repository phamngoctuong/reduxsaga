import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  openTask = () => {
    this.setState({
      open: true
    })
  }
  render() {
    var { classes } = this.props;
    var { open } = this.state;
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <div className="App">
            <Button variant="contained" color="primary" onClick={this.openTask}><AddIcon/>&nbsp;Thêm công việc mới</Button>
            <Box component="div" mt={2}>
              <Grid container className={classes.root} spacing={1}>
                <Grid item md={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item lg={6}>
                          <Typography component="h2" className={classes.title} color="textSecondary">
                            PLAYGAME
                          </Typography>
                        </Grid>
                        <Grid item lg={6}>
                          <Typography component="h3" className={classes.title} color="textSecondary">
                            START
                          </Typography>
                        </Grid>
                        <Grid item lg={12}>
                          <Typography className={classes.title} color="textSecondary">
                            Play with my Friend
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions className={classes.CardAction}>
                      <Button variant="contained" size="small" color="primary"><EditIcon />&nbsp;Edit Task</Button>
                      <Button variant="contained" size="small" color="secondary"><EditIcon />&nbsp;Delete Task</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item lg={6}>
                          <Typography component="h2" className={classes.title} color="textSecondary">
                            PLAY FOOTBALL
                          </Typography>
                        </Grid>
                        <Grid item lg={6}>
                          <Typography component="h3" className={classes.title} color="textSecondary">
                            INPROCESS
                          </Typography>
                        </Grid>
                        <Grid item lg={12}>
                          <Typography className={classes.title} color="textSecondary">
                            Play with my Friends
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions className={classes.CardAction}>
                      <Button variant="contained" size="small" color="primary"><EditIcon />&nbsp;Edit Task</Button>
                      <Button variant="contained" size="small" color="secondary"><EditIcon />&nbsp;Delete Task</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Grid container spacing={1}>
                        <Grid item lg={6}>
                          <Typography component="h2" className={classes.title} color="textSecondary">
                            SING A SONG
                          </Typography>
                        </Grid>
                        <Grid item lg={6}>
                          <Typography component="h3" className={classes.title} color="textSecondary">
                            COMPLATE
                          </Typography>
                        </Grid>
                        <Grid item lg={12}>
                          <Typography className={classes.title} color="textSecondary">
                            Sing with my Friends
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions className={classes.CardAction}>
                      <Button variant="contained" size="small" color="primary"><EditIcon />&nbsp;Edit Task</Button>
                      <Button variant="contained" size="small" color="secondary"><EditIcon />&nbsp;Delete Task</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Container>
        <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Thêm công việc mới
          </DialogTitle>
          <DialogContent dividers>
            <Grid container>
              <Grid item lg={12}>
                <TextField id="standard-helperText" fullWidth label="Name" className={classes.textfield} />
              </Grid>
              <Grid item lg={12}>
                <TextField id="standard-multiline-flexible" fullWidth className={classes.textfield} label="Multiline" multiline rowsMax="4"/>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" autoFocus onClick={this.handleClose} color="secondary">Cancel</Button>
            <Button variant="contained" autoFocus onClick={this.handleClose} color="primary">Oke</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(App);