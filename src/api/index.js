import API_CONFIG from './api_url';
import axios from 'react-native-axios';

export const callApi = (path, body, method, token, headerParams) => {
  let headers = {
    'Content-Type': 'application/json',
  };
  if (token != null) {
    headers.Authorization = 'Bearer ' + token;
  }
  headers = {
    ...headers,
    ...headerParams,
  };
  // console.log('headers: ', headers);
  const url = [API_CONFIG.BASE_URL, path].join('/');
  if (method === API_CONFIG.GET) {
    return axios
      .get(url, {headers})
      .then(response => {
        return {body: response};
      })
      .catch(error => {
        const errorJson = error.response;
        return {body: errorJson};
      });
  } else if (method === API_CONFIG.POST) {
    return axios
      .post(url, body, {headers})
      .then(response => {
        return {body: response};
      })
      .catch(error => {
        const errorJson = error.response;
        return {body: errorJson};
      });
  } else if (method === API_CONFIG.PUT) {
    return axios
      .put(url, body, {headers})
      .then(response => {
        return {body: response};
      })
      .catch(error => {
        const errorJson = error.response;
        return {body: errorJson};
      });
  } else if (method === API_CONFIG.DELETE) {
    return axios
      .delete(url, {headers})
      .then(response => {
        return {body: response};
      })
      .catch(error => {
        const errorJson = error.response;
        return {body: errorJson};
      });
  } else if (method === API_CONFIG.IMAGE_UPLOAD) {
    try {
      return axios({
        url: url,
        method: 'POST',
        data: body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: 'Bearer ' + token,
        },
      })
        .then(response => {
          return {body: response};
        })
        .catch(error => {
          const errorJson = error.response;
          return {body: errorJson};
        });
    } catch (e) {
      console.log('Error', JSON.stringify(e));
    }
  }
};
