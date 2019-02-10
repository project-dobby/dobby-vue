import axios from 'axios';

const BASE_URL = 'http://dobby.work';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

// https://github.com/axios/axios
// axios.get(url[, config])
// axios.post(url[, data[, config]])
export default instance;
