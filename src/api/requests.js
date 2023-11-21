import api from './apiRoot';

export const fetchData = async (config) => {
  const {
    uri,
    headers,
    setDataFunc,
    setTotalCount,
    showNotification,
    logout,
    params,
  } = config;

  // const queryParams = new uri.URLSearchParams(params);

  try {
    const response = await api.get(uri, { params, headers });
    typeof setDataFunc === 'function' && setDataFunc(response.data);
    typeof setTotalCount === 'function' &&
      setTotalCount(response.headers['x-total-count']);
  } catch (err) {
    // console.log('ERROR', err);

    // showNotification('Network connection error', 'error');
    if (!err.response) {
      if (err.code) showNotification(`${err?.message}`, 'error');
    } else if (err.response?.status === 404) {
      showNotification('Data not found', 'error');
    } else if (err.response?.status === 401) {
      if (!localStorage.getItem('accessToken')) {
        showNotification('Unauthorized Access. Please log back in', 'error');
        localStorage.clear();
      } else {
        return;
      }
    } else {
      showNotification('Data Collection failure', 'error');
    }
  }
};

export const createData = (config) => {
  const {
    uri,
    data,
    headers,
    showNotification,
    notificationString,
    navigateBack,
    logOut,
  } = config;
  api
    .post(uri, data, headers)
    .then(() => {
      showNotification(`${notificationString}`, 'success');
      typeof navigateBack === 'function' && navigateBack();
    })
    .catch((err) => {
      if (!err?.response) {
      } else if (err.response?.status === 404) {
        showNotification('Data Creation Failed', 'error');
      } else if (err.response?.status === 401) {
        if (!localStorage.getItem('accessToken')) {
          showNotification('Unauthorized Access. Please log back in', 'error');
          localStorage.clear();
        }
      } else {
        showNotification('Data Error', 'error');
      }
    });
  // .finally((response) => response === 200 && navigateBack());
};

export const updateData = (config) => {
  const {
    uri,
    data,
    headers,
    showNotification,
    notificationString,
    navigateBack,
    logOut,
  } = config;
  api
    .put(uri, data, headers)
    .then(() => {
      showNotification(`${notificationString}`, 'success');
      typeof navigateBack === 'function' && navigateBack();
    })
    .catch((err) => {
      if (!err?.response) {
      } else if (err.response?.status === 404) {
        showNotification('Data Creation Failed', 'error');
      } else if (err.response?.status === 401) {
        if (!localStorage.getItem('accessToken')) {
          showNotification('Unauthorized Access. Please log back in', 'error');
          localStorage.clear();
        }
      } else {
        showNotification('Data Creation Failed', err);
      }
    });
  // .finally((response) => response === 200 && navigateBack());
};

export const deleteData = async (config) => {
  const { uri, goBackFunction } = config;
  await api.delete(`${uri}`);
  alert('Item deleted!');
  goBackFunction();
};
