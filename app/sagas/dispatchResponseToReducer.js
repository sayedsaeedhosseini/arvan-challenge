import { put, takeEvery } from 'redux-saga/effects';
import fetchHelper from '../utils/api-helpers/fetch-helper';

function* DispatchResponseToReducer(payload) {
  const { url, config, types } = payload.payload;
  const options = {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  yield put({
    type: types.loading,
    payload: { loading: true, succeed: false, error: false, data: null },
  });
  const resp = yield fetchHelper(fetch, url, options);
  if (!resp.ok) {
    yield put({
      type: types.error,
      payload: {
        loading: false,
        succeed: false,
        error: false,
        data: resp.data,
      },
    });
    return;
  }
  yield put({
    type: types.succeed,
    payload: { loading: false, succeed: true, error: false, data: resp.data },
  });
}

export default function* dispatchResponseToReducer() {
  yield takeEvery(`DISPATCH_TO_REDUCER`, DispatchResponseToReducer);
}
