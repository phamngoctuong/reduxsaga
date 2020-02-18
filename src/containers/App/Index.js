import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import theme from '../../commons/Theme/Index.js'; //Import thằng CSS dùng chung chung
import configureStore from '../../redux/configureStore';
import TaskBoard from '../Taskboard/Index.js';
import styles from './styles.js';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

class App extends Component {
  render() {
    console.log('props ', this.props); //Kiểm tra xem có import đc css qua chưa
    // const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <TaskBoard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App); //Chỉ là bước kết nối css và app
