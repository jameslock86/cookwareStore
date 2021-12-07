//endpoint to access category material
//http://localhost:3000/api/products/category/material?material=steel
//endpoint to acces category type
//http://localhost:3000/api/products/category/type?type=frypan

const { connectToDatabase } = require("../../../../lib/mongodb");

export default async (req, res) => {
  try {
    if (req.method === "GET") {
      const { kind } = req.query;
      let { db } = await connectToDatabase();
      //to access category by material
      if (kind === "material") {
        const { material } = req.query;
        const ProductsByCatergoryMaterial = await db
          .collection("products")
          .find({
            "category.material": material,
          })
          .toArray();
        res.status(200).json(ProductsByCatergoryMaterial);
      }
      //to access category by type
      if (kind === "type") {
        const { type } = req.query;
        const filterProductsByCatergoryType = await db
          .collection("products")
          .find({
            "category.type": type,
          })
          .toArray();
        res.status(200).json(filterProductsByCatergoryType);
      }
    } else {
      res.send("Only GET request allowed");
    }
  } catch (err) {
    console.log("err", err);
  }
};
