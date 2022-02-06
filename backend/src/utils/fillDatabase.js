const { categories } = require("../mockups/categories.json");
const { suppliers } = require("../mockups/suppliers.json");
const { products } = require("../mockups/products.json");
const { axiosPost, axiosGetHeader } = require("./axios");
const createSuperUser = require("./createSuperUser");
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
  loadMockSuppliers: async function () {
    try {
      for (let i = 0; i < suppliers.length; i++) {
        const element = suppliers[i];
        await axiosPost(`${baseURL}/suppliers`, element);
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockProducts: async function () {
    const dataSuperUser = { email: "edar@gmail.com", password: "123" };
    await createSuperUser(dataSuperUser);
    try {
      await axiosPost(`${baseURL}/users/signup`, dataSuperUser);
      const { token } = await axiosGetHeader(
        `${baseURL}/users/signin`,
        dataSuperUser
      );
      for (let i = 0; i < products.length; i++) {
        const element = products[i];
        await axiosPost(`${baseURL}/products/admin`, { ...element, token });
      }
    } catch (error) {
      console.log(error);
    }
  },
};
