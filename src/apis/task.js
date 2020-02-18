import axiosServices from './../commons/axiosService';
import { API_ENDPOINT } from './../constants/Index';

// http://localhost:3000/tasks
const url = 'tasks';

export const getList = () => {
  return axiosServices.get(`${API_ENDPOINT}/${url}`);
};
