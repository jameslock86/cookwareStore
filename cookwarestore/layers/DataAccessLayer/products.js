import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const product = "products";

const getAllProductsDAL = async () => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection(product)
      .find({})
      .toArray((err, results) => {
        if (err) reject(err);
        resolve(results);
      });
  });
};

const getProductByIdDAL = async (productId) => {
  const id = ObjectId(productId);
  return new Promise(async (resolve, reject) => {
    await db.collection(product).findOne({ _id: id }, (err, result) => {
      if (err) reject(err);
      console.log("results", result);
      resolve(result);
    });
  });
};

export { getAllProductsDAL, getProductByIdDAL };
