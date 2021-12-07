import { getProductsSL } from "../../../../layers/ServiceLayer/products";
export default async (req, res) => {
  console.log("req", req.query);
  const productList = await getProductsSL();
};
