import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const cartCollection = "carts";

/*Make changes to database */
const addCartDAL = async (cart) => {
  const { userId, products } = cart;
  return new Promise(async (resolve, reject) => {
    await db
      .collection(cartCollection)
      .insertOne({ userId, products }, (err, results) => {
        if (err) reject(err);
        resolve(results.ops[0]);
      });
  });
};

const updateUsersCartDAL = async (cartId, products) => {
  return new Promise(async (resolve, reject) => {
    let result = await db.collection(cartCollection).update(
      {
        cartId,
      },
      {
        $set: {
          products: products,
        },
      }
    );

    if (result.result.ok === 1) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

/*Checks before making changes to database*/
const checkIfCartExistDAL = async (userId) => {
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
const getProductsFromCartDAL = async (userId) => {
  const cart = await db.collection(cartCollection).findOne({ userId });
  const products = cart.products;
  return products;
};

const getUsersCartDAL = async (cartId) => {
  const dbCart = await db.collection(cartCollection).findOne({ cartId });
  return dbCart;
};
export {
  addCartDAL,
  updateUsersCartDAL,
  checkIfCartExistDAL,
  // checkIfProductExistInCart,
  // checkQuantityOfProductInCart,
  getProductsFromCartDAL,
  getUsersCartDAL,
};
