import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const cartCollection = "carts";

/*Make changes to database */
const addCartDAL = async (cart) => {
  return new Promise(async (resolve, reject) => {
    let productIds = {};
    cart.products.forEach(({ productId, quantity, price }) => {
      productIds[productId] = { quantity, price };
    });
    console.log("productIds", productIds);
    await db
      .collection(cartCollection)
      .insertOne({ userId: cart.userId }, (err, results) => {
        if (err) reject(err);
        resolve(results.ops[0]);
      });
  });
};

/*Checks before making changes to database*/
const checkIfCartExist = async (userId) => {
  return new Promise(async (resolve, reject) => {
    const DBCart = db.collection(cartCollection).findOne({ userId });
    if (DBCart) {
      resolve(DBCart);
    } else {
      reject(false);
    }
  });
};

/*Retrieve data from database*/
const getProductsFromCart = async (userId) => {
  const cart = await db.collection(cartCollection).findOne({ userId });
  const products = cart.products;
  return products;
};
export {
  addCartDAL,
  // addProductDAL,
  // addQuantityDAL,
  checkIfCartExist,
  // checkIfProductExistInCart,
  // checkQuantityOfProductInCart,
  getProductsFromCart,
};
