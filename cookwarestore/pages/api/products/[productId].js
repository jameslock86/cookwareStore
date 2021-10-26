import { connectToDatabase } from "../../../lib/mongodb";

export default async (req, res) => {
  const { db } = connectToDatabase();
  console.log(req.query);
  const { prodcutId } = req.query;

  const product = db
    .collection("products")
    .find({
      _id: prodcutId,
    })
    .toArray();

  res.status(200).json(product);
  //get product by id
};
