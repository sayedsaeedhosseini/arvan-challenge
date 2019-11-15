import fetchHelper from './fetch-helper';
import {
  dispatchUserInfoAction,
  dispatchUserLoginErrorAction,
  dispatchUserLoginLoadingAction,
} from '../../actions/user';
import {
  USER_FETCH_LOADING,
  USER_FETCH_SUCCEED,
  USER_FETCH_ERROR,
} from '../../constants/user';

export const requestUserLogin = async userInfo => {
  const url = `${process.env.APP_BASE_URL}/user/login`;
  const config = {
    method: 'POST',
    body: JSON.stringify(userInfo),
  };
  const resp = await fetchHelper(fetch, url, config);
  return {
    status: resp.status,
    ok: resp.data.status,
  };
};

export const dispatchUserInfo = async (dispatch, userInfo) => {
  const url = `${process.env.APP_BASE_URL}/user/getUserInfo`;
  const config = {
    method: 'POST',
  };
  const types = {
    loading: USER_FETCH_LOADING,
    succeed: USER_FETCH_SUCCEED,
    error: USER_FETCH_ERROR,
  };
  dispatch(dispatchUserLoginLoadingAction());
  const isUserLoggedIn = await requestUserLogin(userInfo);
  if (isUserLoggedIn.status === 500) {
    dispatch(
      dispatchUserLoginErrorAction('مشکلی پیش آمده لطفا بعدا تلاش نمایید'),
    );
  }
  if (!isUserLoggedIn.ok) {
    dispatch(
      dispatchUserLoginErrorAction(
        'ایمیل یا رمز عبور شما اشتباه است , در صورت لزوم با پشتیبانی تماس بگیرید',
      ),
    );
  } else {
    dispatch(dispatchUserInfoAction(url, config, types));
  }
  return null;
};

export const getUserLoginDetail = async () => {
  const url = `${process.env.APP_BASE_URL}/user/getUserInfo`;
  const config = {
    method: 'POST',
  };
  const response = await fetchHelper(fetch, url, config);
  return response.ok;
};

export const userLogOut = async () => {
  const url = `${process.env.APP_BASE_URL}/user/panelLogout`;
  const config = {
    method: 'GET',
  };
  const respond = await fetchHelper(fetch, url, config);
  return {
    ok: respond.ok,
    status: respond.status,
    data: respond.data,
  };
};
