import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../lib/mongodb";

const { db } = await connectToDatabase();
const productCollection = "products";

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

export { getProductsDAL };
