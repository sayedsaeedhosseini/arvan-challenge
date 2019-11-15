import { DISPATCH_TO_REDUCER } from '../constants/global';

export const dispatchRestaurantList = (url, config, types) => ({
  type: DISPATCH_TO_REDUCER,
  payload: {
    url,
    config,
    types,
  },
});
