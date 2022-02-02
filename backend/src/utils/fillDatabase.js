const { categories } = require("../mockups/categories.json");
const { axiosPost } = require("./axios");
const { baseURL } = process.env;

module.exports = {
  loadMockCategories: async function () {
    try {
      for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        await axiosPost(`${baseURL}/categories`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
