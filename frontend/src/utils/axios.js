import axios from "axios";

const instanceAxiosPost = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  method: "POST",
});
const instanceAxiosGet = axios.create({
  baseURL: process.env.REACT_APP_BACKEND,
  method: "GET",
  headers: {
    token: localStorage.getItem("token"),
  },
});

export const axiosPost = async (config) => {
  const data = await instanceAxiosPost(config);
  return data.data;
};
export const axiosGet = async (config) => {
  const data = await instanceAxiosGet(config);
  return data.data;
};
