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
const addUser = (req, res, db) => {
  //note: Make sure to send user's _id to client-side for cart to be added for user.
  //check if user Exist
  if (req.body.userId) {
    //locate user in users collection database
    //add fields to existing user
  } else {
    //create a new user
  }
};

/* Helper Functions */
