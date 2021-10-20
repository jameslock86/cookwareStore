import clientPromise from "../../../lib/mongodb";

export default async function getProductCategoriesHandler(req, res) {
  const db = await clientPromise;
  const products = await db
    .db("cookwarestore")
    .collection("products")
    .distinct("category")
    .then((categories) => {
      if (categories) {
        res.status(200).json(categories);
      }
      res.status(404).send("Categories Not Found");
    });
}
