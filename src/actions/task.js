import * as taskApis from './../apis/task';
import * as taskContants from './../constants/task';
//Kiểm tra xem nó có gọi API đc hay không
//Ko cài redux-thunk bị lỗi nhé
export const fetchListTask = () => {
  return {
    type: taskContants.FETCH_TASK,
  };
};

export const fetchListTaskSuccess = data => {
  return {
    type: taskContants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListTaskFailed = error => {
  return {
    type: taskContants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const fetchListTaskRequest = () => {
  return dispatch => {
    dispatch(fetchListTask());
    taskApis
      .getList()
      .then(resp => {
        // lấy data từ debugger.json
        const { data } = resp;
        dispatch(fetchListTaskSuccess(data));
        console.log('data: ', data);
      })
      .catch(error => {
        dispatch(fetchListTaskFailed(error));
        console.log('error: ', error);
      });
  };
};
