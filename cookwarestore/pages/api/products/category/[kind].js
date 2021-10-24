import clientPromise from "../../../../lib/mongodb";
//endpoint to access category material
//http://localhost:3000/api/products/category/material?material=frypan
//endpoint to acces category type
//http://localhost:3000/api/products/category/type?type=frypan

export default async function getProductsByCategoryHandler(req, res) {
  if (req.method === "GET") {
    console.log("query", req.query);
    const { kind } = req.query;
    const db = await clientPromise;
    //to access category material
    if (kind === "material") {
      const productsInCatergoryMaterial = await db
        .db("cookwarestore")
        .collection("products")
        .find({
          "category.material": req.query.material,
        })
        .toArray();
      res.status(200).json(productsInCatergoryMaterial);
    } else {
      res.send("incorrect URL for materials category");
    }
    //to access category type
    if (kind === "type") {
      const productsInCatergoryType = await db
        .db("cookwarestore")
        .collection("products")
        .find({
          "category.type": req.query.type,
        })
        .toArray();
      res.status(200).json(productsInCatergoryType);
    } else {
      res.send("incorrect URL for types category");
    }
  } else {
    res.send("Only GET request allowed");
  }
}
