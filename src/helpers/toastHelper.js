import { toast } from 'react-toastify';

export const toastError = error => {
  let message = null;
  if (typeof error === 'object' && error.message){
    //message = error.message; //Thay vì viết như vậy
    ({ message } = error); //Eslint bắt ta phải viết theo ES6
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};
