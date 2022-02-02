const axios = require("axios");
axios.default.baseURL = process.env.baseURL;

module.exports = {
  axiosGet: async function (url) {
    const result = await axios.get(url);
    return result.data;
  },
  axiosPost: async function (url, body) {
    const result = await axios.post(url, body);
    return result.data;
  },
};
