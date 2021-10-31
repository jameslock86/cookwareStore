import { connectToDatabase } from "../../../lib/mongodb";

export default async function usersHandler(req, res) {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "GET":
      return getUsers(req, res, db);
    case "POST":
      return addUser(req, res, db);
    default:
      return "GET or POST request only";
  }
}

const getUsers = (req, res, db) => {};
const addUser = (req, res, db) => {};

/* Helper Functions */

const checkIfUserExist = async (db, userId) => {
  const user = await db.collection("user").findOne({ _id: userId });
  if (user) {
    return { userExist: true, userInDB: user };
  } else {
    return { userExist: false, userInDB: null };
  }
};
