const fetchHelper = async (fetch, path, config) => {
  let respData;
  const options = {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  const resp = await fetch(path, options);
  let contentType;
  if (resp.headers) {
    contentType = resp.headers.get('content-type');
  }
  if (contentType && contentType.includes('application/json')) {
    respData = await resp.json();
  } else {
    respData = { message: resp.text() };
  }
  return {
    ok: resp.ok,
    status: resp.status,
    data: respData,
  };
};

export default fetchHelper;
