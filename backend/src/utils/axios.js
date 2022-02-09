const Axios = require("axios");

const axiosPost = Axios.create({
  baseURL: process.env.baseURL,
  method: "POST",
});

module.exports = {
  axiosPost: async (config) => {
    const result = await axiosPost(config);
    return result.data;
  },
};
