import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const cartCollection = "carts";
const quantity = 1;

const productId = "617991452618020f8c59acf7";

/*Make changes to database */
const addUsersCartDAL = async (cart) => {
  const { userId } = cart;

  const id = ObjectId(userId);
  return new Promise(async (resolve, reject) => {
    console.log("userId", userId);
    //add product to cart
    const cartUpdate = await db.collection(cartCollection).update(
      {
        _id: "618c30da7c373656045a5054",
        // status: "active",
      },
      {
        $set: { modified_on: new Date() },
        $push: {
          products: {
            _id: productId,
            quantity: quantity,
            name: "Simsong Mobile",
            price: 1000,
          },
        },
      },
      true
    );
    console.log("hitting carts collection", cartUpdate.result);
    //reserve the quantity to ensure the is inventory to cover the customers request
    const productsUpdate = await db.collection("products").update(
      {
        _id: productId,
        quantity: { $gte: quantity },
      },
      {
        $inc: { quantity: -quantity },
        $push: {
          reserved: {
            quantity: quantity,
            id: userId,
            created_on: new Date(),
          },
        },
      }
    );
    console.log("hitting products collection", productsUpdate.result);
  });
  // return new Promise(async (resolve, reject) => {
  //   await db
  //     .collection(cartCollection)
  //     .insertOne({ id, products: products || [] }, (err, results) => {
  //       if (err) reject(err);
  //       resolve(results.ops[0]);
  //     });
  // });
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
