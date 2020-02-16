import qs from 'query-string';
import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';

// http://localhost:3000/tasks
const url = 'tasks';

export const getList = (params = {}) => {
  return axiosService.get(`${API_ENDPOINT}/${url}`);
};