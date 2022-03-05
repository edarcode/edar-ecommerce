const { categories } = require("../mockups/categories.json");
const { suppliers } = require("../mockups/suppliers.json");
const { products } = require("../mockups/products.json");
const { bills } = require("../mockups/bills.json");
const { axiosPost } = require("./axios");
const createSuperUser = require("./createSuperUser");
const { SUPER_USER_PASSWORD, SUPER_USER_EMAIL } = process.env;

module.exports = {
  loadMockCategories: async function () {
    try {
      for (let i = 0; i < categories.length; i++) {
        const data = categories[i];
        await axiosPost({
          url: "/categories",
          data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockSuppliers: async function () {
    try {
      for (let i = 0; i < suppliers.length; i++) {
        const data = suppliers[i];
        await axiosPost({
          url: "/suppliers",
          data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockProducts: async function () {
    const superUser = {
      email: SUPER_USER_EMAIL,
      password: SUPER_USER_PASSWORD,
    };
    try {
      await createSuperUser(superUser);
      const { token } = await axiosPost({
        url: "/users/signin",
        data: superUser,
      });
      for (let i = 0; i < products.length; i++) {
        const data = products[i];
        await axiosPost({
          url: "/products/admin",
          data,
          headers: { token },
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
  loadMockBills: async function () {
    /* try {
      for (let i = 0; i < bills.length; i++) {
        const data = bills[i];
        await axiosPost({
          url: "/bills",
          data,
        });
      }
    } catch (error) {
      console.log(error);
    } */
  },
};
