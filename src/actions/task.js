import * as taskApi from './../apis/task';
export const fetchListTask = () => {
	return (dispatch) => {
		taskApi.getList().then((data)=> {
			console.log(data);
		}).catch((error)=> {
			console.log(error);
		});
	}
}