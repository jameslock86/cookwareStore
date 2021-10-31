import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

const collection = "carts";
export default async function cartsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "POST":
      return addCart(req, res, db);
    default:
      return "GET and POST request only";
  }
}

const addCart = (req, res, db) => {
  if (req.userId) {
    res.send(
      "A cart with this user already exist. Please make a post request to cart ID"
    );
  } else {
    //create userId
    const userId = new ObjectId();
    //create cart
    const cart = await db.collection(collection).insertOne(
      {
        userId: userId,
        products: [],
      },
      (err, response) => {
        if (err) console.log("err", err);
        //send userId to client
        console.log("response", response);
      }
    );
  }
};
