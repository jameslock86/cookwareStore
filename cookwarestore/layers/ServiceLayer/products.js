import {
  getAllProductsDAL,
  getProductByIdDAL,
} from "../DataAccessLayer/products";

const getAllProductsSL = async () => {
  try {
    const products = await getAllProductsDAL();
    return products;
  } catch (err) {
    console.log("err", err.message);
  }
};

const getProductByIdSL = async (productId) => {
  try {
    const product = await getProductByIdDAL(productId);
    return product;
  } catch (err) {
    console.log("err", err.message);
  }
};

export { getAllProductsSL, getProductByIdSL };
