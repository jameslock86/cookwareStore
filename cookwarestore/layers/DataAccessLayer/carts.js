import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const cartCollection = "carts";

/*Make changes to database */
const addUsersCartDAL = async (cart) => {
  const { userId, products } = cart;
  return new Promise(async (resolve, reject) => {
    await db
      .collection(cartCollection)
      .insertOne({ userId, products: products || [] }, (err, results) => {
        if (err) reject(err);
        resolve(results.ops[0]);
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
      { returnDocument: "after" },
      (err, res) => {
        if (err) reject(err);
        resolve(res.value);
      }
    );
  });
};

const deleteUsersProductsDAL = async (id) => {
  return new Promise(async (resolve, reject) => {
    const _id = ObjectId(id);
    await db
      .collection(cartCollection)
      .findOneAndDelete({ _id }, (err, results) => {
        if (err) reject(err);
        resolve(results.value);
      });
  });
};

/*Checks before making changes to database*/
const checkUsersCartExistDAL = async (userId) => {
  return new Promise(async (resolve, reject) => {
    await db.collection(cartCollection).findOne({ userId }, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

/*Retrieve data from database*/
const getUsersCartDAL = async (id) => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection(cartCollection)
      .findOne({ userId: id }, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
  });
};
export {
  addUsersCartDAL,
  updateUsersCartDAL,
  deleteUsersProductsDAL,
  checkUsersCartExistDAL,
  getUsersCartDAL,
};
