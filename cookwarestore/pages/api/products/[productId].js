import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
export default async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connectToDatabase();
    const { productId } = req.query;

    if (productId.length === 24) {
      const id = ObjectId(productId);
      const product = await db.collection("products").findOne({
        _id: id,
      });
      res.status(200).json(product);
    } else {
      res.send("Product does not exist");
    }
  } else {
    res.send("Must be a GET request");
  }
};
