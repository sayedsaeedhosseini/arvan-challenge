export const convertCssArrayToObject = array => {
  const myArray = array[0].split(';');
  const myObj = {};

  for (let i = 0; i < myArray.length - 1; i += 1) {
    const splittedItem = myArray[i].split(':');
    myObj[splittedItem[0]] = splittedItem[1];
  }
  return myObj;
};

export const extractQueryParams = url => {
  let queryParams = {};
  if (url.includes('?')) {
    let params = url.split('?')[1].split('&');
    params = params.map(param => param.split('='));
    params.map(param => {
      queryParams = {
        ...queryParams,
        [param[0]]: param[1],
      };
      return null;
    });
  }
  return queryParams;
};
