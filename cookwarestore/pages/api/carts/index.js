import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

const collection = "carts";
export default async function cartsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "POST":
      return addProductToCartDB(req, res, db);
    default:
      return "GET and POST request only";
  }
}

const addProductToCartDB = (req, res, db) => {
  if (req.userId) {
    //add product to cart
  } else {
    //create userId
    const userId = new ObjectId();
    //add product to cart
    const cart = await db.collection(collection).insertOne(
      {
        userId: userId,
      },
      (err, response) => {
        if (err) console.log("err", err);
      }
    );
    //send userId to client
  }
};
