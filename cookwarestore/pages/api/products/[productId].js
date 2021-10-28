//endpoint to get, update, or delete a product
//http://localhost:3000/api/products/productId

import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "GET":
      return getProduct(req, res, db);
    case "PATCH":
      return updateProduct(req, res, db);
    case "DELETE":
      return deleteProduct(req, res, db);
  }
};

const getProduct = async (req, res, db) => {
  try {
    if (req.method === "GET") {
      const { productId } = req.query;
      if (productId.length === 24) {
        const id = ObjectId(productId);
        const product = await db.collection("products").findOne({
          _id: id,
        });
        res.status(200).json(product);
      } else {
        res.send("Product does not exist");
      }
    } else {
      res.send("Must be a GET request");
    }
  } catch (err) {
    console.log("err", err);
  }
};

const updateProduct = async (req, res, db) => {
  //receive data in form-data format
};
const deleteProduct = async (req, res, db) => {
  try {
    const { productId } = req.query;
    const id = ObjectId(productId);
    const deletedProduct = await db.collection("products").findOneAndDelete({
      _id: id,
    });
    res.status(200).json({ productDeleted: deletedProduct.value });
  } catch (err) {
    console.log("err", err);
  }
};
