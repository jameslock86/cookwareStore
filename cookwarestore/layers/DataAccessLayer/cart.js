import { ObjectId } from "mongodb";
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
        if (err) reject({ err: err, status: false });
        resolve({ response: results.ops[0], status: true });
      });
  });
};

const updateUsersCartDAL = async (cartId, products) => {
  return new Promise(async (resolve, reject) => {
    const id = ObjectId(cartId);
    await db.collection(cartCollection).findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          products: products,
        },
      },
      (err, res) => {
        if (err) reject({ err: err, status: false });
        resolve({ response: res.value, status: true });
      }
    );
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

const getUsersCartDAL = async (id) => {
  const dbCart = await db.collection(cartCollection).findOne({ userId: id });
  return dbCart;
};
export {
  addCartDAL,
  updateUsersCartDAL,
  checkIfCartExistDAL,
  getProductsFromCartDAL,
  getUsersCartDAL,
};
