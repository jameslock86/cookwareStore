import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const db = await clientPromise;
  const products = await db
    .db("cookwarestore")
    .collection("products")
    .find({})
    .toArray();
  res.status(200).json(products);
};
