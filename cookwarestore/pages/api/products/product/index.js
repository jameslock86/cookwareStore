import clientPromise from "../../../../lib/mongodb";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      return addProduct(req, res);
    case "GET":
      return getProduct(req, res);
    default:
      return 'must be a "GET" or "POST" request';
  }
};

const addProduct = async (req, res) => {
  console.log("req.body", req.body);
  const form = new formidable.IncomingForm({ hash: false });
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;
  form.mulitples = true;
  form.parse(req, (err, fields, files) => {
    if (err) res.json({ err: err });
    console.log("files", files);
  });

  // const { title, price, description, categorytype, categorymaterial } = req.body;

  //add product to database
  // const db = await clientPromise;
  // await db
  //   .db("cookwarestore")
  //   .collection("products")
  //   .insertOne(
  //     {
  //       title: title,
  //       price: price,
  //       description: description,
  //       image: data,
  //       categorytype: categorytype,
  //       categorymaterial: categorymaterial,
  //     },
  //     (err, res) => {
  //       if (err) console.log("err", err);
  //       console.log("res", res);
  //     }
  //   );
  // res.status(200).json();
};

const getProduct = () => {};
