import { getProductsDAL } from "../DataAccessLayer/products";

const getProductsSL = async () => {
  try {
    const products = await getProductsDAL();
    return products;
  } catch (err) {
    return err;
  }
};

export { getProductsSL };
