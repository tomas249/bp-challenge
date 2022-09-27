import axios, { AxiosResponse, AxiosError } from "axios";

axios.defaults.withCredentials = false;
axios.defaults.timeout = 5000;

// Good place to add interceptors for error handling
// axios.interceptors.response.use(
//   (response) => {},
//   (error) => {}
// );

const responseHandler = (response: AxiosResponse) => response.data;

const errorHandler = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    throw new Error(JSON.stringify(error.response?.data) || "API Error");
  } else {
    throw error;
  }
};

export const post = (path: string, payload: {}, opt = {}) =>
  axios.post(path, payload, opt).then(responseHandler).catch(errorHandler);

export const get = (path: string, opt = {}) =>
  axios.get(path, opt).then(responseHandler).catch(errorHandler);

// TODO: Add more helpers for other HTTP methods
