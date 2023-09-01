import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

// instance.interceptors.request.use(
//   (config: AxiosRequestConfig): AxiosRequestConfig => {
//     config.headers = {
//       Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
//     };
//     return config;
//   },
//   (error: AxiosError): Promise<AxiosError> => {
//     return Promise.reject(error);
//   },
// );

export default instance;
