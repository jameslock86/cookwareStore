import clientPromise from "../../../../lib/mongodb";

export default async function getProductsInCategoryMaterialHandler(req, res) {
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
}
