import { history } from '../store';
import { getUserLoginDetail, userLogOut } from './api-helpers/user';

export const checkUserLogin = async (user, location) => {
  if (!user.loading && !user.data) {
    history.push(`/login?redirectUrl=${location.pathname}`);
  }
  if (!user.loading && user.data) {
    const isUserLoggedIn = await getUserLoginDetail();
    if (!isUserLoggedIn) {
      const logOutRespond = await userLogOut();
      if (logOutRespond.ok) {
        if (logOutRespond.data.status) {
          localStorage.clear();
          window.location.href = `/login?redirectUrl=${location.pathname}`;
        }
      } else {
        if (logOutRespond.status === 401) {
          localStorage.clear();
          window.location.href = '/login';
        }
        console.error('مشکلی پیش آمده است لطفا مجدد اقدام نمایید.');
      }
    }
  }
};
