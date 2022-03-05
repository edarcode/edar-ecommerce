import axios from "axios";

const instanceAxiosPost = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  method: "POST",
  headers: {
    token: localStorage.getItem("token"),
  },
});
const instanceAxiosGet = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  method: "GET",
  headers: {
    token: localStorage.getItem("token"),
  },
});
const instanceAxiosPut = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  method: "PUT",
});

export const axiosPost = async (config) => {
  const data = await instanceAxiosPost(config);
  return data.data;
};
export const axiosGet = async (config) => {
  const data = await instanceAxiosGet(config);
  return data.data;
};
export const axiosPut = async (config) => {
  const data = await instanceAxiosPut(config);
  return data.data;
};
