import axios from "axios";
import { getAccessTokenFromStorage } from "../services/auth";

const accessToken = getAccessTokenFromStorage() || "";

const axiosClient = accessToken
  ? axios.create({
      baseURL: "http://127.0.0.1:8000/",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
  : axios.create({
      baseURL: "http://127.0.0.1:8000/",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export function setTokenRequestHeader(accessToken?: string) {
  axiosClient.defaults.headers.common.authorization = `Bearer ${accessToken}`;
}

export default axiosClient;
