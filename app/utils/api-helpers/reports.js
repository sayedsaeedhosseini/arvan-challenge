import fetchHelper from './fetch-helper';

export const getSettlementsTableData = async (id, page = 1) => {
  const url = `${
    process.env.APP_BASE_URL
  }/restaurantInvoice/list?restaurantId=${id}&page=${page}`;
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

export const getOrdersTableData = async (id, page = 1) => {
  const url = `${
    process.env.APP_BASE_URL
  }/order/report?restaurantId=${id}&page=${page}`;
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

export const getOrdersList = async id => {
  const url = `${
    process.env.APP_BASE_URL
  }/restaurantInvoice/orders?invoiceId=${id}`;
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

export const getSettlementsList = async id => {
  const url = `${
    process.env.APP_BASE_URL
  }/restaurantInvoice/orderCorrections?invoiceId=${id}`;
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

export const getOrderDetail = async id => {
  const url = `${
    process.env.APP_BASE_URL
  }/order/detailForInvoice?orderId=${id}`;
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
