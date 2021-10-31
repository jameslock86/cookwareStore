//endpoint to get, update, or delete a product
//http://localhost:3000/api/products/productId
import formidable from "formidable";
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
const collection = "products";
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

    const { productId } = req.query;
    if (productId.length === 24) {
      const id = ObjectId(productId);
      const product = await db.collection(collection).findOne({
        _id: id,
      });
      res.status(200).json(product);
    } else {
      res.send("Product does not exist");
    }
  } catch (err) {
    console.log("err", err);
  }
};


//data received from the client-side must be in form-data format
const updateProduct = async (req, res, db) => {
  try {
    console.log("req", req.method);
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads/products";
    form.keepExtensions = true;
    form.multiples = true;
    console.log("form", form);
    // everything above works til it gets here
    // something is not allowing access inside form.parse
    form.parse(req, async (err, fields, files) => {
      console.log("inside");
      if (err) console.log("err in form parser", err);
      // const { productId } = req.query;
      // const id = ObjectId(productId);

      // const updateProduct = await db.collection("products").updateOne(
      //   {
      //     _id: id,
      //   },
      //   {
      //     $set: { price: fields.price },
      //   }
      // );
      res.send("inside form parse");
    });
    res.send("ok");
  } catch (err) {
    console.log("err", err);
  }
}

const deleteProduct = async (req, res, db) => {
  try {
    const { productId } = req.query;
    const id = ObjectId(productId);
    const deletedProduct = await db.collection(collection).findOneAndDelete({
      _id: id,
    });
    res.status(200).json({ productDeleted: deletedProduct.value });
  } catch (err) {
    console.log("err", err);
  }
};
