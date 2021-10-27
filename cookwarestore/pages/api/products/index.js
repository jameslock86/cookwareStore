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

//post product is in this file cause [productId].js api is only to access products that already exist
//if post products was in [productId].js, you will need to include an id, which doesn't exist, to the endpoint
const postProduct = async (req, res, db) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads/products";
  form.keepExtensions = true;
  form.mulitples = true;
  form.parse(req, async (err, fields, files) => {
    const { title, price, description, category } = fields;
    if (err) console.log("err from parsing form-data", err);
    //check if product exist by product title
    const { productExist, productInDB } = await checkIfProductExist(db, title);
    // console.log("productIndb", productInDB);
    if (productExist) {
      res.json({ msg: "product already exist", productInDB });
    } else {
      //add product to database
      await db.collection("products").insertOne(
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
};

/* helper functions */

const checkIfProductExist = async (db, title) => {
  const product = await db.collection("products").findOne({ title });

  if (product) {
    return { productExist: true, productInDB: product };
  } else {
    return { productExist: false, productInDB: null };
  }
};
