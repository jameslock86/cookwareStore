import { connectToDatabase } from "../../../lib/mongodb";

export default async function usersHandler(req, res) {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "GET":
      return getUser(req, res, db);
    case "POST":
      return addUser(req, res, db);
    case "PATCH":
      return updateUser(req, res, db);
    case "DELETE":
      return deleteUser(req, res, db);
    default:
      return "GET or POST request only";
  }
}

const getUser = (req, res, db) => {};

const addUser = (req, res, db) => {};

const updateUser = (req, res, db) => {
  // const updateProduct = await db.collection("products").updateOne(
  //   {
  //     _id: id,
  //   },
  //   {
  //     $set: { price: fields.price },
  //   }
  // );
};

const deleteUser = (req, res, db) => {};
