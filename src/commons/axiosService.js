import axios from 'axios';

class AxiosService {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess, this.handleError);
    //Vì instance tạo trong constructor nên thằng get(url) gọi sẽ ko hiểu đc
    this.instance = instance; //cho nên ta phải gán như này
  }

  //Thành công thì
  handleSuccess(response) {
    return response;
  }

  //Thất bại thì
  handleError(error) {
    return Promise.reject(error);
  }

//Lấy link url

  get(url) {
    return this.instance.get(url);
  }
}
//new là khởi tạo và nó sẽ chạy constructor đầu tiên
export default new AxiosService();
