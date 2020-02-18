import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators } from 'redux';
import TaskForm from '../../components/TaskForm/Index';
import TaskList from '../../components/TaskList/Index';
import { STATUSES } from '../../constants/Index';
import * as taskActions from './../../actions/task';
import styles from './styles';

//Giả lập lúc đầu thôi giờ thì đã có API rồi
// const listTask = [
//   {
//     id: 1,
//     title: 'Read book',
//     description: ' Read material ui book',
//     status: 0,
//   },
//   {
//     id: 2,
//     title: 'Play Badminton',
//     description: 'With my Nigga',
//     status: 2,
//   },
//   {
//     id: 3,
//     title: 'Yoga',
//     description: 'In free time',
//     status: 1,
//   },
// ];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount() {
    const { taskActionCreators } = this.props;
    const { fetchListTaskRequest } = taskActionCreators;
    //Gọi từ thằng actions/task và đặt tên nó là taskActionCreators
    fetchListTaskRequest();
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    const { listTask } = this.props;
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {/* Đây là phương pháp sử dụng vòng lập  */}
        {STATUSES.map(status => {
          // lọc ra xem status số nào tương ứng với value bên kia
          const taskFiltered = listTask.filter(
            task => task.status === status.value,
          );
          // key={index} cũng được
          return (
            <TaskList key={status.value} tasks={taskFiltered} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  //Bảng hiễn thị thông báo
  showToast = () => {
    toast.success('Thành công');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> THÊM MỚI CÔNG VIỆC
        </Button>
        <Box ml="1">
          <Button variant="contained" color="primary" onClick={this.showToast}>
            HIỂN THỊ THÔNG BÁO
          </Button>
        </Box>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}
// Chỉ để nó ko báo lỗi trong eslint thôi
TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionCreators: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = state => {
  return {
    listTask: state.task.listTask, //Ra ngoài Redux devtool xem state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    //Bên trái chỉ là cái props do ta đặt tên thôi
    taskActionCreators: bindActionCreators(taskActions, dispatch),
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TaskBoard),
);
