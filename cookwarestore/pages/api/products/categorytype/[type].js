import clientPromise from "../../../../lib/mongodb";

export default async function getProductsInCategoryTypeHandler(req, res) {
  if (req.method === "GET") {
    const categoryType = req.query.type;
    const db = await clientPromise;
    const productsInCatergoryType = await db
      .db("cookwarestore")
      .collection("products")
      .find({
        categoryType: categoryType,
      })
      .toArray();
    res.status(200).json(productsInCatergoryType);
  } else {
    res.send("Only GET request allowed");
  }
}
