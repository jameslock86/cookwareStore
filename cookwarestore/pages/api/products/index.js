//endpoint to access or add products
//http://localhost:3000/api/products

import formidable from "formidable";
import { connectToDatabase } from "../../../lib/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};
const collection = "products";

export default async function productsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET":
      return getProducts(req, res, db);
    case "POST":
      return addProduct(req, res, db);
    default:
      return "GET or POST request only";
  }
}

const getProducts = async (req, res, db) => {
  try {
    const products = await db.collection(collection).find({}).toArray();
    res.status(200).json(products);
  } catch (err) {
    console.log("err", err);
  }
};

//post product is in this file cause [productId].js api is only to access products that already exist
//if post products was in [productId].js, you will need to include an id, which doesn't exist, to the endpoint
const addProduct = async (req, res, db) => {
  //receive data in form-data format
  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads/products";
    form.keepExtensions = true;
    form.mulitples = true;
    form.parse(req, async (err, fields, files) => {
      const { title, price, description, category } = fields;
      if (err) console.log("err from parsing form-data", err);
      //check if product exist by product title
      const { productExist, productInDB } = await checkIfProductExist(
        db,
        title
      );
      if (productExist) {
        res.json({ msg: "product already exist", productInDB });
      } else {
        //add product to database
        await db.collection(collection).insertOne(
          {
            title: title,
            price: price,
            description: description,
            image: files,
            category: category,
          },
          (err, response) => {
            if (err) res.json({ err: err });
            res.status(200).json({
              msg: "product has been added",
              productAdded: response.ops,
            });
          }
        );
      }
    });
  } catch (err) {
    console.log("err", err);
  }
};

/* helper functions */

const checkIfProductExist = async (db, title) => {
  const product = await db.collection(collection).findOne({ title });
  if (product) {
    return { productExist: true, productInDB: product };
  } else {
    return { productExist: false, productInDB: null };
  }
};
