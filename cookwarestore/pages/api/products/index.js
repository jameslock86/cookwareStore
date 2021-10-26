import formidable from "formidable";
import { connectToDatabase } from "../../../lib/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function productsHandler(req, res) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET":
      return getProducts(req, res, db);
    case "POST":
      return postProduct(req, res, db);
    default:
      return "GET or POST request only";
  }
}

const getProducts = async (req, res, db) => {
  const products = await db.collection("products").find({}).toArray();
  res.status(200).json(products);
};

const postProduct = async (req, res, db) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads/products";
  form.keepExtensions = true;
  form.mulitples = true;
  form.parse(req, async (err, fields, files) => {
    const { title, price, description, categorymaterial, categorytype } =
      fields;
    if (err) console.log("err from form parsing", err);
    //add information to database

    await db.collection("products").insertOne(
      {
        title: title,
        price: price,
        description: description,
        image: files,
        categorytype: categorytype,
        categorymaterial: categorymaterial,
      },
      (err, response) => {
        if (err) res.json({ err: err });
        res.status(200).json(response.ops);
      }
    );
  });
};
