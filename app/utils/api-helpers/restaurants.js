import {
  RESTAURANT_FETCH_ERROR,
  RESTAURANT_FETCH_LOADING,
  RESTAURANT_FETCH_SUCCEED,
} from '../../constants/restaurants';
import { dispatchRestaurantList } from '../../actions/restaurants';
import fetchHelper from './fetch-helper';

export const dispatchRestaurantInfo = async dispatch => {
  const url = `${process.env.APP_BASE_URL}/panel/profile`;
  const config = {
    method: 'GET',
  };
  const types = {
    loading: RESTAURANT_FETCH_LOADING,
    succeed: RESTAURANT_FETCH_SUCCEED,
    error: RESTAURANT_FETCH_ERROR,
  };
  dispatch(dispatchRestaurantList(url, config, types));
};

export const getRestaurantInformation = async id => {
  const url = `${process.env.APP_BASE_URL}/panel/mainData?id=${id}`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const getRestaurantReport = async id => {
  const url = `${process.env.APP_BASE_URL}/restaurant/restaurantReport/${id}`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const getRestaurantStatistics = async id => {
  const url = `${process.env.APP_BASE_URL}/panel/restaurantStatistics?id=${id}`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const getRestaurantFoods = async id => {
  const url = `${process.env.APP_BASE_URL}/food?id=${id}`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const changeFoodStatus = async (foodId, foodStatus, hash) => {
  const url = `${process.env.APP_BASE_URL}/food/changeFoodStatus`;
  const config = {
    method: 'PUT',
    body: JSON.stringify({
      foodId,
      foodStatus,
      hash,
    }),
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const changeCategoryStatus = async (tagId, foodStatus, hashed) => {
  const url = `${process.env.APP_BASE_URL}/food/changeFoodsStatusWithTagId`;
  const config = {
    method: 'PUT',
    body: JSON.stringify({
      tagId,
      foodStatus,
      hashed,
      restaurantId: hashed,
    }),
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};

export const getRestaurantDeliveryZoneList = async id => {
  const url = `${
    process.env.APP_BASE_URL
  }/delivery-zone/deliveryZoneList/${id}`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};
