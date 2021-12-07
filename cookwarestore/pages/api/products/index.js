//http://localhost:3000/api/products
import { getAllProductsSL } from "../../../layers/ServiceLayer/products";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return getAllProducts(req, res);
    default:
      return res.json({
        msg: "GET request only",
      });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsSL();
    res.status(200).json(products);
  } catch (err) {
    console.log("err", err.message);
  }
};
