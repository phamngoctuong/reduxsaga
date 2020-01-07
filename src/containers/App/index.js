import React, { Component, } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import TaskBoard from './../TaskBoard';
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
  render() {
    var {open} = this.state;
    return (
      <Provider store={store}>
        <TaskBoard open={open} handleClose={this.handleClose} openTask={this.openTask}/>
      </Provider>
    );
  }
}
export default withStyles(styles)(App);