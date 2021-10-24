import clientPromise from "../../../../lib/mongodb";

export default async function getProductsInCategoryMaterialHandler(req, res) {
  if (req.method === "GET") {
    const categoryMaterial = req.query.material;
    const db = await clientPromise;
    const productsInCatergoryMaterial = await db
      .db("cookwarestore")
      .collection("products")
      .find({
        categoryMaterial: categoryMaterial,
      })
      .toArray();
    res.status(200).json(productsInCatergoryMaterial);
  } else {
    res.send("Only GET request allowed");
  }
}
