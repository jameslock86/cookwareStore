import { getProductsDAL } from "../DataAccessLayer/products";

const getProductsSL = async () => {
  try {
    const products = await getProductsDAL();
    return products;
  } catch (err) {
    console.log("err", err.message);
  }
};

export { getProductsSL };
