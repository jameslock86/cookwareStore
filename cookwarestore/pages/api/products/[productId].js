import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  console.log(req.query);
  res.send("ok");
  //get product by id
};
