import { all } from 'redux-saga/effects';
import locationMiddleware from './locationMiddleware';
import dispatchResponseToReducer from './dispatchResponseToReducer';

export default function* rootSaga() {
  yield all([locationMiddleware(), dispatchResponseToReducer()]);
}
