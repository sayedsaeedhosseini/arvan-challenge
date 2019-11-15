import {
  RESTAURANT_FETCH_LOADING,
  RESTAURANT_FETCH_SUCCEED,
  RESTAURANT_FETCH_ERROR,
} from '../constants/restaurants';

const initialState = {
  loading: false,
  succeed: false,
  error: false,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANT_FETCH_LOADING:
      return { ...action.payload };
    case RESTAURANT_FETCH_SUCCEED:
      return { ...action.payload };
    case RESTAURANT_FETCH_ERROR:
      return { ...action.payload };
    default:
      return state;
  }
};
