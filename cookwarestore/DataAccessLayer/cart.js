import { connectToDatabase } from "../lib/mongodb";

const { db } = await connectToDatabase();
const cartCollection = "carts";
/*Make changes to database */
const addCartDAL = async (cart) => {
  // return new Promise(async (resolve, reject) => {
  //   await db.collection(collection).insert({ cart }, (err, results) => {
  //     if (err) console.log("err", err);
  //     console.log("results", results);
  //   });
  // });
};
const addProductDAL = async () => {};
const addQuantityDAL = async () => {};

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

const checkIfProductExistInCart = async (productId) => {};
const checkQuantityOfProductInCart = async (quantity) => {};
export {
  addCartDAL,
  addProductDAL,
  addQuantityDAL,
  checkIfCartExist,
  checkIfProductExistInCart,
  checkQuantityOfProductInCart,
};
