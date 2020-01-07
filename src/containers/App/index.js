import React, { Component, } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import {STATUSES} from './../../constants';
import Typography from '@material-ui/core/Typography';
import TaskList from './../../components/TaskList';
import TaskForm from './../../components/TaskForm';
import { Provider } from 'react-redux';
import configureStore from './../../redux/configureStore';
const store = configureStore();
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
  renderForm() {
    var {open} = this.state;
    let xhtml = null;
    xhtml = <TaskForm handleClose={this.handleClose} open={open} />
    return xhtml;
  }
  render() {
    var {classes} = this.props;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}
export default withStyles(styles)(App);