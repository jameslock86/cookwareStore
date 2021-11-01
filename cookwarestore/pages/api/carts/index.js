import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

const collection = "carts";
export default async function cartsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "POST":
      return addCart(req, res, db);
    default:
      return "POST request only";
  }
}

const addCart = async (req, res, db) => {
  try {
    if (req.body.userId) {
      const userId = ObjectId(req.body.userId);
      //get user's cart
      const usersCart = await db.collection(collection).findOne({ userId });
      res.json({
        msg: "Cart already exist for user. Please make a PATCH request to users cart _id ",
        usersCart,
      });
    } else {
      //create userId
      const userId = new ObjectId();
      //create cart
      await db.collection(collection).insertOne(
        {
          userId: userId,
          products: req.body.products || [],
        },
        (err, response) => {
          if (err) console.log("err", err);
          //send userId to client
          console.log("response", response.ops);
          res
            .status(200)
            .json({ msg: "cart has been added", cart: response.ops });
        }
      );

      //create user in users collection
    }
  } catch (err) {
    console.log("err", err);
  }
};

/*
*Edge Cases* 
1. If user doesn't exist create a session with user id
*/
