import formidable from "formidable";
import clientPromise from "../../../lib/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./public/uploads";
    form.keepExtensions = true;
    form.mulitples = true;
    form.parse(req, async (err, fields, files) => {
      const { title, price, description, categorymaterial, categorytype } =
        fields;
      if (err) console.log("err from form parsing", err);
      //add information to database
      const db = await clientPromise;
      await db
        .db("cookwarestore")
        .collection("products")
        .insertOne(
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
  }
};
