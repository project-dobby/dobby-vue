import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://dobby.work';

const getOption = (method, url, data, options = {}) => ({
  baseURL: BASE_URL,
  method,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  url,
  data: qs.stringify(data),
  transformResponse: response => JSON.parse(response),
  ...options,
});

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default {
  get: (url, data, options) => axios(getOption('GET', url, data, options)),
  post: (url, data, options) => axios(getOption('POST', url, data, options)),
};
