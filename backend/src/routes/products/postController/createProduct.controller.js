const { Product } = require("../../../db");
const { createImages } = require("../utils/createImages");

const createProduct = async (req, res, next) => {
  const {
    name,
    description,
    purchasePrice,
    price,
    stock,
    urls,
    suppliers,
    categories,
  } = req.body;
  try {
    const [product, created] = await Product.findOrCreate({
      where: { name },
      defaults: { description, purchasePrice, price, stock },
    });
    if (!created) {
      res.json({ msg: "Already exists" });
    } else {
      const images = await createImages(urls);
      //establecer relaciones del producto
      await product.setImages(images);
      await product.setSuppliers(suppliers);
      await product.setCategories(categories);
      res.json({ msg: "Created successfully" });
    }
  } catch (error) {
    await Product.destroy({ where: { name } });
    next(error);
  }
};

module.exports = createProduct;
