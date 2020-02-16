import * as taskConstants from './../constants/task';
// import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK: {
      return {
        ...state,
        listTask: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;
