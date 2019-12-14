import { combineReducers } from 'redux';
import login from './login';
import addShop from './addShop';

const rootReducer = combineReducers({
  login,
  addShop,
});

export default rootReducer;
