import clientPromise from "../../../lib/mongodb";

export default async function productsHandler(req, res) {
  if (req.method === "GET") {
    const db = await clientPromise;
    const products = await db
      .db("cookwarestore")
      .collection("products")
      .find({})
      .toArray();
    res.status(200).json(products);
  } else {
    res.send("Only GET request allowed");
  }
}
