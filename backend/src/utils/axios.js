const axios = require("axios");

module.exports = {
  axiosGet: async function (url, body = {}) {
    const result = await axios.get(url, body);
    return result.data;
  },
  axiosGetHeader: async function (url, { password, email }) {
    const result = await axios.get(url, {
      headers: { password, email },
    });
    return result.data;
  },
  axiosPost: async function (url, body) {
    const result = await axios.post(url, body);
    return result.data;
  },
};
