const Product = require("../model/Product");
const ProductStat = require("../model/ProductStats");
const Users = require("../model/User");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    // Getting all the product and their stats in a single array.
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCustomers = async (req, res) => {
  try {
    const costumers = await Users.find({ role: "user" }).select("-password");
    res.status(200).json(costumers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getCustomers,
};
