import { all, fork, takeEvery } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([fork(locationChange)]);
}
let prevLocation = null;
export function* locationChange() {
  yield takeEvery('@@router/LOCATION_CHANGE', locationChangeHandler);
}
export const getVenueCheckout = state => state.router.location;
export function* locationChangeHandler({ payload }) {
  if (prevLocation !== payload.location.pathname) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }
  prevLocation = payload.location.pathname;
}
