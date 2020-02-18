import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './../reducers';
import thunk from 'redux-thunk';

//Lưu ý ? : ở dưới là if else đấy (Toán tử ba ngôi)
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  //KIểm tra và tích hợp redux devtool
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose; //Ngược lại return để format code


//Viết hàm configureStore để tạo ra store
const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  return store;
};

export default configureStore;
