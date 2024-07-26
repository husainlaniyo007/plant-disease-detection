import { createStore, combineReducers } from 'redux';
import imageReducer from './reducers/imageReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  images: imageReducer,
  user: userReducer
});

const store = createStore(rootReducer);

export default store;

