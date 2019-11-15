import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import restaurant from './restaurant';

const rootReducer = history =>
  combineReducers({
    restaurant,
    router: connectRouter(history),
  });
export default rootReducer;
