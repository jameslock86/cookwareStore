//endpoint to access or add products
//http://localhost:3000/api/products
import { getProductsSL } from "../../../layers/ServiceLayer/products";
import { checkIfProductExistDAL } from "../../../layers/DataAccessLayer/products";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};
const collection = "products";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      return res.json({
        msg: "GET request only",
      });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await getProductsSL();
    res.status(200).json(products);
  } catch (err) {
    console.log("err", err.message);
  }
};

//note 1: post product is in this file cause [productId].js api is only to access products that already exist
//note 2: data received from the client-side must be in form-data format
//note 3: addProduct could not be broken down to service and data access layer due to the use of using formidable to add
//product images. Upon return values in the service layer, results in this file were undefined due to return values within
//form.parse function.
const addProduct = async (req, res, db) => {
  try {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads/products";
    form.keepExtensions = true;
    form.multiples = true;
    form.parse(req, async (err, fields, files) => {
      const { title, price, description, category } = fields;
      if (err) console.log("err from parsing form-data", err);
      //check if product exist by product title
      const productExist = await checkIfProductExistDAL(title);
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
    console.log("err", err.message);
  }
};

const updateProducts = (req, res) => {};
