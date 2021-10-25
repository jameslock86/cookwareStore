// import clientPromise from "../../../../lib/mongodb";
const { connectToDatabase } = require("../../../../lib/mongodb");
//endpoint to access category material
//http://localhost:3000/api/products/category/material?material=steel
//endpoint to acces category type
//http://localhost:3000/api/products/category/type?type=frypan

export default async function getProductsByCategoryHandler(req, res) {
  if (req.method === "GET") {
    const { kind } = req.query;
    let { db } = await connectToDatabase();
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
    //to access category type
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
}
//file name must be [...kind].js
//http://localhost:3000/api/products/category/material/steel
//http://localhost:3000/api/products/category/type/fypan
// export default async function getProductsByCategoryHandler(req, res) {
//   if (req.method === "GET") {
//     console.log("query", req.query);
//     const { kind } = req.query;
//     const db = await clientPromise;
//     //to access category material
//     if (kind[0] === "material") {
//       const productsInCatergoryMaterial = await db
//         .db("cookwarestore")
//         .collection("products")
//         .find({
//           "category.material": kind[1],
//         })
//         .toArray();
//       res.status(200).json(productsInCatergoryMaterial);
//     }
//     //to access category type
//     if (kind[0] === "type") {
//       const productsInCatergoryType = await db
//         .db("cookwarestore")
//         .collection("products")
//         .find({
//           "category.type": kind[1],
//         })
//         .toArray();
//       res.status(200).json(productsInCatergoryType);
//     }
//   } else {
//     res.send("Only GET request allowed");
//   }
// }
