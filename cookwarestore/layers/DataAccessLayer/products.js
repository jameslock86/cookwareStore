import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const productCollection = "products";

/*Make changes to database */

/*Retrieve data from database*/
const getProductsDAL = async () => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection(productCollection)
      .find({})
      .toArray((err, results) => {
        if (err) reject(err);
        resolve(results);
      });
  });
};

/*Checks before making changes to database*/
const checkIfProductExistDAL = async (title) => {
  return new Promise(async (resolve, reject) => {
    await db
      .collection(productCollection)
      .findOne({ title }, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
  });
};
export { getProductsDAL, checkIfProductExistDAL };
