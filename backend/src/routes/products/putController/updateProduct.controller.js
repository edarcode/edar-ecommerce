const { Product } = require("../../../db");
const { createImages } = require("../utils/createImages");

const updateProduct = async (req, res, next) => {
  try {
    const {
      id,
      name,
      description,
      price,
      purchasePrice,
      stock,
      discount,
      urls,
      suppliers,
      categories,
    } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      res.json({ msg: "Not found" });
    } else {
      await product.update({
        name,
        description,
        price,
        purchasePrice,
        stock,
        discount,
      });
      await product.save();
      const images = await createImages(urls);
      if (images) await product.setImages(images);
      if (suppliers) await product.setSuppliers(suppliers);
      if (categories) await product.setCategories(categories);
      res.json({ msg: "Updated successfully" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = updateProduct;
