//endpoint to get, update, or delete a product
//http://localhost:3000/api/products/productId
import { getProductByIdSL } from "../../../layers/ServiceLayer/products";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return getProductById(req, res);
    default:
      return res.json({
        msg: "GET request only",
      });
  }
};

const getProductById = async (req, res) => {
  try {
    const { productId } = req.query;
    const product = await getProductByIdSL(productId);
    res.status(200).json(product);
  } catch (err) {
    console.log("err", err);
  }
};
